import type {Actions, PageServerLoad} from './$types';
import {superValidate} from "sveltekit-superforms/server";
import { LoginSchema } from "$lib/validate"
import {fail} from "@sveltejs/kit";
import {redirect} from "sveltekit-flash-message/server";

export const load : PageServerLoad = (async () => {
  const form = await superValidate(LoginSchema);

  return { form };
});

export const actions : Actions = {
  default: async ({request, locals : {supabase}, cookies}) => {
    const form = await superValidate(request, LoginSchema);
    if (!form.valid) return fail(400, {form});

    const {email, password} = form.data;

    const {data : user, error : userError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(userError, user)
    if (userError) return {form, error: userError.message}


    throw redirect(
      "/",
      {
        type: "success",
        message: "Logged in Successfully!"
      },
      cookies
    )

    return {form, session : user?.session};
  }
}