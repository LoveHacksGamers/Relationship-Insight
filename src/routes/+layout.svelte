<script lang="ts">
	import '../app.pcss';
  import type { LayoutData} from "./$types";
  import {AppBar, AppShell, initializeStores, Toast} from "@skeletonlabs/skeleton";

  initializeStores();

  export let data : LayoutData;
</script>
<Toast />
<AppShell>
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead"><a class="btn btn-ghost text-xl" href="/">Relationship Insight</a></svelte:fragment>
      <svelte:fragment slot="trail">
        <a class="btn btn-ghost" href="/blog">Blogs</a>
        {#if !data.session}
          <a class="btn btn-ghost" href="/login">Login</a>
          <a class="btn btn-ghost" href="/signup">Sign Up</a>
        {/if}
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <slot/>
</AppShell>
