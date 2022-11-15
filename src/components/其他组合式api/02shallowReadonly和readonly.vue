<template>
  <h4>当前求和为:{{ sum }}</h4>
  <button @click="sum++">点我x+1</button>
  <hr>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>
       
       
<script>
import { ref, reactive, toRefs, readonly, shallowReadonly } from 'vue'
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


    //当不希望修改数据时,可以使用readonly
    //当使用外部组件的数据并且不希望修改数据时,可以使用readonly
    // person = readonly(person) //readonly: 让一个响应式数据变为只读的（深只读）所有的数据都无法修改
    person = shallowReadonly(person) //shallowReadonly：让一个响应式数据变为只读的（浅只读）,只有第一层数据无法修改，第二层数据可以修改


    return {
      ...toRefs(person),
      sum
    }
  }
}

</script>
       
<style scoped>

</style>