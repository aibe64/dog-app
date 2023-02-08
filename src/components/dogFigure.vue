<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  imgUrl: {
    type: String,
    required: true
  }
})

const qqqq = ref(null)
</script>

<template>
  <figure v-for="dog in 4" :key="dog">
    <router-link to="/dog_info/1">
      <img
        ref="qqqq"
        alt="Dog image"
        src="../assets/logo.jpg"
        :data-url="imgUrl"
      />
      <div>
        <h5>{{ 'Dog ' + dog }}</h5>
      </div>
    </router-link>
  </figure>
</template>

<style lang="scss" scoped>
figure {
  border: 1px solid $primary-2;
  border-radius: 5px;
  padding: 15px 20px;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  transition: $transition;
  background-color: #fff;

  &:hover {
    border-radius: 0;
    box-shadow: 1px 1px 10px rgb(216, 216, 216), 5px 5px 10px $primary-shadow;
  }

  a {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: $dark;

    &>img {
      width: auto;
      height: 250px;
    }

    &>div {
      &>h5 {
        font-size: 22px;
        color: $primary;
      }
    }
  }
}
</style>
