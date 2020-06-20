/**
 * Created by ronie on 2019/12/3.
 */


import swal from 'sweetalert2';
import $ from 'jquery';
import MFApi from '../../../js/user-center/MFApi';
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
  active: '',
};

const vueSettings = {
  data() {
    return vueData;
  },
  created() {
    this.nextPage();
  },
  filters: {
    formateUnixTime(time, formate) {
      return formateUnixTime(time, formate);
    },
  },
  components: {
    userSummary,
    subTitle,
    ListEmpty,
  },
  methods: {
    mouseOver(index) {
      const item = this.items[index];
      item.active = 'color:#4389ff;border:1px solid #4389ff';
      this.items.splice(index, 1, item);
    },
    mouseLeave(index) {
      const item = this.items[index];
      item.active = '';
      this.items.splice(index, 1, item);
    },
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
        const result = await MFApi.getMyFocusList(page).async();
        self.currentPage = page;
        const items = result.data.data;
        self.isLastPage = !result.data.next_page_url;
        for (const i in items) {
          items[i].active = '';
          self.items.push(items[i]);
        }
      } catch (e) {
        console.warn('getMyFocusList failed', e);
      }
      self.isLoading = false;
    },

    async showCancelFocusAlert(event) {
      const isConfirm = await Alert.showConfirm({
        title: '确认取消关注',
      });
      if (isConfirm) {
        this.cancelFocus(event);
      }
    },

    async cancelFocus(event) {
      const targetElement = event.target;
      const index = $(targetElement).data('index');
      const item = this.items[index];
      const lockKey = `cancelFocus_${index}`;
      if (!lock.create(lockKey)) {
        return;
      }

      const result = await MFApi.cancelMyFocus(item.Atten_orgId, item.Atten_type).async();
      if (result.code !== 0) {
        return;
      }
      swal.fire('已取消关注!', '', 'success');
      this.items.splice(index, 1);
      lock.delete(lockKey);
    },
    goToDetail(Purchase_id, title) {
      this.$router.push({
        name: 'home.focus.details',
        params: {
          Purchase_id,
          title,
        },
      });
    },
  },
};

export default vueSettings;
