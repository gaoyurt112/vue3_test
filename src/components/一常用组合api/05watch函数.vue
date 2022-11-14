<template>
  <h2>当前求和为:{{ sum }}</h2>
  <input type="text" v-model="msg">
  <button @click="sum++">{{ sum }}</button>
  <br />
  <br />
  <div>{{ person.name }}</div>
  <div>{{ person.age }}</div>
  <input type="text" v-model="person.name">
  <input type="text" v-model="person.age">
</template>
       
       
<script>
import { ref, watch, reactive } from 'vue'
export default {
  setup () {
    let sum = ref(0)
    let msg = ref('hello')
    let person = reactive({
      name: '张三',
      age: 18
    })

    //情况一：监视ref所定义的响应式数据
    // watch(sum, (oldValue, newValue) => {
    //   console.log('sum发生了变化', oldValue, newValue)
    // }, { immediate: true })

    //情况二：监视多个ref所定义的响应式数据的变化
    // watch([sum, msg], (oldValue, newValue) => {
    //   console.log('sum发生了变化', oldValue, newValue)
    // }, { immediate: true })


    /*情况三：监视reactive所定义的响应式数据
       若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！
       若watch监视的是reactive定义的响应式数据，则强制开启了深度监视 
    */
    // watch(person, (oldValue, newValue) => {
    //   console.log('person发生了变化', oldValue, newValue)
    // }, { deep: false }) //这里deep无效

    //情况四：监视reactive所定义的响应式数据种的某个属性
    // watch(() => person.name, (oldValue, newValue) => {
    //   console.log('person的name发生了变化', oldValue, newValue)
    // })

    //情况：监视reactive所定义的响应式数据种的某个属性
    // watch([() => person.name, () => person.age], (oldValue, newValue) => {
    //   console.log('person的name和age发生了变化', oldValue, newValue)
    // })

    //特殊情况
    watch(() => person.age, (newValue, oldValue) => {
      console.log('person的age变化了', newValue, oldValue)
    }, { deep: true }) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效


    return {
      sum,
      msg,
      person
    }
  }
}
</script>
       
<style scoped>

</style>