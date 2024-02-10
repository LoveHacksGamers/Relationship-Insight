<script lang="ts">
	import '../app.pcss';
  import type { LayoutData} from "./$types";
  import {AppBar, AppShell} from "@skeletonlabs/skeleton";
  export let data : LayoutData;
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead"><a class="btn btn-ghost text-xl" href="/">Relationship Insight</a></svelte:fragment>
      <svelte:fragment slot="trail">
        {#if !data.session}
          <a class="btn btn-ghost" href="/login">Login</a>
          <a class="btn btn-ghost" href="/signup">Sign Up</a>
        {:else}
          <a class="btn btn-ghost" href="/blog">Blogs</a>
        {/if}
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <slot/>
</AppShell>
