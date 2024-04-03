<template>
  <header
    class="fixed left-0 top-0 w-full bg-dark-blue transition-all duration-300 ease-in-out md:h-svh"
    :class="isNavbarExpanded ? 'md:w-52' : 'md:w-32'"
  >
    <menu
      class="bg-inherit flex w-full items-center justify-between p-5 text-light-yellow md:h-full md:flex-col md:px-2 md:py-8"
    >
      <router-link to="/" class="mb-5 hidden w-12 md:block">
        <app-logo />
      </router-link>
      <base-button class="btn-primary">Sign in</base-button>
      <burger-menu @click="toggleMenu" :is-menu-visible="isMenuVisible" />
      <nav
        class="bg-inherit absolute bottom-0 left-0 z-[-10] flex w-full flex-col justify-center p-5 shadow-lg transition-all duration-500 ease-in-out md:static md:z-auto md:shadow-none"
        :class="{ 'translate-y-full': isMenuVisible }"
      >
        <router-link
          v-for="menuItem in menuList"
          :key="menuItem"
          :to="menuItem.link"
        >
          <span>{{ menuItem.icon }}</span>
          <transition name="fade" mode="out-in">
            <span v-show="isNavbarExpanded">{{ menuItem.title }}</span>
          </transition>
        </router-link>
      </nav>
      <div class="hidden md:mt-auto md:block" @click="toggleNavbar">
        {{ isNavbarExpanded ? "<<<" : ">>>" }}
      </div>
    </menu>
  </header>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import BaseButton from "../base/BaseButton";
import AppLogo from "@/components/svg/AppLogo";
import BurgerMenu from "../layout/navigation/BurgerMenu";

const menuList = [
  {
    title: "Recipes list",
    link: "/recipes",
    icon: "☺",
  },
  {
    title: "Link 2",
    link: "#",
    icon: "☺",
  },
  {
    title: "Eueue",
    link: "#",
    icon: "☺",
  },
  {
    title: "Link 4",
    link: "#",
    icon: "☺",
  },
];

const isNavbarExpanded = ref(true);
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
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
