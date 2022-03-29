<template>
  <div
    class="flex justify-around rounded-md bg-gradient-to-r from-slate-300 to-slate-200 shadow-lg m-6 p-2"
  >
    <div class="">
      <div>
        <h1 class="text-2xl font-bold text-accent">Welcome {{ userName }}!</h1>
      </div>
      <div>You have 0 task(s) pending</div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../store/user.js";
const user = useUserStore();
const userEmail = useUserStore().user.email;
const userName = userEmail.split("@")[0];
</script>
