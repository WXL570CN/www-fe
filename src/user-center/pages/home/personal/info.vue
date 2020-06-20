<template>
  <div class="module_right">
    <!-- 标题栏-->
    <subTitle title="个人资料"></subTitle>
    <div class="right-content">
      <ul>
        <li>
          <span>头像：</span>
          <div class="head">
            <img v-bind:src="user.User_photo" id="avatar"  @click.stop="uploadHeadImg"  style="cursor: hand"/>
          </div>
          <input type="file" name="user.photo" @change="handleFile" id="photo" style="display: none" accept="image/*" />
        </li>
        <li>
          <span>昵称：</span>
          <div><input type="text" v-model="user.User_name" placeholder="请输入昵称" maxlength="10"></div>
        </li>
        <li>
          <span>性别：</span>
          <div>
            <a-radio-group v-model="user.User_sex" name="radioGroup" :defaultValue="0" class="sex">
              <a-radio :value="0">男</a-radio>
              <a-radio :value="1">女</a-radio>
              <a-radio :value="2">保密</a-radio>
            </a-radio-group>
          </div>
        </li>
        <li>
          <span>职位：</span>
          <div><input v-model="user.User_position" type="text" placeholder="请输入职位"></div>
        </li>
        <li>
          <span>个人简介：</span>
          <div>
            <textarea v-model="user.self_introduction" rows="10" cols="30"></textarea>
          </div>
        </li>
      </ul>
      <div><a-button v-on:click="save" type="primary">保存</a-button></div>
    </div>
  </div>
</template>
<script src="./info-controller.js">
</script>

<style lang="scss" scoped>
  .module_right{
    margin-top: 10px;
    .right-content {
      width: 960px;
      display: inline-block;
      background-color: #FFF;
      height: 741px;
      div{
        margin-left: 195px;
        button{
          width: 76px;
          height: 32px;
          border-radius: 0;
          font-weight: bold;
        }
      }
      ul{
        margin-top: 40px;
        li {
          margin-bottom: 20px;
          display: flex;
          align-items: center;
         #avatar{
            width: 88px;
            height: 88px; }
          span {
            text-align: right;
            color: #666;
            flex: 0.25; }
          input{
            width:360px;
            height:32px;
            background:rgba(255,255,255,1);
            border-radius:2px;
            border:1px solid rgba(204,204,204,1);
            padding-left: 12px;
          }
          div {
            margin-left: 4px;
            flex: 1;
            .sex{
              span{
                font-weight:400;
                color: #333;
              }
            }
            textarea{
              width:600px;
              height:100px;
              border-radius: 2px;
              border:1px solid rgba(204,204,204,1);
              padding: 10px;
            }
          }
        }
      }
    }
  }
</style>
