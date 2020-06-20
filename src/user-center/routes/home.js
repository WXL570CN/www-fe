const customPush = () => import('../pages/home/custom-push/cutsom-push.vue');
const myFocus = () => import('../pages/home/focus/my-focus.vue');
const myCollect = () => import('../pages/home/collect/my-collect.vue');
const companyTrack = () => import('../pages/home/track/company-track.vue');
const footPrint = () => import('../pages/home/footprint/foot-print.vue');
const Info = () => import('../pages/home/personal/info.vue');
const Tender = () => import('../pages/home/tender/tender.vue');
const IDSafe = () => import('../pages/home/personal/ID-safety.vue');
const Approve = () => import('../pages/home/approve/approve.vue');
const orderList = () => import('../pages/home/custom-push/order-list.vue');
const pushDetail = () => import('../pages/home/custom-push/push-details.vue');
const Developing = () => import('../pages/home/developing.vue');
const OrderPreview = () => import('../pages/home/custom-push/order_preview.vue');
const FocusDetails = () => import('../pages/home/focus/focus-details.vue');
const DemoYearPicker = () => import('@src/user-center/pages/demo/demo-year-picker.vue');
const index = [
  {name:"home.custom-push",path: 'custom-push', component: customPush},
  {path:'custom-push/order-list/:Cust_id',component:orderList,props:true},
  {
    name:'home.custom.pushDetail',
    path:'custom-push/order-list/push-detail/:summaryId',
    component:pushDetail,
    props:true
  },
  {
    name:'home.custom.OrderPreview',
    path:'custom-push/OrderPreview/:Cust_id',
    component:OrderPreview,
    props:true
  },
  {path: 'my-focus', component: myFocus},
  {
    name:'home.focus.details',
    path: 'my-focus/focus-details/:Purchase_id', component: FocusDetails,
    props:true
  },
  {path: 'my-collect', component: myCollect},
  {path:'foot-print',component:footPrint},
  {path:'company-track',component:companyTrack},
  {path:'info',component:Info},
  {path:'tender',component:Tender},
  {name:'home.ID-safe',path:'ID-safe',component:IDSafe},
  {path:'approve',component:Approve},
  {path:'developing',component:Developing},
  {path:'demo-year-picker',component:DemoYearPicker},
];

export default index;
