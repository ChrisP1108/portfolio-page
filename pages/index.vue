<template>
  <div class="master-container">
    <Header/>
    <MobileMenu />
    <div class="background"></div>
    <div class="content-container">
      <div class="image"></div>
    </div>
  </div>
</template>

<script>
import styles from '../assets/scss/global.scss'

export default { 
  computed: {
      mobileMenuToggle() {
        return this.$store.state.mobileMenuToggle
      } 
  }
}
</script>

<style lang="scss">
  .master-container {
    width: 100%;
    height: $bodyHeight;
    position: relative;
  }
  .background {
    // filter: blur(1px);
    -webkit-filter: blur(0.0625rem);
    position: fixed;
    width: 100%;
    height: $bodyHeight;
    z-index: 0;
    top: 0;
    background: linear-gradient(to bottom, $i, $j), url('../assets/images/background.webp');
    background-repeat: no-repeat;
    background-size: cover;
    animation-name: sizeAnimate;
    animation-duration: 60s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  @keyframes sizeAnimate {
    from {transform: scale(1);}
    to {transform: scale(1.1);}
  }

  .image {
    position: fixed;
    background: url('../assets/images/chris.webp');
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    top: 100%;
    transform: translateY(-99%);
    left: 7%;
    height: 19rem;
    filter: drop-shadow(0rem 0rem 1.25rem $j);
    z-index: 5;
  }

  .content-container {
    width: 85%;
    left: 50%;
    top: $headerHeight + 3rem;
    transform: translateX(-50%);
    height: 36.75rem;
    background: linear-gradient(to bottom, $d, $e);
    position: fixed;
    box-shadow: 8px 8px 10px;
  }
</style>