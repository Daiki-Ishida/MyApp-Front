import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

var STORAGE_KEY = 'test'
var sessionStorage = {
  fetch: function () {
    var currentUser = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '{}'
    )
    return currentUser
  },
  save: function (currentUser) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUser))
  }
}

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
    users: [],
    currentUser: sessionStorage.fetch(),
    blogs: []
  },
  getters: {
    allUsers(state) {
      return state.users
    },
    currentUser(state) {
      return state.currentUser
    },
    allBlogs(state) {
      return state.blogs
    }
  },
  mutations: {
    fetchAllUsers(state, payload) {
      state.users = payload
    },
    addUser(state, payload) {
      state.users.push(payload);
    },
    login(state, payload) {
      state.currentUser = payload
      sessionStorage.save(state.currentUser)
    },
    fetchAllBlogs(state, payload) {
      state.blogs = payload
    }
  },
  actions: {
    fetchAllUsers({ commit }) {
      url = setUrl("users");
      options = setRequestOptions("GET");
      axios.get(url, options).then(
        (res) => {
          commit('fetchAllUsers', res.data)
        }
      )
    },
    signUp({ commit }, payload) {
      url = setUrl("users");
      options = setRequestOptions("POST");
      axios.post(url, payload, options).then((res) => {
        commit('addUser', res.data)
      });
    },
    login({ commit }, payload) {
      url = setUrl("login");
      options = setRequestOptions("POST");
      axios.post(url, payload, options).then((res) => {
        commit('login', res.data)
      });
    },
    fetchAllBlogs({ commit }) {
      url = setUrl("blogs")
      options = setRequestOptions("GET")
      axios.get(url, options).then(
        (res) => {
          commit("fetchAllBlogs", res.data)
        }
      )
    }
  }
})

export default store