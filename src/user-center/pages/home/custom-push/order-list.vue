<template>
  <div class="module_right">
    <!--头像资料信息-->
    <userSummary></userSummary>
    <!-- 标题栏-->
    <div class="right-center">
      <ul id="nav-bar">
        <li>
          <span>推送记录</span>
        </li>
      </ul>
      <a-date-picker @change="onDateChange"  class="dataSelect" placeholder="请选择日期"/>
    </div>
    <div v-if="items.length" class="right-bottom">
      <ul class="order_entries">
        <li v-for="item in items" v-bind:key="item.Push_id" >
          <div class="order_title">
            <i></i>
            <span class="time">推送时间：
              {{ item.Push_createTime | formateUnixTime('YYYY-MM-DD') }}
            </span>
          </div>
          <div class="sum">
            <span class="text">你有新的采招信息共计：</span>
            <span class="num">
              {{ item.Push_total }}条
            </span>
          </div>
          <div class="details">
            <a v-on:click="goToDetail(item.Push_id)"><span>查看详情</span></a>
            <i></i>
          </div>
        </li>
      </ul>
      <!--分页-->
      <paginate
        v-bind:current_page="currentPage"
        v-bind:last_page="last_page"
        v-bind:button-max-count="5"
        v-on:goToPage="goToPage"
      >
      </paginate>
    </div>
    <ListEmpty v-else></ListEmpty>
  </div>
</template>

<script src="./order-list-controller.js"></script>

<style scoped lang="scss">
  .right-center{
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 32px;
    .dataSelect{
      margin-left: auto;
    }
  }
  .order_entries{
    li{
      height: 110px !important;
      padding: 16px 20px 0 20px;
      div{
        display: flex;
        align-items: center;
      }
      .order_title{
        line-height: 20px;
        margin-bottom: 6px;
        span{
          color: #4389FF;
        }
        i{
          margin-right: 3px;
          display: inline-block;
          height: 16px;
          width: 14px;
          background-image: url(../../../assets/static/images/personal-center/time.png);
        }
      }
      .sum{
        padding-left: 18px;
        padding-bottom: 8px;
        border-bottom: 2px solid #E6E6E6;
        .text{
          color: #999;
          font-size: 12px;
        }
        .num{
          color: #FF6A6A;
          font-size: 12px;
        }
      }
      .details{
        margin: 11px 0 0 18px;
        span{
          font-size: 12px;
          color: #666;
        }
        i{
          display: inline-block;
          height: 14px;
          width: 8px;
          /*background-image: url(../../../assets/static/images/personal-center/);*/
        }
      }
    }
  }

</style>
