<template>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>
       
       
<script>
import { reactive, toRef, toRefs } from 'vue'
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

    //直接获取对象中的属性值不是响应式的
    // const name1 = person.name
    // console.log(name1)

    //使用toRef创建一个 ref 对象，其value值指向另一个对象中的某个属性
    //语法const name = toRef(person,'name')
    // const name2 = toRef(person, 'name')
    // console.log(name2)

    //toRefs函数可以将一个对象转换成多个ref对象
    const x = toRefs(person)
    console.log(x)



    return {
      //toRef写法
      // name: toRef(person, 'name'),
      // age: toRef(person, 'age'),
      // salary: toRef(person.job.j1, 'salary')

      //toRefs写法展开对象
      ...toRefs(person)




      // 错误写法:此写法是赋值了一份对象那个并转为ref对象读取的并不是原数据，修改的也不是原数据
      // name: Ref(person.name),
      // age: Ref(person.age),
      // salary: Ref(person.job.j1.salary)
    }
  }
}

</script>
       
<style scoped>

</style>