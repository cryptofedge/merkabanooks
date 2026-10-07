"use client";

import { useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, HeartHandshake, ShieldCheck, Sparkles, Landmark, Hotel, Home, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectorCard {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface Sector {
  id: "institutional" | "commercial";
  label: string;
  tagline: string;
  cards: SectorCard[];
}

const SECTORS: Sector[] = [
  {
    id: "institutional",
    label: "Municipal & Non-Profit",
    tagline: "Transitional housing, senior programs, and public contracts",
    cards: [
      {
        icon: Home,
        title: "Transitional Housing",
        description: "Full-unit furniture packages for rapid resident move-in.",
      },
      {
        icon: HeartHandshake,
        title: "Senior Programs",
        description: "ADA-adjustable, pressure-relief furniture for care programs.",
      },
      {
        icon: Users,
        title: "Non-Profits",
        description: "Flexible, grant-friendly procurement for community orgs.",
      },
      {
        icon: Landmark,
        title: "Municipal Contracts",
        description: "M/WBE certified vendor for city & county procurement.",
      },
    ],
  },
  {
    id: "commercial",
    label: "Commercial & Residential",
    tagline: "Offices, hospitality, and modern living spaces",
    cards: [
      {
        icon: Building2,
        title: "Commercial Offices",
        description: "Workstations and common areas built for daily throughput.",
      },
      {
        icon: Sparkles,
        title: "Modern Living",
        description: "Residential-grade furnishing for multi-unit developments.",
      },
      {
        icon: Hotel,
        title: "Hospitality",
        description: "Durable, design-forward furniture for guest-facing spaces.",
      },
      {
        icon: ShieldCheck,
        title: "Janitorial Services",
        description: "Facility maintenance supply programs, delivered on cadence.",
      },
    ],
  },
];

export function SectorShowcase() {
  const [activeId, setActiveId] = useState<Sector["id"]>("institutional");
  const active = SECTORS.find((s) => s.id === activeId)!;

  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
      <div className="mb-10 flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
          Who We Serve
        </span>
        <h2 className="font-display text-3xl font-medium text-slate-200 sm:text-4xl">
          Two sides of the same supply chain.
        </h2>
      </div>

      <div className="relative mb-10 inline-flex rounded-full border border-slate-200/10 bg-charcoal-900/60 p-1">
        {SECTORS.map((sector) => (
          <button
            key={sector.id}
            onClick={() => setActiveId(sector.id)}
            className={cn(
              "relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors",
              activeId === sector.id ? "text-charcoal-950" : "text-slate-400 hover:text-slate-200"
            )}
          >
            {activeId === sector.id && (
              <motion.span
                layoutId="sector-pill"
                className="absolute inset-0 -z-10 rounded-full bg-amber-400"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            {sector.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
          animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
          exit={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <p className="mb-6 max-w-xl text-slate-400">{active.tagline}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {active.cards.map((card) => (
              <SectorCardItem key={card.title} card={card} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function SectorCardItem({ card }: { card: SectorCard }) {
  const Icon = card.icon;
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="glass-panel group relative overflow-hidden rounded-2xl p-6"
    >
      <motion.div
        variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
        transition={{ duration: 0.3 }}
        className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300"
      >
        <Icon className="h-5 w-5" />
      </motion.div>

      <h3 className="mb-1 text-base font-semibold text-slate-200">{card.title}</h3>

      <svg width="40" height="6" viewBox="0 0 40 6" className="mb-3">
        <motion.path
          d="M1 3 H39"
          stroke="#e0a35c"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            rest: { pathLength: 0, opacity: 0 },
            hover: { pathLength: 1, opacity: 1 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </svg>

      <p className="text-sm text-slate-400">{card.description}</p>

      <motion.div
        variants={{
          rest: { opacity: 0, y: 8 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.25 }}
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-amber-400/10 to-transparent"
      />
    </motion.div>
  );
}
