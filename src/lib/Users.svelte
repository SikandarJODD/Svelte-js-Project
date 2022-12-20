<script>
  // @ts-nocheck

  import FilterUser from "./FilterUser.svelte";
  import NewUser from "./NewUser.svelte";
  import User from "./User.svelte";

  let users = [
    {
      id: 1,
      img: "/src/assets/profile.png",
      name: "Parth Sharma",
      email: "parthsharma@gmail.com",
      active: true,
    },
    {
      id: 2,
      img: "https://cdn-icons-png.flaticon.com/512/3237/3237472.png",
      name: "Martin Luther",
      email: "martin@gmail.com",
      active: true,
    },
    {
      id: 3,
      img: "https://cdn-icons-png.flaticon.com/512/506/506185.png",
      name: "John Lee",
      email: "john@gmail.com",
      active: false,
    },
    {
      id: 4,
      img: "https://cdn-icons-png.flaticon.com/512/2102/2102633.png",
      name: "Aryan Sathe",
      email: "aryan@gmd.com",
      active: true,
    },
    {
      id: 5,
      img: "https://cdn-icons-png.flaticon.com/512/552/552909.png",
      name: "Khushal Bhatt",
      email: "kushal@google.com",
      active: false,
    },
    {
      id: 6,
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      name: "Jeni Kosh",
      email: "jenikosh@google.com",
      active: true,
    },
    {
      id: 7,
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
      name: "Smita Shet",
      email: "smitashet@gmail.com",
      active: true,
    },
    {
      id: 8,
      img: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
      name: "Kriti Pawar",
      email: "kriti@gmail.com",
      active: false,
    },
    {
      id: 9,
      img: "https://cdn-icons-png.flaticon.com/512/2202/2202112.png",
      name: "Morgan Housel",
      email: "morganhousel@money.com",
      active: true,
    },
  ];

  $: filterUser = users;
  function handleChange({ detail }) {
    if (detail === "false") {
      filterUser = users.filter((user) => user.active === false);
    } else if (detail === "true") {
      filterUser = users.filter((user) => user.active === true);
    } else {
      filterUser = users;
    }
  }

  let remove = ({ detail }) => {
    users = users.filter((user) => user.id !== detail);
  };
</script>

<div>
  <h1 class="text-3xl text-center font-semibold my-4">List of users</h1>
  <div class="flex justify-center items-center my-5">
    <FilterUser on:handleChange={handleChange} />
    <NewUser />
  </div>
</div>
<div class="flex justify-center px-20  flex-wrap ">
  {#each filterUser as user, i (user.id)}
    <User on:remove={remove} {user} {i} />
  {:else}
    <p>No User Found</p>
  {/each}
</div>
