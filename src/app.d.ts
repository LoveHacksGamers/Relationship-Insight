// src/app.d.ts

import {SupabaseClient, Session, User, AuthError} from '@supabase/supabase-js'

declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient;
      getSession(): Promise<Session | null>;
      authCheck():  Promise<{ sessionError: AuthError | null; session: Session | null; conditional: boolean; returnError: () => void; }>;
    }
    interface PageData {
      flash?: { type: 'success' | 'error'; message: string };
    }
    // interface Error {}
    // interface Platform {}
  }
}
export {};
