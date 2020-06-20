/**
 * Created by ronie on 2019/12/6.
 */
import moment from 'moment';
import api from '../js/user-center/MFApi';

export function formateMilliseconds(milliseconds, formateString) {
  return moment(milliseconds).format(formateString);
}

export function formateUnixTime(seconds, formateString) {
  return moment.unix(seconds).format(formateString);
}

export function formateNow(formateString) {
  return moment().format(formateString);
}

export function dateStrToUnix(dateString) {
  return moment(dateString).unix();
}

function arrayToObejct(array, key) {
  const out = {};
  for (const item of array) {
    out[item[key]] = item;
  }
  return out;
}

export async function regionAggsAddProvinceName(buckets) {
  let provice = await api.getProvince().async();
  provice = arrayToObejct(provice.data, 'Region_id');
  for (const i in buckets) {
    const regionsId = buckets[i].key;
    if (regionsId === 0) {
      // eslint-disable-next-line no-param-reassign
      buckets[i].key_as_string = '全国';
      continue;
    }
    // eslint-disable-next-line no-param-reassign
    buckets[i].key_as_string = provice[regionsId].Region_name;
  }
  return buckets;
}
