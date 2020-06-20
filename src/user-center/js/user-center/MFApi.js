import MFConfig from '../../MFConfig';
import BaseAjax from '../lib/BaseAjax';

class MFApi {
  constructor() {
    this.urlPrefix = MFConfig.wwwRoot;
    this.token = null;
  }

  setToken(token) {
    this.token = token;
  }

  createAjax(path, requestType) {
    const baseAjax = new BaseAjax();
    baseAjax.url = this.urlPrefix + path;
    baseAjax.type = requestType || 'GET';
    baseAjax.headers = {
      Authorization: `Bearer ${this.token}`,
    };
    return baseAjax;
  }

  getMyFocusList(page) {
    const baseAjax = this.createAjax('/api/attentions');
    baseAjax.data = {
      token: this.token,
      page: page || 1,
    };
    return baseAjax;
  }

  cancelMyFocus(orgId, AttenType) {
    const path = `/api/attentions/${orgId}/delete`;
    const baseAjax = this.createAjax(path, 'post');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {
      source_type: AttenType,
    };
    return baseAjax;
  }

  cancelMyCollect(id, type) {
    const path = '/api/collections/delete';
    const baseAjax = this.createAjax(path, 'post');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {
      item_ids: id,
      item_type: type,
    };
    return baseAjax;
  }

  getMyCollectionList(page) {
    const baseAjax = this.createAjax('/api/collections');
    baseAjax.data = {
      token: this.token,
      page: page || 1,
    };
    return baseAjax;
  }

  getPurchaseVisitHistory(page) {
    const baseAjax = this.createAjax('/api/home/purchaseVisitHistory/getList');
    baseAjax.data = {
      token: this.token,
      page: page || 1,
    };
    return baseAjax;
  }

  getUserInfo() {
    const path = '/api/users/index';
    const baseAjax = this.createAjax(path);
    baseAjax.data = {
      token: this.token,
    };
    return baseAjax;
  }

  getUserProfile() {
    const path = '/api/home/userProfile/getInfo';
    const baseAjax = this.createAjax(path);
    baseAjax.data = {
      token: this.token,
    };
    return baseAjax;
  }

  saveUserProfile(userProfile) {
    const path = '/api/home/userProfile/saveInfo';
    const baseAjax = this.createAjax(path, 'post');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = userProfile;
    return baseAjax;
  }

  getToken() {
    const path = '/user/account/getTokenByCookie';
    return this.createAjax(path);
  }

  getUserSafe() {
    const path = '/api/home/userSafe/getInfo';
    const baseAjax = this.createAjax(path);
    baseAjax.data = {
      token: this.token,
    };
    return baseAjax;
  }

  getPushSummary(page, Cust_id, dateString) {
    const path = '/api/home/pushSummary/getListByUser';
    const baseAjax = this.createAjax(path);
    baseAjax.data = {
      token: this.token,
      page: page || 1,
      Cust_id,
      dateString,
    };
    return baseAjax;
  }

  getDetail(page, Scout_pushId) {
    const path = '/api/home/pushSummary/getDetail';
    const baseAjax = this.createAjax(path);
    baseAjax.data = {
      token: this.token,
      page: page || 1,
      Scout_pushId,
    };
    return baseAjax;
  }

  sendBindSms(phone, verifyMode) {
    const path = '/api/sms/bind';
    const baseAjax = this.createAjax(path);
    baseAjax.data = {
      token: this.token,
      phone,
      verifyMode: convertBooleanToNumber(verifyMode),
    };
    return baseAjax;
  }

  sendMailCode(email, code) {
    const path = '/api/home/email/sendCode';
    const baseAjax = this.createAjax(path);
    baseAjax.data = {
      token: this.token,
      email,
      code,
    };
    return baseAjax;
  }

  verifyAndBindEmail(email, code) {
    const path = '/api/home/email/bind';
    const baseAjax = this.createAjax(path, 'post');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {
      email,
      code,
    };
    return baseAjax;
  }

  verifyAndBindMobile(phone, smscode, verifyMode) {
    const path = '/api/bind';
    const baseAjax = this.createAjax(path, 'post');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {
      phone,
      smscode,
      verifyMode: convertBooleanToNumber(verifyMode),
    };
    return baseAjax;
  }

  updatePassword(new_password, confirm_password) {
    const path = '/api/home/password/update';
    const baseAjax = this.createAjax(path, 'post');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {
      new_password,
      confirm_password,
    };
    return baseAjax;
  }

  getPurcenters(page, Cust_id) {
    const path = `/api/customs/${Cust_id}/view`;
    const baseAjax = this.createAjax(path, 'get');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {
      page: page || 1,
      Cust_id,
    };
    return baseAjax;
  }

  getFocusDetails(page, Atten_id) {
    const path = `/api/purcenters/${Atten_id}`;
    const baseAjax = this.createAjax(path, 'get');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {
      page: page || 1,
      Atten_id,
    };
    return baseAjax;
  }

  bindMobileUpdata(phone, smscode, new_password, verifyMode) {
    const path = '/api/home/user/updateMobileAndPassword';
    const baseAjax = this.createAjax(path, 'post');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {
      phone,
      smscode,
      new_password,
      verifyMode: convertBooleanToNumber(verifyMode),
    };
    return baseAjax;
  }

  getProvince() {
    const path = '/regions/pid/0';
    const baseAjax = this.createAjax(path, 'get');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {};
    return baseAjax;
  }

  getCity(Region_id) {
    const path = `/regions/pid/${Region_id}`;
    const baseAjax = this.createAjax(path, 'get');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {
      Region_id,
    };
    return baseAjax;
  }

  getdataList(datas) {
    const path = '/api/home/dataCenter/search';
    const baseAjax = this.createAjax(path, 'post');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = datas;
    return baseAjax;
  }

  getText(Purchase_field1) {
    const path = '/api/home/dataCenter/getPurchaseInfoForEdit';
    const baseAjax = this.createAjax(path, 'get');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {
      Purchase_field1,
    };
    return baseAjax;
  }

  deleteDataSet(id) {
    const path = '/api/home/dataCenter/dataSets/deleteById';
    const baseAjax = this.createAjax(path, 'post');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {
      id,
    };
    return baseAjax;
  }

  dataRepair(structured_content, purchaseId) {
    const path = '/api/home/dataCenter/dataSets/saveRow';
    const baseAjax = this.createAjax(path, 'post');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {
      structured_content,
      purchaseId,
    };
    return baseAjax;
  }

  getCompanyData(page) {
    const path = '/api/home/dataCenter/dataSets/getEnterprisesDataList';
    const baseAjax = this.createAjax(path, 'get');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {
      page,
    };
    return baseAjax;
  }

  getProductData(page) {
    const path = '/api/home/dataCenter/dataSets/getProductDataList';
    const baseAjax = this.createAjax(path, 'get');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {
      page,
    };
    return baseAjax;
  }

  getGraphData(searchId, year, compareCompanyName) {
    const path = '/api/home/dataCenter/dataSets/getAggsById';
    const baseAjax = this.createAjax(path, 'get');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {
      searchId,
      year,
      compareCompanyName,
    };
    return baseAjax;
  }

  getSearchData(searchId, page) {
    const path = '/api/home/dataCenter/getSearchById';
    const baseAjax = this.createAjax(path, 'get');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {
      searchId,
      page,
    };
    return baseAjax;
  }

  getDataSava(id) {
    const path = '/api/home/dataCenter/saveSearch';
    const baseAjax = this.createAjax(path, 'post');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {
      id,
    };
    return baseAjax;
  }

  getFormInfo(info) {
    const path = '/api/home/dataCenter/trial/add';
    const baseAjax = this.createAjax(path, 'post');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = info;

    return baseAjax;
  }

  getDataDesired(name, data_type) {
    const path = '/api/home/dataCenter/userAnnotation/add';
    const baseAjax = this.createAjax(path, 'post');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {
      name,
      data_type,
    };

    return baseAjax;
  }

  getCompanyName(keyword, page, per_page) {
    const path = '/api/home/dataCenter/searchCompany';
    const baseAjax = this.createAjax(path, 'get');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {
      keyword,
      page,
      per_page,
    };

    return baseAjax;
  }

  getStatus() {
    const path = '/api/home/dataCenter/trial/getStatus';
    const baseAjax = this.createAjax(path, 'get');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {};
    return baseAjax;
  }

  getIndustry() {
    const path = '/api/home/enterpriseCertification/getFormConfig';
    const baseAjax = this.createAjax(path, 'get');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {};
    return baseAjax;
  }

  postCompanyInfo(info) {
    const path = '/api/home/enterpriseCertification/updateOrCreate';
    const baseAjax = this.createAjax(path, 'post');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = info;
    return baseAjax;
  }

  getStatus() {
    const path = '/api/home/enterpriseCertification/getStatus';
    const baseAjax = this.createAjax(path, 'get');
    baseAjax.queryParams = {
      token: this.token,
    };
    baseAjax.data = {};
    return baseAjax;
  }
}

export default new MFApi();

function convertBooleanToNumber(value) {
  return value ? 1 : 0;
}
