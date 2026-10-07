import type { SecurityCategory } from "./types";
import { ngvjCategory } from "./ngvj";

function stub(
  slug: string,
  label: string,
  shortLabel: string,
  description: string,
  productCount: number
): SecurityCategory {
  return { slug, label, shortLabel, description, productCount, status: "coming-soon", tiers: [] };
}

export const SECURITY_CATEGORIES: SecurityCategory[] = [
  stub(
    "ngz",
    "Compact X-Ray Inspection",
    "Compact X-Ray",
    "Bag and parcel X-ray screening for daily checkpoints, from handbag-size tunnels up to large-channel cargo units.",
    5
  ),
  ngvjCategory,
  stub(
    "ngts-ct",
    "Fast CT Inspection",
    "CT Inspection",
    "Dual-energy CT luggage and object screening with 3D color imaging and automatic explosives/narcotics detection.",
    4
  ),
  stub(
    "ngz-3825t",
    "Multi-Energy X-Ray Inspection",
    "Multi-Energy X-Ray",
    "Compact multi-energy X-ray system with real-time AI threat recognition for mail, parcels and bags.",
    1
  ),
  stub(
    "ngpx",
    "Portable X-Ray Inspection",
    "Portable X-Ray",
    "Nine field-deployable X-ray platforms spanning compact screening, wide-format capture, and high-penetration EOD work.",
    9
  ),
  stub(
    "nghwt",
    "Walk-Through Metal Detectors",
    "Walk-Through WTMD",
    "Entry-tier through airport-class walk-through metal detection gates, plus multi-mode, IoT-networked and single-pole variants.",
    12
  ),
  stub(
    "nghh",
    "Handheld Metal Detectors",
    "Handheld Detectors",
    "Sixteen handheld wand configurations across four tiers, from ultra-sensitive flagship to cost-efficient mass deployment.",
    16
  ),
  stub(
    "ngmw",
    "Millimeter Wave Body Scanners",
    "Body Scanners",
    "Non-contact AI-assisted human body screening using 80GHz millimeter wave imaging.",
    2
  ),
  stub(
    "ngfs",
    "Foot & Shoe Security Screening",
    "Foot Screening",
    "X-ray and induction-based foot/shoe scanners for high-flux checkpoints.",
    4
  ),
  stub(
    "nguv",
    "Under Vehicle Surveillance Systems",
    "Vehicle Surveillance",
    "Flush and surface-mount scanning lanes, 3D dual-view systems, and a full family of handheld inspection mirrors and video poles.",
    13
  ),
  stub(
    "threat-detection",
    "Security & Threat Detection",
    "Threat Detection",
    "Trace explosive/narcotics detectors, dangerous liquid inspection, radiation monitoring, and chemical/gas detection instruments.",
    11
  ),
  stub(
    "tscm",
    "TSCM & Counter-Surveillance",
    "Counter-Surveillance",
    "Hidden camera detection, smart terminal and WiFi inspection, and handheld/portable signal detectors for the full TSCM workflow.",
    20
  ),
  stub(
    "ngjm",
    "Signal Jamming Solutions",
    "Signal Jamming",
    "SDR-based indoor and portable full-band signal jammers for confidential meetings and EOD operations.",
    2
  ),
  stub(
    "audio-protection",
    "Anti-Recording / Audio Protection",
    "Audio Protection",
    "Networked ultrasonic audio jamming system for conference room anti-recording protection.",
    3
  ),
];

export function getSecurityCategory(slug: string): SecurityCategory | undefined {
  return SECURITY_CATEGORIES.find((c) => c.slug === slug);
}

export const SECURITY_PRODUCT_TOTAL = SECURITY_CATEGORIES.reduce((sum, c) => sum + c.productCount, 0);
