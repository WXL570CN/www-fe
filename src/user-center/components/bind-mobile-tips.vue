<template>
  <div class="module_right">
    <!-- 标题栏-->
    <div class="right-content">
      <!--          手机号绑定提醒-->
      <a-modal title="" v-model="hint.visible" @ok="handleOk" width="400px" :footer="null">
        <div class="hint-center">
          <i class="img"></i>
          <div class="center-text">
            <span>您还未绑定手机，绑定后解锁</span>
          </div>
          <div style="text-align: center;color: #333">更多功能</div>
        </div>
        <div class="foot">
          <span class="cancel" v-on:click="close">取消</span>
          <a href="#/context-phone"><span class="bound">绑定</span></a>
        </div>
      </a-modal>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hint: {
        visible: true,
      },
    };
  },
  methods: {
    handleOk(e) {
      this.hint.visible = false;
    },
    close() {
      this.hint.visible = false;
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../pages/home/personal/modal.css";
</style>
