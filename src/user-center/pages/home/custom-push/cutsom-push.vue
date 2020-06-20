<script>
import userSummary from '../user-summary.vue';
import subTitle from '../sub-title.vue';
import init from '../../../js/personal-center';

export default {
  data() {
    return {
      message: 'custom push',
    };
  },
  components: {
    userSummary,
    subTitle,
  },
  mounted() {
    init();
  },
};
</script>

<template>
  <div class="module_right">
    <!--头像资料信息-->
    <userSummary></userSummary>
<!--    头像栏-->
    <div class="right-center">
      <ul id="nav-bar">
        <li content="myOrder">
          <span>我的定制</span>
        </li>
      </ul>
      <div class="addItem">
        <i class="add"></i>
        <span>添加定制信息</span>
      </div>
    </div>
    <div class="right-bottom state" id="myOrder">
      <ul class="order_entries">
      </ul>
    </div>
<!--    空白页样式-->
    <div class="space">
      <i></i>
      <div class="state">
        <p>您还未添加任何定制信息</p>
        <div>实时为您推送，自主定制关键词、推送时间以及信息区域，让您获取信息更加方便简单！</div>
        <input type="button" value="开始定制" class="addItem">
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .right-center{
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 32px;
    .addItem{
      display: flex;
      align-items: center;
      margin-left: auto;
      cursor: pointer;
      i{
        display: inline-block;
        height: 14px;
        width: 14px;
        background: url("../../../assets/static/images/personal-center/add_boder.png") no-repeat;
        margin-right: 5px;
      }
      span{
        font-size: 12px;
        color: #666;
      }
    }
  }
  .space{
    display: flex;
    align-items: center;
    height: 600px;
    width: 960px;
    background-color: #FFFFFF;
    padding: 0 176px 172px 176px;
    i{
      display: inline-block;
      width: 264px;
      height: 132px;
      background-image: url("../../../assets/static/images/personal-center/space.png");
    }
    .state{
      margin-left: 40px;
      p{
        font-size: 16px;
        margin-bottom: 12px;
      }
      div{
        font-size: 12px;
        color: #999999;
        margin-bottom: 12px;
      }
      input{
        padding: 8px 24px;
        font-size: 12px;
        color: #666666;
        border: 1px solid #CCCCCC;
        border-radius: 0;
        background-color: #FFFFFF;
      }
    }

  }
</style>
