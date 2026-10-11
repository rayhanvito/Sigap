# Sigap i18n Foundation Implementation Plan

> For agentic workers: implement this plan task-by-task with a fresh verification after each task. This repository has no Git metadata, so do not create commits.

**Goal:** Add Indonesian/English i18n infrastructure and a working language switcher without changing existing URLs or translating all existing content.

**Architecture:** Use next-intl request configuration with a validated NEXT_LOCALE cookie and explicit id/en message imports. Keep the current App Router paths unchanged, provide messages through NextIntlClientProvider, set the root html lang attribute, and render a client switcher in desktop and mobile navigation.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, next-intl, Node built-in test runner.

## Global Constraints

- Supported locales are id and en.
- The default locale is id.
- Existing route URLs and links remain unchanged.
- Existing page copy is not translated in this phase.
- Invalid or missing locale cookies fall back to id.
- Do not modify the unrelated globals.css build error.

---

### Task 1: Add the contract test first

**Files:**
- Create: tests/i18n-foundation.test.mjs

**Interfaces:**
- The test checks the files and contracts produced by later tasks.

- [x] Step 1: Create the failing contract test

Create a Node built-in test module that reads messages/id.json, messages/en.json, src/i18n/routing.ts, src/i18n/request.ts, src/app/layout.tsx, src/components/shared/navbar/Navbar.tsx, src/components/shared/mobile-menu/MobileMenu.tsx, and src/components/shared/LocaleSwitcher.tsx. Assert that both JSON files expose only LocaleSwitcher, routing contains id, en, and defaultLocale id, request contains NEXT_LOCALE, layout contains NextIntlClientProvider and lang, both navigation files contain LocaleSwitcher, and the switcher contains NEXT_LOCALE and router.refresh.

- [x] Step 2: Run the test and confirm the expected failure

Run: node --test tests/i18n-foundation.test.mjs

Expected: FAIL because the message, i18n, provider, and switcher files do not exist yet.

### Task 2: Install and configure next-intl

**Files:**
- Modify: package.json
- Modify: yarn.lock
- Modify: next.config.ts
- Create: src/i18n/routing.ts
- Create: src/i18n/request.ts
- Create: messages/id.json
- Create: messages/en.json

**Interfaces:**
- routing.ts exports the supported locale type, locale list, default locale, and validation helper.
- request.ts exports the next-intl request configuration.
- Both message files expose a LocaleSwitcher namespace with label and option labels.

- [x] Step 1: Install the dependency

Run: yarn add next-intl

Expected: package.json and yarn.lock include next-intl; the command exits 0.

- [x] Step 2: Add locale constants and messages

Define locales as ['id', 'en'] as const, define the Locale type from that tuple, set defaultLocale to id, and export an isLocale type guard. Use the same LocaleSwitcher keys in both JSON files: label, id, and en. Use Bahasa as the Indonesian label and Inggris as the Indonesian label for en; use Language, Indonesia, and English in the English file.

- [x] Step 3: Add request-scoped cookie loading

Implement getRequestConfig so it reads NEXT_LOCALE with cookies(), validates it with isLocale, falls back to defaultLocale, and loads messages through explicit id and en imports. Return both locale and messages.

- [x] Step 4: Wrap the config with createNextIntlPlugin

Keep all existing nextConfig fields unchanged and export withNextIntl(nextConfig).

- [x] Step 5: Run the focused contract test

Run: node --test tests/i18n-foundation.test.mjs

Expected: The locale configuration assertions pass; the provider/switcher assertions remain failing until Task 3.

### Task 3: Wire the provider and language switcher

**Files:**
- Modify: src/app/layout.tsx
- Create: src/components/shared/LocaleSwitcher.tsx
- Modify: src/components/shared/navbar/Navbar.tsx
- Modify: src/components/shared/mobile-menu/MobileMenu.tsx

**Interfaces:**
- LocaleSwitcher is a client component with no required props.
- It reads the active locale using next-intl, writes NEXT_LOCALE for one year with path=/ and SameSite=Lax, then calls router.refresh().

- [x] Step 1: Make the root layout async and expose the active locale

Read the locale with getLocale from next-intl/server, set html lang to that value, and wrap the existing AppContextProvider tree with NextIntlClientProvider. Preserve the existing metadata, providers, Navbar, Footer, and Suspense order.

- [x] Step 2: Implement the minimal switcher

Render a labelled select with id and en options. Use useLocale and useTranslations from next-intl, useRouter from next/navigation, and update the cookie on change before refreshing.

- [x] Step 3: Place the switcher in desktop and mobile navigation

Render LocaleSwitcher beside the desktop Get started button and near the top of the mobile menu. Do not change existing route hrefs or menu data.

- [x] Step 4: Run the contract test

Run: node --test tests/i18n-foundation.test.mjs

Expected: PASS with two passing tests.

### Task 4: Verify the implementation

**Files:**
- Modify: docs/superpowers/plans/2026-10-11-sigap-i18n-foundation.md

- [x] Step 1: Run the focused contract test again

Run: node --test tests/i18n-foundation.test.mjs

Expected: PASS.

- [x] Step 2: Run lint

Run: yarn lint

Expected: exit 0 with no errors. Existing warnings in folder-rename.ts may remain.

- [x] Step 3: Check the current build status without modifying the unrelated CSS

Run: yarn build

Expected: If the known globals.css url(...) failure remains, report it as pre-existing and leave that file unchanged. If the build reaches a different i18n error, fix only the i18n files and rerun.

- [x] Step 4: Record the verification result in this plan

The focused test, lint, and TypeScript check passed. yarn build was attempted but stopped on the pre-existing concurrent .next/Turbopack ENOENT failure; no unrelated build files were modified.
