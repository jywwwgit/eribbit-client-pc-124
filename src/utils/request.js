import axios from 'axios'
import store from '@/store'
import router from '@/router'

// export baseURL
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  // axios的配置
  baseURL,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(config => {
  // 拦截业务逻辑
  // 进行请求配置的修改
  // 如果本地有token则在头部获取
  // 1.获取用户信息对象
  const { profile } = store.state.user
  // 2.判断是否有token
  if (config.token) {
    // 3.设置token
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(res => res.data, err => {
  // 401状态码，进入该函数
  if (err.response && err.response.status === 401) {
    // 清空无效用户信息
    // 跳转到登录页
    // 跳转需要传参(当前路由地址)给登录页码
    store.commit('user/setUser', {})
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})

// 请求工具函数
export default (url, method, submitData) => {
  // 负责发请求：地址、请求方式、提交的数据
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
