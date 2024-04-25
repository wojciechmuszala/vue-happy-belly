<template>
  <div
    class="flex items-center justify-center overflow-hidden md:mb-3"
    :class="isNavbarExpanded ? 'md:flex-row' : 'gap-y-4 md:flex-col-reverse'"
  >
    <component
      v-for="item in userPanelNav"
      :key="item.id"
      :is="item.link ? 'router-link' : 'div'"
      :to="item.link && item.link"
      @click="item.eventFunction && item.eventFunction()"
    >
      <font-awesome-icon
        :icon="item.icon"
        class="hover:text-normal-orange ml-5 h-6 cursor-pointer transition-colors duration-300 md:h-5"
      />
    </component>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useUserAuth } from "@/composables/useUserAuth";

defineProps(["isNavbarExpanded"]);
const { handleSignOut } = useUserAuth({});
const userPanelNav = [
  {
    id: "sign-out",
    icon: ["fas", "right-from-bracket"],
    eventFunction: handleSignOut,
  },
  {
    id: "settings",
    icon: ["fas", "gear"],
    link: "/",
  },
  {
    title: "notifactions",
    icon: ["fas", "bell"],
    link: "/",
  },
];
</script>

<style lang="scss" scoped></style>
