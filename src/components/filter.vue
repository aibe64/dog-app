<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'breedSelect', breed: string): void
  (e: 'filter', searchText: string): void
}>()

const isDisabledSelect = ref<boolean>(false)

const breed = ref<string>('')
const searchText = ref<string>('')

const handleBreedSelect = (): void => emit('breedSelect', searchText.value)
const handleFilter = (): void => emit('filter', searchText.value)
</script>

<template>
  <div class="filter">
    <select
      v-model="breed"  
      :disabled="isDisabledSelect"
      @change="handleBreedSelect"
    >
      <option value="">Select Breed</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>

    <!-- search input -->
    <input
      type="search"
      name="search"
      id="search"
      placeholder="Search dogs..."
      v-model="searchText"
      :disabled="isDisabledSelect"
      @input="handleFilter"
    />
  </div>
</template>

<style lang="scss" scoped>
div.filter {
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  column-gap: 20px;
  justify-content: flex-start;
  align-items: center;

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
