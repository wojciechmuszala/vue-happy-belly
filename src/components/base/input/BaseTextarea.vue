<!-- TODO - Check all props -->
<!-- TODO - Think about adding a useInput composable -->

<template>
  <div class="group relative w-full">
    <textarea
      @input="handleInput"
      @blur="handleBlur"
      :id="id"
      :type="type"
      :value="modelValue"
      v-bind="typeAttributes"
      class="bg-white peer h-52 w-full rounded-3xl border border-dark-blue px-5 py-2.5 text-dark-blue focus:outline-none"
      :class="[
        inputClass,
        {
          'border-red-500 bg-red-50': validateFunction && !checkIsInputValid(),
          'sm:rounded-none sm:border-r-0': noRounded === 'both',
          'sm:rounded-l-3xl sm:rounded-r-none sm:border-r-0':
            noRounded === 'right',
          'sm: rounded-l-none sm:rounded-r-3xl sm:border-l-0':
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
