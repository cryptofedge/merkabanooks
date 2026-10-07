"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Box, Loader2 } from "lucide-react";
import { formatCurrency } from "@/lib/quote-data";
import type { Product } from "@/lib/categories";

const ProductScene3D = dynamic(
  () => import("./ProductScene3D").then((m) => m.ProductScene3D),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center text-slate-500">
        <Loader2 className="h-5 w-5 animate-spin" />
      </div>
    ),
  }
);

export function ProductGrid({ products }: { products: Product[] }) {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const isLowPower =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
        ?.saveData === true;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(!isLowPower);
  }, []);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {!enabled && (
        <div className="glass-panel col-span-full flex flex-wrap items-center justify-between gap-3 rounded-2xl p-4">
          <p className="flex items-center gap-2 text-sm text-slate-400">
            <Box className="h-4 w-4 text-amber-400" />
            3D previews are paused to save battery and data on this device.
          </p>
          <button
            onClick={() => setEnabled(true)}
            className="rounded-full border border-amber-400/40 px-4 py-1.5 text-xs font-medium text-amber-300 transition-colors hover:bg-amber-400/10"
          >
            Enable 3D View
          </button>
        </div>
      )}

      {products.map((product) => (
        <div key={product.slug} className="glass-panel flex flex-col overflow-hidden rounded-2xl">
          <div className="relative h-36 w-full bg-charcoal-900/60">
            {enabled ? (
              <ProductScene3D shape={product.shape} color={product.accentHex} variant={product.shapeVariant} />
            ) : (
              <Image src={product.image} alt={product.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            )}
            {enabled && (
              <div className="pointer-events-none absolute bottom-1.5 left-1.5 rounded-full bg-charcoal-950/70 px-2 py-0.5 text-[10px] text-slate-400">
                Drag to rotate
              </div>
            )}
          </div>

          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-sm font-semibold text-slate-200">{product.name}</h3>
            <p className="mt-1 flex-1 text-xs text-slate-400">{product.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="font-display text-lg text-amber-300">
                {formatCurrency(product.price)}
              </span>
              <Link
                href="/#quote"
                className="rounded-full border border-amber-400/40 px-3 py-1.5 text-xs font-medium text-amber-300 transition-colors hover:bg-amber-400/10"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
