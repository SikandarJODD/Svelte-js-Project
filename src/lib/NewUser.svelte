<script>
  import { createEventDispatcher } from "svelte";

  //   export let handleChange;
  const dispatch = createEventDispatcher();
  const broClic = () => {
    // dispatch an event
    dispatch("broClic");
  };
</script>

<div>
  <button on:click={broClic}> New User </button>
</div>

<style>
  button {
    padding: 10px 15px;
    background: rgb(159, 218, 241);
    border-radius: 10px;
    transition: all 0.3s ease;
  }
  button:hover {
    transition: all 0.3s ease;
    box-shadow: 4px 5px rgb(28, 28, 28);
    transform: translate(-3px, -3px);
  }
</style>
