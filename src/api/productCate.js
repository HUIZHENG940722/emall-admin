import httpClientUtils from '@/utils/httpClientUtils';

/**
 * 查询商品分类层级结构
 * @returns {AxiosPromise}
 */
export function productCategoryListWithChildren() {
    return httpClientUtils({
        url: '/product/list/withChildren',
        method: 'get',
    });
}