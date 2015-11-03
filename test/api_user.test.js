var config = require('./config');
var should = require('should');
var API = require('../index');

describe('api_user', function () {
    var api = new API(config.apikey);

    describe('get User', function () {
        it('should get user detail', function (done) {
            api.getUser({}, function (err, result) {
                should.not.exist(err);
                should.exist(result);
                should(result.code).equal(0);
                done();
            });
        });
    });


    describe('set User', function () {
        it('should update user info', function (done) {
            api.setUser({
                alarm_balance: 150
            }, function (err, result) {
                should.not.exist(err);
                should.exist(result);
                should(result.code).equal(0);
                should(result.detail).not.be.ok();
                done();
            })
        })
    })

})
