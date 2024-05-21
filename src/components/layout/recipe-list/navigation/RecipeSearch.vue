<template>
  <base-input
    :icon="['fas', 'magnifying-glass']"
    id="search"
    type="text"
    label="Search"
    v-model="value"
  ></base-input>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
</script>

<style lang="scss" scoped></style>
