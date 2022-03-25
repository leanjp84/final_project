<template>
  <div
    class="min-h-screen bg-no-repeat bg-cover bg-center bg-[url('/src/assets/milad-fakurian-nY14Fs8pxT8-unsplash.jpg')]"
  >
    <div class="flex justify-center">
      <div class="min-h-screen w-1/2 flex justify-center items-center">
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
        <!-- email confirmation -->
        <!--  <div v-show="confirmation" class="alert alert-success shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Please confirm your email to finishing registering: {{email}}</span>
        </div>
      </div> -->
        <div class="card w-96 shadow-xl bg-white">
          <!-- sign up -->
          <form @submit.prevent="register3">
            <div class="card-body">
              <div class="w-24 mx-auto">
                <img
                  class="mx-auto"
                  src="/src/assets/logo-round.png"
                  alt="logo"
                />
              </div>
              <br />
              <span class="text-sm text-gray-900">Welcome </span>
              <h1 class="text-2xl font-bold">Create your account</h1>
            </div>
            <div class="my-3 mr-5 ml-5">
              <label class="block text-md mb-2" for="name">Name</label>
              <input
                required
                class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                type="text"
                name="name"
                placeholder="name"
                v-model="name"
                id="name"
              />
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
                required
                class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                type="password"
                name="password"
                placeholder="password"
                v-model="password"
                id="password"
              />
            </div>
            <div class="mt-5 mr-5 ml-5">
              <label class="block text-md mb-2" for="confirmPassword"
                >Repeat Password</label
              >
              <input
                class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                type="password"
                name="confirmPassword"
                placeholder="repeat password"
                v-model="confirmPassword"
                id="confirmPassword"
              />
            </div>
            <div class="card-actions justify-end mr-5 ml-5">
              <button
                type="submit"
                class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100"
              >
                Register
              </button>
              <p class="m-auto">
                Already have an account?
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";
import { storeToRefs } from "pinia";
import PersonalRouter from "../components/PersonalRouter.vue";

// Personal Routing Component using Props to pass in data & routes
const route = "/auth";
const routingName = "Sign In";

// Create data / vars
const router = useRouter();
const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
const errorMsg = ref(null);

// Register function withou using Pinia
/* const register = async () => {
  if (password.value === confirmPassword.value) {
    try {
      const { error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      });
      if (error) throw error;
      alert("Please confirm your email to finishing register");
      router.push({ path: "/auth" });
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
}; */

// register using Pinia
const register2 = async () => {
  if (password.value === confirmPassword.value) {
    try {
      await useUserStore().signUp(email.value, password.value);
      alert("Please confirm your email to finishing register");
      router.push({ path: "/auth" });
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

async function register3() {
  if (password.value === confirmPassword.value) {
    try {
      await useUserStore().signUp(email.value, password.value);
      // alert("Please confirm your email to finishing register");
      router.push({ path: "/auth" });
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
}
</script>
