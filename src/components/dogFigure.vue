<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineProps<{
  dogsList: string[]
}>()

const scrollArea = ref(null)
const figure = ref(null)

onMounted(() => {
  let figures = Array.from(figure.value as any)

  let options = {
    root: scrollArea.value as any,
    rootMargin: '0px',
    threshold: 1.0
  }
  
  const callback = (entries: any, observer: any) => {
    let dataSrc

    for (const entry of entries) {
      if (entry.intersectionRatio > 0) {
        dataSrc = entry.target.firstChild.firstChild.dataset.url
        // console.log(dataSrc)
        entry.target.firstChild.firstChild.setAttribute('src', dataSrc)

        // console.log(entry)
      }
    }
  }
  
  let observer = new IntersectionObserver(callback, options)

  figures.forEach(figure => {
    observer.observe(figure as any)
  })
  
})
</script>

<template>
  <section>
    <div v-if="dogsList?.length" class="card-wrapper">
      <figure v-for="(dog, index) in dogsList" :key="index">
        <router-link to="/dog_info/1">
          <img
            ref="img"
            alt="Dog image"
            :src="dog"
          />
          <div>
            <h5>{{ dog }}</h5>
          </div>
        </router-link>
      </figure>
    </div>
    <h3 v-else>No record found</h3>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
