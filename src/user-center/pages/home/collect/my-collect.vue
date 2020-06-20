<script src="./my-collect-vue-controller.js"></script>

<template>
  <div class="module_right">
    <!--头像资料信息-->
    <userSummary></userSummary>

    <!-- 标题栏-->
    <subTitle title="我的收藏"></subTitle>

    <div v-if="items.length" class="my_focus my_collect state" id="myCollect">
      <ul>
        <li v-for="(v,index) in items" v-bind:key="v.Coll_id" class="collect_item">
          <div >
            <div class="type">
              <span>
                  {{ v.type }}
              </span>
              <span class="focus_title" v-on:click="jumpToDetail(v.Coll_hashid)">
                 {{ v.Coll_title }}
              </span>
            </div>
            <div class="collect_info">
              <span>
                {{ v.province }}
              </span>
              <span>
                发布时间：{{ v.Coll_createTime | formateUnixTime("YYYY-MM-DD") }}
              </span>
            </div>
          </div>
          <button type="button" class="focus_state"  v-bind:data-index="index" v-on:click="cancelCollect">
            取消收藏
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
