import httpClientUtils from "@/utils/httpClientUtils";

/**
 * 根据父菜单获取菜单列表
 * @param parentId
 * @param params
 * @returns {AxiosPromise}
 */
export function getMenuListByP(parentId, params) {
    return httpClientUtils({
        url: '/menu/list/' + parentId,
        method: 'get',
        params: params
    })
}

/**
 * 创建菜单
 * @param data
 * @returns {AxiosPromise}
 */
export function createMenu(data) {
    return httpClientUtils({
        url: '/menu/create',
        method: 'post',
        data: data
    })
}