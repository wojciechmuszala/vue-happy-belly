<template>
  <div class="flex min-h-screen justify-center">
    <base-card class="card-quternary h-max w-1/2 max-w-screen-sm">
      <sign-in :toggleLoginRegister="toggleLoginRegister"></sign-in>
      <transition name="expand">
        <sign-up
          v-show="!isUserRegistered"
          class="mt-6 overflow-hidden border-t border-t-dark-blue pt-6"
        ></sign-up>
      </transition>
    </base-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

import SignIn from "../components/layout/user-auth/SignIn";
import SignUp from "../components/layout/user-auth/SignUp";

const isUserRegistered = ref(true);
const toggleLoginRegister = () => {
  isUserRegistered.value = false;
};
</script>

<style scoped>
.expand-leave-active,
.expand-enter-active {
  @apply transition-all duration-1000 ease-in;
}

.expand-enter-to,
.expand-leave-from {
  @apply max-h-[9999px];
}

.expand-enter-from,
.expand-leave-to {
  @apply max-h-0;
}
</style>
