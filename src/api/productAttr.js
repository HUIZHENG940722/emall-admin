import httpClientUtils from "@/utils/httpClientUtils";

/**
 * 创建商品类型（属性）
 * @param data
 * @returns {AxiosPromise}
 */
export function createProductAttr(data) {
    return httpClientUtils({
        url:'/productAttribute/create',
        method:'post',
        data:data
    })
}

/**
 * 获取商品类型列表
 * @param cid
 * @param params
 * @returns {AxiosPromise}
 */
export function getProductAttrList(cid,params) {
    return httpClientUtils({
        url:'/productAttribute/list/'+cid,
        method:'get',
        params:params
    })
}

/**
 * 获取商品类型
 * @param id
 * @returns {AxiosPromise}
 */
export function getProductAttr(id) {
    return httpClientUtils({
        url:'/productAttribute/'+id,
        method:'get'
    })
}

/**
 * 更新商品类型
 * @param id
 * @param data
 * @returns {AxiosPromise}
 */
export function updateProductAttr(id,data) {
    return httpClientUtils({
        url:'/productAttribute/update/'+id,
        method:'post',
        data:data
    })
}

export function getProductAttrInfo(productCategoryId) {
    return httpClientUtils({
        url:'/productAttribute/attrInfo/'+productCategoryId,
        method:'get'
    })
}