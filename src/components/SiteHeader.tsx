"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Capabilities", href: "#configurator" },
  { label: "Sectors", href: "#sectors" },
  { label: "Process", href: "#process" },
  { label: "Get a Quote", href: "#quote" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled ? "glass-panel border-b border-slate-200/10" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="font-display text-lg font-semibold tracking-wide text-slate-200">
          Merkaba<span className="text-amber-400">nooks</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-slate-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#quote"
          className="rounded-full border border-amber-400/40 px-4 py-2 text-sm font-medium text-amber-300 transition-colors hover:bg-amber-400/10"
        >
          Request a Quote
        </a>
      </div>
    </header>
  );
}
