<template>
  <!-- 模块A不带命名空间的导入使用 -->
  <p>{{$store.state.moduleA.username}}</p>
  <p> {{$store.getters.newName}} </p>
  <!-- 模块B带命名空间导入的使用 -->
  <p>{{$store.state.moduleB.username}}</p>
  <p> {{$store.getters['moduleB/newName']}} </p>
  <button @click="mutationsFn">修改username</button>
  <button @click="actionsFn">异步修改username</button>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    console.log(store.getters.newName)
    console.log(store.getters['moduleB/newName'])
    // 提交B模块的修改
    const mutationsFn = () => {
      store.commit('moduleB/updateName')
    }
    const actionsFn = () => {
      // 调用B模块的actions
      store.dispatch('moduleB/updateName')
    }
    return { mutationsFn, actionsFn }
  }
}
</script>

<style>

</style>
