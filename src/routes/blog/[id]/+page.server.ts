import type { PageServerLoad } from './$types';
import type {Actions} from "@sveltejs/kit";
import {CommentSchema} from "$lib/validate";
import {superValidate} from "sveltekit-superforms/server";


export const load = (async ({ locals: { supabase, authCheck }, params }) => {
	const {session } = await authCheck();
	const form = await superValidate(CommentSchema);
	const { data: post, error: postErrors } = await supabase
		.from('blog')
		.select('*, vote(id)')
		.eq('id', params.id).single();

	if (postErrors) {
		return { error: postErrors.message };
	}

	const { data: comments, error: commentErrors } = await supabase
		.from('comment')
		.select('*')
		.eq('blog_id', params.id);
	if (commentErrors) return { error: commentErrors.message };

	return { post, comments, session: session, form };
}) satisfies PageServerLoad;

export const actions : Actions = {
	default: async ({ locals: { supabase, authCheck }, params, request }) => {
		const { conditional, returnError, session } = await authCheck();
		if (conditional) return returnError();

		const { data } = await superValidate(request, CommentSchema);
		const {error } = await supabase.from('comment').insert({ body: data.body, user_id: session?.user?.id, blog_id: params.id });
		if (error) return { error: error.message };
	}
};