<template>
    <div class="about-container">
        <h1 class="orange-text">About</h1>
        <div class="home-image"></div>
        <div class="links-container">
            <h1 class="orange-text">Links</h1>
            <img src="../assets/images/linked-in.svg" class="hover-glow link-logo chamfered" 
                alt="logo">
            <img src="../assets/images/github.svg" class="hover-glow link-logo rounded" 
                alt="logo">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About'
    }
</script>

<style lang="scss" scoped>
    .about-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1 {
        text-align: center;
        width: 100%;
        margin-bottom: 2.375rem;
    }
    .links-container {
        margin-top: 3.125rem;
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
        transform: translateY(-99%);
        left: 5%;
        height: 19rem;
    }
</style>