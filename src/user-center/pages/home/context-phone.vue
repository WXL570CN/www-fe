<template>
    <div class="overall">
      <div>
        <i class="nav"></i>
      </div>
      <div class="center">
        <div class="picture">
          <i class="MFLogo"></i>
          <i class="link"></i>
          <i class="phone"></i>
        </div>
        <div class="info">
          <p>请绑定手机号码</p>
          <a-input  size="large" placeholder="请输入手机号码"  v-bind:disabled="bindMobile.verifyMode" v-model="bindMobile.mobile"></a-input>
        </div>
        <div class="info">
          <p class="code">请输入验证码</p>
          <a-input  size="large" placeholder="请输入验证码" v-model="bindMobile.code"/>
          <a class="sendCode" v-on:click="sendPhoneCode">
            <template v-if="bindMobile.isSmsSending">
              发送中
            </template>
            <template v-else-if="bindMobile.isSmsSendOk">
              {{ bindMobile.remainSeconds ? "发送成功("+bindMobile.remainSeconds+")" : "发送验证码"}}
            </template>
            <template v-else>
              发送失败{{bindMobile.tips}}
            </template>
          </a>
        </div>
        <div class="info">
          <p>请设置密码</p>
          <a-input-password  placeholder="请设置密码" size="large"  v-model="bindMobile.password"/>
        </div>
        <a-button  type="primary" class="present" v-on:click="bindMobileUpdata">绑定手机</a-button>
        <div class="operation">
          <a-radio class="rememberPsd" style="color: #666666;font-size: 12px">记住密码</a-radio>
          <span>不想绑定<a class="color" v-on:click="justSkip">直接跳过</a></span>
        </div>
        <div class="text">为了保护您的账号安全，请绑定您的手机号码，登录即代表你同意<a class="color">用户协议</a>和<a class="color">隐私政策</a></div>
      </div>
    </div>
</template>

<script src="./context-phone.js">
$('.total').css('background-color', '#ffffff');
</script>
<style scoped lang="scss">
  @import "../../pages/home/personal/modal.css";
  .overall{
    height: 100%;
    width: 100%;
    background-color: #FFFFFF !important;
    .nav{
      width: 100%;
      height: 80px;
      display: inline-block;
      background-image: url("../../assets/static/images/navLogo.png");
    }
    .center{
      height: 645px;
      padding: 0 calc(50% - 186px);
      margin-top: 40px;
      .picture{
        display: flex;
        align-items: center;
        height: 88px;
        width: 380px;
        margin-bottom: 32px;
        i{
          display: inline-block;
          margin-right: 18px;
        }
        .MFLogo{
          height: 88px;
          width: 88px;
          background-image: url("../../assets/static/images/verify/MFLogo.png");
        }
        .link{
          height: 44px;
          width: 169px;
          background-image: url("../../assets/static/images/verify/link.png");
        }
        .phone{
          height: 88px;
          width: 88px;
          background-image: url("../../assets/static/images/verify/phone.png");
        }
      }
      .info{
        margin-bottom: 16px;
      }
      .present{
        margin: 12px 0 16px 0;
      }
      .operation{
        display: flex;
        >span{
          margin-left: auto;
          font-size: 12px;
          color: #666666;
        }
      }
      .color{
        color: #4389FF;
      }
      .text{
        color: #5771A0;
        margin-top: 37px;
      }
    }
  }
</style>
