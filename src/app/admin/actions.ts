"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export interface LoginState {
  error?: string;
}

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  if (!isSupabaseConfigured()) {
    return {
      error: "The admin backend isn't connected yet. Set NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY — see README.",
    };
  }

  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    return { error: "Invalid email or password." };
  }

  redirect("/admin");
}

export async function logout() {
  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }
  redirect("/admin/login");
}
