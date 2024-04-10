<template>
  <div class="flex items-center gap-4 md:px-1">
    <div
      class="bg-white flex h-12 w-12 items-center justify-center rounded-full"
    >
      <img
        v-if="store.user.isLogged"
        :src="store.user.avatar"
        alt="User avatar"
      />
      <font-awesome-icon
        v-else
        :icon="['fas', 'user']"
        class="text-2xl text-dark-blue"
      />
    </div>
    <span
      class="hidden truncate transition-all duration-300 md:block max-w-28"
      :class="{ 'opacity-0': !isNavbarExpanded }"
      >
      {{ store.user.isLogged ? store.user.nickName : "Sign in" }}</span
    >
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useUsersStore } from "@/stores/users.js";

defineProps(["isNavbarExpanded"]);
const store = useUsersStore();
console.log(store.user);
</script>

<style scoped></style>
@/stores
