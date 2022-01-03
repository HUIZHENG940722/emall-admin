import router from "@/router";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {getToken} from "@/utils/cookieUtil";
import store from "@/store";
import {Message} from "element-ui";

// 不重定向白名单
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
    NProgress.start();
    if (getToken()) {
        if (to.path === '/login') {
            next({path: '/'});
            NProgress.done();
        } else {
            if (store.getters.roles.length === 0) {
                store.dispatch('GetInfo').then(res => {
                    let menus = res.data.menus;
                    let username = res.data.username;
                    store.dispatch('GenerateRoutes', {menus, username}).then(() => {
                        store.getters.addRouteMap.forEach(item => {
                            router.addRoute(item);
                        });
                        next({...to, replace: true});
                    }).catch(error => {
                        store.dispatch('FedLogOut').then(() => {
                            Message.error(error || 'Verification failed, please login again');
                            next({path: '/'});
                        });
                    });
                });
            } else {
                next();
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next('/login');
            NProgress.done();
        }
    }
});

router.afterEach(() => {
    NProgress.done();
})