import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase, authCheck } }) => {
	const { data: posts, error: postErrors } = await supabase.from('blog').select('*, vote(id)');
	console.log(posts)
	if (postErrors) {
		console.log(postErrors.message)
		return { error: postErrors.message };
	}

	return { posts};
}) satisfies PageServerLoad;