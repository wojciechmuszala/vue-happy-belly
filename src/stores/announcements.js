// TODO : Change store to array, add id, when delete from array silter by id.

import { ref } from "vue";
import { defineStore } from "pinia";

export const useAnnouncementsStore = defineStore("announcements", () => {
  const announcements = ref([]);

  const addNewAnnouncement = (itemToAdd) => {
    const newItem = {
      ...itemToAdd,
      id: Math.random(),
    };
    announcements.value.push(newItem);
  };

  const deleteAnnouncement = (idToRemove) => {
    announcements.value = announcements.value.filter((item) => {
      console.log(item.id, idToRemove);

      return item.id !== idToRemove;
    });
  };
  return {
    announcements,
    addNewAnnouncement,
    deleteAnnouncement,
  };
});
