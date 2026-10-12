# Deploy Sigap CRM ke VPS (Docker)

## Ringkas

Image-nya **multi-stage**: `deps` → `builder` → `runner`. Hasil akhirnya cuma berisi server Next.js standalone + aset statis + file markdown, jalan sebagai user non-root, dan tidak perlu Node/npm terpasang di VPS.

## Prasyarat VPS

- Docker Engine 24+ dan Docker Compose v2 (`docker compose version`)
- Minimal **1 GB RAM** (build Next.js butuh ~1 GB; kalau VPS 512 MB, tambahkan swap)
- Port 3000 **tidak** perlu dibuka ke internet — compose-nya bind ke `127.0.0.1` saja

## 1. Kirim project ke VPS

```bash
# dari mesin lokal
rsync -av --exclude node_modules --exclude .next --exclude .git \
  ./ user@VPS_IP:/opt/sigap-crm/
```

Atau clone dari git:

```bash
ssh user@VPS_IP
git clone <repo-url> /opt/sigap-crm
cd /opt/sigap-crm
```

## 2. Build dan jalankan

```bash
cd /opt/sigap-crm
docker compose up -d --build
```

Cek statusnya:

```bash
docker compose ps          # STATUS harus "healthy"
docker compose logs -f web
```

Tes dari dalam VPS:

```bash
curl -sS -o /dev/null -w '%{http_code}\n' http://127.0.0.1:3000/
```

## 3. Pasang reverse proxy (wajib untuk publik)

Container hanya listen di loopback, jadi trafik publik harus lewat Nginx/Caddy. Contoh Nginx:

```nginx
server {
    listen 80;
    server_name sigap.example.com;

    location / {
        proxy_pass         http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade           $http_upgrade;
        proxy_set_header   Connection        'upgrade';
        proxy_set_header   Host              $host;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Lalu TLS:

```bash
sudo certbot --nginx -d sigap.example.com
```

## 4. Update ke versi baru

```bash
cd /opt/sigap-crm
git pull                       # atau rsync ulang
docker compose up -d --build   # image lama otomatis diganti
docker image prune -f          # buang layer lama
```

Downtime hanya beberapa detik saat container ditukar. Kalau butuh nol downtime, jalankan dua service di belakang Nginx dengan `upstream` dan rolling restart.

## 5. Perintah harian

```bash
docker compose logs -f web        # lihat log
docker compose restart web        # restart
docker compose down               # hentikan
docker compose up -d              # jalankan lagi
docker compose exec web sh        # masuk ke container (debug)
```

## Catatan penting

**File markdown ikut ke image.** Route `/blog` dan `/customer` membaca `src/data/**/*.md` dari disk **saat runtime**, bukan saat build. Karena itu Dockerfile menyalin `src/data` ke image runner. Kalau kamu menambah artikel blog di VPS, kamu harus build ulang image — bukan sekadar restart container.

**Bahasa disimpan di cookie.** `next-intl` menentukan locale dari cookie `NEXT_LOCALE` (default `id`). Tidak ada state di server, jadi aman untuk di-scale ke banyak replika.

**Tidak ada database.** Aplikasi ini murni konten statis + form yang mengarah ke `/signup`, jadi tidak ada volume atau env rahasia yang dibutuhkan. Kalau nanti menambah DB atau API key, tambahkan `env_file: .env` di `docker-compose.yml`.

**Image optimization butuh `sharp`.** Next.js memakainya untuk `/_next/image`. `sharp` sudah ikut ter-trace oleh build standalone; kalau gambar tampil blank, cek log dengan `docker compose logs web`.

**Jangan commit `.env`.** `.dockerignore` sudah mengecualikannya dari build context, dan `.gitignore` dari git.
