/**
 * Created by ronie on 2019/12/3.
 */


import swal from 'sweetalert2';
import MFApi from '../../../js/user-center/MFApi';
import subTitle from '../sub-title.vue';
import { formateUnixTime } from '../../../utils';

const vueSettings = {
  data() {
    return {
      isLoading: false,
      isSubmiting: false,
      user: {},
      visible: false,
      passWord: false,
      email: {
        mobile: '',
        isSmsSending: false,
        isSmsSendOk: true,
        isVerifing: false,
        code: '',
        visible: false,
        visible2: false,
        tips: '',
        remainSeconds: 0,
        verifyMode: false,
        title: '绑定邮箱',
      },
      bindMobile: {
        mobile: '',
        isSmsSending: false,
        isSmsSendOk: true,
        isVerifing: false,
        code: '',
        visible: false,
        tips: '',
        remainSeconds: 0,
        verifyMode: false,
        title: '绑定手机号',
      },
      changeMobile: {
        mobile: '',
        code: '',
        visible: false,
      },
      password: {
        old_password: '',
        new_password: '',
        confirm_password: '',
        busy: false,
        visible: false,
      },
      wechat: {
        visible: false,
      },
    };
  },
  created() {
    this.fetchData();
  },
  components: {
    subTitle,
  },
  filters: {
    formateUnixTime(seconds, formate) {
      return formateUnixTime(seconds, formate);
    },
  },
  methods: {
    async fetchData() {
      const self = this;
      if (self.isLoading) {
        return;
      }
      self.isLoading = true;
      try {
        const result = await MFApi.getUserSafe().async();
        this.user = result.data;
      } catch (e) {
        console.warn('getUserSafe', e);
      }
      self.isLoading = false;
    },
    showPhoneModal() {
      if (this.user.User_phone) {
        this.bindMobile.verifyMode = true;
        this.bindMobile.mobile = this.user.User_phone;
        this.bindMobile.title = '安全验证';
      }
      this.bindMobile.visible = true;
    },
    showEmailModal() {
      this.email.visible = true;
    },
    showPasswordModal() {
      this.password.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    async verifyAndBindMobile() {
      const self = this;
      if (self.bindMobile.isVerifing) {
        return;
      }
      self.bindMobile.isVerifing = true;
      try {
        const result = await MFApi.verifyAndBindMobile(
          self.bindMobile.mobile,
          self.bindMobile.code,
          self.bindMobile.verifyMode,
        ).async();
        self.bindMobile.isVerifing = false;
        if (result.code === 0) {
          if (!self.bindMobile.verifyMode) {
            self.user.User_phone = self.bindMobile.mobile;
          }
          swal.fire('操作成功', '', 'success');
          if (self.bindMobile.verifyMode) {
            self.bindMobile.verifyMode = false;
            this.bindMobile.title = '绑定手机号';
          }
          return;
        }
        swal.fire('操作失败', result.msg, 'error');
      } catch (e) {
        console.warn('verifyAndBindMobile', e);
        swal.fire('操作失败', '', 'error');
      }
      self.bindMobile.isVerifing = false;
    },
    async sendSmsCode(page) {
      const self = this;
      if (self.bindMobile.isSmsSending) {
        return;
      }
      if (self.bindMobile.remainSeconds) {
        return;
      }
      self.bindMobile.isSmsSending = true;
      try {
        const result = await MFApi.sendBindSms(
          self.bindMobile.mobile,
          self.bindMobile.verifyMode,
        ).async();
        if (result.code === 0) {
          self.startSmsCodeTimer();
          self.bindMobile.isSmsSending = false;
          self.bindMobile.isSmsSendOk = true;
          return;
        }
        self.bindMobile.tips = `:${result.msg}`;
      } catch (e) {
        console.warn('sendBindSms', e);
      }
      self.bindMobile.isSmsSending = false;
      self.bindMobile.isSmsSendOk = false;
    },
    async sendEmailCode(page) {
      const self = this;
      if (!self.email.mobile) {
        swal.fire('请输入邮箱', '', 'warning');
        return;
      }
      if (self.email.isSmsSending) {
        return;
      }
      if (self.email.remainSeconds) {
        return;
      }
      self.email.isSmsSending = true;
      try {
        const result = await MFApi.sendMailCode(
          self.email.mobile,
          self.email.verifyMode,
        ).async();
        if (result.code === 0) {
          self.startEmailCodeTimer();
          self.email.isSmsSending = false;
          self.email.isSmsSendOk = true;
          return;
        }
        self.email.tips = `:${result.msg}`;
      } catch (e) {
        console.warn('sendBindSms', e);
      }
      self.email.isSmsSending = false;
      self.email.isSmsSendOk = false;
    },
    async verifyAndemail() {
      const self = this;
      if (!self.email.code) {
        swal.fire('请输入验证码', '', 'warning');
        return;
      }
      if (!self.email.mobile) {
        swal.fire('请输入邮箱', '', 'warning');
        return;
      }
      if (self.email.isVerifing) {
        return;
      }
      self.email.isVerifing = true;
      try {
        const result = await MFApi.verifyAndBindEmail(
          self.email.mobile,
          self.email.code,
          self.email.verifyMode,
        ).async();
        self.email.isVerifing = false;
        if (result.code === 0) {
          self.user.User_email = self.email.mobile;
          swal.fire('操作成功', '', 'success');
          if (self.email.verifyMode) {
            self.email.verifyMode = false;
            this.email.title = '绑定手机号';
          }
          return;
        }
        swal.fire('操作失败', result.msg, 'error');
      } catch (e) {
        console.warn('verifyAndemail', e);
        swal.fire('操作失败', '', 'error');
      }
      self.email.isVerifing = false;
    },

    startSmsCodeTimer() {
      const self = this;
      self.bindMobile.remainSeconds = 60;
      const timer = setInterval(() => {
        if (self.bindMobile.remainSeconds-- <= 0) {
          self.bindMobile.remainSeconds = 0;
          clearInterval(timer);
        }
      }, 1000);
    },

    startEmailCodeTimer() {
      const self = this;
      self.email.remainSeconds = 60;
      const timer = setInterval(() => {
        if (self.email.remainSeconds-- <= 0) {
          self.email.remainSeconds = 0;
          clearInterval(timer);
        }
      }, 1000);
    },

    async sendUpdatePassword() {
      const self = this;
      if (self.password.new_password.length < 6) {
        swal.fire('密码长度须大于6');
        return;
      }
      if (!self.password.new_password) {
        swal.fire('请填写新密码!');
        return;
      }
      if (self.password.new_password !== self.password.confirm_password) {
        swal.fire('两次密码不一致！');
        return;
      }
      if (self.password.busy) {
        return;
      }
      self.password.busy = true;
      try {
        const result = await MFApi.updatePassword(
          self.password.new_password,
          self.password.confirm_password,
        ).async();
        self.password.busy = false;
        if (result.code === 0) {
          swal.fire('密码修改成功', '', 'success');
          return;
        }
        swal.fire('操作失败', result.msg, 'error');
      } catch (e) {
        console.warn('updatePassword', e);
        swal.fire('操作失败', '', 'error');
      }
      self.password.busy = false;
    },
  },
};

export default vueSettings;
