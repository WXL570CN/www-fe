/* 是否是公司邮箱 */
export function isWscnEmail(rule, value, callback) {
  const reg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
  if (value == '' || value == undefined || value == null) {
    callback();
  } else if (!reg.test(value)) {
    callback(new Error('请输入正确的邮箱地址'));
  } else {
    callback();
  }
}
/* 是否是公司名称 */
export function isCompanyName(rule, value, callback) {
  const reg = /^([\u4e00-\u9fa5]|[\(\)\（\）]){5,30}$/;
  if (value == '' || value == undefined || value == null) {
    callback();
  } else if (!reg.test(value)) {
    callback(new Error('请输入正确的公司名称'));
  } else {
    callback();
  }
}

/* 注册资金、人数 */
export function isRegCapital(rule, value, callback) {
  const reg = /([1-9][0-9]*)+(.[0-9]{1,2})?$/;
  if (value == '' || value == undefined || value == null) {
    callback();
  } else if (!reg.test(value)) {
    callback(new Error('请输入正确的数值'));
  } else {
    callback();
  }
}

/* 是否是法人代表 */
export function isLegalRepre(rule, value, callback) {
  const reg = /^[\u4E00-\u9FA5]{2,6}$/;
  if (value == '' || value == undefined || value == null) {
    callback();
  } else if (!reg.test(value)) {
    callback(new Error('请输入正确的姓名格式'));
  } else {
    callback();
  }
}

/* 是否是登记机关 */
export function isRegOffice(rule, value, callback) {
  const reg = /^([\u4e00-\u9fa5]|[\(\)\（\）]){4,}$/;
  if (value == '' || value == undefined || value == null) {
    callback();
  } else if (!reg.test(value)) {
    callback(new Error('请输入正确的格式'));
  } else {
    callback();
  }
}

/* 是否是手机号码 */
export function isLegalPhone(rule, value, callback) {
  const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (value == '' || value == undefined || value == null) {
    callback();
  } else if ((!reg.test(value)) && value != '') {
    callback(new Error('请输入正确的电话号码'));
  } else {
    callback();
  }
}

/* 是否是邮政编码 */
export function isPostCode(rule, value, callback) {
  const reg = /\d{6}/;
  if (value == '' || value == undefined || value == null) {
    callback();
  } else if ((!reg.test(value)) && value != '') {
    callback(new Error('请输入六位邮政编码'));
  } else {
    callback();
  }
}

/* 是否是信用代码 */
export function isUsccode(rule, value, callback) {
  const reg = /^([0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}|[1-9]\d{14})$/;
  if (value == '' || value == undefined || value == null) {
    callback();
  } else if ((!reg.test(value)) && value != '') {
    callback(new Error('信用代码格式不正确'));
  } else {
    callback();
  }
}
/* 是否是公司网址 */
export function isUrl(rule, value, callback) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  if (value == '' || value == undefined || value == null) {
    callback();
  } else if ((!reg.test(value)) && value != '') {
    callback(new Error('请输入正确的网址'));
  } else {
    callback();
  }
}
/* 是否是公司地址 */
export function isAddress(str) {
  const reg = /^[\u4e00-\u9fa5\w\s#-.。—]{3,}$/;
  return reg.test(str);
}
