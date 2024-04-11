<template>
  <header
    class="fixed left-0 top-0 w-full bg-dark-blue transition-all duration-300 ease-in-out md:h-svh"
    :class="isNavbarExpanded ? 'md:w-60' : 'md:w-24'"
  >
    <menu
      class="bg-inherit flex w-full flex-row-reverse items-center justify-between p-5 text-light-yellow md:h-full md:flex-col md:px-5 md:py-8"
    >
      <burger-menu @click="toggleMenu" :is-menu-visible="isMenuVisible" />
      <nav
        class="bg-inherit absolute bottom-0 left-0 z-[-10] flex w-full flex-col justify-center gap-3 py-5 shadow-lg transition-all duration-500 md:static md:z-auto md:transform-none md:shadow-none"
        :class="{
          'translate-y-full': isMenuVisible,
        }"
      >
        <router-link
          v-for="menuItem in menuList"
          :key="menuItem"
          :to="menuItem.link"
          class="hover:bg-dark-blue-lighter text-l flex items-center rounded-full px-4 py-2 transition-all duration-300"
          @click="toggleMenu"
        >
          <font-awesome-icon
            v-if="menuItem.faIcon"
            :icon="menuItem.faIcon"
            class="h-6 w-6"
          />
          <span class="ml-3 truncate">{{ menuItem.title }}</span>
        </router-link>
      </nav>
      <div class="md:flex md:w-full md:items-center">
        <user-panel :is-navbar-expanded="isNavbarExpanded" />
        <expand-button
          @click="toggleNavbar"
          :is-navbar-expanded="isNavbarExpanded"
        />
      </div>
    </menu>
  </header>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import ExpandButton from "../layout/navigation/ExpandButton";
import BurgerMenu from "../layout/navigation/BurgerMenu";
import UserPanel from "../layout/navigation/UserPanel";

const menuList = [
  {
    title: "Home",
    link: "/",
    faIcon: ["fas", "house"],
  },
  {
    title: "Recipes list",
    link: "/recipes",
    faIcon: ["fas", "bowl-food"],
  },
  {
    title: "Meal draw",
    link: "/meal-draw",
    faIcon: ["fas", "dice"],
  },
];

const isNavbarExpanded = ref(false);
const toggleNavbar = () => {
  isNavbarExpanded.value = !isNavbarExpanded.value;
  sendNavbarExpandInfo();
};

const isMenuVisible = ref(false);
const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

const emit = defineEmits(["getNavbarState"]);
const sendNavbarExpandInfo = () =>
  emit("getNavbarState", isNavbarExpanded.value);
</script>

<style scoped>
.router-link-active {
  @apply text-normal-orange;
}
</style>
