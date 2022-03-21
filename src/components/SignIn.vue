<template>
  <div class="card w-96 shadow-xl bg-white ">
    <form @submit="signIn">
        <div class="card-body">
            <span class="text-sm text-gray-900">Welcome back</span>
            <h1 class="text-2xl font-bold">Login to your account</h1>
        </div>
        <div class="my-3 mr-5 ml-5">
            <label class="block text-md mb-2" for="email">Email</label>
            <input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="password" placeholder="email">
         </div>
        <div class="mt-5 mr-5 ml-5">
            <label class="block text-md mb-2" for="password">Password</label>
            <input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password">
         </div>
        <div class="card-actions justify-end mr-5 ml-5">
            <button type="submit" class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Login now</button>          
        </div>
        <br>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSignin = async () => {
      try {
        // Use the Supabase provided method to handle the signin
        const { error } = await supabase.auth.signIn({
          email: email.value,
          password: password.value,
        });
        if (error) throw error;
      } catch (error) {
        alert(error.error_description || error.message);
      }
    };

    return {
      email,
      password,
      handleSignin,
    };
  },
};
</script>