"use client";

import { useActionState } from "react";
import { Loader2, Lock } from "lucide-react";
import { login, type LoginState } from "../actions";
import { SITE_NAME } from "@/lib/site";

const initialState: LoginState = {};

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal-950 px-6">
      <div className="glass-panel w-full max-w-sm rounded-2xl p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
            <Lock className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-lg text-slate-200">{SITE_NAME} Admin</p>
            <p className="text-xs text-slate-500">Staff sign-in</p>
          </div>
        </div>

        <form action={formAction} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-xs font-medium text-slate-400">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="username"
              className="w-full rounded-lg border border-slate-200/15 bg-charcoal-900/60 px-4 py-2.5 text-sm text-slate-200 focus:border-amber-400/50 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-xs font-medium text-slate-400">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded-lg border border-slate-200/15 bg-charcoal-900/60 px-4 py-2.5 text-sm text-slate-200 focus:border-amber-400/50 focus:outline-none"
            />
          </div>

          {state.error && <p className="text-sm text-red-400">{state.error}</p>}

          <button
            type="submit"
            disabled={pending}
            className="btn-gradient-border mt-2 flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-charcoal-950 transition-colors hover:bg-amber-400 disabled:opacity-60"
          >
            {pending && <Loader2 className="h-4 w-4 animate-spin" />}
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-500">
          Accounts are created by an admin in the Supabase dashboard — there&apos;s
          no public sign-up.
        </p>
      </div>
    </div>
  );
}
