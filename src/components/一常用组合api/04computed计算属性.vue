<template>
  <div>{{ person.firstName }}</div>
  <div>{{ person.lastName }}</div>
  <div>{{ person.fullName }}</div>
  <input v-model="person.firstName">
  <input v-model="person.lastName">
  <input v-model="fullName">
</template>
       
       
<script>
import { computed, reactive } from 'vue'
export default {
  setup () {
    let person = reactive({
      firstName: 'tom',
      lastName: 'jack',
    })

    //计算属性简写(没有考虑到计算属性被修改的情况)
    // let fullName = computed(() => {
    //   return person.firstName + '-' + person.lastName
    // })

    //计算属性完整写法（可以被修改）
    let fullName = computed({
      // 读取调用get
      get () {
        return person.firstName + '-' + person.lastName
      },
      // 修改调用set
      set (value) {
        let arr = value.split('-')
        person.firstName = arr[0]
        person.lastName = arr[1]
      }
    })


    return {
      person,
      fullName
    }
  }
}
</script>
       
<style scoped>

</style>