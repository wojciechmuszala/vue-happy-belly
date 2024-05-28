<!-- TODO - Split to separate components  -->
<!-- TODO - Add validation fct to ingredients form  -->
<!-- TODO - Add delete btn to ingredients  -->
<!-- TODO - Add drag and drop option to change the order in the list of ingredients  -->
<!-- TODO - Refactor and handle main form -->

<template>
  <div>
    <h1 class="py-5 text-center text-7xl font-semibold">Add recipe</h1>
    <base-card type="quaternary" class="flex flex-col gap-12">
      <div>
        <h2
          class="mb-6 border-b-2 border-b-dark-blue pr-2 text-2xl underline decoration-2"
        >
          Recipe name
        </h2>
        <base-text-input
          onInput
          type="text"
          label="Recipe name"
          v-model="recipeName"
        />
      </div>
      <recipe-add-ingredients @get-ingredient="updateIngredients" />
      <div>
        <h2
          class="mb-6 border-b-2 border-b-dark-blue pr-2 text-2xl underline decoration-2"
        >
          Method of preparing
        </h2>
        <base-textarea onInput v-model="methodOfPreparing" />
      </div>
    </base-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import RecipeAddIngredients from "@/components/layout/recipe-list/recipe-add/RecipeAddIngredients";

const recipeName = ref("");
const recipeIngredients = ref([]);
const methodOfPreparing = ref("");

const updateIngredients = (newIngredient) => {
  recipeIngredients.value.push(newIngredient);
};
</script>

<style lang="scss" scoped></style>
