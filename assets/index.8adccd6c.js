(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerpolicy&&(c.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?c.credentials="include":l.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function D(){}function vt(t){return t()}function Bt(){return Object.create(null)}function H(t){t.forEach(vt)}function Kt(t){return typeof t=="function"}function Jt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Qt(t){return Object.keys(t).length===0}function o(t,e){t.appendChild(e)}function J(t,e,n){t.insertBefore(e,n||null)}function G(t){t.parentNode&&t.parentNode.removeChild(t)}function Ft(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function a(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function g(){return j(" ")}function A(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Ut(t){return Array.from(t.childNodes)}function z(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let bt;function K(t){bt=t}const v=[],Rt=[],ct=[],Lt=[],Vt=Promise.resolve();let pt=!1;function Wt(){pt||(pt=!0,Vt.then(Ht))}function gt(t){ct.push(t)}const mt=new Set;let lt=0;function Ht(){const t=bt;do{for(;lt<v.length;){const e=v[lt];lt++,K(e),Xt(e.$$)}for(K(null),v.length=0,lt=0;Rt.length;)Rt.pop()();for(let e=0;e<ct.length;e+=1){const n=ct[e];mt.has(n)||(mt.add(n),n())}ct.length=0}while(v.length);for(;Lt.length;)Lt.pop()();pt=!1,mt.clear(),K(t)}function Xt(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(gt)}}const Yt=new Set;function Zt(t,e){t&&t.i&&(Yt.delete(t),t.i(e))}function Nt(t,e,n,r){const{fragment:l,after_update:c}=t.$$;l&&l.m(e,n),r||gt(()=>{const d=t.$$.on_mount.map(vt).filter(Kt);t.$$.on_destroy?t.$$.on_destroy.push(...d):H(d),t.$$.on_mount=[]}),c.forEach(gt)}function It(t,e){const n=t.$$;n.fragment!==null&&(H(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function te(t,e){t.$$.dirty[0]===-1&&(v.push(t),Wt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ee(t,e,n,r,l,c,d,_=[-1]){const f=bt;K(t);const i=t.$$={fragment:null,ctx:[],props:c,update:D,not_equal:l,bound:Bt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:Bt(),dirty:_,skip_bound:!1,root:e.target||f.$$.root};d&&d(i.root);let m=!1;if(i.ctx=n?n(t,e.props||{},(p,P,...w)=>{const O=w.length?w[0]:P;return i.ctx&&l(i.ctx[p],i.ctx[p]=O)&&(!i.skip_bound&&i.bound[p]&&i.bound[p](O),m&&te(t,p)),P}):[],i.update(),m=!0,H(i.before_update),i.fragment=r?r(i.ctx):!1,e.target){if(e.hydrate){const p=Ut(e.target);i.fragment&&i.fragment.l(p),p.forEach(G)}else i.fragment&&i.fragment.c();e.intro&&Zt(t.$$.fragment),Nt(t,e.target,e.anchor,e.customElement),Ht()}K(f)}class ne{$destroy(){It(this,1),this.$destroy=D}$on(e,n){if(!Kt(n))return D;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!Qt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var E=(t=>(t[t.A=0]="A",t[t.Bes=1]="Bes",t[t.B=2]="B",t[t.C=3]="C",t[t.Des=4]="Des",t[t.D=5]="D",t[t.Ees=6]="Ees",t[t.E=7]="E",t[t.F=8]="F",t[t.Fis=9]="Fis",t[t.G=10]="G",t[t.Aes=11]="Aes",t))(E||{}),S=(t=>(t[t.Root=0]="Root",t[t.Min2=1]="Min2",t[t.Maj2=2]="Maj2",t[t.Min3=3]="Min3",t[t.Maj3=4]="Maj3",t[t.Per4=5]="Per4",t[t.Trit=6]="Trit",t[t.Per5=7]="Per5",t[t.Min6=8]="Min6",t[t.Maj6=9]="Maj6",t[t.Min7=10]="Min7",t[t.Maj7=11]="Maj7",t))(S||{});(t=>{const e=["A","B\u266D","B","C","D\u266D","D","E\u266D","E","F","F\u266F","G","A\u266D"];function n(l){return e[l]}t.name=n;function r(l,c){return(c+l)%12}t.ofInterval=r})(E||(E={}));(t=>{const e=["Root","Minor 2nd","Major 2nd","Minor 3rd","Major 3rd","Perfect 4th","Tritone","Perfect 5th","Minor 6th","Major 6th","Minor 7th","Major 7th"],n=[0,11.73,3.91,15.64,-13.69,-1.96,-17.49,1.96,13.69,-15.64,-3.91,-11.73];function r(c){return e[c]}t.name=r;function l(c){return n[c]}t.justAdjustmentOf=l})(S||(S={}));function oe(t,e){return 100*t+1200*(e-4)}function re(t,e,n){return 100*t+S.justAdjustmentOf(t)+oe(e,n)}function Tt(t,e,n){const r=t.slice();r[20]=e[n];const l=S.name(r[20]);return r[21]=l,r}function Gt(t,e,n){const r=t.slice();return r[24]=e[n],r}function qt(t){let e,n=E.name(t[24])+"",r,l,c,d;function _(){return t[14](t[24])}return{c(){e=a("button"),r=j(n),l=g()},m(f,i){J(f,e,i),o(e,r),o(e,l),c||(d=A(e,"click",_),c=!0)},p(f,i){t=f},d(f){f&&G(e),c=!1,d()}}}function le(t){let e=t[21]+"",n;return{c(){n=j(e)},m(r,l){J(r,n,l)},p:D,d(r){r&&G(n)}}}function ce(t){let e,n=t[21]+"",r;return{c(){e=a("strong"),r=j(n)},m(l,c){J(l,e,c),o(e,r)},p:D,d(l){l&&G(e)}}}function xt(t){let e,n,r,l;function c(i,m){return m&8&&(n=null),n==null&&(n=!!i[3].has(i[20])),n?ce:le}let d=c(t,-1),_=d(t);function f(){return t[16](t[20])}return{c(){e=a("button"),_.c()},m(i,m){J(i,e,m),_.m(e,null),r||(l=A(e,"click",f),r=!0)},p(i,m){t=i,d===(d=c(t,m))&&_?_.p(t,m):(_.d(1),_=d(t),_&&(_.c(),_.m(e,null)))},d(i){i&&G(e),_.d(),r=!1,l()}}}function ie(t){let e,n,r,l,c,d,_,f,i,m,p,P,w,O,q,Q,B,U,F,V,W,X,h,y,C,kt,Y,Z=E.name(t[1])+"",it,ut,st,yt,N,Mt,I,jt,tt,At,Ct,Et,$,ft,wt,et=[...t[3].keys()].sort(zt).map(t[15]).join(", ")+"",at,Pt,R,dt,nt,Ot,$t,Dt,ot,rt=t[4]?"Stop":"Start",ht,_t,St,L=[...Array(12).keys()],b=[];for(let s=0;s<L.length;s+=1)b[s]=qt(Gt(t,L,s));let T=[...Array(12).keys()],k=[];for(let s=0;s<T.length;s+=1)k[s]=xt(Tt(t,T,s));return{c(){e=a("main"),n=a("h1"),n.textContent="tm-99",r=g(),l=a("p"),l.textContent="come at me korg",c=g(),d=a("br"),_=g(),f=a("div"),i=a("button"),i.textContent="-",m=g(),p=a("strong"),P=j("A"),w=a("sub"),w.textContent="4",O=j(" = "),q=j(t[0]),Q=g(),B=a("button"),B.textContent="+",U=g(),F=a("button"),F.textContent="Reset",V=g(),W=a("br"),X=g(),h=a("div"),y=a("div"),C=a("button"),C.textContent="-",kt=g(),Y=a("strong"),it=j(Z),ut=a("sub"),st=j(t[2]),yt=g(),N=a("button"),N.textContent="+",Mt=g(),I=a("button"),I.textContent="Reset",jt=g(),tt=a("div");for(let s=0;s<b.length;s+=1)b[s].c();At=g(),Ct=a("br"),Et=g(),$=a("div"),ft=a("strong"),ft.textContent="Notes:",wt=g(),at=j(et),Pt=g(),R=a("div");for(let s=0;s<k.length;s+=1)k[s].c();dt=g(),nt=a("button"),nt.textContent="Reset",Ot=g(),$t=a("br"),Dt=g(),ot=a("button"),ht=j(rt)},m(s,M){J(s,e,M),o(e,n),o(e,r),o(e,l),o(e,c),o(e,d),o(e,_),o(e,f),o(f,i),o(f,m),o(f,p),o(p,P),o(p,w),o(p,O),o(p,q),o(f,Q),o(f,B),o(f,U),o(f,F),o(e,V),o(e,W),o(e,X),o(e,h),o(h,y),o(y,C),o(y,kt),o(y,Y),o(Y,it),o(Y,ut),o(ut,st),o(y,yt),o(y,N),o(y,Mt),o(y,I),o(h,jt),o(h,tt);for(let u=0;u<b.length;u+=1)b[u].m(tt,null);o(e,At),o(e,Ct),o(e,Et),o(e,$),o($,ft),o($,wt),o($,at),o($,Pt),o($,R);for(let u=0;u<k.length;u+=1)k[u].m(R,null);o(R,dt),o(R,nt),o(e,Ot),o(e,$t),o(e,Dt),o(e,ot),o(ot,ht),_t||(St=[A(i,"click",t[8]),A(B,"click",t[9]),A(F,"click",t[10]),A(C,"click",t[11]),A(N,"click",t[12]),A(I,"click",t[13]),A(nt,"click",t[17]),A(ot,"click",t[5])],_t=!0)},p(s,[M]){if(M&1&&z(q,s[0]),M&2&&Z!==(Z=E.name(s[1])+"")&&z(it,Z),M&4&&z(st,s[2]),M&2){L=[...Array(12).keys()];let u;for(u=0;u<L.length;u+=1){const x=Gt(s,L,u);b[u]?b[u].p(x,M):(b[u]=qt(x),b[u].c(),b[u].m(tt,null))}for(;u<b.length;u+=1)b[u].d(1);b.length=L.length}if(M&10&&et!==(et=[...s[3].keys()].sort(zt).map(s[15]).join(", ")+"")&&z(at,et),M&8){T=[...Array(12).keys()];let u;for(u=0;u<T.length;u+=1){const x=Tt(s,T,u);k[u]?k[u].p(x,M):(k[u]=xt(x),k[u].c(),k[u].m(R,dt))}for(;u<k.length;u+=1)k[u].d(1);k.length=T.length}M&16&&rt!==(rt=s[4]?"Stop":"Start")&&z(ht,rt)},i:D,o:D,d(s){s&&G(e),Ft(b,s),Ft(k,s),_t=!1,H(St)}}}const zt=(t,e)=>t-e;function ue(t,e,n){const r=new window.AudioContext;r.suspend();let l=new Map(document.cookie.split(";").map(h=>h.split("=").map(y=>y.trim()))),c=(parseInt==null?void 0:parseInt(l.get("concertPitch")))||442;const d=r.createGain();d.connect(r.destination);let _=E.A,f=4,i=[],m=new Set([S.Root]),p=!1;function P(){p?(r.suspend(),n(4,p=!1)):(r.resume(),n(4,p=!0))}const w=()=>n(0,c--,c),O=()=>n(0,c++,c),q=()=>n(0,c=442),Q=()=>n(2,f--,f),B=()=>n(2,f++,f),U=()=>n(2,f=4),F=h=>n(1,_=h),V=h=>E.name(E.ofInterval(h,_)),W=h=>{m.has(h)?m.delete(h):m.add(h),n(3,m)},X=()=>n(3,m=new Set([S.Root]));return t.$$.update=()=>{t.$$.dirty&1&&(document.cookie=`concertPitch=${c}`),t.$$.dirty&206&&(i.forEach(h=>{h.disconnect(),h.stop()}),n(7,i=[...Array(m.size)].map(h=>r.createOscillator())),[...m.keys()].forEach((h,y)=>{let C=i[y];C.type="sine",C.detune.value=re(h,_,f),C.connect(d),C.start()}),n(6,d.gain.value=1/(m.size||1),d)),t.$$.dirty&129&&i.forEach(h=>h.frequency.value=c)},[c,_,f,m,p,P,d,i,w,O,q,Q,B,U,F,V,W,X]}class se extends ne{constructor(e){super(),ee(this,e,ue,ie,Jt,{})}}new se({target:document.getElementById("app")});