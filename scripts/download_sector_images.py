"""
Download high-quality, relevant images from Unsplash for each sector.
Using Unsplash Source API which provides direct image URLs.
"""
import urllib.request
import os
import ssl

# Disable SSL verification for simple downloads
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

sectors_dir = "/Applications/HADEED CONSTRUCTION/public/images/sectors"
os.makedirs(sectors_dir, exist_ok=True)

# Each sector mapped to a good Unsplash search query and size
# Using unsplash source API: https://source.unsplash.com/800x600/?query
sectors = {
    "industrial.jpg": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80",
    "logistics.jpg": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80",
    "pharma.jpg": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop&q=80",
    "education.jpg": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&q=80",
    "oil-gas.jpg": "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&h=600&fit=crop&q=80",
    "commercial.jpg": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80",
    "residential.jpg": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&q=80",
    "solar.jpg": "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&q=80",
    "villas.jpg": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop&q=80",
    "military.jpg": "https://images.unsplash.com/photo-1580983218765-94e8fac107e1?w=800&h=600&fit=crop&q=80",
    "aviation.jpg": "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop&q=80",
    "ports.jpg": "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&h=600&fit=crop&q=80",
    "freezone.jpg": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&q=80",
    "infrastructure.jpg": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop&q=80",
}

for filename, url in sectors.items():
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

print("\nDone!")
