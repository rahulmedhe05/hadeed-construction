"""
Copy the best large project images for hero slider use.
Selected based on size (quality) and subject matter variety.
"""
import shutil
import os

hero_dir = "/Applications/HADEED CONSTRUCTION/public/images/hero"
projects_dir = "/Applications/HADEED CONSTRUCTION/public/images/projects"
intro_dir = "/Applications/HADEED CONSTRUCTION/public/images"

# Best hero images - large, diverse subjects:
# 1. Equipment yard (1.4MB - huge, crisp) from Brief PPT Slide 9
# 2. Zamil Steel building from Brief PPT Slide 3 (intro-3-1, 548KB)  
# 3. Al-Taaqa warehouse from Brief PPT Slide 21 (ppt-project-08, 351KB)
# 4. Industrial Cable Factory from Brief PPT Slide 23 (ppt-project-12, 520KB)

mappings = [
    # Source -> hero filename
    (os.path.join(projects_dir, "intro-2-1.jpg"), os.path.join(hero_dir, "hero-1.jpg")),    # Sheikh Hamdan warehouse (396KB)
    (os.path.join(projects_dir, "intro-3-1.jpg"), os.path.join(hero_dir, "hero-2.jpg")),    # Zamil Steel building (548KB)
    (os.path.join(projects_dir, "ppt-project-08.jpg"), os.path.join(hero_dir, "hero-3.jpg")),  # Al-Taaqa warehouse (351KB)
    (os.path.join(projects_dir, "ppt-project-12.jpg"), os.path.join(hero_dir, "hero-4.jpg")),  # Industrial Cable (520KB)
]

for src, dst in mappings:
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f"Copied {os.path.basename(src)} -> {os.path.basename(dst)} ({os.path.getsize(src)} bytes)")
    else:
        print(f"NOT FOUND: {src}")

print("Hero images updated!")
