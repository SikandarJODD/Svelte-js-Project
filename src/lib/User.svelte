<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  let dispatch = createEventDispatcher();

  export let user;
  export let i;

  function removeUser() {
    dispatch("remove", user.id);
  }
</script>

<main transition:fade class="relative">
  <div class="card">
    <button
      on:click={removeUser}
      class="absolute text-center top-2 opacity-0 right-3  mint">X</button
    >
    <img src={user.img} alt={user.name} width="128" />
    <h2 class="text-xl text-slate-700 font-semibold ">{i + 1}. {user.name}</h2>
    <p class=" text-slate-500">{user.email}</p>
  </div>
</main>

<style>
  .card {
    border-radius: 15px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 20px;
    border: 1px solid grey;
    transition: all 0.3s ease;
  }
  .card:hover {
    border-radius: 15px;
    transition: all 0.3s ease;
    background: linear-gradient(to bottom, lightblue, transparent);
    border: 1px solid black;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transform: scale(1.04);
  }
  .card:hover .mint {
    opacity: 0.78;
  }
  .card:hover h2 {
    color: rgb(41, 41, 41);
  }
  img {
    margin: 5px;
  }
</style>
