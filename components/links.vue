<template>
    <div v-frag>
        <a href="https://www.linkedin.com/in/christopher-paschall/" target="_blank">
            <img src="../assets/images/linked-in.svg" class="hover-glow link-logo chamfered" 
                alt="logo">
        </a>
        <a href="https://github.com/ChrisP1108" target="_blank">
            <img src="../assets/images/github.svg" class="hover-glow link-logo rounded" 
                alt="logo">
        </a>
    </div>
</template>

<script>
    import frag from 'vue-frag';

    export default {
        directives: {
            frag
        }
    };
</script>

<style lang="scss" scoped>
    .link-logo {
        width: 2.625rem!important;
        height: 2.625rem!important;
        // margin-bottom: 2.625rem!important;
        transition: 0.25s;
    }
    .link-logo:hover {
        background: $white;
    }
</style>