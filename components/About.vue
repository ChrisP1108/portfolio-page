<template>
    <div class="page-container">
        <h1 class="orange-text">About</h1>
        <p class="padding small-text">With Over 15 years in highly technical roles,
            I know the details can make a huge impact on your brand. 
            Utilizing the latest technologies, I can help deliver your message 
            and allow users to actively be engaged, allowing better two way 
            communication and a much better quality user experience.
        </p>
        <div class="about-buttons">
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
                    if (item.name === 'home' || item.name === 'about') {
                        return false;
                    } else return true;
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .page-container {
        justify-content: space-between;
    }
    .padding {
        padding: 0 0.5rem;
    }

    @media(min-width: $tablet) {
        .about-buttons {
            margin-bottom: 1rem;
        }
    }
    @media(min-width: $desktop) {
        .about-buttons {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 90%;
        }
    }
</style>