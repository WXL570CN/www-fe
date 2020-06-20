/**
 * Created by ronie on 2019/12/5.
 */

import $ from 'jquery';
import store from '../index';

store.watch(((state) => state.summary.user), ((value) => {
  showUserName(value.name);
}));

function showUserName(userName) {
  $('#header-user-info')
    .show();
  $('#header-user-info span')
    .text(userName);
}
