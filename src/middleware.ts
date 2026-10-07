import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

// Deliberately named `middleware.ts`, not Next 16's newer `proxy.ts` convention:
// Netlify's current Next.js Runtime (@netlify/plugin-nextjs v5.16.2) fails to
// bundle `proxy.ts` as an Edge Function (Windows path resolution bug). Revisit
// once the Netlify adapter supports it — the deprecation warning is harmless.
export async function middleware(request: NextRequest) {
  const { response, user } = await updateSession(request);

  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
  const isLoginRoute = request.nextUrl.pathname === "/admin/login";

  if (isAdminRoute && !isLoginRoute && !user) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isLoginRoute && user) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};
