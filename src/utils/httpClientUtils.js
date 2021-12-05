import axios from 'axios';


const httpClientUtils = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 15000,
});

/*httpClientUtils.interceptors.request.use(config => {
    // config.headers['Access-Control-Allow-Origin']='*';
});*/

export default httpClientUtils;
