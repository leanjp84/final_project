<template>
  <h1>Hola dashboard</h1>
  <button @click="signOut">Sign Out</button>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";

defineProps({
  msg: String,
});

const count = ref(0);
async function signOut() {
  const { error } = await supabase.auth.signOut();
}
</script>

<style>

</style>