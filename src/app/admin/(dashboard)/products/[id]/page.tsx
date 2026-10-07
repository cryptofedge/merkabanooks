import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getProductById } from "@/lib/catalog";
import { ProductEditForm } from "./ProductEditForm";

interface ProductEditPageProps {
  params: Promise<{ id: string }>;
}

export const instant = false;

export default async function ProductEditPage({ params }: ProductEditPageProps) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) notFound();

  return (
    <div>
      <Link
        href="/admin"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-slate-200"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All products
      </Link>
      <h1 className="font-display text-2xl text-slate-200">Edit product</h1>
      <p className="mt-1 text-sm text-slate-400">{product.categorySlug}</p>

      <ProductEditForm product={product} />
    </div>
  );
}
