import httpClientUtils from "@/utils/httpClientUtils";

export function policy() {
    return httpClientUtils({
        url:'/aliyun/oss/policy',
        method:'get',
    })
}

export function callback() {
    return httpClientUtils({
        url: '/aliyun/oss/callback',
        method: 'post'
    });
}