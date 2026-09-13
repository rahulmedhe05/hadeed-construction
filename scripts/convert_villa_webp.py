from PIL import Image
import os

out_dir = '/Applications/HADEED CONSTRUCTION/public/images/projects'

for i in range(1, 7):
    for ext in ['png', 'jpeg']:
        src = os.path.join(out_dir, f'villa-{i:02d}.{ext}')
        if os.path.exists(src):
            dst = os.path.join(out_dir, f'villa-{i:02d}.webp')
            img = Image.open(src)
            img.save(dst, 'webp', quality=82)
            src_kb = os.path.getsize(src) / 1024
            dst_kb = os.path.getsize(dst) / 1024
            print(f'villa-{i:02d}.{ext} ({src_kb:.0f}KB) -> villa-{i:02d}.webp ({dst_kb:.0f}KB)')
            break
