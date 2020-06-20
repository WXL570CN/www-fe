/**
 * Created by ronie on 2019/12/9.
 */

import swal from 'sweetalert2';

class Alert {
  static showTips(title, text) {
    const defaultOptions = {
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      title,
      text,
    };
    swal.fire(defaultOptions);
  }

  static async showConfirm(options) {
    const defaultOptions = {
      title: '确认取消关注',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      icon: 'warning',
    };
    const newOptions = Object.assign(defaultOptions, options);
    const result = await swal.fire(newOptions);
    return result.value;
  }

  static close() {
    swal.close();
  }
}

export default Alert;
