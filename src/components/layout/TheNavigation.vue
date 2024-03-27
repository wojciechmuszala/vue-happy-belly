<template>
  <header class="fixed left-0 top-0 w-full bg-dark-blue">
    <menu
      class="bg-inherit flex w-full items-center justify-between p-5 text-light-yellow"
    >
      <base-button class="btn-primary">Sign in</base-button>
      <div
        @click="toggleMenu"
        class="flex flex-col items-end"
        :class="{ open: showMenu }"
      >
        <span
          class="h-1 w-5 bg-light-yellow transition-all duration-300"
        ></span>
        <span
          class="my-1.5 h-1 w-8 bg-light-yellow transition-all duration-300"
        ></span>
        <span
          class="h-1 w-8 bg-light-yellow transition-all duration-300"
        ></span>
      </div>
      <nav
        class="bg-inherit absolute bottom-0 left-0 z-[-10] flex w-full flex-col justify-center p-5 shadow-lg transition-all duration-300 ease-in-out"
        :class="[showMenu ? 'translate-y-full' : '']"
      >
        <router-link to="">Link 1</router-link>
        <router-link to="">Link 2</router-link>
        <router-link to="">Link 3</router-link>
        <router-link to="">Link 4</router-link>
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
</script>

<style scoped>
/* .open {
  @apply [&>*:nth-child(1)]:opacity-0 [&>span:nth-child(1)]:translate-x-full;
} */
.open span:nth-child(1) {
  @apply translate-x-full opacity-0;
}
</style>
