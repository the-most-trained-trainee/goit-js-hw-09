function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var l=r("eWCmQ");const i=document.querySelector(".form");let u;function s(o,n){new Promise(((t,r)=>{const i=Math.random()>.3;setTimeout((()=>{i?t(e(l).Notify.success(`Fulfilled promise ${o} in ${n}ms`)):r(e(l).Notify.failure(`Rejected promise ${o} in ${n}ms`))}),n)})).then((e=>console.log(e))).catch((e=>console.log(e)))}console.log(i),i.addEventListener("submit",(function(e){e.preventDefault(),u=function(){const e=new FormData(i);let o={};return e.forEach(((e,n)=>{o[n]=e})),o}();for(let e=0;e<u.amount;e++)s(e+1,Number(u.delay)+Number(u.step)*e);e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.9eab632f.js.map
