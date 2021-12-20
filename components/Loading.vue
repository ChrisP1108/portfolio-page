<template>
    <div class="loading-container">
        <img src="../assets/images/logo.svg"  class="hover-glow" 
        alt="logo">
        <h1 class="orange-text fade-in">Loading</h1>
    </div>
</template>

<style lang="scss" scoped>
    .loading-container {
        display: flex;
        padding-top: 15vh;
        align-items: center;
        flex-direction: column;
        position: absolute;
        z-index: 100;
        background: $b;
        width: 100vw;
        height: 100vh;
    }
    h1 {
        font-size: 15vw;
        margin-top: 1vw;
        animation-name: loadingFadeIn;
        animation-duration: 2s;
        animation-fill-mode: forwards;
    }
    img {
        width: 30vw;
        animation-name: glow;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    .fade-in {
        animation-name: fadeIn;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
    @media(min-width: 1400px) {
        img {
            width: 26.25rem;
            width: 26.25rem;
        }
        h1 {
            font-size: 13.125rem;
        }
    }
</style>