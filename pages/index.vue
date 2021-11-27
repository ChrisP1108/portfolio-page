<template>
  <div class="master-container">
    <Header/>
    <div class="blur"></div>
  </div>
</template>

<script>
import styles from '../assets/scss/global.scss'

export default {}
</script>

<style lang="scss">
  .master-container {
    width: 100%;
    height: 64rem;
    position: relative;
  }
  .blur {
    filter: blur(2px);
    position: absolute;
    width: 100%;
    height: 100%!important;
    z-index: 2;
    top: $headerHeight;
  }
</style>