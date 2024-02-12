import type { PageServerLoad } from './$types';
import { PostSchema } from "$lib/validate";
import { superValidate } from 'sveltekit-superforms/server';
import type { Actions } from '@sveltejs/kit';
import {redirect} from "sveltekit-flash-message/server";

export const load = (async ({locals : {authCheck}}) => {
    const form = await superValidate(PostSchema);
    const {conditional, returnError} = await authCheck();
    if (conditional) return returnError();
    return {form};
}) satisfies PageServerLoad;


export const actions : Actions = {
    default: async ({locals : {supabase, authCheck}, request, cookies}) => {
        const {conditional, session, returnError} = await authCheck();
        if (conditional) return returnError();
        const form = await superValidate(request, PostSchema);
        if (!form.valid) return {error : form.errors}

        const {title, body} = form.data;
        const {data : blog, error} = await supabase.from('blog').insert({title, body, user_id: session?.user?.id})
        if (error) return {error : error.message}
        console.log(blog, error)

        throw redirect(
            '/blog',
            {
                message: 'Post Created',
                type: 'success'
            },
            cookies
        )
    }
}