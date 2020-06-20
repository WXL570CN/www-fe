/**
 * Created by ronie on 2019/12/3.
 */
import swal from 'sweetalert2';
import subTitle from '../../home/sub-title.vue';
import MFApi from '../../../js/user-center/MFApi';
import VueUtil from '../../../utils/VueUtil';
import {
  formateUnixTime,
} from '../../../utils';
import {
  isCompanyName,
  isLegalPhone,
  isPostCode,
  isWscnEmail,
  isRegCapital,
  isUsccode,
  isUrl,
  isAddress,
  isRegOffice,
  isLegalRepre,
} from './validate';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
const vueData = {
  startTime: 0,
  condition: 3,
};

const vueSettings = {
  data() {
    return vueData;
  },
  components: {
    subTitle,
  },
  watch: {},
  created() {
    this.getStatus();
  },
  filters: {
    formateUnixTime(time, formate) {
      return formateUnixTime(time, formate);
    },
  },
  mounted() {},
  methods: {
    compile() {
      this.$router.push({
        path: 'approve-data',
      });
    },
    async getStatus() {
      try {
        const result = await MFApi.getStatus().async();
        this.condition = result.data.status;
        this.startTime = result.data.updateTime;
      } catch (e) {
        console.warn('getStatus()', e);
      }
    },
  },
};
export default vueSettings;
