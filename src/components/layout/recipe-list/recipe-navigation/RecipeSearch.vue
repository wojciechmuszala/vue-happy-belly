<template>
  <base-text-input
    onInput
    :icon="['fas', 'magnifying-glass']"
    id="search"
    type="text"
    label="Search"
    v-model="value"
  ></base-text-input>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
</script>

<style lang="scss" scoped></style>
