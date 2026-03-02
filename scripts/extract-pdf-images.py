import fitz
import os

pdf_path = "public/HEC LLC - Prequalification.pdf"
output_dir = "public/images/projects"
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f"PDF has {len(doc)} pages")

img_count = 0
for page_num in range(len(doc)):
    page = doc[page_num]
    images = page.get_images(full=True)
    print(f"Page {page_num + 1}: {len(images)} images")
    
    for img_idx, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        if base_image:
            image_bytes = base_image["image"]
            ext = base_image["ext"]
            width = base_image.get("width", 0)
            height = base_image.get("height", 0)
            
            # Only save images larger than 100x100 (skip small icons/logos)
            if width > 100 and height > 100:
                img_count += 1
                filename = f"project-{img_count:02d}.{ext}"
                filepath = os.path.join(output_dir, filename)
                with open(filepath, "wb") as f:
                    f.write(image_bytes)
                print(f"  Saved: {filename} ({width}x{height}, {len(image_bytes)//1024}KB)")

# Also render pages as images for backgrounds
pages_dir = "public/images/pdf-pages"
os.makedirs(pages_dir, exist_ok=True)

for page_num in range(min(len(doc), 20)):
    page = doc[page_num]
    # Render at 2x resolution
    mat = fitz.Matrix(2, 2)
    pix = page.get_pixmap(matrix=mat)
    filename = f"page-{page_num + 1:02d}.jpg"
    filepath = os.path.join(pages_dir, filename)
    pix.save(filepath)
    print(f"Rendered page {page_num + 1} as {filename} ({pix.width}x{pix.height})")

doc.close()
print(f"\nTotal extracted images: {img_count}")
print(f"Total rendered pages: {min(len(doc), 20)}")
