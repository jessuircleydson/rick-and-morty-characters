<template>
  <div class="home">
    <img alt="Ricky" src="../assets/logo.png">

    <SearchContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchContainer from '@/components/search/SearchContainer'
export default {
  name: 'Home',
    components: {
        SearchContainer,
    }
}
</script>
<style>
img {
    display:block;
    margin:0 auto;
    max-width:100%;    
}
@media (max-width: 768px) {
    img {
        max-width: 70%;
    }
}

</style>
