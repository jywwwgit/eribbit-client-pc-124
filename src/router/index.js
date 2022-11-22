import { createRouter, createWebHashHistory } from 'vue-router'

const routes = []

const router = createRouter({
  // hash 模式的路由表
  history: createWebHashHistory(),
  routes
})

export default router
