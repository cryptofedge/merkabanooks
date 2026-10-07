import Link from "next/link";
import type { Metadata } from "next";
import { CATEGORIES } from "@/lib/categories";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Shop by Category | ${SITE_NAME}`,
  description: "Browse furniture, facility, and maintenance supply categories.",
};

export default function CategoriesIndexPage() {
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
              className="glass-panel group rounded-2xl p-6 transition-colors hover:border-amber-400/40"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mb-1 text-base font-semibold text-slate-200">{category.label}</h2>
              <p className="text-sm text-slate-400">{category.description}</p>
              <p className="mt-3 text-xs font-medium text-amber-300 opacity-0 transition-opacity group-hover:opacity-100">
                {category.products.length} products →
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
