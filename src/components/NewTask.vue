// text input new task // ok button

<template>
  <!-- new task -->
  <div
    class="p-8 flex items-start justify-center bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-md shadow-lg m-6"
  >
    <!-- Form -->
    <form class="">
      <div class="mb-3 pt-0 flex flex-col gap-4 sm:flex-row">
        <input
          name="todoTask"
          id="task"
          type="text"
          placeholder="Type your task here"
          class="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
        <button
          @click.prevent="createTask"
          class="px-4 w-64 placeholder:rounded bg-primary text-white font-bold p-4 rounded uppercase border-white hover:bg-secondary hover:drop-shadow-xl"
        >
          Add task
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { supabase } from "../supabase";
import { useTaskStore } from "../store/task";
import { useUserStore } from "../store/user";

const errorMsg = ref("");

async function createTask() {
  try {
    const { error } = await supabase.from("tasks").insert([
      {
        title: task.value,
        is_complete: false,
      },
    ]);
    console.log(task.value);

    if (error) throw error;
    task.value = "New task added";
    setTimeout(() => {
      errorMsg.value = false;
    }, 5000);
  } catch (error) {
    errorMsg.value = `Error: ${error.message}`;
    setTimeout(() => {
      errorMsg.value = false;
    }, 5000);
  }
}
</script>
