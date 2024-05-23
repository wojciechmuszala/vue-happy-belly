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
        <form
          @submit.prevent="addIngredient"
          class="flex max-w-2xl flex-col gap-3 sm:flex-row sm:gap-0"
        >
          <base-input
            onInput
            type="text"
            label="Add ingredient"
            no-rounded="right"
            v-model="ingredientName"
            class="grow-1 basis-full"
          />
          <base-input
            onInput
            type="number"
            label="Qantity"
            no-rounded="both"
            v-model="ingredientQuantity"
            class="basis-1/3"
          />
          <base-button
            type="primary"
            :icon="['fas', 'plus']"
            no-rounded="left"
            class="shrink-1 ml-auto w-1/4 sm:w-auto [&_div]:justify-center"
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

// TODO: Change igredient to one reactive object
const recipeName = ref("");
const ingredientName = ref("");
const ingredientQuantity = ref("");
const ingredientList = ref([]);
const addIngredient = () => {
  if (!ingredientList.value.includes(ingredientName.value)) {
    ingredientList.value.push([ingredientName.value, ingredientQuantity.value]);
  } else {
    // TODO: Add validation fct and info
    console.log("Already on list!");
  }
};

</script>

<style lang="scss" scoped></style>
