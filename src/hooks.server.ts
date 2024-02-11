// src/hooks.server.ts
import { PUBLIC_SUPABASE_URL, PUBLIC_ANON_KEY } from '$env/static/public'
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import type { Handle } from '@sveltejs/kit'
import {error} from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_ANON_KEY,
    event,
  })

  /**
   * A convenience helper so we can just call await getSession() instead const { data: { session } } = await supabase.auth.getSession()
   */
  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    return session
  }

  event.locals.authCheck = async () => {
    const {
      data: { session },
      error: sessionError
    } = await event.locals.supabase.auth.getSession();
    return {
      sessionError,
      session,
      conditional: session === null || sessionError !== null,
      returnError: () => {
        if (sessionError) throw error(500, sessionError.message);
        if (session === null) throw error(401, 'Not logged in');
      }
    };
  };

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range'
    },
  })
}