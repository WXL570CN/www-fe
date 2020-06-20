<template>
  <div class="main">
    <div class="company">
      <div>
        <div class="company-content">
          <div class="company-logo"></div>
          <div class="company-message">
            <div class="company-name">滨兴科技股份有限公司</div>
            <div class="company-place">山东省/济南市 · 政府</div>
          </div>
        </div>
        <a-button type="primary">关注</a-button>
      </div>
      <div>
        <a-button>总发布：829356条</a-button>
        <a-button type="link">昨日发布：856条</a-button>
      </div>
      <div class="heat">
        <div class="focus">
          <p>829</p>
          <span>关注</span>
        </div>
        <div class="fans">
          <p>982</p>
          <span>粉丝</span>
        </div>
      </div>
    </div>
    <div id="company-chart"></div>
  </div>
</template>

<script>
// 引入基本模板
const echarts = require('echarts/lib/echarts');
// 引入折线图组件
require('echarts/lib/chart/line');
// 引入组件
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/legend');
// require('echarts/lib/component/axis');
// require('echarts/lib/component/grid');

export default {
  name: 'hello',
  mounted() {
    const myChart = echarts.init(document.getElementById('company-chart'));

    const bgColor = '#fff';
    const color = [
      '#0090FF',
      '#36CE9E',
      '#FFC005',
      '#FF515A',
      '#8B5CFF',
      '#00CA69',
    ];
    const echartData = [
      {
        name: '05-24',
        value1: 100,
      },
      {
        name: '05-25',
        value1: 138,
      },
      {
        name: '05-26',
        value1: 350,
      },
      {
        name: '05-27',
        value1: 173,
      },
      {
        name: '05-28',
        value1: 180,
      },
      {
        name: '05-29',
        value1: 150,
      },
      {
        name: '05-30',
        value1: 180,
      },
    ];

    const xAxisData = echartData.map((v) => v.name);
    const yAxisData = echartData.map((v) => v.value1);
    const hexToRgba = (hex, opacity) => {
      let rgbaColor = '';
      const reg = /^#[\da-f]{6}$/i;
      if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt(`0x${hex.slice(1, 3)}`)},${parseInt(
          `0x${hex.slice(3, 5)}`,
        )},${parseInt(`0x${hex.slice(5, 7)}`)},${opacity})`;
      }
      return rgbaColor;
    };

    myChart.setOption({
      backgroundColor: bgColor,
      color,
      legend: {
        show: false,
      },
      grid: {
        top: 50,
        bottom: 30,
        left: 20,
        right: 30,
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: '#BBBBBB',
            },
          },
          axisLine: {
            lineStyle: {
              color: '#BBBBBB',
            },
          },
          data: xAxisData,
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#BBBBBB',
            },
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#F1F2F5',
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: '2018',
          type: 'line',
          smooth: true,
          // showSymbol: false,/
          symbolSize: 8,
          zlevel: 3,
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: hexToRgba(color[0], 0.3),
                  },
                  {
                    offset: 1,
                    color: hexToRgba(color[0], 0.1),
                  },
                ],
                false,
              ),
              shadowColor: hexToRgba(color[0], 0.1),
              shadowBlur: 10,
            },
          },
          data: yAxisData,
        },
      ],
    });
  },
};
</script>

<style lang='scss' scoped>
.main {
  display: flex;
  justify-content: space-between;
  .company {
    width: 550px;
    height: 315px;
    background-color: #fefefe;
    padding: 20px;
    padding-bottom: 0;
    > div:nth-child(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #eeeeee;
      .company-content .company-logo {
        width: 60px;
        height: 60px;
        border-radius: 2px;
        background-color: #f5a623;
        float: left;
      }
      .company-content .company-message {
        margin: 7px 0 0 70px;
      }
      .company-content .company-message .company-name {
        letter-spacing: 1px;
        font-size: 17px;
        font-weight: bold;
      }
      .company-content .company-message .company-place {
        color: #a3a3a3;
        letter-spacing: 1px;
      }
    }
    > div:nth-child(2) {
      padding: 20px 0;
      border-bottom: 1px solid #eeeeee;
      > button:nth-child(2) {
        background-color: #f3f7fe;
        margin-left: 10px;
      }
    }
    .heat {
      display: flex;
      justify-content: space-between;
      width: 240px;
      padding: 36px 0;
      .focus,
      .fans {
        width: 120px;
        height: 60px;

        text-align: center;
        > p {
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 5px;
        }
        > span {
          font-size: 14px;
        }
      }
      .focus {
        border-right: 1px solid #eeeeee;
      }
    }
  }
}

#company-chart {
  width: 650px;
  height: 315px;
}
</style>
