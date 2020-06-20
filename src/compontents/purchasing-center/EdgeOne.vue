<template>
  <div class="main">
    <!-- <img src="assets/static/images/Smooth-edge.png" /> -->
    <div class="weixin"></div>
    <div class="active">
      <div class="title">
        <span>昨日活跃站点</span>
      </div>
      <div class="active-list">
        <ul>
          <li>
            <div class="heat">1</div>
            <div class="company">
              <div class="active-company">普惠企业平安责任有限公司</div>
              <div class="active-data">
                昨日发布：
                <span>68条</span>
              </div>
            </div>
          </li>
          <li>
            <div class="heat">2</div>
            <div class="company">
              <div class="active-company">普惠企业平安责任有限公司</div>
              <div class="active-data">
                昨日发布：
                <span>68条</span>
              </div>
            </div>
          </li>
          <li>
            <div class="heat">3</div>
            <div class="company">
              <div class="active-company">普惠企业平安责任有限公司</div>
              <div class="active-data">
                昨日发布：
                <span>68条</span>
              </div>
            </div>
          </li>
          <li>
            <div class="heat">4</div>
            <div class="company">
              <div class="active-company">普惠企业平安责任有限公司</div>
              <div class="active-data">
                昨日发布：
                <span>68条</span>
              </div>
            </div>
          </li>
        </ul>
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
.main {
  .weixin {
    height: 210px;
    margin-bottom: 10px;
    background: url("../../assets/static/images/focus-weixin.png") no-repeat;
  }
  .active {
    background-color: #fefefe;
    .title {
      padding-left: 10px;
      border-bottom: 1px solid #f4f4f4;
      span {
        font-size: 15px;
        display: inline-block;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        border-bottom: 2px solid #4389ff;
      }
    }
    .active-list {
      ul {
        list-style: none;
        padding-left: 10px;
        li {
          height: 65px;
          border-bottom: 1px solid #f4f4f4;
          display: flex;
          justify-content: flex-start;
          padding-top: 15px;
          .heat {
            width: 15px;
            height: 15px;
            line-height: 15px;
            text-align: center;
            font-size: 10px;
            background-color: red;
            color: #ffffff;
          }
          .company {
            margin-left: 10px;
            padding: 0;
            .active-company {
              font-size: 14px;
              font-weight: bold;
              line-height: 13px;
              margin-bottom: 5px;
            }
            .active-data {
              font-size: 9px;
              color: #bcbcbc;
              span {
                color: #6fa4fe;
              }
            }
          }
        }
      }
    }
  }
}
</style>
