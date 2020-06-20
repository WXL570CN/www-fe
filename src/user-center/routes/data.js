const addData = () =>
    import ('../pages/dataCenter/addData/add-data.vue');
const companyData = () =>
    import ('../pages/dataCenter/company/company-data.vue');
const productData = () =>
    import ('../pages/dataCenter/product/product-data.vue');
const approveData = () =>
    import ('../pages/dataCenter/company-approve/approve.vue');
const auditData = () =>
    import ('../pages/dataCenter/company-approve/audit.vue');
const index = [{
        path: '/data-center',
        redirect: "/data-center/add-data"
    },
    {
        name: 'data.add.data',
        path: 'add-data',
        component: addData,
        meta: {
            keepAlive: false
        },
    },
    {
        path: 'company-data',
        component: companyData,
        meta: {
            keepAlive: false
        },
    },
    {
        path: 'product-data',
        component: productData,
        meta: {
            keepAlive: false
        },
    },
    {
        name: "data.approve.data",
        path: 'approve-data',
        component: approveData,
        meta: {
            keepAlive: true //需要被缓存的组件
        },
    },
    {
        name: "data.audit.data",
        path: 'audit-data',
        component: auditData,
        meta: {
            keepAlive: true //需要被缓存的组件
        },
    },
];

export default index;