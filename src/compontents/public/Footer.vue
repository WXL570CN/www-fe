<template>
  <footer class="footer">
    <div class="else">
      <div class="left">
        <p>2019</p>
        <p>蚂蜂盯标「全新上线」</p>
        <a href="#">
          了解我们
          <i></i>
        </a>
      </div>
      <div class="right">
        <div class="contact">
          <div class="title">QQ联系方式</div>
          <div class="num">
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3036029038&site=qq&menu=yes">
              <i class="qq"></i>马蜂盯标客服
            </a>
          </div>
          <div class="title">热线电话</div>
          <div class="num">
            <i class="phone"></i>0571-28951270
          </div>
        </div>
        <div class="QR_code">
          <div class="app">
            <p>APP二维码</p>
            <img src="assets/static/images/logo/app-code.png" />
          </div>
          <div class="weChat">
            <p>微信二维码</p>
            <img src="assets/static/images/logo/WeChat-code.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div class="records">
      <div>备案号：浙ICP备18056008号</div>
      <div>
        <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010802009621"
        >
          <img src="assets/static/images/slicing/public-filing.png" />
          浙公网安备?33010802009621号
        </a>
      </div>
    </div>
  </footer>
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
/**
 * 页尾
 */
.footer {
  background: #fff;
  min-width: 1200px;
}

.footer .else {
  width: 1200px;
  height: 300px;
  margin: 0 auto;
}

.footer .else .left {
  float: left;
  margin-top: 70px;
}

.footer .else .left p {
  font-size: 30px;
  font-weight: bold;
  margin: 10px 0;
}

.footer .else .left a {
  display: inline-block;
  font-size: 20px;
  color: #333;
  margin-top: 20px;
}

.footer .else .left a i {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url("../../assets/static/images/slicing/index-more.png") no-repeat;
  vertical-align: middle;
  margin-left: 8px;
}

.footer .else .right {
  float: right;
  margin-top: 70px;
}

.footer .else .right .contact {
  display: inline-block;
  vertical-align: top;
  margin-right: 110px;
}

.footer .else .right .contact .title {
  font-size: 18px;
  font-weight: bold;
}

.footer .else .right .contact .num {
  width: 150px;
  height: 32px;
  line-height: 32px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 16px;
  color: #666;
  margin-bottom: 20px;
}

.footer .else .right .contact .num i {
  display: inline-block;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 8px;
  margin-left: 15px;
}

.footer .else .right .contact .num .qq {
  background: url("../../assets/static/images/slicing/index-qq.png") no-repeat;
}

.footer .else .right .contact .num .phone {
  background: url("../../assets/static/images/slicing/index-phone.png")
    no-repeat;
}

.footer .else .right .QR_code {
  display: inline-block;
  vertical-align: top;
  font-size: 0;
}

.footer .else .right .QR_code .app {
  margin-right: 80px;
}

.footer .else .right .QR_code div {
  display: inline-block;
  width: 130px;
}

.footer .else .right .QR_code p {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.footer .else .right .QR_code img {
  width: 130px;
}

.footer .records {
  padding: 10px 0;
  line-height: 25px;
  background: #f0f1f5;
  text-align: center;
  color: #10142a;
  font-size: 12px;
}

.footer .records img {
  margin-right: 5px;
  vertical-align: middle;
}
</style>
