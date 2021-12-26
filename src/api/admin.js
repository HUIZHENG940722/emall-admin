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
    })
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
    })
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
    })
}