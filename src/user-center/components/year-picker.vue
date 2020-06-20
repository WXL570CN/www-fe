<template>
  <a-date-picker
    :open="open"
    :value="time"
    mode="year"
    v-bind="$attrs"
    @openChange="onOpenChange"
    @panelChange="onPanelChange"
    class="dataSelect"
    format="YYYY"
    placeholder="请选择年份"/>
</template>

<script>
import moment from 'moment';

export default {
  name: 'year-picker',
  inheritAttrs: false,
  data() {
    return {
      open: false,
      time: null,
    };
  },
  methods: {
    moment,
    onOpenChange(status) {
      this.open = status;
    },
    onPanelChange(dateMoment) {
      this.time = dateMoment;
      this.$emit('change', dateMoment, dateMoment.format('YYYY'));
      this.open = false;
    },
  },
};
</script>

<style scoped>

</style>
