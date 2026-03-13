import urllib.request, ssl
from PIL import Image

ctx = ssl.create_default_context()

urls = [
    "https://companieslogo.com/img/orig/DEWAA.DU-7b0e73c7.png",
    "https://cdn.worldvectorlogo.com/logos/dewa.svg",
]

downloaded = False
for url in urls:
    try:
        req = urllib.request.Request(url, headers={
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"
        })
        with urllib.request.urlopen(req, context=ctx, timeout=10) as resp:
            data = resp.read()
            with open("public/images/client-logos/dewa-logo-raw.png", "wb") as f:
                f.write(data)
            print(f"Downloaded {len(data)} bytes from {url}")
            downloaded = True
            break
    except Exception as e:
        print(f"Failed {url}: {e}")

if downloaded:
    img = Image.open("public/images/client-logos/dewa-logo-raw.png").convert("RGBA")
    img.thumbnail((200, 200), Image.LANCZOS)
    img.save("public/images/client-logos/dewa-logo.webp", "WEBP", quality=90)
    print(f"Saved dewa-logo.webp ({img.size[0]}x{img.size[1]})")
    import os
    os.remove("public/images/client-logos/dewa-logo-raw.png")
else:
    print("Could not download DEWA logo from any source")
