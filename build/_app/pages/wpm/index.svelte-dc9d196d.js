import{S as P,i as L,s as B,e as g,t as k,k as w,c as v,a as T,h as C,d as b,m as E,b as m,g as F,J as c,$ as x,K as N,j as S,L as j,M as K,v as M,a0 as O}from"../../chunks/vendor-823cca4d.js";const U=s=>{let t=s.split(" ");for(let e=0;e<t.length-1;e++)t[e]+=" ";return t},D=(s,t)=>{let e="",i="",l=0,u=!1;return[...s].forEach(n=>{n===t[l]?e+=n:i+=n,l++}),e.length===t.length&&(u=!0,e=""),{correct:e,incorrect:i,isWordComplete:u}};function H(s){let t,e,i,l,u,n,h,_,f,p,y,a,A,z;return{c(){t=g("section"),e=g("div"),i=g("span"),l=k(s[4]),u=w(),n=g("span"),h=k(s[3]),_=w(),f=g("span"),p=k(s[2]),y=w(),a=g("input"),this.h()},l(o){t=v(o,"SECTION",{class:!0});var r=T(t);e=v(r,"DIV",{class:!0});var d=T(e);i=v(d,"SPAN",{class:!0});var I=T(i);l=C(I,s[4]),I.forEach(b),u=E(d),n=v(d,"SPAN",{class:!0});var q=T(n);h=C(q,s[3]),q.forEach(b),_=E(d),f=v(d,"SPAN",{class:!0});var W=T(f);p=C(W,s[2]),W.forEach(b),d.forEach(b),y=E(r),a=v(r,"INPUT",{type:!0,class:!0,id:!0}),r.forEach(b),this.h()},h(){m(i,"class","correcttext svelte-cfzzaq"),m(n,"class","incorrecttext svelte-cfzzaq"),m(f,"class","unfinishedtext svelte-cfzzaq"),m(e,"class","racetext svelte-cfzzaq"),m(a,"type","text"),m(a,"class","user-input"),m(a,"id","user-input"),m(t,"class","svelte-cfzzaq")},m(o,r){F(o,t,r),c(t,e),c(e,i),c(i,l),c(e,u),c(e,n),c(n,h),c(e,_),c(e,f),c(f,p),c(t,y),c(t,a),s[6](a),x(a,s[1]),A||(z=[N(a,"input",s[7]),N(a,"keydown",s[5])],A=!0)},p(o,[r]){r&16&&S(l,o[4]),r&8&&S(h,o[3]),r&4&&S(p,o[2]),r&2&&a.value!==o[1]&&x(a,o[1])},i:j,o:j,d(o){o&&b(t),s[6](null),A=!1,K(z)}}}function J(s,t,e){const i=`Amarillo by mornin', up from San Antone.
                            Everything that I got is just what I've got on.
                            When that sun is high in that Texas sky, I'll be buckin' at the county fair.
                            Amarillo by mornin', Amarillo I'll be there.
                            They took my saddle in Houston.
                            Broke my leg in Santa Fe.
                            Lost my wife and a girlfriend somewhere along the way.
                            But I'll be lookin' for eight when they pull that gate, and I hope that judge ain't blind.
                            Amarillo by mornin', Amarillo's on my mind.`;let l;const u=i;let n="",h=[],_="",f="",p="",y="",a="";M(()=>{h=U(u),a=h[0],e(2,_=u)});const A=()=>{console.log(n);let{userCorrect:r,userIncorrect:d,isWordComplete:I}=D(n,a);I&&(y+=h[0],h.shift(),a=h[0],e(1,n=""),e(0,l.value="",l)),e(4,p=y+r),e(3,f=d),e(2,_=u.replace(p+f,""))};function z(r){O[r?"unshift":"push"](()=>{l=r,e(0,l)})}function o(){n=this.value,e(1,n)}return[l,n,_,f,p,A,z,o]}class V extends P{constructor(t){super();L(this,t,J,H,B,{})}}export{V as default};
