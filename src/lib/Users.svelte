<script>
  import { detach, onMount } from "svelte/internal";
  import { tweened } from "svelte/motion";

  // @ts-nocheck

  import FilterUser from "./FilterUser.svelte";
  import NewUser from "./NewUser.svelte";
  import User from "./User.svelte";
  import UserForm from "./UserForm.svelte";
  import { users, remove, AddNewUser } from "../store";

  // let $users = [];

  // users.subscribe((val) => (users = val));
  $: filterUser = $users;
  function handleChange({ detail }) {
    if (detail === "false") {
      filterUser = $users.filter((user) => user.active === false);
    } else if (detail === "true") {
      filterUser = $users.filter((user) => user.active === true);
    } else {
      filterUser = $users;
    }
  }

  let isShow = false;
  let broClic = () => {
    isShow = false ? isShow === true : isShow === false;
  };

  const progress = tweened(0, {
    duration: 900,
  });

  onMount(() => {
    progress.set(filterUser.length);
  });
</script>

<div>
  <h1 class="text-3xl text-center font-semibold my-4">List of users</h1>
  <div class="flex justify-center items-center my-5">
    <FilterUser on:handleChange={handleChange} />
    <NewUser on:broClic={broClic} />
  </div>
  <div>
    <progress min="0" max="12" value={$progress} class="w-full px-52" />
  </div>
  <div class="transition-all">
    {#if isShow}
      <UserForm on:submitForm={AddNewUser} />
    {/if}
  </div>
</div>
<div class="flex justify-center px-20  flex-wrap ">
  {#each filterUser as user, i (user.id)}
    <User on:remove={remove} {user} {i} />
  {:else}
    <p>No User Found</p>
  {/each}
</div>
