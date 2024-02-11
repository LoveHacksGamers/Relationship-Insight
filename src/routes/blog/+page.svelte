<script lang="ts">
    import { onMount } from 'svelte';
    import type { PageData } from './$types';
    export let data: PageData;
    const posts = data.posts
    console.log(posts)
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
            {#each posts as post (post.id)}
                {post}
                <li class="mb-4">
                    <div class="border p-4 rounded">
                        <h2 class="text-xl font-bold mb-2">
                            <a href={`blog/${post.id}`} class="no-underline text-blue-500 font-bold hover:underline">{post.title}</a>
                        </h2>
                        <p class="mb-2 text-black">{post.body}</p>
                        <div class="flex justify-between items-center text-gray-600">
                            <span>Published on {new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                </div>
                </li>
            {/each}
        </ul>
    </div>
</main>
