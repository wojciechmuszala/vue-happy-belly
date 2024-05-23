<template>
  <component :is="handleMode" class="cursor-pointer">
    <div
      class="flex h-full items-center gap-3 px-4 py-2.5 active:scale-95"
      :class="[
        `btn-${type}`,
        icon ? 'justify-between' : 'justify-center',
        {
          'rounded-full': !noRounded,
          'rounded-none': noRounded === 'both',
          'rounded-l-full': noRounded === 'right',
          'rounded-r-full': noRounded === 'left',
        },
      ]"
    >
      <slot></slot>
      <font-awesome-icon v-if="icon" :icon="icon" />
    </div>
  </component>
</template>

<script setup>
import { defineProps } from "vue";

// TODO: Add props types and required info
const props = defineProps(["mode", "type", "icon", "noRounded"]);

const handleMode = (() => {
  if (props.mode === "router-link") {
    return "router-link";
  } else if (props.mode === "link") {
    return "a";
  } else {
    return "button";
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
