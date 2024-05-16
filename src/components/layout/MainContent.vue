<template>
  <main
    class="min-h-screen px-2 transition-all duration-300 ease-in-out md:px-4"
  >
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" class="py-20"></component>
      </transition>
    </router-view>
  </main>
</template>

<script setup></script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>
