import type {PageServerLoad} from './$types';

export const load = (async ({locals : {supabase}}) => {
    const { data: posts, error : postErrors } = await supabase.from('blog')
        .select('id, title, created_at, body, users (id, name)');
    if (postErrors) {return {error : postErrors.message}};

    return { posts };
}) satisfies PageServerLoad;