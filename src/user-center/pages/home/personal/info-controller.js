/**
 * Created by ronie on 2019/12/3.
 */


import swal from 'sweetalert2';
import MFApi from '../../../js/user-center/MFApi';
import subTitle from '../sub-title.vue';

const vueSettings = {
  data() {
    return {
      isLoading: false,
      isSubmiting: false,
      user: {},
    };
  },
  created() {
    this.fetchData();
  },
  components: {
    subTitle,
  },
  methods: {
    uploadHeadImg() {
      this.$el.querySelector('#photo').click();
    },
    handleFile(e) {
      const $target = e.target || e.srcElement;
      const file = $target.files[0];
      const reader = new FileReader();
      reader.onload = (data) => {
        const res = data.target || data.srcElement;
        this.user.User_photo = res.result;
      };
      reader.readAsDataURL(file);
    },
    async fetchData() {
      const self = this;
      if (self.isLoading) {
        return;
      }
      self.isLoading = true;
      try {
        const result = await MFApi.getUserProfile().async();
        this.user = result.data;
      } catch (e) {
        console.warn('getUserProfile', e);
      }
      self.isLoading = false;
    },

    async save() {
      if (this.isSubmiting) {
        return;
      }
      this.isSubmiting = true;
      try {
        const result = await MFApi.saveUserProfile(this.user).async();
        if (result.code === 0) {
          swal.fire('保存成功', '', 'success');
        }
      } catch (e) {
        console.warn('saveUserProfile', e);
      }
      this.isSubmiting = false;
    },

  },
};


export default vueSettings;
