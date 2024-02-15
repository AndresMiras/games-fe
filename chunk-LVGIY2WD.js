import{$ as b1,Aa as f2,Ga as A1,K as U2,Ka as P1,L as L1,R as n2,S as g1,T as x1,U as u2,_ as I2,aa as N1,ba as C2,c as d1,ca as P,da as T,la as S1,ma as I,na as g,oa as x,pa as B,qa as w1,sa as D,ta as k1,ua as y1,va as W2,wa as q2,xa as G2,ya as c2,za as j2}from"./chunk-BW6PLV66.js";var d2=class{constructor(a,i,e="transparent",r="white",s=20,n=1){this._x=0,this._y=0,this._size=20,this._x=a,this._y=i,this._fillColor=e,this._borderColor=r,this._borderWidth=n,this._size=s}draw(a){a.fillStyle=this._borderColor,a.fillRect(this._x,this._y,this._size,this._size),a.fillStyle="rgba(255, 255, 255,0.5)";let i=this._size-this._borderWidth*2;a.fillRect(this._x+this._borderWidth,this._y+this._borderWidth,i,i),a.fillStyle=this._fillColor,i=this._size-this._borderWidth*4,a.fillRect(this._x+this._borderWidth*2,this._y+this._borderWidth*2,i,i)}},W=class c{constructor(a,i){this._toDraw=!1,this._matrix=a,this._index=i}forEachCells(a){this._matrix.forEach((i,e)=>{this._matrix[e].forEach((r,s)=>{a(this._matrix[e][s],e,s)})})}everyCells(a){return this._matrix.every((i,e)=>this._matrix[e].every((r,s)=>a(this._matrix[e][s],e,s)))}someCells(a){return this._matrix.some((i,e)=>this._matrix[e].some((r,s)=>a(this._matrix[e][s],e,s)))}mapCells(a){this.forEachCells((i,e,r)=>{this._matrix[e][r]=a(i,e,r)})}setColor(a){this.mapCells(i=>(i.color=a,i))}markFigureToDraw(){this.mapCells(a=>(a.y>=0&&(a.drawed=!0),a))}getIsFigureReadyToMatrix(){return this.forEachCells(a=>a.drawed)}markAllCellsToDraw(){this.mapCells(a=>(a.drawed=!0,a))}removeFigureInMatrix(a,i=0,e=0){this.forEachCells(r=>{if(r.y>=0){let{x:s,y:n,active:f}=r;f&&(a[s+i][n+e].color=void 0,a[s+i][n+e].drawed=!1)}})}downOneLevel(){this.mapCells(a=>(a.y++,a))}bothFiguresHaveSameActiveColumns(a){return a.everyCells((i,e,r)=>{let s=this._matrix[e][r];return s.x==i.x&&s.active==i.active})}checkIfCanMove(a,i){return this.everyCells(e=>{let r=e.x+a;return r>=0&&r<i.length&&e.y>=0&&!(i[r]!==void 0&&i[r][e.y]?.drawed)})}hasSpaceInColumn(a,i){return this._matrix.every(e=>{let r=e[i];return!r.active&&!a[r.x][r.y]?.drawed})}goRight(a){if(this.hasSpaceInColumn(a,this._matrix.length-1)){let i=JSON.parse(JSON.stringify(this._matrix));i.forEach(e=>e.forEach(r=>(r.active=!1,r))),this.forEachCells((e,r,s)=>{e.active&&(i[r][s+1].active=!0)}),this._matrix=i}else this.checkIfCanMove(1,a)&&this.mapCells(i=>(i.x++,i))}goLeft(a){if(this.hasSpaceInColumn(a,0)){let i=JSON.parse(JSON.stringify(this._matrix));i.forEach(e=>e.forEach(r=>(r.active=!1,r))),this.forEachCells((e,r,s)=>{e.active&&(i[r][s-1].active=!0)}),this._matrix=i}else this.checkIfCanMove(-1,a)&&this.mapCells(i=>{let{x:e,y:r}=i;return a[e][r].drawed=!1,i.x--,i})}canDrawInMatrix(a){return!this.someCells(i=>(a[i.x][i.y]?.drawed||i.y==a[0].length)&&i.active)}cloneCells(){return JSON.parse(JSON.stringify(this._matrix))}rotate90(){let a=this._matrix.length,i=JSON.parse(JSON.stringify(this._matrix));i.forEach(e=>e.forEach(r=>(r.active=!1,r))),this.forEachCells((e,r,s)=>{i[a-1-r][s].active=e.active}),this._matrix=i}rotate45(a){let i=this._matrix.length,e=JSON.parse(JSON.stringify(this._matrix));e.forEach(s=>s.forEach(n=>(n.active=!1,n)));let r=!0;for(let s=0;s<i;s++)for(let n=0;n<i;n++){let f=this._matrix[i-n-1][s].active;if(f){let{x:l,y:t}=e[s][n];if(e[s][n].active=f,a[l][t]?.drawed){r=!1;break}}}r&&(this._matrix=e)}static getRandomFigure(){let a=[new c([[{x:0,y:0,active:!0},{x:1,y:0},{x:2,y:0}],[{x:0,y:1,active:!0},{x:1,y:1},{x:2,y:1}],[{x:0,y:2,active:!0},{x:1,y:2,active:!0},{x:2,y:2}]],0),new c([[{x:0,y:0},{x:1,y:0,active:!0},{x:2,y:0}],[{x:0,y:1},{x:1,y:1,active:!0},{x:2,y:1}],[{x:0,y:2,active:!0},{x:1,y:2,active:!0},{x:2,y:2}]],1),new c([[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0}],[{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:3,y:1}],[{x:0,y:2,active:!0},{x:1,y:2,active:!0},{x:2,y:2,active:!0},{x:3,y:2,active:!0}],[{x:0,y:3},{x:1,y:3},{x:2,y:3},{x:3,y:3}]],2),new c([[{x:0,y:0},{x:1,y:0},{x:2,y:0}],[{x:0,y:1},{x:1,y:1,active:!0},{x:2,y:1}],[{x:0,y:2,active:!0},{x:1,y:2,active:!0},{x:2,y:2,active:!0}]],3),new c([[{x:0,y:0,active:!0},{x:1,y:0,active:!0}],[{x:0,y:1,active:!0},{x:1,y:1,active:!0}]],4)],i=Math.floor(Math.random()*a.length),e=a[i];return i==0?e.setColor("rgb(139, 50, 168)"):i==1?e.setColor("rgb(1, 105, 58)"):i==2?e.setColor("rgb(50, 85, 168)"):i==3?e.setColor("rgb(131, 121, 242)"):e.setColor("rgb(179, 43, 43)"),e.mapCells(r=>(r.active||(r.active=!1),r)),e}};var T1={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]};var F1={prefix:"fas",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]};var q3={prefix:"fas",iconName:"circle-pause",icon:[512,512,[62092,"pause-circle"],"f28b","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z"]},B1=q3;var D1={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"]};var R1={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]};var _1={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]};var E1={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};function O1(c,a){var i=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),i.push.apply(i,e)}return i}function m(c){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?O1(Object(i),!0).forEach(function(e){u(c,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(i)):O1(Object(i)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(i,e))})}return c}function T2(c){"@babel/helpers - typeof";return T2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},T2(c)}function G3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function U1(c,a){for(var i=0;i<a.length;i++){var e=a[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function j3(c,a,i){return a&&U1(c.prototype,a),i&&U1(c,i),Object.defineProperty(c,"prototype",{writable:!1}),c}function u(c,a,i){return a in c?Object.defineProperty(c,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):c[a]=i,c}function l1(c,a){return Y3(c)||Q3(c,a)||H3(c,a)||J3()}function V2(c){return X3(c)||$3(c)||H3(c)||K3()}function X3(c){if(Array.isArray(c))return K2(c)}function Y3(c){if(Array.isArray(c))return c}function $3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Q3(c,a){var i=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(i!=null){var e=[],r=!0,s=!1,n,f;try{for(i=i.call(c);!(r=(n=i.next()).done)&&(e.push(n.value),!(a&&e.length===a));r=!0);}catch(l){s=!0,f=l}finally{try{!r&&i.return!=null&&i.return()}finally{if(s)throw f}}return e}}function H3(c,a){if(c){if(typeof c=="string")return K2(c,a);var i=Object.prototype.toString.call(c).slice(8,-1);if(i==="Object"&&c.constructor&&(i=c.constructor.name),i==="Map"||i==="Set")return Array.from(c);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return K2(c,a)}}function K2(c,a){(a==null||a>c.length)&&(a=c.length);for(var i=0,e=new Array(a);i<a;i++)e[i]=c[i];return e}function K3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var I1=function(){},o1={},v3={},z3=null,h3={mark:I1,measure:I1};try{typeof window<"u"&&(o1=window),typeof document<"u"&&(v3=document),typeof MutationObserver<"u"&&(z3=MutationObserver),typeof performance<"u"&&(h3=performance)}catch{}var Z3=o1.navigator||{},W1=Z3.userAgent,q1=W1===void 0?"":W1,G=o1,M=v3,G1=z3,L2=h3,O6=!!G.document,O=!!M.documentElement&&!!M.head&&typeof M.addEventListener=="function"&&typeof M.createElement=="function",V3=~q1.indexOf("MSIE")||~q1.indexOf("Trident/"),g2,x2,b2,N2,S2,R="___FONT_AWESOME___",J2=16,M3="fa",p3="svg-inline--fa",J="data-fa-i2svg",Z2="data-fa-pseudo-element",c4="data-fa-pseudo-element-pending",t1="data-prefix",m1="data-icon",j1="fontawesome-i2svg",a4="async",e4=["HTML","HEAD","STYLE","SCRIPT"],u3=function(){try{return!0}catch{return!1}}(),V="classic",p="sharp",H1=[V,p];function M2(c){return new Proxy(c,{get:function(i,e){return e in i?i[e]:i[V]}})}var m2=M2((g2={},u(g2,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),u(g2,p,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),g2)),H2=M2((x2={},u(x2,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),u(x2,p,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),x2)),v2=M2((b2={},u(b2,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),u(b2,p,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),b2)),r4=M2((N2={},u(N2,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),u(N2,p,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),N2)),i4=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,C3="fa-layers-text",s4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,n4=M2((S2={},u(S2,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),u(S2,p,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),S2)),d3=[1,2,3,4,5,6,7,8,9,10],f4=d3.concat([11,12,13,14,15,16,17,18,19,20]),l4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},z2=new Set;Object.keys(H2[V]).map(z2.add.bind(z2));Object.keys(H2[p]).map(z2.add.bind(z2));var o4=[].concat(H1,V2(z2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Q.GROUP,Q.SWAP_OPACITY,Q.PRIMARY,Q.SECONDARY]).concat(d3.map(function(c){return"".concat(c,"x")})).concat(f4.map(function(c){return"w-".concat(c)})),o2=G.FontAwesomeConfig||{};function t4(c){var a=M.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function m4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}M&&typeof M.querySelector=="function"&&(X1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],X1.forEach(function(c){var a=l1(c,2),i=a[0],e=a[1],r=m4(t4(i));r!=null&&(o2[e]=r)}));var X1,L3={styleDefault:"solid",familyDefault:"classic",cssPrefix:M3,replacementClass:p3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};o2.familyPrefix&&(o2.cssPrefix=o2.familyPrefix);var i2=m(m({},L3),o2);i2.autoReplaceSvg||(i2.observeMutations=!1);var H={};Object.keys(L3).forEach(function(c){Object.defineProperty(H,c,{enumerable:!0,set:function(i){i2[c]=i,t2.forEach(function(e){return e(H)})},get:function(){return i2[c]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(a){i2.cssPrefix=a,t2.forEach(function(i){return i(H)})},get:function(){return i2.cssPrefix}});G.FontAwesomeConfig=H;var t2=[];function H4(c){return t2.push(c),function(){t2.splice(t2.indexOf(c),1)}}var q=J2,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function v4(c){if(!(!c||!O)){var a=M.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var i=M.head.childNodes,e=null,r=i.length-1;r>-1;r--){var s=i[r],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=s)}return M.head.insertBefore(a,e),c}}var z4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function h2(){for(var c=12,a="";c-- >0;)a+=z4[Math.random()*62|0];return a}function s2(c){for(var a=[],i=(c||[]).length>>>0;i--;)a[i]=c[i];return a}function v1(c){return c.classList?s2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function g3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function h4(c){return Object.keys(c||{}).reduce(function(a,i){return a+"".concat(i,'="').concat(g3(c[i]),'" ')},"").trim()}function D2(c){return Object.keys(c||{}).reduce(function(a,i){return a+"".concat(i,": ").concat(c[i].trim(),";")},"")}function z1(c){return c.size!==F.size||c.x!==F.x||c.y!==F.y||c.rotate!==F.rotate||c.flipX||c.flipY}function V4(c){var a=c.transform,i=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(s," ").concat(n," ").concat(f)},t={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:l,path:t}}function M4(c){var a=c.transform,i=c.width,e=i===void 0?J2:i,r=c.height,s=r===void 0?J2:r,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&V3?l+="translate(".concat(a.x/q-e/2,"em, ").concat(a.y/q-s/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/q,"em), calc(-50% + ").concat(a.y/q,"em)) "):l+="translate(".concat(a.x/q,"em, ").concat(a.y/q,"em) "),l+="scale(".concat(a.size/q*(a.flipX?-1:1),", ").concat(a.size/q*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var p4=`:root, :host {
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
}`;function x3(){var c=M3,a=p3,i=H.cssPrefix,e=H.replacementClass,r=p4;if(i!==c||e!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");r=r.replace(s,".".concat(i,"-")).replace(n,"--".concat(i,"-")).replace(f,".".concat(e))}return r}var Y1=!1;function X2(){H.autoAddCss&&!Y1&&(v4(x3()),Y1=!0)}var u4={mixout:function(){return{dom:{css:x3,insertCss:X2}}},hooks:function(){return{beforeDOMElementCreation:function(){X2()},beforeI2svg:function(){X2()}}}},_=G||{};_[R]||(_[R]={});_[R].styles||(_[R].styles={});_[R].hooks||(_[R].hooks={});_[R].shims||(_[R].shims=[]);var k=_[R],b3=[],C4=function c(){M.removeEventListener("DOMContentLoaded",c),F2=1,b3.map(function(a){return a()})},F2=!1;O&&(F2=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),F2||M.addEventListener("DOMContentLoaded",C4));function d4(c){O&&(F2?setTimeout(c,0):b3.push(c))}function p2(c){var a=c.tag,i=c.attributes,e=i===void 0?{}:i,r=c.children,s=r===void 0?[]:r;return typeof c=="string"?g3(c):"<".concat(a," ").concat(h4(e),">").concat(s.map(p2).join(""),"</").concat(a,">")}function $1(c,a,i){if(c&&c[a]&&c[a][i])return{prefix:a,iconName:i,icon:c[a][i]}}var L4=function(a,i){return function(e,r,s,n){return a.call(i,e,r,s,n)}},Y2=function(a,i,e,r){var s=Object.keys(a),n=s.length,f=r!==void 0?L4(i,r):i,l,t,o;for(e===void 0?(l=1,o=a[s[0]]):(l=0,o=e);l<n;l++)t=s[l],o=f(o,a[t],t,a);return o};function g4(c){for(var a=[],i=0,e=c.length;i<e;){var r=c.charCodeAt(i++);if(r>=55296&&r<=56319&&i<e){var s=c.charCodeAt(i++);(s&64512)==56320?a.push(((r&1023)<<10)+(s&1023)+65536):(a.push(r),i--)}else a.push(r)}return a}function c1(c){var a=g4(c);return a.length===1?a[0].toString(16):null}function x4(c,a){var i=c.length,e=c.charCodeAt(a),r;return e>=55296&&e<=56319&&i>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function Q1(c){return Object.keys(c).reduce(function(a,i){var e=c[i],r=!!e.icon;return r?a[e.iconName]=e.icon:a[i]=e,a},{})}function a1(c,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=i.skipHooks,r=e===void 0?!1:e,s=Q1(a);typeof k.hooks.addPack=="function"&&!r?k.hooks.addPack(c,Q1(a)):k.styles[c]=m(m({},k.styles[c]||{}),s),c==="fas"&&a1("fa",a)}var w2,k2,y2,a2=k.styles,b4=k.shims,N4=(w2={},u(w2,V,Object.values(v2[V])),u(w2,p,Object.values(v2[p])),w2),h1=null,N3={},S3={},w3={},k3={},y3={},S4=(k2={},u(k2,V,Object.keys(m2[V])),u(k2,p,Object.keys(m2[p])),k2);function w4(c){return~o4.indexOf(c)}function k4(c,a){var i=a.split("-"),e=i[0],r=i.slice(1).join("-");return e===c&&r!==""&&!w4(r)?r:null}var A3=function(){var a=function(s){return Y2(a2,function(n,f,l){return n[l]=Y2(f,s,{}),n},{})};N3=a(function(r,s,n){if(s[3]&&(r[s[3]]=n),s[2]){var f=s[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){r[l.toString(16)]=n})}return r}),S3=a(function(r,s,n){if(r[n]=n,s[2]){var f=s[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){r[l]=n})}return r}),y3=a(function(r,s,n){var f=s[2];return r[n]=n,f.forEach(function(l){r[l]=n}),r});var i="far"in a2||H.autoFetchSvg,e=Y2(b4,function(r,s){var n=s[0],f=s[1],l=s[2];return f==="far"&&!i&&(f="fas"),typeof n=="string"&&(r.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:f,iconName:l}),r},{names:{},unicodes:{}});w3=e.names,k3=e.unicodes,h1=R2(H.styleDefault,{family:H.familyDefault})};H4(function(c){h1=R2(c.styleDefault,{family:H.familyDefault})});A3();function V1(c,a){return(N3[c]||{})[a]}function y4(c,a){return(S3[c]||{})[a]}function K(c,a){return(y3[c]||{})[a]}function P3(c){return w3[c]||{prefix:null,iconName:null}}function A4(c){var a=k3[c],i=V1("fas",c);return a||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function j(){return h1}var M1=function(){return{prefix:null,iconName:null,rest:[]}};function R2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.family,e=i===void 0?V:i,r=m2[e][c],s=H2[e][c]||H2[e][r],n=c in k.styles?c:null;return s||n||null}var K1=(y2={},u(y2,V,Object.keys(v2[V])),u(y2,p,Object.keys(v2[p])),y2);function _2(c){var a,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.skipLookups,r=e===void 0?!1:e,s=(a={},u(a,V,"".concat(H.cssPrefix,"-").concat(V)),u(a,p,"".concat(H.cssPrefix,"-").concat(p)),a),n=null,f=V;(c.includes(s[V])||c.some(function(t){return K1[V].includes(t)}))&&(f=V),(c.includes(s[p])||c.some(function(t){return K1[p].includes(t)}))&&(f=p);var l=c.reduce(function(t,o){var v=k4(H.cssPrefix,o);if(a2[o]?(o=N4[f].includes(o)?r4[f][o]:o,n=o,t.prefix=o):S4[f].indexOf(o)>-1?(n=o,t.prefix=R2(o,{family:f})):v?t.iconName=v:o!==H.replacementClass&&o!==s[V]&&o!==s[p]&&t.rest.push(o),!r&&t.prefix&&t.iconName){var z=n==="fa"?P3(t.iconName):{},h=K(t.prefix,t.iconName);z.prefix&&(n=null),t.iconName=z.iconName||h||t.iconName,t.prefix=z.prefix||t.prefix,t.prefix==="far"&&!a2.far&&a2.fas&&!H.autoFetchSvg&&(t.prefix="fas")}return t},M1());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===p&&(a2.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=K(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=j()||"fas"),l}var P4=function(){function c(){G3(this,c),this.definitions={}}return j3(c,[{key:"add",value:function(){for(var i=this,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){i.definitions[f]=m(m({},i.definitions[f]||{}),n[f]),a1(f,n[f]);var l=v2[V][f];l&&a1(l,n[f]),A3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(s){var n=r[s],f=n.prefix,l=n.iconName,t=n.icon,o=t[2];i[f]||(i[f]={}),o.length>0&&o.forEach(function(v){typeof v=="string"&&(i[f][v]=t)}),i[f][l]=t}),i}}]),c}(),J1=[],e2={},r2={},T4=Object.keys(r2);function F4(c,a){var i=a.mixoutsTo;return J1=c,e2={},Object.keys(r2).forEach(function(e){T4.indexOf(e)===-1&&delete r2[e]}),J1.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(i[n]=r[n]),T2(r[n])==="object"&&Object.keys(r[n]).forEach(function(f){i[n]||(i[n]={}),i[n][f]=r[n][f]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(n){e2[n]||(e2[n]=[]),e2[n].push(s[n])})}e.provides&&e.provides(r2)}),i}function e1(c,a){for(var i=arguments.length,e=new Array(i>2?i-2:0),r=2;r<i;r++)e[r-2]=arguments[r];var s=e2[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(e))}),a}function Z(c){for(var a=arguments.length,i=new Array(a>1?a-1:0),e=1;e<a;e++)i[e-1]=arguments[e];var r=e2[c]||[];r.forEach(function(s){s.apply(null,i)})}function E(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return r2[c]?r2[c].apply(null,a):void 0}function r1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,i=c.prefix||j();if(a)return a=K(i,a)||a,$1(T3.definitions,i,a)||$1(k.styles,i,a)}var T3=new P4,B4=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,Z("noAuto")},D4={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return O?(Z("beforeI2svg",a),E("pseudoElements2svg",a),E("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,d4(function(){_4({autoReplaceSvgRoot:i}),Z("watch",a)})}},R4={icon:function(a){if(a===null)return null;if(T2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:K(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var i=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=R2(a[0]);return{prefix:e,iconName:K(e,i)||i}}if(typeof a=="string"&&(a.indexOf("".concat(H.cssPrefix,"-"))>-1||a.match(i4))){var r=_2(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||j(),iconName:K(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var s=j();return{prefix:s,iconName:K(s,a)||a}}}},N={noAuto:B4,config:H,dom:D4,parse:R4,library:T3,findIconDefinition:r1,toHtml:p2},_4=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a.autoReplaceSvgRoot,e=i===void 0?M:i;(Object.keys(k.styles).length>0||H.autoFetchSvg)&&O&&H.autoReplaceSvg&&N.dom.i2svg({node:e})};function E2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return p2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(O){var e=M.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function E4(c){var a=c.children,i=c.main,e=c.mask,r=c.attributes,s=c.styles,n=c.transform;if(z1(n)&&i.found&&!e.found){var f=i.width,l=i.height,t={x:f/l/2,y:.5};r.style=D2(m(m({},s),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function O4(c){var a=c.prefix,i=c.iconName,e=c.children,r=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(H.cssPrefix,"-").concat(i):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:n}),children:e}]}]}function p1(c){var a=c.icons,i=a.main,e=a.mask,r=c.prefix,s=c.iconName,n=c.transform,f=c.symbol,l=c.title,t=c.maskId,o=c.titleId,v=c.extra,z=c.watchable,h=z===void 0?!1:z,d=e.found?e:i,S=d.width,w=d.height,y=r==="fak",C=[H.replacementClass,s?"".concat(H.cssPrefix,"-").concat(s):""].filter(function(U){return v.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(v.classes).join(" "),L={children:[],attributes:m(m({},v.attributes),{},{"data-prefix":r,"data-icon":s,class:C,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(w)})},A=y&&!~v.classes.indexOf("fa-fw")?{width:"".concat(S/w*16*.0625,"em")}:{};h&&(L.attributes[J]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(o||h2())},children:[l]}),delete L.attributes.title);var b=m(m({},L),{},{prefix:r,iconName:s,main:i,mask:e,maskId:t,transform:n,symbol:f,styles:m(m({},A),v.styles)}),Y=e.found&&i.found?E("generateAbstractMask",b)||{children:[],attributes:{}}:E("generateAbstractIcon",b)||{children:[],attributes:{}},$=Y.children,O2=Y.attributes;return b.children=$,b.attributes=O2,f?O4(b):E4(b)}function Z1(c){var a=c.content,i=c.width,e=c.height,r=c.transform,s=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,t=m(m(m({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});l&&(t[J]="");var o=m({},n.styles);z1(r)&&(o.transform=M4({transform:r,startCentered:!0,width:i,height:e}),o["-webkit-transform"]=o.transform);var v=D2(o);v.length>0&&(t.style=v);var z=[];return z.push({tag:"span",attributes:t,children:[a]}),s&&z.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),z}function U4(c){var a=c.content,i=c.title,e=c.extra,r=m(m(m({},e.attributes),i?{title:i}:{}),{},{class:e.classes.join(" ")}),s=D2(e.styles);s.length>0&&(r.style=s);var n=[];return n.push({tag:"span",attributes:r,children:[a]}),i&&n.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),n}var $2=k.styles;function i1(c){var a=c[0],i=c[1],e=c.slice(4),r=l1(e,1),s=r[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(Q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Q.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Q.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:i,icon:n}}var I4={found:!1,width:512,height:512};function W4(c,a){!u3&&!H.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function s1(c,a){var i=a;return a==="fa"&&H.styleDefault!==null&&(a=j()),new Promise(function(e,r){var s={found:!1,width:512,height:512,icon:E("missingIconAbstract")||{}};if(i==="fa"){var n=P3(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&$2[a]&&$2[a][c]){var f=$2[a][c];return e(i1(f))}W4(c,a),e(m(m({},I4),{},{icon:H.showMissingIcons&&c?E("missingIconAbstract")||{}:{}}))})}var c3=function(){},n1=H.measurePerformance&&L2&&L2.mark&&L2.measure?L2:{mark:c3,measure:c3},l2='FA "6.5.1"',q4=function(a){return n1.mark("".concat(l2," ").concat(a," begins")),function(){return F3(a)}},F3=function(a){n1.mark("".concat(l2," ").concat(a," ends")),n1.measure("".concat(l2," ").concat(a),"".concat(l2," ").concat(a," begins"),"".concat(l2," ").concat(a," ends"))},u1={begin:q4,end:F3},A2=function(){};function a3(c){var a=c.getAttribute?c.getAttribute(J):null;return typeof a=="string"}function G4(c){var a=c.getAttribute?c.getAttribute(t1):null,i=c.getAttribute?c.getAttribute(m1):null;return a&&i}function j4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(H.replacementClass)}function X4(){if(H.autoReplaceSvg===!0)return P2.replace;var c=P2[H.autoReplaceSvg];return c||P2.replace}function Y4(c){return M.createElementNS("http://www.w3.org/2000/svg",c)}function $4(c){return M.createElement(c)}function B3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.ceFn,e=i===void 0?c.tag==="svg"?Y4:$4:i;if(typeof c=="string")return M.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){r.appendChild(B3(n,{ceFn:e}))}),r}function Q4(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var P2={replace:function(a){var i=a[0];if(i.parentNode)if(a[1].forEach(function(r){i.parentNode.insertBefore(B3(r),i)}),i.getAttribute(J)===null&&H.keepOriginalSource){var e=M.createComment(Q4(i));i.parentNode.replaceChild(e,i)}else i.remove()},nest:function(a){var i=a[0],e=a[1];if(~v1(i).indexOf(H.replacementClass))return P2.replace(a);var r=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(f,l){return l===H.replacementClass||l.match(r)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",s.toNode.join(" "))}var n=e.map(function(f){return p2(f)}).join(`
`);i.setAttribute(J,""),i.innerHTML=n}};function e3(c){c()}function D3(c,a){var i=typeof a=="function"?a:A2;if(c.length===0)i();else{var e=e3;H.mutateApproach===a4&&(e=G.requestAnimationFrame||e3),e(function(){var r=X4(),s=u1.begin("mutate");c.map(r),s(),i()})}}var C1=!1;function R3(){C1=!0}function f1(){C1=!1}var B2=null;function r3(c){if(G1&&H.observeMutations){var a=c.treeCallback,i=a===void 0?A2:a,e=c.nodeCallback,r=e===void 0?A2:e,s=c.pseudoElementsCallback,n=s===void 0?A2:s,f=c.observeMutationsRoot,l=f===void 0?M:f;B2=new G1(function(t){if(!C1){var o=j();s2(t).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!a3(v.addedNodes[0])&&(H.searchPseudoElements&&n(v.target),i(v.target)),v.type==="attributes"&&v.target.parentNode&&H.searchPseudoElements&&n(v.target.parentNode),v.type==="attributes"&&a3(v.target)&&~l4.indexOf(v.attributeName))if(v.attributeName==="class"&&G4(v.target)){var z=_2(v1(v.target)),h=z.prefix,d=z.iconName;v.target.setAttribute(t1,h||o),d&&v.target.setAttribute(m1,d)}else j4(v.target)&&r(v.target)})}}),O&&B2.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function K4(){B2&&B2.disconnect()}function J4(c){var a=c.getAttribute("style"),i=[];return a&&(i=a.split(";").reduce(function(e,r){var s=r.split(":"),n=s[0],f=s.slice(1);return n&&f.length>0&&(e[n]=f.join(":").trim()),e},{})),i}function Z4(c){var a=c.getAttribute("data-prefix"),i=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=_2(v1(c));return r.prefix||(r.prefix=j()),a&&i&&(r.prefix=a,r.iconName=i),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=y4(r.prefix,c.innerText)||V1(r.prefix,c1(c.innerText))),!r.iconName&&H.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function c6(c){var a=s2(c.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),i=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return H.autoA11y&&(i?a["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(e||h2()):(a["aria-hidden"]="true",a.focusable="false")),a}function a6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function i3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=Z4(c),e=i.iconName,r=i.prefix,s=i.rest,n=c6(c),f=e1("parseNodeAttributes",{},c),l=a.styleParser?J4(c):[];return m({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:n}},f)}var e6=k.styles;function _3(c){var a=H.autoReplaceSvg==="nest"?i3(c,{styleParser:!1}):i3(c);return~a.extra.classes.indexOf(C3)?E("generateLayersText",c,a):E("generateSvgReplacementMutation",c,a)}var X=new Set;H1.map(function(c){X.add("fa-".concat(c))});Object.keys(m2[V]).map(X.add.bind(X));Object.keys(m2[p]).map(X.add.bind(X));X=V2(X);function s3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!O)return Promise.resolve();var i=M.documentElement.classList,e=function(v){return i.add("".concat(j1,"-").concat(v))},r=function(v){return i.remove("".concat(j1,"-").concat(v))},s=H.autoFetchSvg?X:H1.map(function(o){return"fa-".concat(o)}).concat(Object.keys(e6));s.includes("fa")||s.push("fa");var n=[".".concat(C3,":not([").concat(J,"])")].concat(s.map(function(o){return".".concat(o,":not([").concat(J,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=s2(c.querySelectorAll(n))}catch{}if(f.length>0)e("pending"),r("complete");else return Promise.resolve();var l=u1.begin("onTree"),t=f.reduce(function(o,v){try{var z=_3(v);z&&o.push(z)}catch(h){u3||h.name==="MissingIcon"&&console.error(h)}return o},[]);return new Promise(function(o,v){Promise.all(t).then(function(z){D3(z,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(z){l(),v(z)})})}function r6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_3(c).then(function(i){i&&D3([i],a)})}function i6(c){return function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:r1(a||{}),r=i.mask;return r&&(r=(r||{}).icon?r:r1(r||{})),c(e,m(m({},i),{},{mask:r}))}}var s6=function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.transform,r=e===void 0?F:e,s=i.symbol,n=s===void 0?!1:s,f=i.mask,l=f===void 0?null:f,t=i.maskId,o=t===void 0?null:t,v=i.title,z=v===void 0?null:v,h=i.titleId,d=h===void 0?null:h,S=i.classes,w=S===void 0?[]:S,y=i.attributes,C=y===void 0?{}:y,L=i.styles,A=L===void 0?{}:L;if(a){var b=a.prefix,Y=a.iconName,$=a.icon;return E2(m({type:"icon"},a),function(){return Z("beforeDOMElementCreation",{iconDefinition:a,params:i}),H.autoA11y&&(z?C["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(d||h2()):(C["aria-hidden"]="true",C.focusable="false")),p1({icons:{main:i1($),mask:l?i1(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:Y,transform:m(m({},F),r),symbol:n,title:z,maskId:o,titleId:d,extra:{attributes:C,styles:A,classes:w}})})}},n6={mixout:function(){return{icon:i6(s6)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=s3,i.nodeCallback=r6,i}}},provides:function(a){a.i2svg=function(i){var e=i.node,r=e===void 0?M:e,s=i.callback,n=s===void 0?function(){}:s;return s3(r,n)},a.generateSvgReplacementMutation=function(i,e){var r=e.iconName,s=e.title,n=e.titleId,f=e.prefix,l=e.transform,t=e.symbol,o=e.mask,v=e.maskId,z=e.extra;return new Promise(function(h,d){Promise.all([s1(r,f),o.iconName?s1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var w=l1(S,2),y=w[0],C=w[1];h([i,p1({icons:{main:y,mask:C},prefix:f,iconName:r,transform:l,symbol:t,maskId:v,title:s,titleId:n,extra:z,watchable:!0})])}).catch(d)})},a.generateAbstractIcon=function(i){var e=i.children,r=i.attributes,s=i.main,n=i.transform,f=i.styles,l=D2(f);l.length>0&&(r.style=l);var t;return z1(n)&&(t=E("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),e.push(t||s.icon),{children:e,attributes:r}}}},f6={mixout:function(){return{layer:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,s=r===void 0?[]:r;return E2({type:"layer"},function(){Z("beforeDOMElementCreation",{assembler:i,params:e});var n=[];return i(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(V2(s)).join(" ")},children:n}]})}}}},l6={mixout:function(){return{counter:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,s=r===void 0?null:r,n=e.classes,f=n===void 0?[]:n,l=e.attributes,t=l===void 0?{}:l,o=e.styles,v=o===void 0?{}:o;return E2({type:"counter",content:i},function(){return Z("beforeDOMElementCreation",{content:i,params:e}),U4({content:i.toString(),title:s,extra:{attributes:t,styles:v,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(V2(f))}})})}}}},o6={mixout:function(){return{text:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?F:r,n=e.title,f=n===void 0?null:n,l=e.classes,t=l===void 0?[]:l,o=e.attributes,v=o===void 0?{}:o,z=e.styles,h=z===void 0?{}:z;return E2({type:"text",content:i},function(){return Z("beforeDOMElementCreation",{content:i,params:e}),Z1({content:i,transform:m(m({},F),s),title:f,extra:{attributes:v,styles:h,classes:["".concat(H.cssPrefix,"-layers-text")].concat(V2(t))}})})}}},provides:function(a){a.generateLayersText=function(i,e){var r=e.title,s=e.transform,n=e.extra,f=null,l=null;if(V3){var t=parseInt(getComputedStyle(i).fontSize,10),o=i.getBoundingClientRect();f=o.width/t,l=o.height/t}return H.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([i,Z1({content:i.innerHTML,width:f,height:l,transform:s,title:r,extra:n,watchable:!0})])}}},t6=new RegExp('"',"ug"),n3=[1105920,1112319];function m6(c){var a=c.replace(t6,""),i=x4(a,0),e=i>=n3[0]&&i<=n3[1],r=a.length===2?a[0]===a[1]:!1;return{value:c1(r?a[0]:a),isSecondary:e||r}}function f3(c,a){var i="".concat(c4).concat(a.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(i)!==null)return e();var s=s2(c.children),n=s.filter(function($){return $.getAttribute(Z2)===a})[0],f=G.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(s4),t=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),e();if(l&&o!=="none"&&o!==""){var v=f.getPropertyValue("content"),z=~["Sharp"].indexOf(l[2])?p:V,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?H2[z][l[2].toLowerCase()]:n4[z][t],d=m6(v),S=d.value,w=d.isSecondary,y=l[0].startsWith("FontAwesome"),C=V1(h,S),L=C;if(y){var A=A4(S);A.iconName&&A.prefix&&(C=A.iconName,h=A.prefix)}if(C&&!w&&(!n||n.getAttribute(t1)!==h||n.getAttribute(m1)!==L)){c.setAttribute(i,L),n&&c.removeChild(n);var b=a6(),Y=b.extra;Y.attributes[Z2]=a,s1(C,h).then(function($){var O2=p1(m(m({},b),{},{icons:{main:$,mask:M1()},prefix:h,iconName:L,extra:Y,watchable:!0})),U=M.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(U,c.firstChild):c.appendChild(U),U.outerHTML=O2.map(function(W3){return p2(W3)}).join(`
`),c.removeAttribute(i),e()}).catch(r)}else e()}else e()})}function H6(c){return Promise.all([f3(c,"::before"),f3(c,"::after")])}function v6(c){return c.parentNode!==document.head&&!~e4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(Z2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function l3(c){if(O)return new Promise(function(a,i){var e=s2(c.querySelectorAll("*")).filter(v6).map(H6),r=u1.begin("searchPseudoElements");R3(),Promise.all(e).then(function(){r(),f1(),a()}).catch(function(){r(),f1(),i()})})}var z6={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=l3,i}}},provides:function(a){a.pseudoElements2svg=function(i){var e=i.node,r=e===void 0?M:e;H.searchPseudoElements&&l3(r)}}},o3=!1,h6={mixout:function(){return{dom:{unwatch:function(){R3(),o3=!0}}}},hooks:function(){return{bootstrap:function(){r3(e1("mutationObserverCallbacks",{}))},noAuto:function(){K4()},watch:function(i){var e=i.observeMutationsRoot;o3?f1():r3(e1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},t3=function(a){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var s=r.toLowerCase().split("-"),n=s[0],f=s.slice(1).join("-");if(n&&f==="h")return e.flipX=!0,e;if(n&&f==="v")return e.flipY=!0,e;if(f=parseFloat(f),isNaN(f))return e;switch(n){case"grow":e.size=e.size+f;break;case"shrink":e.size=e.size-f;break;case"left":e.x=e.x-f;break;case"right":e.x=e.x+f;break;case"up":e.y=e.y-f;break;case"down":e.y=e.y+f;break;case"rotate":e.rotate=e.rotate+f;break}return e},i)},V6={mixout:function(){return{parse:{transform:function(i){return t3(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-transform");return r&&(i.transform=t3(r)),i}}},provides:function(a){a.generateAbstractTransformGrouping=function(i){var e=i.main,r=i.transform,s=i.containerWidth,n=i.iconWidth,f={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),o="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(l," ").concat(t," ").concat(o)},z={transform:"translate(".concat(n/2*-1," -256)")},h={outer:f,inner:v,path:z};return{tag:"g",attributes:m({},h.outer),children:[{tag:"g",attributes:m({},h.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:m(m({},e.icon.attributes),h.path)}]}]}}}},Q2={x:0,y:0,width:"100%",height:"100%"};function m3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function M6(c){return c.tag==="g"?c.children:[c]}var p6={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-mask"),s=r?_2(r.split(" ").map(function(n){return n.trim()})):M1();return s.prefix||(s.prefix=j()),i.mask=s,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides:function(a){a.generateAbstractMask=function(i){var e=i.children,r=i.attributes,s=i.main,n=i.mask,f=i.maskId,l=i.transform,t=s.width,o=s.icon,v=n.width,z=n.icon,h=V4({transform:l,containerWidth:v,iconWidth:t}),d={tag:"rect",attributes:m(m({},Q2),{},{fill:"white"})},S=o.children?{children:o.children.map(m3)}:{},w={tag:"g",attributes:m({},h.inner),children:[m3(m({tag:o.tag,attributes:m(m({},o.attributes),h.path)},S))]},y={tag:"g",attributes:m({},h.outer),children:[w]},C="mask-".concat(f||h2()),L="clip-".concat(f||h2()),A={tag:"mask",attributes:m(m({},Q2),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,y]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:M6(z)},A]};return e.push(b,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(C,")")},Q2)}),{children:e,attributes:r}}}},u6={provides:function(a){var i=!1;G.matchMedia&&(i=G.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=m(m({},s),{},{attributeName:"opacity"}),f={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||f.children.push({tag:"animate",attributes:m(m({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(f),e.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:m(m({},n),{},{values:"1;0;0;0;0;1;"})}]}),i||e.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},C6={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return i.symbol=s,i}}}},d6=[u4,n6,f6,l6,o6,z6,h6,V6,p6,u6,C6];F4(d6,{mixoutsTo:N});var U6=N.noAuto,I6=N.config,W6=N.library,q6=N.dom,E3=N.parse,G6=N.findIconDefinition,j6=N.toHtml,O3=N.icon,X6=N.layer,L6=N.text,g6=N.counter;var b6=["*"],N6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},S6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},w6=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(i=>a[i]?i:null).filter(i=>i)},k6=c=>c.prefix!==void 0&&c.iconName!==void 0,y6=(c,a)=>k6(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},A6=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=U2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),P6=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...e){for(let r of e){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let s of r.icon[2])typeof s=="string"&&(this.definitions[r.prefix][s]=r)}}addIconPacks(...e){for(let r of e){let s=Object.keys(r).map(n=>r[n]);this.addIcons(...s)}}getIconDefinition(e,r){return e in this.definitions&&r in this.definitions[e]?this.definitions[e][r]:null}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=U2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),T6=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(r){return new(r||a)},a.\u0275dir=x1({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[u2]});let c=a;return c})(),F6=(()=>{let a=class a{constructor(e,r){this.renderer=e,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};a.\u0275fac=function(r){return new(r||a)(T(C2),T(N1))},a.\u0275cmp=n2({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[u2,f2],ngContentSelectors:b6,decls:1,vars:0,template:function(r,s){r&1&&(k1(),y1(0))},encapsulation:2});let c=a;return c})(),U3=(()=>{let a=class a{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,r,s,n,f){this.sanitizer=e,this.config=r,this.iconLibrary=s,this.stackItem=n,this.classes=[],f!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){S6();return}if(e){let r=this.icon!=null?this.icon:this.config.fallbackIcon,s=this.findIconDefinition(r);if(s!=null){let n=this.buildParams();this.renderIcon(s,n)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let r=y6(e,this.config.defaultPrefix);if("icon"in r)return r;let s=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return s??(N6(r),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?E3.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...w6(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,r){let s=O3(e,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))}};a.\u0275fac=function(r){return new(r||a)(T(P1),T(A6),T(P6),T(T6,8),T(F6,8))},a.\u0275cmp=n2({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,s){r&2&&(w1("innerHTML",s.renderedIconHTML,b1),S1("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[u2,f2],decls:0,vars:0,template:function(r,s){},encapsulation:2});let c=a;return c})();var I3=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=g1({type:a}),a.\u0275inj=L1({});let c=a;return c})();var D6=["board"],R6=["next_figure"],i0=(()=>{let a=class a{get canvasBoard(){return this._canvasBoard.nativeElement}get canvasNextFigure(){return this._canvasNextFigure.nativeElement}constructor(e){this.renderer=e,this._rows=20,this._rowsNextFigure=6,this._columns=10,this._columnsNextFigure=6,this._blockSize=30,this._blockSizeNextFigure=20,this._canvasBoardWidth=0,this._canvasBoardHeight=0,this._canvasNextFigureWidth=0,this._canvasNextFigureHeight=0,this._timer=350,this._timerGoDown=0,this._boardM=[],this._nextFigureM=[],this._endGame=!1,this.level=0,this.score=0,this.faCirclePlay=F1,this.faRotateRight=D1,this.faPauseCircle=B1,this.faAngleLeft=E1,this.faAngleRight=T1,this.faAngleUp=_1,this.faAngleDown=R1,this.initFigures()}initFigures(){this._figure=W.getRandomFigure(),this.mapCurrentFigureToCenterBoard(),this._nextFigure=W.getRandomFigure(),this.mapNextFigureToCenterBoard()}ngAfterViewInit(){this._nextFigureCTX=this.canvasNextFigure.getContext("2d"),this.setDefaultNextFigureCanvasSize(),this.defineMatrix(this._nextFigureM,this._blockSizeNextFigure,this._canvasNextFigureWidth,this._canvasNextFigureHeight),this.addFigureToMatrix(this._nextFigure,this._nextFigureM),this.drawMatrix(this._nextFigureM,this._nextFigureCTX,this._blockSizeNextFigure),this._boardCTX=this.canvasBoard.getContext("2d"),this.setDefaultBoardSize(),this.defineMatrix(this._boardM),this.enableMobileControls()}startIntervalUpdate(e=this._timer){this._boardInterval=setInterval(()=>{this.update()},e)}update(){this._boardCTX.clearRect(0,0,this.canvasBoard.width,this.canvasBoard.height),this.setDefaultFrameStyles(),this.addFigureToMatrix(),this.drawMatrix(),this.figureDownLevel(),this.checkRows()}setDefaultBoardSize(){this._canvasBoardWidth=this._columns*this._blockSize,this._canvasBoardHeight=this._rows*this._blockSize,this.canvasBoard.width=this._canvasBoardWidth,this.canvasBoard.height=this._canvasBoardHeight}setDefaultNextFigureCanvasSize(){this._canvasNextFigureWidth=this._columnsNextFigure*this._blockSizeNextFigure,this._canvasNextFigureHeight=this._rowsNextFigure*this._blockSizeNextFigure,this.canvasNextFigure.width=this._canvasNextFigureWidth,this.canvasNextFigure.height=this._canvasNextFigureHeight}forEachRows(e,r=this._blockSize,s=this._canvasBoardHeight){for(let n=0,f=0;n<s;n+=r,f++)e(n,f)}forEachColumns(e,r=this._blockSize,s=this._canvasBoardWidth){for(let n=0,f=0;n<s;n+=r,f++)e(n,f)}defineMatrix(e,r=this._blockSize,s=this._canvasBoardWidth,n=this._canvasBoardHeight){this.forEachColumns((f,l)=>{e.push([]),this.forEachRows((t,o)=>{e[l][o]={x:f,y:t,drawed:!1}},r,n)},r,s)}setDefaultFrameStyles(){this._boardCTX.fillStyle="rgba(170, 175, 125, 0.2)",this._boardCTX.fillRect(0,0,this.canvasBoard.width,this.canvasBoard.height),this._boardCTX.strokeStyle="rgba(55, 55, 55, .8)",this._boardCTX.lineWidth=.5,this.forEachColumns(e=>{e!=0&&e!=this._columns&&(this._boardCTX.beginPath(),this._boardCTX.moveTo(e,0),this._boardCTX.lineTo(e,this._canvasBoardHeight),this._boardCTX.stroke())}),this.forEachRows(e=>{e!=0&&e!=this._rows&&(this._boardCTX.beginPath(),this._boardCTX.moveTo(0,e),this._boardCTX.lineTo(this._canvasBoardHeight,e),this._boardCTX.lineWidth=.5,this._boardCTX.stroke())})}addFigureToMatrix(e=this._figure,r=this._boardM){e.forEachCells(s=>{if(s.y>=0){let{x:n,y:f,color:l,active:t,drawed:o}=s;t&&(r[n][f].color=l,r[n][f].active=t,r[n][f].drawed=o)}})}drawMatrix(e=this._boardM,r=this._boardCTX,s=this._blockSize){e.forEach(n=>{n.forEach(f=>{let{x:l,y:t,color:o,active:v,drawed:z}=f;(z||v)&&new d2(l,t,o,"transparent",s).draw(r)})})}removeFigureInMatrix(){this._figure.forEachCells(e=>{if(e.y>=0){let{x:r,y:s,active:n}=e;n&&(this._boardM[r][s].color=void 0,this._boardM[r][s].active=!1,this._boardM[r][s].drawed=!1)}})}isEndGame(){return this._boardM.some(e=>e[0].drawed)}cleanFigureNextBoard(){}mapCurrentFigureToCenterBoard(){let{_index:e}=this._figure;this._figure.mapCells(r=>(r.x+=e==2||e==3?3:4,r.y+=e==2||e==-3?-3:-4,r))}mapNextFigureToCenterBoard(){let{_index:e}=this._nextFigure;this._nextFigure.mapCells(r=>(r.x+=e!=2?2:1,r.y+=e!=2&&e!=3?2:1,r))}mapNextFigureToDefault(){let{_index:e}=this._nextFigure;this._nextFigure.mapCells(r=>(r.x+=e!=2?-2:-1,r.y+=e!=2&&e!=3?-2:-1,r))}figureDownLevel(){let e=new W(this._figure.cloneCells(),this._figure._index);e.mapCells(s=>(s.y++,s));let r=e.canDrawInMatrix(this._boardM);this._endGame?clearInterval(this._boardInterval):this._figure._toDraw?this._figure.bothFiguresHaveSameActiveColumns(this._figureCloned)?(this._figure.mapCells(s=>{let{x:n,y:f,active:l}=s;return f>=0&&l&&(this._boardM[n][f].drawed=!0,this._boardM[n][f].active=!1,s.active=!1),f==0&&(this._endGame=!0),s}),this.mapNextFigureToDefault(),this._figure=new W(this._nextFigure.cloneCells(),this._nextFigure._index),this.mapCurrentFigureToCenterBoard(),this.addFigureToMatrix(),this._nextFigure=W.getRandomFigure(),this.mapNextFigureToCenterBoard(),this.defineMatrix(this._nextFigureM,this._blockSizeNextFigure,this._canvasNextFigureWidth,this._canvasNextFigureHeight),this._nextFigureCTX.clearRect(0,0,this.canvasNextFigure.width,this.canvasNextFigure.height),this.addFigureToMatrix(this._nextFigure,this._nextFigureM),this.drawMatrix(this._nextFigureM,this._nextFigureCTX,this._blockSizeNextFigure)):(this._figure._toDraw=!1,this.removeFigureInMatrix()):r?(this.removeFigureInMatrix(),this._figure.downOneLevel()):(this._figureCloned=e,this.removeFigureInMatrix(),this._figure._toDraw=!0)}checkRows(){let e=[],r=JSON.parse(JSON.stringify(this._boardM));for(let s=0;s<this._boardM[0].length;s++)if(this._boardM.every(n=>n[s].drawed)){e.push(s);for(let n=0;n<this._boardM.length;n++)this._boardM[n][s].color="white",r[n].splice(s,1),r[n].unshift({})}if(e.length>0){this.drawMatrix();let s=e.length;for(let n=this._boardM[0].length-1;n>=0;n--)for(let f=this._boardM.length-1;f>=0;f--)this._boardM[f][n].drawed=r[f][n]?.drawed,this._boardM[f][n].color=r[f][n]?.color;this.setScore(s)}}setScore(e){this.score+=e*100,this.level=Number((this.score/(this._rows/4*100)).toFixed(0)),this._timer=this._timer-(this.level>0?2:0),clearInterval(this._boardInterval),this.startIntervalUpdate(this._timer)}onClickGoRight(){this._figure.goRight(this._boardM)}onClickGoLeft(){this._figure.goLeft(this._boardM)}onMouseDownGoDown(){this._timerGoDown!=20&&(clearInterval(this._boardInterval),this._timerGoDown=20,this.startIntervalUpdate(this._timerGoDown))}onClickRotate(){this._figure.rotate45(this._boardM)}onKeyboardKeyDown(e){return d1(this,null,function*(){let{code:r}=e;r==="ArrowRight"&&this.onClickGoRight(),r==="ArrowLeft"&&this.onClickGoLeft(),r==="ArrowDown"&&this.onMouseDownGoDown(),(r==="Space"||r==="Enter")&&this.onClickRotate()})}onMouseUpStopGoDown(){clearInterval(this._boardInterval),this._timerGoDown=this._timer,this.startIntervalUpdate(this._timer)}onKeyboardKeyUp(e){let{code:r}=e;r==="ArrowDown"&&this.onMouseUpStopGoDown()}forEachCellsOfMatrix(e){this._boardM.forEach(r=>{r.forEach(s=>{e(s)})})}onClickInitGame(){this.startIntervalUpdate()}onClickStopGame(){clearInterval(this._boardInterval)}onClickResetGame(){this.level=0,this.score=0,this.defineMatrix(this._boardM),this.initFigures(),clearInterval(this._boardInterval),this.startIntervalUpdate(),this._endGame=!1}enableMobileControls(){let e=document.getElementById("btn-down");this.renderer.listen(e,"touchstart",r=>{this.onMouseDownGoDown()}),this.renderer.listen(e,"touchend",r=>{this.onMouseUpStopGoDown()})}ngOnDestroy(){clearInterval(this._boardInterval)}};a.\u0275fac=function(r){return new(r||a)(T(C2))},a.\u0275cmp=n2({type:a,selectors:[["tetris-game"]],viewQuery:function(r,s){if(r&1&&(W2(D6,7),W2(R6,7)),r&2){let n;q2(n=G2())&&(s._canvasBoard=n.first),q2(n=G2())&&(s._canvasNextFigure=n.first)}},hostBindings:function(r,s){r&1&&D("keydown",function(f){return s.onKeyboardKeyDown(f)},!1,I2)("keyup",function(f){return s.onKeyboardKeyUp(f)},!1,I2)},standalone:!0,features:[f2],decls:43,vars:15,consts:[["id","tetris-container"],[1,"body","column"],[1,"game"],[1,"previsual"],[1,"info-panel"],["id","next",1,"next"],["id","next_figure"],["next_figure",""],[1,"level","txt-panel"],[1,"score","txt-panel"],[1,"controls","column"],[2,"margin-top","2rem"],[1,"btn-control",3,"click"],[2,"color","#26194dde",3,"icon","title"],["id","board"],["board",""],[1,"mobile-controls","row"],[1,"controls","row",2,"align-items","flex-end"],[3,"title"],[1,"btn-rotate",3,"click"],[2,"font-size","24px","margin","0"],[2,"column-gap","0.35em"],["id","btn-down",1,"btn-control",3,"mousedown","mouseup"]],template:function(r,s){r&1&&(g(0,"div",0)(1,"div",1)(2,"section",2)(3,"div",3)(4,"section",4)(5,"div",5),B(6,"canvas",6,7),x(),g(8,"article",8)(9,"h5"),c2(10,"Level: "),x(),g(11,"p"),c2(12),x()(),g(13,"article",9)(14,"h5"),c2(15,"Score: "),x(),g(16,"p"),c2(17),x()()(),g(18,"section",10)(19,"article",11)(20,"button",12),D("click",function(){return s.onClickInitGame()}),B(21,"fa-icon",13),x(),g(22,"button",12),D("click",function(){return s.onClickStopGame()}),B(23,"fa-icon",13),x(),g(24,"button",12),D("click",function(){return s.onClickResetGame()}),B(25,"fa-icon",13),x()()()(),B(26,"canvas",14,15),x(),g(28,"div",16)(29,"section",17)(30,"span",18)(31,"article")(32,"button",19),D("click",function(){return s.onClickRotate()}),g(33,"p",20),c2(34," - "),x()()()()(),g(35,"section",10)(36,"article",21)(37,"button",22),D("mousedown",function(){return s.onMouseDownGoDown()})("mouseup",function(){return s.onMouseUpStopGoDown()}),B(38,"fa-icon",13),x(),g(39,"button",12),D("click",function(){return s.onClickGoLeft()}),B(40,"fa-icon",13),x(),g(41,"button",12),D("click",function(){return s.onClickGoRight()}),B(42,"fa-icon",13),x()()()()()()),r&2&&(P(12),j2(s.level),P(5),j2(s.score),P(4),I("icon",s.faCirclePlay)("title","Iniciar Juego"),P(2),I("icon",s.faPauseCircle)("title","Pausar Juego"),P(2),I("icon",s.faRotateRight)("title","Reiniciar Juego"),P(5),I("title","Rotar pieza"),P(8),I("icon",s.faAngleDown)("title","Incrementar ca\xEDda"),P(2),I("icon",s.faAngleLeft)("title","Mover a izquierda"),P(2),I("icon",s.faAngleRight)("title","Mover a derecha"))},dependencies:[A1,I3,U3],styles:["*[_ngcontent-%COMP%]{color:#2f254efc}#tetris-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:2rem;justify-content:center;width:calc(100% - 4px);height:calc(100% - 4px);background:linear-gradient(to right,#5e35b1cc,#1976d2cc)}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:center;width:max-content;height:80%}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:center;height:85%;width:90%;padding:1em;border:2px solid linear-gradient(to right,rgba(94,53,177,.65),rgba(25,118,210,.65));border-radius:3px;box-shadow:1px -1px 6px 1px #00000080}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]{height:100%;width:80%;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding-right:.5rem}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0;width:calc(100% - .25em)}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]{width:80%;height:80%;padding:5px;border-radius:3px;border:2px solid rgba(0,0,0,.3);background-color:#fefefe0d}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]   #next_figure[_ngcontent-%COMP%]{width:100%;border:0}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .txt-panel[_ngcontent-%COMP%]{display:flex;width:90%}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%], #tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]{background-color:#f3fff914;margin:.5em .35rem 0 .35em;display:flex;justify-content:space-between;align-items:center;border-radius:3px;padding:.3em .25em}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:15px;width:50px;margin:0}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .previsual[_ngcontent-%COMP%]   .info-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:17px;width:fit-content;margin:0}#tetris-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{border:2px solid rgba(50,55,50,.3);height:100%;width:80%}.row[_ngcontent-%COMP%]{flex-direction:row}.column[_ngcontent-%COMP%]{flex-direction:column;column-gap:.5rem}.controls[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;column-gap:.5rem;height:100%}.controls[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;column-gap:.05rem;width:100%}.controls[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:2.5em;width:2.5rem;border:none;border:2px outset rgba(0,0,0,.3);border-radius:3px;background-color:#f3fff914}.controls[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:.65;transition:.2ms;border:2px solid rgba(0,0,0,.65)}.mobile-controls[_ngcontent-%COMP%]{padding:.5em 1rem;margin-top:1rem;width:90%;display:flex;align-items:center;justify-content:space-around;border:2px solid linear-gradient(to right,rgba(94,53,177,.65),rgba(25,118,210,.65));border-radius:3px;box-shadow:1px -1px 6px 1px #00000080}.btn-rotate[_ngcontent-%COMP%]{width:150px!important}@keyframes _ngcontent-%COMP%_roll{0%{transform:translateY(0);opacity:1}to{transform:translateY(-70px);opacity:0}}i[_ngcontent-%COMP%]{font-size:14px;font-style:normal;font-weight:550}@media only screen and (max-width: 515px){#board[_ngcontent-%COMP%]{max-width:220px}  .btn-rotate{height:2.05rem!important;width:4rem}  .btn-rotate svg{height:70%;width:70%}  .btn-control{height:2.05rem!important;width:2.05rem!important}  .btn-control svg{height:70%;width:70%}}@media only screen and (max-width: 420px){#board[_ngcontent-%COMP%]{max-width:150px}}@media only screen and (max-width: 300px){#board[_ngcontent-%COMP%]{max-width:130px}}"]});let c=a;return c})();export{i0 as TetrisComponent};
