# Category product images

One representative photo per category (`<slug>.jpg`), shared across that
category's product cards. Sourced from [Unsplash](https://unsplash.com) under
the [Unsplash License](https://unsplash.com/license) — free for commercial
use, no attribution required.

Each product currently reuses its category's photo rather than having a
unique image, to keep the catalog looking real without needing a photo per
SKU. To give a product its own photo, add a file here and reference it
directly in `src/lib/categories.ts` / the category page instead of the
shared `/products/<slug>.jpg` path.
