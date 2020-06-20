<template>
  <div>
    <Header></Header>
    <SearchOne></SearchOne>
    <div class="content">
      <div class="crumbs">
        <a href="#">首页</a>
        <span>></span>
        <span>采购中心</span>
        <span>></span>
        <span>滨兴科技股份有限公司</span>
      </div>

      <div class="nameless">
        <div class="search-result">
          <PurchasingDataCenter :from="searchResult"></PurchasingDataCenter>
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
import Header from '../public/Header';
import SearchOne from './SearchOne';
import Footer from '../public/Footer.vue';
import PurchasingDataCenter from './PurchasingDataCenter';
import EdgeOne from './EdgeOne';

export default {
  name: 'name',
  props: {},
  data() {
    return {
      searchResult: '共计为您找到15条搜索结果',
    };
  },
  components: {
    Header,
    SearchOne,
    Footer,
    PurchasingDataCenter,
    EdgeOne,
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
  .nameless {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    .edge {
      margin-left: 10px;
      width: 310px;
      height: 600px;
    }
  }
}
</style>
