<template>
  <div>{{ xiaoming.name }}</div>
  <div>{{ xiaoming.age }}</div>
  <button @click="add">点击加一</button>
</template>
       
       
<script>
// 定义一个响应式的数据
import { reactive } from 'vue'
export default {
  setup () {
    //定义一个对象类型的响应式数据
    //reactive定义的响应式数据是深层次的
    const person = {
      name: '小明',
      age: 18
    }
    //const 代理对象= reactive(源对象)
    const xiaoming = reactive(person)
    //递增方法
    function add () {
      xiaoming.age++
    }
    return {
      xiaoming,
      add
    }
    /*
  reactive对比ref

  从定义数据角度对比：
      ref用来定义：基本类型数据。
      reactive用来定义：对象（或数组）类型数据。
      备注：ref也可以用来定义对象（或数组）类型数据, 它内部会自动通过reactive转为代理对象。
  从原理角度对比：
      reactive通过使用来实现响应式（数据劫持）, 并通过Reflect操作源对象内部的数据。
  从使用角度对比：
      ref定义的数据：操作数据需要.value，读取数据时模板中直接读取不需要.value。
      reactive定义的数据：操作数据与读取数据：均不需要.value。
    */



  }
}
</script>
       
<style scoped>

</style>