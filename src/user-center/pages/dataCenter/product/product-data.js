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
  currentPage: 0,
  last_page: 0,
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
        const result = await MFApi.getProductData(page).async();
        console.log(result);
        this.currentPage = page;
        this.last_page = result.data.last_page;
        const items = result.data.data;
        VueUtil.replaceArray(this.items, items);
        console.log(this.items);
      } catch (e) {
        console.warn('getProductData', e);
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
    async redact(id) {
      try {
        this.$router.push({
          name: 'index.data.form',
          query: {
            searchId: id,
            state: -1,
          },
        });
      } catch (e) {
        console.warn('getCity', e);
      }
    },
  },

};


export default vueSettings;
