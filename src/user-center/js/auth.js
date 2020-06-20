import $ from 'jquery';
import MFApi from './user-center/MFApi';

const $login = $('.login');
const storageKeyToken = 'www.user.token';


async function auth() {
  const url = new URL(window.location.href);
  const jwt = url.searchParams.get('jwt');
  if (jwt) {
    url.searchParams.delete('jwt');
    window.history.pushState(null, null, url.toString());
    onGetTokenSuccess(jwt);

    return;
  }

  if (sessionStorage.getItem(storageKeyToken)) {
    onGetTokenSuccess(sessionStorage.getItem(storageKeyToken));

    return;
  }

  const result = await MFApi.getToken().async();
  if (result.code === 1) {
    // 未登录
    sessionStorage.setItem('referrerBeforeLogin', document.referrer);
    if (window.location.href.match('#/data-guide')) {
      return;
    }
    if (window.location.href.match('#/api')) {
      return;
    }
    $login.click();
    throw new Error('auth failed');
  }
  if (result.code === 0) {
    // 登录成功
    onGetTokenSuccess(result.data.token);
  }
}

function onGetTokenSuccess(token) {
  sessionStorage.setItem(storageKeyToken, token);
  MFApi.setToken(token);
  $login.hide();
  window.PCToken = token;
}
export function isLogin() {
  if (window.PCToken) {
    return true;
  }
  return false;
}

export function onLogout() {
  sessionStorage.removeItem(storageKeyToken);
}

export default auth;
