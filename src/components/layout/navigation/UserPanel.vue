<template>
  <div
    class="flex w-full flex-row-reverse items-center justify-end md:flex-col md:items-start"
  >
    <transition name="fade" mode="out-in">
      <user-panel-nav
        v-if="usersStore.user.isLogged"
        :is-navbar-expanded="isNavbarExpanded"
      />
    </transition>
    <router-link
      :to="{ name: 'userAuth' }"
      class="flex items-center gap-3 rounded-full px-2 py-2 transition-all duration-300 md:w-full md:gap-4"
      :class="
        usersStore.user.isLogged
          ? 'cursor-default'
          : 'hover:bg-dark-blue-lighter'
      "
      @click="preventDefault($event)"
    >
      <transition name="bounce-in" mode="out-in">
        <div
          :key="usersStore.user.isLogged"
          class="bg-white flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300"
          :class="{
            'border-normal-orange border-2': usersStore.user.isLogged,
          }"
        >
          <img
            v-if="usersStore.user.isLogged && usersStore.user.avatar"
            :src="usersStore.user.avatar"
            alt="User avatar"
          />
          <font-awesome-icon
            v-else-if="usersStore.user.isLogged && !usersStore.user.avatar"
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
        class="max-w-28 truncate pr-1 transition-all duration-300"
        :class="{
          'hidden md:block': usersStore.user.isLogged,
        }"
      >
        {{ usersStore.user.isLogged ? usersStore.user.login : "Sign in" }}
      </span>
    </router-link>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useUsersStore } from "@/stores/users.js";
import UserPanelNav from "./UserPanelNav.vue";

const preventDefault = (event) => {
  if (usersStore.user.isLogged) {
    event.preventDefault();
  }
};

defineProps(["isNavbarExpanded"]);
const usersStore = useUsersStore();
</script>

<style scoped>
.bounce-in-enter-active {
  @apply animate-bounce-in;
}
.bounce-in-leave-active {
  @apply animate-bounce-in-reverse;
}

.fade-leave-active {
  @apply transition-all duration-500 ease-in;
}
.fade-enter-active {
  @apply transition-all delay-500 duration-500 ease-in;
}

.fade-enter-to,
.fade-leave-from {
  @apply opacity-100;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
