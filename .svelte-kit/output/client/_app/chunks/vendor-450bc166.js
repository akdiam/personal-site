function y(){}const D=t=>t;function ft(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function K(){return Object.create(null)}function b(t){t.forEach(J)}function L(t){return typeof t=="function"}function _t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let N;function Dt(t,e){return N||(N=document.createElement("a")),N.href=e,t===N.href}function dt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function Tt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?ft(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let l=0;l<c;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function Ft(t,e,n,i,r,u){if(r){const c=Q(e,n,i,u);t.p(c,r)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const U=typeof window!="undefined";let V=U?()=>window.performance.now():()=>Date.now(),T=U?t=>requestAnimationFrame(t):y;const x=new Set;function X(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&T(X)}function Y(t){let e;return x.size===0&&T(X),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let C=!1;function mt(){C=!0}function pt(){C=!1}function yt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const o=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=o?r+1:yt(1,r,_=>e[n[_]].claim_order,o))-1;i[s]=n[f]+1;const a=f+1;n[a]=s,r=Math.max(a,r)}const u=[],c=[];let l=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(e[s-1]);l>=s;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);u.reverse(),c.sort((s,o)=>s.claim_order-o.claim_order);for(let s=0,o=0;s<c.length;s++){for(;o<u.length&&c[s].claim_order>=u[o].claim_order;)o++;const f=o<u.length?u[o]:null;t.insertBefore(c[s],f)}}function bt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=tt("style");return $t(Z(t),e),e.sheet}function $t(t,e){bt(t.head||t,e)}function wt(t,e){if(C){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function It(t,e,n){C&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Et(t){t.parentNode.removeChild(t)}function tt(t){return document.createElement(t)}function vt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function B(t){return document.createTextNode(t)}function Wt(){return B(" ")}function Gt(){return B("")}function Jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t){return Array.from(t.childNodes)}function St(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,i,r=!1){St(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function nt(t,e,n,i){return et(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];n[l.name]||u.push(l.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Qt(t,e,n){return nt(t,e,n,tt)}function Ut(t,e,n){return nt(t,e,n,vt)}function At(t,e){return et(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>B(e),!0)}function Vt(t){return At(t," ")}function Xt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Yt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Zt(t,e,n){t.classList[n?"add":"remove"](e)}function Nt(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function te(t,e=document.body){return Array.from(e.querySelectorAll(t))}const j=new Map;let q=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:xt(e),rules:{}};return j.set(t,n),n}function it(t,e,n,i,r,u,c,l=0){const s=16.666/i;let o=`{
`;for(let m=0;m<=1;m+=s){const A=e+(n-e)*u(m);o+=m*100+`%{${c(A,1-A)}}
`}const f=o+`100% {${c(n,1-n)}}
}`,a=`__svelte_${Ct(f)}_${l}`,_=Z(t),{stylesheet:d,rules:h}=j.get(_)||jt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,q+=1,a}function F(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),q-=r,q||qt())}function qt(){T(()=>{q||(j.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),j.clear())})}let w;function E(t){w=t}function H(){if(!w)throw new Error("Function called outside component initialization");return w}function ee(t){H().$$.on_mount.push(t)}function ne(t){H().$$.after_update.push(t)}function ie(t,e){H().$$.context.set(t,e)}const v=[],rt=[],M=[],st=[],ct=Promise.resolve();let I=!1;function ot(){I||(I=!0,ct.then(lt))}function re(){return ot(),ct}function k(t){M.push(t)}const W=new Set;let R=0;function lt(){const t=w;do{for(;R<v.length;){const e=v[R];R++,E(e),Mt(e.$$)}for(E(null),v.length=0,R=0;rt.length;)rt.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];W.has(n)||(W.add(n),n())}M.length=0}while(v.length);for(;st.length;)st.pop()();I=!1,W.clear(),E(t)}function Mt(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}let S;function ut(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function z(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const O=new Set;let g;function se(){g={r:0,c:[],p:g}}function ce(){g.r||b(g.c),g=g.p}function Rt(t,e){t&&t.i&&(O.delete(t),t.i(e))}function oe(t,e,n,i){if(t&&t.o){if(O.has(t))return;O.add(t),g.c.push(()=>{O.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const at={duration:0};function le(t,e,n){let i=e(t,n),r=!1,u,c,l=0;function s(){u&&F(t,u)}function o(){const{delay:a=0,duration:_=300,easing:d=D,tick:h=y,css:p}=i||at;p&&(u=it(t,0,1,_,a,d,p,l++)),h(0,1);const m=V()+a,A=m+_;c&&c.abort(),r=!0,k(()=>z(t,!0,"start")),c=Y(P=>{if(r){if(P>=A)return h(1,0),z(t,!0,"end"),s(),r=!1;if(P>=m){const G=d((P-m)/_);h(G,1-G)}}return r})}let f=!1;return{start(){f||(f=!0,F(t),L(i)?(i=i(),ut().then(o)):o())},invalidate(){f=!1},end(){r&&(s(),r=!1)}}}function ue(t,e,n){let i=e(t,n),r=!0,u;const c=g;c.r+=1;function l(){const{delay:s=0,duration:o=300,easing:f=D,tick:a=y,css:_}=i||at;_&&(u=it(t,1,0,o,s,f,_));const d=V()+s,h=d+o;k(()=>z(t,!1,"start")),Y(p=>{if(r){if(p>=h)return a(0,1),z(t,!1,"end"),--c.r||b(c.c),!1;if(p>=d){const m=f((p-d)/o);a(1-m,m)}}return r})}return L(i)?ut().then(()=>{i=i(),l()}):l(),{end(s){s&&i.tick&&i.tick(1,0),r&&(u&&F(t,u),r=!1)}}}function ae(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],l=e[u];if(l){for(const s in c)s in l||(i[s]=1);for(const s in l)r[s]||(n[s]=l[s],r[s]=1);t[u]=l}else for(const s in c)r[s]=1}for(const c in i)c in n||(n[c]=void 0);return n}function fe(t){return typeof t=="object"&&t!==null?t:{}}function _e(t){t&&t.c()}function de(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:c,after_update:l}=t.$$;r&&r.m(e,n),i||k(()=>{const s=u.map(J).filter(L);c?c.push(...s):b(s),t.$$.on_mount=[]}),l.forEach(k)}function Ot(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(t,e){t.$$.dirty[0]===-1&&(v.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function he(t,e,n,i,r,u,c,l=[-1]){const s=w;E(t);const o=t.$$={fragment:null,ctx:null,props:u,update:y,not_equal:r,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:K(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};c&&c(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return o.ctx&&r(o.ctx[a],o.ctx[a]=h)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](h),f&&Pt(t,a)),_}):[],o.update(),f=!0,b(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){mt();const a=kt(e.target);o.fragment&&o.fragment.l(a),a.forEach(Et)}else o.fragment&&o.fragment.c();e.intro&&Rt(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),pt(),lt()}E(s)}class me{$destroy(){Ot(this,1),this.$destroy=y}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $=[];function pe(t,e=y){let n;const i=new Set;function r(l){if(_t(t,l)&&(t=l,n)){const s=!$.length;for(const o of i)o[1](),$.push(o,t);if(s){for(let o=0;o<$.length;o+=2)$[o][0]($[o+1]);$.length=0}}}function u(l){r(l(t))}function c(l,s=y){const o=[l,s];return i.add(o),i.size===1&&(n=e(r)||y),l(t),()=>{i.delete(o),i.size===0&&(n(),n=null)}}return{set:r,update:u,subscribe:c}}function ye(t,{delay:e=0,duration:n=400,easing:i=D}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:u=>`opacity: ${u*r}`}}export{fe as A,Ot as B,ft as C,pe as D,re as E,te as F,Zt as G,Dt as H,wt as I,Jt as J,L as K,y as L,b as M,Lt as N,k as O,le as P,ye as Q,vt as R,me as S,Ut as T,ue as U,Tt as V,Ft as W,Ht as X,Bt as Y,kt as a,Kt as b,Qt as c,Et as d,tt as e,Yt as f,It as g,At as h,he as i,Xt as j,Wt as k,Gt as l,Vt as m,se as n,oe as o,ce as p,Rt as q,ie as r,_t as s,B as t,ne as u,ee as v,_e as w,de as x,zt as y,ae as z};