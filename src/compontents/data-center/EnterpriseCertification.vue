<template>
  <div class="enterprise-certification">
    <div class="header">
      <span>企业认证</span>
    </div>
    <div class="content">
      <form action>
        <!--公司信息-->
        <div class="content-one">
          <ul>
            <li>
              <span>
                <span>*</span>公司名称：
              </span>
              <a-input placeholder="请输入您的公司名称" required />
            </li>
            <li>
              <span>
                <span>*</span>注册资金：
              </span>
              <a-input suffix="万元" placeholder="公司注册资金" required />
            </li>
            <li>
              <span>
                <span>*</span>成立日期：
              </span>
              <a-date-picker placeholder="公司成立时间" @change="onChange" required />
            </li>
            <li>
              <span>
                <span>*</span>法人代表：
              </span>
              <a-input placeholder="公司法人代表" required />
            </li>
            <li>
              <span>
                <span>*</span>登记机关：
              </span>
              <a-input placeholder="公司登记机关" required />
            </li>
            <li>
              <span>
                <span>*</span>手机号码：
              </span>
              <a-input placeholder="法人代表手机号码" required />
            </li>
          </ul>
        </div>
        <div class="content-two">
          <ul>
            <li>
              <span>
                <span>*</span>邮政编码：
              </span>
              <a-input placeholder="请输入邮政编码" />
            </li>
            <li>
              <span>
                <span>*</span>公司固话：
              </span>
              <a-input-group>
                <a-row :gutter="8">
                  <a-col :span="8">
                    <a-input default-value="0571" />
                  </a-col>
                  <a-col :span="16">
                    <a-input default-value="26888888" />
                  </a-col>
                </a-row>
              </a-input-group>
            </li>

            <li>
              <span>
                <span>*</span>公司邮箱：
              </span>
              <a-input placeholder="输入公司邮箱" />
            </li>
            <li>
              <span>*</span>员工人数：
              <a-input suffix="人数" placeholder="选择公司人员数量" required />
            </li>
          </ul>
        </div>
        <div class="content-three">
          <div class="indentity-and-license">
            <div class="identity">
              <span>
                <span>*</span>公司身份：
              </span>
              <a-select
                mode="tags"
                style="width: 260px;"
                placeholder="请选择公司身份"
                @change="handleChange"
              >
                <a-select-option v-for="item in arr" :key="item">{{ item }}</a-select-option>
              </a-select>
            </div>
            <div class="license">
              <span>
                <span>*</span>统一社会信用代码：
              </span>
              <a-input style="width: 260px;" placeholder="输入公司信用代码" />
            </div>
          </div>
          <!--行业分类-->
          <div class="industry">
            <div class="typeL">
              <span>
                <span>*</span>行业分类：
              </span>
              <a-checkbox-group :options="plainOptions" @change="onChange" />
            </div>
          </div>
        </div>
        <div class="content-four">
          <div>
            <span>公司网址：</span>
            <a-input placeholder="输入公司网址" />
          </div>
          <div class="area">
            <span>
              <span>*</span>所属地区：
            </span>
            <a-select
              :default-value="provinceData[0]"
              style="width: 120px"
              @change="handleProvinceChange"
            >
              <a-select-option v-for="province in provinceData" :key="province">{{ province }}</a-select-option>
            </a-select>
            <a-select v-model="secondCity" style="width: 120px">
              <a-select-option v-for="city in cities" :key="city">{{ city }}</a-select-option>
            </a-select>
          </div>
          <div>
            <span>
              <span>*</span>公司地址：
            </span>
            <a-input placeholder="填写公司地址" />
          </div>
          <div>
            <span>
              <span>*</span>经营范围：
            </span>
            <a-textarea placeholder="填写公司经营范围" allow-clear :rows="4" />
          </div>
          <div>
            <span>公司简介：</span>
            <a-textarea placeholder="填写公司简介" allow-clear :rows="4" />
          </div>
        </div>
        <div class="content-five">
          <div>
            <span>———— 负责人信息 ————</span>
          </div>
          <ul>
            <li>
              <span>
                <span>*</span>成立日期：
              </span>
              <a-input placeholder="公司成立时间" />
            </li>
            <li>
              <span>
                <span>*</span>法人代表：
              </span>
              <a-input placeholder="法人姓名" />
            </li>
            <li>
              <span>
                <span>*</span>登记机关：
              </span>
              <a-input placeholder="公司登记机关" />
            </li>
            <li>
              <span>
                <span>*</span>手机号码：
              </span>
              <a-input placeholder="法人代表手机号" />
            </li>
          </ul>
          <div>
            <span>———— 认证资料上传 ————</span>
          </div>
          <a-upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            list-type="picture-card"
            :file-list="fileList"
            @preview="handlePreview"
            @change="handleChange"
          >
            <div v-if="fileList.length < 8">
              <a-icon type="plus" />
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
          <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
            <img alt="example" style="width: 100%" :src="previewImage" />
          </a-modal>
        </div>
        <div class="submit">
          <a-button type="primary">提交申请</a-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
const provinceData = ['浙江', '江苏'];
const cityData = {
  浙江: ['杭州', '宁波', '温州'],
  江苏: ['南京', '苏州', '镇江'],
};
const regionData = {
  杭州: ['余杭区', '西湖区', '滨江区'],
};
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  name: 'name',
  props: {},
  data() {
    return {
      arr: ['供应商', '采购商'],
      plainOptions: [
        '医疗设备',
        '机械设备',
        '仪器仪表',
        '文体用品',
        '五金工具',
        '电器',
        '通信',
        '医疗设备',
        '机械设备',
        '仪器仪表',
        '文体用品',
        '五金工具',
        '电器',
        '通信',
      ],
      provinceData,
      cityData,
      cities: cityData[provinceData[0]],
      secondCity: cityData[provinceData[0]][0],
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-2',
          name: 'image.png',
          status: 'done',
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-3',
          name: 'image.png',
          status: 'error',
        },
      ],
    };
  },
  components: {},
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleProvinceChange(value) {
      this.cities = cityData[value];
      // eslint-disable-next-line prefer-destructuring
      this.secondCity = cityData[value][0];
    },
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
    },
  },
};
</script>

<style lang='scss' scoped>
ul {
  list-style: none;
  padding: 0;
}
.enterprise-certification {
  width: 960px;
  background-color: #fefefe;
  .header {
    display: flex;
    height: 56px;
    border-bottom: 1px solid #e9eeef;
    padding: 0 30px;
    > span {
      height: 56px;
      line-height: 56px;
      font-size: 16px;
      font-weight: bold;
      border-bottom: 2px solid #4389ff;
    }
  }
  .content {
    min-height: 800px;
    padding: 30px 70px;
    > form {
      > div.content-one > ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 340px;
          margin-bottom: 20px;
          > .ant-input {
            width: 260px;
          }
          .ant-calendar-picker > div > .ant-input {
            width: 260px;
          }
          .ant-input-affix-wrapper {
            width: 260px;
            .ant-input {
              width: 260px;
            }
          }
          .ant-input-group {
            width: 260px;
          }
        }
      }
      > div.content-two > ul {
        display: flex;
        flex-wrap: wrap;
      }
      .content-two {
        .indentity-and-license {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          .indentity {
            width: 340px;
          }
          .license {
            width: 396px;
          }
        }
        .industry {
          .typeL {
            .ant-checkbox-group {
              width: 620px;
            }
          }
        }
      }
    }
  }
}
</style>
