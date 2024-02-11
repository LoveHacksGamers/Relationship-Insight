<script lang="ts">
    import type {PageData} from './$types';
    import {superForm} from "sveltekit-superforms/client";

    export let data: PageData;
    const {form, enhance} = superForm(data.form)
</script>


<main class="flex items-center mt-4 flex-col">
    <div>

        <h1 class="text-3xl font-bold mb-4">{data.post.title}</h1>
        <p>{data.post.body}</p>

        {#if data.session}
            <form method="post" use:enhance class="mb-4">
                <div class="mb-4 inline-flex">
                    <label for="body" class="text-gray-700">Comment:
                        <input type="text" id="body" name="body" bind:value={$form.body} class="border rounded w-full py-2 px-3 text-gray-700 leading-tight inline focus:outline-none focus:shadow-outline-blue focus:border-blue-300">
                        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue inline">
                            Add Comment
                        </button>
                    </label>
                </div>
            </form>
        {/if}

        {#each data.comments as comment}
            <p class="mb-2">{comment.body}</p>
        {/each}
    </div>
</main>
