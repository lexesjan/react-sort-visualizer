(this["webpackJsonpreact-sort-visualizer"]=this["webpackJsonpreact-sort-visualizer"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),u=(n(10),n(1)),i=n(2);n(11);function l(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function s(e){var t=Object(u.a)(e),n=[];return function e(t,n,r,a){if(r<=n)return;var o=function(e,t,n,r){var a=t,o=n+1,c=e[t];for(;;){for(;e[++a]<=c&&a!==n;)r.push([[a],!1]);for(;e[--o]>=c&&o!==t;)r.push([[o],!1]);if(o<=a)break;r.push([[a,e[o]],!0]),r.push([[o,e[a]],!0]),l(e,a,o)}return r.push([[t,e[o]],!0]),r.push([[o,e[t]],!0]),l(e,t,o),o}(t,n,r,a);e(t,n,o,a),e(t,o+1,r,a)}(t,0,t.length-1,n),n}function f(e){var t=Object(u.a)(e),n=t.length,r=[];return function e(t,n,r,a,o){if(a<=r)return;var c=r+Math.floor((a-r)/2);e(t,n,r,c,o),e(t,n,c+1,a,o),function(e,t,n,r,a,o){for(var c=n;c<=a;c++)t[c]=e[c];for(var u=n,i=r+1,l=n;l<=a;l++)u>r?(o.push([[i],!1]),o.push([[l,t[i]],!0]),e[l]=t[i++]):i>a?(o.push([[u],!1]),o.push([[l,t[u]],!0]),e[l]=t[u++]):t[i]<t[u]?(o.push([[u,i],!1]),o.push([[l,t[i]],!0]),e[l]=t[i++]):(o.push([[u,i],!1]),o.push([[l,t[u]],!0]),e[l]=t[u++])}(t,n,r,c,a,o)}(t,Array(n),0,n-1,r),r}function h(e){var t=Object(r.useState)([]),n=Object(i.a)(t,2),o=n[0],c=n[1],h=Object(r.useState)(!1),p=Object(i.a)(h,2),v=p[0],b=p[1],d=Object(r.useState)(!1),g=Object(i.a)(d,2),E=g[0],j=g[1],O=Object(r.useRef)(null);function k(){if(!v){E&&C(),j(!1);for(var e=[],t=0;t<100;t++)e.push(t/100*75+5);m(e),c(e)}}function w(e){v||(b(!0),e.forEach((function(e,t){var n=Object(i.a)(e,2),r=n[0],a=n[1];setTimeout((function(){if(a)c((function(e){var t=Object(i.a)(r,2),n=t[0],a=t[1],o=Object(u.a)(e);return o[n]=a,o}));else if(2===r.length){var e=Object(i.a)(r,2),t=e[0],n=e[1];y(t),y(n)}else{y(Object(i.a)(r,1)[0])}}),5*t)})),setTimeout((function(){!function(){for(var e=O.current.children,t=function(t){var n=e[t].style;setTimeout((function(){return n.backgroundColor="green"}),5*t)},n=0;n<e.length;n++)t(n);setTimeout((function(){j(!0),b(!1)}),5*e.length)}()}),5*e.length))}function y(e){var t=O.current.children[e].style;setTimeout((function(){t.backgroundColor="turquoise"}),5),setTimeout((function(){t.backgroundColor=""}),10)}function C(){for(var e=O.current.children,t=0;t<o.length;t++){e[t].style.backgroundColor=""}}return Object(r.useEffect)(k,[]),a.a.createElement("div",{className:"visualizer-container"},a.a.createElement("div",{className:"array-container",ref:O},o.map((function(e,t){return a.a.createElement("div",{className:"array-bar",style:{height:"".concat(e,"vmin"),width:"".concat(1,"vw")},key:t})}))),a.a.createElement("footer",{className:"app-footer"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("button",{className:"app-button",onClick:k},"Create new array")),a.a.createElement("li",null,a.a.createElement("button",{className:"app-button",onClick:function(){w(f(o))}},"Merge sort")),a.a.createElement("li",null,a.a.createElement("button",{className:"app-button",onClick:function(){w(function(e){for(var t=Object(u.a)(e),n=[],r=1;r<t.length;r++)for(var a=r-1;a>=0&&(n.push([[a,a+1],!1]),t[a+1]<t[a]);a--)n.push([[a,t[a+1]],!0]),n.push([[a+1,t[a]],!0]),l(t,a,a+1);return n}(o))}},"Insertion sort")),a.a.createElement("li",null,a.a.createElement("button",{className:"app-button",onClick:function(){w(s(o))}},"Quick sort")))))}var m=function(e){for(var t=e.length-1;t>=0;t--){var n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}};var p=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.1f8da4b7.chunk.js.map