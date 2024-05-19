<template>
  <router-link :to="{ name: 'recipeCard', params: { id: recipe.id } }">
    <base-card type="tertiary" class="!border-gray-300 flex flex-col !p-2">
      <recipe-image :images="recipe.images" :name="recipe.name" />
      <recipe-tags :tags="recipe.tags" />
      <h3 class="text-xl font-semibold">{{ recipe.name }}</h3>
    </base-card>
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";
import RecipeImage from "./RecipeImage";
import RecipeTags from "./RecipeTags";

defineProps(["recipe"]);
</script>

<style lang="scss" scoped></style>
