# Sigap Content Pruning Design

Date: 2026-10-11

## Goal

Remove template content that is not part of Sigap's current product or market scope, so users cannot discover or access those pages through the app.

## Scope

Delete the routes and page-specific implementation for:

- Press
- Whitepaper, including detail pages and source markdown
- Glossary
- Brandkit
- Our Manifesto
- Why Choose Us
- Services, including service detail pages and source markdown
- Process
- Affiliates / Affiliate Process
- Affiliate Policy
- Referral Program
- Analytics
- Download
- GDPR

Remove every navigation and footer entry pointing to those routes. Prune imports, exports, icon references, interfaces, and data files that become unused as a direct result of the deletion. Do not remove generic shared UI or unrelated product copy merely because it contains a word such as “analytics” or “services”.

## Privacy Policy

Keep the Privacy Policy route. Replace template-specific EEA/GDPR wording with a general Indonesian privacy-rights section and add a concise reference to UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP). This is a product-copy update only and must not present itself as legal advice or claim a completed legal review.

## Navigation behavior

The remaining navbar and mobile menu must not import or link to the removed routes. The footer must retain only the legal and product pages that remain in scope; in particular, it must not link to GDPR or Affiliate Policy.

## Verification

After the change:

1. Search the source tree for removed route paths and navigation labels.
2. Run the repository lint command.
3. Run the production build command.

The result is complete only when the removed routes have no source references and lint/build finish successfully.

## Additional cleanup: Refund Policy, Security, and Changelog

The same full-removal rule applies to these three areas:

- Delete the Refund Policy route and its page-specific component. Remove its mobile/footer navigation entries and the Terms button that links to `/refund-policy`; keep the refund terms already written inside Terms & Conditions.
- Delete the Security route and its page-specific components. Remove its mobile navigation entry and the “More on Security” link; keep unrelated security copy and certification text that does not link to the deleted page.
- Delete the Changelog route, components, and JSON data. Remove the now-empty desktop Insights menu and its icon, plus the Changelog tab and component in FAQ so the label is not exposed elsewhere.

Remove only icons and styles made unused by these deletions. Verify that no deleted paths or standalone labels remain in `src`, then rerun lint and the production build.
