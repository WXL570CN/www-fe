<template>
  <div class="module_right">
    <wait></wait>
<!--    &lt;!&ndash;        发布导航栏&ndash;&gt;-->
<!--    <div class="publish_title">-->
<!--      <ul>-->
<!--        <li>招标发布</li>-->
<!--        <li>中标发布</li>-->
<!--        <li>变更信息</li>-->
<!--        <li>发布管理</li>-->
<!--      </ul>-->
<!--    </div>-->
<!--    &lt;!&ndash;        发布招标&ndash;&gt;-->
<!--    <div class="publish_content" style="display: none">-->
<!--      <form>-->
<!--        <ul>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>发布标题：</span>-->
<!--              <input type="text" placeholder="请输入标题" style="width: 739px">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>发布单位：</span>-->
<!--              <input type="text" placeholder="请输入发布单位" style="width: 739px">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>联系人名：</span>-->
<!--              <input type="text" placeholder="请输入联系人">-->
<!--            </div>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>手机号码：</span>-->
<!--              <input type="text" placeholder="请输入手机号码">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>报名时间：</span>-->
<!--              <input type="text" placeholder="请输入报名时间">-->
<!--            </div>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>截止时间：</span>-->
<!--              <input type="text" placeholder="请输入截止时间">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>公示时间：</span>-->
<!--              <input type="text" placeholder="请输入公示时间">-->
<!--            </div>-->
<!--            <div style="margin-left: -44px">-->
<!--              <i>*</i>-->
<!--              <span>报价投标截止时间：</span>-->
<!--              <input type="text" placeholder="请输入报价投标截止时间">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>采购方式：</span>-->
<!--              <select class="select_style">-->
<!--                <option>请选择&#45;&#45;</option>-->
<!--                <option></option>-->
<!--              </select>-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>地区信息：</span>-->
<!--              <select name="area">-->
<!--                <option>请选择省&#45;&#45;</option>-->
<!--                <option></option>-->
<!--              </select>-->
<!--              <select name="area">-->
<!--                <option>请选择市&#45;&#45;</option>-->
<!--                <option></option>-->
<!--              </select>-->
<!--              <select name="area">-->
<!--                <option>请选择区&#45;&#45;</option>-->
<!--                <option></option>-->
<!--              </select>-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <input type="text" placeholder="请填写详细住址信息" style="width: 625px;margin-left: 87px">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li class="industry">-->
<!--            <div style="flex: 0.13">-->
<!--              <i>*</i>-->
<!--              <span>行业分类：</span>-->
<!--            </div>-->
<!--            <div class="check_inform">-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--            </div>-->
<!--            <div class="spread">收起</div>-->
<!--          </li>-->
<!--          <li class="rich_text">-->
<!--            <div style="flex: 0.1">-->
<!--              <i>*</i>-->
<!--              <span>正文内容：</span>-->
<!--            </div>-->
<!--            <div class="editor">-->
<!--              <div class="summerNote">-->
<!--              </div>-->
<!--            </div>-->
<!--          </li>-->
<!--          <div class="auth_code">-->
<!--            <span>请输入验证码</span>-->
<!--            <input type="text">-->
<!--            <img src="">-->
<!--          </div>-->
<!--          <div style="display: flex;justify-content: center;">-->
<!--            <button type="submit" value="提交审核" class="custom_finish">提交审核</button>-->
<!--          </div>-->
<!--        </ul>-->
<!--      </form>-->
<!--    </div>-->
<!--    &lt;!&ndash;        中标发布&ndash;&gt;-->
<!--    <div class="publish_successful" style="height: 860px;display: none">-->
<!--      <form>-->
<!--        <ul>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>发布标题：</span>-->
<!--              <input type="text" placeholder="请输入标题" style="width: 739px">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>发布单位：</span>-->
<!--              <input type="text" placeholder="请输入发布单位" style="width: 739px">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>公示时间：</span>-->
<!--              <input type="text" placeholder="请输入公示时间">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>地区信息：</span>-->
<!--              <select name="area">-->
<!--                <option>请选择省&#45;&#45;</option>-->
<!--                <option></option>-->
<!--              </select>-->
<!--              <select name="area">-->
<!--                <option>请选择市&#45;&#45;</option>-->
<!--                <option></option>-->
<!--              </select>-->
<!--              <select name="area">-->
<!--                <option>请选择区&#45;&#45;</option>-->
<!--                <option></option>-->
<!--              </select>-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <input type="text" placeholder="请填写详细住址信息" style="width: 625px;margin-left: 87px">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li class="industry">-->
<!--            <div style="flex: 0.13">-->
<!--              <i>*</i>-->
<!--              <span>行业分类：</span>-->
<!--            </div>-->
<!--            <div class="check_inform">-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--            </div>-->
<!--            <div class="spread">收起</div>-->
<!--          </li>-->
<!--          <li class="rich_text">-->
<!--            <div style="flex: 0.1">-->
<!--              <i>*</i>-->
<!--              <span>正文内容：</span>-->
<!--            </div>-->
<!--            <div class="editor">-->
<!--              <div class="summerNote">-->
<!--              </div>-->
<!--            </div>-->
<!--          </li>-->
<!--          <div class="auth_code">-->
<!--            <span>请输入验证码</span>-->
<!--            <input type="text">-->
<!--            <img src="">-->
<!--          </div>-->
<!--          <div style="display: flex;justify-content: center;">-->
<!--            <button type="submit" value="提交审核" class="custom_finish">提交审核</button>-->
<!--          </div>-->
<!--        </ul>-->
<!--      </form>-->
<!--    </div>-->
<!--    &lt;!&ndash;        变更通知&ndash;&gt;-->
<!--    <div class="publish_change" style="display: none">-->
<!--      <form>-->
<!--        <ul>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>发布标题：</span>-->
<!--              <input type="text" placeholder="请输入标题" style="width: 739px">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>发布单位：</span>-->
<!--              <input type="text" placeholder="请输入发布单位" style="width: 739px">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>联系人名：</span>-->
<!--              <input type="text" placeholder="请输入联系人">-->
<!--            </div>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>手机号码：</span>-->
<!--              <input type="text" placeholder="请输入手机号码">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>报名时间：</span>-->
<!--              <input type="text" placeholder="请输入报名时间">-->
<!--            </div>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>截止时间：</span>-->
<!--              <input type="text" placeholder="请输入截止时间">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>公示时间：</span>-->
<!--              <input type="text" placeholder="请输入公示时间">-->
<!--            </div>-->
<!--            <div style="margin-left: -44px">-->
<!--              <i>*</i>-->
<!--              <span>报价投标截止时间：</span>-->
<!--              <input type="text" placeholder="请输入报价投标截止时间">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>采购方式：</span>-->
<!--              <select class="select_style">-->
<!--                <option>请选择&#45;&#45;</option>-->
<!--                <option></option>-->
<!--              </select>-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>地区信息：</span>-->
<!--              <select name="area">-->
<!--                <option>请选择省&#45;&#45;</option>-->
<!--                <option></option>-->
<!--              </select>-->
<!--              <select name="area">-->
<!--                <option>请选择市&#45;&#45;</option>-->
<!--                <option></option>-->
<!--              </select>-->
<!--              <select name="area">-->
<!--                <option>请选择区&#45;&#45;</option>-->
<!--                <option></option>-->
<!--              </select>-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <input type="text" placeholder="请填写详细住址信息" style="width: 625px;margin-left: 87px">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li class="industry">-->
<!--            <div style="flex: 0.13">-->
<!--              <i>*</i>-->
<!--              <span>行业分类：</span>-->
<!--            </div>-->
<!--            <div class="check_inform">-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--            </div>-->
<!--            <div class="spread">收起</div>-->
<!--          </li>-->
<!--          <li class="rich_text">-->
<!--            <div style="flex: 0.1">-->
<!--              <i>*</i>-->
<!--              <span>正文内容：</span>-->
<!--            </div>-->
<!--            <div class="editor">-->
<!--              <div class="summerNote">-->
<!--              </div>-->
<!--            </div>-->
<!--          </li>-->
<!--          <div class="auth_code">-->
<!--            <span>请输入验证码</span>-->
<!--            <input type="text">-->
<!--            <img src="">-->
<!--          </div>-->
<!--          <div style="display: flex;justify-content: center;">-->
<!--            <button type="submit" value="提交审核" class="custom_finish">提交审核</button>-->
<!--          </div>-->
<!--        </ul>-->
<!--      </form>-->
<!--    </div>-->
<!--    &lt;!&ndash;        发布管理&ndash;&gt;-->
<!--    <div>-->
<!--      <table id="data_list"-->
<!--             data-toolbar=".top-head"-->
<!--             data-page-list="[10,20,30,40]"-->
<!--             data-height="800" data-click-to-select="true" class="table table-bordered" data-page-size="20">-->
<!--      </table>-->
<!--    </div>-->
  </div>
</template>

<script>
import wait from '../developing.vue';

export default {
  components: {
    wait,
  },
};
</script>

<style scoped lang="scss">
  .module_right{
    width: 960px;
    height: 1100px;
    margin-left: 10px;
    display: inline-block;
    .publish_title{
      width:960px;
      height:56px;
      background:#fff;
      margin-top: 20px;
      border-bottom: 1px solid #E9EEEF;
      ul{
        font-size: 0;
        padding: 0;
        margin: 0;
        li:first-child{
          margin-left: 32px;
        }
        li:before{
          content: "";
          display: block;
          position: absolute;
          width: 0;
          bottom: 0;
          left: 100%;
          border-bottom: 2px solid #4389FF;
          transition: all 0.5s;
        }
        li{
          //width:64px;
          height:56px;
          line-height: 56px;
          font-size: 16px;
          position: relative;
          display: inline-block;
          margin-left: 48px;
          transition: all 0.5s;
        }
        li:hover{
          color: #4389FF;
        }
        li:hover::before{
          left: 0;
          width: 100%;
        }
        li:hover~li::before{
          left: 0;
        }
        li:hover::before{
          left: 0;
          width: 100%;
        }
        li:hover~li::before{
          left: 0;
        }
      }
    }
    //表单提交
    .publish_content,.publish_successful,.publish_change{
      height: 1020px;
      width:960px;
      background-color: #fff;
      ul{
        li{
          display: flex;
          >div{
            margin: 24px 0 0 53px;
            flex: 1;
            >i{
              margin-top: 4px;
              display: inline-block;
              vertical-align: middle;
              color: red;
            }
            span{
              font-size:12px;
            }
            input[type=text]{
              width:259px;
              height:34px;
              background:#fff;
              border-radius:2px;
              border:1px solid #E6E6E6;
              padding-left: 12px;
              margin-left: 16px;
            }
            textarea{
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
              color: rgba(0,0,0,.65);
              font-size: 14px;
              border: 1px solid #d9d9d9;
              border-radius: 4px;
              transition: all .3s;
            }
            select{
              padding-left: 10px;
              margin-left: 15px;
              width:260px;
              height:36px;
              background:rgba(255,255,255,1);
              border-radius:2px;
              border:1px solid #e6e6e6;
            }
            select[name=area]{
              width: 200px;
            }
          }
        }
        .industry{
          display: flex;
          flex-flow: row wrap;
          .check_inform{
            margin-left: 8px;
            div{
              display: inline-block;
              margin: 0 0 13px 4px;
            }
            span{
              margin-left: 2px;
              margin-right: 24px;
            }
            input[type=checkbox]{
              vertical-align: text-bottom;
            }
          }
          .spread{
            display: inline-block;
            width: 115px;
            flex: 0.15;
          }
        }
        .manage{
          span{
            margin-top: 5px;
            display: inline-block;
            vertical-align: top;
          }
          i{
            vertical-align: top;
            margin-top: 8px;
          }
        }
        .rich_text{
          i{

          }
        }
        //分割线样式
        .cutting{
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
          b{
            background: #D8D8D8;
            margin-top: 4px;
            display: inline-block;
            width: 100px;
            height: 1px;
            vertical-align: middle;
          }
          span{
            font-size: 14px;
            display: inline-block;
            vertical-align: middle;
            text-align: center;
          }
        }
        .file_list{
          display: inline-block;
          input[type=file]{
            position:absolute;
            top: 32px;
            left: 0;
            opacity:0;
            width:140px;
            height:140px;
          }
          .file_style{
            width:140px;
            height:140px;
            background:#F7F7F7;
            border-radius:1px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: #999;
            margin: 32px 16px 16px 0 ;
          }

        }
        .file_format{
          font-size:12px;
          color:#666;
        }
        .auth_code{
          margin-left: 137px;
          span{
            font-size: 14px;
            color: #333;
            margin-right: 8px;
          }
          input{
            width: 100px;
            height: 30px;
            background:rgba(255,255,255,1);
            border-radius:0;
            border:1px solid rgba(230,230,230,1);
          }
        }
        .custom_finish{
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

  }
</style>
