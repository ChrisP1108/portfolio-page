<template>
    <div class="page-container">
        <h1 class="orange-text">Portfolio</h1>
        
        <div class="button-spacing">
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
                return this.$store.state.navMenuItems.filter(item => 
                    item.name === 'resume'
                );
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
    p {
        margin-bottom: 9vw;
    }
</style>