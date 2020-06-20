<template>
  <div class="module_right">
    <!--头像资料信息-->
    <userSummary></userSummary>
    <!-- 标题栏-->
    <subTitle title="我的足迹"></subTitle>

    <div v-if="items.length" class="my_focus state" id="myTrack">
      <ul>
        <li v-for="v in items" class="focus_item">
          <span class="focus_title">
            {{ v.Browse_itemTitle }}
          </span>
          <div class="footprint_time">
            <i></i>
            <span class="time">
              {{ v.Browse_createTime | formateUnixTime("YYYY-MM-DD") }}
            </span>
          </div>
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

<script src="./foot-print-controller.js">
</script>

<style scoped>

</style>
