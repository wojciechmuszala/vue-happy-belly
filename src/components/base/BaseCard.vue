<template>
  <div class="rounded-xl p-5">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["type"]);
</script>

<style scoped>
.card-primary {
  @apply text-white bg-dark-blue;
}
.card-secondary {
  @apply bg-normal-orange text-dark-blue;
}
.card-tertiary {
  @apply bg-gray-100 text-dark-blue;
}
</style>
