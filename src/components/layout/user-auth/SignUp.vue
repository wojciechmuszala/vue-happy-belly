<template>
  <div>
    <h2 class="mb-8 text-center text-3xl">Sign up</h2>
    <form class="flex flex-col gap-5" @submit.prevent="signUpWithEmail">
      <base-input
        id="login"
        type="text"
        label="Login"
        v-model.trim="login"
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
  </div>
</template>

<script setup>
import { ref } from "vue";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const email = ref("");
const login = ref("");
const password = ref("");
const repeatPassword = ref("");

const signUpWithEmail = () => {
  // await createUserWithEmailAndPassword(getAuth(), email.value, password.value);
  console.log(email.value, password.value);
  console.log("Success!");
};
</script>

<style lang="scss" scoped></style>
