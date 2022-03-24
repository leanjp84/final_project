// text input new task // ok button

<template>
  <!-- new task -->
  <div class="p-8 flex items-start bg-slate-200 rounded-md shadow-lg">
    <!-- Form -->
    <form class="flex flex-col gap-y-5 w-80">
      <h1 class="text-2xl text-teal-700">Add new task</h1>
      <label class="">Task:</label>
      <input class="input caret-lime-400" type="text" />
      <button class="btn">Add</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>
