import{S as H,i as V,s as P,F as K,k as g,l as _,m as p,h as f,n as c,b as y,G as Q,H as R,I as X,g as T,d as j,e as B,E as M,P as Z,a as I,q as ee,c as A,r as te,L as N,D as m,u as ae,y as z,z as F,A as O,B as Y}from"../chunks/index.651b1808.js";/* empty css                                                        */function se(n){let t,s;const e=n[2].default,a=K(e,n,n[1],null);return{c(){t=g("ol"),a&&a.c(),this.h()},l(l){t=_(l,"OL",{class:!0});var r=p(t);a&&a.l(r),r.forEach(f),this.h()},h(){c(t,"class",n[0])},m(l,r){y(l,t,r),a&&a.m(t,null),s=!0},p(l,[r]){a&&a.p&&(!s||r&2)&&Q(a,e,l,l[1],s?X(e,l[1],r,null):R(l[1]),null),(!s||r&1)&&c(t,"class",l[0])},i(l){s||(T(a,l),s=!0)},o(l){j(a,l),s=!1},d(l){l&&f(t),a&&a.d(l)}}}function le(n,t,s){let{$$slots:e={},$$scope:a}=t,{olClass:l="relative border-l border-gray-200 dark:border-gray-700"}=t;return n.$$set=r=>{"olClass"in r&&s(0,l=r.olClass),"$$scope"in r&&s(1,a=r.$$scope)},[l,a,e]}class re extends H{constructor(t){super(),V(this,t,le,se,P,{olClass:0})}}function U(n,t,s){const e=n.slice();return e[1]=t[s].title,e[2]=t[s].date,e[3]=t[s].src,e[4]=t[s].alt,e[5]=t[s].text,e}function G(n){let t,s=n[5]+"";return{c(){t=g("div"),this.h()},l(e){t=_(e,"DIV",{class:!0});var a=p(t);a.forEach(f),this.h()},h(){c(t,"class","p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300")},m(e,a){y(e,t,a),t.innerHTML=s},p(e,a){a&1&&s!==(s=e[5]+"")&&(t.innerHTML=s)},d(e){e&&f(t)}}}function W(n){let t,s,e,a,l,r,i,h,b,$=n[2]+"",x,L,v,k=n[1]+"",C,D,o=n[5]&&G(n);return{c(){t=g("li"),s=g("span"),e=g("img"),r=I(),i=g("div"),h=g("div"),b=g("time"),x=ee($),L=I(),v=g("div"),C=I(),o&&o.c(),D=I(),this.h()},l(u){t=_(u,"LI",{class:!0});var d=p(t);s=_(d,"SPAN",{class:!0});var S=p(s);e=_(S,"IMG",{class:!0,src:!0,alt:!0}),S.forEach(f),r=A(d),i=_(d,"DIV",{class:!0});var w=p(i);h=_(w,"DIV",{class:!0});var E=p(h);b=_(E,"TIME",{class:!0});var q=p(b);x=te(q,$),q.forEach(f),L=A(E),v=_(E,"DIV",{class:!0});var J=p(v);J.forEach(f),E.forEach(f),C=A(w),o&&o.l(w),w.forEach(f),D=A(d),d.forEach(f),this.h()},h(){c(e,"class","rounded-full shadow-lg"),N(e.src,a=n[3])||c(e,"src",a),c(e,"alt",l=n[4]),c(s,"class","flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"),c(b,"class","mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0"),c(v,"class","text-sm font-normal text-gray-500 lex dark:text-gray-300"),c(h,"class","justify-between items-center mb-3 sm:flex"),c(i,"class","p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600"),c(t,"class","mb-10 ml-6")},m(u,d){y(u,t,d),m(t,s),m(s,e),m(t,r),m(t,i),m(i,h),m(h,b),m(b,x),m(h,L),m(h,v),v.innerHTML=k,m(i,C),o&&o.m(i,null),m(t,D)},p(u,d){d&1&&!N(e.src,a=u[3])&&c(e,"src",a),d&1&&l!==(l=u[4])&&c(e,"alt",l),d&1&&$!==($=u[2]+"")&&ae(x,$),d&1&&k!==(k=u[1]+"")&&(v.innerHTML=k),u[5]?o?o.p(u,d):(o=G(u),o.c(),o.m(i,null)):o&&(o.d(1),o=null)},d(u){u&&f(t),o&&o.d()}}}function ne(n){let t,s=n[0],e=[];for(let a=0;a<s.length;a+=1)e[a]=W(U(n,s,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=B()},l(a){for(let l=0;l<e.length;l+=1)e[l].l(a);t=B()},m(a,l){for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(a,l);y(a,t,l)},p(a,[l]){if(l&1){s=a[0];let r;for(r=0;r<s.length;r+=1){const i=U(a,s,r);e[r]?e[r].p(i,l):(e[r]=W(i),e[r].c(),e[r].m(t.parentNode,t))}for(;r<e.length;r+=1)e[r].d(1);e.length=s.length}},i:M,o:M,d(a){Z(e,a),a&&f(t)}}}function ie(n,t,s){let{activities:e}=t;return n.$$set=a=>{"activities"in a&&s(0,e=a.activities)},[e]}class oe extends H{constructor(t){super(),V(this,t,ie,ne,P,{activities:0})}}function ce(n){let t,s;return t=new oe({props:{activities:n[0]}}),{c(){z(t.$$.fragment)},l(e){F(t.$$.fragment,e)},m(e,a){O(t,e,a),s=!0},p:M,i(e){s||(T(t.$$.fragment,e),s=!0)},o(e){j(t.$$.fragment,e),s=!1},d(e){Y(t,e)}}}function fe(n){let t,s,e,a;return e=new re({props:{$$slots:{default:[ce]},$$scope:{ctx:n}}}),{c(){t=g("div"),s=g("div"),z(e.$$.fragment),this.h()},l(l){t=_(l,"DIV",{class:!0});var r=p(t);s=_(r,"DIV",{class:!0});var i=p(s);F(e.$$.fragment,i),i.forEach(f),r.forEach(f),this.h()},h(){c(s,"class","flex flex-col flex-grow items-center justify-center py-20"),c(t,"class","flex flex-col flex-grow")},m(l,r){y(l,t,r),m(t,s),O(e,s,null),a=!0},p(l,[r]){const i={};r&4&&(i.$$scope={dirty:r,ctx:l}),e.$set(i)},i(l){a||(T(e.$$.fragment,l),a=!0)},o(l){j(e.$$.fragment,l),a=!1},d(l){l&&f(t),Y(e)}}}function ue(n){return[[{user:"A User",specialty:"Hair Stylist",location:"Williamsburg",color:"teal"},{user:"A User",specialty:"Pumber",location:"Los Angeles",color:"pink"},{user:"A User",specialty:"Bike Mechanic",location:"1908 W Chicago Ave, Chicago, IL 60622",color:"red"},{user:"Paul",specialty:"Barber",location:"NYC",color:"blue"}].map(e=>{let a=`font-bold text-ctpf-${e.color}`,l=`outline outline-ctpf-${e.color} text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300`,r=`bg-ctpf-${e.color} text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300`;return{title:`<span class="${a}">${e.user}</span> recommended a <span class="${l}">${e.specialty}</span>in <span class="${r}">${e.location}</span>`,date:"just now",alt:"image alt here",src:"https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png"}})]}class ge extends H{constructor(t){super(),V(this,t,ue,fe,P,{})}}export{ge as component};
