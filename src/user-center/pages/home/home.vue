<script>
import { mapState } from 'vuex';
import moment from 'moment';
import overNavBar from './over-nav-bar.vue';
import sideBar from './user-center-sidebar.vue';
import store from '../../store';
import bindMobileTips from '../../components/bind-mobile-tips.vue';

export default {
  async beforeRouteEnter(to, from, next) {
    await store.dispatch('summary/getUserInfo');
    next();
  },
  components: {
    overNavBar,
    sideBar,
    bindMobileTips,
  },
  computed: mapState('summary', {
    messageCount: 'messageCount',
    isShowBindMobileTips: (state) => {
      const { user } = state;
      const lastShowTime = localStorage.getItem('skipShowBindMobileTips') * 1;
      const diffDays = moment().diff(lastShowTime, 'days');
      if (diffDays < 1) {
        return false;
      }
      if (user.phone) {
        return false;
      }
      localStorage.setItem('skipShowBindMobileTips', moment().valueOf());
      return true;
    },
  }),
};
</script>

<template>
  <div>
    <overNavBar></overNavBar>
    <div class="calc">
      <sideBar></sideBar>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <bindMobileTips v-if="isShowBindMobileTips"/>
  </div>

</template>

<style scoped lang="scss">
  .calc {
    padding: 0 calc(50% - 604px);
    min-width: 1250px;
  }
</style>
