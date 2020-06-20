/**
 * Created by ronie on 2019/12/3.
 */
import swal from 'sweetalert2';
import MFApi from '../../js/user-center/MFApi';
import VueUtil from '../../utils/VueUtil';
import overNavBar from '../home/over-nav-bar.vue';
import {
  formateUnixTime,
} from '../../utils';
import bread from './breadcrumbs.vue';
import paginate from '../../components/paginate.vue';
import MFConfig from '../../MFConfig';

const vueData = {
  items: [],
  currentPage: 0,
  last_page: 0,
  searchId: 0,
  searchKey: '',
  ok: true,
};

const vueSettings = {
  //   props: ['data'],
  data() {
    return vueData;
  },
  created() {
    this.goToPage(1);
  },
  components: {
    overNavBar,
    bread,
    paginate,
    formateUnixTime,
  },
  filters: {
    formateUnixTime(time, formate) {
      return formateUnixTime(time, formate);
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    async goToPage(page) {
      // 取到路由带过来的参数
      this.searchKey = localStorage.getItem('searchKey');
      const searchQuery = this.$route.query.state;
      if (searchQuery == -1) {
        this.ok = false;
        this.searchId = this.$route.query.searchId;
      } else {
        this.ok = true;
        const datas = localStorage.getItem('data');
        // 发请求
        const item = JSON.parse(datas);
        this.searchId = item.data.searchId;
      }
      const result = await MFApi.getSearchData(this.searchId, page).async();
      this.currentPage = page;
      this.last_page = result.data.last_page;
      VueUtil.replaceArray(this.items, result.data.rows);
      const list = JSON.stringify(result.data.rows);
      localStorage.setItem('replaceData', list);
      console.log(this.searchId);
    },
    async dataSave() {
      try {
        const result = await MFApi.getDataSava(this.searchId).async();
        if (result.code === 0) {
          swal.fire('数据保存成功', '', 'success');
        }
      } catch (e) {
        console.warn('getDataSava', e);
      }
    },
    skip(Purchase_id) {
      this.$router.push({
        name: 'index.data.repair',
        params: {
          Purchase_id,
        },
      });
    },
    jumpToDetail(CollHashid) {
      const url = `${MFConfig.wwwRoot}/purchases/${CollHashid}`;
      window.open(url);
    },
    visualLook(searchId) {
      this.$router.push({
        name: 'index.data.visual',
        params: {
          searchId,
        },
      });
    },
  },
};

export default vueSettings;
