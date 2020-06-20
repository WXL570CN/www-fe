<template>
  <div class="main">
    <div class="search">
      <form action="purchases/search" method="get">
        <img src="assets/static/images/logo/logo-search.png" />
        <input type="text" name="scout" placeholder="请输入采购商名称" />
        <input type="submit" value="查一下" />
        <i></i>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.main {
  width: 1200px;
  margin: 0 auto;
  .search {
    height: 48px;
    font-size: 0;
    margin: 30px 0 40px;
    position: relative;
    img,
    input {
      vertical-align: middle;
    }
    input[type="text"] {
      width: 642px;
      height: 48px;
      font-size: 14px;
      border: 2px solid #ccc;
      border-right: none;
      margin-left: 25px;
      padding: 14px 40px;
      box-sizing: border-box;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    input[type="text"]:focus {
      border: 2px solid #4389ff;
      border-right: none;
    }
    input[type="submit"] {
      width: 124px;
      height: 48px;
      color: #fff;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      border: none;
      background-color: #4389ff;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    i {
      width: 22px;
      height: 22px;
      position: absolute;
      top: 16px;
      left: 170px;
      background: url("../../assets/static/images/slicing/search-seek.png")
        no-repeat;
    }
  }
}
</style>
