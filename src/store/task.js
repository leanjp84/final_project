import { SupabaseClient } from "@supabase/supabase-js";
import { defineStore } from "pinia";
import { supabase } from "../supabase";
export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
    },

    async fetchUserId() {
      const userId = await supabase.auth.user_id();
      this.user = user;
    },

    //create task
    async addTask(title) {
      const { data, error } = await supabase.from("tasks").insert([
        {
          user_id: useUserStore().user.id,
          title: title,
          is_complete: false,
        },
      ]);
    },

    // mark completed
    async markCompleted() {
      const { data, error } = await supabase
        .from("tasks")
        .update({ is_completed: "true" })
        .eq("is_completed", "true");
    },

    //delete task
    async deleteTask() {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .eq("some_column", "someValue");
    },

    //edit task
    async editTask() {
      const { data, error } = await supabase
        .from("tasks")
        .update({ title: "otherValue" })
        .eq("title", "someValue");
    },
  },
});
