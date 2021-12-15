<template>
    <div class="page-container">
        <h1 class="orange-text">Contact Me</h1>
        <p class="small-text">Fill out the form below.</p>
        <form :action="email" method="POST">
            <label for="name" class="orange-text medium-text">Name</label>
                <input required type="text" id="name" name="name">
            <label for="email" class="orange-text medium-text"> Email</label>
                <input required type="email" id="email" name="email">
            <label for="message" class="orange-text medium-text">Message</label>
                <textarea required id="message" name="message" rows="5"></textarea>
            <input type="submit" class="button hover-glow" value="SUBMIT">
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
                ],
                email: 'https://formsubmit.co/ChrisP1108@gmail.com'
            }
        }
    }
</script>

<style lang="scss" scoped>
    h1 {
        margin-bottom: 1rem;
    }
    p {
        margin-bottom: 0.75rem!important;
        padding: 0 4rem 0;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 95%!important;
        label {
            margin-bottom: 0.5rem!important;
        }
        input, textarea {
            width: 100%!important;
            color: $white;
            border: 2px $f solid;
            font-family: 'Hammersmith One', sans-serif;
            font-size: 1rem;
            margin-bottom: 1rem!important;
            border-radius: 0.375rem;
            background: $i;
            transition: $fadeTransition;
            filter: drop-shadow(0px 0px 10px $h);
        }
        textarea {
            width: 100%;
            resize: none;
        }
    }

    input:focus, textarea:focus {
        color: $a;
        background: $b;
        border: 2px $a solid;
        filter: drop-shadow(0px 0px 6px $a);
        transform: scale(1.1);
        animation-name: glow;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    input[type="submit"] {
        filter: drop-shadow(0px 0px 10px $h);
        width: 100%!important;
        margin-top: 1rem;
    }
</style>