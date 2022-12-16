(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function g(){}function I(e){return e()}function q(){return Object.create(null)}function C(e){e.forEach(I)}function K(e){return typeof e=="function"}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let E;function X(e,t){return E||(E=document.createElement("a")),E.href=t,e===E.href}function Y(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function z(e,t,n){e.insertBefore(t,n||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function N(e){return document.createTextNode(e)}function v(){return N(" ")}function Z(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ee(e){return Array.from(e.childNodes)}function te(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let T;function x(e){T=e}const b=[],B=[],S=[],H=[],ne=Promise.resolve();let O=!1;function re(){O||(O=!0,ne.then(D))}function M(e){S.push(e)}const A=new Set;let k=0;function D(){const e=T;do{for(;k<b.length;){const t=b[k];k++,x(t),oe(t.$$)}for(x(null),b.length=0,k=0;B.length;)B.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];A.has(n)||(A.add(n),n())}S.length=0}while(b.length);for(;H.length;)H.pop()();O=!1,A.clear(),x(e)}function oe(e){if(e.fragment!==null){e.update(),C(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}const j=new Set;let ie;function G(e,t){e&&e.i&&(j.delete(e),e.i(t))}function se(e,t,n,r){if(e&&e.o){if(j.has(e))return;j.add(e),ie.c.push(()=>{j.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function le(e){e&&e.c()}function J(e,t,n,r){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),r||M(()=>{const s=e.$$.on_mount.map(I).filter(K);e.$$.on_destroy?e.$$.on_destroy.push(...s):C(s),e.$$.on_mount=[]}),i.forEach(M)}function Q(e,t){const n=e.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ce(e,t){e.$$.dirty[0]===-1&&(b.push(e),re(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function R(e,t,n,r,o,i,s,h=[-1]){const m=T;x(e);const l=e.$$={fragment:null,ctx:[],props:i,update:g,not_equal:o,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:q(),dirty:h,skip_bound:!1,root:t.target||m.$$.root};s&&s(l.root);let $=!1;if(l.ctx=n?n(e,t.props||{},(u,d,...y)=>{const _=y.length?y[0]:d;return l.ctx&&o(l.ctx[u],l.ctx[u]=_)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](_),$&&ce(e,u)),d}):[],l.update(),$=!0,C(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const u=ee(t.target);l.fragment&&l.fragment.l(u),u.forEach(P)}else l.fragment&&l.fragment.c();t.intro&&G(e.$$.fragment),J(e,t.target,t.anchor,t.customElement),D()}x(m)}class U{$destroy(){Q(this,1),this.$destroy=g}$on(t,n){if(!K(n))return g;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Y(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ue="/Svelte-js-Project/assets/svelte-a39f39b7.svg";function fe(e){let t,n,r,o,i;return{c(){t=a("button"),n=N("count is "),r=N(e[0])},m(s,h){z(s,t,h),c(t,n),c(t,r),o||(i=Z(t,"click",e[1]),o=!0)},p(s,[h]){h&1&&te(r,s[0])},i:g,o:g,d(s){s&&P(t),o=!1,i()}}}function ae(e,t,n){let r=0;return[r,()=>{n(0,r+=1)}]}class de extends U{constructor(t){super(),R(this,t,ae,fe,F,{})}}function he(e){let t,n,r,o,i,s,h,m,l,$,u,d,y,_,V,w,L;return d=new de({}),{c(){t=a("main"),n=a("div"),r=a("a"),r.innerHTML='<img src="/vite.svg" class="logo svelte-h3exba" alt="Vite Logo"/>',o=v(),i=a("a"),s=a("img"),m=v(),l=a("h1"),l.textContent="Vite + Svelte",$=v(),u=a("div"),le(d.$$.fragment),y=v(),_=a("p"),_.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',V=v(),w=a("p"),w.textContent="Click on the Vite and Svelte logos to learn more",f(r,"href","https://vitejs.dev"),f(r,"target","_blank"),f(r,"rel","noreferrer"),X(s.src,h=ue)||f(s,"src",h),f(s,"class","logo svelte svelte-h3exba"),f(s,"alt","Svelte Logo"),f(i,"href","https://svelte.dev"),f(i,"target","_blank"),f(i,"rel","noreferrer"),f(u,"class","card"),f(w,"class","read-the-docs svelte-h3exba")},m(p,W){z(p,t,W),c(t,n),c(n,r),c(n,o),c(n,i),c(i,s),c(t,m),c(t,l),c(t,$),c(t,u),J(d,u,null),c(t,y),c(t,_),c(t,V),c(t,w),L=!0},p:g,i(p){L||(G(d.$$.fragment,p),L=!0)},o(p){se(d.$$.fragment,p),L=!1},d(p){p&&P(t),Q(d)}}}class me extends U{constructor(t){super(),R(this,t,null,he,F,{})}}new me({target:document.getElementById("app")});
