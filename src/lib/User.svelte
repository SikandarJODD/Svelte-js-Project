<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();

  export let user;
  export let i;

  function removeUser() {
    dispatch("remove", user.id);
  }
</script>

<main class="relative">
  <div class="card">
    <button
      on:click={removeUser}
      class="absolute text-center top-1 right-2 opacity-0 mint">X</button
    >
    <img src={user.img} alt={user.name} width="128" />
    <h2 class="text-xl text-sky-600 font-semibold ">{i + 1}. {user.name}</h2>
    <p>{user.email}</p>
  </div>
</main>

<style>
  .card {
    border-radius: 15px;
    padding: 2.1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card:hover {
    border-radius: 15px;
    transition: all 0.3s ease;
    background: rgb(192, 216, 241);
  }
  .card:hover .mint {
    opacity: 0.78;
  }
  img {
    margin: 5px;
  }
</style>
