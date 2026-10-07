import { CategoryNav } from "@/components/CategoryNav";

export default function CategoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-[72px]">
      <CategoryNav />
      <main>{children}</main>
    </div>
  );
}
