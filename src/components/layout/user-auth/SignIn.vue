<template>
  <div>
    <h2 class="mb-8 text-center text-3xl">Sign in</h2>
    <form class="flex flex-col gap-5" @submit.prevent="handleSignInWithEmail">
      <base-input
        onInput
        id="email"
        type="text"
        label="E-mail"
        v-model.trim="email"
      ></base-input>
      <base-input
        onInput
        id="password"
        type="password"
        label="Password"
        v-model="password"
      ></base-input>
      <auth-announcements
        :errorMessage="errorMessage"
        v-show="errorMessage"
      ></auth-announcements>
      <base-button type="primary">Sign In</base-button>
    </form>
    <p class="mt-2 text-center">
      Don't have an account yet?
      <button class="hover:text-normal-orange underline" @click="showSignUp">
        Register here!
      </button>
    </p>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { useUserAuth } from "@/composables/useUserAuth.js";
import AuthAnnouncements from "@/components/layout/user-auth/AuthAnnouncements.vue";

defineProps(["showSignUp"]);

const email = ref("");
const password = ref("");
const { handleSignInWithEmail, errorMessage } = useUserAuth({
  email,
  password,
});
</script>

<style lang="scss" scoped></style>
