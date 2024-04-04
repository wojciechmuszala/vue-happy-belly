<template>
  <div
    class="hidden translate-x-1/2 justify-center text-center md:mt-auto md:flex md:w-full"
  >
    <div
      class="hover:bg-dark-blue-lighter flex h-12 w-12 items-center justify-center rounded-full bg-dark-blue p-3 text-xl transition-all duration-300"
      :class="isNavbarExpanded ? '-rotate-180' : 'rotate-0'"
    >
      >
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["isNavbarExpanded"]);
</script>
