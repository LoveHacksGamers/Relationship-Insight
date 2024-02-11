<script lang="ts">
    import type {PageData} from './$types';

    export let data: PageData;
</script>


<main>
    <h1>{data.vote} {data.post.title}</h1>

    {#each data.comments as comment}
        <li>{comment.body}</li>
    {/each}
</main>

