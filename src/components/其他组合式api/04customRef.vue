<template>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>
</template>
       
       
<script>
import { ref, customRef } from 'vue'
export default {
  setup () {
    // let keyWord = ref('hrello')//使用vue官方的ref

    //自定义ref
    function myRef (value, delay) {
      let timer
      return customRef((track, trigger) => {
        return {
          //当需要读取数据时调用get方法
          get () {
            track()  //告诉Vue这个value值是需要被“追踪”的
            return value
          },
          //当需要修改数据时调用set方法
          set (newValue) {
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger()   //告诉Vue去更新界面
            }, delay)
          }
        }
      })

    }

    let keyWord = myRef('hrello', 2000)//使用自定义的ref

    return {
      keyWord
    }
  }
}
</script>
       
<style scoped>

</style>