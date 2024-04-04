<template>
  <header
    class="fixed left-0 top-0 w-full bg-dark-blue transition-all duration-300 ease-in-out md:h-svh"
    :class="isNavbarExpanded ? 'md:w-52' : 'md:w-32'"
  >
    <menu
      class="bg-inherit flex w-full items-center justify-between p-5 text-light-yellow md:h-full md:flex-col md:px-2 md:py-8"
    >
      <base-button class="btn-primary">Sign in</base-button>
      <burger-menu @click="toggleMenu" :is-menu-visible="isMenuVisible" />
      <nav
        class="bg-inherit absolute bottom-0 left-0 z-[-10] flex w-full flex-col justify-center gap-3 py-5 shadow-lg transition-all duration-500 md:static md:z-auto md:shadow-none"
        :class="{ 'translate-y-full': isMenuVisible }"
      >
        <router-link
          v-for="menuItem in menuList"
          :key="menuItem"
          :to="menuItem.link"
          class="hover:bg-dark-blue-lighter text-l flex items-center rounded-full px-4 py-2 transition-all duration-300"
        >
          <font-awesome-icon
            v-if="menuItem.faIcon"
            :icon="menuItem.faIcon"
            class="h-6"
          />
          <transition name="show" mode="out-in">
            <span v-show="isNavbarExpanded" class="ml-3 truncate">{{
              menuItem.title
            }}</span>
          </transition>
        </router-link>
      </nav>
      <expand-button
        @click="toggleNavbar"
        :is-navbar-expanded="isNavbarExpanded"
      />
    </menu>
  </header>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import BaseButton from "../base/BaseButton";
import ExpandButton from "../layout/navigation/ExpandButton";
import BurgerMenu from "../layout/navigation/BurgerMenu";

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
    title: "Link 2",
    link: "#",
    faIcon: "",
  },
  {
    title: "Eueue",
    link: "#",
    faIcon: "",
  },
  {
    title: "Link 4",
    link: "#",
    faIcon: "",
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
.show-enter-from,
.show-leave-to {
  opacity: 0;
}

.show-enter-active,
.show-leave-active {
  transition: opacity 0.3s ease;
}
</style>
