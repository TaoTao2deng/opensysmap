import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from "./routers"
const router = new VueRouter({
    routes
})
// 路由卫士
// router.beforeEach(({meta, path}, from, next) => {
//     var { auth = true } = meta
//     var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录

//     if (auth && !isLogin && path !== '/login') {
//         return next({ path: '/login' })
//     }
//     next()
// })

export default router;