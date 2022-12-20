<script>
  import { createEventDispatcher } from "svelte";

  //   export let handleChange;
  const dispatch = createEventDispatcher();
  const handleChange = (e) => {
    // dispatch an event
    dispatch("handleChange", e.target.value);
  };
</script>

<div class="mx-5">
  <label for="user-filter">Filter User</label>
  <select
    name="user-filter"
    id="user-filter"
    class="border rounded-lg px-4 py-2 ml-4 "
    on:change={handleChange}
  >
    <option value={null}>All</option>
    <option value={true}>Active</option>
    <option value={false}>In Active</option>
  </select>
</div>
