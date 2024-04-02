<template>
  <header
    class="md:stati fixed left-0 top-0 w-full bg-dark-blue transition-all duration-300 ease-in-out md:h-svh"
    :class="isNavbarExpanded ? navbarStyles.expanded : navbarStyles.notExpanded"
  >
    <menu
      class="bg-inherit flex w-full items-center justify-between p-5 text-light-yellow md:flex-col md:p-2"
    >
      <app-logo class="mb-5 hidden w-12 md:block"></app-logo>
      <base-button class="btn-primary">Sign in</base-button>
      <div
        @click="toggleMenu"
        class="relative flex w-8 flex-col items-end gap-y-1.5 md:hidden"
        :class="{ open: isMenuVisible }"
      >
        <span
          v-for="n in 3"
          :key="n"
          class="h-1 bg-light-yellow transition-all duration-300"
          :class="{
            'w-3/4': n === 1,
            'w-full': n === 2 || n === 3,
            'translate-x-full opacity-0': n === 1 && isMenuVisible,
            'translate-y-[3.5px] rotate-45': n === 2 && isMenuVisible,
            'translate-y-[-7px] -rotate-45': n === 3 && isMenuVisible,
          }"
        ></span>
      </div>
      <nav
        class="bg-inherit absolute bottom-0 left-0 z-[-10] flex w-full flex-col justify-center p-5 shadow-lg transition-all duration-500 ease-in-out"
        :class="{ 'translate-y-full': isMenuVisible }"
      >
        <router-link
          v-for="menuItem in menuList"
          :key="menuItem"
          :to="menuItem.link"
          >{{ menuItem.title }}</router-link
        >
      </nav>
      <div class="color-red" @click="toggleNavbar">
        {{ isNavbarExpanded ? "<<<" : ">>>" }}
      </div>
    </menu>
  </header>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import BaseButton from "../base/BaseButton";
import AppLogo from "@/components/svg/AppLogo";

const menuList = [
  {
    title: "Link 1",
    link: "#",
  },
  {
    title: "Link 2",
    link: "#",
  },
  {
    title: "Eueue",
    link: "#",
  },
  {
    title: "Link 4",
    link: "#",
  },
];

const props = defineProps(["expandedStyleValue", "notExpandedStyleValue"]);

const navbarStyles = {
  expanded: `md:w-${props.expandedStyleValue}`,
  notExpanded: `md:w-${props.notExpandedStyleValue}`,
};

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

<style scoped></style>
