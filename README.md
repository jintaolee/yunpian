yunpian API
===========
云片短信平台API。


## 功能列表
- 查账户信息
- 修改账户信息
- 取默认模板
- 添加模板
- 取模板
- 修改模板
- 删除模板
- 智能匹配模版发送
- 获取状态报告
- 获取回复短信
- 查回复的短信
- 查屏蔽词
- 指定模版发送（不推荐使用，新用户请用智能匹配发送）
- 批量个性化发送
- 发语音验证码
- 获取状态报告


详细参见[API文档](http://www.yunpian.com/api/howto.html)


## Installation

```sh
$ npm install yunpian --save
```

## Usage

```js
var API = require('yunpian');

var api = new API(apikey);
api.getUser({}, function (err, data) {
  // TODO
});
```
