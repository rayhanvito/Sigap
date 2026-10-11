import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('i18n foundation exposes id and en with id as default', async () => {
  const [idMessages, enMessages, routing, request] = await Promise.all([
    read('messages/id.json'),
    read('messages/en.json'),
    read('src/i18n/routing.ts'),
    read('src/i18n/request.ts'),
  ]);

  assert.deepEqual(Object.keys(JSON.parse(idMessages)), ['LocaleSwitcher']);
  assert.deepEqual(Object.keys(JSON.parse(enMessages)), ['LocaleSwitcher']);
  assert.match(routing, /id/);
  assert.match(routing, /en/);
  assert.match(routing, /defaultLocale.*id|id.*defaultLocale/s);
  assert.match(request, /NEXT_LOCALE/);
});

test('layout and navigation wire the provider and switcher', async () => {
  const [layout, navbar, mobileMenu, switcher] = await Promise.all([
    read('src/app/layout.tsx'),
    read('src/components/shared/navbar/Navbar.tsx'),
    read('src/components/shared/mobile-menu/MobileMenu.tsx'),
    read('src/components/shared/LocaleSwitcher.tsx'),
  ]);

  assert.match(layout, /NextIntlClientProvider/);
  assert.match(layout, /lang/);
  assert.match(navbar, /LocaleSwitcher/);
  assert.match(mobileMenu, /LocaleSwitcher/);
  assert.match(switcher, /NEXT_LOCALE/);
  assert.match(switcher, /router\.refresh/);
});
