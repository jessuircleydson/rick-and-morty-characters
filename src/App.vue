<template>
  <div id="app" :class="{'loading': load}">
    <div id="bg">
        <router-view/>
    </div>
    <div id="load-content" v-if="load">
        <Loading />
    </div>
  </div>
</template>

<script>
    import Loading from '@/components/Loading'

    export default {
        components: {
            Loading,
        },
        computed: {
            load() {
                return this.$store.state.loading
            }
        }
    }
</script>

<style lang="scss">
@import '@/assets/styles/app.scss';

#app {
    #bg {
        position: absolute;
        z-index:0;
        background-image: url('./assets/Background.png');
        background-repeat: no-repeat;
        background-size:cover;
        background-position: center 70%;
        width:100vw;
        height:100vh;
    }
}

</style>
