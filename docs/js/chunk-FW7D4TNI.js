var ge=e=>[].concat(...e),ye=e=>typeof e=="object"&&!Array.isArray(e)&&typeof e!="function",qe=e=>{for(let t in e)return!1;return!0},_=(e,t)=>{let i,s,a=Object.keys(e),n={};for(let r=0,o=a.length;r<o;r++)i=a[r],s=e[i],n[i]=t(s,i,e);return n},j=e=>""+e,Kt=e=>{let t=parseFloat(e);return j(e).replace(j(t),"")},tt=e=>j(e).trim(),St=(e,t="split")=>Array.isArray(e)||typeof e=="string"&&t=="split"?(typeof e=="string"&&(e=e.split(/\s+/)),e):[e],A=e=>Array.isArray(e)||typeof e=="string"?Boolean(e.length):e!=null&&e!=null&&!Number.isNaN(e),wt=e=>(e=e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)).charAt(0)=="-"?e.substr(1):e,Vt=e=>e.includes("--")?e:`${e}`.replace(/-([a-z])/g,(t,i)=>i.toUpperCase()),N=(e,t)=>{let i=[...e],s={...t};for(;i.length;){let{[i.pop()]:a,...n}=s;s=n}return s},be=(e,t)=>{let i=[...e],s={};for(let a of i)A(t[a])&&(s[a]=t[a]);return s},Y=(...e)=>{let t=0,i=[],s=(e=e.map(a=>{let n=St(a),r=n.length;return r>t&&(t=r),n})).length;for(let a=0;a<t;a++){i[a]=[];for(let n=0;n<s;n++){let r=e[n][a];A(r)&&(i[a][n]=r)}}return i},At=e=>typeof e=="string"?e.includes("%")?parseFloat(e)/100:e=="from"?0:e=="to"?1:parseFloat(e):e,Ee=e=>{let t=new Set,i=Object.keys(e),s=i.length;for(let a=0;a<s;a++){let n=""+i[a],r=e[n],o=n.split(","),l=o.length;for(let u=0;u<l;u++){let h=At(o[u]);t.add({...r,offset:h})}}return[...t].sort((a,n)=>a.offset-n.offset)},Le={},z=class{constructor(t){this.map=new Map(t)}getMap(){return this.map}get(t){return this.map.get(t)}keys(){return Array.from(this.map.keys())}values(){return Array.from(this.map.values())}set(t,i){return this.map.set(t,i),this}add(t){let i=this.size;return this.set(i,t),this}get size(){return this.map.size}get length(){return this.map.size}last(t=1){let i=this.keys()[this.size-t];return this.get(i)}delete(t){return this.map.delete(t)}remove(t){return this.map.delete(t),this}clear(){return this.map.clear(),this}has(t){return this.map.has(t)}entries(){return this.map.entries()}forEach(t,i){return this.map.forEach(t,i),this}[Symbol.iterator](){return this.entries()}},kt=(e="")=>t=>typeof t=="string"?t:`${t}${e}`,et=kt(),xt=kt("px"),It=kt("deg"),it=e=>t=>A(t)?St(t).map(i=>{if(typeof i!="number"&&typeof i!="string")return i;let s=Number(i),a=Number.isNaN(s)?typeof i=="string"?i.trim():i:s;return e(a)}):[],R=(e,t)=>St(e).map(it(t)),v=it(et),x=it(xt),k=it(It),Pt=new z,st={translate3d:["--translate3d0","--translate3d1","--translate3d2"],translate:["--translate0","--translate1"],translateX:"--translateX",translateY:"--translateY",translateZ:"--translateZ",rotate3d:["--rotate3d0","--rotate3d1","--rotate3d2","--rotate3d3"],rotate:"--rotate",rotateX:"--rotateX",rotateY:"--rotateY",rotateZ:"--rotateZ",scale3d:["--scale3d0","--scale3d1","--scale3d2"],scale:["--scale0","--scale1"],scaleX:"--scaleX",scaleY:"--scaleY",scaleZ:"--scaleZ",skew:["--skew0","--skew1"],skewX:"--skewX",skewY:"--skewY",perspective:"--perspective"},W="registerProperty"in CSS,at=Object.keys(st),de;window.RegisteredCSSVars=(de=window.RegisteredCSSVars)!=null?de:{};var Xt=(e={})=>Object.keys(e).filter(t=>at.includes(t)).map(t=>{if(!W)return"";let i=[].concat(st[t]);return i.forEach(s=>{if(window.RegisteredCSSVars[s])return;let a={name:s,inherits:!1};/translate|perspective/i.test(s)?CSS.registerProperty({...a,syntax:"<length-percentage>",initialValue:"0px"}):/rotate3d3|skew/i.test(s)?CSS.registerProperty({...a,syntax:"<angle>",initialValue:"0deg"}):/scale|rotate3d/i.test(s)?CSS.registerProperty({...a,syntax:"<number>",initialValue:/rotate3d/i.test(s)?0:1}):/rotate/i.test(s)&&CSS.registerProperty({...a,syntax:"<angle>",initialValue:"0deg"}),window.RegisteredCSSVars[s]=!0}),`${t}(${i.map(s=>`var(${s})`)})`}).join(" "),Ut=(e={})=>{let t={};return at.forEach(i=>{if(!(i in e))return;let s=[].concat(e[i]).filter(o=>A(o)).map(o=>typeof o=="string"&&/\s/.test(o.trim())?o.split(/\s+/):o);if(s.length==0)return;let a=[].concat(st[i]),n=s.every(o=>Array.isArray(o)),r=s.length==1&&i=="scale";a.forEach((o,l)=>{let u=r?0:l,h=n?Y(...s)[u]:s;if(A(h)){let m=o;/translate|perspective/i.test(m)?h=x(h):/rotate3d3|skew/i.test(m)?h=k(h):/scale|rotate3d/i.test(m)||/rotate/i.test(m)&&(h=k(h)),t[o]=h}})}),t},Oe=typeof Float32Array=="function",Zt=(e,t)=>1-3*t+3*e,$t=(e,t)=>3*t-6*e,Gt=e=>3*e,nt=(e,t,i)=>((Zt(t,i)*e+$t(t,i))*e+Gt(t))*e,Wt=(e,t,i)=>3*Zt(t,i)*e*e+2*$t(t,i)*e+Gt(t),Bt=(e,t,i,s)=>{if(!(0<=e&&e<=1&&0<=i&&i<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===t&&i===s)return o=>o;for(var a=Oe?new Float32Array(11):new Array(11),n=0;n<11;++n)a[n]=nt(.1*n,e,i);let r=o=>{let l=0,u=1;for(;u!==10&&a[u]<=o;++u)l+=.1;--u;let h=l+.1*((o-a[u])/(a[u+1]-a[u])),m=Wt(h,e,i);return m>=.001?((b,f,y,E)=>{for(var c=0;c<4;++c){let d=Wt(f,y,E);if(d===0)return f;f-=(nt(f,y,E)-b)/d}return f})(o,h,e,i):m===0?h:((b,f,y,E,c)=>{let d,p,O=0;do p=f+(y-f)/2,d=nt(p,E,c)-b,d>0?y=p:f=p;while(Math.abs(d)>1e-7&&++O<10);return p})(o,l,l+.1,e,i)};return o=>o===0||o===1?o:nt(r(o),t,s)},T=(e,t,i)=>Math.min(Math.max(e,t),i),rt=e=>Math.pow(e,2),ot=e=>Math.pow(e,3),lt=e=>Math.pow(e,4),ut=e=>Math.pow(e,5),ht=e=>Math.pow(e,6),ct=e=>1-Math.cos(e*Math.PI/2),mt=e=>1-Math.sqrt(1-e*e),pt=e=>e*e*(3*e-2),ft=e=>{let t,i=4;for(;e<((t=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)},dt=(e,t=[])=>{let[i=1,s=.5]=t,a=T(i,1,10),n=T(s,.1,2);return e===0||e===1?e:-a*Math.pow(2,10*(e-1))*Math.sin((e-1-n/(2*Math.PI)*Math.asin(1/a))*(2*Math.PI)/n)},B=(e,t=[],i)=>{let[s=1,a=100,n=10,r=0]=t;s=T(s,.1,1e3),a=T(a,.1,1e3),n=T(n,.1,1e3),r=T(r,.1,1e3);let o=Math.sqrt(a/s),l=n/(2*Math.sqrt(a*s)),u=l<1?o*Math.sqrt(1-l*l):0,h=l<1?(l*o-r)/u:-r+o,m=i?i*e/1e3:e;return m=l<1?Math.exp(-m*l*o)*(1*Math.cos(u*m)+h*Math.sin(u*m)):(1+h*m)*Math.exp(-m*o),e===0||e===1?e:1-m},Dt=new Map,_e=1e4,Se=(e="spring")=>{if(Dt.has(e))return Dt.get(e);let t=typeof e=="function"?e:bt(e),i=typeof e=="function"?[]:Nt(e),s=1/6,a=0,n=0,r=0;for(;++r<1e4;)if(a+=s,t(a,i,null)===1){if(n++,n>=16)break}else n=0;let o=a*s*1e3;return Dt.set(e,o),o},Mt=(e,t=[])=>{let[i=10,s]=t;return(s=="start"?Math.ceil:Math.floor)(T(e,0,1)*i)/i},Ht=(e,t=[])=>{let[i,s,a,n]=t;return Bt(i,s,a,n)(e)},gt=Bt(.42,0,1,1),I=e=>(t,i=[],s)=>1-e(1-t,i,s),P=e=>(t,i=[],s)=>t<.5?e(2*t,i,s)/2:1-e(-2*t+2,i,s)/2,D=e=>(t,i=[],s)=>t<.5?(1-e(1-2*t,i,s))/2:(e(2*t-1,i,s)+1)/2,K={steps:Mt,"step-start":e=>Mt(e,[1,"start"]),"step-end":e=>Mt(e,[1,"end"]),linear:e=>e,"cubic-bezier":Ht,ease:e=>Ht(e,[.25,.1,.25,1]),in:gt,out:I(gt),"in-out":P(gt),"out-in":D(gt),"in-quad":rt,"out-quad":I(rt),"in-out-quad":P(rt),"out-in-quad":D(rt),"in-cubic":ot,"out-cubic":I(ot),"in-out-cubic":P(ot),"out-in-cubic":D(ot),"in-quart":lt,"out-quart":I(lt),"in-out-quart":P(lt),"out-in-quart":D(lt),"in-quint":ut,"out-quint":I(ut),"in-out-quint":P(ut),"out-in-quint":D(ut),"in-expo":ht,"out-expo":I(ht),"in-out-expo":P(ht),"out-in-expo":D(ht),"in-sine":ct,"out-sine":I(ct),"in-out-sine":P(ct),"out-in-sine":D(ct),"in-circ":mt,"out-circ":I(mt),"in-out-circ":P(mt),"out-in-circ":D(mt),"in-back":pt,"out-back":I(pt),"in-out-back":P(pt),"out-in-back":D(pt),"in-bounce":ft,"out-bounce":I(ft),"in-out-bounce":P(ft),"out-in-bounce":D(ft),"in-elastic":dt,"out-elastic":I(dt),"in-out-elastic":P(dt),"out-in-elastic":D(dt),spring:B,"spring-in":B,"spring-out":I(B),"spring-in-out":P(B),"spring-out-in":D(B)},yt=Object.keys(K),Ye=(e,t)=>{Object.assign(K,{[e]:t}),yt=Object.keys(K)},Ke=(...e)=>{Object.assign(K,...e),yt=Object.keys(K)},Ct=e=>wt(e).replace(/^ease-/,"").replace(/(\(|\s).+/,"").toLowerCase().trim(),bt=e=>{let t=Ct(j(e));return yt.includes(t)?K[t]:null},Nt=e=>{let t=/(\(|\s)([^)]+)\)?/.exec(j(e));return t?t[2].split(",").map(i=>{let s=parseFloat(i);return Number.isNaN(s)?i.trim():s}):[]},we=(e,t,i)=>t+(i-t)*e,Qt=(e,t)=>Math.round(e*10**t)/10**t,vt=(e,t,i=3)=>{let s=t.length-1,a=T(Math.floor(e*s),0,s-1),n=t[a],r=t[a+1];return Qt(we((e-a/s)*s,n,r),i)},Jt=e=>{let t=parseFloat(e);return typeof t=="number"&&!Number.isNaN(t)},Ae=(e,t)=>{e=T(e,0,1);let i=t.length-1;return t[Math.round(e*i)]},te=(e,t,i=3)=>{let s="";return Jt(t[0])&&(s=Kt(t[0])),vt(e,t.map(a=>typeof a=="number"?a:parseFloat(a)),i)+s},ke=(e,t,i=3)=>Y(...t.map(s=>((a="transparent")=>{var u;if(a=a.trim(),Pt.has(a))return Pt.get(a);if(!CSS.supports("background-color",a))return a;let n=document.createElement("div");n.style.backgroundColor=a,document.body.appendChild(n);let{backgroundColor:r}=getComputedStyle(n);n.remove();let o=(u=/\(([^)]+)\)?/.exec(r))==null?void 0:u[1].split(","),l=(o.length==3?[...o,"1"]:o).map(h=>parseFloat(h));return Pt.set(a,l),l})(s))).map((s,a)=>{let n=vt(e,s);return a<3?Math.round(n):Qt(n,i)}),xe=e=>tt(e).replace(/(\d|\)|\w)\s/g,t=>t[0]+"__").split("__").map(tt).filter(A),Tt=(e,t,i=3)=>t.every(s=>typeof s=="number")?vt(e,t,i):t.every(s=>CSS.supports("color",j(s)))?`rgba(${ke(e,t,i)})`:t.some(s=>typeof s=="string")?t.some(s=>/(\d|\)|\w)\s/.test(tt(s)))?Y(...t.map(xe)).map(s=>Tt(e,s,i)).join(" "):t.every(s=>Jt(s))?te(e,t,i):Ae(e,t):void 0,ee=(e={})=>{let t=typeof e=="string"||typeof e=="function",{easing:i="spring(1, 100, 10, 0)",numPoints:s=100,decimal:a=3,duration:n}=t?{easing:e}:e;return{easing:i,numPoints:s,decimal:a,duration:n}},Ft=new Map,Ie=({easing:e,numPoints:t,duration:i}={})=>{let s=[],a=`${e}${t}`;if(Ft.has(a))return Ft.get(a);let n=typeof e=="function"?e:bt(e),r=typeof e=="function"?[]:Nt(e);for(let o=0;o<t;o++)s[o]=n(o/(t-1),r,i);return Ft.set(a,s),s},jt=(e={})=>{if(typeof e.easing=="string"){let t=Ct(e.easing);/(spring|spring-in)$/i.test(t)&&(e.duration=Se(e.easing))}},zt=(e,t={})=>{let i=ee(t);return jt(i),Ie(i).map(s=>Tt(s,e,i.decimal))},Ve=(e,t={})=>{let i=ee(t),{duration:s}=i;return jt(i),[zt(e,i),A(s)?s:i.duration]},Pe=(e={})=>{let{easing:t,numPoints:i,decimal:s,duration:a,...n}=e,r={easing:t,numPoints:i,decimal:s,duration:a};jt(r);let o=_(n,u=>zt(u,r)),l={};return A(a)?l={duration:a}:A(r.duration)&&(l={duration:r.duration}),Object.assign({},o,l)},ie={translate:e=>R(e,xt),translate3d:e=>R(e,xt),translateX:e=>x(e),translateY:e=>x(e),translateZ:e=>x(e),rotate:e=>R(e,It),rotate3d:e=>R(e,et),rotateX:e=>k(e),rotateY:e=>k(e),rotateZ:e=>k(e),scale:e=>R(e,et),scale3d:e=>R(e,et),scaleX:e=>v(e),scaleY:e=>v(e),scaleZ:e=>v(e),skew:e=>R(e,It),skewX:e=>k(e),skewY:e=>k(e),perspective:e=>x(e)},Rt=Object.keys(ie),qt=e=>{let t,i,s=Object.keys(e),a={};for(let n=0,r=s.length;n<r;n++)t=Vt(s[n]),i=e[s[n]],a[t]=i;return a},se=(e,t)=>{let i="",s=e.length;for(let a=0;a<s;a++){let n=e[a],r=t[a];A(r)&&(i+=`${n}(${Array.isArray(r)?r.join(", "):r}) `)}return i.trim()},ae=["margin","padding","size","width","height","left","right","top","bottom","radius","gap","basis","inset","outline-offset","translate","perspective","thickness","position","distance","spacing"].map(Vt).join("|"),ne=(e,t)=>(t=t!=null?t:Math.max(...e.map(i=>i.length)),e.map(i=>{let s=i.length;return i.every(a=>Array.isArray(a))?Y(...ne(Y(...i),t)):s!==t?Array.from(Array(t),(a,n)=>{let r=s==1?Array(2).fill(i[0]):i;return te(n/(t-1),r)}):i})),De=e=>{let t,i,s=qt(e);if(W)t=Object.assign({},Ut(s),N(at,s));else{let a=Object.keys(s).filter(r=>Rt.includes(r)),n=a.map(r=>ie[r](s[r]));n=ne(n),i=Y(...n).filter(A).map(r=>se(a,r)),t=N(Rt,s)}return t=_(t,(a,n)=>{let r;if(!/color|shadow/i.test(n)){let o=/rotate/i.test(n),l=new RegExp(ae,"i").test(n)||CSS.supports(wt(n),"1px");if(o||l)return o?r=k:l&&(r=x),r(a).map(u=>{let h=tt(u).split(/\s+/);return r(h).join(" ")})}return[].concat(a).map(j)}),Object.assign({},A(i)?{transform:i}:null,t)},Me=e=>e.map(t=>{let i=qt(t);if(W)return{rest:Object.assign({},Ut(i),N(at,i)),transformFunctions:null};let{translate:s,translate3d:a,translateX:n,translateY:r,translateZ:o,rotate:l,rotate3d:u,rotateX:h,rotateY:m,rotateZ:b,scale:f,scale3d:y,scaleX:E,scaleY:c,scaleZ:d,skew:p,skewX:O,skewY:g,perspective:S,...F}=i;return s=x(s),a=x(a),n=x(n)[0],r=x(r)[0],o=x(o)[0],l=k(l),u=v(u),h=k(h)[0],m=k(m)[0],b=k(b)[0],f=v(f),y=v(y),E=v(E)[0],c=v(c)[0],d=v(d)[0],p=k(p),O=k(O)[0],g=k(g)[0],S=x(S)[0],{rest:F,transformFunctions:[a,s,n,r,o,u,l,h,m,b,y,f,E,c,d,p,O,g,S]}}).map(({rest:t,transformFunctions:i})=>{let s=W?null:se(Rt,i);return t=_(t,(a,n)=>{let r;if(a=j(a),!/color|shadow/i.test(n)){let o=/rotate/i.test(n),l=new RegExp(ae,"i").test(n);if(o||l)return o?r=k:l&&(r=x),r(a).join(" ")}return a}),Object.assign({},A(s)?{transform:s}:null,t)}),re=({callback:e=()=>{},scope:t=null,name:i="event"})=>({callback:e,scope:t,name:i}),H=class extends z{constructor(t="event"){super(),this.name=t}},Lt=e=>typeof e=="object"&&!Array.isArray(e)&&typeof e!="function",oe=class extends z{constructor(){super()}getEvent(t){let i=this.get(t);return i instanceof H?i:(this.set(t,new H(t)),this.get(t))}newListener(t,i,s){let a=this.getEvent(t);return a.add(re({name:t,callback:i,scope:s})),a}on(t,i,s){if(t==null||t==null)return this;typeof t=="string"&&(t=t.trim().split(/\s+/));let a,n,r=Lt(t),o=r?i:s;return r||(n=i),Object.keys(t).forEach(l=>{a=r?l:t[l],r&&(n=t[l]),this.newListener(a,n,o)},this),this}removeListener(t,i,s){let a=this.get(t);if(a instanceof H&&i){let n=re({name:t,callback:i,scope:s});a.forEach((r,o)=>{if(r.callback===n.callback&&r.scope===n.scope)return a.remove(o)})}return a}off(t,i,s){if(t==null||t==null)return this;typeof t=="string"&&(t=t.trim().split(/\s+/));let a,n,r=Lt(t),o=r?i:s;return r||(n=i),Object.keys(t).forEach(l=>{a=r?l:t[l],r&&(n=t[l]),typeof n=="function"?this.removeListener(a,n,o):this.remove(a)},this),this}once(t,i,s){if(t==null||t==null)return this;typeof t=="string"&&(t=t.trim().split(/\s+/));let a=Lt(t);return Object.keys(t).forEach(n=>{let r=a?n:t[n],o=a?t[n]:i,l=a?i:s,u=(...h)=>{o.apply(l,h),this.removeListener(r,u,l)};this.newListener(r,u,l)},this),this}emit(t,...i){return t==null||t==null||(typeof t=="string"&&(t=t.trim().split(/\s+/)),t.forEach(s=>{let a=this.get(s);a instanceof H&&a.forEach(n=>{let{callback:r,scope:o}=n;r.apply(o,i)})},this)),this}clear(){return((t,i,...s)=>{t.forEach(a=>{a[i](...s)})})(this,"clear"),super.clear(),this}},Ce=e=>typeof e=="string"?Array.from(document.querySelectorAll(e)):[e],Q=e=>Array.isArray(e)?ge(e.map(Q)):typeof e=="string"||e instanceof Node?Ce(e):e instanceof NodeList||e instanceof HTMLCollection?Array.from(e):[],Ne=(e,t,i)=>typeof e=="function"?e.apply(i,t):e,le=(e,t,i)=>_(e,s=>Ne(s,t,i)),ue={in:"ease-in",out:"ease-out","in-out":"ease-in-out","in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","in-out-expo":"cubic-bezier(1, 0, 0, 1)","in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},he=Object.keys(ue),Et=(e="ease")=>{let t=wt(e).replace(/^ease-/,"");return he.includes(t)?ue[t]:e},V={keyframes:[],offset:[],loop:1,delay:0,speed:1,endDelay:0,easing:"ease",timelineOffset:0,autoplay:!0,duration:1e3,fillMode:"none",direction:"normal",padEndDelay:!1,timeline:document.timeline,extend:{}},X=e=>{var a;let{options:t,...i}=e,s=t instanceof C?t.options:Array.isArray(t)?(a=t==null?void 0:t[0])==null?void 0:a.options:t;return Object.assign({},s,i)},ce=["easing","loop","endDelay","duration","speed","delay","timelineOffset","direction","extend","fillMode","composite"],ve=["keyframes","padEndDelay","onfinish","oncancel","autoplay","target","targets","timeline"],_t=[...ce,...ve],w=class{constructor(e={}){this.options={},this.initialOptions={},this.properties={},this.totalDuration=0,this.totalDurationOptions={},this.maxDuration=0,this.minDelay=1/0,this.maxSpeed=1/0,this.maxEndDelay=0,this.timelineOffset=0,this.emitter=new oe,this.targets=new z,this.targetIndexes=new WeakMap,this.keyframeEffects=new WeakMap,this.computedOptions=new WeakMap,this.animations=new WeakMap,this.computedKeyframes=new WeakMap,this.loop=this.loop.bind(this),this.onVisibilityChange=this.onVisibilityChange.bind(this),this.on("error",console.error),this.updateOptions(e),this.mainAnimation&&(this.visibilityPlayState=this.getPlayState(),w.pauseOnPageHidden&&document.addEventListener("visibilitychange",this.onVisibilityChange,!1)),this.newPromise()}static requestFrame(e=0){let t=1e3/w.FRAME_RATE,i=e-w.FRAME_START_TIME;i>t&&(w.FRAME_START_TIME=e-i%t,w.RUNNING.forEach(s=>{s.emitter.getEvent("update").length<=0?s.stopLoop():s.loop()})),w.RUNNING.size>0?w.animationFrame=window.requestAnimationFrame(w.requestFrame):w.cancelFrame()}static cancelFrame(){window.cancelAnimationFrame(w.animationFrame),w.animationFrame=null}loop(){this.emit("update",this.getProgress(),this)}stopLoop(){w.RUNNING.delete(this)}onVisibilityChange(){document.hidden?(this.visibilityPlayState=this.getPlayState(),this.is("running")&&(this.loop(),this.pause())):this.visibilityPlayState=="running"&&this.is("paused")&&this.play()}newPromise(){return this.promise=new Promise((e,t)=>{var i,s,a,n;(s=(i=this.emitter)==null?void 0:i.once)==null||s.call(i,"finish",()=>e([this])),(n=(a=this.emitter)==null?void 0:a.once)==null||n.call(a,"error",r=>t(r))}),this.promise}then(e,t){var i,s;return e=e==null?void 0:e.bind(this),t=t==null?void 0:t.bind(this),(s=(i=this.promise)==null?void 0:i.then)==null||s.call(i,e,t),this}catch(e){var t,i;return e=e==null?void 0:e.bind(this),(i=(t=this.promise)==null?void 0:t.catch)==null||i.call(t,e),this}finally(e){var t,i;return e=e==null?void 0:e.bind(this),(i=(t=this.promise)==null?void 0:t.finally)==null||i.call(t,e),this}allAnimations(e){return this.targets.forEach(t=>{let i=this.keyframeEffects.get(t),s=this.animations.get(i);return e(s,t)}),this}all(e){return this.mainAnimation&&e(this.mainAnimation,this.mainElement),this.allAnimations(e),this}beginEvent(){this.getProgress()==0&&this.emit("begin",this)}play(){let e=this.getPlayState();return this.beginEvent(),this.all(t=>t.play()),this.emit("play",e,this),this.emit("playstate-change",e,this),this.loop(),w.RUNNING.add(this),w.requestFrame(),this}pause(){let e=this.getPlayState();return this.all(t=>t.pause()),this.emit("pause",e,this),this.emit("playstate-change",e,this),this.stopLoop(),this}reverse(){return this.all(e=>e.reverse()),this}reset(){return this.setProgress(0),this.options.autoplay?this.play():this.pause(),this}commitStyles(){return this.all(e=>e==null?void 0:e.commitStyles()),this}persist(){return this.all(e=>e==null?void 0:e.persist()),this}cancel(){return this.all(e=>e.cancel()),this}finish(){return this.all(e=>e.finish()),this}stop(){var e,t;this.cancel(),this.stopLoop(),document.removeEventListener("visibilitychange",this.onVisibilityChange,!1),this.targets.forEach(i=>this.removeTarget(i)),this.emit("stop"),this.emitter.clear(),this.mainkeyframeEffect=null,this.mainAnimation=null,(t=(e=this.mainElement)==null?void 0:e.remove)==null||t.call(e),this.mainElement=null,this.promise=null,this.computedOptions=null,this.animations=null,this.keyframeEffects=null,this.emitter=null,this.targets=null,this.options=null,this.properties=null}getAnimation(e){let t=this.keyframeEffects.get(e);return this.animations.get(t)}getTiming(e){var t,i,s,a;return{...(t=this.computedOptions.get(e))!=null?t:{},...(a=(s=(i=this.keyframeEffects.get(e)).getTiming)==null?void 0:s.call(i))!=null?a:{}}}getCurrentTime(){return this.mainAnimation.currentTime}getProgress(){return this.getCurrentTime()/this.totalDuration*100}getSpeed(){return this.mainAnimation.playbackRate}getPlayState(){return this.mainAnimation.playState}is(e){return this.getPlayState()==e}setCurrentTime(e){return this.all(t=>t.currentTime=e),this.emit("update",this.getProgress()),this}setProgress(e){let t=e/100*this.totalDuration;return this.setCurrentTime(t),this}setSpeed(e=1){return this.maxSpeed=e,this.all(t=>{t.updatePlaybackRate?t.updatePlaybackRate(e):t.playbackRate=e}),this}createArrayOfComputedOptions(e,t){let i=[],s=a=>{var n;return Object.assign({easing:a("easing"),iterations:a("loop"),direction:a("direction"),endDelay:a("endDelay"),duration:a("duration"),speed:a("speed"),delay:a("delay"),timelineOffset:a("timelineOffset"),keyframes:a("keyframes"),fill:a("fillMode"),composite:a("composite")},(n=a("extend"))!=null?n:{})};if(this.targets.size==0){let{delay:a,duration:n,iterations:r,endDelay:o,speed:l,timelineOffset:u}=s(h=>{var b,f;let m=(f=(b=e[h])!=null?b:this.options[h])!=null?f:V[h];return typeof m!="function"?m:V[h]});u=Number(u),r=Number(r),n=Number(n),o=Number(o),l=Number(l),a=Number(a),this.timelineOffset=u,this.minDelay=a,this.maxSpeed=l,this.maxDuration=n,this.maxEndDelay=o,this.totalDuration=a+u+n*r+o,this.totalDurationOptions={delay:a,duration:n,iterations:r,endDelay:o,speed:l,timelineOffset:u,totalDuration:this.totalDuration}}return this.targets.forEach((a,n)=>{var d;let r=(d=this.computedOptions.get(a))!=null?d:{},o=s(p=>{var g,S,F;let O=p;return p=="loop"&&(O="iterations"),p=="fillMode"&&(O="fill"),(F=(S=(g=e[p])!=null?g:r[O])!=null?S:this.options[p])!=null?F:V[p]}),l=le(o,[n,t,a],this);if(typeof l.easing=="string"||Array.isArray(l.easing)){let{easing:p}=l;l.easing=Array.isArray(p)?p.map(O=>Et(O)):Et(p)}l.iterations===!0&&(l.iterations=1/0);let{timelineOffset:u,speed:h,endDelay:m,delay:b,duration:f,iterations:y,...E}=l;u=Number(u),y=Number(y),f=Number(f),m=Number(m),h=Number(h),b=Number(b),this.timelineOffset=u!=null?u:this.timelineOffset,this.minDelay>b&&(this.minDelay=b),this.maxSpeed>h&&(this.maxSpeed=h),this.maxDuration<f&&(this.maxDuration=f),this.maxEndDelay<m&&(this.maxEndDelay=m);let c=b+u+f*y+m;this.totalDuration<c&&(this.totalDuration=c,this.totalDurationOptions={delay:b,duration:f,totalDuration:c,iterations:y,endDelay:m,speed:h,timelineOffset:u}),i[n]={...E,speed:h,tempDurations:c,endDelay:m,delay:b+u,duration:f,iterations:y,timelineOffset:u}},this),i}createAnimations(e,t){let{arrOfComputedOptions:i,padEndDelay:s,oldCSSProperties:a,onfinish:n,oncancel:r,timeline:o}=e;this.targets.forEach((l,u)=>{var q,$,Yt;let h,{speed:m,keyframes:b,tempDurations:f,timelineOffset:y,...E}=i[u];s&&E.endDelay==0&&Math.abs(E.iterations)!=Math.abs(1/0)&&(E.endDelay=this.totalDuration-f);let c,d,p=b;ye(p)&&(p=Ee(p));let O,g,S=(q=this.computedKeyframes.get(l))!=null?q:{},F="transform"in this.properties?S:N(["transform"],S),Ot=Object.assign({},a,F),Z=_(Ot,(G,L)=>{var M;return(M=this.properties[L])!=null?M:G});if(d=A(p)?p:Z,Array.isArray(d))c=d.map(G=>{let{easing:L,offset:M,...J}=N(["speed","loop"],G);return Object.assign({},J,typeof L=="string"?{easing:Et(L)}:null,typeof M=="string"||typeof M=="number"?{offset:At(M)}:null)}),h=Xt(st),c=Me(c);else{let G=N(["keyframes"],d),{offset:L,...M}=le(G,[u,t,l],this);h=Xt(qt(M)),M=De(M);let J=L;c=Object.assign({},M,A(J)?{offset:J.map(At)}:null)}this.keyframeEffects.has(l)?(g=this.keyframeEffects.get(l),O=this.animations.get(g),($=g==null?void 0:g.setKeyframes)==null||$.call(g,c),(Yt=g==null?void 0:g.updateTiming)==null||Yt.call(g,E)):(g=new KeyframeEffect(l,c,E),O=new Animation(g,o),this.keyframeEffects.set(l,g),this.animations.set(g,O)),O.updatePlaybackRate?O.updatePlaybackRate(m):O.playbackRate=m,O.onfinish=()=>{typeof n=="function"&&n.call(this,l,u,t,O)},O.oncancel=()=>{typeof r=="function"&&r.call(this,l,u,t,O)},W&&Object.assign(l.style,{transform:h}),this.computedOptions.set(l,E),this.computedKeyframes.set(l,c)})}updateOptions(e={}){var t,i;try{let s=X(e);this.initialOptions=s,this.options=Object.assign({},V,this.options,s);let{padEndDelay:a,autoplay:n,target:r,targets:o,timeline:l,onfinish:u,oncancel:h,...m}=N(ce,this.options);this.properties=N(_t,s);let b=this.targets.values(),f=[...new Set([...b,...Q(o),...Q(r)])];this.targets.clear(),f.forEach((c,d)=>{this.targets.set(d,c),this.targetIndexes.set(c,d)});let y=this.targets.size,E=this.createArrayOfComputedOptions(s,y);if(this.createAnimations({arrOfComputedOptions:E,padEndDelay:a,oldCSSProperties:m,onfinish:u,oncancel:h,timeline:l},y),this.mainAnimation?((i=(t=this.mainkeyframeEffect)==null?void 0:t.updateTiming)==null||i.call(t,{duration:this.totalDuration}),(!this.mainkeyframeEffect.setKeyframes||!this.mainkeyframeEffect.updateTiming)&&console.warn("@okikio/animate - `KeyframeEffect.setKeyframes` and/or `KeyframeEffect.updateTiming` are not supported in this browser.")):(this.mainkeyframeEffect=new KeyframeEffect(this.mainElement,null,{duration:this.totalDuration}),this.mainAnimation=new Animation(this.mainkeyframeEffect,l)),this.mainAnimation.updatePlaybackRate?this.mainAnimation.updatePlaybackRate(this.maxSpeed):this.mainAnimation.playbackRate=this.maxSpeed,this.mainAnimation.onfinish=()=>{if(this.mainAnimation){let c=this.getPlayState();this.emit("playstate-change",c,this),this.loop(),this.stopLoop()}this.emit("finish",this)},this.mainAnimation.oncancel=()=>{if(this.mainAnimation){let c=this.getPlayState();this.emit("playstate-change",c,this),this.loop(),this.stopLoop()}this.emit("cancel",this)},n){let c=window.setTimeout(()=>{this.emit("begin",this);let d=this.getPlayState();this.emit("playstate-change",d,this),c=window.clearTimeout(c)},0);this.play()}else this.pause()}catch(s){this.emit("error",s)}}add(e){let t=this.getProgress(),i=this.is("running"),s=this.is("paused");return this.updateOptions({target:e}),this.setProgress(t),i?this.play():s&&this.pause(),this}removeTarget(e){let t=this.keyframeEffects.get(e);this.animations.delete(t),t=null,this.computedKeyframes.delete(e),this.computedOptions.delete(e),this.keyframeEffects.delete(e);let i=this.targetIndexes.get(e);return this.targets.delete(i),this.targetIndexes.delete(e),this}remove(e){this.removeTarget(e);let t=new Set([].concat(this.targets.values()));this.options.target=[...t],this.options.targets=[],t.clear(),t=null;let i=this.getProgress(),s=this.is("running"),a=this.is("paused");return this.updateOptions(),s?this.play():a&&this.pause(),this.setProgress(i),this}on(e,t,i){var s,a;return i=i!=null?i:this,(a=(s=this.emitter)==null?void 0:s.on)==null||a.call(s,e,t!=null?t:i,i),this.emitter.getEvent("update").length>0&&(w.RUNNING.add(this),w.animationFrame==null&&w.requestFrame()),this}off(e,t,i){var s,a;return i=i!=null?i:this,(a=(s=this.emitter)==null?void 0:s.off)==null||a.call(s,e,t!=null?t:i,i),this}emit(e,...t){var i,s;return(s=(i=this.emitter)==null?void 0:i.emit)==null||s.call(i,e,...t),this}toJSON(){return this.options}get[Symbol.toStringTag](){return"Animate"}},C=w;C.RUNNING=new Set,C.FRAME_RATE=60,C.FRAME_START_TIME=0,C.pauseOnPageHidden=!0;var Xe=(e={})=>new C(e),Te=0,U=document.createElement("div"),Fe=()=>{A(U.id)||(U.id="empty-tween-el-container",U.style.setProperty("display","none"),U.style.setProperty("contain","paint layout size"),document.body.appendChild(U));let e=document.createElement("div");return e.id="empty-animate-el-"+Te++,e.style.setProperty("display","none"),U.appendChild(e),e},me=class extends C{stop(){this.targets.forEach(t=>{var i;return(i=t==null?void 0:t.remove)==null?void 0:i.call(t)}),super.stop()}},je=(e={})=>{let{easing:t,decimal:i,numPoints:s,opacity:a,...n}=X(e),r=be(_t,n),o=t;if(typeof t=="string"){let l=Ct(t);o=he.includes(l)||["linear","steps","step-start","step-end"].includes(l)?Et(t):yt.includes(l)?bt(t):t}return{...typeof o=="function"?Pe({opacity:[0,1],easing:t,decimal:i,numPoints:s}):{opacity:[0,1],easing:t},...r}},pe=class extends me{constructor(){super(...arguments),this.updateListeners=new z}updateOptions(t={}){var r,o;let i=X(t),s=this.targets.size>1?null:{target:Fe()},a=Object.assign({},je(N(["target","targets"],i)),s);super.updateOptions(a);let n=N(_t,i);try{this.updateListeners=(r=this.updateListeners)!=null?r:new z,this.updateListeners.forEach((y,E)=>{this.off("update",y),this.updateListeners.remove(E)},this);let{target:l,targets:u}=i,h=[...new Set([...Q(u),...Q(l)])],m=h.length,b=this.targets.get(0),f=window.getComputedStyle(b);h.forEach((y,E)=>{_(n,(c,d)=>{let p,O=y.getAttribute(d);this.on("update",p=()=>{let g,S=Number(f.getPropertyValue("opacity"));g=typeof c=="function"?c(S,E,m,y):Tt(S,Array.isArray(c)?c:[O,c],i.decimal),y.setAttribute(d,""+g)}),this.updateListeners.add(p)})},this)}catch(l){this==null||this.stopLoop(),(o=this==null?void 0:this.emit)==null||o.call(this,"error",l)}return this}},Ue=(e={})=>new pe(e),ze=(e,t={})=>{let{grid:i,axis:s,from:a=0,easing:n,direction:r="normal"}=t,o=Array.isArray(e),l=o?e.length-1:null,u=parseFloat(o?e[0]:e),h=o?parseFloat(e[l]):0,{start:m=o?u:0}=t,b=Kt(o?e[l]:e)||0,f=typeof n=="function"?n:bt(n),y=typeof n=="function"?[]:Nt(n),E,c=[],d=0,p=a;return/from/i.test(a)&&(p=0),(O,g)=>{if(/center/i.test(a)&&(p=(g-1)/2),/last/i.test(a)&&(p=g-1),c.length==0){for(let S=0;S<g;S++)if(Array.isArray(i)){let F=a!=="center"?p%i[0]:(i[0]-1)/2,Ot=a!=="center"?Math.floor(p/i[0]):(i[1]-1)/2,Z=F-S%i[0],q=Ot-Math.floor(S/i[0]),$;$=s==="x"?-Z:s==="y"?-q:Math.sqrt(Z*Z+q*q),c.push($)}else c.push(Math.abs(p-S));d=Math.max(...c),E=o?(h-u)/d:u,typeof f=="function"&&(c=c.map(S=>f(S/d,y)*d)),/reverse/i.test(r)&&c.reverse()}return m+E*(Math.round(100*c[O])/100)+b}},Ze=(e,t={})=>{var s;let i=(s=t.stagger)!=null?s:{};return(a,n)=>{let r=e.map((o,l)=>{let u=e[Math.max(0,l-1)];return ze([u,o],i)(a,n)});return zt(r,t)}},$e=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,Re=(e,t)=>typeof e=="string"?/^\=/.test(e)?parseFloat(e.replace("=","")):parseFloat(e)+t:e+t,fe=class{constructor(t={}){this.animateInstances=new z,this.initialOptions={},this.mainInstance=new C({duration:0}),this.initialOptions=Object.assign({},V,X(t)),this.totalDuration=0,this.maxDuration=0}get totalDuration(){return this.mainInstance.totalDuration}set totalDuration(t){this.mainInstance.totalDuration=t}get maxDuration(){return this.mainInstance.maxDuration}set maxDuration(t){this.mainInstance.maxDuration=t}get minDelay(){return this.mainInstance.minDelay}set minDelay(t){this.mainInstance.minDelay=t}get maxSpeed(){return this.mainInstance.maxSpeed}set maxSpeed(t){this.mainInstance.maxSpeed=t}get maxEndDelay(){return this.mainInstance.maxEndDelay}set maxEndDelay(t){this.mainInstance.maxEndDelay=t}get timelineOffset(){return this.mainInstance.timelineOffset}set timelineOffset(t){this.mainInstance.timelineOffset=t}get options(){return this.mainInstance.options}set options(t){this.mainInstance.options=X(t)}get emitter(){return this.mainInstance.emitter}get promise(){return this.mainInstance.promise}add(t={},i=0){let s,a=Object.assign({},V,this.initialOptions,t instanceof C?t.initialOptions:X(t));return a.timelineOffset=Re(i,this.totalDuration),a.autoplay=this.initialOptions.autoplay,t instanceof C?(s=t,s.updateOptions(a)):s=new C(a),this.animateInstances.add(s),this.updateTiming(),this}updateTiming(){let t=this.animateInstances.values(),i=Math.max(...t.map(s=>s.totalDuration));return this.mainInstance.updateOptions({autoplay:this.initialOptions.autoplay,duration:i,delay:Math.max(...t.map(s=>s.minDelay)),endDelay:i-Math.max(...t.map(s=>s.totalDuration-s.maxEndDelay))}),this}remove(t){let i=this.animateInstances.size;if(this.animateInstances.has(t)){let s=this.animateInstances.get(t),{totalDuration:a,timelineOffset:n}=s.totalDurationOptions,r=Number(a)-Number(n);for(let o=t;o<i;o++){let l=this.animateInstances.get(o);l.updateOptions({timelineOffset:l.timelineOffset-r})}return this.animateInstances.remove(t),this.updateTiming(),s}return null}then(t,i){var s,a;return t=t==null?void 0:t.bind(this),i=i==null?void 0:i.bind(this),(a=(s=this.mainInstance)==null?void 0:s.then)==null||a.call(s,t,i),this}catch(t){var i,s;return t=t==null?void 0:t.bind(this),(s=(i=this.mainInstance)==null?void 0:i.catch)==null||s.call(i,t),this}finally(t){var i,s;return t=t==null?void 0:t.bind(this),(s=(i=this.mainInstance)==null?void 0:i.finally)==null||s.call(i,t),this}allInstances(t){return this.animateInstances.forEach(t),this}all(t){return this.mainInstance&&t(this.mainInstance),this.allInstances(t),this}play(){return this.all(t=>t.play()),this}pause(){return this.all(t=>t.pause()),this}reverse(){return this.all(t=>t.reverse()),this}reset(){return this.all(t=>t.reset()),this}cancel(){return this.all(t=>t.cancel()),this}finish(){return this.all(t=>t.finish()),this}stop(){this.all(t=>t.stop()),this.animateInstances.clear(),this.mainInstance=null,this.animateInstances=null}getCurrentTime(){return this.mainInstance.getCurrentTime()}getProgress(){return this.mainInstance.getProgress()}getPlayState(){return this.mainInstance.getPlayState()}is(t){return this.mainInstance.is(t)}setCurrentTime(t){return this.all(i=>i.setCurrentTime(t)),this}setProgress(t){return this.all(i=>i.setProgress(t)),this}setSpeed(t=1){return this.all(i=>i.setSpeed(t)),this}on(t,i,s){var a,n;return s=s!=null?s:this,(n=(a=this.mainInstance)==null?void 0:a.on)==null||n.call(a,t,i!=null?i:s,s),this}off(t,i,s){var a,n;return s=s!=null?s:this,(n=(a=this.mainInstance)==null?void 0:a.off)==null||n.call(a,t,i!=null?i:s,s),this}emit(t,...i){var s,a;return(a=(s=this.mainInstance)==null?void 0:s.emit)==null||a.call(s,t,...i),this}toJSON(){return this.options}get[Symbol.toStringTag](){return"Timeline"}},Ge=(e={})=>new fe(e);export{ge as a,ye as b,qe as c,_ as d,j as e,Kt as f,tt as g,St as h,A as i,wt as j,Vt as k,N as l,be as m,Y as n,At as o,Ee as p,Le as q,st as r,W as s,at as t,Xt as u,Ut as v,T as w,rt as x,ot as y,lt as z,ut as A,ht as B,ct as C,mt as D,pt as E,ft as F,dt as G,B as H,Dt as I,_e as J,Se as K,Mt as L,Ht as M,gt as N,I as O,P,D as Q,K as R,yt as S,Ye as T,Ke as U,Ct as V,bt as W,Nt as X,we as Y,Qt as Z,vt as _,Jt as $,Ae as aa,te as ba,ke as ca,xe as da,Tt as ea,ee as fa,Ft as ga,Ie as ha,zt as ia,Ve as ja,Pe as ka,ie as la,Rt as ma,qt as na,se as oa,ae as pa,ne as qa,De as ra,Me as sa,Ce as ta,Q as ua,Ne as va,le as wa,ue as xa,he as ya,Et as za,V as Aa,X as Ba,ce as Ca,ve as Da,_t as Ea,C as Fa,Xe as Ga,Te as Ha,U as Ia,Fe as Ja,me as Ka,je as La,pe as Ma,Ue as Na,ze as Oa,Ze as Pa,$e as Qa,Re as Ra,fe as Sa,Ge as Ta};
//# sourceMappingURL=chunk-FW7D4TNI.js.map
