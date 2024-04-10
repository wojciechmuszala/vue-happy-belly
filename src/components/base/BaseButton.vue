<template>
  <a v-if="type === 'link'" class="inline-block rounded-full px-4 py-2.5">
    <slot></slot>
  </a>
  <button v-else class="inline-block rounded-full px-4 py-2.5">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["type"]);
</script>

<style scoped>
.btn-primary {
  @apply text-normal-orange bg-dark-blue font-semibold;
}
.btn-secondary {
  @apply bg-normal-orange font-semibold text-dark-blue;
}
</style>
