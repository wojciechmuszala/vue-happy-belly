<template>
  <div class="group relative">
    <input
      v-model="inputValue"
      :id="id"
      class="peer w-full rounded-full border border-dark-blue px-5 py-2 text-dark-blue focus:outline-none"
    />
    <label
      :for="id"
      class="bg-white absolute inset-y-1/2 left-5 h-max -translate-y-1/2 transition-all duration-200 peer-focus:-top-1 peer-focus:left-4 peer-focus:h-max peer-focus:px-1 peer-focus:py-0 peer-focus:text-xs peer-focus:text-dark-blue"
      :class="
        inputValue
          ? '-top-1 left-4 px-1 py-0 text-xs text-dark-blue'
          : 'text-gray-300'
      "
      >{{ label }}</label
    >
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

defineProps(["id", "label"]);
const inputValue = ref("");
</script>

<style lang="scss" scoped></style>
