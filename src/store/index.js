import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/utils/http'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    test () {
      return http.request({
        url: 'test'
      })
    }
  }
})
