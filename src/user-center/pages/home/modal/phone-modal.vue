<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    // showPhoneModal() {
    //   this.visible = true;
    // },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
  },
};
</script>

<style scoped>

</style>
