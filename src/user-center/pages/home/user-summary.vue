<script>
import { mapState } from 'vuex';

export default {
  computed: mapState('summary', {
    messageCount: 'messageCount',
    photoStyle: (state) => ({
      background: `url(${state.user.photo}) no-repeat`,
      'background-size': 'cover',
      'background-position': 'center center',
    }),
    user: 'user',
  }),
};
</script>

<template>
  <div class="right-top">
    <i class="head" id="privateHead" v-bind:style="photoStyle"></i>
    <div class="info">
      <div>
        <span class="info_title">
          ID:
          {{ user.name }}
        </span>
        <i></i>
      </div>
      <div style="margin-top: 10px">
        <i class="inc"></i>
        <span class="info_vipCenter">
          {{ user.MemberDisplayName }}
        </span>
      </div>
      <span class="id_num">
        id:{{ user.id }}
      </span>
    </div>
    <ul id="summary-info">
      <li>
        <div v-cloak>{{ messageCount }}</div>
        <span>消息</span>
      </li>
      <li>
        <div>0</div>
        <span>积分</span>
      </li>
      <li>
        <div>0</div>
        <span>优惠券</span>
      </li>
    </ul>
    <button class="sign_in" style="background-color: #eeeeee" aria-disabled="true">签到</button>
  </div>
</template>

<style scoped>
  .head{
    display: inline-block;
    height: 94px;
    width: 94px;
    margin: 40px 0 0 32px;
    background-image: url("../../assets/static/images/personal-center/default-head.png");
  }

  .photo img{
    width: 100%;
    max-height: 100%;
  }
</style>
