<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const imgSrc = ref<string>('')

onBeforeMount(() => {
  // update image src attribute
  imgSrc.value = (JSON.parse(route.query.imgSrc as string)) as string
})

</script>

<template>
  <div>
    <figure>
      <img
        alt="Dog image"
        :src="imgSrc"
      />
      <div>
        <h5>{{ imgSrc }}</h5>
      </div>
    </figure>
  </div>
</template>

<style lang="scss" scoped>
div {
  padding: 25px 10px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  align-items: center;

  figure {
    border: 1px solid rgb(237, 237, 237);
    border-radius: 5px;
    padding: 15px 20px;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: center;
    align-items: center;
    transition: $transition;
    background-color: #fff;

    &>img {
      width: auto;
      height: 300px;
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
