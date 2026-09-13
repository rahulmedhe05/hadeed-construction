import fitz  # pymupdf
import os

doc = fitz.open('/Users/rahulmedhe/Downloads/HEC LLC - Prequalification.pdf')
out_dir = '/Applications/HADEED CONSTRUCTION/public/images/client-logos'

# Page 25 (0-indexed = page 24)
page = doc[24]
images = page.get_images(full=True)
print(f'Page 25: found {len(images)} images')

img_count = 0
for img_idx, img in enumerate(images):
    xref = img[0]
    base_image = doc.extract_image(xref)
    image_bytes = base_image['image']
    ext = base_image['ext']
    w = base_image['width']
    h = base_image['height']
    size_kb = len(image_bytes) / 1024

    print(f'  Image {img_idx+1}: {w}x{h}, {size_kb:.0f}KB, ext={ext}')

    # Skip tiny images and the HEC logo (usually first/small)
    if size_kb > 2 and w > 50 and h > 50:
        img_count += 1
        filename = f'preq-logo-{img_count:02d}.{ext}'
        filepath = os.path.join(out_dir, filename)
        with open(filepath, 'wb') as f:
            f.write(image_bytes)
        print(f'    -> saved {filename}')

print(f'\nTotal client logos saved: {img_count}')
