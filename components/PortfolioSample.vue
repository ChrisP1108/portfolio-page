<template>
    <div @click="openPage" v-bind:style="backgroundImg" class="sample-container">
        <img :src="`${baseUrl}/${sample.framework}-icon.svg`" :alt="sample.framework">
    </div>
</template>

<script>
    export default {
        name: 'PortfolioSample',
        props: {
            sample: Object
        },
        methods: {
            openPage() {
                console.log(this.sample.title);
            }
        },
        data() {
            return {
                backgroundImg: {
                    background: `url('${this.sample.imgSrc}')`,
                    backgroundSize: 'contain'
                },
                baseUrl: 'https://raw.githubusercontent.com/ChrisP1108/portfolio-page/main/assets/images'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sample-container {
        filter: drop-shadow(4px 4px 10px $a);
        width: 6.25rem;
        height: 6.25rem;
        cursor: pointer;
        border-radius: 50%;
        transition: $fadeTransition;
    }

    .sample-container:hover {
        transform: scale(1.5);
        z-index: 10;
    }

    img {
        background-size: contain;
        width: 3.125rem;
        height: 3.125rem;
        filter: drop-shadow(4px 4px 10px $h);
    }
</style>