import Vue from 'vue'
import App from './App.vue'
// 引入路由
import VueRouter from 'vue-router'
//引入index组件
import index from './components/index.vue'
//路由中间件
Vue.use(VueRouter)
// 路由实例化   
const router = new VueRouter({
  // 定义路由
  routes:[
    { path: '/index', component: index }
   
  ]
})
// 公共样式
import './assets/statics/site/css/style.css';
Vue.config.productionTip = false

new Vue({
  //选择器
 el: '#app',
 //挂载路由
 router,
  render: h => h(App)
})
