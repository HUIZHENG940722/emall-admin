import axios from 'axios';


const httpClientUtils = axios.create({
    baseURL: 'http://mipyij.natappfree.cc',
    timeout: 15000,
});

export default httpClientUtils;
