<template>
  <div>
    <h2 class="mb-8 text-center text-3xl">Sign in</h2>
    <form class="flex flex-col gap-5" action="submit">
      <base-input id="login" label="Login"></base-input>
      <base-input id="password" label="Password"></base-input>
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
import { defineProps } from "vue";
defineProps(['toggleLoginRegister'])
</script>

<style lang="scss" scoped></style>
