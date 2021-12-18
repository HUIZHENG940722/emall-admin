import httpClientUtils from "@/utils/httpClientUtils";

export function initPostData() {
    return httpClientUtils({
        url:'/aliyun/oss/initPostData',
        method:'get',
    })
}

