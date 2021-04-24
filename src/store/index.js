import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    psychologyUserInfo: {
      state: {
        info: []
      },
      mutations: {
        SET_INFO_TO_STATE: (state, information) => {
          state.info = information;
        }
      },
      actions: {
        GET_INFO_FROM_API({commit}) {
          return axios('http://jsonplaceholder.typicode.com/users/1', {
            method: "GET"
          })
            .then((information) => {
              commit('SET_INFO_TO_STATE', information.data)
              return information
            })
            .catch((error) => {
              console.log(error)
              return error
            })
        }
      },
      getters: {
        INFORMATION(state) {
          return state.info
        }
      },
    }
  }
})
