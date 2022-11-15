<template>
  <div class="a">
    <h1>我是父组件</h1>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <!-- 如果未加载出来显示此dom -->
      <template v-slot:fallback>
        <h3>加载中.....</h3>
      </template>
    </Suspense>
  </div>
</template>
       
       
<script>
// import Child from './child.vue'  //静态引入
import { defineAsyncComponent } from 'vue'
const Child = defineAsyncComponent(() => import('./child.vue')) //异步引入，动态引入
export default {
  components: {
    Child
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