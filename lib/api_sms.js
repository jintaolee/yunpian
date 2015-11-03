var util = require('./util');
var postJSON = util.postJSON;
var make = util.make;
var wrapper = util.wrapper;
var checkParam = util.checkParams;
var _ = require('underscore');

/**
 * 智能匹配模版发送
 *@param {json} params
 *参数见  http://www.yunpian.com/api/sms.html
 * @param {Function} callback 回调函数
 **/
make(exports, "sendSms", function(params, callback) {
  var url = "http://yunpian.com/v1/sms/send.json";
  var required = ["apikey", "mobile", "text"];
  var data = _.extend({
    apikey: this.apikey
  }, params);
  var status = checkParam(data, required);
  if (!status.status) {
    callback(status.msg);
    return
  }

  this.request(url, postJSON(data), wrapper(callback));
});


/**
 * 获取状态报告
 *@param {json} params
 *参数见  http://www.yunpian.com/api/sms.html
 * @param {Function} callback 回调函数
 **/
make(exports, "pullSmsStatus", function(params, callback) {
  var url = "http://yunpian.com/v1/sms/pull_status.json";
  var required = ["apikey"];
  var data = _.extend({
    apikey: this.apikey
  }, params);
  var status = checkParam(data, required);
  if (!status.status) {
    callback(status.msg);
    return
  }
  this.request(url, postJSON(data), wrapper(callback));
})



/**
 * 获取回复短信
 *@param {json} params
 *参数见  http://www.yunpian.com/api/sms.html
 * @param {Function} callback 回调函数
 **/
make(exports, "pullSmsReply", function(params, callback) {
  var url = "http://yunpian.com/v1/sms/pull_reply.json";
  var required = ["apikey"];
  var data = _.extend({
    apikey: this.apikey
  }, params);
  var status = checkParam(data, required);

  if (!status.status) {
    callback(status.msg);
    return
  }
  this.request(url, postJSON(data), wrapper(callback));
})



/**
 * 查回复的短信
 *@param {json} params
 *参数见  http://www.yunpian.com/api/sms.html
 * @param {Function} callback 回调函数
 **/
make(exports, "getSmsReply", function(params, callback) {
  var url = "http://yunpian.com/v1/sms/get_reply.json";
  var required = ["apikey", "start_time", "end_time", "page_num",
    "page_size"
  ];
  var data = _.extend({
    apikey: this.apikey
  }, params);
  var status = checkParam(data, required);

  if (!status.status) {
    callback(status.msg);
    return
  }
  this.request(url, postJSON(data), wrapper(callback));
});


/**
 * 查屏蔽词
 *@param {json} params
 *参数见  http://www.yunpian.com/api/sms.html
 * @param {Function} callback 回调函数
 **/
make(exports, "getBlockWord", function(params, callback) {
  var url = "http://yunpian.com/v1/sms/get_black_word.json";
  var required = ["apikey", "text"];
  var data = _.extend({
    apikey: this.apikey
  }, params);
  var status = checkParam(data, required);
  if (!status.status) {
    callback(status.msg);
    return
  }
  this.request(url, postJSON(data), wrapper(callback));
});



/**
 * 指定模版发送（不推荐使用，新用户请用智能匹配发送）
 *@param {json} params
 *参数见  http://www.yunpian.com/api/sms.html
 * @param {Function} callback 回调函数
 **/
make(exports, "sendTplSms", function(params, callback) {
  var url = "http://yunpian.com/v1/sms/tpl_send.json";
  var required = ["apikey", "mobile", "tpl_id", "tpl_value"];
  var data = _.extend({
    apikey: this.apikey
  }, params);
  var status = checkParam(data, required);
  if (!status.status) {
    callback(status.msg);
    return
  }
  this.request(url, postJSON(data), wrapper(callback));
});



/**
 * 批量个性化发送
 *@param {json} params
 *参数见  http://www.yunpian.com/api/sms.html
 * @param {Function} callback 回调函数
 **/
make(exports, "sendMultiSms", function(params, callback) {
  var url = "http://yunpian.com/v1/sms/multi_send.json";
  var required = ["apikey", "mobile", "text"];
  var data = _.extend({
    apikey: this.apikey
  }, params);
  var status = checkParam(data, required);
  if (!status.status) {
    callback(status.msg);
    return
  }
  this.request(url, postJSON(data), wrapper(callback));
});
