<template>
    <div class="characters-list">
    
    <span style="color:red;"> {{$apollo.loading}} </span>
        <paginate
            class="list-container"
            name="items"
            :per="20"
            :list="characters.results"
            tag="span"
        >

            <div class="list-item" v-for="character in paginated('items')" :key="character.id">
                <CharactersItem :item="character" />
            </div>
        </paginate>

        <paginate-links
            v-if="(!load && characters.info.count > 0)"
            :limit="2"
            :show-step-links="true"
            :step-links="{
              next: '>',
              prev: '<'
            }"
            for="items"
            :async="true">
        </paginate-links>
    </div>
</template>

<script>
import CharactersItem from '@/components/characters/CharactersItem'
import GetCharacters from '@/graphql/characters.gql'

export default {
    data() {
        return {
            paginate: ['items'],
        }
    },
    apollo: {
      characters: {
            query: GetCharacters,
            variables: {
                page: 1,
                name: 'morty',
            },
        }
    },
    components: {
        CharactersItem
    },
    computed: {

        load() {
            return this.$store.state.loading
        }
   }
}
</script>
