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
        <base-input
          onInput
          type="text"
          label="Recipe name"
          v-model="recipeName"
        />
      </div>
      <div>
        <h2
          class="mb-6 border-b-2 border-b-dark-blue pr-2 text-2xl underline decoration-2"
        >
          Ingredients
        </h2>
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
      </div>
    </base-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
const recipeName = ref("");
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
