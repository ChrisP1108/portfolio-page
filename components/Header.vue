<!-- Please remove this file from your project -->
<template>
  <div class="header">
    <div class="logo-title">
      <img @click="reload" src="../assets/images/logo.svg"  class="hover-glow" 
        alt="logo">
      </img>
      <h1>Chris Paschall</h1>
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
    transition: 0.25s;
  }
  img {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    transition: 0.25s;
  }
  .logo-title {
    display: flex;
    align-items: center;

    h1 {
      margin-left: 1rem;
    }
  }
  .hamburger-container {
    display: flex;
    cursor: pointer;
    transition: 0.25s;
  }
  .hamburger-on {
    transition: 0.25s!important;
    position: absolute;
    top: 1.375rem;
    margin-left: 0.1875rem;
    width: 1.625rem;
    height: 1.625rem;
    background: url('../assets/images/hamburger-on.svg');
    background-repeat: no-repeat;
  }
  .hamburger-off {
    transition: 0.25s!important;
    width: 2rem;
    height: 1.25rem;
    background: url('../assets/images/hamburger-off.svg');
    background-repeat: no-repeat;
  }
</style>
