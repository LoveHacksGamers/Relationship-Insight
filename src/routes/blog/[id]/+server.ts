import type {RequestHandler} from "@sveltejs/kit";
import {fail, text} from "@sveltejs/kit";
export const POST: RequestHandler = async ({locals: {supabase, authCheck}, params, request}) => {
  const auth = await authCheck();
  console.log(auth);
  if (auth.conditional) return auth.returnError();
  const {id} = params;
  const { user_id } = await request.json();
  const { data, error } = await supabase.from('vote').select('*').eq('blog_id', id).eq('user_id', user_id).single();
  if (error) return fail(500, error);

  if (data) {
    const { error } = await supabase.from('vote').delete().eq('id', data.id);
    if (error) return fail(500, error);
    return text("Removed Upvote");
  } else {
    const { error } = await supabase.from('vote').insert({blog_id: id, user_id});
    if (error) return fail(500, error);
    return text("Voted");
  }
}
