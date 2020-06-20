$('.total').css('background-color', '#ffffff');
$('.module_bottom').hide();
const vueData = {
  state1: false,
  state2: true,
};
const vueSettings = {
  //   props: ['data'],
  data() {
    return vueData;
  },
  created() {},
  components: {},
  methods: {
    experience() {
      window.location.href = 'https://www.mafengs.com/apiuser/login';
    },
    process() {
      this.state1 = true;
      this.state2 = false;
      $('#flow').addClass('active');
      $('#term').removeClass('active');
    },
    condition() {
      this.state1 = false;
      this.state2 = true;
      $('#term').addClass('active');
      $('#flow').removeClass('active');
    },
  },
};

export default vueSettings;
