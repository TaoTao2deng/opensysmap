const routers = [
    {
        path: '',
        component: resolve => require(['@/pages/index'], resolve)
    },
    {
        name: "map",
        path: "/map",
        component: resolve => require(['@/pages/map'], resolve)
    },
]
export default routers 