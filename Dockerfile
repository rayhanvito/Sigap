# syntax=docker/dockerfile:1

# ---------- deps: install node_modules only ----------
FROM node:22-bookworm-slim AS deps
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json yarn.lock ./
# --ignore-scripts: the "postinstall" hook runs folder-rename.ts, which needs
# src/app to exist and exits(1) without it. This repo already tracks the
# dynamic route folders as [slug], so that rename is a no-op here anyway.
RUN yarn install --frozen-lockfile --ignore-scripts --non-interactive

# ---------- builder: compile the Next.js app ----------
FROM node:22-bookworm-slim AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

# ---------- runner: minimal production image ----------
FROM node:22-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN groupadd --system --gid 1001 nodejs \
 && useradd --system --uid 1001 --gid nodejs nextjs

# Standalone bundle: server.js + traced node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# Static assets are NOT part of the standalone bundle
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
# Markdown content is read from disk at runtime by getMarkDownData/getMarkDownContent
# using paths relative to the server cwd, so it must ship with the image.
COPY --from=builder --chown=nextjs:nodejs /app/src/data ./src/data

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)+'/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "server.js"]
