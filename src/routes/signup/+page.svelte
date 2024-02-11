<script lang="ts">
  import type { PageData } from './$types';
  import { superForm } from 'sveltekit-superforms/client';

  export let data: PageData;

  // Client API:
  const { form, constraints, errors, enhance } = superForm(data.form);
</script>


<main class="center" use:enhance>
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
          name="username"
          class="input p-1"
          placeholder="Display Name"
          aria-invalid={$errors.username ? 'true' : undefined}
          bind:value={$form.username}
          {...$constraints.username} />
      {#if $errors.username}<span class="invalid">{$errors.username}</span>{/if}
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
      <input type="password" name="confirm" class="input p-1" placeholder="confirm password"
             aria-invalid={$errors.confirm ? 'true' : undefined}
             bind:value={$form.confirm}
             {...$constraints.confirm} />
      {#if $errors.confirm}<span class="invalid">{$errors.confirm}</span>{/if}
    </label>
    <label class="py-2">
      Date Of Birth:
      <input
          type="date"
          name="dob"
          class="input p-1"
          placeholder="YYYY-MM-DD"
          aria-invalid={$errors.dob ? 'true' : undefined}
          bind:value={$form.dob}
          {...$constraints.dob} />
      {#if $errors.dob}<span class="invalid">{$errors.dob}</span>{/if}
    </label>
    <label class="py-2">
      Gender
      <select class="select" name="gender">
        {#each data.genders as gender}
          <option value={gender.id}>{gender.gender}</option>
        {/each}
      </select>
      {#if $errors.gender}<span class="invalid">{$errors.gender}</span>{/if}
    </label>
    <button type="submit" class="btn variant-filled-primary">Sign up</button>
  </form>
</main>

