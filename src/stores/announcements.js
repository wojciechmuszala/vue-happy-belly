import { ref } from "vue";
import { defineStore } from "pinia";

export const useAnnouncementsStore = defineStore("announcements", () => {
  const announcements = ref([]);
  const lastAddedElement = ref(null);

  const addNewAnnouncement = (itemToAdd) => {
    const newItem = {
      ...itemToAdd,
      id: Math.random(),
    };
    announcements.value.push(newItem);
    if (newItem.status == "success") {
      setTimeout(() => {
        const indexToRemove = announcements.value.findIndex(
          (announcement) => announcement.id === newItem.id,
        );

        if (indexToRemove !== -1) {
          announcements.value.splice(indexToRemove, 1);
        }
      }, 5000);
    }
  };

  const deleteAnnouncement = (idToRemove) => {
    announcements.value = announcements.value.filter((item) => {
      return item.id !== idToRemove;
    });
  };
  return {
    announcements,
    lastAddedElement,
    addNewAnnouncement,
    deleteAnnouncement,
  };
});
