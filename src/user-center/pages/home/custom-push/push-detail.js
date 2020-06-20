/**
 * Created by ronie on 2019/12/3.
 */

import MFApi from '../../../js/user-center/MFApi';
import userSummary from '../user-summary.vue';
import subTitle from '../sub-title.vue';
import { formateUnixTime } from '../../../utils';
import paginate from '../../../components/paginate.vue';
import VueUtil from '../../../utils/VueUtil';
import MFConfig from '../../../MFConfig';
import ListEmpty from '../../../components/list-empty.vue';

const vueData = {
  items: [],
  currentPage: 0,
  isLoading: false,
  last_page: 0,
};


const vueSettings = {
  props: ['summaryId'],
  watch: {
    summaryId() {
      this.goToPage(1);
    },
  },
  data() {
    return vueData;
  },
  created() {
    this.goToPage(1);
  },
  components: {
    userSummary,
    subTitle,
    paginate,
    ListEmpty,
  },
  filters: {
    formateUnixTime(time, formate) {
      return formateUnixTime(time, formate);
    },
  },
  methods: {
    async goToPage(page) {
      const self = this;
      if (self.isLoading) {
        return;
      }
      self.isLoading = true;
      try {
        VueUtil.clearArray(self.items);
        const result = await MFApi.getDetail(page, this.summaryId).async();
        self.currentPage = page;
        self.last_page = result.data.last_page;
        const items = result.data.data;
        VueUtil.replaceArray(self.items, items);
      } catch (e) {
        console.warn('getDetail', e);
      }
      self.isLoading = false;
    },
    jumpToDetail(CollHashid) {
      const url = `${MFConfig.wwwRoot}/purchases/${CollHashid}`;
      window.open(url);
    },
  },
};


export default vueSettings;
