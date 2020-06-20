<template>
  <div class="module_right">
    <!-- 标题栏-->
    <subTitle title="账户安全"></subTitle>
    <div class="right-content">
      <div class="describe">
        <span>账户设置</span>
        <div>绑定手机和邮箱，并设置密码，帐号更安全。若有其他问题敬请咨询
          <b>
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=3036029038&amp;site=qq&amp;menu=yes">
            马蜂盯标客服QQ,
            </a>
            电话:0571-28951270</b>
        </div>
        <div>注意：为保证帐号安全，需进行二次验证。</div>
      </div>
      <ul>
        <li>
          <span class="name">手机</span>
          <span class="state">
            {{ user.User_phone ? user.User_phone : "未设置"}}
          </span>
          <span class="edit" @click="showPhoneModal">编辑</span>


          <!--          绑定手机号-->
          <a-modal v-bind:title="bindMobile.title" v-model="bindMobile.visible" @ok="handleOk" width="420px" :footer="null">
            <div class="info">
              <p v-if="bindMobile.verifyMode">发送到验证码到安全手机</p>
              <p v-else>请输入手机号码</p>
              <a-input v-bind:disabled="bindMobile.verifyMode" v-model="bindMobile.mobile" size="large" placeholder="请输入手机号码" />
            </div>
            <div class="info">
              <p class="code">请输入验证码</p>
              <a-input v-model="bindMobile.code" size="large" placeholder="请输入验证码"/>
              <a class="sendCode" v-on:click="sendSmsCode">
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
            <a-button v-on:click="verifyAndBindMobile" type="primary" class="present">
              <p v-if="bindMobile.verifyMode">
                提交验证
              </p>
              <p v-else>
                提交绑定
              </p>
            </a-button>
          </a-modal>


<!--          身份验证-->
          <a-modal title="身份验证" v-model="visible" @ok="handleOk" width="420px" :footer="null" id="status">
            <div class="text">
              <div>注：</div>
              <div>为了保护您的账号安全，请验证身份，验证成功后进行下一步</div>
            </div>
            <div class="info">
              <p class="code note">使用手机{{1310123456}}验证</p>
              <a-input size="large" placeholder=""/><a class="sendCode">发送验证码</a>
            </div>
            <a-button type="primary" class="present">提交验证</a-button>
          </a-modal>

          <!--          绑定邮箱-->
          <a-modal v-bind:title="email.title" v-model="email.visible" @ok="handleOk" width="420px" :footer="null">
            <div class="info">
              <p v-if="email.verifyMode">发送到验证码到邮箱</p>
              <p v-else>请输入邮箱</p>
              <a-input v-bind:disabled="email.verifyMode" v-model="email.mobile" size="large" placeholder="请输入邮箱" />
            </div>
            <div class="info">
              <p class="code">请输入验证码</p>
              <a-input v-model="email.code" size="large" placeholder=""/>
              <a class="sendCode" v-on:click="sendEmailCode">
                <template v-if="email.isSmsSending">
                  发送中
                </template>
                <template v-else-if="email.isSmsSendOk">
                  {{ email.remainSeconds ? "发送成功("+email.remainSeconds+")" : "发送验证码"}}
                </template>
                <template v-else>
                  发送失败{{email.tips}}
                </template>
              </a>
            </div>
            <a-button v-on:click="verifyAndemail" type="primary" class="present">
              <p v-if="email.verifyMode">
                提交验证
              </p>
              <p v-else>
                提交绑定
              </p>
            </a-button>
          </a-modal>

<!--          更改手机号-->
          <a-modal title="更改手机号" v-model="changeMobile.visible" @ok="handleOk" width="420px" :footer="null">
            <div class="info">
              <p>请输入原手机号码</p>
              <a-input size="large" placeholder="请输入原手机号码" />
            </div>
            <div class="info">
              <p class="info-sure">请输入新手机号码</p>
              <a-input size="large" placeholder="请输入新手机号码" />
            </div>
            <div class="info">
              <p class="code">请输入验证码</p>
              <a-input size="large" placeholder=""/><a class="sendCode">发送验证码</a>
            </div>
            <a-button type="primary" class="present">提交</a-button>
          </a-modal>
        </li>

        <li>
          <span class="name">邮箱</span>
          <span class="state">
            {{ user.User_email ? user.User_email : "未设置"}}
          </span>
          <span class="edit" @click="showEmailModal">编辑</span>

          <!--          绑定邮箱-->
          <a-modal title="绑定邮箱" v-model="email.visible2" @ok="handleOk" width="420px" :footer="null">
            <div class="info">
              <p>请输入邮箱</p>
              <a-input size="large" placeholder="请输入邮箱" />
            </div>
            <div class="info">
              <p class="code">请输入验证码</p>
              <a-input size="large" placeholder=""/><a class="sendCode">发送验证码</a>
            </div>
            <a-button type="primary" class="present">提交绑定</a-button>
          </a-modal>
        </li>
        <li>
          <span class="name">密码</span>
          <span class="state">
            {{ user.User_phone ? '******' : ""}}
          </span>
          <span v-if="user.User_phone" class="edit" @click="showPasswordModal">编辑</span>
          <span v-else>请先绑定手机</span>
          <a-modal title="设置密码" v-model="password.visible" @ok="handleOk" width="420px" :footer="null">
            <div class="info">
              <p>请输入密码</p>
              <a-input-password v-model="password.new_password" placeholder="请输入密码" size="large"/>
            </div>
            <div class="info">
              <p class="info-sure">请再次输入密码</p>
              <a-input-password v-model="password.confirm_password" placeholder="请再次输入密码" size="large"/>
            </div>
            <a-button v-on:click="sendUpdatePassword" type="primary" class="present">提交密码</a-button>
          </a-modal>
        </li>
        <li>
          <span>绑定第三方</span>
          <a class="boundWechat">
            <i></i>
            <span>
              {{ user.User_wechatOpenId ? "已绑定微信" : "绑定微信"}}
            </span>
          </a>
        </li>
        <li>
          <span class="name">最后登陆</span>
          <span class="IP">
            {{ user.User_loginTime | formateUnixTime("YYYY-MM-DD") }}
          </span>
<!--          <span class="IP">89.12.123.45.23.234</span>-->
        </li>
      </ul>
    </div>
  </div>
</template>
<script src="./ID-safety-controller.js">
</script>

<style scoped lang="scss">
  @import "modal.css";
  .module_right{
    margin-top: 10px;
    .right-content {
      width: 960px;
      display: inline-block;
      background-color: #FFF;
      height: 741px;
      padding: 20px 30px 0 30px;
      .describe{
        width: 100%;
        height: 90px;
        background-color: #F9FAFD;
        padding: 16px 0 16px 20px;
        span{
          color: #4389FF;
          line-height:20px;
        }
        >div{
          font-size: 12px;
          color: #666;
          line-height:17px;
          margin-top: 4px;
          b{
            color: #4389FF;
            font-weight: 400;
          }
        }
      }
      ul {
        li {
          display: flex;
          align-items: center;
          height: 68px;
          width: 100%;
          padding: 24px 32px 24px 20px;
          border-bottom: 1px solid #E9EEEF;
          > div{
            display: flex;
            align-items: center;
            span {
              color: #333;
              font-size: 12px;
            }
          }
          .name {
            flex: 1;
            color: #333;
          }

          .state {
            flex: 3.1;
            color: #999;
            font-size: 12px;
          }

          .edit {
            cursor: pointer;
            flex: 2;
            color: #4389FF;
            font-size: 12px;
            text-align: right;
          }

          .IP {
            font-size: 12px;
            text-align: right;
            flex: 2;
            color: #999;
          }
          a{
            display: flex;
            align-items: center;
          }
          .boundWechat {
            cursor: pointer;
            margin-left: 59px;
            i {
              margin-right: 4px;
              display: inline-block;
              height: 22px;
              width: 22px;
              background-image: url(../../../assets/static/images/personal-center/weChat.png);
            }
          }
          .boundQQ {
            cursor: pointer;
            margin-left: 40px;
            i {
              margin-right: 4px;
              display: inline-block;
              height: 22px;
              width: 22px;
              background-image: url(../../../assets/static/images/personal-center/QQ.png);
            }
          }
        }
      }
    }
  }


</style>
