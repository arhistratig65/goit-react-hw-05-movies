"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(n,t,r){r.r(t),r.d(t,{default:function(){return k}});var e,a,u,c=r(861),o=r(439),i=r(687),s=r.n(i),p=r(791),f=r(689),l=r(872),h=r(168),d=r(686),v=d.Z.ul(e||(e=(0,h.Z)(["\n  margin-top: 12px;\n"]))),g=d.Z.li(a||(a=(0,h.Z)(["\n  font-size: 14px;\n  padding: 6px;\n  background-color: #fff;\n  border-radius: 14px;\n\n  :not(:last-child) {\n    margin-bottom: 12px;\n  }\n\n  p {\n    color: grey;\n  }\n\n  span {\n    color: #000000;\n  }\n"]))),x=d.Z.p(u||(u=(0,h.Z)(["\n  color: grey;\n  margin-top: 6px;\n"]))),m=r(184),k=function(){var n=(0,f.UO)().movieId,t=(0,p.useState)([]),r=(0,o.Z)(t,2),e=r[0],a=r[1];return(0,p.useEffect)((function(){var t=function(){var t=(0,c.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.Hu)(n);case 3:r=t.sent,a(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),0===e.length?(0,m.jsx)("h3",{children:"No Reviews"}):(0,m.jsx)(v,{children:e.map((function(n){var t=n.id,r=n.author,e=n.content;return(0,m.jsxs)(g,{children:[(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{children:"Author:"})," ",r]}),(0,m.jsx)(x,{children:e})]},t)}))})}},872:function(n,t,r){r.d(t,{Df:function(){return i},Eb:function(){return f},Hu:function(){return l},Pg:function(){return p},Ph:function(){return s}});var e=r(861),a=r(687),u=r.n(a),c=r(243),o=r(194);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var n=(0,e.Z)(u().mark((function n(){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/week?api_key=".concat(o.$h));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o.$h,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(o.$h,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(o.$h,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o.$h,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},194:function(n,t,r){r.d(t,{$h:function(){return e},fh:function(){return a},l7:function(){return u}});var e="3a61376fa2d4fd76588642066d14799c",a="https://image.tmdb.org/t/p/w500/",u="https://via.placeholder.com/182x273"}}]);
//# sourceMappingURL=387.7ad9b137.chunk.js.map