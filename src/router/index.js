import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Shopingcar from '../pages/Shopingcar'
import GoodsList from '../pages/GoodsList'
const routers = [
    {
        path: '/',
        component: Main,
        meta: { title: '购物网站_主页' }
    },
    {
        path: '/login',
        component: Login,
        meta: { title: '购物网站_登录' }
    },
    {
        path: '/register',
        component: Register,
        meta: { title: '购物网站_注册' }
    },
    {
        path: '/shopingcar',
        component: Shopingcar,
        meta: { title: '购物网站_我的购物车' }
    },
    {
        path: '/goodslist',
        component: GoodsList,
        meta: { title: '购物网站_货物列表' }
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routers,
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})
export default router