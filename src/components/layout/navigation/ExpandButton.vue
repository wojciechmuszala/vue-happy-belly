<template>
  <div
    class="hover:bg-dark-blue-lighter absolute right-0 hidden h-8 w-8 translate-x-1/2 items-center justify-center rounded-full bg-dark-blue p-3 text-center text-xl transition-all duration-300 md:mb-2.5 md:flex"
    :class="isNavbarExpanded ? '-rotate-180' : 'rotate-0'"
  >
    <font-awesome-icon :icon="['fas', 'chevron-right']" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["isNavbarExpanded"]);
</script>
