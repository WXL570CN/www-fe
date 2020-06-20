import Vue from 'vue';
import VueRouter from 'vue-router';
import $ from 'jquery';
import Antd from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css';

import routes from './routes';

Vue.use(VueRouter);
Vue.use(Antd);

$(document).ready(() => {
  console.log('document ready');
});

const router = new VueRouter({
  routes,
});

new Vue({
  router,
}).$mount('#app');
