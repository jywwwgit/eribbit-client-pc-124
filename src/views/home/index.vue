<template>
  <div class='xtx-home-page'>
    <!-- 首页入口 -->
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- 轮播图 -->
        <HomeBanner />
      </div>
    </div>
  </div>
</template>

<script>
import HomeCategory from './components/home-category'
import HomeBanner from './components/home-banner.vue'
export default {
  name: 'xtx-home-page',
  components: { HomeCategory, HomeBanner }
}
</script>

<style scoped lang='less'></style>
