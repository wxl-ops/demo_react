/*
 * @Author: hyman
 * @Date: 2022-03-21 17:17:18
 * @LastEditors: hyman
 * @LastEditTime: 2022-03-29 18:39:30
 * @Description: 请填写简介
 */
import request from "../utils/request";
const meeting = {
  // 获取cos令牌
  GetCosData(data) {
    return request({
      url: "common/image/index",
      method: "get",
      params: data
    });
  },
  // 获取省份列表
  GetCityList(data) {
    return request({
      url: "/business/city/province_list",
      method: "POST",
      params: data
    });
  },
  // 获取城市列表
  GetProvinceList(data) {
    return request({
      url: "/business/city/city_list",
      method: "POST",
      params: data
    });
  },
  // 获取区域列表
  GetAreaList(data) {
    return request({
      url: "/business/city/area_list",
      method: "POST",
      params: data
    });
  },
  // 保存注册信息
  SaveForm(data) {
    return request({
      url: "/business/business/save",
      method: "POST",
      data
    });
  },
  // 校验邀请码
  GetCheckCode(data) {
    return request({
      url: "/business/code/check",
      method: "POST",
      data
    });
  },
  // 获取短信验证码
  GetVerificationCode(data) {
    return request({
      url: "/business/sms-code/obtain",
      method: "POST",
      data
    });
  },
   // 社会信用吗查重
  isRegister(data) {
    return request({
      url: "/business/business/query",
      method: "POST",
      data
    });
  },
  getCodePic(data) {
    return request({
      url: "/common/wx-pub-account/get_qrcode",
      method: "POST",
      data
    });
  },
  GetTimeRange(data) {
    return request({
      url: "/common/time/time_range",
      method: "GET",
      params: data
    })
  }
};

export default meeting;
