<template>
  <div class="track-detail">
    <div class="company-detail">
      <div class="company-name">
        <span>滨兴科技股份有限公司</span>
        <a-button type="primary" ghost>查看详情</a-button>
      </div>
      <table>
        <tr>
          <td class="table-head">统一社会信息码</td>
          <td class="table-body">34503530443404561311345431</td>
          <td class="table-head">企业登记注册类型</td>
          <td class="table-body">其他有限责任公司</td>
        </tr>
        <tr>
          <td class="table-head">企业法定代表人</td>
          <td class="table-body">刘国庆</td>
          <td class="table-head">联系电话</td>
          <td class="table-body">1546897854</td>
        </tr>
        <tr>
          <td class="table-head">企业登记注册地址</td>
          <td colspan="3" class="table-body">浙江省啊啊山东高考还顾爱上的感受体会供货商</td>
        </tr>
      </table>
    </div>
    <div class="news">
      <div class="title">
        <div class="bar">
          <span class="success-news-title">
            中标信息（
            <span>899</span>条）
          </span>
          <span class="fail-news-title">
            未中标（
            <span>899</span>条）
          </span>
        </div>
        <a-dropdown>
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            全部时间
            <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">2019年</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2018年</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <a-list
        item-layout="vertical"
        size="large"
        :pagination="pagination"
        :data-source="listData"
        class="ant-list-items"
      >
        <a-list-item slot="renderItem" key="item.title" slot-scope="item">
          <div class="news-title">
            <span>{{item.title}}</span>
          </div>
          <div class="news-time">
            <span>{{item.time}}</span>
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
    time: '2020.09.24',
  },
  {
    title:
      '酒泉经济技术开发区基础设施及科研孵化园建设项目可行性研究报告编制单位采购项目',
    time: '2020.09.24',
  },
  {
    title:
      '酒泉经济技术开发区基础设施及科研孵化园建设项目可行性研究报告编制单位采购项目',
    time: '2020.09.24',
  },
  {
    title:
      '酒泉经济技术开发区基础设施及科研孵化园建设项目可行性研究报告编制单位采购项目',
    time: '2020.09.24',
  },
  {
    title:
      '酒泉经济技术开发区基础设施及科研孵化园建设项目可行性研究报告编制单位采购项目',
    time: '2020.09.24',
  },
  {
    title:
      '酒泉经济技术开发区基础设施及科研孵化园建设项目可行性研究报告编制单位采购项目',
    time: '2020.09.24',
  },
  {
    title:
      '酒泉经济技术开发区基础设施及科研孵化园建设项目可行性研究报告编制单位采购项目',
    time: '2020.09.24',
  },
  {
    title:
      '酒泉经济技术开发区基础设施及科研孵化园建设项目可行性研究报告编制单位采购项目',
    time: '2020.09.24',
  },
  {
    title:
      '酒泉经济技术开发区基础设施及科研孵化园建设项目可行性研究报告编制单位采购项目',
    time: '2020.09.24',
  },
  {
    title:
      '酒泉经济技术开发区基础设施及科研孵化园建设项目可行性研究报告编制单位采购项目',
    time: '2020.09.24',
  },
  {
    title:
      '酒泉经济技术开发区基础设施及科研孵化园建设项目可行性研究报告编制单位采购项目',
    time: '2020.09.24',
  },
  {
    title:
      '酒泉经济技术开发区基础设施及科研孵化园建设项目可行性研究报告编制单位采购项目',
    time: '2020.09.24',
  },
  {
    title:
      '酒泉经济技术开发区基础设施及科研孵化园建设项目可行性研究报告编制单位采购项目',
    time: '2020.09.24',
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
        pageSize: 11,
      },
    };
  },
  components: {},
};
</script>

<style lang='scss' scoped>
.track-detail {
  background-color: #f6f6f6;
  width: 960px;
  .company-detail {
    background-color: #fff;
    padding: 15px 30px 25px 30px;
    margin-bottom: 10px;
    .company-name {
      height: 50px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      span {
        letter-spacing: 2px;
        font-size: 18px;
      }
    }
    table {
      border-right: 1px solid #f1f4f9;
      border-bottom: 1px solid #f1f4f9;
      td {
        border-left: 1px solid #f1f4f9;
        border-top: 1px solid #f1f4f9;
        height: 47px;
        padding-left: 10px;
      }
      .table-head {
        background-color: #f5f9ff;
        width: 139px;
      }
      .table-body {
        width: 309px;
      }
    }
  }
  .news {
    background-color: #fff;
    .title {
      height: 55px;
      border-bottom: 1px solid #f9f9f9;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
      .bar {
        span {
          font-size: 15px;
          font-weight: bold;
        }
        .success-news-title {
          display: inline-block;
          height: 55px;
          line-height: 55px;
          border-bottom: 2px solid #4389ff;
        }
        .fail-news-title {
          margin-left: 20px;
        }
      }
    }
    .ant-list-items ul li {
      box-sizing: border-box;
      margin: 0 30px;
      padding: 0;
      height: 45px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f4f4f4;
      .news-title {
        font-weight: bold;
      }
      .news-time {
        font-size: 15px;
        color: #9e9e9e;
      }
    }
  }
}
</style>
