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
import { ref, watch, reactive, watchEffect } from 'vue'
export default {
  setup () {
    let sum = ref(0)
    let msg = ref('hello')
    let person = reactive({
      name: '张三',
      age: 18
    })

    //监视属性
    // watch(sum, (oldValue, newValue) => {
    //   console.log('sum发生了变化', oldValue, newValue)
    // }, { immediate: true })

    //watchEffect
    //watchEffect的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。
    watchEffect(() => {
      const x1 = sum.value
      const x2 = msg.value
      console.log('watchEffect监视的属性发生了变化', sum.value)
    })

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