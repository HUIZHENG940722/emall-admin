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
};

/**
 * 修改商品品牌
 * @param id
 * @param data
 * @returns {AxiosPromise}
 */
export function updateBrand(id,data) {
    return httpClientUtils({
        url:'/brand/update/'+id,
        method:'post',
        data:data
    })
}