import { ref } from "vue";
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", () => {
  const user = ref({
    isLogged: false,
    nickname: "mojciech",
    firstName: "Wojciech",
    secondName: "Muszala",
    avatar: require("@/assets/images/dummy-avatar.png"),
  });

  return {
    user,
  };
});
