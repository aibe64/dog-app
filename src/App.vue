<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/appHeader.vue'
</script>

<template>
  <div class="page-wrapper">
    <AppHeader />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
div.page-wrapper {
  // border: 2px solid green;
}
</style>
