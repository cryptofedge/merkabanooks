-- Run this once after schema.sql, in the Supabase SQL editor. Populates the
-- catalog with the same data currently baked into src/lib/categories.ts.
-- Image URLs point at the site's own /public files, which is fine until an
-- admin uploads a replacement (then image_url becomes a Supabase Storage URL).

insert into categories (slug, label, description, icon, sort_order) values
  ('dining', 'Dining', 'Dining sets and seating built for daily institutional use or residential comfort.', 'UtensilsCrossed', 1),
  ('living-room', 'Living Room', 'Seating and lounge furniture for common areas, offices, and residential units.', 'Sofa', 2),
  ('kids-room', 'Kids Room', 'Durable, safety-rated furniture for children''s and family programs.', 'Baby', 3),
  ('bedroom', 'Bedroom', 'Bedroom packages sized for dorms, transitional units, and residential suites.', 'BedDouble', 4),
  ('transitional-housing', 'Transitional Housing', 'Complete single-occupancy packages for shelters and transitional programs.', 'Home', 5),
  ('commercial', 'Commercial', 'Office and common-area furniture built for daily institutional throughput.', 'Building2', 6),
  ('electronics', 'Electronics', 'Essential electronics for common areas, offices, and residential units.', 'Tv', 7),
  ('linens', 'Linens', 'Bulk linen packages rated for high-turnover institutional laundering.', 'Shirt', 8),
  ('housewares', 'Housewares', 'Kitchen and household essentials for move-in-ready units.', 'Lamp', 9),
  ('security', 'Security', 'Door hardware and unit-level security fixtures for institutional facilities.', 'Lock', 10),
  ('janitorial', 'Janitorial', 'Facility-wide cleaning supplies and maintenance consumables.', 'SprayCan', 11),
  ('clearance', 'Clearance', 'Discounted overstock and open-box furniture, while supplies last.', 'Tag', 12)
on conflict (slug) do nothing;

insert into products (category_slug, slug, name, price, description, image_url, shape, accent_hex, shape_variant) values
  ('dining', '5-piece-wood-dining-set', '5-Piece Wood Dining Set', 649, 'Solid wood table with four matching chairs.', '/products/items/5-piece-wood-dining-set.jpg', 'table', '#6b4226', null),
  ('dining', 'counter-height-bistro-table', 'Counter-Height Bistro Table', 329, 'Compact table for common areas and break rooms.', '/products/items/counter-height-bistro-table.jpg', 'table', '#8a5a34', '{"scale":[1,0.6,1]}'),
  ('dining', 'stackable-banquet-chair', 'Stackable Banquet Chair (Set of 4)', 219, 'Commercial-grade, stacks for easy storage.', '/products/items/stackable-banquet-chair.jpg', 'chair', '#23262b', null),
  ('dining', 'commercial-round-dining-table', 'Commercial Round Dining Table – 48in', 389, 'Laminate top rated for high-traffic dining halls.', '/products/items/commercial-round-dining-table.jpg', 'table', '#4b5563', '{"round":true}'),

  ('living-room', '3-seat-sectional', '3-Seat Sectional with Reversible Chaise', 899, 'Performance fabric, stain resistant.', '/products/items/3-seat-sectional.jpg', 'sofa', '#6b7280', null),
  ('living-room', 'track-arm-sofa', 'Track-Arm Upholstered Sofa', 549, 'Clean-lined sofa for lounges and lobbies.', '/products/items/track-arm-sofa.jpg', 'sofa', '#374151', null),
  ('living-room', 'accent-chair', 'Accent Chair – Performance Fabric', 279, 'Durable upholstery rated for daily use.', '/products/items/accent-chair.jpg', 'chair', '#c98a3e', null),
  ('living-room', 'coffee-table', 'Coffee Table – Solid Wood Top', 199, 'Scratch-resistant finish, steel base.', '/products/items/coffee-table.jpg', 'table', '#6b4226', '{"scale":[0.9,0.22,0.9]}'),

  ('kids-room', 'twin-bunk-bed', 'Twin Bunk Bed – Metal Frame', 389, 'Safety-rail certified, space-saving design.', '/products/items/twin-bunk-bed.jpg', 'bunkBed', '#4b5563', null),
  ('kids-room', 'kids-study-desk-chair', 'Kids'' Study Desk & Chair Set', 159, 'Adjustable height, rounded edges.', '/products/items/kids-study-desk-chair.jpg', 'desk', '#e0a35c', null),
  ('kids-room', '5-drawer-dresser', '5-Drawer Dresser – Soft Close', 249, 'Anti-tip hardware included.', '/products/items/5-drawer-dresser.jpg', 'dresser', '#8a5a34', '{"scale":[0.9,1.1,0.5]}'),
  ('kids-room', 'foldable-storage-bench', 'Foldable Storage Bench', 89, 'Dual-purpose seating and toy storage.', '/products/items/foldable-storage-bench.jpg', 'bench', '#c98a3e', null),

  ('bedroom', 'twin-metal-bed-frame', 'Twin Metal Bed Frame', 99, 'No box spring required, easy assembly.', '/products/items/twin-metal-bed-frame.jpg', 'bed', '#8a93a3', '{"scale":[1.1,1,1]}'),
  ('bedroom', 'queen-platform-bed-frame', 'Queen Platform Bed Frame', 219, 'Reinforced steel slats, 700lb rated.', '/products/items/queen-platform-bed-frame.jpg', 'bed', '#374151', '{"scale":[1.5,1,1]}'),
  ('bedroom', '6-drawer-dresser', '6-Drawer Dresser', 329, 'Full-extension drawers, solid wood legs.', '/products/items/6-drawer-dresser.jpg', 'dresser', '#6b4226', '{"scale":[1.2,1.0,0.55]}'),
  ('bedroom', 'nightstand-usb', 'Nightstand with USB Charging', 79, 'Built-in outlets for modern residents.', '/products/items/nightstand-usb.jpg', 'dresser', '#8a5a34', '{"scale":[0.5,0.55,0.45]}'),

  ('transitional-housing', 'starter-room-package', 'Starter Room Package (Bed, Desk, Storage)', 540, 'Everything needed for one resident, bundled.', '/products/items/starter-room-package.jpg', 'bed', '#c98a3e', '{"scale":[1.1,1,1]}'),
  ('transitional-housing', 'twin-xl-mattress', 'Twin XL Mattress – Fire-Code Certified', 179, 'Meets institutional fire-safety standards.', '/products/items/twin-xl-mattress.jpg', 'bed', '#e0a35c', '{"headboard":false,"scale":[1.05,1,1]}'),
  ('transitional-housing', 'compact-wardrobe', 'Compact Wardrobe Unit', 149, 'Fits tight footprints, no assembly tools needed.', '/products/items/compact-wardrobe.jpg', 'dresser', '#6b4226', '{"scale":[0.7,1.4,0.5]}'),
  ('transitional-housing', 'move-in-kit', 'All-in-One Move-In Kit', 320, 'Linens, housewares, and bedroom basics in one order.', '/products/items/move-in-kit.jpg', 'stack', '#8a5a34', null),

  ('commercial', 'task-chair', 'Task Chair – Adjustable Lumbar', 189, '8-hour rated, breathable mesh back.', '/products/items/task-chair.jpg', 'chair', '#23262b', null),
  ('commercial', 'height-adjustable-desk', 'Height-Adjustable Desk', 449, 'Electric sit-stand base, laminate top.', '/products/items/height-adjustable-desk.jpg', 'desk', '#4b5563', null),
  ('commercial', 'lateral-file-cabinet', '4-Drawer Lateral File Cabinet', 259, 'Lockable, fire-resistant rated.', '/products/items/lateral-file-cabinet.jpg', 'dresser', '#374151', '{"scale":[1.0,1.3,0.55]}'),
  ('commercial', 'reception-bench', 'Reception Bench – 3 Seat', 399, 'Waiting-area seating, commercial-grade frame.', '/products/items/reception-bench.jpg', 'bench', '#6b7280', '{"scale":[1.3,1,1]}'),

  ('electronics', 'led-television', '32in LED Television', 179, 'HD display for common rooms and units.', '/products/items/led-television.jpg', 'applianceFlat', '#16181c', null),
  ('electronics', 'microwave', 'Microwave – 0.9 cu ft', 89, 'Compact countertop unit.', '/products/items/microwave.jpg', 'applianceCube', '#23262b', null),
  ('electronics', 'mini-refrigerator', 'Mini Refrigerator – 3.2 cu ft', 139, 'Energy Star rated, quiet operation.', '/products/items/mini-refrigerator.jpg', 'applianceTall', '#8a93a3', '{"scale":[0.75,1.2,0.7]}'),
  ('electronics', 'washer-dryer-combo', 'All-in-One Washer/Dryer Combo', 599, 'Space-saving unit for shared facilities.', '/products/items/washer-dryer-combo.jpg', 'applianceTall', '#d4d8df', '{"scale":[0.85,1.5,0.75]}'),

  ('linens', 'twin-linen-set', 'Twin Linen Set (Sheets, Pillow, Blanket)', 38, 'Commercial-wash rated fabric.', '/products/items/twin-linen-set.jpg', 'stack', '#c98a3e', null),
  ('linens', 'queen-linen-set', 'Queen Linen Set', 52, 'Includes fitted sheet, flat sheet, pillowcases.', '/products/items/queen-linen-set.jpg', 'stack', '#6b7280', null),
  ('linens', 'bath-towel-bundle', 'Bath Towel Bundle (Set of 6)', 29, 'Quick-dry, high-absorbency cotton blend.', '/products/items/bath-towel-bundle.jpg', 'stack', '#e0a35c', null),
  ('linens', 'mattress-protector', 'Mattress Protector – Waterproof', 19, 'Noiseless, vinyl-free barrier layer.', '/products/items/mattress-protector.jpg', 'stack', '#8a93a3', null),

  ('housewares', 'cookware-set', '12-Piece Cookware Set', 59, 'Non-stick, dishwasher safe.', '/products/items/cookware-set.jpg', 'stack', '#374151', null),
  ('housewares', 'dinnerware-set', 'Dinnerware Set – Service for 4', 34, 'Stackable, chip-resistant stoneware.', '/products/items/dinnerware-set.jpg', 'stack', '#f4f1ec', null),
  ('housewares', 'trash-can', 'Trash Can – 13 Gallon', 22, 'Step-open lid, odor-sealing.', '/products/items/trash-can.jpg', 'bin', '#4b5563', null),
  ('housewares', 'move-in-essentials-kit', 'Move-In Essentials Kit', 75, 'Cookware, dinnerware, and basics bundled.', '/products/items/move-in-essentials-kit.jpg', 'stack', '#c98a3e', null),

  ('security', 'keyless-entry-lock', 'Keyless Entry Door Lock', 129, 'Keypad entry, audit-trail logging.', '/products/items/keyless-entry-lock.jpg', 'panel', '#23262b', null),
  ('security', 'security-door-lockbox', 'Security Door Lockbox', 69, 'Heavy-gauge steel, pry-resistant.', '/products/items/security-door-lockbox.jpg', 'panel', '#4b5563', null),
  ('security', 'window-security-film', 'Window Security Film Kit', 45, 'Shatter-resistant, covers one standard window.', '/products/items/window-security-film.jpg', 'panel', '#8a93a3', null),
  ('security', 'smoke-co-detector', 'Unit Smoke & CO Detector', 34, 'Dual-sensor, 10-year battery.', '/products/items/smoke-co-detector.jpg', 'panel', '#f4f1ec', '{"round":true}'),

  ('janitorial', 'cleaning-cart', 'Commercial Cleaning Cart', 189, 'Multi-shelf, rolls through standard doorways.', '/products/items/cleaning-cart.jpg', 'cart', '#4b5563', null),
  ('janitorial', 'janitorial-supply-kit', 'Janitorial Supply Starter Kit', 99, 'Core supplies for one facility wing.', '/products/items/janitorial-supply-kit.jpg', 'stack', '#6b7280', null),
  ('janitorial', 'mop-bucket-system', 'Microfiber Mop & Bucket System', 54, 'Wringer bucket, washable mop heads.', '/products/items/mop-bucket-system.jpg', 'cart', '#c98a3e', '{"scale":[0.7,0.7,0.7]}'),
  ('janitorial', 'bulk-trash-liners', 'Bulk Trash Liners (Case of 200)', 39, 'Heavy-duty, tear-resistant.', '/products/items/bulk-trash-liners.jpg', 'stack', '#23262b', null),

  ('clearance', 'overstock-dining-chair', 'Overstock Dining Chair (Assorted)', 49, 'Mixed finishes, limited quantities.', '/products/items/overstock-dining-chair.jpg', 'chair', '#8a5a34', null),
  ('clearance', 'open-box-sectional', 'Open-Box Sectional – As-Is', 399, 'Minor cosmetic wear, fully functional.', '/products/items/open-box-sectional.jpg', 'sofa', '#6b7280', null),
  ('clearance', 'clearance-dresser', 'Clearance Dresser – Floor Model', 179, 'Display unit, small surface marks.', '/products/items/clearance-dresser.jpg', 'dresser', '#6b4226', '{"scale":[1.0,1.0,0.55]}'),
  ('clearance', 'lamp-clearance-bundle', 'Assorted Lamp Clearance Bundle', 25, 'Mixed styles while supplies last.', '/products/items/lamp-clearance-bundle.jpg', 'lamp', '#e0a35c', null)
on conflict (category_slug, slug) do nothing;
