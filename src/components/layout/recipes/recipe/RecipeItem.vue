<template>
  <base-card type="quternary" class="flex flex-col !p-3">
    <recipe-image :images="recipe.images" :name="recipe.name" />
    <recipe-tags :tags="recipe.tags" />
    <h3 class="text-xl">{{ recipe.name }}</h3>
  </base-card>
</template>

<script setup>
import { defineProps } from "vue";
import RecipeImage from "./RecipeImage";
import RecipeTags from "./RecipeTags";

defineProps(["recipe"]);
</script>

<style lang="scss" scoped></style>
