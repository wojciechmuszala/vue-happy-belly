<template>
  <div
    v-if="type === 'text' || type === 'password' || type === 'number'"
    class="group relative w-full"
    v-bind="dirAttribute"
  >
    <input
      @input="handleInput($event)"
      @blur="handleBlur($event)"
      :id="id"
      :type="type"
      :value="modelValue"
      class="bg-white peer w-full border border-dark-blue px-5 py-2.5 text-dark-blue focus:outline-none"
      :class="[
        inputClass,
        {
          'border-red-500 bg-red-50': validateFunction && !checkIsInputValid(),
          'rounded-full': !noRounded,
          'rounded-none border-r-0': noRounded === 'both',
          'rounded-s-full border-r-0': noRounded === 'right',
          'rounded-s-full border-l-0': noRounded === 'left',
        },
      ]"
    />
    <label
      :for="id"
      class="peer-focus:bg-white peer=focus:rounded pointer-events-none absolute inset-y-1/2 left-5 h-max -translate-y-1/2 transition-all duration-200 peer-focus:-top-1 peer-focus:left-5 peer-focus:h-max peer-focus:px-1 peer-focus:py-0 peer-focus:text-xs peer-focus:text-dark-blue"
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
  <details
    ref="detailsElement"
    v-else-if="type === 'select'"
    class="min-w-60 rounded-lg border border-dark-blue [&_summary:after]:content-['▼'] [&_summary:after]:open:content-['▲']"
  >
    <summary
      class="relative z-10 flex gap-3 after:absolute after:top-1/2 after:flex after:h-full after:w-full after:-translate-y-1/2 after:items-center after:justify-end after:pr-3 after:text-right"
    >
      <input
        type="radio"
        :name="id"
        id="default"
        :title="defaultOption"
        :value="modelValue"
        class="hidden w-full appearance-none p-3 pr-9 font-semibold before:content-[attr(title)] checked:inline-block"
        checked="true"
      />
      <input
        v-for="option in options"
        :key="option"
        type="radio"
        :name="id"
        :id="option"
        :title="option"
        :value="modelValue"
        class="hidden w-full appearance-none p-3 pr-9 font-semibold before:content-[attr(title)] checked:inline-block"
      />
    </summary>
    <ul class="[&_li:first-child]:border-t [&_li:last-child]:border-none">
      <li
        class="hover:bg-gray-100 border-b border-dark-blue"
        @click="handleCloseSelect"
      >
        <label for="default" class="block px-3 py-1">{{ defaultOption }}</label>
      </li>
      <li
        v-for="option in options"
        :key="option"
        @click="handleCloseSelect"
        class="hover:bg-gray-100 border-b border-b-dark-blue"
      >
        <label :for="option" class="block px-3 py-1"> {{ option }}</label>
      </li>
    </ul>
  </details>
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

// TODO: Add props types and required info
// TODO: Handle type number (convert to type number)
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
  "options",
  "defaultOption",
  "noRounded",
]);

const dirAttribute = (() => {
  console.log(props.noRounded);
  if (props.noRounded === "right") {
    return { dir: "ltr" };
  } else if (props.noRounded === "left") {
    return { dir: "rtl" };
  } else {
    return null;
  }
})();

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
const detailsElement = ref();
const handleCloseSelect = () => {
  detailsElement.value.removeAttribute("open");
};
</script>

<style lang="scss" scoped></style>
