<script>
// import { mapState } from 'vuex';
// import moment from 'moment';
import dataNav from './data-center-sidebar.vue';
import overNavBar from '../home/over-nav-bar.vue';
// import store from '../../store';

export default {
  components: {
    dataNav,
    overNavBar,
  },
};
</script>
<template>
  <div>
    <overNavBar></overNavBar>
    <div class="calc">
      <data-nav></data-nav>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .calc {
    padding: 0 calc(50% - 604px);
    min-width: 1250px;
  }
</style>
