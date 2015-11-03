var config = require('./config');
var should = require('should');
var API = require('../index');

describe('api_voice', function() {
  var api = new API(config.apikey);
  describe('sendVoice', function() {
    it('should send a voice message to mobile', function(done) {
      api.sendVoice({
        mobile: 13915586260,
        code: 4567
      }, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        should(result.code).equal(0);
        done();
      })
    })
  })


  describe('pullVoiceStatus', function() {
    it('should get an array voice_status', function(done) {
      api.pullVoiceStatus({}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        should(result.code).equal(0);
        result.voice_status.should.be.instanceof(Array);
        done();
      })
    })
  })



})
