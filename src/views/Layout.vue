<template>
  <AppTopnav />
  <AppHeader />
  <main class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <AppFooter />
</template>

<script>
import { useStore } from 'vuex'
import AppTopnav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
export default {
  name: 'xtx-layout',
  components: { AppTopnav, AppHeader, AppFooter },
  setup () {
    // 获取分类下数据
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped lang='less'>
  .app-body {
    min-height: 600px;
  }
</style>
