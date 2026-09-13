import shutil
import os
from PIL import Image

src_dir = "/Applications/HADEED CONSTRUCTION/public/images/projects"
dst_dir = "/Applications/HADEED CONSTRUCTION/public/images/client-logos"

# Clear old wrong logos
for f in os.listdir(dst_dir):
    fp = os.path.join(dst_dir, f)
    if os.path.isfile(fp):
        os.remove(fp)
        print(f"Removed old: {f}")

# Logo images identified from project extraction
logo_files = [
    # Brief PPT logos (225x225 square logos)
    "project-03.jpeg",
    "project-65.png",
    "project-66.png",
    "project-67.png",
    "project-68.png",
    "project-70.png",
    # Experience PPT logos (small wide logo shapes)
    "exp-project-07.png",
    "exp-project-09.png",
    "exp-project-17.png",
    "exp-project-30.png",
    "exp-project-32.png",
    "exp-project-36.png",
    "exp-project-45.png",
    "exp-project-48.png",
    "exp-project-49.png",
    "exp-project-61.png",
    "exp-project-63.png",
    "exp-project-67.png",
    "exp-project-72.png",
    "exp-project-74.png",
    "exp-project-79.png",
    "exp-project-80.png",
    "exp-project-82.png",
]

count = 0
for i, fname in enumerate(logo_files, 1):
    src = os.path.join(src_dir, fname)
    if os.path.exists(src):
        ext = os.path.splitext(fname)[1]
        dst = os.path.join(dst_dir, f"client-logo-{i:02d}{ext}")
        shutil.copy2(src, dst)
        img = Image.open(dst)
        print(f"Copied: {fname} -> client-logo-{i:02d}{ext} ({img.size})")
        count += 1
    else:
        print(f"NOT FOUND: {fname}")

print(f"\nTotal logos copied: {count}")
