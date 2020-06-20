<template>
  <div class="search">
    <div class="seek">
      <div class="pattern">
        <div class="advanced">高级搜索</div>
        <div class="bid on">企业中标搜索</div>
      </div>
      <div class="seek_box">
        <!-- <form action="{{ url('enterprises/high-search') }}" method="get"> -->
        <form action>
          <input type="text" name="scout" autocomplete="off" placeholder="点击搜索招标信息" />
          <input type="submit" value="搜索" />
          <i></i>
        </form>
      </div>
      <div class="alternative">
        <ul></ul>
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
.search {
  position: relative;
  height: 160px;
  background: url("../../assets/static/images/acrco/search-bg.png") no-repeat;
  .seek {
    width: 830px;
    height: 88px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    font-size: 0;
    .pattern {
      margin-bottom: 10px;
      div {
        display: inline-block;
        line-height: 20px;
        color: #d2d2d2;
        font-size: 14px;
        position: relative;
        cursor: pointer;
      }
      .advanced {
        margin-right: 30px;
      }
      div.on {
        color: #fff;
      }
      div.on:after {
        content: "";
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-bottom: 5px solid #fff;
        position: absolute;
        bottom: -10px;
        right: 0;
        left: 0;
        margin: auto;
      }
    }
    .seek_box {
      position: relative;
      input[type="text"] {
        width: 670px;
        height: 56px;
        border: none;
        font-size: 16px;
        padding: 18px 56px;
        box-sizing: border-box;
        vertical-align: top;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
      }
      input[type="submit"] {
        width: 160px;
        height: 56px;
        color: #fff;
        background-color: #4389ff;
        border: none;
        font-size: 20px;
        vertical-align: top;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
      }
      i {
        width: 22px;
        height: 22px;
        position: absolute;
        top: 16px;
        left: 26px;
        background: url("../../assets/static/images/slicing/search-seek.png")
          no-repeat;
      }
    }
    .alternative {
      display: none;
      width: 670px;
      background-color: #fff;
      box-shadow: 0 0 8px 0 rgba(142, 143, 154, 0.42);
      position: relative;
      z-index: 100;
      ul {
        max-height: 300px;
        overflow-y: auto;
        li {
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          font-weight: bold;
          padding: 0 10px;
          li:hover {
            background-color: #f9f9f9;
          }
          em {
            color: #333 !important;
            font-weight: normal;
            font-style: normal;
          }
        }
      }
    }
  }
}
</style>
