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
