import axios from 'axios';


const httpClientUtils = axios.create({
    baseURL: 'http://atpp36.natappfree.cc',
    timeout: 15000,
});

export default httpClientUtils;
