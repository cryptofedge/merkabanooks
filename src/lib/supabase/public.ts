import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "./config";

// Stateless client for public (anon-RLS) reads — safe to call anywhere,
// including generateStaticParams and other build-time/no-request contexts
// where next/headers cookies() isn't available. Never use this for writes;
// use src/lib/supabase/server.ts (cookie-aware) so writes run under the
// signed-in staff member's session instead of the anon role.
export function createPublicClient() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("Supabase is not configured — set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
  }
  return createSupabaseClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
