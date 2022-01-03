import {permissionRouteMap, sharedRouterMap} from "@/router";

const permission = {
    state: {
        routeMap: sharedRouterMap,
        addRouteMap: [],
    },
    mutations: {
        SET_ROUTERS: (state, permissionRoutes) => {
            state.addRouteMap = permissionRoutes;
            state.routeMap = sharedRouterMap.concat(permissionRoutes);
        }
    },
    actions: {
        GenerateRoutes({ commit }, data) {
            return new Promise(resolve => {
                const {menus} = data;
                const permissionRoutes = permissionRouteMap.filter(route => {
                    if (hasPermission(menus, route)) {
                        if (route.children && route.children.length > 0) {
                            route.children = route.children.filter(child => {
                                if (hasPermission(menus, child)) {
                                    return child;
                                }
                                return false;
                            });
                            return route
                        } else {
                            return route;
                        }
                    } else {
                        return false;
                    }
                });
                // 对菜单路由进行排序
                sortRouters(permissionRoutes)
                //
                commit('SET_ROUTERS', permissionRoutes);
                resolve();
            });
        }
    }
}

export default permission;

/**
 * 根据菜单列表判断是否有相应的路由权限
 * @param menus
 * @param route
 */
function hasPermission(menus, route) {
    if (route.name) {
        // 获取当前路由对应的菜单
        let currMenu = null;
        for (let i = 0; i < menus.length; i++) {
            if (route.name == menus[i].name) {
                currMenu = menus[i];
                break;
            }
        }
        if (currMenu != null) {
            // 设置菜单标题、图标和可见性
            if (currMenu.title != null && currMenu.title !== '') {
                route.meta.title = currMenu.title;
            }
            if (currMenu.icon != null && currMenu.icon !== '') {
                route.meta.icon = currMenu.icon;
            }
            if (currMenu.hidden != null) {
                route.hidden = currMenu.hidden !== 0;
            }
            if (currMenu.sort != null && currMenu.sort !== '') {
                route.sort = currMenu.sort;
            }
        }
        return true;
    } else {
        return false;
    }
}

function sortRouters(permissionRoutes) {
    for (let i = 0; i < permissionRoutes.length; i++) {
        let route = permissionRoutes[i];
        if (route.children && route.children.length > 0) {
            route.children.sort(compare("sort"));
        }
    }
    permissionRoutes.sort(compare("sort"));
}

/**
 * 降序比较
 * @param p
 * @returns {function(*, *)}
 */
function compare(p) {
    return function (m, n) {
        return m[p] - n[p];
    }
}