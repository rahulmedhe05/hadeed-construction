from PIL import Image
import os, glob

out_dir = '/Applications/HADEED CONSTRUCTION/public/images/client-logos'

for f in sorted(glob.glob(os.path.join(out_dir, 'preq-logo-*'))):
    if f.endswith('.webp'):
        continue
    name = os.path.splitext(os.path.basename(f))[0]
    dst = os.path.join(out_dir, f'{name}.webp')
    img = Image.open(f).convert('RGBA')
    img.save(dst, 'webp', quality=85)
    print(f'{os.path.basename(f)} -> {name}.webp')
