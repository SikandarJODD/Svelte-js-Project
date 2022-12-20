<script>
  import Modal from "./Modal.svelte";

  let isShow = false;
</script>

<div>
  <button on:click={() => (isShow = true)}> New User </button>
</div>
<div>
  {#if isShow}
    <Modal />
  {/if}
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
