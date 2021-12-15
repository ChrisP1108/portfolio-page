<template>
  <div class="header">
    <div class="header-content-container">
      <div class="logo-title">
        <img @click="reload" src="../assets/images/logo.svg"  class="hover-glow" 
          alt="logo">
        <h1 class="gray-text tablet-off desktop-on">Chris Paschall</h1>
      </div>
      <div class="hamburger-container">
        <div @click="mobileToggler" 
          :class="[mobileMenuToggle ? 'blur-off' : 'blur-on', 'hamburger-on']">
        </div>
        <div @click="mobileToggler" 
          :class="[mobileMenuToggle ? 'blur-on' : 'blur-off', 'hamburger-off']">
        </div>
      </div>
      <div class="tablet-header-title-link-container">
        <h1 class="gray-text desktop-off">Chris Paschall</h1>
        <div class="nav-items">
            <h3 @click="pageSelected(item.name)" v-for="item in menuItems" :key="item.id"
              :class="[page === item.name && 'nav-active']"> {{ item.name.toUpperCase() }}
            </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    computed: {
      menuItems() {
            return this.$store.state.navMenuItems
      },
      mobileMenuToggle() {
          return this.$store.state.mobileMenuToggle
      },
      page() {
          return this.$store.state.pageSelected
      } 
    },
    methods: {
      reload() {
        window.location.reload();
      },
      mobileToggler() {
        this.$store.commit('mobileToggler', !this.$store.state.mobileMenuToggle);
      },
      pageSelected(selected) {
        this.$store.commit('pageToggler', selected);
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
    justify-content: center;
    align-items: center;
  }
  .header-content-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: $maxWidth;
    padding: 0 1.5rem 0 1rem;
    transition: $fadeTransition;
    margin: 0 auto 0;
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
  .tablet-header-title-link-container {
    display: none;
  }

  @media(min-width: $tablet) {
    .header {
      height: 7rem;
    }
    .header-content-container {
      justify-content: flex-start;
      padding: 1rem 1.5rem 0.1rem;
    }
    img {
      width: 4rem;
      height: 4rem;
    }
    .logo-title {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .hamburger-container {
      display: none;
    }
    .tablet-off {
      display: none;
    }
    .tablet-header-title-link-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      width: 100%;
      margin: 0 4.25rem 0;

      h1 {
        margin-bottom: 1rem;
      }
    }
    .nav-items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    h1 {
      font-size: 2rem;
    }
    h3 {
      font-family: 'Hammersmith One', sans-serif;
      color: $f;
      font-size: 1.25rem;
      transition: $fadeTransition;
      margin: 0;
      text-align: center;
      cursor: pointer;
    }
    h3:hover {
      color: $a;
      transform: scale(1.3);
    }
    .nav-active {
      color: $lightgray;
    }
    .nav-active:hover {
      cursor: auto!important;
      color: $lightgray!important;
      transform: scale(1)!important;
    }
  }

  @media (min-width: $desktop) {
    .desktop-on {
      display: block;
    }
    .desktop-off {
      display: none;
    }
    .header {
      height: 5.25rem;
    }
    .header-content-container {
      padding: 0;
      padding: 0 2rem 0 2rem;
    }
    .tablet-header-title-link-container {
      justify-content: center;
      align-items: center;
      margin: 0 0 0 2.5rem;
    }
    .logo-title {
      position: relative;
      width: 55%;
      align-items: center;
      justify-content: flex-start;
      height: 0;

      h1 {
        text-align: left;
        margin-left: 1.5rem!important;
      }
    }
  }
</style>
