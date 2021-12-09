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
                if (selected === 'email') {
                    window.location.assign(`mailto:${this.email}`);
                } else {
                    this.$store.commit('pageToggler', selected);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .button {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42.67vw;
        max-width: 12.5rem;
        height: 2.25rem;
        background: $f;
        border-radius: 0.375rem;
        color: $b;
        font-family: 'Hammersmith One', sans-serif;
        font-size: 1rem;
        font-weight: 600;
        transition: $fadeTransition;
        box-shadow: 4px 4px 10px $b;
    }

    .button:hover {
        cursor: pointer;
        color: $lightgray;
    }

    .button-margin-bottom {
        margin-bottom: 1.5rem;
    }
</style>