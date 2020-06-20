<template>
  <div class="main">
    <div class="title">
      <div>发布信息</div>
      <div>
        <a-dropdown>
          <a-menu slot="overlay">
            <a-menu-item key="1">北京</a-menu-item>
            <a-menu-item key="2">上海</a-menu-item>
            <a-menu-item key="3">浙江</a-menu-item>
            <a-menu-item key="4">江苏</a-menu-item>
            <a-menu-item key="4">...</a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px">
            发布时间
            <a-icon type="down" />
          </a-button>
        </a-dropdown>
        <a-dropdown>
          <a-menu slot="overlay">
            <a-menu-item key="1">全部类型</a-menu-item>
            <a-menu-item key="2">采购公告</a-menu-item>
            <a-menu-item key="3">变更通知</a-menu-item>
            <a-menu-item key="4">结果公示</a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px">
            信息类型
            <a-icon type="down" />
          </a-button>
        </a-dropdown>
      </div>
    </div>
    <div class="content">
      <a-list
        item-layout="vertical"
        size="large"
        :pagination="pagination"
        :data-source="listData"
        class="ant-list-items"
      >
        <a-list-item slot="renderItem" key="item.title" slot-scope="item">
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
    title:
      '酒泉经济技术开发区基础设施及科研孵化园建设项目可行性研究报告编制单位采购项目',
    place: '山东',
    from: '采购报告',
    time: '2020-09-24',
  },
  {
    title:
      '酒泉经济技术开发区基础设施及科研孵化园建设项目可行性研究报告编制单位采购项目',
    place: '山东',
    from: '采购报告',
    time: '2020-09-24',
  },
  {
    title:
      '酒泉经济技术开发区基础设施及科研孵化园建设项目可行性研究报告编制单位采购项目',
    place: '山东',
    from: '采购报告',
    time: '2020-09-24',
  },
  {
    title:
      '酒泉经济技术开发区基础设施及科研孵化园建设项目可行性研究报告编制单位采购项目',
    place: '山东',
    from: '采购报告',
    time: '2020-09-24',
  },
  {
    title:
      '酒泉经济技术开发区基础设施及科研孵化园建设项目可行性研究报告编制单位采购项目',
    place: '山东',
    from: '采购报告',
    time: '2020-09-24',
  },
  {
    title:
      '酒泉经济技术开发区基础设施及科研孵化园建设项目可行性研究报告编制单位采购项目',
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
      pagination: {
        // onChange: (page) => {
        //   console.info(page);
        // },
        pageSize: 8,
      },
    };
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
.main {
  width: 890px;
  padding-bottom: 20px;
  background-color: #fff;
  .title {
    display: flex;
    padding: 0 20px;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    background-color: #fcfcfc;
    div:nth-child(1) {
      font-size: 15px;
      font-weight: bold;
      border-bottom: 2px solid #488cff;
      height: 60px;
      line-height: 60px;
    }
  }
  .content {
    .ant-list-items {
      padding: 0 20px;
      margin: 0;
      background-color: #fefefe;
      li {
        height: 85px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #f4f4f4;
        .formation {
          max-height: 1000px;
          .formation-title {
            font-size: 17px;
            font-weight: bold;
            letter-spacing: 1px;
            margin-bottom: 10px;
          }
          .formation-data span {
            color: #bdbdbd;
          }
        }
      }
    }
  }
}
</style>
