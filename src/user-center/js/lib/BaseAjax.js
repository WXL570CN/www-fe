import uuid from 'uuid';
import EventEmitter from 'events';
import $ from 'jquery';

const ajaxEvent = new EventEmitter();
const queryString = require('query-string');

function BaseAjax() {
  const self = this;
  this.queryParams = {};
  this.headers = {};
  this.event = ajaxEvent;
  this.uuid = uuid();
  this.onSuccess = function () {
  };// 处理成功
  this.onProcessError = function () {
  };// 处理失败
  this.onBeforeSend = function () {
  };// 请求之前
  this.onSendError = function () {
  };// 请求失败
  this.onComplete = function () {
  };// 请求结束
  this.ajaxOptions = {
    url: self.url,
    data: self.data,
    type: self.type,
    headers: self.headers,
    beforeSend() {
      // 请求之前
      self.dispatch('beforeSend');
      self.onBeforeSend();
    },
    success(result, status) {
      if (status !== 'success') {
        // 请求失败
        self.onSendError();
        return;
      }

      // 请求成功
      if (typeof result !== 'object') {
        result = JSON.parse(result);
      }
      if (result && typeof result === 'object') {
        // 处理成功
        self.onSuccess(result);
        return;
      }

      // 处理失败
      self.onProcessError();
    },
    error() {
      // 请求失败
      self.onSendError();
    },
    complete() {
      // 请求结束
      self.dispatch('complete');
      self.onComplete();
    },
  };
  this.init();
}

BaseAjax.prototype = {
  constructor: BaseAjax,
  init() {
    const self = this;
    Object.defineProperties(this.ajaxOptions, {
      url: {
        get() {
          return `${self.url}?${queryString.stringify(self.queryParams)}`;
        },
      },
      data: {
        get() {
          return self.data;
        },
      },
      type: {
        get() {
          return self.type;
        },
      },
      headers: {
        get() {
          return self.headers;
        },
      },
      queryParams: {
        get() {
          return self.queryParams;
        },
      },
    });
  },
  send() {
    $.ajax(this.ajaxOptions);
    return this;
  },

  async() {
    const self = this;
    return new Promise((resolve, reject) => {
      self.onSuccess = resolve;
      self.onSendError = reject;
      self.onProcessError = reject;
      self.send();
    });
  },

  dispatch(event) {
    this.event.emit(event, {
      url: this.url,
      uuid: this.uuid,
    });
  },
};

export default BaseAjax;

export const event = ajaxEvent;
