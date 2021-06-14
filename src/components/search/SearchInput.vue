<template>
    <input id="search-input" type="text" placeholder="Search characters">
</template>

<script>
export default {
    props: {
        searchValue: {
            type: Function,
        }
    }
}
</script>
