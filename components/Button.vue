<template>
    <div @click="selected(item.name)" class="button hover-glow button-margin-bottom">
        {{ item.name.toUpperCase() }}
    </div>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            item: Object
        },
        computed: {
            email() {
                return this.$store.state.navMenuItems
                    .find(item => item.name === 'email').email;
            }
        },
        methods: {
            selected(selected) {
                this.$store.commit('pageToggler', selected);
            }
        }
    }
</script>

<style lang="scss" scoped>
    
</style>