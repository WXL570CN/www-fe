/**
 * Created by ronie on 2019/12/3.
 */


import MFApi from '../../../js/user-center/MFApi';
import userSummary from '../user-summary.vue';
import subTitle from '../sub-title.vue';
import { formateUnixTime } from '../../../utils';
import ListEmpty from '../../../components/list-empty.vue';

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
        const result = await MFApi.getPurchaseVisitHistory(page).async();
        self.currentPage = page;
        const items = result.data.data;
        self.isLastPage = !result.data.next_page_url;
        for (const i in items) {
          self.items.push(items[i]);
        }
      } catch (e) {
        console.warn('getPurchaseVisitHistory', e);
      }
      self.isLoading = false;
    },

  },
};


export default vueSettings;
