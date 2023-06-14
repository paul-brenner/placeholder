import{S as V,i as j,s as x,k as B,y as c,l as D,m as z,z as _,h as m,n as U,b as p,A as g,g as v,d as w,B as d,C as F,a as I,c as N,q as k,r as C,D as J,E as K}from"../chunks/index.65d03eb6.js";import"../chunks/Indicator.svelte_svelte_type_style_lang.e2c519f7.js";import{N as M,a as O,b as Q,c as R,d as P}from"../chunks/NavUl.033bb6ba.js";import{I as T}from"../chunks/Img.d69bd712.js";function W(l){let e,t,$,r,a;return e=new T({props:{src:"/images/crow-crown.png",alt:"A Goldcrested Crow (wearing a crown)",class:"rounded-lg",imgClass:"h-8"}}),{c(){c(e.$$.fragment),t=I(),$=B("span"),r=k("Goldcrested"),this.h()},l(f){_(e.$$.fragment,f),t=N(f),$=D(f,"SPAN",{class:!0});var n=z($);r=C(n,"Goldcrested"),n.forEach(m),this.h()},h(){U($,"class","self-center whitespace-nowrap text-xl font-semibold dark:text-white px-5")},m(f,n){g(e,f,n),p(f,t,n),p(f,$,n),J($,r),a=!0},p:K,i(f){a||(v(e.$$.fragment,f),a=!0)},o(f){w(e.$$.fragment,f),a=!1},d(f){d(e,f),f&&m(t),f&&m($)}}}function X(l){let e;return{c(){e=k("Home")},l(t){e=C(t,"Home")},m(t,$){p(t,e,$)},d(t){t&&m(e)}}}function Y(l){let e;return{c(){e=k("Personal Links")},l(t){e=C(t,"Personal Links")},m(t,$){p(t,e,$)},d(t){t&&m(e)}}}function Z(l){let e;return{c(){e=k("Inspiration")},l(t){e=C(t,"Inspiration")},m(t,$){p(t,e,$)},d(t){t&&m(e)}}}function y(l){let e;return{c(){e=k("Privacy")},l(t){e=C(t,"Privacy")},m(t,$){p(t,e,$)},d(t){t&&m(e)}}}function ee(l){let e;return{c(){e=k("Contact")},l(t){e=C(t,"Contact")},m(t,$){p(t,e,$)},d(t){t&&m(e)}}}function te(l){let e;return{c(){e=k("Goldcrest Image")},l(t){e=C(t,"Goldcrest Image")},m(t,$){p(t,e,$)},d(t){t&&m(e)}}}function se(l){let e,t,$,r,a,f,n,i,u,h,b,G;return e=new P({props:{href:"/",active:!0,$$slots:{default:[X]},$$scope:{ctx:l}}}),$=new P({props:{href:"/personal_links",$$slots:{default:[Y]},$$scope:{ctx:l}}}),a=new P({props:{href:"/inspiration",$$slots:{default:[Z]},$$scope:{ctx:l}}}),n=new P({props:{href:"/privacy",$$slots:{default:[y]},$$scope:{ctx:l}}}),u=new P({props:{href:"/contact",$$slots:{default:[ee]},$$scope:{ctx:l}}}),b=new P({props:{href:"https://www.google.com/search?q=goldcrest&tbm=isch",$$slots:{default:[te]},$$scope:{ctx:l}}}),{c(){c(e.$$.fragment),t=I(),c($.$$.fragment),r=I(),c(a.$$.fragment),f=I(),c(n.$$.fragment),i=I(),c(u.$$.fragment),h=I(),c(b.$$.fragment)},l(s){_(e.$$.fragment,s),t=N(s),_($.$$.fragment,s),r=N(s),_(a.$$.fragment,s),f=N(s),_(n.$$.fragment,s),i=N(s),_(u.$$.fragment,s),h=N(s),_(b.$$.fragment,s)},m(s,o){g(e,s,o),p(s,t,o),g($,s,o),p(s,r,o),g(a,s,o),p(s,f,o),g(n,s,o),p(s,i,o),g(u,s,o),p(s,h,o),g(b,s,o),G=!0},p(s,o){const q={};o&4&&(q.$$scope={dirty:o,ctx:s}),e.$set(q);const A={};o&4&&(A.$$scope={dirty:o,ctx:s}),$.$set(A);const E={};o&4&&(E.$$scope={dirty:o,ctx:s}),a.$set(E);const H={};o&4&&(H.$$scope={dirty:o,ctx:s}),n.$set(H);const L={};o&4&&(L.$$scope={dirty:o,ctx:s}),u.$set(L);const S={};o&4&&(S.$$scope={dirty:o,ctx:s}),b.$set(S)},i(s){G||(v(e.$$.fragment,s),v($.$$.fragment,s),v(a.$$.fragment,s),v(n.$$.fragment,s),v(u.$$.fragment,s),v(b.$$.fragment,s),G=!0)},o(s){w(e.$$.fragment,s),w($.$$.fragment,s),w(a.$$.fragment,s),w(n.$$.fragment,s),w(u.$$.fragment,s),w(b.$$.fragment,s),G=!1},d(s){d(e,s),s&&m(t),d($,s),s&&m(r),d(a,s),s&&m(f),d(n,s),s&&m(i),d(u,s),s&&m(h),d(b,s)}}}function ne(l){let e,t,$,r,a,f;return e=new O({props:{href:"/",$$slots:{default:[W]},$$scope:{ctx:l}}}),$=new Q({}),$.$on("click",function(){F(l[1])&&l[1].apply(this,arguments)}),a=new R({props:{hidden:l[0],$$slots:{default:[se]},$$scope:{ctx:l}}}),{c(){c(e.$$.fragment),t=I(),c($.$$.fragment),r=I(),c(a.$$.fragment)},l(n){_(e.$$.fragment,n),t=N(n),_($.$$.fragment,n),r=N(n),_(a.$$.fragment,n)},m(n,i){g(e,n,i),p(n,t,i),g($,n,i),p(n,r,i),g(a,n,i),f=!0},p(n,i){l=n;const u={};i&4&&(u.$$scope={dirty:i,ctx:l}),e.$set(u);const h={};i&1&&(h.hidden=l[0]),i&4&&(h.$$scope={dirty:i,ctx:l}),a.$set(h)},i(n){f||(v(e.$$.fragment,n),v($.$$.fragment,n),v(a.$$.fragment,n),f=!0)},o(n){w(e.$$.fragment,n),w($.$$.fragment,n),w(a.$$.fragment,n),f=!1},d(n){d(e,n),n&&m(t),d($,n),n&&m(r),d(a,n)}}}function $e(l){let e,t,$;return t=new M({props:{$$slots:{default:[ne,({hidden:r,toggle:a})=>({0:r,1:a}),({hidden:r,toggle:a})=>(r?1:0)|(a?2:0)]},$$scope:{ctx:l}}}),{c(){e=B("div"),c(t.$$.fragment),this.h()},l(r){e=D(r,"DIV",{class:!0});var a=z(e);_(t.$$.fragment,a),a.forEach(m),this.h()},h(){U(e,"class","flex flex-col flex-grow")},m(r,a){p(r,e,a),g(t,e,null),$=!0},p(r,[a]){const f={};a&7&&(f.$$scope={dirty:a,ctx:r}),t.$set(f)},i(r){$||(v(t.$$.fragment,r),$=!0)},o(r){w(t.$$.fragment,r),$=!1},d(r){r&&m(e),d(t)}}}class oe extends V{constructor(e){super(),j(this,e,null,$e,x,{})}}export{oe as component};
