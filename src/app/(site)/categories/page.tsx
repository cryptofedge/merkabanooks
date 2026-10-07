import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getCategories } from "@/lib/catalog";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Shop by Category | ${SITE_NAME}`,
  description: "Browse furniture, facility, and maintenance supply categories.",
};

export default async function CategoriesIndexPage() {
  const CATEGORIES = await getCategories();

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
        Shop
      </span>
      <h1 className="mt-3 font-display text-3xl font-medium text-slate-200 sm:text-4xl">
        Browse by category
      </h1>
      <p className="mt-3 max-w-2xl text-slate-400">
        Twelve categories spanning institutional, commercial, and residential
        furnishing — every item ships with bulk pricing available.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="glass-panel group overflow-hidden rounded-2xl transition-colors hover:border-amber-400/40"
            >
              <div className="relative h-36 w-full">
                <Image
                  src={`/products/${category.slug}.jpg`}
                  alt={category.label}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 to-transparent" />
                <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-charcoal-900/70 text-amber-300 backdrop-blur">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <div className="p-6">
                <h2 className="mb-1 text-base font-semibold text-slate-200">{category.label}</h2>
                <p className="text-sm text-slate-400">{category.description}</p>
                <p className="mt-3 text-xs font-medium text-amber-300 opacity-0 transition-opacity group-hover:opacity-100">
                  {category.products.length} products →
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
