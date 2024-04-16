<template>
  <router-link
    :to="store.user.isLogged ? '/x' : '/user-auth'"
    class="hover:bg-dark-blue-lighter flex w-full items-center gap-3 rounded-full px-2 py-2 transition-all duration-300 md:gap-4"
  >
    <div
      class="bg-white flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
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
      class="max-w-28 truncate pr-1 transition-all duration-300"
      :class="{
        'hidden md:block': store.user.isLogged,
      }"
    >
      {{ store.user.isLogged ? store.user.nickname : "Sign in" }}
    </span>
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";
import { useUsersStore } from "@/stores/users.js";

defineProps(["isNavbarExpanded"]);
const store = useUsersStore();
</script>

<style scoped></style>
@/stores
