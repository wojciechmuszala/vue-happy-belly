<template>
  <div
    class="flex min-h-screen flex-col overflow-hidden font-quicksand text-dark-blue"
  >
    <the-navigation @get-navbar-state="handleNavbarState"></the-navigation>
    <main-content
      class="transition-all duration-300 ease-in-out"
      :class="isNavbarExpanded ? 'md:ml-60' : 'md:ml-24'"
    ></main-content>
  </div>
</template>

<script setup>
import TheNavigation from "./components/layout/TheNavigation";
import MainContent from "./components/layout/MainContent";
import { ref } from "vue";

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
