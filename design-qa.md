# Design QA

- date: 2026-09-10
- target: `/media/[id]` guest profile and external links
- reference: selected third guest-detail design concept
- verified example: `/media/asunika-20260723`

## Checks

- PASS: Existing Yazirusi header, colors, typography, spacing, and radio content hierarchy are preserved.
- PASS: Guest image, profile copy, and external links form a clear three-column desktop composition.
- PASS: External destinations are clearly labeled as Instagram, official website, or service links.
- PASS: Existing URLs are read from `guest.links`; no destination URL was rewritten.
- PASS: Radio and guest posts return to `/radio`; other media posts return to `/media`.
- PASS: At mobile breakpoint, the profile and external-link area becomes a single vertical flow.
- PASS: External links use visible focusable anchors, open in a new tab, and include safe `rel` attributes.
- PASS: `npx tsc --noEmit` and `npm run build` complete successfully.

## Notes

- Repository-wide `npm run lint` also scans archived `.next` and `dist` build output under `_archive`, producing unrelated pre-existing errors.
- Targeted lint for the changed TSX file reports zero errors and two existing `no-img-element` warnings.

final result: passed
