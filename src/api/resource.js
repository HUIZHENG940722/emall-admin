import httpClientUtils from "@/utils/httpClientUtils";

/**
 * 创建资源
 * @param data
 * @returns {AxiosPromise}
 */
export function createResource(data) {
    return httpClientUtils({
        url: '/resource/create',
        method: 'post',
        data: data
    })
}

/**
 * 更新资源
 * @param id
 * @param data
 * @returns {AxiosPromise}
 */
export function updateResource(id, data) {
    return httpClientUtils({
        url: '/resource/update/' + id,
        method: 'post',
        data: data
    })
}

/**
 * 分页获取资源列表
 * @param params
 * @returns {AxiosPromise}
 */
export function getResourceList(params) {
    return httpClientUtils({
        url: '/resource/list',
        method: 'get',
        params: params
    })
}

/**
 * 获取所有的资源分类列表
 * @returns {*}
 */
export function getAllResourceList() {
    return httpClientUtils({
        url: '/resource/listAll',
        method: 'get'
    })
}