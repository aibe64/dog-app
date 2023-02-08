<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/appHeader.vue'
import Loading from '@/components/loading.vue'
import { ref } from 'vue';

const isLoading = ref<boolean>(false)

</script>

<template>
  <div class="page-wrapper">
    <AppHeader />
    <main>
      <Loading v-if="isLoading" />
      <RouterView v-else />
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
