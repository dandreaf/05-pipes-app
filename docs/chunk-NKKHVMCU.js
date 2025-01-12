import{$ as Ve,$a as d,$b as gs,A as to,Aa as h,Ab as gt,Ac as Is,B as Ut,Ba as Z,Bb as ss,C as kr,Ca as Zr,D as ri,Da as ai,Dc as mi,E as ft,Ea as Yr,Ec as Et,F as no,Fa as Ct,G as Pr,Ga as li,Gc as xt,H as Nr,Ha as xe,Hb as bt,Hc as Rt,I as Fr,Ia as Jr,Ib as hi,Ic as Ot,J as je,Ja as co,K as Br,Ka as P,Kb as as,L as ge,La as K,Lb as yt,M as ae,Ma as be,Mb as ls,N as mt,Na as k,Nb as cs,O as S,Oa as de,Ob as M,P as z,Pa as v,Pb as Me,Q as Ur,Qa as ci,Qb as fo,R as ie,Ra as Xr,Rb as us,S as io,Sa as ui,Sb as Tt,T as F,Ta as di,Tb as ds,U as g,Ua as uo,Ub as fi,V as oo,Va as es,Vb as ps,W as Hr,Wa as po,Wb as hs,X as si,Xa as ts,Xb as te,Y as jr,Ya as ns,Yb as fs,Z as un,Za as ho,Zb as fn,_ as Je,_a as _,_b as ms,a as b,aa as W,ab as is,ac as mn,b as se,ba as q,bb as pi,ca as Ne,cb as B,cc as bs,d as Rr,da as E,db as I,dc as ze,e as Or,ea as Vr,eb as C,ec as ys,f as Ji,fa as dn,fb as x,fc as We,g as Xi,gb as J,gc as qe,h as ke,ha as zr,hb as X,hc as Ke,i as Pe,ia as H,ib as ee,j as ht,ja as Ce,jb as Re,k as Se,ka as ro,kb as pe,l as w,la as Xe,lb as m,m as ln,ma as st,mb as ve,n as Mr,na as Wr,nb as oe,o as Ar,oa as so,ob as L,p as U,pa as qr,pb as Ht,q as oi,qa as Ee,qb as R,r as Te,rb as O,s as cn,sa as ao,sb as wt,t as Lr,tb as we,u as eo,ua as Kr,ub as Oe,v as Dr,va as pn,vb as os,vc as ce,w as rt,wa as lo,wc as vs,x as Ft,xa as Gr,xb as re,xc as et,y as Bt,ya as Qr,yb as rs,yc as gn,z as $r,za as hn,zb as le,zc as _s}from"./chunk-SYA43FX6.js";var go=class extends hs{supportsDOMEvents=!0},bo=class e extends go{static makeCurrent(){ps(new e)}onAndCancel(o,t,n){return o.addEventListener(t,n),()=>{o.removeEventListener(t,n)}}dispatchEvent(o,t){o.dispatchEvent(t)}remove(o){o.remove()}createElement(o,t){return t=t||this.getDefaultDocument(),t.createElement(o)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(o){return o.nodeType===Node.ELEMENT_NODE}isShadowRoot(o){return o instanceof DocumentFragment}getGlobalEventTarget(o,t){return t==="window"?window:t==="document"?o:t==="body"?o.body:null}getBaseHref(o){let t=Pl();return t==null?null:Nl(t)}resetBaseElement(){bn=null}getUserAgent(){return window.navigator.userAgent}getCookie(o){return bs(document.cookie,o)}},bn=null;function Pl(){return bn=bn||document.querySelector("base"),bn?bn.getAttribute("href"):null}function Nl(e){return new URL(e,document.baseURI).pathname}var yo=class{addToWindow(o){mt.getAngularTestability=(n,i=!0)=>{let r=o.findTestabilityInTree(n,i);if(r==null)throw new ae(5103,!1);return r},mt.getAllAngularTestabilities=()=>o.getAllTestabilities(),mt.getAllAngularRootElements=()=>o.getAllRootElements();let t=n=>{let i=mt.getAllAngularTestabilities(),r=i.length,s=function(){r--,r==0&&n()};i.forEach(a=>{a.whenStable(s)})};mt.frameworkStabilizers||(mt.frameworkStabilizers=[]),mt.frameworkStabilizers.push(t)}findTestabilityInTree(o,t,n){if(t==null)return null;let i=o.getTestability(t);return i??(n?fi().isShadowRoot(t)?this.findTestabilityInTree(o,t.host,!0):this.findTestabilityInTree(o,t.parentElement,!0):null)}},Fl=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),vo=new ie(""),xs=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,n){this._zone=n,t.forEach(i=>{i.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,i){return this._findPluginFor(n).addEventListener(t,n,i)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(r=>r.supports(t)),!n)throw new ae(5101,!1);return this._eventNameToPlugin.set(t,n),n}static \u0275fac=function(n){return new(n||e)(F(vo),F(Ce))};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),bi=class{_doc;constructor(o){this._doc=o}manager},gi="ng-app-id";function Ss(e){for(let o of e)o.remove()}function Cs(e,o){let t=o.createElement("style");return t.textContent=e,t}function Bl(e,o,t,n){let i=e.head?.querySelectorAll(`style[${gi}="${o}"],link[${gi}="${o}"]`);if(i)for(let r of i)r.removeAttribute(gi),r instanceof HTMLLinkElement?n.set(r.href.slice(r.href.lastIndexOf("/")+1),{usage:0,elements:[r]}):r.textContent&&t.set(r.textContent,{usage:0,elements:[r]})}function _o(e,o){let t=o.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var Rs=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,n,i,r={}){this.doc=t,this.appId=n,this.nonce=i,this.isServer=gn(r),Bl(t,n,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,n){for(let i of t)this.addUsage(i,this.inline,Cs);n?.forEach(i=>this.addUsage(i,this.external,_o))}removeStyles(t,n){for(let i of t)this.removeUsage(i,this.inline);n?.forEach(i=>this.removeUsage(i,this.external))}addUsage(t,n,i){let r=n.get(t);r?r.usage++:n.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,i(t,this.doc)))})}removeUsage(t,n){let i=n.get(t);i&&(i.usage--,i.usage<=0&&(Ss(i.elements),n.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Ss(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[n,{elements:i}]of this.inline)i.push(this.addElement(t,Cs(n,this.doc)));for(let[n,{elements:i}]of this.external)i.push(this.addElement(t,_o(n,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(gi,this.appId),t.appendChild(n)}static \u0275fac=function(n){return new(n||e)(F(te),F(so),F(ao,8),F(Ee))};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),mo={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},So=/%COMP%/g,Os="%COMP%",Ul=`_nghost-${Os}`,Hl=`_ngcontent-${Os}`,jl=!0,Vl=new ie("",{providedIn:"root",factory:()=>jl});function zl(e){return Hl.replace(So,e)}function Wl(e){return Ul.replace(So,e)}function Ms(e,o){return o.map(t=>t.replace(So,e))}var ws=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,n,i,r,s,a,l,c=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=r,this.doc=s,this.platformId=a,this.ngZone=l,this.nonce=c,this.platformIsServer=gn(a),this.defaultRenderer=new yn(t,s,l,this.platformIsServer)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===pn.ShadowDom&&(n=se(b({},n),{encapsulation:pn.Emulated}));let i=this.getOrCreateRenderer(t,n);return i instanceof yi?i.applyToHost(t):i instanceof vn&&i.applyStyles(),i}getOrCreateRenderer(t,n){let i=this.rendererByCompId,r=i.get(n.id);if(!r){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,p=this.platformIsServer;switch(n.encapsulation){case pn.Emulated:r=new yi(l,c,n,this.appId,u,s,a,p);break;case pn.ShadowDom:return new Io(l,c,t,n,s,a,this.nonce,p);default:r=new vn(l,c,n,u,s,a,p);break}i.set(n.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}static \u0275fac=function(n){return new(n||e)(F(xs),F(Rs),F(so),F(Vl),F(te),F(Ee),F(Ce),F(ao))};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),yn=class{eventManager;doc;ngZone;platformIsServer;data=Object.create(null);throwOnSyntheticProps=!0;constructor(o,t,n,i){this.eventManager=o,this.doc=t,this.ngZone=n,this.platformIsServer=i}destroy(){}destroyNode=null;createElement(o,t){return t?this.doc.createElementNS(mo[t]||t,o):this.doc.createElement(o)}createComment(o){return this.doc.createComment(o)}createText(o){return this.doc.createTextNode(o)}appendChild(o,t){(Ts(o)?o.content:o).appendChild(t)}insertBefore(o,t,n){o&&(Ts(o)?o.content:o).insertBefore(t,n)}removeChild(o,t){t.remove()}selectRootElement(o,t){let n=typeof o=="string"?this.doc.querySelector(o):o;if(!n)throw new ae(-5104,!1);return t||(n.textContent=""),n}parentNode(o){return o.parentNode}nextSibling(o){return o.nextSibling}setAttribute(o,t,n,i){if(i){t=i+":"+t;let r=mo[i];r?o.setAttributeNS(r,t,n):o.setAttribute(t,n)}else o.setAttribute(t,n)}removeAttribute(o,t,n){if(n){let i=mo[n];i?o.removeAttributeNS(i,t):o.removeAttribute(`${n}:${t}`)}else o.removeAttribute(t)}addClass(o,t){o.classList.add(t)}removeClass(o,t){o.classList.remove(t)}setStyle(o,t,n,i){i&(hn.DashCase|hn.Important)?o.style.setProperty(t,n,i&hn.Important?"important":""):o.style[t]=n}removeStyle(o,t,n){n&hn.DashCase?o.style.removeProperty(t):o.style[t]=""}setProperty(o,t,n){o!=null&&(o[t]=n)}setValue(o,t){o.nodeValue=t}listen(o,t,n){if(typeof o=="string"&&(o=fi().getGlobalEventTarget(this.doc,o),!o))throw new Error(`Unsupported event target ${o} for event ${t}`);return this.eventManager.addEventListener(o,t,this.decoratePreventDefault(n))}decoratePreventDefault(o){return t=>{if(t==="__ngUnwrap__")return o;(this.platformIsServer?this.ngZone.runGuarded(()=>o(t)):o(t))===!1&&t.preventDefault()}}};function Ts(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var Io=class extends yn{sharedStylesHost;hostEl;shadowRoot;constructor(o,t,n,i,r,s,a,l){super(o,r,s,l),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=Ms(i.id,i.styles);for(let p of c){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=p,this.shadowRoot.appendChild(f)}let u=i.getExternalStyles?.();if(u)for(let p of u){let f=_o(p,r);a&&f.setAttribute("nonce",a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(o){return o===this.hostEl?this.shadowRoot:o}appendChild(o,t){return super.appendChild(this.nodeOrShadowRoot(o),t)}insertBefore(o,t,n){return super.insertBefore(this.nodeOrShadowRoot(o),t,n)}removeChild(o,t){return super.removeChild(null,t)}parentNode(o){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(o)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},vn=class extends yn{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(o,t,n,i,r,s,a,l){super(o,r,s,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=i,this.styles=l?Ms(l,n.styles):n.styles,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},yi=class extends vn{contentAttr;hostAttr;constructor(o,t,n,i,r,s,a,l){let c=i+"-"+n.id;super(o,t,n,r,s,a,l,c),this.contentAttr=zl(c),this.hostAttr=Wl(c)}applyToHost(o){this.applyStyles(),this.setAttribute(o,this.hostAttr,"")}createElement(o,t){let n=super.createElement(o,t);return super.setAttribute(n,this.contentAttr,""),n}},ql=(()=>{class e extends bi{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,i){return t.addEventListener(n,i,!1),()=>this.removeEventListener(t,n,i)}removeEventListener(t,n,i){return t.removeEventListener(n,i)}static \u0275fac=function(n){return new(n||e)(F(te))};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),Es=["alt","control","meta","shift"],Kl={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Gl={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Ql=(()=>{class e extends bi{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,n,i){let r=e.parseEventName(n),s=e.eventCallback(r.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>fi().onAndCancel(t,r.domEventName,s))}static parseEventName(t){let n=t.toLowerCase().split("."),i=n.shift();if(n.length===0||!(i==="keydown"||i==="keyup"))return null;let r=e._normalizeKey(n.pop()),s="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),s="code."),Es.forEach(c=>{let u=n.indexOf(c);u>-1&&(n.splice(u,1),s+=c+".")}),s+=r,n.length!=0||r.length===0)return null;let l={};return l.domEventName=i,l.fullKey=s,l}static matchEventFullKeyCode(t,n){let i=Kl[t.key]||t.key,r="";return n.indexOf("code.")>-1&&(i=t.code,r="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),Es.forEach(s=>{if(s!==i){let a=Gl[s];a(t)&&(r+=s+".")}}),r+=i,r===n)}static eventCallback(t,n,i){return r=>{e.matchEventFullKeyCode(r,t)&&i.runGuarded(()=>n(r))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(n){return new(n||e)(F(te))};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function Zl(){bo.makeCurrent()}function Yl(){return new ro}function Jl(){return Wr(document),document}var Xl=[{provide:Ee,useValue:vs},{provide:qr,useValue:Zl,multi:!0},{provide:te,useFactory:Jl,deps:[]}],om=as(ls,"browser",Xl),ec=new ie(""),tc=[{provide:ui,useClass:yo,deps:[]},{provide:Xr,useClass:di,deps:[Ce,uo,ui]},{provide:di,useClass:di,deps:[Ce,uo,ui]}],nc=[{provide:jr,useValue:"root"},{provide:ro,useFactory:Yl,deps:[]},{provide:vo,useClass:ql,multi:!0,deps:[te,Ce,Ee]},{provide:vo,useClass:Ql,multi:!0,deps:[te]},ws,Rs,xs,{provide:Yr,useExisting:ws},{provide:Is,useClass:Fl,deps:[]},[]],rm=(()=>{class e{constructor(t){}static \u0275fac=function(n){return new(n||e)(F(ec,12))};static \u0275mod=K({type:e});static \u0275inj=z({providers:[...nc,...tc],imports:[ce,cs]})}return e})();var As=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(n){return new(n||e)(F(te))};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Mt(e,o){return e?e.classList?e.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(e.className):!1}function vi(e,o){if(e&&o){let t=n=>{Mt(e,n)||(e.classList?e.classList.add(n):e.className+=" "+n)};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function jt(e,o){if(e&&o){let t=n=>{e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function Ls(){let e=window,o=document,t=o.documentElement,n=o.getElementsByTagName("body")[0],i=e.innerWidth||t.clientWidth||n.clientWidth,r=e.innerHeight||t.clientHeight||n.clientHeight;return{width:i,height:r}}function Ds(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}function $s(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function tt(e,o){if(e instanceof HTMLElement){let t=e.offsetWidth;if(o){let n=getComputedStyle(e);t+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return t}return 0}function _i(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}function ks(e){let o=e;return e&&typeof e=="object"&&(e.hasOwnProperty("current")?o=e.current:e.hasOwnProperty("el")&&(e.el.hasOwnProperty("nativeElement")?o=e.el.nativeElement:o=e.el)),_i(o)?o:void 0}function Co(e,o){let t=ks(e);if(t)t.appendChild(o);else throw new Error("Cannot append "+o+" to "+e)}function wo(e,o={}){if(_i(e)){let t=(n,i)=>{var r,s;let a=(r=e?.$attrs)!=null&&r[n]?[(s=e?.$attrs)==null?void 0:s[n]]:[];return[i].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let p=Array.isArray(c)?t(n,c):Object.entries(c).map(([f,y])=>n==="style"&&(y||y===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${y}`:y?f:void 0);l=p.length?l.concat(p.filter(f=>!!f)):l}}return l},a)};Object.entries(o).forEach(([n,i])=>{if(i!=null){let r=n.match(/^on(.+)/);r?e.addEventListener(r[1].toLowerCase(),i):n==="p-bind"||n==="pBind"?wo(e,i):(i=n==="class"?[...new Set(t("class",i))].join(" ").trim():n==="style"?t("style",i).join(";").trim():i,(e.$attrs=e.$attrs||{})&&(e.$attrs[n]=i),e.setAttribute(n,i))}})}}function Ps(e,o){if(e){e.style.opacity="0";let t=+new Date,n="0",i=function(){n=`${+e.style.opacity+(new Date().getTime()-t)/o}`,e.style.opacity=n,t=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(i)||setTimeout(i,16))};i()}}function vt(e,o){return _i(e)?e.matches(o)?e:e.querySelector(o):null}function At(e,o){e&&document.activeElement!==e&&e.focus(o)}function To(e){if(e){let o=e.offsetHeight,t=getComputedStyle(e);return o-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),o}return 0}function Ns(e){if(e){let o=e.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function nt(e,o){if(e){let t=e.offsetHeight;if(o){let n=getComputedStyle(e);t+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return t}return 0}function Eo(e){if(e){let o=e.offsetWidth,t=getComputedStyle(e);return o-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),o}return 0}function xo(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Fs(e){var o;e&&("remove"in Element.prototype?e.remove():(o=e.parentNode)==null||o.removeChild(e))}function Bs(e,o){let t=ks(e);if(t)t.removeChild(o);else throw new Error("Cannot remove "+o+" from "+e)}function Us(e,o="",t){_i(e)&&t!==null&&t!==void 0&&e.setAttribute(o,t)}function Hs(){let e=new Map;return{on(o,t){let n=e.get(o);return n?n.push(t):n=[t],e.set(o,n),this},off(o,t){let n=e.get(o);return n&&n.splice(n.indexOf(t)>>>0,1),this},emit(o,t){let n=e.get(o);n&&n.slice().map(i=>{i(t)})},clear(){e.clear()}}}function he(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function Ro(e,o,t=new WeakSet){if(e===o)return!0;if(!e||!o||typeof e!="object"||typeof o!="object"||t.has(e)||t.has(o))return!1;t.add(e).add(o);let n=Array.isArray(e),i=Array.isArray(o),r,s,a;if(n&&i){if(s=e.length,s!=o.length)return!1;for(r=s;r--!==0;)if(!Ro(e[r],o[r],t))return!1;return!0}if(n!=i)return!1;let l=e instanceof Date,c=o instanceof Date;if(l!=c)return!1;if(l&&c)return e.getTime()==o.getTime();let u=e instanceof RegExp,p=o instanceof RegExp;if(u!=p)return!1;if(u&&p)return e.toString()==o.toString();let f=Object.keys(e);if(s=f.length,s!==Object.keys(o).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(o,f[r]))return!1;for(r=s;r--!==0;)if(a=f[r],!Ro(e[a],o[a],t))return!1;return!0}function oc(e,o){return Ro(e,o)}function Vs(e){return!!(e&&e.constructor&&e.call&&e.apply)}function D(e){return!he(e)}function Oo(e,o){if(!e||!o)return null;try{let t=e[o];if(D(t))return t}catch{}if(Object.keys(e).length){if(Vs(o))return o(e);if(o.indexOf(".")===-1)return e[o];{let t=o.split("."),n=e;for(let i=0,r=t.length;i<r;++i){if(n==null)return null;n=n[t[i]]}return n}}return null}function Mo(e,o,t){return t?Oo(e,t)===Oo(o,t):oc(e,o)}function Ao(e,o){let t=-1;if(D(e))try{t=e.findLastIndex(o)}catch{t=e.lastIndexOf([...e].reverse().find(o))}return t}function at(e,o=!0){return e instanceof Object&&e.constructor===Object&&(o||Object.keys(e).length!==0)}function _e(e,...o){return Vs(e)?e(...o):e}function _t(e,o=!0){return typeof e=="string"&&(o||e!=="")}function js(e){return _t(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function Ii(e,o="",t={}){let n=js(o).split("."),i=n.shift();return i?at(e)?Ii(_e(e[Object.keys(e).find(r=>js(r)===i)||""],t),n.join("."),t):void 0:_e(e,t)}function Si(e,o=!0){return Array.isArray(e)&&(o||e.length!==0)}function zs(e){return D(e)&&!isNaN(e)}function Ws(e=""){return D(e)&&e.length===1&&!!e.match(/\S| /)}function Ae(e,o){if(o){let t=o.test(e);return o.lastIndex=0,t}return!1}function Lt(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function Ci(e){return _t(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(o,t)=>t===0?o:"-"+o.toLowerCase()).toLowerCase():e}function Lo(e){return _t(e)?e.replace(/[A-Z]/g,(o,t)=>t===0?o:"."+o.toLowerCase()).toLowerCase():e}var wi={};function Ie(e="pui_id_"){return wi.hasOwnProperty(e)||(wi[e]=0),wi[e]++,`${e}${wi[e]}`}function rc(){let e=[],o=(s,a,l=999)=>{let c=i(s,a,l),u=c.value+(c.key===s?0:l)+1;return e.push({key:s,value:u}),u},t=s=>{e=e.filter(a=>a.value!==s)},n=(s,a)=>i(s,a).value,i=(s,a,l=0)=>[...e].reverse().find(c=>a?!0:c.key===s)||{key:s,value:l},r=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:r,set:(s,a,l)=>{a&&(a.style.zIndex=String(o(s,!0,l)))},clear:s=>{s&&(t(r(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var hm=rc();var fe=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})();var qs=["*"],Ks=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=P({type:e,selectors:[["p-header"]],standalone:!1,ngContentSelectors:qs,decls:1,vars:0,template:function(n,i){n&1&&(ve(),oe(0))},encapsulation:2})}return e})(),Ti=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=P({type:e,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:qs,decls:1,vars:0,template:function(n,i){n&1&&(ve(),oe(0))},encapsulation:2})}return e})(),it=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(n){return new(n||e)(Z(ai))};static \u0275dir=be({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return e})(),V=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=K({type:e});static \u0275inj=z({imports:[ce]})}return e})();var sc=Object.defineProperty,ac=Object.defineProperties,lc=Object.getOwnPropertyDescriptors,Ei=Object.getOwnPropertySymbols,Zs=Object.prototype.hasOwnProperty,Ys=Object.prototype.propertyIsEnumerable,Gs=(e,o,t)=>o in e?sc(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,Qe=(e,o)=>{for(var t in o||(o={}))Zs.call(o,t)&&Gs(e,t,o[t]);if(Ei)for(var t of Ei(o))Ys.call(o,t)&&Gs(e,t,o[t]);return e},Do=(e,o)=>ac(e,lc(o)),ct=(e,o)=>{var t={};for(var n in e)Zs.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&Ei)for(var n of Ei(e))o.indexOf(n)<0&&Ys.call(e,n)&&(t[n]=e[n]);return t};var cc=Hs(),Fe=cc;function Qs(e,o){Si(e)?e.push(...o||[]):at(e)&&Object.assign(e,o)}function uc(e){return at(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function dc(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function $o(e="",o=""){return dc(`${_t(e,!1)&&_t(o,!1)?`${e}-`:e}${o}`)}function Js(e="",o=""){return`--${$o(e,o)}`}function pc(e=""){let o=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(o+t)%2!==0}function Xs(e,o="",t="",n=[],i){if(_t(e)){let r=/{([^}]*)}/g,s=e.trim();if(pc(s))return;if(Ae(s,r)){let a=s.replaceAll(r,u=>{let f=u.replace(/{|}/g,"").split(".").filter(y=>!n.some(T=>Ae(y,T)));return`var(${Js(t,Ci(f.join("-")))}${D(i)?`, ${i}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return Ae(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if(zs(e))return e}function hc(e,o,t){_t(o,!1)&&e.push(`${o}:${t};`)}function Vt(e,o){return e?`${e}{${o}}`:""}var zt=(...e)=>fc(j.getTheme(),...e),fc=(e={},o,t,n)=>{if(o){let{variable:i,options:r}=j.defaults||{},{prefix:s,transform:a}=e?.options||r||{},c=Ae(o,/{([^}]*)}/g)?o:`{${o}}`;return n==="value"||he(n)&&a==="strict"?j.getTokenValue(o):Xs(c,void 0,s,[i.excludedKeyRegex],t)}return""};function mc(e,o={}){let t=j.defaults.variable,{prefix:n=t.prefix,selector:i=t.selector,excludedKeyRegex:r=t.excludedKeyRegex}=o,s=(c,u="")=>Object.entries(c).reduce((p,[f,y])=>{let T=Ae(f,r)?$o(u):$o(u,Ci(f)),$=uc(y);if(at($)){let{variables:Q,tokens:me}=s($,T);Qs(p.tokens,me),Qs(p.variables,Q)}else p.tokens.push((n?T.replace(`${n}-`,""):T).replaceAll("-",".")),hc(p.variables,Js(T),Xs($,T,n,[r]));return p},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(e,n);return{value:a,tokens:l,declarations:a.join(""),css:Vt(i,a.join(""))}}var Ge={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let o=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var n;return(n=o.map(i=>i.resolve(t)).find(i=>i.matched))!=null?n:this.rules.custom.resolve(t)})}},_toVariables(e,o){return mc(e,{prefix:o?.prefix})},getCommon({name:e="",theme:o={},params:t,set:n,defaults:i}){var r,s,a,l,c,u,p;let{preset:f,options:y}=o,T,$,Q,me,ye,$e,He;if(D(f)&&y.transform!=="strict"){let{primitive:Vn,semantic:zn,extend:Wn}=f,rn=zn||{},{colorScheme:qn}=rn,Kn=ct(rn,["colorScheme"]),Gn=Wn||{},{colorScheme:Qn}=Gn,sn=ct(Gn,["colorScheme"]),an=qn||{},{dark:Zn}=an,Yn=ct(an,["dark"]),Jn=Qn||{},{dark:Xn}=Jn,ei=ct(Jn,["dark"]),ti=D(Vn)?this._toVariables({primitive:Vn},y):{},ni=D(Kn)?this._toVariables({semantic:Kn},y):{},ii=D(Yn)?this._toVariables({light:Yn},y):{},wr=D(Zn)?this._toVariables({dark:Zn},y):{},Tr=D(sn)?this._toVariables({semantic:sn},y):{},Er=D(ei)?this._toVariables({light:ei},y):{},xr=D(Xn)?this._toVariables({dark:Xn},y):{},[gl,bl]=[(r=ti.declarations)!=null?r:"",ti.tokens],[yl,vl]=[(s=ni.declarations)!=null?s:"",ni.tokens||[]],[_l,Il]=[(a=ii.declarations)!=null?a:"",ii.tokens||[]],[Sl,Cl]=[(l=wr.declarations)!=null?l:"",wr.tokens||[]],[wl,Tl]=[(c=Tr.declarations)!=null?c:"",Tr.tokens||[]],[El,xl]=[(u=Er.declarations)!=null?u:"",Er.tokens||[]],[Rl,Ol]=[(p=xr.declarations)!=null?p:"",xr.tokens||[]];T=this.transformCSS(e,gl,"light","variable",y,n,i),$=bl;let Ml=this.transformCSS(e,`${yl}${_l}`,"light","variable",y,n,i),Al=this.transformCSS(e,`${Sl}`,"dark","variable",y,n,i);Q=`${Ml}${Al}`,me=[...new Set([...vl,...Il,...Cl])];let Ll=this.transformCSS(e,`${wl}${El}color-scheme:light`,"light","variable",y,n,i),Dl=this.transformCSS(e,`${Rl}color-scheme:dark`,"dark","variable",y,n,i);ye=`${Ll}${Dl}`,$e=[...new Set([...Tl,...xl,...Ol])],He=_e(f.css,{dt:zt})}return{primitive:{css:T,tokens:$},semantic:{css:Q,tokens:me},global:{css:ye,tokens:$e},style:He}},getPreset({name:e="",preset:o={},options:t,params:n,set:i,defaults:r,selector:s}){var a,l,c;let u,p,f;if(D(o)&&t.transform!=="strict"){let y=e.replace("-directive",""),T=o,{colorScheme:$,extend:Q,css:me}=T,ye=ct(T,["colorScheme","extend","css"]),$e=Q||{},{colorScheme:He}=$e,Vn=ct($e,["colorScheme"]),zn=$||{},{dark:Wn}=zn,rn=ct(zn,["dark"]),qn=He||{},{dark:Kn}=qn,Gn=ct(qn,["dark"]),Qn=D(ye)?this._toVariables({[y]:Qe(Qe({},ye),Vn)},t):{},sn=D(rn)?this._toVariables({[y]:Qe(Qe({},rn),Gn)},t):{},an=D(Wn)?this._toVariables({[y]:Qe(Qe({},Wn),Kn)},t):{},[Zn,Yn]=[(a=Qn.declarations)!=null?a:"",Qn.tokens||[]],[Jn,Xn]=[(l=sn.declarations)!=null?l:"",sn.tokens||[]],[ei,ti]=[(c=an.declarations)!=null?c:"",an.tokens||[]],ni=this.transformCSS(y,`${Zn}${Jn}`,"light","variable",t,i,r,s),ii=this.transformCSS(y,ei,"dark","variable",t,i,r,s);u=`${ni}${ii}`,p=[...new Set([...Yn,...Xn,...ti])],f=_e(me,{dt:zt})}return{css:u,tokens:p,style:f}},getPresetC({name:e="",theme:o={},params:t,set:n,defaults:i}){var r;let{preset:s,options:a}=o,l=(r=s?.components)==null?void 0:r[e];return this.getPreset({name:e,preset:l,options:a,params:t,set:n,defaults:i})},getPresetD({name:e="",theme:o={},params:t,set:n,defaults:i}){var r;let s=e.replace("-directive",""),{preset:a,options:l}=o,c=(r=a?.directives)==null?void 0:r[s];return this.getPreset({name:s,preset:c,options:l,params:t,set:n,defaults:i})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,o){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?o.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:o.options.darkModeSelector):[]},getLayerOrder(e,o={},t,n){let{cssLayer:i}=o;return i?`@layer ${_e(i.order||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:o={},params:t,props:n={},set:i,defaults:r}){let s=this.getCommon({name:e,theme:o,params:t,set:i,defaults:r}),a=Object.entries(n).reduce((l,[c,u])=>l.push(`${c}="${u}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,u])=>{if(u?.css){let p=Lt(u?.css),f=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${f}" ${a}>${p}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:o={},params:t,props:n={},set:i,defaults:r}){var s;let a={name:e,theme:o,params:t,set:i,defaults:r},l=(s=e.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(n).reduce((u,[p,f])=>u.push(`${p}="${f}"`)&&u,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${Lt(l)}</style>`:""},createTokens(e={},o,t="",n="",i={}){return Object.entries(e).forEach(([r,s])=>{let a=Ae(r,o.variable.excludedKeyRegex)?t:t?`${t}.${Lo(r)}`:Lo(r),l=n?`${n}.${r}`:r;at(s)?this.createTokens(s,o,a,l,i):(i[a]||(i[a]={paths:[],computed(c,u={}){var p,f;return this.paths.length===1?(p=this.paths[0])==null?void 0:p.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(f=this.paths.find(y=>y.scheme===c))==null?void 0:f.computed(c,u.binding):this.paths.map(y=>y.computed(y.scheme,u[y.scheme]))}}),i[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){let p=/{([^}]*)}/g,f=s;if(u.name=this.path,u.binding||(u.binding={}),Ae(s,p)){let T=s.trim().replaceAll(p,me=>{var ye;let $e=me.replace(/{|}/g,""),He=(ye=i[$e])==null?void 0:ye.computed(c,u);return Si(He)&&He.length===2?`light-dark(${He[0].value},${He[1].value})`:He?.value}),$=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,Q=/var\([^)]+\)/g;f=Ae(T.replace(Q,"0"),$)?`calc(${T})`:T}return he(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:f.includes("undefined")?void 0:f}}}))}),i},getTokenValue(e,o,t){var n;let r=(l=>l.split(".").filter(u=>!Ae(u.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(o),s=o.includes("colorScheme.light")?"light":o.includes("colorScheme.dark")?"dark":void 0,a=[(n=e[r])==null?void 0:n.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{let u=c,{colorScheme:p}=u,f=ct(u,["colorScheme"]);return l[p]=f,l},void 0)},getSelectorRule(e,o,t,n){return t==="class"||t==="attr"?Vt(D(o)?`${e}${o},${e} ${o}`:e,n):Vt(e,D(o)?Vt(o,n):n)},transformCSS(e,o,t,n,i={},r,s,a){if(D(o)){let{cssLayer:l}=i;if(n!=="style"){let c=this.getColorSchemeOption(i,s);o=t==="dark"?c.reduce((u,{type:p,selector:f})=>(D(f)&&(u+=f.includes("[CSS]")?f.replace("[CSS]",o):this.getSelectorRule(f,a,p,o)),u),""):Vt(a??":root",o)}if(l){let c={name:"primeui",order:"primeui"};at(l)&&(c.name=_e(l.name,{name:e,type:n})),D(c.name)&&(o=Vt(`@layer ${c.name}`,o),r?.layerNames(c.name))}return o}return""}},j={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:o}=e;o&&(this._theme=Do(Qe({},o),{options:Qe(Qe({},this.defaults.options),o.options)}),this._tokens=Ge.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),Fe.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=Do(Qe({},this.theme),{preset:e}),this._tokens=Ge.createTokens(e,this.defaults),this.clearLoadedStyleNames(),Fe.emit("preset:change",e),Fe.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=Do(Qe({},this.theme),{options:e}),this.clearLoadedStyleNames(),Fe.emit("options:change",e),Fe.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return Ge.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",o){return Ge.getCommon({name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",o){let t={name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Ge.getPresetC(t)},getDirective(e="",o){let t={name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Ge.getPresetD(t)},getCustomPreset(e="",o,t,n){let i={name:e,preset:o,options:this.options,selector:t,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Ge.getPreset(i)},getLayerOrderCSS(e=""){return Ge.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",o,t="style",n){return Ge.transformCSS(e,o,n,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",o,t={}){return Ge.getCommonStyleSheet({name:e,theme:this.theme,params:o,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,o,t={}){return Ge.getStyleSheet({name:e,theme:this.theme,params:o,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:o}){this._loadingStyles.size&&(this._loadingStyles.delete(o),Fe.emit(`theme:${o}:load`,e),!this._loadingStyles.size&&Fe.emit("theme:load"))}};var gc=0,ea=(()=>{class e{document=g(te);use(t,n={}){let i=!1,r=t,s=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++gc}`,id:u=void 0,media:p=void 0,nonce:f=void 0,first:y=!1,props:T={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||u&&this.document.getElementById(u)||this.document.createElement("style"),!s.isConnected){r=t,wo(s,{type:"text/css",media:p,nonce:f});let $=this.document.head;y&&$.firstChild?$.insertBefore(s,$.firstChild):$.appendChild(s),Us(s,"data-primeng-style-id",c)}return s.textContent!==r&&(s.textContent=r),{id:u,name:c,el:s,css:r}}}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Wt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},bc=({dt:e})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,yc=({dt:e})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${e("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,G=(()=>{class e{name="base";useStyle=g(ea);theme=bc;css=yc;classes={};inlineStyles={};load=(t,n={},i=r=>r)=>{let r=i(_e(t,{dt:zt}));return r?this.useStyle.use(Lt(r),b({name:this.name},n)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},n="")=>this.load(this.theme,t,(i="")=>j.transformCSS(t.name||this.name,`${i}${n}`));getCommonTheme=t=>j.getCommon(this.name,t);getComponentTheme=t=>j.getComponent(this.name,t);getDirectiveTheme=t=>j.getDirective(this.name,t);getPresetTheme=(t,n,i)=>j.getCustomPreset(this.name,t,n,i);getLayerOrderThemeCSS=()=>j.getLayerOrderCSS(this.name);getStyleSheet=(t="",n={})=>{if(this.css){let i=_e(this.css,{dt:zt}),r=Lt(`${i}${t}`),s=Object.entries(n).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(t,n={})=>j.getCommonStyleSheet(this.name,t,n);getThemeStyleSheet=(t,n={})=>{let i=[j.getStyleSheet(this.name,t,n)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=_e(this.theme,{dt:zt}),a=Lt(j.transformCSS(r,s)),l=Object.entries(n).reduce((c,[u,p])=>c.push(`${u}="${p}"`)&&c,[]).join(" ");i.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return i.join("")};static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var vc=(()=>{class e{theme=xe(void 0);csp=xe({nonce:void 0});isThemeChanged=!1;document=g(te);baseStyle=g(G);constructor(){Tt(()=>{Fe.on("theme:change",t=>{us(()=>{this.isThemeChanged=!0,this.theme.set(t)})})}),Tt(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){j.clearLoadedStyleNames(),Fe.clear()}onThemeChange(t){j.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!j.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:i,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(t?.css,b({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,b({name:"semantic-variables"},s)),this.baseStyle.load(i?.css,b({name:"global-variables"},s)),this.baseStyle.loadTheme(b({name:"global-style"},s),r),j.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:n,csp:i}=t||{};n&&this.theme.set(n),i&&this.csp.set(i)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Po=(()=>{class e extends vc{ripple=xe(!1);platformId=g(Ee);inputStyle=xe("outlined");inputVariant=xe("outlined");overlayOptions={};csp=xe({nonce:void 0});filterMatchModeOptions={text:[fe.STARTS_WITH,fe.CONTAINS,fe.NOT_CONTAINS,fe.ENDS_WITH,fe.EQUALS,fe.NOT_EQUALS],numeric:[fe.EQUALS,fe.NOT_EQUALS,fe.LESS_THAN,fe.LESS_THAN_OR_EQUAL_TO,fe.GREATER_THAN,fe.GREATER_THAN_OR_EQUAL_TO],date:[fe.DATE_IS,fe.DATE_IS_NOT,fe.DATE_BEFORE,fe.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new ke;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=b(b({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:n,ripple:i,inputStyle:r,theme:s,overlayOptions:a,translation:l}=t||{};n&&this.csp.set(n),i&&this.ripple.set(i),r&&this.inputStyle.set(r),a&&(this.overlayOptions=a),l&&this.setTranslation(l),s&&this.setThemeConfig({theme:s,csp:n})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),_c=new ie("PRIME_NG_CONFIG");function ig(...e){let o=e?.map(n=>({provide:_c,useValue:n,multi:!1})),t=ts(()=>{let n=g(Po);e?.forEach(i=>n.setConfig(i))});return si([...o,t])}var ta=(()=>{class e extends G{name="common";static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),ne=(()=>{class e{document=g(te);platformId=g(Ee);el=g(st);injector=g(dn);cd=g(yt);renderer=g(Ct);config=g(Po);baseComponentStyle=g(ta);baseStyle=g(G);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Ie("pc");_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,n="",i={}){return Ii(t,n,i)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!gn(this.platformId)){let{dt:n}=t;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let t=()=>{Wt.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),Wt.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!Wt.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Wt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!j.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:i,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,b({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,b({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,b({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(b({name:"global-style"},this.styleOptions),r),j.setLoadedStyleName("common")}if(!j.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,b({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(b({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),j.setLoadedStyleName(this.componentStyle?.name)}if(!j.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,b({name:"layer-order",first:!0},this.styleOptions)),j.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:n}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(n,b({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){Wt.clearLoadedStyleNames(),Fe.on("theme:change",t)}cx(t,n){let i=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:t}sx(t){let n=this.componentStyle?.inlineStyles?.[t];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:b({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||e)};static \u0275dir=be({type:e,inputs:{dt:"dt"},features:[re([ta,G]),Ve]})}return e})();var No=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)t.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)t.className+=" "+i[r]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==t)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(t,n){let i=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==t)return r;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(t,n,i="self"){i!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,i="self",r=!0){t&&n&&(r&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),i==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,i=!0){let r=ye=>{if(ye)return getComputedStyle(ye).getPropertyValue("position")==="relative"?ye:r(ye.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,l=n.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),p=this.getViewport(),y=r(t)?.getBoundingClientRect()||{top:-1*c,left:-1*u},T,$;l.top+a+s.height>p.height?(T=l.top-y.top-s.height,t.style.transformOrigin="bottom",l.top+T<0&&(T=-1*l.top)):(T=a+l.top-y.top,t.style.transformOrigin="top");let Q=l.left+s.width-p.width,me=l.left-y.left;s.width>p.width?$=(l.left-y.left)*-1:Q>0?$=me-Q:$=l.left-y.left,t.style.top=T+"px",t.style.left=$+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,n,i=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,a=r.width,l=n.offsetHeight,c=n.offsetWidth,u=n.getBoundingClientRect(),p=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),y=this.getViewport(),T,$;u.top+l+s>y.height?(T=u.top+p-s,t.style.transformOrigin="bottom",T<0&&(T=p)):(T=l+u.top+p,t.style.transformOrigin="top"),u.left+a>y.width?$=Math.max(0,u.left+f+c-a):$=u.left+f,t.style.top=T+"px",t.style.left=$+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let i=this.getParents(t),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of i){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let u of c){let p=this.findSingle(a,u);p&&s(p)&&n.push(p)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let i=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,p=t.scrollTop,f=t.clientHeight,y=this.getOuterHeight(n);u<0?t.scrollTop=p+u:u+y>f&&(t.scrollTop=p+u-f+y)}static fadeIn(t,n){t.style.opacity=0;let i=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,t.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,n){var i=1,r=50,s=n,a=r/s;let l=setInterval(()=>{i=i-a,i<=0&&(i=0,clearInterval(l)),t.style.opacity=i},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,n)}static getOuterWidth(t,n){let i=t.offsetWidth;if(n){let r=getComputedStyle(t);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,i=getComputedStyle(t);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(t){let n=t.offsetWidth,i=getComputedStyle(t);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,i=getComputedStyle(t);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(t,n){let i=t.offsetHeight;if(n){let r=getComputedStyle(t);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(t){let n=t.offsetHeight,i=getComputedStyle(t);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,i=getComputedStyle(t);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let t=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=t.innerWidth||i.clientWidth||r.clientWidth,a=t.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let i=t.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var i=t.indexOf("Trident/");if(i>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,i){t[n].apply(t,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let i=this.find(t,this.getFocusableSelectorString(n)),r=[];for(let s of i){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,n=""){let i=this.findSingle(t,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(t,n=""){let i=this.getFocusableElements(t,n);return i.length>0?i[0]:null}static getLastFocusableElement(t,n){let i=this.getFocusableElements(t,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(t,n=!1){let i=e.getFocusableElements(t),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let i=typeof t;if(i==="string")return document.querySelector(t);if(i==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let i=t.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...i){if(t){let r=document.createElement(t);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(t,n="",i){this.isElement(t)&&i!==null&&i!==void 0&&t.setAttribute(n,i)}static setAttributes(t,n={}){if(this.isElement(t)){let i=(r,s)=>{let a=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let p=Array.isArray(c)?i(r,c):Object.entries(c).map(([f,y])=>r==="style"&&(y||y===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${y}`:y?f:void 0);l=p.length?l.concat(p.filter(f=>!!f)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})(),xi=class{element;listener;scrollableParents;constructor(o,t=()=>{}){this.element=o,this.listener=t}bindScrollListener(){this.scrollableParents=No.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var na=(()=>{class e extends ne{autofocus=!1;_autofocus=!1;focused=!1;platformId=g(Ee);document=g(te);host=g(st);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){et(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=No.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275dir=be({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",M],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[de,k]})}return e})();var Ic=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Sc={root:({props:e,instance:o})=>["p-badge p-component",{"p-badge-circle":D(e.value)&&String(e.value).length===1,"p-badge-dot":he(e.value)&&!o.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},ia=(()=>{class e extends G{name="badge";theme=Ic;classes=Sc;static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var _n=(()=>{class e extends ne{styleClass=Xe();style=Xe();badgeSize=Xe();size=Xe();severity=Xe();value=Xe();badgeDisabled=Xe(!1,{transform:M});_componentStyle=g(ia);containerClass=fo(()=>{let t="p-badge p-component";return D(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),he(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275cmp=P({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,i){n&2&&(pi(i.style()),B(i.containerClass()),is("display",i.badgeDisabled()&&"none"))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[re([ia]),k],decls:1,vars:1,template:function(n,i){n&1&&we(0),n&2&&Oe(i.value())},dependencies:[ce,V],encapsulation:2,changeDetection:0})}return e})(),In=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=K({type:e});static \u0275inj=z({imports:[_n,V,V]})}return e})();var Cc=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,wc=(()=>{class e extends G{name="baseicon";inlineStyles=Cc;static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Tc=["*"],Be=(()=>{class e extends ne{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=he(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275cmp=P({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",M],styleClass:"styleClass"},features:[re([wc]),de,k],ngContentSelectors:Tc,decls:1,vars:0,template:function(n,i){n&1&&(ve(),oe(0))},encapsulation:2,changeDetection:0})}return e})();var ra=(()=>{class e extends Be{static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275cmp=P({type:e,selectors:[["AngleDownIcon"]],features:[k],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(n,i){n&1&&(Ne(),I(0,"svg",0),x(1,"path",1),C()),n&2&&(B(i.getClassNames()),_("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return e})();var sa=(()=>{class e extends Be{static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275cmp=P({type:e,selectors:[["AngleRightIcon"]],features:[k],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z","fill","currentColor"]],template:function(n,i){n&1&&(Ne(),I(0,"svg",0),x(1,"path",1),C()),n&2&&(B(i.getClassNames()),_("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return e})();var aa=(()=>{class e extends Be{static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275cmp=P({type:e,selectors:[["BarsIcon"]],features:[k],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(n,i){n&1&&(Ne(),I(0,"svg",0),x(1,"path",1),C()),n&2&&(B(i.getClassNames()),_("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return e})();var Ri=(()=>{class e extends Be{static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275cmp=P({type:e,selectors:[["MinusIcon"]],features:[k],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,i){n&1&&(Ne(),I(0,"svg",0),x(1,"path",1),C()),n&2&&(B(i.getClassNames()),_("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return e})();var Oi=(()=>{class e extends Be{pathId;ngOnInit(){this.pathId="url(#"+Ie()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275cmp=P({type:e,selectors:[["PlusIcon"]],features:[k],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(Ne(),I(0,"svg",0)(1,"g"),x(2,"path",1),C(),I(3,"defs")(4,"clipPath",2),x(5,"rect",3),C()()()),n&2&&(B(i.getClassNames()),_("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),h(),_("clip-path",i.pathId),h(3),d("id",i.pathId))},encapsulation:2})}return e})();var la=(()=>{class e extends Be{pathId;ngOnInit(){this.pathId="url(#"+Ie()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275cmp=P({type:e,selectors:[["SpinnerIcon"]],features:[k],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(Ne(),I(0,"svg",0)(1,"g"),x(2,"path",1),C(),I(3,"defs")(4,"clipPath",2),x(5,"rect",3),C()()()),n&2&&(B(i.getClassNames()),_("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),h(),_("clip-path",i.pathId),h(3),d("id",i.pathId))},encapsulation:2})}return e})();var Ec=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,xc={root:"p-ink"},ca=(()=>{class e extends G{name="ripple";theme=Ec;classes=xc;static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Mi=(()=>{class e extends ne{zone=g(Ce);_componentStyle=g(ca);animationListener;mouseDownListener;timeout;constructor(){super(),Tt(()=>{et(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(jt(n,"p-ink-active"),!To(n)&&!Eo(n)){let a=Math.max(tt(this.el.nativeElement),nt(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let i=Ns(this.el.nativeElement),r=t.pageX-i.left+this.document.body.scrollTop-Eo(n)/2,s=t.pageY-i.top+this.document.body.scrollLeft-To(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),vi(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&jt(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&jt(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),jt(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Fs(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=be({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[re([ca]),k]})}return e})();var Rc=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Oc={root:({instance:e,props:o})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link,[`p-button-${o.severity}`]:o.severity,"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large","p-button-plain":o.plain,"p-button-fluid":o.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},ua=(()=>{class e extends G{name="button";theme=Rc;classes=Oc;static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Mc=["content"],Ac=["loading"],Lc=["icon"],Dc=["*"],da=e=>({class:e});function $c(e,o){e&1&&ee(0)}function kc(e,o){if(e&1&&x(0,"span",8),e&2){let t=m(3);d("ngClass",t.iconClass()),_("aria-hidden",!0)("data-pc-section","loadingicon")}}function Pc(e,o){if(e&1&&x(0,"SpinnerIcon",9),e&2){let t=m(3);d("styleClass",t.spinnerIconClass())("spin",!0),_("aria-hidden",!0)("data-pc-section","loadingicon")}}function Nc(e,o){if(e&1&&(J(0),v(1,kc,1,3,"span",6)(2,Pc,1,4,"SpinnerIcon",7),X()),e&2){let t=m(2);h(),d("ngIf",t.loadingIcon),h(),d("ngIf",!t.loadingIcon)}}function Fc(e,o){}function Bc(e,o){if(e&1&&v(0,Fc,0,0,"ng-template",10),e&2){let t=m(2);d("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Uc(e,o){if(e&1&&(J(0),v(1,Nc,3,2,"ng-container",2)(2,Bc,1,1,null,5),X()),e&2){let t=m();h(),d("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),h(),d("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",le(3,da,t.iconClass()))}}function Hc(e,o){if(e&1&&x(0,"span",8),e&2){let t=m(2);B(t.icon),d("ngClass",t.iconClass()),_("data-pc-section","icon")}}function jc(e,o){}function Vc(e,o){if(e&1&&v(0,jc,0,0,"ng-template",10),e&2){let t=m(2);d("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function zc(e,o){if(e&1&&(J(0),v(1,Hc,1,4,"span",11)(2,Vc,1,1,null,5),X()),e&2){let t=m();h(),d("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),h(),d("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",le(3,da,t.iconClass()))}}function Wc(e,o){if(e&1&&(I(0,"span",12),we(1),C()),e&2){let t=m();_("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),h(),Oe(t.label)}}function qc(e,o){if(e&1&&x(0,"p-badge",13),e&2){let t=m();d("value",t.badge)("severity",t.badgeSeverity)}}var Fo=(()=>{class e extends ne{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new H;onFocus=new H;onBlur=new H;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return he(this.fluid)?!!n:this.fluid}_componentStyle=g(ua);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;case"icon":this.iconTemplate=t.template;break;case"loadingicon":this.loadingIconTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:n}=t;if(n){let i=n.currentValue;for(let r in i)this[r]=i[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275cmp=P({type:e,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&(L(r,Mc,5),L(r,Ac,5),L(r,Lc,5),L(r,it,4)),n&2){let s;R(s=O())&&(i.contentTemplate=s.first),R(s=O())&&(i.loadingIconTemplate=s.first),R(s=O())&&(i.iconTemplate=s.first),R(s=O())&&(i.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",M],loading:[2,"loading","loading",M],loadingIcon:"loadingIcon",raised:[2,"raised","raised",M],rounded:[2,"rounded","rounded",M],text:[2,"text","text",M],plain:[2,"plain","plain",M],severity:"severity",outlined:[2,"outlined","outlined",M],link:[2,"link","link",M],tabindex:[2,"tabindex","tabindex",Me],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",M],fluid:[2,"fluid","fluid",M],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[re([ua]),de,k,Ve],ngContentSelectors:Dc,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,i){n&1&&(ve(),I(0,"button",0),pe("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),oe(1),v(2,$c,1,0,"ng-container",1)(3,Uc,3,5,"ng-container",2)(4,zc,3,5,"ng-container",2)(5,Wc,2,3,"span",3)(6,qc,1,2,"p-badge",4),C()),n&2&&(d("ngStyle",i.style)("disabled",i.disabled||i.loading)("ngClass",i.buttonClass)("pAutoFocus",i.autofocus),_("type",i.type)("aria-label",i.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex),h(2),d("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),h(),d("ngIf",i.loading),h(),d("ngIf",!i.loading),h(),d("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),h(),d("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[ce,ze,We,Ke,qe,Mi,na,la,In,_n,V],encapsulation:2,changeDetection:0})}return e})(),qt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=K({type:e});static \u0275inj=z({imports:[ce,Fo,V,V]})}return e})();var Gc=({dt:e})=>`
.p-card {
    background: ${e("card.background")};
    color: ${e("card.color")};
    box-shadow: ${e("card.shadow")};
    border-radius: ${e("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${e("card.caption.gap")};
}

.p-card-body {
    padding: ${e("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("card.body.gap")};
}

.p-card-title {
    font-size: ${e("card.title.font.size")};
    font-weight: ${e("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${e("card.subtitle.color")};
}
`,Qc={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},pa=(()=>{class e extends G{name="card";theme=Gc;classes=Qc;static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Zc=["header"],Yc=["title"],Jc=["subtitle"],Xc=["content"],eu=["footer"],tu=["*",[["p-header"]],[["p-footer"]]],nu=["*","p-header","p-footer"];function iu(e,o){e&1&&ee(0)}function ou(e,o){if(e&1&&(I(0,"div",8),oe(1,1),v(2,iu,1,0,"ng-container",6),C()),e&2){let t=m();h(2),d("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function ru(e,o){if(e&1&&(J(0),we(1),X()),e&2){let t=m(2);h(),Oe(t.header)}}function su(e,o){e&1&&ee(0)}function au(e,o){if(e&1&&(I(0,"div",9),v(1,ru,2,1,"ng-container",10)(2,su,1,0,"ng-container",6),C()),e&2){let t=m();h(),d("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),h(),d("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function lu(e,o){if(e&1&&(J(0),we(1),X()),e&2){let t=m(2);h(),Oe(t.subheader)}}function cu(e,o){e&1&&ee(0)}function uu(e,o){if(e&1&&(I(0,"div",11),v(1,lu,2,1,"ng-container",10)(2,cu,1,0,"ng-container",6),C()),e&2){let t=m();h(),d("ngIf",t.subheader&&!t._subtitleTemplate&&t.subtitleTemplate),h(),d("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function du(e,o){e&1&&ee(0)}function pu(e,o){e&1&&ee(0)}function hu(e,o){if(e&1&&(I(0,"div",12),oe(1,2),v(2,pu,1,0,"ng-container",6),C()),e&2){let t=m();h(2),d("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var fu=(()=>{class e extends ne{header;subheader;set style(t){Mo(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=xe(null);_componentStyle=g(pa);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275cmp=P({type:e,selectors:[["p-card"]],contentQueries:function(n,i,r){if(n&1&&(L(r,Ks,5),L(r,Ti,5),L(r,Zc,4),L(r,Yc,4),L(r,Jc,4),L(r,Xc,4),L(r,eu,4),L(r,it,4)),n&2){let s;R(s=O())&&(i.headerFacet=s.first),R(s=O())&&(i.footerFacet=s.first),R(s=O())&&(i.headerTemplate=s.first),R(s=O())&&(i.titleTemplate=s.first),R(s=O())&&(i.subtitleTemplate=s.first),R(s=O())&&(i.contentTemplate=s.first),R(s=O())&&(i.footerTemplate=s.first),R(s=O())&&(i.templates=s)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[re([pa]),k],ngContentSelectors:nu,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(n,i){n&1&&(ve(tu),I(0,"div",0),v(1,ou,3,1,"div",1),I(2,"div",2),v(3,au,3,2,"div",3)(4,uu,3,2,"div",4),I(5,"div",5),oe(6),v(7,du,1,0,"ng-container",6),C(),v(8,hu,3,1,"div",7),C()()),n&2&&(B(i.styleClass),d("ngClass","p-card p-component")("ngStyle",i._style()),_("data-pc-name","card"),h(),d("ngIf",i.headerFacet||i.headerTemplate||i._headerTemplate),h(2),d("ngIf",i.header||i.titleTemplate||i._titleTemplate),h(),d("ngIf",i.subheader||i.subtitleTemplate||i._subtitleTemplate),h(3),d("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),h(),d("ngIf",i.footerFacet||i.footerTemplate||i._footerTemplate))},dependencies:[ce,ze,We,Ke,qe,V],encapsulation:2,changeDetection:0})}return e})(),ha=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=K({type:e});static \u0275inj=z({imports:[fu,V,V]})}return e})();var mu=({dt:e})=>`
.p-fieldset {
    background: ${e("fieldset.background")};
    border: 1px solid ${e("fieldset.border.color")};
    border-radius: ${e("fieldset.border.radius")};
    color: ${e("fieldset.color")};
    padding:  ${e("fieldset.padding")};
    margin: 0;
}

.p-fieldset-legend {
    background: ${e("fieldset.legend.background")};
    border-radius: ${e("fieldset.legend.border.radius")};
    border-width: ${e("fieldset.legend.border.width")};
    border-style: solid;
    border-color: ${e("fieldset.legend.border.color")};
    padding: ${e("fieldset.legend.padding")};
    transition: background ${e("fieldset.transition.duration")}, color ${e("fieldset.transition.duration")}, outline-color ${e("fieldset.transition.duration")}, box-shadow ${e("fieldset.transition.duration")};
}

.p-fieldset-toggleable > .p-fieldset-legend {
    padding: 0;
}

.p-fieldset-toggle-button {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    display: flex;
    gap: ${e("fieldset.legend.gap")};
    align-items: center;
    justify-content: center;
    padding: ${e("fieldset.legend.padding")};
    background: transparent;
    border: 0 none;
    border-radius: ${e("fieldset.legend.border.radius")};
    transition: background ${e("fieldset.transition.duration")}, color ${e("fieldset.transition.duration")}, outline-color ${e("fieldset.transition.duration")}, box-shadow ${e("fieldset.transition.duration")};
    outline-color: transparent;
}

.p-fieldset-legend-label {
    font-weight: ${e("fieldset.legend.font.weight")};
}

.p-fieldset-toggle-button:focus-visible {
    box-shadow: ${e("fieldset.legend.focus.ring.shadow")};
    outline: ${e("fieldset.legend.focus.ring.width")} ${e("fieldset.legend.focus.ring.style")} ${e("fieldset.legend.focus.ring.color")};
    outline-offset: ${e("fieldset.legend.focus.ring.offset")};
}

.p-fieldset-toggleable > .p-fieldset-legend:hover {
    color: ${e("fieldset.legend.hover.color")};
    background: ${e("fieldset.legend.hover.background")};
}

.p-fieldset-toggle-icon {
    color: ${e("fieldset.toggle.icon.color")};
    transition: color ${e("fieldset.transition.duration")};
}

.p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
    color: ${e("fieldset.toggle.icon.hover.color")};
}

.p-fieldset .p-fieldset-content {
    padding: ${e("fieldset.content.padding")};
}

/* For PrimeNG */
.p-fieldset-toggleable.p-fieldset-expanded > .p-fieldset-content-container:not(.ng-animating) {
    overflow: visible
}

.p-fieldset-toggleable .p-fieldset-content-container {
    overflow: hidden;
}
`,gu={root:({props:e})=>["p-fieldset p-component",{"p-fieldset-toggleable":e.toggleable}],legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},fa=(()=>{class e extends G{name="fieldset";theme=mu;classes=gu;static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var bu=["header"],yu=["expandicon"],vu=["collapseicon"],_u=["content"],Iu=["*",[["p-header"]]],Su=["*","p-header"],Cu=(e,o)=>({"p-fieldset p-component":!0,"p-fieldset-toggleable":e,"p-fieldset-expanded":o}),wu=e=>({transitionParams:e,height:"0"}),Tu=e=>({value:"hidden",params:e}),Eu=e=>({transitionParams:e,height:"*"}),xu=e=>({value:"visible",params:e});function Ru(e,o){e&1&&x(0,"PlusIcon",11),e&2&&(d("styleClass","p-fieldset-toggler"),_("data-pc-section","togglericon"))}function Ou(e,o){e&1&&ee(0)}function Mu(e,o){if(e&1&&(I(0,"span",12),v(1,Ou,1,0,"ng-container",6),C()),e&2){let t=m(3);_("data-pc-section","togglericon"),h(),d("ngTemplateOutlet",t.expandIconTemplate||t._expandIconTemplate)}}function Au(e,o){if(e&1&&(J(0),v(1,Ru,1,2,"PlusIcon",9)(2,Mu,2,2,"span",10),X()),e&2){let t=m(2);h(),d("ngIf",!t.expandIconTemplate&&!t._expandIconTemplate),h(),d("ngIf",t.expandIconTemplate||t._expandIconTemplate)}}function Lu(e,o){e&1&&x(0,"MinusIcon",11),e&2&&(d("styleClass","p-fieldset-toggler"),_("aria-hidden",!0)("data-pc-section","togglericon"))}function Du(e,o){e&1&&ee(0)}function $u(e,o){if(e&1&&(I(0,"span",12),v(1,Du,1,0,"ng-container",6),C()),e&2){let t=m(3);_("data-pc-section","togglericon"),h(),d("ngTemplateOutlet",t.collapseIconTemplate||t._collapseIconTemplate)}}function ku(e,o){if(e&1&&(J(0),v(1,Lu,1,3,"MinusIcon",9)(2,$u,2,2,"span",10),X()),e&2){let t=m(2);h(),d("ngIf",!t.collapseIconTemplate&&!t._collapseIconTemplate),h(),d("ngIf",t.collapseIconTemplate||t._collapseIconTemplate)}}function Pu(e,o){e&1&&ee(0)}function Nu(e,o){if(e&1){let t=Re();J(0),I(1,"button",7),pe("click",function(i){W(t);let r=m();return q(r.toggle(i))})("keydown",function(i){W(t);let r=m();return q(r.onKeyDown(i))}),v(2,Au,3,2,"ng-container",8)(3,ku,3,2,"ng-container",8)(4,Pu,1,0,"ng-container",6),C(),X()}if(e&2){let t=m(),n=wt(4);h(),_("id",t.id+"_header")("aria-controls",t.id+"_content")("aria-expanded",!t.collapsed)("aria-label",t.buttonAriaLabel),h(),d("ngIf",t.collapsed),h(),d("ngIf",!t.collapsed),h(),d("ngTemplateOutlet",n)}}function Fu(e,o){e&1&&ee(0)}function Bu(e,o){if(e&1&&(I(0,"span",13),we(1),C(),oe(2,1),v(3,Fu,1,0,"ng-container",6)),e&2){let t=m();_("data-pc-section","legendtitle"),h(),Oe(t.legend),h(2),d("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function Uu(e,o){e&1&&ee(0)}var Hu=(()=>{class e extends ne{legend;toggleable;collapsed=!1;style;styleClass;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";collapsedChange=new H;onBeforeToggle=new H;onAfterToggle=new H;get id(){return Ie("pn_id_")}get buttonAriaLabel(){return this.legend}animating;_componentStyle=g(fa);headerTemplate;expandIconTemplate;collapseIconTemplate;contentTemplate;toggle(t){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:t,collapsed:this.collapsed}),this.collapsed?this.expand():this.collapse(),this.onAfterToggle.emit({originalEvent:t,collapsed:this.collapsed}),t.preventDefault()}onKeyDown(t){(t.code==="Enter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}expand(){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(){this.animating=!1}_headerTemplate;_expandIconTemplate;_collapseIconTemplate;_contentTemplate;templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"expandicon":this._expandIconTemplate=t.template;break;case"collapseicon":this._collapseIconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275cmp=P({type:e,selectors:[["p-fieldset"]],contentQueries:function(n,i,r){if(n&1&&(L(r,bu,4),L(r,yu,4),L(r,vu,4),L(r,_u,4),L(r,it,4)),n&2){let s;R(s=O())&&(i.headerTemplate=s.first),R(s=O())&&(i.expandIconTemplate=s.first),R(s=O())&&(i.collapseIconTemplate=s.first),R(s=O())&&(i.contentTemplate=s.first),R(s=O())&&(i.templates=s)}},inputs:{legend:"legend",toggleable:[2,"toggleable","toggleable",M],collapsed:[2,"collapsed","collapsed",M],style:"style",styleClass:"styleClass",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},features:[re([fa]),de,k],ngContentSelectors:Su,decls:9,vars:28,consts:[["legendContent",""],[3,"ngClass","ngStyle"],[1,"p-fieldset-legend"],[4,"ngIf","ngIfElse"],["role","region",1,"p-fieldset-content-container"],[1,"p-fieldset-content"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",1,"p-fieldset-toggle-button",3,"click","keydown"],[4,"ngIf"],[3,"styleClass",4,"ngIf"],["class","p-fieldset-toggler",4,"ngIf"],[3,"styleClass"],[1,"p-fieldset-toggler"],[1,"p-fieldset-legend-label"]],template:function(n,i){if(n&1){let r=Re();ve(Iu),I(0,"fieldset",1)(1,"legend",2),v(2,Nu,5,7,"ng-container",3)(3,Bu,4,3,"ng-template",null,0,bt),C(),I(5,"div",4),pe("@fieldsetContent.done",function(){return W(r),q(i.onToggleDone())}),I(6,"div",5),oe(7),v(8,Uu,1,0,"ng-container",6),C()()()}if(n&2){let r=wt(4);B(i.styleClass),d("ngClass",gt(17,Cu,i.toggleable,!i.collapsed&&i.toggleable))("ngStyle",i.style),_("id",i.id)("data-pc-name","fieldset")("data-pc-section","root"),h(),_("data-pc-section","legend"),h(),d("ngIf",i.toggleable)("ngIfElse",r),h(3),d("@fieldsetContent",i.collapsed?le(22,Tu,le(20,wu,i.transitionOptions)):le(26,xu,le(24,Eu,i.animating?i.transitionOptions:"0ms"))),_("id",i.id+"_content")("aria-labelledby",i.id+"_header")("aria-hidden",i.collapsed)("data-pc-section","toggleablecontent"),h(),_("data-pc-section","content"),h(2),d("ngTemplateOutlet",i.contentTemplate||i._contentTemplate)}},dependencies:[ce,ze,We,Ke,qe,qt,Ri,Oi,V],encapsulation:2,data:{animation:[mi("fieldsetContent",[Rt("hidden",xt({height:"0"})),Rt("visible",xt({height:"*"})),Ot("visible <=> hidden",[Et("{{transitionParams}}")]),Ot("void => *",Et(0))])]},changeDetection:0})}return e})(),ma=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=K({type:e});static \u0275inj=z({imports:[Hu,V,V]})}return e})();var A="primary",Pn=Symbol("RouteTitle"),Vo=class{params;constructor(o){this.params=o||{}}has(o){return Object.prototype.hasOwnProperty.call(this.params,o)}get(o){if(this.has(o)){let t=this.params[o];return Array.isArray(t)?t[0]:t}return null}getAll(o){if(this.has(o)){let t=this.params[o];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Jt(e){return new Vo(e)}function ju(e,o,t){let n=t.path.split("/");if(n.length>e.length||t.pathMatch==="full"&&(o.hasChildren()||n.length<e.length))return null;let i={};for(let r=0;r<n.length;r++){let s=n[r],a=e[r];if(s[0]===":")i[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,n.length),posParams:i}}function Vu(e,o){if(e.length!==o.length)return!1;for(let t=0;t<e.length;++t)if(!ot(e[t],o[t]))return!1;return!0}function ot(e,o){let t=e?zo(e):void 0,n=o?zo(o):void 0;if(!t||!n||t.length!=n.length)return!1;let i;for(let r=0;r<t.length;r++)if(i=t[r],!Ea(e[i],o[i]))return!1;return!0}function zo(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ea(e,o){if(Array.isArray(e)&&Array.isArray(o)){if(e.length!==o.length)return!1;let t=[...e].sort(),n=[...o].sort();return t.every((i,r)=>n[r]===i)}else return e===o}function xa(e){return e.length>0?e[e.length-1]:null}function St(e){return Mr(e)?e:es(e)?Se(Promise.resolve(e)):w(e)}var zu={exact:Oa,subset:Ma},Ra={exact:Wu,subset:qu,ignored:()=>!0};function ga(e,o,t){return zu[t.paths](e.root,o.root,t.matrixParams)&&Ra[t.queryParams](e.queryParams,o.queryParams)&&!(t.fragment==="exact"&&e.fragment!==o.fragment)}function Wu(e,o){return ot(e,o)}function Oa(e,o,t){if(!$t(e.segments,o.segments)||!Di(e.segments,o.segments,t)||e.numberOfChildren!==o.numberOfChildren)return!1;for(let n in o.children)if(!e.children[n]||!Oa(e.children[n],o.children[n],t))return!1;return!0}function qu(e,o){return Object.keys(o).length<=Object.keys(e).length&&Object.keys(o).every(t=>Ea(e[t],o[t]))}function Ma(e,o,t){return Aa(e,o,o.segments,t)}function Aa(e,o,t,n){if(e.segments.length>t.length){let i=e.segments.slice(0,t.length);return!(!$t(i,t)||o.hasChildren()||!Di(i,t,n))}else if(e.segments.length===t.length){if(!$t(e.segments,t)||!Di(e.segments,t,n))return!1;for(let i in o.children)if(!e.children[i]||!Ma(e.children[i],o.children[i],n))return!1;return!0}else{let i=t.slice(0,e.segments.length),r=t.slice(e.segments.length);return!$t(e.segments,i)||!Di(e.segments,i,n)||!e.children[A]?!1:Aa(e.children[A],o,r,n)}}function Di(e,o,t){return o.every((n,i)=>Ra[t](e[i].parameters,n.parameters))}var dt=class{root;queryParams;fragment;_queryParamMap;constructor(o=new N([],{}),t={},n=null){this.root=o,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Jt(this.queryParams),this._queryParamMap}toString(){return Qu.serialize(this)}},N=class{segments;children;parent=null;constructor(o,t){this.segments=o,this.children=t,Object.values(t).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return $i(this)}},Dt=class{path;parameters;_parameterMap;constructor(o,t){this.path=o,this.parameters=t}get parameterMap(){return this._parameterMap??=Jt(this.parameters),this._parameterMap}toString(){return Da(this)}};function Ku(e,o){return $t(e,o)&&e.every((t,n)=>ot(t.parameters,o[n].parameters))}function $t(e,o){return e.length!==o.length?!1:e.every((t,n)=>t.path===o[n].path)}function Gu(e,o){let t=[];return Object.entries(e.children).forEach(([n,i])=>{n===A&&(t=t.concat(o(i,n)))}),Object.entries(e.children).forEach(([n,i])=>{n!==A&&(t=t.concat(o(i,n)))}),t}var Nn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:()=>new Xt,providedIn:"root"})}return e})(),Xt=class{parse(o){let t=new qo(o);return new dt(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(o){let t=`/${Cn(o.root,!0)}`,n=Ju(o.queryParams),i=typeof o.fragment=="string"?`#${Zu(o.fragment)}`:"";return`${t}${n}${i}`}},Qu=new Xt;function $i(e){return e.segments.map(o=>Da(o)).join("/")}function Cn(e,o){if(!e.hasChildren())return $i(e);if(o){let t=e.children[A]?Cn(e.children[A],!1):"",n=[];return Object.entries(e.children).forEach(([i,r])=>{i!==A&&n.push(`${i}:${Cn(r,!1)}`)}),n.length>0?`${t}(${n.join("//")})`:t}else{let t=Gu(e,(n,i)=>i===A?[Cn(e.children[A],!1)]:[`${i}:${Cn(n,!1)}`]);return Object.keys(e.children).length===1&&e.children[A]!=null?`${$i(e)}/${t[0]}`:`${$i(e)}/(${t.join("//")})`}}function La(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ai(e){return La(e).replace(/%3B/gi,";")}function Zu(e){return encodeURI(e)}function Wo(e){return La(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ki(e){return decodeURIComponent(e)}function ba(e){return ki(e.replace(/\+/g,"%20"))}function Da(e){return`${Wo(e.path)}${Yu(e.parameters)}`}function Yu(e){return Object.entries(e).map(([o,t])=>`;${Wo(o)}=${Wo(t)}`).join("")}function Ju(e){let o=Object.entries(e).map(([t,n])=>Array.isArray(n)?n.map(i=>`${Ai(t)}=${Ai(i)}`).join("&"):`${Ai(t)}=${Ai(n)}`).filter(t=>t);return o.length?`?${o.join("&")}`:""}var Xu=/^[^\/()?;#]+/;function Bo(e){let o=e.match(Xu);return o?o[0]:""}var ed=/^[^\/()?;=#]+/;function td(e){let o=e.match(ed);return o?o[0]:""}var nd=/^[^=?&#]+/;function id(e){let o=e.match(nd);return o?o[0]:""}var od=/^[^&#]+/;function rd(e){let o=e.match(od);return o?o[0]:""}var qo=class{url;remaining;constructor(o){this.url=o,this.remaining=o}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new N([],{}):new N([],this.parseChildren())}parseQueryParams(){let o={};if(this.consumeOptional("?"))do this.parseQueryParam(o);while(this.consumeOptional("&"));return o}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let o=[];for(this.peekStartsWith("(")||o.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),o.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(o.length>0||Object.keys(t).length>0)&&(n[A]=new N(o,t)),n}parseSegment(){let o=Bo(this.remaining);if(o===""&&this.peekStartsWith(";"))throw new ae(4009,!1);return this.capture(o),new Dt(ki(o),this.parseMatrixParams())}parseMatrixParams(){let o={};for(;this.consumeOptional(";");)this.parseParam(o);return o}parseParam(o){let t=td(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let i=Bo(this.remaining);i&&(n=i,this.capture(n))}o[ki(t)]=ki(n)}parseQueryParam(o){let t=id(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let s=rd(this.remaining);s&&(n=s,this.capture(n))}let i=ba(t),r=ba(n);if(o.hasOwnProperty(i)){let s=o[i];Array.isArray(s)||(s=[s],o[i]=s),s.push(r)}else o[i]=r}parseParens(o){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=Bo(this.remaining),i=this.remaining[n.length];if(i!=="/"&&i!==")"&&i!==";")throw new ae(4010,!1);let r;n.indexOf(":")>-1?(r=n.slice(0,n.indexOf(":")),this.capture(r),this.capture(":")):o&&(r=A);let s=this.parseChildren();t[r]=Object.keys(s).length===1?s[A]:new N([],s),this.consumeOptional("//")}return t}peekStartsWith(o){return this.remaining.startsWith(o)}consumeOptional(o){return this.peekStartsWith(o)?(this.remaining=this.remaining.substring(o.length),!0):!1}capture(o){if(!this.consumeOptional(o))throw new ae(4011,!1)}};function $a(e){return e.segments.length>0?new N([],{[A]:e}):e}function ka(e){let o={};for(let[n,i]of Object.entries(e.children)){let r=ka(i);if(n===A&&r.segments.length===0&&r.hasChildren())for(let[s,a]of Object.entries(r.children))o[s]=a;else(r.segments.length>0||r.hasChildren())&&(o[n]=r)}let t=new N(e.segments,o);return sd(t)}function sd(e){if(e.numberOfChildren===1&&e.children[A]){let o=e.children[A];return new N(e.segments.concat(o.segments),o.children)}return e}function kt(e){return e instanceof dt}function ad(e,o,t=null,n=null){let i=Pa(e);return Na(i,o,t,n)}function Pa(e){let o;function t(r){let s={};for(let l of r.children){let c=t(l);s[l.outlet]=c}let a=new N(r.url,s);return r===e&&(o=a),a}let n=t(e.root),i=$a(n);return o??i}function Na(e,o,t,n){let i=e;for(;i.parent;)i=i.parent;if(o.length===0)return Uo(i,i,i,t,n);let r=ld(o);if(r.toRoot())return Uo(i,i,new N([],{}),t,n);let s=cd(r,i,e),a=s.processChildren?En(s.segmentGroup,s.index,r.commands):Ba(s.segmentGroup,s.index,r.commands);return Uo(i,s.segmentGroup,a,t,n)}function Pi(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function On(e){return typeof e=="object"&&e!=null&&e.outlets}function Uo(e,o,t,n,i){let r={};n&&Object.entries(n).forEach(([l,c])=>{r[l]=Array.isArray(c)?c.map(u=>`${u}`):`${c}`});let s;e===o?s=t:s=Fa(e,o,t);let a=$a(ka(s));return new dt(a,r,i)}function Fa(e,o,t){let n={};return Object.entries(e.children).forEach(([i,r])=>{r===o?n[i]=t:n[i]=Fa(r,o,t)}),new N(e.segments,n)}var Ni=class{isAbsolute;numberOfDoubleDots;commands;constructor(o,t,n){if(this.isAbsolute=o,this.numberOfDoubleDots=t,this.commands=n,o&&n.length>0&&Pi(n[0]))throw new ae(4003,!1);let i=n.find(On);if(i&&i!==xa(n))throw new ae(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function ld(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new Ni(!0,0,e);let o=0,t=!1,n=e.reduce((i,r,s)=>{if(typeof r=="object"&&r!=null){if(r.outlets){let a={};return Object.entries(r.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...i,{outlets:a}]}if(r.segmentPath)return[...i,r.segmentPath]}return typeof r!="string"?[...i,r]:s===0?(r.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?t=!0:a===".."?o++:a!=""&&i.push(a))}),i):[...i,r]},[]);return new Ni(t,o,n)}var Qt=class{segmentGroup;processChildren;index;constructor(o,t,n){this.segmentGroup=o,this.processChildren=t,this.index=n}};function cd(e,o,t){if(e.isAbsolute)return new Qt(o,!0,0);if(!t)return new Qt(o,!1,NaN);if(t.parent===null)return new Qt(t,!0,0);let n=Pi(e.commands[0])?0:1,i=t.segments.length-1+n;return ud(t,i,e.numberOfDoubleDots)}function ud(e,o,t){let n=e,i=o,r=t;for(;r>i;){if(r-=i,n=n.parent,!n)throw new ae(4005,!1);i=n.segments.length}return new Qt(n,!1,i-r)}function dd(e){return On(e[0])?e[0].outlets:{[A]:e}}function Ba(e,o,t){if(e??=new N([],{}),e.segments.length===0&&e.hasChildren())return En(e,o,t);let n=pd(e,o,t),i=t.slice(n.commandIndex);if(n.match&&n.pathIndex<e.segments.length){let r=new N(e.segments.slice(0,n.pathIndex),{});return r.children[A]=new N(e.segments.slice(n.pathIndex),e.children),En(r,0,i)}else return n.match&&i.length===0?new N(e.segments,{}):n.match&&!e.hasChildren()?Ko(e,o,t):n.match?En(e,0,i):Ko(e,o,t)}function En(e,o,t){if(t.length===0)return new N(e.segments,{});{let n=dd(t),i={};if(Object.keys(n).some(r=>r!==A)&&e.children[A]&&e.numberOfChildren===1&&e.children[A].segments.length===0){let r=En(e.children[A],o,t);return new N(e.segments,r.children)}return Object.entries(n).forEach(([r,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(i[r]=Ba(e.children[r],o,s))}),Object.entries(e.children).forEach(([r,s])=>{n[r]===void 0&&(i[r]=s)}),new N(e.segments,i)}}function pd(e,o,t){let n=0,i=o,r={match:!1,pathIndex:0,commandIndex:0};for(;i<e.segments.length;){if(n>=t.length)return r;let s=e.segments[i],a=t[n];if(On(a))break;let l=`${a}`,c=n<t.length-1?t[n+1]:null;if(i>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!va(l,c,s))return r;n+=2}else{if(!va(l,{},s))return r;n++}i++}return{match:!0,pathIndex:i,commandIndex:n}}function Ko(e,o,t){let n=e.segments.slice(0,o),i=0;for(;i<t.length;){let r=t[i];if(On(r)){let l=hd(r.outlets);return new N(n,l)}if(i===0&&Pi(t[0])){let l=e.segments[o];n.push(new Dt(l.path,ya(t[0]))),i++;continue}let s=On(r)?r.outlets[A]:`${r}`,a=i<t.length-1?t[i+1]:null;s&&a&&Pi(a)?(n.push(new Dt(s,ya(a))),i+=2):(n.push(new Dt(s,{})),i++)}return new N(n,{})}function hd(e){let o={};return Object.entries(e).forEach(([t,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(o[t]=Ko(new N([],{}),0,n))}),o}function ya(e){let o={};return Object.entries(e).forEach(([t,n])=>o[t]=`${n}`),o}function va(e,o,t){return e==t.path&&ot(o,t.parameters)}var xn="imperative",ue=function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e}(ue||{}),Ue=class{id;url;constructor(o,t){this.id=o,this.url=t}},en=class extends Ue{type=ue.NavigationStart;navigationTrigger;restoredState;constructor(o,t,n="imperative",i=null){super(o,t),this.navigationTrigger=n,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ye=class extends Ue{urlAfterRedirects;type=ue.NavigationEnd;constructor(o,t,n){super(o,t),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},De=function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e}(De||{}),Fi=function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e}(Fi||{}),ut=class extends Ue{reason;code;type=ue.NavigationCancel;constructor(o,t,n,i){super(o,t),this.reason=n,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},It=class extends Ue{reason;code;type=ue.NavigationSkipped;constructor(o,t,n,i){super(o,t),this.reason=n,this.code=i}},Mn=class extends Ue{error;target;type=ue.NavigationError;constructor(o,t,n,i){super(o,t),this.error=n,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Bi=class extends Ue{urlAfterRedirects;state;type=ue.RoutesRecognized;constructor(o,t,n,i){super(o,t),this.urlAfterRedirects=n,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Go=class extends Ue{urlAfterRedirects;state;type=ue.GuardsCheckStart;constructor(o,t,n,i){super(o,t),this.urlAfterRedirects=n,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qo=class extends Ue{urlAfterRedirects;state;shouldActivate;type=ue.GuardsCheckEnd;constructor(o,t,n,i,r){super(o,t),this.urlAfterRedirects=n,this.state=i,this.shouldActivate=r}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Zo=class extends Ue{urlAfterRedirects;state;type=ue.ResolveStart;constructor(o,t,n,i){super(o,t),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Yo=class extends Ue{urlAfterRedirects;state;type=ue.ResolveEnd;constructor(o,t,n,i){super(o,t),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Jo=class{route;type=ue.RouteConfigLoadStart;constructor(o){this.route=o}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Xo=class{route;type=ue.RouteConfigLoadEnd;constructor(o){this.route=o}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},er=class{snapshot;type=ue.ChildActivationStart;constructor(o){this.snapshot=o}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},tr=class{snapshot;type=ue.ChildActivationEnd;constructor(o){this.snapshot=o}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},nr=class{snapshot;type=ue.ActivationStart;constructor(o){this.snapshot=o}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ir=class{snapshot;type=ue.ActivationEnd;constructor(o){this.snapshot=o}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ui=class{routerEvent;position;anchor;type=ue.Scroll;constructor(o,t,n){this.routerEvent=o,this.position=t,this.anchor=n}toString(){let o=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${o}')`}},An=class{},tn=class{url;navigationBehaviorOptions;constructor(o,t){this.url=o,this.navigationBehaviorOptions=t}};function fd(e,o){return e.providers&&!e._injector&&(e._injector=co(e.providers,o,`Route: ${e.path}`)),e._injector??o}function Ze(e){return e.outlet||A}function md(e,o){let t=e.filter(n=>Ze(n)===o);return t.push(...e.filter(n=>Ze(n)!==o)),t}function Fn(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let o=e.parent;o;o=o.parent){let t=o.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var or=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Fn(this.route?.snapshot)??this.rootInjector}constructor(o){this.rootInjector=o,this.children=new Bn(this.rootInjector)}},Bn=(()=>{class e{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,n){let i=this.getOrCreateContext(t);i.outlet=n,this.contexts.set(t,i)}onChildOutletDestroyed(t){let n=this.getContext(t);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let n=this.getContext(t);return n||(n=new or(this.rootInjector),this.contexts.set(t,n)),n}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(n){return new(n||e)(F(un))};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Hi=class{_root;constructor(o){this._root=o}get root(){return this._root.value}parent(o){let t=this.pathFromRoot(o);return t.length>1?t[t.length-2]:null}children(o){let t=rr(o,this._root);return t?t.children.map(n=>n.value):[]}firstChild(o){let t=rr(o,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(o){let t=sr(o,this._root);return t.length<2?[]:t[t.length-2].children.map(i=>i.value).filter(i=>i!==o)}pathFromRoot(o){return sr(o,this._root).map(t=>t.value)}};function rr(e,o){if(e===o.value)return o;for(let t of o.children){let n=rr(e,t);if(n)return n}return null}function sr(e,o){if(e===o.value)return[o];for(let t of o.children){let n=sr(e,t);if(n.length)return n.unshift(o),n}return[]}var Le=class{value;children;constructor(o,t){this.value=o,this.children=t}toString(){return`TreeNode(${this.value})`}};function Gt(e){let o={};return e&&e.children.forEach(t=>o[t.value.outlet]=t),o}var ji=class extends Hi{snapshot;constructor(o,t){super(o),this.snapshot=t,mr(this,o)}toString(){return this.snapshot.toString()}};function Ua(e){let o=gd(e),t=new Pe([new Dt("",{})]),n=new Pe({}),i=new Pe({}),r=new Pe({}),s=new Pe(""),a=new Pt(t,n,r,s,i,A,e,o.root);return a.snapshot=o.root,new ji(new Le(a,[]),o)}function gd(e){let o={},t={},n={},i="",r=new Zt([],o,n,i,t,A,e,null,{});return new zi("",new Le(r,[]))}var Pt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(o,t,n,i,r,s,a,l){this.urlSubject=o,this.paramsSubject=t,this.queryParamsSubject=n,this.fragmentSubject=i,this.dataSubject=r,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(U(c=>c[Pn]))??w(void 0),this.url=o,this.params=t,this.queryParams=n,this.fragment=i,this.data=r}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(U(o=>Jt(o))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(U(o=>Jt(o))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Vi(e,o,t="emptyOnly"){let n,{routeConfig:i}=e;return o!==null&&(t==="always"||i?.path===""||!o.component&&!o.routeConfig?.loadComponent)?n={params:b(b({},o.params),e.params),data:b(b({},o.data),e.data),resolve:b(b(b(b({},e.data),o.data),i?.data),e._resolvedData)}:n={params:b({},e.params),data:b({},e.data),resolve:b(b({},e.data),e._resolvedData??{})},i&&ja(i)&&(n.resolve[Pn]=i.title),n}var Zt=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Pn]}constructor(o,t,n,i,r,s,a,l,c){this.url=o,this.params=t,this.queryParams=n,this.fragment=i,this.data=r,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Jt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Jt(this.queryParams),this._queryParamMap}toString(){let o=this.url.map(n=>n.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${o}', path:'${t}')`}},zi=class extends Hi{url;constructor(o,t){super(t),this.url=o,mr(this,t)}toString(){return Ha(this._root)}};function mr(e,o){o.value._routerState=e,o.children.forEach(t=>mr(e,t))}function Ha(e){let o=e.children.length>0?` { ${e.children.map(Ha).join(", ")} } `:"";return`${e.value}${o}`}function Ho(e){if(e.snapshot){let o=e.snapshot,t=e._futureSnapshot;e.snapshot=t,ot(o.queryParams,t.queryParams)||e.queryParamsSubject.next(t.queryParams),o.fragment!==t.fragment&&e.fragmentSubject.next(t.fragment),ot(o.params,t.params)||e.paramsSubject.next(t.params),Vu(o.url,t.url)||e.urlSubject.next(t.url),ot(o.data,t.data)||e.dataSubject.next(t.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function ar(e,o){let t=ot(e.params,o.params)&&Ku(e.url,o.url),n=!e.parent!=!o.parent;return t&&!n&&(!e.parent||ar(e.parent,o.parent))}function ja(e){return typeof e.title=="string"||e.title===null}var bd=new ie(""),yd=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=A;activateEvents=new H;deactivateEvents=new H;attachEvents=new H;detachEvents=new H;routerOutletData=Xe(void 0);parentContexts=g(Bn);location=g(li);changeDetector=g(yt);inputBinder=g(Zi,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:n,previousValue:i}=t.name;if(n)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new ae(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new ae(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new ae(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,n){this.activated=t,this._activatedRoute=n,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,n){if(this.isActivated)throw new ae(4013,!1);this._activatedRoute=t;let i=this.location,s=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new lr(t,a,i.injector,this.routerOutletData);this.activated=i.createComponent(s,{index:i.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||e)};static \u0275dir=be({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ve]})}return e})(),lr=class e{route;childContexts;parent;outletData;__ngOutletInjector(o){return new e(this.route,this.childContexts,o,this.outletData)}constructor(o,t,n,i){this.route=o,this.childContexts=t,this.parent=n,this.outletData=i}get(o,t){return o===Pt?this.route:o===Bn?this.childContexts:o===bd?this.outletData:this.parent.get(o,t)}},Zi=new ie(""),_a=(()=>{class e{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:n}=t,i=oi([n.queryParams,n.params,n.data]).pipe(je(([r,s,a],l)=>(a=b(b(b({},r),s),a),l===0?w(a):Promise.resolve(a)))).subscribe(r=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(t);return}let s=ds(n.component);if(!s){this.unsubscribeFromRouteData(t);return}for(let{templateName:a}of s.inputs)t.activatedComponentRef.setInput(a,r[a])});this.outletDataSubscriptions.set(t,i)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function vd(e,o,t){let n=Ln(e,o._root,t?t._root:void 0);return new ji(n,o)}function Ln(e,o,t){if(t&&e.shouldReuseRoute(o.value,t.value.snapshot)){let n=t.value;n._futureSnapshot=o.value;let i=_d(e,o,t);return new Le(n,i)}else{if(e.shouldAttach(o.value)){let r=e.retrieve(o.value);if(r!==null){let s=r.route;return s.value._futureSnapshot=o.value,s.children=o.children.map(a=>Ln(e,a)),s}}let n=Id(o.value),i=o.children.map(r=>Ln(e,r));return new Le(n,i)}}function _d(e,o,t){return o.children.map(n=>{for(let i of t.children)if(e.shouldReuseRoute(n.value,i.value.snapshot))return Ln(e,n,i);return Ln(e,n)})}function Id(e){return new Pt(new Pe(e.url),new Pe(e.params),new Pe(e.queryParams),new Pe(e.fragment),new Pe(e.data),e.outlet,e.component,e)}var Dn=class{redirectTo;navigationBehaviorOptions;constructor(o,t){this.redirectTo=o,this.navigationBehaviorOptions=t}},Va="ngNavigationCancelingError";function Wi(e,o){let{redirectTo:t,navigationBehaviorOptions:n}=kt(o)?{redirectTo:o,navigationBehaviorOptions:void 0}:o,i=za(!1,De.Redirect);return i.url=t,i.navigationBehaviorOptions=n,i}function za(e,o){let t=new Error(`NavigationCancelingError: ${e||""}`);return t[Va]=!0,t.cancellationCode=o,t}function Sd(e){return Wa(e)&&kt(e.url)}function Wa(e){return!!e&&e[Va]}var Cd=(e,o,t,n)=>U(i=>(new cr(o,i.targetRouterState,i.currentRouterState,t,n).activate(e),i)),cr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(o,t,n,i,r){this.routeReuseStrategy=o,this.futureState=t,this.currState=n,this.forwardEvent=i,this.inputBindingEnabled=r}activate(o){let t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,o),Ho(this.futureState.root),this.activateChildRoutes(t,n,o)}deactivateChildRoutes(o,t,n){let i=Gt(t);o.children.forEach(r=>{let s=r.value.outlet;this.deactivateRoutes(r,i[s],n),delete i[s]}),Object.values(i).forEach(r=>{this.deactivateRouteAndItsChildren(r,n)})}deactivateRoutes(o,t,n){let i=o.value,r=t?t.value:null;if(i===r)if(i.component){let s=n.getContext(i.outlet);s&&this.deactivateChildRoutes(o,t,s.children)}else this.deactivateChildRoutes(o,t,n);else r&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(o,t){o.value.component&&this.routeReuseStrategy.shouldDetach(o.value.snapshot)?this.detachAndStoreRouteSubtree(o,t):this.deactivateRouteAndOutlet(o,t)}detachAndStoreRouteSubtree(o,t){let n=t.getContext(o.value.outlet),i=n&&o.value.component?n.children:t,r=Gt(o);for(let s of Object.values(r))this.deactivateRouteAndItsChildren(s,i);if(n&&n.outlet){let s=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(o.value.snapshot,{componentRef:s,route:o,contexts:a})}}deactivateRouteAndOutlet(o,t){let n=t.getContext(o.value.outlet),i=n&&o.value.component?n.children:t,r=Gt(o);for(let s of Object.values(r))this.deactivateRouteAndItsChildren(s,i);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(o,t,n){let i=Gt(t);o.children.forEach(r=>{this.activateRoutes(r,i[r.value.outlet],n),this.forwardEvent(new ir(r.value.snapshot))}),o.children.length&&this.forwardEvent(new tr(o.value.snapshot))}activateRoutes(o,t,n){let i=o.value,r=t?t.value:null;if(Ho(i),i===r)if(i.component){let s=n.getOrCreateContext(i.outlet);this.activateChildRoutes(o,t,s.children)}else this.activateChildRoutes(o,t,n);else if(i.component){let s=n.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let a=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Ho(a.route.value),this.activateChildRoutes(o,null,s.children)}else s.attachRef=null,s.route=i,s.outlet&&s.outlet.activateWith(i,s.injector),this.activateChildRoutes(o,null,s.children)}else this.activateChildRoutes(o,null,n)}},qi=class{path;route;constructor(o){this.path=o,this.route=this.path[this.path.length-1]}},Yt=class{component;route;constructor(o,t){this.component=o,this.route=t}};function wd(e,o,t){let n=e._root,i=o?o._root:null;return wn(n,i,t,[n.value])}function Td(e){let o=e.routeConfig?e.routeConfig.canActivateChild:null;return!o||o.length===0?null:{node:e,guards:o}}function on(e,o){let t=Symbol(),n=o.get(e,t);return n===t?typeof e=="function"&&!Ur(e)?e:o.get(e):n}function wn(e,o,t,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let r=Gt(o);return e.children.forEach(s=>{Ed(s,r[s.value.outlet],t,n.concat([s.value]),i),delete r[s.value.outlet]}),Object.entries(r).forEach(([s,a])=>Rn(a,t.getContext(s),i)),i}function Ed(e,o,t,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let r=e.value,s=o?o.value:null,a=t?t.getContext(e.value.outlet):null;if(s&&r.routeConfig===s.routeConfig){let l=xd(s,r,r.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new qi(n)):(r.data=s.data,r._resolvedData=s._resolvedData),r.component?wn(e,o,a?a.children:null,n,i):wn(e,o,t,n,i),l&&a&&a.outlet&&a.outlet.isActivated&&i.canDeactivateChecks.push(new Yt(a.outlet.component,s))}else s&&Rn(o,a,i),i.canActivateChecks.push(new qi(n)),r.component?wn(e,null,a?a.children:null,n,i):wn(e,null,t,n,i);return i}function xd(e,o,t){if(typeof t=="function")return t(e,o);switch(t){case"pathParamsChange":return!$t(e.url,o.url);case"pathParamsOrQueryParamsChange":return!$t(e.url,o.url)||!ot(e.queryParams,o.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ar(e,o)||!ot(e.queryParams,o.queryParams);case"paramsChange":default:return!ar(e,o)}}function Rn(e,o,t){let n=Gt(e),i=e.value;Object.entries(n).forEach(([r,s])=>{i.component?o?Rn(s,o.children.getContext(r),t):Rn(s,null,t):Rn(s,o,t)}),i.component?o&&o.outlet&&o.outlet.isActivated?t.canDeactivateChecks.push(new Yt(o.outlet.component,i)):t.canDeactivateChecks.push(new Yt(null,i)):t.canDeactivateChecks.push(new Yt(null,i))}function Un(e){return typeof e=="function"}function Rd(e){return typeof e=="boolean"}function Od(e){return e&&Un(e.canLoad)}function Md(e){return e&&Un(e.canActivate)}function Ad(e){return e&&Un(e.canActivateChild)}function Ld(e){return e&&Un(e.canDeactivate)}function Dd(e){return e&&Un(e.canMatch)}function qa(e){return e instanceof Ar||e?.name==="EmptyError"}var Li=Symbol("INITIAL_VALUE");function nn(){return je(e=>oi(e.map(o=>o.pipe(Ut(1),Fr(Li)))).pipe(U(o=>{for(let t of o)if(t!==!0){if(t===Li)return Li;if(t===!1||$d(t))return t}return!0}),rt(o=>o!==Li),Ut(1)))}function $d(e){return kt(e)||e instanceof Dn}function kd(e,o){return Te(t=>{let{targetSnapshot:n,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:s}}=t;return s.length===0&&r.length===0?w(se(b({},t),{guardsResult:!0})):Pd(s,n,i,e).pipe(Te(a=>a&&Rd(a)?Nd(n,r,e,o):w(a)),U(a=>se(b({},t),{guardsResult:a})))})}function Pd(e,o,t,n){return Se(e).pipe(Te(i=>jd(i.component,i.route,t,o,n)),ft(i=>i!==!0,!0))}function Nd(e,o,t,n){return Se(o).pipe(Bt(i=>Lr(Bd(i.route.parent,n),Fd(i.route,n),Hd(e,i.path,t),Ud(e,i.route,t))),ft(i=>i!==!0,!0))}function Fd(e,o){return e!==null&&o&&o(new nr(e)),w(!0)}function Bd(e,o){return e!==null&&o&&o(new er(e)),w(!0)}function Ud(e,o,t){let n=o.routeConfig?o.routeConfig.canActivate:null;if(!n||n.length===0)return w(!0);let i=n.map(r=>eo(()=>{let s=Fn(o)??t,a=on(r,s),l=Md(a)?a.canActivate(o,e):Je(s,()=>a(o,e));return St(l).pipe(ft())}));return w(i).pipe(nn())}function Hd(e,o,t){let n=o[o.length-1],r=o.slice(0,o.length-1).reverse().map(s=>Td(s)).filter(s=>s!==null).map(s=>eo(()=>{let a=s.guards.map(l=>{let c=Fn(s.node)??t,u=on(l,c),p=Ad(u)?u.canActivateChild(n,e):Je(c,()=>u(n,e));return St(p).pipe(ft())});return w(a).pipe(nn())}));return w(r).pipe(nn())}function jd(e,o,t,n,i){let r=o&&o.routeConfig?o.routeConfig.canDeactivate:null;if(!r||r.length===0)return w(!0);let s=r.map(a=>{let l=Fn(o)??i,c=on(a,l),u=Ld(c)?c.canDeactivate(e,o,t,n):Je(l,()=>c(e,o,t,n));return St(u).pipe(ft())});return w(s).pipe(nn())}function Vd(e,o,t,n){let i=o.canLoad;if(i===void 0||i.length===0)return w(!0);let r=i.map(s=>{let a=on(s,e),l=Od(a)?a.canLoad(o,t):Je(e,()=>a(o,t));return St(l)});return w(r).pipe(nn(),Ka(n))}function Ka(e){return Or(ge(o=>{if(typeof o!="boolean")throw Wi(e,o)}),U(o=>o===!0))}function zd(e,o,t,n){let i=o.canMatch;if(!i||i.length===0)return w(!0);let r=i.map(s=>{let a=on(s,e),l=Dd(a)?a.canMatch(o,t):Je(e,()=>a(o,t));return St(l)});return w(r).pipe(nn(),Ka(n))}var $n=class{segmentGroup;constructor(o){this.segmentGroup=o||null}},kn=class extends Error{urlTree;constructor(o){super(),this.urlTree=o}};function Kt(e){return ln(new $n(e))}function Wd(e){return ln(new ae(4e3,!1))}function qd(e){return ln(za(!1,De.GuardRejected))}var ur=class{urlSerializer;urlTree;constructor(o,t){this.urlSerializer=o,this.urlTree=t}lineralizeSegments(o,t){let n=[],i=t.root;for(;;){if(n=n.concat(i.segments),i.numberOfChildren===0)return w(n);if(i.numberOfChildren>1||!i.children[A])return Wd(`${o.redirectTo}`);i=i.children[A]}}applyRedirectCommands(o,t,n,i,r){if(typeof t!="string"){let a=t,{queryParams:l,fragment:c,routeConfig:u,url:p,outlet:f,params:y,data:T,title:$}=i,Q=Je(r,()=>a({params:y,data:T,queryParams:l,fragment:c,routeConfig:u,url:p,outlet:f,title:$}));if(Q instanceof dt)throw new kn(Q);t=Q}let s=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),o,n);if(t[0]==="/")throw new kn(s);return s}applyRedirectCreateUrlTree(o,t,n,i){let r=this.createSegmentGroup(o,t.root,n,i);return new dt(r,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(o,t){let n={};return Object.entries(o).forEach(([i,r])=>{if(typeof r=="string"&&r[0]===":"){let a=r.substring(1);n[i]=t[a]}else n[i]=r}),n}createSegmentGroup(o,t,n,i){let r=this.createSegments(o,t.segments,n,i),s={};return Object.entries(t.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(o,l,n,i)}),new N(r,s)}createSegments(o,t,n,i){return t.map(r=>r.path[0]===":"?this.findPosParam(o,r,i):this.findOrReturn(r,n))}findPosParam(o,t,n){let i=n[t.path.substring(1)];if(!i)throw new ae(4001,!1);return i}findOrReturn(o,t){let n=0;for(let i of t){if(i.path===o.path)return t.splice(n),i;n++}return o}},dr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Kd(e,o,t,n,i){let r=Ga(e,o,t);return r.matched?(n=fd(o,n),zd(n,o,t,i).pipe(U(s=>s===!0?r:b({},dr)))):w(r)}function Ga(e,o,t){if(o.path==="**")return Gd(t);if(o.path==="")return o.pathMatch==="full"&&(e.hasChildren()||t.length>0)?b({},dr):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let i=(o.matcher||ju)(t,e,o);if(!i)return b({},dr);let r={};Object.entries(i.posParams??{}).forEach(([a,l])=>{r[a]=l.path});let s=i.consumed.length>0?b(b({},r),i.consumed[i.consumed.length-1].parameters):r;return{matched:!0,consumedSegments:i.consumed,remainingSegments:t.slice(i.consumed.length),parameters:s,positionalParamSegments:i.posParams??{}}}function Gd(e){return{matched:!0,parameters:e.length>0?xa(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function Ia(e,o,t,n){return t.length>0&&Yd(e,t,n)?{segmentGroup:new N(o,Zd(n,new N(t,e.children))),slicedSegments:[]}:t.length===0&&Jd(e,t,n)?{segmentGroup:new N(e.segments,Qd(e,t,n,e.children)),slicedSegments:t}:{segmentGroup:new N(e.segments,e.children),slicedSegments:t}}function Qd(e,o,t,n){let i={};for(let r of t)if(Yi(e,o,r)&&!n[Ze(r)]){let s=new N([],{});i[Ze(r)]=s}return b(b({},n),i)}function Zd(e,o){let t={};t[A]=o;for(let n of e)if(n.path===""&&Ze(n)!==A){let i=new N([],{});t[Ze(n)]=i}return t}function Yd(e,o,t){return t.some(n=>Yi(e,o,n)&&Ze(n)!==A)}function Jd(e,o,t){return t.some(n=>Yi(e,o,n))}function Yi(e,o,t){return(e.hasChildren()||o.length>0)&&t.pathMatch==="full"?!1:t.path===""}function Xd(e,o,t){return o.length===0&&!e.children[t]}var pr=class{};function ep(e,o,t,n,i,r,s="emptyOnly"){return new hr(e,o,t,n,i,s,r).recognize()}var tp=31,hr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(o,t,n,i,r,s,a){this.injector=o,this.configLoader=t,this.rootComponentType=n,this.config=i,this.urlTree=r,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new ur(this.urlSerializer,this.urlTree)}noMatchError(o){return new ae(4002,`'${o.segmentGroup}'`)}recognize(){let o=Ia(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(o).pipe(U(({children:t,rootSnapshot:n})=>{let i=new Le(n,t),r=new zi("",i),s=ad(n,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,r.url=this.urlSerializer.serialize(s),{state:r,tree:s}}))}match(o){let t=new Zt([],Object.freeze({}),Object.freeze(b({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),A,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,o,A,t).pipe(U(n=>({children:n,rootSnapshot:t})),Ft(n=>{if(n instanceof kn)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof $n?this.noMatchError(n):n}))}processSegmentGroup(o,t,n,i,r){return n.segments.length===0&&n.hasChildren()?this.processChildren(o,t,n,r):this.processSegment(o,t,n,n.segments,i,!0,r).pipe(U(s=>s instanceof Le?[s]:[]))}processChildren(o,t,n,i){let r=[];for(let s of Object.keys(n.children))s==="primary"?r.unshift(s):r.push(s);return Se(r).pipe(Bt(s=>{let a=n.children[s],l=md(t,s);return this.processSegmentGroup(o,l,a,s,i)}),Nr((s,a)=>(s.push(...a),s)),to(null),Pr(),Te(s=>{if(s===null)return Kt(n);let a=Qa(s);return np(a),w(a)}))}processSegment(o,t,n,i,r,s,a){return Se(t).pipe(Bt(l=>this.processSegmentAgainstRoute(l._injector??o,t,l,n,i,r,s,a).pipe(Ft(c=>{if(c instanceof $n)return w(null);throw c}))),ft(l=>!!l),Ft(l=>{if(qa(l))return Xd(n,i,r)?w(new pr):Kt(n);throw l}))}processSegmentAgainstRoute(o,t,n,i,r,s,a,l){return Ze(n)!==s&&(s===A||!Yi(i,r,n))?Kt(i):n.redirectTo===void 0?this.matchSegmentAgainstRoute(o,i,n,r,s,l):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(o,i,t,n,r,s,l):Kt(i)}expandSegmentAgainstRouteUsingRedirect(o,t,n,i,r,s,a){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:p,remainingSegments:f}=Ga(t,i,r);if(!l)return Kt(t);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>tp&&(this.allowRedirects=!1));let y=new Zt(r,c,Object.freeze(b({},this.urlTree.queryParams)),this.urlTree.fragment,Sa(i),Ze(i),i.component??i._loadedComponent??null,i,Ca(i)),T=Vi(y,a,this.paramsInheritanceStrategy);y.params=Object.freeze(T.params),y.data=Object.freeze(T.data);let $=this.applyRedirects.applyRedirectCommands(u,i.redirectTo,p,y,o);return this.applyRedirects.lineralizeSegments(i,$).pipe(Te(Q=>this.processSegment(o,n,t,Q.concat(f),s,!1,a)))}matchSegmentAgainstRoute(o,t,n,i,r,s){let a=Kd(t,n,i,o,this.urlSerializer);return n.path==="**"&&(t.children={}),a.pipe(je(l=>l.matched?(o=n._injector??o,this.getChildConfig(o,n,i).pipe(je(({routes:c})=>{let u=n._loadedInjector??o,{parameters:p,consumedSegments:f,remainingSegments:y}=l,T=new Zt(f,p,Object.freeze(b({},this.urlTree.queryParams)),this.urlTree.fragment,Sa(n),Ze(n),n.component??n._loadedComponent??null,n,Ca(n)),$=Vi(T,s,this.paramsInheritanceStrategy);T.params=Object.freeze($.params),T.data=Object.freeze($.data);let{segmentGroup:Q,slicedSegments:me}=Ia(t,f,y,c);if(me.length===0&&Q.hasChildren())return this.processChildren(u,c,Q,T).pipe(U($e=>new Le(T,$e)));if(c.length===0&&me.length===0)return w(new Le(T,[]));let ye=Ze(n)===r;return this.processSegment(u,c,Q,me,ye?A:r,!0,T).pipe(U($e=>new Le(T,$e instanceof Le?[$e]:[])))}))):Kt(t)))}getChildConfig(o,t,n){return t.children?w({routes:t.children,injector:o}):t.loadChildren?t._loadedRoutes!==void 0?w({routes:t._loadedRoutes,injector:t._loadedInjector}):Vd(o,t,n,this.urlSerializer).pipe(Te(i=>i?this.configLoader.loadChildren(o,t).pipe(ge(r=>{t._loadedRoutes=r.routes,t._loadedInjector=r.injector})):qd(t))):w({routes:[],injector:o})}};function np(e){e.sort((o,t)=>o.value.outlet===A?-1:t.value.outlet===A?1:o.value.outlet.localeCompare(t.value.outlet))}function ip(e){let o=e.value.routeConfig;return o&&o.path===""}function Qa(e){let o=[],t=new Set;for(let n of e){if(!ip(n)){o.push(n);continue}let i=o.find(r=>n.value.routeConfig===r.value.routeConfig);i!==void 0?(i.children.push(...n.children),t.add(i)):o.push(n)}for(let n of t){let i=Qa(n.children);o.push(new Le(n.value,i))}return o.filter(n=>!t.has(n))}function Sa(e){return e.data||{}}function Ca(e){return e.resolve||{}}function op(e,o,t,n,i,r){return Te(s=>ep(e,o,t,n,s.extractedUrl,i,r).pipe(U(({state:a,tree:l})=>se(b({},s),{targetSnapshot:a,urlAfterRedirects:l}))))}function rp(e,o){return Te(t=>{let{targetSnapshot:n,guards:{canActivateChecks:i}}=t;if(!i.length)return w(t);let r=new Set(i.map(l=>l.route)),s=new Set;for(let l of r)if(!s.has(l))for(let c of Za(l))s.add(c);let a=0;return Se(s).pipe(Bt(l=>r.has(l)?sp(l,n,e,o):(l.data=Vi(l,l.parent,e).resolve,w(void 0))),ge(()=>a++),no(1),Te(l=>a===s.size?w(t):ht))})}function Za(e){let o=e.children.map(t=>Za(t)).flat();return[e,...o]}function sp(e,o,t,n){let i=e.routeConfig,r=e._resolve;return i?.title!==void 0&&!ja(i)&&(r[Pn]=i.title),ap(r,e,o,n).pipe(U(s=>(e._resolvedData=s,e.data=Vi(e,e.parent,t).resolve,null)))}function ap(e,o,t,n){let i=zo(e);if(i.length===0)return w({});let r={};return Se(i).pipe(Te(s=>lp(e[s],o,t,n).pipe(ft(),ge(a=>{if(a instanceof Dn)throw Wi(new Xt,a);r[s]=a}))),no(1),kr(r),Ft(s=>qa(s)?ht:ln(s)))}function lp(e,o,t,n){let i=Fn(o)??n,r=on(e,i),s=r.resolve?r.resolve(o,t):Je(i,()=>r(o,t));return St(s)}function jo(e){return je(o=>{let t=e(o);return t?Se(t).pipe(U(()=>o)):w(o)})}var Ya=(()=>{class e{buildTitle(t){let n,i=t.root;for(;i!==void 0;)n=this.getResolvedTitleForRoute(i)??n,i=i.children.find(r=>r.outlet===A);return n}getResolvedTitleForRoute(t){return t.data[Pn]}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:()=>g(cp),providedIn:"root"})}return e})(),cp=(()=>{class e extends Ya{title;constructor(t){super(),this.title=t}updateTitle(t){let n=this.buildTitle(t);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||e)(F(As))};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Hn=new ie("",{providedIn:"root",factory:()=>({})}),up=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=P({type:e,selectors:[["ng-component"]],decls:1,vars:0,template:function(n,i){n&1&&x(0,"router-outlet")},dependencies:[yd],encapsulation:2})}return e})();function gr(e){let o=e.children&&e.children.map(gr),t=o?se(b({},e),{children:o}):b({},e);return!t.component&&!t.loadComponent&&(o||t.loadChildren)&&t.outlet&&t.outlet!==A&&(t.component=up),t}var Ki=new ie(""),br=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=g(hi);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return w(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let n=St(t.loadComponent()).pipe(U(Ja),ge(r=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=r}),ri(()=>{this.componentLoaders.delete(t)})),i=new Xi(n,()=>new ke).pipe(Ji());return this.componentLoaders.set(t,i),i}loadChildren(t,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return w({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let r=dp(n,this.compiler,t,this.onLoadEndListener).pipe(ri(()=>{this.childrenLoaders.delete(n)})),s=new Xi(r,()=>new ke).pipe(Ji());return this.childrenLoaders.set(n,s),s}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function dp(e,o,t,n){return St(e.loadChildren()).pipe(U(Ja),Te(i=>i instanceof Jr||Array.isArray(i)?w(i):Se(o.compileModuleAsync(i))),U(i=>{n&&n(e);let r,s,a=!1;return Array.isArray(i)?(s=i,a=!0):(r=i.create(t).injector,s=r.get(Ki,[],{optional:!0,self:!0}).flat()),{routes:s.map(gr),injector:r}}))}function pp(e){return e&&typeof e=="object"&&"default"in e}function Ja(e){return pp(e)?e.default:e}var yr=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:()=>g(hp),providedIn:"root"})}return e})(),hp=(()=>{class e{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Xa=new ie(""),el=new ie("");function fp(e,o,t){let n=e.get(el),i=e.get(te);return e.get(Ce).runOutsideAngular(()=>{if(!i.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(c=>setTimeout(c));let r,s=new Promise(c=>{r=c}),a=i.startViewTransition(()=>(r(),mp(e))),{onViewTransitionCreated:l}=n;return l&&Je(e,()=>l({transition:a,from:o,to:t})),s})}function mp(e){return new Promise(o=>{Kr({read:()=>setTimeout(o)},{injector:e})})}var tl=new ie(""),vr=(()=>{class e{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new ke;transitionAbortSubject=new ke;configLoader=g(br);environmentInjector=g(un);urlSerializer=g(Nn);rootContexts=g(Bn);location=g(mn);inputBindingEnabled=g(Zi,{optional:!0})!==null;titleStrategy=g(Ya);options=g(Hn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=g(yr);createViewTransition=g(Xa,{optional:!0});navigationErrorHandler=g(tl,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>w(void 0);rootComponentType=null;constructor(){let t=i=>this.events.next(new Jo(i)),n=i=>this.events.next(new Xo(i));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=t}complete(){this.transitions?.complete()}handleNavigationRequest(t){let n=++this.navigationId;this.transitions?.next(se(b(b({},this.transitions.value),t),{id:n}))}setupNavigations(t,n,i){return this.transitions=new Pe({id:0,currentUrlTree:n,currentRawUrl:n,extractedUrl:this.urlHandlingStrategy.extract(n),urlAfterRedirects:this.urlHandlingStrategy.extract(n),rawUrl:n,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:xn,restoredState:null,currentSnapshot:i.snapshot,targetSnapshot:null,currentRouterState:i,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(rt(r=>r.id!==0),U(r=>se(b({},r),{extractedUrl:this.urlHandlingStrategy.extract(r.rawUrl)})),je(r=>{let s=!1,a=!1;return w(r).pipe(je(l=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,"",De.SupersededByNewNavigation),ht;this.currentTransition=r,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl=="string"?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?se(b({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=l.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!c&&u!=="reload"){let p="";return this.events.next(new It(l.id,this.urlSerializer.serialize(l.rawUrl),p,Fi.IgnoredSameUrlNavigation)),l.resolve(!1),ht}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return w(l).pipe(je(p=>{let f=this.transitions?.getValue();return this.events.next(new en(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),f!==this.transitions?.getValue()?ht:Promise.resolve(p)}),op(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),ge(p=>{r.targetSnapshot=p.targetSnapshot,r.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation=se(b({},this.currentNavigation),{finalUrl:p.urlAfterRedirects});let f=new Bi(p.id,this.urlSerializer.serialize(p.extractedUrl),this.urlSerializer.serialize(p.urlAfterRedirects),p.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:p,extractedUrl:f,source:y,restoredState:T,extras:$}=l,Q=new en(p,this.urlSerializer.serialize(f),y,T);this.events.next(Q);let me=Ua(this.rootComponentType).snapshot;return this.currentTransition=r=se(b({},l),{targetSnapshot:me,urlAfterRedirects:f,extras:se(b({},$),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=f,w(r)}else{let p="";return this.events.next(new It(l.id,this.urlSerializer.serialize(l.extractedUrl),p,Fi.IgnoredByUrlHandlingStrategy)),l.resolve(!1),ht}}),ge(l=>{let c=new Go(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(c)}),U(l=>(this.currentTransition=r=se(b({},l),{guards:wd(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),r)),kd(this.environmentInjector,l=>this.events.next(l)),ge(l=>{if(r.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw Wi(this.urlSerializer,l.guardsResult);let c=new Qo(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(c)}),rt(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",De.GuardRejected),!1)),jo(l=>{if(l.guards.canActivateChecks.length)return w(l).pipe(ge(c=>{let u=new Zo(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}),je(c=>{let u=!1;return w(c).pipe(rp(this.paramsInheritanceStrategy,this.environmentInjector),ge({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(c,"",De.NoDataFromResolver)}}))}),ge(c=>{let u=new Yo(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}))}),jo(l=>{let c=u=>{let p=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&p.push(this.configLoader.loadComponent(u.routeConfig).pipe(ge(f=>{u.component=f}),U(()=>{})));for(let f of u.children)p.push(...c(f));return p};return oi(c(l.targetSnapshot.root)).pipe(to(null),Ut(1))}),jo(()=>this.afterPreactivation()),je(()=>{let{currentSnapshot:l,targetSnapshot:c}=r,u=this.createViewTransition?.(this.environmentInjector,l.root,c.root);return u?Se(u).pipe(U(()=>r)):w(r)}),U(l=>{let c=vd(t.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=r=se(b({},l),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,r}),ge(()=>{this.events.next(new An)}),Cd(this.rootContexts,t.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),Ut(1),ge({next:l=>{s=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Ye(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{s=!0}}),Br(this.transitionAbortSubject.pipe(ge(l=>{throw l}))),ri(()=>{!s&&!a&&this.cancelNavigationTransition(r,"",De.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation=null,this.currentTransition=null)}),Ft(l=>{if(a=!0,Wa(l))this.events.next(new ut(r.id,this.urlSerializer.serialize(r.extractedUrl),l.message,l.cancellationCode)),Sd(l)?this.events.next(new tn(l.url,l.navigationBehaviorOptions)):r.resolve(!1);else{let c=new Mn(r.id,this.urlSerializer.serialize(r.extractedUrl),l,r.targetSnapshot??void 0);try{let u=Je(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(u instanceof Dn){let{message:p,cancellationCode:f}=Wi(this.urlSerializer,u);this.events.next(new ut(r.id,this.urlSerializer.serialize(r.extractedUrl),p,f)),this.events.next(new tn(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(c),l}catch(u){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(u)}}return ht}))}))}cancelNavigationTransition(t,n,i){let r=new ut(t.id,this.urlSerializer.serialize(t.extractedUrl),n,i);this.events.next(r),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==n?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function gp(e){return e!==xn}var bp=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:()=>g(yp),providedIn:"root"})}return e})(),fr=class{shouldDetach(o){return!1}store(o,t){}shouldAttach(o){return!1}retrieve(o){return null}shouldReuseRoute(o,t){return o.routeConfig===t.routeConfig}},yp=(()=>{class e extends fr{static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),nl=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:()=>g(vp),providedIn:"root"})}return e})(),vp=(()=>{class e extends nl{location=g(mn);urlSerializer=g(Nn);options=g(Hn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=g(yr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new dt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=Ua(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(n=>{n.type==="popstate"&&t(n.url,n.state)})}handleRouterEvent(t,n){if(t instanceof en)this.stateMemento=this.createStateMemento();else if(t instanceof It)this.rawUrlTree=n.initialUrl;else if(t instanceof Bi){if(this.urlUpdateStrategy==="eager"&&!n.extras.skipLocationChange){let i=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl);this.setBrowserUrl(n.targetBrowserUrl??i,n)}}else t instanceof An?(this.currentUrlTree=n.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl),this.routerState=n.targetRouterState,this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(n.targetBrowserUrl??this.rawUrlTree,n)):t instanceof ut&&(t.code===De.GuardRejected||t.code===De.NoDataFromResolver)?this.restoreHistory(n):t instanceof Mn?this.restoreHistory(n,!0):t instanceof Ye&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,n){let i=t instanceof dt?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(i)||n.extras.replaceUrl){let r=this.browserPageId,s=b(b({},n.extras.state),this.generateNgRouterState(n.id,r));this.location.replaceState(i,"",s)}else{let r=b(b({},n.extras.state),this.generateNgRouterState(n.id,this.browserPageId+1));this.location.go(i,"",r)}}restoreHistory(t,n=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,r=this.currentPageId-i;r!==0?this.location.historyGo(r):this.currentUrlTree===t.finalUrl&&r===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,n){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:n}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Tn=function(e){return e[e.COMPLETE=0]="COMPLETE",e[e.FAILED=1]="FAILED",e[e.REDIRECTING=2]="REDIRECTING",e}(Tn||{});function il(e,o){e.events.pipe(rt(t=>t instanceof Ye||t instanceof ut||t instanceof Mn||t instanceof It),U(t=>t instanceof Ye||t instanceof It?Tn.COMPLETE:(t instanceof ut?t.code===De.Redirect||t.code===De.SupersededByNewNavigation:!1)?Tn.REDIRECTING:Tn.FAILED),rt(t=>t!==Tn.REDIRECTING),Ut(1)).subscribe(()=>{o()})}var _p={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Ip={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},pt=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=g(ci);stateManager=g(nl);options=g(Hn,{optional:!0})||{};pendingTasks=g(zr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=g(vr);urlSerializer=g(Nn);location=g(mn);urlHandlingStrategy=g(yr);_events=new ke;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=g(bp);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=g(Ki,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!g(Zi,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Rr;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(n=>{try{let i=this.navigationTransitions.currentTransition,r=this.navigationTransitions.currentNavigation;if(i!==null&&r!==null){if(this.stateManager.handleRouterEvent(n,r),n instanceof ut&&n.code!==De.Redirect&&n.code!==De.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof Ye)this.navigated=!0;else if(n instanceof tn){let s=n.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(n.url,i.currentRawUrl),l=b({browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||gp(i.source)},s);this.scheduleNavigation(a,xn,null,l,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}Cp(n)&&this._events.next(n)}catch(i){this.navigationTransitions.transitionAbortSubject.next(i)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),xn,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,n)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",n)},0)})}navigateToSyncWithBrowser(t,n,i){let r={replaceUrl:!0},s=i?.navigationId?i:null;if(i){let l=b({},i);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(r.state=l)}let a=this.parseUrl(t);this.scheduleNavigation(a,n,s,r)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(gr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,n={}){let{relativeTo:i,queryParams:r,fragment:s,queryParamsHandling:a,preserveFragment:l}=n,c=l?this.currentUrlTree.fragment:s,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=b(b({},this.currentUrlTree.queryParams),r);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=r||null}u!==null&&(u=this.removeEmptyProps(u));let p;try{let f=i?i.snapshot:this.routerState.snapshot.root;p=Pa(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),p=this.currentUrlTree.root}return Na(p,t,u,c??null)}navigateByUrl(t,n={skipLocationChange:!1}){let i=kt(t)?t:this.parseUrl(t),r=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(r,xn,null,n)}navigate(t,n={skipLocationChange:!1}){return Sp(t),this.navigateByUrl(this.createUrlTree(t,n),n)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,n){let i;if(n===!0?i=b({},_p):n===!1?i=b({},Ip):i=n,kt(t))return ga(this.currentUrlTree,t,i);let r=this.parseUrl(t);return ga(this.currentUrlTree,r,i)}removeEmptyProps(t){return Object.entries(t).reduce((n,[i,r])=>(r!=null&&(n[i]=r),n),{})}scheduleNavigation(t,n,i,r,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((p,f)=>{a=p,l=f});let u=this.pendingTasks.add();return il(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:r,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(p=>Promise.reject(p))}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Sp(e){for(let o=0;o<e.length;o++)if(e[o]==null)throw new ae(4008,!1)}function Cp(e){return!(e instanceof An)&&!(e instanceof tn)}var Gi=(()=>{class e{router;route;tabIndexAttribute;renderer;el;locationStrategy;href=null;target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new ke;constructor(t,n,i,r,s,a){this.router=t,this.route=n,this.tabIndexAttribute=i,this.renderer=r,this.el=s,this.locationStrategy=a;let l=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area",this.isAnchorElement?this.subscription=t.events.subscribe(c=>{c instanceof Ye&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(t){t==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(kt(t)?this.routerLinkInput=t:this.routerLinkInput=Array.isArray(t)?t:[t],this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,n,i,r,s){let a=this.urlTree;if(a===null||this.isAnchorElement&&(t!==0||n||i||r||s||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,l),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let t=this.urlTree;this.href=t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t)):null;let n=this.href===null?null:Qr(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",n)}applyAttributeValue(t,n){let i=this.renderer,r=this.el.nativeElement;n!==null?i.setAttribute(r,t,n):i.removeAttribute(r,t)}get urlTree(){return this.routerLinkInput===null?null:kt(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(n){return new(n||e)(Z(pt),Z(Pt),Vr("tabindex"),Z(Ct),Z(st),Z(fn))};static \u0275dir=be({type:e,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(n,i){n&1&&pe("click",function(s){return i.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),n&2&&_("target",i.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",M],skipLocationChange:[2,"skipLocationChange","skipLocationChange",M],replaceUrl:[2,"replaceUrl","replaceUrl",M],routerLink:"routerLink"},features:[de,Ve]})}return e})(),ol=(()=>{class e{router;element;renderer;cdr;link;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new H;constructor(t,n,i,r,s){this.router=t,this.element=n,this.renderer=i,this.cdr=r,this.link=s,this.routerEventsSubscription=t.events.subscribe(a=>{a instanceof Ye&&this.update()})}ngAfterContentInit(){w(this.links.changes,w(null)).pipe(cn()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let t=[...this.links.toArray(),this.link].filter(n=>!!n).map(n=>n.onChanges);this.linkInputChangesSubscription=Se(t).pipe(cn()).subscribe(n=>{this._isActive!==this.isLinkActive(this.router)(n)&&this.update()})}set routerLinkActive(t){let n=Array.isArray(t)?t:t.split(" ");this.classes=n.filter(i=>!!i)}ngOnChanges(t){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let t=this.hasActiveLinks();this.classes.forEach(n=>{t?this.renderer.addClass(this.element.nativeElement,n):this.renderer.removeClass(this.element.nativeElement,n)}),t&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==t&&(this._isActive=t,this.cdr.markForCheck(),this.isActiveChange.emit(t))})}isLinkActive(t){let n=wp(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return i=>{let r=i.urlTree;return r?t.isActive(r,n):!1}}hasActiveLinks(){let t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.links.some(t)}static \u0275fac=function(n){return new(n||e)(Z(pt),Z(st),Z(Ct),Z(yt),Z(Gi,8))};static \u0275dir=be({type:e,selectors:[["","routerLinkActive",""]],contentQueries:function(n,i,r){if(n&1&&L(r,Gi,5),n&2){let s;R(s=O())&&(i.links=s)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Ve]})}return e})();function wp(e){return!!e.paths}var Qi=class{};var Tp=(()=>{class e{router;injector;preloadingStrategy;loader;subscription;constructor(t,n,i,r,s){this.router=t,this.injector=i,this.preloadingStrategy=r,this.loader=s}setUpPreloading(){this.subscription=this.router.events.pipe(rt(t=>t instanceof Ye),Bt(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,n){let i=[];for(let r of n){r.providers&&!r._injector&&(r._injector=co(r.providers,t,`Route: ${r.path}`));let s=r._injector??t,a=r._loadedInjector??s;(r.loadChildren&&!r._loadedRoutes&&r.canLoad===void 0||r.loadComponent&&!r._loadedComponent)&&i.push(this.preloadConfig(s,r)),(r.children||r._loadedRoutes)&&i.push(this.processRoutes(a,r.children??r._loadedRoutes))}return Se(i).pipe(cn())}preloadConfig(t,n){return this.preloadingStrategy.preload(n,()=>{let i;n.loadChildren&&n.canLoad===void 0?i=this.loader.loadChildren(t,n):i=w(null);let r=i.pipe(Te(s=>s===null?w(void 0):(n._loadedRoutes=s.routes,n._loadedInjector=s.injector,this.processRoutes(s.injector??t,s.routes))));if(n.loadComponent&&!n._loadedComponent){let s=this.loader.loadComponent(n);return Se([r,s]).pipe(cn())}else return r})}static \u0275fac=function(n){return new(n||e)(F(pt),F(hi),F(un),F(Qi),F(br))};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),rl=new ie(""),Ep=(()=>{class e{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(t,n,i,r,s={}){this.urlSerializer=t,this.transitions=n,this.viewportScroller=i,this.zone=r,this.options=s,s.scrollPositionRestoration||="disabled",s.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof en?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof Ye?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof It&&t.code===Fi.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof Ui&&(t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,n){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new Ui(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,n))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){Zr()};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function xp(e){return e.routerState.root}function jn(e,o){return{\u0275kind:e,\u0275providers:o}}function Rp(){let e=g(dn);return o=>{let t=e.get(ho);if(o!==t.components[0])return;let n=e.get(pt),i=e.get(sl);e.get(_r)===1&&n.initialNavigation(),e.get(al,null,io.Optional)?.setUpPreloading(),e.get(rl,null,io.Optional)?.init(),n.resetRootComponentType(t.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var sl=new ie("",{factory:()=>new ke}),_r=new ie("",{providedIn:"root",factory:()=>1});function Op(){return jn(2,[{provide:_r,useValue:0},{provide:po,multi:!0,deps:[dn],useFactory:o=>{let t=o.get(fs,Promise.resolve());return()=>t.then(()=>new Promise(n=>{let i=o.get(pt),r=o.get(sl);il(i,()=>{n(!0)}),o.get(vr).afterPreactivation=()=>(n(!0),r.closed?w(void 0):r),i.initialNavigation()}))}}])}function Mp(){return jn(3,[{provide:po,multi:!0,useFactory:()=>{let o=g(pt);return()=>{o.setUpLocationChangeListener()}}},{provide:_r,useValue:2}])}var al=new ie("");function Ap(e){return jn(0,[{provide:al,useExisting:Tp},{provide:Qi,useExisting:e}])}function Lp(){return jn(8,[_a,{provide:Zi,useExisting:_a}])}function Dp(e){let o=[{provide:Xa,useValue:fp},{provide:el,useValue:b({skipNextTransition:!!e?.skipInitialTransition},e)}];return jn(9,o)}var wa=new ie("ROUTER_FORROOT_GUARD"),$p=[mn,{provide:Nn,useClass:Xt},pt,Bn,{provide:Pt,useFactory:xp,deps:[pt]},br,[]],Ir=(()=>{class e{constructor(t){}static forRoot(t,n){return{ngModule:e,providers:[$p,[],{provide:Ki,multi:!0,useValue:t},{provide:wa,useFactory:Fp,deps:[[pt,new oo,new Hr]]},n?.errorHandler?{provide:tl,useValue:n.errorHandler}:[],{provide:Hn,useValue:n||{}},n?.useHash?Pp():Np(),kp(),n?.preloadingStrategy?Ap(n.preloadingStrategy).\u0275providers:[],n?.initialNavigation?Bp(n):[],n?.bindToComponentInputs?Lp().\u0275providers:[],n?.enableViewTransitions?Dp().\u0275providers:[],Up()]}}static forChild(t){return{ngModule:e,providers:[{provide:Ki,multi:!0,useValue:t}]}}static \u0275fac=function(n){return new(n||e)(F(wa,8))};static \u0275mod=K({type:e});static \u0275inj=z({})}return e})();function kp(){return{provide:rl,useFactory:()=>{let e=g(_s),o=g(Ce),t=g(Hn),n=g(vr),i=g(Nn);return t.scrollOffset&&e.setOffset(t.scrollOffset),new Ep(i,n,e,o,t)}}}function Pp(){return{provide:fn,useClass:gs}}function Np(){return{provide:fn,useClass:ms}}function Fp(e){return"guarded"}function Bp(e){return[e.initialNavigation==="disabled"?Mp().\u0275providers:[],e.initialNavigation==="enabledBlocking"?Op().\u0275providers:[]]}var Ta=new ie("");function Up(){return[{provide:Ta,useFactory:Rp},{provide:ns,multi:!0,useExisting:Ta}]}function jp(){let e=[],o=(r,s)=>{let a=e.length>0?e[e.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return e.push({key:r,value:l}),l},t=r=>{e=e.filter(s=>s.value!==r)},n=()=>e.length>0?e[e.length-1].value:0,i=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:i,set:(r,s,a)=>{s&&(s.style.zIndex=String(o(r,a)))},clear:r=>{r&&(t(i(r)),r.style.zIndex="")},getCurrent:()=>n()}}var Nt=jp();var Vp=({dt:e})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${e("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${e("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${e("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${e("tooltip.background")};
    color: ${e("tooltip.color")};
    padding: ${e("tooltip.padding")};
    box-shadow: ${e("tooltip.shadow")};
    border-radius: ${e("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} ${e("tooltip.gutter")} ${e("tooltip.gutter")} 0;
    border-right-color: ${e("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} 0 ${e("tooltip.gutter")} ${e("tooltip.gutter")};
    border-left-color: ${e("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} ${e("tooltip.gutter")} 0 ${e("tooltip.gutter")};
    border-top-color: ${e("tooltip.background")};
    border-bottom-color: ${e("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${e("tooltip.gutter")});
    border-width: 0 ${e("tooltip.gutter")} ${e("tooltip.gutter")} ${e("tooltip.gutter")};
    border-top-color: ${e("tooltip.background")};
    border-bottom-color: ${e("tooltip.background")};
}
`,zp={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},ll=(()=>{class e extends G{name="tooltip";theme=Vp;classes=zp;static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var cl=(()=>{class e extends ne{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:Ie("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=g(ll);interactionInProgress=!1;constructor(t,n){super(),this.zone=t,this.viewContainer=n}ngAfterViewInit(){super.ngAfterViewInit(),et(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){super.ngOnChanges(t),t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=b(b({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(Mt(t.relatedTarget,"p-tooltip")||Mt(t.relatedTarget,"p-tooltip-text")||Mt(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?Co(this.container,this.el.nativeElement):Co(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),Ps(this.container,250),this.getOption("tooltipZIndex")==="auto"?Nt.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&Nt.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t instanceof ai){let n=this.viewContainer.createEmbeddedView(t);n.detectChanges(),n.rootNodes.forEach(i=>this.tooltipText.appendChild(i))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),n={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[i,r]of n[t].entries())if(i===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),n=t.left+Ds(),i=t.top+$s();return{left:n,top:i}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")?vt(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,n=tt(t),i=(nt(t)-nt(this.container))/2;this.alignTooltip(n,i)}alignLeft(){this.preAlign("left");let t=tt(this.container),n=(nt(this.el.nativeElement)-nt(this.container))/2;this.alignTooltip(-t,n)}alignTop(){this.preAlign("top");let t=(tt(this.el.nativeElement)-tt(this.container))/2,n=nt(this.container);this.alignTooltip(t,-n)}alignBottom(){this.preAlign("bottom");let t=(tt(this.el.nativeElement)-tt(this.container))/2,n=nt(this.el.nativeElement);this.alignTooltip(t,n)}alignTooltip(t,n){let i=this.getHostOffset(),r=i.left+t,s=i.top+n;this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=b(b({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return Mt(t,"p-inputwrapper")?vt(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let n="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?n+" "+this.getOption("tooltipStyleClass"):n}isOutOfBounds(){let t=this.container.getBoundingClientRect(),n=t.top,i=t.left,r=tt(this.container),s=nt(this.container),a=Ls();return i+r>a.width||i<0||n<0||n+s>a.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new xi(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),t==="focus"||t==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Bs(this.container,this.getOption("appendTo"))),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&Nt.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||e)(Z(Ce),Z(li))};static \u0275dir=be({type:e,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",M],showDelay:[2,"showDelay","showDelay",Me],hideDelay:[2,"hideDelay","hideDelay",Me],life:[2,"life","life",Me],positionTop:[2,"positionTop","positionTop",Me],positionLeft:[2,"positionLeft","positionLeft",Me],autoHide:[2,"autoHide","autoHide",M],fitContent:[2,"fitContent","fitContent",M],hideOnEscape:[2,"hideOnEscape","hideOnEscape",M],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[re([ll]),de,k,Ve]})}return e})(),Sr=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=K({type:e});static \u0275inj=z({})}return e})();var qp=({dt:e})=>`
.p-menubar {
    display: flex;
    align-items: center;
    background: ${e("menubar.background")};
    border: 1px solid ${e("menubar.border.color")};
    border-radius: ${e("menubar.border.radius")};
    color: ${e("menubar.color")};
    padding: ${e("menubar.padding")};
    gap: ${e("menubar.gap")};
}

.p-menubar-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-menubar-root-list,
.p-menubar-submenu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    align-items: center;
    flex-wrap: wrap;
    gap: ${e("menubar.gap")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: ${e("menubar.base.item.border.radius")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${e("menubar.base.item.padding")};
}

.p-menubar-item-content {
    transition: background ${e("menubar.transition.duration")}, color ${e("menubar.transition.duration")};
    border-radius: ${e("menubar.item.border.radius")};
    color: ${e("menubar.item.color")};
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${e("menubar.item.padding")};
    gap: ${e("menubar.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: ${e("menubar.item.icon.color")};
}

.p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.color")};
    margin-left: auto;
    font-size: ${e("menubar.submenu.icon.size")};
    width: ${e("menubar.submenu.icon.size")};
    height: ${e("menubar.submenu.icon.size")};
}

.p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: ${e("menubar.item.focus.color")};
    background: ${e("menubar.item.focus.background")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: ${e("menubar.item.icon.focus.color")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: ${e("menubar.item.focus.color")};
    background: ${e("menubar.item.focus.background")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: ${e("menubar.item.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.focus.color")};
}

.p-menubar-item-active > .p-menubar-item-content {
    color: ${e("menubar.item.active.color")};
    background: ${e("menubar.item.active.background")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: ${e("menubar.item.icon.active.color")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.active.color")};
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: ${e("menubar.submenu.background")};
    border: 1px solid ${e("menubar.submenu.border.color")};
    border-radius: ${e("menubar.border.radius")};
    box-shadow: ${e("menubar.submenu.shadow")};
    color: ${e("menubar.submenu.color")};
    flex-direction: column;
    padding: ${e("menubar.submenu.padding")};
    gap: ${e("menubar.submenu.gap")};
}

.p-menubar-submenu .p-menubar-separator {
    border-top: 1px solid ${e("menubar.separator.border.color")};
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
}

.p-menubar-submenu > .p-menubar-item-active .p-menubar-submenu {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-end:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${e("menubar.mobile.button.size")};
    height: ${e("menubar.mobile.button.size")};
    position: relative;
    color: ${e("menubar.mobile.button.color")};
    border: 0 none;
    background: transparent;
    border-radius: ${e("menubar.mobile.button.border.radius")};
    transition: background ${e("menubar.transition.duration")}, color ${e("menubar.transition.duration")}, outline-color ${e("menubar.transition.duration")};
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: ${e("menubar.mobile.button.hover.color")};
    background: ${e("menubar.mobile.button.hover.background")};
}

.p-menubar-button:focus-visible {
    box-shadow: ${e("menubar.mobile.button.focus.ring.shadow")};
    outline: ${e("menubar.mobile.button.focus.ring.width")} ${e("menubar.mobile.button.focus.ring.style")} ${e("menubar.mobile.button.focus.ring.color")};
    outline-offset: ${e("menubar.mobile.button.focus.ring.offset")};
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    padding: ${e("menubar.submenu.padding")};
    background: ${e("menubar.submenu.background")};
    border: 1px solid ${e("menubar.submenu.border.color")};
    box-shadow: ${e("menubar.submenu.shadow")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: ${e("menubar.item.border.radius")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${e("menubar.item.padding")};
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
}

.p-menubar-mobile .p-menubar-root-list:dir(rtl) {
    left: auto;
    right: 0;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-top: 1px solid ${e("menubar.separator.border.color")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile  .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-menubar-submenu {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-left: ${e("menubar.submenu.mobile.indent")};
}
`;var Kp={root:({instance:e})=>["p-menubar p-component",{"p-menubar-mobile":e.queryMatches,"p-menubar-mobile-active":e.mobileActive}],start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:({instance:e,processedItem:o})=>["p-menubar-item",{"p-menubar-item-active":e.isItemActive(o),"p-focus":e.isItemFocused(o),"p-disabled":e.isItemDisabled(o)}],itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},ul=(()=>{class e extends G{name="menubar";theme=qp;classes=Kp;static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Gp=["menubar"],Qp=(e,o)=>({"p-menubar-submenu":e,"p-menubar-root-list":o}),dl=e=>({"p-menubar-item-link":!0,"p-disabled":e}),Zp=()=>({exact:!1}),Yp=(e,o)=>({$implicit:e,root:o}),Jp=e=>({display:e});function Xp(e,o){if(e&1&&x(0,"li",8),e&2){let t=m().$implicit,n=m();pi(n.getItemProp(t,"style")),d("ngClass",n.getSeparatorItemClass(t)),_("id",n.getItemId(t))("data-pc-section","separator")}}function eh(e,o){if(e&1&&x(0,"span",19),e&2){let t=m(4).$implicit,n=m();d("ngClass",n.getItemProp(t,"icon"))("ngStyle",n.getItemProp(t,"iconStyle")),_("data-pc-section","icon")("tabindex",-1)}}function th(e,o){if(e&1&&(I(0,"span",20),we(1),C()),e&2){let t=m(4).$implicit,n=m();d("id",n.getItemLabelId(t)),_("data-pc-section","label"),h(),os(" ",n.getItemLabel(t)," ")}}function nh(e,o){if(e&1&&x(0,"span",21),e&2){let t=m(4).$implicit,n=m();d("innerHTML",n.getItemLabel(t),lo)("id",n.getItemLabelId(t)),_("data-pc-section","label")}}function ih(e,o){if(e&1&&x(0,"p-badge",22),e&2){let t=m(4).$implicit,n=m();d("styleClass",n.getItemProp(t,"badgeStyleClass"))("value",n.getItemProp(t,"badge"))}}function oh(e,o){e&1&&x(0,"AngleDownIcon",25),e&2&&_("data-pc-section","submenuicon")}function rh(e,o){e&1&&x(0,"AngleRightIcon",25),e&2&&_("data-pc-section","submenuicon")}function sh(e,o){if(e&1&&(J(0),v(1,oh,1,1,"AngleDownIcon",24)(2,rh,1,1,"AngleRightIcon",24),X()),e&2){let t=m(6);h(),d("ngIf",t.root),h(),d("ngIf",!t.root)}}function ah(e,o){}function lh(e,o){e&1&&v(0,ah,0,0,"ng-template",26),e&2&&d("data-pc-section","submenuicon")}function ch(e,o){if(e&1&&(J(0),v(1,sh,3,2,"ng-container",11)(2,lh,1,1,null,23),X()),e&2){let t=m(5);h(),d("ngIf",!t.submenuiconTemplate),h(),d("ngTemplateOutlet",t.submenuiconTemplate)}}function uh(e,o){if(e&1&&(I(0,"a",15),v(1,eh,1,4,"span",16)(2,th,2,3,"span",17)(3,nh,1,3,"ng-template",null,2,bt)(5,ih,1,2,"p-badge",18)(6,ch,3,2,"ng-container",11),C()),e&2){let t=wt(4),n=m(3).$implicit,i=m();d("target",i.getItemProp(n,"target"))("ngClass",le(11,dl,i.getItemProp(n,"disabled"))),_("href",i.getItemProp(n,"url"),Gr)("data-automationid",i.getItemProp(n,"automationId"))("data-pc-section","action")("tabindex",-1),h(),d("ngIf",i.getItemProp(n,"icon")),h(),d("ngIf",i.getItemProp(n,"escape"))("ngIfElse",t),h(3),d("ngIf",i.getItemProp(n,"badge")),h(),d("ngIf",i.isItemGroup(n))}}function dh(e,o){if(e&1&&x(0,"span",19),e&2){let t=m(4).$implicit,n=m();d("ngClass",n.getItemProp(t,"icon"))("ngStyle",n.getItemProp(t,"iconStyle")),_("data-pc-section","icon")("tabindex",-1)}}function ph(e,o){if(e&1&&(I(0,"span",29),we(1),C()),e&2){let t=m(4).$implicit,n=m();h(),Oe(n.getItemLabel(t))}}function hh(e,o){if(e&1&&x(0,"span",30),e&2){let t=m(4).$implicit,n=m();d("innerHTML",n.getItemLabel(t),lo),_("data-pc-section","label")}}function fh(e,o){if(e&1&&x(0,"p-badge",22),e&2){let t=m(4).$implicit,n=m();d("styleClass",n.getItemProp(t,"badgeStyleClass"))("value",n.getItemProp(t,"badge"))}}function mh(e,o){e&1&&x(0,"AngleDownIcon",25),e&2&&_("data-pc-section","submenuicon")}function gh(e,o){e&1&&x(0,"AngleRightIcon",25),e&2&&_("data-pc-section","submenuicon")}function bh(e,o){if(e&1&&(J(0),v(1,mh,1,1,"AngleDownIcon",24)(2,gh,1,1,"AngleRightIcon",24),X()),e&2){let t=m(6);h(),d("ngIf",t.root),h(),d("ngIf",!t.root)}}function yh(e,o){}function vh(e,o){e&1&&v(0,yh,0,0,"ng-template",26),e&2&&d("data-pc-section","submenuicon")}function _h(e,o){if(e&1&&(J(0),v(1,bh,3,2,"ng-container",11)(2,vh,1,1,null,23),X()),e&2){let t=m(5);h(),d("ngIf",!t.submenuiconTemplate),h(),d("ngTemplateOutlet",t.submenuiconTemplate)}}function Ih(e,o){if(e&1&&(I(0,"a",27),v(1,dh,1,4,"span",16)(2,ph,2,1,"span",28)(3,hh,1,2,"ng-template",null,3,bt)(5,fh,1,2,"p-badge",18)(6,_h,3,2,"ng-container",11),C()),e&2){let t=wt(4),n=m(3).$implicit,i=m();d("routerLink",i.getItemProp(n,"routerLink"))("queryParams",i.getItemProp(n,"queryParams"))("routerLinkActive","p-menubar-item-link-active")("routerLinkActiveOptions",i.getItemProp(n,"routerLinkActiveOptions")||rs(20,Zp))("target",i.getItemProp(n,"target"))("ngClass",le(21,dl,i.getItemProp(n,"disabled")))("fragment",i.getItemProp(n,"fragment"))("queryParamsHandling",i.getItemProp(n,"queryParamsHandling"))("preserveFragment",i.getItemProp(n,"preserveFragment"))("skipLocationChange",i.getItemProp(n,"skipLocationChange"))("replaceUrl",i.getItemProp(n,"replaceUrl"))("state",i.getItemProp(n,"state")),_("data-automationid",i.getItemProp(n,"automationId"))("tabindex",-1)("data-pc-section","action"),h(),d("ngIf",i.getItemProp(n,"icon")),h(),d("ngIf",i.getItemProp(n,"escape"))("ngIfElse",t),h(3),d("ngIf",i.getItemProp(n,"badge")),h(),d("ngIf",i.isItemGroup(n))}}function Sh(e,o){if(e&1&&(J(0),v(1,uh,7,13,"a",13)(2,Ih,7,23,"a",14),X()),e&2){let t=m(2).$implicit,n=m();h(),d("ngIf",!n.getItemProp(t,"routerLink")),h(),d("ngIf",n.getItemProp(t,"routerLink"))}}function Ch(e,o){}function wh(e,o){e&1&&v(0,Ch,0,0,"ng-template")}function Th(e,o){if(e&1&&(J(0),v(1,wh,1,0,null,31),X()),e&2){let t=m(2).$implicit,n=m();h(),d("ngTemplateOutlet",n.itemTemplate)("ngTemplateOutletContext",gt(2,Yp,t.item,n.root))}}function Eh(e,o){if(e&1){let t=Re();I(0,"p-menubarSub",32),pe("itemClick",function(i){W(t);let r=m(3);return q(r.itemClick.emit(i))})("itemMouseEnter",function(i){W(t);let r=m(3);return q(r.onItemMouseEnter(i))}),C()}if(e&2){let t=m(2).$implicit,n=m();d("itemTemplate",n.itemTemplate)("items",t.items)("mobileActive",n.mobileActive)("autoDisplay",n.autoDisplay)("menuId",n.menuId)("activeItemPath",n.activeItemPath)("focusedItemId",n.focusedItemId)("level",n.level+1)("ariaLabelledBy",n.getItemLabelId(t))("inlineStyles",le(10,Jp,n.isItemActive(t)?"flex":"none"))}}function xh(e,o){if(e&1){let t=Re();I(0,"li",9,1)(2,"div",10),pe("click",function(i){W(t);let r=m().$implicit,s=m();return q(s.onItemClick(i,r))})("mouseenter",function(i){W(t);let r=m().$implicit,s=m();return q(s.onItemMouseEnter({$event:i,processedItem:r}))}),v(3,Sh,3,2,"ng-container",11)(4,Th,2,5,"ng-container",11),C(),v(5,Eh,1,12,"p-menubarSub",12),C()}if(e&2){let t=m(),n=t.$implicit,i=t.index,r=m();B(r.getItemProp(n,"styleClass")),d("ngStyle",r.getItemProp(n,"style"))("ngClass",r.getItemClass(n))("tooltipOptions",r.getItemProp(n,"tooltipOptions")),_("id",r.getItemId(n))("data-pc-section","menuitem")("data-p-highlight",r.isItemActive(n))("data-p-focused",r.isItemFocused(n))("data-p-disabled",r.isItemDisabled(n))("aria-label",r.getItemLabel(n))("aria-disabled",r.isItemDisabled(n)||void 0)("aria-haspopup",r.isItemGroup(n)&&!r.getItemProp(n,"to")?"menu":void 0)("aria-expanded",r.isItemGroup(n)?r.isItemActive(n):void 0)("aria-level",r.level+1)("aria-setsize",r.getAriaSetSize())("aria-posinset",r.getAriaPosInset(i)),h(2),_("data-pc-section","content"),h(),d("ngIf",!r.itemTemplate),h(),d("ngIf",r.itemTemplate),h(),d("ngIf",r.isItemVisible(n)&&r.isItemGroup(n))}}function Rh(e,o){if(e&1&&v(0,Xp,1,5,"li",6)(1,xh,6,21,"li",7),e&2){let t=o.$implicit,n=m();d("ngIf",n.isItemVisible(t)&&n.getItemProp(t,"separator")),h(),d("ngIf",n.isItemVisible(t)&&!n.getItemProp(t,"separator"))}}var Oh=["start"],Mh=["end"],Ah=["item"],Lh=["menuicon"],Dh=["submenuicon"],$h=["menubutton"],kh=["rootmenu"],Ph=["*"],Nh=(e,o)=>({"p-menubar p-component":!0,"p-menubar-mobile":e,"p-menubar-mobile-active":o});function Fh(e,o){e&1&&ee(0)}function Bh(e,o){if(e&1&&(I(0,"div",8),v(1,Fh,1,0,"ng-container",9),C()),e&2){let t=m();h(),d("ngTemplateOutlet",t.startTemplate||t._startTemplate)}}function Uh(e,o){e&1&&x(0,"BarsIcon")}function Hh(e,o){}function jh(e,o){e&1&&v(0,Hh,0,0,"ng-template")}function Vh(e,o){if(e&1){let t=Re();I(0,"a",10,2),pe("click",function(i){W(t);let r=m();return q(r.menuButtonClick(i))})("keydown",function(i){W(t);let r=m();return q(r.menuButtonKeydown(i))}),v(2,Uh,1,0,"BarsIcon",11)(3,jh,1,0,null,9),C()}if(e&2){let t=m();_("aria-haspopup",!!(t.model.length&&t.model.length>0))("aria-expanded",t.mobileActive)("aria-controls",t.id)("aria-label",t.config.translation.aria.navigation)("data-pc-section","button"),h(2),d("ngIf",!t.menuIconTemplate&&!t._menuIconTemplate),h(),d("ngTemplateOutlet",t.menuIconTemplate||t._menuIconTemplate)}}function zh(e,o){e&1&&ee(0)}function Wh(e,o){if(e&1&&(I(0,"div",12),v(1,zh,1,0,"ng-container",9),C()),e&2){let t=m();h(),d("ngTemplateOutlet",t.endTemplate||t._endTemplate)}}function qh(e,o){e&1&&(I(0,"div",12),oe(1),C())}var Cr=(()=>{class e{autoHide;autoHideDelay;mouseLeaves=new ke;mouseLeft$=this.mouseLeaves.pipe($r(()=>Dr(this.autoHideDelay)),rt(t=>this.autoHide&&t));static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),Kh=(()=>{class e extends ne{items;itemTemplate;root=!1;autoZIndex=!0;baseZIndex=0;mobileActive;autoDisplay;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;inlineStyles;submenuiconTemplate;itemClick=new H;itemMouseEnter=new H;menuFocus=new H;menuBlur=new H;menuKeydown=new H;menubarViewChild;mouseLeaveSubscriber;menubarService=g(Cr);ngOnInit(){super.ngOnInit(),this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(t,n){this.getItemProp(n,"command",{originalEvent:t,item:n.item}),this.itemClick.emit({originalEvent:t,processedItem:n,isFocus:!0})}getItemProp(t,n,i=null){return t&&t.item?_e(t.item[n],i):void 0}getItemId(t){return t.item&&t.item?.id?t.item.id:`${this.menuId}_${t.key}`}getItemKey(t){return this.getItemId(t)}getItemLabelId(t){return`${this.menuId}_${t.key}_label`}getItemClass(t){return se(b({},this.getItemProp(t,"class")),{"p-menubar-item":!0,"p-menubar-item-active":this.isItemActive(t),"p-focus":this.isItemFocused(t),"p-disabled":this.isItemDisabled(t)})}getItemLabel(t){return this.getItemProp(t,"label")}getSeparatorItemClass(t){return se(b({},this.getItemProp(t,"class")),{"p-menubar-separator":!0})}isItemVisible(t){return this.getItemProp(t,"visible")!==!1}isItemActive(t){if(this.activeItemPath)return this.activeItemPath.some(n=>n.key===t.key)}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemFocused(t){return this.focusedItemId===this.getItemId(t)}isItemGroup(t){return D(t.items)}getAriaSetSize(){return this.items.filter(t=>this.isItemVisible(t)&&!this.getItemProp(t,"separator")).length}getAriaPosInset(t){return t-this.items.slice(0,t).filter(n=>this.isItemVisible(n)&&this.getItemProp(n,"separator")).length+1}onItemMouseLeave(){this.menubarService.mouseLeaves.next(!0)}onItemMouseEnter(t){if(this.autoDisplay){this.menubarService.mouseLeaves.next(!1);let{event:n,processedItem:i}=t;this.itemMouseEnter.emit({originalEvent:n,processedItem:i})}}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275cmp=P({type:e,selectors:[["p-menubarSub"],["p-menubarsub"]],viewQuery:function(n,i){if(n&1&&Ht(Gp,7),n&2){let r;R(r=O())&&(i.menubarViewChild=r.first)}},inputs:{items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",M],autoZIndex:[2,"autoZIndex","autoZIndex",M],baseZIndex:[2,"baseZIndex","baseZIndex",Me],mobileActive:[2,"mobileActive","mobileActive",M],autoDisplay:[2,"autoDisplay","autoDisplay",M],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",Me],focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",inlineStyles:"inlineStyles",submenuiconTemplate:"submenuiconTemplate"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[de,k],decls:3,vars:12,consts:[["menubar",""],["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["role","menubar",3,"focus","blur","keydown","ngClass","tabindex","ngStyle"],["ngFor","",3,"ngForOf"],["role","separator",3,"style","ngClass",4,"ngIf"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","class","tooltipOptions",4,"ngIf"],["role","separator",3,"ngClass"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","tooltipOptions"],[1,"p-menubar-item-content",3,"click","mouseenter"],[4,"ngIf"],[3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","ariaLabelledBy","inlineStyles","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"target","ngClass",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target","ngClass"],["class","p-menubar-item-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-menubar-item-label",3,"id",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menubar-item-icon",3,"ngClass","ngStyle"],[1,"p-menubar-item-label",3,"id"],[1,"p-menubar-item-label",3,"innerHTML","id"],[3,"styleClass","value"],[4,"ngTemplateOutlet"],["class","p-menubar-submenu-icon",4,"ngIf"],[1,"p-menubar-submenu-icon"],[3,"data-pc-section"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["class","p-menubar-item-label",4,"ngIf","ngIfElse"],[1,"p-menubar-item-label"],[1,"p-menubar-item-label",3,"innerHTML"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"itemClick","itemMouseEnter","itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","ariaLabelledBy","inlineStyles"]],template:function(n,i){if(n&1){let r=Re();I(0,"ul",4,0),pe("focus",function(a){return W(r),q(i.menuFocus.emit(a))})("blur",function(a){return W(r),q(i.menuBlur.emit(a))})("keydown",function(a){return W(r),q(i.menuKeydown.emit(a))}),v(2,Rh,2,2,"ng-template",5),C()}n&2&&(d("ngClass",gt(9,Qp,!i.root,i.root))("tabindex",0)("ngStyle",i.inlineStyles),_("data-pc-section","menu")("aria-label",i.ariaLabel)("aria-labelledBy",i.ariaLabelledBy)("id",i.root?i.menuId:null)("aria-activedescendant",i.focusedItemId),h(2),d("ngForOf",i.items))},dependencies:[e,ce,ze,ys,We,Ke,qe,Ir,Gi,ol,Mi,Sr,cl,ra,sa,In,_n,V],encapsulation:2})}return e})(),Gh=(()=>{class e extends ne{document;platformId;el;renderer;cd;menubarService;set model(t){this._model=t,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}style;styleClass;autoZIndex=!0;baseZIndex=0;autoDisplay=!1;autoHide;breakpoint="960px";autoHideDelay=100;id;ariaLabel;ariaLabelledBy;onFocus=new H;onBlur=new H;menubutton;rootmenu;mobileActive;matchMediaListener;query;queryMatches;outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=xe([]);number=xe(0);focusedItemInfo=xe({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_componentStyle=g(ul);_model;get visibleItems(){let t=this.activeItemPath().find(n=>n.key===this.focusedItemInfo().parentKey);return t?t.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let t=this.focusedItemInfo();return t.item&&t.item?.id?t.item.id:t.index!==-1?`${this.id}${D(t.parentKey)?"_"+t.parentKey:""}_${t.index}`:null}constructor(t,n,i,r,s,a){super(),this.document=t,this.platformId=n,this.el=i,this.renderer=r,this.cd=s,this.menubarService=a,Tt(()=>{let l=this.activeItemPath();D(l)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}ngOnInit(){super.ngOnInit(),this.bindMatchMediaListener(),this.menubarService.autoHide=this.autoHide,this.menubarService.autoHideDelay=this.autoHideDelay,this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>this.unbindOutsideClickListener()),this.id=this.id||Ie("pn_id_")}startTemplate;endTemplate;itemTemplate;menuIconTemplate;submenuIconTemplate;templates;_startTemplate;_endTemplate;_itemTemplate;_menuIconTemplate;_submenuIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"start":this._startTemplate=t.template;break;case"end":this._endTemplate=t.template;break;case"menuicon":this._menuIconTemplate=t.template;break;case"submenuicon":this._submenuIconTemplate=t.template;break;case"item":this._itemTemplate=t.template;break;default:this._itemTemplate=t.template;break}})}createProcessedItems(t,n=0,i={},r=""){let s=[];return t&&t.forEach((a,l)=>{let c=(r!==""?r+"_":"")+l,u={item:a,index:l,level:n,key:c,parent:i,parentKey:r};u.items=this.createProcessedItems(a.items,n+1,u,c),s.push(u)}),s}bindMatchMediaListener(){if(et(this.platformId)&&!this.matchMediaListener){let t=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=t,this.queryMatches=t.matches,this.matchMediaListener=()=>{this.queryMatches=t.matches,this.mobileActive=!1,this.cd.markForCheck()},t.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}getItemProp(t,n){return t?_e(t[n]):void 0}menuButtonClick(t){this.toggle(t)}menuButtonKeydown(t){(t.code==="Enter"||t.code==="Space")&&this.menuButtonClick(t)}onItemClick(t){let{originalEvent:n,processedItem:i}=t,r=this.isProcessedItemGroup(i),s=he(i.parent);if(this.isSelected(i)){let{index:l,key:c,level:u,parentKey:p,item:f}=i;this.activeItemPath.set(this.activeItemPath().filter(y=>c!==y.key&&c.startsWith(y.key))),this.focusedItemInfo.set({index:l,level:u,parentKey:p,item:f}),this.dirty=!s,At(this.rootmenu.menubarViewChild.nativeElement)}else if(r)this.onItemChange(t);else{let l=s?i:this.activeItemPath().find(c=>c.parentKey==="");this.hide(n),this.changeFocusedItemIndex(n,l?l.index:-1),this.mobileActive=!1,At(this.rootmenu.menubarViewChild.nativeElement)}}onItemMouseEnter(t){xo()||this.mobileActive||this.onItemChange(t)}changeFocusedItemIndex(t,n){let i=this.findVisibleItem(n);if(this.focusedItemInfo().index!==n){let r=this.focusedItemInfo();this.focusedItemInfo.set(se(b({},r),{item:i.item,index:n})),this.scrollInView()}}scrollInView(t=-1){let n=t!==-1?`${this.id}_${t}`:this.focusedItemId,i=vt(this.rootmenu.el.nativeElement,`li[id="${n}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"})}onItemChange(t){let{processedItem:n,isFocus:i}=t;if(he(n))return;let{index:r,key:s,level:a,parentKey:l,items:c,item:u}=n,p=D(c),f=this.activeItemPath().filter(y=>y.parentKey!==l&&y.parentKey!==s);p&&f.push(n),this.focusedItemInfo.set({index:r,level:a,parentKey:l,item:u}),this.activeItemPath.set(f),p&&(this.dirty=!0),i&&At(this.rootmenu.menubarViewChild.nativeElement)}toggle(t){this.mobileActive?(this.mobileActive=!1,Nt.clear(this.rootmenu.el.nativeElement),this.hide()):(this.mobileActive=!0,Nt.set("menu",this.rootmenu.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),t.preventDefault()}hide(t,n){this.mobileActive&&setTimeout(()=>{At(this.menubutton.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),n&&At(this.rootmenu?.menubarViewChild.nativeElement),this.dirty=!1}show(){let t=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:t?.item}),At(this.rootmenu?.menubarViewChild.nativeElement)}onMenuFocus(t){this.focused=!0;let n=this.findVisibleItem(this.findFirstFocusedItemIndex()),i=this.focusedItemInfo().index!==-1?this.focusedItemInfo():{index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:n?.item};this.focusedItemInfo.set(i),this.onFocus.emit(t)}onMenuBlur(t){this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1,this.onBlur.emit(t)}onKeyDown(t){let n=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"ArrowRight":this.onArrowRightKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Space":this.onSpaceKey(t);break;case"Enter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&Ws(t.key)&&this.searchItems(t,t.key);break}}findVisibleItem(t){return D(this.visibleItems)?this.visibleItems[t]:null}findFirstFocusedItemIndex(){let t=this.findSelectedItemIndex();return t<0?this.findFirstItemIndex():t}findFirstItemIndex(){return this.visibleItems.findIndex(t=>this.isValidItem(t))}findSelectedItemIndex(){return this.visibleItems.findIndex(t=>this.isValidSelectedItem(t))}isProcessedItemGroup(t){return t&&D(t.items)}isSelected(t){return this.activeItemPath().some(n=>n.key===t.key)}isValidSelectedItem(t){return this.isValidItem(t)&&this.isSelected(t)}isValidItem(t){return!!t&&!this.isItemDisabled(t.item)&&!this.isItemSeparator(t.item)}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemSeparator(t){return this.getItemProp(t,"separator")}isItemMatched(t){return this.isValidItem(t)&&this.getProccessedItemLabel(t).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(t){return t&&D(t.items)}searchItems(t,n){this.searchValue=(this.searchValue||"")+n;let i=-1,r=!1;return this.focusedItemInfo().index!==-1?(i=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(s=>this.isItemMatched(s)),i=i===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(s=>this.isItemMatched(s)):i+this.focusedItemInfo().index):i=this.visibleItems.findIndex(s=>this.isItemMatched(s)),i!==-1&&(r=!0),i===-1&&this.focusedItemInfo().index===-1&&(i=this.findFirstFocusedItemIndex()),i!==-1&&this.changeFocusedItemIndex(t,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r}getProccessedItemLabel(t){return t?this.getItemLabel(t.item):void 0}getItemLabel(t){return this.getItemProp(t,"label")}onArrowDownKey(t){let n=this.visibleItems[this.focusedItemInfo().index];if(n?he(n.parent):null)this.isProccessedItemGroup(n)&&(this.onItemChange({originalEvent:t,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item}),this.onArrowRightKey(t));else{let r=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(t,r),t.preventDefault()}}onArrowRightKey(t){let n=this.visibleItems[this.focusedItemInfo().index];if(n?this.activeItemPath().find(r=>r.key===n.parentKey):null)this.isProccessedItemGroup(n)&&(this.onItemChange({originalEvent:t,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item}),this.onArrowDownKey(t));else{let r=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(t,r),t.preventDefault()}}onArrowUpKey(t){let n=this.visibleItems[this.focusedItemInfo().index];if(he(n.parent)){if(this.isProccessedItemGroup(n)){this.onItemChange({originalEvent:t,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item});let s=this.findLastItemIndex();this.changeFocusedItemIndex(t,s)}}else{let r=this.activeItemPath().find(s=>s.key===n.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:r?r.parentKey:"",item:n.item}),this.searchValue="",this.onArrowLeftKey(t);let s=this.activeItemPath().filter(a=>a.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(s)}else{let s=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(t,s)}}t.preventDefault()}onArrowLeftKey(t){let n=this.visibleItems[this.focusedItemInfo().index],i=n?this.activeItemPath().find(r=>r.key===n.parentKey):null;if(i){this.onItemChange({originalEvent:t,processedItem:i});let r=this.activeItemPath().filter(s=>s.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(r),t.preventDefault()}else{let r=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(t,r),t.preventDefault()}}onHomeKey(t){this.changeFocusedItemIndex(t,this.findFirstItemIndex()),t.preventDefault()}onEndKey(t){this.changeFocusedItemIndex(t,this.findLastItemIndex()),t.preventDefault()}onSpaceKey(t){this.onEnterKey(t)}onEscapeKey(t){this.hide(t,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),t.preventDefault()}onTabKey(t){if(this.focusedItemInfo().index!==-1){let n=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(n)&&this.onItemChange({originalEvent:t,processedItem:n})}this.hide()}onEnterKey(t){if(this.focusedItemInfo().index!==-1){let n=vt(this.rootmenu.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),i=n&&vt(n,'a[data-pc-section="action"]');i?i.click():n&&n.click()}t.preventDefault()}findLastFocusedItemIndex(){let t=this.findSelectedItemIndex();return t<0?this.findLastItemIndex():t}findLastItemIndex(){return Ao(this.visibleItems,t=>this.isValidItem(t))}findPrevItemIndex(t){let n=t>0?Ao(this.visibleItems.slice(0,t),i=>this.isValidItem(i)):-1;return n>-1?n:t}findNextItemIndex(t){let n=t<this.visibleItems.length-1?this.visibleItems.slice(t+1).findIndex(i=>this.isValidItem(i)):-1;return n>-1?n+t+1:t}bindResizeListener(){et(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",t=>{xo()||this.hide(t,!0),this.mobileActive=!1})))}bindOutsideClickListener(){et(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",t=>{let n=this.rootmenu.el.nativeElement!==t.target&&!this.rootmenu.el.nativeElement.contains(t.target),i=this.mobileActive&&this.menubutton.nativeElement!==t.target&&!this.menubutton.nativeElement.contains(t.target);n&&(i?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)(Z(te),Z(Ee),Z(st),Z(Ct),Z(yt),Z(Cr))};static \u0275cmp=P({type:e,selectors:[["p-menubar"]],contentQueries:function(n,i,r){if(n&1&&(L(r,Oh,4),L(r,Mh,4),L(r,Ah,4),L(r,Lh,4),L(r,Dh,4),L(r,it,4)),n&2){let s;R(s=O())&&(i.startTemplate=s.first),R(s=O())&&(i.endTemplate=s.first),R(s=O())&&(i.itemTemplate=s.first),R(s=O())&&(i.menuIconTemplate=s.first),R(s=O())&&(i.submenuIconTemplate=s.first),R(s=O())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&(Ht($h,5),Ht(kh,5)),n&2){let r;R(r=O())&&(i.menubutton=r.first),R(r=O())&&(i.rootmenu=r.first)}},inputs:{model:"model",style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",M],baseZIndex:[2,"baseZIndex","baseZIndex",Me],autoDisplay:[2,"autoDisplay","autoDisplay",M],autoHide:[2,"autoHide","autoHide",M],breakpoint:"breakpoint",autoHideDelay:[2,"autoHideDelay","autoHideDelay",Me],id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[re([Cr,ul]),de,k],ngContentSelectors:Ph,decls:8,vars:26,consts:[["rootmenu",""],["legacy",""],["menubutton",""],[3,"ngClass","ngStyle"],["class","p-menubar-start",4,"ngIf"],["tabindex","0","role","button","class","p-menubar-button",3,"click","keydown",4,"ngIf"],[3,"itemClick","menuFocus","menuBlur","menuKeydown","itemMouseEnter","items","itemTemplate","menuId","root","baseZIndex","autoZIndex","mobileActive","autoDisplay","ariaLabel","ariaLabelledBy","focusedItemId","submenuiconTemplate","activeItemPath"],["class","p-menubar-end",4,"ngIf","ngIfElse"],[1,"p-menubar-start"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",1,"p-menubar-button",3,"click","keydown"],[4,"ngIf"],[1,"p-menubar-end"]],template:function(n,i){if(n&1){let r=Re();ve(),I(0,"div",3),v(1,Bh,2,1,"div",4)(2,Vh,4,7,"a",5),I(3,"p-menubarSub",6,0),pe("itemClick",function(a){return W(r),q(i.onItemClick(a))})("menuFocus",function(a){return W(r),q(i.onMenuFocus(a))})("menuBlur",function(a){return W(r),q(i.onMenuBlur(a))})("menuKeydown",function(a){return W(r),q(i.onKeyDown(a))})("itemMouseEnter",function(a){return W(r),q(i.onItemMouseEnter(a))}),C(),v(5,Wh,2,1,"div",7)(6,qh,2,0,"ng-template",null,1,bt),C()}if(n&2){let r=wt(7);B(i.styleClass),d("ngClass",gt(23,Nh,i.queryMatches,i.mobileActive))("ngStyle",i.style),_("data-pc-section","root")("data-pc-name","menubar"),h(),d("ngIf",i.startTemplate||i._startTemplate),h(),d("ngIf",i.model&&i.model.length>0),h(),d("items",i.processedItems)("itemTemplate",i.itemTemplate)("menuId",i.id)("root",!0)("baseZIndex",i.baseZIndex)("autoZIndex",i.autoZIndex)("mobileActive",i.mobileActive)("autoDisplay",i.autoDisplay)("ariaLabel",i.ariaLabel)("ariaLabelledBy",i.ariaLabelledBy)("focusedItemId",i.focused?i.focusedItemId:void 0)("submenuiconTemplate",i.submenuIconTemplate||i._submenuIconTemplate)("activeItemPath",i.activeItemPath()),h(2),d("ngIf",i.endTemplate||i._endTemplate)("ngIfElse",r)}},dependencies:[ce,ze,We,Ke,qe,Ir,Kh,Sr,aa,In,V],encapsulation:2,changeDetection:0})}return e})(),pl=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=K({type:e});static \u0275inj=z({imports:[Gh,V,V]})}return e})();var Qh=({dt:e})=>`
.p-panel {
    border: 1px solid ${e("panel.border.color")};
    border-radius: ${e("panel.border.radius")};
    background: ${e("panel.background")};
    color: ${e("panel.color")};
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${e("panel.header.padding")};
    background: ${e("panel.header.background")};
    color: ${e("panel.header.color")};
    border-style: solid;
    border-width: ${e("panel.header.border.width")};
    border-color: ${e("panel.header.border.color")};
    border-radius: ${e("panel.header.border.radius")};
}

.p-panel-toggleable .p-panel-header {
    padding: ${e("panel.toggleable.header.padding")};
}

.p-panel-title {
    line-height: 1;
    font-weight: ${e("panel.title.font.weight")};
}

.p-panel-content {
    padding: ${e("panel.content.padding")};
}

.p-panel-footer {
    padding: ${e("panel.footer.padding")};
}

/* For PrimeNG */
.p-panel-toggleable.p-panel-expanded > .p-panel-content-container:not(.ng-animating) {
    overflow: visible
}

.p-panel-toggleable .p-panel-content-container {
    overflow: hidden;
}
`,Zh={root:({props:e})=>["p-panel p-component",{"p-panel-toggleable":e.toggleable}],header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},hl=(()=>{class e extends G{name="panel";theme=Qh;classes=Zh;static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Yh=["header"],Jh=["icons"],Xh=["content"],ef=["footer"],tf=["headericons"],nf=["contentWrapper"],of=["*",[["p-header"]],[["p-footer"]]],rf=["*","p-header","p-footer"],sf=(e,o)=>({"p-panel p-component":!0,"p-panel-toggleable":e,"p-panel-expanded":o}),af=e=>({transitionParams:e,height:"0",opacity:"0"}),lf=e=>({value:"hidden",params:e}),cf=e=>({transitionParams:e,height:"*",opacity:"1"}),uf=e=>({value:"visible",params:e}),df=(e,o,t)=>({"p-panel-icons-start":e,"p-panel-icons-end":o,"p-panel-icons-center":t}),pf=e=>({$implicit:e});function hf(e,o){if(e&1&&(I(0,"span",12),we(1),C()),e&2){let t=m(2);_("id",t.id+"_header"),h(),Oe(t._header)}}function ff(e,o){e&1&&ee(0)}function mf(e,o){}function gf(e,o){e&1&&v(0,mf,0,0,"ng-template")}function bf(e,o){if(e&1&&x(0,"span"),e&2){let t=m(6);B(t.expandIcon)}}function yf(e,o){e&1&&x(0,"MinusIcon")}function vf(e,o){if(e&1&&(J(0),v(1,bf,1,2,"span",16)(2,yf,1,0,"MinusIcon",14),X()),e&2){let t=m(5);h(),d("ngIf",t.expandIcon),h(),d("ngIf",!t.expandIcon)}}function _f(e,o){if(e&1&&x(0,"span"),e&2){let t=m(6);B(t.collapseIcon)}}function If(e,o){e&1&&x(0,"PlusIcon")}function Sf(e,o){if(e&1&&(J(0),v(1,_f,1,2,"span",16)(2,If,1,0,"PlusIcon",14),X()),e&2){let t=m(5);h(),d("ngIf",t.collapseIcon),h(),d("ngIf",!t.collapseIcon)}}function Cf(e,o){if(e&1&&(J(0),v(1,vf,3,2,"ng-container",14)(2,Sf,3,2,"ng-container",14),X()),e&2){let t=m(4);h(),d("ngIf",!t.collapsed),h(),d("ngIf",t.collapsed)}}function wf(e,o){}function Tf(e,o){e&1&&v(0,wf,0,0,"ng-template")}function Ef(e,o){if(e&1&&v(0,Cf,3,2,"ng-container",14)(1,Tf,1,0,null,15),e&2){let t=m(3);d("ngIf",!t.headerIconsTemplate&&!t._headerIconsTemplate&&!(t.toggleButtonProps!=null&&t.toggleButtonProps.icon)),h(),d("ngTemplateOutlet",t.headerIconsTemplate||t._headerIconsTemplate)("ngTemplateOutletContext",le(3,pf,t.collapsed))}}function xf(e,o){if(e&1){let t=Re();I(0,"p-button",13),pe("click",function(i){W(t);let r=m(2);return q(r.onIconClick(i))})("keydown",function(i){W(t);let r=m(2);return q(r.onKeyDown(i))}),v(1,Ef,2,5,"ng-template",null,1,bt),C()}if(e&2){let t=m(2);d("text",!0)("rounded",!0)("buttonProps",t.toggleButtonProps),_("id",t.id+"_header")("aria-label",t.buttonAriaLabel)("aria-controls",t.id+"_content")("aria-expanded",!t.collapsed)}}function Rf(e,o){if(e&1){let t=Re();I(0,"div",8),pe("click",function(i){W(t);let r=m();return q(r.onHeaderClick(i))}),v(1,hf,2,2,"span",9),oe(2,1),v(3,ff,1,0,"ng-container",6),I(4,"div",10),v(5,gf,1,0,null,6)(6,xf,3,7,"p-button",11),C()()}if(e&2){let t=m();_("id",t.id+"-titlebar"),h(),d("ngIf",t._header),h(2),d("ngTemplateOutlet",t.headerTemplate||t._headerTemplate),h(),d("ngClass",ss(6,df,t.iconPos==="start",t.iconPos==="end",t.iconPos==="center")),h(),d("ngTemplateOutlet",t.iconTemplate||t._iconTemplate),h(),d("ngIf",t.toggleable)}}function Of(e,o){e&1&&ee(0)}function Mf(e,o){e&1&&ee(0)}function Af(e,o){if(e&1&&(I(0,"div",17),oe(1,2),v(2,Mf,1,0,"ng-container",6),C()),e&2){let t=m();h(2),d("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var Lf=(()=>{class e extends ne{toggleable;_header;collapsed;style;styleClass;iconPos="end";expandIcon;collapseIcon;showHeader=!0;toggler="icon";transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";toggleButtonProps;collapsedChange=new H;onBeforeToggle=new H;onAfterToggle=new H;footerFacet;animating;headerTemplate;iconTemplate;contentTemplate;footerTemplate;headerIconsTemplate;_headerTemplate;_iconTemplate;_contentTemplate;_footerTemplate;_headerIconsTemplate;contentWrapperViewChild;id=Ie("pn_id_");get buttonAriaLabel(){return this._header}_componentStyle=g(hl);onHeaderClick(t){this.toggler==="header"&&this.toggle(t)}onIconClick(t){this.toggler==="icon"&&this.toggle(t)}toggle(t){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:t,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand():this.collapse()),this.cd.markForCheck(),t.preventDefault()}expand(){this.collapsed=!1,this.collapsedChange.emit(this.collapsed),this.updateTabIndex()}collapse(){this.collapsed=!0,this.collapsedChange.emit(this.collapsed),this.updateTabIndex()}getBlockableElement(){return this.el.nativeElement.children[0]}updateTabIndex(){this.contentWrapperViewChild&&this.contentWrapperViewChild.nativeElement.querySelectorAll('input, button, select, a, textarea, [tabindex]:not([tabindex="-1"])').forEach(n=>{this.collapsed?n.setAttribute("tabindex","-1"):n.removeAttribute("tabindex")})}onKeyDown(t){(t.code==="Enter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}onToggleDone(t){this.animating=!1,this.onAfterToggle.emit({originalEvent:t,collapsed:this.collapsed})}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;case"icons":this._iconTemplate=t.template;break;case"headericons":this._headerIconsTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=E(e)))(i||e)}})();static \u0275cmp=P({type:e,selectors:[["p-panel"]],contentQueries:function(n,i,r){if(n&1&&(L(r,Ti,5),L(r,Yh,4),L(r,Jh,4),L(r,Xh,4),L(r,ef,4),L(r,tf,4),L(r,it,4)),n&2){let s;R(s=O())&&(i.footerFacet=s.first),R(s=O())&&(i.headerTemplate=s.first),R(s=O())&&(i.iconTemplate=s.first),R(s=O())&&(i.contentTemplate=s.first),R(s=O())&&(i.footerTemplate=s.first),R(s=O())&&(i.headerIconsTemplate=s.first),R(s=O())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&Ht(nf,5),n&2){let r;R(r=O())&&(i.contentWrapperViewChild=r.first)}},inputs:{toggleable:[2,"toggleable","toggleable",M],_header:[0,"header","_header"],collapsed:[2,"collapsed","collapsed",M],style:"style",styleClass:"styleClass",iconPos:"iconPos",expandIcon:"expandIcon",collapseIcon:"collapseIcon",showHeader:[2,"showHeader","showHeader",M],toggler:"toggler",transitionOptions:"transitionOptions",toggleButtonProps:"toggleButtonProps"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},features:[re([hl]),de,k],ngContentSelectors:rf,decls:8,vars:25,consts:[["contentWrapper",""],["icon",""],[3,"ngClass","ngStyle"],["class","p-panel-header",3,"click",4,"ngIf"],["role","region",1,"p-panel-content-container",3,"id"],[1,"p-panel-content"],[4,"ngTemplateOutlet"],["class","p-panel-footer",4,"ngIf"],[1,"p-panel-header",3,"click"],["class","p-panel-title",4,"ngIf"],[1,"p-panel-icons",3,"ngClass"],["severity","secondary","type","button","role","button","styleClass","p-panel-header-icon p-panel-toggler p-link",3,"text","rounded","buttonProps","click","keydown",4,"ngIf"],[1,"p-panel-title"],["severity","secondary","type","button","role","button","styleClass","p-panel-header-icon p-panel-toggler p-link",3,"click","keydown","text","rounded","buttonProps"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class",4,"ngIf"],[1,"p-panel-footer"]],template:function(n,i){if(n&1){let r=Re();ve(of),I(0,"div",2),v(1,Rf,7,10,"div",3),I(2,"div",4),pe("@panelContent.done",function(a){return W(r),q(i.onToggleDone(a))}),I(3,"div",5,0),oe(5),v(6,Of,1,0,"ng-container",6),C(),v(7,Af,3,1,"div",7),C()()}n&2&&(B(i.styleClass),d("ngClass",gt(14,sf,i.toggleable,!i.collapsed&&i.toggleable))("ngStyle",i.style),_("id",i.id)("data-pc-name","panel"),h(),d("ngIf",i.showHeader),h(),d("id",i.id+"_content")("@panelContent",i.collapsed?le(19,lf,le(17,af,i.animating?i.transitionOptions:"0ms")):le(23,uf,le(21,cf,i.animating?i.transitionOptions:"0ms"))),_("aria-labelledby",i.id+"_header")("aria-hidden",i.collapsed)("tabindex",i.collapsed?"-1":void 0),h(4),d("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),h(),d("ngIf",i.footerFacet||i.footerTemplate||i._footerTemplate))},dependencies:[ce,ze,We,Ke,qe,Oi,Ri,qt,Fo,V],encapsulation:2,data:{animation:[mi("panelContent",[Rt("hidden",xt({height:"0"})),Rt("void",xt({height:"{{height}}"}),{params:{height:"0"}}),Rt("visible",xt({height:"*"})),Ot("visible <=> hidden",[Et("{{transitionParams}}")]),Ot("void => hidden",Et("{{transitionParams}}")),Ot("void => visible",Et("{{transitionParams}}"))])]},changeDetection:0})}return e})(),fl=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=K({type:e});static \u0275inj=z({imports:[Lf,V,V]})}return e})();var ml=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=K({type:e});static \u0275inj=z({imports:[qt,ha,ma,pl,fl]})};export{ws as a,om as b,rm as c,yd as d,Ir as e,Po as f,ig as g,Fo as h,fu as i,Hu as j,Gh as k,Lf as l,ml as m};
