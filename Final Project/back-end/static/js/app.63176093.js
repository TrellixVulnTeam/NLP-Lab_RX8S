(function(e){function t(t){for(var n,o,c=t[0],i=t[1],l=t[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&f.push(u[o][0]),u[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==u[i]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},u={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="../static/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("NLP Final Project")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",name:"msg"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),r("button",{on:{click:e.Search_handler}},[e._v("Search")]),e.Search_Status?r("p"):r("p",[e._v("搜尋失敗，請再試一次!")]),r("ul",e._l(e.Search_result,(function(t,n){return r("li",[e._v(" "+e._s(n)+":"+e._s(t)+" ")])})),0)])},a=[],o=r("bc3a"),c=r.n(o),i={data:function(){return{query:"",Search_result:{},Search_Status:!0}},methods:{Search_handler:function(){var e=this;alert("欲查詢英文詞彙: ".concat(this.query)),this.$data.query="",c.a.get("/here/js_get",{params:{query:this.query}}).then((function(t){e.Search_result=t.data}),(function(t){t="",e.Search_result=t,e.$data.Search_Status=!1}))}}},l=i,s=(r("034f"),r("2877")),p=Object(s["a"])(l,u,a,!1,null,null,null),f=p.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.63176093.js.map