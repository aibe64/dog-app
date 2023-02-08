<template>
    <div>
        <h3>Loading....</h3>
    </div>
</template>
<style lang="scss" scoped>
div {
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;

    h3 {
        animation-name: loading;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        transition: all 0.3;
        font-size: 22px;
        color: $primary;
    }

    @keyframes loading {
        0% {
            opacity: 0.1;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
}
</style>