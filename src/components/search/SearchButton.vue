<template>
    <button id="search-button" @click="setLoading">Search</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions(['setLoading']),
    }
}
</script>
