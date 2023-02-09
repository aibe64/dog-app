<script setup lang="ts">
import { RouterView } from 'vue-router'

import AppHeader from './components/appHeader.vue'
</script>

<template>
  <div class="page-wrapper">
    <AppHeader />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
div.page-wrapper {
  main {
    min-height: calc(100vh - 120px);
    background-color: $route-bg;
  }
}
</style>
