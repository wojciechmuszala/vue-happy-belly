<template>
  <div>
    <h1 class="py-5 text-center text-7xl font-semibold">Recipes</h1>
    <recipes-navigation />
    <recipes-list />
  </div>
</template>

<script setup>
import RecipesList from "@/components/layout/recipe-list/RecipesList.vue";
import RecipesNavigation from "@/components/layout/recipe-list/RecipesNavigation.vue";
</script>

<style lang="scss" scoped></style>
