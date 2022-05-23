import { encode, decode } from "./src/ts/util/encode-decode";
import { compress } from "./src/ts/deno/lz4/mod";
import { gzip, getWASM } from "./src/ts/deno/denoflate/mod";
import { compress as brotli } from "./src/ts/deno/brotli/mod";

// let input = `\
// import * as convert from '@csstools/convert-colors';
// function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var r=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);e=!0);}catch(n){u=!0,o=n}finally{try{e||null==c.return||c.return()}finally{if(u)throw o}}return r}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function t(n,t,r,o=0){const i=e(n,t,r),c=i-u(n,t,r);if(c){const e=i===n?(t-r)/c:i===t?(r-n)/c:(n-t)/c;return 60*(e+(i===n?e<0?6:0:i===t?2:4))}return o}function r(n,t,r){const e=r<0?r+360:r>360?r-360:r;return 6*e<360?n+(t-n)*e/60:2*e<360?t:3*e<720?n+(t-n)*(240-e)/60:n}function e(n,t,r){return v(n,t,r)}function u(n,t,r){return M(n,t,r)}function o(n,t){return t.map(t=>t.reduce((t,r,e)=>t+n[e]*i*(r*i)/i/i,0))}const i=1e8,c=96.42,a=100,l=82.49,s=(n,t)=>g(p(n,t)),f=n=>b(d(n)),d=n=>n*q/180,g=n=>180*n/q,h=n=>x(d(n)),m=Math.abs,p=Math.atan2,y=Math.cbrt,b=Math.cos,k=Math.exp,w=Math.floor,v=Math.max,M=Math.min,q=Math.PI,I=Math.pow,x=Math.sin,S=Math.sqrt,A=I(6,3)/I(29,3),$=I(29,3)/I(3,3);function j(n,r,o,i){const c=t(n,r,o,i),a=e(n,r,o),l=u(n,r,o),s=a-l,f=(a+l)/2;return[c,0===s?0:s/(100-m(2*f-100))*100,f]}function z(n,t,e){const u=e<=50?e*(t+100)/100:e+t-e*t/100,o=2*e-u,i=[r(o,u,n+120),r(o,u,n),r(o,u,n-120)];return[i[0],i[1],i[2]]}function C(n,r,o,i){return[t(n,r,o,i),u(n,r,o),100-e(n,r,o)]}function E(t,r,e,u){const o=n(z(t,100,50).map(n=>n*(100-r-e)/100+r),3);return[o[0],o[1],o[2]]}function L(n,r,o,i){const c=e(n,r,o),a=u(n,r,o);return[t(n,r,o,i),c===a?0:(c-a)/c*100,c]}function P(t,r,e){const u=w(t/60),o=e*(100-r)/100,i=e*(100-r*(t/60-u&1?t/60-u:1-t/60-u))/100,c=n(5===u?[e,o,i]:4===u?[i,o,e]:3===u?[o,i,e]:2===u?[o,e,i]:1===u?[i,e,o]:[e,i,o],3);return[c[0],c[1],c[2]]}function T(t,r,e){const u=n([t,r,e].map(n=>n>4.045?100*I((n+5.5)/105.5,2.4):n/12.92),3),i=n(o([u[0],u[1],u[2]],[[.4124564,.3575761,.1804375],[.2126729,.7151522,.072175],[.0193339,.119192,.9503041]]),3);return[i[0],i[1],i[2]]}function B(t,r,e){const u=n(o([t,r,e],[[3.2404542,-1.5371385,-.4985314],[-.969266,1.8760108,.041556],[.0556434,-.2040259,1.0572252]]),3),i=n([u[0],u[1],u[2]].map(n=>n>.31308?1.055*I(n/100,1/2.4)*100-5.5:12.92*n),3);return[i[0],i[1],i[2]]}function D(n,t,r){const e=t*(r<50?r:100-r)/100;return[n,0===e?0:2*e/(r+e)*100,r+e]}function F(n,t,r){const e=(200-t)*r/100;return[n,0===e||200===e?0:t*r/100/(e<=100?e:200-e)*100,5*e/10]}function G(n,t,r){return[n,100===r?0:100-t/(100-r)*100,100-r]}function H(n,t,r){return[n,(100-t)*r/100,100-r]}function J(t,r,e){const u=(t+16)/116,i=r/500+u,s=u-e/200,f=I(i,3)>A?I(i,3):(116*i-16)/$,d=t>$*A?I((t+16)/116,3):t/$,g=I(s,3)>A?I(s,3):(116*s-16)/$,h=n(o([f*c,d*a,g*l],[[.9555766,-.0230393,.0631636],[-.0282895,1.0099416,.0210077],[.0122982,-.020483,1.3299098]]),3);return[h[0],h[1],h[2]]}function K(t,r,e){const u=n(o([t,r,e],[[1.0478112,.0228866,-.050127],[.0295424,.9904844,-.0170491],[-.0092345,.0150436,.7521316]]),3),i=u[0],s=u[1],f=u[2],d=n([i/c,s/a,f/l].map(n=>n>A?y(n):($*n+16)/116),3),g=d[0],h=d[1];return[116*h-16,500*(g-h),200*(h-d[2])]}function N(n,t,r){const e=[S(I(t,2)+I(r,2)),g(p(r,t))];return[n,e[0],e[1]]}function O(n,t,r){return[n,t*f(r),t*h(r)]}function Q(n,t){return function(n,t){const r=v(n,t),e=M(n,t);return(r*i+.05*i)/(e*i+.05*i)}(R(...n),R(...t))}function R(n,t,r){return(U(n)*X+U(t)*Y+U(r)*Z)/i}const U=n=>n<=3.928?n/W:V(n),V=n=>I((n+5.5)/105.5,2.4),W=1292,X=.2126*i,Y=.7152*i,Z=.0722*i;function _(t){const r=n(t.match(tn)||[],9),e=r[1],u=r[2],o=r[3],i=r[4],c=r[5],a=r[6],l=r[7],s=r[8];if(void 0!==c||void 0!==e){return[void 0!==c?parseInt(c,16):parseInt(e+e,16),void 0!==a?parseInt(a,16):parseInt(u+u,16),void 0!==l?parseInt(l,16):parseInt(o+o,16),void 0!==s?parseInt(s,16):void 0!==i?parseInt(i+i,16):255].map(n=>100*n/255)}}function nn(n,t,r){return\`#\${((1 << 24) + (Math.round(255 * n / 100) << 16) + (Math.round(255 * t / 100) << 8) + Math.round(255 * r / 100)).toString(16).slice(1)\}\`}const tn=/^#?(?:([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?|([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?)$/i;function rn(n){const t=en[String(n).toLowerCase()];return t?t.map(n=>100*n/255):null}const en={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],transparent:[0,0,0],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};function un([n,t,r],[e,u,o]){const c=S(I(t,2)+I(r,2)),a=S(I(u,2)+I(o,2)),l=e-n,d=(n+e)/2,g=I((c+a)/2,7),p=S(g/(g+I(25,7))),y=t+t/2*(1-p),b=u+u/2*(1-p),w=S(y*y+r*r),v=S(b*b+o*o),M=(w+v)/2,q=v-w,x=0===y&&0===r?0:s(r,y)%360,A=0===b&&0===o?0:s(o,b)%360;let $,j,z;0===w||0===v?($=0,j=0,z=x+A):($=m(x-A)<=180?A-x:A<=x?A-x+360:A-x-360,j=2*S(w*v)*h($/2),z=m(x-A)<=180?(x+A)/2:x+A<360?(x+A+360)/2:(x+A-360)/2);const C=1-.17*i*f(z-30)+.24*i*f(2*z)+.32*i*f(3*z+6)-.2*i*f(4*z-63)/i/i,E=(d-50)*(d-50),L=1+.015*i*E/S(20+E)/i,P=1+.045*i*M/i,T=1+.015*i*M*C/i,B=60*k(-(z-275)/25*((z-275)/25)),D=-2*p*h(B),F=l/(on*L),G=q/(cn*P),H=j/(an*T);return S(F*F+G*G+H*H+D*G*H)}const on=1,cn=1,an=1;function ln(t,r,e){const u=n(T(t,r,e),3),o=n(K(u[0],u[1],u[2]),3);return[o[0],o[1],o[2]]}function sn(t,r,e){const u=n(J(t,r,e),3),o=n(B(u[0],u[1],u[2]),3);return[o[0],o[1],o[2]]}function fn(t,r,e){const u=n(T(t,r,e),3),o=n(K(u[0],u[1],u[2]),3),i=n(N(o[0],o[1],o[2]),3);return[i[0],i[1],i[2]]}function dn(t,r,e){const u=n(O(t,r,e),3),o=n(J(u[0],u[1],u[2]),3),i=n(B(o[0],o[1],o[2]),3);return[i[0],i[1],i[2]]}function gn(t,r,e){const u=n(G(t,r,e),3),o=n(F(u[0],u[1],u[2]),3);return[o[0],o[1],o[2]]}function hn(t,r,e){const u=n(D(t,r,e),3),o=n(H(t,u[1],u[2]),3);return[t,o[1],o[2]]}function mn(t,r,e){const u=n(z(t,r,e),3),o=n(T(u[0],u[1],u[2]),3),i=n(K(o[0],o[1],o[2]),3);return[i[0],i[1],i[2]]}function pn(t,r,e,u){const o=n(J(t,r,e),3),i=n(B(o[0],o[1],o[2]),3),c=n(j(i[0],i[1],i[2],u),3);return[c[0],c[1],c[2]]}function yn(t,r,e){const u=n(z(t,r,e),3),o=n(T(u[0],u[1],u[2]),3),i=n(K(o[0],o[1],o[2]),3),c=n(N(i[0],i[1],i[2]),3);return[c[0],c[1],c[2]]}function bn(t,r,e,u){const o=n(O(t,r,e),3),i=n(J(o[0],o[1],o[2]),3),c=n(B(i[0],i[1],i[2]),3),a=n(j(c[0],c[1],c[2],u),3);return[a[0],a[1],a[2]]}function kn(t,r,e){const u=n(z(t,r,e),3),o=n(T(u[0],u[1],u[2]),3);return[o[0],o[1],o[2]]}function wn(t,r,e,u){const o=n(B(t,r,e),3),i=n(j(o[0],o[1],o[2],u),3);return[i[0],i[1],i[2]]}function vn(t,r,e){const u=n(E(t,r,e),3),o=n(T(u[0],u[1],u[2]),3),i=n(K(o[0],o[1],o[2]),3);return[i[0],i[1],i[2]]}function Mn(t,r,e,u){const o=n(J(t,r,e),3),i=n(B(o[0],o[1],o[2]),3),c=n(C(i[0],i[1],i[2],u),3);return[c[0],c[1],c[2]]}function qn(t,r,e){const u=n(E(t,r,e),3),o=n(T(u[0],u[1],u[2]),3),i=n(K(o[0],o[1],o[2]),3),c=n(N(i[0],i[1],i[2]),3);return[c[0],c[1],c[2]]}function In(t,r,e,u){const o=n(O(t,r,e),3),i=n(J(o[0],o[1],o[2]),3),c=n(B(i[0],i[1],i[2]),3),a=n(C(c[0],c[1],c[2],u),3);return[a[0],a[1],a[2]]}function xn(t,r,e){const u=n(E(t,r,e),3),o=n(T(u[0],u[1],u[2]),3);return[o[0],o[1],o[2]]}function Sn(t,r,e,u){const o=n(B(t,r,e),3),i=n(C(o[0],o[1],o[2],u),3);return[i[0],i[1],i[2]]}function An(t,r,e){const u=n(P(t,r,e),3),o=n(T(u[0],u[1],u[2]),3),i=n(K(o[0],o[1],o[2]),3);return[i[0],i[1],i[2]]}function $n(t,r,e,u){const o=n(J(t,r,e),3),i=n(B(o[0],o[1],o[2]),3),c=n(L(i[0],i[1],i[2],u),3);return[c[0],c[1],c[2]]}function jn(t,r,e){const u=n(P(t,r,e),3),o=n(T(u[0],u[1],u[2]),3),i=n(K(o[0],o[1],o[2]),3),c=n(N(i[0],i[1],i[2]),3);return[c[0],c[1],c[2]]}function zn(t,r,e,u){const o=n(O(t,r,e),3),i=n(J(o[0],o[1],o[2]),3),c=n(B(i[0],i[1],i[2]),3),a=n(L(c[0],c[1],c[2],u),3);return[a[0],a[1],a[2]]}function Cn(t,r,e){const u=n(P(t,r,e),3),o=n(T(u[0],u[1],u[2]),3);return[o[0],o[1],o[2]]}function En(t,r,e,u){const o=n(B(t,r,e),3),i=n(L(o[0],o[1],o[2],u),3);return[i[0],i[1],i[2]]}function Ln(t,r,e){const u=n(K(t,r,e),3),o=n(N(u[0],u[1],u[2]),3);return[o[0],o[1],o[2]]}function Pn(t,r,e){const u=n(O(t,r,e),3),o=n(J(u[0],u[1],u[2]),3);return[o[0],o[1],o[2]]}function Tn(n){return j(..._(n))}function Bn(n){return L(..._(n))}function Dn(n){return C(..._(n))}function Fn(n){return ln(..._(n))}function Gn(n){return fn(..._(n))}function Hn(n){return T(..._(n))}function Jn(n,t,r){return nn(...z(n,t,r))}function Kn(n,t,r){return nn(...z(n,t,r))}function Nn(n,t,r){return nn(...E(n,t,r))}function On(n,t,r){return nn(...sn(n,t,r))}function Qn(n,t,r){return nn(...dn(n,t,r))}function Rn(n,t,r){return nn(...B(n,t,r))}function Un(n,t){return un(Fn(n),Fn(t))}function Vn(n,t){return un(mn(...n),mn(...t))}function Wn(n,t){return un(An(...n),An(...t))}function Xn(n,t){return un(vn(...n),vn(...t))}function Yn(n,t){return un(gt(n),gt(t))}function Zn(n,t){return un(O(...n),O(...t))}function _n(n,t){return un(ln(...n),ln(...t))}function nt(n,t){return un(K(...n),K(...t))}function tt(n,t){return Q(_(n),_(t))}function rt(n,t){return Q(z(...n),z(...t))}function et(n,t){return Q(P(...n),P(...t))}function ut(n,t){return Q(E(...n),E(...t))}function ot(n,t){return Q(rn(n),rn(t))}function it(n,t){return Q(sn(...n),sn(...t))}function ct(n,t){return Q(dn(...n),dn(...t))}function at(n,t){return Q(B(...n),B(...t))}function lt(n){return nn(...rn(n))}function st(n){return j(...rn(n))}function ft(n){return L(...rn(n))}function dt(n){return C(...rn(n))}function gt(n){return ln(...rn(n))}function ht(n){return fn(...rn(n))}function mt(n){return T(...rn(n))}export{Un as hex2ciede,tt as hex2contrast,Tn as hex2hsl,Bn as hex2hsv,Dn as hex2hwb,Fn as hex2lab,Gn as hex2lch,_ as hex2rgb,Hn as hex2xyz,Vn as hsl2ciede,rt as hsl2contrast,Jn as hsl2hex,D as hsl2hsv,hn as hsl2hwb,mn as hsl2lab,yn as hsl2lch,z as hsl2rgb,kn as hsl2xyz,Wn as hsv2ciede,et as hsv2contrast,Kn as hsv2hex,F as hsv2hsl,H as hsv2hwb,An as hsv2lab,jn as hsv2lch,P as hsv2rgb,Cn as hsv2xyz,Xn as hwb2ciede,ut as hwb2contrast,Nn as hwb2hex,gn as hwb2hsl,G as hwb2hsv,vn as hwb2lab,qn as hwb2lch,E as hwb2rgb,xn as hwb2xyz,Yn as keyword2ciede,ot as keyword2contrast,lt as keyword2hex,st as keyword2hsl,ft as keyword2hsv,dt as keyword2hwb,gt as keyword2lab,ht as keyword2lch,rn as keyword2rgb,mt as keyword2xyz,un as lab2ciede,it as lab2contrast,On as lab2hex,pn as lab2hsl,$n as lab2hsv,Mn as lab2hwb,N as lab2lch,sn as lab2rgb,J as lab2xyz,Zn as lch2ciede,ct as lch2contrast,Qn as lch2hex,bn as lch2hsl,zn as lch2hsv,In as lch2hwb,O as lch2lab,dn as lch2rgb,Pn as lch2xyz,_n as rgb2ciede,Q as rgb2contrast,nn as rgb2hex,j as rgb2hsl,L as rgb2hsv,C as rgb2hwb,ln as rgb2lab,fn as rgb2lch,T as rgb2xyz,nt as xyz2ciede,at as xyz2contrast,Rn as xyz2hex,wn as xyz2hsl,En as xyz2hsv,Sn as xyz2hwb,K as xyz2lab,Ln as xyz2lch,B as xyz2rgb};
// //# sourceMappingURL=index.mjs.map
// `;
// (async () => {
//     await getWASM();
//     let encoded = encode((input));
//     console.log(btoa(unescape(encodeURIComponent(String.fromCharCode(...await compress(encoded))))).length);
//     console.log(btoa(unescape(encodeURIComponent(String.fromCharCode(...await gzip(encoded))))).length);
//     console.log(btoa(unescape(encodeURIComponent(String.fromCharCode(...await brotli(encoded, encoded.length, 11))))).length);
//     // console.log(decode(await compress(encode("https://bundlejs.com/?q=unpkg:@okikio/animate&config={%22compression%22:%22brotli%22,%22esbuild%22:{%22minify%22:false}}"))));
// })();

// function ipsBetween(start, end) {
//     let startarr = start.split(".");
//     let endarr = end.split(".");

//     let result = 0;
//     for (let i = 0; i < 4; i++) {

//         if (startarr[i] !== endarr[i]) {
//             let startint = parseInt(startarr[i]);
//             let endint = parseInt(endarr[i]);

//             let diff = endint - startint;
//             let factor = 4 - 1 - i;
//             result += Math.pow(256, factor) * diff;
//         }
//     }

//     console.log(result == 2 ** 32 - 1)
//     return result;
// }

// ipsBetween("0.0.0.0", "255.255.255.255")

// const knownPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
// const knownPrimesLength = knownPrimes.length;
// const lastKnownPrime = knownPrimes[knownPrimesLength - 1];
// function isPrime(value) {
//     for (let i = 0; i < knownPrimesLength; i ++) {
//         if (value == knownPrimes[i])
//             return true;
//         else if (value % knownPrimes[i] == 0) 
//             return false;
//     }

//     let len = Math.sqrt(value);
//     if (len > lastKnownPrime) {
//         for (let i = lastKnownPrime; i < len; ++i) {
//             if (value % i == 0) 
//                 return false;
//         }
//     }

//     return true;
// }

// function primeFactors(p) {
//     let n = Math.sqrt(p);
//     let primesCount = {};
  
//     let primeIndex = 0;
//     let primeValue = knownPrimes[primeIndex];

//     while (p > 1 && 1 < n < p) {
//         if (p % primeValue == 0 && isPrime(primeValue)) {
//             p /= primeValue;
//             n = Math.sqrt(p);

//             if (primesCount[primeValue] == undefined)
//                 primesCount[primeValue] = 1;
//             else primesCount[primeValue]++;
//         } else {
//             if (primeIndex < knownPrimesLength - 1) {
//                 primeValue = knownPrimes[++primeIndex];
//             } else 
//                 primeValue ++;
//         }
//     }

//     let keys = Object.keys(primesCount);
//     let length = keys.length;
//     let result = "";
//     for (let i = 0; i < length; i ++) {
//         let key = keys[i];
//         let value = primesCount[key];
//         result += `(${key}${value > 1 ? "**" + value : ""})`;
//     }

//     console.log(result)
//     return result;
// }

// primeFactors(7775460)
// // (2**2)(3**3)(5)(7)(11**2)(17)


// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!

function josephusSurvivor(n,k){
    let arr = Array.from({ length: n }, (_, x) => x + 1);
    let index = k - 1;
    let count = 0;
    while (arr.length > 1) {
        let len = arr.length;
        let i = index % n;
        let el = arr.splice(i, 1);
        console.log(index, arr, " -> " + el);
        index -= 1;
        index += k;
        count ++;
        // index %= n;
    }

    return arr[0];
}

josephusSurvivor(7,3);
