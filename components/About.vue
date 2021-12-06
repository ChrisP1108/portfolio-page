<template>
    <div class="home-container">
        <h1 class="orange-text">About</h1>
        <div :key="item.id" v-for="item in aboutButtons">
            <Button :item="item" />
        </div>
        <div class="home-image"></div>
        <div class="links-container">
            <h1 class="orange-text">Links</h1>
            <img @click="reload" src="../assets/images/linked-in.svg" class="hover-glow link-logo" 
                alt="logo">
            <img @click="reload" src="../assets/images/github.svg" class="hover-glow link-logo rounded" 
                alt="logo">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                aboutButtons: [
                    {
                        id: 1,
                        name: 'home'
                    },
                    {
                        id: 2,
                        name: 'portfolio'
                    },
                    {
                        id: 3,
                        name: 'contact'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home-container {
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
        background: url('../assets/images/chris.webp');
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        top: 100%;
        transform: translateY(-99%);
        left: 5%;
        height: 19rem;
    }
</style>