# keystoneAuth
A simple lib for openstack keystone to authenticate user.

## Get start
```
var authentication = require('keystoneAuth');

authentication({
    auth_uri: 'http://localhost:5000/v2',
    username: 'admin',
    password: 'admin_pass',
    success: function(body, response) {
    },
    error: function(err, response) {
    }
};
```

## Usage
Paramaters for method authentication:
- auth_uri: Required, consist with keystone authentication base url and version.
- success: Required, callback function when authentication successful.
- error: Required, callback function when authentication failed.
- username: Optional, username for keystone auth.
- password: Optional, password for keystone auth.
- project: Optional, project name for keystone auth.
- project_id: Optional, ID of project for keystone auth.
- token: Optional, ID of token for keystone auth.

As we know, when username + password is post, we can get a unscoped token object.
We can use this unscoped token object to get tenants list for specified user. And more,
we can use username + password + project id to get a scoped token object, with scoped
token id, expired time and service catalog, etc.

Besides, we can use project id + scopoed token id to get a scoped token object.

## Test
Full test supported for keystoneAuth. This project tested with 100% coverage.

- Jshint: run `npm run-script jshint` to check javascript syntax.
- Coverage: run `npm run-script coverage` to generate coverage report.
- Test: run `npm test` to test keystoneAuth.

## Dependencies
- request: ~2.60.0, see it at https://github.com/request/request.
- debug: ~2.2.0, see it at https://github.com/visionmedia/debug.

## TODO
- Region support.
- Https support.

## LICENSE

The MIT License (MIT)

Copyright (c) 2015 Li Xipeng <lixipeng@hihuron.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

