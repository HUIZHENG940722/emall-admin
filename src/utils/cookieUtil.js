import cookies from 'js-cookie';

const tokenKey = 'loginToken';
export function setToken(token) {
    return cookies.set(tokenKey, token);
}

export function getToken() {
    cookies.get(tokenKey);
}

export function removeToken() {
    return cookies.remove(tokenKey);
}

export function setCookie(key, value, expires) {
    return cookies.set(key, value, {expires});
}

export function getCookie(key) {
    return cookies.get(key);
}