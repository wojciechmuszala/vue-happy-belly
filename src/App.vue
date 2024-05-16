<template>
  <div
    class="mt-5 overflow-hidden bg-light-yellow font-quicksand text-dark-blue md:mt-0"
  >
    <base-announcement />
    <the-navigation @get-navbar-state="handleNavbarState"></the-navigation>
    <main-content :class="isNavbarExpanded ? 'md:ml-60' : 'md:ml-24'" />
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
