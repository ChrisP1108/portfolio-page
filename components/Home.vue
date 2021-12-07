<template>
    <div class="page-container">
        <h1 class="orange-text">Full Stack Developer</h1>
        <div :key="item.id" v-for="item in homeButtons">
            <Button :item="item" />
        </div>
        <div class="home-image"></div>
        <div class="links-container">
            <h1 class="orange-text">Links</h1>
            <!-- <a href="https://www.linkedin.com/in/christopher-paschall/" target="_blank">
                <img src="../assets/images/linked-in.svg" class="hover-glow link-logo chamfered" 
                    alt="logo">
            </a>
            <a href="https://github.com/ChrisP1108" target="_blank">
                <img src="../assets/images/github.svg" class="hover-glow link-logo rounded" 
                    alt="logo">
            </a> -->
            <Links />
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
    .links-container {
        margin-top: 2rem;
        margin-left: 68%;
        display: flex;
        width: 50%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }
    .home-image {
        position: absolute;
        background: url('../assets/images/chris-1.webp');
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        top: 100%;
        transform: translateY(-100.75%);
        left: -10%;
        height: 17rem;
    }
</style>