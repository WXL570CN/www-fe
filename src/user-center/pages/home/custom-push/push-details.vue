<template>
<div class="module_right">
  <!--头像资料信息-->
  <userSummary></userSummary>
  <!-- 标题栏-->
  <sub-title title="推送详情信息"></sub-title>
  <div v-if="items.length" class="right-bottom">
    <ul class="details">
      <li v-for="item in items" v-bind:key="item.Scout_id">
        <div><a class="title" v-on:click="jumpToDetail(item.Scout_hashid)">{{item.Scout_title}}</a></div>
        <div class="placard">
          <span class="type">{{item.Scout_type}}</span>
          <span class="region">{{item.Scout_province}}</span>
        </div>
        <div class="source">
          <span class="info_source">来源</span>
          <a>{{item.Scout_source}}</a>
          <div>
            <i></i>
            <span>时间：{{ item.Scout_sourceTime | formateUnixTime('YYYY-MM-DD') }}</span>
          </div>
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
<script src="./push-detail.js"></script>
<style scoped lang="scss">
  .right-bottom{
    height: 880px!important;
    .details{
      height: 85%;
      padding-top: 4px;
      li{
        height: 70px;
        width: 100%;
        padding: 0 32px;
        border-bottom: 1px dotted #CCC;
        >div{
          display: flex;
          align-items: center;
          padding-top: 11px ;
          >.title{
            max-width: 700px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
        .placard{
          padding-top: 0;
          float: right;
          margin-top: -10px;
          span{
            display: inline-block;
            padding: 4px 8px;
            color: #fff;
            font-size: 12px;
            font-weight: bold;
            background-color: #03CDCD;
            border-radius: 0;
          }
          .region{
            display: inline-block;
            margin-left: 10px;
            background-color: #45CD03;
          }
        }
        .source{
          .info_source{
            display: inline-block;
            width: 40px;
            height: 18px;
            border-radius: 2px;
            text-align: center;
            line-height: 20px;
            font-weight: bold;
            background-color: #28A1FF;
            color: #fff;
          }
          a{
            color: #999;
            font-size: 12px;
            margin-left: 8px;
          }
          div{
            margin-left: 40px;
            display: flex;
            align-items: center;
            i{
              margin: 2px 3px 0 0 ;
              display: inline-block;
              height: 12px;
              width: 12px;
              background-image: url(../../../assets/static/images/personal-center/times.png);
            }
            span{
              font-size: 12px;
              color: #999;
            }
          }
        }
      }
    }
  }

</style>
