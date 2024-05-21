<template>
  <div>
    <h1 class="py-5 text-center text-7xl font-semibold">Add recipe</h1>
    <base-card type="tertiary" class="mt-3">
      <h2 class="pb-4 text-3xl">Ingredients</h2>
      <form @submit.prevent="addIngredient" class="flex w-80">
        <base-input
          onInput
          type="text"
          label="Add ingredient"
          button-placement="right"
          v-model="ingredient"
        />
        <base-button
          type="primary"
          :icon="['fas', 'plus']"
          input-placement="left"
        />
      </form>
      <ul v-if="ingredientList.length > 0">
        <li v-for="ingredient in ingredientList" :key="ingredient">
          {{ ingredient }}
        </li>
      </ul>
    </base-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const ingredient = ref("");
const ingredientList = ref([]);
const addIngredient = () => {
  if (!ingredientList.value.includes(ingredient.value)) {
    ingredientList.value.push(ingredient.value);
  } else {
    // TODO: Add validation fct and info
    console.log("Already on list!");
  }
};
</script>

<style lang="scss" scoped></style>
