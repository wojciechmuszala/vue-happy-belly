<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    <recipe-item v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
  </div>
</template>

<script setup>
import RecipeItem from "./recipe/RecipeItem";
const recipes = [
  {
    id: Math.random(),
    name: "Pasta with sauce",
    images: [require("@/assets/images/dummy_recipes/dummy-recipe-1.jpg")],
    tags: [
      { id: Math.random(), type: "meal", name: "lunch" },
      { id: Math.random(), type: "serving", name: "box" },
      { id: Math.random(), type: "preparation", name: "one-pot" },
    ],
  },
  {
    id: Math.random(),
    name: "Sandwitch with chicken",
    images: [require("@/assets/images/dummy_recipes/dummy-recipe-2.jpg")],
    tags: [
      { id: Math.random(), type: "meal", name: "breakfast" },
      { id: Math.random(), type: "serving", name: "box" },
      { id: Math.random(), type: "preparation", name: "one-pot" },
    ],
  },
  {
    id: Math.random(),
    name: "Burger with beetroot",
    images: [require("@/assets/images/dummy_recipes/dummy-recipe-3.jpg")],
    tags: [
      { id: Math.random(), type: "meal", name: "breakfast" },
      { id: Math.random(), type: "serving", name: "box" },
      { id: Math.random(), type: "preparation", name: "one-pot" },
    ],
  },
  {
    id: Math.random(),
    name: "Sandwitch with ",
    images: [require("@/assets/images/dummy_recipes/dummy-recipe-4.jpg")],
    tags: [
      { id: Math.random(), type: "meal", name: "breakfast" },
      { id: Math.random(), type: "serving", name: "box" },
      { id: Math.random(), type: "preparation", name: "one-pot" },
    ],
  },
  {
    id: Math.random(),
    name: "Sandwitch with gucamole",
    images: [require("@/assets/images/dummy_recipes/dummy-recipe-5.jpg")],
    tags: [
      { id: Math.random(), type: "meal", name: "breakfast" },
      { id: Math.random(), type: "serving", name: "box" },
      { id: Math.random(), type: "preparation", name: "one-pot" },
    ],
  },
  {
    id: Math.random(),
    name: "Sandwitch with gucamole",
    images: [require("@/assets/images/dummy_recipes/dummy-recipe-5.jpg")],
    tags: [
      { id: Math.random(), type: "meal", name: "breakfast" },
      { id: Math.random(), type: "serving", name: "box" },
      { id: Math.random(), type: "preparation", name: "one-pot" },
    ],
  },
  {
    id: Math.random(),
    name: "Sandwitch with gucamole",
    images: [require("@/assets/images/dummy_recipes/dummy-recipe-5.jpg")],
    tags: [
      { id: Math.random(), type: "meal", name: "breakfast" },
      { id: Math.random(), type: "serving", name: "box" },
      { id: Math.random(), type: "preparation", name: "one-pot" },
    ],
  },
  {
    id: Math.random(),
    name: "Sandwitch with gucamole",
    images: [require("@/assets/images/dummy_recipes/dummy-recipe-5.jpg")],
    tags: [
      { id: Math.random(), type: "meal", name: "breakfast" },
      { id: Math.random(), type: "serving", name: "box" },
      { id: Math.random(), type: "preparation", name: "one-pot" },
    ],
  },
];
</script>

<style scoped></style>
