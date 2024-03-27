<template>
  <a v-if="type === 'link'" class="btn">
    <slot></slot>
  </a>
  <button v-else class="btn">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["type"]);
</script>

<style scoped>
.btn {
  @apply inline-block rounded-full px-4 py-2.5;
}

.btn-primary {
  @apply bg-orange font-semibold text-dark-blue;
}
</style>
