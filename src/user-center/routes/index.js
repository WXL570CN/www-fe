const home = () =>
    import ('../pages/home/home.vue');
import homeChildren from './home';
import dataChildren from './data';
const ContextPhone = () =>
    import ('../pages/home/context-phone.vue');
const dataCenter = () =>
    import ('../pages/dataCenter/business-data.vue');
const dataForm = () =>
    import ('../pages/dataCenter/data-form.vue');
const dataVisual = () =>
    import ('../pages/dataCenter/data-visual.vue');
const dataRepair = () =>
    import ('../pages/dataCenter/data-repair.vue');
const Login = () =>
    import ('../pages/login/login.vue');
const dataGuide = () =>
    import ('../pages/dataCenter/data-guide.vue');
const API = () =>
    import ('../pages/API/api.vue');
const index = [{
        path: '/',
        redirect: "/home/custom-push"
    },
    {
        path: '/home',
        component: home,
        children: homeChildren
    },
    {
        path: '/context-phone',
        component: ContextPhone
    },
    {
        name: 'index.data.center',
        path: '/data-center',
        component: dataCenter,
        children: dataChildren,
        meta: {
            keepAlive: true //需要被缓存的组件
        },
    },
    {
        name: 'index.data.form',
        path: '/data-form/',
        component: dataForm,
        props: true
    },
    {
        name: "index.data.visual",
        path: '/data-visual/:searchId',
        component: dataVisual,
        props: true
    },
    {
        name: "index.data.repair",
        path: '/data-repair/:Purchase_id',
        component: dataRepair,
        props: true
    },
    {
        name: "index.data.guide",
        path: '/data-guide',
        component: dataGuide,
        props: true
    },
    {
        name: "index.api",
        path: '/api',
        component: API,
        props: true
    },
    {
        name: "login",
        path: '/login',
        component: Login,
        props: (route) => ({
            redirectUrl: route.query.redirectUrl
        }),
    }
];

export default index;