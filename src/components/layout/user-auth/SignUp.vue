<template>
  <div>
    <h2 class="mb-8 text-center text-3xl">Sign up</h2>
    <form class="flex flex-col gap-5" @submit.prevent="signUpWithEmail">
      <base-input
        id="login"
        type="text"
        label="Login"
        v-model="login"
        :input-class="{ 'border-red-500': !loginOk }"
        :label-class="{ 'text-red-500': !loginOk }"
        :validate-function="checkLogin"
      ></base-input>
      <base-input
        id="e-mail"
        type="email"
        label="E-mail"
        v-model.trim="email"
      ></base-input>
      <base-input
        id="password"
        type="password"
        label="Password"
        v-model.trim="password"
      ></base-input>
      <base-input
        id="repeat-password"
        type="password"
        label="Repeat password"
        v-model.trim="repeatPassword"
      ></base-input>
      <base-button class="btn-primary">Sign Up</base-button>
    </form>
    <div>
      <p
        :class="validateWhiteSpaces(login) ? 'text-green-500' : 'text-red-500'"
      >
        {{ validateWhiteSpaces(login) ? "✔ " : "× " }} No break characters in
        login
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useInputValidation } from "@/composables/useInputValidation";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const {
  validateWhiteSpaces,
  /*  validateEmail,
  validatePasswordLength,
  validateCapitalLetter,
  validateSpecialCharacter,
  validatePasswordMatch, */
} = useInputValidation();

const email = ref("");
const login = ref("");
const password = ref("");
const repeatPassword = ref("");

const emailOk = ref();
const loginOk = ref();
const passwordOk = ref();
const passwordMatch = ref();

const checkLogin = () => (loginOk.value = validateWhiteSpaces(login.value));
/* const checkEmail = () => (emailOk.value = validateEmail(email.value));
const checkPassword = () =>
  validatePasswordLength(password) &&
  validateCapitalLetter(password) &&
  validateSpecialCharacter(password);
const checkPasswrodMatch = () => 
passwordOk.value && validatePasswordMatch(password, repeatPassword); */

const signUpWithEmail = () => {
  if (loginOk.value & emailOk.value & passwordOk.value & passwordMatch.value) {
    // await createUserWithEmailAndPassword(getAuth(), email.value, password.value);

    console.log("Success!");
  }
};
</script>

<style lang="scss" scoped></style>
