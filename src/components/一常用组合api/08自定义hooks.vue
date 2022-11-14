<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前点击时鼠标的坐标为: x:{{ point.x }} ,y:{{ point.y }}</h2>
</template>
       
       
<script>
import { ref } from 'vue'
//引入hooks函数进行复用
import usePoint from '../../hooks/usePoint'
export default {
  setup () {
    let sum = ref(0)
    //调用hooks函数
    let point = usePoint()

    return {
      sum,
      point
    }
  },

}
</script>
       
<style scoped>

</style>