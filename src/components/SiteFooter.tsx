import { SITE_NAME } from "@/lib/site";

const COLUMNS = [
  {
    heading: "Sectors",
    links: ["Transitional Housing", "Municipal Contracts", "Commercial Offices", "Hospitality"],
  },
  {
    heading: "Services",
    links: ["Bulk Furniture Packages", "Security Hardware", "Janitorial Supply", "Rapid Delivery"],
  },
  {
    heading: "Company",
    links: ["About", "M/WBE Certification", "Careers", "Contact"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/10 bg-charcoal-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold text-slate-200">
            Merkaba<span className="text-amber-400">nooks</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-slate-400">
            Furniture, facility, and maintenance supply for the institutions that
            hold communities together.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <p className="mb-3 text-sm font-semibold text-slate-200">{col.heading}</p>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-400 transition-colors hover:text-amber-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200/10 px-6 py-6 text-center text-xs text-slate-500 sm:px-10">
        © 2026 {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
