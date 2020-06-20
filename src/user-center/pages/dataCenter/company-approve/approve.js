/**
 * Created by ronie on 2019/12/3.
 */
import swal from 'sweetalert2';
import subTitle from '../../home/sub-title.vue';
import MFApi from '../../../js/user-center/MFApi';
import VueUtil from '../../../utils/VueUtil';
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
  list: [],
  rankList: [],
  provinceArr: [],
  cityArr: [],
  districtArr: [],
  prov: '',
  city: '',
  district: '',
  identity: '',
  info: {},
  industries: [],
  Company_respSex: 1,
  previewVisible: false,
  dateString: '',
  previewImage: '',
  fileList: [{
    uid: '-1',
    name: 'image.png',
    status: 'removed',
    url: '',
  }],
  state: false,
  Company_certPhoto: ['uploads/certifications/20200514/202005141129015ebcbafd78fb6.jpg'],
  rules: {
    Company_name: [{
      required: true,
      message: '请输入公司名称',
      trigger: 'blur',
    },
    {
      validator: isCompanyName,
      trigger: 'blur',
    },
    ],
    Company_regCapital: [{
      required: true,
      message: '请输入注册基金',
      trigger: 'blur',
    },
    {
      validator: isRegCapital,
      trigger: 'blur',
    },
    ],
    Company_legalRepre: [{
      required: true,
      message: '请输入法人代表',
      trigger: 'blur',
    },
    {
      validator: isLegalRepre,
      trigger: 'blur',
    },
    ],
    Company_regOffice: [{
      required: true,
      message: '请输入登记机关',
      trigger: 'blur',
    },
    {
      validator: isRegOffice,
      trigger: 'blur',
    },
    ],
    Company_legalPhone: [{
      required: true,
      message: '请输入手机号码',
      trigger: 'blur',
    },
    {
      validator: isLegalPhone,
      trigger: 'blur',
    },
    ],
    Company_postCode: [{
      required: true,
      message: '请输入邮政编码',
      trigger: 'blur',
    },
    {
      validator: isPostCode,
      trigger: 'blur',
    },
    ],
    Company_email: [{
      required: true,
      message: '请输入公司邮箱',
      trigger: 'blur',
    },
    {
      validator: isWscnEmail,
      trigger: 'blur',
    },
    ],
    Company_emploNum: [{
      required: true,
      message: '请输入员工人数',
      trigger: 'blur',
    },
    {
      validator: isRegCapital,
      trigger: 'blur',
    },
    ],
    Company_usccode: [{
      required: true,
      message: '请输入社会信用代码',
      trigger: 'blur',
    },
    {
      validator: isUsccode,
      trigger: 'blur',
    },
    ],
    Company_url: [{
      required: true,
      message: '请输入公司网址',
      trigger: 'blur',
    },
    {
      validator: isUrl,
      trigger: 'blur',
    },
    ],
    // Company_address: [{
    //   required: true,
    //   message: '请输入公司地址',
    //   trigger: 'blur',
    // },
    // {
    //   validator: isAddress,
    //   trigger: 'blur',
    // },
    // ],
    Company_respName: [{
      required: true,
      message: '请输入联系人姓名',
      trigger: 'blur',
    },
    {
      validator: isLegalRepre,
      trigger: 'blur',
    },
    ],
    Company_respEmail: [{
      required: true,
      message: '请输入个人邮箱',
      trigger: 'blur',
    },
    {
      validator: isWscnEmail,
      trigger: 'blur',
    },
    ],
    Company_respPhone: [{
      required: true,
      message: '请输入个人手机号',
      trigger: 'blur',
    },
    {
      validator: isLegalPhone,
      trigger: 'blur',
    },
    ],
  },
};

const vueSettings = {
  data() {
    return vueData;
  },
  components: {
    subTitle,
  },
  watch: {
    prov(val) {
      this.getcityArr(val);
    },
    city(cityId) {
      console.log(cityId);
      this.getdistrictArr(cityId);
    },
  },
  created() {
    this.getFormConfig();
    this.getprovinceArr();
  },
  mounted() {},
  methods: {
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({
      fileList,
    }) {
      this.fileList = fileList;
    },
    onChange(moment, dateString) {
      this.dateString = moment.unix();
    },
    onChangeTrade(checkedValues) {
      console.log('checked = ', checkedValues);
      this.industries = checkedValues;
    },
    identityChange(event) {
      this.identity = event.target.value; // 获取option对应的value值
    },
    sexChange(event) {
      this.Company_respSex = event.target.value;
    },
    async getFormConfig() {
      try {
        const result = await MFApi.getIndustry().async();
        this.list = result.data.industries;
        this.rankList = result.data.companyTypes;
      } catch (e) {
        console.warn('getDataDesired', e);
      }
    },
    async getprovinceArr() {
      try {
        const result = await MFApi.getProvince().async();
        this.provinceArr = result.data;
      } catch (e) {
        console.warn('getProvince', e);
      }
    },
    async getcityArr(id) {
      try {
        const result = await MFApi.getCity(id).async();
        this.cityArr = result.data;
      } catch (e) {
        console.warn('getCity', e);
      }
    },
    async getdistrictArr(id) {
      try {
        const result = await MFApi.getCity(id).async();
        this.districtArr = result.data;
      } catch (e) {
        console.warn('getcity', e);
      }
    },
    async postApproveInfo() {
      this.$refs.infoForm.validate((valid) => {
        if (valid) {
          this.state = true;
        } else {
          this.state = false;
          return false;
        }
      });
      if (this.state == true) {
        try {
          this.info.Company_class = this.identity;
          this.info.industries = this.industries;
          this.info.Company_region1 = this.prov;
          this.info.Company_region2 = this.city;
          this.info.Company_region3 = this.district;
          this.info.Company_respSex = this.Company_respSex;
          this.info.Company_certPhoto = this.Company_certPhoto;
          this.info.Company_estaDate = this.dateString;
          console.log(this.info);
          const result = await MFApi.postCompanyInfo(this.info).async();
          console.log(result);
          if (result.code == 0) {
            swal.fire('提交认证成功正在审核', '', 'success');
            this.$router.push({
              path: 'audit-data',
              params: {},
            });
          }
        } catch (e) {
          console.warn('postCompanyInfo', e);
        }
      }
    },
  },
};
export default vueSettings;
