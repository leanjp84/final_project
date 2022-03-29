<template>
  <div
    class="navbar bg-gradient-to-r from-fuchsia-600 to-indigo-800 text-white justify-between"
  >
    <img class="w-12" src="/src/assets/logo-white.png" alt="logo" />
    <a class="btn btn-ghost normal-case text-xl">To do App</a>

    <button
      @click.prevent="signOut"
      class="btn btn-outline text-white cursor-pointer"
    >
      Log out
    </button>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";

const router = useRouter();
// get user from store
const user = computed(() => useUserStore().$state.user);

// Logout function
//   async function logout() {
//   console.log('logging out')

//   try {
//     const { error, user } = await supabase.auth.signOut()

//     if (error) {
//       alert('Error signing out')
//       console.error('Error', error)
//       return
//     }
//     router.push({path: "/auth"});

//     alert('You have signed out!')
//   } catch (err) {
//     alert('Unknown error signing out')
//     console.error('Error', err)
//   }
// }
// logout function2
async function signOut() {
  await useUserStore().signOut();
  alert("See you next time!!");
  router.push({ path: "/auth" });
}
</script>
