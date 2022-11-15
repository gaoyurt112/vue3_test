<template>
  <button @click="isShow = !isShow">切换显示隐藏</button>
  <div class="a">
    <one v-if="isShow"></one>
  </div>

</template>

<script>
import one from './components/其他组合式api/04customRef.vue'
import { ref, reactive, provide } from 'vue'
export default {
  components: {
    one
  },
  setup () {
    let isShow = ref(true)

    //父组件通过provide提供数据
    const car = reactive({ name: '奔驰', price: 100000 })
    provide('car', car)

    return {
      isShow
    }
  }
}

</script>

<style scoped>
.a {
  widows: 500px;
  height: 500px;
  background-color: antiquewhite;
}
</style>
