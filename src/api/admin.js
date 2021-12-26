import httpClientUtils from "@/utils/httpClientUtils";

/**
 * 账号名称和昵称分页查询用户列表
 * @param params
 * @returns {AxiosPromise}
 */
export function getAdminList(params) {
    return httpClientUtils({
        url: '/admin/list',
        method: 'get',
        params: params
    })
}