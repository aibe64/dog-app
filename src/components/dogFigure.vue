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
  <figure v-for="dog in 0" :key="dog">
    <router-link to="/dog_info/1">
      <img
        ref="qqqq"
        alt="Dog image"
        src="../assets/logo.jpg"
        :data-url="imgUrl"
      />
      <div>
        <h5>{{ 'Dog' + dog }}</h5>
      </div>
    </router-link>
  </figure>
</template>

<style lang="scss" scoped>
figure {
  max-height: 100px;
  display: flex;
  flex-flow: row wrap;

  a {
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 50px 10px;
    align-items: baseline;
    text-decoration: none;
    color: black;

    &>img {
      width: 50px;
      height: 50px;
      z-index: 1;
    }
  }
}
</style>
