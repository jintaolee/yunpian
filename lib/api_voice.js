var util = require('./util');
var postJSON = util.postJSON;
var make = util.make;
var wrapper = util.wrapper;
var checkParam = util.checkParams;
var _ = require('underscore');


/**
 *发语音验证码
 *@param {json} params
 *参数见  http://www.yunpian.com/api/voice.html#d2
 * @param {Function} callback 回调函数
 **/
make(exports, "sendVoice", function(params, callback) {
  var url = "http://voice.yunpian.com/v1/voice/send.json";
  var required = ["apikey", "mobile", "code"];
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
 *获取状态报告
 *@param {json} params
 *参数见  http://www.yunpian.com/api/voice.html#d2
 * @param {Function} callback 回调函数
 **/
make(exports, "pullVoiceStatus", function(params, callback) {
  var url = "http://voice.yunpian.com/v1/voice/pull_status.json";
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
});
