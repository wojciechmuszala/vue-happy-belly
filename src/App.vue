<template>
  <div class="font-quicksand min-h-screen bg-light-yellow">
    <the-navigation></the-navigation>
    <main-content @click="fct"></main-content>
  </div>
</template>

<script setup>
import TheNavigation from "./components/layout/TheNavigation";
import MainContent from "./components/layout/MainContent";

const fct = (ff) => {
  ff.toString();
};
</script>

<style></style>
