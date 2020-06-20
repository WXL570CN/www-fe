/**
 * Created by ronie on 2019/12/3.
 */


import swal from 'sweetalert2';
import $ from 'jquery';
import MFApi from '../../../js/user-center/MFApi';
import MFConfig from '../../../MFConfig';
import userSummary from '../user-summary.vue';
import subTitle from '../sub-title.vue';
import { formateUnixTime } from '../../../utils';
import Alert from '../../../utils/Alert';
import Lock from '../../../utils/Lock';
import ListEmpty from '../../../components/list-empty.vue';

const lock = new Lock();

const vueData = {
  items: [],
  currentPage: 0,
  isLoading: false,
  isLastPage: false,
};


const vueSettings = {
  data() {
    return vueData;
  },
  created() {
    this.nextPage();
  },
  components: {
    userSummary,
    subTitle,
    ListEmpty,
  },
  filters: {
    formateUnixTime(time, formate) {
      return formateUnixTime(time, formate);
    },
  },
  methods: {
    async nextPage() {
      const self = this;
      if (self.isLastPage) {
        return;
      }
      if (self.isLoading) {
        return;
      }
      const page = self.currentPage + 1;
      self.isLoading = true;
      try {
        const result = await MFApi.getMyCollectionList(page).async();
        self.currentPage = page;
        const items = result.data.data;
        self.isLastPage = !result.data.next_page_url;
        for (const i in items) {
          self.items.push(items[i]);
        }
      } catch (e) {
        console.warn('getMyCollectionList', e);
      }
      self.isLoading = false;
    },

    async cancelCollect(event) {
      const isConfirm = await Alert.showConfirm({ title: '确定取消收藏' });
      if (!isConfirm) {
        return;
      }

      const targetElement = event.target;
      const index = $(targetElement).data('index');
      const item = this.items[index];
      const lockKey = `cancelCollect_${index}`;
      if (!lock.create(lockKey)) {
        return;
      }

      try {
        const result = await MFApi.cancelMyCollect(item.Coll_id, item.Coll_type).async();
        if (result.code !== 0) {
          return;
        }
        this.items.splice(index, 1);
        swal.fire('已取消收藏!', '', 'success');
      } catch (e) {
        console.warn('cancelMyCollect failed', e);
      }

      lock.delete(lockKey);
    },

    jumpToDetail(CollHashid) {
      const url = `${MFConfig.wwwRoot}/purchases/${CollHashid}`;
      window.open(url);
    },

  },
};


export default vueSettings;
