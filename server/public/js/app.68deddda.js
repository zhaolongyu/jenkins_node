(function(e){function t(t){for(var o,u,c=t[0],i=t[1],s=t[2],l=0,p=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&p.push(r[u][0]),r[u]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d87cae82","chunk-2d0f0bff":"069a9e8a","chunk-561f8f7c":"e14b47b1","chunk-712fdeb1":"3858e644"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(e);var s=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("d9a3"),n("c9db"),n("de3e"),n("618d");var o=n("0261"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(n("5c0b"),n("e90a")),c={},i=Object(u["a"])(c,r,a,!1,null,null,null),s=i.exports,l=n("1bee"),f=(n("7ae7"),n("2ef9")),p=(n("3a20"),[{path:"*",redirect:"/"},{path:"/login",name:"login",component:function(){return n.e("chunk-561f8f7c").then(n.bind(null,"dd7b"))}},{path:"/header",name:"header",component:function(){return n.e("chunk-2d0f0bff").then(n.bind(null,"9e63"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]),d=[{path:"/",name:"Home",component:function(){return n.e("chunk-712fdeb1").then(n.bind(null,"bb51"))}}],h=[].concat(Object(f["a"])(p),Object(f["a"])(d));o["a"].use(l["a"]);var m=new l["a"]({routes:h});m.beforeEach((function(e,t,n){localStorage.getItem("token")||"/login"===e.path?n():n({path:"/login"})}));var b=m,v=(n("b449"),n("17d6")),g=n("8876");o["a"].use(g["b"]);var k={namespaced:!0,state:{list:1},mutations:{savelist:function(){},savelist123123:function(){},dsfsd123:function(){}},actions:{saveSessionId:function(e){var t=e.commit;t("savelist")}}},y=new g["b"].Store({namespaced:!0,state:{token:!1,test:2222},mutations:{tokenBooleanFalse:function(){this.state.token=!1},tokenBooleanTrue:function(){this.state.token=!0}},actions:{add:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,n("tokenBooleanFalse");case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},modules:{modulesA:k}}),w=(n("b3f9"),n("d780"),n("82ae")),j=n.n(w);j.a.interceptors.request.use((function(e){return y.state.token&&(e.headers={token:localStorage.getItem("token")}),e}),(function(e){return Promise.reject(e)})),j.a.interceptors.response.use((function(e){return y.commit("tokenBooleanTrue"),e.headers={token:localStorage.getItem("token")},e}),(function(e){return"401"===e.response.data.code&&(alert(e.response.data.msg),localStorage.removeItem("token",""),y.commit("tokenBooleanFalse"),b.replace({path:"/login"})),Promise.reject(e.response.data)})),j.a.defaults.withCredentials=!0;var O=j.a;O.defaults.baseURL="http://localhost:3001",o["a"].prototype.axios=O,new o["a"]({router:b,store:y,axios:O,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("fdc3"),r=n.n(o);r.a},fdc3:function(e,t,n){}});
//# sourceMappingURL=app.68deddda.js.map