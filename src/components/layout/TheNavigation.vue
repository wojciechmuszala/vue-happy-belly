<template>
  <header class="fixed left-0 top-0 w-full bg-dark-blue">
    <menu
      class="bg-inherit flex w-full items-center justify-between p-5 text-light-yellow"
    >
      <base-button class="btn-primary">Sign in</base-button>
      <div
        @click="toggleMenu"
        class="relative flex w-8 flex-col items-end gap-y-1.5"
        :class="{ open: showMenu }"
      >
        <span
          v-for="n in 3"
          :key="n"
          class="h-1 bg-light-yellow transition-all duration-500"
          :class="{
            'w-3/4': n === 1,
            'w-full': n === 2 || n === 3,
            'translate-x-full opacity-0': n === 1 && showMenu,
            'translate-y-[3.5px] rotate-45': n === 2 && showMenu,
            'translate-y-[-7px] -rotate-45': n === 3 && showMenu,
          }"
        ></span>
      </div>
      <nav
        class="bg-inherit absolute bottom-0 left-0 z-[-10] flex w-full flex-col justify-center p-5 shadow-lg transition-all duration-500 ease-in-out"
        :class="{ 'translate-y-full': showMenu }"
      >
        <router-link
          v-for="menuItem in menuList"
          :key="menuItem"
          :to="menuItem.link"
          >{{ menuItem.title }}</router-link
        >
      </nav>
    </menu>
  </header>
</template>

<script setup>
import { ref } from "vue";
import BaseButton from "../base/BaseButton";

const showMenu = ref(false);
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
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
</script>

<style scoped></style>
