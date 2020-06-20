<script>
import '../../css/base.css';
import $ from 'jquery';
import { mapState } from 'vuex';
import store from '../../store';

export default {
  data() {
    return {
      message: 'nav',
      dataCenterItems: [
        {
          url: '#/data-center/add-data',
          title: '添加企业/产品数据',
          img: '',
          id: 'addData',
        },
        {
          url: '#/data-center/company-data',
          title: '企业数据库',
          img: '',
          id: 'businessAccess',
        },
        {
          url: '#/data-center/product-data',
          title: '产品数据库',
          img: '',
          id: 'productAccess',
        },
        {
          url: '#/data-center/approve-data',
          title: '企业认证',
          img: '',
          id: 'approve',
        },
      ],
    };
  },
  computed: {
    ...mapState('appMeta', ['currentPath']),
    dataCenterStyle() {
      return this.getItemsStyle(this.dataCenterItems);
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
      for (const i in items) {
        let url = `url("../assets/static/images/data-center/${items[i].id}.png")`;
        if (currentPath.startsWith(items[i].url)) {
          url = `url("../assets/static/images/data-center/${items[i].id}_click.png")`;
        }
        const style = {
          background: url,
        };
        out.push(style);
      }
      return out;
    },
  },
};
function showActiveButton() {
  $('.data-center ul li a').each(function () {
    if ($(this)[0].href === String(window.location)) {
      $('.data-center ul li')
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
  <div class="data-center">
    <!--数据中心-->
    <ul>
      <li v-for="(v,index) in dataCenterItems" v-bind:key="v.id">
        <a v-bind:href="v.url">
          <i v-bind:style="dataCenterStyle[index]"></i>
          <span>{{v.title}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.data-center {
  width: 220px;
  background: #ffffff;
  display: inline-block;
  margin: 20px 0 0 0;
  vertical-align: top;
  ul {
    padding: 24px 0 24px 0;
    li {
      display: flex;
      align-items: center;
      height: 40px;
      a {
        width: 100%;
        padding: 10px 0;
        text-decoration: none;
        display: flex;
        align-items: center;
        i {
          display: inline-block;
          width: 16px;
          height: 16px;
          margin-left: 32px;
          margin-right: 8px;
        }
      }
      a:hover {
        color: #333;
        text-decoration: none;
      }
    }
  }
}
</style>
