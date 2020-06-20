<template>
  <!--分页-->
  <div class="blankPage">
    <div>
      <i></i>
      <span>空空如也～</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.blankPage {
  width: 960px;
  min-height: 810px;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #ffffff;
  i {
    margin-top: 240px;
    display: inline-block;
    width: 181px;
    height: 116px;
    background-image: url("../assets/static/images/Group.png");
  }
  > div {
    span {
      position: relative;
      font-size: 12px;
      color: #999999;
      top: 13px;
      right: 126px;
    }
  }
}
</style>
