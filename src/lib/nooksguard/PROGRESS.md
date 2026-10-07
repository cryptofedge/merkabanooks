# Nooksguard Security Solutions — build progress

Full catalog has **~116 products across 14 categories**. Status below —
pick up any "pending" category by following the pattern in `ngvj.ts`.

**Live now:** `/security` (hub) + `/security/ngvj` (full, 14 products, 4 tiers)

| # | Category (slug) | Products | Status | Catalog source pages |
|---|---|---|---|---|
| 1 | Compact X-Ray Inspection (`ngz`) | 5 | ⏳ pending — **images need fixing first, see below** | 4–13 |
| 2 | NGVJ Security Screening Series (`ngvj`) | 14 | ✅ **done** | 14–20 |
| 3 | Fast CT Inspection (`ngts-ct`) | 4 | ⏳ pending | 21–28 |
| 4 | Multi-Energy X-Ray Inspection (`ngz-3825t`) | 1 | ⏳ pending | 29–32 |
| 5 | Portable X-Ray Inspection (`ngpx`) | 9 | ⏳ pending | 33–44 |
| 6 | Walk-Through Metal Detectors (`nghwt`) | 12 | ⏳ pending | 45–58 |
| 7 | Handheld Metal Detectors (`nghh`) | 16 | ⏳ pending | 59–65 |
| 8 | Millimeter Wave Body Scanners (`ngmw`) | 2 | ⏳ pending | 66–69 |
| 9 | Foot & Shoe Security Screening (`ngfs`) | 4 | ⏳ pending | 70–71 |
| 10 | Under Vehicle Surveillance Systems (`nguv`) | 13 | ⏳ pending | 72–79 |
| 11 | Security & Threat Detection (`threat-detection`) | 11 | ⏳ pending | 80–84 |
| 12 | TSCM & Counter-Surveillance (`tscm`) | 20 | ⏳ pending | 85–92 |
| 13 | Signal Jamming Solutions (`ngjm`) | 2 | ⏳ pending | 93–96 |
| 14 | Anti-Recording / Audio Protection (`audio-protection`) | 3 | ⏳ pending | 97–98 |

Page 99 is the closing compliance/contact page (no products).

## How to add a category (the pattern `ngvj.ts` already proves out)

1. Read the relevant pages from
   [`nooksguard-source/catalog-text.txt`](../../../nooksguard-source/catalog-text.txt)
   (search for `===== PAGE N =====`).
2. Re-extract images for those pages (see
   [`nooksguard-source/README.md`](../../../nooksguard-source/README.md)) —
   **view each one before using it**, this catalog has real rebranding bugs
   (see that file's "Known image quality issues" section).
3. Copy the good images into `public/nooksguard/products/<slug>.png`.
4. Create `src/lib/nooksguard/<category-slug>.ts` exporting a
   `SecurityCategory` (same shape as `ngvj.ts`) — group products into
   `tiers` the way the source PDF does (or a single tier if the category
   isn't naturally tiered).
5. In `categories.ts`: import it and replace that category's `stub(...)`
   entry with the real import, same as `ngvjCategory` is wired in now.
6. `npm run build && npm run lint`, then spot-check the page in the browser
   before committing.

## Known issue to resolve before publishing NGZ

The NGZ series (category 1) has full spec data ready to go (see source pages
4–13), but all 5 product photos have a "FURNISH me.inc" watermark baked in
instead of Nooksguard branding — don't wire those images in as-is. Either
get corrected renders from the client or crop/retouch first.
