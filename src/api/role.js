import httpClientUtils from "@/utils/httpClientUtils";

/**
 * 角色名称分页查询角色列表
 * @param params
 * @returns {AxiosPromise}
 */
export function getRoleList(params) {
    return httpClientUtils({
        url: '/role/list',
        method: 'get',
        params: params
    })
}

/**
 * 创建角色
 * @param data
 * @returns {AxiosPromise}
 */
export function createRole(data) {
    return httpClientUtils({
        url: '/role/create',
        method: 'post',
        data: data
    })
}

/**
 * 更新指定角色信息
 * @param id
 * @param data
 * @returns {AxiosPromise}
 */
export function updateRole(id, data) {
    return httpClientUtils({
        url: '/role/update/' + id,
        method: 'put',
        data: data
    })
}