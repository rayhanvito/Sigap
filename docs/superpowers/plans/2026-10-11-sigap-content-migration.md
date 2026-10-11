# Sigap Content Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace template Nuvexa/NextSaaS copy with the approved bilingual Sigap content while preserving the existing visual structure.

**Architecture:** Use the existing `next-intl` message files for shared navigation, metadata, and high-visibility page copy. Keep page-specific layout components, but replace their template data with Sigap-specific data. Leave factual placeholders from the content documents out of live-facing claims until they are supplied.

**Tech Stack:** Next.js 16, React 19, TypeScript, next-intl, existing Tailwind component system.

**Spec:** `docs/Sigap Konten ID.md` and `docs/Sigap Konten EN.md`

## Global Constraints

- Indonesian is the default locale; English must remain available through the existing locale switcher.
- Do not invent prices, contacts, integrations, customer names, team members, metrics, legal entity details, or testimonials.
- Do not publish `[ISI]`, `[FILL IN]`, or `[HUKUM]` markers as visible website copy.
- Privacy copy references Indonesia's PDP Law; do not add GDPR claims.
- Preserve the user's existing visual/theme work and do not touch `.next` or unrelated agent changes.

## Review Focus

- Locale switching must continue to return the correct language for the same page.
- Navigation and footer links must point only to routes that exist.
- No old Nuvexa, NextSaaS, Lorem ipsum, generic banking, or dummy proof claims remain in live page copy.
- Pricing, legal, and integration sections must not expose unresolved factual placeholders.
- Type-check and lint must remain valid after copy/data changes.

---

### Task 1: Shared brand, navigation, and metadata

**Files:**
- Modify: `messages/id.json`
- Modify: `messages/en.json`
- Modify: `src/components/shared/navbar/Navbar.tsx`
- Modify: `src/components/shared/footer/Footer.tsx`
- Modify: `src/data/navbar-data.ts`
- Modify: `src/data/footer-data.ts`
- Modify: route metadata files under `src/app/**/page.tsx`

- [ ] Replace remaining Nuvexa/NextSaaS metadata and shared template labels with Sigap copy.
- [ ] Localize visible navbar/footer labels using existing `next-intl` wiring.
- [ ] Remove or replace the `/community` footer link because the route does not exist.

### Task 2: Home and product pages

**Files:**
- Modify: `src/components/home/*`
- Modify: `src/components/shared/cta/*`
- Modify: `src/data/json/faq/faq.json`
- Modify: `src/app/features/page.tsx`
- Modify: `src/app/integration/page.tsx`
- Modify: `src/app/use-case/page.tsx`
- Modify: `src/app/pricing/page.tsx`

- [ ] Replace generic CRM, finance, banking, and Lorem ipsum copy with the approved Sigap WhatsApp CRM copy.
- [ ] Remove unsupported claims such as `50+ integrations`, fake discounts, and invented business metrics.
- [ ] Keep unresolved prices and provider-specific details out of visible cards until supplied.

### Task 3: Company, proof, resources, support, and legal copy

**Files:**
- Modify: company, customer, case-study, testimonial, blog, tutorial, documentation, FAQ, support, contact, and legal components under `src/components` and `src/app`.
- Modify: dynamic records under `src/data` only where the approved documents provide replacement structure/content.

- [ ] Replace remaining template copy with the matching sections from both content documents.
- [ ] Keep real-data pages gated by real consent/verification instead of inventing records.
- [ ] Ensure Privacy Policy references the PDP Law and does not add GDPR content.

### Task 4: Verification

- [ ] Run `tsc --noEmit`.
- [ ] Run `yarn lint` and distinguish existing warnings from new errors.
- [ ] Scan source/data for old brand names, Lorem ipsum, and unresolved visible placeholders.
- [ ] Verify route links and both message files parse correctly.

