<script setup lang="ts">
import { computed, onBeforeMount, onMounted } from 'vue'

import { useStore } from 'vuex'
import { key } from '@/store/index'

import Filter from '@/components/filter.vue'
import DogFigure from '@/components/dogFigure.vue'
import Loading from '@/components/loading.vue'

const { state, getters, commit, dispatch } = useStore(key)

const isLoading = computed<boolean>(() => getters._isLoading)

const handleBreedSelect = (value: string): void => {
  console.log(value)
}

const handleFilter = (value: string): void => {
  console.log(value, state)
}

onBeforeMount(() => {
  // init loading state
  commit('IS_LOADING', true)

})
onMounted(() => {
  console.log(isLoading.value)
})
</script>

<template>
  <Loading v-if="isLoading" />
  <main v-else>
    <Filter
      @breedSelect="handleBreedSelect"
      @filter="handleFilter"
    />
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
