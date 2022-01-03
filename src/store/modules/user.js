import {getToken, removeToken, setCookie, setToken} from "@/utils/cookieUtil";
import {adminLogin, adminLogout, getAdminInfo} from "@/api/admin";

const user = {
    state: {
        token: getToken(),
        roles: [],
        name: '',
        avatar: ''
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
    },
    actions: {
        Login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                adminLogin(userInfo.username.trim(), userInfo.password.trim()).then(response => {
                    const data = response.data;
                    const tokenStr = data.tokenHead + data.token;
                    setCookie('username', userInfo.username.trim());
                    setToken(tokenStr);
                    commit('SET_TOKEN', tokenStr);
                    resolve();
                }).catch(error => {
                    reject(error);
                });
            });
        },
        FedLogOut({ commit }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '');
                removeToken();
                resolve();
            });
        },
        GetInfo({ commit }) {
            return new Promise((resolve, reject) => {
                getAdminInfo().then(response => {
                    const data = response.data;
                    if (data.roles && data.roles.length > 0) {
                        commit('SET_ROLES', data.roles);
                    } else {
                        reject('getInfo: roles must be a non-null array !');
                    }
                    commit('SET_NAME', data.username);
                    commit('SET_AVATAR', data.icon);
                    resolve(response);
                }).catch(error => {
                    reject(error);
                });
            });
        },
        LogOut({ commit }) {
            return new Promise((resolve, reject) => {
                adminLogout().then(() => {
                    commit('SET_TOKEN', '');
                    commit('SET_ROLES', '');
                    removeToken();
                    resolve();
                }).catch(error => {
                    reject(error);
                });
            });
        },
    }
}

export default user;