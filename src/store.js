import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let url;
let options;

const setRequestOptions = (method) => {
  return {
    method: method,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
}

const setUrl = (type) => {
  const host = "http://localhost:3000/"
  return host + type
}


const store = new Vuex.Store({
  state: {
    users: {}
  },
  getters: {
    allUsers(state) {
      return state.users
    }
  },
  mutations: {
    fetchAllUsers(state, payload) {
      state.users = payload
    },
    createUser(state, payload) {
      state.users.push(payload)
    }
  },
  actions: {
    fetchAllUsers({ commit }) {
      url = setUrl("users");
      options = setRequestOptions("GET");
      axios.get(url, options).then(
        res => {
          commit('fetchAllUsers', res.data)
        }
      )
    },
    createUser({ commit }, payload) {
      url = setUrl("users");
      options = setRequestOptions("POST");
      axios.post(url, payload, options)
    }
  }
})

export default store

