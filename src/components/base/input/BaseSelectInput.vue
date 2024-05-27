<template>
  <div class="relative min-w-60">
    <details
      ref="detailsElement"
      class="bg-white rounded-full border border-dark-blue [&_summary:after]:content-['▼'] [&_summary:after]:open:content-['▲']"
      :class="{
        'sm:rounded-none sm:border-r-0': noRounded === 'both',
        'sm:rounded-l-full sm:rounded-r-none sm:border-r-0':
          noRounded === 'right',
        'sm: rounded-l-none sm:rounded-r-full sm:border-l-0':
          noRounded === 'left',
      }"
    >
      <summary
        class="bg-inherit group relative z-10 flex gap-3 after:absolute after:top-1/2 after:flex after:h-full after:w-full after:-translate-y-1/2 after:items-center after:justify-end after:pr-3 after:text-right"
      >
        <label
          :for="id"
          class="peer-focus:bg-white pointer-events-none absolute inset-y-1/2 left-5 h-max -translate-y-1/2 transition-all duration-200 peer-focus:-top-1 peer-focus:left-5 peer-focus:h-max peer-focus:rounded peer-focus:px-1 peer-focus:py-0 peer-focus:text-xs peer-focus:text-dark-blue"
          :class="[
            labelClass,
            modelValue
              ? 'bg-white opacity-1 -top-1 rounded px-1 py-0 text-xs text-dark-blue'
              : 'opacity-0',
          ]"
          >{{ label }}</label
        >
        <input
          type="radio"
          :name="id"
          id="default"
          :title="label"
          value="modelValue"
          :checked="!modelValue"
          class="hidden w-full appearance-none py-2.5 pl-5 pr-9 font-semibold text-dark-blue/[0.2] before:content-[attr(title)] checked:inline-block"
        />
        <input
          v-for="option in options"
          @change="handleChange(option)"
          :key="option"
          type="radio"
          :name="id"
          :id="option"
          :title="option"
          :value="option"
          :checked="modelValue === option"
          class="hidden w-full appearance-none py-2.5 pl-5 pr-9 before:content-[attr(title)] checked:inline-block"
        />
      </summary>
      <ul
        class="bg-white absolute left-0 top-full w-full border border-t-0 border-dark-blue [&_li:last-child]:border-none"
      >
        <!-- <li
          class="hover:bg-gray-100 border-b border-t-0 border-dark-blue"
          @click="handleCloseSelect"
        >
          <label for="default" class="block px-3 py-1">
            {{ label }}
          </label>
        </li> -->
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
  "validateFunction",
  "options",
  "defaultOption",
  "noRounded",
]);

const emit = defineEmits(["update:modelValue"]);

const firstCharacterTyped = ref(false);
const emitInputValue = (inputValue) => {
  firstCharacterTyped.value = true;
  props.validateFunction && props.validateFunction();

  let value;

  value = inputValue;

  emit("update:modelValue", value);
};

const handleChange = (inputValue) => {
  emitInputValue(inputValue);
};

const detailsElement = ref();
const handleCloseSelect = () => {
  detailsElement.value.removeAttribute("open");
};
</script>

<style lang="scss" scoped></style>
