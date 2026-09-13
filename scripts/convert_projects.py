from PIL import Image
import os

src = "/Applications/HADEED CONSTRUCTION/public/images/projects"

conversions = {
    "dewa-solar-innovation-0.png": "dewa-solar-innovation.webp",
    "ict-logistics-park-0.png": "ict-logistics-park.webp",
    "dj53-project-0.png": "dj53-taqa-jebel-ali.webp",
    "j199-project-0.png": "j199-adcan-pharma.webp",
    "j128-project-0.png": "j218-shahama-substation.webp",
    "j129-project-0.png": "j219-madinat-zayed-substation.webp",
}

for png_name, webp_name in conversions.items():
    png_path = os.path.join(src, png_name)
    webp_path = os.path.join(src, webp_name)
    img = Image.open(png_path)
    img.save(webp_path, "WEBP", quality=85)
    kb = os.path.getsize(webp_path) / 1024
    print(f"{png_name} ({img.size}) -> {webp_name} ({kb:.0f} KB)")

# Clean up all PNGs from extraction
for f in os.listdir(src):
    if f.endswith(".png") and any(f.startswith(p) for p in ["dewa-", "ict-", "dj53-", "j199-", "j128-", "j129-"]):
        os.remove(os.path.join(src, f))
        print(f"  Removed {f}")

print("\nDone!")
