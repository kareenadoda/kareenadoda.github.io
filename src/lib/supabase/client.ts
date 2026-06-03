import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./database";

let client: SupabaseClient<Database> | null = null;

export function isCommentsEnabled(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

export function getSupabaseClient(): SupabaseClient<Database> | null {
  if (!isCommentsEnabled()) return null;

  if (!client) {
    client = createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );
  }

  return client;
}
