<template>
  <main class="flex flex-1 flex-auto items-center justify-center">
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component"></component>
      </transition>
    </router-view>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
