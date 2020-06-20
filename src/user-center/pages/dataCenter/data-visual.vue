<template>
  <div class="visual-mains">
    <over-nav-bar></over-nav-bar>
    <div class="content">
      <bread title="数据可视化"></bread>
      <div class="top-nav">
        <span>{{ searchKey }}的表单数据可视化</span>
        <button v-on:click="back()">返回表单</button>
      </div>
      <div class="top-step">
        <div class="step">
          <a-steps :current="2" size="small">
            <a-step title="搜索并添加" />
            <!-- <a-step title="编辑修改/下载" /> -->
            <a-step title="实时更新数据" />
            <a-step title="完成" />
          </a-steps>
        </div>
      </div>
      <div class="center-select">
        <span>{{firmName}}</span>
        <span class="first-name">{{ searchKey }}</span>
        <span class="contend">{{otherfirmName}}</span>
        <!-- <select class="next-name" v-model="refit" @change="changeRefit">
          <option
            v-for="search in firmLists"
            v-bind:key="search.id"
            v-bind:value="search.id"
            :value-key="search"
          >{{search.search_name}}</option>
        </select>-->
        <!-- <i class="searchBtn"></i> -->
        <a-auto-complete
          style="width: 240px;height: 36px;background: rgba(255, 255, 255, 1);"
          size="default"
          :dataSource="dataSource"
          @select="onSelect"
          @search="onSearch"
          placeholder="搜索竞品公司"
          v-model="competingName"
        />
      </div>
      <div class="area-Shape">
        <div class="title">
          <span>地区/金额表单</span>
          <div class="year">
            <span
              class="type"
              :value="i + 1"
              v-for="(list, i) in lists"
              v-bind:key="i"
              @click="change(i, $event)"
              :class="{ actives: i === number }"
            >{{ list.name }}</span>
            <template>
              <yearPicker :defaultValue="moment('2017', 'YYYY')" @change="onChange" v-model="box1"></yearPicker>
            </template>
          </div>
        </div>
        <div id="areaChart"></div>
      </div>
      <div class="area-Shape">
        <div class="title">
          <span>时间/金额表单</span>
          <div class="year">
            <span
              class="type"
              :value="i + 1"
              v-for="(item, i) in items"
              v-bind:key="i"
              @click="changes(i, $event)"
              :class="{ classStyle: i === numbers }"
            >{{ item.name }}</span>
            <template>
              <yearPicker
                :defaultValue="moment('2017', 'YYYY')"
                @change="timeRevamp"
                v-model="box2"
              ></yearPicker>
            </template>
            <select
              class="type"
              style="padding:6px 15px;"
              v-model="ProductActive"
              @change="changeProduct"
            >
              <option
                v-for="(option, index) in options"
                v-bind:value="option"
                v-bind:key="option.value"
                :value-key="index"
              >{{ option }}市</option>
            </select>
          </div>
        </div>
        <div id="chart"></div>
      </div>
      <div class="declaration">
        <div class="title">
          <span>数据声明</span>
        </div>
        <div>
          <p>该数据服务由马蜂盯标提供辅助使用，最终解释权归马蜂盯标网所有！</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./data-visual.js"></script>
<style lang="scss" scoped>
.actives {
  color: #ffffff;
  background-color: #4389ff !important;
  border: 1px solid #4389ff !important;
}
.classStyle {
  color: #ffffff;
  background-color: #4389ff !important;
  border: 1px solid #4389ff !important;
}
.visual-mains {
  height: 100%;
  width: 100%;
  .content {
    padding: 0 calc(50% - 604px);
    .top-nav {
      display: flex;
      align-items: center;
      height: 56px;
      width: 100%;
      background-color: #ffffff;
      padding: 20px 24px;
      span {
        padding-left: 6px;
        border-left: 3px solid #4389ff;
        font-size: 16px;
        font-weight: bold;
        line-height: 17px;
      }
      button {
        margin-left: auto;
        width: 116px;
        height: 31px;
        background: rgba(67, 137, 255, 1);
        border: none;
        border-radius: 0;
        color: #ffffff;
      }
    }
    .top-step {
      height: 120px;
      padding: 16px 24px;
      background-color: #ffffff;
      margin-top: 2px;
      .step {
        display: flex;
        align-items: center;
        background-color: #f9fafd;
        height: 88px;
        padding: 28px 70px;
      }
    }
    .center-select {
      height: 70px;
      width: 100%;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      padding: 17px 24px;
      margin-top: 10px;
      select {
        width: 291px;
        height: 36px;
        background: #ffffff;
        border-radius: 2px;
        border: 1px solid #e6e6e6;
        padding-left: 17px;
        margin-right: 24px;
        span {
          width: 24px;
          height: 14px;
          background: rgba(255, 152, 67, 1);
        }
      }
      .contend {
        margin-left: 50px;
      }
      .contendInput {
        position: relative;
        width: 240px;
        height: 36px;
        background: rgba(255, 255, 255, 1);
        border-radius: 2px;
        border: 1px solid #cccccc;
        padding: 0 40px;
      }
      .searchBtn {
        display: inline-block;
        height: 16px;
        width: 16px;
        background-image: url("../../assets/static/images/data-center/system-serch.png");
        position: relative;
        left: 30px;
        z-index: 100;
      }
      .first-name {
        padding: 8px 16px;
        height: 36px;
        background: rgba(238, 238, 238, 1);
        color: #666666;
        min-width: 214px;
        text-align: center;
        display: inline-block;
      }
    }
    .area-Shape {
      min-height: 387px;
      width: 100%;
      background-color: #ffffff;
      margin-top: 10px;
      padding: 0 24px;
      > .title {
        display: flex;
        align-items: center;
        height: 63px;
        padding: 7px 16px 0 16px;
        border-bottom: 1px solid #eeeeee;
        > span {
          font-weight: bold;
        }
      }
      .year {
        margin-left: auto;
        .type {
          font-size: 12px;
          padding: 6px 25px;
          border: 1px solid #eeeeee;
          background-color: #ffffff;
          max-width: 100px;
          margin-right: 8px;
          cursor: pointer;
          text-align: center;
          border-radius: 20px;
        }
      }
      #areaChart {
        width: 100%;
        min-height: 323px;
        background-color: #ffffff;
      }
      #chart {
        width: 100%;
        min-height: 323px;
        background-color: #ffffff;
      }
    }
    .declaration {
      width: 100%;
      height: 156px;
      margin-top: 10px;
      padding: 7px 24px 40px 24px;
      background-color: #ffffff;
      div {
        display: flex;
        align-items: center;
        p {
          margin: 16px 0 0 16px;
        }
      }
      .title {
        height: 63px;
        width: 100%;
        border-bottom: 1px solid #eeeeee;
        span {
          font-weight: bold;
          margin-left: 16px;
        }
      }
    }
  }
}
</style>
