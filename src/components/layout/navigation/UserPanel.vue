<template>
  <div class="flex items-center gap-3 md:px-2.5">
    <div class="bg-white h-12 w-12 rounded-full">
      <img src="@/assets/images/dummy-avatar.png" alt="" />
    </div>
    <span
      class="hidden truncate transition-all duration-300 md:block"
      :class="{ 'opacity-0': !isNavbarExpanded }"
      >John Doe</span
    >
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["isNavbarExpanded"]);
</script>

<style scoped></style>
