/*!
 * openstackAuth
 * Copyright(c) 2015 Li Xipeng <lixipeng@hihuron.com>
 * MIT Licensed
 */

'use strict';


/**
 * Constructs URLs with proper slashes regardless of leading/trailing
 * slashes on the arguments passed in.
 *
 * @return {string}
 */
function urljoin() {
    var url = "";

    for (var i = 0, j = arguments.length; i < j; i++) {
        var arg = arguments[i];

        if (typeof(arg) === "undefined") {
            continue;
        }

      arg = arg.toString();

      // Strip any preceding slashes since we append slashes to everything.
      if (arg.substr(0, 1) === "/") {
          arg = arg.substr(1);
      }
      // Add a trailing slash unless this is the end of URL.
      if (arg.substr(-1) !== "/" && i !== arguments.length - 1) {
          arg += "/";
      }
      // Join the current piece to our URL string.
      url += arg;
    }
    return url;
}


/**
 * Module exports.
 * @public
 */
module.exports = {
    urljoin: urljoin
};
