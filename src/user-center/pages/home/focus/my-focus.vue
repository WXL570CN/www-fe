<script src="./my-focus-vue-controller.js"></script>
<!--http://doc.vue-js.com/v2/guide/single-file-components.html-->
<template>
  <div class="module_right">
    <!--头像资料信息-->
    <userSummary></userSummary>

    <!-- 标题栏-->
    <subTitle title="我的关注"></subTitle>
    <div v-if="items.length" class="my_focus state">
      <ul>
        <li v-for="(v,index) in items" v-bind:key="v.Atten_id" class="focus_item">
         <a v-on:click="goToDetail(v.Atten_orgId,v.Atten_orgName)" style="flex: 4"><span class="focus_title">{{v.Atten_orgName}}</span></a>
          <span class="focus_time">
            关注时间：
            {{ v.Atten_createTime | formateUnixTime("YYYY-MM-DD") }}
          </span>
          <button type="button" class="focus_state" v-bind:data-index="index" v-on:click="showCancelFocusAlert" @mouseover="mouseOver(index)"
                  @mouseleave="mouseLeave(index)"
                  :style="v.active">
            取消关注
          </button>
        </li>
      </ul>
      <div v-if="!isLastPage" class="focus_btn">
        <button type="button" class="load_more" v-on:click="nextPage">
          {{ isLoading ? "加载中" : "加载更多"}}
        </button>
      </div>
    </div>
    <ListEmpty v-else></ListEmpty>
  </div>
</template>
