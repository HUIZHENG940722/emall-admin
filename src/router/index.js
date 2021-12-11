import Vue from "vue";
import Router from "vue-router";
import Login from '@/pages/login';
import WrongPage from '@/pages/error';
import Home from '@/pages/home';
import Layout from '@/pages/layout';
import ProductList from "@/pages/pms/product";
import AddProduct from "@/pages/pms/product/add";
import ProductCateList from '@/pages/pms/productCate';
import AddProductCate from '@/pages/pms/productCate/add';
import ProductAttrCateList from '@/pages/pms/productAttr/cate';

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
        redirect: '/pms/Product',
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
                meta: {title: '添加商品', icon: 'Product-add'}
            },
            {
                path: 'productCate',
                name: 'productCate',
                component: ProductCateList,
                meta: {title: '商品分类', icon: 'Product-cate'}
            },
            {
                path: 'addProductCate',
                name: 'addProductCate',
                component: AddProductCate,
                meta: {title: '添加商品分类'},
                hidden: true
            },
            {
                path: 'productAttr',
                name: 'productAttr',
                component: ProductAttrCateList,
                meta: {title: '商品类型', icon: 'product-attr'}
            },
            {
                path: 'productAttrList',
                name: 'productAttrList',
                component: () => import('@/pages/pms/productAttr/index'),
                meta: {title: '商品属性列表'},
                hidden: true
            },
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