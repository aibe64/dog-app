<script setup lang="ts">
import { computed, onBeforeMount, onMounted } from 'vue'

import { useStore } from 'vuex'
import { key } from '@/store/index'

import Filter from '@/components/filter.vue'
import DogFigure from '@/components/dogFigure.vue'
import Loading from '@/components/loading.vue'

const { state, getters, commit, dispatch } = useStore(key)

const isLoading = computed<boolean>(() => getters._isLoading)
const dogsBreedList = computed<string[]>(() => getters._dogsBreedList)
const dogsList = computed<string[]>(() => getters._dogs)

const handleBreedSelect = (value: string): void => {
  console.log(value)
}

const handleFilter = (value: string): void => {
  console.log(value, state)
}

onBeforeMount(async () => {
  // init loading state
  commit('IS_LOADING', true)

  await Promise.all([
    // fetch random dog info
    dispatch('fetchRandomDogBreeds'),
    // fetch dog breed list
    dispatch('fetchDogsBreedList')
  ])
  
  // stop loading state
  setTimeout(() => commit('IS_LOADING', false), 4000)

})
</script>

<template>
  <Loading v-if="isLoading" />
  <main v-else>
    <Filter
      :dogsBreedList="dogsBreedList"
      @breedSelect="handleBreedSelect"
      @filter="handleFilter"
    />
    <DogFigure :dogsList="dogsList"/>
  </main>
</template>

<style lang="scss" scoped>
main {
  min-height: calc(100vh - 100px);
}
</style>
