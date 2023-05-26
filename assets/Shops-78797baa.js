import{i as J,r as se,j as F,R as N}from"./index-c84c0062.js";import{r as Dt,h as Qt,i as We,a as Kt,g as ve}from"./hoist-non-react-statics.cjs-943cccac.js";const Jt=J.button`
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
`,qt=({loadGoods:r})=>{const[e,t]=se.useState(null),a=["mcduck","theshaurma","elari","faina","sushiabw"],n=(o,s)=>{r(s),t(o)};return F.jsx("ul",{children:a.map((o,s)=>F.jsx("li",{children:F.jsx(Jt,{onClick:()=>{n(s,o)},disabled:e!==null&&e!==s,children:`${o}`})},o))})};var er={"aria-busy":!0,role:"status"},He=globalThis&&globalThis.__assign||function(){return He=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},He.apply(this,arguments)},Ue=globalThis&&globalThis.__assign||function(){return Ue=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Ue.apply(this,arguments)},Ve=globalThis&&globalThis.__assign||function(){return Ve=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Ve.apply(this,arguments)},Ze=globalThis&&globalThis.__assign||function(){return Ze=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Ze.apply(this,arguments)},Xe=globalThis&&globalThis.__assign||function(){return Xe=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Xe.apply(this,arguments)},Qe=globalThis&&globalThis.__assign||function(){return Qe=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Qe.apply(this,arguments)},Ke=globalThis&&globalThis.__assign||function(){return Ke=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Ke.apply(this,arguments)};function tr(r){function e(h,l,u,p,i){for(var O=0,c=0,E=0,j=0,C,d,D=0,W=0,w,M=w=C=0,A=0,G=0,me=0,B=0,xe=u.length,be=xe-1,Q,g="",R="",Se="",Pe="",ae;A<xe;){if(d=u.charCodeAt(A),A===be&&c+j+E+O!==0&&(c!==0&&(d=c===47?10:47),j=E=O=0,xe++,be++),c+j+E+O===0){if(A===be&&(0<G&&(g=g.replace($,"")),0<g.trim().length)){switch(d){case 32:case 9:case 59:case 13:case 10:break;default:g+=u.charAt(A)}d=59}switch(d){case 123:for(g=g.trim(),C=g.charCodeAt(0),w=1,B=++A;A<xe;){switch(d=u.charCodeAt(A)){case 123:w++;break;case 125:w--;break;case 47:switch(d=u.charCodeAt(A+1)){case 42:case 47:e:{for(M=A+1;M<be;++M)switch(u.charCodeAt(M)){case 47:if(d===42&&u.charCodeAt(M-1)===42&&A+2!==M){A=M+1;break e}break;case 10:if(d===47){A=M+1;break e}}A=M}}break;case 91:d++;case 40:d++;case 34:case 39:for(;A++<be&&u.charCodeAt(A)!==d;);}if(w===0)break;A++}switch(w=u.substring(B,A),C===0&&(C=(g=g.replace(k,"").trim()).charCodeAt(0)),C){case 64:switch(0<G&&(g=g.replace($,"")),d=g.charCodeAt(1),d){case 100:case 109:case 115:case 45:G=l;break;default:G=ge}if(w=e(l,G,w,d,i+1),B=w.length,0<V&&(G=t(ge,g,me),ae=f(3,w,G,l,Z,H,B,d,i,p),g=G.join(""),ae!==void 0&&(B=(w=ae.trim()).length)===0&&(d=0,w="")),0<B)switch(d){case 115:g=g.replace(re,s);case 100:case 109:case 45:w=g+"{"+w+"}";break;case 107:g=g.replace(y,"$1 $2"),w=g+"{"+w+"}",w=Y===1||Y===2&&o("@"+w,3)?"@-webkit-"+w+"@"+w:"@"+w;break;default:w=g+w,p===112&&(w=(R+=w,""))}else w="";break;default:w=e(l,t(l,g,me),w,p,i+1)}Se+=w,w=me=G=M=C=0,g="",d=u.charCodeAt(++A);break;case 125:case 59:if(g=(0<G?g.replace($,""):g).trim(),1<(B=g.length))switch(M===0&&(C=g.charCodeAt(0),C===45||96<C&&123>C)&&(B=(g=g.replace(" ",":")).length),0<V&&(ae=f(1,g,l,h,Z,H,R.length,p,i,p))!==void 0&&(B=(g=ae.trim()).length)===0&&(g="\0\0"),C=g.charCodeAt(0),d=g.charCodeAt(1),C){case 0:break;case 64:if(d===105||d===99){Pe+=g+u.charAt(A);break}default:g.charCodeAt(B-1)!==58&&(R+=n(g,C,d,g.charCodeAt(2)))}me=G=M=C=0,g="",d=u.charCodeAt(++A)}}switch(d){case 13:case 10:c===47?c=0:1+C===0&&p!==107&&0<g.length&&(G=1,g+="\0"),0<V*le&&f(0,g,l,h,Z,H,R.length,p,i,p),H=1,Z++;break;case 59:case 125:if(c+j+E+O===0){H++;break}default:switch(H++,Q=u.charAt(A),d){case 9:case 32:if(j+O+c===0)switch(D){case 44:case 58:case 9:case 32:Q="";break;default:d!==32&&(Q=" ")}break;case 0:Q="\\0";break;case 12:Q="\\f";break;case 11:Q="\\v";break;case 38:j+c+O===0&&(G=me=1,Q="\f"+Q);break;case 108:if(j+c+O+ee===0&&0<M)switch(A-M){case 2:D===112&&u.charCodeAt(A-3)===58&&(ee=D);case 8:W===111&&(ee=W)}break;case 58:j+c+O===0&&(M=A);break;case 44:c+E+j+O===0&&(G=1,Q+="\r");break;case 34:case 39:c===0&&(j=j===d?0:j===0?d:j);break;case 91:j+c+E===0&&O++;break;case 93:j+c+E===0&&O--;break;case 41:j+c+O===0&&E--;break;case 40:if(j+c+O===0){if(C===0)switch(2*D+3*W){case 533:break;default:C=1}E++}break;case 64:c+E+j+O+M+w===0&&(w=1);break;case 42:case 47:if(!(0<j+O+E))switch(c){case 0:switch(2*d+3*u.charCodeAt(A+1)){case 235:c=47;break;case 220:B=A,c=42}break;case 42:d===47&&D===42&&B+2!==A&&(u.charCodeAt(B+2)===33&&(R+=u.substring(B,A+1)),Q="",c=0)}}c===0&&(g+=Q)}W=D,D=d,A++}if(B=R.length,0<B){if(G=l,0<V&&(ae=f(2,R,G,h,Z,H,B,p,i,p),ae!==void 0&&(R=ae).length===0))return Pe+R+Se;if(R=G.join(",")+"{"+R+"}",Y*ee!==0){switch(Y!==2||o(R,2)||(ee=0),ee){case 111:R=R.replace(P,":-moz-$1")+R;break;case 112:R=R.replace(z,"::-webkit-input-$1")+R.replace(z,"::-moz-$1")+R.replace(z,":-ms-input-$1")+R}ee=0}}return Pe+R+Se}function t(h,l,u){var p=l.trim().split(b);l=p;var i=p.length,O=h.length;switch(O){case 0:case 1:var c=0;for(h=O===0?"":h[0]+" ";c<i;++c)l[c]=a(h,l[c],u).trim();break;default:var E=c=0;for(l=[];c<i;++c)for(var j=0;j<O;++j)l[E++]=a(h[j]+" ",p[c],u).trim()}return l}function a(h,l,u){var p=l.charCodeAt(0);switch(33>p&&(p=(l=l.trim()).charCodeAt(0)),p){case 38:return l.replace(S,"$1"+h.trim());case 58:return h.trim()+l.replace(S,"$1"+h.trim());default:if(0<1*u&&0<l.indexOf("\f"))return l.replace(S,(h.charCodeAt(0)===58?"":"$1")+h.trim())}return h+l}function n(h,l,u,p){var i=h+";",O=2*l+3*u+4*p;if(O===944){h=i.indexOf(":",9)+1;var c=i.substring(h,i.length-1).trim();return c=i.substring(0,h).trim()+c+";",Y===1||Y===2&&o(c,1)?"-webkit-"+c+c:c}if(Y===0||Y===2&&!o(i,1))return i;switch(O){case 1015:return i.charCodeAt(10)===97?"-webkit-"+i+i:i;case 951:return i.charCodeAt(3)===116?"-webkit-"+i+i:i;case 963:return i.charCodeAt(5)===110?"-webkit-"+i+i:i;case 1009:if(i.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+i+i;case 978:return"-webkit-"+i+"-moz-"+i+i;case 1019:case 983:return"-webkit-"+i+"-moz-"+i+"-ms-"+i+i;case 883:if(i.charCodeAt(8)===45)return"-webkit-"+i+i;if(0<i.indexOf("image-set(",11))return i.replace(ce,"$1-webkit-$2")+i;break;case 932:if(i.charCodeAt(4)===45)switch(i.charCodeAt(5)){case 103:return"-webkit-box-"+i.replace("-grow","")+"-webkit-"+i+"-ms-"+i.replace("grow","positive")+i;case 115:return"-webkit-"+i+"-ms-"+i.replace("shrink","negative")+i;case 98:return"-webkit-"+i+"-ms-"+i.replace("basis","preferred-size")+i}return"-webkit-"+i+"-ms-"+i+i;case 964:return"-webkit-"+i+"-ms-flex-"+i+i;case 1023:if(i.charCodeAt(8)!==99)break;return c=i.substring(i.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+c+"-webkit-"+i+"-ms-flex-pack"+c+i;case 1005:return _.test(i)?i.replace(L,":-webkit-")+i.replace(L,":-moz-")+i:i;case 1e3:switch(c=i.substring(13).trim(),l=c.indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(l)){case 226:c=i.replace(I,"tb");break;case 232:c=i.replace(I,"tb-rl");break;case 220:c=i.replace(I,"lr");break;default:return i}return"-webkit-"+i+"-ms-"+c+i;case 1017:if(i.indexOf("sticky",9)===-1)break;case 975:switch(l=(i=h).length-10,c=(i.charCodeAt(l)===33?i.substring(0,l):i).substring(h.indexOf(":",7)+1).trim(),O=c.charCodeAt(0)+(c.charCodeAt(7)|0)){case 203:if(111>c.charCodeAt(8))break;case 115:i=i.replace(c,"-webkit-"+c)+";"+i;break;case 207:case 102:i=i.replace(c,"-webkit-"+(102<O?"inline-":"")+"box")+";"+i.replace(c,"-webkit-"+c)+";"+i.replace(c,"-ms-"+c+"box")+";"+i}return i+";";case 938:if(i.charCodeAt(5)===45)switch(i.charCodeAt(6)){case 105:return c=i.replace("-items",""),"-webkit-"+i+"-webkit-box-"+c+"-ms-flex-"+c+i;case 115:return"-webkit-"+i+"-ms-flex-item-"+i.replace(U,"")+i;default:return"-webkit-"+i+"-ms-flex-line-pack"+i.replace("align-content","").replace(U,"")+i}break;case 973:case 989:if(i.charCodeAt(3)!==45||i.charCodeAt(4)===122)break;case 931:case 953:if(ne.test(h)===!0)return(c=h.substring(h.indexOf(":")+1)).charCodeAt(0)===115?n(h.replace("stretch","fill-available"),l,u,p).replace(":fill-available",":stretch"):i.replace(c,"-webkit-"+c)+i.replace(c,"-moz-"+c.replace("fill-",""))+i;break;case 962:if(i="-webkit-"+i+(i.charCodeAt(5)===102?"-ms-"+i:"")+i,u+p===211&&i.charCodeAt(13)===105&&0<i.indexOf("transform",10))return i.substring(0,i.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+i}return i}function o(h,l){var u=h.indexOf(l===1?":":"{"),p=h.substring(0,l!==3?u:10);return u=h.substring(u+1,h.length-1),pe(l!==2?p:p.replace(q,"$1"),u,l)}function s(h,l){var u=n(l,l.charCodeAt(0),l.charCodeAt(1),l.charCodeAt(2));return u!==l+";"?u.replace(oe," or ($1)").substring(4):"("+l+")"}function f(h,l,u,p,i,O,c,E,j,C){for(var d=0,D=l,W;d<V;++d)switch(W=X[d].call(T,h,D,u,p,i,O,c,E,j,C)){case void 0:case!1:case!0:case null:break;default:D=W}if(D!==l)return D}function v(h){switch(h){case void 0:case null:V=X.length=0;break;default:if(typeof h=="function")X[V++]=h;else if(typeof h=="object")for(var l=0,u=h.length;l<u;++l)v(h[l]);else le=!!h|0}return v}function m(h){return h=h.prefix,h!==void 0&&(pe=null,h?typeof h!="function"?Y=1:(Y=2,pe=h):Y=0),m}function T(h,l){var u=h;if(33>u.charCodeAt(0)&&(u=u.trim()),de=u,u=[de],0<V){var p=f(-1,l,u,u,Z,H,0,0,0,0);p!==void 0&&typeof p=="string"&&(l=p)}var i=e(ge,u,l,0,0);return 0<V&&(p=f(-2,i,u,u,Z,H,i.length,0,0,0),p!==void 0&&(i=p)),de="",ee=0,H=Z=1,i}var k=/^\0+/g,$=/[\0\r\f]/g,L=/: */g,_=/zoo|gra/,x=/([,: ])(transform)/g,b=/,\r+?/g,S=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,z=/::(place)/g,P=/:(read-only)/g,I=/[svh]\w+-[tblr]{2}/,re=/\(\s*(.*)\s*\)/g,oe=/([\s\S]*?);/g,U=/-self|flex-/g,q=/[^]*?(:[rp][el]a[\w-]+)[^]*/,ne=/stretch|:\s*\w+\-(?:conte|avail)/,ce=/([^-])(image-set\()/,H=1,Z=1,ee=0,Y=1,ge=[],X=[],V=0,pe=null,le=0,de="";return T.use=v,T.set=m,r!==void 0&&m(r),T}var rr={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function te(){return(te=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a])}return r}).apply(this,arguments)}var Je=function(r,e){for(var t=[r[0]],a=0,n=e.length;a<n;a+=1)t.push(e[a],r[a+1]);return t},Ie=function(r){return r!==null&&typeof r=="object"&&(r.toString?r.toString():Object.prototype.toString.call(r))==="[object Object]"&&!Dt.typeOf(r)},Ce=Object.freeze([]),ie=Object.freeze({});function we(r){return typeof r=="function"}function qe(r){return r.displayName||r.name||"Component"}function Be(r){return r&&typeof r.styledComponentId=="string"}var he=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Le=typeof window<"u"&&"HTMLElement"in window,nr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function _e(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];throw new Error("An error occurred. See https://git.io/JUIaE#"+r+" for more information."+(t.length>0?" Args: "+t.join(", "):""))}var ar=function(){function r(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var e=r.prototype;return e.indexOfGroup=function(t){for(var a=0,n=0;n<t;n++)a+=this.groupSizes[n];return a},e.insertRules=function(t,a){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,s=o;t>=s;)(s<<=1)<0&&_e(16,""+t);this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var f=o;f<s;f++)this.groupSizes[f]=0}for(var v=this.indexOfGroup(t+1),m=0,T=a.length;m<T;m++)this.tag.insertRule(v,a[m])&&(this.groupSizes[t]++,v++)},e.clearGroup=function(t){if(t<this.length){var a=this.groupSizes[t],n=this.indexOfGroup(t),o=n+a;this.groupSizes[t]=0;for(var s=n;s<o;s++)this.tag.deleteRule(n)}},e.getGroup=function(t){var a="";if(t>=this.length||this.groupSizes[t]===0)return a;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n,f=o;f<s;f++)a+=this.tag.getRule(f)+`/*!sc*/
`;return a},r}(),Ae=new Map,Te=new Map,ye=1,Oe=function(r){if(Ae.has(r))return Ae.get(r);for(;Te.has(ye);)ye++;var e=ye++;return Ae.set(r,e),Te.set(e,r),e},ir=function(r){return Te.get(r)},sr=function(r,e){e>=ye&&(ye=e+1),Ae.set(r,e),Te.set(e,r)},or="style["+he+'][data-styled-version="5.3.11"]',cr=new RegExp("^"+he+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),lr=function(r,e,t){for(var a,n=t.split(","),o=0,s=n.length;o<s;o++)(a=n[o])&&r.registerName(e,a)},ur=function(r,e){for(var t=(e.textContent||"").split(`/*!sc*/
`),a=[],n=0,o=t.length;n<o;n++){var s=t[n].trim();if(s){var f=s.match(cr);if(f){var v=0|parseInt(f[1],10),m=f[2];v!==0&&(sr(m,v),lr(r,m,f[3]),r.getTag().insertRules(v,a)),a.length=0}else a.push(s)}}},hr=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Gt=function(r){var e=document.head,t=r||e,a=document.createElement("style"),n=function(f){for(var v=f.childNodes,m=v.length;m>=0;m--){var T=v[m];if(T&&T.nodeType===1&&T.hasAttribute(he))return T}}(t),o=n!==void 0?n.nextSibling:null;a.setAttribute(he,"active"),a.setAttribute("data-styled-version","5.3.11");var s=hr();return s&&a.setAttribute("nonce",s),t.insertBefore(a,o),a},fr=function(){function r(t){var a=this.element=Gt(t);a.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var o=document.styleSheets,s=0,f=o.length;s<f;s++){var v=o[s];if(v.ownerNode===n)return v}_e(17)}(a),this.length=0}var e=r.prototype;return e.insertRule=function(t,a){try{return this.sheet.insertRule(a,t),this.length++,!0}catch{return!1}},e.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.getRule=function(t){var a=this.sheet.cssRules[t];return a!==void 0&&typeof a.cssText=="string"?a.cssText:""},r}(),gr=function(){function r(t){var a=this.element=Gt(t);this.nodes=a.childNodes,this.length=0}var e=r.prototype;return e.insertRule=function(t,a){if(t<=this.length&&t>=0){var n=document.createTextNode(a),o=this.nodes[t];return this.element.insertBefore(n,o||null),this.length++,!0}return!1},e.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},r}(),pr=function(){function r(t){this.rules=[],this.length=0}var e=r.prototype;return e.insertRule=function(t,a){return t<=this.length&&(this.rules.splice(t,0,a),this.length++,!0)},e.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.getRule=function(t){return t<this.length?this.rules[t]:""},r}(),et=Le,dr={isServer:!Le,useCSSOMInjection:!nr},Bt=function(){function r(t,a,n){t===void 0&&(t=ie),a===void 0&&(a={}),this.options=te({},dr,{},t),this.gs=a,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Le&&et&&(et=!1,function(o){for(var s=document.querySelectorAll(or),f=0,v=s.length;f<v;f++){var m=s[f];m&&m.getAttribute(he)!=="active"&&(ur(o,m),m.parentNode&&m.parentNode.removeChild(m))}}(this))}r.registerId=function(t){return Oe(t)};var e=r.prototype;return e.reconstructWithOptions=function(t,a){return a===void 0&&(a=!0),new r(te({},this.options,{},t),this.gs,a&&this.names||void 0)},e.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.getTag=function(){return this.tag||(this.tag=(n=(a=this.options).isServer,o=a.useCSSOMInjection,s=a.target,t=n?new pr(s):o?new fr(s):new gr(s),new ar(t)));var t,a,n,o,s},e.hasNameForId=function(t,a){return this.names.has(t)&&this.names.get(t).has(a)},e.registerName=function(t,a){if(Oe(t),this.names.has(t))this.names.get(t).add(a);else{var n=new Set;n.add(a),this.names.set(t,n)}},e.insertRules=function(t,a,n){this.registerName(t,a),this.getTag().insertRules(Oe(t),n)},e.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.clearRules=function(t){this.getTag().clearGroup(Oe(t)),this.clearNames(t)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(t){for(var a=t.getTag(),n=a.length,o="",s=0;s<n;s++){var f=ir(s);if(f!==void 0){var v=t.names.get(f),m=a.getGroup(s);if(v&&m&&v.size){var T=he+".g"+s+'[id="'+f+'"]',k="";v!==void 0&&v.forEach(function($){$.length>0&&(k+=$+",")}),o+=""+m+T+'{content:"'+k+`"}/*!sc*/
`}}}return o}(this)},r}(),mr=/(a)(d)/gi,tt=function(r){return String.fromCharCode(r+(r>25?39:97))};function Re(r){var e,t="";for(e=Math.abs(r);e>52;e=e/52|0)t=tt(e%52)+t;return(tt(e%52)+t).replace(mr,"$1-$2")}var ue=function(r,e){for(var t=e.length;t;)r=33*r^e.charCodeAt(--t);return r},Lt=function(r){return ue(5381,r)};function br(r){for(var e=0;e<r.length;e+=1){var t=r[e];if(we(t)&&!Be(t))return!1}return!0}var vr=Lt("5.3.11"),yr=function(){function r(e,t,a){this.rules=e,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&br(e),this.componentId=t,this.baseHash=ue(vr,t),this.baseStyle=a,Bt.registerId(t)}return r.prototype.generateAndInjectStyles=function(e,t,a){var n=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,a)),this.isStatic&&!a.hash)if(this.staticRulesId&&t.hasNameForId(n,this.staticRulesId))o.push(this.staticRulesId);else{var s=fe(this.rules,e,t,a).join(""),f=Re(ue(this.baseHash,s)>>>0);if(!t.hasNameForId(n,f)){var v=a(s,"."+f,void 0,n);t.insertRules(n,f,v)}o.push(f),this.staticRulesId=f}else{for(var m=this.rules.length,T=ue(this.baseHash,a.hash),k="",$=0;$<m;$++){var L=this.rules[$];if(typeof L=="string")k+=L;else if(L){var _=fe(L,e,t,a),x=Array.isArray(_)?_.join(""):_;T=ue(T,x+$),k+=x}}if(k){var b=Re(T>>>0);if(!t.hasNameForId(n,b)){var S=a(k,"."+b,void 0,n);t.insertRules(n,b,S)}o.push(b)}}return o.join(" ")},r}(),wr=/^\s*\/\/.*$/gm,_r=[":","[",".","#"];function kr(r){var e,t,a,n,o=r===void 0?ie:r,s=o.options,f=s===void 0?ie:s,v=o.plugins,m=v===void 0?Ce:v,T=new tr(f),k=[],$=function(x){function b(S){if(S)try{x(S+"}")}catch{}}return function(S,y,z,P,I,re,oe,U,q,ne){switch(S){case 1:if(q===0&&y.charCodeAt(0)===64)return x(y+";"),"";break;case 2:if(U===0)return y+"/*|*/";break;case 3:switch(U){case 102:case 112:return x(z[0]+y),"";default:return y+(ne===0?"/*|*/":"")}case-2:y.split("/*|*/}").forEach(b)}}}(function(x){k.push(x)}),L=function(x,b,S){return b===0&&_r.indexOf(S[t.length])!==-1||S.match(n)?x:"."+e};function _(x,b,S,y){y===void 0&&(y="&");var z=x.replace(wr,""),P=b&&S?S+" "+b+" { "+z+" }":z;return e=y,t=b,a=new RegExp("\\"+t+"\\b","g"),n=new RegExp("(\\"+t+"\\b){2,}"),T(S||!b?"":b,P)}return T.use([].concat(m,[function(x,b,S){x===2&&S.length&&S[0].lastIndexOf(t)>0&&(S[0]=S[0].replace(a,L))},$,function(x){if(x===-2){var b=k;return k=[],b}}])),_.hash=m.length?m.reduce(function(x,b){return b.name||_e(15),ue(x,b.name)},5381).toString():"",_}var Mt=N.createContext();Mt.Consumer;var Ft=N.createContext(),xr=(Ft.Consumer,new Bt),Ne=kr();function Or(){return se.useContext(Mt)||xr}function jr(){return se.useContext(Ft)||Ne}var Yt=function(){function r(e,t){var a=this;this.inject=function(n,o){o===void 0&&(o=Ne);var s=a.name+o.hash;n.hasNameForId(a.id,s)||n.insertRules(a.id,s,o(a.rules,s,"@keyframes"))},this.toString=function(){return _e(12,String(a.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return r.prototype.getName=function(e){return e===void 0&&(e=Ne),this.name+e.hash},r}(),Ar=/([A-Z])/,Cr=/([A-Z])/g,Tr=/^ms-/,Sr=function(r){return"-"+r.toLowerCase()};function rt(r){return Ar.test(r)?r.replace(Cr,Sr).replace(Tr,"-ms-"):r}var nt=function(r){return r==null||r===!1||r===""};function fe(r,e,t,a){if(Array.isArray(r)){for(var n,o=[],s=0,f=r.length;s<f;s+=1)(n=fe(r[s],e,t,a))!==""&&(Array.isArray(n)?o.push.apply(o,n):o.push(n));return o}if(nt(r))return"";if(Be(r))return"."+r.styledComponentId;if(we(r)){if(typeof(m=r)!="function"||m.prototype&&m.prototype.isReactComponent||!e)return r;var v=r(e);return fe(v,e,t,a)}var m;return r instanceof Yt?t?(r.inject(t,a),r.getName(a)):r:Ie(r)?function T(k,$){var L,_,x=[];for(var b in k)k.hasOwnProperty(b)&&!nt(k[b])&&(Array.isArray(k[b])&&k[b].isCss||we(k[b])?x.push(rt(b)+":",k[b],";"):Ie(k[b])?x.push.apply(x,T(k[b],b)):x.push(rt(b)+": "+(L=b,(_=k[b])==null||typeof _=="boolean"||_===""?"":typeof _!="number"||_===0||L in rr||L.startsWith("--")?String(_).trim():_+"px")+";"));return $?[$+" {"].concat(x,["}"]):x}(r):r.toString()}var at=function(r){return Array.isArray(r)&&(r.isCss=!0),r};function Wt(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];return we(r)||Ie(r)?at(fe(Je(Ce,[r].concat(t)))):t.length===0&&r.length===1&&typeof r[0]=="string"?r:at(fe(Je(r,t)))}var Pr=function(r,e,t){return t===void 0&&(t=ie),r.theme!==t.theme&&r.theme||e||t.theme},Er=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$r=/(^-|-$)/g;function Ee(r){return r.replace(Er,"-").replace($r,"")}var Ht=function(r){return Re(Lt(r)>>>0)};function je(r){return typeof r=="string"&&!0}var ze=function(r){return typeof r=="function"||typeof r=="object"&&r!==null&&!Array.isArray(r)},Ir=function(r){return r!=="__proto__"&&r!=="constructor"&&r!=="prototype"};function Rr(r,e,t){var a=r[t];ze(e)&&ze(a)?Ut(a,e):r[t]=e}function Ut(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];for(var n=0,o=t;n<o.length;n++){var s=o[n];if(ze(s))for(var f in s)Ir(f)&&Rr(r,s[f],f)}return r}var Vt=N.createContext();Vt.Consumer;var $e={};function Zt(r,e,t){var a=Be(r),n=!je(r),o=e.attrs,s=o===void 0?Ce:o,f=e.componentId,v=f===void 0?function(y,z){var P=typeof y!="string"?"sc":Ee(y);$e[P]=($e[P]||0)+1;var I=P+"-"+Ht("5.3.11"+P+$e[P]);return z?z+"-"+I:I}(e.displayName,e.parentComponentId):f,m=e.displayName,T=m===void 0?function(y){return je(y)?"styled."+y:"Styled("+qe(y)+")"}(r):m,k=e.displayName&&e.componentId?Ee(e.displayName)+"-"+e.componentId:e.componentId||v,$=a&&r.attrs?Array.prototype.concat(r.attrs,s).filter(Boolean):s,L=e.shouldForwardProp;a&&r.shouldForwardProp&&(L=e.shouldForwardProp?function(y,z,P){return r.shouldForwardProp(y,z,P)&&e.shouldForwardProp(y,z,P)}:r.shouldForwardProp);var _,x=new yr(t,k,a?r.componentStyle:void 0),b=x.isStatic&&s.length===0,S=function(y,z){return function(P,I,re,oe){var U=P.attrs,q=P.componentStyle,ne=P.defaultProps,ce=P.foldedComponentIds,H=P.shouldForwardProp,Z=P.styledComponentId,ee=P.target,Y=function(p,i,O){p===void 0&&(p=ie);var c=te({},i,{theme:p}),E={};return O.forEach(function(j){var C,d,D,W=j;for(C in we(W)&&(W=W(c)),W)c[C]=E[C]=C==="className"?(d=E[C],D=W[C],d&&D?d+" "+D:d||D):W[C]}),[c,E]}(Pr(I,se.useContext(Vt),ne)||ie,I,U),ge=Y[0],X=Y[1],V=function(p,i,O,c){var E=Or(),j=jr(),C=i?p.generateAndInjectStyles(ie,E,j):p.generateAndInjectStyles(O,E,j);return C}(q,oe,ge),pe=re,le=X.$as||I.$as||X.as||I.as||ee,de=je(le),h=X!==I?te({},I,{},X):I,l={};for(var u in h)u[0]!=="$"&&u!=="as"&&(u==="forwardedAs"?l.as=h[u]:(H?H(u,We,le):!de||We(u))&&(l[u]=h[u]));return I.style&&X.style!==I.style&&(l.style=te({},I.style,{},X.style)),l.className=Array.prototype.concat(ce,Z,V!==Z?V:null,I.className,X.className).filter(Boolean).join(" "),l.ref=pe,se.createElement(le,l)}(_,y,z,b)};return S.displayName=T,(_=N.forwardRef(S)).attrs=$,_.componentStyle=x,_.displayName=T,_.shouldForwardProp=L,_.foldedComponentIds=a?Array.prototype.concat(r.foldedComponentIds,r.styledComponentId):Ce,_.styledComponentId=k,_.target=a?r.target:r,_.withComponent=function(y){var z=e.componentId,P=function(re,oe){if(re==null)return{};var U,q,ne={},ce=Object.keys(re);for(q=0;q<ce.length;q++)U=ce[q],oe.indexOf(U)>=0||(ne[U]=re[U]);return ne}(e,["componentId"]),I=z&&z+"-"+(je(y)?y:Ee(qe(y)));return Zt(y,te({},P,{attrs:$,componentId:I}),t)},Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=a?Ut({},r.defaultProps,y):y}}),Object.defineProperty(_,"toString",{value:function(){return"."+_.styledComponentId}}),n&&Qt(_,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),_}var De=function(r){return function e(t,a,n){if(n===void 0&&(n=ie),!Dt.isValidElementType(a))return _e(1,String(a));var o=function(){return t(a,n,Wt.apply(void 0,arguments))};return o.withConfig=function(s){return e(t,a,te({},n,{},s))},o.attrs=function(s){return e(t,a,te({},n,{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)}))},o}(Zt,r)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(r){De[r]=De(r)});function Me(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];var n=Wt.apply(void 0,[r].concat(t)).join(""),o=Ht(n);return new Yt(o,n)}const ke=De;var Xt=globalThis&&globalThis.__makeTemplateObject||function(r,e){return Object.defineProperty?Object.defineProperty(r,"raw",{value:e}):r.raw=e,r},K=242.776657104492,Nr=1.6,zr=Me(it||(it=Xt([`
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
`])),K*.14,K,K*.11,K*.35,K,K*.35,K*.01,K,K*.99);ke.path(st||(st=Xt([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),K*.01,K,zr,Nr);var it,st,ot=globalThis&&globalThis.__assign||function(){return ot=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},ot.apply(this,arguments)},ct=globalThis&&globalThis.__assign||function(){return ct=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},ct.apply(this,arguments)},lt=globalThis&&globalThis.__assign||function(){return lt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},lt.apply(this,arguments)},ut=globalThis&&globalThis.__assign||function(){return ut=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},ut.apply(this,arguments)},ht=globalThis&&globalThis.__assign||function(){return ht=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},ht.apply(this,arguments)},ft=globalThis&&globalThis.__assign||function(){return ft=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},ft.apply(this,arguments)},gt=globalThis&&globalThis.__assign||function(){return gt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},gt.apply(this,arguments)},Dr=function(e,t){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof a[e]<"u")return a[e];if(e&&e.indexOf(".")>0){for(var n=e.split("."),o=n.length,s=a[n[0]],f=1;s!=null&&f<o;)s=s[n[f]],f+=1;if(typeof s<"u")return s}return t}},Fe=globalThis&&globalThis.__makeTemplateObject||function(r,e){return Object.defineProperty?Object.defineProperty(r,"raw",{value:e}):r.raw=e,r},pt=globalThis&&globalThis.__assign||function(){return pt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},pt.apply(this,arguments)},Gr=Me(dt||(dt=Fe([`
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
`])),Gr,Dr("speed","0.75"));ke.polyline(bt||(bt=Fe([`
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
`])),function(r){return r.width});var dt,mt,bt,vt=globalThis&&globalThis.__assign||function(){return vt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},vt.apply(this,arguments)},yt=globalThis&&globalThis.__assign||function(){return yt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},yt.apply(this,arguments)},wt=globalThis&&globalThis.__assign||function(){return wt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},wt.apply(this,arguments)},Ye=globalThis&&globalThis.__makeTemplateObject||function(r,e){return Object.defineProperty?Object.defineProperty(r,"raw",{value:e}):r.raw=e,r},_t=globalThis&&globalThis.__assign||function(){return _t=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},_t.apply(this,arguments)},Br=Me(kt||(kt=Ye([`
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
`])),Br);ke.svg(Ot||(Ot=Ye([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var kt,xt,Ot,jt=globalThis&&globalThis.__assign||function(){return jt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},jt.apply(this,arguments)},At=globalThis&&globalThis.__assign||function(){return At=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},At.apply(this,arguments)},Ct=globalThis&&globalThis.__assign||function(){return Ct=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Ct.apply(this,arguments)},Tt=globalThis&&globalThis.__assign||function(){return Tt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Tt.apply(this,arguments)},St=globalThis&&globalThis.__assign||function(){return St=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},St.apply(this,arguments)},Pt=globalThis&&globalThis.__assign||function(){return Pt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Pt.apply(this,arguments)},Et=globalThis&&globalThis.__assign||function(){return Et=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Et.apply(this,arguments)},$t=globalThis&&globalThis.__assign||function(){return $t=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},$t.apply(this,arguments)},It=globalThis&&globalThis.__assign||function(){return It=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},It.apply(this,arguments)},Rt=globalThis&&globalThis.__assign||function(){return Rt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Rt.apply(this,arguments)},Nt=globalThis&&globalThis.__assign||function(){return Nt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Nt.apply(this,arguments)},zt=globalThis&&globalThis.__assign||function(){return zt=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},zt.apply(this,arguments)},Ge=globalThis&&globalThis.__assign||function(){return Ge=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Ge.apply(this,arguments)};function Lr(r){var e=r.visible,t=e===void 0?!0:e,a=r.width,n=a===void 0?"80":a,o=r.height,s=o===void 0?"80":o,f=r.wrapperClass,v=f===void 0?"":f,m=r.wrapperStyle,T=m===void 0?{}:m,k=r.ariaLabel,$=k===void 0?"blocks-loading":k;return t?N.createElement("svg",Ge({width:n,height:s,className:v,style:T,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid","aria-label":$,"data-testid":"blocks-svg"},er),N.createElement("rect",{x:"17",y:"17",width:"20",height:"20",fill:"#577c9b"},N.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0s",calcMode:"discrete"})),N.createElement("rect",{x:"40",y:"17",width:"20",height:"20",fill:"#577c9b"},N.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.125s",calcMode:"discrete"})),N.createElement("rect",{x:"63",y:"17",width:"20",height:"20",fill:"#577c9b"},N.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.25s",calcMode:"discrete"})),N.createElement("rect",{x:"17",y:"40",width:"20",height:"20",fill:"#577c9b"},N.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.875s",calcMode:"discrete"})),N.createElement("rect",{x:"63",y:"40",width:"20",height:"20",fill:"#577c9b"},N.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.375s",calcMode:"discrete"})),N.createElement("rect",{x:"17",y:"63",width:"20",height:"20",fill:"#577c9b"},N.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.75s",calcMode:"discrete"})),N.createElement("rect",{x:"40",y:"63",width:"20",height:"20",fill:"#577c9b"},N.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.625s",calcMode:"discrete"})),N.createElement("rect",{x:"63",y:"63",width:"20",height:"20",fill:"#577c9b"},N.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.5s",calcMode:"discrete"}))):null}const Mr=J.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  margin-left: 25%;
`,Fr=()=>F.jsx(Mr,{children:F.jsx(Lr,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper"})}),Yr=J.div`
  display: flex;
  gap: 32px;
  justify-content: flex-start;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 28px;
`,Wr=J.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 18px;
`,Hr=J.h2`
  margin-bottom: 18px;
`,Ur=J.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 28px;

  height: 680px;
  overflow: auto;
`,Vr=J.li`
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 28px;
  display: flex;
`,Zr=J.img`
  width: 330px;
  height: 220px;
  object-fit: cover;
  border-radius: 15px;
`,Xr=J.p`
  font-size: 28px;
  margin-top: 12px;
  margin-right: auto;
`,Qr=J.button`
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
`,Kr=J.p`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 10px;
  text-align: center;
`,en=()=>{const[r,e]=se.useState([]),[t,a]=se.useState("stoped");function n(o){switch(a("pending"),o){case"mcduck":ve("mcduck").then(s=>{a("resolved"),e(s)});break;case"theshaurma":ve("theshaurma").then(s=>{a("resolved"),e(s)});break;case"elari":ve("elari").then(s=>{a("resolved"),e(s)});break;case"faina":ve("faina").then(s=>{a("resolved"),e(s)});break;case"sushiabw":ve("sushiabw").then(s=>{a("resolved"),e(s)});break;default:return}}return F.jsxs(Yr,{children:[F.jsxs(Wr,{children:[F.jsx(Hr,{children:"Shops:"}),F.jsx(qt,{loadGoods:n})]}),t==="pending"?F.jsx(Fr,{}):F.jsx(Ur,{children:r.length?r==null?void 0:r.map(o=>F.jsxs(Vr,{children:[F.jsx(Zr,{src:o.image,alt:o.titel}),F.jsx(Xr,{children:o.titel}),F.jsx(Qr,{type:"button",onClick:()=>Kt(o),children:"Add to Cart"})]},o._id)):F.jsx(Kr,{children:"Welcome! Choose a store to order delicious food."})})]})};export{en as default};
