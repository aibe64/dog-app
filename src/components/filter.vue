<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  isLoading: boolean
  dogsBreedList: string[]
}>()

const emit = defineEmits<{
  (e: 'breedSelect', breed: string): void
  (e: 'filter', searchText: string): void
}>()

const breed = ref<string>('')
const searchText = ref<string>('')

const handleBreedSelect = (): void => {
  if (breed.value.length) {
    // clear search input
    searchText.value = ''
    
    emit('breedSelect', breed.value)
  }
}

const handleFilter = (): void => emit('filter', searchText.value)
</script>

<template>
  <div class="filter">
    <select
      v-model="breed"  
      :disabled="isLoading"
      @change="handleBreedSelect"
    >
      <option value="">Select Breed</option>
      <option v-for="(breed, index) in dogsBreedList" :key="index" :value="breed">{{ breed }}</option>
    </select>

    <!-- search input -->
    <input
      type="search"
      name="search"
      id="search"
      placeholder="Search dogs..."
      v-model="searchText"
      :disabled="isLoading"
      @input="handleFilter"
    />
  </div>
</template>

<style lang="scss" scoped>
div.filter {
  position: sticky;
  top: 0px;
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  column-gap: 20px;
  justify-content: flex-start;
  align-items: center;
  background-color: $route-bg;

  &>select,
  &>input {
    height: 45px;
    border: 1.5px solid $primary;
    padding: 10px;
    font-size: 16px;
    transition: $transition;
    background-color: #fff;
    
    &:focus {
      border: none;
      outline: 1.5px inset $primary;
    }

    &::placeholder {
      color: rgb(178, 178, 178);
    }

    &:disabled {
      background-color: #efefef;
    }
  }

  // select
  &>select {
    min-width: 200px;
  }

  // search input
  // select
  &>input {
    width: calc(100% - 200px - 20px);
  }
}
</style>
