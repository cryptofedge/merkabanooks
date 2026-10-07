import { getCategories } from "@/lib/catalog";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const categories = await getCategories();
  const headerCategories = categories.map(({ slug, label }) => ({ slug, label }));

  return (
    <>
      <SiteHeader categories={headerCategories} />
      {children}
      <SiteFooter />
    </>
  );
}
