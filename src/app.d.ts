// src/app.d.ts

import {SupabaseClient, Session, User, AuthError} from '@supabase/supabase-js'

declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient;
      getSession(): Promise<Session | null>;
      authCheck(): Promise<{   conditional: true;   user: { user: User; } | {     user: null;   };   userError: AuthError | null;   returnError: () => void; }>
    }
    interface PageData {
      session: Session | null
    }
    // interface Error {}
    // interface Platform {}
  }
}
export {};
