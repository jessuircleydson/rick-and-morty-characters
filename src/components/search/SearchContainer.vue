<template>
    <div class="d-flex justify-content-center" id="search-container">
        <SearchInput />
        <SearchButton />
    </div>
</template>

<script>
    import SearchInput from '@/components/search/SearchInput'
    import SearchButton from '@/components/search/SearchButton'

    export default {
        components: {
            SearchInput,
            SearchButton
        },

        methods: {
            setLoad() {
                this.$store.state.loading = true;
            }
        }
    }
</script>

<style>
#search-container {
    padding-block: 45px;
}
</style>
