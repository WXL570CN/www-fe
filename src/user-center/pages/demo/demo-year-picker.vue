<template>
  <yearPicker
    :defaultValue="moment('2015', 'YYYY')"
    @change="onChange"
  ></yearPicker>
</template>

<script>
import moment from 'moment';
import yearPicker from '@src/user-center/components/year-picker';

export default {
  name: 'demo-year-picker',
  components: {
    yearPicker,
  },
  methods: {
    moment,
    onChange(dateMoment, dateString) {
      const year = dateMoment.format('YYYY');
      console.log({
        year,
        dateString,
      });
    },
  },
};
</script>

<style scoped>

</style>
