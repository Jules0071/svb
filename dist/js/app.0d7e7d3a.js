(function(t){function e(e){for(var r,u,c=e[0],i=e[1],p=e[2],s=0,f=[];s<c.length;s++)u=c[s],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&f.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"17e4":function(t,e,n){"use strict";var r=n("d7c9"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("ba4c"),a=n.n(r),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main-wrap")],1)},u=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"svb-main-wrap"},[t._v(" "+t._s(t.data.name)+" "+t._s(t.data.description)+" "),t._t("default")],2)},i=[],p={components:{},props:{},data:function(){return{api:"https://svbuehlertal.de/wp-json/?page=1",data:{}}},computed:{},methods:{},mounted:function(){var t=this;this.$http.get(this.api).then((function(e){console.log(e.data),t.data=e.data}))}},l=p,s=(n("17e4"),n("2877")),f=Object(s["a"])(l,c,i,!1,null,"2eaacefc",null),d=f.exports,h={name:"app",components:{MainWrap:d}},v=h,b=Object(s["a"])(v,o,u,!1,null,null,null),m=b.exports,y=n("bc3a"),g=n.n(y),w=n("a7fe"),_=n.n(w);a.a.use(_.a,g.a),a.a.config.productionTip=!1,new a.a({render:function(t){return t(m)}}).$mount("#app")},d7c9:function(t,e,n){}});
//# sourceMappingURL=app.0d7e7d3a.js.map