import{i as Z,r as ie,j as M,R as N}from"./index-5f168f1b.js";import{r as Dt,h as Qt,i as He,a as Kt,g as ve}from"./hoist-non-react-statics.cjs-16d83bc0.js";const Jt=Z.button`
  width: 250px;
  height: 120px;
  text-transform: uppercase;
  display: inline-block;
  padding: 10px 20px;
  background-color: #998787;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 2px;

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    background-color: #45a049;
  }
`,qt=({loadGoods:r})=>{const[e,t]=ie.useState(null),a=["mcduck","theshaurma","elari","faina","sushiabw"],n=(o,s)=>{r(s),t(o)};return M.jsx("ul",{children:a.map((o,s)=>M.jsx("li",{children:M.jsx(Jt,{onClick:()=>{n(s,o)},disabled:e!==null&&e!==s,children:`${o}`})},o))})};var er={"aria-busy":!0,role:"status"},We=globalThis&&globalThis.__assign||function(){return We=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},We.apply(this,arguments)},Ue=globalThis&&globalThis.__assign||function(){return Ue=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Ue.apply(this,arguments)},Ve=globalThis&&globalThis.__assign||function(){return Ve=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Ve.apply(this,arguments)},Ze=globalThis&&globalThis.__assign||function(){return Ze=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Ze.apply(this,arguments)},Xe=globalThis&&globalThis.__assign||function(){return Xe=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Xe.apply(this,arguments)},Qe=globalThis&&globalThis.__assign||function(){return Qe=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Qe.apply(this,arguments)},Ke=globalThis&&globalThis.__assign||function(){return Ke=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Ke.apply(this,arguments)};function tr(r){function e(f,l,u,d,i){for(var j=0,c=0,E=0,A=0,T,m,D=0,H=0,_,F=_=T=0,C=0,B=0,me=0,G=0,xe=u.length,be=xe-1,K,p="",R="",Se="",Pe="",ae;C<xe;){if(m=u.charCodeAt(C),C===be&&c+A+E+j!==0&&(c!==0&&(m=c===47?10:47),A=E=j=0,xe++,be++),c+A+E+j===0){if(C===be&&(0<B&&(p=p.replace($,"")),0<p.trim().length)){switch(m){case 32:case 9:case 59:case 13:case 10:break;default:p+=u.charAt(C)}m=59}switch(m){case 123:for(p=p.trim(),T=p.charCodeAt(0),_=1,G=++C;C<xe;){switch(m=u.charCodeAt(C)){case 123:_++;break;case 125:_--;break;case 47:switch(m=u.charCodeAt(C+1)){case 42:case 47:e:{for(F=C+1;F<be;++F)switch(u.charCodeAt(F)){case 47:if(m===42&&u.charCodeAt(F-1)===42&&C+2!==F){C=F+1;break e}break;case 10:if(m===47){C=F+1;break e}}C=F}}break;case 91:m++;case 40:m++;case 34:case 39:for(;C++<be&&u.charCodeAt(C)!==m;);}if(_===0)break;C++}switch(_=u.substring(G,C),T===0&&(T=(p=p.replace(x,"").trim()).charCodeAt(0)),T){case 64:switch(0<B&&(p=p.replace($,"")),m=p.charCodeAt(1),m){case 100:case 109:case 115:case 45:B=l;break;default:B=ge}if(_=e(l,B,_,m,i+1),G=_.length,0<V&&(B=t(ge,p,me),ae=h(3,_,B,l,X,W,G,m,i,d),p=B.join(""),ae!==void 0&&(G=(_=ae.trim()).length)===0&&(m=0,_="")),0<G)switch(m){case 115:p=p.replace(re,s);case 100:case 109:case 45:_=p+"{"+_+"}";break;case 107:p=p.replace(w,"$1 $2"),_=p+"{"+_+"}",_=Y===1||Y===2&&o("@"+_,3)?"@-webkit-"+_+"@"+_:"@"+_;break;default:_=p+_,d===112&&(_=(R+=_,""))}else _="";break;default:_=e(l,t(l,p,me),_,d,i+1)}Se+=_,_=me=B=F=T=0,p="",m=u.charCodeAt(++C);break;case 125:case 59:if(p=(0<B?p.replace($,""):p).trim(),1<(G=p.length))switch(F===0&&(T=p.charCodeAt(0),T===45||96<T&&123>T)&&(G=(p=p.replace(" ",":")).length),0<V&&(ae=h(1,p,l,f,X,W,R.length,d,i,d))!==void 0&&(G=(p=ae.trim()).length)===0&&(p="\0\0"),T=p.charCodeAt(0),m=p.charCodeAt(1),T){case 0:break;case 64:if(m===105||m===99){Pe+=p+u.charAt(C);break}default:p.charCodeAt(G-1)!==58&&(R+=n(p,T,m,p.charCodeAt(2)))}me=B=F=T=0,p="",m=u.charCodeAt(++C)}}switch(m){case 13:case 10:c===47?c=0:1+T===0&&d!==107&&0<p.length&&(B=1,p+="\0"),0<V*le&&h(0,p,l,f,X,W,R.length,d,i,d),W=1,X++;break;case 59:case 125:if(c+A+E+j===0){W++;break}default:switch(W++,K=u.charAt(C),m){case 9:case 32:if(A+j+c===0)switch(D){case 44:case 58:case 9:case 32:K="";break;default:m!==32&&(K=" ")}break;case 0:K="\\0";break;case 12:K="\\f";break;case 11:K="\\v";break;case 38:A+c+j===0&&(B=me=1,K="\f"+K);break;case 108:if(A+c+j+ee===0&&0<F)switch(C-F){case 2:D===112&&u.charCodeAt(C-3)===58&&(ee=D);case 8:H===111&&(ee=H)}break;case 58:A+c+j===0&&(F=C);break;case 44:c+E+A+j===0&&(B=1,K+="\r");break;case 34:case 39:c===0&&(A=A===m?0:A===0?m:A);break;case 91:A+c+E===0&&j++;break;case 93:A+c+E===0&&j--;break;case 41:A+c+j===0&&E--;break;case 40:if(A+c+j===0){if(T===0)switch(2*D+3*H){case 533:break;default:T=1}E++}break;case 64:c+E+A+j+F+_===0&&(_=1);break;case 42:case 47:if(!(0<A+j+E))switch(c){case 0:switch(2*m+3*u.charCodeAt(C+1)){case 235:c=47;break;case 220:G=C,c=42}break;case 42:m===47&&D===42&&G+2!==C&&(u.charCodeAt(G+2)===33&&(R+=u.substring(G,C+1)),K="",c=0)}}c===0&&(p+=K)}H=D,D=m,C++}if(G=R.length,0<G){if(B=l,0<V&&(ae=h(2,R,B,f,X,W,G,d,i,d),ae!==void 0&&(R=ae).length===0))return Pe+R+Se;if(R=B.join(",")+"{"+R+"}",Y*ee!==0){switch(Y!==2||o(R,2)||(ee=0),ee){case 111:R=R.replace(P,":-moz-$1")+R;break;case 112:R=R.replace(z,"::-webkit-input-$1")+R.replace(z,"::-moz-$1")+R.replace(z,":-ms-input-$1")+R}ee=0}}return Pe+R+Se}function t(f,l,u){var d=l.trim().split(v);l=d;var i=d.length,j=f.length;switch(j){case 0:case 1:var c=0;for(f=j===0?"":f[0]+" ";c<i;++c)l[c]=a(f,l[c],u).trim();break;default:var E=c=0;for(l=[];c<i;++c)for(var A=0;A<j;++A)l[E++]=a(f[A]+" ",d[c],u).trim()}return l}function a(f,l,u){var d=l.charCodeAt(0);switch(33>d&&(d=(l=l.trim()).charCodeAt(0)),d){case 38:return l.replace(S,"$1"+f.trim());case 58:return f.trim()+l.replace(S,"$1"+f.trim());default:if(0<1*u&&0<l.indexOf("\f"))return l.replace(S,(f.charCodeAt(0)===58?"":"$1")+f.trim())}return f+l}function n(f,l,u,d){var i=f+";",j=2*l+3*u+4*d;if(j===944){f=i.indexOf(":",9)+1;var c=i.substring(f,i.length-1).trim();return c=i.substring(0,f).trim()+c+";",Y===1||Y===2&&o(c,1)?"-webkit-"+c+c:c}if(Y===0||Y===2&&!o(i,1))return i;switch(j){case 1015:return i.charCodeAt(10)===97?"-webkit-"+i+i:i;case 951:return i.charCodeAt(3)===116?"-webkit-"+i+i:i;case 963:return i.charCodeAt(5)===110?"-webkit-"+i+i:i;case 1009:if(i.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+i+i;case 978:return"-webkit-"+i+"-moz-"+i+i;case 1019:case 983:return"-webkit-"+i+"-moz-"+i+"-ms-"+i+i;case 883:if(i.charCodeAt(8)===45)return"-webkit-"+i+i;if(0<i.indexOf("image-set(",11))return i.replace(ce,"$1-webkit-$2")+i;break;case 932:if(i.charCodeAt(4)===45)switch(i.charCodeAt(5)){case 103:return"-webkit-box-"+i.replace("-grow","")+"-webkit-"+i+"-ms-"+i.replace("grow","positive")+i;case 115:return"-webkit-"+i+"-ms-"+i.replace("shrink","negative")+i;case 98:return"-webkit-"+i+"-ms-"+i.replace("basis","preferred-size")+i}return"-webkit-"+i+"-ms-"+i+i;case 964:return"-webkit-"+i+"-ms-flex-"+i+i;case 1023:if(i.charCodeAt(8)!==99)break;return c=i.substring(i.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+c+"-webkit-"+i+"-ms-flex-pack"+c+i;case 1005:return k.test(i)?i.replace(L,":-webkit-")+i.replace(L,":-moz-")+i:i;case 1e3:switch(c=i.substring(13).trim(),l=c.indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(l)){case 226:c=i.replace(I,"tb");break;case 232:c=i.replace(I,"tb-rl");break;case 220:c=i.replace(I,"lr");break;default:return i}return"-webkit-"+i+"-ms-"+c+i;case 1017:if(i.indexOf("sticky",9)===-1)break;case 975:switch(l=(i=f).length-10,c=(i.charCodeAt(l)===33?i.substring(0,l):i).substring(f.indexOf(":",7)+1).trim(),j=c.charCodeAt(0)+(c.charCodeAt(7)|0)){case 203:if(111>c.charCodeAt(8))break;case 115:i=i.replace(c,"-webkit-"+c)+";"+i;break;case 207:case 102:i=i.replace(c,"-webkit-"+(102<j?"inline-":"")+"box")+";"+i.replace(c,"-webkit-"+c)+";"+i.replace(c,"-ms-"+c+"box")+";"+i}return i+";";case 938:if(i.charCodeAt(5)===45)switch(i.charCodeAt(6)){case 105:return c=i.replace("-items",""),"-webkit-"+i+"-webkit-box-"+c+"-ms-flex-"+c+i;case 115:return"-webkit-"+i+"-ms-flex-item-"+i.replace(U,"")+i;default:return"-webkit-"+i+"-ms-flex-line-pack"+i.replace("align-content","").replace(U,"")+i}break;case 973:case 989:if(i.charCodeAt(3)!==45||i.charCodeAt(4)===122)break;case 931:case 953:if(ne.test(f)===!0)return(c=f.substring(f.indexOf(":")+1)).charCodeAt(0)===115?n(f.replace("stretch","fill-available"),l,u,d).replace(":fill-available",":stretch"):i.replace(c,"-webkit-"+c)+i.replace(c,"-moz-"+c.replace("fill-",""))+i;break;case 962:if(i="-webkit-"+i+(i.charCodeAt(5)===102?"-ms-"+i:"")+i,u+d===211&&i.charCodeAt(13)===105&&0<i.indexOf("transform",10))return i.substring(0,i.indexOf(";",27)+1).replace(O,"$1-webkit-$2")+i}return i}function o(f,l){var u=f.indexOf(l===1?":":"{"),d=f.substring(0,l!==3?u:10);return u=f.substring(u+1,f.length-1),pe(l!==2?d:d.replace(q,"$1"),u,l)}function s(f,l){var u=n(l,l.charCodeAt(0),l.charCodeAt(1),l.charCodeAt(2));return u!==l+";"?u.replace(oe," or ($1)").substring(4):"("+l+")"}function h(f,l,u,d,i,j,c,E,A,T){for(var m=0,D=l,H;m<V;++m)switch(H=Q[m].call(b,f,D,u,d,i,j,c,E,A,T)){case void 0:case!1:case!0:case null:break;default:D=H}if(D!==l)return D}function y(f){switch(f){case void 0:case null:V=Q.length=0;break;default:if(typeof f=="function")Q[V++]=f;else if(typeof f=="object")for(var l=0,u=f.length;l<u;++l)y(f[l]);else le=!!f|0}return y}function g(f){return f=f.prefix,f!==void 0&&(pe=null,f?typeof f!="function"?Y=1:(Y=2,pe=f):Y=0),g}function b(f,l){var u=f;if(33>u.charCodeAt(0)&&(u=u.trim()),de=u,u=[de],0<V){var d=h(-1,l,u,u,X,W,0,0,0,0);d!==void 0&&typeof d=="string"&&(l=d)}var i=e(ge,u,l,0,0);return 0<V&&(d=h(-2,i,u,u,X,W,i.length,0,0,0),d!==void 0&&(i=d)),de="",ee=0,W=X=1,i}var x=/^\0+/g,$=/[\0\r\f]/g,L=/: */g,k=/zoo|gra/,O=/([,: ])(transform)/g,v=/,\r+?/g,S=/([\t\r\n ])*\f?&/g,w=/@(k\w+)\s*(\S*)\s*/,z=/::(place)/g,P=/:(read-only)/g,I=/[svh]\w+-[tblr]{2}/,re=/\(\s*(.*)\s*\)/g,oe=/([\s\S]*?);/g,U=/-self|flex-/g,q=/[^]*?(:[rp][el]a[\w-]+)[^]*/,ne=/stretch|:\s*\w+\-(?:conte|avail)/,ce=/([^-])(image-set\()/,W=1,X=1,ee=0,Y=1,ge=[],Q=[],V=0,pe=null,le=0,de="";return b.use=y,b.set=g,r!==void 0&&g(r),b}var rr={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function te(){return(te=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a])}return r}).apply(this,arguments)}var Je=function(r,e){for(var t=[r[0]],a=0,n=e.length;a<n;a+=1)t.push(e[a],r[a+1]);return t},Ie=function(r){return r!==null&&typeof r=="object"&&(r.toString?r.toString():Object.prototype.toString.call(r))==="[object Object]"&&!Dt.typeOf(r)},Ce=Object.freeze([]),se=Object.freeze({});function we(r){return typeof r=="function"}function qe(r){return r.displayName||r.name||"Component"}function Ge(r){return r&&typeof r.styledComponentId=="string"}var he=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Me=typeof window<"u"&&"HTMLElement"in window,nr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function _e(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];throw new Error("An error occurred. See https://git.io/JUIaE#"+r+" for more information."+(t.length>0?" Args: "+t.join(", "):""))}var ar=function(){function r(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var e=r.prototype;return e.indexOfGroup=function(t){for(var a=0,n=0;n<t;n++)a+=this.groupSizes[n];return a},e.insertRules=function(t,a){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,s=o;t>=s;)(s<<=1)<0&&_e(16,""+t);this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var h=o;h<s;h++)this.groupSizes[h]=0}for(var y=this.indexOfGroup(t+1),g=0,b=a.length;g<b;g++)this.tag.insertRule(y,a[g])&&(this.groupSizes[t]++,y++)},e.clearGroup=function(t){if(t<this.length){var a=this.groupSizes[t],n=this.indexOfGroup(t),o=n+a;this.groupSizes[t]=0;for(var s=n;s<o;s++)this.tag.deleteRule(n)}},e.getGroup=function(t){var a="";if(t>=this.length||this.groupSizes[t]===0)return a;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n,h=o;h<s;h++)a+=this.tag.getRule(h)+`/*!sc*/
`;return a},r}(),Ae=new Map,Te=new Map,ye=1,Oe=function(r){if(Ae.has(r))return Ae.get(r);for(;Te.has(ye);)ye++;var e=ye++;return Ae.set(r,e),Te.set(e,r),e},ir=function(r){return Te.get(r)},sr=function(r,e){e>=ye&&(ye=e+1),Ae.set(r,e),Te.set(e,r)},or="style["+he+'][data-styled-version="5.3.11"]',cr=new RegExp("^"+he+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),lr=function(r,e,t){for(var a,n=t.split(","),o=0,s=n.length;o<s;o++)(a=n[o])&&r.registerName(e,a)},ur=function(r,e){for(var t=(e.textContent||"").split(`/*!sc*/
`),a=[],n=0,o=t.length;n<o;n++){var s=t[n].trim();if(s){var h=s.match(cr);if(h){var y=0|parseInt(h[1],10),g=h[2];y!==0&&(sr(g,y),lr(r,g,h[3]),r.getTag().insertRules(y,a)),a.length=0}else a.push(s)}}},hr=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Bt=function(r){var e=document.head,t=r||e,a=document.createElement("style"),n=function(h){for(var y=h.childNodes,g=y.length;g>=0;g--){var b=y[g];if(b&&b.nodeType===1&&b.hasAttribute(he))return b}}(t),o=n!==void 0?n.nextSibling:null;a.setAttribute(he,"active"),a.setAttribute("data-styled-version","5.3.11");var s=hr();return s&&a.setAttribute("nonce",s),t.insertBefore(a,o),a},fr=function(){function r(t){var a=this.element=Bt(t);a.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var o=document.styleSheets,s=0,h=o.length;s<h;s++){var y=o[s];if(y.ownerNode===n)return y}_e(17)}(a),this.length=0}var e=r.prototype;return e.insertRule=function(t,a){try{return this.sheet.insertRule(a,t),this.length++,!0}catch{return!1}},e.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.getRule=function(t){var a=this.sheet.cssRules[t];return a!==void 0&&typeof a.cssText=="string"?a.cssText:""},r}(),gr=function(){function r(t){var a=this.element=Bt(t);this.nodes=a.childNodes,this.length=0}var e=r.prototype;return e.insertRule=function(t,a){if(t<=this.length&&t>=0){var n=document.createTextNode(a),o=this.nodes[t];return this.element.insertBefore(n,o||null),this.length++,!0}return!1},e.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},r}(),pr=function(){function r(t){this.rules=[],this.length=0}var e=r.prototype;return e.insertRule=function(t,a){return t<=this.length&&(this.rules.splice(t,0,a),this.length++,!0)},e.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.getRule=function(t){return t<this.length?this.rules[t]:""},r}(),et=Me,dr={isServer:!Me,useCSSOMInjection:!nr},Gt=function(){function r(t,a,n){t===void 0&&(t=se),a===void 0&&(a={}),this.options=te({},dr,{},t),this.gs=a,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Me&&et&&(et=!1,function(o){for(var s=document.querySelectorAll(or),h=0,y=s.length;h<y;h++){var g=s[h];g&&g.getAttribute(he)!=="active"&&(ur(o,g),g.parentNode&&g.parentNode.removeChild(g))}}(this))}r.registerId=function(t){return Oe(t)};var e=r.prototype;return e.reconstructWithOptions=function(t,a){return a===void 0&&(a=!0),new r(te({},this.options,{},t),this.gs,a&&this.names||void 0)},e.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.getTag=function(){return this.tag||(this.tag=(n=(a=this.options).isServer,o=a.useCSSOMInjection,s=a.target,t=n?new pr(s):o?new fr(s):new gr(s),new ar(t)));var t,a,n,o,s},e.hasNameForId=function(t,a){return this.names.has(t)&&this.names.get(t).has(a)},e.registerName=function(t,a){if(Oe(t),this.names.has(t))this.names.get(t).add(a);else{var n=new Set;n.add(a),this.names.set(t,n)}},e.insertRules=function(t,a,n){this.registerName(t,a),this.getTag().insertRules(Oe(t),n)},e.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.clearRules=function(t){this.getTag().clearGroup(Oe(t)),this.clearNames(t)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(t){for(var a=t.getTag(),n=a.length,o="",s=0;s<n;s++){var h=ir(s);if(h!==void 0){var y=t.names.get(h),g=a.getGroup(s);if(y&&g&&y.size){var b=he+".g"+s+'[id="'+h+'"]',x="";y!==void 0&&y.forEach(function($){$.length>0&&(x+=$+",")}),o+=""+g+b+'{content:"'+x+`"}/*!sc*/
`}}}return o}(this)},r}(),mr=/(a)(d)/gi,tt=function(r){return String.fromCharCode(r+(r>25?39:97))};function Re(r){var e,t="";for(e=Math.abs(r);e>52;e=e/52|0)t=tt(e%52)+t;return(tt(e%52)+t).replace(mr,"$1-$2")}var ue=function(r,e){for(var t=e.length;t;)r=33*r^e.charCodeAt(--t);return r},Mt=function(r){return ue(5381,r)};function br(r){for(var e=0;e<r.length;e+=1){var t=r[e];if(we(t)&&!Ge(t))return!1}return!0}var vr=Mt("5.3.11"),yr=function(){function r(e,t,a){this.rules=e,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&br(e),this.componentId=t,this.baseHash=ue(vr,t),this.baseStyle=a,Gt.registerId(t)}return r.prototype.generateAndInjectStyles=function(e,t,a){var n=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,a)),this.isStatic&&!a.hash)if(this.staticRulesId&&t.hasNameForId(n,this.staticRulesId))o.push(this.staticRulesId);else{var s=fe(this.rules,e,t,a).join(""),h=Re(ue(this.baseHash,s)>>>0);if(!t.hasNameForId(n,h)){var y=a(s,"."+h,void 0,n);t.insertRules(n,h,y)}o.push(h),this.staticRulesId=h}else{for(var g=this.rules.length,b=ue(this.baseHash,a.hash),x="",$=0;$<g;$++){var L=this.rules[$];if(typeof L=="string")x+=L;else if(L){var k=fe(L,e,t,a),O=Array.isArray(k)?k.join(""):k;b=ue(b,O+$),x+=O}}if(x){var v=Re(b>>>0);if(!t.hasNameForId(n,v)){var S=a(x,"."+v,void 0,n);t.insertRules(n,v,S)}o.push(v)}}return o.join(" ")},r}(),wr=/^\s*\/\/.*$/gm,_r=[":","[",".","#"];function kr(r){var e,t,a,n,o=r===void 0?se:r,s=o.options,h=s===void 0?se:s,y=o.plugins,g=y===void 0?Ce:y,b=new tr(h),x=[],$=function(O){function v(S){if(S)try{O(S+"}")}catch{}}return function(S,w,z,P,I,re,oe,U,q,ne){switch(S){case 1:if(q===0&&w.charCodeAt(0)===64)return O(w+";"),"";break;case 2:if(U===0)return w+"/*|*/";break;case 3:switch(U){case 102:case 112:return O(z[0]+w),"";default:return w+(ne===0?"/*|*/":"")}case-2:w.split("/*|*/}").forEach(v)}}}(function(O){x.push(O)}),L=function(O,v,S){return v===0&&_r.indexOf(S[t.length])!==-1||S.match(n)?O:"."+e};function k(O,v,S,w){w===void 0&&(w="&");var z=O.replace(wr,""),P=v&&S?S+" "+v+" { "+z+" }":z;return e=w,t=v,a=new RegExp("\\"+t+"\\b","g"),n=new RegExp("(\\"+t+"\\b){2,}"),b(S||!v?"":v,P)}return b.use([].concat(g,[function(O,v,S){O===2&&S.length&&S[0].lastIndexOf(t)>0&&(S[0]=S[0].replace(a,L))},$,function(O){if(O===-2){var v=x;return x=[],v}}])),k.hash=g.length?g.reduce(function(O,v){return v.name||_e(15),ue(O,v.name)},5381).toString():"",k}var Lt=N.createContext();Lt.Consumer;var Ft=N.createContext(),xr=(Ft.Consumer,new Gt),Ne=kr();function Or(){return ie.useContext(Lt)||xr}function jr(){return ie.useContext(Ft)||Ne}var Yt=function(){function r(e,t){var a=this;this.inject=function(n,o){o===void 0&&(o=Ne);var s=a.name+o.hash;n.hasNameForId(a.id,s)||n.insertRules(a.id,s,o(a.rules,s,"@keyframes"))},this.toString=function(){return _e(12,String(a.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return r.prototype.getName=function(e){return e===void 0&&(e=Ne),this.name+e.hash},r}(),Ar=/([A-Z])/,Cr=/([A-Z])/g,Tr=/^ms-/,Sr=function(r){return"-"+r.toLowerCase()};function rt(r){return Ar.test(r)?r.replace(Cr,Sr).replace(Tr,"-ms-"):r}var nt=function(r){return r==null||r===!1||r===""};function fe(r,e,t,a){if(Array.isArray(r)){for(var n,o=[],s=0,h=r.length;s<h;s+=1)(n=fe(r[s],e,t,a))!==""&&(Array.isArray(n)?o.push.apply(o,n):o.push(n));return o}if(nt(r))return"";if(Ge(r))return"."+r.styledComponentId;if(we(r)){if(typeof(g=r)!="function"||g.prototype&&g.prototype.isReactComponent||!e)return r;var y=r(e);return fe(y,e,t,a)}var g;return r instanceof Yt?t?(r.inject(t,a),r.getName(a)):r:Ie(r)?function b(x,$){var L,k,O=[];for(var v in x)x.hasOwnProperty(v)&&!nt(x[v])&&(Array.isArray(x[v])&&x[v].isCss||we(x[v])?O.push(rt(v)+":",x[v],";"):Ie(x[v])?O.push.apply(O,b(x[v],v)):O.push(rt(v)+": "+(L=v,(k=x[v])==null||typeof k=="boolean"||k===""?"":typeof k!="number"||k===0||L in rr||L.startsWith("--")?String(k).trim():k+"px")+";"));return $?[$+" {"].concat(O,["}"]):O}(r):r.toString()}var at=function(r){return Array.isArray(r)&&(r.isCss=!0),r};function Ht(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];return we(r)||Ie(r)?at(fe(Je(Ce,[r].concat(t)))):t.length===0&&r.length===1&&typeof r[0]=="string"?r:at(fe(Je(r,t)))}var Pr=function(r,e,t){return t===void 0&&(t=se),r.theme!==t.theme&&r.theme||e||t.theme},Er=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$r=/(^-|-$)/g;function Ee(r){return r.replace(Er,"-").replace($r,"")}var Wt=function(r){return Re(Mt(r)>>>0)};function je(r){return typeof r=="string"&&!0}var ze=function(r){return typeof r=="function"||typeof r=="object"&&r!==null&&!Array.isArray(r)},Ir=function(r){return r!=="__proto__"&&r!=="constructor"&&r!=="prototype"};function Rr(r,e,t){var a=r[t];ze(e)&&ze(a)?Ut(a,e):r[t]=e}function Ut(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];for(var n=0,o=t;n<o.length;n++){var s=o[n];if(ze(s))for(var h in s)Ir(h)&&Rr(r,s[h],h)}return r}var Vt=N.createContext();Vt.Consumer;var $e={};function Zt(r,e,t){var a=Ge(r),n=!je(r),o=e.attrs,s=o===void 0?Ce:o,h=e.componentId,y=h===void 0?function(w,z){var P=typeof w!="string"?"sc":Ee(w);$e[P]=($e[P]||0)+1;var I=P+"-"+Wt("5.3.11"+P+$e[P]);return z?z+"-"+I:I}(e.displayName,e.parentComponentId):h,g=e.displayName,b=g===void 0?function(w){return je(w)?"styled."+w:"Styled("+qe(w)+")"}(r):g,x=e.displayName&&e.componentId?Ee(e.displayName)+"-"+e.componentId:e.componentId||y,$=a&&r.attrs?Array.prototype.concat(r.attrs,s).filter(Boolean):s,L=e.shouldForwardProp;a&&r.shouldForwardProp&&(L=e.shouldForwardProp?function(w,z,P){return r.shouldForwardProp(w,z,P)&&e.shouldForwardProp(w,z,P)}:r.shouldForwardProp);var k,O=new yr(t,x,a?r.componentStyle:void 0),v=O.isStatic&&s.length===0,S=function(w,z){return function(P,I,re,oe){var U=P.attrs,q=P.componentStyle,ne=P.defaultProps,ce=P.foldedComponentIds,W=P.shouldForwardProp,X=P.styledComponentId,ee=P.target,Y=function(d,i,j){d===void 0&&(d=se);var c=te({},i,{theme:d}),E={};return j.forEach(function(A){var T,m,D,H=A;for(T in we(H)&&(H=H(c)),H)c[T]=E[T]=T==="className"?(m=E[T],D=H[T],m&&D?m+" "+D:m||D):H[T]}),[c,E]}(Pr(I,ie.useContext(Vt),ne)||se,I,U),ge=Y[0],Q=Y[1],V=function(d,i,j,c){var E=Or(),A=jr(),T=i?d.generateAndInjectStyles(se,E,A):d.generateAndInjectStyles(j,E,A);return T}(q,oe,ge),pe=re,le=Q.$as||I.$as||Q.as||I.as||ee,de=je(le),f=Q!==I?te({},I,{},Q):I,l={};for(var u in f)u[0]!=="$"&&u!=="as"&&(u==="forwardedAs"?l.as=f[u]:(W?W(u,He,le):!de||He(u))&&(l[u]=f[u]));return I.style&&Q.style!==I.style&&(l.style=te({},I.style,{},Q.style)),l.className=Array.prototype.concat(ce,X,V!==X?V:null,I.className,Q.className).filter(Boolean).join(" "),l.ref=pe,ie.createElement(le,l)}(k,w,z,v)};return S.displayName=b,(k=N.forwardRef(S)).attrs=$,k.componentStyle=O,k.displayName=b,k.shouldForwardProp=L,k.foldedComponentIds=a?Array.prototype.concat(r.foldedComponentIds,r.styledComponentId):Ce,k.styledComponentId=x,k.target=a?r.target:r,k.withComponent=function(w){var z=e.componentId,P=function(re,oe){if(re==null)return{};var U,q,ne={},ce=Object.keys(re);for(q=0;q<ce.length;q++)U=ce[q],oe.indexOf(U)>=0||(ne[U]=re[U]);return ne}(e,["componentId"]),I=z&&z+"-"+(je(w)?w:Ee(qe(w)));return Zt(w,te({},P,{attrs:$,componentId:I}),t)},Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=a?Ut({},r.defaultProps,w):w}}),Object.defineProperty(k,"toString",{value:function(){return"."+k.styledComponentId}}),n&&Qt(k,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),k}var De=function(r){return function e(t,a,n){if(n===void 0&&(n=se),!Dt.isValidElementType(a))return _e(1,String(a));var o=function(){return t(a,n,Ht.apply(void 0,arguments))};return o.withConfig=function(s){return e(t,a,te({},n,{},s))},o.attrs=function(s){return e(t,a,te({},n,{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)}))},o}(Zt,r)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(r){De[r]=De(r)});function Le(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];var n=Ht.apply(void 0,[r].concat(t)).join(""),o=Wt(n);return new Yt(o,n)}const ke=De;var Xt=globalThis&&globalThis.__makeTemplateObject||function(r,e){return Object.defineProperty?Object.defineProperty(r,"raw",{value:e}):r.raw=e,r},J=242.776657104492,Nr=1.6,zr=Le(it||(it=Xt([`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`],[`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`])),J*.14,J,J*.11,J*.35,J,J*.35,J*.01,J,J*.99);ke.path(st||(st=Xt([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),J*.01,J,zr,Nr);var it,st,ot=globalThis&&globalThis.__assign||function(){return ot=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},ot.apply(this,arguments)},ct=globalThis&&globalThis.__assign||function(){return ct=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},ct.apply(this,arguments)},lt=globalThis&&globalThis.__assign||function(){return lt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},lt.apply(this,arguments)},ut=globalThis&&globalThis.__assign||function(){return ut=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},ut.apply(this,arguments)},ht=globalThis&&globalThis.__assign||function(){return ht=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},ht.apply(this,arguments)},ft=globalThis&&globalThis.__assign||function(){return ft=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},ft.apply(this,arguments)},gt=globalThis&&globalThis.__assign||function(){return gt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},gt.apply(this,arguments)},Dr=function(e,t){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof a[e]<"u")return a[e];if(e&&e.indexOf(".")>0){for(var n=e.split("."),o=n.length,s=a[n[0]],h=1;s!=null&&h<o;)s=s[n[h]],h+=1;if(typeof s<"u")return s}return t}},Fe=globalThis&&globalThis.__makeTemplateObject||function(r,e){return Object.defineProperty?Object.defineProperty(r,"raw",{value:e}):r.raw=e,r},pt=globalThis&&globalThis.__assign||function(){return pt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},pt.apply(this,arguments)},Br=Le(dt||(dt=Fe([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));ke.svg(mt||(mt=Fe([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),Br,Dr("speed","0.75"));ke.polyline(bt||(bt=Fe([`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`],[`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`])),function(r){return r.width});var dt,mt,bt,vt=globalThis&&globalThis.__assign||function(){return vt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},vt.apply(this,arguments)},yt=globalThis&&globalThis.__assign||function(){return yt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},yt.apply(this,arguments)},wt=globalThis&&globalThis.__assign||function(){return wt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},wt.apply(this,arguments)},Ye=globalThis&&globalThis.__makeTemplateObject||function(r,e){return Object.defineProperty?Object.defineProperty(r,"raw",{value:e}):r.raw=e,r},_t=globalThis&&globalThis.__assign||function(){return _t=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},_t.apply(this,arguments)},Gr=Le(kt||(kt=Ye([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));ke.polygon(xt||(xt=Ye([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),Gr);ke.svg(Ot||(Ot=Ye([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var kt,xt,Ot,jt=globalThis&&globalThis.__assign||function(){return jt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},jt.apply(this,arguments)},At=globalThis&&globalThis.__assign||function(){return At=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},At.apply(this,arguments)},Ct=globalThis&&globalThis.__assign||function(){return Ct=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Ct.apply(this,arguments)},Tt=globalThis&&globalThis.__assign||function(){return Tt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Tt.apply(this,arguments)},St=globalThis&&globalThis.__assign||function(){return St=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},St.apply(this,arguments)},Pt=globalThis&&globalThis.__assign||function(){return Pt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Pt.apply(this,arguments)},Et=globalThis&&globalThis.__assign||function(){return Et=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Et.apply(this,arguments)},$t=globalThis&&globalThis.__assign||function(){return $t=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},$t.apply(this,arguments)},It=globalThis&&globalThis.__assign||function(){return It=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},It.apply(this,arguments)},Rt=globalThis&&globalThis.__assign||function(){return Rt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Rt.apply(this,arguments)},Nt=globalThis&&globalThis.__assign||function(){return Nt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Nt.apply(this,arguments)},zt=globalThis&&globalThis.__assign||function(){return zt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},zt.apply(this,arguments)},Be=globalThis&&globalThis.__assign||function(){return Be=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Be.apply(this,arguments)};function Mr(r){var e=r.visible,t=e===void 0?!0:e,a=r.width,n=a===void 0?"80":a,o=r.height,s=o===void 0?"80":o,h=r.wrapperClass,y=h===void 0?"":h,g=r.wrapperStyle,b=g===void 0?{}:g,x=r.ariaLabel,$=x===void 0?"blocks-loading":x;return t?N.createElement("svg",Be({width:n,height:s,className:y,style:b,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid","aria-label":$,"data-testid":"blocks-svg"},er),N.createElement("rect",{x:"17",y:"17",width:"20",height:"20",fill:"#577c9b"},N.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0s",calcMode:"discrete"})),N.createElement("rect",{x:"40",y:"17",width:"20",height:"20",fill:"#577c9b"},N.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.125s",calcMode:"discrete"})),N.createElement("rect",{x:"63",y:"17",width:"20",height:"20",fill:"#577c9b"},N.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.25s",calcMode:"discrete"})),N.createElement("rect",{x:"17",y:"40",width:"20",height:"20",fill:"#577c9b"},N.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.875s",calcMode:"discrete"})),N.createElement("rect",{x:"63",y:"40",width:"20",height:"20",fill:"#577c9b"},N.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.375s",calcMode:"discrete"})),N.createElement("rect",{x:"17",y:"63",width:"20",height:"20",fill:"#577c9b"},N.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.75s",calcMode:"discrete"})),N.createElement("rect",{x:"40",y:"63",width:"20",height:"20",fill:"#577c9b"},N.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.625s",calcMode:"discrete"})),N.createElement("rect",{x:"63",y:"63",width:"20",height:"20",fill:"#577c9b"},N.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.5s",calcMode:"discrete"}))):null}const Lr=Z.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  margin-left: 25%;
`,Fr=()=>M.jsx(Lr,{children:M.jsx(Mr,{visible:!0,height:"100",width:"100",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper"})}),Yr=Z.div`
  display: flex;
  gap: 32px;
  justify-content: flex-start;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 28px;
`,Hr=Z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 18px;
`,Wr=Z.h2`
  margin-bottom: 18px;
`,Ur=Z.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 28px;
  height: 680px;
  overflow: auto;
`,Vr=Z.li`
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 28px;
  display: flex;
  position: relative;
`,Zr=Z.img`
  width: 330px;
  height: 220px;
  object-fit: cover;
  border-radius: 15px;
`,Xr=Z.p`
  font-size: 28px;
  margin-top: 12px;
  margin-right: auto;
`,Qr=Z.button`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 12px;
  margin-left: auto;
  background-color: #368639;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #45a049;
  }
`,Kr=Z.div`
  display: ${r=>r.show?"block":"none"};
  position: absolute;
  top: 100%;
  margin-top: -25px;
  background-color: #93a894dc;
  border-radius: 8px;
  color: #fff;
  padding: 10px;
`,Jr=Z.p`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 10px;
  text-align: center;
`,tn=()=>{const[r,e]=ie.useState([]),[t,a]=ie.useState("stoped"),[n,o]=ie.useState(null);function s(g){switch(a("pending"),g){case"mcduck":ve("mcduck").then(b=>{a("resolved"),e(b)});break;case"theshaurma":ve("theshaurma").then(b=>{a("resolved"),e(b)});break;case"elari":ve("elari").then(b=>{a("resolved"),e(b)});break;case"faina":ve("faina").then(b=>{a("resolved"),e(b)});break;case"sushiabw":ve("sushiabw").then(b=>{a("resolved"),e(b)});break;default:return}}const h=g=>{o(g)},y=()=>{o(null)};return M.jsxs(Yr,{children:[M.jsxs(Hr,{children:[M.jsx(Wr,{children:"Shops:"}),M.jsx(qt,{loadGoods:s})]}),t==="pending"?M.jsx(Fr,{}):M.jsx(Ur,{children:r.length?r==null?void 0:r.map((g,b)=>M.jsxs(Vr,{children:[M.jsx(Zr,{src:g.image,alt:g.titel}),M.jsx(Xr,{children:g.titel}),M.jsx(Qr,{type:"button",onClick:()=>Kt(g),onMouseOver:()=>h(b),onMouseOut:y,children:"Add to Cart"}),M.jsx(Kr,{show:n===b?"true":void 0,id:"tooltip",children:"The item should be added in the Shopping Cart"})]},g._id)):M.jsx(Jr,{children:"Welcome! Choose a store to order delicious food."})})]})};export{tn as default};
