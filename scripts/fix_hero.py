"""Replace hero images with ONLY real construction project photos - no certificates."""
import shutil, os

hero_dir = "/Applications/HADEED CONSTRUCTION/public/images/hero"
projects_dir = "/Applications/HADEED CONSTRUCTION/public/images/projects"
equip_dir = "/Applications/HADEED CONSTRUCTION/public/images/equipment"

mappings = [
    # 1. Equipment yard panorama (1.4MB - cranes, machinery - sharpest)
    (os.path.join(equip_dir, "equipment-1.jpg"), os.path.join(hero_dir, "hero-1.jpg")),
    # 2. Al-Taaqa Warehouse at Jebel Ali Airport (351KB - real building)
    (os.path.join(projects_dir, "ppt-project-08.jpg"), os.path.join(hero_dir, "hero-2.jpg")),
    # 3. Aviation Hangar inside view (343KB - massive steel structure)
    (os.path.join(projects_dir, "ppt-project-19.jpg"), os.path.join(hero_dir, "hero-3.jpg")),
    # 4. Business Hub Offices & Warehouse (269KB - completed building)
    (os.path.join(projects_dir, "ppt-project-04.jpg"), os.path.join(hero_dir, "hero-4.jpg")),
]

for src, dst in mappings:
    shutil.copy2(src, dst)
    print(f"OK: {os.path.basename(src)} -> {os.path.basename(dst)} ({os.path.getsize(src):,} bytes)")

print("Done - all hero images are now real construction photos!")
