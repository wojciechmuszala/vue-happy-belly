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
        id="e-mail"
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
      <base-button class="btn-primary">Sign Up</base-button>
    </form>
    <div class="mx-2 mt-5 flex flex-col gap-1">
      <p
        v-for="message in successMessages"
        :key="message"
        class="transition-all duration-500"
        :class="message.function() ? 'opacity-100' : 'opacity-20'"
      >
        {{ message.text }}
      </p>
    </div>
  </div>
</template>

<script setup>
// TODO: 1. przeniesc klasy odpowiedzialne za border do BaseInput i uzaleznic od validationFunction
// TODO: 2. zmienic kolor dla p na szary gdy OK to zielony lub czarny semibold

import { ref } from "vue";
import { useSignUp } from "@/composables/useSignUp";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
} = useSignUp(login, email, password, repeatPassword);

console.log(successMessages[0].function());
</script>

<style lang="scss" scoped></style>
