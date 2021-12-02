<template>
    <div class="mobile-menu-container">
        <div @click="mobileToggleOff" :class="[mobileMenuToggle ? 'blur-off' : 'blur-on', 'mobile-toggled']"></div>
        <div :class="[mobileMenuToggle ? 'slide-in' : 'slide-out', 'mobile-dropdown']">
            <div :key="item.id" @click="pageSelect(item.name)" v-for="item in mobileMenuItems" 
                :class="[page !== item.name && 'hover-glow', 'mobile-menu-item']">
                    <img v-if="page === item.name" src="../assets/images/mobile-menu-active-logo.svg" 
                    alt=" menu-active-logo">
                    <img v-if="page !== item.name" src="../assets/images/mobile-menu-inactive-logo.svg" 
                    alt=" menu-inactive-logo">
                    <h2 :class="[page === item.name && 'active-nav-link']">{{ item.name.toUpperCase() }}</h2>
            </div>
        </div>
    </div>
</template>

<script>
import styles from '../assets/scss/global.scss'

export default { 
    data() {
        return {
            mobileMenuItems: [
                {
                    id: 1,
                    name: 'home'
                },
                {
                    id: 2,
                    name: 'about'
                },
                {
                    id: 3,
                    name: 'portfolio'
                },
                {
                    id: 4,
                    name: 'resume'
                },
                {
                    id: 5,
                    name: 'contact'
                }
            ]
        }
    },
    computed: {
        mobileMenuToggle() {
            return this.$store.state.mobileMenuToggle
        },
        page() {
            return this.$store.state.pageSelected
        } 
    },
    methods: {
        mobileToggleOff() {
            window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'instant'
            });  
            this.$store.commit('mobileToggler', false);
        },
        pageSelect(selected) {
            this.$store.commit('pageToggler', selected);
            this.mobileToggleOff();
        }
    }
}
</script>

<style lang="scss" scoped>
    img {
        transition: 0.25s;
    }
    .mobile-toggled {
        width: 100%;
        background: $blacktrans;
        transition: 0.25s;
        z-index: 6;
        top: $headerHeight;
        height: $bodyHeight;
        position: fixed;
    }
    .mobile-dropdown {
        width: 100%;
        position: fixed;
        background: $b;
        z-index: 7;
        top: $headerHeight;
        transform: translateY(-100%);
        transition: 0.25s;
    }
    .mobile-menu-item {
        height: 6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1.75rem 0 1rem;
        cursor: pointer;
        transition: 0.25s;
    }
    .slide-in {
        animation-name: slideIn;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
    }

    @keyframes slideIn {
        0% {transform: translateY(-100%); filter: blur(10rem); display: contents;}
        100% {transform: translateY(0%); filter: blur(0rem)}
    }

    .slide-out {
        animation-name: slideOut;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
    }

    @keyframes slideOut {
        0% {transform: translateY(0%); filter: blur(0rem)}
        99% {transform: translateY(-100%); filter: blur(10rem)}
        100% {display: none;}
    }
</style>