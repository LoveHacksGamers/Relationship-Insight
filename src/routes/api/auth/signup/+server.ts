import type {RequestHandler} from "./$types";
import {json} from "@sveltejs/kit";


export const POST: RequestHandler = async ({locals: {supabase}, request}) => {
  const { email, password } = await request.json();
  const { data, error: authError } = await supabase.auth.signUp({email, password});
  if (authError) { return json({ status: 401, body: { error: authError.message } });}
  return json(data.session);
}