import { SupabaseClient } from "@supabase/supabase-js";
import { defineStore } from "pinia";
import { supabase } from "../supabase";
export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks, error } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
    },

    async fetchUserId() {
      const userId = await supabase.auth.user_id();
      this.user = user;
    },

    // create task
    async createTask(name, user) {
      console.log(user);
      const { data, error } = await supabase.from("tasks").insert([
        {
          user_id: user.id,
          title: name,
          is_complete: false,
        },
      ]);
    },

    // delete task
    async deleteTask(item) {
      try {
        const { error } = await supabase
          .from("tasks")
          .delete()
          .match({ id: item });

        if (error) throw error;
      } catch (error) {
        console.log(error);
      }
    },

    // mark completed
    async isCompleted(boolean, index) {
      const { error } = await supabase
        .from("tasks")
        .update({
          is_complete: boolean,
        })
        .match({ id: index });
    },

    //edit task
    async updateTask(name, index) {
      const { error } = await supabase
        .from("tasks")
        .update({
          title: name,
        })
        .match({ id: index });
    },
  },
});
