import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CATEGORIES, getCategory } from "@/lib/categories";
import { formatCurrency } from "@/lib/quote-data";
import { SITE_NAME } from "@/lib/site";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.label} | ${SITE_NAME}`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const Icon = category.icon;

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10">
      <Link
        href="/categories"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-slate-200"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All categories
      </Link>

      <div className="mb-10 flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
          <Icon className="h-7 w-7" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-medium text-slate-200 sm:text-4xl">
            {category.label}
          </h1>
          <p className="mt-2 max-w-2xl text-slate-400">{category.description}</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {category.products.map((product) => (
          <div key={product.name} className="glass-panel flex flex-col rounded-2xl p-5">
            <div className="mb-4 flex h-28 items-center justify-center rounded-xl bg-charcoal-900/60">
              <Icon className="h-9 w-9 text-amber-400/50" />
            </div>
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
        ))}
      </div>
    </div>
  );
}
