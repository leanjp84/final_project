<template>
  <div class="flex flex-col">
    <table
      class="table table-bordered mt-5 shadow-lg rounded-md table-fixed m-6 p-2"
    >
      <thead>
        <tr>
          <th class="px-8 py-8 bg-cyan-500 text-white">Task</th>
          <th class="px-8 py-8 bg-cyan-500 text-white">Status</th>
          <th class="px-8 py-8 bg-cyan-500 text-white">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in pendingTasks" :key="index">
          <td>
            {{ task.title }}
          </td>
          <td>Pending</td>
          <td class="flex flex-row justify-center items-center">
            <div
              @click.prevent="editButton()"
              class="w-16 border-2 border-blue-600 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200"
            >
              EDIT
            </div>
            <div
              @click.prevent="changeStatus(task)"
              class="w-16 border-2 border-green-600 rounded-lg px-3 py-2 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200"
            >
              COMPLETE
            </div>

            <div
              @click.prevent="deleteTask(task)"
              class="w-16 border-2 border-red-600 rounded-lg px-3 py-2 text-red-400 cursor-pointer hover:bg-red-600 hover:text-red-200"
            >
              DELETE
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <br />
      <table
        class="table table-bordered mt-5 shadow-lg rounded-md table-fixed m-6 p-2"
      >
        <thead>
          <tr>
            <th class="px-8 py-8 bg-purple-900 text-white">Task</th>
            <th class="px-8 py-8 bg-purple-900 text-white">Status</th>
            <th class="px-8 py-8 bg-purple-900 text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in completedTasks" :key="index">
            <td>
              {{ task.title }}
            </td>
            <td>Completed</td>
            <td class="flex flex-row justify-center items-center">
              <div
                @click.prevent="editButton()"
                class="w-16 border-2 border-blue-600 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200"
              >
                EDIT
              </div>

              <div
                @click.prevent="changeStatus"
                class="w-16 border-2 border-purple-600 rounded-lg px-3 py-2 text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-200"
              >
                UPDATE
              </div>

              <div
                @click.prevent="deleteTask(task)"
                class="w-16 border-2 border-red-600 rounded-lg px-3 py-2 text-red-400 cursor-pointer hover:bg-red-600 hover:text-red-200"
              >
                DELETE
              </div>
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
      availableStatuses: ["To-do", "Donete"],
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
