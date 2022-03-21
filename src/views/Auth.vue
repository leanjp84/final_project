<template>
  <div>
	  <div class="min-h-screen bg-no-repeat bg-cover bg-center bg-[url('/src/assets/milad-fakurian-nY14Fs8pxT8-unsplash.jpg')]">
    	<div class="flex justify-center">
        		<div class="min-h-screen w-1/2 flex justify-center items-center">
    	 			<div >
						<sign-up v-if="isSignUp" />
						<sign-in v-else />
						<br>
						<button class="text-white" @click="isSignUp = !isSignUp">
						{{
						isSignUp
						? "Already have an account? Sign In"
						: "Don't have an account yet? Sign Up"
						}}
						</button>
  					</div>
  				</div>
  			</div>
	 	</div>
	</div>
</template>

<script>
import { ref } from "vue";
import SignUp from "../components/SignUp.vue";
import SignIn from "../components/SignIn.vue";
export default {
  components: { SignUp, SignIn },
  setup() {
    const isSignUp = ref(true);

    return {
      isSignUp,
    };
  },
};
</script>

<style scoped>
</style>