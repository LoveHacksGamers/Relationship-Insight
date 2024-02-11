import type { PageServerLoad } from './$types';
import { PostSchema } from "$lib/validate";
import { superValidate } from 'sveltekit-superforms/server';
import type { Actions } from '@sveltejs/kit';

export const load = (async () => {
    const form = await superValidate(PostSchema);
    return {form};
}) satisfies PageServerLoad;


export const actions : Actions = {
    default: async ({locals : {supabase}, request}) => {
        const form = await superValidate(request, PostSchema);
        if (!form.valid) return {error : form.errors}

        const {postTitle, postDiscription} = form.data;

        await supabase.from('blog').insert({title : postTitle, body: postDiscription})

        return {form}
    }
}