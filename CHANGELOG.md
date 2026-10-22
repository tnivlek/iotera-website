# Changelog

All notable changes to this project are documented in this file.

This project follows Semantic Versioning: `MAJOR.MINOR.PATCH`.

- `MAJOR`: breaking changes, a complete UI redesign, or a major API upgrade.
- `MINOR`: a backward-compatible feature.
- `PATCH`: a backward-compatible fix.

`package.json` stays on the current version until a release explicitly bumps it. New work is recorded under `[Unreleased]` first, then moved into a version section when that release is cut.

## [Unreleased]

## [0.1.0] - 2026-10-21

Baseline for the current production site. There were no earlier version tags.

### Added

- Iotera marketing site on Next.js, including Home, Products, About, Contact, Privacy Policy, and Terms & Conditions.
- Mobile computer section with the Urovo DT50 product page.
- iData T5 product page, with highlights, accessories, specifications, and a Product Brochure download.
- Service and Repair page, linked from the homepage product section.

### Changed

- DT50 hero uses a light gray background, the Omnissa logo, and certification marks at a consistent visual size.
- Header, navigation, branding, and page transitions updated for desktop and mobile.
- DT50 uses the same global header as the rest of the site.

### Fixed

- Contact stays visible in the top navigation on small screens.
- `/products/mobile-computer/idata` shows the T5 page.
- React 18 compatibility, production image settings, and the `date-fns` / `react-day-picker` dependency updates.
