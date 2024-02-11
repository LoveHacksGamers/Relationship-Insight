<!-- CreatePost.svelte -->
<script lang="ts">
    import { goto } from '$app/navigation';
    import type { PageData } from './types'; // Adjust the path accordingly

    let newPostTitle = '';
    let newPostDescription = '';

    const submitPost = () => {
        // Perform logic to submit the post with newPostTitle and newPostDescription
        console.log('Submitted post:', { title: newPostTitle, description: newPostDescription });

        // After submitting, you may want to navigate back to the main page or perform other actions
        // For example, navigate back to the main page:
        goto('/');
    };

    const navigateBackToBlog = () => {
        goto('/');
    };
</script>

<main class="max-w-2xl mx-auto p-4">
    <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl text-gray-700">Create Post</h1>
        <button on:click={navigateBackToBlog} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Blog
        </button>
    </div>
    <form on:submit|preventDefault={submitPost}>
        <label for="postTitle" class="block text-sm font-medium text-gray-600">Title</label>
        <input type="text" id="postTitle" bind:value={newPostTitle} class="mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 w-full" />

        <label for="postDescription" class="block mt-4 text-sm font-medium text-gray-600">Description</label>
        <textarea id="postDescription" bind:value={newPostDescription} class="mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 w-full" rows="4"></textarea>

        <button type="submit" class="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Submit Post
        </button>
    </form>
</main>
