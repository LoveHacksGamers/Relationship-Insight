<!-- Install Skeleton CSS: https://github.com/dhg/Skeleton/releases -->
<link rel="stylesheet" href="path/to/skeleton.css">

<script lang="ts">
    import { onMount } from 'svelte';
    import type { PageData } from './$types';

    export let data: PageData;

    let upvotedPosts = new Set<number>();
    let upvoteCounts: { [key: number]: number } = {};

    const upvote = (postId: number) => {
        if (!upvotedPosts.has(postId)) {
            // Perform the upvote logic here (e.g., send a request to the server)
            console.log(`Upvoted post with ID ${postId}`);
            
            // Update the set to track the upvoted posts
            upvotedPosts.add(postId);

            // Update the upvote count for the post
            upvoteCounts[postId] = (upvoteCounts[postId] || 0) + 1;
        }
    };
</script>

<main class="max-w-2xl mx-auto p-4 bg-pink-100"> <!-- Use a light pink color -->
    <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl text-gray-700">Blog Posts</h1>
        <a href="/blog/createPost" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create post
        </a>
    </div>
    
    <!-- Separate container for blog posts with a white background -->
    <div class="bg-white p-4 rounded">
        <ul class="list-none p-0">
            {#each data.posts as post (post.id)}
                <li class="mb-4">
                    <div class="border p-4 rounded">
                        <h2 class="text-xl font-bold mb-2">
                            <a href={`blog/${post.id}`} class="no-underline text-blue-500 font-bold hover:underline">{post.title}</a>
                        </h2>
                        <p class="mb-2">{post.excerpt}</p>
                        <div class="flex justify-between items-center text-gray-600">
                            <button on:click={() => upvote(post.id)} class="flex items-center cursor-pointer transition transform hover:scale-110">
                                {upvotedPosts.has(post.id) ? '▲ Upvoted' : '▲ Upvote'}
                                <span class="ml-1">{upvoteCounts[post.id] || 0}</span>
                            </button>
                            <span>Published on {new Date(post.date).toLocaleDateString()}</span>
                        </div>
                    </div>
                </li>
            {/each}
            <!-- Skeleton loading effect for additional blog posts -->
            {#each Array(3) as _, i}
                <li class="mb-4 skeleton"></li>
            {/each}
        </ul>
    </div>
</main>

<style>
    .skeleton {
        height: 20px; /* Adjust the height as needed */
        background: linear-gradient(90deg, #fce7f3 25%, #f9c5db 50%, #fce7f3 75%); /* Light pink gradient */
        background-size: 200% 100%;
        animation: skeleton-loading 1.5s infinite;
    }

    @keyframes skeleton-loading {
        to {
            background-position: -200% 0;
        }
    }
</style>
