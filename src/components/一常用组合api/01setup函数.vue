<template>
  <div>{{ name }}</div>
  <div>{{ age }}</div>
  <button @click="sayHello">点击</button>
</template>
       
       
<script>
import { h } from 'vue'

export default {
  name: 'app',
  /*
  setup执行的时机
      在beforeCreate之前执行一次，this是undefined。
  setup的参数
      props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
      context：上下文对象
      attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于this.$attrs
      slots: 收到的插槽内容, 相当于this.$slots
      emit: 分发自定义事件的函数, 相当于this.$emit
  */
  // 组件中所用到的：数据、方法等等，均要配置在setup中。
  setup () {
    let name = '张三'
    let age = 18

    //方法
    function sayHello () {
      alert(`我叫${name},今年${age}岁,我是一个好人`)
    }

    //返回一个对象（常用）若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
    return {
      name,
      age,
      sayHello
    }

    //返回一个渲染函数(使用渲染函数将不会渲染template模板中的元素)
    // return () => h('h1', 'hello world')
  }
}



</script>
       
<style scoped>

</style>