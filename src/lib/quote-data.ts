export type RoomTypeId = "dormitory" | "transitional" | "office" | "senior";

export interface RoomType {
  id: RoomTypeId;
  label: string;
  description: string;
  baseUnitCost: number; // per-unit furniture package, USD
  defaultUnits: number;
  maxUnits: number;
}

export const ROOM_TYPES: RoomType[] = [
  {
    id: "dormitory",
    label: "Dormitory Unit",
    description: "Twin/twin-XL bed, wardrobe, desk, chair — transitional housing & shelters",
    baseUnitCost: 640,
    defaultUnits: 24,
    maxUnits: 500,
  },
  {
    id: "transitional",
    label: "Transitional Housing Unit",
    description: "Full bedroom + living set for single-occupancy transitional units",
    baseUnitCost: 1180,
    defaultUnits: 12,
    maxUnits: 300,
  },
  {
    id: "office",
    label: "Office Floor Workstation",
    description: "Desk, task chair, filing/storage — municipal & commercial offices",
    baseUnitCost: 820,
    defaultUnits: 20,
    maxUnits: 1000,
  },
  {
    id: "senior",
    label: "Senior Program Suite",
    description: "ADA-adjustable bed, recliner, bedside storage — senior & assisted programs",
    baseUnitCost: 1540,
    defaultUnits: 16,
    maxUnits: 300,
  },
];

export type GradeId = "standard" | "reinforced" | "therapeutic";

export interface Grade {
  id: GradeId;
  label: string;
  description: string;
  multiplier: number;
}

export const BED_GRADES: Grade[] = [
  {
    id: "standard",
    label: "Standard Commercial",
    description: "Contract-grade frame, fire-code certified foam",
    multiplier: 1,
  },
  {
    id: "reinforced",
    label: "Heavy-Duty Reinforced",
    description: "Steel frame, 500lb+ rated, high-turnover facilities",
    multiplier: 1.28,
  },
  {
    id: "therapeutic",
    label: "Premium Therapeutic",
    description: "Pressure-relief foam, adjustable base, clinical-grade",
    multiplier: 1.65,
  },
];

export type AddonId = "linens" | "janitorial" | "security";

export interface Addon {
  id: AddonId;
  label: string;
  description: string;
  perUnitCost: number;
}

export const ADDON_KITS: Addon[] = [
  {
    id: "linens",
    label: "Linens Kit",
    description: "Sheet sets, pillow, blanket, mattress protector per unit",
    perUnitCost: 65,
  },
  {
    id: "janitorial",
    label: "Janitorial Supply Kit",
    description: "Facility-wide cleaning supplies, carts, and consumables",
    perUnitCost: 40,
  },
  {
    id: "security",
    label: "Security Hardware Kit",
    description: "Door hardware, lockboxes, and unit-level security fixtures",
    perUnitCost: 95,
  },
];

export interface QuoteInput {
  roomType: RoomTypeId;
  units: number;
  grade: GradeId;
  addons: AddonId[];
}

export interface QuoteLineItem {
  label: string;
  quantity: number;
  unitCost: number;
  total: number;
}

export interface QuoteEstimate {
  lineItems: QuoteLineItem[];
  subtotal: number;
  volumeDiscountRate: number;
  volumeDiscount: number;
  estimatedTotal: number;
}

function getVolumeDiscountRate(units: number): number {
  if (units >= 150) return 0.15;
  if (units >= 75) return 0.1;
  if (units >= 25) return 0.05;
  return 0;
}

export function calculateEstimate(input: QuoteInput): QuoteEstimate {
  const roomType = ROOM_TYPES.find((r) => r.id === input.roomType) ?? ROOM_TYPES[0];
  const grade = BED_GRADES.find((g) => g.id === input.grade) ?? BED_GRADES[0];
  const units = Math.max(1, input.units);

  const furnitureUnitCost = Math.round(roomType.baseUnitCost * grade.multiplier);
  const lineItems: QuoteLineItem[] = [
    {
      label: `${roomType.label} — ${grade.label}`,
      quantity: units,
      unitCost: furnitureUnitCost,
      total: furnitureUnitCost * units,
    },
  ];

  for (const addonId of input.addons) {
    const addon = ADDON_KITS.find((a) => a.id === addonId);
    if (!addon) continue;
    lineItems.push({
      label: addon.label,
      quantity: units,
      unitCost: addon.perUnitCost,
      total: addon.perUnitCost * units,
    });
  }

  const subtotal = lineItems.reduce((sum, item) => sum + item.total, 0);
  const volumeDiscountRate = getVolumeDiscountRate(units);
  const volumeDiscount = Math.round(subtotal * volumeDiscountRate);
  const estimatedTotal = subtotal - volumeDiscount;

  return { lineItems, subtotal, volumeDiscountRate, volumeDiscount, estimatedTotal };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
