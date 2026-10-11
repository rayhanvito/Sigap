# Sigap Content Pruning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Remove non-Sigap template pages and navigation while keeping the Privacy Policy route aligned to the Indonesian market and UU PDP.

**Architecture:** Delete route-local pages, components, and data for the explicitly excluded features. Update the central mobile/footer data and desktop menu definitions so the remaining navigation only points to live routes, then prune now-unused menu icons and types. Keep the Privacy Policy page and replace its EEA/GDPR-specific section with an Indonesia/UU PDP reference.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, ESLint, Next production build.

## Global Constraints

- Delete Press, Whitepaper, Glossary, Brandkit, Our Manifesto, Why Choose Us, Services, Process, Affiliates / Affiliate Process, Affiliate Policy, Referral Program, Analytics, Download, and GDPR routes and page-specific implementation.
- Remove every navigation and footer entry pointing to the deleted routes.
- Keep Privacy Policy and reference UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP); do not add or retain EEA/GDPR-specific policy wording.
- Do not remove generic shared UI or unrelated copy only because it contains words such as “analytics” or “services”.
- Do not add dependencies or introduce redirects for the deleted routes.

---

### Task 1: Delete excluded route pages and route-local assets

**Files:**
- Delete: `src/app/press/page.tsx`
- Delete: `src/app/whitepaper/page.tsx`
- Delete: `src/app/whitepaper/[slug]/page.tsx`
- Delete: `src/app/glossary/page.tsx`
- Delete: `src/app/brandkit/page.tsx`
- Delete: `src/app/our-manifesto/page.tsx`
- Delete: `src/app/why-choose-us/page.tsx`
- Delete: `src/app/services/page.tsx`
- Delete: `src/app/services/[slug]/page.tsx`
- Delete: `src/app/process/page.tsx`
- Delete: `src/app/affiliates/page.tsx`
- Delete: `src/app/affiliate-policy/page.tsx`
- Delete: `src/app/referral-program/page.tsx`
- Delete: `src/app/analytics/page.tsx`
- Delete: `src/app/download/page.tsx`
- Delete: `src/app/gdpr/page.tsx`
- Delete: `src/components/press/`
- Delete: `src/components/white-paper/`
- Delete: `src/components/whitepaper-details/`
- Delete: `src/components/glossary/`
- Delete: `src/components/brand-kit/`
- Delete: `src/components/our-manifesto/`
- Delete: `src/components/why-choose-us/`
- Delete: `src/components/services/`
- Delete: `src/components/service-details/`
- Delete: `src/components/process/`
- Delete: `src/components/affiliates/`
- Delete: `src/components/affiliate-policy/`
- Delete: `src/components/referral-program/`
- Delete: `src/components/analytics/`
- Delete: `src/components/download/`
- Delete: `src/components/gdpr/`
- Delete: `src/data/whitepaper/`
- Delete: `src/data/services/`
- Delete: `src/data/json/glossary/glossary.json`

**Interfaces:**
- Consumes: Existing route imports and page-local data only.
- Produces: No live route or page-local import for any excluded feature.

- [x] **Step 1: Remove the listed route, component, and data files.**

  Use explicit paths from this task. Do not delete shared assets or unrelated data folders.

- [x] **Step 2: Confirm the route directories are gone.**

  Run:

  ```powershell
  $removed = 'press','whitepaper','glossary','brandkit','our-manifesto','why-choose-us','services','process','affiliates','affiliate-policy','referral-program','analytics','download','gdpr'
  $removed | ForEach-Object { if (Test-Path "src/app/$_") { throw "Route still exists: $_" } }
  ```

  Expected: no output and exit code `0`.

---

### Task 2: Remove excluded entries from all navigation data and menus

**Files:**
- Modify: `src/data/navbar-data.ts`
- Modify: `src/data/footer-data.ts`
- Modify: `src/components/shared/navbar/EngageMenu.tsx`
- Modify: `src/components/shared/navbar/ExploreMenu.tsx`
- Modify: `src/components/shared/navbar/InsightsMenu.tsx`

**Interfaces:**
- Consumes: Remaining `MobileMenuGroup`, footer link, and menu item types already defined in the project.
- Produces: Mobile, desktop, and footer navigation arrays containing only live routes.

- [x] **Step 1: Remove excluded mobile menu items from `mobileMenuData`.**

  Remove the entries whose ids are `services`, `our-manifesto`, `why-choose-us`, `process`, `analytics`, `whitepaper`, `brandkit`, `download`, `glossary`, `referral-program`, `affiliate`, `affiliate-policy`, and `gdpr`. Keep the surrounding groups and all remaining live links unchanged.

- [x] **Step 2: Remove excluded footer entries from both footer data sources.**

  In `src/data/navbar-data.ts` and `src/data/footer-data.ts`, remove only `GDPR Compliance` and `Affiliate Policy` from `Legal Policies`. Do not remove Privacy Policy, Terms & Conditions, or Refund Policy.

- [x] **Step 3: Remove excluded desktop menu items.**

  In `EngageMenu.tsx`, remove the `Services` object from `engageLinks`. In `ExploreMenu.tsx`, remove `Process` and `Press` from the Product list and change the Product CTA from `/services` to the remaining product destination `/features`. In `InsightsMenu.tsx`, replace the imports and array entries for Affiliate, Affiliate Policy, Analytics, Whitepaper, and Glossary with the remaining `Changelog` entry only.

- [x] **Step 4: Check navigation source for deleted paths.**

  Run:

  ```powershell
  rg -n -i --glob '!node_modules/**' "/(press|whitepaper|glossary|brandkit|our-manifesto|why-choose-us|services|process|affiliates|affiliate-policy|referral-program|analytics|download|gdpr)" src/data src/components/shared
  ```

  Expected: no output. Mentions of generic words in unrelated prose are not part of this check.

---

### Task 3: Prune menu icons, exports, and types made unused by deletion

**Files:**
- Modify: `src/icons/menu-icon/index.tsx`
- Modify: `src/icons/index.tsx` only if the deleted Download page was its last consumer
- Modify: `src/interface/index.ts` only if deleted page types were their last consumers

**Interfaces:**
- Consumes: Import usage after Tasks 1–2.
- Produces: TypeScript modules with no deleted-feature-only exports or imports.

- [x] **Step 1: Re-scan all deleted-feature symbol names.**

  Run:

  ```powershell
  rg -n "(AnalyticsIcon|AnalyticsIconV2|BrandKitIcon|DownloadIcon|GDPRIcon|GlossaryIcon|ManifestoIcon|PressIcon|ReferralProgramIcon|AffiliatePolicyIcon|AffiliateIcon|ServiceIcon|WhitePaperIcon|WhitePaperIconV2|IWhitePaper)" src
  ```

- [x] **Step 2: Remove only symbols with no remaining consumer.**

  Delete the matching icon function definitions and bottom export entries from `src/icons/menu-icon/index.tsx` when the scan shows only the definition/export remains. Remove the `DownloadIcon` from `src/icons/index.tsx` only if no non-deleted component imports it. Remove `IWhitePaper` from `src/interface/index.ts` only if no remaining source file imports it.

- [x] **Step 3: Type-check the touched modules through lint/build.**

  Run:

  ```powershell
  yarn lint
  ```

  Expected: exit code `0` with no unresolved import or unused-symbol errors.

---

### Task 4: Align Privacy Policy copy with Indonesia and UU PDP

**Files:**
- Modify: `src/components/privacy/PrivacyContent.tsx`

**Interfaces:**
- Consumes: Existing Privacy Policy layout and shared data sections.
- Produces: A still-renderable Privacy Policy page that references Indonesian privacy law without a GDPR page or EEA-only rights claim.

- [x] **Step 1: Keep the privacy page’s existing layout and non-legal product copy unchanged.**

  Do not perform a partial site-wide rebrand in this cleanup. Limit the privacy edit to the legal wording in Step 2 and keep the existing layout, form structure, organization references, and site URL unchanged unless a later Sigap rebrand task defines their canonical values.

- [x] **Step 2: Replace the EEA-only rights section.**

  Change the `rightsSection` description from “If you are a resident of the European Economic Area (EEA):” to a general Indonesian data-subject rights description, and add a concise sentence in the policy introduction or rights section stating that the policy refers to `UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)`. Do not claim legal certification or include GDPR terminology in the user-facing policy.

- [x] **Step 3: Verify the page copy does not retain prohibited legal wording.**

  Run:

  ```powershell
  rg -n -i "GDPR|European Economic Area|EEA" src/components/privacy src/app/privacy-policy
  ```

  Expected: no output.

---

### Task 5: Run full verification and review the final diff

**Files:**
- Verify: all files changed by Tasks 1–4

**Interfaces:**
- Consumes: Final source tree after deletion and navigation/copy updates.
- Produces: A buildable project with no deleted routes or references.

- [x] **Step 1: Search for removed route paths and labels across source.**

  Run:

  ```powershell
  rg -n -i --glob '!node_modules/**' --glob '!*lock*' "(/press|/whitepaper|/glossary|/brandkit|/our-manifesto|/why-choose-us|/services|/process|/affiliates|/affiliate-policy|/referral-program|/analytics|/download|/gdpr|Press|Whitepaper|Glossary|Brandkit|Manifesto|Why Choose Us|Affiliate Policy|Referral Program|GDPR)" src
  ```

  Expected: no route/navigation/template-policy matches. Generic prose matches for “analytics” or “services” must be reviewed and retained when unrelated to deleted pages.

- [x] **Step 2: Run lint.**

  Run `yarn lint`.

  Expected: exit code `0`.

- [x] **Step 3: Run the production build.**

  Run `yarn build`.

  Expected: exit code `0`; Next.js generates the remaining routes without unresolved imports.

- [x] **Step 4: Inspect the final file status and diff.**

  Run:

  ```powershell
  git status --short
  git diff --stat
  ```

  If Git metadata is still unavailable, use:

  ```powershell
  Get-ChildItem -Recurse -File src/app,src/components,src/data | Select-Object FullName
  ```

  Confirm only the requested deletions, navigation changes, privacy copy, and planning/spec documents are present.

---

### Task 6: Delete Refund Policy, Security, and Changelog content

**Files:**
- Delete: `src/app/refund-policy/page.tsx`
- Delete: `src/app/security/page.tsx`
- Delete: `src/app/changelog/page.tsx`
- Delete: `src/components/refund-policy/RefundPolicyContent.tsx`
- Delete: `src/components/security-compliance/Content.tsx`
- Delete: `src/components/security-compliance/Hero.tsx`
- Delete: `src/components/change-log/Card.tsx`
- Delete: `src/components/change-log/Content.tsx`
- Delete: `src/components/change-log/Hero.tsx`
- Delete: `src/components/change-log/TOC.tsx`
- Delete: `src/data/json/changelog/changelog.json`
- Delete: `src/components/faq/ChangelogTab.tsx`
- Modify: `src/data/navbar-data.ts`
- Modify: `src/data/footer-data.ts`
- Modify: `src/components/terms-conditions/TermsConditionContent.tsx`
- Modify: `src/components/customer/CTA.tsx`
- Modify: `src/components/faq/FaqTabContent.tsx`
- Modify: `src/components/faq/FaqTabList.tsx`
- Modify: `src/components/shared/navbar/Navbar.tsx`
- Delete: `src/components/shared/navbar/InsightsMenu.tsx`
- Modify: `src/icons/menu-icon/index.tsx`
- Modify: `src/styles/common.css`

**Interfaces:**
- Consumes: Existing route-local pages, navigation data, FAQ tabs, and shared links.
- Produces: No Refund Policy, Security, or Changelog routes, labels, or links in the live source tree.

- [ ] **Step 1: Delete the three route trees and page-specific support files.**

  Delete the exact files listed above for the three routes, their components, changelog JSON data, and the FAQ `ChangelogTab.tsx` component. Do not delete unrelated security prose or the refund clause inside Terms & Conditions.

- [ ] **Step 2: Remove navigation and dependent links.**

  Remove `refund-policy` and `security` from `mobileMenuData`, and remove the Refund Policy link from both footer data arrays. Delete the Terms button whose href is `/refund-policy`, while keeping the numbered refund-policy paragraph. In `customer/CTA.tsx`, keep “We protect your data.” and the certification list, but remove the `/security` link and the unused `Link` import.

- [ ] **Step 3: Remove the empty Insights menu and Changelog FAQ tab.**

  Delete the `InsightsMenu` import and its dropdown `<li>` block from `Navbar.tsx`. Remove the `InsightsMenu.tsx` file because Changelog was its only remaining item. In `FaqTabContent.tsx`, remove the `ChangelogTab` import and data item, then renumber the remaining Terms item to id `3`. In `FaqTabList.tsx`, remove the desktop and mobile Changelog tabs and renumber Terms to index `2`.

- [ ] **Step 4: Prune now-unused icon/style symbols.**

  Remove `ChangeLogIcon` and `RefundPolicyIcon` from `src/icons/menu-icon/index.tsx` when the source scan shows they are no longer imported. Remove `SecurityIcon` only when it has no remaining consumer. Remove `.changelog` from the selector in `src/styles/common.css`; retain `.refund-policy` only if any remaining source uses that class, otherwise remove it too.

- [ ] **Step 5: Verify the added deletions before full checks.**

  Run:

  ```powershell
  rg -n -i '/(refund-policy|security|changelog)(/|$)|\b(Refund Policy|Security|Changelog)\b' src
  ```

  Expected: no route/navigation/page-label matches. Generic words such as “security” in unrelated product or career copy may remain only when they do not identify the deleted page.

- [ ] **Step 6: Run lint and production build.**

  Run `yarn lint` and then `yarn build`.

  Expected: both exit with code `0`; lint may retain the existing warnings in `folder-rename.ts`, but no errors or unresolved imports may appear.

