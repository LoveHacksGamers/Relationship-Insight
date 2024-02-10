<script lang="ts">
    import type {PageData} from './$types';

    export let data: PageData;
</script>


<main>
    <h1>Blog Posts</h1>
    <ul>
        {#each data.posts as post}
            <li>
                <a href={`blog/${post.id}`}>{post.title}</a>
            </li>
        {/each}
    </ul>
</main>

