function y(){}const q=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function Y(){return Object.create(null)}function w(t){t.forEach(X)}function M(t){return typeof t=="function"}function dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let R;function Lt(t,e){return R||(R=document.createElement("a")),R.href=e,t===R.href}function ht(t){return Object.keys(t).length===0}function mt(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Tt(t,e,n){t.$$.on_destroy.push(mt(e,n))}function Bt(t,e,n,i){if(t){const s=Z(t,e,n,i);return t[0](s)}}function Z(t,e,n,i){return t[1]&&i?_t(n.ctx.slice(),t[1](i(e))):n.ctx}function Ft(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)u[o]=e.dirty[o]|s[o];return u}return e.dirty|s}return e.dirty}function Ht(t,e,n,i,s,u){if(s){const r=Z(e,n,i,u);t.p(r,s)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const tt=typeof window!="undefined";let I=tt?()=>window.performance.now():()=>Date.now(),W=tt?t=>requestAnimationFrame(t):y;const k=new Set;function et(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&W(et)}function G(t){let e;return k.size===0&&W(et),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let z=!1;function pt(){z=!0}function yt(){z=!1}function gt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=l?s+1:gt(1,s,a=>e[n[a]].claim_order,l))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const u=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);u.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<u.length&&r[c].claim_order>=u[l].claim_order;)l++;const _=l<u.length?u[l]:null;t.insertBefore(r[c],_)}}function xt(t,e){t.appendChild(e)}function nt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=it("style");return wt(nt(t),e),e.sheet}function wt(t,e){xt(t.head||t,e)}function Et(t,e){if(z){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Wt(t,e,n){z&&!n?Et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function kt(t){t.parentNode.removeChild(t)}function Gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function it(t){return document.createElement(t)}function vt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function Jt(){return J(" ")}function Kt(){return J("")}function Qt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function St(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function rt(t,e,n,i,s=!1){At(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function st(t,e,n,i){return rt(t,s=>s.nodeName===e,s=>{const u=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||u.push(o.name)}u.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Vt(t,e,n){return st(t,e,n,it)}function Xt(t,e,n){return st(t,e,n,vt)}function Ct(t,e){return rt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>J(e),!0)}function Yt(t){return Ct(t," ")}function Zt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function te(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ee(t,e,n){t.classList[n?"add":"remove"](e)}function Nt(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function ne(t,e=document.body){return Array.from(e.querySelectorAll(t))}const O=new Map;let P=0;function jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function qt(t,e){const n={stylesheet:$t(e),rules:{}};return O.set(t,n),n}function D(t,e,n,i,s,u,r,o=0){const c=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=c){const b=e+(n-e)*u(m);l+=m*100+`%{${r(b,1-b)}}
`}const _=l+`100% {${r(n,1-n)}}
}`,f=`__svelte_${jt(_)}_${o}`,a=nt(t),{stylesheet:d,rules:h}=O.get(a)||qt(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,P+=1,f}function L(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),P-=s,P||Mt())}function Mt(){W(()=>{P||(O.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),O.clear())})}let A;function C(t){A=t}function T(){if(!A)throw new Error("Function called outside component initialization");return A}function ie(t){T().$$.on_mount.push(t)}function re(t){T().$$.after_update.push(t)}function se(t,e){T().$$.context.set(t,e)}function ce(t){return T().$$.context.get(t)}const N=[],ct=[],B=[],ot=[],lt=Promise.resolve();let K=!1;function ut(){K||(K=!0,lt.then(at))}function oe(){return ut(),lt}function v(t){B.push(t)}const Q=new Set;let F=0;function at(){const t=A;do{for(;F<N.length;){const e=N[F];F++,C(e),Rt(e.$$)}for(C(null),N.length=0,F=0;ct.length;)ct.pop()();for(let e=0;e<B.length;e+=1){const n=B[e];Q.has(n)||(Q.add(n),n())}B.length=0}while(N.length);for(;ot.length;)ot.pop()();K=!1,Q.clear(),C(t)}function Rt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}let j;function U(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function E(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const H=new Set;let g;function le(){g={r:0,c:[],p:g}}function ue(){g.r||w(g.c),g=g.p}function zt(t,e){t&&t.i&&(H.delete(t),t.i(e))}function ae(t,e,n,i){if(t&&t.o){if(H.has(t))return;H.add(t),g.c.push(()=>{H.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const V={duration:0};function fe(t,e,n){let i=e(t,n),s=!1,u,r,o=0;function c(){u&&L(t,u)}function l(){const{delay:f=0,duration:a=300,easing:d=q,tick:h=y,css:p}=i||V;p&&(u=D(t,0,1,a,f,d,p,o++)),h(0,1);const m=I()+f,b=m+a;r&&r.abort(),s=!0,v(()=>E(t,!0,"start")),r=G(x=>{if(s){if(x>=b)return h(1,0),E(t,!0,"end"),c(),s=!1;if(x>=m){const $=d((x-m)/a);h($,1-$)}}return s})}let _=!1;return{start(){_||(_=!0,L(t),M(i)?(i=i(),U().then(l)):l())},invalidate(){_=!1},end(){s&&(c(),s=!1)}}}function _e(t,e,n){let i=e(t,n),s=!0,u;const r=g;r.r+=1;function o(){const{delay:c=0,duration:l=300,easing:_=q,tick:f=y,css:a}=i||V;a&&(u=D(t,1,0,l,c,_,a));const d=I()+c,h=d+l;v(()=>E(t,!1,"start")),G(p=>{if(s){if(p>=h)return f(0,1),E(t,!1,"end"),--r.r||w(r.c),!1;if(p>=d){const m=_((p-d)/l);f(1-m,m)}}return s})}return M(i)?U().then(()=>{i=i(),o()}):o(),{end(c){c&&i.tick&&i.tick(1,0),s&&(u&&L(t,u),s=!1)}}}function de(t,e,n,i){let s=e(t,n),u=i?0:1,r=null,o=null,c=null;function l(){c&&L(t,c)}function _(a,d){const h=a.b-u;return d*=Math.abs(h),{a:u,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:p=q,tick:m=y,css:b}=s||V,x={start:I()+d,b:a};a||(x.group=g,g.r+=1),r||o?o=x:(b&&(l(),c=D(t,u,a,h,d,p,b)),a&&m(0,1),r=_(x,h),v(()=>E(t,a,"start")),G($=>{if(o&&$>o.start&&(r=_(o,h),o=null,E(t,r.b,"start"),b&&(l(),c=D(t,u,r.b,r.duration,0,p,s.css))),r){if($>=r.end)m(u=r.b,1-u),E(t,r.b,"end"),o||(r.b?l():--r.group.r||w(r.group.c)),r=null;else if($>=r.start){const ft=$-r.start;u=r.a+r.d*p(ft/r.duration),m(u,1-u)}}return!!(r||o)}))}return{run(a){M(s)?U().then(()=>{s=s(),f(a)}):f(a)},end(){l(),r=o=null}}}function he(t,e){const n={},i={},s={$$scope:1};let u=t.length;for(;u--;){const r=t[u],o=e[u];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[u]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function me(t){return typeof t=="object"&&t!==null?t:{}}function pe(t){t&&t.c()}function ye(t,e){t&&t.l(e)}function Ot(t,e,n,i){const{fragment:s,on_mount:u,on_destroy:r,after_update:o}=t.$$;s&&s.m(e,n),i||v(()=>{const c=u.map(X).filter(M);r?r.push(...c):w(c),t.$$.on_mount=[]}),o.forEach(v)}function Pt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(t,e){t.$$.dirty[0]===-1&&(N.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ge(t,e,n,i,s,u,r,o=[-1]){const c=A;C(t);const l=t.$$={fragment:null,ctx:null,props:u,update:y,not_equal:s,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Y(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return l.ctx&&s(l.ctx[f],l.ctx[f]=h)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](h),_&&Dt(t,f)),a}):[],l.update(),_=!0,w(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){pt();const f=St(e.target);l.fragment&&l.fragment.l(f),f.forEach(kt)}else l.fragment&&l.fragment.c();e.intro&&zt(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),yt(),at()}C(c)}class be{$destroy(){Pt(this,1),this.$destroy=y}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const S=[];function xe(t,e=y){let n;const i=new Set;function s(o){if(dt(t,o)&&(t=o,n)){const c=!S.length;for(const l of i)l[1](),S.push(l,t);if(c){for(let l=0;l<S.length;l+=2)S[l][0](S[l+1]);S.length=0}}}function u(o){s(o(t))}function r(o,c=y){const l=[o,c];return i.add(l),i.size===1&&(n=e(s)||y),o(t),()=>{i.delete(l),i.size===0&&(n(),n=null)}}return{set:s,update:u,subscribe:r}}function $e(t,{delay:e=0,duration:n=400,easing:i=q}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:u=>`opacity: ${u*s}`}}export{de as $,me as A,Pt as B,_t as C,xe as D,oe as E,ce as F,Lt as G,Et as H,Qt as I,y as J,w as K,Tt as L,ne as M,ee as N,v as O,fe as P,$e as Q,vt as R,be as S,Xt as T,M as U,_e as V,Bt as W,Ht as X,It as Y,Ft as Z,Gt as _,St as a,Ut as b,Vt as c,kt as d,it as e,te as f,Wt as g,Ct as h,ge as i,Zt as j,Jt as k,Kt as l,Yt as m,le as n,ae as o,ue as p,zt as q,se as r,dt as s,J as t,re as u,ie as v,pe as w,ye as x,Ot as y,he as z};
