<script setup lang="ts">
import { onBeforeMount } from 'vue'

import Filter from '@/components/filter.vue'
import DogFigure from '@/components/dogFigure.vue'

onBeforeMount(() => {
  // console.log(1234)
})
</script>

<template>
  <main>
    <Filter />
    <div class="card-wrapper">
      <DogFigure img-url="../assets/logo.jpg"/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  min-height: calc(100vh - 100px);
  div.card-wrapper {
    padding: 20px 0;
    display: flex;
    flex-flow: row wrap;
    gap: 30px 20px;
    justify-content: center;
    align-items: center;
  }
}
</style>
