var config = require('./config');
var should = require('should');
var API = require('../index');

describe('api_sms', function() {
  var api = new API(config.apikey);

  describe('sendSms', function() {
    it('should send message to mobile', function(done) {
      api.sendSms({
        mobile: 13915586260,
        text: "【翼起学】您的验证码是1234"
      }, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        should(result.code).equal(0);
        done();
      });

    });
  });


  describe('pullSmsStatus', function() {
    it('should result sms_status is an Array', function(done) {
      api.pullSmsStatus({}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        should(result.code).equal(0);
        result.sms_status.should.be.an.instanceOf(Array);
        done();
      });

    });
  });


  describe('pullSmsReply', function() {
    it('should result sms_reply is an Array', function(done) {
      api.pullSmsReply({}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        should(result.code).equal(0);
        result.sms_reply.should.be.an.instanceOf(Array);
        done();
      });

    });
  });


  describe('getSmsReply', function() {
    it('should get message reply', function(done) {
      api.getSmsReply({
        start_time: "2013-08-11 00:00:00",
        end_time: "2016-08-12 00:00:00",
        page_num: 1,
        page_size: 20
      }, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        should(result.code).equal(0);
        result.sms_reply.should.be.an.instanceOf(Array);
        done();
      });
    });
  });


  describe('getBlockWord', function() {
    it('BlockWord not exist should  black_word be null', function(done) {
      api.getBlockWord({
        text: "习近平"
      }, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        should(result.code).equal(0);
        done();
      });
    });
  });


  describe('sendTplSms', function() {
    it('send template message return code 0', function(done) {
      api.sendTplSms({
        mobile: 13915586260,
        tpl_id: 1,
        tpl_value: "#code#=1234&#company#=翼起学"
      }, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        should(result.code).equal(0);
        done();
      });
    });
  });


  describe('sendMultiSms', function() {
    it('send template message return code 0', function(done) {
      var text = encodeURI("【云片网】您的验证码是1234", "UTF-8") + "," +
        encodeURI("【云片网】您的验证码是5678", "UTF-8")
      api.sendMultiSms({
        mobile: "18317185706,13917952554",
        text: text
      }, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.be.instanceof(Array).and.have.lengthOf(2);
        done();
      });
    });
  });



})
