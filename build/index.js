(()=>{"use strict";var r={d:(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(r,e)=>Object.prototype.hasOwnProperty.call(r,e),r:r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}},e={};function t(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function n(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?t(Object(n),!0).forEach((function(e){o(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function o(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}r.r(e),r.d(e,{AccessDeniedError:()=>m,InvalidParamError:()=>j,MissingParamError:()=>h,NotAcceptableError:()=>P,errorHandler:()=>c});const c={errorHandler:function(r,e,t,o){if(r){if(r.code)return t.status(r.code).json({error:r.message,errorName:r.name});var c=n(n({},r),{},{code:500});return t.status(500).json({error:c})}return t.status(400).send()}};function i(r){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},i(r)}function u(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function a(r,e,t){return e&&u(r.prototype,e),t&&u(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function f(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function l(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&v(r,e)}function p(r){var e=d();return function(){var t,n=O(r);if(e){var o=O(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return s(this,t)}}function s(r,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r)}function y(r){var e="function"==typeof Map?new Map:void 0;return y=function(r){if(null===r||(t=r,-1===Function.toString.call(t).indexOf("[native code]")))return r;var t;if("function"!=typeof r)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(r))return e.get(r);e.set(r,n)}function n(){return b(r,arguments,O(this).constructor)}return n.prototype=Object.create(r.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),v(n,r)},y(r)}function b(r,e,t){return b=d()?Reflect.construct.bind():function(r,e,t){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(r,n));return t&&v(o,t.prototype),o},b.apply(null,arguments)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(r){return!1}}function v(r,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,e){return r.__proto__=e,r},v(r,e)}function O(r){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},O(r)}var m=function(r){l(t,r);var e=p(t);function t(r){var n;return f(this,t),(n=e.call(this,"".concat(r))).name="AccessDeniedError",n.code=403,n}return a(t)}(y(Error)),h=function(r){l(t,r);var e=p(t);function t(r){var n;return f(this,t),(n=e.call(this,"".concat(r))).name="MissingParamError",n.code=400,n}return a(t)}(y(Error)),j=function(r){l(t,r);var e=p(t);function t(r){var n;return f(this,t),(n=e.call(this,"".concat(r))).name="InvalidParamError",n.code=400,n}return a(t)}(y(Error)),P=function(r){l(t,r);var e=p(t);function t(r){var n;return f(this,t),(n=e.call(this,"".concat(r))).name="NotAcceptableError",n.code=406,n}return a(t)}(y(Error));module.exports=e})();