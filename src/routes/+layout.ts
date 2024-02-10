// src/routes/+layout.ts
import { PUBLIC_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'
import type {Load} from "@sveltejs/kit";
import { loadFlash } from 'sveltekit-flash-message/server';
// @ts-expect-error flash generates weird types
export const load = async ({ fetch, data, depends }) => {
  depends('supabase:auth')

  let UserSession = null
  if (!data?.session) {
    UserSession = data?.session;
  }

  const supabase = createSupabaseLoadClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_ANON_KEY,
    event: { fetch },
    serverSession: UserSession,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return { supabase, session }
};