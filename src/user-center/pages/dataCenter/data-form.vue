<template>
  <div class="mains">
    <over-nav-bar></over-nav-bar>
    <div class="content">
      <bread title="数据表单"></bread>
      <div class="data-table">
        <div class="top-title">
          <span>
            搜索结果为"
            <b>{{searchKey}}</b>"的数据表单
          </span>
          <div class="state">
            <span class="save" v-on:click="visualLook(searchId)">
              可视化查看
              <i class="none">{{searchId}}</i>
            </span>
            <span class="save" v-on:click="dataSave()" v-show="ok">保存到我的表单</span>
            <span class="cancel" v-on:click="back()">返回</span>
          </div>
        </div>
        <div class="center-new">
          <span>最新更新数据</span>
        </div>
        <div class="centent-table">
          <div class="title">
            <!-- <a-radio class="choice">全选</a-radio> -->
            <!-- <div class="state">
              <div>
                <i class="icon_preview"></i>
                <span>下载预览</span>
              </div>
              <div>
                <i class="icon_dowload"></i>
                <span>下载</span>
              </div>
              <div>
                <i class="icon_update"></i>
                <span>批量更新至表单</span>
              </div>
              <div>
                <i class="icon_delete"></i>
                <span>批量删除</span>
              </div>
            </div>-->
          </div>
          <ul>
            <li v-for="item in items" v-bind:key="item.Purchase_id">
              <div class="list-title">
                <div class="title-index">
                  <span v-on:click="jumpToDetail(item.Purchase_field1)">{{item.Purchase_title}}</span>
                  <i class="title-norm"></i>
                </div>
                <div class="title-item" v-on:click="skip(item.Purchase_id)">
                  <i class="icon_revise"></i>
                  <span class="edit">编辑</span>
                  <!-- <i class="icon_delete"></i> -->
                </div>
              </div>
              <div class="list-info">
                <span class="price">中标价格：{{item.structured_content.total_amount}}元</span>
                <span class="area">招标地区：{{item.province}}</span>
                <span class="unit">
                  中标单位：
                  <a>{{item.structured_content.seller.name}}</a>
                </span>
              </div>
              <div class="list-info">
                <span class="time">中标时间：{{item.Purchase_sourceTime|formateUnixTime('YYYY-MM-DD')}}</span>
                <span class="number">项目编号：{{item.structured_content.project_number}}</span>
              </div>
            </li>
          </ul>
          <paginate
            v-bind:current_page="currentPage"
            v-bind:last_page="last_page"
            v-bind:button-max-count="5"
            v-on:goToPage="goToPage"
          ></paginate>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./data-form.js'></script>
<style lang="scss" scoped>
.paging {
  display: block !important;
  float: none;
}
.mains {
  height: 100%;
  width: 100%;
  .content {
    padding: 0 calc(50% - 604px);
    .data-table {
      min-height: 1170px;
      background-color: #ffffff;
      width: 100%;
      padding: 16px 32px 40px 32px;
      .top-title {
        display: flex;
        align-items: center;
        height: 55px;
        border-bottom: 1px solid #e9eeef;
        > span {
          font-size: 18px;
          font-weight: bold;
          line-height: 25px;
          b {
            color: #4389ff;
          }
        }
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
            .none {
              display: none;
            }
          }
          .cancel {
            padding: 5px 18px;
            color: #666;
            background-color: #ffffff;
            border: 1px solid #e6e6e6;
          }
          .cancel:hover {
            color: #4389ff;
          }
        }
      }
      .center-new {
        padding: 12px 0;
        height: 44px;
        width: 100%;
        span {
          color: #4389ff;
          border-left: 2px solid #4389ff;
          line-height: 20px;
          padding-left: 4px;
        }
      }
      .centent-table {
        min-height: 190px;
        width: 100%;
        border: 1px solid #e2e5e8;
        > .title {
          height: 40px;
          background-color: #f8fafd;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #d2d5d8;
          padding: 0 16px;
          > .state {
            display: flex;
            margin-left: auto;
            > div {
              display: flex;
              align-items: center;
              margin-left: 20px;
              cursor: pointer;
              span {
                color: #443333;
                line-height: 17px;
                margin-left: 4px;
              }
              .icon_preview {
                width: 13px;
                height: 13px;
                background-image: url(../../assets/static/images/data-center/preview.png);
              }
              .icon_dowload {
                height: 14px;
                width: 14px;
                background-image: url(../../assets/static/images/data-center/download.png);
              }
              .icon_update {
                height: 14px;
                width: 16px;
                background-image: url(../../assets/static/images/data-center/update.png);
              }
            }
          }
        }
        .icon_delete {
          height: 14px;
          width: 15px;
          background-image: url(../../assets/static/images/data-center/delete.png);
        }
        ul {
          min-height: 672px;
          width: 100%;
          li {
            padding: 12px 16px;
            min-height: 94px;
            .list-title {
              display: flex;
              align-items: center;
              height: 20px;
              width: 100%;
              font-size: 16px;
              cursor: pointer;
              .title-index {
                display: inline-block;
                max-width: 1000px;
                overflow: hidden; /*超出部分隐藏*/
                white-space: wrap; /*不换行*/
                text-overflow: ellipsis; /*超出部分文字以...显示*/
                .title-norm {
                  display: inline-block;
                  width: 12px;
                  height: 12px;
                  background-image: url(../../assets/static/images/data-center/title-norm.png);
                }
              }
              .title-item {
                display: flex;
                align-items: center;
                margin-left: auto;
                cursor: pointer;
                .icon_revise {
                  display: inline-block;
                  width: 15px;
                  height: 15px;
                  background-image: url(../../assets/static/images/data-center/revise.png);
                  margin-right: 4px;
                }
                // .icon_revise:hover {
                //   background-image: url(../../assets/static/images/data-center/revise-blue.png);
                // }
                .edit {
                  color: #666666;
                }
                .edit:hover {
                  color: #4389ff;
                }
              }
            }
            .list-title:hover {
              color: #4389ff;
            }
            .list-info {
              display: flex;
              align-items: center;
              margin: 8px 0 0 24px;
              span {
                font-size: 14px;
                color: #999999;
                line-height: 17px;
              }
              .price {
                flex: 1;
              }
              .area {
                flex: 1;
              }
              .unit {
                flex: 1.5;
                a {
                  color: #4389ff;
                }
              }
              .time {
                flex: 1;
              }
              .number {
                flex: 2.5;
              }
            }
          }
          li:nth-child(even) {
            background-color: #f8f9fb;
          }
        }
      }
    }
  }
}
</style>
