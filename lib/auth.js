/*!
 * openstackAuth
 * Copyright(c) 2015 Li Xipeng <lixipeng@hihuron.com>
 * MIT Licensed
 */

'use strict';


/**
 * Module dependencies.
 * @private
 */

var debug = require('debug')('keystoneAuth:auth');
var request = require('request');
var urljoin = require('./utils').urljoin;


function _check_params(opts) {
    if (!opts.auth_uri || typeof opts.auth_uri != 'string') {
        debug("Auth failed without auth_uri or not a string");
        return false;
    }
    if (!opts.success || typeof opts.success != 'function') {
        debug("Auth failed without success callback method or not a function.");
        return false;
    }
    if (!opts.error || typeof opts.error != 'function') {
        debug("Auth failed without error callback method or not a function.");
        return false;
    }
    return true;
}

/**
 * Auth htt request for openstack keystone.
 *
 * Options:
 *
 *   - `data`: authentication data including `username`,
 *       `password`, `project`, `project_id`, `token_id`
 *   - `auth_uri`: url of openstack keystone authentication.
 *   - `success`: function callback when auth successful.
 *   - `error`: function callback when auth failed.
 *
 * @param {object} opts
 */
function _auth(opts) {
    if(!_check_params(opts)) {
        return false;
    }
    request.post({
        headers: {
            'Content-Type': 'Application/json'
        },
        body: opts.data,
        url: urljoin(opts.auth_uri, 'token')
    }, function(err, response, body) {
        var status_code = response.statusCode;
        if (err) {
            debug("Authentication failed with error %o", err);
            opts.error(err, response);
            return false;
        }
        if (status_code < 200 || status_code >= 400) {
            debug("Authenticaion failed with error %o", response);
            opts.error(err, response);
            return false;
        }
        opts.success(body, response);
    });
}

/**
 * Auth implementation for openstack keystone.
 *
 * Options:
 *
 *   - `username`: name of openstack user.
 *   - `password`: password of openstack user.
 *   - `project`: name of openstack project.
 *   - `project_id`: id of openstack project.
 *   - `token`: ID of token.
 *   - `region`: name of openstack region.
 *   - `auth_uri`: url of openstack keystone authentication.
 *   - `success`: function callback when auth successful.
 *   - `error`: function callback when auth failed.
 *
 * @param {object} opts
 */
function authentication(opts) {
    var body = {};
    opts = opts || {};
    if (opts.username && opts.password) {
        body.passwordCredentials  = {
            username: opts.username,
            password: opts.password
        };
    }
    if (opts.token) {
        body.token = {
            id: opts.token
        };
    }
    if (opts.project || opts.project_id) {
        body.tenantName = opts.project;
        body.tenantId = opts.project_id;
    }
    return _auth({
        auth_uri: opts.auth_uri,
        data: body,
        success: opts.success,
        error: opts.error
    });
}


/**
 * Module exports.
 * @public
 */
module.exports = authentication;
