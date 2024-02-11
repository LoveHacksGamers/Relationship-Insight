<!-- CreatePost.svelte -->
<script lang="ts">
    import { goto } from '$app/navigation';
    import type { BlogPost } from './types';

    let newPostTitle = '';
    let newPostDescription = '';

    const submitPost = () => {
        // Navigate back to the blog page
        goto('/blog');
    };

    const navigateBackToBlog = () => {
        goto('/blog');
    };
</script>

<main class="max-w-3xl mx-auto p-8 bg-pink-100 rounded"> <!-- Use a light hue of pink with increased padding and rounding -->
    <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl text-gray-800">Create Post</h1>
        <button on:click={navigateBackToBlog} class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Back to Blog
        </button>
    </div>
    <form on:submit|preventDefault={submitPost} class="bg-white p-8 rounded shadow-md">
        <label for="postTitle" class="block text-sm font-medium text-gray-700 mb-2">Title</label>
        <input type="text" id="postTitle" bind:value={newPostTitle} class="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />

        <label for="postDescription" class="block mt-4 text-sm font-medium text-gray-700 mb-2">Description</label>
        <textarea id="postDescription" bind:value={newPostDescription} class="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" rows="4"></textarea>

        <button type="submit" class="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Submit Post
        </button>
    </form>
</main>
