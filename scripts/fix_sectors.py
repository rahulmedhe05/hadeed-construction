"""
Replace sector images with real construction project photos from PPT extractions.
Each mapped to the correct sector based on the slide content.
"""
import shutil, os

sectors_dir = "/Applications/HADEED CONSTRUCTION/public/images/sectors"
projects_dir = "/Applications/HADEED CONSTRUCTION/public/images/projects"
equip_dir = "/Applications/HADEED CONSTRUCTION/public/images/equipment"
clients_dir = "/Applications/HADEED CONSTRUCTION/public/images/clients"

# Mapping: sector filename -> best matching real project image
# Based on PPT slide content analysis:
mappings = {
    # Industrial: Industrial Cable Factory (520KB, large factory interior)
    "industrial.jpg": os.path.join(projects_dir, "ppt-project-12.jpg"),
    # Logistics: ICT Logistics Park (248KB, warehouse/logistics facility)
    "logistics.jpg": os.path.join(projects_dir, "ppt-project-01.jpg"),
    # Pharma: ADCAN Pharmaceutical Factory (197KB)
    "pharma.jpg": os.path.join(projects_dir, "ppt-project-13.jpg"),
    # Education: American Community School (58KB)
    "education.jpg": os.path.join(projects_dir, "ppt-project-40.jpg"),
    # Oil & Gas: Al Ghaith Oilfield Offices & Workshop (205KB)
    "oil-gas.jpg": os.path.join(projects_dir, "ppt-project-30.jpg"),
    # Commercial: Sheikh Hamdan Warehouse/Mall M34
    "commercial.jpg": os.path.join(projects_dir, "ppt-project-41.jpg"),
    # Residential: Tawazun Residential Complex
    "residential.jpg": os.path.join(projects_dir, "ppt-project-37.jpg"),
    # Solar/Renewable: DEWA Solar Innovation Centre
    "solar.jpg": os.path.join(projects_dir, "ppt-project-05.jpg"),
    # Villas: Use quality-1 image (Kimera Warehouses project)
    "villas.jpg": os.path.join(projects_dir, "quality-1.jpg"),
    # Military: CMW Communication Tower
    "military.jpg": os.path.join(projects_dir, "ppt-project-35.jpg"),
    # Aviation: Aircraft Hangar interior
    "aviation.jpg": os.path.join(projects_dir, "ppt-project-18.jpg"),
    # Ports/Marine: Abu Dhabi Ship Building Vessel Outfit
    "ports.jpg": os.path.join(projects_dir, "ppt-project-32.jpg"),
    # Free Zone: Al-Taaqa at Jebel Ali (351KB)
    "freezone.jpg": os.path.join(projects_dir, "ppt-project-08.jpg"),
    # Infrastructure: Business Hub Offices & Warehouse (269KB)
    "infrastructure.jpg": os.path.join(projects_dir, "ppt-project-04.jpg"),
}

for sector_name, src_path in mappings.items():
    dst = os.path.join(sectors_dir, sector_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dst)
        print(f"OK: {os.path.basename(src_path)} -> {sector_name} ({os.path.getsize(src_path):,} bytes)")
    else:
        print(f"NOT FOUND: {src_path}")

print("\nAll sector images replaced with real project photos!")
