<!-- CreatePost.svelte -->
<script lang="ts">
    import type {PageData} from './$types'
    import {superForm} from "sveltekit-superforms/client";

    export let data : PageData;
    const {form, enhance, constraints, errors} = superForm(data.form);
</script>

<main class="max-w-3xl mx-auto p-8 bg-pink-100 rounded"> <!-- Use a light hue of pink with increased padding and rounding -->
    <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl text-gray-800">Create Post</h1>
        <a href="/blog" class="btn variant-filled-secondary">
            Back to Blog
        </a>
    </div>
    <form method="post" use:enhance class="bg-white p-8 rounded shadow-md">
        <label for="title" class="block text-sm font-medium text-gray-700 mb-2">Title
        <input type="text" name="title" bind:value={form.title} class="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
               aria-invalid={$errors.title ? 'true' : undefined}
               {...$constraints.title}
        />
            {#if $errors.title}<span class="invalid">{$errors.title}</span>{/if}
        </label>
        <label for="body" class="block mt-4 text-sm font-medium text-gray-700 mb-2">Description
        <textarea name="body" bind:value={form.body} class="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" rows="4"
                  aria-invalid={$errors.body ? 'true' : undefined}
                  {...$constraints.body}
        ></textarea>
            {#if $errors.body}<span class="invalid">{$errors.body}</span>{/if}
        </label>
        <button type="submit" class="btn variant-filled-primary">
            Submit Post
        </button>
    </form>
</main>
