<template>
  <ul class="mb-2 flex flex-wrap items-center gap-1">
    <li
      v-for="tag in tags"
      :key="tag.id"
      class="rounded-md px-2"
      :class="{
        'bg-red-200': tag.type === 'meal',
        'bg-green-200': tag.type === 'serving',
        'bg-blue-200': tag.type === 'preparation',
      }"
    >
      {{ tag.name }}
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["tags"]);
</script>

<style lang="scss" scoped></style>
