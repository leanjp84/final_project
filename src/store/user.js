import { defineStore } from "pinia";
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
  
    async signUp(name, email, password) {
      const { user, error } = await supabase.auth.signUp({
        name: name,
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) {
        this.user = user;
        console.log(this.user);
      }
    },

    async signIn({ commit }, form) {
      try {
        const { error, user } = await supabase.auth.signIn({
          email: email,
          password: password,
        });
        if (error) throw error;
        alert("You've Signed In successfully");
        await router.push('/')
        commit('setUser', user.email)
      } catch (error) {
        alert(error.error_description || error.message);
      }
    }, 

    // signOut() {},

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