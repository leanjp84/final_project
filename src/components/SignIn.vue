<template>
  <div class="card w-96 shadow-xl bg-white">
    <!-- error handling -->
    <div v-if="errorMsg" class="alert alert-error shadow-lg">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{{ errorMsg }}.</span>
      </div>
    </div>
    <!-- sign in -->
    <form @submit.prevent="login">
      <div class="card-body">
        <div class="w-24 mx-auto">
          <img class="mx-auto" src="src/assets/logo-round.png" alt="logo" />
        </div>
        <br />
        <span class="text-sm text-gray-900">Welcome back</span>
        <h1 class="text-2xl font-bold">Login to your account</h1>
      </div>
      <div class="my-3 mr-5 ml-5">
        <label class="block text-md mb-2" for="email">Email</label>
        <input
          required
          class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
          type="email"
          name="email"
          placeholder="email"
          v-model="email"
          id="email"
        />
      </div>
      <div class="mt-5 mr-5 ml-5">
        <label class="block text-md mb-2" for="password">Password</label>
        <input
          class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
          type="password"
          name="password"
          placeholder="password"
          v-model="password"
          id="password"
        />
      </div>
      <div class="card-actions justify-end mr-5 ml-5">
        <button
          @click="signIn"
          type="submit"
          class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100"
        >
          Login now
        </button>
        <p class="“”">
          Don’t have an account?
          <PersonalRouter
            class="text-green-500"
            :route="route"
            :routingName="routingName"
          />
        </p>
      </div>
      <br />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";
import PersonalRouter from "../components/PersonalRouter.vue";

// Create data / vars
const router = useRouter();
const email = ref(null);
const password = ref(null);
const errorMsg = ref(null);

// Personal Routing Component using Props to pass in data & routes
const route = "/auth/sign-up";
const routingName = "Sign Up";

// Login function without using Pinia Store

// const login = async () => {
//   try {
//     const { error } = await supabase.auth.signIn({
//       email: email.value,
//       password: password.value,
//     });
//     if (error) throw error;
//     alert("You've Signed In successfully");
//     await router.push({ path: "/" });
//   } catch (error) {
//     errorMsg.value = `Error: ${error.message}`;
//     setTimeout(() => {
//       errorMsg.value = null;
//     }, 7000);
//   }
// };

// Login Function #2 using Pinia store to reUtilize functions throughout the project

async function signIn() {
  try {
    await useUserStore().logIn(email.value, password.value);
    await router.push({ path: "/" });
  } catch (error) {
    errorMsg.value = `Error: ${error.message}`;
    setTimeout(() => {
      errorMsg.value = null;
    }, 7000);
  }
}
</script>
