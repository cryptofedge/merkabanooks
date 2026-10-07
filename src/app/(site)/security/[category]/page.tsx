import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { SECURITY_CATEGORIES, getSecurityCategory } from "@/lib/nooksguard/categories";
import { SITE_NAME } from "@/lib/site";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return SECURITY_CATEGORIES.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getSecurityCategory(slug);
  if (!category) return {};
  return {
    title: `${category.label} | Nooksguard | ${SITE_NAME}`,
    description: category.description,
  };
}

export default async function SecurityCategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getSecurityCategory(slug);
  if (!category) notFound();

  return (
    <div className="bg-charcoal-950">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10">
        <Link
          href="/security"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-slate-200"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All security categories
        </Link>

        <div className="mb-10 flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-300">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <div>
            <h1 className="font-display text-3xl font-medium text-slate-200 sm:text-4xl">
              {category.label}
            </h1>
            <p className="mt-2 max-w-2xl text-slate-400">{category.description}</p>
          </div>
        </div>

        {category.status === "coming-soon" ? (
          <div className="glass-panel rounded-2xl p-8 text-center">
            <p className="text-slate-300">
              Full specs and imagery for this category are being added.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              In the meantime, call (516) 980-2444 or email sales@Nooksguard.com for
              {" "}{category.productCount} {category.label.toLowerCase()} model{category.productCount === 1 ? "" : "s"}.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-14">
            {category.tiers.map((tier) => (
              <section key={tier.id}>
                <h2 className="font-display text-xl text-slate-200">{tier.label}</h2>
                {tier.description && <p className="mt-1 text-sm text-slate-400">{tier.description}</p>}
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {tier.products.map((product) => (
                    <div key={product.slug} className="glass-panel flex flex-col overflow-hidden rounded-2xl">
                      {product.image && (
                        <div className="relative h-40 w-full bg-white">
                          <Image
                            src={product.image}
                            alt={product.model}
                            fill
                            sizes="(min-width: 1024px) 25vw, 50vw"
                            className="object-contain p-2"
                          />
                        </div>
                      )}
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="text-sm font-semibold text-slate-200">{product.model}</h3>
                        <p className="text-xs text-blue-300">{product.name}</p>
                        <dl className="mt-3 space-y-1.5">
                          {product.specs.map((spec) => (
                            <div key={spec.label} className="flex justify-between gap-2 text-xs">
                              <dt className="text-slate-500">{spec.label}</dt>
                              <dd className="text-right text-slate-300">{spec.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
