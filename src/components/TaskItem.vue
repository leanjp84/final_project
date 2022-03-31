<template>
  <div class="flex flex-col">
    <table
      class="table table-bordered mt-5 shadow-lg rounded-md table-fixed m-6 p-2"
    >
      <thead>
        <tr>
          <th class="px-8 py-8 bg-cyan-500 text-white text-lg text-center">
            Pending Tasks
          </th>

          <th class="px-8 py-8 bg-cyan-500 text-white text-lg text-center">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in pendingTasks" :key="index">
          <td class="text-lg">
            {{ task.title }}
          </td>
          <td class="flex flex-row justify-center">
            <button
              @click.prevent="editButton()"
              class="w-16 border-2 border-blue-600 rounded-lg px-4 py-1 m-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200"
            >
              <!--edit icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
            <button
              @click.prevent="changeStatus(task)"
              class="w-16 border-2 border-green-600 rounded-lg px-4 py-1 m-2 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200"
            >
              <!--complete icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </button>

            <button
              @click.prevent="deleteTask(task)"
              class="w-16 border-2 border-red-600 rounded-lg px-4 py-2 m-2 text-red-400 cursor-pointer hover:bg-red-600 hover:text-red-200"
            >
              <!--trash icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <br />
      <!--completed table -->
      <table
        class="table table-bordered mt-5 shadow-lg rounded-md table-fixed m-6 p-2"
      >
        <thead>
          <tr>
            <th class="px-8 py-8 bg-purple-900 text-white text-lg text-center">
              Completed Tasks
            </th>

            <th class="px-8 py-8 bg-purple-900 text-white text-lg text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in completedTasks" :key="index">
            <td class="text-lg">
              {{ task.title }}
            </td>
            <td class="flex flex-row justify-center">
              <button
                @click.prevent="editButton()"
                class="w-16 border-2 border-blue-600 rounded-lg px-4 py-2 m-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200"
              >
                <!--edit icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
              <br />
              <button
                @click.prevent="changeStatus"
                class="w-16 border-2 border-purple-600 rounded-lg px-4 py-2 m-2 text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-200"
              >
                <!--update icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>

              <button
                @click.prevent="deleteTask(task)"
                class="w-16 border-2 border-red-600 rounded-lg px-4 py-2 m-2 text-red-400 cursor-pointer hover:bg-red-600 hover:text-red-200"
              >
                <!--trash icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { supabase } from "../supabase";

export default {
  name: "TaskItem",
  data() {
    return {
      task: "",
      editedTask: null,
      availableStatus: ["To-do", "Done"],
      userId: "",
      tasks: [],
      pendingTasks: [],
      completedTasks: [],
      todoTask: [],
      editing: false,
      taskId: null,
    };
  },
  mounted() {
    this.sortTasks();
    this.getAllTasks();
    this.getUserId();
  },
  methods: {
    async submitButton() {
      if (this.editing === false) {
        await this.submitTask();
      } else {
        await this.editTask();
        this.editing = false;
        this.task = "";
      }
    },
    async editTask() {
      const { data, error } = await supabase
        .from("tasks")
        .update({ title: this.task })
        .match({ id: this.taskId });
      this.getAllTasks();
    },
    async submitTask() {
      if (this.task.length === 0) return;
      const myId = this.getUserId();
      try {
        const { data, error } = await supabase
          .from("tasks")
          .insert([{ title: this.task, user_id: myId }]);
        if (error) throw error;
        this.task = "";
        this.getAllTasks();
      } catch (error) {
        console.log(error);
      }
    },

    async deleteTask(task) {
      const myId = task.id;
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: myId });
      await this.getAllTasks();
    },

    async getAllTasks() {
      const { data: databaseTasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = databaseTasks;
      this.sortTasks();
    },

    sortTasks() {
      this.pendingTasks = [];
      this.completedTasks = [];
      this.tasks.forEach((task) => {
        if (task.is_complete === false) {
          this.pendingTasks.push(task);
        } else {
          this.completedTasks.push(task);
        }
      });
    },

    async editButton(value) {
      this.editing = true;
      this.task = value.title;
      this.taskId = value.id;
    },

    changeStatus(task) {
      let myIndex = this.tasks.indexOf(task);
      if (this.tasks[myIndex].is_complete === false) {
        this.tasks[myIndex].is_complete = true;
      } else {
        this.tasks[myIndex].is_complete = false;
      }
      this.sortTasks();
    },

    getUserId() {
      const data = localStorage.getItem("supabase.auth.token");
      const session = JSON.parse(data);
      const userId = session.currentSession.user.id;
      this.userId = userId;
      return userId;
    },
  },
};
</script>
