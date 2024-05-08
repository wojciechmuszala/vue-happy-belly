<template>
  <div
    class="mt-5 overflow-hidden bg-light-yellow font-quicksand text-dark-blue md:mt-0"
  >
    <base-announcement />

    <button @click="handleOpen" class="btn-primary fixed bottom-10 right-10">
      open
    </button>

    <the-navigation @get-navbar-state="handleNavbarState"></the-navigation>
    <main-content
      :class="isNavbarExpanded ? 'md:ml-60' : 'md:ml-24'"
    ></main-content>
  </div>
</template>

<script setup>
import { ref } from "vue";

import TheNavigation from "./components/layout/TheNavigation";
import MainContent from "./components/layout/MainContent";

const isNavbarExpanded = ref(false);
const handleNavbarState = (navbarState) => {
  isNavbarExpanded.value = navbarState;
};

const testOpen = ref();

const handleOpen = () => {
  testOpen.value = !testOpen.value;
};
</script>

<style>
.show-enter-from,
.show-leave-to {
  opacity: 0;
}

.show-enter-active,
.show-leave-active {
  transition: opacity 0.3s ease;
}
</style>
