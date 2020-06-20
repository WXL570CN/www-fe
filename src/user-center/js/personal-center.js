/* eslint no-undef: "warn" */

import swal from 'sweetalert2';
import MFConfig from '../MFConfig';
import { formateUnixTime } from '../utils';
import Alert from '../utils/Alert';

const $province = $('.area select:eq(0)');// 省
const $city = $('.area select:eq(1)');// 市
const $county = $('.area select:eq(2)');// 区
let wordNum = 1;

function addListenner() {
  let cur_page = 1;
  // 分页条
  $('.paging').on('click', 'span:not(.off)', function () {
    $(this).parents('#personalPage').find('span').removeClass('on');
    $(this).addClass('on');
    $('.order_entries li').not('.add_order').remove();
    if ($(this).text() == '首页') {
      cur_page = 1;
    } else if ($(this).text() == '上一页') {
      if (cur_page == 1) {
        return false;
      }
      $('#personalPage li span').val(--cur_page);
    } else if ($(this).text() == '下一页') {
      $('#personalPage li span').val(++cur_page);
    } else {
      cur_page = $(this).text();
    }
    getOrder(cur_page);
  });
  // 添加定制事件
  $('.addItem').click(() => {
    $('#informationOrder').on('shown.bs.modal', () => {
    }).modal('show');
    $('#myModalLabel').text('添加定制');
    $('#item_form')[0].reset();
    $('#item_form select').find('option:first').prop('selected', true);
    $('#item_form input[type=checkbox]').attr('checked', false);
    $('.sum_word input').not('#firstWord,#addWords').remove();
    getProvinceList();
  });
  // 定制完成事件
  $('.finish_order').click(() => {
    const custom_ways = $("#alertWay input:checkbox[name='mode']:checked").map((index, elem) => $(elem).val()).get().join(',');
    const custom_rates = $('#custom_rates').val();
    const Cust_phone = $('#Cust_phone').val();
    const Cust_title = $('#Cust_title').val();
    const Cust_email = $('#Cust_email').val();
    const Cust_words = $('input[name=words]').map(function () {
      return this.value;
    }).get().join('/');
    const Cust_pur_types = $("input:checkbox[name='infoType']:checked").map((index, elem) => $(elem).val()).get().join(',');
    const Cust_scoutWay = $('#Cust_scoutWay').val();
    const Cust_region1 = $('#Cust_region1').val();
    const Cust_region2 = $('#Cust_region2').val();
    const Cust_region3 = $('#Cust_region3').val();
    const option = {
      custom_ways,
      custom_rates,
      Cust_phone,
      Cust_title,
      Cust_email,
      Cust_words,
      Cust_pur_types,
      Cust_scoutWay,
      Cust_region1,
      Cust_region2,
      Cust_region3,
    };
    if ($('#myModalLabel').text() == '添加定制') {
      addOrderList(option);
    } else if ($('#myModalLabel').text() == '修改定制') {
      const id = $('#myModalLabel').attr('data-id');
      updataOrderList(option, id);
    }
  });
  // 添加关键词
  $('#addWords').click(function () {
    wordNum++;
    const Num = $('.sum_word').children('input').length;
    if (Num < 6) {
      $(this).before(`<input type="text" placeholder="关键词${wordNum}" class="import_style_short" name="words">`);
    } else {
      swal.fire('最多添加五个关键词', '', 'error');
      return false;
    }
  });
}

// 获取用户信息
function getUserInfo() {
  $.ajax({
    url: `${MFConfig.wwwRoot}/api/users/index?token=${PCToken}`,
    type: 'get',
    dataType: 'json',
    success(data) {
      if (data.code == 0) {
        const result = data.data;
        $('#privateHead').css('background', `url(${result.User_photo}) no-repeat`);
        $('.info_title').html(result.User_name);
        // $(".info_vipCenter").val(result.)
        $('.id_num').html(`ID:${result.User_id}`);
        mfUserCenter.event.emit('onGetUserInfoSuccess', result);
      }
    },
  });
}
// 获取定制列表
function getOrder(curPage) {
  $.ajax({
    url: `${MFConfig.wwwRoot}/api/customs`,
    type: 'get',
    data: {
      page: curPage,
      token: PCToken,
    },
    dataType: 'json',
    success(data) {
      console.log(data);
      if (data.code == 0) {
        $('#myOrder').show();
        $('.space').hide();
        const result = data.data.data;
        for (let i = 0; i < result.length; i++) {
          const time = result[i].Cust_createTime;
          const orderTime = formateUnixTime(time, 'YYYY-MM-DD');
          $('.order_entries').append(`<li>
            <div class="order_icon">
                <span class="order_title">标题：${result[i].Cust_words}</span>
                <i></i>
            </div>
            <div class="order_tag">
                 <div class="tag_item">
                      <span>定制时间：</span>
                      <span class="tag_label">${orderTime}</span>
                 </div>
                 <div class="tag_item">
                      <span>地区：</span>
                      <span class="tag_label">${result[i].Cust_regionDisplay}</span>
                 </div>
             </div>
            <div class="order_operation">
              <a href="#/home/custom-push/order-list/${result[i].Cust_id}"><span class="look-order" content="${result[i].Cust_id}">查看定制信息</span></a>
              <a href="#/home/custom-push/OrderPreview/${result[i].Cust_id}"><span class="preview" content="${result[i].Cust_id}">预览</span></a>
              <span class="edit-order" content="${result[i].Cust_id}">修改</span>
              <span class="operation_del" content="${result[i].Cust_id}">删除</span>
              <div class="toggle-button-wrapper">
                  <input type="checkbox" id="${result[i].Cust_id}" name="switch" class="chooseBtn">
                  <label for="${result[i].Cust_id}" class="button-label">
                    <span class="circle"></span>
                    <span class="text on">开</span>
                    <span class="text off">关</span>
                  </label>
              </div>
            </div>
        </li>`);
          if (result[i].Cust_enabled == 0) {
            $(`#${result[i].Cust_id}`).attr('checked', false);
          } else if (result[i].Cust_enabled == 1) {
            $(`#${result[i].Cust_id}`).attr('checked', true);
          }
        }

        $('.operation_del').click(async function showConfirm() {
          const isConfirm = await Alert.showConfirm({ title: '确定删除这条定制' });
          if (!isConfirm) {
            return;
          }

          const id = $(this).attr('content');
          $(this).parent().parent().remove();
          deleteOrder(id);
        });

        $('.edit-order').click(function () {
          const id = $(this).attr('content');
          $('#informationOrder').on('shown.bs.modal', () => {
          }).modal('show');
          $('#myModalLabel').text('修改定制');
          $('#myModalLabel').attr('data-id', id);
          $('#item_form')[0].reset();
          $('#item_form select').find('option:first').attr('selected', true);
          $('#item_form input[type=checkbox]').attr('checked', false);
          $('.sum_word input').not('#firstWord,#addWords').remove();
          changeOrder(id);
        });
        // 开关订阅事件
        $('.button-label').on('click', async function showSwitchConfirm() {
          const id = $(this).attr('for');
          const { checked } = $(`#${id}`)[0];
          const title = checked ? '确定关闭订制' : '确定打开订制';
          const isConfirm = await Alert.showConfirm({ title });
          $(`#${id}`)[0].checked = checked;
          if (!isConfirm) {
            return;
          }

          $.ajax({
            url: `${MFConfig.wwwRoot}/api/customs/${id}/switch?token=${PCToken}`,
            type: 'get',
            dataType: 'json',
            success(data) {
              $(`#${id}`)[0].checked = data.data.enabled === 1;
              if (data.data.enabled === 1) {
                swal.fire('打开订制成功', '', 'success');
              } else {
                swal.fire('取消订制成功', '', 'success');
              }
            },
          });
        });
      } else {
        $('#myOrder').hide();
        $('.space').css('display', 'flex');
      }
    },
  });
}

// 添加定制
function addOrderList(option) {
  $.ajax({
    url: `${MFConfig.wwwRoot}/api/customs/store?token=${PCToken}`,
    type: 'post',
    data: {
      Cust_way: option.custom_ways,
      Cust_rate: option.custom_rates,
      Cust_phone: option.Cust_phone,
      Cust_title: option.Cust_title,
      Cust_email: option.Cust_email,
      Cust_words: option.Cust_words,
      Cust_purType: option.Cust_pur_types,
      Cust_scoutWay: option.Cust_scoutWay,
      Cust_region1: option.Cust_region1,
      Cust_region2: option.Cust_region2,
      Cust_region3: option.Cust_region3,
      Cust_deleted: 0,
      Cust_enabled: 1,
      Cust_isMember: 0,
      Cust_read: 0,
    },
    dataType: 'json',
    success(data) {
      $('#informationOrder').modal('hide');
      swal.fire('添加定制成功', '', 'success');
      // $(".right-bottom").load(location.href+".right-bottom");
      setTimeout(() => { // 使用  setTimeout（）方法设定定时2000毫秒
        window.location.reload();// 页面刷新
      }, 2000);
    },
  });
}

// 编辑定制
function updataOrderList(option, id) {
  $.ajax({
    url: `${MFConfig.wwwRoot}/api/customs/${id}/update?token=${PCToken}`,
    type: 'post',
    data: {
      Cust_way: option.custom_ways,
      Cust_rate: option.custom_rates,
      Cust_phone: option.Cust_phone,
      Cust_title: option.Cust_title,
      Cust_email: option.Cust_email,
      Cust_words: option.Cust_words,
      Cust_purType: option.Cust_pur_types,
      Cust_scoutWay: option.Cust_scoutWay,
      Cust_region1: option.Cust_region1,
      Cust_region2: option.Cust_region2,
      Cust_region3: option.Cust_region3,
      Cust_deleted: 0,
      Cust_enabled: 1,
      Cust_isMember: 0,
      Cust_read: 0,
    },
    dataType: 'json',
    success(data) {
      $('#informationOrder').modal('hide');
      swal.fire('定制修改成功', '', 'success');
      // $(".right-bottom").load(location.href+".right-bottom");
      setTimeout(() => { // 使用  setTimeout（）方法设定定时2000毫秒
        window.location.reload();// 页面刷新
      }, 2000);
    },
  });
}

// 定制删除
function deleteOrder(id) {
  $.ajax({
    type: 'post',
    url: `${MFConfig.wwwRoot}/api/customs/${id}/delete/?token=${PCToken}`,
    dataType: 'json',
    success(data) {
      swal.fire('删除成功', '', 'success');
      setTimeout(() => { // 使用  setTimeout（）方法设定定时2000毫秒
        window.location.reload();// 页面刷新
      }, 2000);
    },
  });
}

// 获取定制信息
function changeOrder(id) {
  getProvinceList();
  $.ajax({
    url: `${MFConfig.wwwRoot}/api/customs/${id}/edit/?token=${PCToken}`,
    type: 'get',
    dataType: 'json',
    success(data) {
      const result = data.data;
      const type = result.custom.Cust_way.split(',');
      const cityId = result.custom.Cust_region2;
      const countyId = result.custom.Cust_region3;
      for (var i = 0; i < type.length; i++) {
        $(`input[name='mode'][value='${type[i]}']`).attr('checked', true);
      } // 推送方式
      for (var i = 0; i < result.custom_rates.length; i++) {
        if (result.custom_rates[i].selected == 1) {
          $(`#custom_rates option[value='${result.custom_rates[i].Rate_content}']`).attr('selected', true);
        }
      }// 提醒频率
      $('#Cust_phone').val(result.custom.Cust_phone);// 手机号
      $('#Cust_email').val(result.custom.Cust_email);// 邮箱
      $(`#Cust_scoutWay option[value='${result.custom.Cust_scoutWay}']`).attr('selected', true);// 搜索模式
      for (var i = 0; i < result.keywords.length; i++) {
        if (i < result.keywords.length - 1) {
          $('#addWords').before(`<input type="text" placeholder="关键词${i}" class="import_style_short" name="words">`);
        }
        $('.sum_word').find('input').eq(i).val(result.keywords[i]);
      }// 关键词
      const purType = result.custom.Cust_purType.split(',');
      for (var i = 0; i < purType.length; i++) {
        $(`input[name='infoType'][value='${purType[i]}']`).attr('checked', true);
      }// 信息类型
      for (var i = 0; i < result.regions.provinces.length; i++) { // 省市区
        if (result.regions.provinces[i].selected == 1) {
          $(`#Cust_region1 option[value='${result.regions.provinces[i].Region_id}']`).attr('selected', true);
          getCityList(result.regions.provinces[i].Region_id, 100, cityId, countyId);
        }
      }
    },
  });
}

// 加载省
function getProvinceList() {
  $('#Cust_region1 option').remove();
  $('#Cust_region3 option').not(':first').remove();
  $province.unbind('change');
  $.ajax({
    url: `${MFConfig.wwwRoot}/regions/pid/0`,
    type: 'get',
    data: {
      token: PCToken,
    },
    dataType: 'json',
    success(data) {
      const province = data.data;
      let html = '';
      html += "<option value='0'>" + '请选择省- -' + '</option>';
      if (data.code === 0) {
        for (let i = 0; i < province.length; i++) {
          html += `<option value=${province[i].Region_id}>${province[i].Region_name}</option>`;
        }
      }
      $province.append(html);
      $city.html("<option value='0' class='city'>" + '请选择市- -' + '</option>');
      $province.change(() => {
        const provinceId = $('#Cust_region1 option:selected').val();
        getCityList(provinceId, 0, null, null);
      });
    },
  });
}

// 加载市
function getCityList(provinceId, state, cityId, countyId) {
  $city.unbind('change');
  $('#Cust_region2 option').not(':first').remove();
  $.ajax({
    type: 'get',
    url: `${MFConfig.wwwRoot}/regions/pid/${provinceId}`,
    dataType: 'json',
    success(data) {
      const city = data.data;
      let html = '';
      if (data.code === 0) {
        for (let i = 0; i < city.length; i++) {
          html += `<option value=${city[i].Region_id}>${city[i].Region_name}</option>`;
        }
      }
      $city.append(html);
      if (state == 100) {
        $(`#Cust_region2 option[value='${cityId}']`).attr('selected', true);
        getCountyList(cityId, countyId);
      } else {
        $city.change(() => {
          const cityId = $('#Cust_region2 option:selected').val();
          getCountyList(cityId, null);
        });
      }
    },
  });
}

// 加载区
function getCountyList(cityId, countyId) {
  $('#Cust_region3 option').not(':first').remove();
  $.ajax({
    type: 'get',
    url: `${MFConfig.wwwRoot}/regions/pid/${cityId}`,
    dataType: 'json',
    success(data) {
      const county = data.data;
      let html = '';
      if (data.code === 0) {
        for (let i = 0; i < county.length; i++) {
          html += `<option value=${county[i].Region_id}>${county[i].Region_name}</option>`;
        }
      }
      $county.append(html);
      $(`#Cust_region3 option[value='${countyId}']`).attr('selected', true);
    },
  });
}

function init() {
  addListenner();
  getOrder(1);
}

export default init;
