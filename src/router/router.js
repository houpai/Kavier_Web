import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    name: "index",
    component: () => import(/* webpackChunkName: "index" */ "../pages/index/index.vue")
  },
  {
    path: "/staffPage",
    name: "staffPage",
    component: () => import(/* webpackChunkName: "staffPage" */ "../pages/staffPage/staffPage.vue")
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import(/* webpackChunkName: "detail" */ "../pages/detail/detail.vue")
  },
]

const router = new VueRouter({
  routes: routes
})

// // 路由设置拦截
// router.beforeEach((to, from, next) => {
//
// })

export default router

