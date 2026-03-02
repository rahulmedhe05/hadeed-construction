"""
Replace hero images with the best, sharpest project photos from PPTs.
Picking the largest files (= highest quality/resolution).
"""
import shutil
import os

hero_dir = "/Applications/HADEED CONSTRUCTION/public/images/hero"
base = "/Applications/HADEED CONSTRUCTION/public/images"

# Best picks by size/quality and visual variety:
mappings = [
    # 1. Equipment yard panorama - 1.4MB, the sharpest image (cranes, machinery) 
    (os.path.join(base, "equipment/equipment-1.jpg"), os.path.join(hero_dir, "hero-1.jpg")),
    # 2. Zamil Steel building construction - 548KB (large steel structure)
    (os.path.join(base, "projects/intro-3-1.jpg"), os.path.join(hero_dir, "hero-2.jpg")),
    # 3. Industrial Cable Factory - 520KB (interior industrial)
    (os.path.join(base, "projects/ppt-project-12.jpg"), os.path.join(hero_dir, "hero-3.jpg")),
    # 4. Company Profile cover from PPT - 381KB (professional branding image)
    (os.path.join(hero_dir, "hero-ppt-2.jpg"), os.path.join(hero_dir, "hero-4.jpg")),
]

for src, dst in mappings:
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f"OK: {os.path.basename(src)} -> {os.path.basename(dst)} ({os.path.getsize(src):,} bytes)")
    else:
        print(f"NOT FOUND: {src}")

print("\nHero images updated with best quality photos!")
