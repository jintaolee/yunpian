var config = require('./config');
var should = require('should');
var API = require('../index');

describe('api_tpl', function() {
  var api = new API(config.apikey);

  describe('getDefaultTpl', function() {
    it('should get an Array tpl', function(done) {
      api.getDefaultTpl({}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.code.should.equal(0);
        result.template.should.be.an.instanceOf(Array);
        done();
      });

    });
  });


  describe('addTpl', function() {
    it('should add tpl SUCCESS ,return template detail', function(done) {
      api.addTpl({
        tpl_content: "【翼起学】您的验证码是#code#"
      }, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.code.should.equal(0);
        result.template.should.have.property('check_status');
        done();

        describe('getTpl', function() {
          it('should get a template detail', function(done) {
            api.getTpl({
              tpl_id: result.template.tpl_id
            }, function(err, result) {
              should.not.exist(err);
              should.exist(result);
              result.code.should.equal(0);
              result.template.should.have.property(
                'tpl_id');
              done();

              describe('updateTpl', function() {
                it('should update template ',
                  function(done) {
                    api.updateTpl({
                      tpl_id: result.template
                        .tpl_id,
                      tpl_content: "【翼起学】您的兑换码是#code#"
                    }, function(err,
                      result) {
                      should.not.exist(
                        err);
                      should.exist(result);
                      result.code.should.equal(
                        0);
                      result.template.should
                        .have.property(
                          'tpl_id');
                      done();


                      describe('delTpl',
                        function() {
                          it(
                            'should del template,return msg ok ',
                            function(
                              done) {
                              api.delTpl({
                                  tpl_id: result
                                    .template
                                    .tpl_id
                                },
                                function(
                                  err,
                                  result
                                ) {
                                  should
                                    .not
                                    .exist(
                                      err
                                    );
                                  should
                                    .exist(
                                      result
                                    );
                                  result
                                    .code
                                    .should
                                    .equal(
                                      0
                                    );
                                  result
                                    .msg
                                    .should
                                    .equal(
                                      'OK'
                                    );
                                  done
                                    ();
                                });
                            });
                        });
                    });
                  });
              });
            });
          });
        });
      });
    });
  });
})
