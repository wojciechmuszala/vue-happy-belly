<template>
  <div class="overflow-hidden bg-light-yellow font-quicksand text-dark-blue">
    <the-navigation @get-navbar-state="handleNavbarState"></the-navigation>
    <main-content
      :class="isNavbarExpanded ? 'md:ml-60' : 'md:ml-24'"
    ></main-content>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useUserAuth } from "@/composables/useUserAuth";
import TheNavigation from "./components/layout/TheNavigation";
import MainContent from "./components/layout/MainContent";

const { handleAutoSignIn } = useUserAuth({});
onMounted(() => {
  handleAutoSignIn();
});
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
