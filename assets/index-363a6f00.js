(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function N(){}const ae=e=>e;function he(e,t){for(const n in t)e[n]=t[n];return e}function je(e){return e()}function _e(){return Object.create(null)}function P(e){e.forEach(je)}function me(e){return typeof e=="function"}function q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let Y;function ge(e,t){return Y||(Y=document.createElement("a")),Y.href=t,e===Y.href}function Re(e){return Object.keys(e).length===0}function Be(e,...t){if(e==null)return N;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ve(e,t,n){e.$$.on_destroy.push(Be(t,n))}const Oe=typeof window<"u";let Fe=Oe?()=>window.performance.now():()=>Date.now(),de=Oe?e=>requestAnimationFrame(e):N;const T=new Set;function Le(e){T.forEach(t=>{t.c(e)||(T.delete(t),t.f())}),T.size!==0&&de(Le)}function Me(e){let t;return T.size===0&&de(Le),{promise:new Promise(n=>{T.add(t={c:e,f:n})}),abort(){T.delete(t)}}}function m(e,t){e.appendChild(t)}function Pe(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Ie(e){const t=b("style");return Ke(Pe(e),t),t.sheet}function Ke(e,t){return m(e.head||e,t),t.sheet}function O(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e){return document.createElement(e)}function z(e){return document.createTextNode(e)}function U(){return z(" ")}function He(){return z("")}function M(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Je(e){return function(t){return t.preventDefault(),e.call(this,t)}}function d(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Xe(e){return Array.from(e.childNodes)}function le(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Z(e,t){e.value=t??""}function qe(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,r,t),i}const re=new Map;let ie=0;function Ge(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Qe(e,t){const n={stylesheet:Ie(t),rules:{}};return re.set(e,n),n}function ye(e,t,n,r,i,s,o,l=0){const a=16.666/r;let u=`{
`;for(let E=0;E<=1;E+=a){const $=t+(n-t)*s(E);u+=E*100+`%{${o($,1-$)}}
`}const p=u+`100% {${o(n,1-n)}}
}`,_=`__svelte_${Ge(p)}_${l}`,v=Pe(e),{stylesheet:g,rules:h}=re.get(v)||Qe(v,e);h[_]||(h[_]=!0,g.insertRule(`@keyframes ${_} ${p}`,g.cssRules.length));const y=e.style.animation||"";return e.style.animation=`${y?`${y}, `:""}${_} ${r}ms linear ${i}ms 1 both`,ie+=1,_}function Ve(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?s=>s.indexOf(t)<0:s=>s.indexOf("__svelte")===-1),i=n.length-r.length;i&&(e.style.animation=r.join(", "),ie-=i,ie||We())}function We(){de(()=>{ie||(re.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&S(t)}),re.clear())})}let G;function X(e){G=e}function De(){if(!G)throw new Error("Function called outside component initialization");return G}function Ye(e){De().$$.on_mount.push(e)}function se(){const e=De();return(t,n,{cancelable:r=!1}={})=>{const i=e.$$.callbacks[t];if(i){const s=qe(t,n,{cancelable:r});return i.slice().forEach(o=>{o.call(e,s)}),!s.defaultPrevented}return!0}}const J=[],be=[],te=[],$e=[],Ze=Promise.resolve();let ce=!1;function et(){ce||(ce=!0,Ze.then(ze))}function Q(e){te.push(e)}const oe=new Set;let ee=0;function ze(){const e=G;do{for(;ee<J.length;){const t=J[ee];ee++,X(t),tt(t.$$)}for(X(null),J.length=0,ee=0;be.length;)be.pop()();for(let t=0;t<te.length;t+=1){const n=te[t];oe.has(n)||(oe.add(n),n())}te.length=0}while(J.length);for(;$e.length;)$e.pop()();ce=!1,oe.clear(),X(e)}function tt(e){if(e.fragment!==null){e.update(),P(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Q)}}let H;function nt(){return H||(H=Promise.resolve(),H.then(()=>{H=null})),H}function ue(e,t,n){e.dispatchEvent(qe(`${t?"intro":"outro"}${n}`))}const ne=new Set;let L;function we(){L={r:0,c:[],p:L}}function ke(){L.r||P(L.c),L=L.p}function j(e,t){e&&e.i&&(ne.delete(e),e.i(t))}function F(e,t,n,r){if(e&&e.o){if(ne.has(e))return;ne.add(e),L.c.push(()=>{ne.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}const rt={duration:0};function Ce(e,t,n,r){const i={direction:"both"};let s=t(e,n,i),o=r?0:1,l=null,a=null,u=null;function p(){u&&Ve(e,u)}function _(g,h){const y=g.b-o;return h*=Math.abs(y),{a:o,b:g.b,d:y,duration:h,start:g.start,end:g.start+h,group:g.group}}function v(g){const{delay:h=0,duration:y=300,easing:E=ae,tick:$=N,css:w}=s||rt,k={start:Fe()+h,b:g};g||(k.group=L,L.r+=1),l||a?a=k:(w&&(p(),u=ye(e,o,g,y,h,E,w)),g&&$(0,1),l=_(k,y),Q(()=>ue(e,g,"start")),Me(A=>{if(a&&A>a.start&&(l=_(a,y),a=null,ue(e,l.b,"start"),w&&(p(),u=ye(e,o,l.b,l.duration,0,E,s.css))),l){if(A>=l.end)$(o=l.b,1-o),ue(e,l.b,"end"),a||(l.b?p():--l.group.r||P(l.group.c)),l=null;else if(A>=l.start){const C=A-l.start;o=l.a+l.d*E(C/l.duration),$(o,1-o)}}return!!(l||a)}))}return{run(g){me(s)?nt().then(()=>{s=s(i),v(g)}):v(g)},end(){p(),l=a=null}}}function it(e,t){F(e,1,1,()=>{t.delete(e.key)})}function st(e,t,n,r,i,s,o,l,a,u,p,_){let v=e.length,g=s.length,h=v;const y={};for(;h--;)y[e[h].key]=h;const E=[],$=new Map,w=new Map;for(h=g;h--;){const c=_(i,s,h),f=n(c);let x=o.get(f);x?r&&x.p(c,t):(x=u(f,c),x.c()),$.set(f,E[h]=x),f in y&&w.set(f,Math.abs(h-y[f]))}const k=new Set,A=new Set;function C(c){j(c,1),c.m(l,p),o.set(c.key,c),p=c.first,g--}for(;v&&g;){const c=E[g-1],f=e[v-1],x=c.key,W=f.key;c===f?(p=c.first,v--,g--):$.has(W)?!o.has(x)||k.has(x)?C(c):A.has(W)?v--:w.get(x)>w.get(W)?(A.add(x),C(c)):(k.add(W),v--):(a(f,o),v--)}for(;v--;){const c=e[v];$.has(c.key)||a(c,o)}for(;g;)C(E[g-1]);return E}function V(e){e&&e.c()}function R(e,t,n,r){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),r||Q(()=>{const o=e.$$.on_mount.map(je).filter(me);e.$$.on_destroy?e.$$.on_destroy.push(...o):P(o),e.$$.on_mount=[]}),s.forEach(Q)}function B(e,t){const n=e.$$;n.fragment!==null&&(P(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(e,t){e.$$.dirty[0]===-1&&(J.push(e),et(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function I(e,t,n,r,i,s,o,l=[-1]){const a=G;X(e);const u=e.$$={fragment:null,ctx:[],props:s,update:N,not_equal:i,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:_e(),dirty:l,skip_bound:!1,root:t.target||a.$$.root};o&&o(u.root);let p=!1;if(u.ctx=n?n(e,t.props||{},(_,v,...g)=>{const h=g.length?g[0]:v;return u.ctx&&i(u.ctx[_],u.ctx[_]=h)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](h),p&&lt(e,_)),v}):[],u.update(),p=!0,P(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const _=Xe(t.target);u.fragment&&u.fragment.l(_),_.forEach(S)}else u.fragment&&u.fragment.c();t.intro&&j(e.$$.fragment),R(e,t.target,t.anchor,t.customElement),ze()}X(a)}class K{$destroy(){B(this,1),this.$destroy=N}$on(t,n){if(!me(n))return N;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!Re(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const D=[];function Te(e,t=N){let n;const r=new Set;function i(l){if(q(e,l)&&(e=l,n)){const a=!D.length;for(const u of r)u[1](),D.push(u,e);if(a){for(let u=0;u<D.length;u+=2)D[u][0](D[u+1]);D.length=0}}}function s(l){i(l(e))}function o(l,a=N){const u=[l,a];return r.add(u),r.size===1&&(n=t(i)||N),l(e),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}function Ee(e){return Object.prototype.toString.call(e)==="[object Date]"}function fe(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const r=t.map((i,s)=>fe(e[s],i));return i=>r.map(s=>s(i))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(Ee(e)&&Ee(t)){e=e.getTime(),t=t.getTime();const s=t-e;return o=>new Date(e+o*s)}const r=Object.keys(t),i={};return r.forEach(s=>{i[s]=fe(e[s],t[s])}),s=>{const o={};return r.forEach(l=>{o[l]=i[l](s)}),o}}if(n==="number"){const r=t-e;return i=>e+i*r}throw new Error(`Cannot interpolate ${n} values`)}function ot(e,t={}){const n=Te(e);let r,i=e;function s(o,l){if(e==null)return n.set(e=o),Promise.resolve();i=o;let a=r,u=!1,{delay:p=0,duration:_=400,easing:v=ae,interpolate:g=fe}=he(he({},t),l);if(_===0)return a&&(a.abort(),a=null),n.set(e=i),Promise.resolve();const h=Fe()+p;let y;return r=Me(E=>{if(E<h)return!0;u||(y=g(e,o),typeof _=="function"&&(_=_(e,o)),u=!0),a&&(a.abort(),a=null);const $=E-h;return $>_?(n.set(e=o),!1):(n.set(e=y(v($/_))),!0)}),r.promise}return{set:s,update:(o,l)=>s(o(i,e),l),subscribe:n.subscribe}}function ut(e){let t,n,r,i,s,o,l,a,u;return{c(){t=b("div"),n=b("label"),n.textContent="Filter User",r=U(),i=b("select"),s=b("option"),s.textContent="All",o=b("option"),o.textContent="Active",l=b("option"),l.textContent="In Active",d(n,"for","user-filter"),s.__value=null,s.value=s.__value,o.__value=!0,o.value=o.__value,l.__value=!1,l.value=l.__value,d(i,"name","user-filter"),d(i,"id","user-filter"),d(i,"class","border rounded-lg px-4 py-2 ml-4 "),d(t,"class","mx-5")},m(p,_){O(p,t,_),m(t,n),m(t,r),m(t,i),m(i,s),m(i,o),m(i,l),a||(u=M(i,"change",e[0]),a=!0)},p:N,i:N,o:N,d(p){p&&S(t),a=!1,u()}}}function ct(e){const t=se();return[r=>{t("handleChange",r.target.value)}]}class ft extends K{constructor(t){super(),I(this,t,ct,ut,q,{})}}function at(e){let t,n,r,i;return{c(){t=b("div"),n=b("button"),n.textContent="New User",d(n,"class","svelte-oog425")},m(s,o){O(s,t,o),m(t,n),r||(i=M(n,"click",e[0]),r=!0)},p:N,i:N,o:N,d(s){s&&S(t),r=!1,i()}}}function mt(e){const t=se();return[()=>{t("broClic")}]}class dt extends K{constructor(t){super(),I(this,t,mt,at,q,{})}}function xe(e,{delay:t=0,duration:n=400,easing:r=ae}={}){const i=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:r,css:s=>`opacity: ${s*i}`}}function pt(e){let t,n,r,i,s,o,l,a,u,p=e[1]+1+"",_,v,g=e[0].name+"",h,y,E,$=e[0].email+"",w,k,A,C,c;return{c(){t=b("main"),n=b("div"),r=b("button"),r.textContent="X",i=U(),s=b("img"),a=U(),u=b("h2"),_=z(p),v=z(". "),h=z(g),y=U(),E=b("p"),w=z($),d(r,"class","absolute text-center top-2 opacity-0 right-3 mint svelte-1webpyc"),ge(s.src,o=e[0].img)||d(s,"src",o),d(s,"alt",l=e[0].name),d(s,"width","128"),d(s,"class","svelte-1webpyc"),d(u,"class","text-xl text-slate-700 font-semibold  svelte-1webpyc"),d(E,"class","text-slate-500"),d(n,"class","card svelte-1webpyc"),d(t,"class","relative")},m(f,x){O(f,t,x),m(t,n),m(n,r),m(n,i),m(n,s),m(n,a),m(n,u),m(u,_),m(u,v),m(u,h),m(n,y),m(n,E),m(E,w),A=!0,C||(c=M(r,"click",e[2]),C=!0)},p(f,[x]){(!A||x&1&&!ge(s.src,o=f[0].img))&&d(s,"src",o),(!A||x&1&&l!==(l=f[0].name))&&d(s,"alt",l),(!A||x&2)&&p!==(p=f[1]+1+"")&&le(_,p),(!A||x&1)&&g!==(g=f[0].name+"")&&le(h,g),(!A||x&1)&&$!==($=f[0].email+"")&&le(w,$)},i(f){A||(Q(()=>{k||(k=Ce(t,xe,{},!0)),k.run(1)}),A=!0)},o(f){k||(k=Ce(t,xe,{},!1)),k.run(0),A=!1},d(f){f&&S(t),f&&k&&k.end(),C=!1,c()}}}function ht(e,t,n){let r=se(),{user:i}=t,{i:s}=t;function o(){r("remove",i.id)}return e.$$set=l=>{"user"in l&&n(0,i=l.user),"i"in l&&n(1,s=l.i)},[i,s,o]}class _t extends K{constructor(t){super(),I(this,t,ht,pt,q,{user:0,i:1})}}function gt(e){let t,n,r,i,s,o,l,a,u,p,_,v,g,h,y,E,$,w,k,A,C;return{c(){t=b("div"),n=b("main"),r=b("form"),i=b("div"),s=b("label"),s.textContent="Username :",o=U(),l=b("input"),a=U(),u=b("div"),p=b("label"),p.textContent="Email :",_=U(),v=b("input"),g=U(),h=b("div"),y=b("label"),y.textContent="Active :",E=U(),$=b("input"),w=U(),k=b("div"),k.innerHTML='<button id="submit-button" class="bg-blue-200 p-2 m-2 rounded-lg hover:bg-blue-400 transition-all">Submit</button>',d(s,"for","username"),d(l,"type","text"),d(l,"name","username"),d(l,"id","username"),l.required=!0,d(l,"class","svelte-kvmw7l"),d(i,"class","svelte-kvmw7l"),d(p,"for","userEmail"),d(v,"type","email"),d(v,"name","userEmail"),d(v,"id","userEmail"),v.required=!0,d(v,"class","svelte-kvmw7l"),d(u,"class","svelte-kvmw7l"),d(y,"for","userActive"),d($,"type","checkbox"),d($,"name","userActive"),d($,"id","userActive"),d($,"class","svelte-kvmw7l"),d(h,"class","svelte-kvmw7l"),d(k,"class","svelte-kvmw7l"),d(r,"class","svelte-kvmw7l"),d(n,"class","w-80 rounded-lg border border-gray-500"),d(t,"class","flex justify-center my-3 transition-all shd")},m(c,f){O(c,t,f),m(t,n),m(n,r),m(r,i),m(i,s),m(i,o),m(i,l),Z(l,e[0].name),m(r,a),m(r,u),m(u,p),m(u,_),m(u,v),Z(v,e[0].email),m(r,g),m(r,h),m(h,y),m(h,E),m(h,$),$.checked=e[0].active,m(r,w),m(r,k),A||(C=[M(l,"input",e[2]),M(v,"input",e[3]),M($,"change",e[4]),M(r,"submit",Je(e[1]))],A=!0)},p(c,[f]){f&1&&l.value!==c[0].name&&Z(l,c[0].name),f&1&&v.value!==c[0].email&&Z(v,c[0].email),f&1&&($.checked=c[0].active)},i:N,o:N,d(c){c&&S(t),A=!1,P(C)}}}function vt(e,t,n){let r={},i=se(),s=()=>{i("submitForm",r),n(0,r.name="",r),n(0,r.email="",r),n(0,r.active=!1,r)};function o(){r.name=this.value,n(0,r)}function l(){r.email=this.value,n(0,r)}function a(){r.active=this.checked,n(0,r)}return[r,s,o,l,a]}class yt extends K{constructor(t){super(),I(this,t,vt,gt,q,{})}}const pe=Te([{id:1,img:"https://cdn-icons-png.flaticon.com/512/9187/9187609.png",name:"Parth Sharma",email:"parthsharma@gmail.com",active:!0},{id:2,img:"https://cdn-icons-png.flaticon.com/512/3237/3237472.png",name:"Martin Luther",email:"martin@gmail.com",active:!0},{id:3,img:"https://cdn-icons-png.flaticon.com/512/506/506185.png",name:"John Lee",email:"john@gmail.com",active:!1},{id:4,img:"https://cdn-icons-png.flaticon.com/512/2102/2102633.png",name:"Aryan Sathe",email:"aryan@gmd.com",active:!0},{id:5,img:"https://cdn-icons-png.flaticon.com/512/552/552909.png",name:"Khushal Bhatt",email:"kushal@google.com",active:!1}]),bt=({detail:e})=>{pe.update(t=>t.filter(n=>n.id!==e))},$t=({detail:e})=>{pe.update(t=>[{id:Number(t.length+1),img:"https://cdn-icons-png.flaticon.com/512/2922/2922561.png",...e},...t])};function Ae(e,t,n){const r=e.slice();return r[7]=t[n],r[9]=n,r}function Ne(e){let t,n;return t=new yt({}),t.$on("submitForm",$t),{c(){V(t.$$.fragment)},m(r,i){R(t,r,i),n=!0},p:N,i(r){n||(j(t.$$.fragment,r),n=!0)},o(r){F(t.$$.fragment,r),n=!1},d(r){B(t,r)}}}function Ue(e){let t;return{c(){t=b("p"),t.textContent="No User Found"},m(n,r){O(n,t,r)},p:N,d(n){n&&S(t)}}}function Se(e,t){let n,r,i;return r=new _t({props:{user:t[7],i:t[9]}}),r.$on("remove",bt),{key:e,first:null,c(){n=He(),V(r.$$.fragment),this.first=n},m(s,o){O(s,n,o),R(r,s,o),i=!0},p(s,o){t=s;const l={};o&2&&(l.user=t[7]),o&2&&(l.i=t[9]),r.$set(l)},i(s){i||(j(r.$$.fragment,s),i=!0)},o(s){F(r.$$.fragment,s),i=!1},d(s){s&&S(n),B(r,s)}}}function wt(e){let t,n,r,i,s,o,l,a,u,p,_,v,g,h,y=[],E=new Map,$;s=new ft({}),s.$on("handleChange",e[3]),l=new dt({}),l.$on("broClic",e[4]);let w=e[0]&&Ne(),k=e[1];const A=c=>c[7].id;for(let c=0;c<k.length;c+=1){let f=Ae(e,k,c),x=A(f);E.set(x,y[c]=Se(x,f))}let C=null;return k.length||(C=Ue()),{c(){t=b("div"),n=b("h1"),n.textContent="List of users",r=U(),i=b("div"),V(s.$$.fragment),o=U(),V(l.$$.fragment),a=U(),u=b("div"),p=b("progress"),_=U(),v=b("div"),w&&w.c(),g=U(),h=b("div");for(let c=0;c<y.length;c+=1)y[c].c();C&&C.c(),d(n,"class","text-3xl text-center font-semibold my-4"),d(i,"class","flex justify-center items-center my-5"),d(p,"min","0"),d(p,"max","12"),p.value=e[2],d(p,"class","w-full px-52"),d(v,"class","transition-all"),d(h,"class","flex justify-center px-20 flex-wrap ")},m(c,f){O(c,t,f),m(t,n),m(t,r),m(t,i),R(s,i,null),m(i,o),R(l,i,null),m(t,a),m(t,u),m(u,p),m(t,_),m(t,v),w&&w.m(v,null),O(c,g,f),O(c,h,f);for(let x=0;x<y.length;x+=1)y[x].m(h,null);C&&C.m(h,null),$=!0},p(c,[f]){(!$||f&4)&&(p.value=c[2]),c[0]?w?(w.p(c,f),f&1&&j(w,1)):(w=Ne(),w.c(),j(w,1),w.m(v,null)):w&&(we(),F(w,1,1,()=>{w=null}),ke()),f&2&&(k=c[1],we(),y=st(y,f,A,1,c,k,E,h,it,Se,null,Ae),ke(),!k.length&&C?C.p(c,f):k.length?C&&(C.d(1),C=null):(C=Ue(),C.c(),C.m(h,null)))},i(c){if(!$){j(s.$$.fragment,c),j(l.$$.fragment,c),j(w);for(let f=0;f<k.length;f+=1)j(y[f]);$=!0}},o(c){F(s.$$.fragment,c),F(l.$$.fragment,c),F(w);for(let f=0;f<y.length;f+=1)F(y[f]);$=!1},d(c){c&&S(t),B(s),B(l),w&&w.d(),c&&S(g),c&&S(h);for(let f=0;f<y.length;f+=1)y[f].d();C&&C.d()}}}function kt(e,t,n){let r,i,s;ve(e,pe,p=>n(6,i=p));function o({detail:p}){p==="false"?n(1,r=i.filter(_=>_.active===!1)):p==="true"?n(1,r=i.filter(_=>_.active===!0)):n(1,r=i)}let l=!1,a=()=>{n(0,l=l===!1)};const u=ot(0,{duration:900});return ve(e,u,p=>n(2,s=p)),Ye(()=>{u.set(r.length)}),e.$$.update=()=>{e.$$.dirty&64&&n(1,r=i)},[l,r,s,o,a,u,i]}class Ct extends K{constructor(t){super(),I(this,t,kt,wt,q,{})}}function Et(e){let t,n,r;return n=new Ct({}),{c(){t=b("main"),V(n.$$.fragment)},m(i,s){O(i,t,s),R(n,t,null),r=!0},p:N,i(i){r||(j(n.$$.fragment,i),r=!0)},o(i){F(n.$$.fragment,i),r=!1},d(i){i&&S(t),B(n)}}}class xt extends K{constructor(t){super(),I(this,t,null,Et,q,{})}}new xt({target:document.getElementById("app")});