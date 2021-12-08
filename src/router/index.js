import Vue from "vue";
import Router from "vue-router";
import Login from '@/pages/login';
import WrongPage from '@/pages/error';
import Home from '@/pages/home';
import Layout from '@/pages/layout';
import ProductList from "@/pages/pms/product";
import AddProduct from "@/pages/pms/product/add";
import ProductCateList from '@/pages/pms/productCate'

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
        redirect: '/home',
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
    {
        path: '/pms',
        component: Layout,
        redirect: '/pms/product',
        name: 'pms',
        meta: {title: '商品', icon: 'product'},
        children: [
            {
                path: 'product',
                name: 'product',
                component: ProductList,
                meta: {title: '商品列表', icon: 'product-list'}
            },
            {
                path: 'addProduct',
                name: 'addProduct',
                component: AddProduct,
                meta: {title: '添加商品', icon: 'product-add'}
            },
            {
                path: 'productCate',
                name: 'productCate',
                component: ProductCateList,
                meta: {title: '商品分类', icon: 'product-cate'}
            }
        ],
    }
];

// 第二层以及相应下级路由
/*export const secondRouterMap = [

];*/

export default new Router(
    {
        routes: firstRouterMap,
    }
);