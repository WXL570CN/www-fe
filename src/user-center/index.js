import $ from 'jquery';
import './assets/static/vendor/bootstrap-3.3.7/js/bootstrap';
import './assets/static/vendor/bootstrap-3.3.7/css/bootstrap.css';
import './css/personal-center.css';
import './css/base.css';
import './js/login';
import Alert from './utils/Alert';
import auth from './js/auth';
import {
  initVue,
} from './vueApp';
import './listenner/api-listenner';

$(document).ready(() => {
  start();
});

async function start() {
  Alert.showTips('正在登录');
  await auth();
  Alert.close();
  initVue();
}
