<template>
  <div class="repair-mains">
    <over-nav-bar></over-nav-bar>
    <div class="content">
      <bread title="数据修复"></bread>
      <div class="detail">
        <div class="title">
          <span>数据修复</span>
          <div class="state">
            <span class="save" v-on:click="updata()">提交申请</span>
            <span class="cancel" v-on:click="back()">返回表单</span>
          </div>
        </div>
        <div class="form">
          <ul v-if="DataSet">
            <li>
              <div>
                <span>招标预算</span>
                <input class="unit" v-model="DataSet.structured_content.budget" />
                <p>元</p>
              </div>
              <div>
                <span>中标价格</span>
                <input class="unit" v-model="DataSet.structured_content.total_amount" />
                <p>元</p>
              </div>
              <div>
                <span>中标时间</span>
                <div
                  class="computation"
                >{{DataSet.structured_content.bidSuccessTime| formateUnixTime('YYYY-MM-DD')}}</div>
              </div>
            </li>
            <li>
              <div>
                <span>地区</span>
                <select>
                  <option>河南省/南阳市</option>
                </select>
              </div>
              <div>
                <span>项目名称</span>
                <input v-model="DataSet.structured_content.project_name" />
              </div>
              <div>
                <span>项目编号</span>
                <input
                  type="text"
                  value
                  class="border"
                  v-model="DataSet.structured_content.project_number"
                />
              </div>
            </li>
            <li>
              <div>
                <span>招标单位</span>
                <input v-model="DataSet.structured_content.buyer.name" />
              </div>
              <div>
                <span>招标联系人</span>
                <input v-model="DataSet.structured_content.buyer.contactName" />
              </div>
              <div>
                <span>招标电话</span>
                <input
                  type="text"
                  value
                  class="border"
                  v-model="DataSet.structured_content.buyer.contactTel"
                />
              </div>
            </li>
            <li>
              <div>
                <span>中标单位</span>
                <input v-model="DataSet.structured_content.seller.name" />
              </div>
              <div>
                <span>中标联系人</span>
                <input v-model="DataSet.structured_content.seller.contactName" />
              </div>
              <div>
                <span>中标电话</span>
                <input
                  type="text"
                  value
                  class="border"
                  v-model="DataSet.structured_content.seller.contactTel"
                />
              </div>
            </li>
            <li>
              <div>
                <span>信息类型</span>
                <input v-model="DataSet.type" />
              </div>
              <div>
                <span>公告地址</span>
                <input v-model="DataSet.Purchase_sourceUrl" />
              </div>
              <div>
                <span>马蜂地址</span>
                <input type="text" class="border" v-model="DataSet.Purchase_field1" />
              </div>
            </li>
            <li style="border-bottom:1px solid #E6e6e6">
              <div>
                <span>代理机构</span>
                <input v-model="DataSet.structured_content.proxy.name" />
              </div>
            </li>
          </ul>
        </div>
        <div class="text">正文内容</div>
        <div class="matter" v-html="text"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.computation {
  line-height: 40px;
  padding-left: 12px;
  border-left: 1px solid #e6e6e6;
}
.repair-mains {
  width: 100%;
  height: 100%;
  .content {
    padding: 0 calc(50% - 604px);
    .detail {
      min-height: 1024px;
      width: 100%;
      padding: 15px 37px 80px 31px;
      background-color: #ffffff;
      .title {
        display: flex;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid #e9eeef;
        .state {
          display: flex;
          align-items: center;
          margin-left: auto;
          span {
            line-height: 20px;
            padding: 6px 18px;
            cursor: pointer;
            margin-right: 12px;
          }
          .save {
            color: #ffffff;
            background-color: #4389ff;
          }
          .cancel {
            padding: 5px 18px;
            color: #666;
            background-color: #ffffff;
            border: 1px solid #e6e6e6;
          }
        }
        > span {
          font-weight: bold;
          font-size: 18px;
        }
        > div {
          display: flex;
          margin-left: auto;
        }
      }
      .form {
        margin: 13px 0 16px 0;
        min-height: 247px;
        ul {
          li {
            display: flex;
            align-items: center;
            height: 42px;
            width: 100%;
            border: 1px solid #e6e6e6;
            border-bottom: none;
            div {
              display: flex;
              flex: 1;
              align-items: center;
              span {
                min-width: 98px;
                padding-right: 14px;
                text-align: right;
                background-color: #fafafa;
                color: #999999;
                line-height: 40px;
                border-left: 1px solid #e6e6e6;
              }

              input,
              select {
                height: 40px;
                width: 71%;
                border: 0;
                border-left: 1px solid #e6e6e6;
                padding: 0 0 0 12px;
              }
              .unit {
                width: 64%;
              }
              .border {
                border-right: none;
              }
            }
          }
          li div:first-child span {
            border-left: none;
          }
        }
      }
      .text {
        font-size: 18px;
        font-weight: bold;
        line-height: 25px;
        margin: 32px 0 16px 0;
      }
      .matter {
        p,
        div {
          line-height: 22px;
        }
        div {
          color: #ff1e10;
        }
      }
    }
  }
}
</style>
<script src="./data-repair.js"></script>
