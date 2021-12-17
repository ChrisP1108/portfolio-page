<template>
    <div class="page-container">
        <h1 class="orange-text">Portfolio</h1>
        <p class="medium-text">Click Links To See Various Projects </p>
        <div class="grid-container">
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
                        title: 'Product Feedback App',
                        framework: 'vue',
                        imgSrc: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/vnx44muoxqyn886oi5sb.jpg',
                        url: 'https://www.frontendmentor.io/solutions/vuejs-rXKKm4EN2'
                    },
                    {
                        id: 2,
                        title: 'Invoice App',
                        framework: 'react',
                        imgSrc: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/v760dr4mqyro0xey3dr3.jpg',
                        url: 'https://www.frontendmentor.io/solutions/react-js-sass-hooksforredux-3wkJ36EC0'
                    },
                    {
                        id: 3,
                        title: 'Pomodoro App',
                        framework: 'react',
                        imgSrc: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/tiush3hkni9uznayk0hr.jpg',
                        url: 'https://www.frontendmentor.io/solutions/react-js-sass-javascript-state-variables-into-inline-css-tIjFBRVPm'
                    },
                    {
                        id: 4,
                        title: 'The Planets',
                        framework: 'react',
                        imgSrc: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/g9eewklurmolti0smptf.jpg',
                        url: 'https://www.frontendmentor.io/solutions/react-js-css-Wkb7XDzsI'
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
    .grid-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 8vw;
    }
    .padding {
        padding: 0 8vw;
    }
    p {
        margin-bottom: 9vw;
    }
    @media(min-width: $mobile) {
        .grid-container {
            grid-column-gap: 16vw;
            grid-row-gap: 3rem;
        }
    }
    @media(min-width: $tablet) {
        .grid-container {
            display: flex;
            justify-content: space-between;
            width: 100%;
            grid-column-gap: 0;
            grid-row-gap: 0;
        }
        .button {
            margin: 1rem 0 0;
        }
    }
</style>