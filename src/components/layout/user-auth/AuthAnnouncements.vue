<template>
  <div class="mx-1 flex flex-col gap-1">
    <transition name="fade" mode="out-in">
      <p
        v-if="errorMessage"
        class="text-red-500 flex items-center gap-2 before:text-3xl before:content-['×']"
      >
        {{ errorMessage }}
      </p>
    </transition>
    <p
      v-for="condition in conditionsForRegistration"
      :key="condition"
      class="flex items-center gap-2 transition-all duration-500 before:content-['✔']"
      :class="condition.function() ? 'opacity-100' : 'opacity-20'"
    >
      {{ condition.text }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["errorMessage", "conditionsForRegistration"]);
</script>

<style scoped>
.fade-leave-active,
.fade-enter-active {
  @apply transition-all duration-300 ease-in;
}

.fade-enter-to,
.fade-leave-from {
  @apply opacity-100;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
