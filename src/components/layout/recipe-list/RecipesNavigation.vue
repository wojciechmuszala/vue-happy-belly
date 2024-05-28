<template>
  <div class="mb-5 flex justify-between">
    <div class="flex items-center gap-3">
      <recipe-search />
      <recipe-tag-filter />
    </div>
    <base-button
      mode="router-link"
      :to="{ name: 'recipeAdd' }"
      type="tertiary"
      :icon="['fas', 'plus']"
    >
      Add recipe
    </base-button>
  </div>
</template>

<script setup>
import RecipeSearch from "./recipe-navigation/RecipeSearch.vue";
import RecipeTagFilter from "./recipe-navigation/RecipeTagFilter.vue";
</script>

<style scoped></style>
