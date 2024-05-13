import { reactive } from "vue";
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", () => {
  const user = reactive({
    isLogged: false,
    token: null,
    id: null,
    email: null,
    login: null,
    avatar: require("@/assets/images/dummy-avatar.png"),
  });

  return {
    user,
  };
});
