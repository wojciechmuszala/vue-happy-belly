<template>
  <div class="flex min-h-screen w-full justify-center px-3">
    <base-card type="quternary" class="h-max max-w-screen-sm md:w-1/2">
      <sign-in :showSignUp="showSignUp" />
      <transition name="expand">
        <sign-up v-show="!isUserRegistered" />
      </transition>
    </base-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

import SignIn from "../components/layout/user-auth/SignIn";
import SignUp from "../components/layout/user-auth/SignUp";

const isUserRegistered = ref(true);
const showSignUp = () => {
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
