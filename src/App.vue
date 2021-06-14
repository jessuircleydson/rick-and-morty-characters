<template>
  <div id="app" :class="{'loading': $apollo.loading}">
    <span style="color:red;"> {{$apollo.loading}} </span>

    <div id="bg">

        <router-view/>
    </div>
    <div id="load-content" v-if="$apollo.loading">
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
    background-color: #060606;
    #bg {
        position: absolute;
        z-index:0;
        background-image: url('./assets/Background.png');
        background-repeat: no-repeat;
        background-size:cover;
        background-position: center 70%;
        height:100vh;
        width:100%;
    }
}

</style>
