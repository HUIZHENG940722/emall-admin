import httpClientUtils from "@/utils/httpClientUtils";

/**
 * 创建商品品牌
 * @param data
 * @returns {AxiosPromise}
 */
export function createBrand(data) {
    return httpClientUtils({
        url:'/brand/create',
        method:'post',
        data:data
    })
}

/**
 * 修改商品品牌
 * @param id
 * @param data
 * @returns {AxiosPromise}
 */
export function updateBrand(id,data) {
    return httpClientUtils({
        url:'/brand/update/'+id,
        method:'put',
        data:data
    })
}

/**
 * 获取品牌列表
 * @param params
 * @returns {AxiosPromise}
 */
export function brandList(params) {
    return httpClientUtils({
        url:'/brand/list',
        method:'get',
        params:params
    })
}

/**
 * 根据主键id获取品牌
 * @param id
 * @returns {AxiosPromise}
 */
export function getBrand(id) {
    return httpClientUtils({
        url:'/brand/'+id,
        method:'get',
    })
}