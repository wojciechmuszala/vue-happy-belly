<template>
  <teleport to="body">
    <transition name="fade" mode="out-in">
      <div
        v-if="announcementsStore.announcements.show"
        class="fixed right-5 top-5 w-80 overflow-hidden rounded-lg"
        :class="announcementsStore.announcements.status"
      >
        <header
          class="bg-inherit px-2 text-right text-2xl leading-6 brightness-95"
        >
          <span @click="handleCloseAnnouncement">×</span>
        </header>
        <div class="p-3">
          {{ announcementsStore.announcements.message }}
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { useAnnouncementsStore } from "@/stores/announcements.js";
const announcementsStore = useAnnouncementsStore();

const handleCloseAnnouncement = () => {
  announcementsStore.announcements = {
    show: false,
    status: "",
    message: "",
  };
};
</script>

<style scoped>
.success {
  @apply bg-green-200/80;
}

.error {
  @apply bg-red-200/80;
}

.info {
  @apply bg-blue-200/80;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-500 ease-in;
}
</style>
