var urllib = require('urllib');
var extend = require('util')._extend;

var API = function(apikey) {
  this.apikey = apikey;

  return this;
}

/**
 * 用于设置urllib的默认options
 *
 * Examples:
 * ```
 * api.setOpts({timeout: 15000});
 * ```
 * @param {Object} opts 默认选项
 */
API.prototype.setOpts = function(opts) {
  this.defaults = opts;
};



/**
 * 设置urllib的hook
 *
 * Examples:
 * ```
 * api.setHook(function (options) {
 *   // options
 * });
 * ```
 * @param {Function} beforeRequest 需要封装的方法
 */
API.prototype.request = function(url, opts, callback) {
  var options = {};
  extend(options, this.defaults);
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  for (var key in opts) {
    if (key !== 'headers') {
      options[key] = opts[key];
    } else {
      if (opts.headers) {
        options.headers = options.headers || {};
        extend(options.headers, opts.headers);
      }
    }
  }
  urllib.request(url, options, callback);
};



/**
 * 用于支持对象合并。将对象合并到API.prototype上，使得能够支持扩展
 * Examples:
 * ```
 *
 * API.mixin(require('./lib/api_media'));
 * ```
 * @param {Object} obj 要合并的对象
 */
API.mixin = function(obj) {
  for (var key in obj) {
    if (API.prototype.hasOwnProperty(key)) {
      throw new Error(
        'Don\'t allow override existed prototype method. method: ' + key);
    }
    API.prototype[key] = obj[key];
  }
};


module.exports = API;
