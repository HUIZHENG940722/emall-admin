import httpClientUtils from "@/utils/httpClientUtils";

/**
 * 账号名称和昵称分页查询用户列表
 * @param params
 * @returns {AxiosPromise}
 */
export function getAdminList(params) {
    return httpClientUtils({
        url: '/admin/list',
        method: 'get',
        params: params
    });
}

/**
 * 注册用户信息
 * @param data
 * @returns {AxiosPromise}
 */
export function registerAdmin(data) {
    return httpClientUtils({
        url: '/admin/register',
        method: 'post',
        data: data
    });
}

/**
 * 更新后台用户信息
 * @param id
 * @param data
 * @returns {AxiosPromise}
 */
export function updateAdmin(id, data) {
    return httpClientUtils({
        url: '/admin/update/' + id,
        method: 'put',
        data: data
    });
}

/**
 * 登录获取token
 * @param username
 * @param password
 * @returns {*}
 */
export function adminLogin(username, password) {
    return httpClientUtils({
        url: '/admin/login',
        method: 'post',
        data: {
            username,
            password
        }
    });
}

/**
 * 获取后台用户信息
 * @returns {*}
 */
export function getAdminInfo() {
    return httpClientUtils({
        url: '/admin/info',
        method: 'get',
    })
}

/**
 * 后端登出
 * @returns {*}
 */
export function adminLogout() {
    return httpClientUtils({
        url: '/admin/logout',
        method: 'post'
    })
}

/**
 * 根据用户id获取角色列表
 * @param id
 * @returns {*}
 */
export function getRoleListByAdminId(id) {
    return httpClientUtils({
        url: '/admin/role/' + id,
        method: 'get'
    })
}

/**
 * 用户分配角色
 * @param data
 * @returns {*}
 */
export function allocRole(data) {
    return httpClientUtils({
        url: '/admin/role/update',
        method: 'post',
        data: data
    })
}