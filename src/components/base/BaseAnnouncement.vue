<template>
  <teleport to="body">
    <transition-group
      name="fade"
      mode="out-in"
      tag="ul"
      class="fixed right-5 top-5 flex w-80 flex-col gap-y-2"
    >
      <li
        v-for="announcement in announcementsStore.announcements"
        :key="announcement"
        class="w-full overflow-hidden rounded-lg"
        :class="announcement.status"
      >
        <header
          class="bg-inherit px-2 text-right text-2xl leading-6 brightness-95"
        >
          <span
            class="cursor-pointer"
            @click="announcementsStore.deleteAnnouncement(announcement.id)"
            >×</span
          >
        </header>
        <p class="p-3">
          {{ announcement.message }}
        </p>
      </li>
    </transition-group>
  </teleport>
</template>

<script setup>
import { useAnnouncementsStore } from "@/stores/announcements.js";
const announcementsStore = useAnnouncementsStore();
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
  @apply -translate-y-3 opacity-0;
}
.fade-enter-to,
.fade-leave-from {
  @apply translate-y-0 opacity-100;
}

.fade-enter-active {
  @apply transition-all duration-300 ease-in;
}
.fade-leave-active {
  @apply absolute transition-all duration-300 ease-in;
}

.fade-move {
  @apply transition-all duration-300 ease-in;
}
</style>
