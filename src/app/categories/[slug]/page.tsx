import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CATEGORIES, getCategory } from "@/lib/categories";
import { SITE_NAME } from "@/lib/site";
import { ProductGrid } from "@/components/ProductGrid";

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
  const imageSrc = `/products/${category.slug}.jpg`;

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10">
      <Link
        href="/categories"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-slate-200"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All categories
      </Link>

      <div className="mb-10 overflow-hidden rounded-2xl">
        <div className="relative h-48 w-full sm:h-64">
          <Image
            src={imageSrc}
            alt={category.label}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/50 to-transparent" />
        </div>
        <div className="glass-panel flex items-center gap-4 rounded-b-2xl rounded-t-none border-t-0 p-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-medium text-slate-200 sm:text-3xl">
              {category.label}
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-slate-400">{category.description}</p>
          </div>
        </div>
      </div>

      <ProductGrid products={category.products} />
    </div>
  );
}
