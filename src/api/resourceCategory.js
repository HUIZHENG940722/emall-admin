import httpClientUtils from "@/utils/httpClientUtils";

/**
 * 创建资源分类
 * @param data
 * @returns {AxiosPromise}
 */
export function createResourceCategory(data) {
    return httpClientUtils({
        url: '/resourceCategory/create',
        method: 'post',
        data: data
    })
}

/**
 * 获取所有的资源分类
 * @returns {AxiosPromise}
 */
export function listAllCate() {
    return httpClientUtils({
        url: '/resourceCategory/listAll',
        method: 'get'
    })
}

/**
 * 更新资源分类
 * @param id
 * @param data
 * @returns {AxiosPromise}
 */
export function updateResourceCategory(id, data) {
    return httpClientUtils({
        url: '/resourceCategory/update/' + id,
        method: 'put',
        data: data
    })
}

/**
 * 获取所有的资源分类列表
 * @returns {*}
 */
export function getAllCateList() {
    return httpClientUtils({
        url: '/resourceCategory/listAll',
        method: 'get'
    })
}