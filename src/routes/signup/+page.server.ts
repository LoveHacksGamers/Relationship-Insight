import type {Actions, PageServerLoad} from './$types';
import {setError, superValidate} from "sveltekit-superforms/server";
import { signupSchema } from "$lib/validate"
import {fail} from "@sveltejs/kit";
import { redirect } from 'sveltekit-flash-message/server';

export const load : PageServerLoad = (async () => {
  const form = await superValidate(signupSchema);

  return { form };
});

export const actions : Actions = {
  default: async ({request, locals : { supabase }}) => {
    const form = await superValidate(request, signupSchema);
    if (!form.valid) return fail(400, {form});

    console.log(form.errors)

    const {email, dob, username, gender, password} = form.data;

    const {data : user, error : userError } = await supabase.auth.signUp({
      email,
      password,
    });
    if (userError) return setError(form, userError.message);

    const {error : profileError} = await supabase
      .from('profile')
      .insert({
        user_id: user?.user?.id,
        username,
        date_of_birth: dob,
        gender,
      });
    if (profileError) return setError(form, profileError.message);

    throw redirect(307, '/');

    return {form };
  }
}