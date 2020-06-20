<template>
  <div class="module_right">
    <sub-title title="添加数据" class="data"></sub-title>
    <div class="addData">
      <div class="step">
        <a-steps :current="0" size="small">
          <a-step title="搜索并添加" />
          <!-- <a-step title="编辑修改/下载" /> -->
          <a-step title="实时更新数据" />
          <a-step title="完成" />
        </a-steps>
      </div>
      <div class="dataBackground">
        <div class="type">
          <span
            v-on:click="setType(todo.value)"
            v-for="(todo,index) in todos"
            :class="target_type == todo.value ? 'addclass' : '' "
            v-bind:key="index"
          >{{todo.text}}</span>
        </div>
        <div class="data-input">
          <input
            type="text"
            placeholder="点击搜索中标单位"
            class="data-text"
            v-model="datas.seller_name"
            v-if="target_type == 2"
          />
          <input
            type="text"
            placeholder="点击搜索产品数据"
            class="data-text"
            v-model="datas.product_name"
            v-else
          />
          <input type="submit" value="搜索" class="search" v-on:click="searchbutton" />
          <i></i>
          <div class="screen">
            <i></i>
            <input type="button" value="筛选" class="search" v-on:click="termShow" />
          </div>
        </div>
      </div>
      <div class="filter-form" v-if="showfilter">
        <form>
          <ul>
            <li>
              <span>包含以下全部关键词：</span>
              <div>
                <template>
                  <input
                    type="text"
                    class="input-box"
                    v-for="(item,i) of items"
                    v-model="items[i]"
                    :key="i"
                  />
                </template>
                <span class="input-add" v-on:click="addText">
                  <i></i>
                </span>
              </div>
            </li>
            <li>
              <span>中标金额：</span>
              <div>
                <input type="text" name="amount" placeholder v-model="datas.total_amount_min" />
                <span class="transit">万元</span>
                <span class="transit" style="margin-right: 12px">至</span>
                <input type="text" name="amount" placeholder v-model="datas.total_amount_max" />
                <span class="transit">万元</span>
              </div>
            </li>
            <li>
              <span>类型：</span>
              <div>
                <span
                  class="type"
                  v-for="(list,i) in lists"
                  v-bind:key="i"
                  @click="clickEvent(list.value)"
                  :class="number == list.value ? 'actives' : '' "
                >{{list.name}}</span>
              </div>
            </li>
            <li>
              <span>匹配模式：</span>
              <div>
                <select name="mode" v-model="datas.scoutWay">
                  <option v-bind:value="1">标题搜索</option>
                  <option v-bind:value="3">全文搜索</option>
                </select>
              </div>
            </li>
            <li>
              <span>时间：</span>
              <div>
                <a-date-picker placeholder="请选择日期" @change="onsperiodChange" />
                <span class="transit" style="margin-right: 8px">至</span>
                <a-date-picker placeholder="请选择日期" @change="oneperiodChange" />
              </div>
            </li>
            <li>
              <span>地点：</span>
              <div>
                <select class="area" v-model="datas.Purchase_region1">
                  <option>请选择</option>
                  <option
                    v-for="item in provinceList "
                    :value="item.Region_id"
                    v-bind:key="item.Region_id"
                  >{{item.Region_name}}</option>
                </select>
                <select class="area" v-model="datas.Purchase_region2">
                  <option>城市/地区</option>
                  <option
                    v-for="item in cityList "
                    :value="item.Region_id"
                    v-bind:key="item.Region_id"
                  >{{item.Region_name}}</option>
                </select>
              </div>
            </li>
            <li>
              <span>招标单位：</span>
              <div>
                <input type="text" class="call-unit" v-model="datas.buyer_name" />
              </div>
            </li>
          </ul>
          <!-- <div class="operate">
            <a href="#/data-form">
              <input type="text" class="start-filter" value="开始筛选" />
            </a>
            <input type="button" class="cancel" value="取消" />
          </div>-->
        </form>
      </div>
      <div class="blankPage" v-else v-show="ok">
        <div>
          <i></i>
          <div class="text">
            <div>温馨提示：</div>
            <p>1.搜索企业/产品数据时，请输入完整全称才可以搜到</p>
            <p>2.您可以使用筛选功能，对已搜数据进行进一步筛选操作</p>
          </div>
        </div>
      </div>
      <div v-show="of" class="searchEmpty">
        <div class="result">搜索结果</div>
        <i></i>
        <div class="text">
          <span>搜索不到？请将你所需要的企业名称或产品名称提交给我们！ 系统审核通过后会及时通知到你，请及时关注消息!</span>
        </div>
        <div class="enterpriseSearch">
          <input type="text" placeholder="请提交完整关键词" v-model="keyWord" />
          <button type="button" v-on:click="present()">提交</button>
        </div>
        <div class="clue">
          <span>例如：提交“中机大数据（杭州）股份有限公司”，请不要提交“中机”“大数据”等简称！</span>
        </div>
      </div>

      <!-- <div class="result">
        <div class="title">搜索结果</div>
        <div class="search-content">
          <div class="box">
            <div class="title">彩色多普勒超声诊断仪</div>
            <span class="num">此类信息共计80条</span>
          </div>
          <span class="redact">
            <a href="#/data-form">前去编辑</a>
            <i></i>
          </span>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script src='./add-data.js'></script>

<style scoped lang="scss">
.addclass {
  color: #ffffff !important;
}
.actives {
  color: #ffffff;
  background-color: #4389ff !important;
}
.data {
  margin-top: 20px !important;
}
.addData {
  padding: 10px 32px 132px 32px;
  background: #ffffff;
  min-width: 960px;
  min-height: 800px;
  .step {
    display: flex;
    align-items: center;
    background-color: #f9fafd;
    height: 88px;
    padding: 28px 70px;
  }

  .dataBackground {
    width: 100%;
    height: 130px;
    background-image: url("../../../assets/static/images/data-center/dataBackground.png");
    padding: 29px 111px;
    .type {
      margin-bottom: 12px;
      span {
        color: #e9e9e9;
        margin-right: 24px;
      }
    }
    .data-input {
      display: flex;
      position: relative;
      .data-text {
        width: 471px;
        height: 40px;
        border: none;
        font-size: 16px;
        padding: 10px 15px;
        box-sizing: border-box;
      }
      .search {
        width: 110px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #fff;
        border: none;
        vertical-align: top;
        background: #0074ff 26px 10px;
      }
      .screen {
        margin-left: 12px;
        input {
          width: 81px;
        }
      }
    }
  }

  .filter-form {
    width: 100%;
    min-height: 400px;
    padding: 30px 0 24px 40px;
    background-color: #f8f9fb;
    ul {
      li {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        span {
          text-align: right;
          flex: 1;
          font-size: 12px;
        }
        div {
          display: flex;
          align-items: center;
          flex: 5;
          margin-left: 12px;
          input[name="amount"] {
            width: 208px;
            margin-right: 10px;
          }
          .transit {
            font-size: 12px;
            color: #666666;
            max-width: 26px;
          }
          .type {
            font-size: 12px;
            padding: 6px 25px;
            border: 1px solid #eeeeee;
            background-color: #ffffff;
            max-width: 100px;
            margin-right: 8px;
            cursor: pointer;
            text-align: center;
          }
          select[name="mode"] {
            width: 208px;
          }
          .area {
            margin-right: 8px;
            width: 100px;
          }
          .call-unit {
            width: 316px;
          }
        }
        input,
        select {
          background-color: #ffffff;
          border: 1px solid #eeeeee;
          margin-right: 12px;
          padding-left: 10px;
          height: 28px;
          font-size: 12px;
        }
        .input-box {
          width: 100px;
        }
        .input-add {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          height: 28px;
          max-width: 28px;
          background-color: #ffffff;
          border: 1px solid #eeeeee;
          margin-right: 12px;
          i {
            display: inline-block;
            width: 12px;
            height: 12px;
            background-image: url("../../../assets/static/images/data-center/input-add.png");
          }
        }
      }
    }
    .operate {
      display: flex;
      align-items: center;
      margin-left: 153px;
      margin-top: 4px;
      .start-filter {
        width: 100px;
        height: 32px;
        background: #4389ff;
        border-radius: 0;
        color: #ffffff;
        line-height: 20px;
        border: none;
        text-align: center;
      }
      .cancel {
        width: 76px;
        height: 32px;
        background: rgba(248, 249, 251, 1);
        border-radius: 0;
        border: 1px solid rgba(204, 204, 204, 1);
        color: #999999;
        margin-left: 8px;
      }
    }
  }
  .searchEmpty {
    text-align: center;
    width: 100%;
    i {
      display: inline-block;
      width: 236px;
      height: 176px;
      background: url("../../../assets/static/images/data-center/nullIcon.png");
      margin-top: 136px;
    }
    .result {
      font-size: 12px;
      color: #999999;
      text-align: left;
    }
    .text {
      width: 100%;
      margin-top: 20px;
      span {
        max-width: 381px;
        color: #333333;
        display: inline-block;
        line-height: 22px;
        font-family: AlibabaPuHuiTiR;
      }
    }
    .enterpriseSearch {
      display: flex;
      justify-content: center;
      margin-top: 24px;
      input {
        width: 261px;
        height: 36px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(204, 204, 204, 1);
        padding-left: 12px;
      }
      button {
        width: 80px;
        height: 36px;
        background-color: #4389ff;
        color: #ffffff;
        border: 0;
      }
    }
    .clue {
      width: 100%;
      margin-top: 12px;
      span {
        display: inline-block;
        color: #999999;
        font-size: 12px;
        max-width: 353px;
        line-height: 22px;
      }
    }
  }
  .blankPage {
    width: 100%;
    min-height: 572px;
    padding: 0 0 78px 205px;
    display: flex;
    align-items: center;
    > div {
      display: flex;
      align-items: center;
      i {
        width: 171px;
        height: 94px;
        background-image: url("../../../assets/static/images/data-center/computer-img.png");
      }
      .text {
        margin-left: 40px;
        span {
          line-height: 20px;
          margin-bottom: 10px;
        }
        p {
          color: #666666;
          font-size: 12px;
          line-height: 22px;
        }
      }
    }
  }

  .result {
    margin-top: 36px;
    > .title {
      color: #999999;
      font-size: 12px;
      margin-bottom: 16px;
    }
    .search-content {
      width: 100%;
      height: 92px;
      padding: 24px;
      display: flex;
      align-items: center;
      border: 1px solid rgba(226, 229, 232, 1);
      .box {
        .title {
          font-size: 16px;
          line-height: 22px;
          margin-bottom: 6px;
        }
        .num {
          color: #999999;
          font-size: 12px;
        }
      }
      .redact {
        color: #4389ff;
        margin-left: auto;
        cursor: pointer;
        i {
          display: inline-block;
          height: 14px;
          width: 14px;
          background-image: url("../../../assets/static/images/data-center/toMore.png");
          margin-left: 4px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
