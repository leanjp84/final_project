<template>
  <div class="card w-96 shadow-xl bg-white">
    <!-- error handling -->
    <div v-if="errorMsg" class="mb10 p-4 rounded-md bg-white"><p class="text-red-500">{{errorMsg}}</p>
    </div>
    <!-- sign up -->
    <form @submit.prevent="register">
     <div class="card-body">
        <div class="w-24 mx-auto"><img class="mx-auto" src="src/assets/logo-round.png" alt="logo"></div><br>
         <span class="text-sm text-gray-900">Welcome </span>
         <h1 class="text-2xl font-bold">Create your account</h1>
        </div>
        <div class="my-3 mr-5 ml-5">
          <label class="block text-md mb-2" for="name">Name</label>
          <input required class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="name" placeholder="name" v-model="name" id="name">
        </div>
        <div class="my-3 mr-5 ml-5">
          <label class="block text-md mb-2" for="email">Email</label>
          <input required class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="email"
          v-model="email" id="email">
          </div>
        <div class="mt-5 mr-5 ml-5">
          <label class="block text-md mb-2" for="password">Password</label>
          <input required class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password" v-model="password" id="password">
        </div>
        <div class="mt-5 mr-5 ml-5">
          <label class="block text-md mb-2" for="confirmPassword">Repeat Password</label>
          <input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="confirmPassword" placeholder="repeat password" v-model="confirmPassword" id="confirmPassword">
         </div>
        <div class="card-actions justify-end mr-5 ml-5">
          <button type="submit" class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Register</button>          
       </div> <br>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
export default {
  name: "register",
  setup() {
    // Create data / vars
    const router = useRouter();
    const email = ref(null);
    const password = ref(null);
    const confirmPassword = ref(null);
    const errorMsg = ref(null);
    // Register function
    const register = async () => {
      if (password.value === confirmPassword.value) {
        try {
          const { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
          });
          if (error) throw error;
          router.push({ name: "signIn" });
        } catch (error) {
          errorMsg.value = error.message;
          setTimeout(() => {
            errorMsg.value = null;
          }, 5000);
        }
        return;
      }
      errorMsg.value = "Error: Passwords do not match";
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    };
    return { email, password, confirmPassword, errorMsg, register };
  },
};

</script>