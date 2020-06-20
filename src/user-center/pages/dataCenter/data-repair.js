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

const vueData = {
  DataSet: null,
  buyer: [],
  seller: [],
  proxy: [],
  bidSuccessTime: '',
  text: '',
  options: [],
};


const vueSettings = {
  props: ['Purchase_id'],
  watch: {
    'DataSet.Purchase_field1': async function (newValue) {
      console.log(newValue);
      try {
        const value = newValue;
        const result = await MFApi.getText(value).async();
        const items = result.data.Purchase_content;
        this.text = items;
      } catch (e) {
        console.warn('getCity', e);
      }
    },
  },
  created() {
    this.look();
  },
  data() {
    return vueData;
  },
  components: {
    overNavBar,
    bread,
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
    look() {
      const routerParams = localStorage.getItem('replaceData');
      const datas = JSON.parse(routerParams);
      const curDataSet = [];
      for (let i = 0; i < datas.length; i++) {
        const cur_person = datas[i];
        if (cur_person.Purchase_id == this.Purchase_id) {
          this.DataSet = cur_person;
          // this.options = this.DataSet.Purchase_sourceTime;
          // this.DataSet.structured_content.bidSuccessTime = this.options[0];
        }
      }
      console.log(this.DataSet);
    },
    async updata() {
      try {
        const param = this.DataSet.structured_content;
        const result = await MFApi.dataRepair(param, this.Purchase_id).async();
        if (result.code === 0) {
          swal.fire('提交成功，正在审核中', '', 'success');
          this.$router.push({
            name: 'index.data.form',
          });
        }
      } catch (e) {
        console.warn('getProvince', e);
      }
    },
  },

};


export default vueSettings;
