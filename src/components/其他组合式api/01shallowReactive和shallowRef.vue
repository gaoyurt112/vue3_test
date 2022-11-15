<template>
  <h4>当前的x.y值是:{{ x.y }}</h4>
  <button @click="x.y++">点我x+1</button>
  <hr>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>
       
       
<script>
import { ref, reactive, toRef, toRefs, shallowReactive, shallowRef } from 'vue'
export default {
  setup () {
    /*
    shallowReactive和shallowRef的区别
       shallowReactive：只处理对象最外层属性的响应式（浅响应式）。
       shallowRef：只处理对象最外层属性的响应式（浅响应式）。
    应用场景：
       如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===> shallowReactive
       如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> shallowRef
    */


    //shallowReactive只能修改最外层的数据，内层的数据不会响应式
    let person = shallowReactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 10000
        }
      }
    })


    // let x = ref({
    //   y: 0
    // })

    //如果shallowRef的值是对象，那么无法修改值
    let x = shallowRef({
      y: 0
    })
    console.log(x)


    return {
      ...toRefs(person),
      x
    }
  }
}

</script>
       
<style scoped>

</style>