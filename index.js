var API = require('./lib/api_common');
//账户API
API.mixin(require('./lib/api_user'));
//模版API
API.mixin(require('./lib/api_tpl'));
//短信API
API.mixin(require('./lib/api_sms'));
//语音API
API.mixin(require('./lib/api_voice'));
module.exports = API;
