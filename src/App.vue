<template>
  <div
    class="flex min-h-screen flex-col overflow-hidden font-quicksand text-dark-blue"
  >
    <the-navigation
      @get-navbar-state="handleNavbarState"
      :expanded-style-value="expandedStyleValue"
      :not-expanded-style-value="notExpandedStyleValue"
    ></the-navigation>
    <main-content
      class="ml-52 transition-all duration-300 ease-in-out"
      :class="
        isNavbarExpanded ? navbarStyles.expanded : navbarStyles.notExpanded
      "
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

const expandedStyleValue = 52;
const notExpandedStyleValue = 32;
const navbarStyles = {
  expanded: `md:ml-${expandedStyleValue}`,
  notExpanded: `md:ml-${notExpandedStyleValue}`,
};
</script>

<style></style>
