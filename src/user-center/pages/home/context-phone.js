import swal from 'sweetalert2';
import MFApi from '../../js/user-center/MFApi';

const vueSettings = {
  data() {
    return {
      bindMobile: {
        mobile: '',
        isSmsSending: false,
        isSmsSendOk: true,
        isVerifing: false,
        code: '',
        tips: '',
        remainSeconds: 0,
        password: '',
        verifyMode: false,
      },
    };
  },
  methods: {
    async bindMobileUpdata() {
      const self = this;
      if (self.bindMobile.isVerifing) {
        return;
      }
      self.bindMobile.isVerifing = true;
      try {
        const result = await MFApi.bindMobileUpdata(
          self.bindMobile.mobile,
          self.bindMobile.code,
          self.bindMobile.password,
          self.bindMobile.verifyMode,
        ).async();
        self.bindMobile.isVerifing = false;
        if (result.code === 0) {
          swal.fire('操作成功', '', 'success');
          this.$router.push({
            name: 'home.custom-push',
          });
          if (self.bindMobile.verifyMode) {
            self.bindMobile.verifyMode = false;
          }
          return;
        }
        swal.fire('操作失败', result.msg, 'error');
      } catch (e) {
        console.warn('bindMobileUpdata', e);
        swal.fire('操作失败', '', 'error');
      }
      self.bindMobile.isVerifing = false;
    },
    async sendPhoneCode(page) {
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
        console.warn('sendPhoneSms', e);
      }
      self.bindMobile.isSmsSending = false;
      self.bindMobile.isSmsSendOk = false;
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
    justSkip() {
      this.$router.push({
        name: 'home.ID-safe',
      });
    },
  },
};
export default vueSettings;
