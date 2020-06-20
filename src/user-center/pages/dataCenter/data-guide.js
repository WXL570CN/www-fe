import swal from 'sweetalert2';
import {
  isLogin,
} from '@src/user-center/js/auth';
import MFApi from '../../js/user-center/MFApi';
import VueUtil from '../../utils/VueUtil';
import overNavBar from '../home/over-nav-bar.vue';
import {
  formateUnixTime,
} from '../../utils';

const vueData = {
  items: [],
  currentPage: 0,
  last_page: 0,
  searchId: 0,
  info: {
    user_name: '',
    company_name: '',
    company_addr: '',
    email: '',
    telephone: '',
    job_title: '',
  },
};
const vueSettings = {
  //   props: ['data'],
  data() {
    return vueData;
  },
  created() {},
  components: {
    overNavBar,
    formateUnixTime,
  },
  filters: {
    formateUnixTime(time, formate) {
      return formateUnixTime(time, formate);
    },
  },
  methods: {
    experience() {
      if (!isLogin()) {
        swal.fire('请先登录', '', 'success');
        $('.login').click();
      } else {
        this.$router.push({
          path: '/data-center',
        });
      }
    },
    applyFor() {
      const scroll_offset = $('.form').offset();
      $('body,html').animate({
        scrollTop: scroll_offset.top, // 让body的scrollTop等于pos的top，就实现了滚动
      },
      200);
    },
    async onSubmit() {
      if (!isLogin()) {
        swal.fire('请先登录', '', 'success');
        $('.login').click();
      }
      try {
        if (Object.values(this.info).includes('')) {
          swal.fire('表单不能为空', '', 'success');
        } else {
          const result = await MFApi.getFormInfo(this.info).async();
          if (result.code === 0) {
            swal.fire('表单提交成功', '', 'success');
            this.$router.push({
              name: 'data.add.data',
              query: {

              },
            });
          }
        }
      } catch (e) {
        console.warn('getFormInfo', e);
      }
    },
  },
};

export default vueSettings;
