<template>
    <div class="page-container">
        <h1 class="orange-text">Contact Me</h1>
        <p class="small-text">Fill out the form below to contact me.</p>
        <form action="mailto:ChrisP1108@gmail.com" method="post" enctype="text/plain">
            <label for="name" class="orange-text medium-text" placeholder="Enter Your Name">Name</label>
                <input type="text" id="name" name="name">
            <label for="message" class="orange-text medium-text">Message</label>
                <textarea id="message" name="message"></textarea>
            <label for="email" class="orange-text medium-text">Email</label>
                <input type="email" id="name" name="name">
        </form>
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
        margin-bottom: 1.5rem;
    }
    p {
        margin-bottom: 1.5rem!important;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        label {
            margin-bottom: 0.5rem!important;
        }
        input, textarea {
            border: 2px $a solid;
            margin-bottom: 1rem!important;
            border-radius: 0.375rem;
            background: $i;
        }
    }
</style>