# keystoneAuth
keystoneAuth 是一个为openstack用户提供身份验证功能的简单库。

## 快速开始
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

## 使用说明
`authentication`方法的参数说明:
- auth_uri: 必须, 由`keystone`验证`url` + 版本信息组成.
- success: 必须, 验证成功回调.
- error: 必须, 验证失败回调.
- username: 可选, 验证用户名.
- password: 可选, 验证密码.
- project: 可选, 验证项目名.
- project_id: 可选, 验证项目ID.
- token: 可选, 验证`token id`.

当传递`username + password`参数, 我们能获取一个`unscoped token`对象.
`unscoped token`对象可以用来获取该用户所属项目的列表. 进一步, 参数
`username + password + project id`能获取一个`scoped token`对象, 包含
`scoped token id`, `expired time` and `service catalog`等信息.

除此之外, `project id + scopoed token id`参数能获取一个`scoped token`对象.

## 测试
keystoneAuth 的测试覆盖率为100%。

- Jshint: 运行 `npm run-script jshint` 来检查语法.
- Coverage: 运行 `npm run-script coverage` 来生成测试覆盖率报表.
- Test: 运行 `npm test` 来测试代码.

## 依赖
- request: ~2.60.0, 详见 https://github.com/request/request.
- debug: ~2.2.0, 详见 https://github.com/visionmedia/debug.

## 待完成
- Region支持.
- Https支持.

## 协议

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
