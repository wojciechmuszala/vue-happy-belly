<template>
  <div class="flex items-center gap-3 md:gap-4 md:px-1">
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
    <div
      class="max-w-28 truncate transition-all duration-300"
      :class="{ 'md:opacity-0': !isNavbarExpanded }"
    >
      <span v-if="store.user.isLogged" class="hidden md:block">
        {{ store.user.nickName }}</span
      >
      <span v-else>Sign in</span>
    </div>
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
