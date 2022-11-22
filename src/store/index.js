import { createStore } from 'vuex'
// vue2.0  new vue.store
// vue3.0  createStore

const moduleA = {
  state: {
    username: 'moduleA'
  },
  getters: {
    newName (state) {
      return state.username + '!!!!'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'zs'
    }
  }
}
const moduleB = {
  // 带有命名空间的namespaced
  namespaced: true,
  state: {
    username: 'moduleB'
  },
  getters: {
    newName (state) {
      return state.username + '!!!!'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'ls'
    }
  },
  actions: {
    updateName (ctx) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    }
  }
}

export default createStore({
  // state: {
  //   username: 'zs'
  // },
  // getters: {
  //   newName (state) {
  //     return state.username + '!!!'
  //   }
  // },
  // mutations: {
  //   updateName (state) {
  //     state.username = 'ls'
  //   }
  // },
  // actions: {
  //   updateName (ctx) {
  //     // 发请求
  //     setTimeout(() => {
  //       ctx.commit('updateName')
  //     }, 1000)
  //   }
  // },
  modules: {
    moduleA,
    moduleB
  }
})
