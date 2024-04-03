<template>
  <div
    class="relative flex w-8 flex-col items-end gap-y-1.5 md:hidden"
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
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["toggleMenu", "isMenuVisible"]);
</script>
