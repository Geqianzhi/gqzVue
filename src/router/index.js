import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";


export const childrenRouters = [
    {
        path: "/Vmodel",
        name: "v-model",
        label: 'v-model变化',
        component: () =>
            import( "../views/Vmodel.vue")
    },
    {
        path: "/Teleport",
        name: "Teleport传送门",
        label: 'Teleport',
        component: () =>
            import( "../views/Teleport.vue")
    },
    {
        path: "/setupApi",
        name: "setupApi",
        label: 'setupApi',
        redirect: '/setup',
        component: () =>
            import( "../views/setupApi/setupApi"),
        children:[
            {
                path: "/setup",
                name: "setup",
                label: 'setup函数',
                component: () =>
                    import( "../views/setupApi/setup")
            },
            {
                path: "/Lifecycle",
                name: "Lifecycle",
                label: 'Lifecycle(生命周期)',
                component: () =>
                    import( "../views/setupApi/Lifecycle")
            },
        ]
    },
    {
        path: "/reactiveApi",
        name: "reactiveApi",
        label: 'reactiveApi',
        component: () =>
            import( "../views/reactiveApi/reactiveApi")
    },
    {
        path: "/refsApi",
        name: "refsApi",
        label: 'refsApi',
        component: () =>
            import( "../views/refsApi/refsApi")
    }

];
export const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        redirect: '/Vmodel',
        children: [...childrenRouters]
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
