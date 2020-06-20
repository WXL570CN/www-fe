<template>
  <div class="purchasing-center">
    <Header></Header>
    <Search></Search>
    <div class="purchasing-content">
      <div class="crumbs">
        <a href="#">首页</a>
        <span>></span>
        <span>采购中心</span>
        <span>></span>
        <span>采购数据中心</span>
      </div>
      <div class="content">
        <div class="purchasing-total">
          <PurchasingCenterDataTotal></PurchasingCenterDataTotal>
          <PurchasingDataCenter :from="main"></PurchasingDataCenter>
        </div>
        <div class="edge">
          <EdgeOne></EdgeOne>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../public/Header.vue';
import Footer from '../public/Footer.vue';
import Search from './SearchOne.vue';
import PurchasingDataCenter from './PurchasingDataCenter';
import PurchasingCenterDataTotal from './PurchasingCenterDataTotal.vue';
import EdgeOne from './EdgeOne.vue';

export default {
  name: 'name',
  data() {
    return {
      main: '采购数据中心',
    };
  },
  components: {
    Header,
    Footer,
    Search,
    PurchasingCenterDataTotal,
    PurchasingDataCenter,
    EdgeOne,
  },
};
</script>

<style lang='scss' scoped>
.purchasing-center {
  header {
    border-bottom: 1px solid #ececec;
  }
  .purchasing-content {
    padding-bottom: 10px;
    background-color: #f0f1f5;
    .crumbs {
      height: 50px;
      line-height: 50px;
      width: 1200px;
      margin: 0 auto;
      span {
        color: #666;
        margin-left: 2px;
      }
    }
    .content {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .purchasing-total {
        width: 890px;
      }
      .edge {
        margin-left: 10px;
        width: 300px;
        height: 600px;
      }
    }
  }
}
</style>
