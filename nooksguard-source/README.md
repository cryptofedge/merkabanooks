# Nooksguard catalog source material

Source: `Nooksguard_2026_Complete_Product_Catalog_Final.pdf` (99 pages, 218
embedded images, ~82.5MB — too large to commit, lives on the user's machine
at `~/Downloads/`).

- `catalog-text.txt` — full extracted text of all 99 pages (via `pypdf`),
  committed here so future sessions don't need the original PDF just to read
  specs. Page breaks are marked `===== PAGE N =====`.

## Re-extracting images

Images were NOT committed (218 files, ~68MB). To re-extract from the
original PDF:

```python
from pypdf import PdfReader
reader = PdfReader(r"<path to the PDF>")
for i, page in enumerate(reader.pages):
    for j, img in enumerate(page.images):
        with open(f"out/p{i+1:03d}_{j}_{img.name}", "wb") as f:
            f.write(img.data)
```

Requires `pip install pypdf` (pure Python, no poppler/system deps needed —
unlike `pdftoppm`/`pdfimages`, which aren't installed in this environment).

## ⚠️ Known image quality issues

Not every embedded image is cleanly Nooksguard-branded:

- **NGZ series (Compact X-Ray)** product renders (pages 4, 6, 8, 10, 12) have
  a **"FURNISH me.inc" watermark** baked into the machine's side panel
  instead of the Nooksguard logo — a stock OEM render that wasn't correctly
  rebranded before this PDF was assembled. Do not publish these as-is.
- **NGVJ150180** (page 18, tier 3/4 freight unit) shows the unbranded OEM
  model code **"VKJ-150180"** printed on the unit instead of "NGVJ-150180".
  Minor, but inconsistent with the rest of the NGVJ series.
- Other categories haven't been individually checked yet — review each
  image before wiring it into a category (see `PROGRESS.md`).

The NGVJ series' other 13 images (used for the live `/security/ngvj` page)
were spot-checked and are cleanly branded.

Recommend asking Nooksguard for corrected renders for the NGZ series, or
cropping/retouching before publishing.
