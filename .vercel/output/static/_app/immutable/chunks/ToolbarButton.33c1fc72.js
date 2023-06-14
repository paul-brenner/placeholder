import{S as Q,i as R,s as V,e as T,b as d,v as Z,d as m,f as w,g as k,h as b,W as E,a1 as x,T as v,X as A,a0 as $,F as U,k as p,a as D,l as z,m as S,c as F,Y as y,D as L,L as ee,G,H,I,U as O,q as W,r as X,n as Y,u as j}from"./index.65d03eb6.js";import{c as ae}from"./Indicator.svelte_svelte_type_style_lang.e2c519f7.js";const le=a=>({svgSize:a&4}),C=a=>({svgSize:a[5][a[2]]}),te=a=>({svgSize:a&4}),P=a=>({svgSize:a[5][a[2]]});function re(a){let e,l,s,t,f,c,o=a[0]&&q(a);const n=a[9].default,u=U(n,a,a[8],C);let r=[{type:"button"},a[6],{class:a[4]},{"aria-label":s=a[1]??a[0]}],g={};for(let i=0;i<r.length;i+=1)g=v(g,r[i]);return{c(){e=p("button"),o&&o.c(),l=D(),u&&u.c(),this.h()},l(i){e=z(i,"BUTTON",{type:!0,class:!0,"aria-label":!0});var _=S(e);o&&o.l(_),l=F(_),u&&u.l(_),_.forEach(b),this.h()},h(){y(e,g)},m(i,_){d(i,e,_),o&&o.m(e,null),L(e,l),u&&u.m(e,null),e.autofocus&&e.focus(),t=!0,f||(c=ee(e,"click",a[10]),f=!0)},p(i,_){i[0]?o?o.p(i,_):(o=q(i),o.c(),o.m(e,l)):o&&(o.d(1),o=null),u&&u.p&&(!t||_&260)&&G(u,n,i,i[8],t?I(n,i[8],_,le):H(i[8]),C),y(e,g=O(r,[{type:"button"},_&64&&i[6],(!t||_&16)&&{class:i[4]},(!t||_&3&&s!==(s=i[1]??i[0]))&&{"aria-label":s}]))},i(i){t||(k(u,i),t=!0)},o(i){m(u,i),t=!1},d(i){i&&b(e),o&&o.d(),u&&u.d(i),f=!1,c()}}}function se(a){let e,l,s,t,f=a[0]&&B(a);const c=a[9].default,o=U(c,a,a[8],P);let n=[{href:a[3]},a[6],{class:a[4]},{"aria-label":s=a[1]??a[0]}],u={};for(let r=0;r<n.length;r+=1)u=v(u,n[r]);return{c(){e=p("a"),f&&f.c(),l=D(),o&&o.c(),this.h()},l(r){e=z(r,"A",{href:!0,class:!0,"aria-label":!0});var g=S(e);f&&f.l(g),l=F(g),o&&o.l(g),g.forEach(b),this.h()},h(){y(e,u)},m(r,g){d(r,e,g),f&&f.m(e,null),L(e,l),o&&o.m(e,null),t=!0},p(r,g){r[0]?f?f.p(r,g):(f=B(r),f.c(),f.m(e,l)):f&&(f.d(1),f=null),o&&o.p&&(!t||g&260)&&G(o,c,r,r[8],t?I(c,r[8],g,te):H(r[8]),P),y(e,u=O(n,[(!t||g&8)&&{href:r[3]},g&64&&r[6],(!t||g&16)&&{class:r[4]},(!t||g&3&&s!==(s=r[1]??r[0]))&&{"aria-label":s}]))},i(r){t||(k(o,r),t=!0)},o(r){m(o,r),t=!1},d(r){r&&b(e),f&&f.d(),o&&o.d(r)}}}function q(a){let e,l;return{c(){e=p("span"),l=W(a[0]),this.h()},l(s){e=z(s,"SPAN",{class:!0});var t=S(e);l=X(t,a[0]),t.forEach(b),this.h()},h(){Y(e,"class","sr-only")},m(s,t){d(s,e,t),L(e,l)},p(s,t){t&1&&j(l,s[0])},d(s){s&&b(e)}}}function B(a){let e,l;return{c(){e=p("span"),l=W(a[0]),this.h()},l(s){e=z(s,"SPAN",{class:!0});var t=S(e);l=X(t,a[0]),t.forEach(b),this.h()},h(){Y(e,"class","sr-only")},m(s,t){d(s,e,t),L(e,l)},p(s,t){t&1&&j(l,s[0])},d(s){s&&b(e)}}}function oe(a){let e,l,s,t;const f=[se,re],c=[];function o(n,u){return n[3]?0:1}return e=o(a),l=c[e]=f[e](a),{c(){l.c(),s=T()},l(n){l.l(n),s=T()},m(n,u){c[e].m(n,u),d(n,s,u),t=!0},p(n,[u]){let r=e;e=o(n),e===r?c[e].p(n,u):(Z(),m(c[r],1,1,()=>{c[r]=null}),w(),l=c[e],l?l.p(n,u):(l=c[e]=f[e](n),l.c()),k(l,1),l.m(s.parentNode,s))},i(n){t||(k(l),t=!0)},o(n){m(l),t=!1},d(n){c[e].d(n),n&&b(s)}}}function ne(a,e,l){const s=["color","name","ariaLabel","size","href"];let t=E(e,s),{$$slots:f={},$$scope:c}=e;const o=x("background");let{color:n="default"}=e,{name:u=void 0}=e,{ariaLabel:r=void 0}=e,{size:g="md"}=e,{href:i=void 0}=e;const _={dark:"text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700",gray:"text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700",red:"text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-gray-700",yellow:"text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-gray-700",green:"text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-gray-700",indigo:"text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-gray-700",purple:"text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-gray-700",pink:"text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-gray-700",blue:"text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-gray-700",default:"focus:ring-gray-400 "},J={xs:"m-0.5 rounded focus:ring-1 p-0.5",sm:"m-0.5 rounded focus:ring-1 p-0.5",md:"m-0.5 rounded-lg focus:ring-2 p-1.5",lg:"m-0.5 rounded-lg focus:ring-2 p-2.5"};let N;const K={xs:"w-3 h-3",sm:"w-3.5 h-3.5",md:"w-5 h-5",lg:"w-5 h-5"};function M(h){$.call(this,a,h)}return a.$$set=h=>{l(14,e=v(v({},e),A(h))),l(6,t=E(e,s)),"color"in h&&l(7,n=h.color),"name"in h&&l(0,u=h.name),"ariaLabel"in h&&l(1,r=h.ariaLabel),"size"in h&&l(2,g=h.size),"href"in h&&l(3,i=h.href),"$$scope"in h&&l(8,c=h.$$scope)},a.$$.update=()=>{l(4,N=ae("focus:outline-none whitespace-normal",J[g],_[n],n==="default"&&(o?"hover:bg-gray-100 dark:hover:bg-gray-600":"hover:bg-gray-100 dark:hover:bg-gray-700"),e.class))},e=A(e),[u,r,g,i,N,K,t,n,c,f,M]}class fe extends Q{constructor(e){super(),R(this,e,ne,oe,V,{color:7,name:0,ariaLabel:1,size:2,href:3})}}export{fe as T};