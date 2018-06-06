const Index = r => require.ensure([], () => r(require('../pages/Index')), 'Index')

// 嵌套在 '/' 中的路由
let ins = [{
    path: '/dashboard',
    component: r => require.ensure([], () => r(require('../pages/dashboard/Dashboard')), 'Dashboard')
}, {
    path: '/form/base',
    component: r => require.ensure([], () => r(require('../pages/form/Base')), 'FormBase')
}, {
    path: '/form/step',
    component: r => require.ensure([], () => r(require('../pages/form/Step')), 'FormStep')
}, {
    path: '/form/advance',
    component: r => require.ensure([], () => r(require('../pages/form/Advance')), 'FormAdvance')
}, {
    path: '/list/query',
    component: r => require.ensure([], () => r(require('../pages/dashboard/Dashboard')), 'ListQuery')
}];

// 单独页面
let single = [{
    path: '/single',
    component: r => require.ensure([], () => r(require('../pages/dashboard/Dashboard')), 'Dashboard')
}];

let router = [{
    path: '/',
    component: Index,
    redirect: ins[0].path,
    children: [...ins]
}, ...single]

export default router