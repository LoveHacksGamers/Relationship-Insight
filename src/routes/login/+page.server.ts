import type {Actions, PageServerLoad} from './$types';
import {superValidate} from "sveltekit-superforms/server";
import { LoginSchema } from "$lib/validate"
import {fail} from "@sveltejs/kit";

export const load : PageServerLoad = (async () => {
  const form = await superValidate(LoginSchema);

  return { form };
});

export const actions : Actions = {
  default: async ({request, fetch}) => {
    const form = await superValidate(request, LoginSchema);
    if (!form.valid) return fail(400, {form});

    const {email, password} = form.data;

    await fetch('/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    });

    return {form};
  }
}