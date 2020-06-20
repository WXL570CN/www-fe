<template>
  <div class="module_right">
    <sub-title title="企业数据" class="data"></sub-title>
    <div class="firm-list">
      <ol>
        <li v-for="(item,index) in items" v-bind:key="item.id">
          <div class="list-info">
            <a class="searchName">{{item.search_name}}</a>
            <span>{{item.create_time|formateUnixTime('YYYY-MM-DD')}}</span>
          </div>
          <div class="list-state">
            <!-- <div>
              <i class="update"></i>
              <span>更新</span>
            </div>-->
            <div>
              <i class="revise"></i>
              <span v-on:click="redact(item.id,item.search_name)">编辑</span>
            </div>
            <!-- <div>
              <i class="download"></i>
              <span>下载</span>
            </div>-->
            <div>
              <i class="delete"></i>
              <span v-on:click="delect(item.id,index)">删除</span>
            </div>
          </div>
        </li>
      </ol>
      <paginate
        v-bind:current_page="currentPage"
        v-bind:last_page="last_page"
        v-bind:button-max-count="5"
        v-on:goToPage="goToPage"
      ></paginate>
    </div>
  </div>
</template>

<script src="./company-data.js"></script>

<style lang="scss" scoped>
.paging {
  display: block !important;
  float: none !important;
}
.data {
  margin-top: 20px !important;
}
.firm-list {
  background: #ffffff;
  min-width: 960px;
  min-height: 900px;
  ol {
    padding: 6px 32px 0 32px;
    li {
      display: flex;
      align-items: center;
      height: 66px;
      border-bottom: 1px solid #f7f7f7;
      padding: 12px 0;
      .list-info {
        a {
          display: block;
          line-height: 20px;
        }
        span {
          font-size: 12px;
          color: #999999;
          margin-top: 5px;
          line-height: 17px;
        }
      }
      .list-state {
        display: flex;
        align-items: center;
        margin-left: auto;
        > div {
          display: flex;
          align-items: center;
          margin-left: 24px;
          cursor: pointer;
          i {
            margin-right: 3px;
            height: 14px;
            display: inline-block;
          }
          span {
            color: #666666;
            font-size: 12px;
          }
          .update {
            width: 16px;
            background-image: url("../../../assets/static/images/data-center/update.png");
          }
          .revise {
            width: 13px;
            background-image: url("../../../assets/static/images/data-center/revise.png");
          }
          .download {
            width: 14px;
            background-image: url("../../../assets/static/images/data-center/download.png");
          }
          .delete {
            width: 15px;
            background-image: url("../../../assets/static/images/data-center/delete.png");
          }
        }
      }
    }
  }
}
</style>
