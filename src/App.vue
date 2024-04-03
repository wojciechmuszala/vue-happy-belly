<template>
  <div
    class="flex min-h-screen flex-col overflow-hidden font-quicksand text-dark-blue"
  >
    <the-navigation @get-navbar-state="handleNavbarState"></the-navigation>
    <main-content
      class="transition-all duration-300 ease-in-out"
      :class="isNavbarExpanded ? 'md:ml-52' : 'md:ml-32'"
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

<style></style>
