<template>
  <!-- vue2.0 需要一个根元素 -->
  <!-- vue3.0 可以使用代码片段 flagment -->
  <div>
    APP
    <!-- 1.使用根模块state的数据 -->
    <p>{{$store.state.username}}</p>
    <!-- 2.使用根模块getters的数据 -->
    <p>{{$store.getters['newName']}}</p>
    <button @click="mutationFn">修改</button>
  </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    // 使用vuex仓库
    const store = useStore()
    // 1.使用根模块state的数据
    console.log(store.state.username)
    // 2.使用根模块getters的数据
    console.log(store.getters.newName)
    const mutationFn = () => {
      // 3.提交根模块mutations的函数
      store.dispatch('updateName')
    }
    return { mutationFn }
  }
}
</script>
