<template>
    <div @click="openPage" class="sample-container">
        <p class="medium-text">{{ sample.title }}</p>
        <img :src="`${baseUrl}/${sample.framework}-icon.svg`" :alt="sample.framework">
        <div v-bind:style="backgroundImg" class="background-container"></div>
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
                window.open(this.sample.url);
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
        filter: drop-shadow(4px 4px 10px $f);
        width: 6.25rem;
        height: 6.25rem;
        cursor: pointer;
        transition: $fadeTransition;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .background-container {
        width: 6.25rem;
        height: 6.25rem;
        border-radius: 25%;
        transition: $fadeTransition;
    }
    p {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: 0.5s;
        z-index: 5;
    }
    .sample-container:hover {
        transform: scale(1.5);
        z-index: 10;
        filter: drop-shadow(4px 4px 10px $white);

        .background-container {
            filter: brightness(0.25) blur(1px);
            border-radius: 50%;
        }
        p {
            opacity: 1;
            z-index: 11;
            text-shadow: 0px 0px 6px $h;
        }
    }

    img {
        background-size: contain;
        width: 3.125rem;
        height: 3.125rem;
        filter: drop-shadow(0px 0px 10px $h);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        opacity: 1;
    }
    img:hover {
        opacity: 0;
    }
</style>