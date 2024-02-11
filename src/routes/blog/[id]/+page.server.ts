import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase }, params }) => {
	const { data: posts, error: postErrors } = await supabase
		.from('blog')
		.select('*, vote(id)')
		.eq('id', params.id);

	if (postErrors) {
		return { error: postErrors.message };
	}
	const post = posts[0];
	const { data: comments, error: commentErrors } = await supabase
		.from('comment')
		.select('*')
		.eq('blog_id', params.id);

	if (commentErrors) return { error: commentErrors.message };

	return { post, comments };
}) satisfies PageServerLoad;
