<template>
  <div class="module" style="margin-top: 0px">
    <wait></wait>
<!--    <div class="company_track">-->
<!--      <span>企业追踪</span>-->
<!--      <div class="company_search">-->
<!--        <input type="text" value="" placeholder="点击搜索企业名称">-->
<!--        <button type="button">搜索</button>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="company_content">-->
<!--      <ul>-->
<!--        <li>-->
<!--          <div>-->
<!--            <span class="title">南阳电子招投标平台</span>-->
<!--            <div class="state">暂无更新</div>-->
<!--          </div>-->
<!--          <button type="button" class="content_trace" style="margin-left: 270px">已追踪</button>-->
<!--        </li>-->
<!--        <li>-->
<!--          <div>-->
<!--            <span class="title">南阳电子招投标平台</span>-->
<!--            <div class="state">暂无更新</div>-->
<!--          </div>-->
<!--          <button type="button" class="content_trace" style="margin-left: 270px">已追踪</button>-->
<!--        </li>-->
<!--        <li>-->
<!--          <div>-->
<!--            <span class="title">南阳电子招投标平台</span>-->
<!--            <div class="state">暂无更新</div>-->
<!--          </div>-->
<!--          <button type="button" class="content_trace" style="margin-left: 270px">已追踪</button>-->
<!--        </li>-->
<!--        <li>-->
<!--          <div>-->
<!--            <span class="title">南阳电子招投标平台</span>-->
<!--            <div class="state">暂无更新</div>-->
<!--          </div>-->
<!--          <button type="button" class="content_trace" style="margin-left: 270px">已追踪</button>-->
<!--        </li>-->
<!--      </ul>-->
<!--      <div class="trace_btn"><button type="button" class="load_more">加载更多</button></div>-->
<!--    </div>-->
  </div>
</template>

<script>
import wait from '../developing.vue';

export default {
  components: {
    wait,
  },
};
</script>

<style scoped lang="scss">
  .module{
    width: 960px;
    height: 758px;
    display: inline-block;
    /*margin-left: 10px;*/
    margin-top: 10px }
  .module .company_track {
    display: flex;
    align-items: center;
    height: 56px;
    width: 960px;
    background-color: #fff;
    border-bottom: 1px solid #E9EEEF; }
  .module .company_track > span {
    flex: 1;
    font-size: 16px;
    color: #4389ff;
    margin-left: 32px; }
  .module .company_search {
    flex: 1;
    text-align: right;
    margin-right: 32px; }
  .module .company_search > input {
    width: 242px;
    height: 26px;
    background: #fff;
    border-radius: 0;
    border: 1px solid #CCCCCC;
    padding-left: 16px; }
  .module .company_search > button {
    width: 76px;
    height: 28px;
    background: #4389ff;
    border: 0;
    font-size: 14px;
    color: #fff;
    line-height: 17px;
    margin-left: -5px; }
  .module .company_content {
    height: 702px;
    width: 960px;
    background-color: #fff; }
  .module .company_content ul {
    padding-top: 8px;
    height: 90%;
    overflow-y: hidden; }
  .module .company_content ul li {
    width: 896px;
    float: left;
    margin-left: 32px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #EDEDED;
    height: 65px; }
  .module .company_content ul li .title {
    display: inline-block;
    width: 547px;
    font-size: 14px;
    margin-bottom: 4px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden; }
  .module .company_content ul li .state {
    font-size: 12px;
    color: #999999; }
  .module .company_content ul li .content_trace {
    width: 72px;
    height: 24px;
    background: #fff;
    border-radius: 2px;
    border: 1px solid #CCC;
    font-size: 12px;
    color: #999;
    margin-left: 28px; }
  .module .company_content .trace_btn {
    margin-top: 12px; }
  .module .company_content .trace_btn .load_more {
    display: block;
    width: 103px;
    height: 36px;
    background: #fff;
    border-radius: 18px;
    border: 1px solid #4389ff;
    font-size: 14px;
    color: #4389ff;
    margin: 0 auto; }

</style>
