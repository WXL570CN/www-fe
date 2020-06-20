<template>
  <div class="approve-mains">
    <div class="wasp_title">
      <span>企业认证</span>
    </div>
    <div class="wasp_content">
      <a-form-model ref="infoForm" :model="info" :rules="rules">
        <ul>
          <li>
            <a-form-model-item prop="Company_name">
              <div>
                <i>*</i>
                <span>公司名称：</span>
                <a-input type="text" placeholder="请输入公司名称" v-model="info.Company_name" />
              </div>
            </a-form-model-item>
            <a-form-model-item prop="Company_regCapital">
              <div>
                <i>*</i>
                <span>注册基金：</span>
                <a-input type="text" placeholder="请输入注册资金" v-model="info.Company_regCapital" />
                <span class="locate">万元</span>
              </div>
            </a-form-model-item>
          </li>
          <li>
            <div>
              <i>*</i>
              <span style="margin-right: 16px;">成立日期：</span>
              <a-date-picker @change="onChange" style="width: 260px" />
            </div>
            <a-form-model-item prop="Company_legalRepre">
              <div>
                <i>*</i>
                <span>法人代表：</span>
                <a-input type="text" placeholder="请输入法人代表" v-model="info.Company_legalRepre" />
              </div>
            </a-form-model-item>
          </li>
          <li class="gap">
            <a-form-model-item prop="Company_regOffice">
              <div>
                <i>*</i>
                <span>登记机关：</span>
                <a-input type="text" placeholder="请输入登记机关" v-model="info.Company_regOffice" />
              </div>
            </a-form-model-item>

            <a-form-model-item prop="Company_legalPhone">
              <div>
                <i>*</i>
                <span>手机号码：</span>
                <a-input type="text" placeholder="请输入手机号码" v-model="info.Company_legalPhone" />
              </div>
            </a-form-model-item>
          </li>
          <li>
            <a-form-model-item prop="Company_postCode">
              <div>
                <i>*</i>
                <span>邮政编码：</span>
                <a-input type="text" placeholder="请输入邮政编码" v-model="info.Company_postCode" />
              </div>
            </a-form-model-item>
            <div>
              <i>*</i>
              <span>公司固话：</span>
              <a-input
                type="text"
                placeholder
                v-model="info.Company_telCodes"
                style="width:80px;padding:0 12px"
                :max="4"
              />-
              <a-input
                type="text"
                placeholder
                v-model="info.Company_tel"
                style="width:160px;padding:0 12px;margin-left: 8px;"
              />
            </div>
          </li>
          <li class="gap">
            <a-form-model-item prop="Company_email">
              <div>
                <i>*</i>
                <span>公司邮箱：</span>
                <a-input type="text" placeholder="请输入公司邮箱" v-model="info.Company_email" />
              </div>
            </a-form-model-item>

            <a-form-model-item prop="Company_emploNum">
              <div>
                <i>*</i>
                <span>员工人数：</span>
                <a-input type="text" placeholder="请输入员工人数" v-model="info.Company_emploNum" />
                <span class="locate">人数</span>
              </div>
            </a-form-model-item>
          </li>
          <li>
            <div>
              <i>*</i>
              <span>公司身份：</span>
              <select
                class="import_style_short excess"
                v-model="identity"
                @change="identityChange($event)"
              >
                <option
                  v-for="option in rankList"
                  :key="option.class_id"
                  :value="option.class_id"
                >{{option.class_name}}</option>
              </select>
            </div>
            <a-form-model-item prop="Company_usccode">
              <div style="margin-left: -43px">
                <i>*</i>
                <span>统一社会信用代码：</span>
                <a-input type="text" placeholder="请输入统一社会信用代码" v-model="info.Company_usccode" />
              </div>
            </a-form-model-item>
          </li>
          <li class="industry gap">
            <div style="flex: 0.1">
              <i>*</i>
              <span>行业分类：</span>
            </div>
            <div class="check_inform">
              <a-checkbox-group @change="onChangeTrade">
                <a-row>
                  <a-col v-for="(item,index) in list" :key="index" :span="5">
                    <a-checkbox :value="item.Ind_id">{{item.Ind_name}}</a-checkbox>
                  </a-col>
                </a-row>
              </a-checkbox-group>
            </div>
          </li>
          <li>
            <a-form-model-item prop="Company_url">
              <div>
                <i>*</i>
                <span>公司网址：</span>
                <a-input
                  type="text"
                  placeholder="请输入公司网址"
                  style="width: 764px"
                  v-model="info.Company_url"
                />
              </div>
            </a-form-model-item>
          </li>
          <li>
            <div>
              <i>*</i>
              <span>所属地区：</span>
              <select class="import_style_short" v-model="prov">
                <option
                  v-for="(option) in provinceArr"
                  :key="option.Region_id"
                  :value="option.Region_id"
                >{{option.Region_name}}</option>
              </select>
              <select class="import_style_short" v-model="city">
                <option
                  v-for="(option) in cityArr"
                  :key="option.Region_id"
                  :value="option.Region_id"
                >{{option.Region_name}}</option>
              </select>
              <select class="import_style_short" v-model="district">
                <option
                  v-for="(option) in  districtArr"
                  :key="option.Region_id"
                  :value="option.Region_id"
                >{{option.Region_name}}</option>
              </select>
            </div>
          </li>
          <li>
            <a-form-model-item prop="Company_address">
              <div>
                <i>*</i>
                <span>公司地址：</span>
                <a-input
                  type="text"
                  placeholder="请输入公司地址"
                  style="width: 764px"
                  v-model="info.Company_address"
                />
              </div>
            </a-form-model-item>
          </li>
          <li>
            <div class="manage">
              <i>*</i>
              <span>经营范围：</span>
              <textarea placeholder="请输入你的阶段性工作目标" rows="4" v-model="info.Company_busiScope"></textarea>
            </div>
          </li>
          <li>
            <div class="manage">
              <i>*</i>
              <span>公司简介：</span>
              <textarea placeholder="请输入你的公司简介" rows="4" v-model="info.Company_introd"></textarea>
            </div>
          </li>
          <!-- 分割线样式-->
          <div class="cutting">
            <b></b>
            <span>负责人信息</span>
            <b></b>
          </div>
          <li>
            <a-form-model-item>
              <div>
                <i>*</i>
                <span>姓名：</span>
                <a-input type="text" placeholder="请输入姓名" v-model="info.Company_respName" />
              </div>
            </a-form-model-item>

            <div>
              <i>*</i>
              <span>性别：</span>
              <select
                class="import_style_short excess"
                @change="sexChange($event)"
                v-model="Company_respSex"
              >
                <option value="1">男</option>
                <option value="0">女</option>
              </select>
            </div>
          </li>
          <li>
            <a-form-model-item prop="Company_respEmail">
              <div>
                <i>*</i>
                <span>邮箱：</span>
                <a-input type="text" placeholder="请输入邮箱" v-model="info.Company_respEmail" />
              </div>
            </a-form-model-item>
            <a-form-model-item prop="Company_respPhone">
              <div style="margin-left: -24px;">
                <i>*</i>
                <span>手机号码：</span>
                <a-input type="text" placeholder="请输入手机号码" v-model="info.Company_respPhone" />
              </div>
            </a-form-model-item>
          </li>
          <!-- 分割线样式-->
          <div class="cutting">
            <b></b>
            <span>认证资料上传</span>
            <b></b>
          </div>
          <!-- 图片上传-->
          <div class="clearfix">
            <a-upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              list-type="picture-card"
              :file-list="fileList"
              @preview="handlePreview"
              @change="handleChange"
            >
              <div v-if="fileList.length < 4">
                <a-icon type="plus" />
                <div class="ant-upload-text">上传图片</div>
              </div>
            </a-upload>
            <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
              <img alt="example" style="width: 100%" :src="previewImage" />
            </a-modal>
          </div>
          <div style="display: flex;justify-content: center;">
            <button type="button" value="提交申请" v-on:click="postApproveInfo()">提交申请</button>
          </div>
        </ul>
      </a-form-model>
    </div>
  </div>
</template>
<script src="./approve.js"></script>
<style lang="scss" scoped>
.excess {
  width: 260px;
}
.approve-mains {
  min-width: 960px;
  display: inline-block;
  margin: 20px 0 0 20px;
}
.wasp_title {
  display: flex;
  align-items: center;
  height: 56px;
  width: 960px;
  background-color: #fff;
  border-bottom: 1px solid #e9eeef;
  span {
    font-size: 16px;
    color: #4389ff;
    margin-left: 32px;
  }
}
.wasp_content {
  width: 960px;
  background-color: #fff;
  padding-bottom: 20px;
  ul {
    li {
      display: flex;
      > div {
        margin: 24px 0 0 53px;
        flex: 1;
        i {
          margin-top: 4px;
          display: inline-block;
          vertical-align: middle;
          color: red;
        }
        span {
          font-size: 12px;
        }
        .locate {
          position: relative;
          right: 46px;
        }
        input[type="text"] {
          position: relative;
          width: 260px;
          height: 34px;
          background: #fff;
          border-radius: 2px;
          // border: 1px solid #e6e6e6;
          padding: 0 60px 0 12px;
          margin-left: 16px;
        }
        textarea {
          height: 94px;
          min-height: 32px;
          margin: 0 0 4px 16px;
          padding: 4px 11px;
          overflow: auto;
          resize: vertical;
          line-height: 1.5;
          vertical-align: bottom;
          box-sizing: border-box;
          display: inline-block;
          width: 86%;
          color: rgba(0, 0, 0, 0.65);
          font-size: 14px;
          border: 1px solid #d9d9d9;
          border-radius: 4px;
          transition: all 0.3s;
        }
        select {
          margin-left: 15px;
        }
      }
    }
    .gap {
      margin-bottom: 36px;
    }
    .industry {
      display: flex;
      flex-flow: row wrap;
      .check_inform {
        margin-left: 8px;
        div {
          display: inline-block;
          // margin-bottom: 13px;
        }
        span {
          margin-left: 2px;
          margin-right: 24px;
        }
        input[type="checkbox"] {
          vertical-align: middle;
        }
      }
    }
    .manage {
      span {
        margin-top: 5px;
        display: inline-block;
        vertical-align: top;
      }
      i {
        vertical-align: top;
        margin-top: 8px;
      }
    }
    //分割线样式
    .cutting {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
      b {
        background: #d8d8d8;
        margin-top: 4px;
        display: inline-block;
        width: 100px;
        height: 1px;
        vertical-align: middle;
      }
      span {
        font-size: 14px;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
      }
    }
    .file_list {
      display: inline-block;
      input[type="file"] {
        position: absolute;
        top: 32px;
        left: 0;
        opacity: 0;
        width: 140px;
        height: 140px;
      }
      .file_style {
        width: 140px;
        height: 140px;
        background: #f7f7f7;
        border-radius: 1px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #999;
        margin: 32px 16px 16px 0;
      }
    }
    .file_format {
      font-size: 12px;
      color: #666;
    }
    button {
      width: 216px;
      height: 36px;
      background: #4389ff;
      border-radius: 2px;
      font-size: 14px;
      color: #fff;
      line-height: 21px;
      border: none;
      margin-top: 60px;
    }
  }
}
</style>
