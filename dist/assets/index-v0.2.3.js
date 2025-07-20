(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function e(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=e(i);fetch(i.href,l)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=globalThis,kt=Ue.ShadowRoot&&(Ue.ShadyCSS===void 0||Ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Dt=Symbol(),Lt=new WeakMap;let $r=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==Dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(kt&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=Lt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Lt.set(e,t))}return t}toString(){return this.cssText}};const un=r=>new $r(typeof r=="string"?r:r+"",void 0,Dt),te=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((o,i,l)=>o+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[l+1],r[0]);return new $r(e,r,Dt)},fn=(r,t)=>{if(kt)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const o=document.createElement("style"),i=Ue.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=e.cssText,r.appendChild(o)}},zt=kt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return un(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:gn,defineProperty:hn,getOwnPropertyDescriptor:pn,getOwnPropertyNames:mn,getOwnPropertySymbols:vn,getPrototypeOf:yn}=Object,ae=globalThis,Rt=ae.trustedTypes,wn=Rt?Rt.emptyScript:"",nt=ae.reactiveElementPolyfillSupport,Se=(r,t)=>r,xt={toAttribute(r,t){switch(t){case Boolean:r=r?wn:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},_r=(r,t)=>!gn(r,t),Ht={attribute:!0,type:String,converter:xt,reflect:!1,hasChanged:_r};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ae.litPropertyMetadata??(ae.litPropertyMetadata=new WeakMap);class ve extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ht){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);i!==void 0&&hn(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){const{get:i,set:l}=pn(this.prototype,t)??{get(){return this[e]},set(d){this[e]=d}};return{get(){return i==null?void 0:i.call(this)},set(d){const y=i==null?void 0:i.call(this);l.call(this,d),this.requestUpdate(t,y,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ht}static _$Ei(){if(this.hasOwnProperty(Se("elementProperties")))return;const t=yn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Se("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Se("properties"))){const e=this.properties,o=[...mn(e),...vn(e)];for(const i of o)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,i]of e)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const i=this._$Eu(e,o);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)e.unshift(zt(i))}else t!==void 0&&e.push(zt(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fn(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostConnected)==null?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostDisconnected)==null?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){var l;const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(i!==void 0&&o.reflect===!0){const d=(((l=o.converter)==null?void 0:l.toAttribute)!==void 0?o.converter:xt).toAttribute(e,o.type);this._$Em=t,d==null?this.removeAttribute(i):this.setAttribute(i,d),this._$Em=null}}_$AK(t,e){var l;const o=this.constructor,i=o._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const d=o.getPropertyOptions(i),y=typeof d.converter=="function"?{fromAttribute:d.converter}:((l=d.converter)==null?void 0:l.fromAttribute)!==void 0?d.converter:xt;this._$Em=i,this[i]=y.fromAttribute(e,d.type),this._$Em=null}}requestUpdate(t,e,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??_r)(this[t],e))return;this.P(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[l,d]of this._$Ep)this[l]=d;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[l,d]of i)d.wrapped!==!0||this._$AL.has(l)||this[l]===void 0||this.P(l,this[l],d)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(i=>{var l;return(l=i.hostUpdate)==null?void 0:l.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(o=>{var i;return(i=o.hostUpdated)==null?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}ve.elementStyles=[],ve.shadowRootOptions={mode:"open"},ve[Se("elementProperties")]=new Map,ve[Se("finalized")]=new Map,nt==null||nt({ReactiveElement:ve}),(ae.reactiveElementVersions??(ae.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=globalThis,Ge=Me.trustedTypes,Bt=Ge?Ge.createPolicy("lit-html",{createHTML:r=>r}):void 0,Cr="$lit$",oe=`lit$${Math.random().toFixed(9).slice(2)}$`,Sr="?"+oe,xn=`<${Sr}>`,fe=document,Ae=()=>fe.createComment(""),Te=r=>r===null||typeof r!="object"&&typeof r!="function",$t=Array.isArray,Fn=r=>$t(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ot=`[ 	
\f\r]`,Ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jt=/-->/g,qt=/>/g,be=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vt=/'/g,Ut=/"/g,Mr=/^(?:script|style|textarea|title)$/i,kn=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),O=kn(1),ge=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),Gt=new WeakMap,ue=fe.createTreeWalker(fe,129);function Er(r,t){if(!$t(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bt!==void 0?Bt.createHTML(t):t}const Dn=(r,t)=>{const e=r.length-1,o=[];let i,l=t===2?"<svg>":t===3?"<math>":"",d=Ce;for(let y=0;y<e;y++){const g=r[y];let w,c,p=-1,M=0;for(;M<g.length&&(d.lastIndex=M,c=d.exec(g),c!==null);)M=d.lastIndex,d===Ce?c[1]==="!--"?d=jt:c[1]!==void 0?d=qt:c[2]!==void 0?(Mr.test(c[2])&&(i=RegExp("</"+c[2],"g")),d=be):c[3]!==void 0&&(d=be):d===be?c[0]===">"?(d=i??Ce,p=-1):c[1]===void 0?p=-2:(p=d.lastIndex-c[2].length,w=c[1],d=c[3]===void 0?be:c[3]==='"'?Ut:Vt):d===Ut||d===Vt?d=be:d===jt||d===qt?d=Ce:(d=be,i=void 0);const _=d===be&&r[y+1].startsWith("/>")?" ":"";l+=d===Ce?g+xn:p>=0?(o.push(w),g.slice(0,p)+Cr+g.slice(p)+oe+_):g+oe+(p===-2?y:_)}return[Er(r,l+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class Pe{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let l=0,d=0;const y=t.length-1,g=this.parts,[w,c]=Dn(t,e);if(this.el=Pe.createElement(w,o),ue.currentNode=this.el.content,e===2||e===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=ue.nextNode())!==null&&g.length<y;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(Cr)){const M=c[d++],_=i.getAttribute(p).split(oe),I=/([.?@])?(.*)/.exec(M);g.push({type:1,index:l,name:I[2],strings:_,ctor:I[1]==="."?_n:I[1]==="?"?Cn:I[1]==="@"?Sn:Ke}),i.removeAttribute(p)}else p.startsWith(oe)&&(g.push({type:6,index:l}),i.removeAttribute(p));if(Mr.test(i.tagName)){const p=i.textContent.split(oe),M=p.length-1;if(M>0){i.textContent=Ge?Ge.emptyScript:"";for(let _=0;_<M;_++)i.append(p[_],Ae()),ue.nextNode(),g.push({type:2,index:++l});i.append(p[M],Ae())}}}else if(i.nodeType===8)if(i.data===Sr)g.push({type:2,index:l});else{let p=-1;for(;(p=i.data.indexOf(oe,p+1))!==-1;)g.push({type:7,index:l}),p+=oe.length-1}l++}}static createElement(t,e){const o=fe.createElement("template");return o.innerHTML=t,o}}function xe(r,t,e=r,o){var d,y;if(t===ge)return t;let i=o!==void 0?(d=e._$Co)==null?void 0:d[o]:e._$Cl;const l=Te(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==l&&((y=i==null?void 0:i._$AO)==null||y.call(i,!1),l===void 0?i=void 0:(i=new l(r),i._$AT(r,e,o)),o!==void 0?(e._$Co??(e._$Co=[]))[o]=i:e._$Cl=i),i!==void 0&&(t=xe(r,i._$AS(r,t.values),i,o)),t}class $n{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=((t==null?void 0:t.creationScope)??fe).importNode(e,!0);ue.currentNode=i;let l=ue.nextNode(),d=0,y=0,g=o[0];for(;g!==void 0;){if(d===g.index){let w;g.type===2?w=new Ye(l,l.nextSibling,this,t):g.type===1?w=new g.ctor(l,g.name,g.strings,this,t):g.type===6&&(w=new Mn(l,this,t)),this._$AV.push(w),g=o[++y]}d!==(g==null?void 0:g.index)&&(l=ue.nextNode(),d++)}return ue.currentNode=fe,i}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class Ye{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=xe(this,t,e),Te(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==ge&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Fn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&Te(this._$AH)?this._$AA.nextSibling.data=t:this.T(fe.createTextNode(t)),this._$AH=t}$(t){var l;const{values:e,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Pe.createElement(Er(o.h,o.h[0]),this.options)),o);if(((l=this._$AH)==null?void 0:l._$AD)===i)this._$AH.p(e);else{const d=new $n(i,this),y=d.u(this.options);d.p(e),this.T(y),this._$AH=d}}_$AC(t){let e=Gt.get(t.strings);return e===void 0&&Gt.set(t.strings,e=new Pe(t)),e}k(t){$t(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const l of t)i===e.length?e.push(o=new Ye(this.O(Ae()),this.O(Ae()),this,this.options)):o=e[i],o._$AI(l),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Ke{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,l){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=l,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=E}_$AI(t,e=this,o,i){const l=this.strings;let d=!1;if(l===void 0)t=xe(this,t,e,0),d=!Te(t)||t!==this._$AH&&t!==ge,d&&(this._$AH=t);else{const y=t;let g,w;for(t=l[0],g=0;g<l.length-1;g++)w=xe(this,y[o+g],e,g),w===ge&&(w=this._$AH[g]),d||(d=!Te(w)||w!==this._$AH[g]),w===E?t=E:t!==E&&(t+=(w??"")+l[g+1]),this._$AH[g]=w}d&&!i&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _n extends Ke{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}class Cn extends Ke{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class Sn extends Ke{constructor(t,e,o,i,l){super(t,e,o,i,l),this.type=5}_$AI(t,e=this){if((t=xe(this,t,e,0)??E)===ge)return;const o=this._$AH,i=t===E&&o!==E||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,l=t!==E&&(o===E||i);i&&this.element.removeEventListener(this.name,this,o),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Mn{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){xe(this,t)}}const at=Me.litHtmlPolyfillSupport;at==null||at(Pe,Ye),(Me.litHtmlVersions??(Me.litHtmlVersions=[])).push("3.2.1");const En=(r,t,e)=>{const o=(e==null?void 0:e.renderBefore)??t;let i=o._$litPart$;if(i===void 0){const l=(e==null?void 0:e.renderBefore)??null;o._$litPart$=i=new Ye(t.insertBefore(Ae(),l),l,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ie extends ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=En(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ge}}var Dr;ie._$litElement$=!0,ie.finalized=!0,(Dr=globalThis.litElementHydrateSupport)==null||Dr.call(globalThis,{LitElement:ie});const it=globalThis.litElementPolyfillSupport;it==null||it({LitElement:ie});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const An={ATTRIBUTE:1},Tn=r=>(...t)=>({_$litDirective$:r,values:t});class Pn{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=Tn(class extends Pn{constructor(r){var t;if(super(r),r.type!==An.ATTRIBUTE||r.name!=="class"||((t=r.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var o,i;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(l=>l!=="")));for(const l in t)t[l]&&!((o=this.nt)!=null&&o.has(l))&&this.st.add(l);return this.render(t)}const e=r.element.classList;for(const l of this.st)l in t||(e.remove(l),this.st.delete(l));for(const l in t){const d=!!t[l];d===this.st.has(l)||(i=this.nt)!=null&&i.has(l)||(d?(e.add(l),this.st.add(l)):(e.remove(l),this.st.delete(l)))}return ge}});class Ar{static get styles(){return te`
            *, ::after, ::before {
                box-sizing: border-box
            }

            hr {
                margin: 1rem 0;
                color: inherit;
                border: 0;
                border-top: var(--bs-border-width) solid;
                opacity: .25
            }

            p {
                margin-top: 0;
                margin-bottom: 1rem
            }

            abbr[title] {
                -webkit-text-decoration: underline dotted;
                text-decoration: underline dotted;
                cursor: help;
                -webkit-text-decoration-skip-ink: none;
                text-decoration-skip-ink: none
            }

            address {
                margin-bottom: 1rem;
                font-style: normal;
                line-height: inherit
            }

            ol, ul {
                padding-left: 2rem
            }

            dl, ol, ul {
                margin-top: 0;
                margin-bottom: 1rem
            }

            ol ol, ol ul, ul ol, ul ul {
                margin-bottom: 0
            }

            dt {
                font-weight: 600
            }

            dd {
                margin-bottom: .5rem;
                margin-left: 0
            }

            blockquote {
                margin: 0 0 1rem
            }

            b, strong {
                font-weight: 800
            }

            sub, sup {
                position: relative;
                font-size: .75em;
                line-height: 0;
                vertical-align: baseline
            }

            sub {
                bottom: -.25em
            }

            sup {
                top: -.5em
            }

            a {
                color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));
                text-decoration: underline
            }

            a:hover {
                --bs-link-color-rgb: var(--bs-link-hover-color-rgb)
            }

            a:not([href]):not([class]), a:not([href]):not([class]):hover {
                color: inherit;
                text-decoration: none
            }

            code, kbd, pre, samp {
                font-family: var(--bs-font-monospace);
                font-size: 1em
            }

            pre {
                display: block;
                margin-top: 0;
                margin-bottom: 1rem;
                overflow: auto;
                font-size: .875em
            }

            pre code {
                font-size: inherit;
                color: inherit;
                word-break: normal
            }

            code {
                font-size: .875em;
                color: var(--bs-code-color);
                word-wrap: break-word
            }

            a > code {
                color: inherit
            }

            kbd {
                padding: .1875rem .375rem;
                font-size: .875em;
                color: var(--bs-body-bg);
                background-color: var(--bs-body-color);
                border-radius: 6px
            }

            kbd kbd {
                padding: 0;
                font-size: 1em
            }

            figure {
                margin: 0 0 1rem
            }

            img, svg {
                vertical-align: middle
            }

            table {
                caption-side: bottom;
                border-collapse: collapse
            }

            caption {
                padding-top: .5rem;
                padding-bottom: .5rem;
                color: #808588;
                text-align: left
            }

            th {
                text-align: inherit;
                text-align: -webkit-match-parent
            }

            tbody, td, tfoot, th, thead, tr {
                border-color: inherit;
                border-style: solid;
                border-width: 0
            }

            label {
                display: inline-block
            }

            button {
                border-radius: 0
            }

            button:focus:not(:focus-visible) {
                outline: 0
            }

            button, input, optgroup, select, textarea {
                margin: 0;
                font-family: inherit;
                font-size: inherit;
                line-height: inherit
            }

            button, select {
                text-transform: none
            }

            [role=button] {
                cursor: pointer
            }

            select {
                word-wrap: normal
            }

            select:disabled {
                opacity: 1
            }

            [list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator {
                display: none !important
            }

            [type=button], [type=reset], [type=submit], button {
                -webkit-appearance: button
            }

            [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
                cursor: pointer
            }

            ::-moz-focus-inner {
                padding: 0;
                border-style: none
            }

            textarea {
                resize: vertical
            }

            fieldset {
                min-width: 0;
                padding: 0;
                margin: 0;
                border: 0
            }

            legend {
                float: left;
                width: 100%;
                padding: 0;
                margin-bottom: .5rem;
                font-size: calc(1.275rem + .3vw);
                line-height: inherit
            }

            @media (min-width: 1200px) {
                legend {
                    font-size: 1.5rem
                }
            }

            legend + * {
                clear: left
            }

            ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-fields-wrapper, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-text, ::-webkit-datetime-edit-year-field {
                padding: 0
            }

            ::-webkit-inner-spin-button {
                height: auto
            }

            [type=search] {
                -webkit-appearance: textfield;
                outline-offset: -2px
            }

            ::-webkit-search-decoration {
                -webkit-appearance: none
            }

            ::-webkit-color-swatch-wrapper {
                padding: 0
            }

            ::file-selector-button {
                font: inherit;
                -webkit-appearance: button
            }

            output {
                display: inline-block
            }

            iframe {
                border: 0
            }

            summary {
                display: list-item;
                cursor: pointer
            }

            progress {
                vertical-align: baseline
            }

            [hidden] {
                display: none !important
            }

            .container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
                //--bs-gutter-x: 20px;
                --bs-gutter-y: 0;
                width: 100%;
                padding-right: calc(var(--bs-gutter-x) * .5);
                padding-left: calc(var(--bs-gutter-x) * .5);
                margin-right: auto;
                margin-left: auto
            }

            @media (min-width: 576px) {
                .container, .container-sm {
                    max-width: 540px
                }
            }

            @media (min-width: 768px) {
                .container, .container-md, .container-sm {
                    max-width: 720px
                }
            }

            @media (min-width: 992px) {
                .container, .container-lg, .container-md, .container-sm {
                    max-width: 960px
                }
            }

            @media (min-width: 1200px) {
                .container, .container-lg, .container-md, .container-sm, .container-xl {
                    max-width: 1140px
                }
            }

            @media (min-width: 1660px) {
                .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
                    max-width: 1320px
                }
            }

            :root {
                --bs-breakpoint-xs: 0;
                --bs-breakpoint-sm: 576px;
                --bs-breakpoint-md: 768px;
                --bs-breakpoint-lg: 992px;
                --bs-breakpoint-xl: 1200px;
                --bs-breakpoint-xxl: 1660px;
                --bs-breakpoint-xxxl: 1900px
            }

            [data-bs-theme=dark] {
                --bs-component-bg: #28292b;
                --bs-component-bg-rgb: 40, 41, 43;
                --bs-component-color: #aaaaaa;
                --bs-component-color-rgb: 170, 170, 170;
                --bs-app-header-bg: #28292b;
                --bs-app-header-color: #FFFFFF;
                --bs-app-header-color-rgb: 255, 255, 255;
                --bs-app-header-border-color: rgba(185, 185, 185, 0.1);
                --bs-app-sidebar-link-color: #aaaaaa;
                --bs-app-sidebar-link-hover-color: #aaaaaa;
                --bs-app-sidebar-link-hover-bg: #444950;
                --bs-app-sidebar-link-active-color: #66a3ff;
                --bs-app-sidebar-link-active-bg: rgba(var(--bs-theme-rgb), 0.5);
                --bs-app-sidebar-mobile-bg: rgba(51, 55, 58, 0.98);
                --bs-theme-bg-subtle: #001433
            }

            body:not(.app-init) * {
                transition: none !important;
                animation: none !important
            }

            .form-label {
                margin-bottom: .5rem
            }

            .col-form-label {
                padding-top: calc(.375rem + var(--bs-border-width));
                padding-bottom: calc(.375rem + var(--bs-border-width));
                margin-bottom: 0;
                font-size: inherit;
                line-height: 1.5
            }

            .col-form-label-lg {
                padding-top: calc(.5rem + var(--bs-border-width));
                padding-bottom: calc(.5rem + var(--bs-border-width));
                font-size: 1.09375rem
            }

            .col-form-label-sm {
                padding-top: calc(.25rem + var(--bs-border-width));
                padding-bottom: calc(.25rem + var(--bs-border-width));
                font-size: .765625rem
            }

            /* 기존 form-control 스타일 (공통) */

            .form-control {
                display: block;
                width: 100%;
                padding: .375rem .75rem;
                font-size: .875rem;
                font-weight: 400;
                line-height: 1.5;
                color: var(--bs-body-color);
                appearance: none;
                background-color: var(--bs-component-bg);
                background-clip: padding-box;
                border: var(--bs-border-width) solid var(--bs-border-color);
                border-radius: 8px;
                transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
            }

            /* form-left-control은 공통 form-control 스타일을 기반으로 추가 속성만 포함 */

            .form-left-control {
                text-align: left; /* 왼쪽 정렬 */
            }

            @media (prefers-reduced-motion: reduce) {
                .form-control {
                    transition: none
                }
            }

            .form-control[type=file] {
                overflow: hidden
            }

            .form-control[type=file]:not(:disabled):not([readonly]) {
                cursor: pointer
            }

            .form-control:focus {
                color: var(--bs-body-color);
                background-color: var(--bs-component-bg);
                outline: 0;
                border-color: #80b3ff;
                box-shadow: 0 0 0 .25rem rgba(0, 102, 255, .25)
            }

            .form-control::-webkit-date-and-time-value {
                min-width: 85px;
                height: 1.5em;
                margin: 0
            }

            .form-control::-webkit-datetime-edit {
                display: block;
                padding: 0
            }

            .form-control::-moz-placeholder {
                color: var(--bs-secondary-color);
                opacity: 1
            }

            .form-control::placeholder {
                color: var(--bs-secondary-color);
                opacity: 1
            }

            .form-control:disabled {
                background-color: var(--bs-form-control-disabled-bg);
                opacity: 1
            }

            .form-control::file-selector-button {
                padding: .375rem .75rem;
                margin: -.375rem -.75rem;
                margin-inline-end: .75rem;
                color: var(--bs-body-color);
                background-color: var(--bs-tertiary-bg);
                pointer-events: none;
                border-color: inherit;
                border-style: solid;
                border-width: 0;
                border-inline-end-width: var(--bs-border-width);
                border-radius: 0;
                transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
            }

            @media (prefers-reduced-motion: reduce) {
                .form-control::file-selector-button {
                    transition: none
                }
            }

            .form-control:hover:not(:disabled):not([readonly])::file-selector-button {
                background-color: var(--bs-border-color)
            }

            .form-control-plaintext {
                display: block;
                width: 100%;
                padding: .375rem 0;
                margin-bottom: 0;
                line-height: 1.5;
                color: var(--bs-body-color);
                background-color: transparent;
                border: solid transparent;
                border-width: var(--bs-border-width) 0
            }

            .form-control-plaintext:focus {
                outline: 0
            }

            .form-control-plaintext.form-control-lg, .form-control-plaintext.form-control-sm {
                padding-right: 0;
                padding-left: 0
            }

            .form-control-sm {
                min-height: calc(1.5em + .5rem + calc(var(--bs-border-width) * 2));
                padding: .25rem .5rem;
                font-size: .765625rem;
                border-radius: 6px
            }

            .form-control-sm::file-selector-button {
                padding: .25rem .5rem;
                margin: -.25rem -.5rem;
                margin-inline-end: .5rem
            }

            .form-control-lg {
                min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));
                padding: .5rem 1rem;
                font-size: 1.09375rem;
                border-radius: 12px
            }

            .form-control-lg::file-selector-button {
                padding: .5rem 1rem;
                margin: -.5rem -1rem;
                margin-inline-end: 1rem
            }

            textarea.form-control {
                min-height: calc(1.5em + .75rem + calc(var(--bs-border-width) * 2))
            }

            textarea.form-control-sm {
                min-height: calc(1.5em + .5rem + calc(var(--bs-border-width) * 2))
            }

            textarea.form-control-lg {
                min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2))
            }

            .form-control-color {
                width: 3rem;
                height: calc(1.5em + .75rem + calc(var(--bs-border-width) * 2));
                padding: .375rem
            }

            .form-control-color:not(:disabled):not([readonly]) {
                cursor: pointer
            }

            .form-control-color::-moz-color-swatch {
                border: 0 !important;
                border-radius: 8px
            }

            .form-control-color::-webkit-color-swatch {
                border: 0 !important;
                border-radius: 8px
            }

            .form-control-color.form-control-sm {
                height: calc(1.5em + .5rem + calc(var(--bs-border-width) * 2))
            }

            .form-control-color.form-control-lg {
                height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2))
            }

            .form-select {
                --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%2326292b' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
                display: block;
                width: 100%;
                padding: .375rem 2.25rem .375rem .75rem;
                font-size: .875rem;
                font-weight: 400;
                line-height: 1.5;
                color: var(--bs-body-color);
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                background-color: var(--bs-component-bg);
                background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none);
                background-repeat: no-repeat;
                background-position: right .75rem center;
                background-size: 16px 12px;
                border: var(--bs-border-width) solid var(--bs-border-color);
                border-radius: 8px;
                transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out
            }

            @media (prefers-reduced-motion: reduce) {
                .form-select {
                    transition: none
                }
            }

            .form-select:focus {
                border-color: #80b3ff;
                outline: 0;
                box-shadow: 0 0 0 .25rem rgba(0, 102, 255, .25)
            }

            .form-select[multiple], .form-select[size]:not([size="1"]) {
                padding-right: .75rem;
                background-image: none
            }

            .form-select:disabled {
                background-color: var(--bs-form-control-disabled-bg)
            }

            .form-select:-moz-focusring {
                color: transparent;
                text-shadow: 0 0 0 var(--bs-body-color)
            }

            .form-select-sm {
                padding-top: .25rem;
                padding-bottom: .25rem;
                padding-left: .5rem;
                font-size: .765625rem;
                border-radius: 6px
            }

            .form-select-lg {
                padding-top: .5rem;
                padding-bottom: .5rem;
                padding-left: 1rem;
                font-size: 1.09375rem;
                border-radius: 12px
            }

            [data-bs-theme=dark] .form-select {
                --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23aaaaaa' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")
            }

            .form-check {
                display: block;
                min-height: 1.3em;
                padding-left: 1.8em;
                margin-bottom: .125rem
            }

            .form-check .form-check-input {
                float: left;
                margin-left: -1.8em
            }

            .form-check-reverse {
                padding-right: 1.8em;
                padding-left: 0;
                text-align: right
            }

            .form-check-reverse .form-check-input {
                float: right;
                margin-right: -1.8em;
                margin-left: 0
            }

            .form-check-input {
                --bs-form-check-bg: var(--bs-component-bg);
                flex-shrink: 0;
                width: 1.3em;
                height: 1.3em;
                margin-top: .1em;
                vertical-align: top;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                background-color: var(--bs-form-check-bg);
                background-image: var(--bs-form-check-bg-image);
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                border: var(--bs-border-width) solid var(--bs-border-color);
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact
            }

            .form-check-input[type=checkbox] {
                border-radius: .25em
            }

            .form-check-input[type=radio] {
                border-radius: 50%
            }

            .form-check-input:active {
                filter: brightness(90%)
            }

            .form-check-input:focus {
                border-color: #80b3ff;
                outline: 0;
                box-shadow: 0 0 0 .25rem rgba(0, 102, 255, .25)
            }

            .form-check-input:checked {
                background-color: #06f;
                border-color: #06f
            }

            .form-check-input:checked[type=checkbox] {
                --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e")
            }

            .form-check-input:checked[type=radio] {
                --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23FFFFFF'/%3e%3c/svg%3e")
            }

            .form-check-input[type=checkbox]:indeterminate {
                background-color: #06f;
                border-color: #06f;
                --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e")
            }

            .form-check-input:disabled {
                pointer-events: none;
                filter: none;
                opacity: .5
            }

            .form-check-input:disabled ~ .form-check-label, .form-check-input[disabled] ~ .form-check-label {
                cursor: default;
                opacity: .5
            }

            .form-switch {
                padding-left: 2.8em
            }

            .form-switch .form-check-input {
                --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
                width: 2.3em;
                margin-left: -2.8em;
                background-image: var(--bs-form-switch-bg);
                background-position: left center;
                border-radius: 2.3em;
                transition: background-position .15s ease-in-out
            }

            @media (prefers-reduced-motion: reduce) {
                .form-switch .form-check-input {
                    transition: none
                }
            }

            .form-switch .form-check-input:focus {
                --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2380b3ff'/%3e%3c/svg%3e")
            }

            .form-switch .form-check-input:checked {
                background-position: right center;
                --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23FFFFFF'/%3e%3c/svg%3e")
            }

            .form-switch.form-check-reverse {
                padding-right: 2.8em;
                padding-left: 0
            }

            .form-switch.form-check-reverse .form-check-input {
                margin-right: -2.8em;
                margin-left: 0
            }

            .form-check-inline {
                display: inline-block;
                margin-right: 1rem
            }

            .btn-check {
                position: absolute;
                clip: rect(0, 0, 0, 0);
                pointer-events: none
            }

            .btn-check:disabled + .btn, .btn-check[disabled] + .btn {
                pointer-events: none;
                filter: none;
                opacity: .65
            }

            [data-bs-theme=dark] .form-switch .form-check-input:not(:checked):not(:focus) {
                --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.25%29'/%3e%3c/svg%3e")
            }

            .form-range {
                width: 100%;
                height: 1.5rem;
                padding: 0;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                background-color: transparent
            }

            .form-range:focus {
                outline: 0
            }

            .form-range:focus::-webkit-slider-thumb {
                box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 .25rem rgba(0, 102, 255, .25)
            }

            .form-range:focus::-moz-range-thumb {
                box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 .25rem rgba(0, 102, 255, .25)
            }

            .form-range::-moz-focus-outer {
                border: 0
            }

            .form-range::-webkit-slider-thumb {
                width: 1rem;
                height: 1rem;
                margin-top: -.25rem;
                -webkit-appearance: none;
                appearance: none;
                background-color: #06f;
                border: 0;
                border-radius: 1rem;
                -webkit-transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
                transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
            }

            @media (prefers-reduced-motion: reduce) {
                .form-range::-webkit-slider-thumb {
                    -webkit-transition: none;
                    transition: none
                }
            }

            .form-range::-webkit-slider-thumb:active {
                background-color: #b3d1ff
            }

            .form-range::-webkit-slider-runnable-track {
                width: 100%;
                height: .5rem;
                color: transparent;
                cursor: pointer;
                background-color: var(--bs-tertiary-bg);
                border-color: transparent;
                border-radius: 1rem
            }

            .form-range::-moz-range-thumb {
                width: 1rem;
                height: 1rem;
                -moz-appearance: none;
                appearance: none;
                background-color: #06f;
                border: 0;
                border-radius: 1rem;
                -moz-transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
                transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
            }

            @media (prefers-reduced-motion: reduce) {
                .form-range::-moz-range-thumb {
                    -moz-transition: none;
                    transition: none
                }
            }

            .form-range::-moz-range-thumb:active {
                background-color: #b3d1ff
            }

            .form-range::-moz-range-track {
                width: 100%;
                height: .5rem;
                color: transparent;
                cursor: pointer;
                background-color: var(--bs-tertiary-bg);
                border-color: transparent;
                border-radius: 1rem
            }

            .form-range:disabled {
                pointer-events: none
            }

            .form-range:disabled::-webkit-slider-thumb {
                background-color: var(--bs-secondary-color)
            }

            .form-range:disabled::-moz-range-thumb {
                background-color: var(--bs-secondary-color)
            }

            .form-floating {
                position: relative
            }

            .form-floating > .form-control, .form-floating > .form-control-plaintext, .form-floating > .form-select {
                height: calc(3.5rem + calc(var(--bs-border-width) * 2));
                min-height: calc(3.5rem + calc(var(--bs-border-width) * 2));
                line-height: 1.25
            }

            .form-floating > label {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;
                height: 100%;
                padding: 1rem .75rem;
                overflow: hidden;
                text-align: start;
                text-overflow: ellipsis;
                white-space: nowrap;
                pointer-events: none;
                border: var(--bs-border-width) solid transparent;
                transform-origin: 0 0;
                transition: opacity .1s ease-in-out, transform .1s ease-in-out
            }

            @media (prefers-reduced-motion: reduce) {
                .form-floating > label {
                    transition: none
                }
            }

            .form-floating > .form-control, .form-floating > .form-control-plaintext {
                padding: 1rem .75rem
            }

            .form-floating > .form-control-plaintext::-moz-placeholder, .form-floating > .form-control::-moz-placeholder {
                color: transparent
            }

            .form-floating > .form-control-plaintext::placeholder, .form-floating > .form-control::placeholder {
                color: transparent
            }

            .form-floating > .form-control-plaintext:not(:-moz-placeholder-shown), .form-floating > .form-control:not(:-moz-placeholder-shown) {
                padding-top: 1.625rem;
                padding-bottom: .625rem
            }

            .form-floating > .form-control-plaintext:focus, .form-floating > .form-control-plaintext:not(:placeholder-shown), .form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {
                padding-top: 1.625rem;
                padding-bottom: .625rem
            }

            .form-floating > .form-control-plaintext:-webkit-autofill, .form-floating > .form-control:-webkit-autofill {
                padding-top: 1.625rem;
                padding-bottom: .625rem
            }

            .form-floating > .form-select {
                padding-top: 1.625rem;
                padding-bottom: .625rem
            }

            .form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
                color: rgba(var(--bs-body-color-rgb), .65);
                transform: scale(.85) translateY(-.5rem) translateX(.15rem)
            }

            .form-floating > .form-control-plaintext ~ label, .form-floating > .form-control:focus ~ label, .form-floating > .form-control:not(:placeholder-shown) ~ label, .form-floating > .form-select ~ label {
                color: rgba(var(--bs-body-color-rgb), .65);
                transform: scale(.85) translateY(-.5rem) translateX(.15rem)
            }

            .form-floating > .form-control:not(:-moz-placeholder-shown) ~ label::after {
                position: absolute;
                inset: 1rem .375rem;
                z-index: -1;
                height: 1.875em;
                content: "";
                background-color: var(--bs-component-bg);
                border-radius: 8px
            }

            .form-floating > .form-control-plaintext ~ label::after, .form-floating > .form-control:focus ~ label::after, .form-floating > .form-control:not(:placeholder-shown) ~ label::after, .form-floating > .form-select ~ label::after {
                position: absolute;
                inset: 1rem .375rem;
                z-index: -1;
                height: 1.875em;
                content: "";
                background-color: var(--bs-component-bg);
                border-radius: 8px
            }

            .form-floating > .form-control:-webkit-autofill ~ label {
                color: rgba(var(--bs-body-color-rgb), .65);
                transform: scale(.85) translateY(-.5rem) translateX(.15rem)
            }

            .form-floating > .form-control-plaintext ~ label {
                border-width: var(--bs-border-width) 0
            }

            .form-floating > .form-control:disabled ~ label, .form-floating > :disabled ~ label {
                color: #404548
            }

            .form-floating > .form-control:disabled ~ label::after, .form-floating > :disabled ~ label::after {
                background-color: var(--bs-form-control-disabled-bg)
            }

            .input-group {
                position: relative;
                display: flex;
                flex-wrap: wrap;
                align-items: stretch;
                width: 100%
            }

            .input-group > .form-control, .input-group > .form-floating, .input-group > .form-select {
                position: relative;
                flex: 1 1 auto;
                width: 1%;
                min-width: 0
            }

            .input-group > .form-control:focus, .input-group > .form-floating:focus-within, .input-group > .form-select:focus {
                z-index: 5
            }

            .input-group .btn {
                position: relative;
                z-index: 2
            }

            .input-group .btn:focus {
                z-index: 5
            }

            .input-group-text {
                display: flex;
                align-items: center;
                padding: .375rem .75rem;
                font-size: .875rem;
                font-weight: 400;
                line-height: 1.5;
                color: var(--bs-body-color);
                text-align: center;
                white-space: nowrap;
                background-color: var(--bs-tertiary-bg);
                border: var(--bs-border-width) solid var(--bs-border-color);
                border-radius: 8px
            }

            .input-group-lg > .btn, .input-group-lg > .form-control, .input-group-lg > .form-select, .input-group-lg > .input-group-text {
                padding: .5rem 1rem;
                font-size: 1.09375rem;
                border-radius: 12px
            }

            .input-group-sm > .btn, .input-group-sm > .form-control, .input-group-sm > .form-select, .input-group-sm > .input-group-text {
                padding: .25rem .5rem;
                font-size: .765625rem;
                border-radius: 6px
            }

            .input-group-lg > .form-select, .input-group-sm > .form-select {
                padding-right: 3rem
            }

            .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3), .input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-control, .input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-select, .input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating) {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0
            }

            .input-group.has-validation > .dropdown-toggle:nth-last-child(n+4), .input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-control, .input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-select, .input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating) {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0
            }

            .input-group > .form-floating:not(:first-child) > .form-control, .input-group > .form-floating:not(:first-child) > .form-select {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0
            }

            .valid-tooltip {
                position: absolute;
                top: 100%;
                z-index: 5;
                display: none;
                max-width: 100%;
                padding: .25rem .5rem;
                margin-top: .1rem;
                font-size: .765625rem;
                color: #fff;
                background-color: var(--bs-success);
                border-radius: var(--bs-border-radius)
            }

            .form-control.is-valid, .was-validated .form-control:valid {
                border-color: var(--bs-success);
                padding-right: calc(1.5em + .75rem);
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%231b8835' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
                background-repeat: no-repeat;
                background-position: right calc(.375em + .1875rem) center;
                background-size: calc(.75em + .375rem) calc(.75em + .375rem)
            }

            .form-control.is-valid:focus, .was-validated .form-control:valid:focus {
                border-color: var(--bs-success);
                box-shadow: 0 0 0 .25rem rgba(var(--bs-success-rgb), .25)
            }

            .was-validated textarea.form-control:valid, textarea.form-control.is-valid {
                padding-right: calc(1.5em + .75rem);
                background-position: top calc(.375em + .1875rem) right calc(.375em + .1875rem)
            }

            .form-select.is-valid, .was-validated .form-select:valid {
                border-color: var(--bs-success)
            }

            .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"], .was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"] {
                --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%231b8835' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
                padding-right: 4.125rem;
                background-position: right .75rem center, center right 2.25rem;
                background-size: 16px 12px, calc(.75em + .375rem) calc(.75em + .375rem)
            }

            .form-select.is-valid:focus, .was-validated .form-select:valid:focus {
                border-color: var(--bs-success);
                box-shadow: 0 0 0 .25rem rgba(var(--bs-success-rgb), .25)
            }

            .form-control-color.is-valid, .was-validated .form-control-color:valid {
                width: calc(3rem + calc(1.5em + .75rem))
            }

            .form-check-input.is-valid, .was-validated .form-check-input:valid {
                border-color: var(--bs-success)
            }

            .form-check-input.is-valid:checked, .was-validated .form-check-input:valid:checked {
                background-color: var(--bs-success-text)
            }

            .form-check-input.is-valid:focus, .was-validated .form-check-input:valid:focus {
                box-shadow: 0 0 0 .25rem rgba(var(--bs-success-rgb), .25)
            }

            .form-check-input.is-valid ~ .form-check-label, .was-validated .form-check-input:valid ~ .form-check-label {
                color: var(--bs-success-text)
            }

            .input-group > .form-control:not(:focus).is-valid, .input-group > .form-floating:not(:focus-within).is-valid, .input-group > .form-select:not(:focus).is-valid, .was-validated .input-group > .form-control:not(:focus):valid, .was-validated .input-group > .form-floating:not(:focus-within):valid, .was-validated .input-group > .form-select:not(:focus):valid {
                z-index: 3
            }

            .invalid-tooltip {
                position: absolute;
                top: 100%;
                z-index: 5;
                display: none;
                max-width: 100%;
                padding: .25rem .5rem;
                margin-top: .1rem;
                font-size: .765625rem;
                color: #fff;
                background-color: var(--bs-danger);
                border-radius: var(--bs-border-radius)
            }

            .form-control.is-invalid, .was-validated .form-control:invalid {
                border-color: var(--bs-danger);
                padding-right: calc(1.5em + .75rem);
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23df1414'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23df1414' stroke='none'/%3e%3c/svg%3e");
                background-repeat: no-repeat;
                background-position: right calc(.375em + .1875rem) center;
                background-size: calc(.75em + .375rem) calc(.75em + .375rem)
            }

            .form-control.is-invalid:focus, .was-validated .form-control:invalid:focus {
                border-color: var(--bs-danger);
                box-shadow: 0 0 0 .25rem rgba(var(--bs-danger-rgb), .25)
            }

            .was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
                padding-right: calc(1.5em + .75rem);
                background-position: top calc(.375em + .1875rem) right calc(.375em + .1875rem)
            }

            .form-select.is-invalid, .was-validated .form-select:invalid {
                border-color: var(--bs-danger)
            }

            .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"], .was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"] {
                --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23df1414'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23df1414' stroke='none'/%3e%3c/svg%3e");
                padding-right: 4.125rem;
                background-position: right .75rem center, center right 2.25rem;
                background-size: 16px 12px, calc(.75em + .375rem) calc(.75em + .375rem)
            }

            .form-select.is-invalid:focus, .was-validated .form-select:invalid:focus {
                border-color: var(--bs-danger);
                box-shadow: 0 0 0 .25rem rgba(var(--bs-danger-rgb), .25)
            }

            .form-control-color.is-invalid, .was-validated .form-control-color:invalid {
                width: calc(3rem + calc(1.5em + .75rem))
            }

            .form-check-input.is-invalid, .was-validated .form-check-input:invalid {
                border-color: var(--bs-danger)
            }

            .form-check-input.is-invalid:checked, .was-validated .form-check-input:invalid:checked {
                background-color: var(--bs-danger-text)
            }

            .form-check-input.is-invalid:focus, .was-validated .form-check-input:invalid:focus {
                box-shadow: 0 0 0 .25rem rgba(var(--bs-danger-rgb), .25)
            }

            .form-check-input.is-invalid ~ .form-check-label, .was-validated .form-check-input:invalid ~ .form-check-label {
                color: var(--bs-danger-text)
            }

            .input-group > .form-control:not(:focus).is-invalid, .input-group > .form-floating:not(:focus-within).is-invalid, .input-group > .form-select:not(:focus).is-invalid, .was-validated .input-group > .form-control:not(:focus):invalid, .was-validated .input-group > .form-floating:not(:focus-within):invalid, .was-validated .input-group > .form-select:not(:focus):invalid {
                z-index: 4
            }

            /* (1) SCSS에서 & .typeahead__field는 "부모요소 .typeahead__field"로 확장 */

            .parent-selector .typeahead__field .typeahead__query input {
                background: none;
                border-color: var(--input-border-color);
                /* $enable-rtl = false 시 가정: 0 $border-radius $border-radius 0 */
                border-radius: 0 var(--border-radius) var(--border-radius) 0;
            }

            .parent-selector .typeahead__field .typeahead__query input:focus {
                border-color: var(--input-focus-border-color);
                box-shadow: var(--input-focus-box-shadow);
            }

            .parent-selector .typeahead__field .typeahead__query .typeahead__cancel-button {
                color: transparent;
                top: 0;
                bottom: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 100;
            }

            .parent-selector .typeahead__field .typeahead__query .typeahead__cancel-button:before {
                content: '\\f00d';
                position: absolute;
                /* var(--#{$prefix}body-color) => var(--prefix-body-color) 로 가정 */
                color: var(--prefix-body-color);
                /* @include fontawesome(); => 직접 font-family, font-weight 등 정의 필요 */
                font-family: "FontAwesome";
            }

            .btn {
                --bs-btn-padding-x: 0.75rem;
                --bs-btn-padding-y: 0.375rem;
                --bs-btn-font-size: 0.875rem;
                --bs-btn-font-weight: 400;
                --bs-btn-line-height: 1.5;
                --bs-btn-color: var(--bs-body-color);
                --bs-btn-bg: transparent;
                --bs-btn-border-width: var(--bs-border-width);
                --bs-btn-border-color: transparent;
                --bs-btn-border-radius: 8px;
                --bs-btn-hover-border-color: transparent;
                --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
                --bs-btn-disabled-opacity: 0.65;
                --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
                display: inline-block;
                padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
                font-family: var(--bs-btn-font-family);
                font-size: var(--bs-btn-font-size);
                font-weight: var(--bs-btn-font-weight);
                line-height: var(--bs-btn-line-height);
                color: var(--bs-btn-color);
                text-align: center;
                text-decoration: none;
                vertical-align: middle;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
                border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
                border-radius: var(--bs-btn-border-radius);
                background-color: var(--bs-btn-bg);
                transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
            }

            @media (prefers-reduced-motion: reduce) {
                .btn {
                    transition: none
                }
            }

            .btn:hover {
                color: var(--bs-btn-hover-color);
                background-color: var(--bs-btn-hover-bg);
                border-color: var(--bs-btn-hover-border-color)
            }

            .btn-check + .btn:hover {
                color: var(--bs-btn-color);
                background-color: var(--bs-btn-bg);
                border-color: var(--bs-btn-border-color)
            }

            .btn:focus-visible {
                color: var(--bs-btn-hover-color);
                background-color: var(--bs-btn-hover-bg);
                border-color: var(--bs-btn-hover-border-color);
                outline: 0;
                box-shadow: var(--bs-btn-focus-box-shadow)
            }

            .btn-check:focus-visible + .btn {
                border-color: var(--bs-btn-hover-border-color);
                outline: 0;
                box-shadow: var(--bs-btn-focus-box-shadow)
            }

            .btn-check:checked + .btn, .btn.active, .btn.show, .btn:first-child:active, :not(.btn-check) + .btn:active {
                color: var(--bs-btn-active-color);
                background-color: var(--bs-btn-active-bg);
                border-color: var(--bs-btn-active-border-color)
            }

            .btn-check:checked + .btn:focus-visible, .btn.active:focus-visible, .btn.show:focus-visible, .btn:first-child:active:focus-visible, :not(.btn-check) + .btn:active:focus-visible {
                box-shadow: var(--bs-btn-focus-box-shadow)
            }

            .btn-check:checked:focus-visible + .btn {
                box-shadow: var(--bs-btn-focus-box-shadow)
            }

            .btn.disabled, .btn:disabled, fieldset:disabled .btn {
                color: var(--bs-btn-disabled-color);
                pointer-events: none;
                background-color: var(--bs-btn-disabled-bg);
                border-color: var(--bs-btn-disabled-border-color);
                opacity: var(--bs-btn-disabled-opacity)
            }

            .btn-default {
                --bs-btn-color: var(--bs-component-color);
                --bs-btn-bg: var(--bs-component-bg);
                --bs-btn-border-color: var(--bs-border-color);
                --bs-btn-hover-color: var(--bs-component-color);
                --bs-btn-hover-bg: var(--bs-border-color);
                --bs-btn-hover-border-color: var(--bs-border-color);
                --bs-btn-focus-shadow-rgb: 217, 217, 217;
                --bs-btn-active-color: var(--bs-component-color);
                --bs-btn-active-bg: var(--bs-border-color);
                --bs-btn-active-border-color: var(--bs-border-color);
                --bs-btn-disabled-border-color: var(--bs-border-color);
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #FFFFFF;
            }

            .btn-theme {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #0066ff;
                --bs-btn-border-color: #0066ff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #004dbf;
                --bs-btn-hover-border-color: #004dbf;
                --bs-btn-focus-shadow-rgb: 38, 125, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #0042a6;
                --bs-btn-active-border-color: #0042a6;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #0066ff;
                --bs-btn-disabled-border-color: #0066ff
            }

            .btn-theme-color {
                --bs-btn-color: #000000;
                --bs-btn-bg: #FFFFFF;
                --bs-btn-border-color: #FFFFFF;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: white;
                --bs-btn-hover-border-color: white;
                --bs-btn-focus-shadow-rgb: 217, 217, 217;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: white;
                --bs-btn-active-border-color: white;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #FFFFFF;
                --bs-btn-disabled-border-color: #FFFFFF
            }

            .btn-primary {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #0066ff;
                --bs-btn-border-color: #0066ff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #004dbf;
                --bs-btn-hover-border-color: #004dbf;
                --bs-btn-focus-shadow-rgb: 38, 125, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #0042a6;
                --bs-btn-active-border-color: #0042a6;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #0066ff;
                --bs-btn-disabled-border-color: #0066ff
            }

            .btn-secondary {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #555c60;
                --bs-btn-border-color: #555c60;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #404548;
                --bs-btn-hover-border-color: #404548;
                --bs-btn-focus-shadow-rgb: 111, 116, 120;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #373c3e;
                --bs-btn-active-border-color: #373c3e;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #555c60;
                --bs-btn-disabled-border-color: #555c60
            }

            .btn-orange {
                --bs-btn-color: #ffffff;
                --bs-btn-bg: #ff9f0c;
                --bs-btn-border-color: #ff9f0c;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #ffb749;
                --bs-btn-hover-border-color: #ffb749;
                --bs-btn-focus-shadow-rgb: 217, 135, 10;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #ffc161;
                --bs-btn-active-border-color: #ffc161;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #ff9f0c;
                --bs-btn-disabled-border-color: #ff9f0c
            }

            .btn-light-orange {
                --bs-btn-color: #ffae2d;
                --bs-btn-bg: #fff1dd;
                --bs-btn-border-color: #fff1dd;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #ffdeac;
                --bs-btn-hover-border-color: #ffdeac;
                --bs-btn-focus-shadow-rgb: 217, 135, 10;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #ffdeac;
                --bs-btn-active-border-color: #ffdeac;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #fff1dd;
                --bs-btn-disabled-border-color: #fff1dd
            }

            .btn-danger {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #df1414;
                --bs-btn-border-color: #df1414;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #a70f0f;
                --bs-btn-hover-border-color: #a70f0f;
                --bs-btn-focus-shadow-rgb: 228, 55, 55;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #910d0d;
                --bs-btn-active-border-color: #910d0d;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #df1414;
                --bs-btn-disabled-border-color: #df1414
            }

            .btn-success {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #1b8835;
                --bs-btn-border-color: #1b8835;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #146628;
                --bs-btn-hover-border-color: #146628;
                --bs-btn-focus-shadow-rgb: 61, 154, 83;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #125822;
                --bs-btn-active-border-color: #125822;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #1b8835;
                --bs-btn-disabled-border-color: #1b8835
            }

            .btn-info {
                --bs-btn-color: #000000;
                --bs-btn-bg: #0eb3ff;
                --bs-btn-border-color: #0eb3ff;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #4ac6ff;
                --bs-btn-hover-border-color: #4ac6ff;
                --bs-btn-focus-shadow-rgb: 12, 152, 217;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #62ceff;
                --bs-btn-active-border-color: #62ceff;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #0eb3ff;
                --bs-btn-disabled-border-color: #0eb3ff
            }

            .btn-dark {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #161616;
                --bs-btn-border-color: #161616;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #505050;
                --bs-btn-hover-border-color: #505050;
                --bs-btn-focus-shadow-rgb: 57, 57, 57;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #686868;
                --bs-btn-active-border-color: #686868;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #161616;
                --bs-btn-disabled-border-color: #161616
            }

            .btn-black {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #000000;
                --bs-btn-border-color: #000000;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: black;
                --bs-btn-hover-border-color: black;
                --bs-btn-focus-shadow-rgb: 38, 38, 38;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: black;
                --bs-btn-active-border-color: black;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #000000;
                --bs-btn-disabled-border-color: #000000
            }

            .btn-white {
                --bs-btn-color: #000000;
                --bs-btn-bg: #FFFFFF;
                --bs-btn-border-color: #FFFFFF;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: white;
                --bs-btn-hover-border-color: white;
                --bs-btn-focus-shadow-rgb: 217, 217, 217;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: white;
                --bs-btn-active-border-color: white;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #FFFFFF;
                --bs-btn-disabled-border-color: #FFFFFF
            }

            .btn-purple {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #a104ff;
                --bs-btn-border-color: #a104ff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #7903bf;
                --bs-btn-hover-border-color: #7903bf;
                --bs-btn-focus-shadow-rgb: 175, 42, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #6903a6;
                --bs-btn-active-border-color: #6903a6;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #a104ff;
                --bs-btn-disabled-border-color: #a104ff
            }

            .btn-indigo {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #612bff;
                --bs-btn-border-color: #612bff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #4920bf;
                --bs-btn-hover-border-color: #4920bf;
                --bs-btn-focus-shadow-rgb: 121, 75, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #3f1ca6;
                --bs-btn-active-border-color: #3f1ca6;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #612bff;
                --bs-btn-disabled-border-color: #612bff
            }

            .btn-red {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #df1414;
                --bs-btn-border-color: #df1414;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #a70f0f;
                --bs-btn-hover-border-color: #a70f0f;
                --bs-btn-focus-shadow-rgb: 228, 55, 55;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #910d0d;
                --bs-btn-active-border-color: #910d0d;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #df1414;
                --bs-btn-disabled-border-color: #df1414
            }

            .btn-pink {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #df1578;
                --bs-btn-border-color: #df1578;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #a7105a;
                --bs-btn-hover-border-color: #a7105a;
                --bs-btn-focus-shadow-rgb: 228, 56, 140;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #910e4e;
                --bs-btn-active-border-color: #910e4e;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #df1578;
                --bs-btn-disabled-border-color: #df1578
            }

            .btn-green {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #1b8835;
                --bs-btn-border-color: #1b8835;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #146628;
                --bs-btn-hover-border-color: #146628;
                --bs-btn-focus-shadow-rgb: 61, 154, 83;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #125822;
                --bs-btn-active-border-color: #125822;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #1b8835;
                --bs-btn-disabled-border-color: #1b8835
            }

            .btn-yellow {
                --bs-btn-color: #000000;
                --bs-btn-bg: #f9e80d;
                --bs-btn-border-color: #f9e80d;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #fbee4a;
                --bs-btn-hover-border-color: #fbee4a;
                --bs-btn-focus-shadow-rgb: 212, 197, 11;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #fbf062;
                --bs-btn-active-border-color: #fbf062;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #f9e80d;
                --bs-btn-disabled-border-color: #f9e80d
            }

            .btn-teal {
                --bs-btn-color: #000000;
                --bs-btn-bg: #3cd2a5;
                --bs-btn-border-color: #3cd2a5;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #6dddbc;
                --bs-btn-hover-border-color: #6dddbc;
                --bs-btn-focus-shadow-rgb: 51, 179, 140;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #80e2c5;
                --bs-btn-active-border-color: #80e2c5;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #3cd2a5;
                --bs-btn-disabled-border-color: #3cd2a5
            }

            .btn-muted {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #555c60;
                --bs-btn-border-color: #555c60;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #404548;
                --bs-btn-hover-border-color: #404548;
                --bs-btn-focus-shadow-rgb: 111, 116, 120;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #373c3e;
                --bs-btn-active-border-color: #373c3e;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #555c60;
                --bs-btn-disabled-border-color: #555c60
            }

            .btn-light {
                --bs-btn-color: #000000;
                --bs-btn-bg: #d5d6d7;
                --bs-btn-border-color: #d5d6d7;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #a0a1a1;
                --bs-btn-hover-border-color: #a0a1a1;
                --bs-btn-focus-shadow-rgb: 181, 182, 183;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #8a8b8c;
                --bs-btn-active-border-color: #8a8b8c;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #d5d6d7;
                --bs-btn-disabled-border-color: #d5d6d7
            }

            .btn-lime {
                --bs-btn-color: #000000;
                --bs-btn-bg: #81f32d;
                --bs-btn-border-color: #81f32d;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #a1f662;
                --bs-btn-hover-border-color: #a1f662;
                --bs-btn-focus-shadow-rgb: 110, 207, 38;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #adf777;
                --bs-btn-active-border-color: #adf777;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #81f32d;
                --bs-btn-disabled-border-color: #81f32d
            }

            .btn-gray-100 {
                --bs-btn-color: #000000;
                --bs-btn-bg: #d5d6d7;
                --bs-btn-border-color: #d5d6d7;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #e0e0e1;
                --bs-btn-hover-border-color: #e0e0e1;
                --bs-btn-focus-shadow-rgb: 181, 182, 183;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #e4e4e5;
                --bs-btn-active-border-color: #e4e4e5;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #d5d6d7;
                --bs-btn-disabled-border-color: #d5d6d7
            }

            .btn-gray-200 {
                --bs-btn-color: #000000;
                --bs-btn-bg: #b3b6b7;
                --bs-btn-border-color: #b3b6b7;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #c6c8c9;
                --bs-btn-hover-border-color: #c6c8c9;
                --bs-btn-focus-shadow-rgb: 152, 155, 156;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #ced0d0;
                --bs-btn-active-border-color: #ced0d0;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #b3b6b7;
                --bs-btn-disabled-border-color: #b3b6b7
            }

            .btn-gray-300 {
                --bs-btn-color: #000000;
                --bs-btn-bg: #999da0;
                --bs-btn-border-color: #999da0;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #b3b6b8;
                --bs-btn-hover-border-color: #b3b6b8;
                --bs-btn-focus-shadow-rgb: 130, 133, 136;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #bdbfc1;
                --bs-btn-active-border-color: #bdbfc1;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #999da0;
                --bs-btn-disabled-border-color: #999da0
            }

            .btn-gray-400 {
                --bs-btn-color: #000000;
                --bs-btn-bg: #808588;
                --bs-btn-border-color: #808588;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #a0a4a6;
                --bs-btn-hover-border-color: #a0a4a6;
                --bs-btn-focus-shadow-rgb: 109, 113, 116;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #acb0b2;
                --bs-btn-active-border-color: #acb0b2;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #808588;
                --bs-btn-disabled-border-color: #808588
            }

            .btn-gray-500 {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #555c60;
                --bs-btn-border-color: #555c60;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #404548;
                --bs-btn-hover-border-color: #404548;
                --bs-btn-focus-shadow-rgb: 111, 116, 120;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #373c3e;
                --bs-btn-active-border-color: #373c3e;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #555c60;
                --bs-btn-disabled-border-color: #555c60
            }

            .btn-gray-600 {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #404548;
                --bs-btn-border-color: #404548;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #303436;
                --bs-btn-hover-border-color: #303436;
                --bs-btn-focus-shadow-rgb: 93, 97, 99;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #2a2d2f;
                --bs-btn-active-border-color: #2a2d2f;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #404548;
                --bs-btn-disabled-border-color: #404548
            }

            .btn-gray-700 {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #33373a;
                --bs-btn-border-color: #33373a;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #26292c;
                --bs-btn-hover-border-color: #26292c;
                --bs-btn-focus-shadow-rgb: 82, 85, 88;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #212426;
                --bs-btn-active-border-color: #212426;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #33373a;
                --bs-btn-disabled-border-color: #33373a
            }

            .btn-gray-800 {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #26292b;
                --bs-btn-border-color: #26292b;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #1d1f20;
                --bs-btn-hover-border-color: #1d1f20;
                --bs-btn-focus-shadow-rgb: 71, 73, 75;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #191b1c;
                --bs-btn-active-border-color: #191b1c;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #26292b;
                --bs-btn-disabled-border-color: #26292b
            }

            .btn-gray-900 {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #151718;
                --bs-btn-border-color: #151718;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #101112;
                --bs-btn-hover-border-color: #101112;
                --bs-btn-focus-shadow-rgb: 56, 58, 59;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #0e0f10;
                --bs-btn-active-border-color: #0e0f10;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #151718;
                --bs-btn-disabled-border-color: #151718
            }

            .btn-outline-default {
                --bs-btn-color: #FFFFFF;
                --bs-btn-border-color: #FFFFFF;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #FFFFFF;
                --bs-btn-hover-border-color: #FFFFFF;
                --bs-btn-focus-shadow-rgb: 255, 255, 255;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #FFFFFF;
                --bs-btn-active-border-color: #FFFFFF;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #FFFFFF;
                --bs-gradient: none
            }

            .btn-outline-theme {
                --bs-btn-color: #0066ff;
                --bs-btn-border-color: #0066ff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #0066ff;
                --bs-btn-hover-border-color: #0066ff;
                --bs-btn-focus-shadow-rgb: 0, 102, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #0066ff;
                --bs-btn-active-border-color: #0066ff;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #0066ff;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #0066ff;
                --bs-gradient: none
            }

            .btn-outline-theme-color {
                --bs-btn-color: #FFFFFF;
                --bs-btn-border-color: #FFFFFF;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #FFFFFF;
                --bs-btn-hover-border-color: #FFFFFF;
                --bs-btn-focus-shadow-rgb: 255, 255, 255;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #FFFFFF;
                --bs-btn-active-border-color: #FFFFFF;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #FFFFFF;
                --bs-gradient: none
            }

            .btn-outline-primary {
                --bs-btn-color: #0066ff;
                --bs-btn-border-color: #0066ff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #0066ff;
                --bs-btn-hover-border-color: #0066ff;
                --bs-btn-focus-shadow-rgb: 0, 102, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #0066ff;
                --bs-btn-active-border-color: #0066ff;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #0066ff;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #0066ff;
                --bs-gradient: none
            }

            .btn-outline-secondary {
                --bs-btn-color: #555c60;
                --bs-btn-border-color: #555c60;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #555c60;
                --bs-btn-hover-border-color: #555c60;
                --bs-btn-focus-shadow-rgb: 85, 92, 96;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #555c60;
                --bs-btn-active-border-color: #555c60;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #555c60;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #555c60;
                --bs-gradient: none
            }

            .btn-outline-orange {
                --bs-btn-color: #ff9f0c;
                --bs-btn-border-color: #ff9f0c;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #ff9f0c;
                --bs-btn-hover-border-color: #ff9f0c;
                --bs-btn-focus-shadow-rgb: 255, 159, 12;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #ff9f0c;
                --bs-btn-active-border-color: #ff9f0c;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #ff9f0c;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #ff9f0c;
                --bs-gradient: none
            }

            .btn-outline-light-orange {
                --bs-btn-color: #ff9f0c;
                --bs-btn-border-color: #ffdeac;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #ffdeac;
                --bs-btn-hover-border-color: #ffdeac;
                --bs-btn-focus-shadow-rgb: 255, 159, 12;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #ffdeac;
                --bs-btn-active-border-color: #ffdeac;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #ffdeac;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #ffdeac;
                --bs-gradient: none
            }

            .btn-outline-danger {
                --bs-btn-color: #df1414;
                --bs-btn-border-color: #df1414;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #df1414;
                --bs-btn-hover-border-color: #df1414;
                --bs-btn-focus-shadow-rgb: 223, 20, 20;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #df1414;
                --bs-btn-active-border-color: #df1414;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #df1414;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #df1414;
                --bs-gradient: none
            }

            .btn-outline-success {
                --bs-btn-color: #1b8835;
                --bs-btn-border-color: #1b8835;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #1b8835;
                --bs-btn-hover-border-color: #1b8835;
                --bs-btn-focus-shadow-rgb: 27, 136, 53;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #1b8835;
                --bs-btn-active-border-color: #1b8835;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #1b8835;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #1b8835;
                --bs-gradient: none
            }

            .btn-outline-info {
                --bs-btn-color: #0eb3ff;
                --bs-btn-border-color: #0eb3ff;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #0eb3ff;
                --bs-btn-hover-border-color: #0eb3ff;
                --bs-btn-focus-shadow-rgb: 14, 179, 255;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #0eb3ff;
                --bs-btn-active-border-color: #0eb3ff;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #0eb3ff;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #0eb3ff;
                --bs-gradient: none
            }

            .btn-outline-dark {
                --bs-btn-color: #161616;
                --bs-btn-border-color: #161616;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #161616;
                --bs-btn-hover-border-color: #161616;
                --bs-btn-focus-shadow-rgb: 22, 22, 22;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #161616;
                --bs-btn-active-border-color: #161616;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #161616;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #161616;
                --bs-gradient: none
            }

            .btn-outline-black {
                --bs-btn-color: #000000;
                --bs-btn-border-color: #000000;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #000000;
                --bs-btn-hover-border-color: #000000;
                --bs-btn-focus-shadow-rgb: 0, 0, 0;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #000000;
                --bs-btn-active-border-color: #000000;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #000000;
                --bs-gradient: none
            }

            .btn-outline-white {
                --bs-btn-color: #FFFFFF;
                --bs-btn-border-color: #FFFFFF;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #FFFFFF;
                --bs-btn-hover-border-color: #FFFFFF;
                --bs-btn-focus-shadow-rgb: 255, 255, 255;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #FFFFFF;
                --bs-btn-active-border-color: #FFFFFF;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #FFFFFF;
                --bs-gradient: none
            }

            .btn-outline-purple {
                --bs-btn-color: #a104ff;
                --bs-btn-border-color: #a104ff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #a104ff;
                --bs-btn-hover-border-color: #a104ff;
                --bs-btn-focus-shadow-rgb: 161, 4, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #a104ff;
                --bs-btn-active-border-color: #a104ff;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #a104ff;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #a104ff;
                --bs-gradient: none
            }

            .btn-outline-indigo {
                --bs-btn-color: #612bff;
                --bs-btn-border-color: #612bff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #612bff;
                --bs-btn-hover-border-color: #612bff;
                --bs-btn-focus-shadow-rgb: 97, 43, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #612bff;
                --bs-btn-active-border-color: #612bff;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #612bff;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #612bff;
                --bs-gradient: none
            }

            .btn-outline-red {
                --bs-btn-color: #df1414;
                --bs-btn-border-color: #df1414;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #df1414;
                --bs-btn-hover-border-color: #df1414;
                --bs-btn-focus-shadow-rgb: 223, 20, 20;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #df1414;
                --bs-btn-active-border-color: #df1414;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #df1414;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #df1414;
                --bs-gradient: none
            }

            .btn-outline-pink {
                --bs-btn-color: #df1578;
                --bs-btn-border-color: #df1578;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #df1578;
                --bs-btn-hover-border-color: #df1578;
                --bs-btn-focus-shadow-rgb: 223, 21, 120;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #df1578;
                --bs-btn-active-border-color: #df1578;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #df1578;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #df1578;
                --bs-gradient: none
            }

            .btn-outline-green {
                --bs-btn-color: #1b8835;
                --bs-btn-border-color: #1b8835;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #1b8835;
                --bs-btn-hover-border-color: #1b8835;
                --bs-btn-focus-shadow-rgb: 27, 136, 53;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #1b8835;
                --bs-btn-active-border-color: #1b8835;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #1b8835;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #1b8835;
                --bs-gradient: none
            }

            .btn-outline-yellow {
                --bs-btn-color: #f9e80d;
                --bs-btn-border-color: #f9e80d;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #f9e80d;
                --bs-btn-hover-border-color: #f9e80d;
                --bs-btn-focus-shadow-rgb: 249, 232, 13;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #f9e80d;
                --bs-btn-active-border-color: #f9e80d;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #f9e80d;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #f9e80d;
                --bs-gradient: none
            }

            .btn-outline-teal {
                --bs-btn-color: #3cd2a5;
                --bs-btn-border-color: #3cd2a5;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #3cd2a5;
                --bs-btn-hover-border-color: #3cd2a5;
                --bs-btn-focus-shadow-rgb: 60, 210, 165;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #3cd2a5;
                --bs-btn-active-border-color: #3cd2a5;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #3cd2a5;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #3cd2a5;
                --bs-gradient: none
            }

            .btn-outline-muted {
                --bs-btn-color: #555c60;
                --bs-btn-border-color: #555c60;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #555c60;
                --bs-btn-hover-border-color: #555c60;
                --bs-btn-focus-shadow-rgb: 85, 92, 96;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #555c60;
                --bs-btn-active-border-color: #555c60;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #555c60;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #555c60;
                --bs-gradient: none
            }

            .btn-outline-light {
                --bs-btn-color: #d5d6d7;
                --bs-btn-border-color: #d5d6d7;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #d5d6d7;
                --bs-btn-hover-border-color: #d5d6d7;
                --bs-btn-focus-shadow-rgb: 213, 214, 215;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #d5d6d7;
                --bs-btn-active-border-color: #d5d6d7;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #d5d6d7;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #d5d6d7;
                --bs-gradient: none
            }

            .btn-outline-lime {
                --bs-btn-color: #81f32d;
                --bs-btn-border-color: #81f32d;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #81f32d;
                --bs-btn-hover-border-color: #81f32d;
                --bs-btn-focus-shadow-rgb: 129, 243, 45;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #81f32d;
                --bs-btn-active-border-color: #81f32d;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #81f32d;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #81f32d;
                --bs-gradient: none
            }

            .btn-outline-gray-100 {
                --bs-btn-color: #d5d6d7;
                --bs-btn-border-color: #d5d6d7;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #d5d6d7;
                --bs-btn-hover-border-color: #d5d6d7;
                --bs-btn-focus-shadow-rgb: 213, 214, 215;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #d5d6d7;
                --bs-btn-active-border-color: #d5d6d7;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #d5d6d7;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #d5d6d7;
                --bs-gradient: none
            }

            .btn-outline-gray-200 {
                --bs-btn-color: #b3b6b7;
                --bs-btn-border-color: #b3b6b7;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #b3b6b7;
                --bs-btn-hover-border-color: #b3b6b7;
                --bs-btn-focus-shadow-rgb: 179, 182, 183;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #b3b6b7;
                --bs-btn-active-border-color: #b3b6b7;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #b3b6b7;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #b3b6b7;
                --bs-gradient: none
            }

            .btn-outline-gray-300 {
                --bs-btn-color: #999da0;
                --bs-btn-border-color: #999da0;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #999da0;
                --bs-btn-hover-border-color: #999da0;
                --bs-btn-focus-shadow-rgb: 153, 157, 160;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #999da0;
                --bs-btn-active-border-color: #999da0;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #999da0;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #999da0;
                --bs-gradient: none
            }

            .btn-outline-gray-400 {
                --bs-btn-color: #808588;
                --bs-btn-border-color: #808588;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #808588;
                --bs-btn-hover-border-color: #808588;
                --bs-btn-focus-shadow-rgb: 128, 133, 136;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #808588;
                --bs-btn-active-border-color: #808588;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #808588;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #808588;
                --bs-gradient: none
            }

            .btn-outline-gray-500 {
                --bs-btn-color: #555c60;
                --bs-btn-border-color: #555c60;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #555c60;
                --bs-btn-hover-border-color: #555c60;
                --bs-btn-focus-shadow-rgb: 85, 92, 96;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #555c60;
                --bs-btn-active-border-color: #555c60;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #555c60;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #555c60;
                --bs-gradient: none
            }

            .btn-outline-gray-600 {
                --bs-btn-color: #404548;
                --bs-btn-border-color: #404548;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #404548;
                --bs-btn-hover-border-color: #404548;
                --bs-btn-focus-shadow-rgb: 64, 69, 72;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #404548;
                --bs-btn-active-border-color: #404548;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #404548;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #404548;
                --bs-gradient: none
            }

            .btn-outline-gray-700 {
                --bs-btn-color: #33373a;
                --bs-btn-border-color: #33373a;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #33373a;
                --bs-btn-hover-border-color: #33373a;
                --bs-btn-focus-shadow-rgb: 51, 55, 58;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #33373a;
                --bs-btn-active-border-color: #33373a;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #33373a;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #33373a;
                --bs-gradient: none
            }

            .btn-outline-gray-800 {
                --bs-btn-color: #26292b;
                --bs-btn-border-color: #26292b;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #26292b;
                --bs-btn-hover-border-color: #26292b;
                --bs-btn-focus-shadow-rgb: 38, 41, 43;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #26292b;
                --bs-btn-active-border-color: #26292b;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #26292b;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #26292b;
                --bs-gradient: none
            }

            .btn-outline-gray-900 {
                --bs-btn-color: #151718;
                --bs-btn-border-color: #151718;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #151718;
                --bs-btn-hover-border-color: #151718;
                --bs-btn-focus-shadow-rgb: 21, 23, 24;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #151718;
                --bs-btn-active-border-color: #151718;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #151718;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #151718;
                --bs-gradient: none
            }

            .btn-link {
                --bs-btn-font-weight: 400;
                --bs-btn-color: var(--bs-link-color);
                --bs-btn-bg: transparent;
                --bs-btn-border-color: transparent;
                --bs-btn-hover-color: var(--bs-link-hover-color);
                --bs-btn-hover-border-color: transparent;
                --bs-btn-active-color: var(--bs-link-hover-color);
                --bs-btn-active-border-color: transparent;
                --bs-btn-disabled-color: #404548;
                --bs-btn-disabled-border-color: transparent;
                --bs-btn-box-shadow: 0 0 0 #000;
                --bs-btn-focus-shadow-rgb: 38, 125, 255;
                text-decoration: underline
            }

            .btn-link:focus-visible {
                color: var(--bs-btn-color)
            }

            .btn-link:hover {
                color: var(--bs-btn-hover-color)
            }

            .btn-group-lg > .btn, .btn-lg {
                --bs-btn-padding-y: 0.5rem;
                --bs-btn-padding-x: 1rem;
                --bs-btn-font-size: 1.09375rem;
                --bs-btn-border-radius: 12px
            }

            .btn-group-sm > .btn, .btn-sm {
                --bs-btn-padding-y: 0.25rem;
                --bs-btn-padding-x: 0.5rem;
                --bs-btn-font-size: 0.765625rem;
                --bs-btn-border-radius: 6px
            }

            .fade {
                transition: opacity .15s linear
            }

            @media (prefers-reduced-motion: reduce) {
                .fade {
                    transition: none
                }
            }

            .fade:not(.show) {
                opacity: 0
            }

            .collapse:not(.show) {
                display: none
            }

            .collapsing {
                height: 0;
                overflow: hidden;
                transition: height .35s ease
            }

            @media (prefers-reduced-motion: reduce) {
                .collapsing {
                    transition: none
                }
            }

            .collapsing.collapse-horizontal {
                width: 0;
                height: auto;
                transition: width .35s ease
            }

            @media (prefers-reduced-motion: reduce) {
                .collapsing.collapse-horizontal {
                    transition: none
                }
            }

            .dropdown-toggle::after {
                display: inline-block;
                margin-left: .255em;
                vertical-align: .255em;
                content: "";
                border-top: .3em solid;
                border-right: .3em solid transparent;
                border-bottom: 0;
                border-left: .3em solid transparent
            }

            .dropdown-toggle:empty::after {
                margin-left: 0
            }

            .dropdown-menu[data-bs-popper] {
                top: 100%;
                left: 0;
                margin-top: var(--bs-dropdown-spacer)
            }

            @media (min-width: 576px) {
                .dropdown-menu-sm-start {
                    --bs-position: start
                }

                .dropdown-menu-sm-start[data-bs-popper] {
                    right: auto;
                    left: 0
                }

                .dropdown-menu-sm-end {
                    --bs-position: end
                }

                .dropdown-menu-sm-end[data-bs-popper] {
                    right: 0;
                    left: auto
                }
            }

            @media (min-width: 768px) {
                .dropdown-menu-md-start {
                    --bs-position: start
                }

                .dropdown-menu-md-start[data-bs-popper] {
                    right: auto;
                    left: 0
                }

                .dropdown-menu-md-end {
                    --bs-position: end
                }

                .dropdown-menu-md-end[data-bs-popper] {
                    right: 0;
                    left: auto
                }
            }

            @media (min-width: 992px) {
                .dropdown-menu-lg-start {
                    --bs-position: start
                }

                .dropdown-menu-lg-start[data-bs-popper] {
                    right: auto;
                    left: 0
                }

                .dropdown-menu-lg-end {
                    --bs-position: end
                }

                .dropdown-menu-lg-end[data-bs-popper] {
                    right: 0;
                    left: auto
                }
            }

            @media (min-width: 1200px) {
                .dropdown-menu-xl-start {
                    --bs-position: start
                }

                .dropdown-menu-xl-start[data-bs-popper] {
                    right: auto;
                    left: 0
                }

                .dropdown-menu-xl-end {
                    --bs-position: end
                }

                .dropdown-menu-xl-end[data-bs-popper] {
                    right: 0;
                    left: auto
                }
            }

            @media (min-width: 1660px) {
                .dropdown-menu-xxl-start {
                    --bs-position: start
                }

                .dropdown-menu-xxl-start[data-bs-popper] {
                    right: auto;
                    left: 0
                }

                .dropdown-menu-xxl-end {
                    --bs-position: end
                }

                .dropdown-menu-xxl-end[data-bs-popper] {
                    right: 0;
                    left: auto
                }
            }

            @media (min-width: 1900px) {
                .dropdown-menu-xxxl-start {
                    --bs-position: start
                }

                .dropdown-menu-xxxl-start[data-bs-popper] {
                    right: auto;
                    left: 0
                }

                .dropdown-menu-xxxl-end {
                    --bs-position: end
                }

                .dropdown-menu-xxxl-end[data-bs-popper] {
                    right: 0;
                    left: auto
                }
            }

            .dropdown-menu.show {
                display: block
            }

            .btn-group, .btn-group-vertical {
                position: relative;
                display: inline-flex;
                vertical-align: middle
            }

            .btn-group-vertical > .btn, .btn-group > .btn {
                position: relative;
                flex: 1 1 auto
            }

            .btn-group-vertical > .btn-check:checked + .btn, .btn-group-vertical > .btn-check:focus + .btn, .btn-group-vertical > .btn.active, .btn-group-vertical > .btn:active, .btn-group-vertical > .btn:focus, .btn-group-vertical > .btn:hover, .btn-group > .btn-check:checked + .btn, .btn-group > .btn-check:focus + .btn, .btn-group > .btn.active, .btn-group > .btn:active, .btn-group > .btn:focus, .btn-group > .btn:hover {
                z-index: 1
            }

            .btn-toolbar {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start
            }

            .btn-toolbar .input-group {
                width: auto
            }

            .btn-group {
                border-radius: 8px
            }

            .btn-group > .btn-group:not(:first-child), .btn-group > :not(.btn-check:first-child) + .btn {
                margin-left: calc(var(--bs-border-width) * -1)
            }

            .btn-group > .btn-group:not(:last-child) > .btn, .btn-group > .btn.dropdown-toggle-split:first-child, .btn-group > .btn:not(:last-child):not(.dropdown-toggle) {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0
            }

            .btn-group > .btn-group:not(:first-child) > .btn, .btn-group > .btn:nth-child(n+3), .btn-group > :not(.btn-check) + .btn {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0
            }

            .btn-group-sm > .btn + .dropdown-toggle-split, .btn-sm + .dropdown-toggle-split {
                padding-right: .375rem;
                padding-left: .375rem
            }

            .btn-group-lg > .btn + .dropdown-toggle-split, .btn-lg + .dropdown-toggle-split {
                padding-right: .75rem;
                padding-left: .75rem
            }

            .btn-group-vertical {
                flex-direction: column;
                align-items: flex-start;
                justify-content: center
            }

            .btn-group-vertical > .btn, .btn-group-vertical > .btn-group {
                width: 100%
            }

            .btn-group-vertical > .btn-group:not(:first-child), .btn-group-vertical > .btn:not(:first-child) {
                margin-top: calc(var(--bs-border-width) * -1)
            }

            .btn-group-vertical > .btn-group:not(:last-child) > .btn, .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle) {
                border-bottom-right-radius: 0;
                border-bottom-left-radius: 0
            }

            .btn-group-vertical > .btn-group:not(:first-child) > .btn, .btn-group-vertical > .btn ~ .btn {
                border-top-left-radius: 0;
                border-top-right-radius: 0
            }

            .nav {
                --bs-nav-link-padding-x: 1rem;
                --bs-nav-link-padding-y: 0.5rem;
                --bs-nav-link-color: var(--bs-link-color);
                --bs-nav-link-hover-color: var(--bs-link-hover-color);
                --bs-nav-link-disabled-color: var(--bs-tertiary-color);
                display: flex;
                flex-wrap: wrap;
                padding-left: 0;
                margin-bottom: 0;
                list-style: none
            }

            .nav-link {
                display: block;
                padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
                font-size: var(--bs-nav-link-font-size);
                font-weight: var(--bs-nav-link-font-weight);
                color: var(--bs-nav-link-color);
                text-decoration: none;
                background: 0 0;
                border: 0;
                transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out
            }

            .border-theme {
                border-color: var(--bs-theme) !important
            }

        `}}class On{static get styles(){return te`
            .text-bg-default {
                color: #000 !important;
                background-color: RGBA(var(--bs-default-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-theme {
                color: #fff !important;
                background-color: RGBA(var(--bs-theme-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-theme-color {
                color: #000 !important;
                background-color: RGBA(var(--bs-theme-color-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-primary {
                color: #fff !important;
                background-color: RGBA(var(--bs-primary-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-secondary {
                color: #fff !important;
                background-color: RGBA(var(--bs-secondary-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-warning {
                color: #000 !important;
                background-color: RGBA(var(--bs-warning-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-danger {
                color: #fff !important;
                background-color: RGBA(var(--bs-danger-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-success {
                color: #fff !important;
                background-color: RGBA(var(--bs-success-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-info {
                color: #000 !important;
                background-color: RGBA(var(--bs-info-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-dark {
                color: #fff !important;
                background-color: RGBA(var(--bs-dark-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-black {
                color: #fff !important;
                background-color: RGBA(var(--bs-black-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-white {
                color: #000 !important;
                background-color: RGBA(var(--bs-white-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-purple {
                color: #fff !important;
                background-color: RGBA(var(--bs-purple-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-indigo {
                color: #fff !important;
                background-color: RGBA(var(--bs-indigo-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-red {
                color: #fff !important;
                background-color: RGBA(var(--bs-red-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-pink {
                color: #fff !important;
                background-color: RGBA(var(--bs-pink-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-green {
                color: #fff !important;
                background-color: RGBA(var(--bs-green-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-yellow {
                color: #000 !important;
                background-color: RGBA(var(--bs-yellow-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-teal {
                color: #000 !important;
                background-color: RGBA(var(--bs-teal-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-muted {
                color: #fff !important;
                background-color: RGBA(var(--bs-muted-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-light {
                color: #000 !important;
                background-color: RGBA(var(--bs-light-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-lime {
                color: #000 !important;
                background-color: RGBA(var(--bs-lime-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-gray-100 {
                color: #000 !important;
                background-color: RGBA(var(--bs-gray-100-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-gray-200 {
                color: #000 !important;
                background-color: RGBA(var(--bs-gray-200-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-gray-300 {
                color: #000 !important;
                background-color: RGBA(var(--bs-gray-300-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-gray-400 {
                color: #000 !important;
                background-color: RGBA(var(--bs-gray-400-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-gray-500 {
                color: #fff !important;
                background-color: RGBA(var(--bs-gray-500-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-gray-600 {
                color: #fff !important;
                background-color: RGBA(var(--bs-gray-600-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-gray-700 {
                color: #fff !important;
                background-color: RGBA(var(--bs-gray-700-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-gray-800 {
                color: #fff !important;
                background-color: RGBA(var(--bs-gray-800-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-gray-900 {
                color: #fff !important;
                background-color: RGBA(var(--bs-gray-900-rgb), var(--bs-bg-opacity, 1)) !important
            }


            .text-truncate {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap
            }


            .text-start {
                text-align: left !important
            }

            .text-end {
                text-align: right !important
            }

            .text-center {
                text-align: center !important
            }

            .text-decoration-none {
                text-decoration: none !important
            }

            .text-decoration-underline {
                text-decoration: underline !important
            }

            .text-decoration-line-through {
                text-decoration: line-through !important
            }

            .text-lowercase {
                text-transform: lowercase !important
            }

            .text-uppercase {
                text-transform: uppercase !important
            }

            .text-capitalize {
                text-transform: capitalize !important
            }

            .text-wrap {
                white-space: normal !important
            }

            .text-nowrap {
                white-space: nowrap !important
            }

            .text-break {
                word-wrap: break-word !important;
                word-break: break-word !important
            }

            .text-default {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-default-rgb), var(--bs-text-opacity)) !important
            }

            .text-theme {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-theme-rgb), var(--bs-text-opacity)) !important
            }

            .text-theme-color {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-theme-color-rgb), var(--bs-text-opacity)) !important
            }

            .text-primary {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important
            }

            .text-secondary {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important
            }

            .text-warning {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important
            }

            .text-danger {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important
            }

            .text-success {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important
            }

            .text-info {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important
            }

            .text-dark {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important
            }

            .text-black {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important
            }

            .text-white {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important
            }

            .text-purple {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-purple-rgb), var(--bs-text-opacity)) !important
            }

            .text-indigo {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-indigo-rgb), var(--bs-text-opacity)) !important
            }

            .text-red {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-red-rgb), var(--bs-text-opacity)) !important
            }

            .text-pink {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-pink-rgb), var(--bs-text-opacity)) !important
            }

            .text-green {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-green-rgb), var(--bs-text-opacity)) !important
            }

            .text-yellow {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-yellow-rgb), var(--bs-text-opacity)) !important
            }

            .text-teal {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-teal-rgb), var(--bs-text-opacity)) !important
            }

            .text-muted {
                --bs-text-opacity: 1;
                color: var(--bs-secondary-color) !important
            }

            .text-light {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important
            }

            .text-lime {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-lime-rgb), var(--bs-text-opacity)) !important
            }

            .text-gray-100 {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-gray-100-rgb), var(--bs-text-opacity)) !important
            }

            .text-gray-200 {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-gray-200-rgb), var(--bs-text-opacity)) !important
            }

            .text-gray-300 {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-gray-300-rgb), var(--bs-text-opacity)) !important
            }

            .text-gray-400 {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-gray-400-rgb), var(--bs-text-opacity)) !important
            }

            .text-gray-500 {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-gray-500-rgb), var(--bs-text-opacity)) !important
            }

            .text-gray-600 {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-gray-600-rgb), var(--bs-text-opacity)) !important
            }

            .text-gray-700 {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-gray-700-rgb), var(--bs-text-opacity)) !important
            }

            .text-gray-800 {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-gray-800-rgb), var(--bs-text-opacity)) !important
            }

            .text-gray-900 {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-gray-900-rgb), var(--bs-text-opacity)) !important
            }

            .text-body {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important
            }

            .text-black-50 {
                --bs-text-opacity: 1;
                color: rgba(0, 0, 0, .5) !important
            }

            .text-white-50 {
                --bs-text-opacity: 1;
                color: rgba(255, 255, 255, .5) !important
            }

            .text-body-secondary {
                --bs-text-opacity: 1;
                color: var(--bs-secondary-color) !important
            }

            .text-body-tertiary {
                --bs-text-opacity: 1;
                color: var(--bs-tertiary-color) !important
            }

            .text-body-emphasis {
                --bs-text-opacity: 1;
                color: var(--bs-emphasis-color) !important
            }

            .text-reset {
                --bs-text-opacity: 1;
                color: inherit !important
            }

            .text-opacity-25 {
                --bs-text-opacity: 0.25
            }

            .text-opacity-50 {
                --bs-text-opacity: 0.5
            }

            .text-opacity-75 {
                --bs-text-opacity: 0.75
            }

            .text-opacity-100 {
                --bs-text-opacity: 1
            }

            .text-primary-emphasis {
                color: var(--bs-primary-text-emphasis) !important
            }

            .text-secondary-emphasis {
                color: var(--bs-secondary-text-emphasis) !important
            }

            .text-success-emphasis {
                color: var(--bs-success-text-emphasis) !important
            }

            .text-info-emphasis {
                color: var(--bs-info-text-emphasis) !important
            }

            .text-warning-emphasis {
                color: var(--bs-warning-text-emphasis) !important
            }

            .text-danger-emphasis {
                color: var(--bs-danger-text-emphasis) !important
            }

            .text-light-emphasis {
                color: var(--bs-light-text-emphasis) !important
            }

            .text-dark-emphasis {
                color: var(--bs-dark-text-emphasis) !important
            }


            @media (min-width: 576px) {
                .text-sm-start {
                    text-align: left !important
                }

                .text-sm-end {
                    text-align: right !important
                }

                .text-sm-center {
                    text-align: center !important
                }
            }

            @media (min-width: 768px) {
                

                .text-md-start {
                    text-align: left !important
                }

                .text-md-end {
                    text-align: right !important
                }

                .text-md-center {
                    text-align: center !important
                }
            }

            @media (min-width: 992px) {
                
                .text-lg-start {
                    text-align: left !important
                }

                .text-lg-end {
                    text-align: right !important
                }

                .text-lg-center {
                    text-align: center !important
                }
            }

            @media (min-width: 1200px) {
                
                .text-xl-start {
                    text-align: left !important
                }

                .text-xl-end {
                    text-align: right !important
                }

                .text-xl-center {
                    text-align: center !important
                }
            }

            @media (min-width: 1660px) {
                

                .text-xxl-start {
                    text-align: left !important
                }

                .text-xxl-end {
                    text-align: right !important
                }

                .text-xxl-center {
                    text-align: center !important
                }
            }

            @media (min-width: 1900px) {
                

                .text-xxxl-start {
                    text-align: left !important
                }

                .text-xxxl-end {
                    text-align: right !important
                }

                .text-xxxl-center {
                    text-align: center !important
                }
            }

            .text-gradient {
                -webkit-background-clip: text !important;
                -webkit-text-fill-color: transparent !important
            }

            .theme-default .text-bg-theme {
                color: #000 !important;
                background-color: rgba(255, 255, 255, var(--bs-bg-opacity, 1)) !important
            }


            .text-default-100 {
                --bs-text-opacity: 1;
                color: rgba(255, 255, 255, var(--bs-text-opacity)) !important
            }

            .text-default-600 {
                --bs-text-opacity: 1;
                color: rgba(204, 204, 204, var(--bs-text-opacity)) !important
            }

            .text-default-200 {
                --bs-text-opacity: 1;
                color: rgba(255, 255, 255, var(--bs-text-opacity)) !important
            }

            .text-default-700 {
                --bs-text-opacity: 1;
                color: rgba(153, 153, 153, var(--bs-text-opacity)) !important
            }

            .text-default-300 {
                --bs-text-opacity: 1;
                color: rgba(255, 255, 255, var(--bs-text-opacity)) !important
            }

            .text-default-800 {
                --bs-text-opacity: 1;
                color: rgba(102, 102, 102, var(--bs-text-opacity)) !important
            }

            .text-default-400 {
                --bs-text-opacity: 1;
                color: rgba(255, 255, 255, var(--bs-text-opacity)) !important
            }

            .text-default-900 {
                --bs-text-opacity: 1;
                color: rgba(51, 51, 51, var(--bs-text-opacity)) !important
            }

            .form-text {
                margin-top: .25rem;
                font-size: .875em;
                color: #808588
            }
        `}}class se extends ie{constructor(){super()}setSelector(t){this.selector=t}get getSelector(){return this.selector}getComponent(){return this.shadowRoot.querySelector(this.selector)}getValue(){const t=this.shadowRoot.querySelector(this.selector);return t?t.value:null}setValue(t){const e=this.shadowRoot.querySelector(this.selector);e&&(e.value=t)}addEventListener(t,e,o){this.shadowRoot.querySelector(this.selector).addEventListener(t,e,o)}removeEventListener(t,e,o){this.shadowRoot.querySelector(this.selector).removeEventListener(t,e,o)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o)}}se.styles=[Ar.styles,On.styles];/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=r=>r??E;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var Wt,Kt,st;const Yn={primary:"btn-primary",secondary:"btn-secondary",light:"btn-light",dark:"btn-dark",info:"btn-info",purple:"btn-purple",indigo:"btn-indigo",link:"btn-link",danger:"btn-danger",pink:"btn-pink",orange:"btn-orange","light-orange":"btn-light-orange",yellow:"btn-yellow",lime:"btn-lime",teal:"btn-teal",green:"btn-green",success:"btn-success",theme:"btn-theme","theme-color":"btn-theme-color"},In={primary:"btn-outline-primary",secondary:"btn-outline-secondary",light:"btn-outline-light",dark:"btn-outline-dark",info:"btn-outline-info",purple:"btn-outline-purple",indigo:"btn-outline-indigo",link:"btn-outline-link",danger:"btn-outline-danger",pink:"btn-outline-pink",orange:"btn-outline-orange","light-orange":"btn-outline-light-orange",yellow:"btn-outline-yellow",lime:"btn-outline-lime",teal:"btn-outline-teal",green:"btn-outline-green",success:"btn-outline-success",theme:"btn-outline-theme","theme-color":"btn-outline-theme-color"};Wt=j("l-button"),Wt(Kt=(st=class extends se{constructor(){super(),super.setSelector("button")}static get properties(){return{theme:{type:String},size:{type:String},id:{type:String},name:{type:String},width:{type:String},label:{type:String},value:{type:String},"icon-path":{type:String},outline:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},required:{type:Boolean}}}isValid(){const t=this.getValue().trim(),e=this.required;if(!t&&e)return!1}validate(){this.getValue().trim();const t=this.isValid();this.shadowRoot.querySelector(this.selector).classList.toggle("is-invalid",!t)}checkValidity(){this.validate()}render(){const{outline:t,theme:e,size:o,"icon-path":i,label:l}=this,d="btn",y=t?In[e]:Yn[e],g=o==="large"?"btn-lg":o==="small"?"btn-sm":"",w={[d]:!0,[y||"btn-default"]:!0,[g]:!!g,"has-icon":!!i};return O`
            <button
                    class="${W(w)}"
                    id="${u(this.id)}"
                    name="${u(this.name)}"
                    value="${u(this.value)}"
                    ?disabled="${this.disabled}"
                    ?readonly="${this.readonly}"
                    style="width: ${this.width?this.width:"auto"}"
            >
                ${i?O`<img src="${i}" class="btn-icon" alt="icon" />`:""}
                ${u(l)}
            </button>
        `}},st.styles=[...se.styles,te`
            .btn-icon {
                width: 16px;
                height: 16px;
                fill: currentColor;
            }
        `],st));var Jt,Xt,lt;Jt=j("l-label"),Jt(Xt=(lt=class extends ie{static get properties(){return{label:{type:String},id:{type:String},"label-align":{type:String},"label-width":{type:String},"label-text-align":{type:String},required:{type:String}}}render(){if(!this.label)return"";let t=this["label-align"]&&this["label-align"]==="left";return O`
            <label
                    class="${t&&this.label?"form-left-label":"form-label"}"
                    for="${this.id}"
                    style="
                        width: ${this["label-width"]||"auto"};
                        text-align: ${this["label-text-align"]||"left"}
                    "
            >
                ${this.required=="true"?t?O`<span style="color: #df1414;margin-right: 2px">*</span>${this.label}`:O`${this.label}<span style="color: #df1414;margin-left: 2px">*</span>`:this.label} 
            </label>
        `}},lt.styles=[te`
                label {
                    display: inline-block;
                }

                .form-label {
                    margin-bottom: .5rem
                }

                .col-form-label {
                    padding-top: calc(.375rem + var(--bs-border-width));
                    padding-bottom: calc(.375rem + var(--bs-border-width));
                    margin-bottom: 0;
                    font-size: inherit;
                    line-height: 1.5
                }

                .col-form-label-lg {
                    padding-top: calc(.5rem + var(--bs-border-width));
                    padding-bottom: calc(.5rem + var(--bs-border-width));
                    font-size: 1.09375rem
                }

                .col-form-label-sm {
                    padding-top: calc(.25rem + var(--bs-border-width));
                    padding-bottom: calc(.25rem + var(--bs-border-width));
                    font-size: .765625rem
                }

                .l-label {
                    margin-bottom: .5rem;
                }

                .form-left-label {
                    margin-right: 10px;
                    white-space: nowrap; /* Prevents label text from wrapping */
                }
            `],lt));var Zt,Qt,ct;Zt=j("l-feedback"),Zt(Qt=(ct=class extends ie{static get properties(){return{feedback:{type:String},"feedback-type":{type:String},width:{type:String},"label-align":{type:String},"left-margin":{type:String}}}render(){let t=this["label-align"]&&this["label-align"]==="left";const e={normal:O`<div class="valid-feedback">${this.feedback}</div>`,hint:O`<div class="form-group"><small class="form-hint form-text text-muted">${this.feedback}</small></div>`,error:O`<div class="invalid-feedback">${this.feedback}</div>`};return O`
            <div
                 style="
                    padding-left: calc(${this["left-margin"]} + ${t?"15px":"0px"})
                    ;width: ${this.width?this.width:"auto"}
                    ;display: flex;   
                "
            >
                ${e[this["feedback-type"]]}
                <p slot="count" class="textarea-count">
                    <span class="text-num">0</span><span class="text-num">/100</span>
                </p>
            </div>
        `}},ct.styles=[Ar.styles,te`
                .input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
                    margin-left: calc(var(--bs-border-width) * -1);
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0
                }

                .valid-feedback {
                    width: 100%;
                    margin-top: .25rem;
                    font-size: .875em;
                    color: var(--bs-success-text);
                    flex: 9;
                    white-space: nowrap; /* 텍스트를 단일 줄로 표시 */
                    overflow: hidden;    /* 넘치는 내용을 숨김 */
                    text-overflow: ellipsis; /* 넘치는 부분을 '...'으로 표시 */
                }

                .is-valid ~ .valid-feedback, .is-valid ~ .valid-tooltip, .was-validated :valid ~ .valid-feedback, .was-validated :valid ~ .valid-tooltip {
                    display: block;
                }

                .form-check-inline .form-check-input ~ .valid-feedback {
                    margin-left: .5em
                }

                .invalid-feedback {
                    width: 100%;
                    margin-top: .25rem;
                    font-size: .875em;
                    color: var(--bs-danger);
                    flex: 9;
                    white-space: nowrap; /* 텍스트를 단일 줄로 표시 */
                    overflow: hidden;    /* 넘치는 내용을 숨김 */
                    text-overflow: ellipsis; /* 넘치는 부분을 '...'으로 표시 */
                }

                .is-invalid ~ .invalid-feedback, .is-invalid ~ .invalid-tooltip, .was-validated :invalid ~ .invalid-feedback, .was-validated :invalid ~ .invalid-tooltip {
                    display: block
                }

                .form-check-inline .form-check-input ~ .invalid-feedback {
                    margin-left: .5em
                }


                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 1.2rem;
                    width: 100%;
                    flex: 9;
                    white-space: nowrap; /* 텍스트를 단일 줄로 표시 */
                    overflow: hidden;    /* 넘치는 내용을 숨김 */
                    text-overflow: ellipsis; /* 넘치는 부분을 '...'으로 표시 */
                }

                .form-group [class^=form-hint] {
                    margin-top: .25rem;
                    color: var(--bs-gray-500);
                    padding-left: calc(2rem + 0.4rem);
                }

                .form-group [class^=form-hint]::before {
                    display: inline-flex;
                    width: 1rem;
                    height: 1rem;
                    flex-shrink: 0;
                    flex-grow: 0;
                    content: "";
                    margin-left: calc((2rem + 0.4rem) * -1);
                    margin-right: 2px;
                    vertical-align: top;

                    background: url(/assets/ico_hint_20.svg) no-repeat center;
                    background-size: contain;
                }

                .textarea-count {
                    font-size: var(--bs-body-font-size);
                    width: 100%;
                    margin-top: .25rem;
                    margin-bottom: 0rem;
                    text-align: right;
                    flex:1;
                    display: none;
                }

            `],ct));var er,tr,bt;let le=(er=j("l-label-feed-container"),er(tr=(bt=class extends se{constructor(){super()}getByteLength(t){const e=t;let o,i=0,l=e.length;for(let d=0;d<l;d++)o=e.charAt(d),escape(o).length>4?i+=2:i++;return i}isPatternValid(t){const e=this.pattern;if(!e||!t)return!0;try{return new RegExp(e).test(t)}catch{return console.warn("Invalid pattern:",e),!0}}isRequiredValid(t){return this.required?t.trim().length>0:!0}isValid(){const t=this.getValue().trim();return this.isRequiredValid(t)&&this.isPatternValid(t)}createChangeHandler(t){if(typeof t=="string"&&parseInt(t)==t)return function(o){const i=o.target;let l=i.value,d=this.getByteLength(l);if(d>t){let y=l.length;for(;d>t&&y>0;)y--,d=this.getByteLength(l.substring(0,y));i.value=l.substring(0,y)}}}getNewInputValue(t,e){const o=t.selectionStart,i=t.selectionEnd,l=t.value;return l.substring(0,o)+e+l.substring(i)}validate(){this.getValue().trim();const t=this.isValid();this.setSelectorValid(!t);const e=this["feedback-visible-type"];if(e=="visible")return;const i=this.shadowRoot.querySelector("l-label-feed-container").shadowRoot.querySelector("l-feedback");i.setAttribute("hidden",!0),(t&&e=="valid"||!t&&e=="invalid")&&i.removeAttribute("hidden")}setSelectorValid(t){this.shadowRoot.querySelector(this.selector).classList.toggle("is-invalid",t)}setValid(){this.setSelectorValid(!1)}inValid(){this.setSelectorValid(!0)}checkValidity(){this.validate()}static get properties(){return{id:{type:String},width:{type:String},required:{type:Boolean},feedback:{type:String},"feedback-type":{type:String},"feedback-visible-type":{type:String},label:{type:String},"label-align":{type:String},"label-width":{type:String},"label-text-align":{type:String}}}render(){let t=this["label-align"]&&this["label-align"]==="left";return O`
            <div
                    style="width: ${this.width?this.width:"auto"}"
            >
                <div
                        class="${W({container:t})}"
                >
                    <l-label
                            label="${u(this.label)}"
                            id="${this.id}"
                            label-align="${u(this["label-align"])}"
                            label-width="${u(this["label-width"])}"
                            label-text-align="${u(this["label-text-align"])}"
                            required="${u(this.required)}"
                    >
                    </l-label>
                    <slot name="input"></slot>
                    <slot name="count"></slot>
                </div>

            </div>

            <l-feedback
                    feedback="${u(this.feedback)}"
                    feedback-type="${u(this["feedback-type"])}"
                    width="${u(this.width)}"
                    label-align="${u(this["label-align"])}"
                    left-margin="${u(this["label-width"])}"
                    ?hidden="${this["feedback-visible-type"]!=="visible"}"
            >
                

            </l-feedback>
        `}},bt.styles=[...se.styles,te`
              .container {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
              }
            `],bt))||tr);var rr,nr,dt;rr=j("l-c-input"),rr(nr=(dt=class extends le{constructor(){super(),super.setSelector("input")}get files(){return this.shadowRoot.querySelector(this.selector).files}disconnectedCallback(){super.disconnectedCallback(),this.observer.disconnect()}static get properties(){return{type:{type:String},name:{type:String},size:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},value:{type:String},pattern:{type:String},"pattern-block":{type:Boolean},placeholder:{type:String},maxlength:{type:String},minlength:{type:String},"valid-length-type":{type:String},"component-style":{type:String},autocomplete:{type:String},step:{type:Number}}}firstUpdated(){if(this["pattern-block"]){const t=this.shadowRoot.querySelector(super.getSelector);t.addEventListener("compositionend",o=>{e(o.target)}),t.addEventListener("input",o=>{o.isComposing||o.keyCode===229||e(o.target)});const e=o=>{const i=o.value,l=this.pattern;try{const y=l.replace("가-힣","가-힣ㄱ-ㅎㅏ-ㅣ").match(/\[(.*?)\]/);if(y){const g=y[1],w=new RegExp(`[^${g}]`,"g"),c=i.replace(w,"");i!==c&&(o.value=c)}}catch(d){console.warn("패턴 처리 중 오류 발생:",d)}}}}render(){let t=this["label-align"]&&this["label-align"]==="left",e=this.type==="search"&&!this.disabled&&!this.readonly;return O`
            <l-label-feed-container
                    width="${u(this.width)}"
                    id="${this.id}"
                    label="${u(this.label)}"
                    label-align="${u(this["label-align"])}"
                    label-width="${u(this["label-width"])}"
                    label-text-align="${u(this["label-text-align"])}"
                    required="${u(this.required)}"
                    feedback="${u(this.feedback)}"
                    feedback-type="${u(this["feedback-type"])}"
                    feedback-visible-type="${u(this["feedback-visible-type"])}"
            >
                <div slot="input" class="search-input-container">
                    <input
                            type="${this.type==="planText"?"text":this.type}"
                            style="${this["component-style"]}"
                            class="${W({"form-control":!0,"form-left-control":t,"form-control-plaintext":this.type==="planText","form-control-lg":this.size==="large","form-control-sm":this.size==="small","search-input-left":e,"has-icon":e})}"
                            id="${u(this.id)}"
                            name="${u(this.name)}"
                            maxlength="${(this["valid-length-type"]!="byte"?u(this.maxlength):null)??E}"
                            minlength="${(this["valid-length-type"]!="byte"?u(this.minlength):null)??E}"
                            ?required=${this.required}
                            ?disabled=${this.disabled}
                            ?readonly=${this.readonly}
                            placeholder="${u(this.placeholder)}"
                            pattern="${u(this.pattern)}"
                            value="${u(this.value)}"
                            @input="${o=>{var i;(i=this.shadowRoot.querySelector(".search-icon-right"))==null||i.classList.toggle("hidden",!o.target.value)}}"
                            @blur="${super.validate}"
                            @keyup="${(this["valid-length-type"]!="byte"?null:super.createChangeHandler(u(this.maxlength)))??E}"
                         
                            autocomplete="${u(this.autocomplete)}"
                            step="${u(this.step)}"
                    >
                </div>

            </l-label-feed-container>

        `}},dt.styles=[...le.styles,te`
            .search-input-left {
                padding-left: 2rem; /* 아이콘 자리 확보 */
                background-color: #fff;
            }

            .search-input-left.has-icon {
                background-image: url("data:image/svg+xml,%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); /* 아이콘 경로 */
                background-repeat: no-repeat;
                background-position: 0.5rem center; /* 아이콘 위치 */
                background-size: 16px 16px; /* 아이콘 크기 (적절히 조절) */
            }

            .search-input-container {
                position: relative;
                display: flex;
                align-items: center;
                flex-grow: 1;
            }

            input::-webkit-search-cancel-button {
                -webkit-appearance: none;
                appearance: none;
                height: 16px;
                width: 16px;
                background-image: url("data:image/svg+xml,%3Csvg fill='%23000000' width='800px' height='800px' viewBox='0 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Ecancel2%3C/title%3E%3Cpath d='M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z'%3E%3C/path%3E%3C/svg%3E"); /* 취소 아이콘 경로 */
                background-size: contain;
                cursor: pointer;
            }

            input::-ms-clear {
                width: 0;
                height: 0;
            }
        `],dt));var or,ar,ut;or=j("l-checkbox"),or(ar=(ut=class extends se{constructor(){super(),super.setSelector("input")}static get properties(){return{size:{type:String},id:{type:String},class:{type:String},name:{type:String},width:{type:String},label:{type:String},"label-align":{type:String},checked:{type:Boolean},required:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},value:{type:String}}}_getCheckboxGroupData(t,e){e===void 0&&(e=!1);const o=this.getAttribute("name");return o?Array.from(document.querySelectorAll(`l-checkbox[name="${o}"]`)).map(i=>{const l=i.shadowRoot?i.shadowRoot.querySelector('input[type="checkbox"]'):i.querySelector('input[type="checkbox"]');return!l||e&&!l.checked?null:{id:i.id,value:t==="label"?i.getAttribute("label"):i.value}}).filter(Boolean):(console.warn("이 체크박스에는 name 속성이 없습니다."),[])}getCheckedTextsByNameGroup(){return this._getCheckboxGroupData("label",!0)}getCheckedValuesByNameGroup(){return this._getCheckboxGroupData("value",!0)}getTextsByNameGroup(){return this._getCheckboxGroupData("label",!1)}getValuesByNameGroup(){return this._getCheckboxGroupData("value",!1)}getText(){return this.getAttribute("label")||""}setText(t){if(typeof t!="string"){console.warn("setText의 인자는 문자열이어야 합니다.");return}this.setAttribute("label",t),this.requestUpdate()}isValid(){if(!this.required)return!0;const e=this.shadowRoot.querySelector(this.selector);return e?e.checked:!1}validate(){const t=this.isValid();this.shadowRoot.querySelector(this.selector).classList.toggle("is-invalid",!t)}checkValidity(){this.validate()}render(){return O`
            <div
                    style="width: ${this.width?this.width:E}"
                    class="${W({"form-check":!0,"form-check-inline":!0,"form-control-lg":this.size==="large","form-control-sm":this.size==="small"})}">
                <input class="form-check-input"
                       type="checkbox"
                       value="${u(this.value)}"
                       id="${u(this.id)}"
                       name="${u(this.name)}"
                       ?required=${this.required}
                       ?checked=${this.checked}
                       ?disabled=${this.disabled}
                       @change=${this.validate}
                       @blur=${this.validate}
                >
                <label class="form-check-label" for="${u(this.id)}">${u(this.label)}</label>
            </div>
        `}},ut.styles=[...se.styles],ut));var ir,sr;ir=j("l-radio"),ir(sr=class extends se{constructor(){super(),super.setSelector("input")}createRenderRoot(){return this}static get properties(){return{size:{type:String},id:{type:String},class:{type:String},name:{type:String},width:{type:String},label:{type:String},"label-align":{type:String},checked:{type:Boolean},required:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},value:{type:String}}}getValue(){const t=this.querySelector(this.selector);return t?t.value:null}setValue(t){const e=this.querySelector(this.selector);e&&(e.value=t)}getText(){return this.getAttribute("label")||""}setText(t){if(typeof t!="string"){console.warn("setText의 인자는 문자열이어야 합니다.");return}this.setAttribute("label",t),this.requestUpdate()}isValid(){if(!this.required)return!0;const e=this.getAttribute("name");if(!e)return!0;const o=document.querySelectorAll(`l-radio[name="${e}"]`);return Array.from(o).some(i=>{const l=i.querySelector('input[type="radio"]');return l&&l.checked})}validate(){const t=this.querySelector(this.selector),e=this.isValid();t.classList.toggle("is-invalid",!e);const o=this.getAttribute("name");o&&document.querySelectorAll(`l-radio[name="${o}"]`).forEach(l=>{const d=l.querySelector('input[type="radio"]');d&&d.classList.toggle("is-invalid",!e)})}checkValidity(){this.validate()}render(){return this["label-align"]&&this["label-align"],O`
            <div
                    style="width: ${this.width?this.width:E}"
                    class="${W({"form-check":!0,"form-check-inline":!0,"form-control-lg":this.size==="large","form-control-sm":this.size==="small"})}">
                <input class="form-check-input"
                       type="radio"
                       value="${u(this.value)}"
                       id="${u(this.id)}"
                       name="${u(this.name)}"
                       ?required=${this.required}
                       ?checked=${this.checked}
                       ?disabled=${this.disabled}
                       @change=${this.validate}
                       @blur=${this.validate}
                >
                <label class="form-check-label" for="${u(this.id)}">${u(this.label)}</label>
            </div>
        `}});const L={RANGE_INFIX:"to",getDefaultFormat(r){switch(r===void 0&&(r=this.DATE_TYPE.DATE),r){case this.DATE_TYPE.DATE:return"Y-m-d";case this.DATE_TYPE.MONTH:return"Y-m";case this.DATE_TYPE.YEAR:return"Y"}},DATE_TYPE:{DATE:"date",MONTH:"month",YEAR:"year"},getDateFormatRegex(r){switch(r){case"Y-m-d":return/^\d{4}-\d{2}-\d{2}$/;case"Y/m/d":return/^\d{4}\/\d{2}\/\d{2}$/;case"Ymd":return/^\d{8}$/;case"Ym":return/^\d{6}$/;case"Y-m":return/^\d{4}-\d{2}$/;case"Y/m":return/^\d{4}\/\d{2}$/;case"Y.m":return/^\d{4}\.\d{2}$/;case"Y.m.d":return/^\d{4}\.\d{2}\.\d{2}$/;case"Y":return/^\d{4}$/;default:return console.error(`Unsupported format: ${r}`),null}},parseDateStrByFormat(r,t,e){e===void 0&&(e=this.DATE_TYPE.DATE);let o=null;switch(t){case"Y-m-d":case"Y-m":o=r.split("-");break;case"Y/m/d":case"Y/m":o=r.split("/");break;case"Y.m.d":case"Y.m":o=r.split(".");break;case"Ymd":o=[r.substring(0,4),r.substring(4,6),r.substring(6,8)];break;case"Ym":o=[r.substring(0,4),r.substring(4,6)];break;case"Y":o=[r,"01"];break;default:return console.error(`Unsupported format: ${t}`),null}switch(e){case this.DATE_TYPE.DATE:return new Date(o[0],(o[1]||1)-1,o[2]||1);case this.DATE_TYPE.MONTH:return new Date(o[0],(o[1]||1)-1,1);case this.DATE_TYPE.YEAR:return new Date(o[0],0,1);default:return null}},parseDateByFormat(r,t,e){e===void 0&&(e=this.DATE_TYPE.DATE);const o=r.getFullYear(),i=String(r.getMonth()+1).padStart(2,"0"),l=String(r.getDate()).padStart(2,"0");switch(e){case this.DATE_TYPE.DATE:switch(t){case"Y-m-d":return`${o}-${i}-${l}`;case"Y/m/d":return`${o}/${i}/${l}`;case"Y.m.d":return`${o}.${i}.${l}`;case"Y.m":return`${o}.${i}`;case"Ymd":return`${o}${i}${l}`;default:return""}case this.DATE_TYPE.MONTH:switch(t){case"Y-m":return`${o}-${i}`;case"Y/m":return`${o}/${i}`;case"Y.m":return`${o}.${i}`;case"Ym":return`${o}${i}`;default:return""}case this.DATE_TYPE.YEAR:return`${o}`;default:return console.error(`Unsupported type: ${e}`),""}},formatDate(r,t){switch(t===void 0&&(t=this.DATE_TYPE.DATE),t){case this.DATE_TYPE.DATE:return this.parseDateByFormat(r,"Ymd",t);case this.DATE_TYPE.MONTH:return this.parseDateByFormat(r,"Ym",t);case this.DATE_TYPE.YEAR:return this.parseDateByFormat(r,"Y",t);default:return""}}};var ft=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],ye={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(r){return typeof console<"u"&&console.warn(r)},getWeek:function(r){var t=new Date(r.getTime());t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);var e=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-e.getTime())/864e5-3+(e.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},Oe={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(r){var t=r%100;if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},B=function(r,t){return t===void 0&&(t=2),("000"+r).slice(t*-1)},G=function(r){return r===!0?1:0};function lr(r,t){var e;return function(){var o=this,i=arguments;clearTimeout(e),e=setTimeout(function(){return r.apply(o,i)},t)}}var gt=function(r){return r instanceof Array?r:[r]};function H(r,t,e){if(e===!0)return r.classList.add(t);r.classList.remove(t)}function S(r,t,e){var o=window.document.createElement(r);return t=t||"",e=e||"",o.className=t,e!==void 0&&(o.textContent=e),o}function qe(r){for(;r.firstChild;)r.removeChild(r.firstChild)}function Tr(r,t){if(t(r))return r;if(r.parentNode)return Tr(r.parentNode,t)}function Ve(r,t){var e=S("div","numInputWrapper"),o=S("input","numInput "+r),i=S("span","arrowUp"),l=S("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?o.type="number":(o.type="text",o.pattern="\\d*"),t!==void 0)for(var d in t)o.setAttribute(d,t[d]);return e.appendChild(o),e.appendChild(i),e.appendChild(l),e}function V(r){try{if(typeof r.composedPath=="function"){var t=r.composedPath();return t[0]}return r.target}catch{return r.target}}var ht=function(){},We=function(r,t,e){return e.months[t?"shorthand":"longhand"][r]},Nn={D:ht,F:function(r,t,e){r.setMonth(e.months.longhand.indexOf(t))},G:function(r,t){r.setHours((r.getHours()>=12?12:0)+parseFloat(t))},H:function(r,t){r.setHours(parseFloat(t))},J:function(r,t){r.setDate(parseFloat(t))},K:function(r,t,e){r.setHours(r.getHours()%12+12*G(new RegExp(e.amPM[1],"i").test(t)))},M:function(r,t,e){r.setMonth(e.months.shorthand.indexOf(t))},S:function(r,t){r.setSeconds(parseFloat(t))},U:function(r,t){return new Date(parseFloat(t)*1e3)},W:function(r,t,e){var o=parseInt(t),i=new Date(r.getFullYear(),0,2+(o-1)*7,0,0,0,0);return i.setDate(i.getDate()-i.getDay()+e.firstDayOfWeek),i},Y:function(r,t){r.setFullYear(parseFloat(t))},Z:function(r,t){return new Date(t)},d:function(r,t){r.setDate(parseFloat(t))},h:function(r,t){r.setHours((r.getHours()>=12?12:0)+parseFloat(t))},i:function(r,t){r.setMinutes(parseFloat(t))},j:function(r,t){r.setDate(parseFloat(t))},l:ht,m:function(r,t){r.setMonth(parseFloat(t)-1)},n:function(r,t){r.setMonth(parseFloat(t)-1)},s:function(r,t){r.setSeconds(parseFloat(t))},u:function(r,t){return new Date(parseFloat(t))},w:ht,y:function(r,t){r.setFullYear(2e3+parseFloat(t))}},de={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},Ee={Z:function(r){return r.toISOString()},D:function(r,t,e){return t.weekdays.shorthand[Ee.w(r,t,e)]},F:function(r,t,e){return We(Ee.n(r,t,e)-1,!1,t)},G:function(r,t,e){return B(Ee.h(r,t,e))},H:function(r){return B(r.getHours())},J:function(r,t){return t.ordinal!==void 0?r.getDate()+t.ordinal(r.getDate()):r.getDate()},K:function(r,t){return t.amPM[G(r.getHours()>11)]},M:function(r,t){return We(r.getMonth(),!0,t)},S:function(r){return B(r.getSeconds())},U:function(r){return r.getTime()/1e3},W:function(r,t,e){return e.getWeek(r)},Y:function(r){return B(r.getFullYear(),4)},d:function(r){return B(r.getDate())},h:function(r){return r.getHours()%12?r.getHours()%12:12},i:function(r){return B(r.getMinutes())},j:function(r){return r.getDate()},l:function(r,t){return t.weekdays.longhand[r.getDay()]},m:function(r){return B(r.getMonth()+1)},n:function(r){return r.getMonth()+1},s:function(r){return r.getSeconds()},u:function(r){return r.getTime()},w:function(r){return r.getDay()},y:function(r){return String(r.getFullYear()).substring(2)}},Pr=function(r){var t=r.config,e=t===void 0?ye:t,o=r.l10n,i=o===void 0?Oe:o,l=r.isMobile,d=l===void 0?!1:l;return function(y,g,w){var c=w||i;return e.formatDate!==void 0&&!d?e.formatDate(y,g,c):g.split("").map(function(p,M,_){return Ee[p]&&_[M-1]!=="\\"?Ee[p](y,c,e):p!=="\\"?p:""}).join("")}},Ft=function(r){var t=r.config,e=t===void 0?ye:t,o=r.l10n,i=o===void 0?Oe:o;return function(l,d,y,g){if(!(l!==0&&!l)){var w=g||i,c,p=l;if(l instanceof Date)c=new Date(l.getTime());else if(typeof l!="string"&&l.toFixed!==void 0)c=new Date(l);else if(typeof l=="string"){var M=d||(e||ye).dateFormat,_=String(l).trim();if(_==="today")c=new Date,y=!0;else if(e&&e.parseDate)c=e.parseDate(l,M);else if(/Z$/.test(_)||/GMT$/.test(_))c=new Date(l);else{for(var I=void 0,D=[],R=0,he=0,K="";R<M.length;R++){var J=M[R],Q=J==="\\",Fe=M[R-1]==="\\"||Q;if(de[J]&&!Fe){K+=de[J];var X=new RegExp(K).exec(l);X&&(I=!0)&&D[J!=="Y"?"push":"unshift"]({fn:Nn[J],val:X[++he]})}else Q||(K+=".")}c=!e||!e.noCalendar?new Date(new Date().getFullYear(),0,1,0,0,0,0):new Date(new Date().setHours(0,0,0,0)),D.forEach(function(re){var ne=re.fn,ke=re.val;return c=ne(c,ke,w)||c}),c=I?c:void 0}}if(!(c instanceof Date&&!isNaN(c.getTime()))){e.errorHandler(new Error("Invalid date provided: "+p));return}return y===!0&&c.setHours(0,0,0,0),c}}};function U(r,t,e){return e===void 0&&(e=!0),e!==!1?new Date(r.getTime()).setHours(0,0,0,0)-new Date(t.getTime()).setHours(0,0,0,0):r.getTime()-t.getTime()}var Ln=function(r,t,e){return r>Math.min(t,e)&&r<Math.max(t,e)},pt=function(r,t,e){return r*3600+t*60+e},zn=function(r){var t=Math.floor(r/3600),e=(r-t*3600)/60;return[t,e,r-t*3600-e*60]},Rn={DAY:864e5};function mt(r){var t=r.defaultHour,e=r.defaultMinute,o=r.defaultSeconds;if(r.minDate!==void 0){var i=r.minDate.getHours(),l=r.minDate.getMinutes(),d=r.minDate.getSeconds();t<i&&(t=i),t===i&&e<l&&(e=l),t===i&&e===l&&o<d&&(o=r.minDate.getSeconds())}if(r.maxDate!==void 0){var y=r.maxDate.getHours(),g=r.maxDate.getMinutes();t=Math.min(t,y),t===y&&(e=Math.min(g,e)),t===y&&e===g&&(o=r.maxDate.getSeconds())}return{hours:t,minutes:e,seconds:o}}typeof Object.assign!="function"&&(Object.assign=function(r){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];if(!r)throw TypeError("Cannot convert undefined or null to object");for(var o=function(y){y&&Object.keys(y).forEach(function(g){return r[g]=y[g]})},i=0,l=t;i<l.length;i++){var d=l[i];o(d)}return r});var z=function(){return z=Object.assign||function(r){for(var t,e=1,o=arguments.length;e<o;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},z.apply(this,arguments)},cr=function(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;for(var o=Array(r),i=0,t=0;t<e;t++)for(var l=arguments[t],d=0,y=l.length;d<y;d++,i++)o[i]=l[d];return o},Hn=300;function Bn(r,t){var e={config:z(z({},ye),Y.defaultConfig),l10n:Oe};e.parseDate=Ft({config:e.config,l10n:e.l10n}),e._handlers=[],e.pluginElements=[],e.loadedPlugins=[],e._bind=D,e._setHoursFromDate=M,e._positionCalendar=He,e.changeMonth=Je,e.changeYear=Le,e.clear=Lr,e.close=zr,e.onMouseOver=Re,e._createElement=S,e.createDay=X,e.destroy=Rr,e.isEnabled=ce,e.jumpToDate=K,e.updateValue=ee,e.open=jr,e.redraw=Pt,e.set=Gr,e.setDate=Wr,e.toggle=Zr;function o(){e.utils={getDaysInMonth:function(n,a){return n===void 0&&(n=e.currentMonth),a===void 0&&(a=e.currentYear),n===1&&(a%4===0&&a%100!==0||a%400===0)?29:e.l10n.daysInMonth[n]}}}function i(){e.element=e.input=r,e.isOpen=!1,qr(),Tt(),Jr(),Kr(),o(),e.isMobile||Fe(),he(),(e.selectedDates.length||e.config.noCalendar)&&(e.config.enableTime&&M(e.config.noCalendar?e.latestSelectedDateObj:void 0),ee(!1)),y();var n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!e.isMobile&&n&&He(),P("onReady")}function l(){var n;return((n=e.calendarContainer)===null||n===void 0?void 0:n.getRootNode()).activeElement||document.activeElement}function d(n){return n.bind(e)}function y(){var n=e.config;n.weekNumbers===!1&&n.showMonths===1||n.noCalendar!==!0&&window.requestAnimationFrame(function(){if(e.calendarContainer!==void 0&&(e.calendarContainer.style.visibility="hidden",e.calendarContainer.style.display="block"),e.daysContainer!==void 0){var a=(e.days.offsetWidth+1)*n.showMonths;e.daysContainer.style.width=a+"px",e.calendarContainer.style.width=a+(e.weekWrapper!==void 0?e.weekWrapper.offsetWidth:0)+"px",e.calendarContainer.style.removeProperty("visibility"),e.calendarContainer.style.removeProperty("display")}})}function g(n){if(e.selectedDates.length===0){var a=e.config.minDate===void 0||U(new Date,e.config.minDate)>=0?new Date:new Date(e.config.minDate.getTime()),s=mt(e.config);a.setHours(s.hours,s.minutes,s.seconds,a.getMilliseconds()),e.selectedDates=[a],e.latestSelectedDateObj=a}n!==void 0&&n.type!=="blur"&&tn(n);var b=e._input.value;p(),ee(),e._input.value!==b&&e._debouncedChange()}function w(n,a){return n%12+12*G(a===e.l10n.amPM[1])}function c(n){switch(n%24){case 0:case 12:return 12;default:return n%12}}function p(){if(!(e.hourElement===void 0||e.minuteElement===void 0)){var n=(parseInt(e.hourElement.value.slice(-2),10)||0)%24,a=(parseInt(e.minuteElement.value,10)||0)%60,s=e.secondElement!==void 0?(parseInt(e.secondElement.value,10)||0)%60:0;e.amPM!==void 0&&(n=w(n,e.amPM.textContent));var b=e.config.minTime!==void 0||e.config.minDate&&e.minDateHasTime&&e.latestSelectedDateObj&&U(e.latestSelectedDateObj,e.config.minDate,!0)===0,f=e.config.maxTime!==void 0||e.config.maxDate&&e.maxDateHasTime&&e.latestSelectedDateObj&&U(e.latestSelectedDateObj,e.config.maxDate,!0)===0;if(e.config.maxTime!==void 0&&e.config.minTime!==void 0&&e.config.minTime>e.config.maxTime){var h=pt(e.config.minTime.getHours(),e.config.minTime.getMinutes(),e.config.minTime.getSeconds()),k=pt(e.config.maxTime.getHours(),e.config.maxTime.getMinutes(),e.config.maxTime.getSeconds()),v=pt(n,a,s);if(v>k&&v<h){var $=zn(h);n=$[0],a=$[1],s=$[2]}}else{if(f){var m=e.config.maxTime!==void 0?e.config.maxTime:e.config.maxDate;n=Math.min(n,m.getHours()),n===m.getHours()&&(a=Math.min(a,m.getMinutes())),a===m.getMinutes()&&(s=Math.min(s,m.getSeconds()))}if(b){var F=e.config.minTime!==void 0?e.config.minTime:e.config.minDate;n=Math.max(n,F.getHours()),n===F.getHours()&&a<F.getMinutes()&&(a=F.getMinutes()),a===F.getMinutes()&&(s=Math.max(s,F.getSeconds()))}}_(n,a,s)}}function M(n){var a=n||e.latestSelectedDateObj;a&&a instanceof Date&&_(a.getHours(),a.getMinutes(),a.getSeconds())}function _(n,a,s){e.latestSelectedDateObj!==void 0&&e.latestSelectedDateObj.setHours(n%24,a,s||0,0),!(!e.hourElement||!e.minuteElement||e.isMobile)&&(e.hourElement.value=B(e.config.time_24hr?n:(12+n)%12+12*G(n%12===0)),e.minuteElement.value=B(a),e.amPM!==void 0&&(e.amPM.textContent=e.l10n.amPM[G(n>=12)]),e.secondElement!==void 0&&(e.secondElement.value=B(s)))}function I(n){var a=V(n),s=parseInt(a.value)+(n.delta||0);(s/1e3>1||n.key==="Enter"&&!/[^\d]/.test(s.toString()))&&Le(s)}function D(n,a,s,b){if(a instanceof Array)return a.forEach(function(f){return D(n,f,s,b)});if(n instanceof Array)return n.forEach(function(f){return D(f,a,s,b)});n.addEventListener(a,s,b),e._handlers.push({remove:function(){return n.removeEventListener(a,s,b)}})}function R(){P("onChange")}function he(){if(e.config.wrap&&["open","close","toggle","clear"].forEach(function(s){Array.prototype.forEach.call(e.element.querySelectorAll("[data-"+s+"]"),function(b){return D(b,"click",e[s])})}),e.isMobile){Xr();return}var n=lr(Br,50);if(e._debouncedChange=lr(R,Hn),e.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&D(e.daysContainer,"mouseover",function(s){e.config.mode==="range"&&Re(V(s))}),D(e._input,"keydown",Mt),e.calendarContainer!==void 0&&D(e.calendarContainer,"keydown",Mt),!e.config.inline&&!e.config.static&&D(window,"resize",n),window.ontouchstart!==void 0?D(window.document,"touchstart",Xe):D(window.document,"mousedown",Xe),D(window.document,"focus",Xe,{capture:!0}),e.config.clickOpens===!0&&(D(e._input,"focus",e.open),D(e._input,"click",e.open)),e.daysContainer!==void 0&&(D(e.monthNav,"click",en),D(e.monthNav,["keyup","increment"],I),D(e.daysContainer,"click",Ot)),e.timeContainer!==void 0&&e.minuteElement!==void 0&&e.hourElement!==void 0){var a=function(s){return V(s).select()};D(e.timeContainer,["increment"],g),D(e.timeContainer,"blur",g,{capture:!0}),D(e.timeContainer,"click",J),D([e.hourElement,e.minuteElement],["focus","click"],a),e.secondElement!==void 0&&D(e.secondElement,"focus",function(){return e.secondElement&&e.secondElement.select()}),e.amPM!==void 0&&D(e.amPM,"click",function(s){g(s)})}e.config.allowInput&&D(e._input,"blur",Hr)}function K(n,a){var s=n!==void 0?e.parseDate(n):e.latestSelectedDateObj||(e.config.minDate&&e.config.minDate>e.now?e.config.minDate:e.config.maxDate&&e.config.maxDate<e.now?e.config.maxDate:e.now),b=e.currentYear,f=e.currentMonth;try{s!==void 0&&(e.currentYear=s.getFullYear(),e.currentMonth=s.getMonth())}catch(h){h.message="Invalid date supplied: "+s,e.config.errorHandler(h)}a&&e.currentYear!==b&&(P("onYearChange"),N()),a&&(e.currentYear!==b||e.currentMonth!==f)&&P("onMonthChange"),e.redraw()}function J(n){var a=V(n);~a.className.indexOf("arrow")&&Q(n,a.classList.contains("arrowUp")?1:-1)}function Q(n,a,s){var b=n&&V(n),f=s||b&&b.parentNode&&b.parentNode.firstChild,h=Qe("increment");h.delta=a,f&&f.dispatchEvent(h)}function Fe(){var n=window.document.createDocumentFragment();if(e.calendarContainer=S("div","flatpickr-calendar"),e.calendarContainer.tabIndex=-1,!e.config.noCalendar){if(n.appendChild(De()),e.innerContainer=S("div","flatpickr-innerContainer"),e.config.weekNumbers){var a=Nr(),s=a.weekWrapper,b=a.weekNumbers;e.innerContainer.appendChild(s),e.weekNumbers=b,e.weekWrapper=s}e.rContainer=S("div","flatpickr-rContainer"),e.rContainer.appendChild(Ct()),e.daysContainer||(e.daysContainer=S("div","flatpickr-days"),e.daysContainer.tabIndex=-1),A(),e.rContainer.appendChild(e.daysContainer),e.innerContainer.appendChild(e.rContainer),n.appendChild(e.innerContainer)}e.config.enableTime&&n.appendChild(Ne()),H(e.calendarContainer,"rangeMode",e.config.mode==="range"),H(e.calendarContainer,"animate",e.config.animate===!0),H(e.calendarContainer,"multiMonth",e.config.showMonths>1),e.calendarContainer.appendChild(n);var f=e.config.appendTo!==void 0&&e.config.appendTo.nodeType!==void 0;if((e.config.inline||e.config.static)&&(e.calendarContainer.classList.add(e.config.inline?"inline":"static"),e.config.inline&&(!f&&e.element.parentNode?e.element.parentNode.insertBefore(e.calendarContainer,e._input.nextSibling):e.config.appendTo!==void 0&&e.config.appendTo.appendChild(e.calendarContainer)),e.config.static)){var h=S("div","flatpickr-wrapper");e.element.parentNode&&e.element.parentNode.insertBefore(h,e.element),h.appendChild(e.element),e.altInput&&h.appendChild(e.altInput),h.appendChild(e.calendarContainer)}!e.config.static&&!e.config.inline&&(e.config.appendTo!==void 0?e.config.appendTo:window.document.body).appendChild(e.calendarContainer)}function X(n,a,s,b){var f=ce(a,!0),h=S("span",n,a.getDate().toString());return h.dateObj=a,h.$i=b,h.setAttribute("aria-label",e.formatDate(a,e.config.ariaDateFormat)),n.indexOf("hidden")===-1&&U(a,e.now)===0&&(e.todayDateElem=h,h.classList.add("today"),h.setAttribute("aria-current","date")),f?(h.tabIndex=-1,et(a)&&(h.classList.add("selected"),e.selectedDateElem=h,e.config.mode==="range"&&(H(h,"startRange",e.selectedDates[0]&&U(a,e.selectedDates[0],!0)===0),H(h,"endRange",e.selectedDates[1]&&U(a,e.selectedDates[1],!0)===0),n==="nextMonthDay"&&h.classList.add("inRange")))):h.classList.add("flatpickr-disabled"),e.config.mode==="range"&&Qr(a)&&!et(a)&&h.classList.add("inRange"),e.weekNumbers&&e.config.showMonths===1&&n!=="prevMonthDay"&&b%7===6&&e.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+e.config.getWeek(a)+"</span>"),P("onDayCreate",h),h}function re(n){n.focus(),e.config.mode==="range"&&Re(n)}function ne(n){for(var a=n>0?0:e.config.showMonths-1,s=n>0?e.config.showMonths:-1,b=a;b!=s;b+=n)for(var f=e.daysContainer.children[b],h=n>0?0:f.children.length-1,k=n>0?f.children.length:-1,v=h;v!=k;v+=n){var $=f.children[v];if($.className.indexOf("hidden")===-1&&ce($.dateObj))return $}}function ke(n,a){for(var s=n.className.indexOf("Month")===-1?n.dateObj.getMonth():e.currentMonth,b=a>0?e.config.showMonths:-1,f=a>0?1:-1,h=s-e.currentMonth;h!=b;h+=f)for(var k=e.daysContainer.children[h],v=s-e.currentMonth===h?n.$i+a:a<0?k.children.length-1:0,$=k.children.length,m=v;m>=0&&m<$&&m!=(a>0?$:-1);m+=f){var F=k.children[m];if(F.className.indexOf("hidden")===-1&&ce(F.dateObj)&&Math.abs(n.$i-m)>=Math.abs(a))return re(F)}e.changeMonth(f),x(ne(f),0)}function x(n,a){var s=l(),b=ze(s||document.body),f=n!==void 0?n:b?s:e.selectedDateElem!==void 0&&ze(e.selectedDateElem)?e.selectedDateElem:e.todayDateElem!==void 0&&ze(e.todayDateElem)?e.todayDateElem:ne(a>0?1:-1);f===void 0?e._input.focus():b?ke(f,a):re(f)}function C(n,a){for(var s=(new Date(n,a,1).getDay()-e.l10n.firstDayOfWeek+7)%7,b=e.utils.getDaysInMonth((a-1+12)%12,n),f=e.utils.getDaysInMonth(a,n),h=window.document.createDocumentFragment(),k=e.config.showMonths>1,v=k?"prevMonthDay hidden":"prevMonthDay",$=k?"nextMonthDay hidden":"nextMonthDay",m=b+1-s,F=0;m<=b;m++,F++)h.appendChild(X("flatpickr-day "+v,new Date(n,a-1,m),m,F));for(m=1;m<=f;m++,F++)h.appendChild(X("flatpickr-day",new Date(n,a,m),m,F));for(var T=f+1;T<=42-s&&(e.config.showMonths===1||F%7!==0);T++,F++)h.appendChild(X("flatpickr-day "+$,new Date(n,a+1,T%f),T,F));var Z=S("div","dayContainer");return Z.appendChild(h),Z}function A(){if(e.daysContainer!==void 0){qe(e.daysContainer),e.weekNumbers&&qe(e.weekNumbers);for(var n=document.createDocumentFragment(),a=0;a<e.config.showMonths;a++){var s=new Date(e.currentYear,e.currentMonth,1);s.setMonth(e.currentMonth+a),n.appendChild(C(s.getFullYear(),s.getMonth()))}e.daysContainer.appendChild(n),e.days=e.daysContainer.firstChild,e.config.mode==="range"&&e.selectedDates.length===1&&Re()}}function N(){if(!(e.config.showMonths>1||e.config.monthSelectorType!=="dropdown")){var n=function(b){return e.config.minDate!==void 0&&e.currentYear===e.config.minDate.getFullYear()&&b<e.config.minDate.getMonth()?!1:!(e.config.maxDate!==void 0&&e.currentYear===e.config.maxDate.getFullYear()&&b>e.config.maxDate.getMonth())};e.monthsDropdownContainer.tabIndex=-1,e.monthsDropdownContainer.innerHTML="";for(var a=0;a<12;a++)if(n(a)){var s=S("option","flatpickr-monthDropdown-month");s.value=new Date(e.currentYear,a).getMonth().toString(),s.textContent=We(a,e.config.shorthandCurrentMonth,e.l10n),s.tabIndex=-1,e.currentMonth===a&&(s.selected=!0),e.monthsDropdownContainer.appendChild(s)}}}function pe(){var n=S("div","flatpickr-month"),a=window.document.createDocumentFragment(),s;e.config.showMonths>1||e.config.monthSelectorType==="static"?s=S("span","cur-month"):(e.monthsDropdownContainer=S("select","flatpickr-monthDropdown-months"),e.monthsDropdownContainer.setAttribute("aria-label",e.l10n.monthAriaLabel),D(e.monthsDropdownContainer,"change",function(k){var v=V(k),$=parseInt(v.value,10);e.changeMonth($-e.currentMonth),P("onMonthChange")}),N(),s=e.monthsDropdownContainer);var b=Ve("cur-year",{tabindex:"-1"}),f=b.getElementsByTagName("input")[0];f.setAttribute("aria-label",e.l10n.yearAriaLabel),e.config.minDate&&f.setAttribute("min",e.config.minDate.getFullYear().toString()),e.config.maxDate&&(f.setAttribute("max",e.config.maxDate.getFullYear().toString()),f.disabled=!!e.config.minDate&&e.config.minDate.getFullYear()===e.config.maxDate.getFullYear());var h=S("div","flatpickr-current-month");return h.appendChild(s),h.appendChild(b),a.appendChild(h),n.appendChild(a),{container:n,yearElement:f,monthElement:s}}function Ie(){qe(e.monthNav),e.monthNav.appendChild(e.prevMonthNav),e.config.showMonths&&(e.yearElements=[],e.monthElements=[]);for(var n=e.config.showMonths;n--;){var a=pe();e.yearElements.push(a.yearElement),e.monthElements.push(a.monthElement),e.monthNav.appendChild(a.container)}e.monthNav.appendChild(e.nextMonthNav)}function De(){return e.monthNav=S("div","flatpickr-months"),e.yearElements=[],e.monthElements=[],e.prevMonthNav=S("span","flatpickr-prev-month"),e.prevMonthNav.innerHTML=e.config.prevArrow,e.nextMonthNav=S("span","flatpickr-next-month"),e.nextMonthNav.innerHTML=e.config.nextArrow,Ie(),Object.defineProperty(e,"_hidePrevMonthArrow",{get:function(){return e.__hidePrevMonthArrow},set:function(n){e.__hidePrevMonthArrow!==n&&(H(e.prevMonthNav,"flatpickr-disabled",n),e.__hidePrevMonthArrow=n)}}),Object.defineProperty(e,"_hideNextMonthArrow",{get:function(){return e.__hideNextMonthArrow},set:function(n){e.__hideNextMonthArrow!==n&&(H(e.nextMonthNav,"flatpickr-disabled",n),e.__hideNextMonthArrow=n)}}),e.currentYearElement=e.yearElements[0],je(),e.monthNav}function Ne(){e.calendarContainer.classList.add("hasTime"),e.config.noCalendar&&e.calendarContainer.classList.add("noCalendar");var n=mt(e.config);e.timeContainer=S("div","flatpickr-time"),e.timeContainer.tabIndex=-1;var a=S("span","flatpickr-time-separator",":"),s=Ve("flatpickr-hour",{"aria-label":e.l10n.hourAriaLabel});e.hourElement=s.getElementsByTagName("input")[0];var b=Ve("flatpickr-minute",{"aria-label":e.l10n.minuteAriaLabel});if(e.minuteElement=b.getElementsByTagName("input")[0],e.hourElement.tabIndex=e.minuteElement.tabIndex=-1,e.hourElement.value=B(e.latestSelectedDateObj?e.latestSelectedDateObj.getHours():e.config.time_24hr?n.hours:c(n.hours)),e.minuteElement.value=B(e.latestSelectedDateObj?e.latestSelectedDateObj.getMinutes():n.minutes),e.hourElement.setAttribute("step",e.config.hourIncrement.toString()),e.minuteElement.setAttribute("step",e.config.minuteIncrement.toString()),e.hourElement.setAttribute("min",e.config.time_24hr?"0":"1"),e.hourElement.setAttribute("max",e.config.time_24hr?"23":"12"),e.hourElement.setAttribute("maxlength","2"),e.minuteElement.setAttribute("min","0"),e.minuteElement.setAttribute("max","59"),e.minuteElement.setAttribute("maxlength","2"),e.timeContainer.appendChild(s),e.timeContainer.appendChild(a),e.timeContainer.appendChild(b),e.config.time_24hr&&e.timeContainer.classList.add("time24hr"),e.config.enableSeconds){e.timeContainer.classList.add("hasSeconds");var f=Ve("flatpickr-second");e.secondElement=f.getElementsByTagName("input")[0],e.secondElement.value=B(e.latestSelectedDateObj?e.latestSelectedDateObj.getSeconds():n.seconds),e.secondElement.setAttribute("step",e.minuteElement.getAttribute("step")),e.secondElement.setAttribute("min","0"),e.secondElement.setAttribute("max","59"),e.secondElement.setAttribute("maxlength","2"),e.timeContainer.appendChild(S("span","flatpickr-time-separator",":")),e.timeContainer.appendChild(f)}return e.config.time_24hr||(e.amPM=S("span","flatpickr-am-pm",e.l10n.amPM[G((e.latestSelectedDateObj?e.hourElement.value:e.config.defaultHour)>11)]),e.amPM.title=e.l10n.toggleTitle,e.amPM.tabIndex=-1,e.timeContainer.appendChild(e.amPM)),e.timeContainer}function Ct(){e.weekdayContainer?qe(e.weekdayContainer):e.weekdayContainer=S("div","flatpickr-weekdays");for(var n=e.config.showMonths;n--;){var a=S("div","flatpickr-weekdaycontainer");e.weekdayContainer.appendChild(a)}return St(),e.weekdayContainer}function St(){if(e.weekdayContainer){var n=e.l10n.firstDayOfWeek,a=cr(e.l10n.weekdays.shorthand);n>0&&n<a.length&&(a=cr(a.splice(n,a.length),a.splice(0,n)));for(var s=e.config.showMonths;s--;)e.weekdayContainer.children[s].innerHTML=`
      <span class='flatpickr-weekday'>
        `+a.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function Nr(){e.calendarContainer.classList.add("hasWeeks");var n=S("div","flatpickr-weekwrapper");n.appendChild(S("span","flatpickr-weekday",e.l10n.weekAbbreviation));var a=S("div","flatpickr-weeks");return n.appendChild(a),{weekWrapper:n,weekNumbers:a}}function Je(n,a){a===void 0&&(a=!0);var s=a?n:n-e.currentMonth;s<0&&e._hidePrevMonthArrow===!0||s>0&&e._hideNextMonthArrow===!0||(e.currentMonth+=s,(e.currentMonth<0||e.currentMonth>11)&&(e.currentYear+=e.currentMonth>11?1:-1,e.currentMonth=(e.currentMonth+12)%12,P("onYearChange"),N()),A(),P("onMonthChange"),je())}function Lr(n,a){if(n===void 0&&(n=!0),a===void 0&&(a=!0),e.input.value="",e.altInput!==void 0&&(e.altInput.value=""),e.mobileInput!==void 0&&(e.mobileInput.value=""),e.selectedDates=[],e.latestSelectedDateObj=void 0,a===!0&&(e.currentYear=e._initialDate.getFullYear(),e.currentMonth=e._initialDate.getMonth()),e.config.enableTime===!0){var s=mt(e.config),b=s.hours,f=s.minutes,h=s.seconds;_(b,f,h)}e.redraw(),n&&P("onChange")}function zr(){e.isOpen=!1,e.isMobile||(e.calendarContainer!==void 0&&e.calendarContainer.classList.remove("open"),e._input!==void 0&&e._input.classList.remove("active")),P("onClose")}function Rr(){e.config!==void 0&&P("onDestroy");for(var n=e._handlers.length;n--;)e._handlers[n].remove();if(e._handlers=[],e.mobileInput)e.mobileInput.parentNode&&e.mobileInput.parentNode.removeChild(e.mobileInput),e.mobileInput=void 0;else if(e.calendarContainer&&e.calendarContainer.parentNode)if(e.config.static&&e.calendarContainer.parentNode){var a=e.calendarContainer.parentNode;if(a.lastChild&&a.removeChild(a.lastChild),a.parentNode){for(;a.firstChild;)a.parentNode.insertBefore(a.firstChild,a);a.parentNode.removeChild(a)}}else e.calendarContainer.parentNode.removeChild(e.calendarContainer);e.altInput&&(e.input.type="text",e.altInput.parentNode&&e.altInput.parentNode.removeChild(e.altInput),delete e.altInput),e.input&&(e.input.type=e.input._type,e.input.classList.remove("flatpickr-input"),e.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(s){try{delete e[s]}catch{}})}function $e(n){return e.calendarContainer.contains(n)}function Xe(n){if(e.isOpen&&!e.config.inline){var a=V(n),s=$e(a),b=a===e.input||a===e.altInput||e.element.contains(a)||n.path&&n.path.indexOf&&(~n.path.indexOf(e.input)||~n.path.indexOf(e.altInput)),f=!b&&!s&&!$e(n.relatedTarget),h=!e.config.ignoredFocusElements.some(function(k){return k.contains(a)});f&&h&&(e.config.allowInput&&e.setDate(e._input.value,!1,e.config.altInput?e.config.altFormat:e.config.dateFormat),e.timeContainer!==void 0&&e.minuteElement!==void 0&&e.hourElement!==void 0&&e.input.value!==""&&e.input.value!==void 0&&g(),e.close(),e.config&&e.config.mode==="range"&&e.selectedDates.length===1&&e.clear(!1))}}function Le(n){if(!(!n||e.config.minDate&&n<e.config.minDate.getFullYear()||e.config.maxDate&&n>e.config.maxDate.getFullYear())){var a=n,s=e.currentYear!==a;e.currentYear=a||e.currentYear,e.config.maxDate&&e.currentYear===e.config.maxDate.getFullYear()?e.currentMonth=Math.min(e.config.maxDate.getMonth(),e.currentMonth):e.config.minDate&&e.currentYear===e.config.minDate.getFullYear()&&(e.currentMonth=Math.max(e.config.minDate.getMonth(),e.currentMonth)),s&&(e.redraw(),P("onYearChange"),N())}}function ce(n,a){var s;a===void 0&&(a=!0);var b=e.parseDate(n,void 0,a);if(e.config.minDate&&b&&U(b,e.config.minDate,a!==void 0?a:!e.minDateHasTime)<0||e.config.maxDate&&b&&U(b,e.config.maxDate,a!==void 0?a:!e.maxDateHasTime)>0)return!1;if(!e.config.enable&&e.config.disable.length===0)return!0;if(b===void 0)return!1;for(var f=!!e.config.enable,h=(s=e.config.enable)!==null&&s!==void 0?s:e.config.disable,k=0,v=void 0;k<h.length;k++){if(v=h[k],typeof v=="function"&&v(b))return f;if(v instanceof Date&&b!==void 0&&v.getTime()===b.getTime())return f;if(typeof v=="string"){var $=e.parseDate(v,void 0,!0);return $&&$.getTime()===b.getTime()?f:!f}else if(typeof v=="object"&&b!==void 0&&v.from&&v.to&&b.getTime()>=v.from.getTime()&&b.getTime()<=v.to.getTime())return f}return!f}function ze(n){return e.daysContainer!==void 0?n.className.indexOf("hidden")===-1&&n.className.indexOf("flatpickr-disabled")===-1&&e.daysContainer.contains(n):!1}function Hr(n){var a=n.target===e._input,s=e._input.value.trimEnd()!==tt();a&&s&&!(n.relatedTarget&&$e(n.relatedTarget))&&e.setDate(e._input.value,!0,n.target===e.altInput?e.config.altFormat:e.config.dateFormat)}function Mt(n){var a=V(n),s=e.config.wrap?r.contains(a):a===e._input,b=e.config.allowInput,f=e.isOpen&&(!b||!s),h=e.config.inline&&s&&!b;if(n.keyCode===13&&s){if(b)return e.setDate(e._input.value,!0,a===e.altInput?e.config.altFormat:e.config.dateFormat),e.close(),a.blur();e.open()}else if($e(a)||f||h){var k=!!e.timeContainer&&e.timeContainer.contains(a);switch(n.keyCode){case 13:k?(n.preventDefault(),g(),Ze()):Ot(n);break;case 27:n.preventDefault(),Ze();break;case 8:case 46:s&&!e.config.allowInput&&(n.preventDefault(),e.clear());break;case 37:case 39:if(!k&&!s){n.preventDefault();var v=l();if(e.daysContainer!==void 0&&(b===!1||v&&ze(v))){var $=n.keyCode===39?1:-1;n.ctrlKey?(n.stopPropagation(),Je($),x(ne(1),0)):x(void 0,$)}}else e.hourElement&&e.hourElement.focus();break;case 38:case 40:n.preventDefault();var m=n.keyCode===40?1:-1;e.daysContainer&&a.$i!==void 0||a===e.input||a===e.altInput?n.ctrlKey?(n.stopPropagation(),Le(e.currentYear-m),x(ne(1),0)):k||x(void 0,m*7):a===e.currentYearElement?Le(e.currentYear-m):e.config.enableTime&&(!k&&e.hourElement&&e.hourElement.focus(),g(n),e._debouncedChange());break;case 9:if(k){var F=[e.hourElement,e.minuteElement,e.secondElement,e.amPM].concat(e.pluginElements).filter(function(q){return q}),T=F.indexOf(a);if(T!==-1){var Z=F[T+(n.shiftKey?-1:1)];n.preventDefault(),(Z||e._input).focus()}}else!e.config.noCalendar&&e.daysContainer&&e.daysContainer.contains(a)&&n.shiftKey&&(n.preventDefault(),e._input.focus());break}}if(e.amPM!==void 0&&a===e.amPM)switch(n.key){case e.l10n.amPM[0].charAt(0):case e.l10n.amPM[0].charAt(0).toLowerCase():e.amPM.textContent=e.l10n.amPM[0],p(),ee();break;case e.l10n.amPM[1].charAt(0):case e.l10n.amPM[1].charAt(0).toLowerCase():e.amPM.textContent=e.l10n.amPM[1],p(),ee();break}(s||$e(a))&&P("onKeyDown",n)}function Re(n,a){if(a===void 0&&(a="flatpickr-day"),!(e.selectedDates.length!==1||n&&(!n.classList.contains(a)||n.classList.contains("flatpickr-disabled")))){for(var s=n?n.dateObj.getTime():e.days.firstElementChild.dateObj.getTime(),b=e.parseDate(e.selectedDates[0],void 0,!0).getTime(),f=Math.min(s,e.selectedDates[0].getTime()),h=Math.max(s,e.selectedDates[0].getTime()),k=!1,v=0,$=0,m=f;m<h;m+=Rn.DAY)ce(new Date(m),!0)||(k=k||m>f&&m<h,m<b&&(!v||m>v)?v=m:m>b&&(!$||m<$)&&($=m));var F=Array.from(e.rContainer.querySelectorAll("*:nth-child(-n+"+e.config.showMonths+") > ."+a));F.forEach(function(T){var Z=T.dateObj,q=Z.getTime(),_e=v>0&&q<v||$>0&&q>$;if(_e){T.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(me){T.classList.remove(me)});return}else if(k&&!_e)return;["startRange","inRange","endRange","notAllowed"].forEach(function(me){T.classList.remove(me)}),n!==void 0&&(n.classList.add(s<=e.selectedDates[0].getTime()?"startRange":"endRange"),b<s&&q===b?T.classList.add("startRange"):b>s&&q===b&&T.classList.add("endRange"),q>=v&&($===0||q<=$)&&Ln(q,b,s)&&T.classList.add("inRange"))})}}function Br(){e.isOpen&&!e.config.static&&!e.config.inline&&He()}function jr(n,a){if(a===void 0&&(a=e._positionElement),e.isMobile===!0){if(n){n.preventDefault();var s=V(n);s&&s.blur()}e.mobileInput!==void 0&&(e.mobileInput.focus(),e.mobileInput.click()),P("onOpen");return}else if(e._input.disabled||e.config.inline)return;var b=e.isOpen;e.isOpen=!0,b||(e.calendarContainer.classList.add("open"),e._input.classList.add("active"),P("onOpen"),He(a)),e.config.enableTime===!0&&e.config.noCalendar===!0&&e.config.allowInput===!1&&(n===void 0||!e.timeContainer.contains(n.relatedTarget))&&setTimeout(function(){return e.hourElement.select()},50)}function Et(n){return function(a){var s=e.config["_"+n+"Date"]=e.parseDate(a,e.config.dateFormat),b=e.config["_"+(n==="min"?"max":"min")+"Date"];s!==void 0&&(e[n==="min"?"minDateHasTime":"maxDateHasTime"]=s.getHours()>0||s.getMinutes()>0||s.getSeconds()>0),e.selectedDates&&(e.selectedDates=e.selectedDates.filter(function(f){return ce(f)}),!e.selectedDates.length&&n==="min"&&M(s),ee()),e.daysContainer&&(Pt(),s!==void 0?e.currentYearElement[n]=s.getFullYear().toString():e.currentYearElement.removeAttribute(n),e.currentYearElement.disabled=!!b&&s!==void 0&&b.getFullYear()===s.getFullYear())}}function qr(){var n=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],a=z(z({},JSON.parse(JSON.stringify(r.dataset||{}))),t),s={};e.config.parseDate=a.parseDate,e.config.formatDate=a.formatDate,Object.defineProperty(e.config,"enable",{get:function(){return e.config._enable},set:function(F){e.config._enable=It(F)}}),Object.defineProperty(e.config,"disable",{get:function(){return e.config._disable},set:function(F){e.config._disable=It(F)}});var b=a.mode==="time";if(!a.dateFormat&&(a.enableTime||b)){var f=Y.defaultConfig.dateFormat||ye.dateFormat;s.dateFormat=a.noCalendar||b?"H:i"+(a.enableSeconds?":S":""):f+" H:i"+(a.enableSeconds?":S":"")}if(a.altInput&&(a.enableTime||b)&&!a.altFormat){var h=Y.defaultConfig.altFormat||ye.altFormat;s.altFormat=a.noCalendar||b?"h:i"+(a.enableSeconds?":S K":" K"):h+(" h:i"+(a.enableSeconds?":S":"")+" K")}Object.defineProperty(e.config,"minDate",{get:function(){return e.config._minDate},set:Et("min")}),Object.defineProperty(e.config,"maxDate",{get:function(){return e.config._maxDate},set:Et("max")});var k=function(F){return function(T){e.config[F==="min"?"_minTime":"_maxTime"]=e.parseDate(T,"H:i:S")}};Object.defineProperty(e.config,"minTime",{get:function(){return e.config._minTime},set:k("min")}),Object.defineProperty(e.config,"maxTime",{get:function(){return e.config._maxTime},set:k("max")}),a.mode==="time"&&(e.config.noCalendar=!0,e.config.enableTime=!0),Object.assign(e.config,s,a);for(var v=0;v<n.length;v++)e.config[n[v]]=e.config[n[v]]===!0||e.config[n[v]]==="true";ft.filter(function(F){return e.config[F]!==void 0}).forEach(function(F){e.config[F]=gt(e.config[F]||[]).map(d)}),e.isMobile=!e.config.disableMobile&&!e.config.inline&&e.config.mode==="single"&&!e.config.disable.length&&!e.config.enable&&!e.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var v=0;v<e.config.plugins.length;v++){var $=e.config.plugins[v](e)||{};for(var m in $)ft.indexOf(m)>-1?e.config[m]=gt($[m]).map(d).concat(e.config[m]):typeof a[m]>"u"&&(e.config[m]=$[m])}a.altInputClass||(e.config.altInputClass=At().className+" "+e.config.altInputClass),P("onParseConfig")}function At(){return e.config.wrap?r.querySelector("[data-input]"):r}function Tt(){typeof e.config.locale!="object"&&typeof Y.l10ns[e.config.locale]>"u"&&e.config.errorHandler(new Error("flatpickr: invalid locale "+e.config.locale)),e.l10n=z(z({},Y.l10ns.default),typeof e.config.locale=="object"?e.config.locale:e.config.locale!=="default"?Y.l10ns[e.config.locale]:void 0),de.D="("+e.l10n.weekdays.shorthand.join("|")+")",de.l="("+e.l10n.weekdays.longhand.join("|")+")",de.M="("+e.l10n.months.shorthand.join("|")+")",de.F="("+e.l10n.months.longhand.join("|")+")",de.K="("+e.l10n.amPM[0]+"|"+e.l10n.amPM[1]+"|"+e.l10n.amPM[0].toLowerCase()+"|"+e.l10n.amPM[1].toLowerCase()+")";var n=z(z({},t),JSON.parse(JSON.stringify(r.dataset||{})));n.time_24hr===void 0&&Y.defaultConfig.time_24hr===void 0&&(e.config.time_24hr=e.l10n.time_24hr),e.formatDate=Pr(e),e.parseDate=Ft({config:e.config,l10n:e.l10n})}function He(n){if(typeof e.config.position=="function")return void e.config.position(e,n);if(e.calendarContainer!==void 0){P("onPreCalendarPosition");var a=n||e._positionElement,s=Array.prototype.reduce.call(e.calendarContainer.children,function(bn,dn){return bn+dn.offsetHeight},0),b=e.calendarContainer.offsetWidth,f=e.config.position.split(" "),h=f[0],k=f.length>1?f[1]:null,v=a.getBoundingClientRect(),$=window.innerHeight-v.bottom,m=h==="above"||h!=="below"&&$<s&&v.top>s,F=window.pageYOffset+v.top+(m?-s-2:a.offsetHeight+2);if(H(e.calendarContainer,"arrowTop",!m),H(e.calendarContainer,"arrowBottom",m),!e.config.inline){var T=window.pageXOffset+v.left,Z=!1,q=!1;k==="center"?(T-=(b-v.width)/2,Z=!0):k==="right"&&(T-=b-v.width,q=!0),H(e.calendarContainer,"arrowLeft",!Z&&!q),H(e.calendarContainer,"arrowCenter",Z),H(e.calendarContainer,"arrowRight",q);var _e=window.document.body.offsetWidth-(window.pageXOffset+v.right),me=T+b>window.document.body.offsetWidth,rn=_e+b>window.document.body.offsetWidth;if(H(e.calendarContainer,"rightMost",me),!e.config.static)if(e.calendarContainer.style.top=F+"px",!me)e.calendarContainer.style.left=T+"px",e.calendarContainer.style.right="auto";else if(!rn)e.calendarContainer.style.left="auto",e.calendarContainer.style.right=_e+"px";else{var rt=Vr();if(rt===void 0)return;var nn=window.document.body.offsetWidth,on=Math.max(0,nn/2-b/2),an=".flatpickr-calendar.centerMost:before",sn=".flatpickr-calendar.centerMost:after",ln=rt.cssRules.length,cn="{left:"+v.left+"px;right:auto;}";H(e.calendarContainer,"rightMost",!1),H(e.calendarContainer,"centerMost",!0),rt.insertRule(an+","+sn+cn,ln),e.calendarContainer.style.left=on+"px",e.calendarContainer.style.right="auto"}}}}function Vr(){for(var n=null,a=0;a<document.styleSheets.length;a++){var s=document.styleSheets[a];if(s.cssRules){try{s.cssRules}catch{continue}n=s;break}}return n??Ur()}function Ur(){var n=document.createElement("style");return document.head.appendChild(n),n.sheet}function Pt(){e.config.noCalendar||e.isMobile||(N(),je(),A())}function Ze(){e._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(e.close,0):e.close()}function Ot(n){n.preventDefault(),n.stopPropagation();var a=function(F){return F.classList&&F.classList.contains("flatpickr-day")&&!F.classList.contains("flatpickr-disabled")&&!F.classList.contains("notAllowed")},s=Tr(V(n),a);if(s!==void 0){var b=s,f=e.latestSelectedDateObj=new Date(b.dateObj.getTime()),h=(f.getMonth()<e.currentMonth||f.getMonth()>e.currentMonth+e.config.showMonths-1)&&e.config.mode!=="range";if(e.selectedDateElem=b,e.config.mode==="single")e.selectedDates=[f];else if(e.config.mode==="multiple"){var k=et(f);k?e.selectedDates.splice(parseInt(k),1):e.selectedDates.push(f)}else e.config.mode==="range"&&(e.selectedDates.length===2&&e.clear(!1,!1),e.latestSelectedDateObj=f,e.selectedDates.push(f),U(f,e.selectedDates[0],!0)!==0&&e.selectedDates.sort(function(F,T){return F.getTime()-T.getTime()}));if(p(),h){var v=e.currentYear!==f.getFullYear();e.currentYear=f.getFullYear(),e.currentMonth=f.getMonth(),v&&(P("onYearChange"),N()),P("onMonthChange")}if(je(),A(),ee(),!h&&e.config.mode!=="range"&&e.config.showMonths===1?re(b):e.selectedDateElem!==void 0&&e.hourElement===void 0&&e.selectedDateElem&&e.selectedDateElem.focus(),e.hourElement!==void 0&&e.hourElement!==void 0&&e.hourElement.focus(),e.config.closeOnSelect){var $=e.config.mode==="single"&&!e.config.enableTime,m=e.config.mode==="range"&&e.selectedDates.length===2&&!e.config.enableTime;($||m)&&Ze()}R()}}var Be={locale:[Tt,St],showMonths:[Ie,y,Ct],minDate:[K],maxDate:[K],positionElement:[Nt],clickOpens:[function(){e.config.clickOpens===!0?(D(e._input,"focus",e.open),D(e._input,"click",e.open)):(e._input.removeEventListener("focus",e.open),e._input.removeEventListener("click",e.open))}]};function Gr(n,a){if(n!==null&&typeof n=="object"){Object.assign(e.config,n);for(var s in n)Be[s]!==void 0&&Be[s].forEach(function(b){return b()})}else e.config[n]=a,Be[n]!==void 0?Be[n].forEach(function(b){return b()}):ft.indexOf(n)>-1&&(e.config[n]=gt(a));e.redraw(),ee(!0)}function Yt(n,a){var s=[];if(n instanceof Array)s=n.map(function(b){return e.parseDate(b,a)});else if(n instanceof Date||typeof n=="number")s=[e.parseDate(n,a)];else if(typeof n=="string")switch(e.config.mode){case"single":case"time":s=[e.parseDate(n,a)];break;case"multiple":s=n.split(e.config.conjunction).map(function(b){return e.parseDate(b,a)});break;case"range":s=n.split(e.l10n.rangeSeparator).map(function(b){return e.parseDate(b,a)});break}else e.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(n)));e.selectedDates=e.config.allowInvalidPreload?s:s.filter(function(b){return b instanceof Date&&ce(b,!1)}),e.config.mode==="range"&&e.selectedDates.sort(function(b,f){return b.getTime()-f.getTime()})}function Wr(n,a,s){if(a===void 0&&(a=!1),s===void 0&&(s=e.config.dateFormat),n!==0&&!n||n instanceof Array&&n.length===0)return e.clear(a);Yt(n,s),e.latestSelectedDateObj=e.selectedDates[e.selectedDates.length-1],e.redraw(),K(void 0,a),M(),e.selectedDates.length===0&&e.clear(!1),ee(a),a&&P("onChange")}function It(n){return n.slice().map(function(a){return typeof a=="string"||typeof a=="number"||a instanceof Date?e.parseDate(a,void 0,!0):a&&typeof a=="object"&&a.from&&a.to?{from:e.parseDate(a.from,void 0),to:e.parseDate(a.to,void 0)}:a}).filter(function(a){return a})}function Kr(){e.selectedDates=[],e.now=e.parseDate(e.config.now)||new Date;var n=e.config.defaultDate||((e.input.nodeName==="INPUT"||e.input.nodeName==="TEXTAREA")&&e.input.placeholder&&e.input.value===e.input.placeholder?null:e.input.value);n&&Yt(n,e.config.dateFormat),e._initialDate=e.selectedDates.length>0?e.selectedDates[0]:e.config.minDate&&e.config.minDate.getTime()>e.now.getTime()?e.config.minDate:e.config.maxDate&&e.config.maxDate.getTime()<e.now.getTime()?e.config.maxDate:e.now,e.currentYear=e._initialDate.getFullYear(),e.currentMonth=e._initialDate.getMonth(),e.selectedDates.length>0&&(e.latestSelectedDateObj=e.selectedDates[0]),e.config.minTime!==void 0&&(e.config.minTime=e.parseDate(e.config.minTime,"H:i")),e.config.maxTime!==void 0&&(e.config.maxTime=e.parseDate(e.config.maxTime,"H:i")),e.minDateHasTime=!!e.config.minDate&&(e.config.minDate.getHours()>0||e.config.minDate.getMinutes()>0||e.config.minDate.getSeconds()>0),e.maxDateHasTime=!!e.config.maxDate&&(e.config.maxDate.getHours()>0||e.config.maxDate.getMinutes()>0||e.config.maxDate.getSeconds()>0)}function Jr(){if(e.input=At(),!e.input){e.config.errorHandler(new Error("Invalid input element specified"));return}e.input._type=e.input.type,e.input.type="text",e.input.classList.add("flatpickr-input"),e._input=e.input,e.config.altInput&&(e.altInput=S(e.input.nodeName,e.config.altInputClass),e._input=e.altInput,e.altInput.placeholder=e.input.placeholder,e.altInput.disabled=e.input.disabled,e.altInput.required=e.input.required,e.altInput.tabIndex=e.input.tabIndex,e.altInput.type="text",e.input.setAttribute("type","hidden"),!e.config.static&&e.input.parentNode&&e.input.parentNode.insertBefore(e.altInput,e.input.nextSibling)),e.config.allowInput||e._input.setAttribute("readonly","readonly"),Nt()}function Nt(){e._positionElement=e.config.positionElement||e._input}function Xr(){var n=e.config.enableTime?e.config.noCalendar?"time":"datetime-local":"date";e.mobileInput=S("input",e.input.className+" flatpickr-mobile"),e.mobileInput.tabIndex=1,e.mobileInput.type=n,e.mobileInput.disabled=e.input.disabled,e.mobileInput.required=e.input.required,e.mobileInput.placeholder=e.input.placeholder,e.mobileFormatStr=n==="datetime-local"?"Y-m-d\\TH:i:S":n==="date"?"Y-m-d":"H:i:S",e.selectedDates.length>0&&(e.mobileInput.defaultValue=e.mobileInput.value=e.formatDate(e.selectedDates[0],e.mobileFormatStr)),e.config.minDate&&(e.mobileInput.min=e.formatDate(e.config.minDate,"Y-m-d")),e.config.maxDate&&(e.mobileInput.max=e.formatDate(e.config.maxDate,"Y-m-d")),e.input.getAttribute("step")&&(e.mobileInput.step=String(e.input.getAttribute("step"))),e.input.type="hidden",e.altInput!==void 0&&(e.altInput.type="hidden");try{e.input.parentNode&&e.input.parentNode.insertBefore(e.mobileInput,e.input.nextSibling)}catch{}D(e.mobileInput,"change",function(a){e.setDate(V(a).value,!1,e.mobileFormatStr),P("onChange"),P("onClose")})}function Zr(n){if(e.isOpen===!0)return e.close();e.open(n)}function P(n,a){if(e.config!==void 0){var s=e.config[n];if(s!==void 0&&s.length>0)for(var b=0;s[b]&&b<s.length;b++)s[b](e.selectedDates,e.input.value,e,a);n==="onChange"&&(e.input.dispatchEvent(Qe("change")),e.input.dispatchEvent(Qe("input")))}}function Qe(n){var a=document.createEvent("Event");return a.initEvent(n,!0,!0),a}function et(n){for(var a=0;a<e.selectedDates.length;a++){var s=e.selectedDates[a];if(s instanceof Date&&U(s,n)===0)return""+a}return!1}function Qr(n){return e.config.mode!=="range"||e.selectedDates.length<2?!1:U(n,e.selectedDates[0])>=0&&U(n,e.selectedDates[1])<=0}function je(){e.config.noCalendar||e.isMobile||!e.monthNav||(e.yearElements.forEach(function(n,a){var s=new Date(e.currentYear,e.currentMonth,1);s.setMonth(e.currentMonth+a),e.config.showMonths>1||e.config.monthSelectorType==="static"?e.monthElements[a].textContent=We(s.getMonth(),e.config.shorthandCurrentMonth,e.l10n)+" ":e.monthsDropdownContainer.value=s.getMonth().toString(),n.value=s.getFullYear().toString()}),e._hidePrevMonthArrow=e.config.minDate!==void 0&&(e.currentYear===e.config.minDate.getFullYear()?e.currentMonth<=e.config.minDate.getMonth():e.currentYear<e.config.minDate.getFullYear()),e._hideNextMonthArrow=e.config.maxDate!==void 0&&(e.currentYear===e.config.maxDate.getFullYear()?e.currentMonth+1>e.config.maxDate.getMonth():e.currentYear>e.config.maxDate.getFullYear()))}function tt(n){var a=n||(e.config.altInput?e.config.altFormat:e.config.dateFormat);return e.selectedDates.map(function(s){return e.formatDate(s,a)}).filter(function(s,b,f){return e.config.mode!=="range"||e.config.enableTime||f.indexOf(s)===b}).join(e.config.mode!=="range"?e.config.conjunction:e.l10n.rangeSeparator)}function ee(n){n===void 0&&(n=!0),e.mobileInput!==void 0&&e.mobileFormatStr&&(e.mobileInput.value=e.latestSelectedDateObj!==void 0?e.formatDate(e.latestSelectedDateObj,e.mobileFormatStr):""),e.input.value=tt(e.config.dateFormat),e.altInput!==void 0&&(e.altInput.value=tt(e.config.altFormat)),n!==!1&&P("onValueUpdate")}function en(n){var a=V(n),s=e.prevMonthNav.contains(a),b=e.nextMonthNav.contains(a);s||b?Je(s?-1:1):e.yearElements.indexOf(a)>=0?a.select():a.classList.contains("arrowUp")?e.changeYear(e.currentYear+1):a.classList.contains("arrowDown")&&e.changeYear(e.currentYear-1)}function tn(n){n.preventDefault();var a=n.type==="keydown",s=V(n),b=s;e.amPM!==void 0&&s===e.amPM&&(e.amPM.textContent=e.l10n.amPM[G(e.amPM.textContent===e.l10n.amPM[0])]);var f=parseFloat(b.getAttribute("min")),h=parseFloat(b.getAttribute("max")),k=parseFloat(b.getAttribute("step")),v=parseInt(b.value,10),$=n.delta||(a?n.which===38?1:-1:0),m=v+k*$;if(typeof b.value<"u"&&b.value.length===2){var F=b===e.hourElement,T=b===e.minuteElement;m<f?(m=h+m+G(!F)+(G(F)&&G(!e.amPM)),T&&Q(void 0,-1,e.hourElement)):m>h&&(m=b===e.hourElement?m-h-G(!e.amPM):f,T&&Q(void 0,1,e.hourElement)),e.amPM&&F&&(k===1?m+v===23:Math.abs(m-v)>k)&&(e.amPM.textContent=e.l10n.amPM[G(e.amPM.textContent===e.l10n.amPM[0])]),b.value=B(m)}}return i(),e}function we(r,t){for(var e=Array.prototype.slice.call(r).filter(function(d){return d instanceof HTMLElement}),o=[],i=0;i<e.length;i++){var l=e[i];try{if(l.getAttribute("data-fp-omit")!==null)continue;l._flatpickr!==void 0&&(l._flatpickr.destroy(),l._flatpickr=void 0),l._flatpickr=Bn(l,t||{}),o.push(l._flatpickr)}catch(d){console.error(d)}}return o.length===1?o[0]:o}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(r){return we(this,r)},HTMLElement.prototype.flatpickr=function(r){return we([this],r)});var Y=function(r,t){return typeof r=="string"?we(window.document.querySelectorAll(r),t):r instanceof Node?we([r],t):we(r,t)};Y.defaultConfig={};Y.l10ns={en:z({},Oe),default:z({},Oe)};Y.localize=function(r){Y.l10ns.default=z(z({},Y.l10ns.default),r)};Y.setDefaults=function(r){Y.defaultConfig=z(z({},Y.defaultConfig),r)};Y.parseDate=Ft({});Y.formatDate=Pr({});Y.compareDates=U;typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(r){return we(this,r)});Date.prototype.fp_incr=function(r){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof r=="string"?parseInt(r,10):r))};typeof window<"u"&&(window.flatpickr=Y);var jn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qn(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Or={exports:{}};(function(r,t){(function(e,o){r.exports=o()})(jn,function(){/*! *****************************************************************************
	    Copyright (c) Microsoft Corporation.

	    Permission to use, copy, modify, and/or distribute this software for any
	    purpose with or without fee is hereby granted.

	    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	    PERFORMANCE OF THIS SOFTWARE.
	    ***************************************************************************** */var e=function(){return e=Object.assign||function(w){for(var c,p=1,M=arguments.length;p<M;p++){c=arguments[p];for(var _ in c)Object.prototype.hasOwnProperty.call(c,_)&&(w[_]=c[_])}return w},e.apply(this,arguments)},o=function(g,w,c){return c.months[w?"shorthand":"longhand"][g]};function i(g){for(;g.firstChild;)g.removeChild(g.firstChild)}function l(g){try{if(typeof g.composedPath=="function"){var w=g.composedPath();return w[0]}return g.target}catch{return g.target}}var d={shorthand:!1,dateFormat:"F Y",altFormat:"F Y",theme:"light"};function y(g){var w=e(e({},d),g);return function(c){c.config.dateFormat=w.dateFormat,c.config.altFormat=w.altFormat;var p={monthsContainer:null};function M(){if(c.rContainer){i(c.rContainer);for(var x=0;x<c.monthElements.length;x++){var C=c.monthElements[x];C.parentNode&&C.parentNode.removeChild(C)}}}function _(){c.rContainer&&(p.monthsContainer=c._createElement("div","flatpickr-monthSelect-months"),p.monthsContainer.tabIndex=-1,I(),c.rContainer.appendChild(p.monthsContainer),c.calendarContainer.classList.add("flatpickr-monthSelect-theme-"+w.theme))}function I(){if(p.monthsContainer){i(p.monthsContainer);for(var x=document.createDocumentFragment(),C=0;C<12;C++){var A=c.createDay("flatpickr-monthSelect-month",new Date(c.currentYear,C),0,C);A.dateObj.getMonth()===new Date().getMonth()&&A.dateObj.getFullYear()===new Date().getFullYear()&&A.classList.add("today"),A.textContent=o(C,w.shorthand,c.l10n),A.addEventListener("click",K),x.appendChild(A)}p.monthsContainer.appendChild(x),c.config.minDate&&c.currentYear===c.config.minDate.getFullYear()?c.prevMonthNav.classList.add("flatpickr-disabled"):c.prevMonthNav.classList.remove("flatpickr-disabled"),c.config.maxDate&&c.currentYear===c.config.maxDate.getFullYear()?c.nextMonthNav.classList.add("flatpickr-disabled"):c.nextMonthNav.classList.remove("flatpickr-disabled")}}function D(){c._bind(c.prevMonthNav,"click",function(x){x.preventDefault(),x.stopPropagation(),c.changeYear(c.currentYear-1),he(),I()}),c._bind(c.nextMonthNav,"click",function(x){x.preventDefault(),x.stopPropagation(),c.changeYear(c.currentYear+1),he(),I()}),c._bind(p.monthsContainer,"mouseover",function(x){c.config.mode==="range"&&c.onMouseOver(l(x),"flatpickr-monthSelect-month")})}function R(){if(c.rContainer&&c.selectedDates.length){for(var x=c.rContainer.querySelectorAll(".flatpickr-monthSelect-month.selected"),C=0;C<x.length;C++)x[C].classList.remove("selected");var A=c.selectedDates[0].getMonth(),N=c.rContainer.querySelector(".flatpickr-monthSelect-month:nth-child("+(A+1)+")");N&&N.classList.add("selected")}}function he(){var x=c.selectedDates[0];if(x&&(x=new Date(x),x.setFullYear(c.currentYear),c.config.minDate&&x<c.config.minDate&&(x=c.config.minDate),c.config.maxDate&&x>c.config.maxDate&&(x=c.config.maxDate),c.currentYear=x.getFullYear()),c.currentYearElement.value=String(c.currentYear),c.rContainer){var C=c.rContainer.querySelectorAll(".flatpickr-monthSelect-month");C.forEach(function(A){A.dateObj.setFullYear(c.currentYear),c.config.minDate&&A.dateObj<c.config.minDate||c.config.maxDate&&A.dateObj>c.config.maxDate?A.classList.add("flatpickr-disabled"):A.classList.remove("flatpickr-disabled")})}R()}function K(x){x.preventDefault(),x.stopPropagation();var C=l(x);if(C instanceof Element&&!C.classList.contains("flatpickr-disabled")&&!C.classList.contains("notAllowed")&&(J(C.dateObj),c.config.closeOnSelect)){var A=c.config.mode==="single",N=c.config.mode==="range"&&c.selectedDates.length===2;(A||N)&&c.close()}}function J(x){var C=new Date(c.currentYear,x.getMonth(),x.getDate()),A=[];switch(c.config.mode){case"single":A=[C];break;case"multiple":A.push(C);break;case"range":c.selectedDates.length===2?A=[C]:(A=c.selectedDates.concat([C]),A.sort(function(N,pe){return N.getTime()-pe.getTime()}));break}c.setDate(A,!0),R()}var Q={37:-1,39:1,40:3,38:-3};function Fe(x,C,A,N){var pe=Q[N.keyCode]!==void 0;if(!(!pe&&N.keyCode!==13)&&!(!c.rContainer||!p.monthsContainer)){var Ie=c.rContainer.querySelector(".flatpickr-monthSelect-month.selected"),De=Array.prototype.indexOf.call(p.monthsContainer.children,document.activeElement);if(De===-1){var Ne=Ie||p.monthsContainer.firstElementChild;Ne.focus(),De=Ne.$i}pe?p.monthsContainer.children[(12+De+Q[N.keyCode])%12].focus():N.keyCode===13&&p.monthsContainer.contains(document.activeElement)&&J(document.activeElement.dateObj)}}function X(){var x;((x=c.config)===null||x===void 0?void 0:x.mode)==="range"&&c.selectedDates.length===1&&c.clear(!1),c.selectedDates.length||I()}function re(){w._stubbedCurrentMonth=c._initialDate.getMonth(),c._initialDate.setMonth(w._stubbedCurrentMonth),c.currentMonth=w._stubbedCurrentMonth}function ne(){w._stubbedCurrentMonth&&(c._initialDate.setMonth(w._stubbedCurrentMonth),c.currentMonth=w._stubbedCurrentMonth,delete w._stubbedCurrentMonth)}function ke(){if(p.monthsContainer!==null)for(var x=p.monthsContainer.querySelectorAll(".flatpickr-monthSelect-month"),C=0;C<x.length;C++)x[C].removeEventListener("click",K)}return{onParseConfig:function(){c.config.enableTime=!1},onValueUpdate:R,onKeyDown:Fe,onReady:[re,M,_,D,R,function(){c.config.onClose.push(X),c.loadedPlugins.push("monthSelect")}],onDestroy:[ne,ke,function(){c.config.onClose=c.config.onClose.filter(function(x){return x!==X})}]}}}return y})})(Or);var Vn=Or.exports;const Yr=qn(Vn);class _t extends ie{constructor(){super(),this.getValue=()=>this._datepicker?this._datepicker.input.value:null,this.initCurrentMonth=()=>{this.initTodayDate()},this.initTodayDate=()=>{const t=this["start-year-offset"]||0,e=this["start-month-offset"]||0,o=this["start-day-offset"]||0,i=new Date;i.setFullYear(i.getFullYear()+t),i.setMonth(i.getMonth()+e),i.setDate(i.getDate()+o),this._datepicker.setDate(i)},this._handleClick=t=>this.getSelector.click()}setDateType(t){this._dateType=t}get getDateType(){return this._dateType}createRenderRoot(){return this}static get properties(){return{id:{type:String},name:{type:String},size:{type:String},format:{type:String},label:{type:String},"label-align":{type:String},"label-width":{type:String},"label-text-align":{type:String},feedback:{type:String},"feedback-type":{type:String},"feedback-visible-type":{type:String},width:{type:String},required:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},value:{type:String},showAlways:{type:Boolean},invisible:{type:Boolean},"component-style":{type:String},"start-year-offset":{type:Number},"start-month-offset":{type:Number},"start-day-offset":{type:Number},autocomplete:{type:String},placeholder:{type:String},"disable-date-from":{type:String},"disable-date-to":{type:String},"disable-day-from":{type:Number},"disable-day-to":{type:Number}}}get getSelector(){const t=`${this.id}-input`;return document.querySelector(`#${t}`)}initDatePicker(){this._datepicker=Y(this.getSelector,this.getOptions());const t=this.value;this.setValue(t)}firstUpdated(){this.initDatePicker()}isValidDateFormat(t,e){const o=L.getDateFormatRegex(e);return t&&(!o||!o.test(t))?(console.error(`id : ${this.id} >> Invalid date format: ${t}. Expected format is ${e}.`),!1):!0}getOptions(){const t=this.format||L.getDefaultFormat(this.getDateType),e=[],o=this.getDateType;o===L.DATE_TYPE.MONTH&&e.push(new Yr({shorthand:!0,dateFormat:t,altFormat:t}));let i={dateFormat:t,onChange:c=>{this.validate()},inline:this.showAlways,onDayCreate:function(c,p,M,_){if(_.classList.contains("flatpickr-disabled")||_.classList.contains("prevMonthDay")||_.classList.contains("nextMonthDay")||o===L.DATE_TYPE.MONTH)return;const I=_.dateObj.getDay();I===0?_.style.color="#ff4d4d":I===6&&(_.style.color="#4d79ff")},plugins:e},l=[];const d=this["disable-day-from"],y=this["disable-day-to"];d!==void 0&&y!==void 0&&o!==L.DATE_TYPE.MONTH&&l.push(function(c){const p=c.getDate();return p>=d&&p<=y});const g=this["disable-date-from"],w=this["disable-date-to"];return g&&w&&l.push({from:g,to:w}),l.length>0&&(i.disable=l),i}setEnableFromTo(t,e){if(this._datepicker)if(this.getDateType===L.DATE_TYPE.MONTH){this._datepicker.destroy();let o=this.getOptions();o.enable=[{from:t,to:e}],this._datepicker=Y(this.getSelector,o)}else this._datepicker.set("enable",[{from:t,to:e}])}setValue(t){if(this._datepicker&&t){const e=this.format||L.getDefaultFormat(this.getDateType);if(!this.isValidDateFormat(t,e))return;const o=L.parseDateStrByFormat(t,e);if(!o||isNaN(o)){console.error(`id : ${this.id} >> Invalid date value: ${t}.`);return}this._datepicker.setDate(o),this._datepicker.redraw()}}render(){const t=`${this.id}-input`,e=`${this.id}-feedback`;let o=this["label-align"]&&this["label-align"]==="left";const i={normal:O`
                <div class="valid-feedback">${this.feedback}</div>`,hint:O`
                <div class="form-group"><small class="form-hint form-text text-muted">${this.feedback}</small>
                </div>`,error:O`
                <div class="invalid-feedback">${this.feedback}</div>`};return O`
            <div
                    style="width: ${this.width?this.width:"auto"}"
            >
                <div
                        class="${W({container:o})}"
                >
                    <label
                            class="${W({"form-left-label":o&&this.label,"form-label":!(o&&this.label),hidden:this.invisible})}"
                            for="${this.id}"
                            style="
                        width: ${this["label-width"]||"auto"};
                        text-align: ${this["label-text-align"]||"left"}
                    "
                    >
                        ${this.required?o?O`<span
                                style="color: #df1414;margin-right: 2px">*</span>${this.label}`:O`${this.label}
                        <span style="color: #df1414;margin-left: 2px">*</span>`:this.label}
                    </label>
                    <div class="">
                        <!-- Wrapper 영역 -->
                        <div class="input-container">
                            <input type="text"
                                   class="${W({"form-control":!0,"form-left-control":o,"form-control-lg":this.size==="large","form-control-sm":this.size==="small","input-right":!0,hidden:this.invisible})}"
                                   style="${this["component-style"]}"
                                   id="${t}"
                                   name="${u(this.name)}"
                                   aria-label="Date-Time"
                                   ?required=${this.required}
                                   ?disabled=${this.disabled}
                                   ?readonly=${this.readonly}
                                   @blur="${this.validate}"
                                   autocomplete="${u(this.autocomplete)||"off"}"
                            >
                            <div @click="${this._handleClick}"
                                 class="${W({"icon-right":!0,hidden:this.invisible})}"
                                 id="rightIcon"></div>
                        </div>
                    </div>
                </div>

            </div>

            <div
                    id="${e}"
                    style="
                    padding-left: calc(${this["label-width"]} + ${o?"15px":"0px"})
                    ;width: ${this.width?this.width:"auto"}
                    ;display: flex;   
                "
            >
                ${i[this["feedback-type"]]}

            </div>

        `}isValid(){const t=this.getValue(),e=this.format||L.getDefaultFormat(this.getDateType),o=this.required;return!t&&o?(console.error("Validation failed: Value is required but missing."),!1):!!this.isValidDateFormat(t,e)}checkValidity(){this.validate()}validate(){const t=this.isValid();this.setSelectorValid(!t);const e=this["feedback-visible-type"];if(e=="visible")return;const o=`${this.id}-feedback`,i=this.querySelector(`#${o}`);i.setAttribute("hidden",!0),(t&&e=="valid"||!t&&e=="invalid")&&i.removeAttribute("hidden")}setSelectorValid(t){const e=`${this.id}-input`;this.querySelector(`#${e}`).classList.toggle("is-invalid",t)}setValid(){this.setSelectorValid(!1)}inValid(){this.setSelectorValid(!0)}}var br,dr;br=j("l-c-datepicker"),br(dr=class extends _t{constructor(){super(),super.setDateType(L.DATE_TYPE.DATE)}});var ur,fr;ur=j("l-c-monthpicker"),ur(fr=class extends _t{constructor(){super(),super.setDateType(L.DATE_TYPE.MONTH)}});var gr,hr,vt;gr=j("l-c-triggerinput"),gr(hr=(vt=class extends le{constructor(){super(),super.setSelector("input")}setKeydownEventListener(){const t=this.shadowRoot.querySelector(super.getSelector);t&&(this._keydownHandler&&t.removeEventListener("keydown",this._keydownHandler),this._keydownHandler=e=>this._handleKeydown(e),t.addEventListener("keydown",this._keydownHandler))}_handleSearchClick(t){this.triggerPop()}_nothing(t){}_handleKeydown(t){const{key:e}=t;e==="Enter"&&!this["trigger-disabled"]&&this.triggerPop()}triggerPop(){const t=this.shadowRoot.querySelector(super.getSelector);this.handleTrigger&&this.handleTrigger(t.value)}disconnectedCallback(){super.disconnectedCallback(),this.observer.disconnect()}static get properties(){return{name:{type:String},size:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},value:{type:String},pattern:{type:String},placeholder:{type:String},maxlength:{type:String},minlength:{type:String},"valid-length-type":{type:String},handleTrigger:{type:Function},"component-style":{type:String},"trigger-disabled":{type:Boolean},autocomplete:{type:String}}}firstUpdated(){this.setKeydownEventListener()}render(){let t=this["label-align"]&&this["label-align"]==="left",e=!this.disabled&&!this.readonly;return O`
            <l-label-feed-container
                    width="${u(this.width)}"
                    id="${this.id}"
                    label="${u(this.label)}"
                    label-align="${u(this["label-align"])}"
                    label-width="${u(this["label-width"])}"
                    label-text-align="${u(this["label-text-align"])}"
                    required="${u(this.required)}"
                    feedback="${u(this.feedback)}"
                    feedback-type="${u(this["feedback-type"])}"
                    feedback-visible-type="${u(this["feedback-visible-type"])}"
            >
                <div slot="input" class="search-input-container">
                    <input
                            class="${W({"form-control":!0,"form-left-control":t,"form-control-lg":this.size==="large","form-control-sm":this.size==="small","search-input-right":e})}"
                            style="${this["component-style"]}"
                            id="${u(this.id)}"
                            name="${u(this.name)}"
                            maxlength="${(this["valid-length-type"]!="byte"?u(this.maxlength):null)??E}"
                            minlength="${(this["valid-length-type"]!="byte"?u(this.minlength):null)??E}"
                            ?required=${this.required}
                            ?disabled=${this.disabled}
                            ?readonly=${this.readonly}
                            placeholder="${u(this.placeholder)}"
                            pattern="${u(this.pattern)}"
                            value="${u(this.value)}"
                            @input="${o=>{}}"
                            @blur="${super.validate}"
                            @keyup="${(this["valid-length-type"]!="byte"?null:super.createChangeHandler(u(this.maxlength)))??E}"
                            autocomplete="${u(this.autocomplete)}"
                    >
                    <div @click="${this["trigger-disabled"]?this._nothing:this._handleSearchClick}"
                         class="search-icon-right"
                         id="rightIcon"></div>
                    
                </div>

            </l-label-feed-container>

        `}},vt.styles=[...le.styles,te`
            .search-input-container {
                position: relative;
                display: flex;
                align-items: center;
                flex-grow: 1;
            }

            .search-input-right {
                padding-right: 2rem;
                background-color: #fff;
            }

            .search-icon-right {
                position: absolute;
                right: 0.5rem;
                top: 50%;
                transform: translateY(-50%);
                width: 16px;
                height: 16px;
                background-image: url("data:image/svg+xml,%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                cursor: pointer;
                pointer-events: auto;
            }

            .form-control.is-invalid, .was-validated .form-control:invalid {
                border-color: var(--bs-danger);
                padding-right: calc(1.5em + .75rem);
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23df1414'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23df1414' stroke='none'/%3e%3c/svg%3e");
                background-repeat: no-repeat;
                background-position: right calc(.375em + .1875rem) center;
                background-size: calc(3.00em + .375rem) calc(.75em + .375rem)
            }
        `],vt));class Ir extends _t{constructor(){var t;super(),t=this,this.isRelativeDateFuture=function(e,o,i){e===void 0&&(e=0),o===void 0&&(o=0),i===void 0&&(i=0);const l=t._getInitDate(),d=new Date;return d.setFullYear(d.getFullYear()+(e||0)),d.setMonth(d.getMonth()+(o||0)),d.setDate(d.getDate()+(i||0)),d>l},this.initCurrentMonth=()=>{this.initTodayDate()},this.initTodayDate=()=>{this._datepicker.setDate(this._getInitDate())},this.setValue=e=>{this._datepicker.setDate(e)},this.getValue=()=>this._datepicker?this._datepicker.input.value:null}static get properties(){return{"rel-year":{type:Number},"rel-month":{type:Number},"rel-day":{type:Number}}}firstUpdated(){this.initDatePicker()}initDatePicker(){const t=this.format||L.getDefaultFormat(this.getDateType);let e={mode:"range",dateFormat:t,onChange:M=>{this.validate()},inline:this.showAlways,onDayCreate:function(M,_,I,D){if(D.classList.contains("flatpickr-disabled")||D.classList.contains("prevMonthDay")||D.classList.contains("nextMonthDay"))return;const R=D.dateObj.getDay();R===0?D.style.color="#ff4d4d":R===6&&(D.style.color="#4d79ff")}};this.getDateType===L.DATE_TYPE.MONTH&&(e.plugins=[new Yr({shorthand:!0,dateFormat:t,altFormat:t})]);const o=this["rel-year"],i=this["rel-month"],l=this["rel-day"],d=this.isRelativeDateFuture(o,i,l);(o||i||l)&&(e.enable=[{from:d?this._getInitDate():this._calculateInitDate(o,i,l),to:d?this._calculateInitDate(o,i,l):this._getInitDate()}]);let y=[];const g=this["disable-day-from"],w=this["disable-day-to"];g!==void 0&&w!==void 0&&y.push(function(M){const _=M.getDate();return _>=g&&_<=w});const c=this["disable-date-from"],p=this["disable-date-to"];c&&p&&y.push({from:c,to:p}),y.length>0&&(e.disable=y),super._datepicker=Y(this.getSelector,e)}_calculateInitDate(t,e,o){const i=this._getInitDate();return new Date(i.getFullYear()+(t||0),i.getMonth()+(e||0),i.getDate()+(o||0))}isValid(){const t=this.getFromValue(),e=this.getToValue(),o=this.format||L.getDefaultFormat(this.getDateType),i=this.required;return!t&&i?(console.error("Validation failed: From Value is required but missing."),!1):!e&&i?(console.error("Validation failed: to Value is required but missing."),!1):!!this.isValidDateFormat(t,o)}checkValidity(){this.validate()}_getInitDate(){const t=this["start-year-offset"]||0,e=this["start-month-offset"]||0,o=this["start-day-offset"]||0,i=new Date;return i.setFullYear(i.getFullYear()+t),i.setMonth(i.getMonth()+e),i.setDate(i.getDate()+o),i}getFromValue(){return this.getValue().split(L.RANGE_INFIX)[0].trim()}getToValue(){var t;return((t=this.getValue().split(L.RANGE_INFIX)[1])==null?void 0:t.trim())||""}}var pr,mr;pr=j("l-c-range-datepicker"),pr(mr=class extends Ir{constructor(){super(),this.setDateType(L.DATE_TYPE.DATE)}});var vr,yr,yt;vr=j("l-c-textarea"),vr(yr=(yt=class extends le{constructor(){super(),super.setSelector("textarea")}static get properties(){return{name:{type:String},size:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},value:{type:String},pattern:{type:String},placeholder:{type:String},maxlength:{type:String},minlength:{type:String},"valid-length-type":{type:String},"component-style":{type:String},rows:{type:Number},autocomplete:{type:String}}}render(){let t=this["label-align"]&&this["label-align"]==="left";return O`
            <l-label-feed-container
                    width="${u(this.width)}"
                    id="${this.id}"
                    label="${u(this.label)}"
                    label-align="${u(this["label-align"])}"
                    label-width="${u(this["label-width"])}"
                    label-text-align="${u(this["label-text-align"])}"
                    required="${u(this.required)}"
                    feedback="${u(this.feedback)}"
                    feedback-type="${u(this["feedback-type"])}"
                    feedback-visible-type="${u(this["feedback-visible-type"])}"
            >
                
                <textarea
                        slot="input"
                        class="${W({"form-control":!0,"form-left-control":t,"form-control-plaintext":this.type==="planText","form-control-lg":this.size==="large","form-control-sm":this.size==="small"})}"
                        style="${this["component-style"]}"
                        
                        id="${u(this.id)}"
                        name="${u(this.name)}"
                        
                        maxlength="${(this["valid-length-type"]!="byte"?u(this.maxlength):null)??E}"
                        minlength="${(this["valid-length-type"]!="byte"?u(this.minlength):null)??E}"
                        
                        ?required=${this.required}
                        ?disabled=${this.disabled}
                        ?readonly=${this.readonly}
                        placeholder="${u(this.placeholder)}"
                        @blur="${super.validate}"
                        @keyup="${(this["valid-length-type"]!="byte"?null:super.createChangeHandler(u(this.maxlength)))??E}"
                        autocomplete="${u(this.autocomplete)}"
                >${u(this.value)}</textarea>
                
            </l-label-feed-container>

        `}},yt.styles=[...le.styles],yt));var wr,xr;wr=j("l-c-range-monthpicker"),wr(xr=class extends Ir{constructor(){super(),this.setDateType(L.DATE_TYPE.MONTH)}});var Fr,kr,wt;Fr=j("l-c-select"),Fr(kr=(wt=class extends le{constructor(){super(),super.setSelector("select")}disconnectedCallback(){super.disconnectedCallback()}static get properties(){return{placeholder:{type:String},name:{type:String},size:{type:String},disabled:{type:Boolean},value:{type:String},text:{type:String},options:{type:Array},"default-type":{type:String},"component-style":{type:String}}}render(){let t=this["label-align"]&&this["label-align"]==="left";const e=this.options;return O`
            <l-label-feed-container
                    width="${u(this.width)}"
                    id="${this.id}"
                    label="${u(this.label)}"
                    label-align="${u(this["label-align"])}"
                    label-width="${u(this["label-width"])}"
                    label-text-align="${u(this["label-text-align"])}"
                    required="${u(this.required)}"
                    feedback="${u(this.feedback)}"
                    feedback-type="${u(this["feedback-type"])}"
                    feedback-visible-type="${u(this["feedback-visible-type"])}"
            >
                <div slot="input" class="search-input-container">
                    <select
                            width="${u(this.width)}"
                            class="${W({"form-select":!0,"form-left-control":t,"form-select-lg":this.size==="large","form-select-sm":this.size==="small"})}"
                            style="${this["component-style"]}"
                            
                            id="${u(this.id)}"
                            name="${u(this.name)}"
                            value="${u(this.value)}"
                            ?required=${this.required}
                            ?disabled=${this.disabled}
                            ?readonly=${this.readonly}
                            @change="${this._handleChange}"
                            @blur="${super.validate}"
                    >
                        ${e==null?void 0:e.map(o=>O`
                                            <option value="${o.value}" ?selected=${o.value===this.value} ?disabled=${o==null?void 0:o.disabled}>
                                                ${o.label}
                                            </option>`)}
                    </select>
                </div>
            </l-label-feed-container>
        `}_handleChange(t){var o;this.value=t.target.value;const e=(o=this.options)==null?void 0:o.find(i=>i.value===this.value);this.text=e?e.label:""}getValue(){return this.value?this.value:this.options&&this.options.length>0?this.options[0].value:""}getText(){return this.text?this.text:this.options&&this.options.length>0?this.options[0].label:""}getSelectedIndex(){if(this.options&&this.options.length>0){const t=this.options.findIndex(e=>e.value===this.value);return t!==-1?t:0}return-1}getSelectedOption(){if(this.options&&this.options.length>0){const t=this.options.find(e=>e.value===this.value);return t||this.options[0]}return null}getOptions(){return this.options}setValue(t){var o;const e=(o=this.options)==null?void 0:o.find(i=>i.value===t);e?(this.value=e.value,this.text=e.label):(this.value="",this.text="",console.warn(`Value "${t}" does not match any option`))}updated(t){if((t.has("options")||t.has("default-type"))&&this.options&&this.options.length>0){if(this["default-type"]==="select"){const e=this.placeholder||"Choose an option";this.options[0].label!==e&&(this.options=[{value:"",label:e,disabled:!0},...this.options]),this.value="",this.text=e}else if(this["default-type"]==="all"){const e=this.placeholder||"All options";this.options[0].label!==e&&(this.options=[{value:"all",label:e},...this.options]),this.value="all",this.text=e}}}},wt.styles=[...le.styles,te`
            .search-input-container {
                position: relative;
                display: flex;
                align-items: center;
                flex-grow: 1;
            }
        `],wt));
