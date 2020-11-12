(function(e){function t(t){for(var o,c,l=t[0],s=t[1],u=t[2],p=0,d=[];p<l.length;p++)c=l[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);a&&a(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var a=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c=(n("034f"),n("2877")),l={},s=Object(c["a"])(l,r,i,!1,null,null,null),u=s.exports,a=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("A List of Things To Do")]),n("p",{directives:[{name:"show",rawName:"v-show",value:0===e.activeItems.length,expression:"activeItems.length === 0"}]},[e._v("You are done with all your tasks! Good job!")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.addItem(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{type:"text"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),n("button",{attrs:{type:"submit"}},[e._v("Add")])]),n("div",{staticClass:"controls"},[n("button",{on:{click:function(t){return e.showAll()}}},[e._v("Show All")]),n("button",{on:{click:function(t){return e.showActive()}}},[e._v("Show Active")]),n("button",{on:{click:function(t){return e.showCompleted()}}},[e._v("Show Completed")]),n("button",{on:{click:function(t){return e.deleteCompleted()}}},[e._v("Delete Completed")])]),n("ul",e._l(e.filteredItems,(function(t){return n("li",{key:t.id},[n("label",{class:{item:!0,completed:t.completed}},[e._v(" "+e._s(t.text)+" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"item.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{change:function(n){var o=t.completed,r=n.target,i=!!r.checked;if(Array.isArray(o)){var c=null,l=e._i(o,c);r.checked?l<0&&e.$set(t,"completed",o.concat([c])):l>-1&&e.$set(t,"completed",o.slice(0,l).concat(o.slice(l+1)))}else e.$set(t,"completed",i)}}}),n("span",{staticClass:"checkmark"})]),n("button",{staticClass:"delete",on:{click:function(n){return e.deleteItem(t)}}},[e._v("X")])])})),0)])},d=[],f=(n("4de4"),n("c975"),n("a434"),{name:"Home",data:function(){return{items:[{text:"make an app",completed:!1},{text:"declare victory",completed:!1},{text:"profit",completed:!1}],text:"",show:"all"}},computed:{activeItems:function(){return this.items.filter((function(e){return!e.completed}))},filteredItems:function(){return"active"===this.show?this.items.filter((function(e){return!e.completed})):"completed"===this.show?this.items.filter((function(e){return e.completed})):this.items}},methods:{addItem:function(){this.items.push({text:this.text,completed:!1}),this.text=""},deleteItem:function(e){var t=this.items.indexOf(e);t>-1&&this.items.splice(t,1)},showAll:function(){this.show="all"},showActive:function(){this.show="active"},showCompleted:function(){this.show="completed"},deleteCompleted:function(){this.items=this.items.filter((function(e){return!e.completed}))}}}),m=f,h=(n("67e6"),Object(c["a"])(m,p,d,!1,null,"33ddbe21",null)),v=h.exports;o["a"].use(a["a"]);var b=[{path:"/",name:"Home",component:v}],w=new a["a"]({mode:"history",base:"/",routes:b}),y=w;o["a"].config.productionTip=!1,new o["a"]({router:y,render:function(e){return e(u)}}).$mount("#app")},"67e6":function(e,t,n){"use strict";var o=n("fc41"),r=n.n(o);r.a},"85ec":function(e,t,n){},fc41:function(e,t,n){}});
//# sourceMappingURL=app.2160bf44.js.map