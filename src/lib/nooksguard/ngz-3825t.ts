import type { SecurityCategory } from "./types";

const img = (slug: string) => `/nooksguard/products/${slug}.png`;

export const ngz3825tCategory: SecurityCategory = {
  slug: "ngz-3825t",
  label: "Multi-Energy X-Ray Inspection",
  shortLabel: "Multi-Energy X-Ray",
  description:
    "Compact multi-energy X-ray system with real-time AI threat recognition for mail, parcels and bags — ideal for courts, correctional facilities, embassies, museums, hotels, event venues and corporate mailrooms.",
  productCount: 1,
  status: "live",
  tiers: [
    {
      id: "ngz-3825t",
      label: "NGZ-3825T",
      description: "Compact Multi-Energy X-ray Inspection System.",
      products: [
        {
          slug: "ngz-3825t",
          model: "NGZ-3825T",
          name: "Compact Multi-Energy X-ray Inspection System",
          image: img("ngz-3825t"),
          specs: [
            { label: "Tunnel size", value: "380 (W) x 250 (H) mm" },
            { label: "Main unit size", value: "1353 x 602 x 1260 mm (with base)" },
            { label: "Conveyor speed", value: "0.22 m/s (adjustable)" },
            { label: "Conveyor rated load", value: "90 kg (evenly distributed)" },
            { label: "Penetration", value: "36 mm steel (applied value)" },
            { label: "Wire resolution", value: "0.0787 mm copper wire" },
            { label: "Leakage dose", value: "< 0.1 uGy/h" },
            { label: "Tube voltage / current", value: "130-160 kV / 0.3-1.0 mA (adjustable)" },
            { label: "Display", value: "24 in IPS HD, 178-degree, 1920x1080" },
            { label: "Detector", value: "L-shaped multi-energy array, 1.57mm pitch, 16-bit" },
            { label: "AI recognition", value: "Knives/guns/liquids/explosives, 50ms, up to 98% liquid detection" },
            { label: "Image storage", value: "> 1,000,000 images, instant recall" },
            { label: "Power supply", value: "220 VAC +/-10%, 50 Hz, 0.5 kW max" },
            { label: "Noise level", value: "<= 56 dB" },
          ],
        },
      ],
    },
  ],
};
