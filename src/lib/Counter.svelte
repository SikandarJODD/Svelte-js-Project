<script>
  let a = 0;
  function handleClick() {
    a++;
  }
  function Bro() {
    a--;
  }
</script>

<button class="btn" on:click={handleClick}>Bro Code</button>
<button class="btn" on:click={Bro}>Bro Code</button>
<h1>{a}</h1>

<style>
  .btn {
    margin: 20px;
  }
</style>
