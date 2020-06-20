import $ from 'jquery';
import { onLogout } from '@src/user-center/js/auth';
import MFConfig from '../MFConfig';

const $login = $('.login');
const $scan = $('.scan');
const $scan_img = $('.scan img');
const $quit = $('.quit .logOff');
let $ticket;// ticket码

let timer;
let url;
let skip = false;// true为跳转，false为刷新
const { wwwRoot } = MFConfig;

// 点击登录按钮
$login.click(() => {
  $scan.show();
  $.ajax({
    url: `${wwwRoot}/qrcode`,
    type: 'get',
    dataType: 'json',
    success(data) {
      if (data.code === 0) {
        $ticket = data.data.ticket;
        $scan_img.attr('src', data.data.url);
      }
    },
  });
  timer = setInterval(login, 1000);
});

// 每秒发送验证，判断是否登录
function login() {
  $.ajax({
    url: `${wwwRoot}/auth/scanresult`,
    type: 'get',
    dataType: 'json',
    data: {
      ticket: $ticket,
    },
    success(data) {
      if (data.code === 0) skip ? location.href = url : history.go(0);
    },
    error(err) {

    },
  });
}

$quit.click(() => {
  $.ajax({
    url: `${wwwRoot}/logout`,
    type: 'get',
    dataType: 'json',
    success(data) {
      if (data.code === 0) {
        onLogout();
        history.go(0);
      }
    },
  });
});

(function () {
  /**
   *未登录时让其登录
   */

  const $check = $('.fun .listMore a:lt(4)');
  $check.click(function (e) {
    if ($login.length) {
      e.preventDefault();
      url = $(this).attr('href');
      skip = true;
      $login.click();
    }
  });

  /**
   *更多选项弹框
   */

  const $more = $('.more,.listMore');
  const $listMore = $('.listMore');

  $more.mouseover(() => {
    $listMore.show();
  });

  $more.mouseout(() => {
    $listMore.hide();
  });
}());
