import{S as P,i as S,s as U,e as N,b as I,E as T,h as u,W as q,T as b,X as F,k as _,l as h,Y as H,U as A,N as k,a as D,m as L,c as O,n as m,D as C}from"./index.65d03eb6.js";import{c as o}from"./Indicator.svelte_svelte_type_style_lang.e2c519f7.js";function R(t){let s,a,r,c=[t[11],{class:a=o(t[5],t[3],t[4],t[8],t[10].class)},{src:r=t[1]},{srcset:t[2]},{alt:t[7]}],i={};for(let e=0;e<c.length;e+=1)i=b(i,c[e]);return{c(){s=_("img"),this.h()},l(e){s=h(e,"IMG",{class:!0,src:!0,srcset:!0,alt:!0}),this.h()},h(){H(s,i)},m(e,l){I(e,s,l)},p(e,l){H(s,i=A(c,[l&2048&&e[11],l&1336&&a!==(a=o(e[5],e[3],e[4],e[8],e[10].class))&&{class:a},l&2&&!k(s.src,r=e[1])&&{src:r},l&4&&{srcset:e[2]},l&128&&{alt:e[7]}]))},d(e){e&&u(s)}}}function W(t){let s,a,r,c,i,e;return{c(){s=_("figure"),a=_("img"),i=D(),e=_("figcaption"),this.h()},l(l){s=h(l,"FIGURE",{class:!0});var n=L(s);a=h(n,"IMG",{class:!0,src:!0,srcset:!0,alt:!0}),i=O(n),e=h(n,"FIGCAPTION",{class:!0});var g=L(e);g.forEach(u),n.forEach(u),this.h()},h(){m(a,"class",r=o(t[5],t[3],t[4],t[8],t[10].class)),k(a.src,c=t[1])||m(a,"src",c),m(a,"srcset",t[2]),m(a,"alt",t[7]),m(e,"class",t[9]),m(s,"class",t[6])},m(l,n){I(l,s,n),C(s,a),C(s,i),C(s,e),e.innerHTML=t[0]},p(l,n){n&1336&&r!==(r=o(l[5],l[3],l[4],l[8],l[10].class))&&m(a,"class",r),n&2&&!k(a.src,c=l[1])&&m(a,"src",c),n&4&&m(a,"srcset",l[2]),n&128&&m(a,"alt",l[7]),n&1&&(e.innerHTML=l[0]),n&512&&m(e,"class",l[9]),n&64&&m(s,"class",l[6])},d(l){l&&u(s)}}}function X(t){let s;function a(i,e){return i[0]?W:R}let r=a(t),c=r(t);return{c(){c.c(),s=N()},l(i){c.l(i),s=N()},m(i,e){c.m(i,e),I(i,s,e)},p(i,[e]){r===(r=a(i))&&c?c.p(i,e):(c.d(1),c=r(i),c&&(c.c(),c.m(s.parentNode,s)))},i:T,o:T,d(i){c.d(i),i&&u(s)}}}function Y(t,s,a){const r=["caption","src","srcset","size","alignment","imgClass","figClass","alt","effect","captionClass"];let c=q(s,r),{caption:i=void 0}=s,{src:e=void 0}=s,{srcset:l=void 0}=s,{size:n="max-w-full"}=s,{alignment:g=""}=s,{imgClass:z="h-auto"}=s,{figClass:d="max-w-lg"}=s,{alt:E=""}=s,{effect:G=""}=s,{captionClass:M="mt-2 text-sm text-center text-gray-500 dark:text-gray-400"}=s;return t.$$set=f=>{a(10,s=b(b({},s),F(f))),a(11,c=q(s,r)),"caption"in f&&a(0,i=f.caption),"src"in f&&a(1,e=f.src),"srcset"in f&&a(2,l=f.srcset),"size"in f&&a(3,n=f.size),"alignment"in f&&a(4,g=f.alignment),"imgClass"in f&&a(5,z=f.imgClass),"figClass"in f&&a(6,d=f.figClass),"alt"in f&&a(7,E=f.alt),"effect"in f&&a(8,G=f.effect),"captionClass"in f&&a(9,M=f.captionClass)},s=F(s),[i,e,l,n,g,z,d,E,G,M,s,c]}class J extends P{constructor(s){super(),S(this,s,Y,X,U,{caption:0,src:1,srcset:2,size:3,alignment:4,imgClass:5,figClass:6,alt:7,effect:8,captionClass:9})}}export{J as I};
