<script setup lang="ts">
import { onBeforeMount } from 'vue'
import DogFigure from '@/components/dogFigure.vue'

onBeforeMount(() => {
  // console.log(1234)
})
</script>

<template>
  <main>
   <div class="card-wrapper">
      <DogFigure img-url="../assets/logo.jpg"/>
   </div>
  </main>
</template>

<style lang="scss" scoped>
div.card-wrapper {
  // padding: 30px 0;
  display: flex;
  flex-flow: row wrap;
  gap: 30px 20px;
  justify-content: center;
  align-items: center;
}
</style>
