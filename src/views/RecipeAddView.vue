<template>
  <div>
    <h1 class="py-5 text-center text-7xl font-semibold">Add recipe</h1>
    <div>
      <h2 class="pb-4 text-3xl">Ingredients</h2>
      <form @submit.prevent="addIngredient" class="flex w-80">
        <base-input
          type="text"
          label="Add ingredient"
          button-placement="right"
        />
        <base-button
          type="primary"
          :icon="['fas', 'plus']"
          input-placement="left"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
const addIngredient = () => {
  console.log("add");
};
</script>

<style lang="scss" scoped></style>
