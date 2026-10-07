import { HeroCinematic } from "@/components/HeroCinematic";
import { ProductConfigurator } from "@/components/ProductConfigurator";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { ScrollExperience } from "@/components/ScrollExperience";
import { SectorShowcase } from "@/components/SectorShowcase";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex flex-col">
        <HeroCinematic />
        <div id="configurator">
          <ProductConfigurator />
        </div>
        <div id="sectors">
          <SectorShowcase />
        </div>
        <div id="process">
          <ScrollExperience />
        </div>
        <div id="quote">
          <QuoteCalculator />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
