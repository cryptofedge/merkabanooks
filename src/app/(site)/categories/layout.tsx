import { getCategories } from "@/lib/catalog";
import { CategoryNav } from "@/components/CategoryNav";

export default async function CategoriesLayout({ children }: { children: React.ReactNode }) {
  const categories = await getCategories();
  const navCategories = categories.map(({ slug, label }) => ({ slug, label }));

  return (
    <div className="pt-[72px]">
      <CategoryNav categories={navCategories} />
      <main>{children}</main>
    </div>
  );
}
