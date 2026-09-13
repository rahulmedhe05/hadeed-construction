import fitz  # pymupdf
import os

doc = fitz.open('/Users/rahulmedhe/Downloads/Hadeed_Emirates Villa Brochure.pdf')
out_dir = '/Applications/HADEED CONSTRUCTION/public/images/projects'

img_count = 0
for page_idx in range(len(doc)):
    page = doc[page_idx]
    images = page.get_images(full=True)
    for img_idx, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image['image']
        ext = base_image['ext']
        w = base_image['width']
        h = base_image['height']
        size_kb = len(image_bytes) / 1024

        # Only save large images (skip tiny icons/logos)
        if size_kb > 10 and w > 100 and h > 100:
            img_count += 1
            filename = f'villa-{img_count:02d}.{ext}'
            filepath = os.path.join(out_dir, filename)
            with open(filepath, 'wb') as f:
                f.write(image_bytes)
            print(f'Page {page_idx+1}: saved {filename} ({w}x{h}, {size_kb:.0f}KB)')
        else:
            print(f'Page {page_idx+1}: skipped small image ({w}x{h}, {size_kb:.0f}KB)')

print(f'\nTotal villa images saved: {img_count}')
