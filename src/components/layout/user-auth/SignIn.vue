<template>
  <div>
    <h2 class="mb-8 text-center text-3xl">Sign in</h2>
    <form class="flex flex-col gap-5" @submit.prevent="signInWithEmail">
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
      <base-button class="btn-primary">Sign In</base-button>
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
import { useSignIn } from "@/composables/useSignIn.js";

defineProps(["showSignUp"]);

const email = ref("");
const password = ref("");
const { signInWithEmail } = useSignIn(email, password);
</script>

<style lang="scss" scoped></style>
