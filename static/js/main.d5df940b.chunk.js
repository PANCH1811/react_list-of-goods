(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var s,r=n(4),c=n.n(r),i=n(7),o=n(5),a=n(6),u=n(9),l=n(8),b=n(1),d=n.n(b),h=(n(14),n(15),n(2)),p=n.n(h),j=n(0),f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var v=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={isReversed:!1,sortType:s.NONE},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortBy=function(e){t.setState((function(){return{sortType:e}}))},t.reset=function(){t.setState((function(){return{isReversed:!1,sortType:s.NONE}}))},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isReversed,r=e.sortType,c=n||r!==s.NONE;return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button is-info",{"is-light":r!==s.ALPHABET}),onClick:function(){return t.sortBy(s.ALPHABET)},children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button is-success",{"is-light":r!==s.LENGTH}),onClick:function(){return t.sortBy(s.LENGTH)},children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button is-warning",{"is-light":!n}),onClick:this.reverse,children:"Reverse"}),c&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.reset,children:"Reset"})]}),Object(j.jsx)("ul",{children:function(t,e){var n=e.sortType,r=e.isReversed,c=Object(i.a)(t);return c.sort((function(t,e){switch(n){case s.ALPHABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;default:return 0}})),r&&c.reverse(),c}(f,{sortType:r,isReversed:n}).map((function(t){return Object(j.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),n}(d.a.Component);c.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d5df940b.chunk.js.map