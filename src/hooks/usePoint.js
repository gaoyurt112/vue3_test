import { reactive, onMounted, onBeforeUnmount } from 'vue'
export default function () {
  //实现鼠标坐标的数据
  let point = reactive({
    x: 0,
    y: 0
  })

  //实现鼠标坐标的方法
  function savepoint (e) {
    point.x = e.pageX
    point.y = e.pageY
    console.log(point.x, point.y)
  }

  //实现鼠标坐标的生命周期钩子
  //组件渲染完毕挂载事件
  onMounted(() => {
    window.addEventListener('click', savepoint)
  })

  //组件卸载前移除事件
  onBeforeUnmount(() => {
    window.removeEventListener('click', savepoint)
  })

  //返回数据
  return point
}