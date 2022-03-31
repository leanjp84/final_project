<template>
  <!-- new task -->
  <div
    class="p-8 flex items-start justify-center bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-md shadow-lg m-6"
  >
    <!-- Form -->
    <form class="">
      <div class="mb-3 pt-0 flex flex-col gap-4 sm:flex-row">
        <input
          v-model="newItem"
          name="todoTask"
          id="task"
          type="text"
          placeholder="You gotta do what you gotta do"
          class="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
        <button
          @click="newTask"
          class="px-4 w-64 placeholder:rounded bg-primary text-white font-bold p-4 rounded uppercase border-white hover:bg-secondary hover:drop-shadow-xl"
        >
          add task
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useUserStore } from "../store/user.js";
import { useTaskStore } from "../store/task.js";
import { ref } from "vue";

const task = useTaskStore();
const user = useUserStore();
const newItem = ref("");

const newTask = async () => {
  task.createTask(newItem.value, user.user);
  newItem.value = "";
};
</script>
