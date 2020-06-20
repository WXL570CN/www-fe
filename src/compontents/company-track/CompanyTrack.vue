<template>
  <div class="module">
    <div class="company-track">
      <span>企业追踪</span>
      <div class="add-company">
        <a-icon type="plus-square" style="color:#4B8EFE;font-size:18px;" />
        <span>添加追踪企业</span>
      </div>
    </div>
    <div class="company-content">
      <a-list
        item-layout="vertical"
        size="large"
        :pagination="pagination"
        :data-source="listData"
        class="ant-list-items"
      >
        <a-list-item slot="renderItem" key="item.title" slot-scope="item">
          <div class="company">
            <div class="company-logo"></div>
            <div class="company-message">
              <span class="company-name">{{item.name}}</span>
              <div class="state">
                <span class="track-time">
                  追踪时间：
                  <span>{{item.trackTime}}</span>
                </span>
                <span class="update-time">
                  最后更新于：
                  <span>{{item.updateTime}}</span>
                </span>
              </div>
            </div>
          </div>
          <a-button class="content-trace" style="color:#BFBFBF;">
            <span>已追踪</span>
          </a-button>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

$('.content-trace').mouseenter(() => {
  $(this)
    .children('span')
    .text('取消追踪');
});
const listData = [
  {
    name: '南阳电子招投标平台',
    trackTime: '2020.09.24',
    updateTime: '2020.04.09',
    isTracked: true,
    haveUpdated: true,
  },
  {
    name: '南阳电子招投标平台',
    trackTime: '2020.09.24',
    updateTime: '2020.04.09',
    isTracked: true,
    haveUpdated: true,
  },
  {
    name: '南阳电子招投标平台',
    trackTime: '2020.09.24',
    updateTime: '2020.04.09',
    isTracked: true,
    haveUpdated: true,
  },
  {
    name: '南阳电子招投标平台',
    trackTime: '2020.09.24',
    updateTime: '2020.04.09',
    isTracked: true,
    haveUpdated: true,
  },
  {
    name: '南阳电子招投标平台',
    trackTime: '2020.09.24',
    updateTime: '2020.04.09',
    isTracked: true,
    haveUpdated: true,
  },
  {
    name: '南阳电子招投标平台',
    trackTime: '2020.09.24',
    updateTime: '2020.04.09',
    isTracked: true,
    haveUpdated: true,
  },
  {
    name: '南阳电子招投标平台',
    trackTime: '2020.09.24',
    updateTime: '2020.04.09',
    isTracked: true,
    haveUpdated: true,
  },
  {
    name: '南阳电子招投标平台',
    trackTime: '2020.09.24',
    updateTime: '2020.04.09',
    isTracked: true,
    haveUpdated: true,
  },
  {
    name: '南阳电子招投标平台',
    trackTime: '2020.09.24',
    updateTime: '2020.04.09',
    isTracked: true,
    haveUpdated: true,
  },
  {
    name: '南阳电子招投标平台',
    trackTime: '2020.09.24',
    updateTime: '2020.04.09',
    isTracked: true,
    haveUpdated: true,
  },
  {
    name: '南阳电子招投标平台',
    trackTime: '2020.09.24',
    updateTime: '2020.04.09',
    isTracked: false,
    haveUpdated: true,
  },
  {
    name: '南阳电子招投标平台',
    trackTime: '2020.09.24',
    updateTime: '2020.04.09',
    isTracked: true,
    haveUpdated: false,
  },
];
export default {
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
  methods: {},
};
</script>

<style scoped lang="scss">
.module {
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

  .company-content {
    background-color: #fff;
    padding: 0 30px;
    ul {
      padding: 0;
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #ededed;
        height: 72px;
        .company-logo {
          width: 40px;
          height: 40px;
          border-radius: 2px;
          background-color: #f5a623;
          float: left;
        }
        .company-message {
          margin-left: 50px;
          width: 500px;
          .company-name {
            letter-spacing: 1px;
            font-size: 13px;
            font-weight: bold;
          }
          .state {
            letter-spacing: 1px;
            font-size: 12px;
            color: #bebebe;
            .update-time {
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
