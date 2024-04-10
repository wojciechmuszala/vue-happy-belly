import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", () => {
  const user = {
    isLogged: true,
    nickName: "mojciech",
    firstName: "Wojciech",
    secondName: "Muszala",
    avatar: require("@/assets/images/dummy-avatar.png"),
  };

  return {
    user,
  };
});
