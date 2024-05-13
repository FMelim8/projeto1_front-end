import { createStore } from 'vuex'
import { ref } from "vue"
import { defineStore } from 'pinia';



export default createStore({
  state: {
    register: false
  },
  getters: {
  },
  mutations: {
    setRegister(state, value) {
      state.register = value;
    }
  },
  actions: {
    updateRegister(context, value) {
      context.commit('setRegister', value);
    },
  },
  modules: {
  }
})
