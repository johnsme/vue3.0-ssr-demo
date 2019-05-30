import Vue from 'vue'
import Router from 'vue-router'
// 路由组件
import wdetail from '@/views/wdetail/route.js'

Vue.use(Router)
const routes = [
  ...wdetail
]
const router = new Router({
  routes
})
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  // cookie.set('token', process.env.VUE_APP_TOKEN||'ABCD')
  next()
})
export default router
// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     ...wdetail
//   ]
// })
