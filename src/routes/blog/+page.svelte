<script lang="ts">
    import { onMount } from 'svelte';
    import type { PageData } from './$types';
    export let data: PageData;

    let upvotedPosts = new Set<number>();
    let upvoteCounts: { [key: number]: number } = {};

    const upvote = async (postId: number) => {
        if (data.user_id) {
            // Perform the upvote logic here (e.g., send a request to the server)

            const res = await fetch(`/api/blog/${postId}/`, { method: 'POST', body: JSON.stringify({ user_id: data.user_id })});
            console.log(res)
        }
    };
</script>

<main class="max-w-2xl mx-auto p-4 variant-filled-surface"> <!-- Use a light pink color -->
    <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl text-gray-700">Blog Posts</h1>
        <div class="flex justify-between items-center mb-4">
            <a href="/blog/post" class="btn variant-filled-secondary">
                Create post
            </a>
        </div>
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
                        <p class="mb-2 text-black">{post.body}</p>
                        <div class="flex justify-between items-center text-gray-600">
                            <button on:click={() => upvote(post.id)} class="flex items-center cursor-pointer transition transform hover:scale-110">
                                {upvotedPosts.has(post.id) ? '▲ Upvoted' : '▲ Upvote'}
                                <span class="ml-1">{post.vote.length}</span>
                            </button>
                            <span>Published on {new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                </div>
                </li>
            {/each}
        </ul>
    </div>
</main>
