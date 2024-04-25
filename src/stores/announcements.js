import { reactive } from "vue";
import { defineStore } from "pinia";

export const useAnnouncementsStore = defineStore("announcements", () => {
  const announcements = reactive({
    show: false,
    status: "",
    message: "",
  });

  return {
    announcements,
  };
});
