function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=r.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},r.parcelRequired7c6=n);var i=n("eWCmQ");let l;function s(r,o){new Promise(((t,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?t(e(i).Notify.success(`Fulfilled promise ${r} in ${o}ms`)):n(e(i).Notify.failure(`Rejected promise ${r} in ${o}ms`))}),o)})).then((e=>console.log(e))).catch((e=>console.log(e)))}createPromisesForm=document.querySelector(".form"),createPromisesForm.addEventListener("submit",(function(e){e.preventDefault(),l=function(){const e=new FormData(createPromisesForm);let r={};return e.forEach(((e,o)=>{r[o]=e})),r}();for(let e=0;e<l.amount;e++)s(e+1,Number(l.delay)+Number(l.step)*e);e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.c43c0703.js.map
