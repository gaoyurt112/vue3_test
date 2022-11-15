<template>
  <h2>展示车:{{ car }}</h2>
</template>
       
       
<script>
import { inject } from 'vue'
export default {
  setup () {
    /*
    作用：实现祖与后代组件间通信，父子可以使用props，兄弟组件可以使用eventBus，但是祖孙组件之间就不行了，这时候就可以使用provide和inject
    套路：父组件有一个 provide 选项来提供数据，后代组件有一个 inject 选项来开始使用这些数据
    */

    //接收provide传递过来的数据
    const car = inject('car')
    return {
      car
    }
  }
}
</script>
       
<style scoped>

</style>