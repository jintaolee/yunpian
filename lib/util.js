var _ = require('underscore');

exports.wrapper = function(callback) {
  return function(err, data) {
    callback = callback || function() {};
    if (err) {
      return callback(err)
    }
    callback(null, data);
  };
};

/*!
 * 对提交参数一层封装，当POST JSON，并且结果也为JSON时使用
 */
exports.postJSON = function(data) {
  return {
    dataType: 'json',
    type: 'POST',
    data: data,
    headers: {
      "Accept": "application/json;charset=utf-8;",
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8;"
    }
  };
};

exports.make = function(host, name, fn) {
  host[name] = fn;
};


exports.checkParams = function(obj, required) {
  var missing = [];
  required.forEach(function(key) {
    if (!obj[key]) {
      missing.push(key);
    }
  });
  if (missing.length) {
    return {
      status: false,
      msg: "missing params " + missing.join(",")
    };
  } else {
    return {
      status: true,
      msg: ""
    };
  }
}
