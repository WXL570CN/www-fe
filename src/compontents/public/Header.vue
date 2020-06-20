<template>
  <div class="main">
    <header class="header">
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          杭州
          <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">当前位置：杭州</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">
              <a-icon type="redo" />&nbsp;&nbsp;&nbsp;&nbsp;重新定位
            </a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
      <div class="fun">
        <a href="/" class="link">首页</a>
        <a href="/customs/summary" class="link">招标订阅</a>
        <a href="/purchases/search" class="link">高级搜索</a>
        <a href="/enterprises/search" class="link">查企业</a>
        <a href="#" class="login">登录</a>
        <!--未登入-->
        <div id="header-user-info" class="yet" style="display: none">
          <span>已登录</span>
          <div class="quit">
            <p class="logOff">退出登录</p>
            <a href="#/home/custom-push">
              <p>会员中心</p>
            </a>
          </div>
        </div>
        <span class="more">更多产品</span>
        <div class="listMore">
          <span>更多产品</span>
          <a href="/achievements/search" target="_blank" class="check">
            <i class="performance"></i>
            <p>查业绩</p>
          </a>
          <a href="/staffs/search" target="_blank" class="check">
            <i class="staff"></i>
            <p>查人员</p>
          </a>
          <a href="/qualifications/search" target="_blank" class="check">
            <i class="aptitude"></i>
            <p>查资质</p>
          </a>
          <a href="/credits/search" target="_blank" class="check">
            <i class="integrity"></i>
            <p>查诚信</p>
          </a>
          <a href="/hotwords" target="_blank" class="check">
            <i class="sites"></i>
            <p>风云榜</p>
          </a>
          <a href="/aboutus" target="_blank" class="check">
            <i class="about"></i>
            <p>看我们</p>
          </a>
          <a href="/products" target="_blank" class="allProduct">全部产品>></a>
        </div>
      </div>
      <div class="scan">
        <div>
          <img src />
        </div>
      </div>
    </header>
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

<style lang='css' scoped>
.main {
  border-bottom: 1px solid #ececec;
}
.header {
  height: 36px;
  width: 1200px;
  background: #fff;
  margin: 0 auto;
}
.header iframe {
  position: relative;
  bottom: 2px;
}
.header .logo {
  float: left;
}
.header .fun {
  float: right;
  height: 32px;
}
.header .place {
  float: left;
  height: 32px;
}
.header .fun .link,
.header .fun .login {
  display: inline-block;
  color: #54565a;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  cursor: pointer;
  box-sizing: border-box;
  margin-right: 24px;
  text-decoration: underline;
}
.header .fun .link:hover,
.header .fun .link.on,
.header .fun .login:hover,
.header .fun .login.on {
  color: #0074ff;
}
.header .fun .link:first-child {
  color: #4389ff;
}
.header .fun .login {
  margin-right: 0;
}
.header .fun .yet {
  display: inline-block;
  font-size: 0;
  vertical-align: top;
  position: relative;
}
.header .fun .yet:hover .quit {
  display: inline-block;
}
.header .fun .yet span {
  color: #54565a;
  line-height: 32px;
  font-size: 12px;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: underline;
}
.header .fun .yet .quit {
  display: none;
  width: 84px;
  min-height: 76px;
  font-size: 12px;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
  position: absolute;
  top: 32px;
  left: -20px;
  z-index: 10;
  box-shadow: 0 2px 4px 0 rgba(214, 224, 246, 0.5);
}
.quit p {
  font-size: 12px;
  color: #666666;
  line-height: 28px;
}
.quit p:hover {
  color: #4389ff;
}
.header .fun .more {
  display: inline-block;
  width: 64px;
  height: 24px;
  line-height: 24px;
  margin-left: 24px;
  cursor: pointer;
  color: #fff;
  font-size: 12px;
  text-align: center;
  border-radius: 1px;
  background-color: #0074ff;
}
.header .fun .listMore {
  display: none;
  width: 102px;
  height: 100%;
  padding: 0 11px;
  text-align: center;
  background-color: #f9f9f9;
  border-left: 1px solid #e6e6e6;
  box-shadow: 0 1px 4px 0 rgba(27, 73, 139, 0.21);
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
}
.header .fun .listMore > span {
  display: inline-block;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  border-bottom: 1px solid #eee;
}
.header .fun .listMore .check {
  display: inline-block;
  width: 100%;
  height: 81px;
  font-size: 12px;
  border-bottom: 2px solid #eee;
}
.header .fun .listMore .check i {
  display: inline-block;
  width: 36px;
  height: 36px;
  margin-top: 12px;
}
.header .fun .listMore .check i.staff {
  background: url("../../assets/static/images/slicing/header-staff.png")
    no-repeat;
}
.header .fun .listMore .check i.performance {
  background: url("../../assets/static/images/slicing/header-performance.png")
    no-repeat;
}
.header .fun .listMore .check i.aptitude {
  background: url("../../assets/static/images/slicing/header-aptitude.png")
    no-repeat;
}
.header .fun .listMore .check i.integrity {
  background: url("../../assets/static/images/slicing/header-integrity.png")
    no-repeat;
}
.header .fun .listMore .check i.sites {
  background: url("../../assets/static/images/slicing/header-sites.png")
    no-repeat;
}
.header .fun .listMore .check i.about {
  background: url("../../assets/static/images/slicing/header-about.png")
    no-repeat;
}
.header .fun .listMore .check:hover {
  color: #4389ff;
}
.header .fun .listMore .allProduct {
  display: inline-block;
  margin-top: 16px;
  font-size: 12px;
}
.header .scan {
  display: none;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
}
.header .scan div {
  width: 800px;
  height: 400px;
  background: url("../../assets/static/images/slicing/login.png") no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.header .scan div img {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 80px;
  right: 70px;
}
</style>
