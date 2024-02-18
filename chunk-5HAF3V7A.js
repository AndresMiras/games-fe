import{$ as b1,Aa as L2,Ba as l2,Ha as P1,Ia as T1,K as W2,L as L1,Ma as F1,R as f2,S as g1,T as x1,U as C2,_ as q2,aa as N1,ba as d2,c as n2,ca as w,da as T,la as S1,ma as w1,na as B,oa as C,pa as d,qa as D,ra as k1,ta as R,ua as y1,va as A1,wa as G2,xa as j2,ya as X2,za as _}from"./chunk-ODTUT322.js";var g2=class{constructor(a,i,e="transparent",r="white",s=20,n=1){this._x=0,this._y=0,this._size=20,this._x=a,this._y=i,this._fillColor=e,this._borderColor=r,this._borderWidth=n,this._size=s}draw(a){a.fillStyle=this._borderColor,a.fillRect(this._x,this._y,this._size,this._size),a.fillStyle="rgba(255, 255, 255,0.5)";let i=this._size-this._borderWidth*2;a.fillRect(this._x+this._borderWidth,this._y+this._borderWidth,i,i),a.fillStyle=this._fillColor,i=this._size-this._borderWidth*4,a.fillRect(this._x+this._borderWidth*2,this._y+this._borderWidth*2,i,i)}},q=class c{constructor(a,i){this._toDraw=!1,this._matrix=a,this._index=i}forEachCells(a){this._matrix.forEach((i,e)=>{this._matrix[e].forEach((r,s)=>{a(this._matrix[e][s],e,s)})})}everyCells(a){return this._matrix.every((i,e)=>this._matrix[e].every((r,s)=>a(this._matrix[e][s],e,s)))}someCells(a){return this._matrix.some((i,e)=>this._matrix[e].some((r,s)=>a(this._matrix[e][s],e,s)))}mapCells(a){this.forEachCells((i,e,r)=>{this._matrix[e][r]=a(i,e,r)})}setColor(a){this.mapCells(i=>(i.color=a,i))}markFigureToDraw(){this.mapCells(a=>(a.y>=0&&(a.drawed=!0),a))}getIsFigureReadyToMatrix(){return this.forEachCells(a=>a.drawed)}markAllCellsToDraw(){this.mapCells(a=>(a.drawed=!0,a))}removeFigureInMatrix(a,i=0,e=0){this.forEachCells(r=>{if(r.y>=0){let{x:s,y:n,active:f}=r;f&&(a[s+i][n+e].color=void 0,a[s+i][n+e].drawed=!1)}})}downOneLevel(){this.mapCells(a=>(a.y++,a))}bothFiguresHaveSameActiveColumns(a){return a.everyCells((i,e,r)=>{let s=this._matrix[e][r];return s.x==i.x&&s.active==i.active})}checkIfCanMove(a,i){return this.everyCells(e=>{let r=e.x+a,s=r>=0&&r<i.length&&e.y>=0,n=!!i[r]&&i[r][e.y]?.drawed;return s&&!n})}hasSpaceInColumn(a,i){return this._matrix.every(e=>{let r=e[i];return r&&!r.active&&!a[r.x][r.y]?.drawed})}goRight(a){if(a&&this.hasSpaceInColumn(a,this._matrix.length-1)){let i=JSON.parse(JSON.stringify(this._matrix));i.forEach(e=>e.forEach(r=>(r.active=!1,r))),this.forEachCells((e,r,s)=>{e.active&&(i[r][s+1].active=!0)}),this._matrix=i}else this.checkIfCanMove(1,a)&&this.mapCells(i=>(i.x++,i))}goLeft(a){if(this.hasSpaceInColumn(a,0)){let i=JSON.parse(JSON.stringify(this._matrix));i.forEach(e=>e.forEach(r=>(r.active=!1,r))),this.forEachCells((e,r,s)=>{e.active&&(i[r][s-1].active=!0)}),this._matrix=i}else this.checkIfCanMove(-1,a)&&this.mapCells(i=>(i.x--,i))}canDrawInMatrix(a){return!this.someCells(i=>(a[i.x][i.y]?.drawed||i.y==a[0].length)&&i.active)}cloneCells(){return JSON.parse(JSON.stringify(this._matrix))}rotate90(){let a=this._matrix.length,i=JSON.parse(JSON.stringify(this._matrix));i.forEach(e=>e.forEach(r=>(r.active=!1,r))),this.forEachCells((e,r,s)=>{i[a-1-r][s].active=e.active}),this._matrix=i}rotate45(a){let i=this._matrix.length,e=JSON.parse(JSON.stringify(this._matrix));e.forEach(s=>s.forEach(n=>(n.active=!1,n)));let r=!0;for(let s=0;s<i;s++)for(let n=0;n<i;n++){let f=this._matrix[i-n-1][s].active;if(f){let{x:l,y:t}=e[s][n];if(e[s][n].active=f,a[l][t]?.drawed){r=!1;break}}}r&&(this._matrix=e)}static getRandomFigure(){let a=[new c([[{x:0,y:0,active:!0},{x:1,y:0},{x:2,y:0}],[{x:0,y:1,active:!0},{x:1,y:1},{x:2,y:1}],[{x:0,y:2,active:!0},{x:1,y:2,active:!0},{x:2,y:2}]],0),new c([[{x:0,y:0},{x:1,y:0,active:!0},{x:2,y:0}],[{x:0,y:1},{x:1,y:1,active:!0},{x:2,y:1}],[{x:0,y:2,active:!0},{x:1,y:2,active:!0},{x:2,y:2}]],1),new c([[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0}],[{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:3,y:1}],[{x:0,y:2,active:!0},{x:1,y:2,active:!0},{x:2,y:2,active:!0},{x:3,y:2,active:!0}],[{x:0,y:3},{x:1,y:3},{x:2,y:3},{x:3,y:3}]],2),new c([[{x:0,y:0},{x:1,y:0},{x:2,y:0}],[{x:0,y:1},{x:1,y:1,active:!0},{x:2,y:1}],[{x:0,y:2,active:!0},{x:1,y:2,active:!0},{x:2,y:2,active:!0}]],3),new c([[{x:0,y:0,active:!0},{x:1,y:0,active:!0}],[{x:0,y:1,active:!0},{x:1,y:1,active:!0}]],4)],i=Math.floor(Math.random()*a.length),e=a[i];return i==0?e.setColor("rgb(139, 50, 168)"):i==1?e.setColor("rgb(1, 105, 58)"):i==2?e.setColor("rgb(50, 85, 168)"):i==3?e.setColor("rgb(131, 121, 242)"):e.setColor("rgb(179, 43, 43)"),e.mapCells(r=>(r.active||(r.active=!1),r)),e}};var B1={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]};var D1={prefix:"fas",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]};var j3={prefix:"fas",iconName:"circle-pause",icon:[512,512,[62092,"pause-circle"],"f28b","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z"]},R1=j3;var _1={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"]};var E1={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]};var O1={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]};var U1={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};function I1(c,a){var i=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),i.push.apply(i,e)}return i}function m(c){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?I1(Object(i),!0).forEach(function(e){u(c,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(i)):I1(Object(i)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(i,e))})}return c}function B2(c){"@babel/helpers - typeof";return B2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},B2(c)}function X3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function W1(c,a){for(var i=0;i<a.length;i++){var e=a[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function Y3(c,a,i){return a&&W1(c.prototype,a),i&&W1(c,i),Object.defineProperty(c,"prototype",{writable:!1}),c}function u(c,a,i){return a in c?Object.defineProperty(c,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):c[a]=i,c}function o1(c,a){return Q3(c)||J3(c,a)||z3(c,a)||c4()}function M2(c){return $3(c)||K3(c)||z3(c)||Z3()}function $3(c){if(Array.isArray(c))return J2(c)}function Q3(c){if(Array.isArray(c))return c}function K3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function J3(c,a){var i=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(i!=null){var e=[],r=!0,s=!1,n,f;try{for(i=i.call(c);!(r=(n=i.next()).done)&&(e.push(n.value),!(a&&e.length===a));r=!0);}catch(l){s=!0,f=l}finally{try{!r&&i.return!=null&&i.return()}finally{if(s)throw f}}return e}}function z3(c,a){if(c){if(typeof c=="string")return J2(c,a);var i=Object.prototype.toString.call(c).slice(8,-1);if(i==="Object"&&c.constructor&&(i=c.constructor.name),i==="Map"||i==="Set")return Array.from(c);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return J2(c,a)}}function J2(c,a){(a==null||a>c.length)&&(a=c.length);for(var i=0,e=new Array(a);i<a;i++)e[i]=c[i];return e}function Z3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var q1=function(){},t1={},h3={},V3=null,M3={mark:q1,measure:q1};try{typeof window<"u"&&(t1=window),typeof document<"u"&&(h3=document),typeof MutationObserver<"u"&&(V3=MutationObserver),typeof performance<"u"&&(M3=performance)}catch{}var a4=t1.navigator||{},G1=a4.userAgent,j1=G1===void 0?"":G1,j=t1,M=h3,X1=V3,x2=M3,W6=!!j.document,I=!!M.documentElement&&!!M.head&&typeof M.addEventListener=="function"&&typeof M.createElement=="function",p3=~j1.indexOf("MSIE")||~j1.indexOf("Trident/"),b2,N2,S2,w2,k2,E="___FONT_AWESOME___",Z2=16,u3="fa",C3="svg-inline--fa",Z="data-fa-i2svg",c1="data-fa-pseudo-element",e4="data-fa-pseudo-element-pending",m1="data-prefix",H1="data-icon",Y1="fontawesome-i2svg",r4="async",i4=["HTML","HEAD","STYLE","SCRIPT"],d3=function(){try{return!0}catch{return!1}}(),V="classic",p="sharp",v1=[V,p];function p2(c){return new Proxy(c,{get:function(i,e){return e in i?i[e]:i[V]}})}var H2=p2((b2={},u(b2,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),u(b2,p,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),b2)),v2=p2((N2={},u(N2,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),u(N2,p,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),N2)),z2=p2((S2={},u(S2,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),u(S2,p,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),S2)),s4=p2((w2={},u(w2,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),u(w2,p,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),w2)),n4=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,L3="fa-layers-text",f4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,l4=p2((k2={},u(k2,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),u(k2,p,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),k2)),g3=[1,2,3,4,5,6,7,8,9,10],o4=g3.concat([11,12,13,14,15,16,17,18,19,20]),t4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],K={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},h2=new Set;Object.keys(v2[V]).map(h2.add.bind(h2));Object.keys(v2[p]).map(h2.add.bind(h2));var m4=[].concat(v1,M2(h2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",K.GROUP,K.SWAP_OPACITY,K.PRIMARY,K.SECONDARY]).concat(g3.map(function(c){return"".concat(c,"x")})).concat(o4.map(function(c){return"w-".concat(c)})),t2=j.FontAwesomeConfig||{};function H4(c){var a=M.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function v4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}M&&typeof M.querySelector=="function"&&($1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],$1.forEach(function(c){var a=o1(c,2),i=a[0],e=a[1],r=v4(H4(i));r!=null&&(t2[e]=r)}));var $1,x3={styleDefault:"solid",familyDefault:"classic",cssPrefix:u3,replacementClass:C3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};t2.familyPrefix&&(t2.cssPrefix=t2.familyPrefix);var i2=m(m({},x3),t2);i2.autoReplaceSvg||(i2.observeMutations=!1);var H={};Object.keys(x3).forEach(function(c){Object.defineProperty(H,c,{enumerable:!0,set:function(i){i2[c]=i,m2.forEach(function(e){return e(H)})},get:function(){return i2[c]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(a){i2.cssPrefix=a,m2.forEach(function(i){return i(H)})},get:function(){return i2.cssPrefix}});j.FontAwesomeConfig=H;var m2=[];function z4(c){return m2.push(c),function(){m2.splice(m2.indexOf(c),1)}}var G=Z2,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function h4(c){if(!(!c||!I)){var a=M.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var i=M.head.childNodes,e=null,r=i.length-1;r>-1;r--){var s=i[r],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=s)}return M.head.insertBefore(a,e),c}}var V4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function V2(){for(var c=12,a="";c-- >0;)a+=V4[Math.random()*62|0];return a}function s2(c){for(var a=[],i=(c||[]).length>>>0;i--;)a[i]=c[i];return a}function z1(c){return c.classList?s2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function b3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function M4(c){return Object.keys(c||{}).reduce(function(a,i){return a+"".concat(i,'="').concat(b3(c[i]),'" ')},"").trim()}function _2(c){return Object.keys(c||{}).reduce(function(a,i){return a+"".concat(i,": ").concat(c[i].trim(),";")},"")}function h1(c){return c.size!==F.size||c.x!==F.x||c.y!==F.y||c.rotate!==F.rotate||c.flipX||c.flipY}function p4(c){var a=c.transform,i=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(s," ").concat(n," ").concat(f)},t={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:l,path:t}}function u4(c){var a=c.transform,i=c.width,e=i===void 0?Z2:i,r=c.height,s=r===void 0?Z2:r,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&p3?l+="translate(".concat(a.x/G-e/2,"em, ").concat(a.y/G-s/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/G,"em), calc(-50% + ").concat(a.y/G,"em)) "):l+="translate(".concat(a.x/G,"em, ").concat(a.y/G,"em) "),l+="scale(".concat(a.size/G*(a.flipX?-1:1),", ").concat(a.size/G*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var C4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function N3(){var c=u3,a=C3,i=H.cssPrefix,e=H.replacementClass,r=C4;if(i!==c||e!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");r=r.replace(s,".".concat(i,"-")).replace(n,"--".concat(i,"-")).replace(f,".".concat(e))}return r}var Q1=!1;function Y2(){H.autoAddCss&&!Q1&&(h4(N3()),Q1=!0)}var d4={mixout:function(){return{dom:{css:N3,insertCss:Y2}}},hooks:function(){return{beforeDOMElementCreation:function(){Y2()},beforeI2svg:function(){Y2()}}}},O=j||{};O[E]||(O[E]={});O[E].styles||(O[E].styles={});O[E].hooks||(O[E].hooks={});O[E].shims||(O[E].shims=[]);var y=O[E],S3=[],L4=function c(){M.removeEventListener("DOMContentLoaded",c),D2=1,S3.map(function(a){return a()})},D2=!1;I&&(D2=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),D2||M.addEventListener("DOMContentLoaded",L4));function g4(c){I&&(D2?setTimeout(c,0):S3.push(c))}function u2(c){var a=c.tag,i=c.attributes,e=i===void 0?{}:i,r=c.children,s=r===void 0?[]:r;return typeof c=="string"?b3(c):"<".concat(a," ").concat(M4(e),">").concat(s.map(u2).join(""),"</").concat(a,">")}function K1(c,a,i){if(c&&c[a]&&c[a][i])return{prefix:a,iconName:i,icon:c[a][i]}}var x4=function(a,i){return function(e,r,s,n){return a.call(i,e,r,s,n)}},$2=function(a,i,e,r){var s=Object.keys(a),n=s.length,f=r!==void 0?x4(i,r):i,l,t,o;for(e===void 0?(l=1,o=a[s[0]]):(l=0,o=e);l<n;l++)t=s[l],o=f(o,a[t],t,a);return o};function b4(c){for(var a=[],i=0,e=c.length;i<e;){var r=c.charCodeAt(i++);if(r>=55296&&r<=56319&&i<e){var s=c.charCodeAt(i++);(s&64512)==56320?a.push(((r&1023)<<10)+(s&1023)+65536):(a.push(r),i--)}else a.push(r)}return a}function a1(c){var a=b4(c);return a.length===1?a[0].toString(16):null}function N4(c,a){var i=c.length,e=c.charCodeAt(a),r;return e>=55296&&e<=56319&&i>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function J1(c){return Object.keys(c).reduce(function(a,i){var e=c[i],r=!!e.icon;return r?a[e.iconName]=e.icon:a[i]=e,a},{})}function e1(c,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=i.skipHooks,r=e===void 0?!1:e,s=J1(a);typeof y.hooks.addPack=="function"&&!r?y.hooks.addPack(c,J1(a)):y.styles[c]=m(m({},y.styles[c]||{}),s),c==="fas"&&e1("fa",a)}var y2,A2,P2,a2=y.styles,S4=y.shims,w4=(y2={},u(y2,V,Object.values(z2[V])),u(y2,p,Object.values(z2[p])),y2),V1=null,w3={},k3={},y3={},A3={},P3={},k4=(A2={},u(A2,V,Object.keys(H2[V])),u(A2,p,Object.keys(H2[p])),A2);function y4(c){return~m4.indexOf(c)}function A4(c,a){var i=a.split("-"),e=i[0],r=i.slice(1).join("-");return e===c&&r!==""&&!y4(r)?r:null}var T3=function(){var a=function(s){return $2(a2,function(n,f,l){return n[l]=$2(f,s,{}),n},{})};w3=a(function(r,s,n){if(s[3]&&(r[s[3]]=n),s[2]){var f=s[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){r[l.toString(16)]=n})}return r}),k3=a(function(r,s,n){if(r[n]=n,s[2]){var f=s[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){r[l]=n})}return r}),P3=a(function(r,s,n){var f=s[2];return r[n]=n,f.forEach(function(l){r[l]=n}),r});var i="far"in a2||H.autoFetchSvg,e=$2(S4,function(r,s){var n=s[0],f=s[1],l=s[2];return f==="far"&&!i&&(f="fas"),typeof n=="string"&&(r.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:f,iconName:l}),r},{names:{},unicodes:{}});y3=e.names,A3=e.unicodes,V1=E2(H.styleDefault,{family:H.familyDefault})};z4(function(c){V1=E2(c.styleDefault,{family:H.familyDefault})});T3();function M1(c,a){return(w3[c]||{})[a]}function P4(c,a){return(k3[c]||{})[a]}function J(c,a){return(P3[c]||{})[a]}function F3(c){return y3[c]||{prefix:null,iconName:null}}function T4(c){var a=A3[c],i=M1("fas",c);return a||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function X(){return V1}var p1=function(){return{prefix:null,iconName:null,rest:[]}};function E2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.family,e=i===void 0?V:i,r=H2[e][c],s=v2[e][c]||v2[e][r],n=c in y.styles?c:null;return s||n||null}var Z1=(P2={},u(P2,V,Object.keys(z2[V])),u(P2,p,Object.keys(z2[p])),P2);function O2(c){var a,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.skipLookups,r=e===void 0?!1:e,s=(a={},u(a,V,"".concat(H.cssPrefix,"-").concat(V)),u(a,p,"".concat(H.cssPrefix,"-").concat(p)),a),n=null,f=V;(c.includes(s[V])||c.some(function(t){return Z1[V].includes(t)}))&&(f=V),(c.includes(s[p])||c.some(function(t){return Z1[p].includes(t)}))&&(f=p);var l=c.reduce(function(t,o){var v=A4(H.cssPrefix,o);if(a2[o]?(o=w4[f].includes(o)?s4[f][o]:o,n=o,t.prefix=o):k4[f].indexOf(o)>-1?(n=o,t.prefix=E2(o,{family:f})):v?t.iconName=v:o!==H.replacementClass&&o!==s[V]&&o!==s[p]&&t.rest.push(o),!r&&t.prefix&&t.iconName){var z=n==="fa"?F3(t.iconName):{},h=J(t.prefix,t.iconName);z.prefix&&(n=null),t.iconName=z.iconName||h||t.iconName,t.prefix=z.prefix||t.prefix,t.prefix==="far"&&!a2.far&&a2.fas&&!H.autoFetchSvg&&(t.prefix="fas")}return t},p1());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===p&&(a2.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=J(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=X()||"fas"),l}var F4=function(){function c(){X3(this,c),this.definitions={}}return Y3(c,[{key:"add",value:function(){for(var i=this,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){i.definitions[f]=m(m({},i.definitions[f]||{}),n[f]),e1(f,n[f]);var l=z2[V][f];l&&e1(l,n[f]),T3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(s){var n=r[s],f=n.prefix,l=n.iconName,t=n.icon,o=t[2];i[f]||(i[f]={}),o.length>0&&o.forEach(function(v){typeof v=="string"&&(i[f][v]=t)}),i[f][l]=t}),i}}]),c}(),c3=[],e2={},r2={},B4=Object.keys(r2);function D4(c,a){var i=a.mixoutsTo;return c3=c,e2={},Object.keys(r2).forEach(function(e){B4.indexOf(e)===-1&&delete r2[e]}),c3.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(i[n]=r[n]),B2(r[n])==="object"&&Object.keys(r[n]).forEach(function(f){i[n]||(i[n]={}),i[n][f]=r[n][f]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(n){e2[n]||(e2[n]=[]),e2[n].push(s[n])})}e.provides&&e.provides(r2)}),i}function r1(c,a){for(var i=arguments.length,e=new Array(i>2?i-2:0),r=2;r<i;r++)e[r-2]=arguments[r];var s=e2[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(e))}),a}function c2(c){for(var a=arguments.length,i=new Array(a>1?a-1:0),e=1;e<a;e++)i[e-1]=arguments[e];var r=e2[c]||[];r.forEach(function(s){s.apply(null,i)})}function U(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return r2[c]?r2[c].apply(null,a):void 0}function i1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,i=c.prefix||X();if(a)return a=J(i,a)||a,K1(B3.definitions,i,a)||K1(y.styles,i,a)}var B3=new F4,R4=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,c2("noAuto")},_4={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I?(c2("beforeI2svg",a),U("pseudoElements2svg",a),U("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,g4(function(){O4({autoReplaceSvgRoot:i}),c2("watch",a)})}},E4={icon:function(a){if(a===null)return null;if(B2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:J(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var i=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=E2(a[0]);return{prefix:e,iconName:J(e,i)||i}}if(typeof a=="string"&&(a.indexOf("".concat(H.cssPrefix,"-"))>-1||a.match(n4))){var r=O2(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||X(),iconName:J(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var s=X();return{prefix:s,iconName:J(s,a)||a}}}},N={noAuto:R4,config:H,dom:_4,parse:E4,library:B3,findIconDefinition:i1,toHtml:u2},O4=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a.autoReplaceSvgRoot,e=i===void 0?M:i;(Object.keys(y.styles).length>0||H.autoFetchSvg)&&I&&H.autoReplaceSvg&&N.dom.i2svg({node:e})};function U2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return u2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(I){var e=M.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function U4(c){var a=c.children,i=c.main,e=c.mask,r=c.attributes,s=c.styles,n=c.transform;if(h1(n)&&i.found&&!e.found){var f=i.width,l=i.height,t={x:f/l/2,y:.5};r.style=_2(m(m({},s),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function I4(c){var a=c.prefix,i=c.iconName,e=c.children,r=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(H.cssPrefix,"-").concat(i):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:n}),children:e}]}]}function u1(c){var a=c.icons,i=a.main,e=a.mask,r=c.prefix,s=c.iconName,n=c.transform,f=c.symbol,l=c.title,t=c.maskId,o=c.titleId,v=c.extra,z=c.watchable,h=z===void 0?!1:z,g=e.found?e:i,S=g.width,k=g.height,A=r==="fak",L=[H.replacementClass,s?"".concat(H.cssPrefix,"-").concat(s):""].filter(function(W){return v.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(v.classes).join(" "),x={children:[],attributes:m(m({},v.attributes),{},{"data-prefix":r,"data-icon":s,class:L,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(k)})},P=A&&!~v.classes.indexOf("fa-fw")?{width:"".concat(S/k*16*.0625,"em")}:{};h&&(x.attributes[Z]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(o||V2())},children:[l]}),delete x.attributes.title);var b=m(m({},x),{},{prefix:r,iconName:s,main:i,mask:e,maskId:t,transform:n,symbol:f,styles:m(m({},P),v.styles)}),$=e.found&&i.found?U("generateAbstractMask",b)||{children:[],attributes:{}}:U("generateAbstractIcon",b)||{children:[],attributes:{}},Q=$.children,I2=$.attributes;return b.children=Q,b.attributes=I2,f?I4(b):U4(b)}function a3(c){var a=c.content,i=c.width,e=c.height,r=c.transform,s=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,t=m(m(m({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});l&&(t[Z]="");var o=m({},n.styles);h1(r)&&(o.transform=u4({transform:r,startCentered:!0,width:i,height:e}),o["-webkit-transform"]=o.transform);var v=_2(o);v.length>0&&(t.style=v);var z=[];return z.push({tag:"span",attributes:t,children:[a]}),s&&z.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),z}function W4(c){var a=c.content,i=c.title,e=c.extra,r=m(m(m({},e.attributes),i?{title:i}:{}),{},{class:e.classes.join(" ")}),s=_2(e.styles);s.length>0&&(r.style=s);var n=[];return n.push({tag:"span",attributes:r,children:[a]}),i&&n.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),n}var Q2=y.styles;function s1(c){var a=c[0],i=c[1],e=c.slice(4),r=o1(e,1),s=r[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(K.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(K.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(K.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:i,icon:n}}var q4={found:!1,width:512,height:512};function G4(c,a){!d3&&!H.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function n1(c,a){var i=a;return a==="fa"&&H.styleDefault!==null&&(a=X()),new Promise(function(e,r){var s={found:!1,width:512,height:512,icon:U("missingIconAbstract")||{}};if(i==="fa"){var n=F3(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&Q2[a]&&Q2[a][c]){var f=Q2[a][c];return e(s1(f))}G4(c,a),e(m(m({},q4),{},{icon:H.showMissingIcons&&c?U("missingIconAbstract")||{}:{}}))})}var e3=function(){},f1=H.measurePerformance&&x2&&x2.mark&&x2.measure?x2:{mark:e3,measure:e3},o2='FA "6.5.1"',j4=function(a){return f1.mark("".concat(o2," ").concat(a," begins")),function(){return D3(a)}},D3=function(a){f1.mark("".concat(o2," ").concat(a," ends")),f1.measure("".concat(o2," ").concat(a),"".concat(o2," ").concat(a," begins"),"".concat(o2," ").concat(a," ends"))},C1={begin:j4,end:D3},T2=function(){};function r3(c){var a=c.getAttribute?c.getAttribute(Z):null;return typeof a=="string"}function X4(c){var a=c.getAttribute?c.getAttribute(m1):null,i=c.getAttribute?c.getAttribute(H1):null;return a&&i}function Y4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(H.replacementClass)}function $4(){if(H.autoReplaceSvg===!0)return F2.replace;var c=F2[H.autoReplaceSvg];return c||F2.replace}function Q4(c){return M.createElementNS("http://www.w3.org/2000/svg",c)}function K4(c){return M.createElement(c)}function R3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.ceFn,e=i===void 0?c.tag==="svg"?Q4:K4:i;if(typeof c=="string")return M.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){r.appendChild(R3(n,{ceFn:e}))}),r}function J4(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var F2={replace:function(a){var i=a[0];if(i.parentNode)if(a[1].forEach(function(r){i.parentNode.insertBefore(R3(r),i)}),i.getAttribute(Z)===null&&H.keepOriginalSource){var e=M.createComment(J4(i));i.parentNode.replaceChild(e,i)}else i.remove()},nest:function(a){var i=a[0],e=a[1];if(~z1(i).indexOf(H.replacementClass))return F2.replace(a);var r=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(f,l){return l===H.replacementClass||l.match(r)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",s.toNode.join(" "))}var n=e.map(function(f){return u2(f)}).join(`
`);i.setAttribute(Z,""),i.innerHTML=n}};function i3(c){c()}function _3(c,a){var i=typeof a=="function"?a:T2;if(c.length===0)i();else{var e=i3;H.mutateApproach===r4&&(e=j.requestAnimationFrame||i3),e(function(){var r=$4(),s=C1.begin("mutate");c.map(r),s(),i()})}}var d1=!1;function E3(){d1=!0}function l1(){d1=!1}var R2=null;function s3(c){if(X1&&H.observeMutations){var a=c.treeCallback,i=a===void 0?T2:a,e=c.nodeCallback,r=e===void 0?T2:e,s=c.pseudoElementsCallback,n=s===void 0?T2:s,f=c.observeMutationsRoot,l=f===void 0?M:f;R2=new X1(function(t){if(!d1){var o=X();s2(t).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!r3(v.addedNodes[0])&&(H.searchPseudoElements&&n(v.target),i(v.target)),v.type==="attributes"&&v.target.parentNode&&H.searchPseudoElements&&n(v.target.parentNode),v.type==="attributes"&&r3(v.target)&&~t4.indexOf(v.attributeName))if(v.attributeName==="class"&&X4(v.target)){var z=O2(z1(v.target)),h=z.prefix,g=z.iconName;v.target.setAttribute(m1,h||o),g&&v.target.setAttribute(H1,g)}else Y4(v.target)&&r(v.target)})}}),I&&R2.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Z4(){R2&&R2.disconnect()}function c6(c){var a=c.getAttribute("style"),i=[];return a&&(i=a.split(";").reduce(function(e,r){var s=r.split(":"),n=s[0],f=s.slice(1);return n&&f.length>0&&(e[n]=f.join(":").trim()),e},{})),i}function a6(c){var a=c.getAttribute("data-prefix"),i=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=O2(z1(c));return r.prefix||(r.prefix=X()),a&&i&&(r.prefix=a,r.iconName=i),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=P4(r.prefix,c.innerText)||M1(r.prefix,a1(c.innerText))),!r.iconName&&H.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function e6(c){var a=s2(c.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),i=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return H.autoA11y&&(i?a["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(e||V2()):(a["aria-hidden"]="true",a.focusable="false")),a}function r6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function n3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=a6(c),e=i.iconName,r=i.prefix,s=i.rest,n=e6(c),f=r1("parseNodeAttributes",{},c),l=a.styleParser?c6(c):[];return m({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:n}},f)}var i6=y.styles;function O3(c){var a=H.autoReplaceSvg==="nest"?n3(c,{styleParser:!1}):n3(c);return~a.extra.classes.indexOf(L3)?U("generateLayersText",c,a):U("generateSvgReplacementMutation",c,a)}var Y=new Set;v1.map(function(c){Y.add("fa-".concat(c))});Object.keys(H2[V]).map(Y.add.bind(Y));Object.keys(H2[p]).map(Y.add.bind(Y));Y=M2(Y);function f3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I)return Promise.resolve();var i=M.documentElement.classList,e=function(v){return i.add("".concat(Y1,"-").concat(v))},r=function(v){return i.remove("".concat(Y1,"-").concat(v))},s=H.autoFetchSvg?Y:v1.map(function(o){return"fa-".concat(o)}).concat(Object.keys(i6));s.includes("fa")||s.push("fa");var n=[".".concat(L3,":not([").concat(Z,"])")].concat(s.map(function(o){return".".concat(o,":not([").concat(Z,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=s2(c.querySelectorAll(n))}catch{}if(f.length>0)e("pending"),r("complete");else return Promise.resolve();var l=C1.begin("onTree"),t=f.reduce(function(o,v){try{var z=O3(v);z&&o.push(z)}catch(h){d3||h.name==="MissingIcon"&&console.error(h)}return o},[]);return new Promise(function(o,v){Promise.all(t).then(function(z){_3(z,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(z){l(),v(z)})})}function s6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;O3(c).then(function(i){i&&_3([i],a)})}function n6(c){return function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:i1(a||{}),r=i.mask;return r&&(r=(r||{}).icon?r:i1(r||{})),c(e,m(m({},i),{},{mask:r}))}}var f6=function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.transform,r=e===void 0?F:e,s=i.symbol,n=s===void 0?!1:s,f=i.mask,l=f===void 0?null:f,t=i.maskId,o=t===void 0?null:t,v=i.title,z=v===void 0?null:v,h=i.titleId,g=h===void 0?null:h,S=i.classes,k=S===void 0?[]:S,A=i.attributes,L=A===void 0?{}:A,x=i.styles,P=x===void 0?{}:x;if(a){var b=a.prefix,$=a.iconName,Q=a.icon;return U2(m({type:"icon"},a),function(){return c2("beforeDOMElementCreation",{iconDefinition:a,params:i}),H.autoA11y&&(z?L["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(g||V2()):(L["aria-hidden"]="true",L.focusable="false")),u1({icons:{main:s1(Q),mask:l?s1(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:$,transform:m(m({},F),r),symbol:n,title:z,maskId:o,titleId:g,extra:{attributes:L,styles:P,classes:k}})})}},l6={mixout:function(){return{icon:n6(f6)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=f3,i.nodeCallback=s6,i}}},provides:function(a){a.i2svg=function(i){var e=i.node,r=e===void 0?M:e,s=i.callback,n=s===void 0?function(){}:s;return f3(r,n)},a.generateSvgReplacementMutation=function(i,e){var r=e.iconName,s=e.title,n=e.titleId,f=e.prefix,l=e.transform,t=e.symbol,o=e.mask,v=e.maskId,z=e.extra;return new Promise(function(h,g){Promise.all([n1(r,f),o.iconName?n1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var k=o1(S,2),A=k[0],L=k[1];h([i,u1({icons:{main:A,mask:L},prefix:f,iconName:r,transform:l,symbol:t,maskId:v,title:s,titleId:n,extra:z,watchable:!0})])}).catch(g)})},a.generateAbstractIcon=function(i){var e=i.children,r=i.attributes,s=i.main,n=i.transform,f=i.styles,l=_2(f);l.length>0&&(r.style=l);var t;return h1(n)&&(t=U("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),e.push(t||s.icon),{children:e,attributes:r}}}},o6={mixout:function(){return{layer:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,s=r===void 0?[]:r;return U2({type:"layer"},function(){c2("beforeDOMElementCreation",{assembler:i,params:e});var n=[];return i(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(M2(s)).join(" ")},children:n}]})}}}},t6={mixout:function(){return{counter:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,s=r===void 0?null:r,n=e.classes,f=n===void 0?[]:n,l=e.attributes,t=l===void 0?{}:l,o=e.styles,v=o===void 0?{}:o;return U2({type:"counter",content:i},function(){return c2("beforeDOMElementCreation",{content:i,params:e}),W4({content:i.toString(),title:s,extra:{attributes:t,styles:v,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(M2(f))}})})}}}},m6={mixout:function(){return{text:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?F:r,n=e.title,f=n===void 0?null:n,l=e.classes,t=l===void 0?[]:l,o=e.attributes,v=o===void 0?{}:o,z=e.styles,h=z===void 0?{}:z;return U2({type:"text",content:i},function(){return c2("beforeDOMElementCreation",{content:i,params:e}),a3({content:i,transform:m(m({},F),s),title:f,extra:{attributes:v,styles:h,classes:["".concat(H.cssPrefix,"-layers-text")].concat(M2(t))}})})}}},provides:function(a){a.generateLayersText=function(i,e){var r=e.title,s=e.transform,n=e.extra,f=null,l=null;if(p3){var t=parseInt(getComputedStyle(i).fontSize,10),o=i.getBoundingClientRect();f=o.width/t,l=o.height/t}return H.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([i,a3({content:i.innerHTML,width:f,height:l,transform:s,title:r,extra:n,watchable:!0})])}}},H6=new RegExp('"',"ug"),l3=[1105920,1112319];function v6(c){var a=c.replace(H6,""),i=N4(a,0),e=i>=l3[0]&&i<=l3[1],r=a.length===2?a[0]===a[1]:!1;return{value:a1(r?a[0]:a),isSecondary:e||r}}function o3(c,a){var i="".concat(e4).concat(a.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(i)!==null)return e();var s=s2(c.children),n=s.filter(function(Q){return Q.getAttribute(c1)===a})[0],f=j.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(f4),t=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),e();if(l&&o!=="none"&&o!==""){var v=f.getPropertyValue("content"),z=~["Sharp"].indexOf(l[2])?p:V,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?v2[z][l[2].toLowerCase()]:l4[z][t],g=v6(v),S=g.value,k=g.isSecondary,A=l[0].startsWith("FontAwesome"),L=M1(h,S),x=L;if(A){var P=T4(S);P.iconName&&P.prefix&&(L=P.iconName,h=P.prefix)}if(L&&!k&&(!n||n.getAttribute(m1)!==h||n.getAttribute(H1)!==x)){c.setAttribute(i,x),n&&c.removeChild(n);var b=r6(),$=b.extra;$.attributes[c1]=a,n1(L,h).then(function(Q){var I2=u1(m(m({},b),{},{icons:{main:Q,mask:p1()},prefix:h,iconName:x,extra:$,watchable:!0})),W=M.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(W,c.firstChild):c.appendChild(W),W.outerHTML=I2.map(function(G3){return u2(G3)}).join(`
`),c.removeAttribute(i),e()}).catch(r)}else e()}else e()})}function z6(c){return Promise.all([o3(c,"::before"),o3(c,"::after")])}function h6(c){return c.parentNode!==document.head&&!~i4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(c1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function t3(c){if(I)return new Promise(function(a,i){var e=s2(c.querySelectorAll("*")).filter(h6).map(z6),r=C1.begin("searchPseudoElements");E3(),Promise.all(e).then(function(){r(),l1(),a()}).catch(function(){r(),l1(),i()})})}var V6={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=t3,i}}},provides:function(a){a.pseudoElements2svg=function(i){var e=i.node,r=e===void 0?M:e;H.searchPseudoElements&&t3(r)}}},m3=!1,M6={mixout:function(){return{dom:{unwatch:function(){E3(),m3=!0}}}},hooks:function(){return{bootstrap:function(){s3(r1("mutationObserverCallbacks",{}))},noAuto:function(){Z4()},watch:function(i){var e=i.observeMutationsRoot;m3?l1():s3(r1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},H3=function(a){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var s=r.toLowerCase().split("-"),n=s[0],f=s.slice(1).join("-");if(n&&f==="h")return e.flipX=!0,e;if(n&&f==="v")return e.flipY=!0,e;if(f=parseFloat(f),isNaN(f))return e;switch(n){case"grow":e.size=e.size+f;break;case"shrink":e.size=e.size-f;break;case"left":e.x=e.x-f;break;case"right":e.x=e.x+f;break;case"up":e.y=e.y-f;break;case"down":e.y=e.y+f;break;case"rotate":e.rotate=e.rotate+f;break}return e},i)},p6={mixout:function(){return{parse:{transform:function(i){return H3(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-transform");return r&&(i.transform=H3(r)),i}}},provides:function(a){a.generateAbstractTransformGrouping=function(i){var e=i.main,r=i.transform,s=i.containerWidth,n=i.iconWidth,f={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),o="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(l," ").concat(t," ").concat(o)},z={transform:"translate(".concat(n/2*-1," -256)")},h={outer:f,inner:v,path:z};return{tag:"g",attributes:m({},h.outer),children:[{tag:"g",attributes:m({},h.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:m(m({},e.icon.attributes),h.path)}]}]}}}},K2={x:0,y:0,width:"100%",height:"100%"};function v3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function u6(c){return c.tag==="g"?c.children:[c]}var C6={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-mask"),s=r?O2(r.split(" ").map(function(n){return n.trim()})):p1();return s.prefix||(s.prefix=X()),i.mask=s,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides:function(a){a.generateAbstractMask=function(i){var e=i.children,r=i.attributes,s=i.main,n=i.mask,f=i.maskId,l=i.transform,t=s.width,o=s.icon,v=n.width,z=n.icon,h=p4({transform:l,containerWidth:v,iconWidth:t}),g={tag:"rect",attributes:m(m({},K2),{},{fill:"white"})},S=o.children?{children:o.children.map(v3)}:{},k={tag:"g",attributes:m({},h.inner),children:[v3(m({tag:o.tag,attributes:m(m({},o.attributes),h.path)},S))]},A={tag:"g",attributes:m({},h.outer),children:[k]},L="mask-".concat(f||V2()),x="clip-".concat(f||V2()),P={tag:"mask",attributes:m(m({},K2),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,A]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:u6(z)},P]};return e.push(b,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(L,")")},K2)}),{children:e,attributes:r}}}},d6={provides:function(a){var i=!1;j.matchMedia&&(i=j.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=m(m({},s),{},{attributeName:"opacity"}),f={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||f.children.push({tag:"animate",attributes:m(m({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(f),e.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:m(m({},n),{},{values:"1;0;0;0;0;1;"})}]}),i||e.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},L6={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return i.symbol=s,i}}}},g6=[d4,l6,o6,t6,m6,V6,M6,p6,C6,d6,L6];D4(g6,{mixoutsTo:N});var q6=N.noAuto,G6=N.config,j6=N.library,X6=N.dom,U3=N.parse,Y6=N.findIconDefinition,$6=N.toHtml,I3=N.icon,Q6=N.layer,x6=N.text,b6=N.counter;var S6=["*"],w6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},k6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},y6=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(i=>a[i]?i:null).filter(i=>i)},A6=c=>c.prefix!==void 0&&c.iconName!==void 0,P6=(c,a)=>A6(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},T6=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=W2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),F6=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...e){for(let r of e){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let s of r.icon[2])typeof s=="string"&&(this.definitions[r.prefix][s]=r)}}addIconPacks(...e){for(let r of e){let s=Object.keys(r).map(n=>r[n]);this.addIcons(...s)}}getIconDefinition(e,r){return e in this.definitions&&r in this.definitions[e]?this.definitions[e][r]:null}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=W2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),B6=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(r){return new(r||a)},a.\u0275dir=x1({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[C2]});let c=a;return c})(),D6=(()=>{let a=class a{constructor(e,r){this.renderer=e,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};a.\u0275fac=function(r){return new(r||a)(T(d2),T(N1))},a.\u0275cmp=f2({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[C2,l2],ngContentSelectors:S6,decls:1,vars:0,template:function(r,s){r&1&&(y1(),A1(0))},encapsulation:2});let c=a;return c})(),W3=(()=>{let a=class a{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,r,s,n,f){this.sanitizer=e,this.config=r,this.iconLibrary=s,this.stackItem=n,this.classes=[],f!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){k6();return}if(e){let r=this.icon!=null?this.icon:this.config.fallbackIcon,s=this.findIconDefinition(r);if(s!=null){let n=this.buildParams();this.renderIcon(s,n)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let r=P6(e,this.config.defaultPrefix);if("icon"in r)return r;let s=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return s??(w6(r),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?U3.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...y6(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,r){let s=I3(e,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))}};a.\u0275fac=function(r){return new(r||a)(T(F1),T(T6),T(F6),T(B6,8),T(D6,8))},a.\u0275cmp=f2({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,s){r&2&&(k1("innerHTML",s.renderedIconHTML,b1),w1("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[C2,l2],decls:0,vars:0,template:function(r,s){},encapsulation:2});let c=a;return c})();var q3=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=g1({type:a}),a.\u0275inj=L1({});let c=a;return c})();var _6=["board"],E6=["next_figure"];function O6(c,a){c&1&&(C(0,"div",27)(1,"div",28)(2,"h3"),_(3,"GAME OVER"),d()()())}var l0=(()=>{let a=class a{get canvasBoard(){return this._canvasBoard.nativeElement}get canvasNextFigure(){return this._canvasNextFigure.nativeElement}constructor(e){this.renderer=e,this._rows=20,this._rowsNextFigure=6,this._columns=10,this._columnsNextFigure=6,this._blockSize=30,this._blockSizeNextFigure=20,this._canvasBoardWidth=0,this._canvasBoardHeight=0,this._canvasNextFigureWidth=0,this._canvasNextFigureHeight=0,this._timer=420,this._timerGoDown=0,this._boardM=[],this._nextFigureM=[],this._endGame=!1,this.level=0,this.lines=0,this.score=0,this.faCirclePlay=D1,this.faRotateRight=_1,this.faPauseCircle=R1,this.faAngleLeft=U1,this.faAngleRight=B1,this.faAngleUp=O1,this.faAngleDown=E1,this.initFigures()}initFigures(){this._figure=q.getRandomFigure(),this.mapCurrentFigureToCenterBoard(),this._nextFigure=q.getRandomFigure(),this.mapNextFigureToCenterBoard()}ngAfterViewInit(){this._nextFigureCTX=this.canvasNextFigure.getContext("2d"),this.setDefaultNextFigureCanvasSize(),this.defineMatrix(this._nextFigureM,this._blockSizeNextFigure,this._canvasNextFigureWidth,this._canvasNextFigureHeight),this.addFigureToMatrix(this._nextFigure,this._nextFigureM),this.drawMatrix(this._nextFigureM,this._nextFigureCTX,this._blockSizeNextFigure),this._boardCTX=this.canvasBoard.getContext("2d"),this.setDefaultBoardSize(),this.defineMatrix(this._boardM),this.enableMobileControls()}startIntervalUpdate(e=this._timer){this._boardInterval=setInterval(()=>{try{this.update()}catch(r){console.error(r),clearInterval(this._boardInterval),clearInterval(this._timer)}},e)}update(){this._boardCTX.clearRect(0,0,this.canvasBoard.width,this.canvasBoard.height),this.setDefaultFrameStyles(),this.addFigureToMatrix(),this.drawMatrix(),this.figureDownLevel(),this.checkRows()}setDefaultBoardSize(){this._canvasBoardWidth=this._columns*this._blockSize,this._canvasBoardHeight=this._rows*this._blockSize,this.canvasBoard.width=this._canvasBoardWidth,this.canvasBoard.height=this._canvasBoardHeight}setDefaultNextFigureCanvasSize(){this._canvasNextFigureWidth=this._columnsNextFigure*this._blockSizeNextFigure,this._canvasNextFigureHeight=this._rowsNextFigure*this._blockSizeNextFigure,this.canvasNextFigure.width=this._canvasNextFigureWidth,this.canvasNextFigure.height=this._canvasNextFigureHeight}forEachRows(e,r=this._blockSize,s=this._canvasBoardHeight){for(let n=0,f=0;n<s;n+=r,f++)e(n,f)}forEachColumns(e,r=this._blockSize,s=this._canvasBoardWidth){for(let n=0,f=0;n<s;n+=r,f++)e(n,f)}defineMatrix(e,r=this._blockSize,s=this._canvasBoardWidth,n=this._canvasBoardHeight){this.forEachColumns((f,l)=>{e.push([]),this.forEachRows((t,o)=>{e[l][o]={x:f,y:t,drawed:!1}},r,n)},r,s)}setDefaultFrameStyles(){this._boardCTX.fillStyle="rgba(170, 175, 125, 0.2)",this._boardCTX.fillRect(0,0,this.canvasBoard.width,this.canvasBoard.height),this._boardCTX.strokeStyle="rgba(55, 55, 55, .8)",this._boardCTX.lineWidth=.5,this.forEachColumns(e=>{e!=0&&e!=this._columns&&(this._boardCTX.beginPath(),this._boardCTX.moveTo(e,0),this._boardCTX.lineTo(e,this._canvasBoardHeight),this._boardCTX.stroke())}),this.forEachRows(e=>{e!=0&&e!=this._rows&&(this._boardCTX.beginPath(),this._boardCTX.moveTo(0,e),this._boardCTX.lineTo(this._canvasBoardHeight,e),this._boardCTX.lineWidth=.5,this._boardCTX.stroke())})}addFigureToMatrix(e=this._figure,r=this._boardM){e.forEachCells(s=>{if(s.y>=0){let{x:n,y:f,color:l,active:t,drawed:o}=s;t&&(r[n][f].color=l,r[n][f].active=t,r[n][f].drawed=o)}})}drawMatrix(e=this._boardM,r=this._boardCTX,s=this._blockSize){e.forEach(n=>{n.forEach(f=>{let{x:l,y:t,color:o,active:v,drawed:z}=f;(z||v)&&new g2(l,t,o,"transparent",s).draw(r)})})}removeFigureInMatrix(){this._figure.forEachCells(e=>{if(e.y>=0){let{x:r,y:s,active:n}=e;n&&(this._boardM[r][s].color=void 0,this._boardM[r][s].active=!1,this._boardM[r][s].drawed=!1)}})}isEndGame(){return this._boardM.some(e=>e[0].drawed)}cleanFigureNextBoard(){}mapCurrentFigureToCenterBoard(){let{_index:e}=this._figure;this._figure.mapCells(r=>(r.x+=e==2||e==3?3:4,r.y+=e==2||e==-3?-3:-4,r))}mapNextFigureToCenterBoard(){let{_index:e}=this._nextFigure;this._nextFigure.mapCells(r=>(r.x+=e!=2?2:1,r.y+=e!=2&&e!=3?2:1,r))}mapNextFigureToDefault(){let{_index:e}=this._nextFigure;this._nextFigure.mapCells(r=>(r.x+=e!=2?-2:-1,r.y+=e!=2&&e!=3?-2:-1,r))}figureDownLevel(){let e=new q(this._figure.cloneCells(),this._figure._index);e.mapCells(s=>(s.y++,s));let r=e.canDrawInMatrix(this._boardM);this._endGame?clearInterval(this._boardInterval):this._figure._toDraw?this._figure.bothFiguresHaveSameActiveColumns(this._figureCloned)?(this._figure.mapCells(s=>{let{x:n,y:f,active:l}=s;return f>=0&&l&&(this._boardM[n][f].drawed=!0,this._boardM[n][f].active=!1,s.active=!1),f==0&&(this._endGame=!0),s}),this.mapNextFigureToDefault(),this._figure=new q(this._nextFigure.cloneCells(),this._nextFigure._index),this.mapCurrentFigureToCenterBoard(),this.addFigureToMatrix(),this._nextFigure=q.getRandomFigure(),this.mapNextFigureToCenterBoard(),this.defineMatrix(this._nextFigureM,this._blockSizeNextFigure,this._canvasNextFigureWidth,this._canvasNextFigureHeight),this._nextFigureCTX.clearRect(0,0,this.canvasNextFigure.width,this.canvasNextFigure.height),this.addFigureToMatrix(this._nextFigure,this._nextFigureM),this.drawMatrix(this._nextFigureM,this._nextFigureCTX,this._blockSizeNextFigure)):(this._figure._toDraw=!1,this.removeFigureInMatrix()):r?(this.removeFigureInMatrix(),this._figure.downOneLevel()):(this._figureCloned=e,this.removeFigureInMatrix(),this._figure._toDraw=!0)}checkRows(){let e=[],r=JSON.parse(JSON.stringify(this._boardM));for(let s=0;s<this._boardM[0].length;s++)if(this._boardM.every(n=>n[s].drawed)){e.push(s);for(let n=0;n<this._boardM.length;n++)this._boardM[n][s].color="white",r[n].splice(s,1),r[n].unshift({})}if(e.length>0){this.drawMatrix();let s=e.length;for(let n=this._boardM[0].length-1;n>=0;n--)for(let f=this._boardM.length-1;f>=0;f--)this._boardM[f][n].drawed=r[f][n]?.drawed,this._boardM[f][n].color=r[f][n]?.color;this.setScore(s)}}setScore(e){this.lines+=e,this.score+=e*100,this.level=Number((this.score/(this._rows/4*100)).toFixed(0)),this._timer=this._timer-(this.level>0?2:0),clearInterval(this._boardInterval),this.startIntervalUpdate(this._timer)}onClickRotate(){return n2(this,null,function*(){this._figure.rotate45(this._boardM),this.drawMatrix()})}onClickGoRight(){return n2(this,null,function*(){this._figure.goRight(this._boardM),this.drawMatrix()})}onClickGoLeft(){return n2(this,null,function*(){this._figure.goLeft(this._boardM),this.drawMatrix()})}onMouseDownGoDown(){this._timerGoDown!=20&&(clearInterval(this._boardInterval),this._timerGoDown=20,this.startIntervalUpdate(this._timerGoDown))}onMouseUpStopGoDown(){clearInterval(this._boardInterval),this._timerGoDown=this._timer,this.startIntervalUpdate(this._timer)}onKeyboardKeyDown(e){return n2(this,null,function*(){let{code:r}=e;r==="ArrowRight"&&this.onClickGoRight(),r==="ArrowLeft"&&this.onClickGoLeft(),r==="ArrowDown"&&this.onMouseDownGoDown(),(r==="Space"||r==="Enter")&&this.onClickRotate()})}onKeyboardKeyUp(e){let{code:r}=e;r==="ArrowDown"&&this.onMouseUpStopGoDown()}forEachCellsOfMatrix(e){this._boardM.forEach(r=>{r.forEach(s=>{e(s)})})}onClickInitGame(){this._boardInterval&&clearInterval(this._boardInterval),this._timer&&clearInterval(this._timer),this.startIntervalUpdate()}onClickStopGame(){clearInterval(this._boardInterval)}onClickResetGame(){clearInterval(this._boardInterval),clearInterval(this._timer),this._endGame=!1,this.level=0,this.score=0,this.lines=0,this._boardM=[],this.defineMatrix(this._boardM),this.initFigures(),this.startIntervalUpdate()}enableMobileControls(){let e=document.getElementById("btn-down");this.renderer.listen(e,"touchstart",r=>{this.onMouseDownGoDown()}),this.renderer.listen(e,"touchend",r=>{this.onMouseUpStopGoDown()})}ngOnDestroy(){clearInterval(this._boardInterval)}};a.\u0275fac=function(r){return new(r||a)(T(d2))},a.\u0275cmp=f2({type:a,selectors:[["tetris-game"]],viewQuery:function(r,s){if(r&1&&(G2(_6,7),G2(E6,7)),r&2){let n;j2(n=X2())&&(s._canvasBoard=n.first),j2(n=X2())&&(s._canvasNextFigure=n.first)}},hostBindings:function(r,s){r&1&&R("keydown",function(f){return s.onKeyboardKeyDown(f)},!1,q2)("keyup",function(f){return s.onKeyboardKeyUp(f)},!1,q2)},standalone:!0,features:[l2],decls:50,vars:17,consts:[["id","tetris-container"],[1,"body","column"],[1,"game"],[1,"previsual"],[1,"info-panel"],["id","next",1,"next"],["id","next_figure"],["next_figure",""],[1,"score","txt-panel"],[1,"lines","txt-panel"],[1,"level","txt-panel"],[1,"controls","column"],[1,"board-controls"],[1,"btn-control","board-control",3,"click"],[2,"color","#26194dde",3,"icon","title"],[1,"board-frame"],["id","board"],["board",""],["id","game-over",4,"ngIf"],[1,"mobile-controls"],[1,"controls",2,"align-items","flex-end"],[3,"title"],[1,"btn-rotate",3,"click"],[2,"font-size","24px","margin","0"],[2,"column-gap","0.35em"],["id","btn-down",1,"btn-control",3,"mousedown","mouseup"],[1,"btn-control",3,"click"],["id","game-over"],[1,"gmo-container"]],template:function(r,s){r&1&&(C(0,"div",0)(1,"div",1)(2,"section",2)(3,"div",3)(4,"section",4)(5,"div",5),D(6,"canvas",6,7),d(),C(8,"article",8)(9,"h5"),_(10,"Score: "),d(),C(11,"p"),_(12),d()(),C(13,"article",9)(14,"h5"),_(15,"Lines: "),d(),C(16,"p"),_(17),d()(),C(18,"article",10)(19,"h5"),_(20,"Level: "),d(),C(21,"p"),_(22),d()()(),C(23,"section",11)(24,"article",12)(25,"button",13),R("click",function(){return s.onClickInitGame()}),D(26,"fa-icon",14),d(),C(27,"button",13),R("click",function(){return s.onClickStopGame()}),D(28,"fa-icon",14),d(),C(29,"button",13),R("click",function(){return s.onClickResetGame()}),D(30,"fa-icon",14),d()()()(),C(31,"div",15),D(32,"canvas",16,17),S1(34,O6,4,0,"div",18),d()(),C(35,"div",19)(36,"section",20)(37,"span",21)(38,"article")(39,"button",22),R("click",function(){return s.onClickRotate()}),C(40,"p",23),_(41," - "),d()()()()(),C(42,"section",11)(43,"article",24)(44,"button",25),R("mousedown",function(){return s.onMouseDownGoDown()})("mouseup",function(){return s.onMouseUpStopGoDown()}),D(45,"fa-icon",14),d(),C(46,"button",26),R("click",function(){return s.onClickGoLeft()}),D(47,"fa-icon",14),d(),C(48,"button",26),R("click",function(){return s.onClickGoRight()}),D(49,"fa-icon",14),d()()()()()()),r&2&&(w(12),L2(" ",s.score,""),w(5),L2(" ",s.lines,""),w(5),L2(" ",s.level,""),w(4),B("icon",s.faCirclePlay)("title","Iniciar Juego"),w(2),B("icon",s.faPauseCircle)("title","Pausar Juego"),w(2),B("icon",s.faRotateRight)("title","Reiniciar Juego"),w(4),B("ngIf",s._endGame),w(3),B("title","Rotar pieza"),w(8),B("icon",s.faAngleDown)("title","Incrementar ca\xEDda"),w(2),B("icon",s.faAngleLeft)("title","Mover a izquierda"),w(2),B("icon",s.faAngleRight)("title","Mover a derecha"))},dependencies:[T1,P1,q3,W3],styles:["*[_ngcontent-%COMP%]{color:#2f254efc}#tetris-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;row-gap:2rem;width:calc(100% - .2em);height:calc(100% - .2em);padding:.1em;background-color:ivory}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:max-content;max-width:100%;height:100%;max-height:80%}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-around;column-gap:1em;max-height:62vmax;height:100%;width:85%;padding:1em;border:2px solid linear-gradient(to right,rgba(161,120,243,.65),rgba(25,118,210,.65));border-radius:3px;box-shadow:1px -1px 6px 1px #00000080;background-color:#e6e6ff}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]{height:100%;width:30%;display:flex;flex-direction:column;align-items:center;justify-content:space-between}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0;width:calc(100% - .25em)}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]{width:80%;height:80%;padding:5px;border-radius:3px;border:2px solid rgba(0,0,0,.3);background-color:azure}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]   #next_figure[_ngcontent-%COMP%]{width:100%;border:0}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .txt-panel[_ngcontent-%COMP%]{display:flex;width:90%}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%], #tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%], #tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .lines[_ngcontent-%COMP%]{background-color:#fafafafa;margin:.5em .35rem 0 .35em;display:flex;justify-content:space-between;align-items:center;border-radius:3px;padding:.2em}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:15px;width:50px;margin:0;font-family:monospace}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:monospace;font-size:17px;width:fit-content;margin:0}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .board-frame[_ngcontent-%COMP%]{position:relative;margin:0;padding:0;height:100%;width:100%}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .board-frame[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{background-color:azure;border:2px solid rgba(50,55,50,.3);height:100%;width:100%}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   #game-over[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_opacity ease-in 2s;z-index:100;position:absolute;top:0;left:0;background-color:#783aff33;padding:.2em;height:calc(100% - .2em);width:calc(100% - .2em);display:flex;flex-direction:column;align-items:center;justify-content:center}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   #game-over[_ngcontent-%COMP%]   .gmo-container[_ngcontent-%COMP%]{width:5rem}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   #game-over[_ngcontent-%COMP%]   .gmo-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{overflow:hidden;font-family:monospace;height:fit-content;padding:0;margin:0;right:0;width:0;white-space:nowrap;border-right:.25em solid #b9a2fa;animation:_ngcontent-%COMP%_typing 3s steps(38) 1s 1 normal both,blink 1s steps(1) infinite}.column[_ngcontent-%COMP%]{flex-direction:column;column-gap:.5rem}.controls[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;column-gap:.5rem;row-gap:.5rem;height:100%}.controls[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;column-gap:.05rem;width:100%}.controls[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:2.5em;width:2.5rem;border:none;border:2px outset rgba(0,0,0,.3);border-radius:3px;background-color:#f3fff914}.controls[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:.65;transition:.2ms;border:2px solid rgba(0,0,0,.65)}.board-controls[_ngcontent-%COMP%]{margin-top:2rem;justify-content:space-between!important}.board-controls[_ngcontent-%COMP%]   .board-control[_ngcontent-%COMP%]{max-width:30%!important}.mobile-controls[_ngcontent-%COMP%]{padding:.5em 1rem;margin-top:1rem;width:85%;display:flex;align-items:center;justify-content:space-around;border:2px solid linear-gradient(to right,rgba(161,120,243,.65),rgba(25,118,210,.65));border-radius:3px;box-shadow:1px -1px 6px 1px #00000080;background-color:#e6e6ff}.btn-rotate[_ngcontent-%COMP%]{width:150px!important}@keyframes _ngcontent-%COMP%_opacity{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_typing{0%{width:0}to{width:100%}}@keyframes _ngcontent-%COMP%_blink{50%{border-color:transparent}}i[_ngcontent-%COMP%]{font-size:14px;font-style:normal;font-weight:550}@media only screen and (max-width: 515px){h5[_ngcontent-%COMP%]{font-size:13px}p[_ngcontent-%COMP%]{font-size:15px}  .btn-rotate{height:2.05rem!important;width:4rem}  .btn-rotate svg{height:70%;width:70%}  .btn-control{height:2.05rem!important;width:2.05rem!important}  .btn-control svg{height:70%;width:70%}}@media only screen and (max-width: 300px){.board-control[_ngcontent-%COMP%]{max-width:28%}.btn-rotate[_ngcontent-%COMP%]{height:calc(2.05rem - .45em)!important;width:4rem!important}  .btn-control{height:calc(2.05rem - .45em)!important;width:calc(2.05rem - .45em)!important}}"]});let c=a;return c})();export{l0 as TetrisComponent};
