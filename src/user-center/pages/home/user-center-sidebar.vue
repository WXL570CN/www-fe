<script>
import '../../css/base.css';
import $ from 'jquery';
import { mapState } from 'vuex';
import store from '../../store';
import MFConfig from '../../MFConfig';

export default {
  data() {
    return {
      message: 'nav',
      userCenterItems: [
        {
          url: '#/home/custom-push',
          title: '我的定制',
          img: '',
          id: 'myOrder',
        },
        {
          url: '#/home/my-focus',
          title: '我的关注',
          img: '',
          id: 'myFocus',
        },
        {
          url: '#/home/my-collect',
          title: '我的收藏',
          img: '',
          id: 'myCollect',
        },
        {
          url: '#/home/foot-print',
          title: '我的足迹',
          img: '',
          id: 'myTrack',
        },
        {
          url: '#/home/tender',
          title: '发布招标&采购',
          img: '',
          id: 'publish_tender',
        },
        {
          url: '#/home/company-track',
          title: '企业追踪',
          id: 'companies_track',
        },
        {
          url: '#/home/developing',
          title: '我的优惠卷',
          id: 'myCard',
        },
      ],
      accountItems: [
        {
          url: '#/home/info',
          title: '个人资料',
          id: 'personal-data',
        },
        {
          url: '#/home/ID-safe',
          title: '账号安全',
          id: 'user-safe',
        },
        {
          url: '#/home/approve',
          title: '马蜂号认证',
          id: 'wasp_approve',
        },
      ],
    };
  },
  computed: {
    ...mapState('appMeta', ['currentPath']),

    userCenterStyle() {
      return this.getItemsStyle(this.userCenterItems);
    },

    accountStyle() {
      return this.getItemsStyle(this.accountItems);
    },
  },
  mounted() {
    showActiveButton();
    store.watch(
      (state) => state.appMeta.currentPath,
      (value) => {
        showActiveButton();
      },
    );
  },
  methods: {
    getItemsStyle(items) {
      const out = [];
      const currentPath = `#${this.currentPath}`;
      const urlPrefix = `${MFConfig.publicPath}assets/static/images/personal-center/`;
      // eslint-disable-next-line no-restricted-syntax
      for (const item of items) {
        const suffix = currentPath.startsWith(item.url) ? '_click.png' : '.png';
        const url = `${urlPrefix}${item.id}${suffix}`;
        const style = {
          background: `url("${url}")`,
        };
        out.push(style);
      }
      return out;
    },
  },
};

function showActiveButton() {
  $('.module_left ul li a').each(function () {
    if ($(this)[0].href === String(window.location)) {
      $('.module_left ul li')
        .parents()
        .find('li')
        .removeClass('active');
      $(this)
        .parent()
        .addClass('active');
    }
  });
}
</script>

<template>
  <div class="import">
    <div class="module_left">
      <!--个人中心-->
      <div>
        <span>个人中心</span>
        <ul>
          <li v-for="(v,index) in userCenterItems" v-bind:key="v.id">
            <a v-bind:href="v.url">
              <i v-bind:style="userCenterStyle[index]"></i>
              <span>{{v.title}}</span>
            </a>
          </li>
        </ul>
      </div>
      <!--我的中心-->
      <div>
        <span>账户设置</span>
        <ul>
          <li v-for="(v,index) in accountItems" v-bind:key="v.id">
            <a v-bind:href="v.url">
              <i v-bind:style="accountStyle[index]"></i>
              <span>{{v.title}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.module_left li a:hover {
  color: #333;
  text-decoration: none;
}
.module_left li a {
  width: 100%;
  padding: 10px 0;
  text-decoration: none;
  display: flex;
  align-items: center;
}
</style>
