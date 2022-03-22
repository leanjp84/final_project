<template>
<div class="navbar bg-secondary text-white justify-between">
  <img class="w-12" src="src/assets/logo-white.png" alt="logo">
  <a class="btn btn-ghost normal-case text-xl">To do App</a>
  <button @click="logout" class="btn btn-outline text-white">Log out</button>
</div>
</template>


<script>
import { supabase } from "../supabase";
import { useRouter } from "vue-router";

    // Log out function
    async function logout () {
      let { error } = await supabase.auth.signOut();
      if (error) throw error;
      alert("See you next time");
      router.push({ path: '/auth' });
      return {logout, user};
    }; 


</script>