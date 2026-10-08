import type { SecurityCategory } from "./types";

const SYSTEM_IMAGE = "/nooksguard/products/ng-6xx-system.png";

export const audioProtectionCategory: SecurityCategory = {
  slug: "audio-protection",
  label: "Anti-Recording / Audio Protection",
  shortLabel: "Audio Protection",
  description:
    "A networked ultrasonic audio jamming system for conference rooms: self-developed ultrasonic mixers shield portable recording and eavesdropping devices in the table area, inaudible and radiation-free, managed from one control terminal across up to 32 units.",
  productCount: 3,
  status: "live",
  tiers: [
    {
      id: "ng-6xx",
      label: "NG-6xx Series",
      description: "Three units, one system — choose the right unit for every seat.",
      products: [
        {
          slug: "ng-601",
          model: "NG-601",
          name: "Control Terminal",
          image: SYSTEM_IMAGE,
          specs: [
            { label: "Uplink", value: "WiFi / 100M Ethernet" },
            { label: "Downlink", value: "BLE / RS232" },
            { label: "Wireless range", value: ">10m" },
            { label: "Remote control", value: "315MHz supported" },
            { label: "Slave devices", value: "Up to 32" },
            { label: "Interactive mode", value: "3.92in 320x320 touch" },
            { label: "Voltage / power", value: "DC 5V, <10W" },
            { label: "Size", value: "86.75 x 86.75 x 21.65 mm" },
            { label: "Weight", value: "~113 g" },
          ],
        },
        {
          slug: "ng-615",
          model: "NG-615",
          name: "Under-Desk Audio Jammer",
          image: SYSTEM_IMAGE,
          specs: [
            { label: "Networking", value: "BLE / RS232" },
            { label: "Wireless range", value: ">10m" },
            { label: "Power consumption", value: "<45W" },
            { label: "Number of probes", value: "72" },
            { label: "Jamming coverage", value: "60 degrees" },
            { label: "Size", value: "325 x 96 x 64 mm" },
            { label: "Weight", value: "730 g" },
            { label: "Working temp.", value: "-10C ~ +45C" },
            { label: "Humidity", value: "<=85%, no condensate" },
          ],
        },
        {
          slug: "ng-616",
          model: "NG-616",
          name: "Desktop Audio Jammer",
          image: SYSTEM_IMAGE,
          specs: [
            { label: "Networking", value: "BLE / RS232" },
            { label: "Wireless range", value: ">10m" },
            { label: "Power consumption", value: "<50W" },
            { label: "Number of probes", value: "96" },
            { label: "Jamming coverage", value: "120 degrees" },
            { label: "Size", value: "354 x 127 x 26 mm" },
            { label: "Weight", value: "1445 g" },
            { label: "Working temp.", value: "-10C ~ +45C" },
            { label: "Humidity", value: "<=85%, no condensate" },
          ],
        },
      ],
    },
  ],
};
