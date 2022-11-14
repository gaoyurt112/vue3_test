<template>
  <div>{{ age }}</div>
  <button @click="add">点击加一</button>
</template>
       
       
<script>
// 定义一个响应式的数据
import { ref } from 'vue'
export default {
  setup () {
    //创建一个包含响应式数据的引用对象
    const age = ref(0)
    //递增方法
    function add () {
      // JS中操作数据：xxx.value
      //基本类型的数据：响应式依然是靠Object.defineProperty()的get与set完成的。
      //对象类型的数据需要使用reactive函数实现双向绑定
      //ref也可以处理对象或数组类型，会自动通过reactive转为代理对象
      age.value++
    }
    return {
      age,
      add
    }
  }
}
</script>
       
<style scoped>

</style>