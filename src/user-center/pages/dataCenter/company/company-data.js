/**
 * Created by ronie on 2019/12/3.
 */
import swal from 'sweetalert2';
import MFApi from '../../../js/user-center/MFApi';
import subTitle from '../../home/sub-title.vue';
import paginate from '../../../components/paginate.vue';
import VueUtil from '../../../utils/VueUtil';

import {
  formateUnixTime,
} from '../../../utils';

const vueData = {
  items: [],
  item: null,
  currentPage: 0,
  last_page: 0,
  page: 1,
};

const vueSettings = {
  created() {
    this.goToPage(1);
  },
  data() {
    return vueData;
  },
  components: {
    subTitle,
    formateUnixTime,
    paginate,
  },
  filters: {
    formateUnixTime(time, formate) {
      return formateUnixTime(time, formate);
    },
  },
  methods: {
    async goToPage(page) {
      try {
        const result = await MFApi.getCompanyData(page).async();
        this.currentPage = page;
        this.last_page = result.data.last_page;
        const items = result.data.data;
        // const list = items.filter((item) => item.search_name != '');
        VueUtil.replaceArray(this.items, items);
      } catch (e) {
        console.warn('getCity', e);
      }
    },
    async redact(id, searchName) {
      console.log(searchName);
      try {
        this.$router.push({
          name: 'index.data.form',
          query: {
            searchId: id,
            state: -1,
            terms: searchName,
          },
        });
      } catch (e) {
        console.warn('getCity', e);
      }
    },
    async delect(id, index) {
      try {
        const result = await MFApi.deleteDataSet(id).async();
        if (result.code === 0) {
          this.items.splice(index, 1);
          swal.fire('删除成功', '', 'success');
        }
      } catch (e) {
        console.warn('deleteDataSet', e);
      }
    },
  },

};


export default vueSettings;
