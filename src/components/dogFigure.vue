<script setup lang="ts">
import { ref, onMounted } from 'vue';


defineProps<{
  dogsList: string[]
}>()

const figure =  ref<any>(null)

onMounted(() => {
  const figures = figure.value

  const imageOptions = {}

  const observer = new IntersectionObserver((entries: any): void => {
    entries.forEach((entry: any) => {
      if (!entry.isIntersecting) return // image is not on the viewport

      const imgEl = entry.target.firstElementChild?.firstElementChild as HTMLImageElement
      const newUrl = entry.target.firstElementChild?.firstElementChild?.getAttribute('data-url') as string

      imgEl?.setAttribute('src', newUrl)
    })

  }, imageOptions)

  // check existense of figure element collection
  if (figures?.length) {
    figures.forEach((figure: HTMLElement) => {
      observer.observe(figure)
    })
  }
})
</script>

<template>
  <section>
    <h3 v-if="!dogsList?.length" >No record found</h3>
    <div v-else class="card-wrapper">
      <figure v-for="(dog, index) in dogsList" :key="index" ref="figure">
        <router-link :to="{ name: 'dog info', query: { imgSrc: JSON.stringify(dog) }}">
          <img
            ref="img"
            alt="Dog image"
            :data-url="dog"
          />
          <div>
            <h5>{{ dog }}</h5>
          </div>
        </router-link>
      </figure>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $route-bg;

  &>div {
    // dog wrapper
    &.card-wrapper {
      display: flex;
      flex-flow: row wrap;
      gap: 20px 15px;
      justify-content: center;
      align-items: center;

      &>figure {
        border: 1px solid rgb(237, 237, 237);
        border-radius: 5px;
        padding: 15px 20px;
        width: 210px;
        height: 300px;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        transition: $transition;
        background-color: #fff;
        word-break: break-all;


        &:hover {
          border-radius: 0;
          box-shadow: -5px -5px 30px rgb(216, 216, 216), 5px 10px 30px rgb(216, 216, 216);
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
            width: 180px;
            height: 180px;
          }

          &>div {
            &>h5 {
              font-size: 18px;
              color: $primary;
            }
          }
        }
      }
    }
  }
}
</style>
