<script setup lang="ts">
</script>

<template>
  <header>
    <div>
      <router-link to="/">
        <img alt="Dog logo" class="logo" src="@/assets/logo.jpg" />
        <h2>Zone</h2>
      </router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  max-height: 100px;

  div {
    width: max-content;

    a {
      display: flex;
      column-gap: 3px;
      align-items: baseline;
      text-decoration: none;

      h2 {
        margin-left: -8px;
        font-size: 40px;
        font-weight: bold;
        color: rgb(225, 225, 225);
      }

      .logo {
        width: 50px;
        height: 50px;
        z-index: 1;
      }
    }
  }
}
</style>
