!function(){"use strict";var e,t,n,r,o,c={},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return c[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=c,i.c=a,e=[],i.O=function(t,n,r,o){if(!n){var c=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var a=!0,f=0;f<n.length;f++)(!1&o||c>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[f])}))?n.splice(f--,1):(a=!1,o<c&&(c=o));if(a){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var c={};t=t||[null,n({}),n([]),n(n)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},i.d(o,c),o},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return"assets/js/"+({11:"7776a642",53:"935f2afb",102:"4382f69c",121:"55960ee5",128:"a09c2993",194:"8513aa73",213:"2e174830",264:"1fdf2673",309:"109bae49",412:"977e6cb2",451:"597040e7",514:"1be78505",524:"71112c09",540:"f833b3c0",608:"9e4087bc",611:"d63f6fbe",735:"4ba7e5a3",749:"6153734e",751:"3720c009",893:"135cdd4b",918:"17896441",922:"bca5810b",947:"63bf93f5",982:"6c5fab8e"}[e]||e)+"."+{11:"acb344c5",53:"70468cc9",75:"d900a59f",102:"bd44d2d4",121:"00637143",128:"b8e4906d",159:"22006149",194:"6b64e10e",213:"f6ccf1d6",264:"0ee225b1",309:"2e13fd2f",412:"2788095c",451:"c45610f6",514:"956b53c1",524:"3a68cd05",540:"ad91c692",608:"ba0ec8c1",611:"9a921d7b",698:"cfdc7ce1",735:"a80781cf",749:"845fb2b8",751:"aade5959",893:"846244f0",918:"b230ec68",922:"4f758594",947:"bf894118",982:"6c0b2b47"}[e]+".js"},i.miniCssF=function(e){return"assets/css/styles.a314a5da.css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="obsidian-plugin-docs:",i.l=function(e,t,n,c){if(r[e])r[e].push(t);else{var a,f;if(void 0!==n)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var b=u[d];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==o+n){a=b;break}}a||(f=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",o+n),a.src=e),r[e]=[t];var s=function(t,n){a.onerror=a.onload=null,clearTimeout(l);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),f&&document.head.appendChild(a)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/obsidian-plugin-docs/",i.gca=function(e){return e={17896441:"918","7776a642":"11","935f2afb":"53","4382f69c":"102","55960ee5":"121",a09c2993:"128","8513aa73":"194","2e174830":"213","1fdf2673":"264","109bae49":"309","977e6cb2":"412","597040e7":"451","1be78505":"514","71112c09":"524",f833b3c0:"540","9e4087bc":"608",d63f6fbe:"611","4ba7e5a3":"735","6153734e":"749","3720c009":"751","135cdd4b":"893",bca5810b:"922","63bf93f5":"947","6c5fab8e":"982"}[e]||e,i.p+i.u(e)},function(){var e={303:0,532:0};i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var c=i.p+i.u(t),a=new Error;i.l(c,(function(n){if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",a.name="ChunkLoadError",a.type=o,a.request=c,r[1](a)}}),"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,c=n[0],a=n[1],f=n[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(f)var d=f(i)}for(t&&t(n);u<c.length;u++)o=c[u],i.o(e,o)&&e[o]&&e[o][0](),e[c[u]]=0;return i.O(d)},n=self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();