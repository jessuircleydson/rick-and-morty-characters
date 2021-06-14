<template>
    <figure>
        <img :src="item.image" alt="">
        <figcaption>
                <div class="list-item-bg-fig" :style="{ backgroundImage: 'url(' + item.image +')' }"></div>
                <div class="list-item-text">
                    <h5 class="list-item-name">{{ item.name }}</h5>
                <p class="list-item-species">{{ item.species }}</p>
            </div>
        </figcaption>
    </figure>
</template>

<script>
export default {
    props: ['item']
}
</script>
