<template>
    <div class="mobile-menu-container">
        <div :class="[mobileMenuToggle ? 'blur-off' : 'blur-on', 'mobile-toggled']"></div>
        <div :class="[mobileMenuToggle ? 'slide-in' : 'slide-out', 'mobile-dropdown']">
            <div :key="item.id" v-for="item in mobileMenuItems" class="mobile-menu-item">
                <img src="../assets/images/logo.svg"  class="hover-glow" 
                alt="logo">
                <h2>{{ item.name }}</h2>
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
                    name: 'HOME',
                    link: '/'
                },
                {
                    id: 2,
                    name: 'ABOUT',
                    link: '/'
                },
                {
                    id: 3,
                    name: 'PORTFOLIO',
                    link: '/'
                },
                {
                    id: 4,
                    name: 'CONTACT',
                    link: '/'
                }
            ]
        }
    },
    computed: {
        mobileMenuToggle() {
            return this.$store.state.mobileMenuToggle
        } 
    },
    created() {
        console.log(this.mobileMenuItems);
    }
}
</script>

<style lang="scss" scoped>
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
        padding: 0.5rem 0 0.5rem;
    }
    .mobile-menu-item {
        height: 6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1.75rem 0 1rem;
        cursor: pointer;
    }
    img {
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