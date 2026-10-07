import {
  Baby,
  BedDouble,
  Building2,
  Home,
  Lamp,
  Lock,
  Shirt,
  Sofa,
  SprayCan,
  Tag,
  Tv,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export interface Product {
  name: string;
  price: number;
  description: string;
}

export interface Category {
  slug: string;
  label: string;
  icon: LucideIcon;
  description: string;
  products: Product[];
}

export const CATEGORIES: Category[] = [
  {
    slug: "dining",
    label: "Dining",
    icon: UtensilsCrossed,
    description: "Dining sets and seating built for daily institutional use or residential comfort.",
    products: [
      { name: "5-Piece Wood Dining Set", price: 649, description: "Solid wood table with four matching chairs." },
      { name: "Counter-Height Bistro Table", price: 329, description: "Compact table for common areas and break rooms." },
      { name: "Stackable Banquet Chair (Set of 4)", price: 219, description: "Commercial-grade, stacks for easy storage." },
      { name: "Commercial Round Dining Table – 48in", price: 389, description: "Laminate top rated for high-traffic dining halls." },
    ],
  },
  {
    slug: "living-room",
    label: "Living Room",
    icon: Sofa,
    description: "Seating and lounge furniture for common areas, offices, and residential units.",
    products: [
      { name: "3-Seat Sectional with Reversible Chaise", price: 899, description: "Performance fabric, stain resistant." },
      { name: "Track-Arm Upholstered Sofa", price: 549, description: "Clean-lined sofa for lounges and lobbies." },
      { name: "Accent Chair – Performance Fabric", price: 279, description: "Durable upholstery rated for daily use." },
      { name: "Coffee Table – Solid Wood Top", price: 199, description: "Scratch-resistant finish, steel base." },
    ],
  },
  {
    slug: "kids-room",
    label: "Kids Room",
    icon: Baby,
    description: "Durable, safety-rated furniture for children's and family programs.",
    products: [
      { name: "Twin Bunk Bed – Metal Frame", price: 389, description: "Safety-rail certified, space-saving design." },
      { name: "Kids' Study Desk & Chair Set", price: 159, description: "Adjustable height, rounded edges." },
      { name: "5-Drawer Dresser – Soft Close", price: 249, description: "Anti-tip hardware included." },
      { name: "Foldable Storage Bench", price: 89, description: "Dual-purpose seating and toy storage." },
    ],
  },
  {
    slug: "bedroom",
    label: "Bedroom",
    icon: BedDouble,
    description: "Bedroom packages sized for dorms, transitional units, and residential suites.",
    products: [
      { name: "Twin Metal Bed Frame", price: 99, description: "No box spring required, easy assembly." },
      { name: "Queen Platform Bed Frame", price: 219, description: "Reinforced steel slats, 700lb rated." },
      { name: "6-Drawer Dresser", price: 329, description: "Full-extension drawers, solid wood legs." },
      { name: "Nightstand with USB Charging", price: 79, description: "Built-in outlets for modern residents." },
    ],
  },
  {
    slug: "transitional-housing",
    label: "Transitional Housing",
    icon: Home,
    description: "Complete single-occupancy packages for shelters and transitional programs.",
    products: [
      { name: "Starter Room Package (Bed, Desk, Storage)", price: 540, description: "Everything needed for one resident, bundled." },
      { name: "Twin XL Mattress – Fire-Code Certified", price: 179, description: "Meets institutional fire-safety standards." },
      { name: "Compact Wardrobe Unit", price: 149, description: "Fits tight footprints, no assembly tools needed." },
      { name: "All-in-One Move-In Kit", price: 320, description: "Linens, housewares, and bedroom basics in one order." },
    ],
  },
  {
    slug: "commercial",
    label: "Commercial",
    icon: Building2,
    description: "Office and common-area furniture built for daily institutional throughput.",
    products: [
      { name: "Task Chair – Adjustable Lumbar", price: 189, description: "8-hour rated, breathable mesh back." },
      { name: "Height-Adjustable Desk", price: 449, description: "Electric sit-stand base, laminate top." },
      { name: "4-Drawer Lateral File Cabinet", price: 259, description: "Lockable, fire-resistant rated." },
      { name: "Reception Bench – 3 Seat", price: 399, description: "Waiting-area seating, commercial-grade frame." },
    ],
  },
  {
    slug: "electronics",
    label: "Electronics",
    icon: Tv,
    description: "Essential electronics for common areas, offices, and residential units.",
    products: [
      { name: "32in LED Television", price: 179, description: "HD display for common rooms and units." },
      { name: "Microwave – 0.9 cu ft", price: 89, description: "Compact countertop unit." },
      { name: "Mini Refrigerator – 3.2 cu ft", price: 139, description: "Energy Star rated, quiet operation." },
      { name: "All-in-One Washer/Dryer Combo", price: 599, description: "Space-saving unit for shared facilities." },
    ],
  },
  {
    slug: "linens",
    label: "Linens",
    icon: Shirt,
    description: "Bulk linen packages rated for high-turnover institutional laundering.",
    products: [
      { name: "Twin Linen Set (Sheets, Pillow, Blanket)", price: 38, description: "Commercial-wash rated fabric." },
      { name: "Queen Linen Set", price: 52, description: "Includes fitted sheet, flat sheet, pillowcases." },
      { name: "Bath Towel Bundle (Set of 6)", price: 29, description: "Quick-dry, high-absorbency cotton blend." },
      { name: "Mattress Protector – Waterproof", price: 19, description: "Noiseless, vinyl-free barrier layer." },
    ],
  },
  {
    slug: "housewares",
    label: "Housewares",
    icon: Lamp,
    description: "Kitchen and household essentials for move-in-ready units.",
    products: [
      { name: "12-Piece Cookware Set", price: 59, description: "Non-stick, dishwasher safe." },
      { name: "Dinnerware Set – Service for 4", price: 34, description: "Stackable, chip-resistant stoneware." },
      { name: "Trash Can – 13 Gallon", price: 22, description: "Step-open lid, odor-sealing." },
      { name: "Move-In Essentials Kit", price: 75, description: "Cookware, dinnerware, and basics bundled." },
    ],
  },
  {
    slug: "security",
    label: "Security",
    icon: Lock,
    description: "Door hardware and unit-level security fixtures for institutional facilities.",
    products: [
      { name: "Keyless Entry Door Lock", price: 129, description: "Keypad entry, audit-trail logging." },
      { name: "Security Door Lockbox", price: 69, description: "Heavy-gauge steel, pry-resistant." },
      { name: "Window Security Film Kit", price: 45, description: "Shatter-resistant, covers one standard window." },
      { name: "Unit Smoke & CO Detector", price: 34, description: "Dual-sensor, 10-year battery." },
    ],
  },
  {
    slug: "janitorial",
    label: "Janitorial",
    icon: SprayCan,
    description: "Facility-wide cleaning supplies and maintenance consumables.",
    products: [
      { name: "Commercial Cleaning Cart", price: 189, description: "Multi-shelf, rolls through standard doorways." },
      { name: "Janitorial Supply Starter Kit", price: 99, description: "Core supplies for one facility wing." },
      { name: "Microfiber Mop & Bucket System", price: 54, description: "Wringer bucket, washable mop heads." },
      { name: "Bulk Trash Liners (Case of 200)", price: 39, description: "Heavy-duty, tear-resistant." },
    ],
  },
  {
    slug: "clearance",
    label: "Clearance",
    icon: Tag,
    description: "Discounted overstock and open-box furniture, while supplies last.",
    products: [
      { name: "Overstock Dining Chair (Assorted)", price: 49, description: "Mixed finishes, limited quantities." },
      { name: "Open-Box Sectional – As-Is", price: 399, description: "Minor cosmetic wear, fully functional." },
      { name: "Clearance Dresser – Floor Model", price: 179, description: "Display unit, small surface marks." },
      { name: "Assorted Lamp Clearance Bundle", price: 25, description: "Mixed styles while supplies last." },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
