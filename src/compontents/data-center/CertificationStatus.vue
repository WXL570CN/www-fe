<template>
  <div class="certification-status">
    <div class="header">
      <span>企业认证</span>
    </div>
    <div class="content">
      <div class="in-review">
        <div class="review-detail">
          <span class="review-result">正在审核中</span>
          <div class="review-time">
            <span class="time">
              审核日期：
              <span>2020.05.24——2020.05.26</span>
            </span>
          </div>
        </div>
        <div class="btn">
          <a-button style="color:#ffffff;" ghost>
            <span>编辑/修改</span>
          </a-button>
        </div>
      </div>
      <div class="unapprove">
        <div class="review-detail">
          <span class="review-result">审核未通过</span>
          <div class="review-time">
            审核日期：
            <span>2020.05.24——2020.05.26</span>
          </div>
        </div>
        <div class="btn">
          <a-button style="color:#ffffff;" ghost>
            <span>编辑/修改</span>
          </a-button>
        </div>
      </div>
      <div class="approve">
        <div class="review-detail">
          <span class="review-result">审核通过</span>
          <div class="review-time">
            <span class="time">
              审核日期：
              <span>2020.05.24——2020.05.26</span>
            </span>
          </div>
        </div>
        <div class="btn">
          <a-button style="color:#ffffff;" ghost>
            <span>编辑/修改</span>
          </a-button>
          <a-button style="color:#ffffff;" class="search-btn">
            <span>搜索数据</span>
          </a-button>
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
.certification-status {
  width: 960px;
  .header {
    display: flex;
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
  }
  .content {
    min-height: 800px;
    padding: 30px;
    .in-review,
    .approve,
    .unapprove {
      height: 112px;
      background-color: tomato;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #ffffff;
      .review-detail {
        margin-left: 130px;
        width: 500px;
        .review-result {
          letter-spacing: 2px;
          font-size: 16px;
          font-weight: bold;
        }
        .review-time {
          font-size: 12px;
        }
      }
      .btn {
        margin-right: 45px;
        button {
          height: 36px;
          width: 95px;
        }
      }
    }
    .in-review {
      background: url(../../assets/static/images/data-center/bg-blue.png)
        no-repeat;
      margin-bottom: 83px;
    }
    .unapprove {
      background: url(../../assets/static/images/data-center/bg-red.png)
        no-repeat;
      margin-bottom: 54px;
    }
    .approve {
      background: url(../../assets/static/images/data-center/bg-green.png)
        no-repeat;
      .btn .search-btn {
        margin-left: 11px;
        span {
          color: #31c08b;
        }
      }
    }
  }
}
</style>
