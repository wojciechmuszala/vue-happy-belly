<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="w-1/2">
      <div v-if="!isUserRegistered">
        <sign-in></sign-in>
        <p class="mt-2 text-center">
          Don't have an account yet?
          <button
            class="hover:text-normal-orange underline"
            @click="toggleLoginRegister"
          >
            Register here!
          </button>
        </p>
      </div>
      <div v-if="isUserRegistered">
        <sign-up></sign-up>
        <p class="mt-5 text-center">
          Already have an account?
          <button
            class="hover:text-normal-orange underline"
            @click="toggleLoginRegister"
          >
            Log in here
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import SignIn from "../components/layout/user-auth/SignIn";
import SignUp from "../components/layout/user-auth/SignUp";

const isUserRegistered = ref(true);
const toggleLoginRegister = () => {
  isUserRegistered.value = !isUserRegistered.value;
};
</script>

<style scoped></style>
