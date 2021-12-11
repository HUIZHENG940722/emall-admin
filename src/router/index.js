import Vue from "vue";
import Router from "vue-router";

// 使用路由组件
Vue.use(Router);

// 第一层路由
export const firstRouterMap = [
    {
        path: '/login',
        component: ()=> import('@/pages/login'),
    },
    {
        path: '/404',
        component: ()=> import('@/pages/error'),
    },
    {
        path: '',
        redirect: '/home',
        component: ()=> import('@/pages/layout'),
        children: [
            {
                path: 'home',
                name: 'home',
                component: ()=> import('@/pages/home'),
                meta: {title: '首页', icon: 'home'}
            }
        ]
    },
    {
        path: '/pms',
        component: ()=> import('@/pages/layout'),
        redirect: '/pms/Product',
        name: 'pms',
        meta: {title: '商品', icon: 'product'},
        children: [
            {
                path: 'product',
                name: 'product',
                component: ()=> import('@/pages/pms/product'),
                meta: {title: '商品列表', icon: 'product-list'}
            },
            {
                path: 'addProduct',
                name: 'addProduct',
                component: ()=> import('@/pages/pms/product/add'),
                meta: {title: '添加商品', icon: 'Product-add'}
            },
            {
                path: 'updateProduct',
                name: 'updateProduct',
                component: () => import('@/pages/pms/product/update'),
                meta: {title: '修改商品', icon: 'product-add'},
                hidden: true
            },
            {
                path: 'productCate',
                name: 'productCate',
                component: ()=> import('@/pages/pms/productCate'),
                meta: {title: '商品分类', icon: 'Product-cate'}
            },
            {
                path: 'addProductCate',
                name: 'addProductCate',
                component: ()=> import('@/pages/pms/productCate/add'),
                meta: {title: '添加商品分类'},
                hidden: true
            },
            {
                path: 'updateProductCate',
                name: 'updateProductCate',
                component: () => import('@/pages/pms/productCate/update'),
                meta: {title: '修改商品分类'},
                hidden: true
            },
            {
                path: 'productAttr',
                name: 'productAttr',
                component: ()=> import('@/pages/pms/productAttr/cate'),
                meta: {title: '商品类型', icon: 'product-attr'}
            },
            {
                path: 'productAttrList',
                name: 'productAttrList',
                component: () => import('@/pages/pms/productAttr/index'),
                meta: {title: '商品属性列表'},
                hidden: true
            },
            {
                path: 'addProductAttr',
                name: 'addProductAttr',
                component: () => import('@/pages/pms/productAttr/add'),
                meta: {title: '添加商品属性'},
                hidden: true
            },
            {
                path: 'updateProductAttr',
                name: 'updateProductAttr',
                component: () => import('@/pages/pms/productAttr/update'),
                meta: {title: '修改商品属性'},
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