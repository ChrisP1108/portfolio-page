<template>
    <div class="home-container">
        <h1 class="orange-text">Full Stack Developer</h1>
        <div @click="pageSelect(item.name)" :key="item.id" 
            v-for="item in buttons" class="button button-margin-bottom">
            <span>{{ item.name.toUpperCase() }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                buttons: [
                    {
                        id: 1,
                        name: 'about'
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
        },
        methods: {
            pageSelect(selected) {
                this.$store.commit('pageToggler', selected);
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
</style>