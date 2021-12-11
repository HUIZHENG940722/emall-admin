import httpClientUtils from '@/utils/httpClientUtils';

/**
 * 创建商品类型分类
 * @param data
 * @returns {AxiosPromise}
 */
export function createProductAttrCate(data) {
    return httpClientUtils({
        url:'/productAttribute/category/create',
        method:'post',
        data:data
    })
}

/**
 * 获取商品类型分类列表
 * @param params
 * @returns {AxiosPromise}
 */
export function getProductAttrCateList(params) {
    return httpClientUtils({
        url: '/productAttribute/category/list',
        method: 'get',
        params: params
    });
}

/**
 * 编辑商品类型分类
 * @param id
 * @param data
 * @returns {AxiosPromise}
 */
export function updateProductAttrCate(id,data) {
    return httpClientUtils({
        url:'/productAttribute/category/update/'+id,
        method:'post',
        data:data
    })
}