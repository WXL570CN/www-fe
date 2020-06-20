/**
 * Created by ronie on 2019/12/3.
 */
import swal from 'sweetalert2';
import subTitle from '../../home/sub-title.vue';
import MFApi from '../../../js/user-center/MFApi';
import VueUtil from '../../../utils/VueUtil';


const vueData = {
  showfilter: false,
  items: [],
  datas: {},
  lists: [{
    name: '采购公告',
    value: 1,
  }, {
    name: '变更通知',
    value: 2,
  }, {
    name: '结果公告',
    value: 3,
  }],
  todos: [{
    text: '企业数据',
    value: '2',
  }, {
    text: '产品数据',
    value: '1',
  }],
  currentProvince: 0,
  provinceList: [],
  cityList: [],
  target_type: 2,
  active: -1,
  dateString: '',
  page: 1,
  number: 3,
  emptyArray: [],
  of: false,
  ok: true,
  keyWord: '',
  type: 3,
};


const vueSettings = {
  data() {
    return vueData;
  },
  components: {
    subTitle,
  },
  watch: {
    'datas.Purchase_region1': async function (newValue) {
      console.log(newValue);
      try {
        const value = newValue;
        const result = await MFApi.getCity(value).async();
        console.log(result);
        const items = result.data;
        VueUtil.replaceArray(this.cityList, items);
      } catch (e) {
        console.warn('getCity', e);
      }
    },

  },
  created() {
    this.datas.seller_name = '';
    this.datas.product_name = '';
  },
  mounted() {
    this.of = false;
    this.ok = true;
    this.changeProvince();
  },
  methods: {
    termShow() {
      this.showfilter = !this.showfilter;
    },
    addText() {
      if (this.items.length < 5) {
        const repeatFlag = this.items.some((el) => {
          if (el == this.value) return true;
        });
        if (repeatFlag) {
          console.log('当前参数值重复,不能添加');
        } else {
          this.items.push(this.value);
          this.value = '';
        }
      }
    },
    setType(index) {
      this.datas.seller_name = '';
      this.datas.product_name = '';
      this.target_type = index;
    },
    onsperiodChange(moment, dateString) {
      this.dateString = moment.unix();
    },
    oneperiodChange(moment, dateString) {
      this.eperiod = moment.unix();
    },
    clickEvent(i) {
      this.type = i;
      this.number = i;
    },
    async present() {
      try {
        const result = await MFApi.getDataDesired(this.keyWord, this.target_type).async();
        if (result.code == 0) {
          swal.fire('提交成功', '', 'success');
        }
      } catch (e) {
        console.warn('getDataDesired', e);
      }
    },
    async changeProvince() {
      try {
        const result = await MFApi.getProvince().async();
        this.provinceList = result.data;
      } catch (e) {
        console.warn('getProvince', e);
      }
      self.isLoading = false;
    },
    async searchbutton() {
      if (!this.datas.seller_name && !this.datas.product_name) {
        swal.fire('请输入搜索内容', '', 'success');
        return false;
      }
      try {
        this.datas.key_words = this.items;
        this.datas.Purchase_type = this.type;
        this.datas.target_type = this.target_type;
        this.datas.speriod = this.dateString;
        this.datas.eperiod = this.eperiod;
        this.datas.page = this.page;
        const result = await MFApi.getdataList(this.datas).async();
        localStorage.setItem('data', JSON.stringify(result));
        this.emptyArray = result.data.total;
        if (this.emptyArray == 0) {
          this.of = true;
          this.ok = false;
        } else {
          localStorage.setItem('targetType', this.datas.target_type);
          localStorage.setItem('searchKey', this.datas.seller_name || this.datas.product_name);
          this.$router.push({
            name: 'index.data.form',
            query: {},
          });
        }
      } catch (e) {
        console.warn('getdataList', e);
      }
    },
  },
};
export default vueSettings;
