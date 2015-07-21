/* Copyright © 2015 PointSource, LLC. All rights reserved. */
var path = require('path'),
    request = require('request'),
    assert = require('assert'),
    util = require('./launchUtil');

describe('SERVER6 - duplicate service name should fail on startup', function () {
    this.timeout(5000);

    after(function (done) {
        util.finish(done);
    });

    it('Launch server and check for failure', function (done) {
        util.launch('server6', function(output) {
            assert.ok(output.indexOf('already exists') > -1);
            done();
        });
    });
});