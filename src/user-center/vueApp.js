/**
 * Created by ronie on 2019/12/10.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './store/listenner/register';
import * as echarts from 'echarts';
import store from './store';
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import routes from './routes';

Vue.use(Antd);
Vue.use(VueRouter);
Vue.use(echarts);

let app;
export default function () {
  return app;
}

export async function initVue() {
  const router = new VueRouter({
    routes,
  });

  router.afterEach((to) => {
    store.dispatch('appMeta/setCurrentPath', to.path);
  });

  await store.dispatch('summary/getUserInfo');

  app = new Vue({
    router,
    store,
  }).$mount('#main-content');
}
