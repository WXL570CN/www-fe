<template>
  <div class="guide-mains">
    <over-nav-bar></over-nav-bar>
    <div class="top-backdrop">
      <div class="frame">
        <p class="name">企业/产品数据库可视化服务</p>
        <span class="introduce">个性定制中标数据，为你打造专属市场分析报告 助你离中标更近一步</span>
        <button type="button" v-on:click="applyFor()">立即申请</button>
      </div>
    </div>
    <div class="caption">企业/产品数据库5大优势</div>
    <div class="striping">
      <span class="line"></span>
    </div>
    <div class="superiority">
      <div class="list">
        <i class="icon"></i>
        <p>用户数据保存</p>
        <span>您可以将自己搜索的相关信息表单，保存至自己的库中，并对他进行编辑、删除、纠正等操作</span>
      </div>
      <div class="list">
        <i class="update"></i>
        <p>数据更新服务</p>
        <span>每天24小时，实时监控。保证数据的连续与稳定，并在不超过12小时内同步更新数据</span>
      </div>
      <div class="list">
        <i class="download"></i>
        <p>数据下载服务</p>
        <span>用户将自己的信息表单添加至自己库中后，可以实时下载，自己再进行编辑存储等操作</span>
      </div>
      <div class="list">
        <i class="visual"></i>
        <p>数据可视化</p>
        <span>由于数据的庞大和复杂性，为了让客户看的直观，直接将数据以图表的形式，实时操作展现</span>
      </div>
      <div class="list">
        <i class="contrast"></i>
        <p>数据竞品对比</p>
        <span>将数据进行编辑入库后，可与其他同类数据，进行关键词等相关内容对比功能，让您的实时掌握最新的招投标动态</span>
      </div>
    </div>
    <div class="showList">
      <div class="text">
        <div class="title">用数据说话，可视化展示</div>
        <span class="line"></span>
        <p class="intro">服务于企业级客户的自助式招投标分析平台。</p>
        <p class="feature">实时数据采集、创建数据库、分析，驱动招投标数据可视化、数据优化、企业运营、管理监控。</p>
        <input type="button" value="体验demo演示" v-on:click="experience" />
      </div>
      <div>
        <i></i>
      </div>
    </div>
    <div class="caption">大数据支持-我们更专业！</div>
    <div class="striping">
      <span class="line"></span>
    </div>
    <div class="bigData">
      <div>
        <span>马蜂盯标是招投标行业垂直搜索引擎，专注于招投标行业内的信息查询和订阅服务。公司是众多政府机构、企事业单位、上市公司、科研机构及大中型公司的大数据支持与信息服务商。马蜂盯标的诞生是为配合中国政府实施推行的《中华人民共和国招投标法》、《中华人民共和国政府采购法》及《“互联网+”招标采购行动方案（2017-2019）》，增强采购商与供应商的信息对接以及优化招投标行业环境而建立。产品基于云计算和大数据分析技术，通过对招投标信息、项目进程、同行企业数据分析，帮助企业的管理者，市场人员，产品人员，运营人员以及数据分析师深度洞查全国采招行为，用数据驱动决策。</span>
      </div>
    </div>
    <form class="form">
      <div class="info">
        <div class="list">
          <p class="name">*公司名称：</p>
          <input type="text" placeholder="请输入公司名称" v-model="info.company_name" />
        </div>
        <div class="list">
          <p class="name">*你的姓名：</p>
          <input type="text" placeholder="请输入你的姓名" v-model="info.user_name" />
        </div>
        <div class="list">
          <p class="name">*联系方式：</p>
          <input type="text" placeholder="请输入联系方式" v-model="info.telephone" />
        </div>
      </div>
      <div class="info">
        <div class="list">
          <p class="name">*公司地址：</p>
          <input type="text" placeholder="请输入公司地址" v-model="info.company_addr" />
        </div>
        <div class="list">
          <p class="name">*公司邮箱：</p>
          <input type="text" placeholder="请输入公司邮箱" v-model="info.email" />
        </div>
        <div class="list">
          <p class="name">*你的职位：</p>
          <input type="text" placeholder="请输入你的职位" v-model="info.job_title" />
        </div>
      </div>
      <div class="text">
        <div class="headline">提交企业申请</div>
        <span class="line"></span>
        <p class="intro colour">服务于企业级客户的自助式招投标分析平台。</p>
        <p class="feature colour">实时数据采集、创建数据库、分析，驱动招投标数据可视化、数据优化、企业运营、管理监控。</p>
        <button @click="onSubmit()">提交资料</button>
      </div>
    </form>
  </div>
</template>
<script src="./data-guide.js"></script>
<style lang="scss" scoped>
.guide-mains {
  height: 100%;
  width: 100%;
  .top-backdrop {
    height: 320px;
    width: 100%;
    background-image: url("../../assets/static/images/data-center/backdrop.png");
    .frame {
      padding: 78px 0 72px 360px;
      .name {
        font-weight: 500;
        font-size: 26px;
        color: #ffffff;
      }
      .introduce {
        width: 313px;
        line-height: 22px;
        color: #ffffff;
        display: inline-block;
        margin-top: 29px;
      }
      button {
        width: 125px;
        height: 36px;
        background: #ffffff;
        border-radius: 20px;
        color: #3069ff;
        display: block;
        margin-top: 24px;
        border: 0;
      }
    }
  }
  .caption {
    text-align: center;
    color: #2a3257;
    font-size: 24px;
    margin-top: 60px;
  }
  .striping {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .line {
    text-align: center;
    width: 60px;
    height: 4px;
    background: rgba(194, 202, 239, 1);
    border-radius: 2px;
    margin-top: 16px;
    display: inline-block;
  }
  .superiority {
    height: 250px;
    width: 100%;
    padding: 0 calc(50% - 604px);
    margin-top: 50px;
    display: flex;
    align-items: center;
    .list {
      width: 220px;
      height: 250px;
      background-color: #ffffff;
      margin-right: 25px;
      text-align: center;
      p {
        font-size: 16px;
        color: #4389ff;
        margin-bottom: 16px;
      }
      > span {
        font-size: 12px;
        color: #5d6279;
        line-height: 18px;
      }
      > i {
        display: inline-block;
        height: 72px;
        width: 72px;
        border: 1px dashed #999999;
        margin: 24px 0 17px 0;
      }
      .icon {
        background: url("../../assets/static/images/guide/slices.png");
      }
      .update {
        background: url("../../assets/static/images/guide/update.png");
      }
      .download {
        background: url("../../assets/static/images/guide/dowload.png");
      }
      .visual {
        background: url("../../assets/static/images/guide/visual.png");
      }
      .contrast {
        background: url("../../assets/static/images/guide/contrast.png");
      }
    }
  }
  .showList {
    height: 386px;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    padding: 0 calc(50% - 604px);
    margin-top: 80px;
    > div {
      flex: 1;
    }
    i {
      display: inline-block;
      background-image: url("../../assets/static/images/guide/visualization.png");
      width: 632px;
      height: 376px;
    }
  }
  .text {
    .title {
      font-size: 24px;
      color: #2a3257;
      margin-top: 82px;
    }
    .headline {
      font-size: 24px;
      color: #ffffff;
    }
    .colour {
      color: #ffffff;
    }
    p {
      color: #5d6279;
      line-height: 22px;
    }
    .intro {
      margin-top: 25px;
    }
    .feature {
      max-width: 419px;
    }
    input {
      width: 132px;
      height: 36px;
      background: rgba(67, 137, 255, 1);
      border-radius: 3px;
      color: #ffffff;
      border: 0;
      margin-top: 47px;
    }
    button {
      width: 88px;
      height: 36px;
      background: rgba(67, 137, 255, 1);
      border-radius: 2px;
      border: 0;
      color: #ffffff;
      margin-top: 47px;
    }
  }
  .bigData {
    height: 248px;
    width: 100%;
    padding: 0 calc(50% - 604px);
    margin-top: 50px;
    > div {
      display: inline-block;
      width: 100%;
      background-image: url("../../assets/static/images/guide/background-blue.png");
      height: 100%;
      span {
        margin: 59px 86px;
        display: inline-block;
        font-size: 16px;
        line-height: 26px;
        color: #fff;
      }
    }
  }
  .form {
    width: 100%;
    height: 401px;
    background-image: url("../../assets/static/images/guide/background-gray.png");
    margin-top: 60px;
    padding: 85px calc(50% - 604px) 0;
    display: flex;
    > div {
      flex: 1;
      .list {
        margin-bottom: 24px;
      }
      .name {
        color: #e6e6e6;
        font-size: 12px;
        margin-bottom: 8px;
      }
      input {
        width: 288px;
        height: 34px;
        background: rgba(255, 255, 255, 1);
        border-radius: 2px;
        border: 1px solid rgba(209, 214, 232, 1);
        color: #333333;
        padding-left: 12px;
      }
    }
  }
}
</style>
