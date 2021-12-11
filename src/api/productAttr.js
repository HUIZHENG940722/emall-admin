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