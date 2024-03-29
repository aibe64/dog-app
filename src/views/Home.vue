<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { useStore } from 'vuex'
import { key } from '@/store/index'

import Filter from '@/components/filter.vue'
import DogFigure from '@/components/dogFigure.vue'
import Loading from '@/components/loading.vue'

const { getters, commit, dispatch } = useStore(key)

const searchString = ref<string>('')

const isLoading = computed<boolean>(() => getters._isLoading)
const dogsBreedList = computed<string[]>(() => getters._dogsBreedList)
const dogs = computed<string[]>(() => getters._dogs)

const dogsList = computed<string[]>(() => {
  return dogs.value?.filter(dog => dog.includes(searchString?.value.toString()))
})

const handleBreedSelect = async (breed: string) => {
  // clear search input
  searchString.value = ''

  // init loading state
  commit('IS_LOADING', true)

  // fetch dogs by breed
  await dispatch('fetchDogsByBreed', breed)
    .then(() => commit('IS_LOADING', false))
    .catch(() => commit('IS_LOADING', false))
}

const handleFilter = (value: string): void => {
  searchString.value = value
}

onMounted(async () => {
  // check if data exists in local storage
  if (!dogsBreedList.value?.length  && !dogs.value?.length ) {
    // init loading state
    commit('IS_LOADING', true)

    await Promise.all([
      // fetch random dog info
      dispatch('fetchRandomDogBreeds'),
      // fetch dog breed list
      dispatch('fetchDogsBreedList')
    ])
      .then(() => setTimeout(() => commit('IS_LOADING', false), 1500))
      .catch(() => setTimeout(() => commit('IS_LOADING', false), 1500))
  }  
})
</script>

<template>
  <main>
    <Filter
      :isLoading="isLoading"
      :dogsBreedList="dogsBreedList"
      @breedSelect="handleBreedSelect"
      @filter="handleFilter"
    />
    <Loading v-if="isLoading" />
    <DogFigure v-else :dogsList="dogsList"/>
  </main>
</template>

<style lang="scss" scoped>
main {
  min-height: calc(100vh - 100px);
}
</style>
