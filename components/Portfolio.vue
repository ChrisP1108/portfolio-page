<template>
    <div class="page-container">
        <h1 class="orange-text">Portfolio</h1>
        <p class="medium-text">Click Links To See Various Projects </p>
        <div class="flex-container">
            <PortfolioSample :key="sample.id" v-for="sample in samples" :sample="sample" />
        </div>
        <div class="portfolio-buttons">
            <div :key="item.id" v-for="item in aboutButtons">
                <Button :item="item" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
        computed: {
            aboutButtons() {
                return this.$store.state.navMenuItems.filter(item => {
                    if (item.name === 'resume' || item.name === 'email') {
                        return true
                    }
                });
            }
        },
        data() {
            return {
                samples: [
                    {
                        id: 1,
                        title: 'Audiophile E-Commerce',
                        framework: 'angular',
                        imgSrc: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/swxkgbgbn1z5yixxqwjb.jpg',
                        url: 'https://www.frontendmentor.io/solutions/angular-typescript-localstorage-Ve-xq-UXr'
                    },
                    {
                        id: 2,
                        title: 'Product Feedback App',
                        framework: 'vue',
                        imgSrc: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/vnx44muoxqyn886oi5sb.jpg',
                        url: 'https://www.frontendmentor.io/solutions/vuejs-rXKKm4EN2'
                    },
                    {
                        id: 3,
                        title: 'Invoice App',
                        framework: 'react',
                        imgSrc: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/v760dr4mqyro0xey3dr3.jpg',
                        url: 'https://www.frontendmentor.io/solutions/react-js-sass-hooksforredux-3wkJ36EC0'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    h1 {
        margin-bottom: 0!important;
    }
    .page-container {
        justify-content: space-between;
    }
    .flex-container {
        display: flex;
        flex-wrap: wrap;
        gap: 8vw;
        justify-content: center;
    }
    .padding {
        padding: 0 8vw;
    }
    p {
        margin-bottom: 9vw;
    }
    @media(min-width: $tablet) {
        .grid-container {
            display: flex;
            justify-content: space-between;
            width: 80%;
            grid-column-gap: 0;
            grid-row-gap: 0;
        }
        .button {
            margin: 1rem 0 0;
        }
    }
</style>