<template>
  <router-link :to="route">{{ routingName }}</router-link>
</template>

<script setup>
defineProps({
  route: String,
  routingName: String,
});
</script>

<style></style>
