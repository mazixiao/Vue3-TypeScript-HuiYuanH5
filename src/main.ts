import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/reset.scss'


// // ajax
// import axios from 'axios'

// // 2、在vue中使用axios
// createApp.prototype.$axios = axios;   




router.beforeEach((to, from, next) => {
  //beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {
      //判断是否有标题
      console.log(to.meta.title)
      document.title = to.meta.title
  } else {
      document.title = ''
  }
  next()
})


createApp(App).use(store).use(router).mount('#app')
