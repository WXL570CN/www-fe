/**
 * Created by ronie on 2019/12/10.
 */

import { event } from '../js/lib/BaseAjax';
import getVueApp from '../vueApp';

const hideFunctions = new Map();
event.on('beforeSend', ({ uuid }) => {
  try {
    const hideFunction = getVueApp().$message.loading('加载中...', 0);
    hideFunctions.set(uuid, hideFunction);
  } catch (e) {
    if (!getVueApp()) {
      return;
    }
    console.warn(e);
  }
});

event.on('complete', ({ uuid }) => {
  if (!hideFunctions.has(uuid)) {
    return;
  }
  hideFunctions.get(uuid)();
});
