<template>
  <table class="table w-fit m-4">
    <thead>
      <tr>
        <th class="px-8 py-8 bg-cyan-500 text-white">Task</th>
        <th class="px-8 py-8 bg-cyan-500 text-white">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="task in allTasks" :key="task">
        <td class="border px-4 py-2 font-semibold text-1xl">
          <input
            v-if="modifyTask"
            v-model="task.title"
            class="shadow appearance-none border rounded w-full py-1 px-2 text-accent leading-tight focus:outline-none focus:shadow-outline"
            id="editTitle"
            type="text"
            placeholder="modify your task"
          />
          <p v-else class="">{{ task.title }}</p>
        </td>
        <!-- edit -->
        <td class="border px-4 py-1 grid place-content-center">
          <div class="flex flex-row">
            <div
              @click="updateTask()"
              class="border-2 border-blue-600 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200"
            >
              Edit
            </div>
            <!-- mark completed-->
            <div
              @click="markComplete(task)"
              class="border-2 border-green-600 rounded-lg px-3 py-2 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200"
            >
              Complete
            </div>
            <!-- delete-->
            <div
              @click="removeTask(task)"
              class="border-2 border-red-600 rounded-lg px-3 py-2 text-red-400 cursor-pointer hover:bg-red-600 hover:text-red-200"
            >
              delete
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useTaskStore } from "../store/task";
import { useUserStore } from "../store/user";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const newTask = ref("");
const allTasks = ref([]);
const errorMsg = ref("");
const editTask = ref(false);
const storeTasks = useTaskStore();
const user = useUserStore();

async function fetchAllTasks() {
  allTasks.value = await storeTasks.fetchTasks().value;
  console.log(allTasks.value);
}
fetchAllTasks();

async function addTask() {
  await storeTasks.createTask(newTask.value);
  await fetchAllTasks();
  console.log(newTask.value);
  newTask.value = " ";
}

///// edit task
async function modifyTask() {
  editTask.value = true;
}

async function saveEdited(item) {
  await storeTasks.updateTask(item.title, task.id);
  editTask.value = false;
  await fetchAllTasks();
}

async function removeTask(task) {
  await storeTasks.deleteTask(task.id);
  await fetchAllTasks();
}

async function markComplete(task) {
  item.is_complete = !item.is_complete;
  console.log(item.is_complete);
  await storeTasks.isCompleted(item.is_complete, tasl.id);
  await fetchAllTasks();
}
</script>
