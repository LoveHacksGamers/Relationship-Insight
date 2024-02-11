<script lang="ts">
    import type {PageData} from './$types';
    import {superForm} from "sveltekit-superforms/client";

    export let data: PageData;
    const {form, enhance} = superForm(data.form)
</script>


<main>
    <div class="flex items-center justify-center mt-4 flex-col">
    <h1>{data.vote} {data.post.title}</h1>
    {#if data.session}
        <form method="post" use:enhance>
            <input type="text" name="body" bind:value={$form.body}/>
            <button type="submit">Add comment</button>
        </form>
    {/if}
    {#each data.comments as comment}
        <p>{comment.body}</p>
    {/each}
    </div>
</main>

