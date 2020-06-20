<template>
  <div class="main">
    <div class="purchasing-data">
      <div class="total">
        采购中心站点总计：
        <span>829348</span>
      </div>
      <div id="total-chart"></div>
    </div>
  </div>
</template>

<script>
// 引入基本模板
const echarts = require('echarts/lib/echarts');
// 引入饼图组件
require('echarts/lib/chart/pie');
// 引入提示框和title组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/legend');

export default {
  name: 'hello',
  mounted() {
    const myChart = echarts.init(document.getElementById('total-chart'));

    // 数据改造
    const chartData = [
      { value: 3315, name: '政府项目' },
      { value: 33215, name: '企业项目' },
      { value: 335, name: '事业单位' },
      { value: 3315, name: '代理公司' },
      { value: 3135, name: '电子交易平台' },
      { value: 3345, name: '医院' },
      { value: 55435, name: '学校' },
      { value: 3435, name: '央企' },
      { value: 1335, name: '国企' },
    ];
    // 将数组
    // [{ value: 3315, name: '政府项目' },...]
    // 改造为
    // {'政府项目': { value: 3315, name: '政府项目' },...}
    // 的格式
    function arrayToObj(array, key) {
      const resObj = {};
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
      }
      return resObj;
    }
    // 将数据转换成图例所需格式的数据
    function getLegendData(array) {
      const legendData = [];
      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < array.length; j++) {
        if ((j + 1) % 5 === 0) {
          legendData.push(array[j].name);
          legendData.push('');
        } else legendData.push(array[j].name);
      }
      return legendData;
    }

    const legendData = getLegendData(chartData);
    const obj = arrayToObj(chartData, 'name');

    // 绘制图表
    myChart.setOption({
      tooltip: {
        // 提示
        trigger: 'item',
        formatter: '{b}:{c}',
        color: '#000',
        textStyle: {
          color: 'black',
        },
      },
      legend: {
        // 图例
        orient: 'vertical',
        left: 15,
        top: 20,
        itemGap: 19,
        itemWidth: 12,
        itemHeight: 8,
        data: legendData,
        formatter: (name) => `{title|${name}}  ${obj[name].value}`,
        textStyle: {
          rich: {
            title: {
              color: '#B7B7B7',
            },
          },
        },
      },
      series: [
        {
          type: 'pie',
          radius: ['35%', '80%'],
          // color: ['#42C368', '#50AFFC', '#2378D8', '#14468F'],
          left: 425,
          labelLine: {
            normal: {
              length: 1,
              length2: 20,
              lineStyle: {
                type: 'solid',
              },
            },
          },
          label: {
            formatter: '{b}:  {d}%',
          },
          data: chartData,
        },
      ],
    });
  },
};
</script>

<style lang='scss' scoped>
.main {
  width: 890px;
  margin-bottom: 10px;
  .purchasing-data {
    height: 245px;
    background-color: #fff;
    .total {
      border-bottom: 1px solid #e9e9e9;
      padding-left: 20px;
      height: 45px;
      line-height: 45px;
    }
    #total-chart {
      width: 800px;
      height: 200px;
    }
  }
}
</style>
