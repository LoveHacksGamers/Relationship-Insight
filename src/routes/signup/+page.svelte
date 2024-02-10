<script lang="ts">
  import type { PageData } from './$types';
  import { superForm } from 'sveltekit-superforms/client';

  export let data: PageData;

  // Client API:
  const { form, constraints, errors } = superForm(data.form);
</script>


<main class="center">
  <form class="flex flex-col card p-3" method="POST">
    <h1>Sign Up</h1>
    <label class="py-2">
      Email:
      <input
          type="text"
          name="email"
          class="input p-1"
          placeholder="email@domain.com"
          aria-invalid={$errors.email ? 'true' : undefined}
          bind:value={$form.email}
          {...$constraints.email} />
      {#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
    </label>
    <label class="py-2">
      Display Name:
      <input
          type="text"
          name="Name"
          class="input p-1"
          placeholder="Display Name"
          aria-invalid={$errors.displayName ? 'true' : undefined}
          bind:value={$form.displayName}
          {...$constraints.displayName} />
      {#if $errors.displayName}<span class="invalid">{$errors.displayName}</span>{/if}
    </label>
    <label class="py-2">
      Password:
      <input type="password" name="password" class="input p-1" placeholder="password"
             aria-invalid={$errors.password ? 'true' : undefined}
             bind:value={$form.password}
             {...$constraints.password} />
      {#if $errors.password}<span class="invalid">{$errors.password}</span>{/if}
    </label>
    <label class="py-2">
      Confirm password:
      <input type="password" name="confirm password" class="input p-1" placeholder="confirm password"
             aria-invalid={$errors.passwordConfirmation ? 'true' : undefined}
             bind:value={$form.passwordConfirmation}
             {...$constraints.passwordConfirmation} />
      {#if $errors.passwordConfirmation}<span class="invalid">{$errors.passwordConfirmation}</span>{/if}
    </label>
    <label class="py-2">
      Date Of Birth:
      <input
          type="date"
          name="DOB"
          class="input p-1"
          placeholder="YYYY-MM-DD"
          aria-invalid={$errors.DOB ? 'true' : undefined}
          bind:value={$form.DOB}
          {...$constraints.DOB} />
      {#if $errors.DOB}<span class="invalid">{$errors.DOB}</span>{/if}
    </label>
    <label class="py-2">
      Gender
      <input
          type="text"
          name="Gender"
          class="input p-1"
          placeholder="Male/Female/Other/Furry"
          aria-invalid={$errors.Gender ? 'true' : undefined}
          bind:value={$form.Gender}
          {...$constraints.Gender} />
      {#if $errors.Gender}<span class="invalid">{$errors.Gender}</span>{/if}
    </label>
    <button type="submit" class="btn variant-filled-primary">Sign up</button>
  </form>
</main>

