<script setup lang="ts">
import { ref } from 'vue'

const isDisabledSelect = ref(false)
function handleDogBreedSelect () {
  console.log('Breed Selected')
}
</script>

<template>
  <div class="filter">
    <select
      @select="handleDogBreedSelect"
      :disabled="isDisabledSelect"
    >
      <option value="">Select Breed</option>
      <option value="">Option 1</option>
      <option value="">Option 2</option>
      <option value="">Option 3</option>
    </select>

    <!-- search input -->
    <input type="search" name="search" id="search" placeholder="Search dogs...">
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
    
    &:focus {
      border: none;
      outline: 1.5px inset $primary;
    }

    &::placeholder {
      color: rgb(178, 178, 178);
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
