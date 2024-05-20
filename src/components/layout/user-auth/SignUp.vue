<!-- 
TODO : Move base config to object, generate inputs by v-for
TODO : Add animaiton to success and error messages
-->

<template>
  <div class="mt-6 overflow-hidden border-t border-t-dark-blue pt-6">
    <h2 class="mb-8 text-center text-3xl">Sign up</h2>

    <form class="flex flex-col gap-5" @submit.prevent="handleSignUpWithEmail">
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
      <auth-announcements
        :errorMessage="errorMessage"
        :conditionsForRegistration="conditionsForRegistration"
      ></auth-announcements>

      <base-button type="primary">Sign Up</base-button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserAuth } from "@/composables/useUserAuth";
import AuthAnnouncements from "@/components/layout/user-auth/AuthAnnouncements.vue";

const login = ref("");
const email = ref("");
const password = ref("");
const repeatPassword = ref("");

const {
  conditionsForRegistration,
  checkLogin,
  checkEmail,
  checkPassword,
  checkPasswordMatch,
  handleSignUpWithEmail,
  errorMessage,
} = useUserAuth({ login, email, password, repeatPassword });
</script>

<style lang="scss" scoped></style>
