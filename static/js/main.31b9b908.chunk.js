(this["webpackJsonpair-conditioner"]=this["webpackJsonpair-conditioner"]||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n(11),o=n.n(r),i=n(94),s=n(91),l=(n(64),n(36)),d=n(93),j=n(75),u=n(95),b=n(92),h=(n(65),n(10)),g=n(90),m=n(42);function O(e){return Object(a.jsx)(m.a,Object(h.a)(Object(h.a)({},e),{},{children:Object(a.jsx)("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"})}))}var x=Object(g.a)((function(e){return{root:{margin:e.spacing(3,0)},lightBulb:{verticalAlign:"middle",marginRight:e.spacing(1)}}}));function f(){var e=x();return Object(a.jsxs)(j.a,{align:"center",className:e.root,color:"textSecondary",children:[Object(a.jsx)(O,{className:e.lightBulb}),"Tip: \u4e3a\u4f60\u7684\u590f\u65e5\u5e26\u53bb\u6e05\u51c9\uff01"]})}var p=n(53),w=n(97),v=n.p+"static/media/logo.5fb28574.svg",y="#e0e0e0",k="#cccccc",C="#bbbbbb",N=Object(g.a)((function(e){return{acBorder:{borderBottomLeftRadius:20,borderBottomRightRadius:20},acDisplay:{textShadow:"0px 0px 2px rgba(0, 0, 0, 0.3)",visibility:function(e){return e.visibility}},acLogo:{width:12},acStatus:{backgroundColor:function(e){return e.backgroundColor}},energyLabel:{backgroundColor:"#4ea5f5"}}}));function S(e){return Object(a.jsx)(u.a,Object(h.a)({bgcolor:"background.paper",height:150,border:1,borderColor:y,borderRadius:10,boxShadow:3,position:"relative"},e))}function B(e){return Object(a.jsxs)(u.a,Object(h.a)(Object(h.a)({},e),{},{position:"absolute",top:25,right:30,color:k,children:[Object(a.jsxs)(j.a,{align:"left",variant:"subtitle2",children:[Object(a.jsx)("span",{children:"cold"===e.mode?"\u2744":"\u2600\ufe0f"}),"\ufe0f\ufe0f"]}),Object(a.jsxs)(j.a,{variant:"h4",align:"center",children:[e.temperature,Object(a.jsx)("small",{children:"\xb0C"})]})]}))}function R(e){return Object(a.jsx)(u.a,{align:"center",mt:12,children:Object(a.jsx)("img",{className:e.className,src:v,alt:"logo"})})}function A(){return Object(a.jsx)(u.a,{mt:1,border:1,borderColor:y})}function L(e){var t={backgroundColor:e.status?"#38F709":y},n=N(t);return Object(a.jsx)(u.a,{className:n.acStatus,position:"absolute",height:4,width:4,borderRadius:"50%",top:130,right:10})}function W(e,t,n,c){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=Object(p.a)(new Array(e).keys()),i=o.map((function(e){return Object(a.jsx)(u.a,{mx:c,my:r,width:n,height:n,borderRadius:"50%",bgcolor:t},e)}));return Object(a.jsx)(u.a,{display:"flex",justifyContent:"center",children:i})}function Y(e){return Object(a.jsxs)(u.a,{className:e.className,position:"absolute",top:10,left:10,height:70,width:50,borderRadius:2,p:.5,children:[W(6,"white",4,.25),Object(a.jsxs)(u.a,{my:.5,px:1,py:.25,height:28,width:"100%",bgcolor:"background.paper",children:[Object(a.jsx)(u.a,{bgcolor:"green",height:3,width:"40%"}),Object(a.jsx)(u.a,{mt:.25,bgcolor:"lightGreen",height:3,width:"50%"}),Object(a.jsx)(u.a,{mt:.25,bgcolor:"#ffc107",height:3,width:"60%"}),Object(a.jsx)(u.a,{mt:.25,bgcolor:"orange",height:3,width:"70%"}),Object(a.jsx)(u.a,{mt:.25,bgcolor:"red",height:3,width:"80%"})]}),Object(a.jsxs)(u.a,{mb:.25,pt:.1,height:20,width:"100%",bgcolor:"background.paper",children:[W(11,"black",2,.1,.25),Object(a.jsx)(u.a,{my:.1,borderTop:1,height:0,width:"100%"}),W(9,"black",1.5,.1,.25),W(10,"black",1.2,.1,0)]}),W(8,"white",2,.1)]})}function T(e){return Object(a.jsxs)(u.a,Object(h.a)(Object(h.a)({},e),{},{mt:3,display:"flex",justifyContent:"center",children:[Object(a.jsx)(u.a,{css:{transform:"rotate(10deg)"},bgcolor:C,width:5,height:40}),Object(a.jsx)(u.a,{mx:10,bgcolor:C,width:5,height:40}),Object(a.jsx)(u.a,{css:{transform:"rotate(-10deg)"},bgcolor:C,width:5,height:40})]}))}function E(e){var t=N();return Object(a.jsxs)(u.a,{children:[Object(a.jsxs)(S,{className:t.acBorder,children:[Object(a.jsx)(w.a,{in:e.status,children:Object(a.jsx)(B,{mode:e.mode,temperature:e.temperature})}),Object(a.jsx)(R,{className:t.acLogo}),Object(a.jsx)(A,{}),Object(a.jsx)(L,{status:e.status}),Object(a.jsx)(Y,{className:t.energyLabel,titleLength:6})]}),Object(a.jsx)(w.a,{in:e.status,timeout:{enter:2500,exit:1500},children:Object(a.jsx)(T,{})})]})}var I=n(52),J=n(96),z=n(50),U=n.n(z),D=n(51),M=n.n(D),F=n(48),P=n.n(F),V=n(47),G=n.n(V),H=n(49),$=n.n(H),q=n(35),K=Object(g.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}}));function Q(e){return Object(a.jsx)(J.a,Object(h.a)(Object(h.a)({},e),{},{onClick:function(){document.getElementById("di").play(),e.onClick()}}))}function X(e){e.status?document.getElementById("ac-work").load():function(){var e=document.getElementById("ac-work");e.load(),e.play()}(),e.setStatus(!e.status)}function Z(e,t){e.setMode(t)}var _=Object(I.a)({palette:{primary:q.a}});function ee(e){var t=K();return Object(a.jsxs)(u.a,{my:4,display:"flex",flexDirection:"column",alignItems:"center",children:[Object(a.jsx)("audio",{id:"di",src:"/air-conditioner/assets/audio/di.wav",preload:"auto"}),Object(a.jsx)("audio",{id:"ac-work",src:"/air-conditioner/assets/audio/ac-work.wav",preload:"auto"}),Object(a.jsxs)("div",{children:[" ",Object(a.jsx)(Q,{color:"primary","aria-label":"cold",className:t.margin,onClick:function(){Z(e,"cold")},children:Object(a.jsx)(G.a,{})}),Object(a.jsx)(s.a,{theme:_,children:Object(a.jsx)(Q,{color:e.status?"secondary":"primary","aria-label":"add",className:t.margin,onClick:function(){X(e)},style:{color:"white"},children:Object(a.jsx)(P.a,{})})}),Object(a.jsx)(Q,{"aria-label":"hot",className:t.margin,style:{backgroundColor:"orange",color:"white"},onClick:function(){Z(e,"hot")},children:Object(a.jsx)($.a,{})})]}),Object(a.jsx)(Q,{"aria-label":"add",className:t.margin,onClick:function(){!function(e){e.temperature<31?e.setTemperature(e.temperature+1):console.log("\u5df2\u7ecf\u662f\u6700\u5927\u6e29\u5ea6\u5566\uff01")}(e)},children:Object(a.jsx)(U.a,{})}),Object(a.jsx)(Q,{"aria-label":"reduce",className:t.margin,onClick:function(){!function(e){e.temperature>16?e.setTemperature(e.temperature-1):console.log("\u5df2\u7ecf\u662f\u6700\u5c0f\u6e29\u5ea6\u5566\uff01")}(e)},children:Object(a.jsx)(M.a,{})})]})}function te(){return Object(a.jsx)(u.a,{children:Object(a.jsxs)(j.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)(b.a,{color:"inherit",href:"https://github.com/YunYouJun/air-conditioner",children:"Yun Air Conditioner"})," - ",Object(a.jsx)(b.a,{color:"inherit",href:"https://github.com/YunYouJun",children:"YunYouJun"})," 2019 -  ",(new Date).getFullYear()]})})}var ne=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)("cold"),i=Object(l.a)(o,2),s=i[0],b=i[1],h=Object(c.useState)(16),g=Object(l.a)(h,2),m=g[0],O=g[1];return Object(a.jsx)(d.a,{maxWidth:"sm",children:Object(a.jsxs)(u.a,{my:4,children:[Object(a.jsx)(j.a,{align:"center",variant:"h4",component:"h1",gutterBottom:!0,children:"\u4fbf\u643a\u5c0f\u7a7a\u8c03"}),Object(a.jsx)(f,{}),Object(a.jsx)(E,{status:n,mode:s,temperature:m}),Object(a.jsx)(ee,{status:n,setStatus:r,mode:s,setMode:b,temperature:m,setTemperature:O}),Object(a.jsx)(te,{})]})})},ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var re=Object(I.a)({palette:{}}),oe=n(39);oe.a.initialize("UA-121354150-10"),oe.a.pageview(window.location.pathname+window.location.search),o.a.render(Object(a.jsxs)(s.a,{theme:re,children:[Object(a.jsx)(i.a,{}),Object(a.jsx)(ne,{})]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/air-conditioner",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/air-conditioner","/service-worker.js");ae?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ce(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ce(t,e)}))}}()}},[[71,1,2]]]);
//# sourceMappingURL=main.31b9b908.chunk.js.map