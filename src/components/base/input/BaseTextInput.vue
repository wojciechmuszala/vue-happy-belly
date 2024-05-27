<template>
  <div class="group relative w-full">
    <input
      @input="handleInput"
      @blur="handleBlur"
      @keydown="checkIsNumber"
      :id="id"
      :type="type"
      :value="modelValue"
      v-bind="typeAttributes"
      class="bg-white peer w-full rounded-full border border-dark-blue px-5 py-2.5 text-dark-blue focus:outline-none"
      :class="[
        inputClass,
        {
          'border-red-500 bg-red-50': validateFunction && !checkIsInputValid(),
          'sm:rounded-none sm:border-r-0': noRounded === 'both',
          'sm:rounded-l-full sm:rounded-r-none sm:border-r-0':
            noRounded === 'right',
          'sm: rounded-l-none sm:rounded-r-full sm:border-l-0':
            noRounded === 'left',
        },
      ]"
    />
    <label
      :for="id"
      class="peer-focus:bg-white pointer-events-none absolute inset-y-1/2 left-5 h-max -translate-y-1/2 transition-all duration-200 peer-focus:-top-1 peer-focus:left-5 peer-focus:h-max peer-focus:rounded peer-focus:px-1 peer-focus:py-0 peer-focus:text-xs peer-focus:text-dark-blue"
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
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import { useInputValidation } from "@/composables/useInputValidation";

const { allowOnlyNumber } = useInputValidation();

const props = defineProps([
  "id",
  "label",
  "type",
  "icon",
  "inputClass",
  "labelClass",
  "modelValue",
  "modelModifiers",
  "validateFunction",
  "onInput",
  "onBlur",
  "noRounded",
]);

const checkIsNumber = (event) =>
  props.type === "number" ? allowOnlyNumber(event) : null;

const typeAttributes = (() => {
  if (props.type === "number") {
    return { step: 0.1, min: 0 };
  } else {
    return null;
  }
})();

const emit = defineEmits(["update:modelValue"]);

const firstCharacterTyped = ref(false);
const emitInputValue = (event) => {
  firstCharacterTyped.value = true;
  props.validateFunction && props.validateFunction();

  let value;

  value = event.target.value;
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
