<template>
  <div class="main">
    <div class="title">
      <div>{{from}}</div>
      <div>
        <a-dropdown>
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item key="1">北京</a-menu-item>
            <a-menu-item key="2">上海</a-menu-item>
            <a-menu-item key="3">浙江</a-menu-item>
            <a-menu-item key="4">江苏</a-menu-item>
            <a-menu-item key="4">...</a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px">
            所属地区
            <a-icon type="down" />
          </a-button>
        </a-dropdown>
        <a-dropdown>
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item key="1">全部类型</a-menu-item>
            <a-menu-item key="2">采购公告</a-menu-item>
            <a-menu-item key="3">变更通知</a-menu-item>
            <a-menu-item key="4">结果公示</a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px">
            主体类型
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
          <div class="company">
            <div class="company-name">{{item.name}}</div>
            <div class="company-data">
              <span>{{item.type}}</span>
              <div>
                总发布：
                <span>{{item.numTotal}}</span>条
              </div>
              <div>
                昨日发布：
                <span>{{item.numYestoday}}条</span>
              </div>
            </div>
          </div>
          <span @click="followed">
            <a-icon type="star" :class="isNoticed" theme="filled" />&nbsp;&nbsp;关注
          </span>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>


<script>
const listData = [
  {
    name: '普惠企业平安责任有限公司',
    type: '浙江 • 医疗',
    numTotal: 829356,
    numYestoday: 856,
  },
  {
    name: '普惠企业平安责任有限公司',
    type: '浙江 • 医疗',
    numTotal: 829356,
    numYestoday: 856,
  },
  {
    name: '普惠企业平安责任有限公司',
    type: '浙江 • 医疗',
    numTotal: 829356,
    numYestoday: 856,
  },
  {
    name: '普惠企业平安责任有限公司',
    type: '浙江 • 医疗',
    numTotal: 829356,
    numYestoday: 856,
  },
  {
    name: '普惠企业平安责任有限公司',
    type: '浙江 • 医疗',
    numTotal: 829356,
    numYestoday: 856,
  },
  {
    name: '普惠企业平安责任有限公司',
    type: '浙江 • 医疗',
    numTotal: 829356,
    numYestoday: 856,
  },
  {
    name: '普惠企业平安责任有限公司',
    type: '浙江 • 医疗',
    numTotal: 829356,
    numYestoday: 856,
  },
  {
    name: '普惠企业平安责任有限公司',
    type: '浙江 • 医疗',
    numTotal: 829356,
    numYestoday: 856,
  },
  {
    name: '普惠企业平安责任有限公司',
    type: '浙江 • 医疗',
    numTotal: 829356,
    numYestoday: 856,
  },
];
export default {
  name: 'name',
  props: ['from'],
  data() {
    return {
      listData,
      pagination: {
        // onChange: (page) => {
        //   console.info(page);
        // },
        pageSize: 8,
      },
      isNoticed: 'followed',
    };
  },
  methods: {
    followed: () => {
      this.isNoticed = 'no-attetion';
    },
  },
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
        .company {
          width: 345px;
          max-height: 1000px;
          .company-name {
            font-size: 17px;
            font-weight: bold;
            letter-spacing: 1px;
            margin-bottom: 10px;
          }
          .company-data {
            display: flex;
            justify-content: space-between;
            div:nth-child(3) span {
              color: #6fa4fe;
            }
          }
        }
        .followed {
          color: #5191fe;
        }
      }
    }
  }
}
</style>
