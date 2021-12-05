import httpClientUtils from '@/utils/httpClientUtils';

/**
 * 商品品牌名称分页查询商品品牌列表
 * @param keyword
 * @param pageNum
 * @param pageSize
 * @returns {AxiosPromise}
 */
export function productBrandList(params) {
    return httpClientUtils({
        url: '/brand/list',
        method: 'get',
        params: params
    });
}