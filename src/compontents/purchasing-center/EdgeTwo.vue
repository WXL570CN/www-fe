<template>
  <div class="main">
    <!-- <img src="assets/static/images/Smooth-edge.png" /> -->
    <div class="weixin"></div>
    <div class="active">
      <div class="title">
        <span>热门信息</span>
      </div>
      <div class="active-list">
        <a-list item-layout="horizontal" :data-source="listData">
          <a-list-item slot="renderItem" slot-scope="item, index">
            <div class="formation">
              <div class="formation-title">{{item.title}}</div>
              <div class="formation-data">
                <span>{{item.place}} · {{item.from}} · {{item.time}}</span>
              </div>
            </div>
          </a-list-item>
        </a-list>
      </div>
    </div>
  </div>
</template>

<script>
const listData = [
  {
    title:
      '酒泉经济技术开发区基础设施及科研孵化园建设项目可行性研究报告编制单位采购项目',
    place: '山东',
    from: '采购报告',
    time: '2020-09-24',
  },
  {
    title: '酒泉经济技术开发区基础设项目可行性研究报告编制单位采购项目',
    place: '山东',
    from: '采购报告',
    time: '2020-09-24',
  },
  {
    title: '酒泉经济技术开发区基础设施及科研',
    place: '山东',
    from: '采购报告',
    time: '2020-09-24',
  },
  {
    title: '酒泉经济技术开发区基础设施及科研孵化园建设项目',
    place: '山东',
    from: '采购报告',
    time: '2020-09-24',
  },
];
export default {
  name: 'name',
  props: {},
  data() {
    return {
      listData,
    };
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
      padding-left: 15px;
      border-bottom: 1px solid #f4f4f4;
      span {
        font-size: 15px;
        display: inline-block;
        height: 50px;
        line-height: 50px;
        font-weight: bold;
        border-bottom: 2px solid #4389ff;
      }
    }
    .active-list ul li {
      border-bottom: 1px solid #f4f4f4;
      display: flex;
      justify-content: flex-start;
      margin: 0 15px;
      .formation {
        padding: 0;
        .formation-title {
          font-size: 13px;
          font-weight: bold;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }
        .formation-data span {
          font-size: 12px;
          color: #bdbdbd;
        }
      }
    }
  }
}
</style>
