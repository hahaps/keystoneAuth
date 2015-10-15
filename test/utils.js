'use strict';

var utils = require('..').utils,
    assert = require('assert');

describe('utils.urljoin()', function () {
    it('should return a function object', function() {
        var urljoin = utils.urljoin;
        assert(typeof urljoin === 'function');
    });

    it('should return an empty string', function() {
        var urljoin = utils.urljoin;
        assert(urljoin() === "");
        assert(urljoin(undefined) === "");
    });

    it('should return a string equal with input arg', function() {
        var urljoin = utils.urljoin;
        assert(urljoin("test") === "test");
    });

    it('should return a string joined with "/" with two args', function() {
        var urljoin = utils.urljoin;
        assert(urljoin("test", "adder") === "test/adder");
    });

    it('should return a string joined with one "/" with two args', function() {
        var urljoin = utils.urljoin;
        assert(urljoin("test/", "/adder") === "test/adder");
    });

    it('should return a string joined with "/" with multi args', function() {
        var urljoin = utils.urljoin;
        assert(urljoin("test", "adder1", "adder2") === "test/adder1/adder2");
    });
});
