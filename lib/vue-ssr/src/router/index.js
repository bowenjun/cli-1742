import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => System.import('../pages/Index.vue')

// 嵌套在 '/' 中的路由
let ins = [{
    path: '/dashboard',
    component: () => System.import('../pages/dashboard/Dashboard.vue')
}, {
    path: '/form/base',
    component: () => System.import('../pages/form/Base.vue')
}, {
    path: '/form/step',
    component: () => System.import('../pages/form/Step.vue')
}, {
    path: '/form/advance',
    component: () => System.import('../pages/form/Advance.vue')
}, {
    path: '/list/query',
    component: () => System.import('../pages/dashboard/Dashboard.vue')
}];

// 单独页面
let single = [{
    path: '/single',
    component: () => System.import('../pages/dashboard/Dashboard.vue')
}];

let router = [{
    path: '/',
    component: Index,
    redirect: ins[0].path,
    children: [...ins]
}, ...single]

export default new Router({
  mode: 'history',
  routes: router
})
