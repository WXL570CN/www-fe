<template>
  <div class="api-mains">
    <div class="top">
      <i></i>
    </div>
    <div class="backdrop">
      <div class="title">马蜂盯标数据共享服务</div>
      <div class="line"></div>
      <p>马蜂盯标是众多政府机构、企事业单位、上市公司、科研机构及大中型公司的大数据支持与信息服务商。是一家专业的互联网大数据信息技术计算、分析运用和系统服务提供商。</p>
      <button type="button" v-on:click="experience()">申请/登录</button>
    </div>
    <div class="information">
      <div style="padding-left:0">
        <i class="icon1"></i>
        <span>覆盖34个省</span>
      </div>
      <div>
        <i class="icon2"></i>
        <span>日更新数据10万+</span>
      </div>
      <div>
        <i class="icon3"></i>
        <span>全行业覆盖</span>
      </div>
      <div style="border-right:none">
        <i class="icon4"></i>
        <span>监控数据源6000+</span>
      </div>
    </div>
    <div class="introduce">
      <div class="slogan1">What can you get</div>
      <div class="slogan2">你能得到什么</div>
      <div class="line" style="background:#4389ff"></div>
      <p>马蜂盯标数据共享服务，是基于马蜂盯标的海量招投标信息数据仓库，向行业门户、行业APP、行业微信公众号、CRM系统等开发商，通过接口免费共享招投标数据，换取马蜂盯标品牌曝光；同时可以有效提高合作方站点的用户的流量及用户粘性，增加站点流量入口。</p>
      <div class="circle">
        <div class="list color1">
          <span>信息免费共享</span>
        </div>
        <div class="list color2">
          <span>海量招投标信息</span>
        </div>
        <div class="list color3">
          <span>全国各行业信息</span>
        </div>
        <div class="list color4">
          <span>数据规划个性定制</span>
        </div>
      </div>
    </div>
    <div class="application">
      <div class="title">
        <h4>应用方向与增值内容</h4>
        <p>你可以将单个行业，或者多个细分行业的招标、中标、变更等招投标信息集成到门户网站内容中，向用户提供招标信息的浏览，搜索等更多内容服务。帮助站点增加内容版块和增加用户粘性。</p>
        <div class="view">
          <ul>
            <li>
              <i class="arrows1"></i>
              <span>行业门户网站</span>
            </li>
            <li>
              <i class="arrows1"></i>
              <span>APP应用</span>
            </li>
            <li class="exception">
              <i class="arrows1"></i>
              <span>微信公众平台</span>
            </li>
            <li>
              <i class="arrows2"></i>
              <span>丰富网站内容</span>
            </li>
            <li>
              <i class="arrows2"></i>
              <span>增强网站功能</span>
            </li>
            <li class="exception">
              <i class="arrows2"></i>
              <span>增强用户增值服务项目</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <i class="content-img"></i>
      </div>
    </div>
    <div class="introduce">
      <div class="slogan1">Personalized mode</div>
      <div class="slogan2">企业个性定制模式</div>
      <div class="line" style="background:#4389ff"></div>
      <div class="pattern">
        <div class="item">
          <i class="keyword"></i>
          <div class="font">1.自定义关键词</div>
          <p>根据行业特性设定多个行业关键词</p>
        </div>
        <div class="item">
          <i class="custom"></i>
          <div class="font">2.自定义信息区域</div>
          <p>按照省份、城市来设置数据规则</p>
        </div>
        <div class="item">
          <i class="individuation"></i>
          <div class="font">3.个性化匹配模式</div>
          <p>按照不同搜索模式来设定所需信息的命中模式</p>
        </div>
        <div class="item">
          <i class="infoType"></i>
          <div class="font">4.更多信息类型</div>
          <p>根据站点需求来设定不同的信息类型需求</p>
        </div>
      </div>
    </div>
    <div class="teamwork">
      <div>
        <p v-on:click="condition()" id="term" class="active">合作条件</p>
        <p v-on:click="process()" id="flow">合作流程</p>
      </div>
      <i v-bind:class="{ make: state1 ,make2: state2}"></i>
      <i v-bind:class="{ toggle: state1 ,toggle2: state2}"></i>
    </div>
    <div class="introduce clear">
      <div class="slogan1">Service advantages</div>
      <div class="slogan2">服务优势</div>
      <div class="line" style="background:#4389ff"></div>
      <div>
        <i class="flowSheet"></i>
      </div>
    </div>
    <div class="foot">
      <div class="file">备案号：浙ICP备18056008号</div>
      <div>浙公网安备 33010802009621号</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.active {
  background-color: #ffffff;
  color: #2b5ddf !important;
}
.line {
  text-align: center;
  width: 32px;
  height: 3px;
  background: rgba(194, 202, 239, 1);
  border-radius: 2px;
  margin-top: 16px;
  display: inline-block;
}
.api-mains {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  .top {
    width: 100%;
    height: 68px;
    padding: 15px calc(50% - 604px);
    i {
      display: inline-block;
      width: 132px;
      height: 39px;
      background: url("../../assets/static/images/api/api-icon.png");
    }
  }
  .backdrop {
    width: 100%;
    height: 480px;
    background-image: url("../../assets/static/images/api/dabanner.png");
    padding: 127px calc(50% - 604px);
    .title {
      height: 47px;
      font-size: 34px;
      font-family: AlibabaPuHuiTiM;
      color: rgba(255, 255, 255, 1);
      line-height: 47px;
    }
    p {
      width: 493px;
      font-size: 14px;
      color: rgba(255, 255, 255, 1);
      line-height: 24px;
      white-space: wrap; /*换行*/
      margin-top: 16px;
    }
    button {
      width: 140px;
      height: 40px;
      background: rgba(255, 40, 178, 1);
      border-radius: 4px;
      color: #ffffff;
      line-height: 20px;
      border: 0;
      margin-top: 32px;
    }
  }
  .information {
    width: 100%;
    height: 80px;
    min-width: 1400px;
    background: rgba(247, 247, 247, 1);
    padding: 0 0 0 calc(50% - 604px);
    display: flex;
    align-items: center;
    div {
      padding: 28px 100px 28px 120px;
      display: flex;
      align-items: center;
      border-right: 1px solid #d8d8d8;
      i {
        display: inline-block;
        margin-right: 6px;
      }
      .icon1 {
        height: 22.5px;
        min-width: 22.5px;
        background-image: url("../../assets/static/images/api/icon1.png");
      }
      .icon2 {
        height: 24px;
        min-width: 24px;
        background-image: url("../../assets/static/images/api/icon2.png");
      }
      .icon3 {
        height: 19.5px;
        min-width: 24px;
        background-image: url("../../assets/static/images/api/icon3.png");
      }
      .icon4 {
        height: 24px;
        min-width: 24px;
        background-image: url("../../assets/static/images/api/icon4.png");
      }
    }
  }
  .introduce {
    height: 420px;
    width: 100%;
    text-align: center;
    .slogan1 {
      margin-top: 70px;
      font-size: 12px;
      color: #cacaca;
    }
    .slogan2 {
      font-size: 24px;
      color: #000;
      line-height: 33px;
      margin-top: 5px;
    }
    > p {
      padding: 0 calc(50%-604px);
      margin: 0 50px;
      font-size: 14px;
      font-family: AlibabaPuHuiTiR;
      color: rgba(49, 60, 86, 1);
      line-height: 24px;
      margin-top: 28px;
    }
    .circle {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      .list {
        border-radius: 50%;
        width: 85px;
        height: 85px;
        margin-right: 100px;
        span {
          margin: 22px 12px 0 12px;
          display: inline-block;
        }
      }
      .color1 {
        border: 1px solid #2dbc93;
        span {
          color: #2dbc93;
        }
      }
      .color2 {
        border: 1px solid #2e67e2;
        span {
          color: #2e67e2;
        }
      }
      .color3 {
        border: 1px solid #ff5c8a;
        span {
          color: #ff5c8a;
        }
      }
      .color4 {
        border: 1px solid #f7872e;
        span {
          color: #f7872e;
        }
      }
    }
  }
  .clear {
    height: auto;
  }
  .application {
    width: 100%;
    height: 360px;
    background: rgba(247, 247, 247, 1);
    padding: 0 calc(50% - 604px);
    display: flex;
    > div {
      flex: 1;
      .content-img {
        display: inline-block;
        background-image: url("../../assets/static/images/api/brain.png");
        width: 600px;
        height: 360px;
      }
    }
    .title {
      padding: 52px 0;
      h4 {
        height: 25px;
        font-size: 18px;
        font-family: AlibabaPuHuiTiR;
        color: rgba(0, 0, 0, 1);
        line-height: 25px;
      }
      p {
        width: 538px;
        font-size: 14px;
        font-family: AlibabaPuHuiTiR;
        color: rgba(49, 60, 86, 1);
        line-height: 24px;
        margin-top: 20px;
      }
      .view {
        margin-top: 20px;
        ul {
          li {
            margin: 0 13px 20px 0;
            float: left;
            height: 49px;
            width: 147px;
            border: 1px dashed #a0a4b8;
            display: flex;
            align-items: center;
            i {
              display: inline-block;
              width: 6px;
              height: 12px;
              margin: 0 4px 0 14px;
            }
            .arrows1 {
              background: url("../../assets/static/images/api/blue-arrows.png");
            }
            .arrows2 {
              background: url("../../assets/static/images/api/red-arrows.png");
            }
            > span {
              color: #666666;
              line-height: 20px;
            }
          }
          .exception {
            width: 179px;
          }
        }
      }
    }
  }
  .pattern {
    width: 100%;
    margin-top: 40px;
    padding: 0 calc(50% - 604px);
    display: flex;
    // filter: blur(0px);
    .item {
      width: 273px;
      height: 292px;
      background: rgba(255, 255, 255, 1);
      border-radius: 4px;
      padding: 38px 36px 65px 36px;
      text-align: center;
      box-shadow: 0px 2px 8px 2px #eaeaea;
      margin-right: 36px;
      z-index: 999;
      .font {
        height: 25px;
        font-size: 18px;
        font-family: AlibabaPuHuiTiM;
        color: rgba(83, 92, 114, 1);
        line-height: 25px;
        font-weight: bolder;
        margin-top: 28px;
      }
      > p {
        width: 200px;
        height: 44px;
        font-size: 16px;
        font-family: AlibabaPuHuiTiR;
        color: rgba(83, 92, 114, 1);
        line-height: 22px;
        margin-top: 28px;
      }
      i {
        display: inline-block;
        width: 64px;
        height: 64px;
      }
      .keyword {
        background-image: url("../../assets/static/images/api/keyword.png");
      }
      .custom {
        background-image: url("../../assets/static/images/api/custom.png");
      }
      .individuation {
        background-image: url("../../assets/static/images/api/individuation.png");
      }
      .infoType {
        background-image: url("../../assets/static/images/api/infoType.png");
      }
    }
  }
  .teamwork {
    height: 617px;
    width: 100%;
    background-image: url("../../assets/static/images/api/teamwork.png");
    margin-top: 80px;
    padding: 80px calc(50% - 643px);
    display: flex;
    p {
      border: 1px solid rgba(255, 255, 255, 1);
      font-size: 20px;
      display: block;
      color: #ffffff;
      opacity: 0.9;
      padding: 20px 70px;
      margin-top: 20px;
    }
    .make {
      display: inline-block;
      width: 34px;
      height: 308px;
      background-image: url("../../assets/static/images/api/Cooperation process.png");
      margin: 20px 0 0 100px;
    }
    .make2 {
      display: inline-block;
      width: 34px;
      height: 308px;
      background-image: url("../../assets/static/images/api/terms for cooperatio.png");
      margin: 20px 0 0 100px;
    }
    .toggle {
      width: 488px;
      height: 457px;
      max-width: 479px;
      background-image: url("../../assets/static/images/api/flow.png");
      margin-left: 247px;
    }
    .toggle2 {
      width: 682px;
      height: 457px;
      max-width: 700px;
      background-image: url("../../assets/static/images/api/condition.png");
      margin-left: 247px;
    }
  }
  .flowSheet {
    display: inline-block;
    max-width: 1200px;
    height: 477px;
    width: 100%;
    text-align: center;
    background-image: url("../../assets/static/images/api/flowSheet.png");
    margin: 48px 0 120px 0;
  }
  .foot {
    width: 100%;
    height: 120px;
    background: rgba(56, 60, 83, 1);
    text-align: center;
    padding: 34px 0;
    > div {
      color: #ffffff;
      line-height: 20px;
    }
    .file {
      margin-bottom: 12px;
    }
  }
}
</style>
<script src="./api.js"></script>
