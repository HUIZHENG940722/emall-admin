import Vue from "vue";
import Router from "vue-router";

// 使用路由组件
Vue.use(Router);

// 第一层路由
const firstRouterMap = [
    {
        path: '/login',
    },
    {
        path: '/404',
    },
    {
        path: ''
    }
];
export default new Router(
    {
        routes: firstRouterMap,
    }
);