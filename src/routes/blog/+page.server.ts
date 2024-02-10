import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase } }) => {
	const { data: posts, error: postErrors } = await supabase.from('blog').select('*');
	if (postErrors) {
		return { error: postErrors.message };
	}

	return { posts };
}) satisfies PageServerLoad;
