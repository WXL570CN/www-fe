<template>
  <div class="module_right">
    <wait></wait>
<!--    &lt;!&ndash; 右上标题栏&ndash;&gt;-->
<!--    <div class="wasp_title">-->
<!--      <span>马蜂号认证</span>-->
<!--    </div>-->
<!--    <div class="wasp_content">-->
<!--      <form>-->
<!--        <ul>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>公司名称：</span>-->
<!--              <input type="text" placeholder="请输入公司名称">-->
<!--            </div>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>注册基金：</span>-->
<!--              <input type="text" placeholder="请输入注册资金">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>登记机关：</span>-->
<!--              <input type="text" placeholder="请输入登记机关">-->
<!--            </div>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>成立日期：</span>-->
<!--              <input type="text" placeholder="请输入成立如期">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>法人代表：</span>-->
<!--              <input type="text" placeholder="请输入法人代表">-->
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
<!--              <span>邮政编码：</span>-->
<!--              <input type="text" placeholder="请输入邮政编码">-->
<!--            </div>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>公司固话：</span>-->
<!--              <input type="text" placeholder="请输入公司固话">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>员工人数：</span>-->
<!--              <input type="text" placeholder="请输入员工人数">-->
<!--            </div>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>公司邮箱：</span>-->
<!--              <input type="text" placeholder="请输入公司邮箱">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>公司身份：</span>-->
<!--              <input type="text" placeholder="请输入公司身份">-->
<!--            </div>-->
<!--            <div style="margin-left: -43px">-->
<!--              <i>*</i>-->
<!--              <span>统一社会信用代码：</span>-->
<!--              <input type="text" placeholder="请输入统一社会信用代码">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li class="industry">-->
<!--            <div style="flex: 0.1">-->
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
<!--              <span>展开</span>-->
<!--              <div><input type="checkbox" name="trade" value="变更通知"><span>变更通知</span></div>-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>公司网址：</span>-->
<!--              <input type="text" placeholder="请输入公司网址" style="width: 764px">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>所属地区：</span>-->
<!--              <select class="import_style_short">-->
<!--                <option value="请选择省">请选择省</option>-->
<!--              </select>-->
<!--              <select class="import_style_short">-->
<!--                <option value="请选择市">请选择市</option>-->
<!--              </select>-->
<!--              <select class="import_style_short">-->
<!--                <option value="请选择区">请选择区</option>-->
<!--              </select>-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>公司地址：</span>-->
<!--              <input type="text" placeholder="请输入公司地址" style="width: 764px">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div class="manage">-->
<!--              <i>*</i>-->
<!--              <span>经营范围：</span>-->
<!--              <textarea placeholder="请输入你的阶段性工作目标" rows="4"></textarea>-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div class="manage">-->
<!--              <i>*</i>-->
<!--              <span>公司简介：</span>-->
<!--              <textarea placeholder="请输入你的公司简介" rows="4"></textarea>-->
<!--            </div>-->
<!--          </li>-->
<!--          &lt;!&ndash; 分割线样式&ndash;&gt;-->
<!--          <div class="cutting">-->
<!--            <b></b>-->
<!--            <span>负责人手机</span>-->
<!--            <b></b>-->
<!--          </div>-->
<!--          <li>-->
<!--            <div style="margin-left: 65px">-->
<!--              <i>*</i>-->
<!--              <span>联系人：</span>-->
<!--              <input type="text" placeholder="请输入联系人">-->
<!--            </div>-->
<!--            <div style="margin-left: 78px">-->
<!--              <i>*</i>-->
<!--              <span>性别：</span>-->
<!--              <input type="text" placeholder="请输入性别">-->
<!--            </div>-->
<!--          </li>-->
<!--          <li>-->
<!--            <div>-->
<!--              <i>*</i>-->
<!--              <span>手机号码：</span>-->
<!--              <input type="text" placeholder="请输入手机号码">-->
<!--            </div>-->
<!--            <div style="margin-left: 90px">-->
<!--              <i>*</i>-->
<!--              <span>邮箱：</span>-->
<!--              <input type="text" placeholder="请输入邮箱地址">-->
<!--            </div>-->
<!--          </li>-->
<!--          &lt;!&ndash; 分割线样式&ndash;&gt;-->
<!--          <div class="cutting">-->
<!--            <b></b>-->
<!--            <span>认证资料上传</span>-->
<!--            <b></b>-->
<!--          </div>-->
<!--          &lt;!&ndash; 图片上传&ndash;&gt;-->
<!--          <div style="position: relative;margin-left: 55px">-->
<!--            <div class="file_list">-->
<!--              <div class="file_style">点击上传</div>-->
<!--              <input type="file" name="file" multiple="multiple">-->
<!--            </div>-->
<!--            <div class="file_list">-->
<!--              <div class="file_style">点击上传</div>-->
<!--              <input type="file" name="file" multiple="multiple"style="left: 160px">-->
<!--            </div>-->
<!--            <div class="file_list">-->
<!--              <div class="file_style">点击上传</div>-->
<!--              <input type="file" name="file" multiple="multiple"style="left: 320px">-->
<!--            </div>-->
<!--            <div class="file_format">请上传营业执照/组织机构代码、税务登记证等三种证件（图片格式为png、jpg、jpeg）</div>-->
<!--          </div>-->
<!--          <div style="display: flex;justify-content: center;"><button type="submit" value="定制完成">定制完成</button></div>-->
<!--        </ul>-->
<!--      </form>-->
<!--    </div>-->
<!--    <div class="wasp_finish">-->
<!--      &lt;!&ndash;            审核完成界面&ndash;&gt;-->
<!--      <div class="finish_box">-->
<!--        <span class="info_name">中机大数据（杭州）技术有限公司</span>-->
<!--        <i class="info_state"></i>-->
<!--        <span class="info_delete">删除</span>-->
<!--        <span class="info_change">变更</span>-->
<!--        <span class="info_particular">详细信息</span>-->
<!--        <i class="info_spread"></i>-->
<!--      </div>-->
<!--      &lt;!&ndash;            审核失败界面&ndash;&gt;-->
<!--      <div class="finish_error">-->
<!--        <i></i>-->
<!--        <span>文章中出现“买枪”等敏感词汇，请修改后重新发布简书是一个优质的创作社区,在这里,你可以任性地创作,一篇短文、一张照片、一首诗、一幅画……我们相信,每个人都是生活中的艺术家,有着无穷的创造力。</span>-->
<!--      </div>-->
<!--      &lt;!&ndash;            展开界面&ndash;&gt;-->
<!--      <div class="finish_ing">-->
<!--        <div class="ing_list">-->
<!--          <div class="list_item">-->
<!--            <span class="item_name">统一社会信息代码</span>-->
<!--            <span class="item_describe">91330000720085428</span>-->
<!--          </div>-->
<!--          <div class="list_item">-->
<!--            <span class="item_name">企业登记注册类型</span>-->
<!--            <span class="item_describe">A型</span>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="ing_list">-->
<!--          <div class="list_item">-->
<!--            <span class="item_name">企业法定代表人</span>-->
<!--            <span class="item_describe">刘先生</span>-->
<!--          </div>-->
<!--          <div class="list_item">-->
<!--            <span class="item_name">联系电话</span>-->
<!--            <span class="item_describe">0571-86684932</span>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="ing_list">-->
<!--          <div class="list_item">-->
<!--            <span class="item_name">企业登记地址</span>-->
<!--            <span class="item_describe">浙江省杭州市滨江区南环路3108号1号楼B406-412室、B501-512室</span>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
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
    //height: 1563px;
    width: 960px;
    display: inline-block;
    margin-left: 10px;
    /*margin-top: 30px;*/
    .wasp_title{
      display: flex;
      align-items: center;
      height: 56px;
      width: 960px;
      background-color: #fff;
      border-bottom: 1px solid #E9EEEF;
      span{
        font-size:16px;
        color:#4389ff;
        margin-left: 32px;
      }
    }
    .wasp_content{
      height: 1507px;
      width:960px;
      background-color: #fff;
      display: none;
      ul{
        li{
          display: flex;
          >div{
            margin: 24px 0 0 53px;
            flex: 1;
            i{
              margin-top: 4px;
              display: inline-block;
              vertical-align: middle;
              color: red;
            }
            span{
              font-size:12px;
            }
            input[type=text]{
              width:286px;
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
              margin-left: 15px;
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
              margin-bottom: 13px;
            }
            span{
              margin-left: 2px;
              margin-right: 24px;
            }
            input[type=checkbox]{
              vertical-align: middle;
            }
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
        button{
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
    .wasp_finish{
      width: 960px;
      height: 750px;
      background-color: #FFF;
      display: inline-block;
      .finish_box,.finish_error{
        width:896px;
        height:76px;
        background:#F7F7F7;
        display: flex;
        align-items: center;
        margin: 24px 0 0 32px;
        span{
          font-size:14px;
          color:#666;
        }
        .info_name{
          font-size:16px;
          font-weight:bold;
          line-height:24px;
          margin: 30px 0 30px 24px;
        }
        .info_state{
          display: inline-block;
          width: 45px;
          height: 15px;
          /*background: url("../images/slicing/audit-succeed.png") no-repeat;*/
          margin-left: 8px;
        }
        .info_delete{
          margin-left: 362px;
        }
        .info_change, .info_particular{
          margin-left: 32px;
        }
        .info_spread{
          display: inline-block;
          width: 13px;
          height: 7px;
          /*background: url("../images/slicing/spread.png") no-repeat;*/
          margin-left: 3px;
        }
      }
      .finish_error{
        display: none;
        margin-top: 0;
        border-top: 1px solid #E6E6E6;
        >i{
          display: inline-block;
          width: 16px;
          height: 16px;
          /*background: url("../images/slicing/audit-error.png") no-repeat;*/
          margin-left: 24px;
          margin-top: -16px;
        }
        >span{
          width:824px;
          height:36px;
          font-size:12px;
          color:#666;
          line-height:18px;
          margin-left: 12px;
        }
      }
      .finish_ing{
        width:896px;
        height:225px;
        background:#F7F7F7;
        margin: 0 0 0 32px;
        display: inline-block;
        .ing_list{
          display: flex;
          align-items: center;
          margin: 16px 0 20px 24px;
          .list_item{
            display: inline-block;
            flex: 1;
            span{
              display:block;
              line-height:26px;
            }
            .item_name{
              font-size: 12px;
              color: #999;
            }
            .item_describe{
              font-size:14px;
              color:#666;
            }
          }
        }
      }
    }
  }
</style>
