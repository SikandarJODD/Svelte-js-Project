<script>
  import { createEventDispatcher, onMount } from "svelte";
  import App from "../App.svelte";
  import User from "./User.svelte";

  let newUser = {};

  let dispatch = createEventDispatcher();

  let onSubmitForm = () => {
    dispatch("submitForm", newUser);
    newUser.name = ""; // console.log(newUser);
    newUser.email = ""; // console.log(newUser);
    newUser.active = false; // console.log(newUser);
  };
</script>

<div class="flex justify-center my-3 transition-all  shd">
  <main class="w-80 rounded-lg border border-gray-500">
    <form on:submit|preventDefault={onSubmitForm}>
      <div>
        <label for="username">Username : </label>
        <input
          type="text"
          name="username"
          id="username"
          bind:value={newUser.name}
          required
        />
      </div>
      <div>
        <label for="userEmail">Email : </label>
        <input
          bind:value={newUser.email}
          type="email"
          name="userEmail"
          id="userEmail"
          required
        />
      </div>
      <div>
        <label for="userActive">Active : </label>
        <input
          bind:checked={newUser.active}
          type="checkbox"
          name="userActive"
          id="userActive"
        />
      </div>
      <div>
        <button
          id="submit-button"
          class="bg-blue-200 p-2 m-2 rounded-lg hover:bg-blue-400 transition-all"
          >Submit</button
        >
      </div>
    </form>
  </main>
</div>

<style>
  form {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    border-radius: 10px;
  }
  form input {
    margin: 15px 10px;
    border: 1px solid rgb(52, 51, 51);
    border-radius: 5px;
    padding: 1px 5px;
  }
  form div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  form div:nth-child(1) {
    border-bottom: 1px solid grey;
  }
</style>
