<template>
    <div class="page-container">
        <h1 class="orange-text">About</h1>
        <p class="padding">With Over 15 years in highly technical roles,
            I know the details can make a huge impact on your brand. 
            Utilizing the latest technologies, I can help deliver your message 
            and allow users to actively be engaged, allowing better two way 
            communication and a much better quality user experience.
        </p>
        <div>
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
        padding: 0 8vw;
    }
</style>