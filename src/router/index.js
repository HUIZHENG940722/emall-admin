import Vue from "vue";
import Router from "vue-router";
import Login from '@/pages/login';
import WrongPage from '@/pages/error';
import Home from '@/pages/home';
import Layout from '@/pages/layout';

// 使用路由组件
Vue.use(Router);

// 第一层路由
export const firstRouterMap = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/404',
        component: WrongPage
    },
    {
        path: '',
        redirect: '/login',
        component: Layout,
        children: [
            {
                path: 'home',
                name: 'home',
                component: Home,
                meta: {title: '首页', icon: 'home'}
            }
        ]
    },
];

// 第二层以及相应下级路由
export const secondRouterMap = [
];

export default new Router(
    {
        routes: firstRouterMap,
    }
);