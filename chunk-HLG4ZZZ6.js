import{$ as x1,Aa as f2,Ga as A1,K as O2,Ka as P1,L as d1,R as n2,S as L1,T as g1,U as u2,_ as U2,aa as b1,ba as N1,c as C1,ca as P,da as U,la as S1,ma as I,na as g,oa as x,pa as F,qa as w1,sa as B,ta as k1,ua as y1,va as I2,wa as W2,xa as q2,ya as c2,za as G2}from"./chunk-BW6PLV66.js";var C2=class{constructor(a,r,e="transparent",i="white",s=20,n=1){this._x=0,this._y=0,this._size=20,this._x=a,this._y=r,this._fillColor=e,this._borderColor=i,this._borderWidth=n,this._size=s}draw(a){a.fillStyle=this._borderColor,a.fillRect(this._x,this._y,this._size,this._size),a.fillStyle="rgba(255, 255, 255,0.5)";let r=this._size-this._borderWidth*2;a.fillRect(this._x+this._borderWidth,this._y+this._borderWidth,r,r),a.fillStyle=this._fillColor,r=this._size-this._borderWidth*4,a.fillRect(this._x+this._borderWidth*2,this._y+this._borderWidth*2,r,r)}},W=class c{constructor(a,r){this._toDraw=!1,this._matrix=a,this._index=r}forEachCells(a){this._matrix.forEach((r,e)=>{this._matrix[e].forEach((i,s)=>{a(this._matrix[e][s],e,s)})})}everyCells(a){return this._matrix.every((r,e)=>this._matrix[e].every((i,s)=>a(this._matrix[e][s],e,s)))}someCells(a){return this._matrix.some((r,e)=>this._matrix[e].some((i,s)=>a(this._matrix[e][s],e,s)))}mapCells(a){this.forEachCells((r,e,i)=>{this._matrix[e][i]=a(r,e,i)})}setColor(a){this.mapCells(r=>(r.color=a,r))}markFigureToDraw(){this.mapCells(a=>(a.y>=0&&(a.drawed=!0),a))}getIsFigureReadyToMatrix(){return this.forEachCells(a=>a.drawed)}markAllCellsToDraw(){this.mapCells(a=>(a.drawed=!0,a))}removeFigureInMatrix(a,r=0,e=0){this.forEachCells(i=>{if(i.y>=0){let{x:s,y:n,active:f}=i;f&&(a[s+r][n+e].color=void 0,a[s+r][n+e].drawed=!1)}})}downOneLevel(){this.mapCells(a=>(a.y++,a))}bothFiguresHaveSameActiveColumns(a){return a.everyCells((r,e,i)=>{let s=this._matrix[e][i];return s.x==r.x&&s.active==r.active})}checkIfCanMove(a,r){return this.everyCells(e=>{let i=e.x+a;return i>=0&&i<r.length&&e.y>=0&&!(r[i]!==void 0&&r[i][e.y]?.drawed)})}hasSpaceInColumn(a,r){return this._matrix.every(e=>{let i=e[r];return!i.active&&!a[i.x][i.y]?.drawed})}goRight(a){if(this.hasSpaceInColumn(a,this._matrix.length-1)){let r=JSON.parse(JSON.stringify(this._matrix));r.forEach(e=>e.forEach(i=>(i.active=!1,i))),this.forEachCells((e,i,s)=>{e.active&&(r[i][s+1].active=!0)}),this._matrix=r}else this.checkIfCanMove(1,a)&&this.mapCells(r=>(r.x++,r))}goLeft(a){if(this.hasSpaceInColumn(a,0)){let r=JSON.parse(JSON.stringify(this._matrix));r.forEach(e=>e.forEach(i=>(i.active=!1,i))),this.forEachCells((e,i,s)=>{e.active&&(r[i][s-1].active=!0)}),this._matrix=r}else this.checkIfCanMove(-1,a)&&this.mapCells(r=>{let{x:e,y:i}=r;return a[e][i].drawed=!1,r.x--,r})}canDrawInMatrix(a){return!this.someCells(r=>(a[r.x][r.y]?.drawed||r.y==a[0].length)&&r.active)}cloneCells(){return JSON.parse(JSON.stringify(this._matrix))}rotate90(){let a=this._matrix.length,r=JSON.parse(JSON.stringify(this._matrix));r.forEach(e=>e.forEach(i=>(i.active=!1,i))),this.forEachCells((e,i,s)=>{r[a-1-i][s].active=e.active}),this._matrix=r}rotate45(a){let r=this._matrix.length,e=JSON.parse(JSON.stringify(this._matrix));e.forEach(s=>s.forEach(n=>(n.active=!1,n)));let i=!0;for(let s=0;s<r;s++)for(let n=0;n<r;n++){let f=this._matrix[r-n-1][s].active;if(f){let{x:l,y:t}=e[s][n];if(e[s][n].active=f,a[l][t]?.drawed){i=!1;break}}}i&&(this._matrix=e)}static getRandomFigure(){let a=[new c([[{x:0,y:0,active:!0},{x:1,y:0},{x:2,y:0}],[{x:0,y:1,active:!0},{x:1,y:1},{x:2,y:1}],[{x:0,y:2,active:!0},{x:1,y:2,active:!0},{x:2,y:2}]],0),new c([[{x:0,y:0},{x:1,y:0,active:!0},{x:2,y:0}],[{x:0,y:1},{x:1,y:1,active:!0},{x:2,y:1}],[{x:0,y:2,active:!0},{x:1,y:2,active:!0},{x:2,y:2}]],1),new c([[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0}],[{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:3,y:1}],[{x:0,y:2,active:!0},{x:1,y:2,active:!0},{x:2,y:2,active:!0},{x:3,y:2,active:!0}],[{x:0,y:3},{x:1,y:3},{x:2,y:3},{x:3,y:3}]],2),new c([[{x:0,y:0},{x:1,y:0},{x:2,y:0}],[{x:0,y:1},{x:1,y:1,active:!0},{x:2,y:1}],[{x:0,y:2,active:!0},{x:1,y:2,active:!0},{x:2,y:2,active:!0}]],3),new c([[{x:0,y:0,active:!0},{x:1,y:0,active:!0}],[{x:0,y:1,active:!0},{x:1,y:1,active:!0}]],4)],r=Math.floor(Math.random()*a.length),e=a[r];return r==0?e.setColor("rgb(139, 50, 168)"):r==1?e.setColor("rgb(1, 105, 58)"):r==2?e.setColor("rgb(50, 85, 168)"):r==3?e.setColor("rgb(131, 121, 242)"):e.setColor("rgb(179, 43, 43)"),e.mapCells(i=>(i.active||(i.active=!1),i)),e}};var T1={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]};var F1={prefix:"fas",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]};var q3={prefix:"fas",iconName:"circle-pause",icon:[512,512,[62092,"pause-circle"],"f28b","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z"]},B1=q3;var D1={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"]};var R1={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]};var _1={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]};var E1={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};function O1(c,a){var r=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),r.push.apply(r,e)}return r}function m(c){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?O1(Object(r),!0).forEach(function(e){u(c,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(r)):O1(Object(r)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(r,e))})}return c}function P2(c){"@babel/helpers - typeof";return P2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},P2(c)}function G3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function U1(c,a){for(var r=0;r<a.length;r++){var e=a[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function j3(c,a,r){return a&&U1(c.prototype,a),r&&U1(c,r),Object.defineProperty(c,"prototype",{writable:!1}),c}function u(c,a,r){return a in c?Object.defineProperty(c,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):c[a]=r,c}function f1(c,a){return Y3(c)||Q3(c,a)||H3(c,a)||J3()}function V2(c){return X3(c)||$3(c)||H3(c)||K3()}function X3(c){if(Array.isArray(c))return Q2(c)}function Y3(c){if(Array.isArray(c))return c}function $3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Q3(c,a){var r=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(r!=null){var e=[],i=!0,s=!1,n,f;try{for(r=r.call(c);!(i=(n=r.next()).done)&&(e.push(n.value),!(a&&e.length===a));i=!0);}catch(l){s=!0,f=l}finally{try{!i&&r.return!=null&&r.return()}finally{if(s)throw f}}return e}}function H3(c,a){if(c){if(typeof c=="string")return Q2(c,a);var r=Object.prototype.toString.call(c).slice(8,-1);if(r==="Object"&&c.constructor&&(r=c.constructor.name),r==="Map"||r==="Set")return Array.from(c);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Q2(c,a)}}function Q2(c,a){(a==null||a>c.length)&&(a=c.length);for(var r=0,e=new Array(a);r<a;r++)e[r]=c[r];return e}function K3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var I1=function(){},l1={},v3={},z3=null,h3={mark:I1,measure:I1};try{typeof window<"u"&&(l1=window),typeof document<"u"&&(v3=document),typeof MutationObserver<"u"&&(z3=MutationObserver),typeof performance<"u"&&(h3=performance)}catch{}var Z3=l1.navigator||{},W1=Z3.userAgent,q1=W1===void 0?"":W1,G=l1,M=v3,G1=z3,d2=h3,O6=!!G.document,E=!!M.documentElement&&!!M.head&&typeof M.addEventListener=="function"&&typeof M.createElement=="function",V3=~q1.indexOf("MSIE")||~q1.indexOf("Trident/"),L2,g2,x2,b2,N2,D="___FONT_AWESOME___",K2=16,M3="fa",p3="svg-inline--fa",J="data-fa-i2svg",J2="data-fa-pseudo-element",c4="data-fa-pseudo-element-pending",o1="data-prefix",t1="data-icon",j1="fontawesome-i2svg",a4="async",e4=["HTML","HEAD","STYLE","SCRIPT"],u3=function(){try{return!0}catch{return!1}}(),V="classic",p="sharp",m1=[V,p];function M2(c){return new Proxy(c,{get:function(r,e){return e in r?r[e]:r[V]}})}var m2=M2((L2={},u(L2,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),u(L2,p,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),L2)),H2=M2((g2={},u(g2,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),u(g2,p,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),g2)),v2=M2((x2={},u(x2,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),u(x2,p,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),x2)),r4=M2((b2={},u(b2,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),u(b2,p,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),b2)),i4=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,C3="fa-layers-text",s4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,n4=M2((N2={},u(N2,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),u(N2,p,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),N2)),d3=[1,2,3,4,5,6,7,8,9,10],f4=d3.concat([11,12,13,14,15,16,17,18,19,20]),l4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},z2=new Set;Object.keys(H2[V]).map(z2.add.bind(z2));Object.keys(H2[p]).map(z2.add.bind(z2));var o4=[].concat(m1,V2(z2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Q.GROUP,Q.SWAP_OPACITY,Q.PRIMARY,Q.SECONDARY]).concat(d3.map(function(c){return"".concat(c,"x")})).concat(f4.map(function(c){return"w-".concat(c)})),o2=G.FontAwesomeConfig||{};function t4(c){var a=M.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function m4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}M&&typeof M.querySelector=="function"&&(X1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],X1.forEach(function(c){var a=f1(c,2),r=a[0],e=a[1],i=m4(t4(r));i!=null&&(o2[e]=i)}));var X1,L3={styleDefault:"solid",familyDefault:"classic",cssPrefix:M3,replacementClass:p3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};o2.familyPrefix&&(o2.cssPrefix=o2.familyPrefix);var i2=m(m({},L3),o2);i2.autoReplaceSvg||(i2.observeMutations=!1);var H={};Object.keys(L3).forEach(function(c){Object.defineProperty(H,c,{enumerable:!0,set:function(r){i2[c]=r,t2.forEach(function(e){return e(H)})},get:function(){return i2[c]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(a){i2.cssPrefix=a,t2.forEach(function(r){return r(H)})},get:function(){return i2.cssPrefix}});G.FontAwesomeConfig=H;var t2=[];function H4(c){return t2.push(c),function(){t2.splice(t2.indexOf(c),1)}}var q=K2,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function v4(c){if(!(!c||!E)){var a=M.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var r=M.head.childNodes,e=null,i=r.length-1;i>-1;i--){var s=r[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=s)}return M.head.insertBefore(a,e),c}}var z4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function h2(){for(var c=12,a="";c-- >0;)a+=z4[Math.random()*62|0];return a}function s2(c){for(var a=[],r=(c||[]).length>>>0;r--;)a[r]=c[r];return a}function H1(c){return c.classList?s2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function g3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function h4(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,'="').concat(g3(c[r]),'" ')},"").trim()}function B2(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,": ").concat(c[r].trim(),";")},"")}function v1(c){return c.size!==T.size||c.x!==T.x||c.y!==T.y||c.rotate!==T.rotate||c.flipX||c.flipY}function V4(c){var a=c.transform,r=c.containerWidth,e=c.iconWidth,i={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(s," ").concat(n," ").concat(f)},t={transform:"translate(".concat(e/2*-1," -256)")};return{outer:i,inner:l,path:t}}function M4(c){var a=c.transform,r=c.width,e=r===void 0?K2:r,i=c.height,s=i===void 0?K2:i,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&V3?l+="translate(".concat(a.x/q-e/2,"em, ").concat(a.y/q-s/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/q,"em), calc(-50% + ").concat(a.y/q,"em)) "):l+="translate(".concat(a.x/q,"em, ").concat(a.y/q,"em) "),l+="scale(".concat(a.size/q*(a.flipX?-1:1),", ").concat(a.size/q*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var p4=`:root, :host {
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
}`;function x3(){var c=M3,a=p3,r=H.cssPrefix,e=H.replacementClass,i=p4;if(r!==c||e!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(r,"-")).replace(n,"--".concat(r,"-")).replace(f,".".concat(e))}return i}var Y1=!1;function j2(){H.autoAddCss&&!Y1&&(v4(x3()),Y1=!0)}var u4={mixout:function(){return{dom:{css:x3,insertCss:j2}}},hooks:function(){return{beforeDOMElementCreation:function(){j2()},beforeI2svg:function(){j2()}}}},R=G||{};R[D]||(R[D]={});R[D].styles||(R[D].styles={});R[D].hooks||(R[D].hooks={});R[D].shims||(R[D].shims=[]);var k=R[D],b3=[],C4=function c(){M.removeEventListener("DOMContentLoaded",c),T2=1,b3.map(function(a){return a()})},T2=!1;E&&(T2=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),T2||M.addEventListener("DOMContentLoaded",C4));function d4(c){E&&(T2?setTimeout(c,0):b3.push(c))}function p2(c){var a=c.tag,r=c.attributes,e=r===void 0?{}:r,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?g3(c):"<".concat(a," ").concat(h4(e),">").concat(s.map(p2).join(""),"</").concat(a,">")}function $1(c,a,r){if(c&&c[a]&&c[a][r])return{prefix:a,iconName:r,icon:c[a][r]}}var L4=function(a,r){return function(e,i,s,n){return a.call(r,e,i,s,n)}},X2=function(a,r,e,i){var s=Object.keys(a),n=s.length,f=i!==void 0?L4(r,i):r,l,t,o;for(e===void 0?(l=1,o=a[s[0]]):(l=0,o=e);l<n;l++)t=s[l],o=f(o,a[t],t,a);return o};function g4(c){for(var a=[],r=0,e=c.length;r<e;){var i=c.charCodeAt(r++);if(i>=55296&&i<=56319&&r<e){var s=c.charCodeAt(r++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),r--)}else a.push(i)}return a}function Z2(c){var a=g4(c);return a.length===1?a[0].toString(16):null}function x4(c,a){var r=c.length,e=c.charCodeAt(a),i;return e>=55296&&e<=56319&&r>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(e-55296)*1024+i-56320+65536:e}function Q1(c){return Object.keys(c).reduce(function(a,r){var e=c[r],i=!!e.icon;return i?a[e.iconName]=e.icon:a[r]=e,a},{})}function c1(c,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=r.skipHooks,i=e===void 0?!1:e,s=Q1(a);typeof k.hooks.addPack=="function"&&!i?k.hooks.addPack(c,Q1(a)):k.styles[c]=m(m({},k.styles[c]||{}),s),c==="fas"&&c1("fa",a)}var S2,w2,k2,a2=k.styles,b4=k.shims,N4=(S2={},u(S2,V,Object.values(v2[V])),u(S2,p,Object.values(v2[p])),S2),z1=null,N3={},S3={},w3={},k3={},y3={},S4=(w2={},u(w2,V,Object.keys(m2[V])),u(w2,p,Object.keys(m2[p])),w2);function w4(c){return~o4.indexOf(c)}function k4(c,a){var r=a.split("-"),e=r[0],i=r.slice(1).join("-");return e===c&&i!==""&&!w4(i)?i:null}var A3=function(){var a=function(s){return X2(a2,function(n,f,l){return n[l]=X2(f,s,{}),n},{})};N3=a(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var f=s[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){i[l.toString(16)]=n})}return i}),S3=a(function(i,s,n){if(i[n]=n,s[2]){var f=s[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){i[l]=n})}return i}),y3=a(function(i,s,n){var f=s[2];return i[n]=n,f.forEach(function(l){i[l]=n}),i});var r="far"in a2||H.autoFetchSvg,e=X2(b4,function(i,s){var n=s[0],f=s[1],l=s[2];return f==="far"&&!r&&(f="fas"),typeof n=="string"&&(i.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:f,iconName:l}),i},{names:{},unicodes:{}});w3=e.names,k3=e.unicodes,z1=D2(H.styleDefault,{family:H.familyDefault})};H4(function(c){z1=D2(c.styleDefault,{family:H.familyDefault})});A3();function h1(c,a){return(N3[c]||{})[a]}function y4(c,a){return(S3[c]||{})[a]}function K(c,a){return(y3[c]||{})[a]}function P3(c){return w3[c]||{prefix:null,iconName:null}}function A4(c){var a=k3[c],r=h1("fas",c);return a||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function j(){return z1}var V1=function(){return{prefix:null,iconName:null,rest:[]}};function D2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.family,e=r===void 0?V:r,i=m2[e][c],s=H2[e][c]||H2[e][i],n=c in k.styles?c:null;return s||n||null}var K1=(k2={},u(k2,V,Object.keys(v2[V])),u(k2,p,Object.keys(v2[p])),k2);function R2(c){var a,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.skipLookups,i=e===void 0?!1:e,s=(a={},u(a,V,"".concat(H.cssPrefix,"-").concat(V)),u(a,p,"".concat(H.cssPrefix,"-").concat(p)),a),n=null,f=V;(c.includes(s[V])||c.some(function(t){return K1[V].includes(t)}))&&(f=V),(c.includes(s[p])||c.some(function(t){return K1[p].includes(t)}))&&(f=p);var l=c.reduce(function(t,o){var v=k4(H.cssPrefix,o);if(a2[o]?(o=N4[f].includes(o)?r4[f][o]:o,n=o,t.prefix=o):S4[f].indexOf(o)>-1?(n=o,t.prefix=D2(o,{family:f})):v?t.iconName=v:o!==H.replacementClass&&o!==s[V]&&o!==s[p]&&t.rest.push(o),!i&&t.prefix&&t.iconName){var z=n==="fa"?P3(t.iconName):{},h=K(t.prefix,t.iconName);z.prefix&&(n=null),t.iconName=z.iconName||h||t.iconName,t.prefix=z.prefix||t.prefix,t.prefix==="far"&&!a2.far&&a2.fas&&!H.autoFetchSvg&&(t.prefix="fas")}return t},V1());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===p&&(a2.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=K(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=j()||"fas"),l}var P4=function(){function c(){G3(this,c),this.definitions={}}return j3(c,[{key:"add",value:function(){for(var r=this,e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){r.definitions[f]=m(m({},r.definitions[f]||{}),n[f]),c1(f,n[f]);var l=v2[V][f];l&&c1(l,n[f]),A3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,e){var i=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(i).map(function(s){var n=i[s],f=n.prefix,l=n.iconName,t=n.icon,o=t[2];r[f]||(r[f]={}),o.length>0&&o.forEach(function(v){typeof v=="string"&&(r[f][v]=t)}),r[f][l]=t}),r}}]),c}(),J1=[],e2={},r2={},T4=Object.keys(r2);function F4(c,a){var r=a.mixoutsTo;return J1=c,e2={},Object.keys(r2).forEach(function(e){T4.indexOf(e)===-1&&delete r2[e]}),J1.forEach(function(e){var i=e.mixout?e.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(r[n]=i[n]),P2(i[n])==="object"&&Object.keys(i[n]).forEach(function(f){r[n]||(r[n]={}),r[n][f]=i[n][f]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(n){e2[n]||(e2[n]=[]),e2[n].push(s[n])})}e.provides&&e.provides(r2)}),r}function a1(c,a){for(var r=arguments.length,e=new Array(r>2?r-2:0),i=2;i<r;i++)e[i-2]=arguments[i];var s=e2[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(e))}),a}function Z(c){for(var a=arguments.length,r=new Array(a>1?a-1:0),e=1;e<a;e++)r[e-1]=arguments[e];var i=e2[c]||[];i.forEach(function(s){s.apply(null,r)})}function _(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return r2[c]?r2[c].apply(null,a):void 0}function e1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,r=c.prefix||j();if(a)return a=K(r,a)||a,$1(T3.definitions,r,a)||$1(k.styles,r,a)}var T3=new P4,B4=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,Z("noAuto")},D4={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return E?(Z("beforeI2svg",a),_("pseudoElements2svg",a),_("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,d4(function(){_4({autoReplaceSvgRoot:r}),Z("watch",a)})}},R4={icon:function(a){if(a===null)return null;if(P2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:K(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var r=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=D2(a[0]);return{prefix:e,iconName:K(e,r)||r}}if(typeof a=="string"&&(a.indexOf("".concat(H.cssPrefix,"-"))>-1||a.match(i4))){var i=R2(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||j(),iconName:K(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=j();return{prefix:s,iconName:K(s,a)||a}}}},N={noAuto:B4,config:H,dom:D4,parse:R4,library:T3,findIconDefinition:e1,toHtml:p2},_4=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot,e=r===void 0?M:r;(Object.keys(k.styles).length>0||H.autoFetchSvg)&&E&&H.autoReplaceSvg&&N.dom.i2svg({node:e})};function _2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return p2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(E){var e=M.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function E4(c){var a=c.children,r=c.main,e=c.mask,i=c.attributes,s=c.styles,n=c.transform;if(v1(n)&&r.found&&!e.found){var f=r.width,l=r.height,t={x:f/l/2,y:.5};i.style=B2(m(m({},s),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function O4(c){var a=c.prefix,r=c.iconName,e=c.children,i=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(H.cssPrefix,"-").concat(r):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},i),{},{id:n}),children:e}]}]}function M1(c){var a=c.icons,r=a.main,e=a.mask,i=c.prefix,s=c.iconName,n=c.transform,f=c.symbol,l=c.title,t=c.maskId,o=c.titleId,v=c.extra,z=c.watchable,h=z===void 0?!1:z,d=e.found?e:r,S=d.width,w=d.height,y=i==="fak",C=[H.replacementClass,s?"".concat(H.cssPrefix,"-").concat(s):""].filter(function(O){return v.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(v.classes).join(" "),L={children:[],attributes:m(m({},v.attributes),{},{"data-prefix":i,"data-icon":s,class:C,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(w)})},A=y&&!~v.classes.indexOf("fa-fw")?{width:"".concat(S/w*16*.0625,"em")}:{};h&&(L.attributes[J]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(o||h2())},children:[l]}),delete L.attributes.title);var b=m(m({},L),{},{prefix:i,iconName:s,main:r,mask:e,maskId:t,transform:n,symbol:f,styles:m(m({},A),v.styles)}),Y=e.found&&r.found?_("generateAbstractMask",b)||{children:[],attributes:{}}:_("generateAbstractIcon",b)||{children:[],attributes:{}},$=Y.children,E2=Y.attributes;return b.children=$,b.attributes=E2,f?O4(b):E4(b)}function Z1(c){var a=c.content,r=c.width,e=c.height,i=c.transform,s=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,t=m(m(m({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});l&&(t[J]="");var o=m({},n.styles);v1(i)&&(o.transform=M4({transform:i,startCentered:!0,width:r,height:e}),o["-webkit-transform"]=o.transform);var v=B2(o);v.length>0&&(t.style=v);var z=[];return z.push({tag:"span",attributes:t,children:[a]}),s&&z.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),z}function U4(c){var a=c.content,r=c.title,e=c.extra,i=m(m(m({},e.attributes),r?{title:r}:{}),{},{class:e.classes.join(" ")}),s=B2(e.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[a]}),r&&n.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),n}var Y2=k.styles;function r1(c){var a=c[0],r=c[1],e=c.slice(4),i=f1(e,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(Q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Q.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Q.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:r,icon:n}}var I4={found:!1,width:512,height:512};function W4(c,a){!u3&&!H.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function i1(c,a){var r=a;return a==="fa"&&H.styleDefault!==null&&(a=j()),new Promise(function(e,i){var s={found:!1,width:512,height:512,icon:_("missingIconAbstract")||{}};if(r==="fa"){var n=P3(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&Y2[a]&&Y2[a][c]){var f=Y2[a][c];return e(r1(f))}W4(c,a),e(m(m({},I4),{},{icon:H.showMissingIcons&&c?_("missingIconAbstract")||{}:{}}))})}var c3=function(){},s1=H.measurePerformance&&d2&&d2.mark&&d2.measure?d2:{mark:c3,measure:c3},l2='FA "6.5.1"',q4=function(a){return s1.mark("".concat(l2," ").concat(a," begins")),function(){return F3(a)}},F3=function(a){s1.mark("".concat(l2," ").concat(a," ends")),s1.measure("".concat(l2," ").concat(a),"".concat(l2," ").concat(a," begins"),"".concat(l2," ").concat(a," ends"))},p1={begin:q4,end:F3},y2=function(){};function a3(c){var a=c.getAttribute?c.getAttribute(J):null;return typeof a=="string"}function G4(c){var a=c.getAttribute?c.getAttribute(o1):null,r=c.getAttribute?c.getAttribute(t1):null;return a&&r}function j4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(H.replacementClass)}function X4(){if(H.autoReplaceSvg===!0)return A2.replace;var c=A2[H.autoReplaceSvg];return c||A2.replace}function Y4(c){return M.createElementNS("http://www.w3.org/2000/svg",c)}function $4(c){return M.createElement(c)}function B3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.ceFn,e=r===void 0?c.tag==="svg"?Y4:$4:r;if(typeof c=="string")return M.createTextNode(c);var i=e(c.tag);Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){i.appendChild(B3(n,{ceFn:e}))}),i}function Q4(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var A2={replace:function(a){var r=a[0];if(r.parentNode)if(a[1].forEach(function(i){r.parentNode.insertBefore(B3(i),r)}),r.getAttribute(J)===null&&H.keepOriginalSource){var e=M.createComment(Q4(r));r.parentNode.replaceChild(e,r)}else r.remove()},nest:function(a){var r=a[0],e=a[1];if(~H1(r).indexOf(H.replacementClass))return A2.replace(a);var i=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(f,l){return l===H.replacementClass||l.match(i)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",s.toNode.join(" "))}var n=e.map(function(f){return p2(f)}).join(`
`);r.setAttribute(J,""),r.innerHTML=n}};function e3(c){c()}function D3(c,a){var r=typeof a=="function"?a:y2;if(c.length===0)r();else{var e=e3;H.mutateApproach===a4&&(e=G.requestAnimationFrame||e3),e(function(){var i=X4(),s=p1.begin("mutate");c.map(i),s(),r()})}}var u1=!1;function R3(){u1=!0}function n1(){u1=!1}var F2=null;function r3(c){if(G1&&H.observeMutations){var a=c.treeCallback,r=a===void 0?y2:a,e=c.nodeCallback,i=e===void 0?y2:e,s=c.pseudoElementsCallback,n=s===void 0?y2:s,f=c.observeMutationsRoot,l=f===void 0?M:f;F2=new G1(function(t){if(!u1){var o=j();s2(t).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!a3(v.addedNodes[0])&&(H.searchPseudoElements&&n(v.target),r(v.target)),v.type==="attributes"&&v.target.parentNode&&H.searchPseudoElements&&n(v.target.parentNode),v.type==="attributes"&&a3(v.target)&&~l4.indexOf(v.attributeName))if(v.attributeName==="class"&&G4(v.target)){var z=R2(H1(v.target)),h=z.prefix,d=z.iconName;v.target.setAttribute(o1,h||o),d&&v.target.setAttribute(t1,d)}else j4(v.target)&&i(v.target)})}}),E&&F2.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function K4(){F2&&F2.disconnect()}function J4(c){var a=c.getAttribute("style"),r=[];return a&&(r=a.split(";").reduce(function(e,i){var s=i.split(":"),n=s[0],f=s.slice(1);return n&&f.length>0&&(e[n]=f.join(":").trim()),e},{})),r}function Z4(c){var a=c.getAttribute("data-prefix"),r=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",i=R2(H1(c));return i.prefix||(i.prefix=j()),a&&r&&(i.prefix=a,i.iconName=r),i.iconName&&i.prefix||(i.prefix&&e.length>0&&(i.iconName=y4(i.prefix,c.innerText)||h1(i.prefix,Z2(c.innerText))),!i.iconName&&H.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function c6(c){var a=s2(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),r=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return H.autoA11y&&(r?a["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(e||h2()):(a["aria-hidden"]="true",a.focusable="false")),a}function a6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function i3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=Z4(c),e=r.iconName,i=r.prefix,s=r.rest,n=c6(c),f=a1("parseNodeAttributes",{},c),l=a.styleParser?J4(c):[];return m({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:n}},f)}var e6=k.styles;function _3(c){var a=H.autoReplaceSvg==="nest"?i3(c,{styleParser:!1}):i3(c);return~a.extra.classes.indexOf(C3)?_("generateLayersText",c,a):_("generateSvgReplacementMutation",c,a)}var X=new Set;m1.map(function(c){X.add("fa-".concat(c))});Object.keys(m2[V]).map(X.add.bind(X));Object.keys(m2[p]).map(X.add.bind(X));X=V2(X);function s3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!E)return Promise.resolve();var r=M.documentElement.classList,e=function(v){return r.add("".concat(j1,"-").concat(v))},i=function(v){return r.remove("".concat(j1,"-").concat(v))},s=H.autoFetchSvg?X:m1.map(function(o){return"fa-".concat(o)}).concat(Object.keys(e6));s.includes("fa")||s.push("fa");var n=[".".concat(C3,":not([").concat(J,"])")].concat(s.map(function(o){return".".concat(o,":not([").concat(J,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=s2(c.querySelectorAll(n))}catch{}if(f.length>0)e("pending"),i("complete");else return Promise.resolve();var l=p1.begin("onTree"),t=f.reduce(function(o,v){try{var z=_3(v);z&&o.push(z)}catch(h){u3||h.name==="MissingIcon"&&console.error(h)}return o},[]);return new Promise(function(o,v){Promise.all(t).then(function(z){D3(z,function(){e("active"),e("complete"),i("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(z){l(),v(z)})})}function r6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_3(c).then(function(r){r&&D3([r],a)})}function i6(c){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:e1(a||{}),i=r.mask;return i&&(i=(i||{}).icon?i:e1(i||{})),c(e,m(m({},r),{},{mask:i}))}}var s6=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.transform,i=e===void 0?T:e,s=r.symbol,n=s===void 0?!1:s,f=r.mask,l=f===void 0?null:f,t=r.maskId,o=t===void 0?null:t,v=r.title,z=v===void 0?null:v,h=r.titleId,d=h===void 0?null:h,S=r.classes,w=S===void 0?[]:S,y=r.attributes,C=y===void 0?{}:y,L=r.styles,A=L===void 0?{}:L;if(a){var b=a.prefix,Y=a.iconName,$=a.icon;return _2(m({type:"icon"},a),function(){return Z("beforeDOMElementCreation",{iconDefinition:a,params:r}),H.autoA11y&&(z?C["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(d||h2()):(C["aria-hidden"]="true",C.focusable="false")),M1({icons:{main:r1($),mask:l?r1(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:Y,transform:m(m({},T),i),symbol:n,title:z,maskId:o,titleId:d,extra:{attributes:C,styles:A,classes:w}})})}},n6={mixout:function(){return{icon:i6(s6)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=s3,r.nodeCallback=r6,r}}},provides:function(a){a.i2svg=function(r){var e=r.node,i=e===void 0?M:e,s=r.callback,n=s===void 0?function(){}:s;return s3(i,n)},a.generateSvgReplacementMutation=function(r,e){var i=e.iconName,s=e.title,n=e.titleId,f=e.prefix,l=e.transform,t=e.symbol,o=e.mask,v=e.maskId,z=e.extra;return new Promise(function(h,d){Promise.all([i1(i,f),o.iconName?i1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var w=f1(S,2),y=w[0],C=w[1];h([r,M1({icons:{main:y,mask:C},prefix:f,iconName:i,transform:l,symbol:t,maskId:v,title:s,titleId:n,extra:z,watchable:!0})])}).catch(d)})},a.generateAbstractIcon=function(r){var e=r.children,i=r.attributes,s=r.main,n=r.transform,f=r.styles,l=B2(f);l.length>0&&(i.style=l);var t;return v1(n)&&(t=_("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),e.push(t||s.icon),{children:e,attributes:i}}}},f6={mixout:function(){return{layer:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.classes,s=i===void 0?[]:i;return _2({type:"layer"},function(){Z("beforeDOMElementCreation",{assembler:r,params:e});var n=[];return r(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(V2(s)).join(" ")},children:n}]})}}}},l6={mixout:function(){return{counter:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.title,s=i===void 0?null:i,n=e.classes,f=n===void 0?[]:n,l=e.attributes,t=l===void 0?{}:l,o=e.styles,v=o===void 0?{}:o;return _2({type:"counter",content:r},function(){return Z("beforeDOMElementCreation",{content:r,params:e}),U4({content:r.toString(),title:s,extra:{attributes:t,styles:v,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(V2(f))}})})}}}},o6={mixout:function(){return{text:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.transform,s=i===void 0?T:i,n=e.title,f=n===void 0?null:n,l=e.classes,t=l===void 0?[]:l,o=e.attributes,v=o===void 0?{}:o,z=e.styles,h=z===void 0?{}:z;return _2({type:"text",content:r},function(){return Z("beforeDOMElementCreation",{content:r,params:e}),Z1({content:r,transform:m(m({},T),s),title:f,extra:{attributes:v,styles:h,classes:["".concat(H.cssPrefix,"-layers-text")].concat(V2(t))}})})}}},provides:function(a){a.generateLayersText=function(r,e){var i=e.title,s=e.transform,n=e.extra,f=null,l=null;if(V3){var t=parseInt(getComputedStyle(r).fontSize,10),o=r.getBoundingClientRect();f=o.width/t,l=o.height/t}return H.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([r,Z1({content:r.innerHTML,width:f,height:l,transform:s,title:i,extra:n,watchable:!0})])}}},t6=new RegExp('"',"ug"),n3=[1105920,1112319];function m6(c){var a=c.replace(t6,""),r=x4(a,0),e=r>=n3[0]&&r<=n3[1],i=a.length===2?a[0]===a[1]:!1;return{value:Z2(i?a[0]:a),isSecondary:e||i}}function f3(c,a){var r="".concat(c4).concat(a.replace(":","-"));return new Promise(function(e,i){if(c.getAttribute(r)!==null)return e();var s=s2(c.children),n=s.filter(function($){return $.getAttribute(J2)===a})[0],f=G.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(s4),t=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),e();if(l&&o!=="none"&&o!==""){var v=f.getPropertyValue("content"),z=~["Sharp"].indexOf(l[2])?p:V,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?H2[z][l[2].toLowerCase()]:n4[z][t],d=m6(v),S=d.value,w=d.isSecondary,y=l[0].startsWith("FontAwesome"),C=h1(h,S),L=C;if(y){var A=A4(S);A.iconName&&A.prefix&&(C=A.iconName,h=A.prefix)}if(C&&!w&&(!n||n.getAttribute(o1)!==h||n.getAttribute(t1)!==L)){c.setAttribute(r,L),n&&c.removeChild(n);var b=a6(),Y=b.extra;Y.attributes[J2]=a,i1(C,h).then(function($){var E2=M1(m(m({},b),{},{icons:{main:$,mask:V1()},prefix:h,iconName:L,extra:Y,watchable:!0})),O=M.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(O,c.firstChild):c.appendChild(O),O.outerHTML=E2.map(function(W3){return p2(W3)}).join(`
`),c.removeAttribute(r),e()}).catch(i)}else e()}else e()})}function H6(c){return Promise.all([f3(c,"::before"),f3(c,"::after")])}function v6(c){return c.parentNode!==document.head&&!~e4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(J2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function l3(c){if(E)return new Promise(function(a,r){var e=s2(c.querySelectorAll("*")).filter(v6).map(H6),i=p1.begin("searchPseudoElements");R3(),Promise.all(e).then(function(){i(),n1(),a()}).catch(function(){i(),n1(),r()})})}var z6={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=l3,r}}},provides:function(a){a.pseudoElements2svg=function(r){var e=r.node,i=e===void 0?M:e;H.searchPseudoElements&&l3(i)}}},o3=!1,h6={mixout:function(){return{dom:{unwatch:function(){R3(),o3=!0}}}},hooks:function(){return{bootstrap:function(){r3(a1("mutationObserverCallbacks",{}))},noAuto:function(){K4()},watch:function(r){var e=r.observeMutationsRoot;o3?n1():r3(a1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},t3=function(a){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,i){var s=i.toLowerCase().split("-"),n=s[0],f=s.slice(1).join("-");if(n&&f==="h")return e.flipX=!0,e;if(n&&f==="v")return e.flipY=!0,e;if(f=parseFloat(f),isNaN(f))return e;switch(n){case"grow":e.size=e.size+f;break;case"shrink":e.size=e.size-f;break;case"left":e.x=e.x-f;break;case"right":e.x=e.x+f;break;case"up":e.y=e.y-f;break;case"down":e.y=e.y+f;break;case"rotate":e.rotate=e.rotate+f;break}return e},r)},V6={mixout:function(){return{parse:{transform:function(r){return t3(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-transform");return i&&(r.transform=t3(i)),r}}},provides:function(a){a.generateAbstractTransformGrouping=function(r){var e=r.main,i=r.transform,s=r.containerWidth,n=r.iconWidth,f={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),t="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),o="rotate(".concat(i.rotate," 0 0)"),v={transform:"".concat(l," ").concat(t," ").concat(o)},z={transform:"translate(".concat(n/2*-1," -256)")},h={outer:f,inner:v,path:z};return{tag:"g",attributes:m({},h.outer),children:[{tag:"g",attributes:m({},h.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:m(m({},e.icon.attributes),h.path)}]}]}}}},$2={x:0,y:0,width:"100%",height:"100%"};function m3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function M6(c){return c.tag==="g"?c.children:[c]}var p6={hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-mask"),s=i?R2(i.split(" ").map(function(n){return n.trim()})):V1();return s.prefix||(s.prefix=j()),r.mask=s,r.maskId=e.getAttribute("data-fa-mask-id"),r}}},provides:function(a){a.generateAbstractMask=function(r){var e=r.children,i=r.attributes,s=r.main,n=r.mask,f=r.maskId,l=r.transform,t=s.width,o=s.icon,v=n.width,z=n.icon,h=V4({transform:l,containerWidth:v,iconWidth:t}),d={tag:"rect",attributes:m(m({},$2),{},{fill:"white"})},S=o.children?{children:o.children.map(m3)}:{},w={tag:"g",attributes:m({},h.inner),children:[m3(m({tag:o.tag,attributes:m(m({},o.attributes),h.path)},S))]},y={tag:"g",attributes:m({},h.outer),children:[w]},C="mask-".concat(f||h2()),L="clip-".concat(f||h2()),A={tag:"mask",attributes:m(m({},$2),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,y]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:M6(z)},A]};return e.push(b,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(C,")")},$2)}),{children:e,attributes:i}}}},u6={provides:function(a){var r=!1;G.matchMedia&&(r=G.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:m(m({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=m(m({},s),{},{attributeName:"opacity"}),f={tag:"circle",attributes:m(m({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||f.children.push({tag:"animate",attributes:m(m({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(f),e.push({tag:"path",attributes:m(m({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:m(m({},n),{},{values:"1;0;0;0;0;1;"})}]}),r||e.push({tag:"path",attributes:m(m({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},C6={hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return r.symbol=s,r}}}},d6=[u4,n6,f6,l6,o6,z6,h6,V6,p6,u6,C6];F4(d6,{mixoutsTo:N});var U6=N.noAuto,I6=N.config,W6=N.library,q6=N.dom,E3=N.parse,G6=N.findIconDefinition,j6=N.toHtml,O3=N.icon,X6=N.layer,L6=N.text,g6=N.counter;var b6=["*"],N6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},S6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},w6=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(r=>a[r]?r:null).filter(r=>r)},k6=c=>c.prefix!==void 0&&c.iconName!==void 0,y6=(c,a)=>k6(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},A6=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=O2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),P6=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...e){for(let i of e){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let s of i.icon[2])typeof s=="string"&&(this.definitions[i.prefix][s]=i)}}addIconPacks(...e){for(let i of e){let s=Object.keys(i).map(n=>i[n]);this.addIcons(...s)}}getIconDefinition(e,i){return e in this.definitions&&i in this.definitions[e]?this.definitions[e][i]:null}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=O2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),T6=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(i){return new(i||a)},a.\u0275dir=g1({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[u2]});let c=a;return c})(),F6=(()=>{let a=class a{constructor(e,i){this.renderer=e,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};a.\u0275fac=function(i){return new(i||a)(U(N1),U(b1))},a.\u0275cmp=n2({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[u2,f2],ngContentSelectors:b6,decls:1,vars:0,template:function(i,s){i&1&&(k1(),y1(0))},encapsulation:2});let c=a;return c})(),U3=(()=>{let a=class a{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,i,s,n,f){this.sanitizer=e,this.config=i,this.iconLibrary=s,this.stackItem=n,this.classes=[],f!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){S6();return}if(e){let i=this.icon!=null?this.icon:this.config.fallbackIcon,s=this.findIconDefinition(i);if(s!=null){let n=this.buildParams();this.renderIcon(s,n)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let i=y6(e,this.config.defaultPrefix);if("icon"in i)return i;let s=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return s??(N6(i),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?E3.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:[...w6(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,i){let s=O3(e,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))}};a.\u0275fac=function(i){return new(i||a)(U(P1),U(A6),U(P6),U(T6,8),U(F6,8))},a.\u0275cmp=n2({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,s){i&2&&(w1("innerHTML",s.renderedIconHTML,x1),S1("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[u2,f2],decls:0,vars:0,template:function(i,s){},encapsulation:2});let c=a;return c})();var I3=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=L1({type:a}),a.\u0275inj=d1({});let c=a;return c})();var D6=["board"],R6=["next_figure"],i0=(()=>{let a=class a{get canvasBoard(){return this._canvasBoard.nativeElement}get canvasNextFigure(){return this._canvasNextFigure.nativeElement}constructor(){this._rows=20,this._rowsNextFigure=6,this._columns=10,this._columnsNextFigure=6,this._blockSize=30,this._blockSizeNextFigure=20,this._canvasBoardWidth=0,this._canvasBoardHeight=0,this._canvasNextFigureWidth=0,this._canvasNextFigureHeight=0,this._timer=350,this._timerGoDown=0,this._boardM=[],this._nextFigureM=[],this._endGame=!1,this.level=0,this.score=0,this.faCirclePlay=F1,this.faRotateRight=D1,this.faPauseCircle=B1,this.faAngleLeft=E1,this.faAngleRight=T1,this.faAngleUp=_1,this.faAngleDown=R1,this.initFigures()}initFigures(){this._figure=W.getRandomFigure(),this.mapCurrentFigureToCenterBoard(),this._nextFigure=W.getRandomFigure(),this.mapNextFigureToCenterBoard()}ngAfterViewInit(){this._nextFigureCTX=this.canvasNextFigure.getContext("2d"),this.setDefaultNextFigureCanvasSize(),this.defineMatrix(this._nextFigureM,this._blockSizeNextFigure,this._canvasNextFigureWidth,this._canvasNextFigureHeight),this.addFigureToMatrix(this._nextFigure,this._nextFigureM),this.drawMatrix(this._nextFigureM,this._nextFigureCTX,this._blockSizeNextFigure),this._boardCTX=this.canvasBoard.getContext("2d"),this.setDefaultBoardSize(),this.defineMatrix(this._boardM)}startIntervalUpdate(e=this._timer){this._boardInterval=setInterval(()=>{this.update()},e)}update(){this._boardCTX.clearRect(0,0,this.canvasBoard.width,this.canvasBoard.height),this.setDefaultFrameStyles(),this.addFigureToMatrix(),this.drawMatrix(),this.figureDownLevel(),this.checkRows()}setDefaultBoardSize(){this._canvasBoardWidth=this._columns*this._blockSize,this._canvasBoardHeight=this._rows*this._blockSize,this.canvasBoard.width=this._canvasBoardWidth,this.canvasBoard.height=this._canvasBoardHeight}setDefaultNextFigureCanvasSize(){this._canvasNextFigureWidth=this._columnsNextFigure*this._blockSizeNextFigure,this._canvasNextFigureHeight=this._rowsNextFigure*this._blockSizeNextFigure,this.canvasNextFigure.width=this._canvasNextFigureWidth,this.canvasNextFigure.height=this._canvasNextFigureHeight}forEachRows(e,i=this._blockSize,s=this._canvasBoardHeight){for(let n=0,f=0;n<s;n+=i,f++)e(n,f)}forEachColumns(e,i=this._blockSize,s=this._canvasBoardWidth){for(let n=0,f=0;n<s;n+=i,f++)e(n,f)}defineMatrix(e,i=this._blockSize,s=this._canvasBoardWidth,n=this._canvasBoardHeight){this.forEachColumns((f,l)=>{e.push([]),this.forEachRows((t,o)=>{e[l][o]={x:f,y:t,drawed:!1}},i,n)},i,s)}setDefaultFrameStyles(){this._boardCTX.fillStyle="rgba(170, 175, 125, 0.2)",this._boardCTX.fillRect(0,0,this.canvasBoard.width,this.canvasBoard.height),this._boardCTX.strokeStyle="rgba(55, 55, 55, .8)",this._boardCTX.lineWidth=.5,this.forEachColumns(e=>{e!=0&&e!=this._columns&&(this._boardCTX.beginPath(),this._boardCTX.moveTo(e,0),this._boardCTX.lineTo(e,this._canvasBoardHeight),this._boardCTX.stroke())}),this.forEachRows(e=>{e!=0&&e!=this._rows&&(this._boardCTX.beginPath(),this._boardCTX.moveTo(0,e),this._boardCTX.lineTo(this._canvasBoardHeight,e),this._boardCTX.lineWidth=.5,this._boardCTX.stroke())})}addFigureToMatrix(e=this._figure,i=this._boardM){e.forEachCells(s=>{if(s.y>=0){let{x:n,y:f,color:l,active:t,drawed:o}=s;t&&(i[n][f].color=l,i[n][f].active=t,i[n][f].drawed=o)}})}drawMatrix(e=this._boardM,i=this._boardCTX,s=this._blockSize){e.forEach(n=>{n.forEach(f=>{let{x:l,y:t,color:o,active:v,drawed:z}=f;(z||v)&&new C2(l,t,o,"transparent",s).draw(i)})})}removeFigureInMatrix(){this._figure.forEachCells(e=>{if(e.y>=0){let{x:i,y:s,active:n}=e;n&&(this._boardM[i][s].color=void 0,this._boardM[i][s].active=!1,this._boardM[i][s].drawed=!1)}})}isEndGame(){return this._boardM.some(e=>e[0].drawed)}cleanFigureNextBoard(){}mapCurrentFigureToCenterBoard(){let{_index:e}=this._figure;this._figure.mapCells(i=>(i.x+=e==2||e==3?3:4,i.y+=e==2||e==-3?-3:-4,i))}mapNextFigureToCenterBoard(){let{_index:e}=this._nextFigure;this._nextFigure.mapCells(i=>(i.x+=e!=2?2:1,i.y+=e!=2&&e!=3?2:1,i))}mapNextFigureToDefault(){let{_index:e}=this._nextFigure;this._nextFigure.mapCells(i=>(i.x+=e!=2?-2:-1,i.y+=e!=2&&e!=3?-2:-1,i))}figureDownLevel(){let e=new W(this._figure.cloneCells(),this._figure._index);e.mapCells(s=>(s.y++,s));let i=e.canDrawInMatrix(this._boardM);this._endGame?clearInterval(this._boardInterval):this._figure._toDraw?this._figure.bothFiguresHaveSameActiveColumns(this._figureCloned)?(this._figure.mapCells(s=>{let{x:n,y:f,active:l}=s;return f>=0&&l&&(this._boardM[n][f].drawed=!0,this._boardM[n][f].active=!1,s.active=!1),f==0&&(this._endGame=!0),s}),this.mapNextFigureToDefault(),this._figure=new W(this._nextFigure.cloneCells(),this._nextFigure._index),this.mapCurrentFigureToCenterBoard(),this.addFigureToMatrix(),this._nextFigure=W.getRandomFigure(),this.mapNextFigureToCenterBoard(),this.defineMatrix(this._nextFigureM,this._blockSizeNextFigure,this._canvasNextFigureWidth,this._canvasNextFigureHeight),this._nextFigureCTX.clearRect(0,0,this.canvasNextFigure.width,this.canvasNextFigure.height),this.addFigureToMatrix(this._nextFigure,this._nextFigureM),this.drawMatrix(this._nextFigureM,this._nextFigureCTX,this._blockSizeNextFigure)):(this._figure._toDraw=!1,this.removeFigureInMatrix()):i?(this.removeFigureInMatrix(),this._figure.downOneLevel()):(this._figureCloned=e,this.removeFigureInMatrix(),this._figure._toDraw=!0)}checkRows(){let e=[],i=JSON.parse(JSON.stringify(this._boardM));for(let s=0;s<this._boardM[0].length;s++)if(this._boardM.every(n=>n[s].drawed)){e.push(s);for(let n=0;n<this._boardM.length;n++)this._boardM[n][s].color="white",i[n].splice(s,1),i[n].unshift({})}if(e.length>0){this.drawMatrix();let s=e.length;for(let n=this._boardM[0].length-1;n>=0;n--)for(let f=this._boardM.length-1;f>=0;f--)this._boardM[f][n].drawed=i[f][n]?.drawed,this._boardM[f][n].color=i[f][n]?.color;this.setScore(s)}}setScore(e){this.score+=e*100,this.level=Number((this.score/(this._rows/4*100)).toFixed(0)),this._timer=this._timer-(this.level>0?2:0),clearInterval(this._boardInterval),this.startIntervalUpdate(this._timer)}onClickGoRight(){this._figure.goRight(this._boardM)}onClickGoLeft(){this._figure.goLeft(this._boardM)}onMouseDownGoDown(){this._timerGoDown!=20&&(clearInterval(this._boardInterval),this._timerGoDown=20,this.startIntervalUpdate(this._timerGoDown))}onClickRotate(){this._figure.rotate45(this._boardM)}onKeyboardKeyDown(e){return C1(this,null,function*(){let{code:i}=e;i==="ArrowRight"&&this.onClickGoRight(),i==="ArrowLeft"&&this.onClickGoLeft(),i==="ArrowDown"&&this.onMouseDownGoDown(),(i==="Space"||i==="Enter")&&this.onClickRotate()})}onMouseUpStopGoDown(){clearInterval(this._boardInterval),this._timerGoDown=this._timer,this.startIntervalUpdate(this._timer)}onKeyboardKeyUp(e){let{code:i}=e;i==="ArrowDown"&&this.onMouseUpStopGoDown()}forEachCellsOfMatrix(e){this._boardM.forEach(i=>{i.forEach(s=>{e(s)})})}onClickInitGame(){this.startIntervalUpdate()}onClickStopGame(){clearInterval(this._boardInterval)}onClickResetGame(){this.level=0,this.score=0,this.defineMatrix(this._boardM),this.initFigures(),clearInterval(this._boardInterval),this.startIntervalUpdate(),this._endGame=!1}ngOnDestroy(){clearInterval(this._boardInterval)}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=n2({type:a,selectors:[["tetris-game"]],viewQuery:function(i,s){if(i&1&&(I2(D6,7),I2(R6,7)),i&2){let n;W2(n=q2())&&(s._canvasBoard=n.first),W2(n=q2())&&(s._canvasNextFigure=n.first)}},hostBindings:function(i,s){i&1&&B("keydown",function(f){return s.onKeyboardKeyDown(f)},!1,U2)("keyup",function(f){return s.onKeyboardKeyUp(f)},!1,U2)},standalone:!0,features:[f2],decls:43,vars:15,consts:[["id","tetris-container"],[1,"body","column"],[1,"game"],[1,"previsual"],[1,"info-panel"],["id","next",1,"next"],["next_figure",""],[1,"level","txt-panel"],[1,"score","txt-panel"],[1,"controls","column"],[2,"margin-top","2rem"],[1,"btn-control",3,"click"],[2,"color","#26194dde",3,"icon","title"],["id","board"],["board",""],[1,"mobile-controls","row"],[1,"controls","row",2,"align-items","flex-end"],[3,"title"],[1,"btn-rotate",3,"click"],[2,"font-size","24px","margin","0"],[1,"btn-control",3,"mousedown","mouseup"]],template:function(i,s){i&1&&(g(0,"div",0)(1,"div",1)(2,"section",2)(3,"div",3)(4,"section",4)(5,"div",5),F(6,"canvas",null,6),x(),g(8,"article",7)(9,"h5"),c2(10,"Level: "),x(),g(11,"p"),c2(12),x()(),g(13,"article",8)(14,"h5"),c2(15,"Score: "),x(),g(16,"p"),c2(17),x()()(),g(18,"section",9)(19,"article",10)(20,"button",11),B("click",function(){return s.onClickInitGame()}),F(21,"fa-icon",12),x(),g(22,"button",11),B("click",function(){return s.onClickStopGame()}),F(23,"fa-icon",12),x(),g(24,"button",11),B("click",function(){return s.onClickResetGame()}),F(25,"fa-icon",12),x()()()(),F(26,"canvas",13,14),x(),g(28,"div",15)(29,"section",16)(30,"span",17)(31,"article")(32,"button",18),B("click",function(){return s.onClickRotate()}),g(33,"p",19),c2(34," - "),x()()()()(),g(35,"section",9)(36,"article")(37,"button",11),B("click",function(){return s.onClickGoLeft()}),F(38,"fa-icon",12),x(),g(39,"button",11),B("click",function(){return s.onClickGoRight()}),F(40,"fa-icon",12),x(),g(41,"button",20),B("mousedown",function(){return s.onMouseDownGoDown()})("mouseup",function(){return s.onMouseUpStopGoDown()}),F(42,"fa-icon",12),x()()()()()()),i&2&&(P(12),G2(s.level),P(5),G2(s.score),P(4),I("icon",s.faCirclePlay)("title","Iniciar Juego"),P(2),I("icon",s.faPauseCircle)("title","Pausar Juego"),P(2),I("icon",s.faRotateRight)("title","Reiniciar Juego"),P(5),I("title","Rotar pieza"),P(8),I("icon",s.faAngleLeft)("title","Mover a izquierda"),P(2),I("icon",s.faAngleRight)("title","Mover a derecha"),P(2),I("icon",s.faAngleDown)("title","Incrementar ca\xEDda"))},dependencies:[A1,I3,U3],styles:["*[_ngcontent-%COMP%]{color:#2f254efc}#tetris-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:2rem;justify-content:center;width:calc(100% - 4px);height:calc(100% - 4px);background:linear-gradient(to right,#5e35b1cc,#1976d2cc)}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:center;width:max-content;height:max-content}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:center;height:100%;padding:1em;border:2px solid linear-gradient(to right,rgba(94,53,177,.65),rgba(25,118,210,.65));border-radius:3px;box-shadow:1px -1px 6px 1px #00000080}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding-right:.5rem}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]{display:block;padding:5px;border-radius:3px;border:2px solid rgba(0,0,0,.3);background-color:#fefefe0d}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{border:0;max-width:80%;min-height:70%}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .txt-panel[_ngcontent-%COMP%]{display:flex}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%], #tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]{background-color:#f3fff914;margin:.5em .35rem 0 .35em;display:flex;justify-content:space-between;align-items:center;border-radius:3px;padding:.3em .25em}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:15px;width:50px;margin:0}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:17px;width:fit-content;margin:0}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{border:2px solid rgba(50,55,50,.3)}.row[_ngcontent-%COMP%]{flex-direction:row}.column[_ngcontent-%COMP%]{flex-direction:column;column-gap:.5rem}.controls[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;column-gap:.5rem;height:100%}.controls[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;column-gap:.05rem;width:100%}.controls[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:2.5em;width:2.5rem;border:none;border:2px outset rgba(0,0,0,.3);border-radius:3px;background-color:#f3fff914}.controls[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:.65;transition:.2ms;border:2px solid rgba(0,0,0,.65)}.mobile-controls[_ngcontent-%COMP%]{padding:.5rem 0rem;margin-top:1rem;width:100%;display:flex;align-items:center;justify-content:space-around;border:2px solid linear-gradient(to right,rgba(94,53,177,.65),rgba(25,118,210,.65));border-radius:3px;box-shadow:1px -1px 6px 1px #00000080}.btn-rotate[_ngcontent-%COMP%]{width:150px!important}@keyframes _ngcontent-%COMP%_roll{0%{transform:translateY(0);opacity:1}to{transform:translateY(-70px);opacity:0}}i[_ngcontent-%COMP%]{font-size:14px;font-style:normal;font-weight:550}@media only screen and (max-width: 515px){#next[_ngcontent-%COMP%]{max-width:75px}#board[_ngcontent-%COMP%]{max-width:250px}  .btn-rotate{height:1.5em!important;width:3rem}  .btn-rotate svg{height:100%;width:100%}  .btn-control{height:1.5em!important;width:1.5em!important}  .btn-control svg{height:100%;width:100%}}@media only screen and (max-width: 420px){#next[_ngcontent-%COMP%]{max-width:75px}#board[_ngcontent-%COMP%]{max-width:150px}  .btn-rotate{height:1.5em!important;width:3rem}  .btn-rotate svg{height:100%;width:100%}  .btn-control{height:1.5em!important;width:1.5em!important}  .btn-control svg{height:100%;width:100%}}@media only screen and (max-width: 300px){#next[_ngcontent-%COMP%]{max-width:65px}#board[_ngcontent-%COMP%]{max-width:130px}  .btn-rotate{height:1.5em!important;width:3rem}  .btn-rotate svg{height:100%;width:100%}  .btn-control{height:1.5em!important;width:1.5em!important}  .btn-control svg{height:100%;width:100%}}"]});let c=a;return c})();export{i0 as TetrisComponent};
