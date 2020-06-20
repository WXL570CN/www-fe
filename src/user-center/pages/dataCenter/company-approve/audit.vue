<template>
  <div class="audit-main">
    <div class="wasp_title">
      <span>企业认证</span>
    </div>
    <div class="content">
      <div class="case">
        <div
          class="status"
          :class="condition == 3 ? 'typeBlue' : (condition == 1 ? 'typeGreen ' : 'typeRed')"
        >
          <div class="plan">{{condition == 3 ? '正在审核中' : (condition == 1 ? '审核通过' : '审核不通过')}}</div>
          <div>
            <span class="pattern">审核日期：</span>
            <span>{{startTime |formateUnixTime('YYYY-MM-DD')}}</span>
          </div>
          <span class="button" v-on:click="compile">编辑/修改</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./audit.js">
</script>
<style lang="scss" scoped>
.typeBlue {
  background-image: url("../../../assets/static/images/data-center/bg-blue.png");
}
.typeRed {
  background-image: url("../../../assets/static/images/data-center/bg-red.png");
}
.typeGreen {
  background-image: url("../../../assets/static/images/data-center/bg-green.png");
}
.audit-main {
  min-width: 960px;
  display: inline-block;
  margin: 20px 0 0 20px;
}
.wasp_title {
  display: flex;
  align-items: center;
  height: 56px;
  width: 960px;
  background-color: #fff;
  border-bottom: 1px solid #e9eeef;
  span {
    font-size: 16px;
    color: #4389ff;
    margin-left: 32px;
  }
}
.content {
  min-width: 960px;
  height: 800px;
  background-color: #ffffff;
  .case {
    padding: 32px;
    .status {
      height: 112px;
      width: 100%;
      padding: 32px 0;
      position: relative;
      > div {
        margin-left: 132px;
      }
      .plan {
        font-size: 18px;
        color: #ffffff;
        margin-bottom: 4px;
      }
      span {
        font-size: 12px;
        color: #ffffff;
      }
      .button {
        position: absolute;
        right: 40px;
        top: 38px;
        padding: 8px 16px;
        border: 0;
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 1);
        cursor: pointer;
      }
    }
  }
}
</style>
