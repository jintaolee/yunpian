var util = require('./util');
var postJSON = util.postJSON;
var make = util.make;
var wrapper = util.wrapper;
var checkParam = util.checkParams;
var _ = require('underscore');

/**
 * 取默认模板
 *@param {json} params
 *参数见  http://www.yunpian.com/api/tpl.html#b1
 * @param {Function} callback 回调函数
 **/
make(exports, "getDefaultTpl", function(params, callback) {
  var url = "http://yunpian.com/v1/tpl/get_default.json";
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



/**
 * 添加模板
 *@param {json} params
 *参数见  http://www.yunpian.com/api/tpl.html#b1
 * @param {Function} callback 回调函数
 **/
make(exports, "addTpl", function(params, callback) {
  var url = "http://yunpian.com/v1/tpl/add.json";
  var required = ["apikey", "tpl_content"];
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
 * 取模板
 *@param {json} params
 *参数见  http://www.yunpian.com/api/tpl.html#b1
 * @param {Function} callback 回调函数
 **/
make(exports, "getTpl", function(params, callback) {
  var url = "http://yunpian.com/v1/tpl/get.json";
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


/**
 * 修改模板
 *@param {json} params
 *参数见  http://www.yunpian.com/api/tpl.html#b1
 * @param {Function} callback 回调函数
 **/
make(exports, "updateTpl", function(params, callback) {
  var url = "http://yunpian.com/v1/tpl/update.json";
  var required = ["apikey", "tpl_id", "tpl_content"];
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
 * 删除模板
 *@param {json} params
 *参数见  http://www.yunpian.com/api/tpl.html#b1
 * @param {Function} callback 回调函数
 **/
make(exports, "delTpl", function(params, callback) {
  var url = "http://yunpian.com/v1/tpl/del.json";
  var required = ["apikey", "tpl_id"];
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
