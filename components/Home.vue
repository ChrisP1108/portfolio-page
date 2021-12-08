<template>
    <div class="page-container">
        <h1 class="orange-text">Full Stack Developer</h1>
        <div :key="item.id" v-for="item in homeButtons">
            <Button :item="item" />
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
    .page-container {
        height: $containerHeight - 3rem!important;
    }
    .links-section {
        margin-top: 2rem;
        margin-left: 68%;
        display: flex;
        width: 50%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }
    .links-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 7.875rem;
    }
    .home-image {
        position: absolute;
        background: url('../assets/images/chris-1.webp');
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        top: 100%;
        transform: translateY(-90.25%);
        left: -10%;
        height: 17rem;
    }
</style>