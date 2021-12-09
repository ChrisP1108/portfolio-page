<template>
    <div @click="openPage" class="sample-container">
        <h1 class="orange-text">Test</h1>
    </div>
</template>

<script>
    export default {
        name: 'PortfolioSample',
        props: {
            sample: Object
        },
        methods: {
            openPage() {
                console.log(this.sample.title);
            }
        }
    }
</script>

<style>
    .sample-container {
        background: rgba(255, 0, 0, 0.507);
        width: 6.25rem;
        height: 6.25rem;
        cursor: pointer;
    }
</style>