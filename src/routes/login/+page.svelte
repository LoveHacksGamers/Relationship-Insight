<script lang="ts">
  import type { PageData } from './$types';
  import { superForm } from 'sveltekit-superforms/client';

  export let data: PageData;

  // Client API:
  const { form, constraints, errors, enhance } = superForm(data.form);
</script>

<main class="center">
    <form class="flex flex-col card p-3" method="POST" use:enhance>
      <h1>Log In</h1>
      <label class="py-2">
        Email:
        <input type="text" name="email" class="input p-1" placeholder="email@domain.com"
           aria-invalid={$errors.email ? 'true' : undefined}
           bind:value={$form.email}
           {...$constraints.email} />
        {#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
      </label>
      <label class="py-2">
        Password:
        <input type="password" name="password" class="input p-1" placeholder="password" bind:value={$form.password}
               aria-invalid={$errors.password ? 'true' : undefined}
               {...$constraints.password}
        >
        {#if $errors.password}<span class="invalid">{$errors.password}</span>{/if}
      </label>
      <button type="submit" class="btn variant-filled-primary">Login</button>
    </form>
</main>
