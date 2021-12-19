<template>
    <div class="loading-container">
        <img src="../assets/images/logo.svg"  class="hover-glow" 
        alt="logo">
        <h1 class="orange-text">Loading</h1>
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
    }
    img {
        width: 30vw;
    }
</style>