import shutil
import os

gallery_dir = "/Applications/HADEED CONSTRUCTION/public/images/gallery"
projects_dir = "/Applications/HADEED CONSTRUCTION/public/images/projects"

mappings = [
    ("ppt-project-01.jpg", "gallery-1.jpg"),
    ("ppt-project-03.jpg", "gallery-2.jpg"),
    ("ppt-project-08.jpg", "gallery-3.jpg"),
    ("ppt-project-13.jpg", "gallery-4.jpg"),
    ("ppt-project-18.jpg", "gallery-5.jpg"),
    ("ppt-project-25.jpg", "gallery-6.jpg"),
    ("ppt-project-35.jpg", "gallery-7.jpg"),
    ("ppt-project-43.jpg", "gallery-8.jpg"),
]

for src_name, dst_name in mappings:
    src = os.path.join(projects_dir, src_name)
    dst = os.path.join(gallery_dir, dst_name)
    shutil.copy2(src, dst)
    print(f"Copied {src_name} -> {dst_name}")

print("Gallery images replaced!")
