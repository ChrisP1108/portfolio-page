<template>
    <div @click="openPage" class="sample-container">
        <p class="portfolio-container-text">{{ sample.title }}</p>
        <img :class="sample.framework === 'angular' ? 'scale-up' : ''" :src="`${baseUrl}/${sample.framework}-icon.svg`" :alt="sample.framework">
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
        background-size: cover!important;
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
    .portfolio-container-text {
        font-family: 'Hammersmith One', sans-serif;
        color: $a;
        font-size: 0.75rem;
        transition: $fadeTransition;
        margin: 0;
        text-align: center;
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
    @media(min-width: $tablet) {
        .sample-container {
            width: 7rem;
            height: 7rem;
        }
        .background-container {
            width: 7rem;
            height: 7rem;
        }
        img {
            width: 4rem;
            height: 4rem;
        }
        .portfolio-container-text {
            font-size: 0.875rem;
        }
    }
    @media(min-width: $tablet) {
        .sample-container {
            width: 7rem;
            height: 7rem;
        }
        .background-container {
            width: 7rem;
            height: 7rem;
        }
        img {
            width: 4rem;
            height: 4rem;
        }
    }
    @media(min-width: $desktop) {
        .sample-container {
            width: 8rem;
            height: 8rem;
        }
        .background-container {
            width: 8rem;
            height: 8rem;
        }
        .portfolio-container-text {
            font-size: 1rem;
        }
    }
    .scale-up {
        transform: scale(1.4) translateY(-37%);
    }
</style>