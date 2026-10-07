import Link from "next/link";
import { LogOut } from "lucide-react";
import { logout } from "../actions";

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-charcoal-950">
      <header className="border-b border-slate-200/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/admin" className="font-display text-lg font-semibold text-slate-200">
            Merkaba<span className="text-amber-400">nooks</span>{" "}
            <span className="text-sm font-normal text-slate-500">Admin</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              target="_blank"
              className="text-sm text-slate-400 transition-colors hover:text-slate-200"
            >
              View site
            </Link>
            <form action={logout}>
              <button
                type="submit"
                className="flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-slate-200"
              >
                <LogOut className="h-3.5 w-3.5" />
                Log out
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}
