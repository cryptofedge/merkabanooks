import Image from "next/image";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { getCategories } from "@/lib/catalog";
import { formatCurrency } from "@/lib/quote-data";
import { isSupabaseConfigured } from "@/lib/supabase/config";

// Admin pages are always request-time (auth-gated, live data) — never prerendered.
export const instant = false;

export default async function AdminDashboardPage() {
  if (!isSupabaseConfigured()) {
    return (
      <div className="glass-panel rounded-2xl p-6 text-sm text-slate-300">
        Supabase isn&apos;t configured, so there&apos;s nothing to edit yet —
        see the &quot;Admin backend&quot; section in README.md.
      </div>
    );
  }

  const categories = await getCategories();
  const products = categories.flatMap((category) =>
    category.products.map((product) => ({ ...product, categoryLabel: category.label }))
  );

  return (
    <div>
      <h1 className="font-display text-2xl text-slate-200">Products</h1>
      <p className="mt-1 text-sm text-slate-400">{products.length} products across {categories.length} categories.</p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-charcoal-900/60 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Product</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/10">
            {products.map((product) => (
              <tr key={product.id} className="transition-colors hover:bg-charcoal-900/40">
                <td className="flex items-center gap-3 px-4 py-3">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-charcoal-900">
                    <Image src={product.image} alt={product.name} fill sizes="40px" className="object-cover" />
                  </div>
                  <span className="text-slate-200">{product.name}</span>
                </td>
                <td className="px-4 py-3 text-slate-400">{product.categoryLabel}</td>
                <td className="px-4 py-3 text-amber-300">{formatCurrency(product.price)}</td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={`/admin/products/${product.id}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 px-3 py-1.5 text-xs font-medium text-amber-300 transition-colors hover:bg-amber-400/10"
                  >
                    <Pencil className="h-3 w-3" />
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
