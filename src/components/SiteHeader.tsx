"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CATEGORIES } from "@/lib/categories";

const NAV_LINKS = [
  { label: "Shop", href: "/categories" },
  { label: "Capabilities", href: "/#configurator" },
  { label: "Sectors", href: "/#sectors" },
  { label: "Process", href: "/#process" },
  { label: "Get a Quote", href: "/#quote" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled || menuOpen ? "glass-panel border-b border-slate-200/10" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="font-display text-lg font-semibold tracking-wide text-slate-200">
          Merkaba<span className="text-amber-400">nooks</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-slate-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#quote"
            className="hidden rounded-full border border-amber-400/40 px-4 py-2 text-sm font-medium text-amber-300 transition-colors hover:bg-amber-400/10 sm:inline-block"
          >
            Request a Quote
          </Link>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/15 text-slate-200 md:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-slate-200/10 md:hidden"
          >
            <div className="max-h-[75vh] overflow-y-auto px-6 py-6 sm:px-10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Menu
              </p>
              <div className="mb-6 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-2 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-charcoal-800 hover:text-slate-100"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Shop by Category
              </p>
              <div className="grid grid-cols-2 gap-1">
                {CATEGORIES.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/categories/${category.slug}`}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-2 py-2 text-sm text-slate-300 transition-colors hover:bg-charcoal-800 hover:text-slate-100"
                  >
                    {category.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
