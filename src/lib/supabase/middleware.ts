import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { SUPABASE_ANON_KEY, SUPABASE_URL, isSupabaseConfigured } from "./config";

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request });

  if (!isSupabaseConfigured()) {
    return { response, user: null };
  }

  const supabase = createServerClient(SUPABASE_URL!, SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      },
    },
  });

  // IMPORTANT: calling getUser() (not getSession()) revalidates the token
  // with Supabase on every request, which is what makes middleware-based
  // route protection trustworthy rather than just reading a client-set cookie.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { response, user };
}
