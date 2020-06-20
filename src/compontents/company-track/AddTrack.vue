<template>
  <div class="add-track">
    <div class="title">
      <span>添加追踪</span>
    </div>
    <div class="search">
      <form action method="get">
        <input type="text" name="scout" placeholder="点击搜索企业名称" />
        <input type="submit" value="搜索" />
        <!-- <a-icon type="search" style="color: black;size: 20px;" class="icon" /> -->
        <i></i>
      </form>
    </div>
    <div class="result">
      <div class="nameless">
        <span>查询结果如下</span>
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
              <div class="company-name">
                <span>{{item.name}}</span>
              </div>
            </div>
            <a-button class="content-trace" style="color:#BFBFBF;">
              <span>已追踪</span>
            </a-button>
          </a-list-item>
        </a-list>
      </div>
    </div>
  </div>
</template>

<script>
const listData = [
  {
    name: '南阳电子招投标平台',
    isTracked: true,
  },
  {
    name: '南阳电子招投标平台',
    isTracked: true,
  },
  {
    name: '南阳电子招投标平台',
    isTracked: true,
  },
  {
    name: '南阳电子招投标平台',
    isTracked: true,
  },
  {
    name: '南阳电子招投标平台',
    isTracked: true,
  },
  {
    name: '南阳电子招投标平台',
    isTracked: true,
  },
  {
    name: '南阳电子招投标平台',
    isTracked: true,
  },
  {
    name: '南阳电子招投标平台',
    isTracked: true,
  },
  {
    name: '南阳电子招投标平台',
    isTracked: true,
  },
  {
    name: '南阳电子招投标平台',
    isTracked: true,
  },
  {
    name: '南阳电子招投标平台',
    isTracked: true,
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
        pageSize: 6,
      },
    };
  },
  components: {},
  methods: {},
};
</script>

<style lang='scss' scoped>
.add-track {
  width: 580px;
  .title {
    height: 50px;
    line-height: 50px;
    span {
      display: inline-block;
      height: 50px;
      box-sizing: border-box;
      margin-left: 20px;
      border-bottom: 2px solid #4389ff;
    }
  }
  .search {
    height: 48px;
    font-size: 0;
    margin: 16px 0 10px;
    position: relative;
    img,
    input {
      vertical-align: middle;
    }
    input[type="text"] {
      width: 458px;
      height: 40px;
      font-size: 14px;
      border: 1px solid #ccc;
      margin-left: 20px;
      padding: 10px 40px;
      box-sizing: border-box;
    }
    input[type="text"]:focus {
      border: 1px solid #4389ff;
    }
    input[type="submit"] {
      width: 72px;
      height: 40px;
      color: #fff;
      cursor: pointer;
      font-size: 14px;
      border: none;
      background-color: #4389ff;
      margin: 0 10px;
    }
    i {
      width: 22px;
      height: 22px;
      position: absolute;
      top: 10px;
      left: 35px;
      background: url("../../assets/static/images/slicing/search-seek.png")
        no-repeat;
    }
  }
  .result {
    padding: 0 20px;
    .nameless {
      color: #b0b0b0;
      font-size: 12px;
    }
    .company-content {
      background-color: #fff;
      ul {
        padding: 0;
        li {
          box-sizing: border-box;
          height: 67px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #ededed;
          padding: 0;
          .company-logo {
            width: 40px;
            height: 40px;
            border-radius: 2px;
            background-color: #f5a623;
            float: left;
          }
          .company-name {
            margin-left: 50px;
            span {
              letter-spacing: 1px;
              font-size: 13px;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>
