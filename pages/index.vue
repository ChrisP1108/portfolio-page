<template>
  <!-- All routing done in Vuex Store in router function-->
  <div class="master-container">
    <Loading :class="[!loading && 'blur-on']" />
    <Header />
    <MobileMenu />
    <div class="background"></div>
    <div :class="[mobileMenuToggle && 'blur-container', 'content-container']">
      <div :class="[page === 'home' ? 'blur-off' : 'blur-on', 'content-positioner']">
        <Home />
      </div>
      <div :class="[page === 'about' ? 'blur-off' : 'blur-on', 'content-positioner']">
        <About />
      </div>
      <div :class="[page === 'portfolio' ? 'blur-off' : 'blur-on', 'content-positioner']">
        <Portfolio />
      </div>
      <div :class="[page === 'contact' ? 'blur-off' : 'blur-on', 'content-positioner']">
        <Contact />
      </div>
      <div :class="[page !== 'home' && page !== 'contact' ? 'blur-off' : 'blur-on', 'links']">
        <Links />
      </div>
    </div>
  </div>
</template>

<script>
// import styles from '../assets/scss/global.scss'
import frag from 'vue-frag';
    
export default { 
  directives: {
    frag
  },
  computed: {
    mobileMenuToggle() {
      return this.$store.state.mobileMenuToggle
    },
    page() {
      return this.$store.state.pageSelected
    } 
  },
  data() {
    return {
      loading: true
    }
  },
  created() {
    setTimeout(() => this.loading = false, 2000);
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
    -webkit-filter: blur(0.0625rem);
    position: fixed;
    width: 100%;
    height: $bodyHeight;
    z-index: 0;
    top: 0;
    background: linear-gradient(to bottom, $i, $j), url('../assets/images/background.webp');
    background-repeat: no-repeat;
    background-size: cover;
  }

  @keyframes sizeAnimate {
    from {transform: scale(1);}
    to {transform: scale(1.1);}
  }

  .content-container {
    width: 90%;
    left: 50%;
    top: $headerHeight + 3rem;
    transform: translateX(-50%);
    height: $containerHeight;
    background: linear-gradient(to bottom, $d, $e);
    box-shadow: 0.5rem 0.5rem 0.625rem $b;
    padding: 1.5rem;
    position: relative;
    display: flex;
    justify-content: center;
    max-width: 28rem;
    margin-bottom: 3rem;
    transition: $fadeTransition;
    overflow: hidden;
  }
  .content-positioner {
    position: absolute;
    max-height: 100%;
  }
  .links {
    margin-top: auto;
    display: flex!important;
    justify-content: space-between;
    width: 50%;
  }
  .blur-container {
    filter: blur(1rem);
  }

  @media(min-width: $mobile) {
    .content-container {
      max-width: 85%;
      top: $headerHeight + 5rem;
    }
  }

  @media(min-width: $tablet) {
    .content-container {
      max-width: 85%;
      top: 7rem + 4.5rem;
      height: 40rem;
      padding: 2rem 1.5rem;
    }
    .links {
      margin-top: auto;
    }
    .blur-container {
      filter: blur(0rem);
    }
  }

  @media(min-width: $desktop) {
    .content-container {
      width: 75%;
      max-width: 64rem;
    }
    .master-container {
      overflow: hidden;
    }
  }
</style>