import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state定义数据
  state: {
    count: 0
  },
  // 修改数据
  mutations: {
    add (state, payload) {
      state.count += payload
    },
    sub (state, payload) {
      state.count -= payload
    }
  },
  // 异步处理数据
  actions: {
    addS (context, payload) {
      setTimeout(() => {
        context.commit('add', payload)
      }, 2000)
    },
    subS (context, payload) {
      setTimeout(() => {
        context.commit('sub', payload)
      }, 2000)
    }
  },
  // 装饰作用，不改变原来的state
  getters: {
    showNew (state, payload) {
      return state.count + 'news'
    }
  },
  modules: {}
})
