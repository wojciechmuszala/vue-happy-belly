<template>
  <div class="flex w-full flex-col justify-start">
    <div
      class="flex w-max p-2 transition-all"
      :class="isNavbarExpanded ? 'flex-row' : 'flex-col-reverse gap-y-6'"
    >
      <font-awesome-icon
        :icon="['fas', 'right-from-bracket']"
        class="hover:text-normal-orange h-4 px-4 transition-colors duration-300"
        @click="handleSignOut"
      />
    </div>
    <component
      :is="store.user.isLogged ? 'div' : 'router-link'"
      :to="store.user.isLogged ? '/x' : '/user-auth'"
      class="hover:bg-dark-blue-lighter flex w-full items-center gap-3 rounded-full px-2 py-2 transition-all duration-300 md:gap-4"
    >
      <transition name="bounce-in" mode="out-in">
        <div
          :key="store.user.isLogged"
          class="bg-white flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300"
          :class="{
            'border-normal-orange border-2': store.user.isLogged,
          }"
        >
          <img
            v-if="store.user.isLogged && store.user.avatar"
            :src="store.user.avatar"
            alt="User avatar"
          />
          <font-awesome-icon
            v-else-if="store.user.isLogged && !store.user.avatar"
            :icon="['fas', 'user-tie']"
            class="text-2xl text-dark-blue"
          />
          <font-awesome-icon
            v-else
            :icon="['fas', 'user']"
            class="text-2xl text-dark-blue"
          />
        </div>
      </transition>
      <span
        class="truncate transition-all duration-300"
        :class="{
          'hidden md:block': store.user.isLogged,
        }"
      >
        {{ store.user.isLogged ? store.user.login : "Sign in" }}
      </span>
    </component>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useUsersStore } from "@/stores/users.js";
import { useUserAuth } from "@/composables/useUserAuth";

defineProps(["isNavbarExpanded"]);
const store = useUsersStore();
const { handleSignOut } = useUserAuth({});
</script>

<style scoped>
.bounce-in-enter-active {
  @apply animate-bounce-in;
}
.bounce-in-leave-active {
  @apply animate-bounce-in-reverse;
}
</style>
