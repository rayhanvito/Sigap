# Sigap i18n Foundation Design

## Goal

Add an i18n foundation for Indonesian and English, with Indonesian as the default locale and a visible language switcher. Existing page copy remains unchanged for now.

## Scope

- Add next-intl to the existing Next.js App Router project.
- Support locales id and en.
- Resolve the active locale from the NEXT_LOCALE cookie, falling back to id.
- Load separate id and en message files so future translation work has a stable home.
- Provide NextIntlClientProvider and set the document lang attribute from the active locale.
- Add a client-side language switcher to the desktop and mobile navigation.
- Keep current route URLs and existing navigation links unchanged.

## Explicit non-goals

- Do not translate all existing page copy yet.
- Do not move routes to /id/... and /en/... prefixes yet.
- Do not add locale-specific SEO metadata beyond the active HTML language attribute.
- Do not add a translation management service.

## Architecture

src/i18n/request.ts reads and validates NEXT_LOCALE, then loads the matching message JSON. The root layout reads the resolved locale through next-intl/server, passes request messages through NextIntlClientProvider, and sets the html lang attribute.

LocaleSwitcher is a small client component. It displays the current locale, writes a one-year NEXT_LOCALE cookie with path=/; SameSite=Lax, and calls router.refresh() so the server-rendered locale becomes active without changing the current URL.

## Failure handling

Only id and en are accepted. Missing or invalid cookie values use id. Message loading uses explicit imports for both locale files so the bundler can resolve them statically.

## Verification

- A Node contract test checks locale files, request configuration, provider wiring, and switcher behavior.
- yarn lint must finish with zero errors.
- Existing build failure in globals.css remains outside this change and is not modified by this work.
