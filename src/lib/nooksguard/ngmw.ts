import type { SecurityCategory } from "./types";

const img = (slug: string) => `/nooksguard/products/${slug}.png`;

export const ngmwCategory: SecurityCategory = {
  slug: "ngmw",
  label: "Millimeter Wave Body Scanners",
  shortLabel: "Body Scanners",
  description:
    "Nooksguard's Millimeter Wave (MMW) body scanners use proprietary 80GHz chips and 2D MIMO scanning technology for high-resolution, non-contact human body screening. AI algorithms automatically identify suspicious objects hidden under clothing — metal, non-metal, liquid, narcotics and ceramic items — for efficient security screening in high-traffic environments, with non-ionizing radiation and privacy-respecting avatar display.",
  productCount: 2,
  status: "live",
  tiers: [
    {
      id: "ngmw",
      label: "NGMW Series",
      description: "From flagship certified checkpoint screening to high-flux non-stop walk-through.",
      products: [
        {
          slug: "ngmw-7803",
          model: "NGMW-7803",
          name: "Intelligent Multi-AI Security Body Scanner",
          tagline: "Flagship CAAC A3-certified body scanner with integrated foot metal detection.",
          image: img("ngmw-7803"),
          specs: [
            { label: "Working frequency", value: "70GHz ~ 80GHz (80GHz R&D chips)" },
            { label: "Spatial resolution", value: "2mm" },
            { label: "Scanning speed", value: "0.1s" },
            { label: "Detection time", value: "3.2s" },
            { label: "Line resolution", value: "1mm" },
            { label: "Passage width", value: "1120mm (barrier-free)" },
            { label: "Compliance", value: "CAAC A3 Level usage license" },
            { label: "Optional", value: "Integrated foot metal detection" },
          ],
          bullets: [
            "2D MIMO scanning for precise body imaging",
            "AI identification of metallic and non-metallic suspicious objects",
            "Ideal for airports, high-speed rail, customs, and special sensitive facilities",
          ],
        },
        {
          slug: "ngmw-1310",
          model: "NGMW-1310",
          name: "High-Traffic Walk-Through Body Scanner",
          tagline: "Non-stop, non-contact screening for up to 1,200 people per hour.",
          image: img("ngmw-1310"),
          specs: [
            { label: "Working principle", value: "Active millimeter wave real-time imaging" },
            { label: "Imaging array", value: "Multi-angle folding array" },
            { label: "Scanning method", value: "360-degree non-stop walk-through" },
            { label: "Device flux", value: "1,200 people / hour" },
            { label: "Imaging speed", value: "< 15ms" },
            { label: "Spatial resolution", value: "10mm" },
            { label: "Line resolution", value: "5mm" },
            { label: "Detectable items", value: "Metal, plastic, liquid, ceramic, composite" },
          ],
          bullets: [
            "360-degree active imaging builds 3D holographic models without mechanical rotation",
            "Designed for large passenger flow with no bottlenecks",
            "Ideal for subway entrances, high-speed train stations, hospitals, and high-traffic event venues",
          ],
        },
      ],
    },
  ],
};
