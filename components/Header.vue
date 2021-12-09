<!-- Please remove this file from your project -->
<template>
  <div class="header">
    <div class="logo-title">
      <img @click="reload" src="../assets/images/logo.svg"  class="hover-glow" 
        alt="logo">
      <h1 class="gray-text">Chris Paschall</h1>
    </div>
    <div class="hamburger-container">
      <div @click="mobileToggler" 
        :class="[mobileMenuToggle ? 'blur-off' : 'blur-on', 'hamburger-on']">
      </div>
      <div @click="mobileToggler" 
        :class="[mobileMenuToggle ? 'blur-on' : 'blur-off', 'hamburger-off']">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    computed: {
      mobileMenuToggle() {
        return this.$store.state.mobileMenuToggle
      } 
    },
    methods: {
      reload() {
        window.location.reload();
      },
      mobileToggler() {
        window.scroll({
                top: 0,
                left: 0,
                behavior: 'instant'
        });  
        this.$store.commit('mobileToggler', !this.mobileMenuToggle);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    height: $headerHeight;
    border-bottom: 0.125rem $a solid;
    background: $b;
    position: fixed;
    width: 100%;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem 0 1rem;
    transition: $fadeTransition;
  }
  img {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    transition: $fadeTransition;
  }
  .logo-title {
    display: flex;
    align-items: center;

    h1 {
      margin: 0 0 0 1rem!important;
    }
  }
  .hamburger-container {
    display: flex;
    cursor: pointer;
    transition: $fadeTransition;
  }
  .hamburger-on {
    transition: $fadeTransition!important;
    position: absolute;
    top: 1.375rem;
    margin-left: 0.1875rem;
    width: 1.625rem;
    height: 1.625rem;
    background: url('../assets/images/hamburger-on.svg');
    background-repeat: no-repeat;
  }
  .hamburger-off {
    transition: $fadeTransition!important;
    width: 2rem;
    height: 1.25rem;
    background: url('../assets/images/hamburger-off.svg');
    background-repeat: no-repeat;
  }
</style>
