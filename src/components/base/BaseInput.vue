<template>
  <div v-if="type === 'text'" class="group relative">
    <input
      @input="handleInput($event)"
      @blur="handleBlur($event)"
      :id="id"
      :type="type"
      :value="modelValue"
      class="bg-white peer w-full rounded-full border border-dark-blue px-5 py-2.5 text-dark-blue focus:outline-none"
      :class="[
        inputClass,
        {
          'border-red-500 bg-red-50': validateFunction && !checkIsInputValid(),
        },
      ]"
    />
    <label
      :for="id"
      class="peer-focus:bg-white peer=focus:rounded absolute inset-y-1/2 left-5 h-max -translate-y-1/2 transition-all duration-200 peer-focus:-top-1 peer-focus:left-5 peer-focus:h-max peer-focus:px-1 peer-focus:py-0 peer-focus:text-xs peer-focus:text-dark-blue"
      :class="[
        labelClass,
        modelValue
          ? 'bg-white -top-1 rounded px-1 py-0 text-xs text-dark-blue'
          : 'text-dark-blue/[0.2]',
      ]"
      >{{ label }}</label
    >
    <font-awesome-icon
      v-if="icon"
      :icon="icon"
      class="absolute right-4 top-1/2 -translate-y-1/2"
    />
  </div>
  <div v-else-if="type === 'file'">
    <input :id="id" :type="type" class="hidden" />
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
  "inputClass",
  "labelClass",
  "modelValue",
  "modelModifiers",
  "validateFunction",
  "onInput",
  "onBlur",
  "icon",
]);
const emit = defineEmits(["update:modelValue"]);

const firstCharacterTyped = ref(false);
const emitInputValue = (event) => {
  firstCharacterTyped.value = true;
  props.validateFunction && props.validateFunction();
  let value = event.target.value;

  //place to add custom model modifiers
  /* if (modelModifiers[...]) {
    value = value.replace(...);
  } */

  emit("update:modelValue", value);
};

const checkIsInputValid = () =>
  firstCharacterTyped.value
    ? props.validateFunction && props.validateFunction()
    : true;

const handleInput = (event) => {
  props.onInput != undefined && emitInputValue(event);
};
const handleBlur = (event) => {
  props.onBlur != undefined && emitInputValue(event);
};
</script>

<style lang="scss" scoped></style>
