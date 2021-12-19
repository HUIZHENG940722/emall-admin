import httpClientUtils from '@/utils/httpClientUtils';

/**
 * 查询商品分类层级结构
 * @returns {AxiosPromise}
 */
export function productCategoryListWithChildren() {
    return httpClientUtils({
        url: '/productCategory/list/withChildren',
        method: 'get',
    });
}

/**
 * 更新商品分类
 * @param id
 * @param data
 * @returns {AxiosPromise}
 */
export function updateProductCate(id,data) {
    return httpClientUtils({
        url:'/productCategory/update/'+id,
        method:'put',
        data:data
    })
}

/**
 * 创建商品分类
 * @param data
 * @returns {AxiosPromise}
 */
export function createProductCate(data) {
    return httpClientUtils({
        url:'/productCategory/create',
        method:'post',
        data:data
    })
}

/**
 * 获取第一层商品分类
 * @param parentId
 * @param params
 * @returns {AxiosPromise}
 */
export function getFirstLevelProductCateList(parentId,params) {
    return httpClientUtils({
        url:'/productCategory/list/'+parentId,
        method:'get',
        params:params
    })
}