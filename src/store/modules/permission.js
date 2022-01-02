const permission = {
    state: {

    },
    mutations: {

    },
    actions: {
        GenerateRoutes(data) {
            return new Promise(resolve => {
                const {menus} = data;
                console.log('输出菜单列表', menus);
                console.log('实现生成菜路由列表');
                resolve();
            });
        }
    }
}

export default permission;