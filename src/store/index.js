import { createStore } from 'vuex'
import user from './modules/user'
import category from './modules/category'
import cart from './modules/cart'
// 导入vuex持久化插件
import createPersistedState from 'vuex-plugin-persistedstate'

export default createStore({
  modules: {
    user,
    cart,
    category
  },
  plugins: [
    createPersistedState({
      key: 'erabbit-client-pc-store',
      paths: ['user', 'cart']
    })
  ]
})
