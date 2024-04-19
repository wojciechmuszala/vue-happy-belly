<!-- 
TODO : Move message div to new component
TODO : Move base config to object, generate inputs by v-for
-->

<template>
  <div>
    <h2 class="mb-8 text-center text-3xl">Sign up</h2>

    <form class="flex flex-col gap-5" @submit.prevent="signUpWithEmail">
      <base-input
        onBlur
        id="login"
        type="text"
        label="Login"
        v-model.trim="login"
        :validate-function="checkLogin"
      ></base-input>
      <base-input
        onBlur
        id="email"
        type="email"
        label="E-mail"
        v-model.trim="email"
        :validate-function="checkEmail"
      ></base-input>
      <base-input
        onBlur
        id="password"
        type="password"
        label="Password"
        v-model="password"
        :validate-function="checkPassword"
      ></base-input>
      <base-input
        onInput
        id="repeat-password"
        type="password"
        label="Repeat password"
        v-model="repeatPassword"
        handleInput
        :validate-function="checkPasswordMatch"
      ></base-input>
      <div class="mx-1 flex flex-col gap-1">
        <p
          v-if="errorMessage"
          class="text-red-500 flex items-center gap-2 before:text-3xl before:content-['×']"
        >
          {{ errorMessage }}
        </p>
        <p
          v-for="message in successMessages"
          :key="message"
          class="flex items-center gap-2 transition-all duration-500 before:content-['✔']"
          :class="message.function() ? 'opacity-100' : 'opacity-20'"
        >
          {{ message.text }}
        </p>
      </div>
      <base-button class="btn-primary">Sign Up</base-button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSignUp } from "@/composables/useSignUp";

const login = ref("");
const email = ref("");
const password = ref("");
const repeatPassword = ref("");

const {
  successMessages,
  checkLogin,
  checkEmail,
  checkPassword,
  checkPasswordMatch,
  signUpWithEmail,
  errorMessage,
} = useSignUp(login, email, password, repeatPassword);
</script>

<style lang="scss" scoped></style>
