<template>
  <div class="empty-track">
    <div class="company-track">
      <span>企业追踪</span>
      <div class="add-company">
        <a-icon type="plus-square" style="color:#4B8EFE;font-size:18px;" />
        <span>添加追踪企业</span>
      </div>
    </div>
    <!-- <div class="content">
      <div class="empty-img"></div>

    </div>-->
    <div class="blankPage">
      <div>
        <i class="empty-img"></i>
        <div class="tip">
          <span>您还没有添加任何企业，点击下方添加追踪按钮进行搜索添加即可</span>
        </div>
        <div class="btn">
          <a-icon type="plus-square" style="color: #fff;fontSize:18px" />
          <span>添加追踪</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'name',
  props: {},
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang='scss' scoped>
.empty-track {
  width: 960px;
  .company-track {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    background-color: #fff;
    border-bottom: 1px solid #e9eeef;
    padding: 0 30px;
    > span {
      height: 56px;
      line-height: 56px;
      font-size: 16px;
      font-weight: bold;
      border-bottom: 2px solid #4389ff;
    }
    > .add-company > span {
      color: #4b8efe;
    }
  }
  .blankPage {
    width: 960px;
    min-height: 800px;
    display: flex;
    justify-content: center;
    position: relative;
    background-color: #ffffff;
    > div {
      width: 320px;
      height: 510px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      i.empty-img {
        display: inline-block;
        width: 181px;
        height: 116px;
        background: url("../../assets/static/images/Group.png") no-repeat;
      }
      .tip {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        > span {
          text-align: center;
          font-size: 12px;
          color: #a6a6a6;
        }
      }
      .btn {
        width: 107px;
        height: 36px;
        line-height: 36px;
        margin-top: 20px;
        background-color: #4389ff;
        border-radius: 2px;
        text-align: center;
        > span {
          color: #fff;
          font-size: 13px;
        }
      }
    }
  }
}
</style>
