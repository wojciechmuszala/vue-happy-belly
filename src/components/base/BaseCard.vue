<template>
  <div class="rounded-xl p-5" :class="`card-${type}`">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["type"]);
</script>

<style scoped>
.card-primary {
  @apply bg-dark-blue text-light-yellow;
}
.card-secondary {
  @apply bg-normal-orange text-dark-blue;
}
.card-tertiary {
  @apply bg-gray-100 text-dark-blue;
}
.card-quternary {
  @apply bg-white border border-dark-blue text-dark-blue;
}
</style>
