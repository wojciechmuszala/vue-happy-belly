<template>
  <a
    v-if="mode === 'link'"
    class="flex items-center gap-3 rounded-full px-4 py-2.5 active:scale-95"
    :class="[`btn-${type}`, icon ? 'justify-between' : 'justify-center']"
  >
    <slot></slot>
    <font-awesome-icon v-if="icon" :icon="icon" />
  </a>
  <router-link
    v-else-if="mode === 'router-link'"
    class="flex items-center gap-3 rounded-full px-4 py-2.5 active:scale-95"
    :class="[`btn-${type}`, icon ? 'justify-between' : 'justify-center']"
  >
    <slot />
  </router-link>
  <button
    v-else
    class="flex items-center gap-3 rounded-full px-4 py-2.5 active:scale-95"
    :class="[`btn-${type}`, icon ? 'justify-between' : 'justify-center']"
  >
    <slot />
    <font-awesome-icon v-if="icon" :icon="icon" />
  </button>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["mode", "type", "icon"]);
</script>

<style scoped>
.btn-primary {
  @apply text-normal-orange hover:bg-normal-orange border border-dark-blue bg-dark-blue font-semibold transition-all duration-300 hover:text-dark-blue;
}
.btn-secondary {
  @apply bg-normal-orange hover:text-normal-orange border-normal-orange border font-semibold text-dark-blue transition-all duration-300 hover:bg-dark-blue;
}
.btn-tertiary {
  @apply text-white hover:bg-normal-orange border border-dark-blue bg-dark-blue font-semibold transition-all duration-300 hover:text-dark-blue;
}
</style>
