
const getters = {
    token: state => state.user.token,
    roles: state => state.user.roles,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    addRouteMap: state => state.permission.addRouteMap,
    routeMap: state => state.permission.routeMap,
}

export default getters;