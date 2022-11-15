<template>
  <div class="a">
    <button @click="showDialog">点我显示弹窗</button>
    <!-- Teleport 是一种能够将我们的组件html结构移动到指定位置的技术 -->
    <teleport to="body">
      <div v-if="isShow">
        <h1>我是弹窗</h1>
        <button @click="closeDialog">关闭弹窗</button>
      </div>
    </teleport>
  </div>
</template>
       
       
<script>
import { ref } from 'vue'
export default {
  setup () {
    const isShow = ref(false)

    function showDialog () {
      isShow.value = true
    }

    function closeDialog () {
      isShow.value = false
    }

    return {
      showDialog,
      isShow,
      closeDialog

    }
  }
}
</script>
       
<style scoped>
.a {
  width: 400px;
  height: 400px;
  background-color: rebeccapurple;
}
</style>
