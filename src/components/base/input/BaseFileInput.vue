<template>
  <div>
    <input :id="id" :type="type" class="hidden" @change="handleChange"/>
    <label
      :for="id"
      class="bg-white flex items-center gap-3 rounded-full border border-dark-blue px-5 py-3 transition-colors duration-300 hover:bg-dark-blue hover:text-light-yellow"
    >
      Upload
      <font-awesome-icon :icon="['fas', 'upload']" />
    </label>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps([
  "id",
  "label",
  "type",
  "icon",
  "modelValue",
  "noRounded",
]);

const emit = defineEmits(["update:modelValue"]);

const firstCharacterTyped = ref(false);
const emitInputValue = (inputValue) => {
  firstCharacterTyped.value = true;
  props.validateFunction && props.validateFunction();

  //place to add custom model modifiers
  /* if (modelModifiers[...]) {
    value = value.replace(...);
  } */

  let value;
  if (props.type === "select") {
    value = inputValue;
  } else {
    value = event.target.value;
  }

  emit("update:modelValue", value);
};

const handleChange = (inputValue) => {
  props.onChange != undefined && emitInputValue(inputValue);
};

</script>

<style lang="scss" scoped></style>
