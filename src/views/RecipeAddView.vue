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
          <base-text-input
            ref="startIngeredientInput"
            onInput
            type="text"
            label="Add ingredient"
            no-rounded="right"
            v-model="ingredient.name"
            class="sm:basis-1/2"
          />
          <base-text-input
            onInput
            type="number"
            label="Qantity"
            no-rounded="both"
            v-model="ingredient.quantity"
            class="sm:basis-1/5"
          />
          <base-select-input
            id="unit"
            label="Unit"
            :options="['g', 'ml', 'tsp', 'tbsp', 'cup']"
            no-rounded="both"
            v-model="ingredient.unit"
            class="!min-w-0 sm:basis-1/5"
          />
          <base-button
            type="primary"
            :icon="['fas', 'plus']"
            no-rounded="left"
            class="sm:basis-[10%]"
          />
        </form>
        <ul
          v-if="ingredientList.length > 0"
          class="mt-5 flex list-disc flex-col gap-2 pl-5"
        >
          <li>carrot - 3tsp</li>
          <li v-for="ingredient in ingredientList" :key="ingredient">
            {{ ingredient.name }} - {{ ingredient.quantity + ingredient.unit }}
          </li>
        </ul>
      </div>
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
import { ref, reactive, shallowRef } from "vue";

const recipeName = ref("");
const ingredient = reactive({
  name: null,
  quantity: null,
  unit: null,
});
const ingredientList = ref([]);
const startIngeredientInput = ref(null);
const addIngredient = () => {
  const newIngredient = shallowRef({ ...ingredient });
  if (!ingredientList.value.includes(ingredient.name)) {
    ingredientList.value.push(newIngredient.value);
    for (let key in ingredient) {
      ingredient[key] = null;
    }
    startIngeredientInput.value.$el.querySelector("input").focus();
  } else {
    // TODO: Add validation fct and info
    console.log("Already on list!");
  }
};

const methodOfPreparing = ref("");
</script>

<style lang="scss" scoped></style>
