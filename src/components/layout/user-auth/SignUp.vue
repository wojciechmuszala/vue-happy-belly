<template>
  <div>
    <h2 class="mb-8 text-center text-3xl">Sign up</h2>
    <form class="flex flex-col gap-5" @submit.prevent="signUpWithEmail">
      <base-input
        onBlur
        id="login"
        type="text"
        label="Login"
        v-model="login"
        :validate-function="checkLogin"
      ></base-input>
      <base-input
        onBlur
        id="e-mail"
        type="email"
        label="E-mail"
        v-model="email"
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
import { useInputValidation } from "@/composables/useInputValidation";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const {
  validateWhiteSpaces,
  validateEmail,
  validatePasswordLength,
  validateCapitalLetter,
  validateNumber,
  validateSpecialCharacter,
  validatePasswordMatch,
} = useInputValidation();

const email = ref("");
const login = ref("");
const password = ref("");
const repeatPassword = ref("");

const successMessages = [
  {
    text: "✔ No break characters in login",
    function: () => validateWhiteSpaces(login.value),
  },
  {
    text: "✔ The email has the correct format",
    function: () => validateEmail(email.value),
  },
  {
    text: "✔ The password consists of at least 8 characters",
    function: () => validatePasswordLength(password.value),
  },
  {
    text: "✔ The password has at least 1 capital letter",
    function: () => validateCapitalLetter(password.value),
  },
  {
    text: "✔ The password has at least 1 number",
    function: () => validateNumber(password.value),
  },
  {
    text: "✔ The password has at least 1 special letter",
    function: () => validateSpecialCharacter(password.value),
  },
  {
    text: "✔ The first and repeated password are the same",
    function: () => validatePasswordMatch(password.value, repeatPassword.value),
  },
];

const checkLogin = () => validateWhiteSpaces(login.value);
const checkEmail = () => validateEmail(email.value);
const checkPassword = () =>
  validatePasswordLength(password.value) &&
  validateCapitalLetter(password.value) &&
  validateNumber(password.value) &&
  validateSpecialCharacter(password.value);

const checkPasswordMatch = () =>
  checkPassword && validatePasswordMatch(password.value, repeatPassword.value);

const signUpWithEmail = () => {
  if (checkLogin() && checkEmail() && checkPassword() && checkPasswordMatch()) {
    // await createUserWithEmailAndPassword(getAuth(), email.value, password.value);

    console.log("Success!");
  } else {
    console.log("Fulfill all conditions.");
  }
};
</script>

<style lang="scss" scoped></style>
