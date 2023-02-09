<script setup lang="ts">
import { computed, onBeforeMount, onMounted } from 'vue'

import { useStore } from 'vuex'
import { key } from '@/store/index'

import Filter from '@/components/filter.vue'
import DogFigure from '@/components/dogFigure.vue'
import Loading from '@/components/loading.vue'

const { state, getters, commit, dispatch } = useStore(key)

const isLoading = computed<boolean>(() => getters._isLoading)
const dogsList = computed<string[]>(() => getters._dogs)

const handleBreedSelect = (value: string): void => {
  console.log(value)
}

const handleFilter = (value: string): void => {
  console.log(value, state)
}

onBeforeMount(() => {
  // init loading state
  commit('IS_LOADING', true)

  // fetch random dog info
  dispatch('fetchRandomDogBreeds')
    .then((response => {
      console.log(response)
    }))
    .catch((error => {
      console.log(error.message)
    }))

  
  // stop loading state
  setTimeout(() => commit('IS_LOADING', false), 4000)

})
</script>

<template>
  <Loading v-if="isLoading" />
  <main v-else>
    <Filter
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
