<template>
    <div class="page-container">
        <h1 class="orange-text heading-shift">Full Stack Developer</h1>
        <div class="home-buttons">
            <div :key="item.id" v-for="item in homeButtons">
                <Button :item="item" />
            </div>
        </div>   
        <div class="home-image"></div>
        <div class="links-section">
            <h1 class="orange-text">Links</h1>
            <div class="links-container">
                <Links />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            homeButtons() {
                return this.$store.state.navMenuItems
                    .filter(item => item.name !== 'home')
            }
        }
    }
</script>

<style lang="scss" scoped>
    h1 {
        margin: 0 0 2.375rem;
    }
    .page-container {
        height: $containerHeight - 3rem!important;
    }
    .home-image {
        position: absolute;
        background: url('../assets/images/chris-1.webp');
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        top: 100%;
        transform: translateY(-90.25%);
        left: 0vw;
        height: 17rem;
    }
    @media(min-width: $mobile) {
        .home-image {
            left: -6vw;
            height: 72vw;
        }
        .links-section {
            margin-left: auto;
        }
        .home-buttons {
            width: 50%;
            margin-left: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 1;
        }
    }
    @media(min-width: $tablet) {
        .home-image {
            height: 37rem;
            left: -4vw;
        }
        .heading-shift {
            margin-left: auto;
            width: 50%;
        }
    }
    @media(min-width: $desktop) {
        
    }
</style>