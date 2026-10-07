"use client";

import { useActionState, useState } from "react";
import Image from "next/image";
import { CheckCircle2, Loader2 } from "lucide-react";
import { updateProduct, type UpdateProductState } from "@/app/admin/products/actions";
import type { Product } from "@/lib/categories";

interface ProductEditFormProps {
  product: Product & { id: string; categorySlug: string };
}

const initialState: UpdateProductState = {};

export function ProductEditForm({ product }: ProductEditFormProps) {
  const action = updateProduct.bind(null, product.id, product.categorySlug);
  const [state, formAction, pending] = useActionState(action, initialState);
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <form action={formAction} className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">
      <div>
        <p className="mb-2 text-xs font-medium text-slate-400">Photo</p>
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-charcoal-900">
          {preview ? (
            // eslint-disable-next-line @next/next/no-img-element -- local blob: preview, not a next/image-compatible URL
            <img src={preview} alt={product.name} className="h-full w-full object-cover" />
          ) : (
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          )}
        </div>
        <label className="mt-3 block cursor-pointer rounded-full border border-amber-400/40 px-4 py-2 text-center text-xs font-medium text-amber-300 transition-colors hover:bg-amber-400/10">
          Replace photo
          <input
            type="file"
            name="image"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setPreview(URL.createObjectURL(file));
            }}
          />
        </label>
      </div>

      <div className="glass-panel flex flex-col gap-4 rounded-2xl p-6">
        <div>
          <label htmlFor="name" className="mb-1 block text-xs font-medium text-slate-400">
            Name
          </label>
          <input
            id="name"
            name="name"
            defaultValue={product.name}
            required
            className="w-full rounded-lg border border-slate-200/15 bg-charcoal-900/60 px-4 py-2.5 text-sm text-slate-200 focus:border-amber-400/50 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="description" className="mb-1 block text-xs font-medium text-slate-400">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={product.description}
            required
            rows={3}
            className="w-full rounded-lg border border-slate-200/15 bg-charcoal-900/60 px-4 py-2.5 text-sm text-slate-200 focus:border-amber-400/50 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="price" className="mb-1 block text-xs font-medium text-slate-400">
            Price (USD)
          </label>
          <input
            id="price"
            name="price"
            type="number"
            min={0}
            step={1}
            defaultValue={product.price}
            required
            className="w-full max-w-[160px] rounded-lg border border-slate-200/15 bg-charcoal-900/60 px-4 py-2.5 text-sm text-slate-200 focus:border-amber-400/50 focus:outline-none"
          />
        </div>

        {state.error && <p className="text-sm text-red-400">{state.error}</p>}
        {state.success && (
          <p className="flex items-center gap-1.5 text-sm text-amber-300">
            <CheckCircle2 className="h-4 w-4" />
            Saved — changes are live on the site.
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="btn-gradient-border mt-2 flex w-fit items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-charcoal-950 transition-colors hover:bg-amber-400 disabled:opacity-60"
        >
          {pending && <Loader2 className="h-4 w-4 animate-spin" />}
          Save changes
        </button>
      </div>
    </form>
  );
}
