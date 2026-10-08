import type { SecurityCategory } from "./types";

const img = (slug: string) => `/nooksguard/products/${slug}.png`;

export const ngfsCategory: SecurityCategory = {
  slug: "ngfs",
  label: "Foot & Shoe Security Screening",
  shortLabel: "Foot Screening",
  description:
    "Nooksguard's foot and shoe screening line clears high-traffic checkpoints without a manual shoe check — from a dual-screen X-ray foot scanner and waterproof induction shoe-sole detector to a streamlined cloud-shape high-flux unit and a load-bearing LED security gate. Detects metal, liquids, and narcotics hidden in footwear in seconds.",
  productCount: 4,
  status: "live",
  tiers: [
    {
      id: "elite-classic",
      label: "Elite & Classic Foot Screening",
      description: "High-end X-ray imaging alongside a classic induction-loop shoe detector.",
      products: [
        {
          slug: "ngfs-5010",
          model: "NGFS-5010",
          name: "High-End X-ray Foot Scanner",
          tagline: "Dual-screen X-ray foot imaging with sub-5-second scan time.",
          image: img("ngfs-5010"),
          specs: [
            { label: "Technology", value: "Transmission X-ray imaging" },
            { label: "Scan time", value: "< 5 seconds" },
            { label: "Detects", value: "Metal, liquids, narcotics" },
            { label: "Safety", value: "Low dose: < 0.25uSv" },
            { label: "Display", value: "Dual screen: 15in + 12.3in" },
            { label: "Weight", value: "76 kg" },
          ],
        },
        {
          slug: "ngfs-sole",
          model: "NGFS-SOLE",
          name: "Classic Shoe Metal Detector",
          tagline: "Waterproof, anti-slip induction-loop detector for hazardous items in soles.",
          image: img("ngfs-sole"),
          specs: [
            { label: "Technology", value: "Digital induction loop" },
            { label: "Target", value: "Hazardous items in soles" },
            { label: "Capacity", value: "Up to 150 kg load" },
            { label: "Safety", value: "Waterproof & anti-slip" },
            { label: "Alarm", value: "Audio-visual intensity display" },
            { label: "Power", value: "Battery: 5400 mAh" },
          ],
        },
      ],
    },
    {
      id: "smart-high-flux",
      label: "Smart & High-Flux Checkpoints",
      description: "Streamlined cloud-shape scanning and a modular LED security gate for fast-moving lines.",
      products: [
        {
          slug: "ngfs-1688",
          model: "NGFS-1688",
          name: "High-Flux Cloud Sole Scanner",
          tagline: "Streamlined cloud-shape design with real-time voice + LED reporting.",
          image: img("ngfs-1688"),
          specs: [
            { label: "Technology", value: "High-frequency induction" },
            { label: "Design", value: "Streamlined cloud-shape" },
            { label: "Report", value: "Voice + LED indicator" },
            { label: "Response", value: "Real-time identification" },
            { label: "Current", value: "110mA low consumption" },
            { label: "Operating temp", value: "-5C to +50C" },
          ],
        },
        {
          slug: "ngfs-fd100",
          model: "NGFS-FD100",
          name: "Smart LED Shoe Security Gate",
          tagline: "Modular digital detection gate with 360-degree visible alerts.",
          image: img("ngfs-fd100"),
          specs: [
            { label: "Technology", value: "Modular digital detection" },
            { label: "Visuals", value: "4 high-bright LED strips" },
            { label: "Display", value: "2.8 inch LCD screen" },
            { label: "Durability", value: "Load-bearing: 300+ kg" },
            { label: "Alerts", value: "360-degree visible zone" },
            { label: "Power", value: "DC 12V / < 5W" },
          ],
        },
      ],
    },
  ],
};
