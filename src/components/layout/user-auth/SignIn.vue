<template>
  <div>
    <h2 class="mb-8 text-center text-3xl">Sign in</h2>
    <form class="flex flex-col gap-5" @submit.prevent="signIn">
      <base-input
        id="login"
        type="text"
        label="Login or email"
        v-model.trim="loginOrEmail"
      ></base-input>
      <base-input
        id="password"
        type="password"
        label="Password"
        v-model.trim="password"
      ></base-input>
      <base-button class="btn-primary">Sign In</base-button>
    </form>
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
</template>

<script setup>
import { ref, defineProps } from "vue";
defineProps(["toggleLoginRegister"]);

const loginOrEmail = ref("");
const password = ref("");

const signIn = () => {
  console.log(loginOrEmail.value, password.value);
};
</script>

<style lang="scss" scoped></style>
