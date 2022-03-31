<template>
  <div
    class="flex justify-around rounded-md bg-gradient-to-r from-slate-300 to-slate-200 shadow-lg m-6 p-2"
  >
    <div class="">
      <div>
        <h1 class="text-2xl font-bold text-accent">
          Welcome back {{ userName }}!
        </h1>
      </div>
      <div class="">You have {{ pendingTasks }} task(s) pending.</div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../store/user.js";
import { ref, reactive } from "vue";
import { supabase } from "../supabase";

const user = useUserStore();
const userEmail = useUserStore().user.email;
const userName = userEmail.split("@")[0];

//count pending tasks function // not working

const pendingTasks = "";

const countTasks = async () => {
  const { data, count } = await supabase
    .from("tasks")
    .select("is_completed", "Equal to false", { count: "exact" });
  pendingTasks = countTasks().value;
};
console.log(pendingTasks);
</script>
