<template>
  <button @click="isShow = !isShow">切换显示隐藏</button>
  <one v-if="isShow"></one>
</template>

<script>
import one from './components/一常用组合api/08自定义hooks.vue'
import { ref } from 'vue'
export default {
  components: {
    one
  },
  setup () {
    let isShow = ref(true)

    return {
      isShow
    }
  }
}

</script>

<style scoped>

</style>
