<template>
  <div>
    正在跳转到:
    <a :href="targetUrl">
      {{ targetUrl }}
    </a>
  </div>
</template>

<script>
import Alert from '@src/user-center/utils/Alert';

export default {
  name: 'login',
  props: ['redirectUrl'],
  computed: {
    targetUrl() {
      if (this.redirectUrl) {
        return this.redirectUrl;
      }
      const referrerBeforeLogin = sessionStorage.getItem('referrerBeforeLogin');
      if (referrerBeforeLogin) {
        sessionStorage.removeItem('referrerBeforeLogin');
        return referrerBeforeLogin;
      }
      return document.referrer;
    },
  },
  mounted() {
    Alert.showTips('正在跳转到', this.targetUrl);
    window.location.href = this.targetUrl;
  },
};
</script>

<style scoped>

</style>
