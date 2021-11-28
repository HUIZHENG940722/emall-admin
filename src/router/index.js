import Vue from "vue";
import Router from "vue-router";
import Login from '@/pages/login';
import WrongPage from '@/pages/error';
import Home from '@/pages/home';

// 使用路由组件
Vue.use(Router);

// 第一层路由
const firstRouterMap = [
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
        redirect: '/home',
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
export default new Router(
    {
        routes: firstRouterMap,
    }
);