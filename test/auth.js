'use strict';

var authentication = require('..').authentication,
    assert = require('assert'),
    request = require('request'),
    sinon = require('sinon');

describe('authentication', function () {

    it('should return a function object', function() {
        assert(typeof authentication === 'function');
    });

    describe('authentication(#without auth_uri)', function() {

        before(function(done){
            sinon.stub(request, 'post').yields(null, null, null);
            done();
        });

        it("should return false",function(done){
            assert(authentication() === false);
            done();
        });

        after(function(done){
            request.post.restore();
            done();
        });
    });

    describe('authentication(#without success)', function() {

        before(function(done){
            sinon.stub(request, 'post').yields(null, null, null);
            done();
        });

        it("should return false",function(done){
            assert(authentication({auth_uri: 'test'}) === false);
            done();
        });

        after(function(done){
            request.post.restore();
            done();
        });
    });

    describe('authentication(#without error)', function() {

        before(function(done){
            sinon.stub(request, 'post').yields(null, null, null);
            done();
        });

        it("should return false",function(done){
            assert(authentication({
                auth_uri: 'test',
                success: function() {
                }}
            ) === false);
            done();
        });

        after(function(done){
            request.post.restore();
            done();
        });
    });

    describe('authentication(#success)', function() {

        var body = {};
        before(function(done){
            var response = {
                statusCode: 200
            };
            sinon.stub(request, 'post').yields(null, response, null);
            done();
        });

        it("should callback successful",function(done){
            authentication({
                username: 'username',
                password: 'password',
                project: 'project',
                project_id: 'project_id',
                token: 'token',
                auth_uri: 'test',
                success: function(err, response, body) {
                    assert(err === null);
                    assert(response.statusCode === 200);
                    done();
                },
                error: function() {
                }
            });
        });

        after(function(done){
            request.post.restore();
            done();
        });
    });

    describe('authentication(#error)', function() {

        var body = {};
        before(function(done){
            var response = {
                statusCode: 400
            };
            sinon.stub(request, 'post').yields("error", response, null);
            done();
        });

        it("should callback error",function(done){
            authentication({
                username: 'username',
                password: 'password',
                project: 'project',
                project_id: 'project_id',
                token: 'token',
                auth_uri: 'test',
                success: function() {
                },
                error: function(err, response) {
                    assert(err === "error");
                    assert(response.statusCode === 400);
                    done();
                }
            });
        });

        after(function(done){
            request.post.restore();
            done();
        });
    });

    describe('authentication(#error 400)', function() {

        var body = {};
        before(function(done){
            var response = {
                statusCode: 400
            };
            sinon.stub(request, 'post').yields(null, response, null);
            done();
        });

        it("should callback error",function(done){
            authentication({
                username: 'username',
                password: 'password',
                project: 'project',
                project_id: 'project_id',
                token: 'token',
                auth_uri: 'test',
                success: function() {
                },
                error: function(err, response) {
                    assert(err === null);
                    assert(response.statusCode === 400);
                    done();
                }
            });
        });

        after(function(done){
            request.post.restore();
            done();
        });
    });
});
