"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Category } from "@/lib/categories";
import { cn } from "@/lib/utils";

interface CategoryNavProps {
  categories: Pick<Category, "slug" | "label">[];
}

export function CategoryNav({ categories }: CategoryNavProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Product categories"
      className="sticky top-[72px] z-30 border-b border-slate-200/10 bg-charcoal-900/80 backdrop-blur"
    >
      <div className="scrollbar-hide mx-auto flex max-w-7xl gap-1 overflow-x-auto px-6 py-2 sm:px-10">
        {categories.map((category) => {
          const href = `/categories/${category.slug}`;
          const active = pathname === href;
          return (
            <Link
              key={category.slug}
              href={href}
              className={cn(
                "shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors sm:text-sm",
                active
                  ? "bg-amber-400 text-charcoal-950"
                  : "text-slate-400 hover:bg-charcoal-800 hover:text-slate-200"
              )}
            >
              {category.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
