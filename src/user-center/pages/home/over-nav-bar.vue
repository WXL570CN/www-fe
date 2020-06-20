<script>
import Swal from 'sweetalert2';
import { appEnv } from '@src/user-center/MFConfig';
import { isLogin } from '@src/user-center/js/auth';
import imgUrlMFlogo from '../../assets/static/images/slicing/MFlogo.png';
import MFApi from '../../js/user-center/MFApi';

export default {
  data() {
    return {
      imgUrlMFlogo,
      appEnv,
    };
  },
  computed: {
    isProduction() {
      return this.appEnv === 'production';
    },
  },
  methods: {
    showDev() {
      Swal.fire('开发中，敬请期待', '', 'info');
    },
    async redirectPage() {
      if (!isLogin()) {
        $('.login').click();
        return false;
      }
      try {
        const result = await MFApi.getStatus().async();
        const value = result.data.status;
        // if (value != 1) {
        //   this.$router.push({
        //     path: '/data-guide',
        //   });
        // } else {
        this.$router.push({
          path: '/data-center',
        });
        // }
      } catch (e) {
        console.warn('getGraphData', e);
      }
    },
  },
};
</script>

<template>
  <div class="overNav">
    <img v-bind:src="imgUrlMFlogo" alt="MFlogo" />
    <ul>
      <!--      <li>首页</li>-->
      <a href="#/home/custom-push">
        <li class="color-style">会员中心</li>
      </a>
      <a href="/bbs/user/home">
        <li>个人主页</li>
      </a>
      <a v-on:click="redirectPage">
        <li>数据中心</li>
      </a>
      <li v-if="isProduction" v-on:click="showDev">数据中心</li>
      <li v-else v-on:click="showDev">积分商城</li>
    </ul>
  </div>
</template>
