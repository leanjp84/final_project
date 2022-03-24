import { defineStore } from "pinia";
import { callWithErrorHandling } from "vue";
import { supabase } from "../supabase";
export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },
    async signOut() {
      const { user, error } = await supabase.auth.signOut();
    },

    async logIn() {
      const { error, user } = await supabase.auth.signIn({
        email: email.value,
        password: password.value,
      });
      if (error) throw error;
      if (user) {
        this.user = user;
      }
    },

    async signUp() {
      const { error, user } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      });
      if (error) throw error;
      if (user) {
        this.user = user;
      }
    },

    persist: {
      enabled: true,
      strategies: [
        {
          key: "user",
          storage: localStorage,
        },
      ],
    },
  },
});
