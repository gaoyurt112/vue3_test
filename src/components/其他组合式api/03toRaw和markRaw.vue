<template>
  <h4>当前求和为:{{ sum }}</h4>
  <button @click="sum++">点我x+1</button>
  <hr>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}</h2>
  <h2>c车:{{ car }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
</template>
       
       
<script>
import { ref, reactive, toRefs, toRaw } from 'vue'
export default {
  setup () {
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 10000
        }
      }
    })

    let sum = ref(0)

    //将一个由reactive生成的响应式对象转为普通对象(只能处理reactive生成的对象)
    //用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新
    function showRawPerson () {
      console.log(toRaw(person))
    }


    //标记一个对象，使其永远不会再成为响应式对象
    /*
    1. 有些值不应被设置为响应式的，例如复杂的第三方类库等。
    2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。
    */
    function addCar () {
      person.car = markRaw({
        brand: '奔驰',
        price: 100000
      })
    }

    return {
      ...toRefs(person),
      sum,
      showRawPerson,
      addCar
    }
  }
}

</script>
       
<style scoped>

</style>