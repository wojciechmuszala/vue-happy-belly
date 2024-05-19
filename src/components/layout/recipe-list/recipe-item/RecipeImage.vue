<template>
  <div
    class="flex max-h-56 max-w-fit items-center justify-center overflow-hidden rounded-md mb-3"
  >
    <img
      v-for="image in images"
      :key="image"
      :src="image"
      :alt="name"
      class="aspect-square overflow-hidden object-cover"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["images", "name"]);
</script>

<style lang="scss" scoped></style>
