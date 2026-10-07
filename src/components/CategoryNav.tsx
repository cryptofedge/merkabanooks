"use client";

import Image from "next/image";
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
      className="sticky top-[72px] z-30 flex items-stretch gap-2 border-b border-slate-200/10 bg-charcoal-900/80 px-3 backdrop-blur sm:px-6"
    >
      <div className="scrollbar-hide flex flex-1 items-center gap-1 overflow-x-auto py-2">
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

      <Link
        href="/security"
        title="Nooksguard Security Solutions"
        className="flex shrink-0 items-center gap-2 border-l border-slate-200/10 pl-3 text-xs font-medium text-slate-400 transition-colors hover:text-blue-300"
      >
        <Image src="/nooksguard/logo.webp" alt="Nooksguard Security Solutions" width={24} height={24} className="h-6 w-6" />
        <span className="hidden sm:inline">Security Solutions</span>
      </Link>
    </nav>
  );
}
