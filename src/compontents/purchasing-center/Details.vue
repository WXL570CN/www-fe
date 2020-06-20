<template>
  <div>
    <Header></Header>
    <SearchTwo></SearchTwo>
    <div class="content">
      <div class="crumbs">
        <a href="#">首页</a>
        <span>></span>
        <span>采购中心</span>
        <span>></span>
        <span>滨兴科技股份有限公司</span>
      </div>
      <div class="company-detail">
        <CompanyDetail></CompanyDetail>
      </div>

      <div class="nameless">
        <div class="post-message">
          <DeliverInformation></DeliverInformation>
        </div>
        <div class="edge">
          <EdgeTwo></EdgeTwo>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../public/Header';
import SearchTwo from './SearchTwo';
import Footer from '../public/Footer.vue';
import CompanyDetail from './CompanyDetail';
import DeliverInformation from './DeliverInformation';
import EdgeTwo from './EdgeTwo';

export default {
  name: 'name',
  props: {},
  data() {
    return {};
  },
  components: {
    Header,
    SearchTwo,
    Footer,
    CompanyDetail,
    DeliverInformation,
    EdgeTwo,
  },
};
</script>

<style lang='scss' scoped>
.content {
  background-color: #f0f1f5;
  padding-bottom: 10px;
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
  .company-detail {
    width: 1200px;
    margin: 0 auto 10px auto;
  }
  .nameless {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    .post-message {
      width: 890px;
    }
  }
  .edge {
    margin-left: 10px;
    width: 310px;
    height: 600px;
  }
}
</style>
