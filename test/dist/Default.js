'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * js-plugin-cli v1.0.0
 * (c) 2020 Feng L.H.
 * Released under the MIT License.
 */
;(function (global, factory) {
  (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.Default = factory());
})(undefined, function () {
  'use strict';

  var Default = {};

  Default.version = '0.1.0';

  var Settings = {
    num: 5
  };

  // Configure
  Default.configure = function (options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) {
        Settings[key] = value;
      }
    }
    return this;
  };

  // Example
  Default.example = function () {
    alert(1)
    console.log('You have ' + Settings.num + ' examples');
  };

  // Global query selector
  // var $ = function (selector) {
  //   return document.querySelector(selector);
  // };

  if (typeof window !== 'undefined') {
    window.Default = Default;
  }

  return Default;
});