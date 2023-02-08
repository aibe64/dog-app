<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute().params?.dog

const img = ref<HTMLImageElement | null>(null)

onBeforeMount(() => {
  console.log(img)
  console.log(route)
})

</script>

<template>
  <div>
    <figure>
      <img
        ref="img"
        alt="Dog image"
        src="../assets/logo.jpg"
      />
      <div>
        <h5>Dog Name</h5>
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

    // &:hover {
    //   border-radius: 0;
    //   box-shadow: -5px -5px 30px rgb(216, 216, 216), 5px 10px 30px rgb(216, 216, 216);
    // }

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
