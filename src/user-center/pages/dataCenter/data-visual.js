/**
 * Created by ronie on 2019/12/3.
 */
import swal from 'sweetalert2';
import moment from 'moment';
import yearPicker from '../../components/year-picker';
import MFApi from '../../js/user-center/MFApi';
import VueUtil from '../../utils/VueUtil';
import {
  formateUnixTime,
  regionAggsAddProvinceName,
} from '../../utils/index';
import overNavBar from '../home/over-nav-bar.vue';

import bread from './breadcrumbs.vue';

const vueData = {
  xData: [],
  yData: null,
  yDataCompare: null,
  yDataTimeContrast: null,
  year: 0,
  cityData: [],
  monthData: [],
  MonthAmountData: [],
  lists: [{
    name: '2020',
  },
  {
    name: '2019',
  },
  {
    name: '2018',
  },
  ],
  items: [{
    name: '2020',
  },
  {
    name: '2019',
  },
  {
    name: '2018',
  },
  ],
  number: 1,
  numbers: 1,
  active: -1,
  classStyle: -1,
  mode1: 'year',
  selected: '全国',
  option: {},
  options: [],
  ProductActive: '1',
  search: {},
  searchKey: '',
  companyName: '',
  dataSource: [],
  page: 1,
  per_page: 10,
  competingName: null,
  box1: null,
  box2: null,
  firmName: '企业名称：',
  otherfirmName: '竞争企业名称：',
};
const vueSettings = {
  props: ['searchId'],
  created() {
    this.getGraphData(this.lists[this.number].name);
    this.getTimeData(this.items[this.numbers].name);
    this.competingName = null;
    this.yDataTimeContrast = null;
    this.yDataCompare = null;
    this.goToPage(1);
    const targetType = localStorage.getItem('targetType');
    if (targetType == 1) {
      this.firmName = '产品名称：';
      this.otherfirmName = '竞争产品名称：';
    }
    if (targetType == 2) {
      this.firmName = '企业名称：';
      this.otherfirmName = '竞争企业名称：';
    }
  },
  mounted() {
    this.drawLine();
    this.chart();
  },
  data() {
    return vueData;
  },
  components: {
    overNavBar,
    bread,
    formateUnixTime,
    VueUtil,
    yearPicker,
  },
  filters: {
    formateUnixTime(time, formate) {
      return formateUnixTime(time, formate);
    },
  },
  watch: {
    yData(val) {
      // 监听数据发生改变 刷新图表数据
      this.drawLine();
    },
    cityData(val) {
      this.drawLine();
    },
    monthData(val) {
      this.chart();
    },
    MonthAmountData(val) {
      this.chart();
    },
    yDataCompare(val) {
      this.drawLine();
    },
    yDataTimeContrast(val) {
      this.chart();
    },
  },
  methods: {
    async onSearch(searchText) {
      try {
        const result = await MFApi.getCompanyName(
          searchText,
          this.page,
          this.per_page,
        ).async();
        this.dataSource = !searchText ? [] : result.data.list;
      } catch (e) {
        console.warn('getCompanyName', e);
      }
      // this.dataSource = !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)];
    },
    onSelect(value) {
      const num = $('.actives').text() || this.box1;
      const time = $('.classStyle').text() || this.box2;
      this.getCompare(num, value);
      this.getTimeContrast(time, value);
      console.log('onSelect', value);
    },
    onChange(value) {
      this.value = value;
    },
    moment,
    onChange(dateMoment, dateString) {
      const year = dateMoment.format('YYYY');
      console.log({
        year,
        dateString,
      });
      $('.year span').removeClass('actives');
      this.box1 = year;
      this.getGraphData(year);
      this.getCompare(year, this.competingName);
    },
    timeRevamp(dateMoment, dateString) {
      const year = dateMoment.format('YYYY');
      console.log({
        year,
        dateString,
      });
      $('.year span').removeClass('classStyle');
      this.box2 = year;
      this.getTimeData(year);
      this.getTimeContrast(year, this.competingName);
    },
    changeProduct(event) {
      this.ProductActive = event.target.value; // 获取option对应的value值
      const num = $('.classStyle').text() || this.box2;
      console.log(num);
      this.getTimeData(num);
    },
    // changeRefit(event) {
    //   this.refit = event.target.value;
    //   const num = $('.actives').text();
    //   const time = $('.classStyle').text();
    //   this.getCompare(num, this.refit);
    //   this.getTimeContrast(time, this.refit);
    // },
    back() {
      this.$router.go(-1);
    },
    change(index, event) {
      this.number = index;
      const e = event.currentTarget;
      this.year1 = e.innerHTML;
      this.getGraphData(e.innerHTML);
      this.getCompare(e.innerHTML, this.competingName);
    },
    changes(index, event) {
      this.numbers = index;
      const e = event.currentTarget;
      this.year2 = e.innerHTML;
      this.getTimeData(e.innerHTML);
      this.getTimeContrast(e.innerHTML, this.competingName);
    },
    drawLine() {
      const dataArr = this.yData;
      const dataCity = this.cityData;
      const dataCompare = this.yDataCompare;
      const echarts = require('echarts');
      const areaChart = echarts.init(document.getElementById('areaChart'));
      areaChart.setOption({
        tooltip: {},
        legend: {
          data: ['竞品', '本身'],
          right: 120,
          top: 18,
        },
        xAxis: [{
          type: 'category',
          data: dataCity,
          axisPointer: {
            type: 'shadow',
          },
          axisLine: {
            lineStyle: {
              color: '#E6E6E6',
              width: 1,
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              fontSize: 12,
              color: '#666666',
            },
          },
        }],
        yAxis: [{
          type: 'value',
          name: '金额/元',
          nameTextStyle: {
            color: '#333333',
            fontSize: '12px',
            align: 'right',
            verticalAlign: 'bottom',
          },
          splitLine: {
            show: true,
          },
          scale: true,
          axisLabel: {
            formatter: '{value}元',
          },
          axisLine: {
            lineStyle: {
              color: '#E6E6E6',
              width: 1,
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              fontSize: 12,
              color: '#666666',
            },
          },
        }],
        series: [{
          name: '本身',
          type: 'bar',
          data: dataArr,
          itemStyle: {
            color: '#4389ff',
          },
        },
        {
          name: '竞品',
          type: 'bar',
          data: dataCompare,
          itemStyle: {
            color: '#FF9843',
          },
        },
        ],
      });
    },
    chart() {
      const dataMonth = this.monthData;
      const dataMonthAmount = this.MonthAmountData;
      const dataTimeContrast = this.yDataTimeContrast;
      const echarts = require('echarts');
      const charts = echarts.init(document.getElementById('chart'));
      charts.setOption({
        tooltip: {},
        legend: {
          data: ['竞品', '本身'],
          right: 120,
          top: 18,
        },
        xAxis: [{
          type: 'category',
          data: dataMonth,
          axisPointer: {
            type: 'shadow',
          },
          axisLine: {
            lineStyle: {
              color: '#E6E6E6',
              width: 1,
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              fontSize: 12,
              color: '#666666',
            },
          },
        }],
        yAxis: [{
          type: 'value',
          name: '金额/元',
          nameTextStyle: {
            color: '#333333',
            fontSize: '12px',
            align: 'right',
            verticalAlign: 'bottom',
          },
          splitLine: {
            show: true,
          },
          scale: true,
          axisLabel: {
            formatter: '{value}',
          },
          axisLine: {
            lineStyle: {
              color: '#E6E6E6',
              width: 1,
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              fontSize: 12,
              color: '#666666',
            },
          },
        }],
        series: [{
          name: '本身',
          type: 'bar',
          data: dataMonthAmount,
          itemStyle: {
            color: '#4389ff',
          },
        },
        {
          name: '竞品',
          type: 'bar',
          data: dataTimeContrast,
          itemStyle: {
            color: '#FF9843',
          },
        },
        ],
      });
    },
    async goToPage(page) {
      this.searchKey = localStorage.getItem('searchKey');
      try {
        const result = await MFApi.getCompanyData(page).async();
        const items = result.data.data;
        const arrayList = [];
        for (let i = 0; i < items.length; i++) {
          if (items[i].search_name != '') {
            arrayList.push(items[i]);
          }
        }
        // const list = items.filter((item) => item.search_name != '') ;
      } catch (e) {
        console.warn('getCity', e);
      }
    },
    unique(arr) {
      const res = new Map();
      return arr.filter(
        (arr) => !res.has(arr.search_name) && res.set(arr.search_name, 1),
      );
    },
    async getGraphData(year) {
      try {
        const curDataSet = [];
        const curDataCity = [];
        const result = await MFApi.getGraphData(this.searchId, year).async();
        const list = result.data.buckets.Purchase_region1_aggs.buckets;
        const datas = await regionAggsAddProvinceName(list);

        for (let i = 0; i < datas.length; i++) {
          const cityName = datas[i].key_as_string;
          curDataCity.push(cityName);
        }
        for (let i = 0; i < list.length; i++) {
          const curList = list[i].total_amount;
          curDataSet.push(curList);
        }
        this.yData = curDataSet;
        this.cityData = curDataCity;
        this.options = curDataCity;
        this.ProductActive = this.options[0];
      } catch (e) {
        console.warn('getGraphData', e);
      }
    },
    async getTimeData(year) {
      try {
        const curDataMonth = [];
        const curMonthAmount = [];
        const container = [];
        const result = await MFApi.getGraphData(this.searchId, year).async();
        const listMay = result.data.buckets.month_aggs.buckets;
        const list = await regionAggsAddProvinceName(
          result.data.buckets.Purchase_region1_aggs.buckets,
        );
        if (this.ProductActive != 1) {
          for (let i = 0; i < list.length; i++) {
            const curLists = list[i].key_as_string;
            if (this.ProductActive == curLists) {
              const allNum = list[i].month_aggs.buckets;
              for (let i = 0; i < allNum.length; i++) {
                const sum = allNum[i].total_amount;
                container.push(sum);
              }
            }
          }
        }
        for (let i = 0; i < listMay.length; i++) {
          const curList = listMay[i].key_as_string;
          const curData = listMay[i].total_amount;
          curDataMonth.push(curList);
          curMonthAmount.push(curData);
        }
        if (this.ProductActive == 1) {
          this.MonthAmountData = curMonthAmount;
        }
        this.monthData = curDataMonth;
        if (this.ProductActive != 1) {
          this.MonthAmountData = container;
        }
      } catch (e) {
        console.warn('getGraphData', e);
      }
    },
    async getCompare(year, compareCompanyName) {
      if (compareCompanyName == null) {
        return false;
      }
      try {
        const curCompare = [];
        const result = await MFApi.getGraphData(
          this.searchId,
          year,
          compareCompanyName,
        ).async();
        const list = result.data.buckets.Purchase_region1_aggs.buckets;
        for (let i = 0; i < list.length; i++) {
          const curList = list[i].total_amount;
          curCompare.push(curList);
        }
        this.yDataCompare = curCompare;
      } catch (e) {
        console.warn('getGraphData', e);
      }
    },
    async getTimeContrast(year, compareCompanyName) {
      if (compareCompanyName == null) {
        return false;
      }
      try {
        const curTimeContrast = [];
        const result = await MFApi.getGraphData(
          this.searchId,
          year,
          compareCompanyName,
        ).async();
        const list = result.data.buckets.month_aggs.buckets;
        for (let i = 0; i < list.length; i++) {
          const curList = list[i].total_amount;
          curTimeContrast.push(curList);
        }
        this.yDataTimeContrast = curTimeContrast;
      } catch (e) {
        console.warn('getGraphData', e);
      }
    },
  },
};

export default vueSettings;
