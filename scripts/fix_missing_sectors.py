"""Fix the two failed sector images - military and ports."""
import urllib.request
import os
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

sectors_dir = "/Applications/HADEED CONSTRUCTION/public/images/sectors"

fixes = {
    "military.jpg": "https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?w=800&h=600&fit=crop&q=80",
    "ports.jpg": "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop&q=80",
}

for filename, url in fixes.items():
    filepath = os.path.join(sectors_dir, filename)
    try:
        print(f"Downloading {filename}...")
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, context=ctx) as response:
            data = response.read()
            with open(filepath, "wb") as f:
                f.write(data)
            print(f"  OK: {filename} ({len(data):,} bytes)")
    except Exception as e:
        print(f"  FAILED: {filename} - {e}")
