import Vue from 'vue'
import Vuex from 'vuex'
import { SET_LOADING_ON, SET_LOADING_OFF } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    searchValue: '',
    results: [
        {
          "id": "218",
          "name": "Mechanical Rick",
          "image": "https://rickandmortyapi.com/api/character/avatar/218.jpeg",
          "species": "Robot"
        },
        {
          "id": "220",
          "name": "Mega Fruit Farmer Rick",
          "image": "https://rickandmortyapi.com/api/character/avatar/220.jpeg",
          "species": "Human"
        },
        {
          "id": "231",
          "name": "Morty Rick",
          "image": "https://rickandmortyapi.com/api/character/avatar/231.jpeg",
          "species": "Human"
        },
        {
          "id": "265",
          "name": "Pickle Rick",
          "image": "https://rickandmortyapi.com/api/character/avatar/265.jpeg",
          "species": "unknown"
        },
        {
          "id": "267",
          "name": "Plumber Rick",
          "image": "https://rickandmortyapi.com/api/character/avatar/267.jpeg",
          "species": "Human"
        },
        {
          "id": "274",
          "name": "Quantum Rick",
          "image": "https://rickandmortyapi.com/api/character/avatar/274.jpeg",
          "species": "Human"
        },
        {
          "id": "278",
          "name": "Regional Manager Rick",
          "image": "https://rickandmortyapi.com/api/character/avatar/278.jpeg",
          "species": "Human"
        },
        {
          "id": "281",
          "name": "Reverse Rick Outrage",
          "image": "https://rickandmortyapi.com/api/character/avatar/281.jpeg",
          "species": "Human"
        },
        {
          "id": "283",
          "name": "Rick D. Sanchez III",
          "image": "https://rickandmortyapi.com/api/character/avatar/283.jpeg",
          "species": "Human"
        },
        {
          "id": "284",
          "name": "Rick Guilt Rick",
          "image": "https://rickandmortyapi.com/api/character/avatar/284.jpeg",
          "species": "Human"
        },
        {
          "id": "285",
          "name": "Rick Prime",
          "image": "https://rickandmortyapi.com/api/character/avatar/285.jpeg",
          "species": "Human"
        },
        {
          "id": "286",
          "name": "Rick D-99",
          "image": "https://rickandmortyapi.com/api/character/avatar/286.jpeg",
          "species": "Human"
        },
        {
          "id": "287",
          "name": "Rick D716",
          "image": "https://rickandmortyapi.com/api/character/avatar/287.jpeg",
          "species": "Human"
        },
        {
          "id": "288",
          "name": "Rick D716-B",
          "image": "https://rickandmortyapi.com/api/character/avatar/288.jpeg",
          "species": "Human"
        },
        {
          "id": "289",
          "name": "Rick D716-C",
          "image": "https://rickandmortyapi.com/api/character/avatar/289.jpeg",
          "species": "Human"
        },
        {
          "id": "290",
          "name": "Rick Sanchez",
          "image": "https://rickandmortyapi.com/api/character/avatar/290.jpeg",
          "species": "Human"
        },
        {
          "id": "291",
          "name": "Rick J-22",
          "image": "https://rickandmortyapi.com/api/character/avatar/291.jpeg",
          "species": "Human"
        },
        {
          "id": "292",
          "name": "Rick K-22",
          "image": "https://rickandmortyapi.com/api/character/avatar/292.jpeg",
          "species": "Human"
        },
        {
          "id": "293",
          "name": "Rick Sanchez",
          "image": "https://rickandmortyapi.com/api/character/avatar/293.jpeg",
          "species": "Human"
        },
        {
          "id": "294",
          "name": "Ricktiminus Sancheziminius",
          "image": "https://rickandmortyapi.com/api/character/avatar/294.jpeg",
          "species": "Human"
        }
    ]  
  },
  mutations: {
    [SET_LOADING_ON](state) {
      state.loading = true
    },
    [SET_LOADING_OFF](state) {
      state.loading = false
    }
  },
  actions: {
    setLoading({commit, state}){
      if(state.loading) {
        commit('SET_LOADING_OFF')
      } else {
        commit('SET_LOADING_ON')
      }
    } 

  },
  modules: {
  }
})
