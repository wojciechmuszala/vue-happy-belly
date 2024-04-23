<template>
  <transition name="fade" mode="out-in">
    <div
      v-if="show"
      class="fixed right-5 top-5 w-80 overflow-hidden rounded-lg"
      :class="type"
    >
      <header
        class="bg-inherit px-2 text-right text-2xl leading-6 brightness-95"
      >
        <span :ref="closeEl" class="">×</span>
      </header>
      <div class="p-3">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, defineProps } from "vue";
defineProps(["show", "type"]);

const closeEl = ref();
</script>

<style scoped>
.success {
  @apply bg-green-200/80;
}

.error {
  @apply bg-red-200/80;
}

.info {
  @apply bg-blue-200/80;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-500 ease-in;
}
</style>
