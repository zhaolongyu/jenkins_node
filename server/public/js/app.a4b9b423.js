(function(e){function t(t){for(var o,u,i=t[0],c=t[1],s=t[2],f=0,p=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&p.push(r[u][0]),r[u]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0f58e545","chunk-2d0f0bff":"069a9e8a","chunk-561f8f7c":"779365a0","chunk-712fdeb1":"9a3bad9b"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[e]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("d9a3"),n("c9db"),n("de3e"),n("618d");var o=n("0261"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(n("5c0b"),n("e90a")),i={},c=Object(u["a"])(i,r,a,!1,null,null,null),s=c.exports,f=n("1bee"),l=(n("7ae7"),n("2ef9")),p=(n("3a20"),[{path:"*",redirect:"/"},{path:"/login",name:"login",component:function(){return n.e("chunk-561f8f7c").then(n.bind(null,"dd7b"))}},{path:"/header",name:"header",component:function(){return n.e("chunk-2d0f0bff").then(n.bind(null,"9e63"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]),d=[{path:"/",name:"Home",component:function(){return n.e("chunk-712fdeb1").then(n.bind(null,"bb51"))}}],h=[].concat(Object(l["a"])(p),Object(l["a"])(d));o["a"].use(f["a"]);var b=new f["a"]({mode:"history",routes:h});b.beforeEach((function(e,t,n){localStorage.getItem("token")||"/login"===e.path?n():n({path:"/login"})}));var m=b,v=(n("b449"),n("17d6")),g=n("8876");o["a"].use(g["b"]);var y={namespaced:!0,state:{list:1},mutations:{savelist:function(){},savelist123123:function(){},dsfsd123:function(){}},actions:{saveSessionId:function(e){var t=e.commit;t("savelist")}}},w=new g["b"].Store({namespaced:!0,state:{token:!1,test:2222},mutations:{tokenBooleanFalse:function(){this.state.token=!1},tokenBooleanTrue:function(){this.state.token=!0}},actions:{add:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,n("tokenBooleanFalse");case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},modules:{modulesA:y}}),k=n("82ae"),j=n.n(k);j.a.defaults.baseURL="http://localhost:3001",o["a"].prototype.axios=j.a,o["a"].config.productionTip=!1,new o["a"]({router:m,store:w,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("fdc3"),r=n.n(o);r.a},fdc3:function(e,t,n){}});
//# sourceMappingURL=app.a4b9b423.js.map