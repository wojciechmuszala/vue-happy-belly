<template>
  <a v-if="mode === 'link'" v-bind="dirAttribute">
    <div
      class="flex h-full items-center gap-3 px-4 py-2.5 active:scale-95"
      :class="[
        `btn-${type}`,
        icon ? 'justify-between' : 'justify-center',
        inputPlacement ? 'rounded-s-full' : 'rounded-full',
      ]"
    >
      <slot></slot>
      <font-awesome-icon v-if="icon" :icon="icon" />
    </div>
  </a>
  <router-link v-else-if="mode === 'router-link'" v-bind="dirAttribute">
    <div
      class="flex h-full items-center gap-3 px-4 py-2.5 active:scale-95"
      :class="[
        `btn-${type}`,
        icon ? 'justify-between' : 'justify-center',
        inputPlacement ? 'rounded-s-full' : 'rounded-full',
      ]"
    >
      <slot />
      <font-awesome-icon v-if="icon" :icon="icon" />
    </div>
  </router-link>
  <button v-else v-bind="dirAttribute">
    <div
      class="flex h-full items-center gap-3 px-4 py-2.5 active:scale-95"
      :class="[
        `btn-${type}`,
        icon ? 'justify-between' : 'justify-center',
        inputPlacement ? 'rounded-s-full' : 'rounded-full',
      ]"
    >
      <slot />
      <font-awesome-icon v-if="icon" :icon="icon" />
    </div>
  </button>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["mode", "type", "icon", "inputPlacement"]);

const dirAttribute = (() => {
  console.log(props.inputPlacement);
  if (props.inputPlacement === "right") {
    return { dir: "ltr" };
  } else if (props.inputPlacement === "left") {
    return { dir: "rtl" };
  } else {
    return null;
  }
})();
</script>

<style scoped>
.btn-primary {
  @apply text-normal-orange hover:bg-normal-orange border border-dark-blue bg-dark-blue font-semibold transition-all duration-300 hover:text-dark-blue;
}
.btn-secondary {
  @apply bg-normal-orange hover:text-normal-orange border-normal-orange border font-semibold text-dark-blue transition-all duration-300 hover:bg-dark-blue;
}
.btn-tertiary {
  @apply text-white hover:bg-normal-orange border border-dark-blue bg-dark-blue font-semibold transition-all duration-300 hover:text-dark-blue;
}
</style>
