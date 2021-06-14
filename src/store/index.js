import Vue from 'vue'
import Vuex from 'vuex'
import { SET_LOADING_ON, SET_LOADING_OFF } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    searchValue: '',
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
