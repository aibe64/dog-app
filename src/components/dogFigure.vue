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
  <figure v-for="dog in 100" :key="dog">
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
  border: 1px solid rgb(222, 222, 222);
  border-radius: 5px;
  padding: 15px 20px;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;

  &:hover {
    border-radius: 0;
    box-shadow: 1px 1px 10px rgb(189, 189, 189), 5px 5px 10px rgb(224, 224, 224);
  }

  a {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;

    &>img {
      width: auto;
      height: 250px;
    }

    &>div {
      &>h5 {
        font-size: 20px;
      }
    }
  }
}
</style>
