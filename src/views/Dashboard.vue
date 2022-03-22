<template>
<div>

</div>
  <h1>Hola dashboard</h1>
  <button @click.prevent="logout">Sign Out</button>
</template>

<script setup>
import { ref, computed } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

    //get user
    const user = computed (() => storeToRefs.state.user);

    //set up ref to router
    const router = useRouter();

    // Log out function
    async function logout() {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      alert("See you next time");
      router.push({ path: '/auth' });
      return {logout, user};
    };
</script>

<style>

</style>