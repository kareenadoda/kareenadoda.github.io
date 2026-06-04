import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./database";
import { supabasePublicConfig } from "./public-config";

let client: SupabaseClient<Database> | null = null;

export function getSupabaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() || supabasePublicConfig.url
  );
}

export function getSupabaseAnonKey(): string {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ||
    supabasePublicConfig.anonKey
  );
}

export function isCommentsEnabled(): boolean {
  return Boolean(getSupabaseUrl() && getSupabaseAnonKey());
}

export function getSupabaseClient(): SupabaseClient<Database> | null {
  if (!isCommentsEnabled()) return null;

  if (!client) {
    client = createClient<Database>(getSupabaseUrl(), getSupabaseAnonKey());
  }

  return client;
}
