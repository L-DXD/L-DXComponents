(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,J=P.ShadowRoot&&(P.ShadyCSS===void 0||P.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),tt=new WeakMap;let zt=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(J&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=tt.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&tt.set(r,t))}return t}toString(){return this.cssText}};const Gt=e=>new zt(typeof e=="string"?e:e+"",void 0,Z),_=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,a,i)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[i+1],e[0]);return new zt(r,e,Z)},St=(e,t)=>{if(J)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),a=P.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=r.cssText,e.appendChild(o)}},rt=J?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return Gt(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Et,defineProperty:Ct,getOwnPropertyDescriptor:Lt,getOwnPropertyNames:Tt,getOwnPropertySymbols:Pt,getPrototypeOf:Mt}=Object,h=globalThis,ot=h.trustedTypes,Ut=ot?ot.emptyScript:"",O=h.reactiveElementPolyfillSupport,R=(e,t)=>e,K={toAttribute(e,t){switch(t){case Boolean:e=e?Ut:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},At=(e,t)=>!Et(e,t),at={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:At};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),h.litPropertyMetadata??(h.litPropertyMetadata=new WeakMap);class z extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=at){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const o=Symbol(),a=this.getPropertyDescriptor(t,o,r);a!==void 0&&Ct(this.prototype,t,a)}}static getPropertyDescriptor(t,r,o){const{get:a,set:i}=Lt(this.prototype,t)??{get(){return this[r]},set(n){this[r]=n}};return{get(){return a==null?void 0:a.call(this)},set(n){const l=a==null?void 0:a.call(this);i.call(this,n),this.requestUpdate(t,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??at}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;const t=Mt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){const r=this.properties,o=[...Tt(r),...Pt(r)];for(const a of o)this.createProperty(a,r[a])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[o,a]of r)this.elementProperties.set(o,a)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const a=this._$Eu(r,o);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const a of o)r.unshift(rt(a))}else t!==void 0&&r.push(rt(t));return r}static _$Eu(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return St(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostConnected)==null?void 0:o.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostDisconnected)==null?void 0:o.call(r)})}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EC(t,r){var i;const o=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,o);if(a!==void 0&&o.reflect===!0){const n=(((i=o.converter)==null?void 0:i.toAttribute)!==void 0?o.converter:K).toAttribute(r,o.type);this._$Em=t,n==null?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(t,r){var i;const o=this.constructor,a=o._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const n=o.getPropertyOptions(a),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)==null?void 0:i.fromAttribute)!==void 0?n.converter:K;this._$Em=a,this[a]=l.fromAttribute(r,n.type),this._$Em=null}}requestUpdate(t,r,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??At)(this[t],r))return;this.P(t,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,o){this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[i,n]of a)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],n)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(o=this._$EO)==null||o.forEach(a=>{var i;return(i=a.hostUpdate)==null?void 0:i.call(a)}),this.update(r)):this._$EU()}catch(a){throw t=!1,this._$EU(),a}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(o=>{var a;return(a=o.hostUpdated)==null?void 0:a.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(t){}firstUpdated(t){}}z.elementStyles=[],z.shadowRootOptions={mode:"open"},z[R("elementProperties")]=new Map,z[R("finalized")]=new Map,O==null||O({ReactiveElement:z}),(h.reactiveElementVersions??(h.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=globalThis,M=G.trustedTypes,et=M?M.createPolicy("lit-html",{createHTML:e=>e}):void 0,$t="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,_t="?"+v,qt=`<${_t}>`,k=document,S=()=>k.createComment(""),E=e=>e===null||typeof e!="object"&&typeof e!="function",Q=Array.isArray,Ot=e=>Q(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",N=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,nt=/>/g,u=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,bt=/"/g,jt=/^(?:script|style|textarea|title)$/i,Nt=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),g=Nt(1),F=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),lt=new WeakMap,w=k.createTreeWalker(k,129);function Bt(e,t){if(!Q(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return et!==void 0?et.createHTML(t):t}const Ht=(e,t)=>{const r=e.length-1,o=[];let a,i=t===2?"<svg>":t===3?"<math>":"",n=B;for(let l=0;l<r;l++){const b=e[l];let m,c,p=-1,x=0;for(;x<b.length&&(n.lastIndex=x,c=n.exec(b),c!==null);)x=n.lastIndex,n===B?c[1]==="!--"?n=it:c[1]!==void 0?n=nt:c[2]!==void 0?(jt.test(c[2])&&(a=RegExp("</"+c[2],"g")),n=u):c[3]!==void 0&&(n=u):n===u?c[0]===">"?(n=a??B,p=-1):c[1]===void 0?p=-2:(p=n.lastIndex-c[2].length,m=c[1],n=c[3]===void 0?u:c[3]==='"'?bt:st):n===bt||n===st?n=u:n===it||n===nt?n=B:(n=u,a=void 0);const f=n===u&&e[l+1].startsWith("/>")?" ":"";i+=n===B?b+qt:p>=0?(o.push(m),b.slice(0,p)+$t+b.slice(p)+v+f):b+v+(p===-2?l:f)}return[Bt(e,i+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class C{constructor({strings:t,_$litType$:r},o){let a;this.parts=[];let i=0,n=0;const l=t.length-1,b=this.parts,[m,c]=Ht(t,r);if(this.el=C.createElement(m,o),w.currentNode=this.el.content,r===2||r===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(a=w.nextNode())!==null&&b.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(const p of a.getAttributeNames())if(p.endsWith($t)){const x=c[n++],f=a.getAttribute(p).split(v),T=/([.?@])?(.*)/.exec(x);b.push({type:1,index:i,name:T[2],strings:f,ctor:T[1]==="."?It:T[1]==="?"?Dt:T[1]==="@"?Xt:U}),a.removeAttribute(p)}else p.startsWith(v)&&(b.push({type:6,index:i}),a.removeAttribute(p));if(jt.test(a.tagName)){const p=a.textContent.split(v),x=p.length-1;if(x>0){a.textContent=M?M.emptyScript:"";for(let f=0;f<x;f++)a.append(p[f],S()),w.nextNode(),b.push({type:2,index:++i});a.append(p[x],S())}}}else if(a.nodeType===8)if(a.data===_t)b.push({type:2,index:i});else{let p=-1;for(;(p=a.data.indexOf(v,p+1))!==-1;)b.push({type:7,index:i}),p+=v.length-1}i++}}static createElement(t,r){const o=k.createElement("template");return o.innerHTML=t,o}}function A(e,t,r=e,o){var n,l;if(t===F)return t;let a=o!==void 0?(n=r._$Co)==null?void 0:n[o]:r._$Cl;const i=E(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==i&&((l=a==null?void 0:a._$AO)==null||l.call(a,!1),i===void 0?a=void 0:(a=new i(e),a._$AT(e,r,o)),o!==void 0?(r._$Co??(r._$Co=[]))[o]=a:r._$Cl=a),a!==void 0&&(t=A(e,a._$AS(e,t.values),a,o)),t}class Vt{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:o}=this._$AD,a=((t==null?void 0:t.creationScope)??k).importNode(r,!0);w.currentNode=a;let i=w.nextNode(),n=0,l=0,b=o[0];for(;b!==void 0;){if(n===b.index){let m;b.type===2?m=new L(i,i.nextSibling,this,t):b.type===1?m=new b.ctor(i,b.name,b.strings,this,t):b.type===6&&(m=new Yt(i,this,t)),this._$AV.push(m),b=o[++l]}n!==(b==null?void 0:b.index)&&(i=w.nextNode(),n++)}return w.currentNode=k,a}p(t){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class L{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,o,a){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=A(this,t,r),E(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==F&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ot(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&E(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){var i;const{values:r,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=C.createElement(Bt(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===a)this._$AH.p(r);else{const n=new Vt(a,this),l=n.u(this.options);n.p(r),this.T(l),this._$AH=n}}_$AC(t){let r=lt.get(t.strings);return r===void 0&&lt.set(t.strings,r=new C(t)),r}k(t){Q(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,a=0;for(const i of t)a===r.length?r.push(o=new L(this.O(S()),this.O(S()),this,this.options)):o=r[a],o._$AI(i),a++;a<r.length&&(this._$AR(o&&o._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,r);t&&t!==this._$AB;){const a=t.nextSibling;t.remove(),t=a}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class U{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,o,a,i){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=r,this._$AM=a,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=d}_$AI(t,r=this,o,a){const i=this.strings;let n=!1;if(i===void 0)t=A(this,t,r,0),n=!E(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const l=t;let b,m;for(t=i[0],b=0;b<i.length-1;b++)m=A(this,l[o+b],r,b),m===F&&(m=this._$AH[b]),n||(n=!E(m)||m!==this._$AH[b]),m===d?t=d:t!==d&&(t+=(m??"")+i[b+1]),this._$AH[b]=m}n&&!a&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class It extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Dt extends U{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Xt extends U{constructor(t,r,o,a,i){super(t,r,o,a,i),this.type=5}_$AI(t,r=this){if((t=A(this,t,r,0)??d)===F)return;const o=this._$AH,a=t===d&&o!==d||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==d&&(o===d||a);a&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class Yt{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){A(this,t)}}const H=G.litHtmlPolyfillSupport;H==null||H(C,L),(G.litHtmlVersions??(G.litHtmlVersions=[])).push("3.2.1");const Wt=(e,t,r)=>{const o=(r==null?void 0:r.renderBefore)??t;let a=o._$litPart$;if(a===void 0){const i=(r==null?void 0:r.renderBefore)??null;o._$litPart$=a=new L(t.insertBefore(S(),i),i,void 0,r??{})}return a._$AI(e),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class y extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Wt(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return F}}var Ft;y._$litElement$=!0,y.finalized=!0,(Ft=globalThis.litElementHydrateSupport)==null||Ft.call(globalThis,{LitElement:y});const V=globalThis.litElementPolyfillSupport;V==null||V({LitElement:y});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Jt=e=>(...t)=>({_$litDirective$:e,values:t});class Zt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};var pt,dt,I;pt=j("l-label"),pt(dt=(I=class extends y{static get properties(){return{label:{type:String},id:{type:String},"label-align":{type:String},"label-width":{type:String},"label-text-align":{type:String},required:{type:String}}}render(){if(!this.label)return"";let t=this["label-align"]&&this["label-align"]==="left";return g`
            <label
                    class="${t&&this.label?"form-left-label":"form-label"}"
                    for="${this.id}"
                    style="
                        width: ${this["label-width"]||"auto"};
                        text-align: ${this["label-text-align"]||"left"}
                    "
            >
                ${this.required=="true"?t?g`<span style="color: #df1414;margin-right: 2px">*</span>${this.label}`:g`${this.label}<span style="color: #df1414;margin-left: 2px">*</span>`:this.label} 
            </label>
        `}},I.styles=[_`
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
            `],I));/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=Jt(class extends Zt{constructor(e){var t;if(super(e),e.type!==Kt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var o,a;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((o=this.nt)!=null&&o.has(i))&&this.st.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.st)i in t||(r.remove(i),this.st.delete(i));for(const i in t){const n=!!t[i];n===this.st.has(i)||(a=this.nt)!=null&&a.has(i)||(n?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return F}});class Rt{static get styles(){return _`
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

            .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
                margin-top: 0;
                margin-bottom: .5rem;
                font-weight: 600;
                line-height: 1.2;
                color: var(--bs-heading-color)
            }

            .h1, h1 {
                font-size: calc(1.34375rem + 1.125vw)
            }

            @media (min-width: 1200px) {
                .h1, h1 {
                    font-size: 2.1875rem
                }
            }

            .h2, h2 {
                font-size: calc(1.3rem + .6vw)
            }

            @media (min-width: 1200px) {
                .h2, h2 {
                    font-size: 1.75rem
                }
            }

            .h3, h3 {
                font-size: calc(1.278125rem + .3375vw)
            }

            @media (min-width: 1200px) {
                .h3, h3 {
                    font-size: 1.53125rem
                }
            }

            .h4, h4 {
                font-size: calc(1.25625rem + .075vw)
            }

            @media (min-width: 1200px) {
                .h4, h4 {
                    font-size: 1.3125rem
                }
            }

            .h5, h5 {
                font-size: 1.09375rem
            }

            .h6, h6 {
                font-size: .875rem
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

            .small, small {
                font-size: .875em
            }

            .mark, mark {
                padding: .1875em;
                color: var(--bs-highlight-color);
                background-color: var(--bs-highlight-bg)
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

            .lead {
                font-size: 1.09375rem;
                font-weight: 300
            }

            .display-1 {
                font-size: calc(1.625rem + 4.5vw);
                font-weight: 300;
                line-height: 1.2
            }

            @media (min-width: 1200px) {
                .display-1 {
                    font-size: 5rem
                }
            }

            .display-2 {
                font-size: calc(1.575rem + 3.9vw);
                font-weight: 300;
                line-height: 1.2
            }

            @media (min-width: 1200px) {
                .display-2 {
                    font-size: 4.5rem
                }
            }

            .display-3 {
                font-size: calc(1.525rem + 3.3vw);
                font-weight: 300;
                line-height: 1.2
            }

            @media (min-width: 1200px) {
                .display-3 {
                    font-size: 4rem
                }
            }

            .display-4 {
                font-size: calc(1.475rem + 2.7vw);
                font-weight: 300;
                line-height: 1.2
            }

            @media (min-width: 1200px) {
                .display-4 {
                    font-size: 3.5rem
                }
            }

            .display-5 {
                font-size: calc(1.425rem + 2.1vw);
                font-weight: 300;
                line-height: 1.2
            }

            @media (min-width: 1200px) {
                .display-5 {
                    font-size: 3rem
                }
            }

            .display-6 {
                font-size: calc(1.375rem + 1.5vw);
                font-weight: 300;
                line-height: 1.2
            }

            @media (min-width: 1200px) {
                .display-6 {
                    font-size: 2.5rem
                }
            }

            .list-unstyled {
                padding-left: 0;
                list-style: none
            }

            .list-inline {
                padding-left: 0;
                list-style: none
            }

            .list-inline-item {
                display: inline-block
            }

            .list-inline-item:not(:last-child) {
                margin-right: .5rem
            }

            .initialism {
                font-size: .875em;
                text-transform: uppercase
            }

            .blockquote {
                margin-bottom: 1rem;
                font-size: 1.09375rem
            }

            .blockquote > :last-child {
                margin-bottom: 0
            }

            .blockquote-footer {
                margin-top: -1rem;
                margin-bottom: 1rem;
                font-size: .875em;
                color: #404548
            }

            .blockquote-footer::before {
                content: "— "
            }

            .img-fluid {
                max-width: 100%;
                height: auto
            }

            .img-thumbnail {
                padding: .25rem;
                background-color: var(--bs-body-bg);
                border: var(--bs-border-width) solid var(--bs-border-color);
                border-radius: var(--bs-border-radius);
                max-width: 100%;
                height: auto
            }

            .figure {
                display: inline-block
            }

            .figure-img {
                margin-bottom: .5rem;
                line-height: 1
            }

            .figure-caption {
                font-size: .875em;
                color: var(--bs-secondary-color)
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


            .row {
                --bs-gutter-x: 20px;
                --bs-gutter-y: 0;
                display: flex;
                flex-wrap: wrap;
                margin-top: calc(-1 * var(--bs-gutter-y));
                margin-right: calc(-.5 * var(--bs-gutter-x));
                margin-left: calc(-.5 * var(--bs-gutter-x))
            }

            .row > * {
                flex-shrink: 0;
                width: 100%;
                max-width: 100%;
                padding-right: calc(var(--bs-gutter-x) * .5);
                padding-left: calc(var(--bs-gutter-x) * .5);
                margin-top: var(--bs-gutter-y)
            }

            .col {
                flex: 1 0 0%
            }

            .row-cols-auto > * {
                flex: 0 0 auto;
                width: auto
            }

            .row-cols-1 > * {
                flex: 0 0 auto;
                width: 100%
            }

            .row-cols-2 > * {
                flex: 0 0 auto;
                width: 50%
            }

            .row-cols-3 > * {
                flex: 0 0 auto;
                width: 33.33333333%
            }

            .row-cols-4 > * {
                flex: 0 0 auto;
                width: 25%
            }

            .row-cols-5 > * {
                flex: 0 0 auto;
                width: 20%
            }

            .row-cols-6 > * {
                flex: 0 0 auto;
                width: 16.66666667%
            }

            .col-auto {
                flex: 0 0 auto;
                width: auto
            }

            .col-1 {
                flex: 0 0 auto;
                width: 8.33333333%
            }

            .col-2 {
                flex: 0 0 auto;
                width: 16.66666667%
            }

            .col-3 {
                flex: 0 0 auto;
                width: 25%
            }

            .col-4 {
                flex: 0 0 auto;
                width: 33.33333333%
            }

            .col-5 {
                flex: 0 0 auto;
                width: 41.66666667%
            }

            .col-6 {
                flex: 0 0 auto;
                width: 50%
            }

            .col-7 {
                flex: 0 0 auto;
                width: 58.33333333%
            }

            .col-8 {
                flex: 0 0 auto;
                width: 66.66666667%
            }

            .col-9 {
                flex: 0 0 auto;
                width: 75%
            }

            .col-10 {
                flex: 0 0 auto;
                width: 83.33333333%
            }

            .col-11 {
                flex: 0 0 auto;
                width: 91.66666667%
            }

            .col-12 {
                flex: 0 0 auto;
                width: 100%
            }

            .offset-1 {
                margin-left: 8.33333333%
            }

            .offset-2 {
                margin-left: 16.66666667%
            }

            .offset-3 {
                margin-left: 25%
            }

            .offset-4 {
                margin-left: 33.33333333%
            }

            .offset-5 {
                margin-left: 41.66666667%
            }

            .offset-6 {
                margin-left: 50%
            }

            .offset-7 {
                margin-left: 58.33333333%
            }

            .offset-8 {
                margin-left: 66.66666667%
            }

            .offset-9 {
                margin-left: 75%
            }

            .offset-10 {
                margin-left: 83.33333333%
            }

            .offset-11 {
                margin-left: 91.66666667%
            }

            .g-0, .gx-0 {
                --bs-gutter-x: 0
            }

            .g-0, .gy-0 {
                --bs-gutter-y: 0
            }

            .g-1, .gx-1 {
                --bs-gutter-x: 0.25rem
            }

            .g-1, .gy-1 {
                --bs-gutter-y: 0.25rem
            }

            .g-2, .gx-2 {
                --bs-gutter-x: 0.5rem
            }

            .g-2, .gy-2 {
                --bs-gutter-y: 0.5rem
            }

            .g-3, .gx-3 {
                --bs-gutter-x: 1rem
            }

            .g-3, .gy-3 {
                --bs-gutter-y: 1rem
            }

            .g-4, .gx-4 {
                --bs-gutter-x: 1.5rem
            }

            .g-4, .gy-4 {
                --bs-gutter-y: 1.5rem
            }

            .g-5, .gx-5 {
                --bs-gutter-x: 3rem
            }

            .g-5, .gy-5 {
                --bs-gutter-y: 3rem
            }

            @media (min-width: 576px) {
                .col-sm {
                    flex: 1 0 0%
                }

                .row-cols-sm-auto > * {
                    flex: 0 0 auto;
                    width: auto
                }

                .row-cols-sm-1 > * {
                    flex: 0 0 auto;
                    width: 100%
                }

                .row-cols-sm-2 > * {
                    flex: 0 0 auto;
                    width: 50%
                }

                .row-cols-sm-3 > * {
                    flex: 0 0 auto;
                    width: 33.33333333%
                }

                .row-cols-sm-4 > * {
                    flex: 0 0 auto;
                    width: 25%
                }

                .row-cols-sm-5 > * {
                    flex: 0 0 auto;
                    width: 20%
                }

                .row-cols-sm-6 > * {
                    flex: 0 0 auto;
                    width: 16.66666667%
                }

                .col-sm-auto {
                    flex: 0 0 auto;
                    width: auto
                }

                .col-sm-1 {
                    flex: 0 0 auto;
                    width: 8.33333333%
                }

                .col-sm-2 {
                    flex: 0 0 auto;
                    width: 16.66666667%
                }

                .col-sm-3 {
                    flex: 0 0 auto;
                    width: 25%
                }

                .col-sm-4 {
                    flex: 0 0 auto;
                    width: 33.33333333%
                }

                .col-sm-5 {
                    flex: 0 0 auto;
                    width: 41.66666667%
                }

                .col-sm-6 {
                    flex: 0 0 auto;
                    width: 50%
                }

                .col-sm-7 {
                    flex: 0 0 auto;
                    width: 58.33333333%
                }

                .col-sm-8 {
                    flex: 0 0 auto;
                    width: 66.66666667%
                }

                .col-sm-9 {
                    flex: 0 0 auto;
                    width: 75%
                }

                .col-sm-10 {
                    flex: 0 0 auto;
                    width: 83.33333333%
                }

                .col-sm-11 {
                    flex: 0 0 auto;
                    width: 91.66666667%
                }

                .col-sm-12 {
                    flex: 0 0 auto;
                    width: 100%
                }

                .offset-sm-0 {
                    margin-left: 0
                }

                .offset-sm-1 {
                    margin-left: 8.33333333%
                }

                .offset-sm-2 {
                    margin-left: 16.66666667%
                }

                .offset-sm-3 {
                    margin-left: 25%
                }

                .offset-sm-4 {
                    margin-left: 33.33333333%
                }

                .offset-sm-5 {
                    margin-left: 41.66666667%
                }

                .offset-sm-6 {
                    margin-left: 50%
                }

                .offset-sm-7 {
                    margin-left: 58.33333333%
                }

                .offset-sm-8 {
                    margin-left: 66.66666667%
                }

                .offset-sm-9 {
                    margin-left: 75%
                }

                .offset-sm-10 {
                    margin-left: 83.33333333%
                }

                .offset-sm-11 {
                    margin-left: 91.66666667%
                }

                .g-sm-0, .gx-sm-0 {
                    --bs-gutter-x: 0
                }

                .g-sm-0, .gy-sm-0 {
                    --bs-gutter-y: 0
                }

                .g-sm-1, .gx-sm-1 {
                    --bs-gutter-x: 0.25rem
                }

                .g-sm-1, .gy-sm-1 {
                    --bs-gutter-y: 0.25rem
                }

                .g-sm-2, .gx-sm-2 {
                    --bs-gutter-x: 0.5rem
                }

                .g-sm-2, .gy-sm-2 {
                    --bs-gutter-y: 0.5rem
                }

                .g-sm-3, .gx-sm-3 {
                    --bs-gutter-x: 1rem
                }

                .g-sm-3, .gy-sm-3 {
                    --bs-gutter-y: 1rem
                }

                .g-sm-4, .gx-sm-4 {
                    --bs-gutter-x: 1.5rem
                }

                .g-sm-4, .gy-sm-4 {
                    --bs-gutter-y: 1.5rem
                }

                .g-sm-5, .gx-sm-5 {
                    --bs-gutter-x: 3rem
                }

                .g-sm-5, .gy-sm-5 {
                    --bs-gutter-y: 3rem
                }
            }

            @media (min-width: 768px) {
                .col-md {
                    flex: 1 0 0%
                }

                .row-cols-md-auto > * {
                    flex: 0 0 auto;
                    width: auto
                }

                .row-cols-md-1 > * {
                    flex: 0 0 auto;
                    width: 100%
                }

                .row-cols-md-2 > * {
                    flex: 0 0 auto;
                    width: 50%
                }

                .row-cols-md-3 > * {
                    flex: 0 0 auto;
                    width: 33.33333333%
                }

                .row-cols-md-4 > * {
                    flex: 0 0 auto;
                    width: 25%
                }

                .row-cols-md-5 > * {
                    flex: 0 0 auto;
                    width: 20%
                }

                .row-cols-md-6 > * {
                    flex: 0 0 auto;
                    width: 16.66666667%
                }

                .col-md-auto {
                    flex: 0 0 auto;
                    width: auto
                }

                .col-md-1 {
                    flex: 0 0 auto;
                    width: 8.33333333%
                }

                .col-md-2 {
                    flex: 0 0 auto;
                    width: 16.66666667%
                }

                .col-md-3 {
                    flex: 0 0 auto;
                    width: 25%
                }

                .col-md-4 {
                    flex: 0 0 auto;
                    width: 33.33333333%
                }

                .col-md-5 {
                    flex: 0 0 auto;
                    width: 41.66666667%
                }

                .col-md-6 {
                    flex: 0 0 auto;
                    width: 50%
                }

                .col-md-7 {
                    flex: 0 0 auto;
                    width: 58.33333333%
                }

                .col-md-8 {
                    flex: 0 0 auto;
                    width: 66.66666667%
                }

                .col-md-9 {
                    flex: 0 0 auto;
                    width: 75%
                }

                .col-md-10 {
                    flex: 0 0 auto;
                    width: 83.33333333%
                }

                .col-md-11 {
                    flex: 0 0 auto;
                    width: 91.66666667%
                }

                .col-md-12 {
                    flex: 0 0 auto;
                    width: 100%
                }

                .offset-md-0 {
                    margin-left: 0
                }

                .offset-md-1 {
                    margin-left: 8.33333333%
                }

                .offset-md-2 {
                    margin-left: 16.66666667%
                }

                .offset-md-3 {
                    margin-left: 25%
                }

                .offset-md-4 {
                    margin-left: 33.33333333%
                }

                .offset-md-5 {
                    margin-left: 41.66666667%
                }

                .offset-md-6 {
                    margin-left: 50%
                }

                .offset-md-7 {
                    margin-left: 58.33333333%
                }

                .offset-md-8 {
                    margin-left: 66.66666667%
                }

                .offset-md-9 {
                    margin-left: 75%
                }

                .offset-md-10 {
                    margin-left: 83.33333333%
                }

                .offset-md-11 {
                    margin-left: 91.66666667%
                }

                .g-md-0, .gx-md-0 {
                    --bs-gutter-x: 0
                }

                .g-md-0, .gy-md-0 {
                    --bs-gutter-y: 0
                }

                .g-md-1, .gx-md-1 {
                    --bs-gutter-x: 0.25rem
                }

                .g-md-1, .gy-md-1 {
                    --bs-gutter-y: 0.25rem
                }

                .g-md-2, .gx-md-2 {
                    --bs-gutter-x: 0.5rem
                }

                .g-md-2, .gy-md-2 {
                    --bs-gutter-y: 0.5rem
                }

                .g-md-3, .gx-md-3 {
                    --bs-gutter-x: 1rem
                }

                .g-md-3, .gy-md-3 {
                    --bs-gutter-y: 1rem
                }

                .g-md-4, .gx-md-4 {
                    --bs-gutter-x: 1.5rem
                }

                .g-md-4, .gy-md-4 {
                    --bs-gutter-y: 1.5rem
                }

                .g-md-5, .gx-md-5 {
                    --bs-gutter-x: 3rem
                }

                .g-md-5, .gy-md-5 {
                    --bs-gutter-y: 3rem
                }
            }

            @media (min-width: 992px) {
                .col-lg {
                    flex: 1 0 0%
                }

                .row-cols-lg-auto > * {
                    flex: 0 0 auto;
                    width: auto
                }

                .row-cols-lg-1 > * {
                    flex: 0 0 auto;
                    width: 100%
                }

                .row-cols-lg-2 > * {
                    flex: 0 0 auto;
                    width: 50%
                }

                .row-cols-lg-3 > * {
                    flex: 0 0 auto;
                    width: 33.33333333%
                }

                .row-cols-lg-4 > * {
                    flex: 0 0 auto;
                    width: 25%
                }

                .row-cols-lg-5 > * {
                    flex: 0 0 auto;
                    width: 20%
                }

                .row-cols-lg-6 > * {
                    flex: 0 0 auto;
                    width: 16.66666667%
                }

                .col-lg-auto {
                    flex: 0 0 auto;
                    width: auto
                }

                .col-lg-1 {
                    flex: 0 0 auto;
                    width: 8.33333333%
                }

                .col-lg-2 {
                    flex: 0 0 auto;
                    width: 16.66666667%
                }

                .col-lg-3 {
                    flex: 0 0 auto;
                    width: 25%
                }

                .col-lg-4 {
                    flex: 0 0 auto;
                    width: 33.33333333%
                }

                .col-lg-5 {
                    flex: 0 0 auto;
                    width: 41.66666667%
                }

                .col-lg-6 {
                    flex: 0 0 auto;
                    width: 50%
                }

                .col-lg-7 {
                    flex: 0 0 auto;
                    width: 58.33333333%
                }

                .col-lg-8 {
                    flex: 0 0 auto;
                    width: 66.66666667%
                }

                .col-lg-9 {
                    flex: 0 0 auto;
                    width: 75%
                }

                .col-lg-10 {
                    flex: 0 0 auto;
                    width: 83.33333333%
                }

                .col-lg-11 {
                    flex: 0 0 auto;
                    width: 91.66666667%
                }

                .col-lg-12 {
                    flex: 0 0 auto;
                    width: 100%
                }

                .offset-lg-0 {
                    margin-left: 0
                }

                .offset-lg-1 {
                    margin-left: 8.33333333%
                }

                .offset-lg-2 {
                    margin-left: 16.66666667%
                }

                .offset-lg-3 {
                    margin-left: 25%
                }

                .offset-lg-4 {
                    margin-left: 33.33333333%
                }

                .offset-lg-5 {
                    margin-left: 41.66666667%
                }

                .offset-lg-6 {
                    margin-left: 50%
                }

                .offset-lg-7 {
                    margin-left: 58.33333333%
                }

                .offset-lg-8 {
                    margin-left: 66.66666667%
                }

                .offset-lg-9 {
                    margin-left: 75%
                }

                .offset-lg-10 {
                    margin-left: 83.33333333%
                }

                .offset-lg-11 {
                    margin-left: 91.66666667%
                }

                .g-lg-0, .gx-lg-0 {
                    --bs-gutter-x: 0
                }

                .g-lg-0, .gy-lg-0 {
                    --bs-gutter-y: 0
                }

                .g-lg-1, .gx-lg-1 {
                    --bs-gutter-x: 0.25rem
                }

                .g-lg-1, .gy-lg-1 {
                    --bs-gutter-y: 0.25rem
                }

                .g-lg-2, .gx-lg-2 {
                    --bs-gutter-x: 0.5rem
                }

                .g-lg-2, .gy-lg-2 {
                    --bs-gutter-y: 0.5rem
                }

                .g-lg-3, .gx-lg-3 {
                    --bs-gutter-x: 1rem
                }

                .g-lg-3, .gy-lg-3 {
                    --bs-gutter-y: 1rem
                }

                .g-lg-4, .gx-lg-4 {
                    --bs-gutter-x: 1.5rem
                }

                .g-lg-4, .gy-lg-4 {
                    --bs-gutter-y: 1.5rem
                }

                .g-lg-5, .gx-lg-5 {
                    --bs-gutter-x: 3rem
                }

                .g-lg-5, .gy-lg-5 {
                    --bs-gutter-y: 3rem
                }
            }

            @media (min-width: 1200px) {
                .col-xl {
                    flex: 1 0 0%
                }

                .row-cols-xl-auto > * {
                    flex: 0 0 auto;
                    width: auto
                }

                .row-cols-xl-1 > * {
                    flex: 0 0 auto;
                    width: 100%
                }

                .row-cols-xl-2 > * {
                    flex: 0 0 auto;
                    width: 50%
                }

                .row-cols-xl-3 > * {
                    flex: 0 0 auto;
                    width: 33.33333333%
                }

                .row-cols-xl-4 > * {
                    flex: 0 0 auto;
                    width: 25%
                }

                .row-cols-xl-5 > * {
                    flex: 0 0 auto;
                    width: 20%
                }

                .row-cols-xl-6 > * {
                    flex: 0 0 auto;
                    width: 16.66666667%
                }

                .col-xl-auto {
                    flex: 0 0 auto;
                    width: auto
                }

                .col-xl-1 {
                    flex: 0 0 auto;
                    width: 8.33333333%
                }

                .col-xl-2 {
                    flex: 0 0 auto;
                    width: 16.66666667%
                }

                .col-xl-3 {
                    flex: 0 0 auto;
                    width: 25%
                }

                .col-xl-4 {
                    flex: 0 0 auto;
                    width: 33.33333333%
                }

                .col-xl-5 {
                    flex: 0 0 auto;
                    width: 41.66666667%
                }

                .col-xl-6 {
                    flex: 0 0 auto;
                    width: 50%
                }

                .col-xl-7 {
                    flex: 0 0 auto;
                    width: 58.33333333%
                }

                .col-xl-8 {
                    flex: 0 0 auto;
                    width: 66.66666667%
                }

                .col-xl-9 {
                    flex: 0 0 auto;
                    width: 75%
                }

                .col-xl-10 {
                    flex: 0 0 auto;
                    width: 83.33333333%
                }

                .col-xl-11 {
                    flex: 0 0 auto;
                    width: 91.66666667%
                }

                .col-xl-12 {
                    flex: 0 0 auto;
                    width: 100%
                }

                .offset-xl-0 {
                    margin-left: 0
                }

                .offset-xl-1 {
                    margin-left: 8.33333333%
                }

                .offset-xl-2 {
                    margin-left: 16.66666667%
                }

                .offset-xl-3 {
                    margin-left: 25%
                }

                .offset-xl-4 {
                    margin-left: 33.33333333%
                }

                .offset-xl-5 {
                    margin-left: 41.66666667%
                }

                .offset-xl-6 {
                    margin-left: 50%
                }

                .offset-xl-7 {
                    margin-left: 58.33333333%
                }

                .offset-xl-8 {
                    margin-left: 66.66666667%
                }

                .offset-xl-9 {
                    margin-left: 75%
                }

                .offset-xl-10 {
                    margin-left: 83.33333333%
                }

                .offset-xl-11 {
                    margin-left: 91.66666667%
                }

                .g-xl-0, .gx-xl-0 {
                    --bs-gutter-x: 0
                }

                .g-xl-0, .gy-xl-0 {
                    --bs-gutter-y: 0
                }

                .g-xl-1, .gx-xl-1 {
                    --bs-gutter-x: 0.25rem
                }

                .g-xl-1, .gy-xl-1 {
                    --bs-gutter-y: 0.25rem
                }

                .g-xl-2, .gx-xl-2 {
                    --bs-gutter-x: 0.5rem
                }

                .g-xl-2, .gy-xl-2 {
                    --bs-gutter-y: 0.5rem
                }

                .g-xl-3, .gx-xl-3 {
                    --bs-gutter-x: 1rem
                }

                .g-xl-3, .gy-xl-3 {
                    --bs-gutter-y: 1rem
                }

                .g-xl-4, .gx-xl-4 {
                    --bs-gutter-x: 1.5rem
                }

                .g-xl-4, .gy-xl-4 {
                    --bs-gutter-y: 1.5rem
                }

                .g-xl-5, .gx-xl-5 {
                    --bs-gutter-x: 3rem
                }

                .g-xl-5, .gy-xl-5 {
                    --bs-gutter-y: 3rem
                }
            }

            @media (min-width: 1660px) {
                .col-xxl {
                    flex: 1 0 0%
                }

                .row-cols-xxl-auto > * {
                    flex: 0 0 auto;
                    width: auto
                }

                .row-cols-xxl-1 > * {
                    flex: 0 0 auto;
                    width: 100%
                }

                .row-cols-xxl-2 > * {
                    flex: 0 0 auto;
                    width: 50%
                }

                .row-cols-xxl-3 > * {
                    flex: 0 0 auto;
                    width: 33.33333333%
                }

                .row-cols-xxl-4 > * {
                    flex: 0 0 auto;
                    width: 25%
                }

                .row-cols-xxl-5 > * {
                    flex: 0 0 auto;
                    width: 20%
                }

                .row-cols-xxl-6 > * {
                    flex: 0 0 auto;
                    width: 16.66666667%
                }

                .col-xxl-auto {
                    flex: 0 0 auto;
                    width: auto
                }

                .col-xxl-1 {
                    flex: 0 0 auto;
                    width: 8.33333333%
                }

                .col-xxl-2 {
                    flex: 0 0 auto;
                    width: 16.66666667%
                }

                .col-xxl-3 {
                    flex: 0 0 auto;
                    width: 25%
                }

                .col-xxl-4 {
                    flex: 0 0 auto;
                    width: 33.33333333%
                }

                .col-xxl-5 {
                    flex: 0 0 auto;
                    width: 41.66666667%
                }

                .col-xxl-6 {
                    flex: 0 0 auto;
                    width: 50%
                }

                .col-xxl-7 {
                    flex: 0 0 auto;
                    width: 58.33333333%
                }

                .col-xxl-8 {
                    flex: 0 0 auto;
                    width: 66.66666667%
                }

                .col-xxl-9 {
                    flex: 0 0 auto;
                    width: 75%
                }

                .col-xxl-10 {
                    flex: 0 0 auto;
                    width: 83.33333333%
                }

                .col-xxl-11 {
                    flex: 0 0 auto;
                    width: 91.66666667%
                }

                .col-xxl-12 {
                    flex: 0 0 auto;
                    width: 100%
                }

                .offset-xxl-0 {
                    margin-left: 0
                }

                .offset-xxl-1 {
                    margin-left: 8.33333333%
                }

                .offset-xxl-2 {
                    margin-left: 16.66666667%
                }

                .offset-xxl-3 {
                    margin-left: 25%
                }

                .offset-xxl-4 {
                    margin-left: 33.33333333%
                }

                .offset-xxl-5 {
                    margin-left: 41.66666667%
                }

                .offset-xxl-6 {
                    margin-left: 50%
                }

                .offset-xxl-7 {
                    margin-left: 58.33333333%
                }

                .offset-xxl-8 {
                    margin-left: 66.66666667%
                }

                .offset-xxl-9 {
                    margin-left: 75%
                }

                .offset-xxl-10 {
                    margin-left: 83.33333333%
                }

                .offset-xxl-11 {
                    margin-left: 91.66666667%
                }

                .g-xxl-0, .gx-xxl-0 {
                    --bs-gutter-x: 0
                }

                .g-xxl-0, .gy-xxl-0 {
                    --bs-gutter-y: 0
                }

                .g-xxl-1, .gx-xxl-1 {
                    --bs-gutter-x: 0.25rem
                }

                .g-xxl-1, .gy-xxl-1 {
                    --bs-gutter-y: 0.25rem
                }

                .g-xxl-2, .gx-xxl-2 {
                    --bs-gutter-x: 0.5rem
                }

                .g-xxl-2, .gy-xxl-2 {
                    --bs-gutter-y: 0.5rem
                }

                .g-xxl-3, .gx-xxl-3 {
                    --bs-gutter-x: 1rem
                }

                .g-xxl-3, .gy-xxl-3 {
                    --bs-gutter-y: 1rem
                }

                .g-xxl-4, .gx-xxl-4 {
                    --bs-gutter-x: 1.5rem
                }

                .g-xxl-4, .gy-xxl-4 {
                    --bs-gutter-y: 1.5rem
                }

                .g-xxl-5, .gx-xxl-5 {
                    --bs-gutter-x: 3rem
                }

                .g-xxl-5, .gy-xxl-5 {
                    --bs-gutter-y: 3rem
                }
            }

            @media (min-width: 1900px) {
                .col-xxxl {
                    flex: 1 0 0%
                }

                .row-cols-xxxl-auto > * {
                    flex: 0 0 auto;
                    width: auto
                }

                .row-cols-xxxl-1 > * {
                    flex: 0 0 auto;
                    width: 100%
                }

                .row-cols-xxxl-2 > * {
                    flex: 0 0 auto;
                    width: 50%
                }

                .row-cols-xxxl-3 > * {
                    flex: 0 0 auto;
                    width: 33.33333333%
                }

                .row-cols-xxxl-4 > * {
                    flex: 0 0 auto;
                    width: 25%
                }

                .row-cols-xxxl-5 > * {
                    flex: 0 0 auto;
                    width: 20%
                }

                .row-cols-xxxl-6 > * {
                    flex: 0 0 auto;
                    width: 16.66666667%
                }

                .col-xxxl-auto {
                    flex: 0 0 auto;
                    width: auto
                }

                .col-xxxl-1 {
                    flex: 0 0 auto;
                    width: 8.33333333%
                }

                .col-xxxl-2 {
                    flex: 0 0 auto;
                    width: 16.66666667%
                }

                .col-xxxl-3 {
                    flex: 0 0 auto;
                    width: 25%
                }

                .col-xxxl-4 {
                    flex: 0 0 auto;
                    width: 33.33333333%
                }

                .col-xxxl-5 {
                    flex: 0 0 auto;
                    width: 41.66666667%
                }

                .col-xxxl-6 {
                    flex: 0 0 auto;
                    width: 50%
                }

                .col-xxxl-7 {
                    flex: 0 0 auto;
                    width: 58.33333333%
                }

                .col-xxxl-8 {
                    flex: 0 0 auto;
                    width: 66.66666667%
                }

                .col-xxxl-9 {
                    flex: 0 0 auto;
                    width: 75%
                }

                .col-xxxl-10 {
                    flex: 0 0 auto;
                    width: 83.33333333%
                }

                .col-xxxl-11 {
                    flex: 0 0 auto;
                    width: 91.66666667%
                }

                .col-xxxl-12 {
                    flex: 0 0 auto;
                    width: 100%
                }

                .offset-xxxl-0 {
                    margin-left: 0
                }

                .offset-xxxl-1 {
                    margin-left: 8.33333333%
                }

                .offset-xxxl-2 {
                    margin-left: 16.66666667%
                }

                .offset-xxxl-3 {
                    margin-left: 25%
                }

                .offset-xxxl-4 {
                    margin-left: 33.33333333%
                }

                .offset-xxxl-5 {
                    margin-left: 41.66666667%
                }

                .offset-xxxl-6 {
                    margin-left: 50%
                }

                .offset-xxxl-7 {
                    margin-left: 58.33333333%
                }

                .offset-xxxl-8 {
                    margin-left: 66.66666667%
                }

                .offset-xxxl-9 {
                    margin-left: 75%
                }

                .offset-xxxl-10 {
                    margin-left: 83.33333333%
                }

                .offset-xxxl-11 {
                    margin-left: 91.66666667%
                }

                .g-xxxl-0, .gx-xxxl-0 {
                    --bs-gutter-x: 0
                }

                .g-xxxl-0, .gy-xxxl-0 {
                    --bs-gutter-y: 0
                }

                .g-xxxl-1, .gx-xxxl-1 {
                    --bs-gutter-x: 0.25rem
                }

                .g-xxxl-1, .gy-xxxl-1 {
                    --bs-gutter-y: 0.25rem
                }

                .g-xxxl-2, .gx-xxxl-2 {
                    --bs-gutter-x: 0.5rem
                }

                .g-xxxl-2, .gy-xxxl-2 {
                    --bs-gutter-y: 0.5rem
                }

                .g-xxxl-3, .gx-xxxl-3 {
                    --bs-gutter-x: 1rem
                }

                .g-xxxl-3, .gy-xxxl-3 {
                    --bs-gutter-y: 1rem
                }

                .g-xxxl-4, .gx-xxxl-4 {
                    --bs-gutter-x: 1.5rem
                }

                .g-xxxl-4, .gy-xxxl-4 {
                    --bs-gutter-y: 1.5rem
                }

                .g-xxxl-5, .gx-xxxl-5 {
                    --bs-gutter-x: 3rem
                }

                .g-xxxl-5, .gy-xxxl-5 {
                    --bs-gutter-y: 3rem
                }
            }

            .table {
                --bs-table-color-type: initial;
                --bs-table-bg-type: initial;
                --bs-table-color-state: initial;
                --bs-table-bg-state: initial;
                --bs-table-color: var(--bs-body-color);
                --bs-table-bg: transparent;
                --bs-table-border-color: var(--bs-border-color);
                --bs-table-accent-bg: transparent;
                --bs-table-striped-color: var(--bs-body-color);
                --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
                --bs-table-active-color: var(--bs-body-color);
                --bs-table-active-bg: rgba(0, 0, 0, 0.1);
                --bs-table-hover-color: var(--bs-body-color);
                --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
                width: 100%;
                margin-bottom: 1rem;
                vertical-align: top;
                border-color: var(--bs-table-border-color)
            }

            .table > :not(caption) > * > * {
                padding: .5rem .5rem;
                color: var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)));
                background-color: var(--bs-table-bg);
                border-bottom-width: var(--bs-border-width);
                box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)))
            }

            .table > tbody {
                vertical-align: inherit
            }

            .table > thead {
                vertical-align: bottom
            }

            .table-group-divider {
                border-top: calc(var(--bs-border-width) * 2) solid currentcolor
            }

            .caption-top {
                caption-side: top
            }

            .table-sm > :not(caption) > * > * {
                padding: .25rem .25rem
            }

            .table-bordered > :not(caption) > * {
                border-width: var(--bs-border-width) 0
            }

            .table-bordered > :not(caption) > * > * {
                border-width: 0 var(--bs-border-width)
            }

            .table-borderless > :not(caption) > * > * {
                border-bottom-width: 0
            }

            .table-borderless > :not(:first-child) {
                border-top-width: 0
            }

            .table-striped > tbody > tr:nth-of-type(odd) > * {
                --bs-table-color-type: var(--bs-table-striped-color);
                --bs-table-bg-type: var(--bs-table-striped-bg)
            }

            .table-striped-columns > :not(caption) > tr > :nth-child(even) {
                --bs-table-color-type: var(--bs-table-striped-color);
                --bs-table-bg-type: var(--bs-table-striped-bg)
            }

            .table-active {
                --bs-table-color-state: var(--bs-table-active-color);
                --bs-table-bg-state: var(--bs-table-active-bg)
            }

            .table-hover > tbody > tr:hover > * {
                --bs-table-color-state: var(--bs-table-hover-color);
                --bs-table-bg-state: var(--bs-table-hover-bg)
            }

            .table-primary {
                --bs-table-color: #000000;
                --bs-table-bg: #cce0ff;
                --bs-table-border-color: #b8cae6;
                --bs-table-striped-bg: #c2d5f2;
                --bs-table-striped-color: #000000;
                --bs-table-active-bg: #b8cae6;
                --bs-table-active-color: #000000;
                --bs-table-hover-bg: #bdcfec;
                --bs-table-hover-color: #000000;
                color: var(--bs-table-color);
                border-color: var(--bs-table-border-color)
            }

            .table-secondary {
                --bs-table-color: #000000;
                --bs-table-bg: #dddedf;
                --bs-table-border-color: #c7c8c9;
                --bs-table-striped-bg: #d2d3d4;
                --bs-table-striped-color: #000000;
                --bs-table-active-bg: #c7c8c9;
                --bs-table-active-color: #000000;
                --bs-table-hover-bg: #cccdce;
                --bs-table-hover-color: #000000;
                color: var(--bs-table-color);
                border-color: var(--bs-table-border-color)
            }

            .table-success {
                --bs-table-color: #000000;
                --bs-table-bg: #d1e7d7;
                --bs-table-border-color: #bcd0c2;
                --bs-table-striped-bg: #c7dbcc;
                --bs-table-striped-color: #000000;
                --bs-table-active-bg: #bcd0c2;
                --bs-table-active-color: #000000;
                --bs-table-hover-bg: #c1d6c7;
                --bs-table-hover-color: #000000;
                color: var(--bs-table-color);
                border-color: var(--bs-table-border-color)
            }

            .table-info {
                --bs-table-color: #000000;
                --bs-table-bg: #cff0ff;
                --bs-table-border-color: #bad8e6;
                --bs-table-striped-bg: #c5e4f2;
                --bs-table-striped-color: #000000;
                --bs-table-active-bg: #bad8e6;
                --bs-table-active-color: #000000;
                --bs-table-hover-bg: #bfdeec;
                --bs-table-hover-color: #000000;
                color: var(--bs-table-color);
                border-color: var(--bs-table-border-color)
            }

            .table-warning {
                --bs-table-color: #000000;
                --bs-table-bg: #ffecce;
                --bs-table-border-color: #e6d4b9;
                --bs-table-striped-bg: #f2e0c4;
                --bs-table-striped-color: #000000;
                --bs-table-active-bg: #e6d4b9;
                --bs-table-active-color: #000000;
                --bs-table-hover-bg: #ecdabf;
                --bs-table-hover-color: #000000;
                color: var(--bs-table-color);
                border-color: var(--bs-table-border-color)
            }

            .table-danger {
                --bs-table-color: #000000;
                --bs-table-bg: #f9d0d0;
                --bs-table-border-color: #e0bbbb;
                --bs-table-striped-bg: #edc6c6;
                --bs-table-striped-color: #000000;
                --bs-table-active-bg: #e0bbbb;
                --bs-table-active-color: #000000;
                --bs-table-hover-bg: #e6c0c0;
                --bs-table-hover-color: #000000;
                color: var(--bs-table-color);
                border-color: var(--bs-table-border-color)
            }

            .table-light {
                --bs-table-color: #000000;
                --bs-table-bg: #d5d6d7;
                --bs-table-border-color: #c0c1c2;
                --bs-table-striped-bg: #cacbcc;
                --bs-table-striped-color: #000000;
                --bs-table-active-bg: #c0c1c2;
                --bs-table-active-color: #000000;
                --bs-table-hover-bg: #c5c6c7;
                --bs-table-hover-color: #000000;
                color: var(--bs-table-color);
                border-color: var(--bs-table-border-color)
            }

            .table-dark {
                --bs-table-color: #FFFFFF;
                --bs-table-bg: #161616;
                --bs-table-border-color: #2d2d2d;
                --bs-table-striped-bg: #222222;
                --bs-table-striped-color: #FFFFFF;
                --bs-table-active-bg: #2d2d2d;
                --bs-table-active-color: #FFFFFF;
                --bs-table-hover-bg: #272727;
                --bs-table-hover-color: #FFFFFF;
                color: var(--bs-table-color);
                border-color: var(--bs-table-border-color)
            }

            .table-responsive {
                overflow-x: auto;
                -webkit-overflow-scrolling: touch
            }

            @media (max-width: 575.98px) {
                .table-responsive-sm {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch
                }
            }

            @media (max-width: 767.98px) {
                .table-responsive-md {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch
                }
            }

            @media (max-width: 991.98px) {
                .table-responsive-lg {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch
                }
            }

            @media (max-width: 1199.98px) {
                .table-responsive-xl {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch
                }
            }

            @media (max-width: 1659.98px) {
                .table-responsive-xxl {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch
                }
            }

            @media (max-width: 1899.98px) {
                .table-responsive-xxxl {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch
                }
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

            //.form-left-control {
            //    flex-grow: 1;
            //    padding: .375rem .75rem;
            //    font-size: .875rem;
            //    font-weight: 400;
            //    line-height: 1.5;
            //    color: var(--bs-body-color);
            //    -webkit-appearance: none;
            //    -moz-appearance: none;
            //    border: var(--bs-border-width) solid var(--bs-border-color);
            //    border-radius: 8px;
            //    outline: none;
            //    transition: all 0.3s ease-in-out;
            //}
            //
            //.form-control {
            //    display: block;
            //    width: 100%;
            //    padding: .375rem .75rem;
            //    font-size: .875rem;
            //    font-weight: 400;
            //    line-height: 1.5;
            //    color: var(--bs-body-color);
            //    -webkit-appearance: none;
            //    -moz-appearance: none;
            //    appearance: none;
            //    background-color: var(--bs-component-bg);
            //    background-clip: padding-box;
            //    border: var(--bs-border-width) solid var(--bs-border-color);
            //    border-radius: 8px;
            //    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out
            //}

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
                border-color: #80b3ff;
                outline: 0;
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

            .dropdown, .dropdown-center, .dropend, .dropstart, .dropup, .dropup-center {
                position: relative
            }

            .dropdown-toggle {
                white-space: nowrap
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

            .dropdown-menu {
                --bs-dropdown-zindex: 1000;
                --bs-dropdown-min-width: 12rem;
                --bs-dropdown-padding-x: 0;
                --bs-dropdown-padding-y: 0.5rem;
                --bs-dropdown-spacer: 0.125rem;
                --bs-dropdown-font-size: 0.875rem;
                --bs-dropdown-color: var(--bs-body-color);
                --bs-dropdown-bg: var(--bs-app-header-bg);
                --bs-dropdown-border-color: var(--bs-border-color-translucent);
                --bs-dropdown-border-radius: 8px;
                --bs-dropdown-border-width: var(--bs-border-width);
                --bs-dropdown-inner-border-radius: calc(8px - var(--bs-border-width));
                --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
                --bs-dropdown-divider-margin-y: 0.5rem;
                --bs-dropdown-box-shadow: 0 0.5rem 1rem rgba(var(--bs-body-color-rgb), 0.15);
                --bs-dropdown-link-color: var(--bs-body-color);
                --bs-dropdown-link-hover-color: var(--bs-body-color);
                --bs-dropdown-link-hover-bg: var(--bs-tertiary-bg);
                --bs-dropdown-link-active-color: #FFFFFF;
                --bs-dropdown-link-active-bg: #0066ff;
                --bs-dropdown-link-disabled-color: var(--bs-tertiary-color);
                --bs-dropdown-item-padding-x: 1rem;
                --bs-dropdown-item-padding-y: 0.5rem;
                --bs-dropdown-header-color: rgba(var(--bs-body-color-rgb), 0.5);
                --bs-dropdown-header-padding-x: 1rem;
                --bs-dropdown-header-padding-y: 0.5rem;
                position: absolute;
                z-index: var(--bs-dropdown-zindex);
                display: none;
                min-width: var(--bs-dropdown-min-width);
                padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);
                margin: 0;
                font-size: var(--bs-dropdown-font-size);
                color: var(--bs-dropdown-color);
                text-align: left;
                list-style: none;
                background-color: var(--bs-dropdown-bg);
                background-clip: padding-box;
                border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);
                border-radius: var(--bs-dropdown-border-radius)
            }

            .dropdown-menu[data-bs-popper] {
                top: 100%;
                left: 0;
                margin-top: var(--bs-dropdown-spacer)
            }

            .dropdown-menu-start {
                --bs-position: start
            }

            .dropdown-menu-start[data-bs-popper] {
                right: auto;
                left: 0
            }

            .dropdown-menu-end {
                --bs-position: end
            }

            .dropdown-menu-end[data-bs-popper] {
                right: 0;
                left: auto
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

            .dropup .dropdown-menu[data-bs-popper] {
                top: auto;
                bottom: 100%;
                margin-top: 0;
                margin-bottom: var(--bs-dropdown-spacer)
            }

            .dropup .dropdown-toggle::after {
                display: inline-block;
                margin-left: .255em;
                vertical-align: .255em;
                content: "";
                border-top: 0;
                border-right: .3em solid transparent;
                border-bottom: .3em solid;
                border-left: .3em solid transparent
            }

            .dropup .dropdown-toggle:empty::after {
                margin-left: 0
            }

            .dropend .dropdown-menu[data-bs-popper] {
                top: 0;
                right: auto;
                left: 100%;
                margin-top: 0;
                margin-left: var(--bs-dropdown-spacer)
            }

            .dropend .dropdown-toggle::after {
                display: inline-block;
                margin-left: .255em;
                vertical-align: .255em;
                content: "";
                border-top: .3em solid transparent;
                border-right: 0;
                border-bottom: .3em solid transparent;
                border-left: .3em solid
            }

            .dropend .dropdown-toggle:empty::after {
                margin-left: 0
            }

            .dropend .dropdown-toggle::after {
                vertical-align: 0
            }

            .dropstart .dropdown-menu[data-bs-popper] {
                top: 0;
                right: 100%;
                left: auto;
                margin-top: 0;
                margin-right: var(--bs-dropdown-spacer)
            }

            .dropstart .dropdown-toggle::after {
                display: inline-block;
                margin-left: .255em;
                vertical-align: .255em;
                content: ""
            }

            .dropstart .dropdown-toggle::after {
                display: none
            }

            .dropstart .dropdown-toggle::before {
                display: inline-block;
                margin-right: .255em;
                vertical-align: .255em;
                content: "";
                border-top: .3em solid transparent;
                border-right: .3em solid;
                border-bottom: .3em solid transparent
            }

            .dropstart .dropdown-toggle:empty::after {
                margin-left: 0
            }

            .dropstart .dropdown-toggle::before {
                vertical-align: 0
            }

            .dropdown-divider {
                height: 0;
                margin: var(--bs-dropdown-divider-margin-y) 0;
                overflow: hidden;
                border-top: 1px solid var(--bs-dropdown-divider-bg);
                opacity: 1
            }

            .dropdown-item {
                display: block;
                width: 100%;
                padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
                clear: both;
                font-weight: 400;
                color: var(--bs-dropdown-link-color);
                text-align: inherit;
                text-decoration: none;
                white-space: nowrap;
                background-color: transparent;
                border: 0;
                border-radius: var(--bs-dropdown-item-border-radius, 0)
            }

            .dropdown-item:focus, .dropdown-item:hover {
                color: var(--bs-dropdown-link-hover-color);
                background-color: var(--bs-dropdown-link-hover-bg)
            }

            .dropdown-item.active, .dropdown-item:active {
                color: var(--bs-dropdown-link-active-color);
                text-decoration: none;
                background-color: var(--bs-dropdown-link-active-bg)
            }

            .dropdown-item.disabled, .dropdown-item:disabled {
                color: var(--bs-dropdown-link-disabled-color);
                pointer-events: none;
                background-color: transparent
            }

            .dropdown-menu.show {
                display: block
            }

            .dropdown-header {
                display: block;
                padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);
                margin-bottom: 0;
                font-size: .765625rem;
                color: var(--bs-dropdown-header-color);
                white-space: nowrap
            }

            .dropdown-item-text {
                display: block;
                padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
                color: var(--bs-dropdown-link-color)
            }

            .dropdown-menu-dark {
                --bs-dropdown-color: #999da0;
                --bs-dropdown-bg: #26292b;
                --bs-dropdown-border-color: var(--bs-border-color-translucent);
                --bs-dropdown-link-color: #999da0;
                --bs-dropdown-link-hover-color: #FFFFFF;
                --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
                --bs-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15);
                --bs-dropdown-link-active-color: #FFFFFF;
                --bs-dropdown-link-active-bg: #0066ff;
                --bs-dropdown-link-disabled-color: #555c60;
                --bs-dropdown-header-color: #555c60
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

            .dropdown-toggle-split {
                padding-right: .5625rem;
                padding-left: .5625rem
            }

            .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after {
                margin-left: 0
            }

            .dropstart .dropdown-toggle-split::before {
                margin-right: 0
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

            @media (prefers-reduced-motion: reduce) {
                .nav-link {
                    transition: none
                }
            }

            .nav-link:focus, .nav-link:hover {
                color: var(--bs-nav-link-hover-color)
            }

            .nav-link:focus-visible {
                outline: 0;
                box-shadow: 0 0 0 .25rem rgba(0, 102, 255, .25)
            }

            .nav-link.disabled, .nav-link:disabled {
                color: var(--bs-nav-link-disabled-color);
                pointer-events: none;
                cursor: default
            }

            .nav-tabs {
                --bs-nav-tabs-border-width: var(--bs-border-width);
                --bs-nav-tabs-border-color: var(--bs-border-color);
                --bs-nav-tabs-border-radius: var(--bs-border-radius);
                --bs-nav-tabs-link-hover-border-color: var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color);
                --bs-nav-tabs-link-active-color: var(--bs-emphasis-color);
                --bs-nav-tabs-link-active-bg: transparent;
                --bs-nav-tabs-link-active-border-color: var(--bs-border-color-translucent) var(--bs-border-color-translucent) transparent;
                border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color)
            }

            .nav-tabs .nav-link {
                margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));
                border: var(--bs-nav-tabs-border-width) solid transparent;
                border-top-left-radius: var(--bs-nav-tabs-border-radius);
                border-top-right-radius: var(--bs-nav-tabs-border-radius)
            }

            .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {
                isolation: isolate;
                border-color: var(--bs-nav-tabs-link-hover-border-color)
            }

            .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
                color: var(--bs-nav-tabs-link-active-color);
                background-color: var(--bs-nav-tabs-link-active-bg);
                border-color: var(--bs-nav-tabs-link-active-border-color)
            }

            .nav-tabs .dropdown-menu {
                margin-top: calc(-1 * var(--bs-nav-tabs-border-width));
                border-top-left-radius: 0;
                border-top-right-radius: 0
            }

            .nav-pills {
                --bs-nav-pills-border-radius: 8px;
                --bs-nav-pills-link-active-color: #FFFFFF;
                --bs-nav-pills-link-active-bg: #0066ff
            }

            .nav-pills .nav-link {
                border-radius: var(--bs-nav-pills-border-radius)
            }

            .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
                color: var(--bs-nav-pills-link-active-color);
                background-color: var(--bs-nav-pills-link-active-bg)
            }

            .nav-underline {
                --bs-nav-underline-gap: 1rem;
                --bs-nav-underline-border-width: 0.125rem;
                --bs-nav-underline-link-active-color: var(--bs-emphasis-color);
                gap: var(--bs-nav-underline-gap)
            }

            .nav-underline .nav-link {
                padding-right: 0;
                padding-left: 0;
                border-bottom: var(--bs-nav-underline-border-width) solid transparent
            }

            .nav-underline .nav-link:focus, .nav-underline .nav-link:hover {
                border-bottom-color: currentcolor
            }

            .nav-underline .nav-link.active, .nav-underline .show > .nav-link {
                font-weight: 600;
                color: var(--bs-nav-underline-link-active-color);
                border-bottom-color: currentcolor
            }

            .nav-fill .nav-item, .nav-fill > .nav-link {
                flex: 1 1 auto;
                text-align: center
            }

            .nav-justified .nav-item, .nav-justified > .nav-link {
                flex-basis: 0;
                flex-grow: 1;
                text-align: center
            }

            .nav-fill .nav-item .nav-link, .nav-justified .nav-item .nav-link {
                width: 100%
            }

            .tab-content > .tab-pane {
                display: none
            }

            .tab-content > .active {
                display: block
            }

            .navbar {
                --bs-navbar-padding-x: 0;
                --bs-navbar-padding-y: 0.5rem;
                --bs-navbar-color: rgba(var(--bs-emphasis-color-rgb), 0.65);
                --bs-navbar-hover-color: rgba(var(--bs-emphasis-color-rgb), 0.8);
                --bs-navbar-disabled-color: rgba(var(--bs-emphasis-color-rgb), 0.3);
                --bs-navbar-active-color: rgba(var(--bs-emphasis-color-rgb), 1);
                --bs-navbar-brand-padding-y: 0.3359375rem;
                --bs-navbar-brand-margin-end: 1rem;
                --bs-navbar-brand-font-size: 1.09375rem;
                --bs-navbar-brand-color: rgba(var(--bs-emphasis-color-rgb), 1);
                --bs-navbar-brand-hover-color: rgba(var(--bs-emphasis-color-rgb), 1);
                --bs-navbar-nav-link-padding-x: 0.5rem;
                --bs-navbar-toggler-padding-y: 0.25rem;
                --bs-navbar-toggler-padding-x: 0.75rem;
                --bs-navbar-toggler-font-size: 1.09375rem;
                --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2834, 34, 34, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
                --bs-navbar-toggler-border-color: rgba(var(--bs-emphasis-color-rgb), 0.15);
                --bs-navbar-toggler-border-radius: 8px;
                --bs-navbar-toggler-focus-width: 0.25rem;
                --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;
                position: relative;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x)
            }

            .navbar > .container, .navbar > .container-fluid, .navbar > .container-lg, .navbar > .container-md, .navbar > .container-sm, .navbar > .container-xl, .navbar > .container-xxl {
                display: flex;
                flex-wrap: inherit;
                align-items: center;
                justify-content: space-between
            }

            .navbar-brand {
                padding-top: var(--bs-navbar-brand-padding-y);
                padding-bottom: var(--bs-navbar-brand-padding-y);
                margin-right: var(--bs-navbar-brand-margin-end);
                font-size: var(--bs-navbar-brand-font-size);
                color: var(--bs-navbar-brand-color);
                text-decoration: none;
                white-space: nowrap
            }

            .navbar-brand:focus, .navbar-brand:hover {
                color: var(--bs-navbar-brand-hover-color)
            }

            .navbar-nav {
                --bs-nav-link-padding-x: 0;
                --bs-nav-link-padding-y: 0.5rem;
                --bs-nav-link-color: var(--bs-navbar-color);
                --bs-nav-link-hover-color: var(--bs-navbar-hover-color);
                --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);
                display: flex;
                flex-direction: column;
                padding-left: 0;
                margin-bottom: 0;
                list-style: none
            }

            .navbar-nav .nav-link.active, .navbar-nav .nav-link.show {
                color: var(--bs-navbar-active-color)
            }

            .navbar-nav .dropdown-menu {
                position: static
            }

            .navbar-text {
                padding-top: .5rem;
                padding-bottom: .5rem;
                color: var(--bs-navbar-color)
            }

            .navbar-text a, .navbar-text a:focus, .navbar-text a:hover {
                color: var(--bs-navbar-active-color)
            }

            .navbar-collapse {
                flex-basis: 100%;
                flex-grow: 1;
                align-items: center
            }

            .navbar-toggler {
                padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
                font-size: var(--bs-navbar-toggler-font-size);
                line-height: 1;
                color: var(--bs-navbar-color);
                background-color: transparent;
                border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
                border-radius: var(--bs-navbar-toggler-border-radius);
                transition: var(--bs-navbar-toggler-transition)
            }

            @media (prefers-reduced-motion: reduce) {
                .navbar-toggler {
                    transition: none
                }
            }

            .navbar-toggler:hover {
                text-decoration: none
            }

            .navbar-toggler:focus {
                text-decoration: none;
                outline: 0;
                box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width)
            }

            .navbar-toggler-icon {
                display: inline-block;
                width: 1.5em;
                height: 1.5em;
                vertical-align: middle;
                background-image: var(--bs-navbar-toggler-icon-bg);
                background-repeat: no-repeat;
                background-position: center;
                background-size: 100%
            }

            .navbar-nav-scroll {
                max-height: var(--bs-scroll-height, 75vh);
                overflow-y: auto
            }

            @media (min-width: 576px) {
                .navbar-expand-sm {
                    flex-wrap: nowrap;
                    justify-content: flex-start
                }

                .navbar-expand-sm .navbar-nav {
                    flex-direction: row
                }

                .navbar-expand-sm .navbar-nav .dropdown-menu {
                    position: absolute
                }

                .navbar-expand-sm .navbar-nav .nav-link {
                    padding-right: var(--bs-navbar-nav-link-padding-x);
                    padding-left: var(--bs-navbar-nav-link-padding-x)
                }

                .navbar-expand-sm .navbar-nav-scroll {
                    overflow: visible
                }

                .navbar-expand-sm .navbar-collapse {
                    display: flex !important;
                    flex-basis: auto
                }

                .navbar-expand-sm .navbar-toggler {
                    display: none
                }

                .navbar-expand-sm .offcanvas {
                    position: static;
                    z-index: auto;
                    flex-grow: 1;
                    width: auto !important;
                    height: auto !important;
                    visibility: visible !important;
                    background-color: transparent !important;
                    border: 0 !important;
                    transform: none !important;
                    transition: none
                }

                .navbar-expand-sm .offcanvas .offcanvas-header {
                    display: none
                }

                .navbar-expand-sm .offcanvas .offcanvas-body {
                    display: flex;
                    flex-grow: 0;
                    padding: 0;
                    overflow-y: visible
                }
            }

            @media (min-width: 768px) {
                .navbar-expand-md {
                    flex-wrap: nowrap;
                    justify-content: flex-start
                }

                .navbar-expand-md .navbar-nav {
                    flex-direction: row
                }

                .navbar-expand-md .navbar-nav .dropdown-menu {
                    position: absolute
                }

                .navbar-expand-md .navbar-nav .nav-link {
                    padding-right: var(--bs-navbar-nav-link-padding-x);
                    padding-left: var(--bs-navbar-nav-link-padding-x)
                }

                .navbar-expand-md .navbar-nav-scroll {
                    overflow: visible
                }

                .navbar-expand-md .navbar-collapse {
                    display: flex !important;
                    flex-basis: auto
                }

                .navbar-expand-md .navbar-toggler {
                    display: none
                }

                .navbar-expand-md .offcanvas {
                    position: static;
                    z-index: auto;
                    flex-grow: 1;
                    width: auto !important;
                    height: auto !important;
                    visibility: visible !important;
                    background-color: transparent !important;
                    border: 0 !important;
                    transform: none !important;
                    transition: none
                }

                .navbar-expand-md .offcanvas .offcanvas-header {
                    display: none
                }

                .navbar-expand-md .offcanvas .offcanvas-body {
                    display: flex;
                    flex-grow: 0;
                    padding: 0;
                    overflow-y: visible
                }
            }

            @media (min-width: 992px) {
                .navbar-expand-lg {
                    flex-wrap: nowrap;
                    justify-content: flex-start
                }

                .navbar-expand-lg .navbar-nav {
                    flex-direction: row
                }

                .navbar-expand-lg .navbar-nav .dropdown-menu {
                    position: absolute
                }

                .navbar-expand-lg .navbar-nav .nav-link {
                    padding-right: var(--bs-navbar-nav-link-padding-x);
                    padding-left: var(--bs-navbar-nav-link-padding-x)
                }

                .navbar-expand-lg .navbar-nav-scroll {
                    overflow: visible
                }

                .navbar-expand-lg .navbar-collapse {
                    display: flex !important;
                    flex-basis: auto
                }

                .navbar-expand-lg .navbar-toggler {
                    display: none
                }

                .navbar-expand-lg .offcanvas {
                    position: static;
                    z-index: auto;
                    flex-grow: 1;
                    width: auto !important;
                    height: auto !important;
                    visibility: visible !important;
                    background-color: transparent !important;
                    border: 0 !important;
                    transform: none !important;
                    transition: none
                }

                .navbar-expand-lg .offcanvas .offcanvas-header {
                    display: none
                }

                .navbar-expand-lg .offcanvas .offcanvas-body {
                    display: flex;
                    flex-grow: 0;
                    padding: 0;
                    overflow-y: visible
                }
            }

            @media (min-width: 1200px) {
                .navbar-expand-xl {
                    flex-wrap: nowrap;
                    justify-content: flex-start
                }

                .navbar-expand-xl .navbar-nav {
                    flex-direction: row
                }

                .navbar-expand-xl .navbar-nav .dropdown-menu {
                    position: absolute
                }

                .navbar-expand-xl .navbar-nav .nav-link {
                    padding-right: var(--bs-navbar-nav-link-padding-x);
                    padding-left: var(--bs-navbar-nav-link-padding-x)
                }

                .navbar-expand-xl .navbar-nav-scroll {
                    overflow: visible
                }

                .navbar-expand-xl .navbar-collapse {
                    display: flex !important;
                    flex-basis: auto
                }

                .navbar-expand-xl .navbar-toggler {
                    display: none
                }

                .navbar-expand-xl .offcanvas {
                    position: static;
                    z-index: auto;
                    flex-grow: 1;
                    width: auto !important;
                    height: auto !important;
                    visibility: visible !important;
                    background-color: transparent !important;
                    border: 0 !important;
                    transform: none !important;
                    transition: none
                }

                .navbar-expand-xl .offcanvas .offcanvas-header {
                    display: none
                }

                .navbar-expand-xl .offcanvas .offcanvas-body {
                    display: flex;
                    flex-grow: 0;
                    padding: 0;
                    overflow-y: visible
                }
            }

            @media (min-width: 1660px) {
                .navbar-expand-xxl {
                    flex-wrap: nowrap;
                    justify-content: flex-start
                }

                .navbar-expand-xxl .navbar-nav {
                    flex-direction: row
                }

                .navbar-expand-xxl .navbar-nav .dropdown-menu {
                    position: absolute
                }

                .navbar-expand-xxl .navbar-nav .nav-link {
                    padding-right: var(--bs-navbar-nav-link-padding-x);
                    padding-left: var(--bs-navbar-nav-link-padding-x)
                }

                .navbar-expand-xxl .navbar-nav-scroll {
                    overflow: visible
                }

                .navbar-expand-xxl .navbar-collapse {
                    display: flex !important;
                    flex-basis: auto
                }

                .navbar-expand-xxl .navbar-toggler {
                    display: none
                }

                .navbar-expand-xxl .offcanvas {
                    position: static;
                    z-index: auto;
                    flex-grow: 1;
                    width: auto !important;
                    height: auto !important;
                    visibility: visible !important;
                    background-color: transparent !important;
                    border: 0 !important;
                    transform: none !important;
                    transition: none
                }

                .navbar-expand-xxl .offcanvas .offcanvas-header {
                    display: none
                }

                .navbar-expand-xxl .offcanvas .offcanvas-body {
                    display: flex;
                    flex-grow: 0;
                    padding: 0;
                    overflow-y: visible
                }
            }

            @media (min-width: 1900px) {
                .navbar-expand-xxxl {
                    flex-wrap: nowrap;
                    justify-content: flex-start
                }

                .navbar-expand-xxxl .navbar-nav {
                    flex-direction: row
                }

                .navbar-expand-xxxl .navbar-nav .dropdown-menu {
                    position: absolute
                }

                .navbar-expand-xxxl .navbar-nav .nav-link {
                    padding-right: var(--bs-navbar-nav-link-padding-x);
                    padding-left: var(--bs-navbar-nav-link-padding-x)
                }

                .navbar-expand-xxxl .navbar-nav-scroll {
                    overflow: visible
                }

                .navbar-expand-xxxl .navbar-collapse {
                    display: flex !important;
                    flex-basis: auto
                }

                .navbar-expand-xxxl .navbar-toggler {
                    display: none
                }

                .navbar-expand-xxxl .offcanvas {
                    position: static;
                    z-index: auto;
                    flex-grow: 1;
                    width: auto !important;
                    height: auto !important;
                    visibility: visible !important;
                    background-color: transparent !important;
                    border: 0 !important;
                    transform: none !important;
                    transition: none
                }

                .navbar-expand-xxxl .offcanvas .offcanvas-header {
                    display: none
                }

                .navbar-expand-xxxl .offcanvas .offcanvas-body {
                    display: flex;
                    flex-grow: 0;
                    padding: 0;
                    overflow-y: visible
                }
            }

            .navbar-expand {
                flex-wrap: nowrap;
                justify-content: flex-start
            }

            .navbar-expand .navbar-nav {
                flex-direction: row
            }

            .navbar-expand .navbar-nav .dropdown-menu {
                position: absolute
            }

            .navbar-expand .navbar-nav .nav-link {
                padding-right: var(--bs-navbar-nav-link-padding-x);
                padding-left: var(--bs-navbar-nav-link-padding-x)
            }

            .navbar-expand .navbar-nav-scroll {
                overflow: visible
            }

            .navbar-expand .navbar-collapse {
                display: flex !important;
                flex-basis: auto
            }

            .navbar-expand .navbar-toggler {
                display: none
            }

            .navbar-expand .offcanvas {
                position: static;
                z-index: auto;
                flex-grow: 1;
                width: auto !important;
                height: auto !important;
                visibility: visible !important;
                background-color: transparent !important;
                border: 0 !important;
                transform: none !important;
                transition: none
            }

            .navbar-expand .offcanvas .offcanvas-header {
                display: none
            }

            .navbar-expand .offcanvas .offcanvas-body {
                display: flex;
                flex-grow: 0;
                padding: 0;
                overflow-y: visible
            }

            .navbar-dark, .navbar[data-bs-theme=dark] {
                --bs-navbar-color: rgba(255, 255, 255, 0.55);
                --bs-navbar-hover-color: rgba(255, 255, 255, 0.75);
                --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);
                --bs-navbar-active-color: #FFFFFF;
                --bs-navbar-brand-color: #FFFFFF;
                --bs-navbar-brand-hover-color: #FFFFFF;
                --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);
                --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")
            }

            [data-bs-theme=dark] .navbar-toggler-icon {
                --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")
            }

            .card {
                --bs-card-spacer-y: 1rem;
                --bs-card-spacer-x: 1rem;
                --bs-card-title-spacer-y: 0.5rem;
                --bs-card-title-color: var(--bs-heading-color);
                --bs-card-border-width: var(--bs-border-width);
                --bs-card-border-color: var(--bs-border-color-translucent);
                --bs-card-border-radius: var(--bs-border-radius);
                --bs-card-inner-border-radius: var(--bs-border-radius);
                --bs-card-cap-padding-y: 0.6rem;
                --bs-card-cap-padding-x: 1rem;
                --bs-card-cap-bg: rgba(var(--bs-body-color-rgb), 0.03);
                --bs-card-cap-color: var(--bs-heading-color);
                --bs-card-color: var(--bs-component-color);
                --bs-card-bg: var(--bs-component-bg);
                --bs-card-img-overlay-padding: 1rem;
                --bs-card-group-margin: 10px;
                position: relative;
                display: flex;
                flex-direction: column;
                min-width: 0;
                height: var(--bs-card-height);
                color: var(--bs-body-color);
                word-wrap: break-word;
                background-color: var(--bs-card-bg);
                background-clip: border-box;
                border: var(--bs-card-border-width) solid var(--bs-card-border-color);
                border-radius: var(--bs-card-border-radius)
            }

            .card > hr {
                margin-right: 0;
                margin-left: 0
            }

            .card > .list-group {
                border-top: inherit;
                border-bottom: inherit
            }

            .card > .list-group:first-child {
                border-top-width: 0;
                border-top-left-radius: var(--bs-card-inner-border-radius);
                border-top-right-radius: var(--bs-card-inner-border-radius)
            }

            .card > .list-group:last-child {
                border-bottom-width: 0;
                border-bottom-right-radius: var(--bs-card-inner-border-radius);
                border-bottom-left-radius: var(--bs-card-inner-border-radius)
            }

            .card > .card-header + .list-group, .card > .list-group + .card-footer {
                border-top: 0
            }

            .card-body {
                flex: 1 1 auto;
                padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
                color: var(--bs-card-color)
            }

            .card-title {
                margin-bottom: var(--bs-card-title-spacer-y);
                color: var(--bs-card-title-color)
            }

            .card-subtitle {
                margin-top: calc(-.5 * var(--bs-card-title-spacer-y));
                margin-bottom: 0;
                color: var(--bs-card-subtitle-color)
            }

            .card-text:last-child {
                margin-bottom: 0
            }

            .card-link + .card-link {
                margin-left: var(--bs-card-spacer-x)
            }

            .card-header {
                padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
                margin-bottom: 0;
                color: var(--bs-card-cap-color);
                background-color: var(--bs-card-cap-bg);
                border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color)
            }

            .card-header:first-child {
                border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0
            }

            .card-footer {
                padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
                color: var(--bs-card-cap-color);
                background-color: var(--bs-card-cap-bg);
                border-top: var(--bs-card-border-width) solid var(--bs-card-border-color)
            }

            .card-footer:last-child {
                border-radius: 0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius)
            }

            .card-header-tabs {
                margin-right: calc(-.5 * var(--bs-card-cap-padding-x));
                margin-bottom: calc(-1 * var(--bs-card-cap-padding-y));
                margin-left: calc(-.5 * var(--bs-card-cap-padding-x));
                border-bottom: 0
            }

            .card-header-tabs .nav-link.active {
                background-color: var(--bs-card-bg);
                border-bottom-color: var(--bs-card-bg)
            }

            .card-header-pills {
                margin-right: calc(-.5 * var(--bs-card-cap-padding-x));
                margin-left: calc(-.5 * var(--bs-card-cap-padding-x))
            }

            .card-img-overlay {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                padding: var(--bs-card-img-overlay-padding);
                border-radius: var(--bs-card-inner-border-radius)
            }

            .card-img, .card-img-bottom, .card-img-top {
                width: 100%
            }

            .card-img, .card-img-top {
                border-top-left-radius: var(--bs-card-inner-border-radius);
                border-top-right-radius: var(--bs-card-inner-border-radius)
            }

            .card-img, .card-img-bottom {
                border-bottom-right-radius: var(--bs-card-inner-border-radius);
                border-bottom-left-radius: var(--bs-card-inner-border-radius)
            }

            .card-group > .card {
                margin-bottom: var(--bs-card-group-margin)
            }

            @media (min-width: 576px) {
                .card-group {
                    display: flex;
                    flex-flow: row wrap
                }

                .card-group > .card {
                    flex: 1 0 0%;
                    margin-bottom: 0
                }

                .card-group > .card + .card {
                    margin-left: 0;
                    border-left: 0
                }

                .card-group > .card:not(:last-child) {
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0
                }

                .card-group > .card:not(:last-child) .card-header, .card-group > .card:not(:last-child) .card-img-top {
                    border-top-right-radius: 0
                }

                .card-group > .card:not(:last-child) .card-footer, .card-group > .card:not(:last-child) .card-img-bottom {
                    border-bottom-right-radius: 0
                }

                .card-group > .card:not(:first-child) {
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0
                }

                .card-group > .card:not(:first-child) .card-header, .card-group > .card:not(:first-child) .card-img-top {
                    border-top-left-radius: 0
                }

                .card-group > .card:not(:first-child) .card-footer, .card-group > .card:not(:first-child) .card-img-bottom {
                    border-bottom-left-radius: 0
                }
            }

            .accordion {
                --bs-accordion-color: var(--bs-body-color);
                --bs-accordion-bg: var(--bs-component-bg);
                --bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
                --bs-accordion-border-color: var(--bs-border-color);
                --bs-accordion-border-width: var(--bs-border-width);
                --bs-accordion-border-radius: var(--bs-border-radius);
                --bs-accordion-inner-border-radius: calc(var(--bs-border-radius) - (var(--bs-border-width)));
                --bs-accordion-btn-padding-x: 1.25rem;
                --bs-accordion-btn-padding-y: 1rem;
                --bs-accordion-btn-color: var(--bs-body-color);
                --bs-accordion-btn-bg: var(--bs-accordion-bg);
                --bs-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23222222'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
                --bs-accordion-btn-icon-width: 1.25rem;
                --bs-accordion-btn-icon-transform: rotate(-180deg);
                --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;
                --bs-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230052cc'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
                --bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(0, 102, 255, 0.25);
                --bs-accordion-body-padding-x: 1.25rem;
                --bs-accordion-body-padding-y: 1rem;
                --bs-accordion-active-color: var(--bs-primary-text);
                --bs-accordion-active-bg: var(--bs-primary-bg-subtle)
            }

            .accordion-button {
                position: relative;
                display: flex;
                align-items: center;
                width: 100%;
                padding: var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);
                font-size: .875rem;
                color: var(--bs-accordion-btn-color);
                text-align: left;
                background-color: var(--bs-accordion-btn-bg);
                border: 0;
                border-radius: 0;
                overflow-anchor: none;
                transition: var(--bs-accordion-transition)
            }

            @media (prefers-reduced-motion: reduce) {
                .accordion-button {
                    transition: none
                }
            }

            .accordion-button:not(.collapsed) {
                color: var(--bs-accordion-active-color);
                background-color: var(--bs-accordion-active-bg);
                box-shadow: inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color)
            }

            .accordion-button:not(.collapsed)::after {
                background-image: var(--bs-accordion-btn-active-icon);
                transform: var(--bs-accordion-btn-icon-transform)
            }

            .accordion-button::after {
                flex-shrink: 0;
                width: var(--bs-accordion-btn-icon-width);
                height: var(--bs-accordion-btn-icon-width);
                margin-left: auto;
                content: "";
                background-image: var(--bs-accordion-btn-icon);
                background-repeat: no-repeat;
                background-size: var(--bs-accordion-btn-icon-width);
                transition: var(--bs-accordion-btn-icon-transition)
            }

            @media (prefers-reduced-motion: reduce) {
                .accordion-button::after {
                    transition: none
                }
            }

            .accordion-button:hover {
                z-index: 2
            }

            .accordion-button:focus {
                z-index: 3;
                outline: 0;
                box-shadow: var(--bs-accordion-btn-focus-box-shadow)
            }

            .accordion-header {
                margin-bottom: 0
            }

            .accordion-item {
                color: var(--bs-accordion-color);
                background-color: var(--bs-accordion-bg);
                border: var(--bs-accordion-border-width) solid var(--bs-accordion-border-color)
            }

            .accordion-item:first-of-type {
                border-top-left-radius: var(--bs-accordion-border-radius);
                border-top-right-radius: var(--bs-accordion-border-radius)
            }

            .accordion-item:first-of-type > .accordion-header .accordion-button {
                border-top-left-radius: var(--bs-accordion-inner-border-radius);
                border-top-right-radius: var(--bs-accordion-inner-border-radius)
            }

            .accordion-item:not(:first-of-type) {
                border-top: 0
            }

            .accordion-item:last-of-type {
                border-bottom-right-radius: var(--bs-accordion-border-radius);
                border-bottom-left-radius: var(--bs-accordion-border-radius)
            }

            .accordion-item:last-of-type > .accordion-header .accordion-button.collapsed {
                border-bottom-right-radius: var(--bs-accordion-inner-border-radius);
                border-bottom-left-radius: var(--bs-accordion-inner-border-radius)
            }

            .accordion-item:last-of-type > .accordion-collapse {
                border-bottom-right-radius: var(--bs-accordion-border-radius);
                border-bottom-left-radius: var(--bs-accordion-border-radius)
            }

            .accordion-body {
                padding: var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x)
            }

            .accordion-flush > .accordion-item {
                border-right: 0;
                border-left: 0;
                border-radius: 0
            }

            .accordion-flush > .accordion-item:first-child {
                border-top: 0
            }

            .accordion-flush > .accordion-item:last-child {
                border-bottom: 0
            }

            .accordion-flush > .accordion-item > .accordion-header .accordion-button, .accordion-flush > .accordion-item > .accordion-header .accordion-button.collapsed {
                border-radius: 0
            }

            .accordion-flush > .accordion-item > .accordion-collapse {
                border-radius: 0
            }

            [data-bs-theme=dark] .accordion-button::after {
                --bs-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%2366a3ff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
                --bs-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%2366a3ff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")
            }

            .breadcrumb {
                --bs-breadcrumb-padding-x: 0;
                --bs-breadcrumb-padding-y: 0;
                --bs-breadcrumb-margin-bottom: 1rem;
                --bs-breadcrumb-font-size: 0.765625rem;
                --bs-breadcrumb-divider-color: var(--bs-tertiary-color);
                --bs-breadcrumb-item-padding-x: 0.5rem;
                --bs-breadcrumb-item-active-color: var(--bs-tertiary-color);
                display: flex;
                flex-wrap: wrap;
                padding: var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);
                margin-bottom: var(--bs-breadcrumb-margin-bottom);
                font-size: var(--bs-breadcrumb-font-size);
                list-style: none;
                background-color: var(--bs-breadcrumb-bg);
                border-radius: var(--bs-breadcrumb-border-radius)
            }

            .breadcrumb-item + .breadcrumb-item {
                padding-left: var(--bs-breadcrumb-item-padding-x)
            }

            .breadcrumb-item + .breadcrumb-item::before {
                float: left;
                padding-right: var(--bs-breadcrumb-item-padding-x);
                color: var(--bs-breadcrumb-divider-color);
                content: var(--bs-breadcrumb-divider, "/")
            }

            .breadcrumb-item.active {
                color: var(--bs-breadcrumb-item-active-color)
            }

            .pagination {
                --bs-pagination-padding-x: 0.75rem;
                --bs-pagination-padding-y: 0.375rem;
                --bs-pagination-font-size: 0.875rem;
                --bs-pagination-color: var(--bs-component-color);
                --bs-pagination-bg: var(--bs-component-bg);
                --bs-pagination-border-width: var(--bs-border-width);
                --bs-pagination-border-color: var(--bs-border-color);
                --bs-pagination-border-radius: var(--bs-border-radius);
                --bs-pagination-hover-color: var(--bs-component-color);
                --bs-pagination-hover-bg: var(--bs-border-color);
                --bs-pagination-hover-border-color: var(--bs-border-color);
                --bs-pagination-focus-color: var(--bs-component-color);
                --bs-pagination-focus-bg: var(--bs-secondary-bg);
                --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(0, 102, 255, 0.25);
                --bs-pagination-active-color: #FFFFFF;
                --bs-pagination-active-bg: #0066ff;
                --bs-pagination-active-border-color: #0066ff;
                --bs-pagination-disabled-color: var(--bs-tertiary-color);
                --bs-pagination-disabled-bg: var(--bs-border-color);
                --bs-pagination-disabled-border-color: var(--bs-border-color);
                display: flex;
                padding-left: 0;
                list-style: none
            }

            .page-link {
                position: relative;
                display: block;
                padding: var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);
                font-size: var(--bs-pagination-font-size);
                color: var(--bs-pagination-color);
                text-decoration: none;
                background-color: var(--bs-pagination-bg);
                border: var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);
                transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
            }

            @media (prefers-reduced-motion: reduce) {
                .page-link {
                    transition: none
                }
            }

            .page-link:hover {
                z-index: 2;
                color: var(--bs-pagination-hover-color);
                background-color: var(--bs-pagination-hover-bg);
                border-color: var(--bs-pagination-hover-border-color)
            }

            .page-link:focus {
                z-index: 3;
                color: var(--bs-pagination-focus-color);
                background-color: var(--bs-pagination-focus-bg);
                outline: 0;
                box-shadow: var(--bs-pagination-focus-box-shadow)
            }

            .active > .page-link, .page-link.active {
                z-index: 3;
                color: var(--bs-pagination-active-color);
                background-color: var(--bs-pagination-active-bg);
                border-color: var(--bs-pagination-active-border-color)
            }

            .disabled > .page-link, .page-link.disabled {
                color: var(--bs-pagination-disabled-color);
                pointer-events: none;
                background-color: var(--bs-pagination-disabled-bg);
                border-color: var(--bs-pagination-disabled-border-color)
            }

            .page-item:not(:first-child) .page-link {
                margin-left: calc(var(--bs-border-width) * -1)
            }

            .page-item:first-child .page-link {
                border-top-left-radius: var(--bs-pagination-border-radius);
                border-bottom-left-radius: var(--bs-pagination-border-radius)
            }

            .page-item:last-child .page-link {
                border-top-right-radius: var(--bs-pagination-border-radius);
                border-bottom-right-radius: var(--bs-pagination-border-radius)
            }

            .pagination-lg {
                --bs-pagination-padding-x: 1.5rem;
                --bs-pagination-padding-y: 0.75rem;
                --bs-pagination-font-size: 1.09375rem;
                --bs-pagination-border-radius: 12px
            }

            .pagination-sm {
                --bs-pagination-padding-x: 0.5rem;
                --bs-pagination-padding-y: 0.25rem;
                --bs-pagination-font-size: 0.765625rem;
                --bs-pagination-border-radius: 6px
            }

            .badge {
                --bs-badge-padding-x: 0.65em;
                --bs-badge-padding-y: 0.35em;
                --bs-badge-font-size: 0.75em;
                --bs-badge-font-weight: 600;
                --bs-badge-color: #FFFFFF;
                --bs-badge-border-radius: var(--bs-border-radius);
                display: inline-block;
                padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);
                font-size: var(--bs-badge-font-size);
                font-weight: var(--bs-badge-font-weight);
                line-height: 1;
                color: var(--bs-badge-color);
                text-align: center;
                white-space: nowrap;
                vertical-align: baseline;
                border-radius: var(--bs-badge-border-radius)
            }

            .badge:empty {
                display: none
            }

            .btn .badge {
                position: relative;
                top: -1px
            }

            .alert {
                --bs-alert-bg: transparent;
                --bs-alert-padding-x: 1rem;
                --bs-alert-padding-y: 1rem;
                --bs-alert-margin-bottom: 1rem;
                --bs-alert-color: inherit;
                --bs-alert-border-color: transparent;
                --bs-alert-border: 0 solid var(--bs-alert-border-color);
                --bs-alert-border-radius: 8px;
                --bs-alert-link-color: inherit;
                position: relative;
                padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x);
                margin-bottom: var(--bs-alert-margin-bottom);
                color: var(--bs-alert-color);
                background-color: var(--bs-alert-bg);
                border: var(--bs-alert-border);
                border-radius: var(--bs-alert-border-radius)
            }

            .alert-heading {
                color: inherit
            }

            .alert-link {
                font-weight: 600;
                color: var(--bs-alert-link-color)
            }

            .alert-dismissible {
                padding-right: 3rem
            }

            .alert-dismissible .btn-close {
                position: absolute;
                top: 0;
                right: 0;
                z-index: 2;
                padding: 1.25rem 1rem
            }

            .alert-default {
                --bs-alert-color: var(--bs-default-text-emphasis);
                --bs-alert-bg: var(--bs-default-bg-subtle);
                --bs-alert-border-color: var(--bs-default-border-subtle);
                --bs-alert-link-color: var(--bs-default-text-emphasis)
            }

            .alert-theme {
                --bs-alert-color: var(--bs-theme-text-emphasis);
                --bs-alert-bg: var(--bs-theme-bg-subtle);
                --bs-alert-border-color: var(--bs-theme-border-subtle);
                --bs-alert-link-color: var(--bs-theme-text-emphasis)
            }

            .alert-theme-color {
                --bs-alert-color: var(--bs-theme-color-text-emphasis);
                --bs-alert-bg: var(--bs-theme-color-bg-subtle);
                --bs-alert-border-color: var(--bs-theme-color-border-subtle);
                --bs-alert-link-color: var(--bs-theme-color-text-emphasis)
            }

            .alert-primary {
                --bs-alert-color: var(--bs-primary-text-emphasis);
                --bs-alert-bg: var(--bs-primary-bg-subtle);
                --bs-alert-border-color: var(--bs-primary-border-subtle);
                --bs-alert-link-color: var(--bs-primary-text-emphasis)
            }

            .alert-secondary {
                --bs-alert-color: var(--bs-secondary-text-emphasis);
                --bs-alert-bg: var(--bs-secondary-bg-subtle);
                --bs-alert-border-color: var(--bs-secondary-border-subtle);
                --bs-alert-link-color: var(--bs-secondary-text-emphasis)
            }

            .alert-warning {
                --bs-alert-color: var(--bs-warning-text-emphasis);
                --bs-alert-bg: var(--bs-warning-bg-subtle);
                --bs-alert-border-color: var(--bs-warning-border-subtle);
                --bs-alert-link-color: var(--bs-warning-text-emphasis)
            }

            .alert-danger {
                --bs-alert-color: var(--bs-danger-text-emphasis);
                --bs-alert-bg: var(--bs-danger-bg-subtle);
                --bs-alert-border-color: var(--bs-danger-border-subtle);
                --bs-alert-link-color: var(--bs-danger-text-emphasis)
            }

            .alert-success {
                --bs-alert-color: var(--bs-success-text-emphasis);
                --bs-alert-bg: var(--bs-success-bg-subtle);
                --bs-alert-border-color: var(--bs-success-border-subtle);
                --bs-alert-link-color: var(--bs-success-text-emphasis)
            }

            .alert-info {
                --bs-alert-color: var(--bs-info-text-emphasis);
                --bs-alert-bg: var(--bs-info-bg-subtle);
                --bs-alert-border-color: var(--bs-info-border-subtle);
                --bs-alert-link-color: var(--bs-info-text-emphasis)
            }

            .alert-dark {
                --bs-alert-color: var(--bs-dark-text-emphasis);
                --bs-alert-bg: var(--bs-dark-bg-subtle);
                --bs-alert-border-color: var(--bs-dark-border-subtle);
                --bs-alert-link-color: var(--bs-dark-text-emphasis)
            }

            .alert-black {
                --bs-alert-color: var(--bs-black-text-emphasis);
                --bs-alert-bg: var(--bs-black-bg-subtle);
                --bs-alert-border-color: var(--bs-black-border-subtle);
                --bs-alert-link-color: var(--bs-black-text-emphasis)
            }

            .alert-white {
                --bs-alert-color: var(--bs-white-text-emphasis);
                --bs-alert-bg: var(--bs-white-bg-subtle);
                --bs-alert-border-color: var(--bs-white-border-subtle);
                --bs-alert-link-color: var(--bs-white-text-emphasis)
            }

            .alert-purple {
                --bs-alert-color: var(--bs-purple-text-emphasis);
                --bs-alert-bg: var(--bs-purple-bg-subtle);
                --bs-alert-border-color: var(--bs-purple-border-subtle);
                --bs-alert-link-color: var(--bs-purple-text-emphasis)
            }

            .alert-indigo {
                --bs-alert-color: var(--bs-indigo-text-emphasis);
                --bs-alert-bg: var(--bs-indigo-bg-subtle);
                --bs-alert-border-color: var(--bs-indigo-border-subtle);
                --bs-alert-link-color: var(--bs-indigo-text-emphasis)
            }

            .alert-red {
                --bs-alert-color: var(--bs-red-text-emphasis);
                --bs-alert-bg: var(--bs-red-bg-subtle);
                --bs-alert-border-color: var(--bs-red-border-subtle);
                --bs-alert-link-color: var(--bs-red-text-emphasis)
            }

            .alert-pink {
                --bs-alert-color: var(--bs-pink-text-emphasis);
                --bs-alert-bg: var(--bs-pink-bg-subtle);
                --bs-alert-border-color: var(--bs-pink-border-subtle);
                --bs-alert-link-color: var(--bs-pink-text-emphasis)
            }

            .alert-green {
                --bs-alert-color: var(--bs-green-text-emphasis);
                --bs-alert-bg: var(--bs-green-bg-subtle);
                --bs-alert-border-color: var(--bs-green-border-subtle);
                --bs-alert-link-color: var(--bs-green-text-emphasis)
            }

            .alert-yellow {
                --bs-alert-color: var(--bs-yellow-text-emphasis);
                --bs-alert-bg: var(--bs-yellow-bg-subtle);
                --bs-alert-border-color: var(--bs-yellow-border-subtle);
                --bs-alert-link-color: var(--bs-yellow-text-emphasis)
            }

            .alert-teal {
                --bs-alert-color: var(--bs-teal-text-emphasis);
                --bs-alert-bg: var(--bs-teal-bg-subtle);
                --bs-alert-border-color: var(--bs-teal-border-subtle);
                --bs-alert-link-color: var(--bs-teal-text-emphasis)
            }

            .alert-muted {
                --bs-alert-color: var(--bs-muted-text-emphasis);
                --bs-alert-bg: var(--bs-muted-bg-subtle);
                --bs-alert-border-color: var(--bs-muted-border-subtle);
                --bs-alert-link-color: var(--bs-muted-text-emphasis)
            }

            .alert-light {
                --bs-alert-color: var(--bs-light-text-emphasis);
                --bs-alert-bg: var(--bs-light-bg-subtle);
                --bs-alert-border-color: var(--bs-light-border-subtle);
                --bs-alert-link-color: var(--bs-light-text-emphasis)
            }

            .alert-lime {
                --bs-alert-color: var(--bs-lime-text-emphasis);
                --bs-alert-bg: var(--bs-lime-bg-subtle);
                --bs-alert-border-color: var(--bs-lime-border-subtle);
                --bs-alert-link-color: var(--bs-lime-text-emphasis)
            }

            .alert-gray-100 {
                --bs-alert-color: var(--bs-gray-100-text-emphasis);
                --bs-alert-bg: var(--bs-gray-100-bg-subtle);
                --bs-alert-border-color: var(--bs-gray-100-border-subtle);
                --bs-alert-link-color: var(--bs-gray-100-text-emphasis)
            }

            .alert-gray-200 {
                --bs-alert-color: var(--bs-gray-200-text-emphasis);
                --bs-alert-bg: var(--bs-gray-200-bg-subtle);
                --bs-alert-border-color: var(--bs-gray-200-border-subtle);
                --bs-alert-link-color: var(--bs-gray-200-text-emphasis)
            }

            .alert-gray-300 {
                --bs-alert-color: var(--bs-gray-300-text-emphasis);
                --bs-alert-bg: var(--bs-gray-300-bg-subtle);
                --bs-alert-border-color: var(--bs-gray-300-border-subtle);
                --bs-alert-link-color: var(--bs-gray-300-text-emphasis)
            }

            .alert-gray-400 {
                --bs-alert-color: var(--bs-gray-400-text-emphasis);
                --bs-alert-bg: var(--bs-gray-400-bg-subtle);
                --bs-alert-border-color: var(--bs-gray-400-border-subtle);
                --bs-alert-link-color: var(--bs-gray-400-text-emphasis)
            }

            .alert-gray-500 {
                --bs-alert-color: var(--bs-gray-500-text-emphasis);
                --bs-alert-bg: var(--bs-gray-500-bg-subtle);
                --bs-alert-border-color: var(--bs-gray-500-border-subtle);
                --bs-alert-link-color: var(--bs-gray-500-text-emphasis)
            }

            .alert-gray-600 {
                --bs-alert-color: var(--bs-gray-600-text-emphasis);
                --bs-alert-bg: var(--bs-gray-600-bg-subtle);
                --bs-alert-border-color: var(--bs-gray-600-border-subtle);
                --bs-alert-link-color: var(--bs-gray-600-text-emphasis)
            }

            .alert-gray-700 {
                --bs-alert-color: var(--bs-gray-700-text-emphasis);
                --bs-alert-bg: var(--bs-gray-700-bg-subtle);
                --bs-alert-border-color: var(--bs-gray-700-border-subtle);
                --bs-alert-link-color: var(--bs-gray-700-text-emphasis)
            }

            .alert-gray-800 {
                --bs-alert-color: var(--bs-gray-800-text-emphasis);
                --bs-alert-bg: var(--bs-gray-800-bg-subtle);
                --bs-alert-border-color: var(--bs-gray-800-border-subtle);
                --bs-alert-link-color: var(--bs-gray-800-text-emphasis)
            }

            .alert-gray-900 {
                --bs-alert-color: var(--bs-gray-900-text-emphasis);
                --bs-alert-bg: var(--bs-gray-900-bg-subtle);
                --bs-alert-border-color: var(--bs-gray-900-border-subtle);
                --bs-alert-link-color: var(--bs-gray-900-text-emphasis)
            }

            @keyframes progress-bar-stripes {
                0% {
                    background-position-x: 1rem
                }
            }

            .progress, .progress-stacked {
                --bs-progress-height: 1rem;
                --bs-progress-font-size: 0.65625rem;
                --bs-progress-bg: var(--bs-tertiary-bg);
                --bs-progress-border-radius: var(--bs-border-radius);
                --bs-progress-box-shadow: var(--bs-box-shadow-inset);
                --bs-progress-bar-color: #FFFFFF;
                --bs-progress-bar-bg: var(--bs-theme);
                --bs-progress-bar-transition: width 0.6s ease;
                display: flex;
                height: var(--bs-progress-height);
                overflow: hidden;
                font-size: var(--bs-progress-font-size);
                background-color: var(--bs-progress-bg);
                border-radius: var(--bs-progress-border-radius)
            }

            .progress-bar {
                display: flex;
                flex-direction: column;
                justify-content: center;
                overflow: hidden;
                color: var(--bs-progress-bar-color);
                text-align: center;
                white-space: nowrap;
                background-color: var(--bs-progress-bar-bg);
                transition: var(--bs-progress-bar-transition)
            }

            @media (prefers-reduced-motion: reduce) {
                .progress-bar {
                    transition: none
                }
            }

            .progress-bar-striped {
                background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
                background-size: var(--bs-progress-height) var(--bs-progress-height)
            }

            .progress-stacked > .progress {
                overflow: visible
            }

            .progress-stacked > .progress > .progress-bar {
                width: 100%
            }

            .progress-bar-animated {
                animation: 1s linear infinite progress-bar-stripes
            }

            @media (prefers-reduced-motion: reduce) {
                .progress-bar-animated {
                    animation: none
                }
            }

            .list-group {
                --bs-list-group-color: var(--bs-body-color);
                --bs-list-group-bg: var(--bs-component-bg);
                --bs-list-group-border-color: var(--bs-border-color-translucent);
                --bs-list-group-border-width: var(--bs-border-width);
                --bs-list-group-border-radius: var(--bs-border-radius);
                --bs-list-group-item-padding-x: 1rem;
                --bs-list-group-item-padding-y: 0.5rem;
                --bs-list-group-action-color: var(--bs-secondary-color);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-tertiary-bg);
                --bs-list-group-action-active-color: var(--bs-body-color);
                --bs-list-group-action-active-bg: var(--bs-secondary-bg);
                --bs-list-group-disabled-color: var(--bs-tertiary-color);
                --bs-list-group-disabled-bg: var(--bs-component-bg);
                --bs-list-group-active-color: #FFFFFF;
                --bs-list-group-active-bg: #0066ff;
                --bs-list-group-active-border-color: #0066ff;
                display: flex;
                flex-direction: column;
                padding-left: 0;
                margin-bottom: 0;
                border-radius: var(--bs-list-group-border-radius)
            }

            .list-group-numbered {
                list-style-type: none;
                counter-reset: section
            }

            .list-group-numbered > .list-group-item::before {
                content: counters(section, ".") ". ";
                counter-increment: section
            }

            .list-group-item-action {
                width: 100%;
                color: var(--bs-list-group-action-color);
                text-align: inherit
            }

            .list-group-item-action:focus, .list-group-item-action:hover {
                z-index: 1;
                color: var(--bs-list-group-action-hover-color);
                text-decoration: none;
                background-color: var(--bs-list-group-action-hover-bg)
            }

            .list-group-item-action:active {
                color: var(--bs-list-group-action-active-color);
                background-color: var(--bs-list-group-action-active-bg)
            }

            .list-group-item {
                position: relative;
                display: block;
                padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);
                color: var(--bs-list-group-color);
                text-decoration: none;
                background-color: var(--bs-list-group-bg);
                border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color)
            }

            .list-group-item:first-child {
                border-top-left-radius: inherit;
                border-top-right-radius: inherit
            }

            .list-group-item:last-child {
                border-bottom-right-radius: inherit;
                border-bottom-left-radius: inherit
            }

            .list-group-item.disabled, .list-group-item:disabled {
                color: var(--bs-list-group-disabled-color);
                pointer-events: none;
                background-color: var(--bs-list-group-disabled-bg)
            }

            .list-group-item.active {
                z-index: 2;
                color: var(--bs-list-group-active-color);
                background-color: var(--bs-list-group-active-bg);
                border-color: var(--bs-list-group-active-border-color)
            }

            .list-group-item + .list-group-item {
                border-top-width: 0
            }

            .list-group-item + .list-group-item.active {
                margin-top: calc(-1 * var(--bs-list-group-border-width));
                border-top-width: var(--bs-list-group-border-width)
            }

            .list-group-horizontal {
                flex-direction: row
            }

            .list-group-horizontal > .list-group-item:first-child:not(:last-child) {
                border-bottom-left-radius: var(--bs-list-group-border-radius);
                border-top-right-radius: 0
            }

            .list-group-horizontal > .list-group-item:last-child:not(:first-child) {
                border-top-right-radius: var(--bs-list-group-border-radius);
                border-bottom-left-radius: 0
            }

            .list-group-horizontal > .list-group-item.active {
                margin-top: 0
            }

            .list-group-horizontal > .list-group-item + .list-group-item {
                border-top-width: var(--bs-list-group-border-width);
                border-left-width: 0
            }

            .list-group-horizontal > .list-group-item + .list-group-item.active {
                margin-left: calc(-1 * var(--bs-list-group-border-width));
                border-left-width: var(--bs-list-group-border-width)
            }

            @media (min-width: 576px) {
                .list-group-horizontal-sm {
                    flex-direction: row
                }

                .list-group-horizontal-sm > .list-group-item:first-child:not(:last-child) {
                    border-bottom-left-radius: var(--bs-list-group-border-radius);
                    border-top-right-radius: 0
                }

                .list-group-horizontal-sm > .list-group-item:last-child:not(:first-child) {
                    border-top-right-radius: var(--bs-list-group-border-radius);
                    border-bottom-left-radius: 0
                }

                .list-group-horizontal-sm > .list-group-item.active {
                    margin-top: 0
                }

                .list-group-horizontal-sm > .list-group-item + .list-group-item {
                    border-top-width: var(--bs-list-group-border-width);
                    border-left-width: 0
                }

                .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
                    margin-left: calc(-1 * var(--bs-list-group-border-width));
                    border-left-width: var(--bs-list-group-border-width)
                }
            }

            @media (min-width: 768px) {
                .list-group-horizontal-md {
                    flex-direction: row
                }

                .list-group-horizontal-md > .list-group-item:first-child:not(:last-child) {
                    border-bottom-left-radius: var(--bs-list-group-border-radius);
                    border-top-right-radius: 0
                }

                .list-group-horizontal-md > .list-group-item:last-child:not(:first-child) {
                    border-top-right-radius: var(--bs-list-group-border-radius);
                    border-bottom-left-radius: 0
                }

                .list-group-horizontal-md > .list-group-item.active {
                    margin-top: 0
                }

                .list-group-horizontal-md > .list-group-item + .list-group-item {
                    border-top-width: var(--bs-list-group-border-width);
                    border-left-width: 0
                }

                .list-group-horizontal-md > .list-group-item + .list-group-item.active {
                    margin-left: calc(-1 * var(--bs-list-group-border-width));
                    border-left-width: var(--bs-list-group-border-width)
                }
            }

            @media (min-width: 992px) {
                .list-group-horizontal-lg {
                    flex-direction: row
                }

                .list-group-horizontal-lg > .list-group-item:first-child:not(:last-child) {
                    border-bottom-left-radius: var(--bs-list-group-border-radius);
                    border-top-right-radius: 0
                }

                .list-group-horizontal-lg > .list-group-item:last-child:not(:first-child) {
                    border-top-right-radius: var(--bs-list-group-border-radius);
                    border-bottom-left-radius: 0
                }

                .list-group-horizontal-lg > .list-group-item.active {
                    margin-top: 0
                }

                .list-group-horizontal-lg > .list-group-item + .list-group-item {
                    border-top-width: var(--bs-list-group-border-width);
                    border-left-width: 0
                }

                .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
                    margin-left: calc(-1 * var(--bs-list-group-border-width));
                    border-left-width: var(--bs-list-group-border-width)
                }
            }

            @media (min-width: 1200px) {
                .list-group-horizontal-xl {
                    flex-direction: row
                }

                .list-group-horizontal-xl > .list-group-item:first-child:not(:last-child) {
                    border-bottom-left-radius: var(--bs-list-group-border-radius);
                    border-top-right-radius: 0
                }

                .list-group-horizontal-xl > .list-group-item:last-child:not(:first-child) {
                    border-top-right-radius: var(--bs-list-group-border-radius);
                    border-bottom-left-radius: 0
                }

                .list-group-horizontal-xl > .list-group-item.active {
                    margin-top: 0
                }

                .list-group-horizontal-xl > .list-group-item + .list-group-item {
                    border-top-width: var(--bs-list-group-border-width);
                    border-left-width: 0
                }

                .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
                    margin-left: calc(-1 * var(--bs-list-group-border-width));
                    border-left-width: var(--bs-list-group-border-width)
                }
            }

            @media (min-width: 1660px) {
                .list-group-horizontal-xxl {
                    flex-direction: row
                }

                .list-group-horizontal-xxl > .list-group-item:first-child:not(:last-child) {
                    border-bottom-left-radius: var(--bs-list-group-border-radius);
                    border-top-right-radius: 0
                }

                .list-group-horizontal-xxl > .list-group-item:last-child:not(:first-child) {
                    border-top-right-radius: var(--bs-list-group-border-radius);
                    border-bottom-left-radius: 0
                }

                .list-group-horizontal-xxl > .list-group-item.active {
                    margin-top: 0
                }

                .list-group-horizontal-xxl > .list-group-item + .list-group-item {
                    border-top-width: var(--bs-list-group-border-width);
                    border-left-width: 0
                }

                .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
                    margin-left: calc(-1 * var(--bs-list-group-border-width));
                    border-left-width: var(--bs-list-group-border-width)
                }
            }

            @media (min-width: 1900px) {
                .list-group-horizontal-xxxl {
                    flex-direction: row
                }

                .list-group-horizontal-xxxl > .list-group-item:first-child:not(:last-child) {
                    border-bottom-left-radius: var(--bs-list-group-border-radius);
                    border-top-right-radius: 0
                }

                .list-group-horizontal-xxxl > .list-group-item:last-child:not(:first-child) {
                    border-top-right-radius: var(--bs-list-group-border-radius);
                    border-bottom-left-radius: 0
                }

                .list-group-horizontal-xxxl > .list-group-item.active {
                    margin-top: 0
                }

                .list-group-horizontal-xxxl > .list-group-item + .list-group-item {
                    border-top-width: var(--bs-list-group-border-width);
                    border-left-width: 0
                }

                .list-group-horizontal-xxxl > .list-group-item + .list-group-item.active {
                    margin-left: calc(-1 * var(--bs-list-group-border-width));
                    border-left-width: var(--bs-list-group-border-width)
                }
            }

            .list-group-flush {
                border-radius: 0
            }

            .list-group-flush > .list-group-item {
                border-width: 0 0 var(--bs-list-group-border-width)
            }

            .list-group-flush > .list-group-item:last-child {
                border-bottom-width: 0
            }

            .list-group-item-default {
                --bs-list-group-color: var(--bs-default-text-emphasis);
                --bs-list-group-bg: var(--bs-default-bg-subtle);
                --bs-list-group-border-color: var(--bs-default-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-default-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-default-border-subtle);
                --bs-list-group-active-color: var(--bs-default-bg-subtle);
                --bs-list-group-active-bg: var(--bs-default-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-default-text-emphasis)
            }

            .list-group-item-theme {
                --bs-list-group-color: var(--bs-theme-text-emphasis);
                --bs-list-group-bg: var(--bs-theme-bg-subtle);
                --bs-list-group-border-color: var(--bs-theme-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-theme-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-theme-border-subtle);
                --bs-list-group-active-color: var(--bs-theme-bg-subtle);
                --bs-list-group-active-bg: var(--bs-theme-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-theme-text-emphasis)
            }

            .list-group-item-theme-color {
                --bs-list-group-color: var(--bs-theme-color-text-emphasis);
                --bs-list-group-bg: var(--bs-theme-color-bg-subtle);
                --bs-list-group-border-color: var(--bs-theme-color-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-theme-color-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-theme-color-border-subtle);
                --bs-list-group-active-color: var(--bs-theme-color-bg-subtle);
                --bs-list-group-active-bg: var(--bs-theme-color-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-theme-color-text-emphasis)
            }

            .list-group-item-primary {
                --bs-list-group-color: var(--bs-primary-text-emphasis);
                --bs-list-group-bg: var(--bs-primary-bg-subtle);
                --bs-list-group-border-color: var(--bs-primary-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-primary-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-primary-border-subtle);
                --bs-list-group-active-color: var(--bs-primary-bg-subtle);
                --bs-list-group-active-bg: var(--bs-primary-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-primary-text-emphasis)
            }

            .list-group-item-secondary {
                --bs-list-group-color: var(--bs-secondary-text-emphasis);
                --bs-list-group-bg: var(--bs-secondary-bg-subtle);
                --bs-list-group-border-color: var(--bs-secondary-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-secondary-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-secondary-border-subtle);
                --bs-list-group-active-color: var(--bs-secondary-bg-subtle);
                --bs-list-group-active-bg: var(--bs-secondary-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-secondary-text-emphasis)
            }

            .list-group-item-warning {
                --bs-list-group-color: var(--bs-warning-text-emphasis);
                --bs-list-group-bg: var(--bs-warning-bg-subtle);
                --bs-list-group-border-color: var(--bs-warning-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-warning-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-warning-border-subtle);
                --bs-list-group-active-color: var(--bs-warning-bg-subtle);
                --bs-list-group-active-bg: var(--bs-warning-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-warning-text-emphasis)
            }

            .list-group-item-danger {
                --bs-list-group-color: var(--bs-danger-text-emphasis);
                --bs-list-group-bg: var(--bs-danger-bg-subtle);
                --bs-list-group-border-color: var(--bs-danger-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-danger-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-danger-border-subtle);
                --bs-list-group-active-color: var(--bs-danger-bg-subtle);
                --bs-list-group-active-bg: var(--bs-danger-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-danger-text-emphasis)
            }

            .list-group-item-success {
                --bs-list-group-color: var(--bs-success-text-emphasis);
                --bs-list-group-bg: var(--bs-success-bg-subtle);
                --bs-list-group-border-color: var(--bs-success-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-success-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-success-border-subtle);
                --bs-list-group-active-color: var(--bs-success-bg-subtle);
                --bs-list-group-active-bg: var(--bs-success-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-success-text-emphasis)
            }

            .list-group-item-info {
                --bs-list-group-color: var(--bs-info-text-emphasis);
                --bs-list-group-bg: var(--bs-info-bg-subtle);
                --bs-list-group-border-color: var(--bs-info-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-info-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-info-border-subtle);
                --bs-list-group-active-color: var(--bs-info-bg-subtle);
                --bs-list-group-active-bg: var(--bs-info-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-info-text-emphasis)
            }

            .list-group-item-dark {
                --bs-list-group-color: var(--bs-dark-text-emphasis);
                --bs-list-group-bg: var(--bs-dark-bg-subtle);
                --bs-list-group-border-color: var(--bs-dark-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-dark-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-dark-border-subtle);
                --bs-list-group-active-color: var(--bs-dark-bg-subtle);
                --bs-list-group-active-bg: var(--bs-dark-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-dark-text-emphasis)
            }

            .list-group-item-black {
                --bs-list-group-color: var(--bs-black-text-emphasis);
                --bs-list-group-bg: var(--bs-black-bg-subtle);
                --bs-list-group-border-color: var(--bs-black-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-black-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-black-border-subtle);
                --bs-list-group-active-color: var(--bs-black-bg-subtle);
                --bs-list-group-active-bg: var(--bs-black-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-black-text-emphasis)
            }

            .list-group-item-white {
                --bs-list-group-color: var(--bs-white-text-emphasis);
                --bs-list-group-bg: var(--bs-white-bg-subtle);
                --bs-list-group-border-color: var(--bs-white-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-white-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-white-border-subtle);
                --bs-list-group-active-color: var(--bs-white-bg-subtle);
                --bs-list-group-active-bg: var(--bs-white-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-white-text-emphasis)
            }

            .list-group-item-purple {
                --bs-list-group-color: var(--bs-purple-text-emphasis);
                --bs-list-group-bg: var(--bs-purple-bg-subtle);
                --bs-list-group-border-color: var(--bs-purple-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-purple-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-purple-border-subtle);
                --bs-list-group-active-color: var(--bs-purple-bg-subtle);
                --bs-list-group-active-bg: var(--bs-purple-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-purple-text-emphasis)
            }

            .list-group-item-indigo {
                --bs-list-group-color: var(--bs-indigo-text-emphasis);
                --bs-list-group-bg: var(--bs-indigo-bg-subtle);
                --bs-list-group-border-color: var(--bs-indigo-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-indigo-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-indigo-border-subtle);
                --bs-list-group-active-color: var(--bs-indigo-bg-subtle);
                --bs-list-group-active-bg: var(--bs-indigo-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-indigo-text-emphasis)
            }

            .list-group-item-red {
                --bs-list-group-color: var(--bs-red-text-emphasis);
                --bs-list-group-bg: var(--bs-red-bg-subtle);
                --bs-list-group-border-color: var(--bs-red-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-red-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-red-border-subtle);
                --bs-list-group-active-color: var(--bs-red-bg-subtle);
                --bs-list-group-active-bg: var(--bs-red-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-red-text-emphasis)
            }

            .list-group-item-pink {
                --bs-list-group-color: var(--bs-pink-text-emphasis);
                --bs-list-group-bg: var(--bs-pink-bg-subtle);
                --bs-list-group-border-color: var(--bs-pink-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-pink-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-pink-border-subtle);
                --bs-list-group-active-color: var(--bs-pink-bg-subtle);
                --bs-list-group-active-bg: var(--bs-pink-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-pink-text-emphasis)
            }

            .list-group-item-green {
                --bs-list-group-color: var(--bs-green-text-emphasis);
                --bs-list-group-bg: var(--bs-green-bg-subtle);
                --bs-list-group-border-color: var(--bs-green-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-green-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-green-border-subtle);
                --bs-list-group-active-color: var(--bs-green-bg-subtle);
                --bs-list-group-active-bg: var(--bs-green-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-green-text-emphasis)
            }

            .list-group-item-yellow {
                --bs-list-group-color: var(--bs-yellow-text-emphasis);
                --bs-list-group-bg: var(--bs-yellow-bg-subtle);
                --bs-list-group-border-color: var(--bs-yellow-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-yellow-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-yellow-border-subtle);
                --bs-list-group-active-color: var(--bs-yellow-bg-subtle);
                --bs-list-group-active-bg: var(--bs-yellow-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-yellow-text-emphasis)
            }

            .list-group-item-teal {
                --bs-list-group-color: var(--bs-teal-text-emphasis);
                --bs-list-group-bg: var(--bs-teal-bg-subtle);
                --bs-list-group-border-color: var(--bs-teal-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-teal-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-teal-border-subtle);
                --bs-list-group-active-color: var(--bs-teal-bg-subtle);
                --bs-list-group-active-bg: var(--bs-teal-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-teal-text-emphasis)
            }

            .list-group-item-muted {
                --bs-list-group-color: var(--bs-muted-text-emphasis);
                --bs-list-group-bg: var(--bs-muted-bg-subtle);
                --bs-list-group-border-color: var(--bs-muted-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-muted-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-muted-border-subtle);
                --bs-list-group-active-color: var(--bs-muted-bg-subtle);
                --bs-list-group-active-bg: var(--bs-muted-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-muted-text-emphasis)
            }

            .list-group-item-light {
                --bs-list-group-color: var(--bs-light-text-emphasis);
                --bs-list-group-bg: var(--bs-light-bg-subtle);
                --bs-list-group-border-color: var(--bs-light-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-light-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-light-border-subtle);
                --bs-list-group-active-color: var(--bs-light-bg-subtle);
                --bs-list-group-active-bg: var(--bs-light-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-light-text-emphasis)
            }

            .list-group-item-lime {
                --bs-list-group-color: var(--bs-lime-text-emphasis);
                --bs-list-group-bg: var(--bs-lime-bg-subtle);
                --bs-list-group-border-color: var(--bs-lime-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-lime-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-lime-border-subtle);
                --bs-list-group-active-color: var(--bs-lime-bg-subtle);
                --bs-list-group-active-bg: var(--bs-lime-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-lime-text-emphasis)
            }

            .list-group-item-gray-100 {
                --bs-list-group-color: var(--bs-gray-100-text-emphasis);
                --bs-list-group-bg: var(--bs-gray-100-bg-subtle);
                --bs-list-group-border-color: var(--bs-gray-100-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-gray-100-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-gray-100-border-subtle);
                --bs-list-group-active-color: var(--bs-gray-100-bg-subtle);
                --bs-list-group-active-bg: var(--bs-gray-100-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-gray-100-text-emphasis)
            }

            .list-group-item-gray-200 {
                --bs-list-group-color: var(--bs-gray-200-text-emphasis);
                --bs-list-group-bg: var(--bs-gray-200-bg-subtle);
                --bs-list-group-border-color: var(--bs-gray-200-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-gray-200-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-gray-200-border-subtle);
                --bs-list-group-active-color: var(--bs-gray-200-bg-subtle);
                --bs-list-group-active-bg: var(--bs-gray-200-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-gray-200-text-emphasis)
            }

            .list-group-item-gray-300 {
                --bs-list-group-color: var(--bs-gray-300-text-emphasis);
                --bs-list-group-bg: var(--bs-gray-300-bg-subtle);
                --bs-list-group-border-color: var(--bs-gray-300-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-gray-300-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-gray-300-border-subtle);
                --bs-list-group-active-color: var(--bs-gray-300-bg-subtle);
                --bs-list-group-active-bg: var(--bs-gray-300-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-gray-300-text-emphasis)
            }

            .list-group-item-gray-400 {
                --bs-list-group-color: var(--bs-gray-400-text-emphasis);
                --bs-list-group-bg: var(--bs-gray-400-bg-subtle);
                --bs-list-group-border-color: var(--bs-gray-400-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-gray-400-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-gray-400-border-subtle);
                --bs-list-group-active-color: var(--bs-gray-400-bg-subtle);
                --bs-list-group-active-bg: var(--bs-gray-400-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-gray-400-text-emphasis)
            }

            .list-group-item-gray-500 {
                --bs-list-group-color: var(--bs-gray-500-text-emphasis);
                --bs-list-group-bg: var(--bs-gray-500-bg-subtle);
                --bs-list-group-border-color: var(--bs-gray-500-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-gray-500-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-gray-500-border-subtle);
                --bs-list-group-active-color: var(--bs-gray-500-bg-subtle);
                --bs-list-group-active-bg: var(--bs-gray-500-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-gray-500-text-emphasis)
            }

            .list-group-item-gray-600 {
                --bs-list-group-color: var(--bs-gray-600-text-emphasis);
                --bs-list-group-bg: var(--bs-gray-600-bg-subtle);
                --bs-list-group-border-color: var(--bs-gray-600-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-gray-600-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-gray-600-border-subtle);
                --bs-list-group-active-color: var(--bs-gray-600-bg-subtle);
                --bs-list-group-active-bg: var(--bs-gray-600-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-gray-600-text-emphasis)
            }

            .list-group-item-gray-700 {
                --bs-list-group-color: var(--bs-gray-700-text-emphasis);
                --bs-list-group-bg: var(--bs-gray-700-bg-subtle);
                --bs-list-group-border-color: var(--bs-gray-700-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-gray-700-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-gray-700-border-subtle);
                --bs-list-group-active-color: var(--bs-gray-700-bg-subtle);
                --bs-list-group-active-bg: var(--bs-gray-700-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-gray-700-text-emphasis)
            }

            .list-group-item-gray-800 {
                --bs-list-group-color: var(--bs-gray-800-text-emphasis);
                --bs-list-group-bg: var(--bs-gray-800-bg-subtle);
                --bs-list-group-border-color: var(--bs-gray-800-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-gray-800-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-gray-800-border-subtle);
                --bs-list-group-active-color: var(--bs-gray-800-bg-subtle);
                --bs-list-group-active-bg: var(--bs-gray-800-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-gray-800-text-emphasis)
            }

            .list-group-item-gray-900 {
                --bs-list-group-color: var(--bs-gray-900-text-emphasis);
                --bs-list-group-bg: var(--bs-gray-900-bg-subtle);
                --bs-list-group-border-color: var(--bs-gray-900-border-subtle);
                --bs-list-group-action-hover-color: var(--bs-emphasis-color);
                --bs-list-group-action-hover-bg: var(--bs-gray-900-border-subtle);
                --bs-list-group-action-active-color: var(--bs-emphasis-color);
                --bs-list-group-action-active-bg: var(--bs-gray-900-border-subtle);
                --bs-list-group-active-color: var(--bs-gray-900-bg-subtle);
                --bs-list-group-active-bg: var(--bs-gray-900-text-emphasis);
                --bs-list-group-active-border-color: var(--bs-gray-900-text-emphasis)
            }

            .btn-close {
                --bs-btn-close-color: #000000;
                --bs-btn-close-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e");
                --bs-btn-close-opacity: 0.5;
                --bs-btn-close-hover-opacity: 0.75;
                --bs-btn-close-focus-shadow: 0 0 0 0.25rem rgba(0, 102, 255, 0.25);
                --bs-btn-close-focus-opacity: 1;
                --bs-btn-close-disabled-opacity: 0.25;
                --bs-btn-close-white-filter: invert(1) grayscale(100%) brightness(200%);
                box-sizing: content-box;
                width: 1em;
                height: 1em;
                padding: .25em .25em;
                color: var(--bs-btn-close-color);
                background: transparent var(--bs-btn-close-bg) center/1em auto no-repeat;
                border: 0;
                border-radius: 8px;
                opacity: var(--bs-btn-close-opacity)
            }

            .btn-close:hover {
                color: var(--bs-btn-close-color);
                text-decoration: none;
                opacity: var(--bs-btn-close-hover-opacity)
            }

            .btn-close:focus {
                outline: 0;
                box-shadow: var(--bs-btn-close-focus-shadow);
                opacity: var(--bs-btn-close-focus-opacity)
            }

            .btn-close.disabled, .btn-close:disabled {
                pointer-events: none;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
                opacity: var(--bs-btn-close-disabled-opacity)
            }

            .btn-close-white {
                filter: var(--bs-btn-close-white-filter)
            }

            [data-bs-theme=dark] .btn-close {
                filter: var(--bs-btn-close-white-filter)
            }

            .toast {
                --bs-toast-zindex: 1090;
                --bs-toast-padding-x: 0.75rem;
                --bs-toast-padding-y: 0.5rem;
                --bs-toast-spacing: 20px;
                --bs-toast-max-width: 350px;
                --bs-toast-font-size: 0.875rem;
                --bs-toast-bg: rgba(var(--bs-component-bg-rgb), 0.85);
                --bs-toast-border-width: var(--bs-border-width);
                --bs-toast-border-color: var(--bs-border-color-translucent);
                --bs-toast-border-radius: var(--bs-border-radius);
                --bs-toast-box-shadow: var(--bs-box-shadow);
                --bs-toast-header-color: var(--bs-heading-color);
                --bs-toast-header-bg: rgba(var(--bs-component-bg-rgb), 0.85);
                --bs-toast-header-border-color: var(--bs-border-color-translucent);
                width: var(--bs-toast-max-width);
                max-width: 100%;
                font-size: var(--bs-toast-font-size);
                color: var(--bs-toast-color);
                pointer-events: auto;
                background-color: var(--bs-toast-bg);
                background-clip: padding-box;
                border: var(--bs-toast-border-width) solid var(--bs-toast-border-color);
                box-shadow: var(--bs-toast-box-shadow);
                border-radius: var(--bs-toast-border-radius)
            }

            .toast.showing {
                opacity: 0
            }

            .toast:not(.show) {
                display: none
            }

            .toast-container {
                --bs-toast-zindex: 1090;
                position: absolute;
                z-index: var(--bs-toast-zindex);
                width: -moz-max-content;
                width: max-content;
                max-width: 100%;
                pointer-events: none
            }

            .toast-container > :not(:last-child) {
                margin-bottom: var(--bs-toast-spacing)
            }

            .toast-header {
                display: flex;
                align-items: center;
                padding: var(--bs-toast-padding-y) var(--bs-toast-padding-x);
                color: var(--bs-toast-header-color);
                background-color: var(--bs-toast-header-bg);
                background-clip: padding-box;
                border-bottom: var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);
                border-top-left-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));
                border-top-right-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width))
            }

            .toast-header .btn-close {
                margin-right: calc(-.5 * var(--bs-toast-padding-x));
                margin-left: var(--bs-toast-padding-x)
            }

            .toast-body {
                padding: var(--bs-toast-padding-x);
                word-wrap: break-word
            }

            .modal {
                --bs-modal-zindex: 1055;
                --bs-modal-width: 500px;
                --bs-modal-padding: 1rem;
                --bs-modal-margin: 0.5rem;
                --bs-modal-bg: var(--bs-component-bg);
                --bs-modal-border-color: var(--bs-border-color-translucent);
                --bs-modal-border-width: var(--bs-border-width);
                --bs-modal-border-radius: var(--bs-border-radius-lg);
                --bs-modal-box-shadow: 0 0.125rem 0.25rem rgba(var(--bs-body-color-rgb), 0.075);
                --bs-modal-inner-border-radius: calc(var(--bs-border-radius-lg) - (var(--bs-border-width)));
                --bs-modal-header-padding-x: 1rem;
                --bs-modal-header-padding-y: 1rem;
                --bs-modal-header-padding: 1rem 1rem;
                --bs-modal-header-border-color: var(--bs-border-color);
                --bs-modal-header-border-width: var(--bs-border-width);
                --bs-modal-title-line-height: 1.5;
                --bs-modal-footer-gap: 0.5rem;
                --bs-modal-footer-border-color: var(--bs-border-color);
                --bs-modal-footer-border-width: var(--bs-border-width);
                position: fixed;
                top: 0;
                left: 0;
                z-index: var(--bs-modal-zindex);
                display: none;
                width: 100%;
                height: 100%;
                overflow-x: hidden;
                overflow-y: auto;
                outline: 0
            }

            .modal-dialog {
                position: relative;
                width: auto;
                margin: var(--bs-modal-margin);
                pointer-events: none
            }

            .modal.fade .modal-dialog {
                transition: transform .3s ease-out;
                transform: translate(0, -50px)
            }

            @media (prefers-reduced-motion: reduce) {
                .modal.fade .modal-dialog {
                    transition: none
                }
            }

            .modal.show .modal-dialog {
                transform: none
            }

            .modal.modal-static .modal-dialog {
                transform: scale(1.02)
            }

            .modal-dialog-scrollable {
                height: calc(100% - var(--bs-modal-margin) * 2)
            }

            .modal-dialog-scrollable .modal-content {
                max-height: 100%;
                overflow: hidden
            }

            .modal-dialog-scrollable .modal-body {
                overflow-y: auto
            }

            .modal-dialog-centered {
                display: flex;
                align-items: center;
                min-height: calc(100% - var(--bs-modal-margin) * 2)
            }

            .modal-content {
                position: relative;
                display: flex;
                flex-direction: column;
                width: 100%;
                color: var(--bs-modal-color);
                pointer-events: auto;
                background-color: var(--bs-modal-bg);
                background-clip: padding-box;
                border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);
                border-radius: var(--bs-modal-border-radius);
                outline: 0
            }

            .modal-backdrop {
                --bs-backdrop-zindex: 1050;
                --bs-backdrop-bg: #000000;
                --bs-backdrop-opacity: 0.5;
                position: fixed;
                top: 0;
                left: 0;
                z-index: var(--bs-backdrop-zindex);
                width: 100vw;
                height: 100vh;
                background-color: var(--bs-backdrop-bg)
            }

            .modal-backdrop.fade {
                opacity: 0
            }

            .modal-backdrop.show {
                opacity: var(--bs-backdrop-opacity)
            }

            .modal-header {
                display: flex;
                flex-shrink: 0;
                align-items: center;
                padding: var(--bs-modal-header-padding);
                border-bottom: var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);
                border-top-left-radius: var(--bs-modal-inner-border-radius);
                border-top-right-radius: var(--bs-modal-inner-border-radius)
            }

            .modal-header .btn-close {
                padding: calc(var(--bs-modal-header-padding-y) * .5) calc(var(--bs-modal-header-padding-x) * .5);
                margin: calc(-.5 * var(--bs-modal-header-padding-y)) calc(-.5 * var(--bs-modal-header-padding-x)) calc(-.5 * var(--bs-modal-header-padding-y)) auto
            }

            .modal-title {
                margin-bottom: 0;
                line-height: var(--bs-modal-title-line-height)
            }

            .modal-body {
                position: relative;
                flex: 1 1 auto;
                padding: var(--bs-modal-padding)
            }

            .modal-footer {
                display: flex;
                flex-shrink: 0;
                flex-wrap: wrap;
                align-items: center;
                justify-content: flex-end;
                padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * .5);
                background-color: var(--bs-modal-footer-bg);
                border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);
                border-bottom-right-radius: var(--bs-modal-inner-border-radius);
                border-bottom-left-radius: var(--bs-modal-inner-border-radius)
            }

            .modal-footer > * {
                margin: calc(var(--bs-modal-footer-gap) * .5)
            }

            @media (min-width: 576px) {
                .modal {
                    --bs-modal-margin: 1.75rem;
                    --bs-modal-box-shadow: 0 0.5rem 1rem rgba(var(--bs-body-color-rgb), 0.15)
                }

                .modal-dialog {
                    max-width: var(--bs-modal-width);
                    margin-right: auto;
                    margin-left: auto
                }

                .modal-sm {
                    --bs-modal-width: 300px
                }
            }

            @media (min-width: 992px) {
                .modal-lg, .modal-xl {
                    --bs-modal-width: 800px
                }
            }

            @media (min-width: 1200px) {
                .modal-xl {
                    --bs-modal-width: 1140px
                }
            }

            .modal-fullscreen {
                width: 100vw;
                max-width: none;
                height: 100%;
                margin: 0
            }

            .modal-fullscreen .modal-content {
                height: 100%;
                border: 0;
                border-radius: 0
            }

            .modal-fullscreen .modal-footer, .modal-fullscreen .modal-header {
                border-radius: 0
            }

            .modal-fullscreen .modal-body {
                overflow-y: auto
            }

            @media (max-width: 575.98px) {
                .modal-fullscreen-sm-down {
                    width: 100vw;
                    max-width: none;
                    height: 100%;
                    margin: 0
                }

                .modal-fullscreen-sm-down .modal-content {
                    height: 100%;
                    border: 0;
                    border-radius: 0
                }

                .modal-fullscreen-sm-down .modal-footer, .modal-fullscreen-sm-down .modal-header {
                    border-radius: 0
                }

                .modal-fullscreen-sm-down .modal-body {
                    overflow-y: auto
                }
            }

            @media (max-width: 767.98px) {
                .modal-fullscreen-md-down {
                    width: 100vw;
                    max-width: none;
                    height: 100%;
                    margin: 0
                }

                .modal-fullscreen-md-down .modal-content {
                    height: 100%;
                    border: 0;
                    border-radius: 0
                }

                .modal-fullscreen-md-down .modal-footer, .modal-fullscreen-md-down .modal-header {
                    border-radius: 0
                }

                .modal-fullscreen-md-down .modal-body {
                    overflow-y: auto
                }
            }

            @media (max-width: 991.98px) {
                .modal-fullscreen-lg-down {
                    width: 100vw;
                    max-width: none;
                    height: 100%;
                    margin: 0
                }

                .modal-fullscreen-lg-down .modal-content {
                    height: 100%;
                    border: 0;
                    border-radius: 0
                }

                .modal-fullscreen-lg-down .modal-footer, .modal-fullscreen-lg-down .modal-header {
                    border-radius: 0
                }

                .modal-fullscreen-lg-down .modal-body {
                    overflow-y: auto
                }
            }

            @media (max-width: 1199.98px) {
                .modal-fullscreen-xl-down {
                    width: 100vw;
                    max-width: none;
                    height: 100%;
                    margin: 0
                }

                .modal-fullscreen-xl-down .modal-content {
                    height: 100%;
                    border: 0;
                    border-radius: 0
                }

                .modal-fullscreen-xl-down .modal-footer, .modal-fullscreen-xl-down .modal-header {
                    border-radius: 0
                }

                .modal-fullscreen-xl-down .modal-body {
                    overflow-y: auto
                }
            }

            @media (max-width: 1659.98px) {
                .modal-fullscreen-xxl-down {
                    width: 100vw;
                    max-width: none;
                    height: 100%;
                    margin: 0
                }

                .modal-fullscreen-xxl-down .modal-content {
                    height: 100%;
                    border: 0;
                    border-radius: 0
                }

                .modal-fullscreen-xxl-down .modal-footer, .modal-fullscreen-xxl-down .modal-header {
                    border-radius: 0
                }

                .modal-fullscreen-xxl-down .modal-body {
                    overflow-y: auto
                }
            }

            @media (max-width: 1899.98px) {
                .modal-fullscreen-xxxl-down {
                    width: 100vw;
                    max-width: none;
                    height: 100%;
                    margin: 0
                }

                .modal-fullscreen-xxxl-down .modal-content {
                    height: 100%;
                    border: 0;
                    border-radius: 0
                }

                .modal-fullscreen-xxxl-down .modal-footer, .modal-fullscreen-xxxl-down .modal-header {
                    border-radius: 0
                }

                .modal-fullscreen-xxxl-down .modal-body {
                    overflow-y: auto
                }
            }

            .tooltip {
                --bs-tooltip-zindex: 1080;
                --bs-tooltip-max-width: 200px;
                --bs-tooltip-padding-x: 0.5rem;
                --bs-tooltip-padding-y: 0.25rem;
                --bs-tooltip-font-size: 0.765625rem;
                --bs-tooltip-color: var(--bs-body-bg);
                --bs-tooltip-bg: var(--bs-emphasis-color);
                --bs-tooltip-border-radius: var(--bs-border-radius);
                --bs-tooltip-opacity: 0.9;
                --bs-tooltip-arrow-width: 0.8rem;
                --bs-tooltip-arrow-height: 0.4rem;
                z-index: var(--bs-tooltip-zindex);
                display: block;
                margin: var(--bs-tooltip-margin);
                font-family: Inter, sans-serif;
                font-style: normal;
                font-weight: 400;
                line-height: 1.5;
                text-align: left;
                text-align: start;
                text-decoration: none;
                text-shadow: none;
                text-transform: none;
                letter-spacing: normal;
                word-break: normal;
                white-space: normal;
                word-spacing: normal;
                line-break: auto;
                font-size: var(--bs-tooltip-font-size);
                word-wrap: break-word;
                opacity: 0
            }

            .tooltip.show {
                opacity: var(--bs-tooltip-opacity)
            }

            .tooltip .tooltip-arrow {
                display: block;
                width: var(--bs-tooltip-arrow-width);
                height: var(--bs-tooltip-arrow-height)
            }

            .tooltip .tooltip-arrow::before {
                position: absolute;
                content: "";
                border-color: transparent;
                border-style: solid
            }

            .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow, .bs-tooltip-top .tooltip-arrow {
                bottom: calc(-1 * var(--bs-tooltip-arrow-height))
            }

            .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before, .bs-tooltip-top .tooltip-arrow::before {
                top: -1px;
                border-width: var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * .5) 0;
                border-top-color: var(--bs-tooltip-bg)
            }

            .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow, .bs-tooltip-end .tooltip-arrow {
                left: calc(-1 * var(--bs-tooltip-arrow-height));
                width: var(--bs-tooltip-arrow-height);
                height: var(--bs-tooltip-arrow-width)
            }

            .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before, .bs-tooltip-end .tooltip-arrow::before {
                right: -1px;
                border-width: calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * .5) 0;
                border-right-color: var(--bs-tooltip-bg)
            }

            .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow, .bs-tooltip-bottom .tooltip-arrow {
                top: calc(-1 * var(--bs-tooltip-arrow-height))
            }

            .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before, .bs-tooltip-bottom .tooltip-arrow::before {
                bottom: -1px;
                border-width: 0 calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height);
                border-bottom-color: var(--bs-tooltip-bg)
            }

            .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow, .bs-tooltip-start .tooltip-arrow {
                right: calc(-1 * var(--bs-tooltip-arrow-height));
                width: var(--bs-tooltip-arrow-height);
                height: var(--bs-tooltip-arrow-width)
            }

            .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before, .bs-tooltip-start .tooltip-arrow::before {
                left: -1px;
                border-width: calc(var(--bs-tooltip-arrow-width) * .5) 0 calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height);
                border-left-color: var(--bs-tooltip-bg)
            }

            .tooltip-inner {
                max-width: var(--bs-tooltip-max-width);
                padding: var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);
                color: var(--bs-tooltip-color);
                text-align: center;
                background-color: var(--bs-tooltip-bg);
                border-radius: var(--bs-tooltip-border-radius)
            }

            .popover {
                --bs-popover-zindex: 1070;
                --bs-popover-max-width: 276px;
                --bs-popover-font-size: 0.765625rem;
                --bs-popover-bg: var(--bs-body-bg);
                --bs-popover-border-width: var(--bs-border-width);
                --bs-popover-border-color: var(--bs-border-color-translucent);
                --bs-popover-border-radius: var(--bs-border-radius-lg);
                --bs-popover-inner-border-radius: calc(var(--bs-border-radius-lg) - var(--bs-border-width));
                --bs-popover-box-shadow: var(--bs-box-shadow);
                --bs-popover-header-padding-x: 1rem;
                --bs-popover-header-padding-y: 0.5rem;
                --bs-popover-header-font-size: 0.875rem;
                --bs-popover-header-color: #000000;
                --bs-popover-header-bg: var(--bs-secondary-bg);
                --bs-popover-body-padding-x: 1rem;
                --bs-popover-body-padding-y: 1rem;
                --bs-popover-body-color: var(--bs-body-color);
                --bs-popover-arrow-width: 1rem;
                --bs-popover-arrow-height: 0.5rem;
                --bs-popover-arrow-border: var(--bs-popover-border-color);
                z-index: var(--bs-popover-zindex);
                display: block;
                max-width: var(--bs-popover-max-width);
                font-family: Inter, sans-serif;
                font-style: normal;
                font-weight: 400;
                line-height: 1.5;
                text-align: left;
                text-align: start;
                text-decoration: none;
                text-shadow: none;
                text-transform: none;
                letter-spacing: normal;
                word-break: normal;
                white-space: normal;
                word-spacing: normal;
                line-break: auto;
                font-size: var(--bs-popover-font-size);
                word-wrap: break-word;
                background-color: var(--bs-popover-bg);
                background-clip: padding-box;
                border: var(--bs-popover-border-width) solid var(--bs-popover-border-color);
                border-radius: var(--bs-popover-border-radius)
            }

            .popover .popover-arrow {
                display: block;
                width: var(--bs-popover-arrow-width);
                height: var(--bs-popover-arrow-height)
            }

            .popover .popover-arrow::after, .popover .popover-arrow::before {
                position: absolute;
                display: block;
                content: "";
                border-color: transparent;
                border-style: solid;
                border-width: 0
            }

            .bs-popover-auto[data-popper-placement^=top] > .popover-arrow, .bs-popover-top > .popover-arrow {
                bottom: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))
            }

            .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before, .bs-popover-top > .popover-arrow::after, .bs-popover-top > .popover-arrow::before {
                border-width: var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * .5) 0
            }

            .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before, .bs-popover-top > .popover-arrow::before {
                bottom: 0;
                border-top-color: var(--bs-popover-arrow-border)
            }

            .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after, .bs-popover-top > .popover-arrow::after {
                bottom: var(--bs-popover-border-width);
                border-top-color: var(--bs-popover-bg)
            }

            .bs-popover-auto[data-popper-placement^=right] > .popover-arrow, .bs-popover-end > .popover-arrow {
                left: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
                width: var(--bs-popover-arrow-height);
                height: var(--bs-popover-arrow-width)
            }

            .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before, .bs-popover-end > .popover-arrow::after, .bs-popover-end > .popover-arrow::before {
                border-width: calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * .5) 0
            }

            .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before, .bs-popover-end > .popover-arrow::before {
                left: 0;
                border-right-color: var(--bs-popover-arrow-border)
            }

            .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after, .bs-popover-end > .popover-arrow::after {
                left: var(--bs-popover-border-width);
                border-right-color: var(--bs-popover-bg)
            }

            .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow, .bs-popover-bottom > .popover-arrow {
                top: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))
            }

            .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before, .bs-popover-bottom > .popover-arrow::after, .bs-popover-bottom > .popover-arrow::before {
                border-width: 0 calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height)
            }

            .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before, .bs-popover-bottom > .popover-arrow::before {
                top: 0;
                border-bottom-color: var(--bs-popover-arrow-border)
            }

            .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after, .bs-popover-bottom > .popover-arrow::after {
                top: var(--bs-popover-border-width);
                border-bottom-color: var(--bs-popover-bg)
            }

            .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before, .bs-popover-bottom .popover-header::before {
                position: absolute;
                top: 0;
                left: 50%;
                display: block;
                width: var(--bs-popover-arrow-width);
                margin-left: calc(-.5 * var(--bs-popover-arrow-width));
                content: "";
                border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-header-bg)
            }

            .bs-popover-auto[data-popper-placement^=left] > .popover-arrow, .bs-popover-start > .popover-arrow {
                right: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
                width: var(--bs-popover-arrow-height);
                height: var(--bs-popover-arrow-width)
            }

            .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before, .bs-popover-start > .popover-arrow::after, .bs-popover-start > .popover-arrow::before {
                border-width: calc(var(--bs-popover-arrow-width) * .5) 0 calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height)
            }

            .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before, .bs-popover-start > .popover-arrow::before {
                right: 0;
                border-left-color: var(--bs-popover-arrow-border)
            }

            .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after, .bs-popover-start > .popover-arrow::after {
                right: var(--bs-popover-border-width);
                border-left-color: var(--bs-popover-bg)
            }

            .popover-header {
                padding: var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);
                margin-bottom: 0;
                font-size: var(--bs-popover-header-font-size);
                color: var(--bs-popover-header-color);
                background-color: var(--bs-popover-header-bg);
                border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-border-color);
                border-top-left-radius: var(--bs-popover-inner-border-radius);
                border-top-right-radius: var(--bs-popover-inner-border-radius)
            }

            .popover-header:empty {
                display: none
            }

            .popover-body {
                padding: var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);
                color: var(--bs-popover-body-color)
            }

            .carousel {
                position: relative
            }

            .carousel.pointer-event {
                touch-action: pan-y
            }

            .carousel-inner {
                position: relative;
                width: 100%;
                overflow: hidden
            }

            .carousel-inner::after {
                display: block;
                clear: both;
                content: ""
            }

            .carousel-item {
                position: relative;
                display: none;
                float: left;
                width: 100%;
                margin-right: -100%;
                backface-visibility: hidden;
                transition: transform .6s ease-in-out
            }

            @media (prefers-reduced-motion: reduce) {
                .carousel-item {
                    transition: none
                }
            }

            .carousel-item-next, .carousel-item-prev, .carousel-item.active {
                display: block
            }

            .active.carousel-item-end, .carousel-item-next:not(.carousel-item-start) {
                transform: translateX(100%)
            }

            .active.carousel-item-start, .carousel-item-prev:not(.carousel-item-end) {
                transform: translateX(-100%)
            }

            .carousel-fade .carousel-item {
                opacity: 0;
                transition-property: opacity;
                transform: none
            }

            .carousel-fade .carousel-item-next.carousel-item-start, .carousel-fade .carousel-item-prev.carousel-item-end, .carousel-fade .carousel-item.active {
                z-index: 1;
                opacity: 1
            }

            .carousel-fade .active.carousel-item-end, .carousel-fade .active.carousel-item-start {
                z-index: 0;
                opacity: 0;
                transition: opacity 0s .6s
            }

            @media (prefers-reduced-motion: reduce) {
                .carousel-fade .active.carousel-item-end, .carousel-fade .active.carousel-item-start {
                    transition: none
                }
            }

            .carousel-control-next, .carousel-control-prev {
                position: absolute;
                top: 0;
                bottom: 0;
                z-index: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 15%;
                padding: 0;
                color: #fff;
                text-align: center;
                background: 0 0;
                border: 0;
                opacity: .5;
                transition: opacity .15s ease
            }

            @media (prefers-reduced-motion: reduce) {
                .carousel-control-next, .carousel-control-prev {
                    transition: none
                }
            }

            .carousel-control-next:focus, .carousel-control-next:hover, .carousel-control-prev:focus, .carousel-control-prev:hover {
                color: #fff;
                text-decoration: none;
                outline: 0;
                opacity: .9
            }

            .carousel-control-prev {
                left: 0
            }

            .carousel-control-next {
                right: 0
            }

            .carousel-control-next-icon, .carousel-control-prev-icon {
                display: inline-block;
                width: 2rem;
                height: 2rem;
                background-repeat: no-repeat;
                background-position: 50%;
                background-size: 100% 100%
            }

            .carousel-control-prev-icon {
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23FFFFFF'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e")
            }

            .carousel-control-next-icon {
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23FFFFFF'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")
            }

            .carousel-indicators {
                position: absolute;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 2;
                display: flex;
                justify-content: center;
                padding: 0;
                margin-right: 15%;
                margin-bottom: 1rem;
                margin-left: 15%
            }

            .carousel-indicators [data-bs-target] {
                box-sizing: content-box;
                flex: 0 1 auto;
                width: 30px;
                height: 3px;
                padding: 0;
                margin-right: 3px;
                margin-left: 3px;
                text-indent: -999px;
                cursor: pointer;
                background-color: #fff;
                background-clip: padding-box;
                border: 0;
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                opacity: .5;
                transition: opacity .6s ease
            }

            @media (prefers-reduced-motion: reduce) {
                .carousel-indicators [data-bs-target] {
                    transition: none
                }
            }

            .carousel-indicators .active {
                opacity: 1
            }

            .carousel-caption {
                position: absolute;
                right: 15%;
                bottom: 1.25rem;
                left: 15%;
                padding-top: 1.25rem;
                padding-bottom: 1.25rem;
                color: #fff;
                text-align: center
            }

            .carousel-dark .carousel-control-next-icon, .carousel-dark .carousel-control-prev-icon {
                filter: invert(1) grayscale(100)
            }

            .carousel-dark .carousel-indicators [data-bs-target] {
                background-color: #000
            }

            .carousel-dark .carousel-caption {
                color: #000
            }

            [data-bs-theme=dark] .carousel .carousel-control-next-icon, [data-bs-theme=dark] .carousel .carousel-control-prev-icon, [data-bs-theme=dark].carousel .carousel-control-next-icon, [data-bs-theme=dark].carousel .carousel-control-prev-icon {
                filter: invert(1) grayscale(100)
            }

            [data-bs-theme=dark] .carousel .carousel-indicators [data-bs-target], [data-bs-theme=dark].carousel .carousel-indicators [data-bs-target] {
                background-color: #000
            }

            [data-bs-theme=dark] .carousel .carousel-caption, [data-bs-theme=dark].carousel .carousel-caption {
                color: #000
            }

            .spinner-border, .spinner-grow {
                display: inline-block;
                width: var(--bs-spinner-width);
                height: var(--bs-spinner-height);
                vertical-align: var(--bs-spinner-vertical-align);
                border-radius: 50%;
                animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name)
            }

            @keyframes spinner-border {
                to {
                    transform: rotate(360deg)
                }
            }

            .spinner-border {
                --bs-spinner-width: 2rem;
                --bs-spinner-height: 2rem;
                --bs-spinner-vertical-align: -0.125em;
                --bs-spinner-border-width: 0.25em;
                --bs-spinner-animation-speed: 0.75s;
                --bs-spinner-animation-name: spinner-border;
                border: var(--bs-spinner-border-width) solid currentcolor;
                border-right-color: transparent
            }

            .spinner-border-sm {
                --bs-spinner-width: 1rem;
                --bs-spinner-height: 1rem;
                --bs-spinner-border-width: 0.2em
            }

            @keyframes spinner-grow {
                0% {
                    transform: scale(0)
                }
                50% {
                    opacity: 1;
                    transform: none
                }
            }

            .spinner-grow {
                --bs-spinner-width: 2rem;
                --bs-spinner-height: 2rem;
                --bs-spinner-vertical-align: -0.125em;
                --bs-spinner-animation-speed: 0.75s;
                --bs-spinner-animation-name: spinner-grow;
                background-color: currentcolor;
                opacity: 0
            }

            .spinner-grow-sm {
                --bs-spinner-width: 1rem;
                --bs-spinner-height: 1rem
            }

            @media (prefers-reduced-motion: reduce) {
                .spinner-border, .spinner-grow {
                    --bs-spinner-animation-speed: 1.5s
                }
            }

            .offcanvas, .offcanvas-lg, .offcanvas-md, .offcanvas-sm, .offcanvas-xl, .offcanvas-xxl, .offcanvas-xxxl {
                --bs-offcanvas-zindex: 1045;
                --bs-offcanvas-width: 400px;
                --bs-offcanvas-height: 30vh;
                --bs-offcanvas-padding-x: 1rem;
                --bs-offcanvas-padding-y: 1rem;
                --bs-offcanvas-color: var(--bs-body-color);
                --bs-offcanvas-bg: var(--bs-body-bg);
                --bs-offcanvas-border-width: var(--bs-border-width);
                --bs-offcanvas-border-color: var(--bs-border-color-translucent);
                --bs-offcanvas-box-shadow: 0 0.125rem 0.25rem rgba(var(--bs-body-color-rgb), 0.075);
                --bs-offcanvas-transition: transform 0.3s ease-in-out;
                --bs-offcanvas-title-line-height: 1.5
            }

            @media (max-width: 575.98px) {
                .offcanvas-sm {
                    position: fixed;
                    bottom: 0;
                    z-index: var(--bs-offcanvas-zindex);
                    display: flex;
                    flex-direction: column;
                    max-width: 100%;
                    color: var(--bs-offcanvas-color);
                    visibility: hidden;
                    background-color: var(--bs-offcanvas-bg);
                    background-clip: padding-box;
                    outline: 0;
                    transition: var(--bs-offcanvas-transition)
                }
            }

            @media (max-width: 575.98px) and (prefers-reduced-motion: reduce) {
                .offcanvas-sm {
                    transition: none
                }
            }

            @media (max-width: 575.98px) {
                .offcanvas-sm.offcanvas-start {
                    top: 0;
                    left: 0;
                    width: var(--bs-offcanvas-width);
                    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateX(-100%)
                }

                .offcanvas-sm.offcanvas-end {
                    top: 0;
                    right: 0;
                    width: var(--bs-offcanvas-width);
                    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateX(100%)
                }

                .offcanvas-sm.offcanvas-top {
                    top: 0;
                    right: 0;
                    left: 0;
                    height: var(--bs-offcanvas-height);
                    max-height: 100%;
                    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateY(-100%)
                }

                .offcanvas-sm.offcanvas-bottom {
                    right: 0;
                    left: 0;
                    height: var(--bs-offcanvas-height);
                    max-height: 100%;
                    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateY(100%)
                }

                .offcanvas-sm.show:not(.hiding), .offcanvas-sm.showing {
                    transform: none
                }

                .offcanvas-sm.hiding, .offcanvas-sm.show, .offcanvas-sm.showing {
                    visibility: visible
                }
            }

            @media (min-width: 576px) {
                .offcanvas-sm {
                    --bs-offcanvas-height: auto;
                    --bs-offcanvas-border-width: 0;
                    background-color: transparent !important
                }

                .offcanvas-sm .offcanvas-header {
                    display: none
                }

                .offcanvas-sm .offcanvas-body {
                    display: flex;
                    flex-grow: 0;
                    padding: 0;
                    overflow-y: visible;
                    background-color: transparent !important
                }
            }

            @media (max-width: 767.98px) {
                .offcanvas-md {
                    position: fixed;
                    bottom: 0;
                    z-index: var(--bs-offcanvas-zindex);
                    display: flex;
                    flex-direction: column;
                    max-width: 100%;
                    color: var(--bs-offcanvas-color);
                    visibility: hidden;
                    background-color: var(--bs-offcanvas-bg);
                    background-clip: padding-box;
                    outline: 0;
                    transition: var(--bs-offcanvas-transition)
                }
            }

            @media (max-width: 767.98px) and (prefers-reduced-motion: reduce) {
                .offcanvas-md {
                    transition: none
                }
            }

            @media (max-width: 767.98px) {
                .offcanvas-md.offcanvas-start {
                    top: 0;
                    left: 0;
                    width: var(--bs-offcanvas-width);
                    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateX(-100%)
                }

                .offcanvas-md.offcanvas-end {
                    top: 0;
                    right: 0;
                    width: var(--bs-offcanvas-width);
                    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateX(100%)
                }

                .offcanvas-md.offcanvas-top {
                    top: 0;
                    right: 0;
                    left: 0;
                    height: var(--bs-offcanvas-height);
                    max-height: 100%;
                    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateY(-100%)
                }

                .offcanvas-md.offcanvas-bottom {
                    right: 0;
                    left: 0;
                    height: var(--bs-offcanvas-height);
                    max-height: 100%;
                    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateY(100%)
                }

                .offcanvas-md.show:not(.hiding), .offcanvas-md.showing {
                    transform: none
                }

                .offcanvas-md.hiding, .offcanvas-md.show, .offcanvas-md.showing {
                    visibility: visible
                }
            }

            @media (min-width: 768px) {
                .offcanvas-md {
                    --bs-offcanvas-height: auto;
                    --bs-offcanvas-border-width: 0;
                    background-color: transparent !important
                }

                .offcanvas-md .offcanvas-header {
                    display: none
                }

                .offcanvas-md .offcanvas-body {
                    display: flex;
                    flex-grow: 0;
                    padding: 0;
                    overflow-y: visible;
                    background-color: transparent !important
                }
            }

            @media (max-width: 991.98px) {
                .offcanvas-lg {
                    position: fixed;
                    bottom: 0;
                    z-index: var(--bs-offcanvas-zindex);
                    display: flex;
                    flex-direction: column;
                    max-width: 100%;
                    color: var(--bs-offcanvas-color);
                    visibility: hidden;
                    background-color: var(--bs-offcanvas-bg);
                    background-clip: padding-box;
                    outline: 0;
                    transition: var(--bs-offcanvas-transition)
                }
            }

            @media (max-width: 991.98px) and (prefers-reduced-motion: reduce) {
                .offcanvas-lg {
                    transition: none
                }
            }

            @media (max-width: 991.98px) {
                .offcanvas-lg.offcanvas-start {
                    top: 0;
                    left: 0;
                    width: var(--bs-offcanvas-width);
                    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateX(-100%)
                }

                .offcanvas-lg.offcanvas-end {
                    top: 0;
                    right: 0;
                    width: var(--bs-offcanvas-width);
                    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateX(100%)
                }

                .offcanvas-lg.offcanvas-top {
                    top: 0;
                    right: 0;
                    left: 0;
                    height: var(--bs-offcanvas-height);
                    max-height: 100%;
                    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateY(-100%)
                }

                .offcanvas-lg.offcanvas-bottom {
                    right: 0;
                    left: 0;
                    height: var(--bs-offcanvas-height);
                    max-height: 100%;
                    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateY(100%)
                }

                .offcanvas-lg.show:not(.hiding), .offcanvas-lg.showing {
                    transform: none
                }

                .offcanvas-lg.hiding, .offcanvas-lg.show, .offcanvas-lg.showing {
                    visibility: visible
                }
            }

            @media (min-width: 992px) {
                .offcanvas-lg {
                    --bs-offcanvas-height: auto;
                    --bs-offcanvas-border-width: 0;
                    background-color: transparent !important
                }

                .offcanvas-lg .offcanvas-header {
                    display: none
                }

                .offcanvas-lg .offcanvas-body {
                    display: flex;
                    flex-grow: 0;
                    padding: 0;
                    overflow-y: visible;
                    background-color: transparent !important
                }
            }

            @media (max-width: 1199.98px) {
                .offcanvas-xl {
                    position: fixed;
                    bottom: 0;
                    z-index: var(--bs-offcanvas-zindex);
                    display: flex;
                    flex-direction: column;
                    max-width: 100%;
                    color: var(--bs-offcanvas-color);
                    visibility: hidden;
                    background-color: var(--bs-offcanvas-bg);
                    background-clip: padding-box;
                    outline: 0;
                    transition: var(--bs-offcanvas-transition)
                }
            }

            @media (max-width: 1199.98px) and (prefers-reduced-motion: reduce) {
                .offcanvas-xl {
                    transition: none
                }
            }

            @media (max-width: 1199.98px) {
                .offcanvas-xl.offcanvas-start {
                    top: 0;
                    left: 0;
                    width: var(--bs-offcanvas-width);
                    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateX(-100%)
                }

                .offcanvas-xl.offcanvas-end {
                    top: 0;
                    right: 0;
                    width: var(--bs-offcanvas-width);
                    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateX(100%)
                }

                .offcanvas-xl.offcanvas-top {
                    top: 0;
                    right: 0;
                    left: 0;
                    height: var(--bs-offcanvas-height);
                    max-height: 100%;
                    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateY(-100%)
                }

                .offcanvas-xl.offcanvas-bottom {
                    right: 0;
                    left: 0;
                    height: var(--bs-offcanvas-height);
                    max-height: 100%;
                    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateY(100%)
                }

                .offcanvas-xl.show:not(.hiding), .offcanvas-xl.showing {
                    transform: none
                }

                .offcanvas-xl.hiding, .offcanvas-xl.show, .offcanvas-xl.showing {
                    visibility: visible
                }
            }

            @media (min-width: 1200px) {
                .offcanvas-xl {
                    --bs-offcanvas-height: auto;
                    --bs-offcanvas-border-width: 0;
                    background-color: transparent !important
                }

                .offcanvas-xl .offcanvas-header {
                    display: none
                }

                .offcanvas-xl .offcanvas-body {
                    display: flex;
                    flex-grow: 0;
                    padding: 0;
                    overflow-y: visible;
                    background-color: transparent !important
                }
            }

            @media (max-width: 1659.98px) {
                .offcanvas-xxl {
                    position: fixed;
                    bottom: 0;
                    z-index: var(--bs-offcanvas-zindex);
                    display: flex;
                    flex-direction: column;
                    max-width: 100%;
                    color: var(--bs-offcanvas-color);
                    visibility: hidden;
                    background-color: var(--bs-offcanvas-bg);
                    background-clip: padding-box;
                    outline: 0;
                    transition: var(--bs-offcanvas-transition)
                }
            }

            @media (max-width: 1659.98px) and (prefers-reduced-motion: reduce) {
                .offcanvas-xxl {
                    transition: none
                }
            }

            @media (max-width: 1659.98px) {
                .offcanvas-xxl.offcanvas-start {
                    top: 0;
                    left: 0;
                    width: var(--bs-offcanvas-width);
                    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateX(-100%)
                }

                .offcanvas-xxl.offcanvas-end {
                    top: 0;
                    right: 0;
                    width: var(--bs-offcanvas-width);
                    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateX(100%)
                }

                .offcanvas-xxl.offcanvas-top {
                    top: 0;
                    right: 0;
                    left: 0;
                    height: var(--bs-offcanvas-height);
                    max-height: 100%;
                    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateY(-100%)
                }

                .offcanvas-xxl.offcanvas-bottom {
                    right: 0;
                    left: 0;
                    height: var(--bs-offcanvas-height);
                    max-height: 100%;
                    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateY(100%)
                }

                .offcanvas-xxl.show:not(.hiding), .offcanvas-xxl.showing {
                    transform: none
                }

                .offcanvas-xxl.hiding, .offcanvas-xxl.show, .offcanvas-xxl.showing {
                    visibility: visible
                }
            }

            @media (min-width: 1660px) {
                .offcanvas-xxl {
                    --bs-offcanvas-height: auto;
                    --bs-offcanvas-border-width: 0;
                    background-color: transparent !important
                }

                .offcanvas-xxl .offcanvas-header {
                    display: none
                }

                .offcanvas-xxl .offcanvas-body {
                    display: flex;
                    flex-grow: 0;
                    padding: 0;
                    overflow-y: visible;
                    background-color: transparent !important
                }
            }

            @media (max-width: 1899.98px) {
                .offcanvas-xxxl {
                    position: fixed;
                    bottom: 0;
                    z-index: var(--bs-offcanvas-zindex);
                    display: flex;
                    flex-direction: column;
                    max-width: 100%;
                    color: var(--bs-offcanvas-color);
                    visibility: hidden;
                    background-color: var(--bs-offcanvas-bg);
                    background-clip: padding-box;
                    outline: 0;
                    transition: var(--bs-offcanvas-transition)
                }
            }

            @media (max-width: 1899.98px) and (prefers-reduced-motion: reduce) {
                .offcanvas-xxxl {
                    transition: none
                }
            }

            @media (max-width: 1899.98px) {
                .offcanvas-xxxl.offcanvas-start {
                    top: 0;
                    left: 0;
                    width: var(--bs-offcanvas-width);
                    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateX(-100%)
                }

                .offcanvas-xxxl.offcanvas-end {
                    top: 0;
                    right: 0;
                    width: var(--bs-offcanvas-width);
                    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateX(100%)
                }

                .offcanvas-xxxl.offcanvas-top {
                    top: 0;
                    right: 0;
                    left: 0;
                    height: var(--bs-offcanvas-height);
                    max-height: 100%;
                    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateY(-100%)
                }

                .offcanvas-xxxl.offcanvas-bottom {
                    right: 0;
                    left: 0;
                    height: var(--bs-offcanvas-height);
                    max-height: 100%;
                    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                    transform: translateY(100%)
                }

                .offcanvas-xxxl.show:not(.hiding), .offcanvas-xxxl.showing {
                    transform: none
                }

                .offcanvas-xxxl.hiding, .offcanvas-xxxl.show, .offcanvas-xxxl.showing {
                    visibility: visible
                }
            }

            @media (min-width: 1900px) {
                .offcanvas-xxxl {
                    --bs-offcanvas-height: auto;
                    --bs-offcanvas-border-width: 0;
                    background-color: transparent !important
                }

                .offcanvas-xxxl .offcanvas-header {
                    display: none
                }

                .offcanvas-xxxl .offcanvas-body {
                    display: flex;
                    flex-grow: 0;
                    padding: 0;
                    overflow-y: visible;
                    background-color: transparent !important
                }
            }

            .offcanvas {
                position: fixed;
                bottom: 0;
                z-index: var(--bs-offcanvas-zindex);
                display: flex;
                flex-direction: column;
                max-width: 100%;
                color: var(--bs-offcanvas-color);
                visibility: hidden;
                background-color: var(--bs-offcanvas-bg);
                background-clip: padding-box;
                outline: 0;
                transition: var(--bs-offcanvas-transition)
            }

            @media (prefers-reduced-motion: reduce) {
                .offcanvas {
                    transition: none
                }
            }

            .offcanvas.offcanvas-start {
                top: 0;
                left: 0;
                width: var(--bs-offcanvas-width);
                border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                transform: translateX(-100%)
            }

            .offcanvas.offcanvas-end {
                top: 0;
                right: 0;
                width: var(--bs-offcanvas-width);
                border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                transform: translateX(100%)
            }

            .offcanvas.offcanvas-top {
                top: 0;
                right: 0;
                left: 0;
                height: var(--bs-offcanvas-height);
                max-height: 100%;
                border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                transform: translateY(-100%)
            }

            .offcanvas.offcanvas-bottom {
                right: 0;
                left: 0;
                height: var(--bs-offcanvas-height);
                max-height: 100%;
                border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
                transform: translateY(100%)
            }

            .offcanvas.show:not(.hiding), .offcanvas.showing {
                transform: none
            }

            .offcanvas.hiding, .offcanvas.show, .offcanvas.showing {
                visibility: visible
            }

            .offcanvas-backdrop {
                position: fixed;
                top: 0;
                left: 0;
                z-index: 1040;
                width: 100vw;
                height: 100vh;
                background-color: #000
            }

            .offcanvas-backdrop.fade {
                opacity: 0
            }

            .offcanvas-backdrop.show {
                opacity: .5
            }

            .offcanvas-header {
                display: flex;
                align-items: center;
                padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)
            }

            .offcanvas-header .btn-close {
                padding: calc(var(--bs-offcanvas-padding-y) * .5) calc(var(--bs-offcanvas-padding-x) * .5);
                margin: calc(-.5 * var(--bs-offcanvas-padding-y)) calc(-.5 * var(--bs-offcanvas-padding-x)) calc(-.5 * var(--bs-offcanvas-padding-y)) auto
            }

            .offcanvas-title {
                margin-bottom: 0;
                line-height: var(--bs-offcanvas-title-line-height)
            }

            .offcanvas-body {
                flex-grow: 1;
                padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);
                overflow-y: auto
            }

            .placeholder {
                display: inline-block;
                min-height: 1em;
                vertical-align: middle;
                cursor: wait;
                background-color: currentcolor;
                opacity: .5
            }

            .placeholder.btn::before {
                display: inline-block;
                content: ""
            }

            .placeholder-xs {
                min-height: .6em
            }

            .placeholder-sm {
                min-height: .8em
            }

            .placeholder-lg {
                min-height: 1.2em
            }

            .placeholder-glow .placeholder {
                animation: placeholder-glow 2s ease-in-out infinite
            }

            @keyframes placeholder-glow {
                50% {
                    opacity: .2
                }
            }

            .placeholder-wave {
                -webkit-mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, .8) 75%, #000 95%);
                mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, .8) 75%, #000 95%);
                -webkit-mask-size: 200% 100%;
                mask-size: 200% 100%;
                animation: placeholder-wave 2s linear infinite
            }

            @keyframes placeholder-wave {
                100% {
                    -webkit-mask-position: -200% 0;
                    mask-position: -200% 0
                }
            }

            .clearfix::after {
                display: block;
                clear: both;
                content: ""
            }


            .link-default {
                color: RGBA(var(--bs-default-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-default-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-default:focus, .link-default:hover {
                color: RGBA(255, 255, 255, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(255, 255, 255, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-theme {
                color: RGBA(var(--bs-theme-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-theme-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-theme:focus, .link-theme:hover {
                color: RGBA(0, 82, 204, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(0, 82, 204, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-theme-color {
                color: RGBA(var(--bs-theme-color-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-theme-color-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-theme-color:focus, .link-theme-color:hover {
                color: RGBA(255, 255, 255, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(255, 255, 255, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-primary {
                color: RGBA(var(--bs-primary-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-primary-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-primary:focus, .link-primary:hover {
                color: RGBA(0, 82, 204, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(0, 82, 204, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-secondary {
                color: RGBA(var(--bs-secondary-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-secondary-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-secondary:focus, .link-secondary:hover {
                color: RGBA(68, 74, 77, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(68, 74, 77, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-warning {
                color: RGBA(var(--bs-warning-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-warning-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-warning:focus, .link-warning:hover {
                color: RGBA(255, 178, 61, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(255, 178, 61, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-danger {
                color: RGBA(var(--bs-danger-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-danger-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-danger:focus, .link-danger:hover {
                color: RGBA(178, 16, 16, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(178, 16, 16, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-success {
                color: RGBA(var(--bs-success-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-success-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-success:focus, .link-success:hover {
                color: RGBA(22, 109, 42, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(22, 109, 42, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-info {
                color: RGBA(var(--bs-info-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-info-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-info:focus, .link-info:hover {
                color: RGBA(62, 194, 255, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(62, 194, 255, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-dark {
                color: RGBA(var(--bs-dark-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-dark-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-dark:focus, .link-dark:hover {
                color: RGBA(18, 18, 18, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(18, 18, 18, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-black {
                color: RGBA(var(--bs-black-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-black-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-black:focus, .link-black:hover {
                color: RGBA(0, 0, 0, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(0, 0, 0, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-white {
                color: RGBA(var(--bs-white-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-white-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-white:focus, .link-white:hover {
                color: RGBA(255, 255, 255, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(255, 255, 255, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-purple {
                color: RGBA(var(--bs-purple-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-purple-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-purple:focus, .link-purple:hover {
                color: RGBA(129, 3, 204, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(129, 3, 204, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-indigo {
                color: RGBA(var(--bs-indigo-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-indigo-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-indigo:focus, .link-indigo:hover {
                color: RGBA(78, 34, 204, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(78, 34, 204, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-red {
                color: RGBA(var(--bs-red-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-red-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-red:focus, .link-red:hover {
                color: RGBA(178, 16, 16, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(178, 16, 16, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-pink {
                color: RGBA(var(--bs-pink-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-pink-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-pink:focus, .link-pink:hover {
                color: RGBA(178, 17, 96, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(178, 17, 96, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-green {
                color: RGBA(var(--bs-green-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-green-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-green:focus, .link-green:hover {
                color: RGBA(22, 109, 42, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(22, 109, 42, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-yellow {
                color: RGBA(var(--bs-yellow-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-yellow-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-yellow:focus, .link-yellow:hover {
                color: RGBA(250, 237, 61, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(250, 237, 61, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-teal {
                color: RGBA(var(--bs-teal-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-teal-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-teal:focus, .link-teal:hover {
                color: RGBA(99, 219, 183, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(99, 219, 183, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-muted {
                color: RGBA(var(--bs-muted-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-muted-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-muted:focus, .link-muted:hover {
                color: RGBA(68, 74, 77, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(68, 74, 77, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-light {
                color: RGBA(var(--bs-light-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-light-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-light:focus, .link-light:hover {
                color: RGBA(221, 222, 223, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(221, 222, 223, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-lime {
                color: RGBA(var(--bs-lime-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-lime-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-lime:focus, .link-lime:hover {
                color: RGBA(154, 245, 87, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(154, 245, 87, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-gray-100 {
                color: RGBA(var(--bs-gray-100-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-gray-100-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-gray-100:focus, .link-gray-100:hover {
                color: RGBA(221, 222, 223, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(221, 222, 223, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-gray-200 {
                color: RGBA(var(--bs-gray-200-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-gray-200-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-gray-200:focus, .link-gray-200:hover {
                color: RGBA(194, 197, 197, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(194, 197, 197, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-gray-300 {
                color: RGBA(var(--bs-gray-300-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-gray-300-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-gray-300:focus, .link-gray-300:hover {
                color: RGBA(173, 177, 179, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(173, 177, 179, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-gray-400 {
                color: RGBA(var(--bs-gray-400-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-gray-400-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-gray-400:focus, .link-gray-400:hover {
                color: RGBA(153, 157, 160, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(153, 157, 160, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-gray-500 {
                color: RGBA(var(--bs-gray-500-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-gray-500-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-gray-500:focus, .link-gray-500:hover {
                color: RGBA(68, 74, 77, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(68, 74, 77, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-gray-600 {
                color: RGBA(var(--bs-gray-600-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-gray-600-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-gray-600:focus, .link-gray-600:hover {
                color: RGBA(51, 55, 58, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(51, 55, 58, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-gray-700 {
                color: RGBA(var(--bs-gray-700-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-gray-700-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-gray-700:focus, .link-gray-700:hover {
                color: RGBA(41, 44, 46, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(41, 44, 46, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-gray-800 {
                color: RGBA(var(--bs-gray-800-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-gray-800-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-gray-800:focus, .link-gray-800:hover {
                color: RGBA(30, 33, 34, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(30, 33, 34, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-gray-900 {
                color: RGBA(var(--bs-gray-900-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-gray-900-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-gray-900:focus, .link-gray-900:hover {
                color: RGBA(17, 18, 19, var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(17, 18, 19, var(--bs-link-underline-opacity, 1)) !important
            }

            .link-body-emphasis {
                color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-opacity, 1)) !important;
                text-decoration-color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-body-emphasis:focus, .link-body-emphasis:hover {
                color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-opacity, .75)) !important;
                text-decoration-color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-underline-opacity, .75)) !important
            }

            .focus-ring:focus {
                outline: 0;
                box-shadow: var(--bs-focus-ring-x, 0) var(--bs-focus-ring-y, 0) var(--bs-focus-ring-blur, 0) var(--bs-focus-ring-width) var(--bs-focus-ring-color)
            }

            .icon-link {
                display: inline-flex;
                gap: .375rem;
                align-items: center;
                text-decoration-color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, .5));
                text-underline-offset: .25em;
                backface-visibility: hidden
            }

            .icon-link > .bi {
                flex-shrink: 0;
                width: 1em;
                height: 1em;
                fill: currentcolor;
                transition: .2s ease-in-out transform
            }

            @media (prefers-reduced-motion: reduce) {
                .icon-link > .bi {
                    transition: none
                }
            }

            .icon-link-hover:focus-visible > .bi, .icon-link-hover:hover > .bi {
                transform: var(--bs-icon-link-transform, translate3d(.25em, 0, 0))
            }

            .ratio {
                position: relative;
                width: 100%
            }

            .ratio::before {
                display: block;
                padding-top: var(--bs-aspect-ratio);
                content: ""
            }

            .ratio > * {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%
            }

            .ratio-1x1 {
                --bs-aspect-ratio: 100%
            }

            .ratio-4x3 {
                --bs-aspect-ratio: 75%
            }

            .ratio-16x9 {
                --bs-aspect-ratio: 56.25%
            }

            .ratio-21x9 {
                --bs-aspect-ratio: 42.8571428571%
            }

            .fixed-top {
                position: fixed;
                top: 0;
                right: 0;
                left: 0;
                z-index: 1030
            }

            .fixed-bottom {
                position: fixed;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 1030
            }

            .sticky-top {
                position: sticky;
                top: 0;
                z-index: 1020
            }

            .sticky-bottom {
                position: sticky;
                bottom: 0;
                z-index: 1020
            }

            @media (min-width: 576px) {
                .sticky-sm-top {
                    position: sticky;
                    top: 0;
                    z-index: 1020
                }

                .sticky-sm-bottom {
                    position: sticky;
                    bottom: 0;
                    z-index: 1020
                }
            }

            @media (min-width: 768px) {
                .sticky-md-top {
                    position: sticky;
                    top: 0;
                    z-index: 1020
                }

                .sticky-md-bottom {
                    position: sticky;
                    bottom: 0;
                    z-index: 1020
                }
            }

            @media (min-width: 992px) {
                .sticky-lg-top {
                    position: sticky;
                    top: 0;
                    z-index: 1020
                }

                .sticky-lg-bottom {
                    position: sticky;
                    bottom: 0;
                    z-index: 1020
                }
            }

            @media (min-width: 1200px) {
                .sticky-xl-top {
                    position: sticky;
                    top: 0;
                    z-index: 1020
                }

                .sticky-xl-bottom {
                    position: sticky;
                    bottom: 0;
                    z-index: 1020
                }
            }

            @media (min-width: 1660px) {
                .sticky-xxl-top {
                    position: sticky;
                    top: 0;
                    z-index: 1020
                }

                .sticky-xxl-bottom {
                    position: sticky;
                    bottom: 0;
                    z-index: 1020
                }
            }

            @media (min-width: 1900px) {
                .sticky-xxxl-top {
                    position: sticky;
                    top: 0;
                    z-index: 1020
                }

                .sticky-xxxl-bottom {
                    position: sticky;
                    bottom: 0;
                    z-index: 1020
                }
            }

            .hstack {
                display: flex;
                flex-direction: row;
                align-items: center;
                align-self: stretch
            }

            .vstack {
                display: flex;
                flex: 1 1 auto;
                flex-direction: column;
                align-self: stretch
            }

            .visually-hidden, .visually-hidden-focusable:not(:focus):not(:focus-within) {
                width: 1px !important;
                height: 1px !important;
                padding: 0 !important;
                margin: -1px !important;
                overflow: hidden !important;
                clip: rect(0, 0, 0, 0) !important;
                white-space: nowrap !important;
                border: 0 !important
            }

            .visually-hidden-focusable:not(:focus):not(:focus-within):not(caption), .visually-hidden:not(caption) {
                position: absolute !important
            }

            .stretched-link::after {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 1;
                content: ""
            }


            .vr {
                display: inline-block;
                align-self: stretch;
                width: var(--bs-border-width);
                min-height: 1em;
                background-color: currentcolor;
                opacity: .25
            }

            .align-baseline {
                vertical-align: baseline !important
            }

            .align-top {
                vertical-align: top !important
            }

            .align-middle {
                vertical-align: middle !important
            }

            .align-bottom {
                vertical-align: bottom !important
            }

            .align-text-bottom {
                vertical-align: text-bottom !important
            }

            .align-text-top {
                vertical-align: text-top !important
            }

            .float-start {
                float: left !important
            }

            .float-end {
                float: right !important
            }

            .float-none {
                float: none !important
            }

            .object-fit-contain {
                -o-object-fit: contain !important;
                object-fit: contain !important
            }

            .object-fit-cover {
                -o-object-fit: cover !important;
                object-fit: cover !important
            }

            .object-fit-fill {
                -o-object-fit: fill !important;
                object-fit: fill !important
            }

            .object-fit-scale {
                -o-object-fit: scale-down !important;
                object-fit: scale-down !important
            }

            .object-fit-none {
                -o-object-fit: none !important;
                object-fit: none !important
            }

            .opacity-0 {
                opacity: 0 !important
            }

            .opacity-25 {
                opacity: .25 !important
            }

            .opacity-50 {
                opacity: .5 !important
            }

            .opacity-75 {
                opacity: .75 !important
            }

            .opacity-100 {
                opacity: 1 !important
            }

            .overflow-auto {
                overflow: auto !important
            }

            .overflow-hidden {
                overflow: hidden !important
            }

            .overflow-visible {
                overflow: visible !important
            }

            .overflow-scroll {
                overflow: scroll !important
            }

            .overflow-x-auto {
                overflow-x: auto !important
            }

            .overflow-x-hidden {
                overflow-x: hidden !important
            }

            .overflow-x-visible {
                overflow-x: visible !important
            }

            .overflow-x-scroll {
                overflow-x: scroll !important
            }

            .overflow-y-auto {
                overflow-y: auto !important
            }

            .overflow-y-hidden {
                overflow-y: hidden !important
            }

            .overflow-y-visible {
                overflow-y: visible !important
            }

            .overflow-y-scroll {
                overflow-y: scroll !important
            }

            .d-inline {
                display: inline !important
            }

            .d-inline-block {
                display: inline-block !important
            }

            .d-block {
                display: block !important
            }

            .d-grid {
                display: grid !important
            }

            .d-inline-grid {
                display: inline-grid !important
            }

            .d-table {
                display: table !important
            }

            .d-table-row {
                display: table-row !important
            }

            .d-table-cell {
                display: table-cell !important
            }

            .d-flex {
                display: flex !important
            }

            .d-inline-flex {
                display: inline-flex !important
            }

            .d-none {
                display: none !important
            }

            .shadow {
                box-shadow: var(--bs-box-shadow) !important
            }

            .shadow-sm {
                box-shadow: var(--bs-box-shadow-sm) !important
            }

            .shadow-lg {
                box-shadow: var(--bs-box-shadow-lg) !important
            }

            .shadow-none {
                box-shadow: none !important
            }

            .focus-ring-default {
                --bs-focus-ring-color: rgba(var(--bs-default-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-theme {
                --bs-focus-ring-color: rgba(var(--bs-theme-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-theme-color {
                --bs-focus-ring-color: rgba(var(--bs-theme-color-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-primary {
                --bs-focus-ring-color: rgba(var(--bs-primary-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-secondary {
                --bs-focus-ring-color: rgba(var(--bs-secondary-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-warning {
                --bs-focus-ring-color: rgba(var(--bs-warning-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-danger {
                --bs-focus-ring-color: rgba(var(--bs-danger-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-success {
                --bs-focus-ring-color: rgba(var(--bs-success-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-info {
                --bs-focus-ring-color: rgba(var(--bs-info-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-dark {
                --bs-focus-ring-color: rgba(var(--bs-dark-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-black {
                --bs-focus-ring-color: rgba(var(--bs-black-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-white {
                --bs-focus-ring-color: rgba(var(--bs-white-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-purple {
                --bs-focus-ring-color: rgba(var(--bs-purple-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-indigo {
                --bs-focus-ring-color: rgba(var(--bs-indigo-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-red {
                --bs-focus-ring-color: rgba(var(--bs-red-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-pink {
                --bs-focus-ring-color: rgba(var(--bs-pink-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-green {
                --bs-focus-ring-color: rgba(var(--bs-green-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-yellow {
                --bs-focus-ring-color: rgba(var(--bs-yellow-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-teal {
                --bs-focus-ring-color: rgba(var(--bs-teal-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-muted {
                --bs-focus-ring-color: rgba(var(--bs-muted-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-light {
                --bs-focus-ring-color: rgba(var(--bs-light-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-lime {
                --bs-focus-ring-color: rgba(var(--bs-lime-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-gray-100 {
                --bs-focus-ring-color: rgba(var(--bs-gray-100-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-gray-200 {
                --bs-focus-ring-color: rgba(var(--bs-gray-200-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-gray-300 {
                --bs-focus-ring-color: rgba(var(--bs-gray-300-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-gray-400 {
                --bs-focus-ring-color: rgba(var(--bs-gray-400-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-gray-500 {
                --bs-focus-ring-color: rgba(var(--bs-gray-500-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-gray-600 {
                --bs-focus-ring-color: rgba(var(--bs-gray-600-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-gray-700 {
                --bs-focus-ring-color: rgba(var(--bs-gray-700-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-gray-800 {
                --bs-focus-ring-color: rgba(var(--bs-gray-800-rgb), var(--bs-focus-ring-opacity))
            }

            .focus-ring-gray-900 {
                --bs-focus-ring-color: rgba(var(--bs-gray-900-rgb), var(--bs-focus-ring-opacity))
            }

            .position-static {
                position: static !important
            }

            .position-relative {
                position: relative !important
            }

            .position-absolute {
                position: absolute !important
            }

            .position-fixed {
                position: fixed !important
            }

            .position-sticky {
                position: sticky !important
            }

            .top-0 {
                top: 0 !important
            }

            .top-50 {
                top: 50% !important
            }

            .top-100 {
                top: 100% !important
            }

            .bottom-0 {
                bottom: 0 !important
            }

            .bottom-50 {
                bottom: 50% !important
            }

            .bottom-100 {
                bottom: 100% !important
            }

            .start-0 {
                left: 0 !important
            }

            .start-50 {
                left: 50% !important
            }

            .start-100 {
                left: 100% !important
            }

            .end-0 {
                right: 0 !important
            }

            .end-50 {
                right: 50% !important
            }

            .end-100 {
                right: 100% !important
            }

            .translate-middle {
                transform: translate(-50%, -50%) !important
            }

            .translate-middle-x {
                transform: translateX(-50%) !important
            }

            .translate-middle-y {
                transform: translateY(-50%) !important
            }

            .border {
                border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important
            }

            .border-0 {
                border: 0 !important
            }

            .border-top {
                border-top: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important
            }

            .border-top-0 {
                border-top: 0 !important
            }

            .border-end {
                border-right: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important
            }

            .border-end-0 {
                border-right: 0 !important
            }

            .border-bottom {
                border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important
            }

            .border-bottom-0 {
                border-bottom: 0 !important
            }

            .border-start {
                border-left: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important
            }

            .border-start-0 {
                border-left: 0 !important
            }

            .border-default {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-default-rgb), var(--bs-border-opacity)) !important
            }

            .border-theme {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-theme-rgb), var(--bs-border-opacity)) !important
            }

            .border-theme-color {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-theme-color-rgb), var(--bs-border-opacity)) !important
            }

            .border-primary {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-primary-rgb), var(--bs-border-opacity)) !important
            }

            .border-secondary {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-secondary-rgb), var(--bs-border-opacity)) !important
            }

            .border-warning {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-warning-rgb), var(--bs-border-opacity)) !important
            }

            .border-danger {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-danger-rgb), var(--bs-border-opacity)) !important
            }

            .border-success {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important
            }

            .border-info {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-info-rgb), var(--bs-border-opacity)) !important
            }

            .border-dark {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-dark-rgb), var(--bs-border-opacity)) !important
            }

            .border-black {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-black-rgb), var(--bs-border-opacity)) !important
            }

            .border-white {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-white-rgb), var(--bs-border-opacity)) !important
            }

            .border-purple {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-purple-rgb), var(--bs-border-opacity)) !important
            }

            .border-indigo {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-indigo-rgb), var(--bs-border-opacity)) !important
            }

            .border-red {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-red-rgb), var(--bs-border-opacity)) !important
            }

            .border-pink {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-pink-rgb), var(--bs-border-opacity)) !important
            }

            .border-green {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-green-rgb), var(--bs-border-opacity)) !important
            }

            .border-yellow {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-yellow-rgb), var(--bs-border-opacity)) !important
            }

            .border-teal {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-teal-rgb), var(--bs-border-opacity)) !important
            }

            .border-muted {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-muted-rgb), var(--bs-border-opacity)) !important
            }

            .border-light {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-light-rgb), var(--bs-border-opacity)) !important
            }

            .border-lime {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-lime-rgb), var(--bs-border-opacity)) !important
            }

            .border-gray-100 {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-gray-100-rgb), var(--bs-border-opacity)) !important
            }

            .border-gray-200 {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-gray-200-rgb), var(--bs-border-opacity)) !important
            }

            .border-gray-300 {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-gray-300-rgb), var(--bs-border-opacity)) !important
            }

            .border-gray-400 {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-gray-400-rgb), var(--bs-border-opacity)) !important
            }

            .border-gray-500 {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-gray-500-rgb), var(--bs-border-opacity)) !important
            }

            .border-gray-600 {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-gray-600-rgb), var(--bs-border-opacity)) !important
            }

            .border-gray-700 {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-gray-700-rgb), var(--bs-border-opacity)) !important
            }

            .border-gray-800 {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-gray-800-rgb), var(--bs-border-opacity)) !important
            }

            .border-gray-900 {
                --bs-border-opacity: 1;
                border-color: rgba(var(--bs-gray-900-rgb), var(--bs-border-opacity)) !important
            }

            .border-primary-subtle {
                border-color: var(--bs-primary-border-subtle) !important
            }

            .border-secondary-subtle {
                border-color: var(--bs-secondary-border-subtle) !important
            }

            .border-success-subtle {
                border-color: var(--bs-success-border-subtle) !important
            }

            .border-info-subtle {
                border-color: var(--bs-info-border-subtle) !important
            }

            .border-warning-subtle {
                border-color: var(--bs-warning-border-subtle) !important
            }

            .border-danger-subtle {
                border-color: var(--bs-danger-border-subtle) !important
            }

            .border-light-subtle {
                border-color: var(--bs-light-border-subtle) !important
            }

            .border-dark-subtle {
                border-color: var(--bs-dark-border-subtle) !important
            }

            .border-1 {
                border-width: 1px !important
            }

            .border-2 {
                border-width: 2px !important
            }

            .border-3 {
                border-width: 3px !important
            }

            .border-4 {
                border-width: 4px !important
            }

            .border-5 {
                border-width: 5px !important
            }

            .border-opacity-10 {
                --bs-border-opacity: 0.1
            }

            .border-opacity-25 {
                --bs-border-opacity: 0.25
            }

            .border-opacity-50 {
                --bs-border-opacity: 0.5
            }

            .border-opacity-75 {
                --bs-border-opacity: 0.75
            }

            .border-opacity-100 {
                --bs-border-opacity: 1
            }

            .w-25 {
                width: 25% !important
            }

            .w-50 {
                width: 50% !important
            }

            .w-75 {
                width: 75% !important
            }

            .w-100 {
                width: 100% !important
            }

            .w-auto {
                width: auto !important
            }

            .mw-100 {
                max-width: 100% !important
            }

            .vw-100 {
                width: 100vw !important
            }

            .min-vw-100 {
                min-width: 100vw !important
            }

            .h-25 {
                height: 25% !important
            }

            .h-50 {
                height: 50% !important
            }

            .h-75 {
                height: 75% !important
            }

            .h-100 {
                height: 100% !important
            }

            .h-auto {
                height: auto !important
            }

            .mh-100 {
                max-height: 100% !important
            }

            .vh-100 {
                height: 100vh !important
            }

            .min-vh-100 {
                min-height: 100vh !important
            }

            .flex-fill {
                flex: 1 1 auto !important
            }

            .flex-row {
                flex-direction: row !important
            }

            .flex-column {
                flex-direction: column !important
            }

            .flex-row-reverse {
                flex-direction: row-reverse !important
            }

            .flex-column-reverse {
                flex-direction: column-reverse !important
            }

            .flex-grow-0 {
                flex-grow: 0 !important
            }

            .flex-grow-1 {
                flex-grow: 1 !important
            }

            .flex-shrink-0 {
                flex-shrink: 0 !important
            }

            .flex-shrink-1 {
                flex-shrink: 1 !important
            }

            .flex-wrap {
                flex-wrap: wrap !important
            }

            .flex-nowrap {
                flex-wrap: nowrap !important
            }

            .flex-wrap-reverse {
                flex-wrap: wrap-reverse !important
            }

            .justify-content-start {
                justify-content: flex-start !important
            }

            .justify-content-end {
                justify-content: flex-end !important
            }

            .justify-content-center {
                justify-content: center !important
            }

            .justify-content-between {
                justify-content: space-between !important
            }

            .justify-content-around {
                justify-content: space-around !important
            }

            .justify-content-evenly {
                justify-content: space-evenly !important
            }

            .align-items-start {
                align-items: flex-start !important
            }

            .align-items-end {
                align-items: flex-end !important
            }

            .align-items-center {
                align-items: center !important
            }

            .align-items-baseline {
                align-items: baseline !important
            }

            .align-items-stretch {
                align-items: stretch !important
            }

            .align-content-start {
                align-content: flex-start !important
            }

            .align-content-end {
                align-content: flex-end !important
            }

            .align-content-center {
                align-content: center !important
            }

            .align-content-between {
                align-content: space-between !important
            }

            .align-content-around {
                align-content: space-around !important
            }

            .align-content-stretch {
                align-content: stretch !important
            }

            .align-self-auto {
                align-self: auto !important
            }

            .align-self-start {
                align-self: flex-start !important
            }

            .align-self-end {
                align-self: flex-end !important
            }

            .align-self-center {
                align-self: center !important
            }

            .align-self-baseline {
                align-self: baseline !important
            }

            .align-self-stretch {
                align-self: stretch !important
            }

            .order-first {
                order: -1 !important
            }

            .order-0 {
                order: 0 !important
            }

            .order-1 {
                order: 1 !important
            }

            .order-2 {
                order: 2 !important
            }

            .order-3 {
                order: 3 !important
            }

            .order-4 {
                order: 4 !important
            }

            .order-5 {
                order: 5 !important
            }

            .order-last {
                order: 6 !important
            }

            .m-0 {
                margin: 0 !important
            }

            .m-1 {
                margin: .25rem !important
            }

            .m-2 {
                margin: .5rem !important
            }

            .m-3 {
                margin: 1rem !important
            }

            .m-4 {
                margin: 1.5rem !important
            }

            .m-5 {
                margin: 3rem !important
            }

            .m-auto {
                margin: auto !important
            }

            .mx-0 {
                margin-right: 0 !important;
                margin-left: 0 !important
            }

            .mx-1 {
                margin-right: .25rem !important;
                margin-left: .25rem !important
            }

            .mx-2 {
                margin-right: .5rem !important;
                margin-left: .5rem !important
            }

            .mx-3 {
                margin-right: 1rem !important;
                margin-left: 1rem !important
            }

            .mx-4 {
                margin-right: 1.5rem !important;
                margin-left: 1.5rem !important
            }

            .mx-5 {
                margin-right: 3rem !important;
                margin-left: 3rem !important
            }

            .mx-auto {
                margin-right: auto !important;
                margin-left: auto !important
            }

            .my-0 {
                margin-top: 0 !important;
                margin-bottom: 0 !important
            }

            .my-1 {
                margin-top: .25rem !important;
                margin-bottom: .25rem !important
            }

            .my-2 {
                margin-top: .5rem !important;
                margin-bottom: .5rem !important
            }

            .my-3 {
                margin-top: 1rem !important;
                margin-bottom: 1rem !important
            }

            .my-4 {
                margin-top: 1.5rem !important;
                margin-bottom: 1.5rem !important
            }

            .my-5 {
                margin-top: 3rem !important;
                margin-bottom: 3rem !important
            }

            .my-auto {
                margin-top: auto !important;
                margin-bottom: auto !important
            }

            .mt-0 {
                margin-top: 0 !important
            }

            .mt-1 {
                margin-top: .25rem !important
            }

            .mt-2 {
                margin-top: .5rem !important
            }

            .mt-3 {
                margin-top: 1rem !important
            }

            .mt-4 {
                margin-top: 1.5rem !important
            }

            .mt-5 {
                margin-top: 3rem !important
            }

            .mt-auto {
                margin-top: auto !important
            }

            .me-0 {
                margin-right: 0 !important
            }

            .me-1 {
                margin-right: .25rem !important
            }

            .me-2 {
                margin-right: .5rem !important
            }

            .me-3 {
                margin-right: 1rem !important
            }

            .me-4 {
                margin-right: 1.5rem !important
            }

            .me-5 {
                margin-right: 3rem !important
            }

            .me-auto {
                margin-right: auto !important
            }

            .mb-0 {
                margin-bottom: 0 !important
            }

            .mb-1 {
                margin-bottom: .25rem !important
            }

            .mb-2 {
                margin-bottom: .5rem !important
            }

            .mb-3 {
                margin-bottom: 1rem !important
            }

            .mb-4 {
                margin-bottom: 1.5rem !important
            }

            .mb-5 {
                margin-bottom: 3rem !important
            }

            .mb-auto {
                margin-bottom: auto !important
            }

            .ms-0 {
                margin-left: 0 !important
            }

            .ms-1 {
                margin-left: .25rem !important
            }

            .ms-2 {
                margin-left: .5rem !important
            }

            .ms-3 {
                margin-left: 1rem !important
            }

            .ms-4 {
                margin-left: 1.5rem !important
            }

            .ms-5 {
                margin-left: 3rem !important
            }

            .ms-auto {
                margin-left: auto !important
            }

            .m-n1 {
                margin: -.25rem !important
            }

            .m-n2 {
                margin: -.5rem !important
            }

            .m-n3 {
                margin: -1rem !important
            }

            .m-n4 {
                margin: -1.5rem !important
            }

            .m-n5 {
                margin: -3rem !important
            }

            .mx-n1 {
                margin-right: -.25rem !important;
                margin-left: -.25rem !important
            }

            .mx-n2 {
                margin-right: -.5rem !important;
                margin-left: -.5rem !important
            }

            .mx-n3 {
                margin-right: -1rem !important;
                margin-left: -1rem !important
            }

            .mx-n4 {
                margin-right: -1.5rem !important;
                margin-left: -1.5rem !important
            }

            .mx-n5 {
                margin-right: -3rem !important;
                margin-left: -3rem !important
            }

            .my-n1 {
                margin-top: -.25rem !important;
                margin-bottom: -.25rem !important
            }

            .my-n2 {
                margin-top: -.5rem !important;
                margin-bottom: -.5rem !important
            }

            .my-n3 {
                margin-top: -1rem !important;
                margin-bottom: -1rem !important
            }

            .my-n4 {
                margin-top: -1.5rem !important;
                margin-bottom: -1.5rem !important
            }

            .my-n5 {
                margin-top: -3rem !important;
                margin-bottom: -3rem !important
            }

            .mt-n1 {
                margin-top: -.25rem !important
            }

            .mt-n2 {
                margin-top: -.5rem !important
            }

            .mt-n3 {
                margin-top: -1rem !important
            }

            .mt-n4 {
                margin-top: -1.5rem !important
            }

            .mt-n5 {
                margin-top: -3rem !important
            }

            .me-n1 {
                margin-right: -.25rem !important
            }

            .me-n2 {
                margin-right: -.5rem !important
            }

            .me-n3 {
                margin-right: -1rem !important
            }

            .me-n4 {
                margin-right: -1.5rem !important
            }

            .me-n5 {
                margin-right: -3rem !important
            }

            .mb-n1 {
                margin-bottom: -.25rem !important
            }

            .mb-n2 {
                margin-bottom: -.5rem !important
            }

            .mb-n3 {
                margin-bottom: -1rem !important
            }

            .mb-n4 {
                margin-bottom: -1.5rem !important
            }

            .mb-n5 {
                margin-bottom: -3rem !important
            }

            .ms-n1 {
                margin-left: -.25rem !important
            }

            .ms-n2 {
                margin-left: -.5rem !important
            }

            .ms-n3 {
                margin-left: -1rem !important
            }

            .ms-n4 {
                margin-left: -1.5rem !important
            }

            .ms-n5 {
                margin-left: -3rem !important
            }

            .p-0 {
                padding: 0 !important
            }

            .p-1 {
                padding: .25rem !important
            }

            .p-2 {
                padding: .5rem !important
            }

            .p-3 {
                padding: 1rem !important
            }

            .p-4 {
                padding: 1.5rem !important
            }

            .p-5 {
                padding: 3rem !important
            }

            .px-0 {
                padding-right: 0 !important;
                padding-left: 0 !important
            }

            .px-1 {
                padding-right: .25rem !important;
                padding-left: .25rem !important
            }

            .px-2 {
                padding-right: .5rem !important;
                padding-left: .5rem !important
            }

            .px-3 {
                padding-right: 1rem !important;
                padding-left: 1rem !important
            }

            .px-4 {
                padding-right: 1.5rem !important;
                padding-left: 1.5rem !important
            }

            .px-5 {
                padding-right: 3rem !important;
                padding-left: 3rem !important
            }

            .py-0 {
                padding-top: 0 !important;
                padding-bottom: 0 !important
            }

            .py-1 {
                padding-top: .25rem !important;
                padding-bottom: .25rem !important
            }

            .py-2 {
                padding-top: .5rem !important;
                padding-bottom: .5rem !important
            }

            .py-3 {
                padding-top: 1rem !important;
                padding-bottom: 1rem !important
            }

            .py-4 {
                padding-top: 1.5rem !important;
                padding-bottom: 1.5rem !important
            }

            .py-5 {
                padding-top: 3rem !important;
                padding-bottom: 3rem !important
            }

            .pt-0 {
                padding-top: 0 !important
            }

            .pt-1 {
                padding-top: .25rem !important
            }

            .pt-2 {
                padding-top: .5rem !important
            }

            .pt-3 {
                padding-top: 1rem !important
            }

            .pt-4 {
                padding-top: 1.5rem !important
            }

            .pt-5 {
                padding-top: 3rem !important
            }

            .pe-0 {
                padding-right: 0 !important
            }

            .pe-1 {
                padding-right: .25rem !important
            }

            .pe-2 {
                padding-right: .5rem !important
            }

            .pe-3 {
                padding-right: 1rem !important
            }

            .pe-4 {
                padding-right: 1.5rem !important
            }

            .pe-5 {
                padding-right: 3rem !important
            }

            .pb-0 {
                padding-bottom: 0 !important
            }

            .pb-1 {
                padding-bottom: .25rem !important
            }

            .pb-2 {
                padding-bottom: .5rem !important
            }

            .pb-3 {
                padding-bottom: 1rem !important
            }

            .pb-4 {
                padding-bottom: 1.5rem !important
            }

            .pb-5 {
                padding-bottom: 3rem !important
            }

            .ps-0 {
                padding-left: 0 !important
            }

            .ps-1 {
                padding-left: .25rem !important
            }

            .ps-2 {
                padding-left: .5rem !important
            }

            .ps-3 {
                padding-left: 1rem !important
            }

            .ps-4 {
                padding-left: 1.5rem !important
            }

            .ps-5 {
                padding-left: 3rem !important
            }

            .gap-0 {
                gap: 0 !important
            }

            .gap-1 {
                gap: .25rem !important
            }

            .gap-2 {
                gap: .5rem !important
            }

            .gap-3 {
                gap: 1rem !important
            }

            .gap-4 {
                gap: 1.5rem !important
            }

            .gap-5 {
                gap: 3rem !important
            }

            .row-gap-0 {
                row-gap: 0 !important
            }

            .row-gap-1 {
                row-gap: .25rem !important
            }

            .row-gap-2 {
                row-gap: .5rem !important
            }

            .row-gap-3 {
                row-gap: 1rem !important
            }

            .row-gap-4 {
                row-gap: 1.5rem !important
            }

            .row-gap-5 {
                row-gap: 3rem !important
            }

            .column-gap-0 {
                -moz-column-gap: 0 !important;
                column-gap: 0 !important
            }

            .column-gap-1 {
                -moz-column-gap: .25rem !important;
                column-gap: .25rem !important
            }

            .column-gap-2 {
                -moz-column-gap: .5rem !important;
                column-gap: .5rem !important
            }

            .column-gap-3 {
                -moz-column-gap: 1rem !important;
                column-gap: 1rem !important
            }

            .column-gap-4 {
                -moz-column-gap: 1.5rem !important;
                column-gap: 1.5rem !important
            }

            .column-gap-5 {
                -moz-column-gap: 3rem !important;
                column-gap: 3rem !important
            }

            .font-monospace {
                font-family: var(--bs-font-monospace) !important
            }

            .fs-1 {
                font-size: calc(1.34375rem + 1.125vw) !important
            }

            .fs-2 {
                font-size: calc(1.3rem + .6vw) !important
            }

            .fs-3 {
                font-size: calc(1.278125rem + .3375vw) !important
            }

            .fs-4 {
                font-size: calc(1.25625rem + .075vw) !important
            }

            .fs-5 {
                font-size: 1.09375rem !important
            }

            .fs-6 {
                font-size: .875rem !important
            }

            .fst-italic {
                font-style: italic !important
            }

            .fst-normal {
                font-style: normal !important
            }

            .fw-lighter {
                font-weight: lighter !important
            }

            .fw-light {
                font-weight: 300 !important
            }

            .fw-normal {
                font-weight: 400 !important
            }

            .fw-medium {
                font-weight: 500 !important
            }

            .fw-semibold {
                font-weight: 500 !important
            }

            .fw-bold {
                font-weight: 600 !important
            }

            .fw-bolder {
                font-weight: 800 !important
            }

            .lh-1 {
                line-height: 1 !important
            }

            .lh-sm {
                line-height: 1.25 !important
            }

            .lh-base {
                line-height: 1.5 !important
            }

            .lh-lg {
                line-height: 2 !important
            }

            .link-opacity-10 {
                --bs-link-opacity: 0.1
            }

            .link-opacity-10-hover:hover {
                --bs-link-opacity: 0.1
            }

            .link-opacity-25 {
                --bs-link-opacity: 0.25
            }

            .link-opacity-25-hover:hover {
                --bs-link-opacity: 0.25
            }

            .link-opacity-50 {
                --bs-link-opacity: 0.5
            }

            .link-opacity-50-hover:hover {
                --bs-link-opacity: 0.5
            }

            .link-opacity-75 {
                --bs-link-opacity: 0.75
            }

            .link-opacity-75-hover:hover {
                --bs-link-opacity: 0.75
            }

            .link-opacity-100 {
                --bs-link-opacity: 1
            }

            .link-opacity-100-hover:hover {
                --bs-link-opacity: 1
            }

            .link-offset-1 {
                text-underline-offset: .125em !important
            }

            .link-offset-1-hover:hover {
                text-underline-offset: .125em !important
            }

            .link-offset-2 {
                text-underline-offset: .25em !important
            }

            .link-offset-2-hover:hover {
                text-underline-offset: .25em !important
            }

            .link-offset-3 {
                text-underline-offset: .375em !important
            }

            .link-offset-3-hover:hover {
                text-underline-offset: .375em !important
            }

            .link-underline-default {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-default-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-theme {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-theme-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-theme-color {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-theme-color-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-primary {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-primary-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-secondary {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-secondary-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-warning {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-warning-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-danger {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-danger-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-success {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-success-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-info {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-info-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-dark {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-dark-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-black {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-black-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-white {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-white-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-purple {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-purple-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-indigo {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-indigo-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-red {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-red-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-pink {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-pink-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-green {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-green-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-yellow {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-yellow-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-teal {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-teal-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-muted {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-muted-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-light {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-light-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-lime {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-lime-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-gray-100 {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-gray-100-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-gray-200 {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-gray-200-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-gray-300 {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-gray-300-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-gray-400 {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-gray-400-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-gray-500 {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-gray-500-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-gray-600 {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-gray-600-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-gray-700 {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-gray-700-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-gray-800 {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-gray-800-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline-gray-900 {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-gray-900-rgb), var(--bs-link-underline-opacity)) !important
            }

            .link-underline {
                --bs-link-underline-opacity: 1;
                text-decoration-color: rgba(var(--bs-link-color-rgb), var(--bs-link-underline-opacity, 1)) !important
            }

            .link-underline-opacity-0 {
                --bs-link-underline-opacity: 0
            }

            .link-underline-opacity-0-hover:hover {
                --bs-link-underline-opacity: 0
            }

            .link-underline-opacity-10 {
                --bs-link-underline-opacity: 0.1
            }

            .link-underline-opacity-10-hover:hover {
                --bs-link-underline-opacity: 0.1
            }

            .link-underline-opacity-25 {
                --bs-link-underline-opacity: 0.25
            }

            .link-underline-opacity-25-hover:hover {
                --bs-link-underline-opacity: 0.25
            }

            .link-underline-opacity-50 {
                --bs-link-underline-opacity: 0.5
            }

            .link-underline-opacity-50-hover:hover {
                --bs-link-underline-opacity: 0.5
            }

            .link-underline-opacity-75 {
                --bs-link-underline-opacity: 0.75
            }

            .link-underline-opacity-75-hover:hover {
                --bs-link-underline-opacity: 0.75
            }

            .link-underline-opacity-100 {
                --bs-link-underline-opacity: 1
            }

            .link-underline-opacity-100-hover:hover {
                --bs-link-underline-opacity: 1
            }

            .bg-default {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-default-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-theme {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-theme-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-theme-color {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-theme-color-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-primary {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-secondary {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-warning {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-danger {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-success {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-info {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-dark {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-black {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-white {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-purple {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-purple-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-indigo {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-indigo-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-red {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-red-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-pink {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-pink-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-green {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-green-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-yellow {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-yellow-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-teal {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-teal-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-muted {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-muted-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-light {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-lime {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-lime-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-gray-100 {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-gray-100-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-gray-200 {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-gray-200-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-gray-300 {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-gray-300-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-gray-400 {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-gray-400-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-gray-500 {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-gray-500-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-gray-600 {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-gray-600-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-gray-700 {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-gray-700-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-gray-800 {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-gray-800-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-gray-900 {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-gray-900-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-body {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-transparent {
                --bs-bg-opacity: 1;
                background-color: transparent !important
            }

            .bg-body-secondary {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-secondary-bg-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-body-tertiary {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity)) !important
            }

            .bg-opacity-10 {
                --bs-bg-opacity: 0.1
            }

            .bg-opacity-25 {
                --bs-bg-opacity: 0.25
            }

            .bg-opacity-50 {
                --bs-bg-opacity: 0.5
            }

            .bg-opacity-75 {
                --bs-bg-opacity: 0.75
            }

            .bg-opacity-100 {
                --bs-bg-opacity: 1
            }

            .bg-primary-subtle {
                background-color: var(--bs-primary-bg-subtle) !important
            }

            .bg-secondary-subtle {
                background-color: var(--bs-secondary-bg-subtle) !important
            }

            .bg-success-subtle {
                background-color: var(--bs-success-bg-subtle) !important
            }

            .bg-info-subtle {
                background-color: var(--bs-info-bg-subtle) !important
            }

            .bg-warning-subtle {
                background-color: var(--bs-warning-bg-subtle) !important
            }

            .bg-danger-subtle {
                background-color: var(--bs-danger-bg-subtle) !important
            }

            .bg-light-subtle {
                background-color: var(--bs-light-bg-subtle) !important
            }

            .bg-dark-subtle {
                background-color: var(--bs-dark-bg-subtle) !important
            }

            .bg-gradient {
                background-image: var(--bs-gradient) !important
            }

            .user-select-all {
                -webkit-user-select: all !important;
                -moz-user-select: all !important;
                user-select: all !important
            }

            .user-select-auto {
                -webkit-user-select: auto !important;
                -moz-user-select: auto !important;
                user-select: auto !important
            }

            .user-select-none {
                -webkit-user-select: none !important;
                -moz-user-select: none !important;
                user-select: none !important
            }

            .pe-none {
                pointer-events: none !important
            }

            .pe-auto {
                pointer-events: auto !important
            }

            .rounded {
                border-radius: var(--bs-border-radius) !important
            }

            .rounded-0 {
                border-radius: 0 !important
            }

            .rounded-1 {
                border-radius: var(--bs-border-radius-sm) !important
            }

            .rounded-2 {
                border-radius: var(--bs-border-radius) !important
            }

            .rounded-3 {
                border-radius: var(--bs-border-radius-lg) !important
            }

            .rounded-4 {
                border-radius: var(--bs-border-radius-xl) !important
            }

            .rounded-5 {
                border-radius: var(--bs-border-radius-xxl) !important
            }

            .rounded-circle {
                border-radius: 50% !important
            }

            .rounded-pill {
                border-radius: var(--bs-border-radius-pill) !important
            }

            .rounded-top {
                border-top-left-radius: var(--bs-border-radius) !important;
                border-top-right-radius: var(--bs-border-radius) !important
            }

            .rounded-top-0 {
                border-top-left-radius: 0 !important;
                border-top-right-radius: 0 !important
            }

            .rounded-top-1 {
                border-top-left-radius: var(--bs-border-radius-sm) !important;
                border-top-right-radius: var(--bs-border-radius-sm) !important
            }

            .rounded-top-2 {
                border-top-left-radius: var(--bs-border-radius) !important;
                border-top-right-radius: var(--bs-border-radius) !important
            }

            .rounded-top-3 {
                border-top-left-radius: var(--bs-border-radius-lg) !important;
                border-top-right-radius: var(--bs-border-radius-lg) !important
            }

            .rounded-top-4 {
                border-top-left-radius: var(--bs-border-radius-xl) !important;
                border-top-right-radius: var(--bs-border-radius-xl) !important
            }

            .rounded-top-5 {
                border-top-left-radius: var(--bs-border-radius-xxl) !important;
                border-top-right-radius: var(--bs-border-radius-xxl) !important
            }

            .rounded-top-circle {
                border-top-left-radius: 50% !important;
                border-top-right-radius: 50% !important
            }

            .rounded-top-pill {
                border-top-left-radius: var(--bs-border-radius-pill) !important;
                border-top-right-radius: var(--bs-border-radius-pill) !important
            }

            .rounded-end {
                border-top-right-radius: var(--bs-border-radius) !important;
                border-bottom-right-radius: var(--bs-border-radius) !important
            }

            .rounded-end-0 {
                border-top-right-radius: 0 !important;
                border-bottom-right-radius: 0 !important
            }

            .rounded-end-1 {
                border-top-right-radius: var(--bs-border-radius-sm) !important;
                border-bottom-right-radius: var(--bs-border-radius-sm) !important
            }

            .rounded-end-2 {
                border-top-right-radius: var(--bs-border-radius) !important;
                border-bottom-right-radius: var(--bs-border-radius) !important
            }

            .rounded-end-3 {
                border-top-right-radius: var(--bs-border-radius-lg) !important;
                border-bottom-right-radius: var(--bs-border-radius-lg) !important
            }

            .rounded-end-4 {
                border-top-right-radius: var(--bs-border-radius-xl) !important;
                border-bottom-right-radius: var(--bs-border-radius-xl) !important
            }

            .rounded-end-5 {
                border-top-right-radius: var(--bs-border-radius-xxl) !important;
                border-bottom-right-radius: var(--bs-border-radius-xxl) !important
            }

            .rounded-end-circle {
                border-top-right-radius: 50% !important;
                border-bottom-right-radius: 50% !important
            }

            .rounded-end-pill {
                border-top-right-radius: var(--bs-border-radius-pill) !important;
                border-bottom-right-radius: var(--bs-border-radius-pill) !important
            }

            .rounded-bottom {
                border-bottom-right-radius: var(--bs-border-radius) !important;
                border-bottom-left-radius: var(--bs-border-radius) !important
            }

            .rounded-bottom-0 {
                border-bottom-right-radius: 0 !important;
                border-bottom-left-radius: 0 !important
            }

            .rounded-bottom-1 {
                border-bottom-right-radius: var(--bs-border-radius-sm) !important;
                border-bottom-left-radius: var(--bs-border-radius-sm) !important
            }

            .rounded-bottom-2 {
                border-bottom-right-radius: var(--bs-border-radius) !important;
                border-bottom-left-radius: var(--bs-border-radius) !important
            }

            .rounded-bottom-3 {
                border-bottom-right-radius: var(--bs-border-radius-lg) !important;
                border-bottom-left-radius: var(--bs-border-radius-lg) !important
            }

            .rounded-bottom-4 {
                border-bottom-right-radius: var(--bs-border-radius-xl) !important;
                border-bottom-left-radius: var(--bs-border-radius-xl) !important
            }

            .rounded-bottom-5 {
                border-bottom-right-radius: var(--bs-border-radius-xxl) !important;
                border-bottom-left-radius: var(--bs-border-radius-xxl) !important
            }

            .rounded-bottom-circle {
                border-bottom-right-radius: 50% !important;
                border-bottom-left-radius: 50% !important
            }

            .rounded-bottom-pill {
                border-bottom-right-radius: var(--bs-border-radius-pill) !important;
                border-bottom-left-radius: var(--bs-border-radius-pill) !important
            }

            .rounded-start {
                border-bottom-left-radius: var(--bs-border-radius) !important;
                border-top-left-radius: var(--bs-border-radius) !important
            }

            .rounded-start-0 {
                border-bottom-left-radius: 0 !important;
                border-top-left-radius: 0 !important
            }

            .rounded-start-1 {
                border-bottom-left-radius: var(--bs-border-radius-sm) !important;
                border-top-left-radius: var(--bs-border-radius-sm) !important
            }

            .rounded-start-2 {
                border-bottom-left-radius: var(--bs-border-radius) !important;
                border-top-left-radius: var(--bs-border-radius) !important
            }

            .rounded-start-3 {
                border-bottom-left-radius: var(--bs-border-radius-lg) !important;
                border-top-left-radius: var(--bs-border-radius-lg) !important
            }

            .rounded-start-4 {
                border-bottom-left-radius: var(--bs-border-radius-xl) !important;
                border-top-left-radius: var(--bs-border-radius-xl) !important
            }

            .rounded-start-5 {
                border-bottom-left-radius: var(--bs-border-radius-xxl) !important;
                border-top-left-radius: var(--bs-border-radius-xxl) !important
            }

            .rounded-start-circle {
                border-bottom-left-radius: 50% !important;
                border-top-left-radius: 50% !important
            }

            .rounded-start-pill {
                border-bottom-left-radius: var(--bs-border-radius-pill) !important;
                border-top-left-radius: var(--bs-border-radius-pill) !important
            }

            .visible {
                visibility: visible !important
            }

            .invisible {
                visibility: hidden !important
            }

            .z-n1 {
                z-index: -1 !important
            }

            .z-0 {
                z-index: 0 !important
            }

            .z-1 {
                z-index: 1 !important
            }

            .z-2 {
                z-index: 2 !important
            }

            .z-3 {
                z-index: 3 !important
            }

            @media (min-width: 576px) {
                .float-sm-start {
                    float: left !important
                }

                .float-sm-end {
                    float: right !important
                }

                .float-sm-none {
                    float: none !important
                }

                .object-fit-sm-contain {
                    -o-object-fit: contain !important;
                    object-fit: contain !important
                }

                .object-fit-sm-cover {
                    -o-object-fit: cover !important;
                    object-fit: cover !important
                }

                .object-fit-sm-fill {
                    -o-object-fit: fill !important;
                    object-fit: fill !important
                }

                .object-fit-sm-scale {
                    -o-object-fit: scale-down !important;
                    object-fit: scale-down !important
                }

                .object-fit-sm-none {
                    -o-object-fit: none !important;
                    object-fit: none !important
                }

                .d-sm-inline {
                    display: inline !important
                }

                .d-sm-inline-block {
                    display: inline-block !important
                }

                .d-sm-block {
                    display: block !important
                }

                .d-sm-grid {
                    display: grid !important
                }

                .d-sm-inline-grid {
                    display: inline-grid !important
                }

                .d-sm-table {
                    display: table !important
                }

                .d-sm-table-row {
                    display: table-row !important
                }

                .d-sm-table-cell {
                    display: table-cell !important
                }

                .d-sm-flex {
                    display: flex !important
                }

                .d-sm-inline-flex {
                    display: inline-flex !important
                }

                .d-sm-none {
                    display: none !important
                }

                .flex-sm-fill {
                    flex: 1 1 auto !important
                }

                .flex-sm-row {
                    flex-direction: row !important
                }

                .flex-sm-column {
                    flex-direction: column !important
                }

                .flex-sm-row-reverse {
                    flex-direction: row-reverse !important
                }

                .flex-sm-column-reverse {
                    flex-direction: column-reverse !important
                }

                .flex-sm-grow-0 {
                    flex-grow: 0 !important
                }

                .flex-sm-grow-1 {
                    flex-grow: 1 !important
                }

                .flex-sm-shrink-0 {
                    flex-shrink: 0 !important
                }

                .flex-sm-shrink-1 {
                    flex-shrink: 1 !important
                }

                .flex-sm-wrap {
                    flex-wrap: wrap !important
                }

                .flex-sm-nowrap {
                    flex-wrap: nowrap !important
                }

                .flex-sm-wrap-reverse {
                    flex-wrap: wrap-reverse !important
                }

                .justify-content-sm-start {
                    justify-content: flex-start !important
                }

                .justify-content-sm-end {
                    justify-content: flex-end !important
                }

                .justify-content-sm-center {
                    justify-content: center !important
                }

                .justify-content-sm-between {
                    justify-content: space-between !important
                }

                .justify-content-sm-around {
                    justify-content: space-around !important
                }

                .justify-content-sm-evenly {
                    justify-content: space-evenly !important
                }

                .align-items-sm-start {
                    align-items: flex-start !important
                }

                .align-items-sm-end {
                    align-items: flex-end !important
                }

                .align-items-sm-center {
                    align-items: center !important
                }

                .align-items-sm-baseline {
                    align-items: baseline !important
                }

                .align-items-sm-stretch {
                    align-items: stretch !important
                }

                .align-content-sm-start {
                    align-content: flex-start !important
                }

                .align-content-sm-end {
                    align-content: flex-end !important
                }

                .align-content-sm-center {
                    align-content: center !important
                }

                .align-content-sm-between {
                    align-content: space-between !important
                }

                .align-content-sm-around {
                    align-content: space-around !important
                }

                .align-content-sm-stretch {
                    align-content: stretch !important
                }

                .align-self-sm-auto {
                    align-self: auto !important
                }

                .align-self-sm-start {
                    align-self: flex-start !important
                }

                .align-self-sm-end {
                    align-self: flex-end !important
                }

                .align-self-sm-center {
                    align-self: center !important
                }

                .align-self-sm-baseline {
                    align-self: baseline !important
                }

                .align-self-sm-stretch {
                    align-self: stretch !important
                }

                .order-sm-first {
                    order: -1 !important
                }

                .order-sm-0 {
                    order: 0 !important
                }

                .order-sm-1 {
                    order: 1 !important
                }

                .order-sm-2 {
                    order: 2 !important
                }

                .order-sm-3 {
                    order: 3 !important
                }

                .order-sm-4 {
                    order: 4 !important
                }

                .order-sm-5 {
                    order: 5 !important
                }

                .order-sm-last {
                    order: 6 !important
                }

                .m-sm-0 {
                    margin: 0 !important
                }

                .m-sm-1 {
                    margin: .25rem !important
                }

                .m-sm-2 {
                    margin: .5rem !important
                }

                .m-sm-3 {
                    margin: 1rem !important
                }

                .m-sm-4 {
                    margin: 1.5rem !important
                }

                .m-sm-5 {
                    margin: 3rem !important
                }

                .m-sm-auto {
                    margin: auto !important
                }

                .mx-sm-0 {
                    margin-right: 0 !important;
                    margin-left: 0 !important
                }

                .mx-sm-1 {
                    margin-right: .25rem !important;
                    margin-left: .25rem !important
                }

                .mx-sm-2 {
                    margin-right: .5rem !important;
                    margin-left: .5rem !important
                }

                .mx-sm-3 {
                    margin-right: 1rem !important;
                    margin-left: 1rem !important
                }

                .mx-sm-4 {
                    margin-right: 1.5rem !important;
                    margin-left: 1.5rem !important
                }

                .mx-sm-5 {
                    margin-right: 3rem !important;
                    margin-left: 3rem !important
                }

                .mx-sm-auto {
                    margin-right: auto !important;
                    margin-left: auto !important
                }

                .my-sm-0 {
                    margin-top: 0 !important;
                    margin-bottom: 0 !important
                }

                .my-sm-1 {
                    margin-top: .25rem !important;
                    margin-bottom: .25rem !important
                }

                .my-sm-2 {
                    margin-top: .5rem !important;
                    margin-bottom: .5rem !important
                }

                .my-sm-3 {
                    margin-top: 1rem !important;
                    margin-bottom: 1rem !important
                }

                .my-sm-4 {
                    margin-top: 1.5rem !important;
                    margin-bottom: 1.5rem !important
                }

                .my-sm-5 {
                    margin-top: 3rem !important;
                    margin-bottom: 3rem !important
                }

                .my-sm-auto {
                    margin-top: auto !important;
                    margin-bottom: auto !important
                }

                .mt-sm-0 {
                    margin-top: 0 !important
                }

                .mt-sm-1 {
                    margin-top: .25rem !important
                }

                .mt-sm-2 {
                    margin-top: .5rem !important
                }

                .mt-sm-3 {
                    margin-top: 1rem !important
                }

                .mt-sm-4 {
                    margin-top: 1.5rem !important
                }

                .mt-sm-5 {
                    margin-top: 3rem !important
                }

                .mt-sm-auto {
                    margin-top: auto !important
                }

                .me-sm-0 {
                    margin-right: 0 !important
                }

                .me-sm-1 {
                    margin-right: .25rem !important
                }

                .me-sm-2 {
                    margin-right: .5rem !important
                }

                .me-sm-3 {
                    margin-right: 1rem !important
                }

                .me-sm-4 {
                    margin-right: 1.5rem !important
                }

                .me-sm-5 {
                    margin-right: 3rem !important
                }

                .me-sm-auto {
                    margin-right: auto !important
                }

                .mb-sm-0 {
                    margin-bottom: 0 !important
                }

                .mb-sm-1 {
                    margin-bottom: .25rem !important
                }

                .mb-sm-2 {
                    margin-bottom: .5rem !important
                }

                .mb-sm-3 {
                    margin-bottom: 1rem !important
                }

                .mb-sm-4 {
                    margin-bottom: 1.5rem !important
                }

                .mb-sm-5 {
                    margin-bottom: 3rem !important
                }

                .mb-sm-auto {
                    margin-bottom: auto !important
                }

                .ms-sm-0 {
                    margin-left: 0 !important
                }

                .ms-sm-1 {
                    margin-left: .25rem !important
                }

                .ms-sm-2 {
                    margin-left: .5rem !important
                }

                .ms-sm-3 {
                    margin-left: 1rem !important
                }

                .ms-sm-4 {
                    margin-left: 1.5rem !important
                }

                .ms-sm-5 {
                    margin-left: 3rem !important
                }

                .ms-sm-auto {
                    margin-left: auto !important
                }

                .m-sm-n1 {
                    margin: -.25rem !important
                }

                .m-sm-n2 {
                    margin: -.5rem !important
                }

                .m-sm-n3 {
                    margin: -1rem !important
                }

                .m-sm-n4 {
                    margin: -1.5rem !important
                }

                .m-sm-n5 {
                    margin: -3rem !important
                }

                .mx-sm-n1 {
                    margin-right: -.25rem !important;
                    margin-left: -.25rem !important
                }

                .mx-sm-n2 {
                    margin-right: -.5rem !important;
                    margin-left: -.5rem !important
                }

                .mx-sm-n3 {
                    margin-right: -1rem !important;
                    margin-left: -1rem !important
                }

                .mx-sm-n4 {
                    margin-right: -1.5rem !important;
                    margin-left: -1.5rem !important
                }

                .mx-sm-n5 {
                    margin-right: -3rem !important;
                    margin-left: -3rem !important
                }

                .my-sm-n1 {
                    margin-top: -.25rem !important;
                    margin-bottom: -.25rem !important
                }

                .my-sm-n2 {
                    margin-top: -.5rem !important;
                    margin-bottom: -.5rem !important
                }

                .my-sm-n3 {
                    margin-top: -1rem !important;
                    margin-bottom: -1rem !important
                }

                .my-sm-n4 {
                    margin-top: -1.5rem !important;
                    margin-bottom: -1.5rem !important
                }

                .my-sm-n5 {
                    margin-top: -3rem !important;
                    margin-bottom: -3rem !important
                }

                .mt-sm-n1 {
                    margin-top: -.25rem !important
                }

                .mt-sm-n2 {
                    margin-top: -.5rem !important
                }

                .mt-sm-n3 {
                    margin-top: -1rem !important
                }

                .mt-sm-n4 {
                    margin-top: -1.5rem !important
                }

                .mt-sm-n5 {
                    margin-top: -3rem !important
                }

                .me-sm-n1 {
                    margin-right: -.25rem !important
                }

                .me-sm-n2 {
                    margin-right: -.5rem !important
                }

                .me-sm-n3 {
                    margin-right: -1rem !important
                }

                .me-sm-n4 {
                    margin-right: -1.5rem !important
                }

                .me-sm-n5 {
                    margin-right: -3rem !important
                }

                .mb-sm-n1 {
                    margin-bottom: -.25rem !important
                }

                .mb-sm-n2 {
                    margin-bottom: -.5rem !important
                }

                .mb-sm-n3 {
                    margin-bottom: -1rem !important
                }

                .mb-sm-n4 {
                    margin-bottom: -1.5rem !important
                }

                .mb-sm-n5 {
                    margin-bottom: -3rem !important
                }

                .ms-sm-n1 {
                    margin-left: -.25rem !important
                }

                .ms-sm-n2 {
                    margin-left: -.5rem !important
                }

                .ms-sm-n3 {
                    margin-left: -1rem !important
                }

                .ms-sm-n4 {
                    margin-left: -1.5rem !important
                }

                .ms-sm-n5 {
                    margin-left: -3rem !important
                }

                .p-sm-0 {
                    padding: 0 !important
                }

                .p-sm-1 {
                    padding: .25rem !important
                }

                .p-sm-2 {
                    padding: .5rem !important
                }

                .p-sm-3 {
                    padding: 1rem !important
                }

                .p-sm-4 {
                    padding: 1.5rem !important
                }

                .p-sm-5 {
                    padding: 3rem !important
                }

                .px-sm-0 {
                    padding-right: 0 !important;
                    padding-left: 0 !important
                }

                .px-sm-1 {
                    padding-right: .25rem !important;
                    padding-left: .25rem !important
                }

                .px-sm-2 {
                    padding-right: .5rem !important;
                    padding-left: .5rem !important
                }

                .px-sm-3 {
                    padding-right: 1rem !important;
                    padding-left: 1rem !important
                }

                .px-sm-4 {
                    padding-right: 1.5rem !important;
                    padding-left: 1.5rem !important
                }

                .px-sm-5 {
                    padding-right: 3rem !important;
                    padding-left: 3rem !important
                }

                .py-sm-0 {
                    padding-top: 0 !important;
                    padding-bottom: 0 !important
                }

                .py-sm-1 {
                    padding-top: .25rem !important;
                    padding-bottom: .25rem !important
                }

                .py-sm-2 {
                    padding-top: .5rem !important;
                    padding-bottom: .5rem !important
                }

                .py-sm-3 {
                    padding-top: 1rem !important;
                    padding-bottom: 1rem !important
                }

                .py-sm-4 {
                    padding-top: 1.5rem !important;
                    padding-bottom: 1.5rem !important
                }

                .py-sm-5 {
                    padding-top: 3rem !important;
                    padding-bottom: 3rem !important
                }

                .pt-sm-0 {
                    padding-top: 0 !important
                }

                .pt-sm-1 {
                    padding-top: .25rem !important
                }

                .pt-sm-2 {
                    padding-top: .5rem !important
                }

                .pt-sm-3 {
                    padding-top: 1rem !important
                }

                .pt-sm-4 {
                    padding-top: 1.5rem !important
                }

                .pt-sm-5 {
                    padding-top: 3rem !important
                }

                .pe-sm-0 {
                    padding-right: 0 !important
                }

                .pe-sm-1 {
                    padding-right: .25rem !important
                }

                .pe-sm-2 {
                    padding-right: .5rem !important
                }

                .pe-sm-3 {
                    padding-right: 1rem !important
                }

                .pe-sm-4 {
                    padding-right: 1.5rem !important
                }

                .pe-sm-5 {
                    padding-right: 3rem !important
                }

                .pb-sm-0 {
                    padding-bottom: 0 !important
                }

                .pb-sm-1 {
                    padding-bottom: .25rem !important
                }

                .pb-sm-2 {
                    padding-bottom: .5rem !important
                }

                .pb-sm-3 {
                    padding-bottom: 1rem !important
                }

                .pb-sm-4 {
                    padding-bottom: 1.5rem !important
                }

                .pb-sm-5 {
                    padding-bottom: 3rem !important
                }

                .ps-sm-0 {
                    padding-left: 0 !important
                }

                .ps-sm-1 {
                    padding-left: .25rem !important
                }

                .ps-sm-2 {
                    padding-left: .5rem !important
                }

                .ps-sm-3 {
                    padding-left: 1rem !important
                }

                .ps-sm-4 {
                    padding-left: 1.5rem !important
                }

                .ps-sm-5 {
                    padding-left: 3rem !important
                }

                .gap-sm-0 {
                    gap: 0 !important
                }

                .gap-sm-1 {
                    gap: .25rem !important
                }

                .gap-sm-2 {
                    gap: .5rem !important
                }

                .gap-sm-3 {
                    gap: 1rem !important
                }

                .gap-sm-4 {
                    gap: 1.5rem !important
                }

                .gap-sm-5 {
                    gap: 3rem !important
                }

                .row-gap-sm-0 {
                    row-gap: 0 !important
                }

                .row-gap-sm-1 {
                    row-gap: .25rem !important
                }

                .row-gap-sm-2 {
                    row-gap: .5rem !important
                }

                .row-gap-sm-3 {
                    row-gap: 1rem !important
                }

                .row-gap-sm-4 {
                    row-gap: 1.5rem !important
                }

                .row-gap-sm-5 {
                    row-gap: 3rem !important
                }

                .column-gap-sm-0 {
                    -moz-column-gap: 0 !important;
                    column-gap: 0 !important
                }

                .column-gap-sm-1 {
                    -moz-column-gap: .25rem !important;
                    column-gap: .25rem !important
                }

                .column-gap-sm-2 {
                    -moz-column-gap: .5rem !important;
                    column-gap: .5rem !important
                }

                .column-gap-sm-3 {
                    -moz-column-gap: 1rem !important;
                    column-gap: 1rem !important
                }

                .column-gap-sm-4 {
                    -moz-column-gap: 1.5rem !important;
                    column-gap: 1.5rem !important
                }

                .column-gap-sm-5 {
                    -moz-column-gap: 3rem !important;
                    column-gap: 3rem !important
                }

            }

            @media (min-width: 768px) {
                .float-md-start {
                    float: left !important
                }

                .float-md-end {
                    float: right !important
                }

                .float-md-none {
                    float: none !important
                }

                .object-fit-md-contain {
                    -o-object-fit: contain !important;
                    object-fit: contain !important
                }

                .object-fit-md-cover {
                    -o-object-fit: cover !important;
                    object-fit: cover !important
                }

                .object-fit-md-fill {
                    -o-object-fit: fill !important;
                    object-fit: fill !important
                }

                .object-fit-md-scale {
                    -o-object-fit: scale-down !important;
                    object-fit: scale-down !important
                }

                .object-fit-md-none {
                    -o-object-fit: none !important;
                    object-fit: none !important
                }

                .d-md-inline {
                    display: inline !important
                }

                .d-md-inline-block {
                    display: inline-block !important
                }

                .d-md-block {
                    display: block !important
                }

                .d-md-grid {
                    display: grid !important
                }

                .d-md-inline-grid {
                    display: inline-grid !important
                }

                .d-md-table {
                    display: table !important
                }

                .d-md-table-row {
                    display: table-row !important
                }

                .d-md-table-cell {
                    display: table-cell !important
                }

                .d-md-flex {
                    display: flex !important
                }

                .d-md-inline-flex {
                    display: inline-flex !important
                }

                .d-md-none {
                    display: none !important
                }

                .flex-md-fill {
                    flex: 1 1 auto !important
                }

                .flex-md-row {
                    flex-direction: row !important
                }

                .flex-md-column {
                    flex-direction: column !important
                }

                .flex-md-row-reverse {
                    flex-direction: row-reverse !important
                }

                .flex-md-column-reverse {
                    flex-direction: column-reverse !important
                }

                .flex-md-grow-0 {
                    flex-grow: 0 !important
                }

                .flex-md-grow-1 {
                    flex-grow: 1 !important
                }

                .flex-md-shrink-0 {
                    flex-shrink: 0 !important
                }

                .flex-md-shrink-1 {
                    flex-shrink: 1 !important
                }

                .flex-md-wrap {
                    flex-wrap: wrap !important
                }

                .flex-md-nowrap {
                    flex-wrap: nowrap !important
                }

                .flex-md-wrap-reverse {
                    flex-wrap: wrap-reverse !important
                }

                .justify-content-md-start {
                    justify-content: flex-start !important
                }

                .justify-content-md-end {
                    justify-content: flex-end !important
                }

                .justify-content-md-center {
                    justify-content: center !important
                }

                .justify-content-md-between {
                    justify-content: space-between !important
                }

                .justify-content-md-around {
                    justify-content: space-around !important
                }

                .justify-content-md-evenly {
                    justify-content: space-evenly !important
                }

                .align-items-md-start {
                    align-items: flex-start !important
                }

                .align-items-md-end {
                    align-items: flex-end !important
                }

                .align-items-md-center {
                    align-items: center !important
                }

                .align-items-md-baseline {
                    align-items: baseline !important
                }

                .align-items-md-stretch {
                    align-items: stretch !important
                }

                .align-content-md-start {
                    align-content: flex-start !important
                }

                .align-content-md-end {
                    align-content: flex-end !important
                }

                .align-content-md-center {
                    align-content: center !important
                }

                .align-content-md-between {
                    align-content: space-between !important
                }

                .align-content-md-around {
                    align-content: space-around !important
                }

                .align-content-md-stretch {
                    align-content: stretch !important
                }

                .align-self-md-auto {
                    align-self: auto !important
                }

                .align-self-md-start {
                    align-self: flex-start !important
                }

                .align-self-md-end {
                    align-self: flex-end !important
                }

                .align-self-md-center {
                    align-self: center !important
                }

                .align-self-md-baseline {
                    align-self: baseline !important
                }

                .align-self-md-stretch {
                    align-self: stretch !important
                }

                .order-md-first {
                    order: -1 !important
                }

                .order-md-0 {
                    order: 0 !important
                }

                .order-md-1 {
                    order: 1 !important
                }

                .order-md-2 {
                    order: 2 !important
                }

                .order-md-3 {
                    order: 3 !important
                }

                .order-md-4 {
                    order: 4 !important
                }

                .order-md-5 {
                    order: 5 !important
                }

                .order-md-last {
                    order: 6 !important
                }

                .m-md-0 {
                    margin: 0 !important
                }

                .m-md-1 {
                    margin: .25rem !important
                }

                .m-md-2 {
                    margin: .5rem !important
                }

                .m-md-3 {
                    margin: 1rem !important
                }

                .m-md-4 {
                    margin: 1.5rem !important
                }

                .m-md-5 {
                    margin: 3rem !important
                }

                .m-md-auto {
                    margin: auto !important
                }

                .mx-md-0 {
                    margin-right: 0 !important;
                    margin-left: 0 !important
                }

                .mx-md-1 {
                    margin-right: .25rem !important;
                    margin-left: .25rem !important
                }

                .mx-md-2 {
                    margin-right: .5rem !important;
                    margin-left: .5rem !important
                }

                .mx-md-3 {
                    margin-right: 1rem !important;
                    margin-left: 1rem !important
                }

                .mx-md-4 {
                    margin-right: 1.5rem !important;
                    margin-left: 1.5rem !important
                }

                .mx-md-5 {
                    margin-right: 3rem !important;
                    margin-left: 3rem !important
                }

                .mx-md-auto {
                    margin-right: auto !important;
                    margin-left: auto !important
                }

                .my-md-0 {
                    margin-top: 0 !important;
                    margin-bottom: 0 !important
                }

                .my-md-1 {
                    margin-top: .25rem !important;
                    margin-bottom: .25rem !important
                }

                .my-md-2 {
                    margin-top: .5rem !important;
                    margin-bottom: .5rem !important
                }

                .my-md-3 {
                    margin-top: 1rem !important;
                    margin-bottom: 1rem !important
                }

                .my-md-4 {
                    margin-top: 1.5rem !important;
                    margin-bottom: 1.5rem !important
                }

                .my-md-5 {
                    margin-top: 3rem !important;
                    margin-bottom: 3rem !important
                }

                .my-md-auto {
                    margin-top: auto !important;
                    margin-bottom: auto !important
                }

                .mt-md-0 {
                    margin-top: 0 !important
                }

                .mt-md-1 {
                    margin-top: .25rem !important
                }

                .mt-md-2 {
                    margin-top: .5rem !important
                }

                .mt-md-3 {
                    margin-top: 1rem !important
                }

                .mt-md-4 {
                    margin-top: 1.5rem !important
                }

                .mt-md-5 {
                    margin-top: 3rem !important
                }

                .mt-md-auto {
                    margin-top: auto !important
                }

                .me-md-0 {
                    margin-right: 0 !important
                }

                .me-md-1 {
                    margin-right: .25rem !important
                }

                .me-md-2 {
                    margin-right: .5rem !important
                }

                .me-md-3 {
                    margin-right: 1rem !important
                }

                .me-md-4 {
                    margin-right: 1.5rem !important
                }

                .me-md-5 {
                    margin-right: 3rem !important
                }

                .me-md-auto {
                    margin-right: auto !important
                }

                .mb-md-0 {
                    margin-bottom: 0 !important
                }

                .mb-md-1 {
                    margin-bottom: .25rem !important
                }

                .mb-md-2 {
                    margin-bottom: .5rem !important
                }

                .mb-md-3 {
                    margin-bottom: 1rem !important
                }

                .mb-md-4 {
                    margin-bottom: 1.5rem !important
                }

                .mb-md-5 {
                    margin-bottom: 3rem !important
                }

                .mb-md-auto {
                    margin-bottom: auto !important
                }

                .ms-md-0 {
                    margin-left: 0 !important
                }

                .ms-md-1 {
                    margin-left: .25rem !important
                }

                .ms-md-2 {
                    margin-left: .5rem !important
                }

                .ms-md-3 {
                    margin-left: 1rem !important
                }

                .ms-md-4 {
                    margin-left: 1.5rem !important
                }

                .ms-md-5 {
                    margin-left: 3rem !important
                }

                .ms-md-auto {
                    margin-left: auto !important
                }

                .m-md-n1 {
                    margin: -.25rem !important
                }

                .m-md-n2 {
                    margin: -.5rem !important
                }

                .m-md-n3 {
                    margin: -1rem !important
                }

                .m-md-n4 {
                    margin: -1.5rem !important
                }

                .m-md-n5 {
                    margin: -3rem !important
                }

                .mx-md-n1 {
                    margin-right: -.25rem !important;
                    margin-left: -.25rem !important
                }

                .mx-md-n2 {
                    margin-right: -.5rem !important;
                    margin-left: -.5rem !important
                }

                .mx-md-n3 {
                    margin-right: -1rem !important;
                    margin-left: -1rem !important
                }

                .mx-md-n4 {
                    margin-right: -1.5rem !important;
                    margin-left: -1.5rem !important
                }

                .mx-md-n5 {
                    margin-right: -3rem !important;
                    margin-left: -3rem !important
                }

                .my-md-n1 {
                    margin-top: -.25rem !important;
                    margin-bottom: -.25rem !important
                }

                .my-md-n2 {
                    margin-top: -.5rem !important;
                    margin-bottom: -.5rem !important
                }

                .my-md-n3 {
                    margin-top: -1rem !important;
                    margin-bottom: -1rem !important
                }

                .my-md-n4 {
                    margin-top: -1.5rem !important;
                    margin-bottom: -1.5rem !important
                }

                .my-md-n5 {
                    margin-top: -3rem !important;
                    margin-bottom: -3rem !important
                }

                .mt-md-n1 {
                    margin-top: -.25rem !important
                }

                .mt-md-n2 {
                    margin-top: -.5rem !important
                }

                .mt-md-n3 {
                    margin-top: -1rem !important
                }

                .mt-md-n4 {
                    margin-top: -1.5rem !important
                }

                .mt-md-n5 {
                    margin-top: -3rem !important
                }

                .me-md-n1 {
                    margin-right: -.25rem !important
                }

                .me-md-n2 {
                    margin-right: -.5rem !important
                }

                .me-md-n3 {
                    margin-right: -1rem !important
                }

                .me-md-n4 {
                    margin-right: -1.5rem !important
                }

                .me-md-n5 {
                    margin-right: -3rem !important
                }

                .mb-md-n1 {
                    margin-bottom: -.25rem !important
                }

                .mb-md-n2 {
                    margin-bottom: -.5rem !important
                }

                .mb-md-n3 {
                    margin-bottom: -1rem !important
                }

                .mb-md-n4 {
                    margin-bottom: -1.5rem !important
                }

                .mb-md-n5 {
                    margin-bottom: -3rem !important
                }

                .ms-md-n1 {
                    margin-left: -.25rem !important
                }

                .ms-md-n2 {
                    margin-left: -.5rem !important
                }

                .ms-md-n3 {
                    margin-left: -1rem !important
                }

                .ms-md-n4 {
                    margin-left: -1.5rem !important
                }

                .ms-md-n5 {
                    margin-left: -3rem !important
                }

                .p-md-0 {
                    padding: 0 !important
                }

                .p-md-1 {
                    padding: .25rem !important
                }

                .p-md-2 {
                    padding: .5rem !important
                }

                .p-md-3 {
                    padding: 1rem !important
                }

                .p-md-4 {
                    padding: 1.5rem !important
                }

                .p-md-5 {
                    padding: 3rem !important
                }

                .px-md-0 {
                    padding-right: 0 !important;
                    padding-left: 0 !important
                }

                .px-md-1 {
                    padding-right: .25rem !important;
                    padding-left: .25rem !important
                }

                .px-md-2 {
                    padding-right: .5rem !important;
                    padding-left: .5rem !important
                }

                .px-md-3 {
                    padding-right: 1rem !important;
                    padding-left: 1rem !important
                }

                .px-md-4 {
                    padding-right: 1.5rem !important;
                    padding-left: 1.5rem !important
                }

                .px-md-5 {
                    padding-right: 3rem !important;
                    padding-left: 3rem !important
                }

                .py-md-0 {
                    padding-top: 0 !important;
                    padding-bottom: 0 !important
                }

                .py-md-1 {
                    padding-top: .25rem !important;
                    padding-bottom: .25rem !important
                }

                .py-md-2 {
                    padding-top: .5rem !important;
                    padding-bottom: .5rem !important
                }

                .py-md-3 {
                    padding-top: 1rem !important;
                    padding-bottom: 1rem !important
                }

                .py-md-4 {
                    padding-top: 1.5rem !important;
                    padding-bottom: 1.5rem !important
                }

                .py-md-5 {
                    padding-top: 3rem !important;
                    padding-bottom: 3rem !important
                }

                .pt-md-0 {
                    padding-top: 0 !important
                }

                .pt-md-1 {
                    padding-top: .25rem !important
                }

                .pt-md-2 {
                    padding-top: .5rem !important
                }

                .pt-md-3 {
                    padding-top: 1rem !important
                }

                .pt-md-4 {
                    padding-top: 1.5rem !important
                }

                .pt-md-5 {
                    padding-top: 3rem !important
                }

                .pe-md-0 {
                    padding-right: 0 !important
                }

                .pe-md-1 {
                    padding-right: .25rem !important
                }

                .pe-md-2 {
                    padding-right: .5rem !important
                }

                .pe-md-3 {
                    padding-right: 1rem !important
                }

                .pe-md-4 {
                    padding-right: 1.5rem !important
                }

                .pe-md-5 {
                    padding-right: 3rem !important
                }

                .pb-md-0 {
                    padding-bottom: 0 !important
                }

                .pb-md-1 {
                    padding-bottom: .25rem !important
                }

                .pb-md-2 {
                    padding-bottom: .5rem !important
                }

                .pb-md-3 {
                    padding-bottom: 1rem !important
                }

                .pb-md-4 {
                    padding-bottom: 1.5rem !important
                }

                .pb-md-5 {
                    padding-bottom: 3rem !important
                }

                .ps-md-0 {
                    padding-left: 0 !important
                }

                .ps-md-1 {
                    padding-left: .25rem !important
                }

                .ps-md-2 {
                    padding-left: .5rem !important
                }

                .ps-md-3 {
                    padding-left: 1rem !important
                }

                .ps-md-4 {
                    padding-left: 1.5rem !important
                }

                .ps-md-5 {
                    padding-left: 3rem !important
                }

                .gap-md-0 {
                    gap: 0 !important
                }

                .gap-md-1 {
                    gap: .25rem !important
                }

                .gap-md-2 {
                    gap: .5rem !important
                }

                .gap-md-3 {
                    gap: 1rem !important
                }

                .gap-md-4 {
                    gap: 1.5rem !important
                }

                .gap-md-5 {
                    gap: 3rem !important
                }

                .row-gap-md-0 {
                    row-gap: 0 !important
                }

                .row-gap-md-1 {
                    row-gap: .25rem !important
                }

                .row-gap-md-2 {
                    row-gap: .5rem !important
                }

                .row-gap-md-3 {
                    row-gap: 1rem !important
                }

                .row-gap-md-4 {
                    row-gap: 1.5rem !important
                }

                .row-gap-md-5 {
                    row-gap: 3rem !important
                }

                .column-gap-md-0 {
                    -moz-column-gap: 0 !important;
                    column-gap: 0 !important
                }

                .column-gap-md-1 {
                    -moz-column-gap: .25rem !important;
                    column-gap: .25rem !important
                }

                .column-gap-md-2 {
                    -moz-column-gap: .5rem !important;
                    column-gap: .5rem !important
                }

                .column-gap-md-3 {
                    -moz-column-gap: 1rem !important;
                    column-gap: 1rem !important
                }

                .column-gap-md-4 {
                    -moz-column-gap: 1.5rem !important;
                    column-gap: 1.5rem !important
                }

                .column-gap-md-5 {
                    -moz-column-gap: 3rem !important;
                    column-gap: 3rem !important
                }

            }

            @media (min-width: 992px) {
                .float-lg-start {
                    float: left !important
                }

                .float-lg-end {
                    float: right !important
                }

                .float-lg-none {
                    float: none !important
                }

                .object-fit-lg-contain {
                    -o-object-fit: contain !important;
                    object-fit: contain !important
                }

                .object-fit-lg-cover {
                    -o-object-fit: cover !important;
                    object-fit: cover !important
                }

                .object-fit-lg-fill {
                    -o-object-fit: fill !important;
                    object-fit: fill !important
                }

                .object-fit-lg-scale {
                    -o-object-fit: scale-down !important;
                    object-fit: scale-down !important
                }

                .object-fit-lg-none {
                    -o-object-fit: none !important;
                    object-fit: none !important
                }

                .d-lg-inline {
                    display: inline !important
                }

                .d-lg-inline-block {
                    display: inline-block !important
                }

                .d-lg-block {
                    display: block !important
                }

                .d-lg-grid {
                    display: grid !important
                }

                .d-lg-inline-grid {
                    display: inline-grid !important
                }

                .d-lg-table {
                    display: table !important
                }

                .d-lg-table-row {
                    display: table-row !important
                }

                .d-lg-table-cell {
                    display: table-cell !important
                }

                .d-lg-flex {
                    display: flex !important
                }

                .d-lg-inline-flex {
                    display: inline-flex !important
                }

                .d-lg-none {
                    display: none !important
                }

                .flex-lg-fill {
                    flex: 1 1 auto !important
                }

                .flex-lg-row {
                    flex-direction: row !important
                }

                .flex-lg-column {
                    flex-direction: column !important
                }

                .flex-lg-row-reverse {
                    flex-direction: row-reverse !important
                }

                .flex-lg-column-reverse {
                    flex-direction: column-reverse !important
                }

                .flex-lg-grow-0 {
                    flex-grow: 0 !important
                }

                .flex-lg-grow-1 {
                    flex-grow: 1 !important
                }

                .flex-lg-shrink-0 {
                    flex-shrink: 0 !important
                }

                .flex-lg-shrink-1 {
                    flex-shrink: 1 !important
                }

                .flex-lg-wrap {
                    flex-wrap: wrap !important
                }

                .flex-lg-nowrap {
                    flex-wrap: nowrap !important
                }

                .flex-lg-wrap-reverse {
                    flex-wrap: wrap-reverse !important
                }

                .justify-content-lg-start {
                    justify-content: flex-start !important
                }

                .justify-content-lg-end {
                    justify-content: flex-end !important
                }

                .justify-content-lg-center {
                    justify-content: center !important
                }

                .justify-content-lg-between {
                    justify-content: space-between !important
                }

                .justify-content-lg-around {
                    justify-content: space-around !important
                }

                .justify-content-lg-evenly {
                    justify-content: space-evenly !important
                }

                .align-items-lg-start {
                    align-items: flex-start !important
                }

                .align-items-lg-end {
                    align-items: flex-end !important
                }

                .align-items-lg-center {
                    align-items: center !important
                }

                .align-items-lg-baseline {
                    align-items: baseline !important
                }

                .align-items-lg-stretch {
                    align-items: stretch !important
                }

                .align-content-lg-start {
                    align-content: flex-start !important
                }

                .align-content-lg-end {
                    align-content: flex-end !important
                }

                .align-content-lg-center {
                    align-content: center !important
                }

                .align-content-lg-between {
                    align-content: space-between !important
                }

                .align-content-lg-around {
                    align-content: space-around !important
                }

                .align-content-lg-stretch {
                    align-content: stretch !important
                }

                .align-self-lg-auto {
                    align-self: auto !important
                }

                .align-self-lg-start {
                    align-self: flex-start !important
                }

                .align-self-lg-end {
                    align-self: flex-end !important
                }

                .align-self-lg-center {
                    align-self: center !important
                }

                .align-self-lg-baseline {
                    align-self: baseline !important
                }

                .align-self-lg-stretch {
                    align-self: stretch !important
                }

                .order-lg-first {
                    order: -1 !important
                }

                .order-lg-0 {
                    order: 0 !important
                }

                .order-lg-1 {
                    order: 1 !important
                }

                .order-lg-2 {
                    order: 2 !important
                }

                .order-lg-3 {
                    order: 3 !important
                }

                .order-lg-4 {
                    order: 4 !important
                }

                .order-lg-5 {
                    order: 5 !important
                }

                .order-lg-last {
                    order: 6 !important
                }

                .m-lg-0 {
                    margin: 0 !important
                }

                .m-lg-1 {
                    margin: .25rem !important
                }

                .m-lg-2 {
                    margin: .5rem !important
                }

                .m-lg-3 {
                    margin: 1rem !important
                }

                .m-lg-4 {
                    margin: 1.5rem !important
                }

                .m-lg-5 {
                    margin: 3rem !important
                }

                .m-lg-auto {
                    margin: auto !important
                }

                .mx-lg-0 {
                    margin-right: 0 !important;
                    margin-left: 0 !important
                }

                .mx-lg-1 {
                    margin-right: .25rem !important;
                    margin-left: .25rem !important
                }

                .mx-lg-2 {
                    margin-right: .5rem !important;
                    margin-left: .5rem !important
                }

                .mx-lg-3 {
                    margin-right: 1rem !important;
                    margin-left: 1rem !important
                }

                .mx-lg-4 {
                    margin-right: 1.5rem !important;
                    margin-left: 1.5rem !important
                }

                .mx-lg-5 {
                    margin-right: 3rem !important;
                    margin-left: 3rem !important
                }

                .mx-lg-auto {
                    margin-right: auto !important;
                    margin-left: auto !important
                }

                .my-lg-0 {
                    margin-top: 0 !important;
                    margin-bottom: 0 !important
                }

                .my-lg-1 {
                    margin-top: .25rem !important;
                    margin-bottom: .25rem !important
                }

                .my-lg-2 {
                    margin-top: .5rem !important;
                    margin-bottom: .5rem !important
                }

                .my-lg-3 {
                    margin-top: 1rem !important;
                    margin-bottom: 1rem !important
                }

                .my-lg-4 {
                    margin-top: 1.5rem !important;
                    margin-bottom: 1.5rem !important
                }

                .my-lg-5 {
                    margin-top: 3rem !important;
                    margin-bottom: 3rem !important
                }

                .my-lg-auto {
                    margin-top: auto !important;
                    margin-bottom: auto !important
                }

                .mt-lg-0 {
                    margin-top: 0 !important
                }

                .mt-lg-1 {
                    margin-top: .25rem !important
                }

                .mt-lg-2 {
                    margin-top: .5rem !important
                }

                .mt-lg-3 {
                    margin-top: 1rem !important
                }

                .mt-lg-4 {
                    margin-top: 1.5rem !important
                }

                .mt-lg-5 {
                    margin-top: 3rem !important
                }

                .mt-lg-auto {
                    margin-top: auto !important
                }

                .me-lg-0 {
                    margin-right: 0 !important
                }

                .me-lg-1 {
                    margin-right: .25rem !important
                }

                .me-lg-2 {
                    margin-right: .5rem !important
                }

                .me-lg-3 {
                    margin-right: 1rem !important
                }

                .me-lg-4 {
                    margin-right: 1.5rem !important
                }

                .me-lg-5 {
                    margin-right: 3rem !important
                }

                .me-lg-auto {
                    margin-right: auto !important
                }

                .mb-lg-0 {
                    margin-bottom: 0 !important
                }

                .mb-lg-1 {
                    margin-bottom: .25rem !important
                }

                .mb-lg-2 {
                    margin-bottom: .5rem !important
                }

                .mb-lg-3 {
                    margin-bottom: 1rem !important
                }

                .mb-lg-4 {
                    margin-bottom: 1.5rem !important
                }

                .mb-lg-5 {
                    margin-bottom: 3rem !important
                }

                .mb-lg-auto {
                    margin-bottom: auto !important
                }

                .ms-lg-0 {
                    margin-left: 0 !important
                }

                .ms-lg-1 {
                    margin-left: .25rem !important
                }

                .ms-lg-2 {
                    margin-left: .5rem !important
                }

                .ms-lg-3 {
                    margin-left: 1rem !important
                }

                .ms-lg-4 {
                    margin-left: 1.5rem !important
                }

                .ms-lg-5 {
                    margin-left: 3rem !important
                }

                .ms-lg-auto {
                    margin-left: auto !important
                }

                .m-lg-n1 {
                    margin: -.25rem !important
                }

                .m-lg-n2 {
                    margin: -.5rem !important
                }

                .m-lg-n3 {
                    margin: -1rem !important
                }

                .m-lg-n4 {
                    margin: -1.5rem !important
                }

                .m-lg-n5 {
                    margin: -3rem !important
                }

                .mx-lg-n1 {
                    margin-right: -.25rem !important;
                    margin-left: -.25rem !important
                }

                .mx-lg-n2 {
                    margin-right: -.5rem !important;
                    margin-left: -.5rem !important
                }

                .mx-lg-n3 {
                    margin-right: -1rem !important;
                    margin-left: -1rem !important
                }

                .mx-lg-n4 {
                    margin-right: -1.5rem !important;
                    margin-left: -1.5rem !important
                }

                .mx-lg-n5 {
                    margin-right: -3rem !important;
                    margin-left: -3rem !important
                }

                .my-lg-n1 {
                    margin-top: -.25rem !important;
                    margin-bottom: -.25rem !important
                }

                .my-lg-n2 {
                    margin-top: -.5rem !important;
                    margin-bottom: -.5rem !important
                }

                .my-lg-n3 {
                    margin-top: -1rem !important;
                    margin-bottom: -1rem !important
                }

                .my-lg-n4 {
                    margin-top: -1.5rem !important;
                    margin-bottom: -1.5rem !important
                }

                .my-lg-n5 {
                    margin-top: -3rem !important;
                    margin-bottom: -3rem !important
                }

                .mt-lg-n1 {
                    margin-top: -.25rem !important
                }

                .mt-lg-n2 {
                    margin-top: -.5rem !important
                }

                .mt-lg-n3 {
                    margin-top: -1rem !important
                }

                .mt-lg-n4 {
                    margin-top: -1.5rem !important
                }

                .mt-lg-n5 {
                    margin-top: -3rem !important
                }

                .me-lg-n1 {
                    margin-right: -.25rem !important
                }

                .me-lg-n2 {
                    margin-right: -.5rem !important
                }

                .me-lg-n3 {
                    margin-right: -1rem !important
                }

                .me-lg-n4 {
                    margin-right: -1.5rem !important
                }

                .me-lg-n5 {
                    margin-right: -3rem !important
                }

                .mb-lg-n1 {
                    margin-bottom: -.25rem !important
                }

                .mb-lg-n2 {
                    margin-bottom: -.5rem !important
                }

                .mb-lg-n3 {
                    margin-bottom: -1rem !important
                }

                .mb-lg-n4 {
                    margin-bottom: -1.5rem !important
                }

                .mb-lg-n5 {
                    margin-bottom: -3rem !important
                }

                .ms-lg-n1 {
                    margin-left: -.25rem !important
                }

                .ms-lg-n2 {
                    margin-left: -.5rem !important
                }

                .ms-lg-n3 {
                    margin-left: -1rem !important
                }

                .ms-lg-n4 {
                    margin-left: -1.5rem !important
                }

                .ms-lg-n5 {
                    margin-left: -3rem !important
                }

                .p-lg-0 {
                    padding: 0 !important
                }

                .p-lg-1 {
                    padding: .25rem !important
                }

                .p-lg-2 {
                    padding: .5rem !important
                }

                .p-lg-3 {
                    padding: 1rem !important
                }

                .p-lg-4 {
                    padding: 1.5rem !important
                }

                .p-lg-5 {
                    padding: 3rem !important
                }

                .px-lg-0 {
                    padding-right: 0 !important;
                    padding-left: 0 !important
                }

                .px-lg-1 {
                    padding-right: .25rem !important;
                    padding-left: .25rem !important
                }

                .px-lg-2 {
                    padding-right: .5rem !important;
                    padding-left: .5rem !important
                }

                .px-lg-3 {
                    padding-right: 1rem !important;
                    padding-left: 1rem !important
                }

                .px-lg-4 {
                    padding-right: 1.5rem !important;
                    padding-left: 1.5rem !important
                }

                .px-lg-5 {
                    padding-right: 3rem !important;
                    padding-left: 3rem !important
                }

                .py-lg-0 {
                    padding-top: 0 !important;
                    padding-bottom: 0 !important
                }

                .py-lg-1 {
                    padding-top: .25rem !important;
                    padding-bottom: .25rem !important
                }

                .py-lg-2 {
                    padding-top: .5rem !important;
                    padding-bottom: .5rem !important
                }

                .py-lg-3 {
                    padding-top: 1rem !important;
                    padding-bottom: 1rem !important
                }

                .py-lg-4 {
                    padding-top: 1.5rem !important;
                    padding-bottom: 1.5rem !important
                }

                .py-lg-5 {
                    padding-top: 3rem !important;
                    padding-bottom: 3rem !important
                }

                .pt-lg-0 {
                    padding-top: 0 !important
                }

                .pt-lg-1 {
                    padding-top: .25rem !important
                }

                .pt-lg-2 {
                    padding-top: .5rem !important
                }

                .pt-lg-3 {
                    padding-top: 1rem !important
                }

                .pt-lg-4 {
                    padding-top: 1.5rem !important
                }

                .pt-lg-5 {
                    padding-top: 3rem !important
                }

                .pe-lg-0 {
                    padding-right: 0 !important
                }

                .pe-lg-1 {
                    padding-right: .25rem !important
                }

                .pe-lg-2 {
                    padding-right: .5rem !important
                }

                .pe-lg-3 {
                    padding-right: 1rem !important
                }

                .pe-lg-4 {
                    padding-right: 1.5rem !important
                }

                .pe-lg-5 {
                    padding-right: 3rem !important
                }

                .pb-lg-0 {
                    padding-bottom: 0 !important
                }

                .pb-lg-1 {
                    padding-bottom: .25rem !important
                }

                .pb-lg-2 {
                    padding-bottom: .5rem !important
                }

                .pb-lg-3 {
                    padding-bottom: 1rem !important
                }

                .pb-lg-4 {
                    padding-bottom: 1.5rem !important
                }

                .pb-lg-5 {
                    padding-bottom: 3rem !important
                }

                .ps-lg-0 {
                    padding-left: 0 !important
                }

                .ps-lg-1 {
                    padding-left: .25rem !important
                }

                .ps-lg-2 {
                    padding-left: .5rem !important
                }

                .ps-lg-3 {
                    padding-left: 1rem !important
                }

                .ps-lg-4 {
                    padding-left: 1.5rem !important
                }

                .ps-lg-5 {
                    padding-left: 3rem !important
                }

                .gap-lg-0 {
                    gap: 0 !important
                }

                .gap-lg-1 {
                    gap: .25rem !important
                }

                .gap-lg-2 {
                    gap: .5rem !important
                }

                .gap-lg-3 {
                    gap: 1rem !important
                }

                .gap-lg-4 {
                    gap: 1.5rem !important
                }

                .gap-lg-5 {
                    gap: 3rem !important
                }

                .row-gap-lg-0 {
                    row-gap: 0 !important
                }

                .row-gap-lg-1 {
                    row-gap: .25rem !important
                }

                .row-gap-lg-2 {
                    row-gap: .5rem !important
                }

                .row-gap-lg-3 {
                    row-gap: 1rem !important
                }

                .row-gap-lg-4 {
                    row-gap: 1.5rem !important
                }

                .row-gap-lg-5 {
                    row-gap: 3rem !important
                }

                .column-gap-lg-0 {
                    -moz-column-gap: 0 !important;
                    column-gap: 0 !important
                }

                .column-gap-lg-1 {
                    -moz-column-gap: .25rem !important;
                    column-gap: .25rem !important
                }

                .column-gap-lg-2 {
                    -moz-column-gap: .5rem !important;
                    column-gap: .5rem !important
                }

                .column-gap-lg-3 {
                    -moz-column-gap: 1rem !important;
                    column-gap: 1rem !important
                }

                .column-gap-lg-4 {
                    -moz-column-gap: 1.5rem !important;
                    column-gap: 1.5rem !important
                }

                .column-gap-lg-5 {
                    -moz-column-gap: 3rem !important;
                    column-gap: 3rem !important
                }

            }

            @media (min-width: 1200px) {
                .float-xl-start {
                    float: left !important
                }

                .float-xl-end {
                    float: right !important
                }

                .float-xl-none {
                    float: none !important
                }

                .object-fit-xl-contain {
                    -o-object-fit: contain !important;
                    object-fit: contain !important
                }

                .object-fit-xl-cover {
                    -o-object-fit: cover !important;
                    object-fit: cover !important
                }

                .object-fit-xl-fill {
                    -o-object-fit: fill !important;
                    object-fit: fill !important
                }

                .object-fit-xl-scale {
                    -o-object-fit: scale-down !important;
                    object-fit: scale-down !important
                }

                .object-fit-xl-none {
                    -o-object-fit: none !important;
                    object-fit: none !important
                }

                .d-xl-inline {
                    display: inline !important
                }

                .d-xl-inline-block {
                    display: inline-block !important
                }

                .d-xl-block {
                    display: block !important
                }

                .d-xl-grid {
                    display: grid !important
                }

                .d-xl-inline-grid {
                    display: inline-grid !important
                }

                .d-xl-table {
                    display: table !important
                }

                .d-xl-table-row {
                    display: table-row !important
                }

                .d-xl-table-cell {
                    display: table-cell !important
                }

                .d-xl-flex {
                    display: flex !important
                }

                .d-xl-inline-flex {
                    display: inline-flex !important
                }

                .d-xl-none {
                    display: none !important
                }

                .flex-xl-fill {
                    flex: 1 1 auto !important
                }

                .flex-xl-row {
                    flex-direction: row !important
                }

                .flex-xl-column {
                    flex-direction: column !important
                }

                .flex-xl-row-reverse {
                    flex-direction: row-reverse !important
                }

                .flex-xl-column-reverse {
                    flex-direction: column-reverse !important
                }

                .flex-xl-grow-0 {
                    flex-grow: 0 !important
                }

                .flex-xl-grow-1 {
                    flex-grow: 1 !important
                }

                .flex-xl-shrink-0 {
                    flex-shrink: 0 !important
                }

                .flex-xl-shrink-1 {
                    flex-shrink: 1 !important
                }

                .flex-xl-wrap {
                    flex-wrap: wrap !important
                }

                .flex-xl-nowrap {
                    flex-wrap: nowrap !important
                }

                .flex-xl-wrap-reverse {
                    flex-wrap: wrap-reverse !important
                }

                .justify-content-xl-start {
                    justify-content: flex-start !important
                }

                .justify-content-xl-end {
                    justify-content: flex-end !important
                }

                .justify-content-xl-center {
                    justify-content: center !important
                }

                .justify-content-xl-between {
                    justify-content: space-between !important
                }

                .justify-content-xl-around {
                    justify-content: space-around !important
                }

                .justify-content-xl-evenly {
                    justify-content: space-evenly !important
                }

                .align-items-xl-start {
                    align-items: flex-start !important
                }

                .align-items-xl-end {
                    align-items: flex-end !important
                }

                .align-items-xl-center {
                    align-items: center !important
                }

                .align-items-xl-baseline {
                    align-items: baseline !important
                }

                .align-items-xl-stretch {
                    align-items: stretch !important
                }

                .align-content-xl-start {
                    align-content: flex-start !important
                }

                .align-content-xl-end {
                    align-content: flex-end !important
                }

                .align-content-xl-center {
                    align-content: center !important
                }

                .align-content-xl-between {
                    align-content: space-between !important
                }

                .align-content-xl-around {
                    align-content: space-around !important
                }

                .align-content-xl-stretch {
                    align-content: stretch !important
                }

                .align-self-xl-auto {
                    align-self: auto !important
                }

                .align-self-xl-start {
                    align-self: flex-start !important
                }

                .align-self-xl-end {
                    align-self: flex-end !important
                }

                .align-self-xl-center {
                    align-self: center !important
                }

                .align-self-xl-baseline {
                    align-self: baseline !important
                }

                .align-self-xl-stretch {
                    align-self: stretch !important
                }

                .order-xl-first {
                    order: -1 !important
                }

                .order-xl-0 {
                    order: 0 !important
                }

                .order-xl-1 {
                    order: 1 !important
                }

                .order-xl-2 {
                    order: 2 !important
                }

                .order-xl-3 {
                    order: 3 !important
                }

                .order-xl-4 {
                    order: 4 !important
                }

                .order-xl-5 {
                    order: 5 !important
                }

                .order-xl-last {
                    order: 6 !important
                }

                .m-xl-0 {
                    margin: 0 !important
                }

                .m-xl-1 {
                    margin: .25rem !important
                }

                .m-xl-2 {
                    margin: .5rem !important
                }

                .m-xl-3 {
                    margin: 1rem !important
                }

                .m-xl-4 {
                    margin: 1.5rem !important
                }

                .m-xl-5 {
                    margin: 3rem !important
                }

                .m-xl-auto {
                    margin: auto !important
                }

                .mx-xl-0 {
                    margin-right: 0 !important;
                    margin-left: 0 !important
                }

                .mx-xl-1 {
                    margin-right: .25rem !important;
                    margin-left: .25rem !important
                }

                .mx-xl-2 {
                    margin-right: .5rem !important;
                    margin-left: .5rem !important
                }

                .mx-xl-3 {
                    margin-right: 1rem !important;
                    margin-left: 1rem !important
                }

                .mx-xl-4 {
                    margin-right: 1.5rem !important;
                    margin-left: 1.5rem !important
                }

                .mx-xl-5 {
                    margin-right: 3rem !important;
                    margin-left: 3rem !important
                }

                .mx-xl-auto {
                    margin-right: auto !important;
                    margin-left: auto !important
                }

                .my-xl-0 {
                    margin-top: 0 !important;
                    margin-bottom: 0 !important
                }

                .my-xl-1 {
                    margin-top: .25rem !important;
                    margin-bottom: .25rem !important
                }

                .my-xl-2 {
                    margin-top: .5rem !important;
                    margin-bottom: .5rem !important
                }

                .my-xl-3 {
                    margin-top: 1rem !important;
                    margin-bottom: 1rem !important
                }

                .my-xl-4 {
                    margin-top: 1.5rem !important;
                    margin-bottom: 1.5rem !important
                }

                .my-xl-5 {
                    margin-top: 3rem !important;
                    margin-bottom: 3rem !important
                }

                .my-xl-auto {
                    margin-top: auto !important;
                    margin-bottom: auto !important
                }

                .mt-xl-0 {
                    margin-top: 0 !important
                }

                .mt-xl-1 {
                    margin-top: .25rem !important
                }

                .mt-xl-2 {
                    margin-top: .5rem !important
                }

                .mt-xl-3 {
                    margin-top: 1rem !important
                }

                .mt-xl-4 {
                    margin-top: 1.5rem !important
                }

                .mt-xl-5 {
                    margin-top: 3rem !important
                }

                .mt-xl-auto {
                    margin-top: auto !important
                }

                .me-xl-0 {
                    margin-right: 0 !important
                }

                .me-xl-1 {
                    margin-right: .25rem !important
                }

                .me-xl-2 {
                    margin-right: .5rem !important
                }

                .me-xl-3 {
                    margin-right: 1rem !important
                }

                .me-xl-4 {
                    margin-right: 1.5rem !important
                }

                .me-xl-5 {
                    margin-right: 3rem !important
                }

                .me-xl-auto {
                    margin-right: auto !important
                }

                .mb-xl-0 {
                    margin-bottom: 0 !important
                }

                .mb-xl-1 {
                    margin-bottom: .25rem !important
                }

                .mb-xl-2 {
                    margin-bottom: .5rem !important
                }

                .mb-xl-3 {
                    margin-bottom: 1rem !important
                }

                .mb-xl-4 {
                    margin-bottom: 1.5rem !important
                }

                .mb-xl-5 {
                    margin-bottom: 3rem !important
                }

                .mb-xl-auto {
                    margin-bottom: auto !important
                }

                .ms-xl-0 {
                    margin-left: 0 !important
                }

                .ms-xl-1 {
                    margin-left: .25rem !important
                }

                .ms-xl-2 {
                    margin-left: .5rem !important
                }

                .ms-xl-3 {
                    margin-left: 1rem !important
                }

                .ms-xl-4 {
                    margin-left: 1.5rem !important
                }

                .ms-xl-5 {
                    margin-left: 3rem !important
                }

                .ms-xl-auto {
                    margin-left: auto !important
                }

                .m-xl-n1 {
                    margin: -.25rem !important
                }

                .m-xl-n2 {
                    margin: -.5rem !important
                }

                .m-xl-n3 {
                    margin: -1rem !important
                }

                .m-xl-n4 {
                    margin: -1.5rem !important
                }

                .m-xl-n5 {
                    margin: -3rem !important
                }

                .mx-xl-n1 {
                    margin-right: -.25rem !important;
                    margin-left: -.25rem !important
                }

                .mx-xl-n2 {
                    margin-right: -.5rem !important;
                    margin-left: -.5rem !important
                }

                .mx-xl-n3 {
                    margin-right: -1rem !important;
                    margin-left: -1rem !important
                }

                .mx-xl-n4 {
                    margin-right: -1.5rem !important;
                    margin-left: -1.5rem !important
                }

                .mx-xl-n5 {
                    margin-right: -3rem !important;
                    margin-left: -3rem !important
                }

                .my-xl-n1 {
                    margin-top: -.25rem !important;
                    margin-bottom: -.25rem !important
                }

                .my-xl-n2 {
                    margin-top: -.5rem !important;
                    margin-bottom: -.5rem !important
                }

                .my-xl-n3 {
                    margin-top: -1rem !important;
                    margin-bottom: -1rem !important
                }

                .my-xl-n4 {
                    margin-top: -1.5rem !important;
                    margin-bottom: -1.5rem !important
                }

                .my-xl-n5 {
                    margin-top: -3rem !important;
                    margin-bottom: -3rem !important
                }

                .mt-xl-n1 {
                    margin-top: -.25rem !important
                }

                .mt-xl-n2 {
                    margin-top: -.5rem !important
                }

                .mt-xl-n3 {
                    margin-top: -1rem !important
                }

                .mt-xl-n4 {
                    margin-top: -1.5rem !important
                }

                .mt-xl-n5 {
                    margin-top: -3rem !important
                }

                .me-xl-n1 {
                    margin-right: -.25rem !important
                }

                .me-xl-n2 {
                    margin-right: -.5rem !important
                }

                .me-xl-n3 {
                    margin-right: -1rem !important
                }

                .me-xl-n4 {
                    margin-right: -1.5rem !important
                }

                .me-xl-n5 {
                    margin-right: -3rem !important
                }

                .mb-xl-n1 {
                    margin-bottom: -.25rem !important
                }

                .mb-xl-n2 {
                    margin-bottom: -.5rem !important
                }

                .mb-xl-n3 {
                    margin-bottom: -1rem !important
                }

                .mb-xl-n4 {
                    margin-bottom: -1.5rem !important
                }

                .mb-xl-n5 {
                    margin-bottom: -3rem !important
                }

                .ms-xl-n1 {
                    margin-left: -.25rem !important
                }

                .ms-xl-n2 {
                    margin-left: -.5rem !important
                }

                .ms-xl-n3 {
                    margin-left: -1rem !important
                }

                .ms-xl-n4 {
                    margin-left: -1.5rem !important
                }

                .ms-xl-n5 {
                    margin-left: -3rem !important
                }

                .p-xl-0 {
                    padding: 0 !important
                }

                .p-xl-1 {
                    padding: .25rem !important
                }

                .p-xl-2 {
                    padding: .5rem !important
                }

                .p-xl-3 {
                    padding: 1rem !important
                }

                .p-xl-4 {
                    padding: 1.5rem !important
                }

                .p-xl-5 {
                    padding: 3rem !important
                }

                .px-xl-0 {
                    padding-right: 0 !important;
                    padding-left: 0 !important
                }

                .px-xl-1 {
                    padding-right: .25rem !important;
                    padding-left: .25rem !important
                }

                .px-xl-2 {
                    padding-right: .5rem !important;
                    padding-left: .5rem !important
                }

                .px-xl-3 {
                    padding-right: 1rem !important;
                    padding-left: 1rem !important
                }

                .px-xl-4 {
                    padding-right: 1.5rem !important;
                    padding-left: 1.5rem !important
                }

                .px-xl-5 {
                    padding-right: 3rem !important;
                    padding-left: 3rem !important
                }

                .py-xl-0 {
                    padding-top: 0 !important;
                    padding-bottom: 0 !important
                }

                .py-xl-1 {
                    padding-top: .25rem !important;
                    padding-bottom: .25rem !important
                }

                .py-xl-2 {
                    padding-top: .5rem !important;
                    padding-bottom: .5rem !important
                }

                .py-xl-3 {
                    padding-top: 1rem !important;
                    padding-bottom: 1rem !important
                }

                .py-xl-4 {
                    padding-top: 1.5rem !important;
                    padding-bottom: 1.5rem !important
                }

                .py-xl-5 {
                    padding-top: 3rem !important;
                    padding-bottom: 3rem !important
                }

                .pt-xl-0 {
                    padding-top: 0 !important
                }

                .pt-xl-1 {
                    padding-top: .25rem !important
                }

                .pt-xl-2 {
                    padding-top: .5rem !important
                }

                .pt-xl-3 {
                    padding-top: 1rem !important
                }

                .pt-xl-4 {
                    padding-top: 1.5rem !important
                }

                .pt-xl-5 {
                    padding-top: 3rem !important
                }

                .pe-xl-0 {
                    padding-right: 0 !important
                }

                .pe-xl-1 {
                    padding-right: .25rem !important
                }

                .pe-xl-2 {
                    padding-right: .5rem !important
                }

                .pe-xl-3 {
                    padding-right: 1rem !important
                }

                .pe-xl-4 {
                    padding-right: 1.5rem !important
                }

                .pe-xl-5 {
                    padding-right: 3rem !important
                }

                .pb-xl-0 {
                    padding-bottom: 0 !important
                }

                .pb-xl-1 {
                    padding-bottom: .25rem !important
                }

                .pb-xl-2 {
                    padding-bottom: .5rem !important
                }

                .pb-xl-3 {
                    padding-bottom: 1rem !important
                }

                .pb-xl-4 {
                    padding-bottom: 1.5rem !important
                }

                .pb-xl-5 {
                    padding-bottom: 3rem !important
                }

                .ps-xl-0 {
                    padding-left: 0 !important
                }

                .ps-xl-1 {
                    padding-left: .25rem !important
                }

                .ps-xl-2 {
                    padding-left: .5rem !important
                }

                .ps-xl-3 {
                    padding-left: 1rem !important
                }

                .ps-xl-4 {
                    padding-left: 1.5rem !important
                }

                .ps-xl-5 {
                    padding-left: 3rem !important
                }

                .gap-xl-0 {
                    gap: 0 !important
                }

                .gap-xl-1 {
                    gap: .25rem !important
                }

                .gap-xl-2 {
                    gap: .5rem !important
                }

                .gap-xl-3 {
                    gap: 1rem !important
                }

                .gap-xl-4 {
                    gap: 1.5rem !important
                }

                .gap-xl-5 {
                    gap: 3rem !important
                }

                .row-gap-xl-0 {
                    row-gap: 0 !important
                }

                .row-gap-xl-1 {
                    row-gap: .25rem !important
                }

                .row-gap-xl-2 {
                    row-gap: .5rem !important
                }

                .row-gap-xl-3 {
                    row-gap: 1rem !important
                }

                .row-gap-xl-4 {
                    row-gap: 1.5rem !important
                }

                .row-gap-xl-5 {
                    row-gap: 3rem !important
                }

                .column-gap-xl-0 {
                    -moz-column-gap: 0 !important;
                    column-gap: 0 !important
                }

                .column-gap-xl-1 {
                    -moz-column-gap: .25rem !important;
                    column-gap: .25rem !important
                }

                .column-gap-xl-2 {
                    -moz-column-gap: .5rem !important;
                    column-gap: .5rem !important
                }

                .column-gap-xl-3 {
                    -moz-column-gap: 1rem !important;
                    column-gap: 1rem !important
                }

                .column-gap-xl-4 {
                    -moz-column-gap: 1.5rem !important;
                    column-gap: 1.5rem !important
                }

                .column-gap-xl-5 {
                    -moz-column-gap: 3rem !important;
                    column-gap: 3rem !important
                }

            }

            @media (min-width: 1660px) {
                .float-xxl-start {
                    float: left !important
                }

                .float-xxl-end {
                    float: right !important
                }

                .float-xxl-none {
                    float: none !important
                }

                .object-fit-xxl-contain {
                    -o-object-fit: contain !important;
                    object-fit: contain !important
                }

                .object-fit-xxl-cover {
                    -o-object-fit: cover !important;
                    object-fit: cover !important
                }

                .object-fit-xxl-fill {
                    -o-object-fit: fill !important;
                    object-fit: fill !important
                }

                .object-fit-xxl-scale {
                    -o-object-fit: scale-down !important;
                    object-fit: scale-down !important
                }

                .object-fit-xxl-none {
                    -o-object-fit: none !important;
                    object-fit: none !important
                }

                .d-xxl-inline {
                    display: inline !important
                }

                .d-xxl-inline-block {
                    display: inline-block !important
                }

                .d-xxl-block {
                    display: block !important
                }

                .d-xxl-grid {
                    display: grid !important
                }

                .d-xxl-inline-grid {
                    display: inline-grid !important
                }

                .d-xxl-table {
                    display: table !important
                }

                .d-xxl-table-row {
                    display: table-row !important
                }

                .d-xxl-table-cell {
                    display: table-cell !important
                }

                .d-xxl-flex {
                    display: flex !important
                }

                .d-xxl-inline-flex {
                    display: inline-flex !important
                }

                .d-xxl-none {
                    display: none !important
                }

                .flex-xxl-fill {
                    flex: 1 1 auto !important
                }

                .flex-xxl-row {
                    flex-direction: row !important
                }

                .flex-xxl-column {
                    flex-direction: column !important
                }

                .flex-xxl-row-reverse {
                    flex-direction: row-reverse !important
                }

                .flex-xxl-column-reverse {
                    flex-direction: column-reverse !important
                }

                .flex-xxl-grow-0 {
                    flex-grow: 0 !important
                }

                .flex-xxl-grow-1 {
                    flex-grow: 1 !important
                }

                .flex-xxl-shrink-0 {
                    flex-shrink: 0 !important
                }

                .flex-xxl-shrink-1 {
                    flex-shrink: 1 !important
                }

                .flex-xxl-wrap {
                    flex-wrap: wrap !important
                }

                .flex-xxl-nowrap {
                    flex-wrap: nowrap !important
                }

                .flex-xxl-wrap-reverse {
                    flex-wrap: wrap-reverse !important
                }

                .justify-content-xxl-start {
                    justify-content: flex-start !important
                }

                .justify-content-xxl-end {
                    justify-content: flex-end !important
                }

                .justify-content-xxl-center {
                    justify-content: center !important
                }

                .justify-content-xxl-between {
                    justify-content: space-between !important
                }

                .justify-content-xxl-around {
                    justify-content: space-around !important
                }

                .justify-content-xxl-evenly {
                    justify-content: space-evenly !important
                }

                .align-items-xxl-start {
                    align-items: flex-start !important
                }

                .align-items-xxl-end {
                    align-items: flex-end !important
                }

                .align-items-xxl-center {
                    align-items: center !important
                }

                .align-items-xxl-baseline {
                    align-items: baseline !important
                }

                .align-items-xxl-stretch {
                    align-items: stretch !important
                }

                .align-content-xxl-start {
                    align-content: flex-start !important
                }

                .align-content-xxl-end {
                    align-content: flex-end !important
                }

                .align-content-xxl-center {
                    align-content: center !important
                }

                .align-content-xxl-between {
                    align-content: space-between !important
                }

                .align-content-xxl-around {
                    align-content: space-around !important
                }

                .align-content-xxl-stretch {
                    align-content: stretch !important
                }

                .align-self-xxl-auto {
                    align-self: auto !important
                }

                .align-self-xxl-start {
                    align-self: flex-start !important
                }

                .align-self-xxl-end {
                    align-self: flex-end !important
                }

                .align-self-xxl-center {
                    align-self: center !important
                }

                .align-self-xxl-baseline {
                    align-self: baseline !important
                }

                .align-self-xxl-stretch {
                    align-self: stretch !important
                }

                .order-xxl-first {
                    order: -1 !important
                }

                .order-xxl-0 {
                    order: 0 !important
                }

                .order-xxl-1 {
                    order: 1 !important
                }

                .order-xxl-2 {
                    order: 2 !important
                }

                .order-xxl-3 {
                    order: 3 !important
                }

                .order-xxl-4 {
                    order: 4 !important
                }

                .order-xxl-5 {
                    order: 5 !important
                }

                .order-xxl-last {
                    order: 6 !important
                }

                .m-xxl-0 {
                    margin: 0 !important
                }

                .m-xxl-1 {
                    margin: .25rem !important
                }

                .m-xxl-2 {
                    margin: .5rem !important
                }

                .m-xxl-3 {
                    margin: 1rem !important
                }

                .m-xxl-4 {
                    margin: 1.5rem !important
                }

                .m-xxl-5 {
                    margin: 3rem !important
                }

                .m-xxl-auto {
                    margin: auto !important
                }

                .mx-xxl-0 {
                    margin-right: 0 !important;
                    margin-left: 0 !important
                }

                .mx-xxl-1 {
                    margin-right: .25rem !important;
                    margin-left: .25rem !important
                }

                .mx-xxl-2 {
                    margin-right: .5rem !important;
                    margin-left: .5rem !important
                }

                .mx-xxl-3 {
                    margin-right: 1rem !important;
                    margin-left: 1rem !important
                }

                .mx-xxl-4 {
                    margin-right: 1.5rem !important;
                    margin-left: 1.5rem !important
                }

                .mx-xxl-5 {
                    margin-right: 3rem !important;
                    margin-left: 3rem !important
                }

                .mx-xxl-auto {
                    margin-right: auto !important;
                    margin-left: auto !important
                }

                .my-xxl-0 {
                    margin-top: 0 !important;
                    margin-bottom: 0 !important
                }

                .my-xxl-1 {
                    margin-top: .25rem !important;
                    margin-bottom: .25rem !important
                }

                .my-xxl-2 {
                    margin-top: .5rem !important;
                    margin-bottom: .5rem !important
                }

                .my-xxl-3 {
                    margin-top: 1rem !important;
                    margin-bottom: 1rem !important
                }

                .my-xxl-4 {
                    margin-top: 1.5rem !important;
                    margin-bottom: 1.5rem !important
                }

                .my-xxl-5 {
                    margin-top: 3rem !important;
                    margin-bottom: 3rem !important
                }

                .my-xxl-auto {
                    margin-top: auto !important;
                    margin-bottom: auto !important
                }

                .mt-xxl-0 {
                    margin-top: 0 !important
                }

                .mt-xxl-1 {
                    margin-top: .25rem !important
                }

                .mt-xxl-2 {
                    margin-top: .5rem !important
                }

                .mt-xxl-3 {
                    margin-top: 1rem !important
                }

                .mt-xxl-4 {
                    margin-top: 1.5rem !important
                }

                .mt-xxl-5 {
                    margin-top: 3rem !important
                }

                .mt-xxl-auto {
                    margin-top: auto !important
                }

                .me-xxl-0 {
                    margin-right: 0 !important
                }

                .me-xxl-1 {
                    margin-right: .25rem !important
                }

                .me-xxl-2 {
                    margin-right: .5rem !important
                }

                .me-xxl-3 {
                    margin-right: 1rem !important
                }

                .me-xxl-4 {
                    margin-right: 1.5rem !important
                }

                .me-xxl-5 {
                    margin-right: 3rem !important
                }

                .me-xxl-auto {
                    margin-right: auto !important
                }

                .mb-xxl-0 {
                    margin-bottom: 0 !important
                }

                .mb-xxl-1 {
                    margin-bottom: .25rem !important
                }

                .mb-xxl-2 {
                    margin-bottom: .5rem !important
                }

                .mb-xxl-3 {
                    margin-bottom: 1rem !important
                }

                .mb-xxl-4 {
                    margin-bottom: 1.5rem !important
                }

                .mb-xxl-5 {
                    margin-bottom: 3rem !important
                }

                .mb-xxl-auto {
                    margin-bottom: auto !important
                }

                .ms-xxl-0 {
                    margin-left: 0 !important
                }

                .ms-xxl-1 {
                    margin-left: .25rem !important
                }

                .ms-xxl-2 {
                    margin-left: .5rem !important
                }

                .ms-xxl-3 {
                    margin-left: 1rem !important
                }

                .ms-xxl-4 {
                    margin-left: 1.5rem !important
                }

                .ms-xxl-5 {
                    margin-left: 3rem !important
                }

                .ms-xxl-auto {
                    margin-left: auto !important
                }

                .m-xxl-n1 {
                    margin: -.25rem !important
                }

                .m-xxl-n2 {
                    margin: -.5rem !important
                }

                .m-xxl-n3 {
                    margin: -1rem !important
                }

                .m-xxl-n4 {
                    margin: -1.5rem !important
                }

                .m-xxl-n5 {
                    margin: -3rem !important
                }

                .mx-xxl-n1 {
                    margin-right: -.25rem !important;
                    margin-left: -.25rem !important
                }

                .mx-xxl-n2 {
                    margin-right: -.5rem !important;
                    margin-left: -.5rem !important
                }

                .mx-xxl-n3 {
                    margin-right: -1rem !important;
                    margin-left: -1rem !important
                }

                .mx-xxl-n4 {
                    margin-right: -1.5rem !important;
                    margin-left: -1.5rem !important
                }

                .mx-xxl-n5 {
                    margin-right: -3rem !important;
                    margin-left: -3rem !important
                }

                .my-xxl-n1 {
                    margin-top: -.25rem !important;
                    margin-bottom: -.25rem !important
                }

                .my-xxl-n2 {
                    margin-top: -.5rem !important;
                    margin-bottom: -.5rem !important
                }

                .my-xxl-n3 {
                    margin-top: -1rem !important;
                    margin-bottom: -1rem !important
                }

                .my-xxl-n4 {
                    margin-top: -1.5rem !important;
                    margin-bottom: -1.5rem !important
                }

                .my-xxl-n5 {
                    margin-top: -3rem !important;
                    margin-bottom: -3rem !important
                }

                .mt-xxl-n1 {
                    margin-top: -.25rem !important
                }

                .mt-xxl-n2 {
                    margin-top: -.5rem !important
                }

                .mt-xxl-n3 {
                    margin-top: -1rem !important
                }

                .mt-xxl-n4 {
                    margin-top: -1.5rem !important
                }

                .mt-xxl-n5 {
                    margin-top: -3rem !important
                }

                .me-xxl-n1 {
                    margin-right: -.25rem !important
                }

                .me-xxl-n2 {
                    margin-right: -.5rem !important
                }

                .me-xxl-n3 {
                    margin-right: -1rem !important
                }

                .me-xxl-n4 {
                    margin-right: -1.5rem !important
                }

                .me-xxl-n5 {
                    margin-right: -3rem !important
                }

                .mb-xxl-n1 {
                    margin-bottom: -.25rem !important
                }

                .mb-xxl-n2 {
                    margin-bottom: -.5rem !important
                }

                .mb-xxl-n3 {
                    margin-bottom: -1rem !important
                }

                .mb-xxl-n4 {
                    margin-bottom: -1.5rem !important
                }

                .mb-xxl-n5 {
                    margin-bottom: -3rem !important
                }

                .ms-xxl-n1 {
                    margin-left: -.25rem !important
                }

                .ms-xxl-n2 {
                    margin-left: -.5rem !important
                }

                .ms-xxl-n3 {
                    margin-left: -1rem !important
                }

                .ms-xxl-n4 {
                    margin-left: -1.5rem !important
                }

                .ms-xxl-n5 {
                    margin-left: -3rem !important
                }

                .p-xxl-0 {
                    padding: 0 !important
                }

                .p-xxl-1 {
                    padding: .25rem !important
                }

                .p-xxl-2 {
                    padding: .5rem !important
                }

                .p-xxl-3 {
                    padding: 1rem !important
                }

                .p-xxl-4 {
                    padding: 1.5rem !important
                }

                .p-xxl-5 {
                    padding: 3rem !important
                }

                .px-xxl-0 {
                    padding-right: 0 !important;
                    padding-left: 0 !important
                }

                .px-xxl-1 {
                    padding-right: .25rem !important;
                    padding-left: .25rem !important
                }

                .px-xxl-2 {
                    padding-right: .5rem !important;
                    padding-left: .5rem !important
                }

                .px-xxl-3 {
                    padding-right: 1rem !important;
                    padding-left: 1rem !important
                }

                .px-xxl-4 {
                    padding-right: 1.5rem !important;
                    padding-left: 1.5rem !important
                }

                .px-xxl-5 {
                    padding-right: 3rem !important;
                    padding-left: 3rem !important
                }

                .py-xxl-0 {
                    padding-top: 0 !important;
                    padding-bottom: 0 !important
                }

                .py-xxl-1 {
                    padding-top: .25rem !important;
                    padding-bottom: .25rem !important
                }

                .py-xxl-2 {
                    padding-top: .5rem !important;
                    padding-bottom: .5rem !important
                }

                .py-xxl-3 {
                    padding-top: 1rem !important;
                    padding-bottom: 1rem !important
                }

                .py-xxl-4 {
                    padding-top: 1.5rem !important;
                    padding-bottom: 1.5rem !important
                }

                .py-xxl-5 {
                    padding-top: 3rem !important;
                    padding-bottom: 3rem !important
                }

                .pt-xxl-0 {
                    padding-top: 0 !important
                }

                .pt-xxl-1 {
                    padding-top: .25rem !important
                }

                .pt-xxl-2 {
                    padding-top: .5rem !important
                }

                .pt-xxl-3 {
                    padding-top: 1rem !important
                }

                .pt-xxl-4 {
                    padding-top: 1.5rem !important
                }

                .pt-xxl-5 {
                    padding-top: 3rem !important
                }

                .pe-xxl-0 {
                    padding-right: 0 !important
                }

                .pe-xxl-1 {
                    padding-right: .25rem !important
                }

                .pe-xxl-2 {
                    padding-right: .5rem !important
                }

                .pe-xxl-3 {
                    padding-right: 1rem !important
                }

                .pe-xxl-4 {
                    padding-right: 1.5rem !important
                }

                .pe-xxl-5 {
                    padding-right: 3rem !important
                }

                .pb-xxl-0 {
                    padding-bottom: 0 !important
                }

                .pb-xxl-1 {
                    padding-bottom: .25rem !important
                }

                .pb-xxl-2 {
                    padding-bottom: .5rem !important
                }

                .pb-xxl-3 {
                    padding-bottom: 1rem !important
                }

                .pb-xxl-4 {
                    padding-bottom: 1.5rem !important
                }

                .pb-xxl-5 {
                    padding-bottom: 3rem !important
                }

                .ps-xxl-0 {
                    padding-left: 0 !important
                }

                .ps-xxl-1 {
                    padding-left: .25rem !important
                }

                .ps-xxl-2 {
                    padding-left: .5rem !important
                }

                .ps-xxl-3 {
                    padding-left: 1rem !important
                }

                .ps-xxl-4 {
                    padding-left: 1.5rem !important
                }

                .ps-xxl-5 {
                    padding-left: 3rem !important
                }

                .gap-xxl-0 {
                    gap: 0 !important
                }

                .gap-xxl-1 {
                    gap: .25rem !important
                }

                .gap-xxl-2 {
                    gap: .5rem !important
                }

                .gap-xxl-3 {
                    gap: 1rem !important
                }

                .gap-xxl-4 {
                    gap: 1.5rem !important
                }

                .gap-xxl-5 {
                    gap: 3rem !important
                }

                .row-gap-xxl-0 {
                    row-gap: 0 !important
                }

                .row-gap-xxl-1 {
                    row-gap: .25rem !important
                }

                .row-gap-xxl-2 {
                    row-gap: .5rem !important
                }

                .row-gap-xxl-3 {
                    row-gap: 1rem !important
                }

                .row-gap-xxl-4 {
                    row-gap: 1.5rem !important
                }

                .row-gap-xxl-5 {
                    row-gap: 3rem !important
                }

                .column-gap-xxl-0 {
                    -moz-column-gap: 0 !important;
                    column-gap: 0 !important
                }

                .column-gap-xxl-1 {
                    -moz-column-gap: .25rem !important;
                    column-gap: .25rem !important
                }

                .column-gap-xxl-2 {
                    -moz-column-gap: .5rem !important;
                    column-gap: .5rem !important
                }

                .column-gap-xxl-3 {
                    -moz-column-gap: 1rem !important;
                    column-gap: 1rem !important
                }

                .column-gap-xxl-4 {
                    -moz-column-gap: 1.5rem !important;
                    column-gap: 1.5rem !important
                }

                .column-gap-xxl-5 {
                    -moz-column-gap: 3rem !important;
                    column-gap: 3rem !important
                }

            }

            @media (min-width: 1900px) {
                .float-xxxl-start {
                    float: left !important
                }

                .float-xxxl-end {
                    float: right !important
                }

                .float-xxxl-none {
                    float: none !important
                }

                .object-fit-xxxl-contain {
                    -o-object-fit: contain !important;
                    object-fit: contain !important
                }

                .object-fit-xxxl-cover {
                    -o-object-fit: cover !important;
                    object-fit: cover !important
                }

                .object-fit-xxxl-fill {
                    -o-object-fit: fill !important;
                    object-fit: fill !important
                }

                .object-fit-xxxl-scale {
                    -o-object-fit: scale-down !important;
                    object-fit: scale-down !important
                }

                .object-fit-xxxl-none {
                    -o-object-fit: none !important;
                    object-fit: none !important
                }

                .d-xxxl-inline {
                    display: inline !important
                }

                .d-xxxl-inline-block {
                    display: inline-block !important
                }

                .d-xxxl-block {
                    display: block !important
                }

                .d-xxxl-grid {
                    display: grid !important
                }

                .d-xxxl-inline-grid {
                    display: inline-grid !important
                }

                .d-xxxl-table {
                    display: table !important
                }

                .d-xxxl-table-row {
                    display: table-row !important
                }

                .d-xxxl-table-cell {
                    display: table-cell !important
                }

                .d-xxxl-flex {
                    display: flex !important
                }

                .d-xxxl-inline-flex {
                    display: inline-flex !important
                }

                .d-xxxl-none {
                    display: none !important
                }

                .flex-xxxl-fill {
                    flex: 1 1 auto !important
                }

                .flex-xxxl-row {
                    flex-direction: row !important
                }

                .flex-xxxl-column {
                    flex-direction: column !important
                }

                .flex-xxxl-row-reverse {
                    flex-direction: row-reverse !important
                }

                .flex-xxxl-column-reverse {
                    flex-direction: column-reverse !important
                }

                .flex-xxxl-grow-0 {
                    flex-grow: 0 !important
                }

                .flex-xxxl-grow-1 {
                    flex-grow: 1 !important
                }

                .flex-xxxl-shrink-0 {
                    flex-shrink: 0 !important
                }

                .flex-xxxl-shrink-1 {
                    flex-shrink: 1 !important
                }

                .flex-xxxl-wrap {
                    flex-wrap: wrap !important
                }

                .flex-xxxl-nowrap {
                    flex-wrap: nowrap !important
                }

                .flex-xxxl-wrap-reverse {
                    flex-wrap: wrap-reverse !important
                }

                .justify-content-xxxl-start {
                    justify-content: flex-start !important
                }

                .justify-content-xxxl-end {
                    justify-content: flex-end !important
                }

                .justify-content-xxxl-center {
                    justify-content: center !important
                }

                .justify-content-xxxl-between {
                    justify-content: space-between !important
                }

                .justify-content-xxxl-around {
                    justify-content: space-around !important
                }

                .justify-content-xxxl-evenly {
                    justify-content: space-evenly !important
                }

                .align-items-xxxl-start {
                    align-items: flex-start !important
                }

                .align-items-xxxl-end {
                    align-items: flex-end !important
                }

                .align-items-xxxl-center {
                    align-items: center !important
                }

                .align-items-xxxl-baseline {
                    align-items: baseline !important
                }

                .align-items-xxxl-stretch {
                    align-items: stretch !important
                }

                .align-content-xxxl-start {
                    align-content: flex-start !important
                }

                .align-content-xxxl-end {
                    align-content: flex-end !important
                }

                .align-content-xxxl-center {
                    align-content: center !important
                }

                .align-content-xxxl-between {
                    align-content: space-between !important
                }

                .align-content-xxxl-around {
                    align-content: space-around !important
                }

                .align-content-xxxl-stretch {
                    align-content: stretch !important
                }

                .align-self-xxxl-auto {
                    align-self: auto !important
                }

                .align-self-xxxl-start {
                    align-self: flex-start !important
                }

                .align-self-xxxl-end {
                    align-self: flex-end !important
                }

                .align-self-xxxl-center {
                    align-self: center !important
                }

                .align-self-xxxl-baseline {
                    align-self: baseline !important
                }

                .align-self-xxxl-stretch {
                    align-self: stretch !important
                }

                .order-xxxl-first {
                    order: -1 !important
                }

                .order-xxxl-0 {
                    order: 0 !important
                }

                .order-xxxl-1 {
                    order: 1 !important
                }

                .order-xxxl-2 {
                    order: 2 !important
                }

                .order-xxxl-3 {
                    order: 3 !important
                }

                .order-xxxl-4 {
                    order: 4 !important
                }

                .order-xxxl-5 {
                    order: 5 !important
                }

                .order-xxxl-last {
                    order: 6 !important
                }

                .m-xxxl-0 {
                    margin: 0 !important
                }

                .m-xxxl-1 {
                    margin: .25rem !important
                }

                .m-xxxl-2 {
                    margin: .5rem !important
                }

                .m-xxxl-3 {
                    margin: 1rem !important
                }

                .m-xxxl-4 {
                    margin: 1.5rem !important
                }

                .m-xxxl-5 {
                    margin: 3rem !important
                }

                .m-xxxl-auto {
                    margin: auto !important
                }

                .mx-xxxl-0 {
                    margin-right: 0 !important;
                    margin-left: 0 !important
                }

                .mx-xxxl-1 {
                    margin-right: .25rem !important;
                    margin-left: .25rem !important
                }

                .mx-xxxl-2 {
                    margin-right: .5rem !important;
                    margin-left: .5rem !important
                }

                .mx-xxxl-3 {
                    margin-right: 1rem !important;
                    margin-left: 1rem !important
                }

                .mx-xxxl-4 {
                    margin-right: 1.5rem !important;
                    margin-left: 1.5rem !important
                }

                .mx-xxxl-5 {
                    margin-right: 3rem !important;
                    margin-left: 3rem !important
                }

                .mx-xxxl-auto {
                    margin-right: auto !important;
                    margin-left: auto !important
                }

                .my-xxxl-0 {
                    margin-top: 0 !important;
                    margin-bottom: 0 !important
                }

                .my-xxxl-1 {
                    margin-top: .25rem !important;
                    margin-bottom: .25rem !important
                }

                .my-xxxl-2 {
                    margin-top: .5rem !important;
                    margin-bottom: .5rem !important
                }

                .my-xxxl-3 {
                    margin-top: 1rem !important;
                    margin-bottom: 1rem !important
                }

                .my-xxxl-4 {
                    margin-top: 1.5rem !important;
                    margin-bottom: 1.5rem !important
                }

                .my-xxxl-5 {
                    margin-top: 3rem !important;
                    margin-bottom: 3rem !important
                }

                .my-xxxl-auto {
                    margin-top: auto !important;
                    margin-bottom: auto !important
                }

                .mt-xxxl-0 {
                    margin-top: 0 !important
                }

                .mt-xxxl-1 {
                    margin-top: .25rem !important
                }

                .mt-xxxl-2 {
                    margin-top: .5rem !important
                }

                .mt-xxxl-3 {
                    margin-top: 1rem !important
                }

                .mt-xxxl-4 {
                    margin-top: 1.5rem !important
                }

                .mt-xxxl-5 {
                    margin-top: 3rem !important
                }

                .mt-xxxl-auto {
                    margin-top: auto !important
                }

                .me-xxxl-0 {
                    margin-right: 0 !important
                }

                .me-xxxl-1 {
                    margin-right: .25rem !important
                }

                .me-xxxl-2 {
                    margin-right: .5rem !important
                }

                .me-xxxl-3 {
                    margin-right: 1rem !important
                }

                .me-xxxl-4 {
                    margin-right: 1.5rem !important
                }

                .me-xxxl-5 {
                    margin-right: 3rem !important
                }

                .me-xxxl-auto {
                    margin-right: auto !important
                }

                .mb-xxxl-0 {
                    margin-bottom: 0 !important
                }

                .mb-xxxl-1 {
                    margin-bottom: .25rem !important
                }

                .mb-xxxl-2 {
                    margin-bottom: .5rem !important
                }

                .mb-xxxl-3 {
                    margin-bottom: 1rem !important
                }

                .mb-xxxl-4 {
                    margin-bottom: 1.5rem !important
                }

                .mb-xxxl-5 {
                    margin-bottom: 3rem !important
                }

                .mb-xxxl-auto {
                    margin-bottom: auto !important
                }

                .ms-xxxl-0 {
                    margin-left: 0 !important
                }

                .ms-xxxl-1 {
                    margin-left: .25rem !important
                }

                .ms-xxxl-2 {
                    margin-left: .5rem !important
                }

                .ms-xxxl-3 {
                    margin-left: 1rem !important
                }

                .ms-xxxl-4 {
                    margin-left: 1.5rem !important
                }

                .ms-xxxl-5 {
                    margin-left: 3rem !important
                }

                .ms-xxxl-auto {
                    margin-left: auto !important
                }

                .m-xxxl-n1 {
                    margin: -.25rem !important
                }

                .m-xxxl-n2 {
                    margin: -.5rem !important
                }

                .m-xxxl-n3 {
                    margin: -1rem !important
                }

                .m-xxxl-n4 {
                    margin: -1.5rem !important
                }

                .m-xxxl-n5 {
                    margin: -3rem !important
                }

                .mx-xxxl-n1 {
                    margin-right: -.25rem !important;
                    margin-left: -.25rem !important
                }

                .mx-xxxl-n2 {
                    margin-right: -.5rem !important;
                    margin-left: -.5rem !important
                }

                .mx-xxxl-n3 {
                    margin-right: -1rem !important;
                    margin-left: -1rem !important
                }

                .mx-xxxl-n4 {
                    margin-right: -1.5rem !important;
                    margin-left: -1.5rem !important
                }

                .mx-xxxl-n5 {
                    margin-right: -3rem !important;
                    margin-left: -3rem !important
                }

                .my-xxxl-n1 {
                    margin-top: -.25rem !important;
                    margin-bottom: -.25rem !important
                }

                .my-xxxl-n2 {
                    margin-top: -.5rem !important;
                    margin-bottom: -.5rem !important
                }

                .my-xxxl-n3 {
                    margin-top: -1rem !important;
                    margin-bottom: -1rem !important
                }

                .my-xxxl-n4 {
                    margin-top: -1.5rem !important;
                    margin-bottom: -1.5rem !important
                }

                .my-xxxl-n5 {
                    margin-top: -3rem !important;
                    margin-bottom: -3rem !important
                }

                .mt-xxxl-n1 {
                    margin-top: -.25rem !important
                }

                .mt-xxxl-n2 {
                    margin-top: -.5rem !important
                }

                .mt-xxxl-n3 {
                    margin-top: -1rem !important
                }

                .mt-xxxl-n4 {
                    margin-top: -1.5rem !important
                }

                .mt-xxxl-n5 {
                    margin-top: -3rem !important
                }

                .me-xxxl-n1 {
                    margin-right: -.25rem !important
                }

                .me-xxxl-n2 {
                    margin-right: -.5rem !important
                }

                .me-xxxl-n3 {
                    margin-right: -1rem !important
                }

                .me-xxxl-n4 {
                    margin-right: -1.5rem !important
                }

                .me-xxxl-n5 {
                    margin-right: -3rem !important
                }

                .mb-xxxl-n1 {
                    margin-bottom: -.25rem !important
                }

                .mb-xxxl-n2 {
                    margin-bottom: -.5rem !important
                }

                .mb-xxxl-n3 {
                    margin-bottom: -1rem !important
                }

                .mb-xxxl-n4 {
                    margin-bottom: -1.5rem !important
                }

                .mb-xxxl-n5 {
                    margin-bottom: -3rem !important
                }

                .ms-xxxl-n1 {
                    margin-left: -.25rem !important
                }

                .ms-xxxl-n2 {
                    margin-left: -.5rem !important
                }

                .ms-xxxl-n3 {
                    margin-left: -1rem !important
                }

                .ms-xxxl-n4 {
                    margin-left: -1.5rem !important
                }

                .ms-xxxl-n5 {
                    margin-left: -3rem !important
                }

                .p-xxxl-0 {
                    padding: 0 !important
                }

                .p-xxxl-1 {
                    padding: .25rem !important
                }

                .p-xxxl-2 {
                    padding: .5rem !important
                }

                .p-xxxl-3 {
                    padding: 1rem !important
                }

                .p-xxxl-4 {
                    padding: 1.5rem !important
                }

                .p-xxxl-5 {
                    padding: 3rem !important
                }

                .px-xxxl-0 {
                    padding-right: 0 !important;
                    padding-left: 0 !important
                }

                .px-xxxl-1 {
                    padding-right: .25rem !important;
                    padding-left: .25rem !important
                }

                .px-xxxl-2 {
                    padding-right: .5rem !important;
                    padding-left: .5rem !important
                }

                .px-xxxl-3 {
                    padding-right: 1rem !important;
                    padding-left: 1rem !important
                }

                .px-xxxl-4 {
                    padding-right: 1.5rem !important;
                    padding-left: 1.5rem !important
                }

                .px-xxxl-5 {
                    padding-right: 3rem !important;
                    padding-left: 3rem !important
                }

                .py-xxxl-0 {
                    padding-top: 0 !important;
                    padding-bottom: 0 !important
                }

                .py-xxxl-1 {
                    padding-top: .25rem !important;
                    padding-bottom: .25rem !important
                }

                .py-xxxl-2 {
                    padding-top: .5rem !important;
                    padding-bottom: .5rem !important
                }

                .py-xxxl-3 {
                    padding-top: 1rem !important;
                    padding-bottom: 1rem !important
                }

                .py-xxxl-4 {
                    padding-top: 1.5rem !important;
                    padding-bottom: 1.5rem !important
                }

                .py-xxxl-5 {
                    padding-top: 3rem !important;
                    padding-bottom: 3rem !important
                }

                .pt-xxxl-0 {
                    padding-top: 0 !important
                }

                .pt-xxxl-1 {
                    padding-top: .25rem !important
                }

                .pt-xxxl-2 {
                    padding-top: .5rem !important
                }

                .pt-xxxl-3 {
                    padding-top: 1rem !important
                }

                .pt-xxxl-4 {
                    padding-top: 1.5rem !important
                }

                .pt-xxxl-5 {
                    padding-top: 3rem !important
                }

                .pe-xxxl-0 {
                    padding-right: 0 !important
                }

                .pe-xxxl-1 {
                    padding-right: .25rem !important
                }

                .pe-xxxl-2 {
                    padding-right: .5rem !important
                }

                .pe-xxxl-3 {
                    padding-right: 1rem !important
                }

                .pe-xxxl-4 {
                    padding-right: 1.5rem !important
                }

                .pe-xxxl-5 {
                    padding-right: 3rem !important
                }

                .pb-xxxl-0 {
                    padding-bottom: 0 !important
                }

                .pb-xxxl-1 {
                    padding-bottom: .25rem !important
                }

                .pb-xxxl-2 {
                    padding-bottom: .5rem !important
                }

                .pb-xxxl-3 {
                    padding-bottom: 1rem !important
                }

                .pb-xxxl-4 {
                    padding-bottom: 1.5rem !important
                }

                .pb-xxxl-5 {
                    padding-bottom: 3rem !important
                }

                .ps-xxxl-0 {
                    padding-left: 0 !important
                }

                .ps-xxxl-1 {
                    padding-left: .25rem !important
                }

                .ps-xxxl-2 {
                    padding-left: .5rem !important
                }

                .ps-xxxl-3 {
                    padding-left: 1rem !important
                }

                .ps-xxxl-4 {
                    padding-left: 1.5rem !important
                }

                .ps-xxxl-5 {
                    padding-left: 3rem !important
                }

                .gap-xxxl-0 {
                    gap: 0 !important
                }

                .gap-xxxl-1 {
                    gap: .25rem !important
                }

                .gap-xxxl-2 {
                    gap: .5rem !important
                }

                .gap-xxxl-3 {
                    gap: 1rem !important
                }

                .gap-xxxl-4 {
                    gap: 1.5rem !important
                }

                .gap-xxxl-5 {
                    gap: 3rem !important
                }

                .row-gap-xxxl-0 {
                    row-gap: 0 !important
                }

                .row-gap-xxxl-1 {
                    row-gap: .25rem !important
                }

                .row-gap-xxxl-2 {
                    row-gap: .5rem !important
                }

                .row-gap-xxxl-3 {
                    row-gap: 1rem !important
                }

                .row-gap-xxxl-4 {
                    row-gap: 1.5rem !important
                }

                .row-gap-xxxl-5 {
                    row-gap: 3rem !important
                }

                .column-gap-xxxl-0 {
                    -moz-column-gap: 0 !important;
                    column-gap: 0 !important
                }

                .column-gap-xxxl-1 {
                    -moz-column-gap: .25rem !important;
                    column-gap: .25rem !important
                }

                .column-gap-xxxl-2 {
                    -moz-column-gap: .5rem !important;
                    column-gap: .5rem !important
                }

                .column-gap-xxxl-3 {
                    -moz-column-gap: 1rem !important;
                    column-gap: 1rem !important
                }

                .column-gap-xxxl-4 {
                    -moz-column-gap: 1.5rem !important;
                    column-gap: 1.5rem !important
                }

                .column-gap-xxxl-5 {
                    -moz-column-gap: 3rem !important;
                    column-gap: 3rem !important
                }

            }

            @media (min-width: 1200px) {
                .fs-1 {
                    font-size: 2.1875rem !important
                }

                .fs-2 {
                    font-size: 1.75rem !important
                }

                .fs-3 {
                    font-size: 1.53125rem !important
                }

                .fs-4 {
                    font-size: 1.3125rem !important
                }
            }

            @media print {
                .d-print-inline {
                    display: inline !important
                }

                .d-print-inline-block {
                    display: inline-block !important
                }

                .d-print-block {
                    display: block !important
                }

                .d-print-grid {
                    display: grid !important
                }

                .d-print-inline-grid {
                    display: inline-grid !important
                }

                .d-print-table {
                    display: table !important
                }

                .d-print-table-row {
                    display: table-row !important
                }

                .d-print-table-cell {
                    display: table-cell !important
                }

                .d-print-flex {
                    display: flex !important
                }

                .d-print-inline-flex {
                    display: inline-flex !important
                }

                .d-print-none {
                    display: none !important
                }
            }

            .m-1px {
                margin: 1px !important
            }

            .m-2px {
                margin: 2px !important
            }

            .m-3px {
                margin: 3px !important
            }

            .m-4px {
                margin: 4px !important
            }

            .m-5px {
                margin: 5px !important
            }

            .m-6px {
                margin: 6px !important
            }

            .m-7px {
                margin: 7px !important
            }

            .m-8px {
                margin: 8px !important
            }

            .m-9px {
                margin: 9px !important
            }

            .m-10px {
                margin: 10px !important
            }

            .m-5px {
                margin: 5px !important
            }

            .m-10px {
                margin: 10px !important
            }

            .m-15px {
                margin: 15px !important
            }

            .m-20px {
                margin: 20px !important
            }

            .m-25px {
                margin: 25px !important
            }

            .m-30px {
                margin: 30px !important
            }

            .m-35px {
                margin: 35px !important
            }

            .m-40px {
                margin: 40px !important
            }

            .m-45px {
                margin: 45px !important
            }

            .m-50px {
                margin: 50px !important
            }

            .mt-1px {
                margin-top: 1px !important
            }

            .mt-2px {
                margin-top: 2px !important
            }

            .mt-3px {
                margin-top: 3px !important
            }

            .mt-4px {
                margin-top: 4px !important
            }

            .mt-5px {
                margin-top: 5px !important
            }

            .mt-6px {
                margin-top: 6px !important
            }

            .mt-7px {
                margin-top: 7px !important
            }

            .mt-8px {
                margin-top: 8px !important
            }

            .mt-9px {
                margin-top: 9px !important
            }

            .mt-10px {
                margin-top: 10px !important
            }

            .mt-5px {
                margin-top: 5px !important
            }

            .mt-10px {
                margin-top: 10px !important
            }

            .mt-15px {
                margin-top: 15px !important
            }

            .mt-20px {
                margin-top: 20px !important
            }

            .mt-25px {
                margin-top: 25px !important
            }

            .mt-30px {
                margin-top: 30px !important
            }

            .mt-35px {
                margin-top: 35px !important
            }

            .mt-40px {
                margin-top: 40px !important
            }

            .mt-45px {
                margin-top: 45px !important
            }

            .mt-50px {
                margin-top: 50px !important
            }

            .me-1px {
                margin-right: 1px !important
            }

            .me-2px {
                margin-right: 2px !important
            }

            .me-3px {
                margin-right: 3px !important
            }

            .me-4px {
                margin-right: 4px !important
            }

            .me-5px {
                margin-right: 5px !important
            }

            .me-6px {
                margin-right: 6px !important
            }

            .me-7px {
                margin-right: 7px !important
            }

            .me-8px {
                margin-right: 8px !important
            }

            .me-9px {
                margin-right: 9px !important
            }

            .me-10px {
                margin-right: 10px !important
            }

            .me-5px {
                margin-right: 5px !important
            }

            .me-10px {
                margin-right: 10px !important
            }

            .me-15px {
                margin-right: 15px !important
            }

            .me-20px {
                margin-right: 20px !important
            }

            .me-25px {
                margin-right: 25px !important
            }

            .me-30px {
                margin-right: 30px !important
            }

            .me-35px {
                margin-right: 35px !important
            }

            .me-40px {
                margin-right: 40px !important
            }

            .me-45px {
                margin-right: 45px !important
            }

            .me-50px {
                margin-right: 50px !important
            }

            .mb-1px {
                margin-bottom: 1px !important
            }

            .mb-2px {
                margin-bottom: 2px !important
            }

            .mb-3px {
                margin-bottom: 3px !important
            }

            .mb-4px {
                margin-bottom: 4px !important
            }

            .mb-5px {
                margin-bottom: 5px !important
            }

            .mb-6px {
                margin-bottom: 6px !important
            }

            .mb-7px {
                margin-bottom: 7px !important
            }

            .mb-8px {
                margin-bottom: 8px !important
            }

            .mb-9px {
                margin-bottom: 9px !important
            }

            .mb-10px {
                margin-bottom: 10px !important
            }

            .mb-5px {
                margin-bottom: 5px !important
            }

            .mb-10px {
                margin-bottom: 10px !important
            }

            .mb-15px {
                margin-bottom: 15px !important
            }

            .mb-20px {
                margin-bottom: 20px !important
            }

            .mb-25px {
                margin-bottom: 25px !important
            }

            .mb-30px {
                margin-bottom: 30px !important
            }

            .mb-35px {
                margin-bottom: 35px !important
            }

            .mb-40px {
                margin-bottom: 40px !important
            }

            .mb-45px {
                margin-bottom: 45px !important
            }

            .mb-50px {
                margin-bottom: 50px !important
            }

            .ms-1px {
                margin-left: 1px !important
            }

            .ms-2px {
                margin-left: 2px !important
            }

            .ms-3px {
                margin-left: 3px !important
            }

            .ms-4px {
                margin-left: 4px !important
            }

            .ms-5px {
                margin-left: 5px !important
            }

            .ms-6px {
                margin-left: 6px !important
            }

            .ms-7px {
                margin-left: 7px !important
            }

            .ms-8px {
                margin-left: 8px !important
            }

            .ms-9px {
                margin-left: 9px !important
            }

            .ms-10px {
                margin-left: 10px !important
            }

            .ms-5px {
                margin-left: 5px !important
            }

            .ms-10px {
                margin-left: 10px !important
            }

            .ms-15px {
                margin-left: 15px !important
            }

            .ms-20px {
                margin-left: 20px !important
            }

            .ms-25px {
                margin-left: 25px !important
            }

            .ms-30px {
                margin-left: 30px !important
            }

            .ms-35px {
                margin-left: 35px !important
            }

            .ms-40px {
                margin-left: 40px !important
            }

            .ms-45px {
                margin-left: 45px !important
            }

            .ms-50px {
                margin-left: 50px !important
            }

            .mx-1px {
                margin-left: 1px !important;
                margin-right: 1px !important
            }

            .mx-2px {
                margin-left: 2px !important;
                margin-right: 2px !important
            }

            .mx-3px {
                margin-left: 3px !important;
                margin-right: 3px !important
            }

            .mx-4px {
                margin-left: 4px !important;
                margin-right: 4px !important
            }

            .mx-5px {
                margin-left: 5px !important;
                margin-right: 5px !important
            }

            .mx-6px {
                margin-left: 6px !important;
                margin-right: 6px !important
            }

            .mx-7px {
                margin-left: 7px !important;
                margin-right: 7px !important
            }

            .mx-8px {
                margin-left: 8px !important;
                margin-right: 8px !important
            }

            .mx-9px {
                margin-left: 9px !important;
                margin-right: 9px !important
            }

            .mx-10px {
                margin-left: 10px !important;
                margin-right: 10px !important
            }

            .mx-5px {
                margin-left: 5px !important;
                margin-right: 5px !important
            }

            .mx-10px {
                margin-left: 10px !important;
                margin-right: 10px !important
            }

            .mx-15px {
                margin-left: 15px !important;
                margin-right: 15px !important
            }

            .mx-20px {
                margin-left: 20px !important;
                margin-right: 20px !important
            }

            .mx-25px {
                margin-left: 25px !important;
                margin-right: 25px !important
            }

            .mx-30px {
                margin-left: 30px !important;
                margin-right: 30px !important
            }

            .mx-35px {
                margin-left: 35px !important;
                margin-right: 35px !important
            }

            .mx-40px {
                margin-left: 40px !important;
                margin-right: 40px !important
            }

            .mx-45px {
                margin-left: 45px !important;
                margin-right: 45px !important
            }

            .mx-50px {
                margin-left: 50px !important;
                margin-right: 50px !important
            }

            .my-1px {
                margin-top: 1px !important;
                margin-bottom: 1px !important
            }

            .my-2px {
                margin-top: 2px !important;
                margin-bottom: 2px !important
            }

            .my-3px {
                margin-top: 3px !important;
                margin-bottom: 3px !important
            }

            .my-4px {
                margin-top: 4px !important;
                margin-bottom: 4px !important
            }

            .my-5px {
                margin-top: 5px !important;
                margin-bottom: 5px !important
            }

            .my-6px {
                margin-top: 6px !important;
                margin-bottom: 6px !important
            }

            .my-7px {
                margin-top: 7px !important;
                margin-bottom: 7px !important
            }

            .my-8px {
                margin-top: 8px !important;
                margin-bottom: 8px !important
            }

            .my-9px {
                margin-top: 9px !important;
                margin-bottom: 9px !important
            }

            .my-10px {
                margin-top: 10px !important;
                margin-bottom: 10px !important
            }

            .my-5px {
                margin-top: 5px !important;
                margin-bottom: 5px !important
            }

            .my-10px {
                margin-top: 10px !important;
                margin-bottom: 10px !important
            }

            .my-15px {
                margin-top: 15px !important;
                margin-bottom: 15px !important
            }

            .my-20px {
                margin-top: 20px !important;
                margin-bottom: 20px !important
            }

            .my-25px {
                margin-top: 25px !important;
                margin-bottom: 25px !important
            }

            .my-30px {
                margin-top: 30px !important;
                margin-bottom: 30px !important
            }

            .my-35px {
                margin-top: 35px !important;
                margin-bottom: 35px !important
            }

            .my-40px {
                margin-top: 40px !important;
                margin-bottom: 40px !important
            }

            .my-45px {
                margin-top: 45px !important;
                margin-bottom: 45px !important
            }

            .my-50px {
                margin-top: 50px !important;
                margin-bottom: 50px !important
            }

            .p-1px {
                padding: 1px !important
            }

            .p-2px {
                padding: 2px !important
            }

            .p-3px {
                padding: 3px !important
            }

            .p-4px {
                padding: 4px !important
            }

            .p-5px {
                padding: 5px !important
            }

            .p-6px {
                padding: 6px !important
            }

            .p-7px {
                padding: 7px !important
            }

            .p-8px {
                padding: 8px !important
            }

            .p-9px {
                padding: 9px !important
            }

            .p-10px {
                padding: 10px !important
            }

            .p-5px {
                padding: 5px !important
            }

            .p-10px {
                padding: 10px !important
            }

            .p-15px {
                padding: 15px !important
            }

            .p-20px {
                padding: 20px !important
            }

            .p-25px {
                padding: 25px !important
            }

            .p-30px {
                padding: 30px !important
            }

            .p-35px {
                padding: 35px !important
            }

            .p-40px {
                padding: 40px !important
            }

            .p-45px {
                padding: 45px !important
            }

            .p-50px {
                padding: 50px !important
            }

            .pt-1px {
                padding-top: 1px !important
            }

            .pt-2px {
                padding-top: 2px !important
            }

            .pt-3px {
                padding-top: 3px !important
            }

            .pt-4px {
                padding-top: 4px !important
            }

            .pt-5px {
                padding-top: 5px !important
            }

            .pt-6px {
                padding-top: 6px !important
            }

            .pt-7px {
                padding-top: 7px !important
            }

            .pt-8px {
                padding-top: 8px !important
            }

            .pt-9px {
                padding-top: 9px !important
            }

            .pt-10px {
                padding-top: 10px !important
            }

            .pt-5px {
                padding-top: 5px !important
            }

            .pt-10px {
                padding-top: 10px !important
            }

            .pt-15px {
                padding-top: 15px !important
            }

            .pt-20px {
                padding-top: 20px !important
            }

            .pt-25px {
                padding-top: 25px !important
            }

            .pt-30px {
                padding-top: 30px !important
            }

            .pt-35px {
                padding-top: 35px !important
            }

            .pt-40px {
                padding-top: 40px !important
            }

            .pt-45px {
                padding-top: 45px !important
            }

            .pt-50px {
                padding-top: 50px !important
            }

            .pe-1px {
                padding-right: 1px !important
            }

            .pe-2px {
                padding-right: 2px !important
            }

            .pe-3px {
                padding-right: 3px !important
            }

            .pe-4px {
                padding-right: 4px !important
            }

            .pe-5px {
                padding-right: 5px !important
            }

            .pe-6px {
                padding-right: 6px !important
            }

            .pe-7px {
                padding-right: 7px !important
            }

            .pe-8px {
                padding-right: 8px !important
            }

            .pe-9px {
                padding-right: 9px !important
            }

            .pe-10px {
                padding-right: 10px !important
            }

            .pe-5px {
                padding-right: 5px !important
            }

            .pe-10px {
                padding-right: 10px !important
            }

            .pe-15px {
                padding-right: 15px !important
            }

            .pe-20px {
                padding-right: 20px !important
            }

            .pe-25px {
                padding-right: 25px !important
            }

            .pe-30px {
                padding-right: 30px !important
            }

            .pe-35px {
                padding-right: 35px !important
            }

            .pe-40px {
                padding-right: 40px !important
            }

            .pe-45px {
                padding-right: 45px !important
            }

            .pe-50px {
                padding-right: 50px !important
            }

            .pb-1px {
                padding-bottom: 1px !important
            }

            .pb-2px {
                padding-bottom: 2px !important
            }

            .pb-3px {
                padding-bottom: 3px !important
            }

            .pb-4px {
                padding-bottom: 4px !important
            }

            .pb-5px {
                padding-bottom: 5px !important
            }

            .pb-6px {
                padding-bottom: 6px !important
            }

            .pb-7px {
                padding-bottom: 7px !important
            }

            .pb-8px {
                padding-bottom: 8px !important
            }

            .pb-9px {
                padding-bottom: 9px !important
            }

            .pb-10px {
                padding-bottom: 10px !important
            }

            .pb-5px {
                padding-bottom: 5px !important
            }

            .pb-10px {
                padding-bottom: 10px !important
            }

            .pb-15px {
                padding-bottom: 15px !important
            }

            .pb-20px {
                padding-bottom: 20px !important
            }

            .pb-25px {
                padding-bottom: 25px !important
            }

            .pb-30px {
                padding-bottom: 30px !important
            }

            .pb-35px {
                padding-bottom: 35px !important
            }

            .pb-40px {
                padding-bottom: 40px !important
            }

            .pb-45px {
                padding-bottom: 45px !important
            }

            .pb-50px {
                padding-bottom: 50px !important
            }

            .ps-1px {
                padding-left: 1px !important
            }

            .ps-2px {
                padding-left: 2px !important
            }

            .ps-3px {
                padding-left: 3px !important
            }

            .ps-4px {
                padding-left: 4px !important
            }

            .ps-5px {
                padding-left: 5px !important
            }

            .ps-6px {
                padding-left: 6px !important
            }

            .ps-7px {
                padding-left: 7px !important
            }

            .ps-8px {
                padding-left: 8px !important
            }

            .ps-9px {
                padding-left: 9px !important
            }

            .ps-10px {
                padding-left: 10px !important
            }

            .ps-5px {
                padding-left: 5px !important
            }

            .ps-10px {
                padding-left: 10px !important
            }

            .ps-15px {
                padding-left: 15px !important
            }

            .ps-20px {
                padding-left: 20px !important
            }

            .ps-25px {
                padding-left: 25px !important
            }

            .ps-30px {
                padding-left: 30px !important
            }

            .ps-35px {
                padding-left: 35px !important
            }

            .ps-40px {
                padding-left: 40px !important
            }

            .ps-45px {
                padding-left: 45px !important
            }

            .ps-50px {
                padding-left: 50px !important
            }

            .px-1px {
                padding-left: 1px !important;
                padding-right: 1px !important
            }

            .px-2px {
                padding-left: 2px !important;
                padding-right: 2px !important
            }

            .px-3px {
                padding-left: 3px !important;
                padding-right: 3px !important
            }

            .px-4px {
                padding-left: 4px !important;
                padding-right: 4px !important
            }

            .px-5px {
                padding-left: 5px !important;
                padding-right: 5px !important
            }

            .px-6px {
                padding-left: 6px !important;
                padding-right: 6px !important
            }

            .px-7px {
                padding-left: 7px !important;
                padding-right: 7px !important
            }

            .px-8px {
                padding-left: 8px !important;
                padding-right: 8px !important
            }

            .px-9px {
                padding-left: 9px !important;
                padding-right: 9px !important
            }

            .px-10px {
                padding-left: 10px !important;
                padding-right: 10px !important
            }

            .px-5px {
                padding-left: 5px !important;
                padding-right: 5px !important
            }

            .px-10px {
                padding-left: 10px !important;
                padding-right: 10px !important
            }

            .px-15px {
                padding-left: 15px !important;
                padding-right: 15px !important
            }

            .px-20px {
                padding-left: 20px !important;
                padding-right: 20px !important
            }

            .px-25px {
                padding-left: 25px !important;
                padding-right: 25px !important
            }

            .px-30px {
                padding-left: 30px !important;
                padding-right: 30px !important
            }

            .px-35px {
                padding-left: 35px !important;
                padding-right: 35px !important
            }

            .px-40px {
                padding-left: 40px !important;
                padding-right: 40px !important
            }

            .px-45px {
                padding-left: 45px !important;
                padding-right: 45px !important
            }

            .px-50px {
                padding-left: 50px !important;
                padding-right: 50px !important
            }

            .py-1px {
                padding-top: 1px !important;
                padding-bottom: 1px !important
            }

            .py-2px {
                padding-top: 2px !important;
                padding-bottom: 2px !important
            }

            .py-3px {
                padding-top: 3px !important;
                padding-bottom: 3px !important
            }

            .py-4px {
                padding-top: 4px !important;
                padding-bottom: 4px !important
            }

            .py-5px {
                padding-top: 5px !important;
                padding-bottom: 5px !important
            }

            .py-6px {
                padding-top: 6px !important;
                padding-bottom: 6px !important
            }

            .py-7px {
                padding-top: 7px !important;
                padding-bottom: 7px !important
            }

            .py-8px {
                padding-top: 8px !important;
                padding-bottom: 8px !important
            }

            .py-9px {
                padding-top: 9px !important;
                padding-bottom: 9px !important
            }

            .py-10px {
                padding-top: 10px !important;
                padding-bottom: 10px !important
            }

            .py-5px {
                padding-top: 5px !important;
                padding-bottom: 5px !important
            }

            .py-10px {
                padding-top: 10px !important;
                padding-bottom: 10px !important
            }

            .py-15px {
                padding-top: 15px !important;
                padding-bottom: 15px !important
            }

            .py-20px {
                padding-top: 20px !important;
                padding-bottom: 20px !important
            }

            .py-25px {
                padding-top: 25px !important;
                padding-bottom: 25px !important
            }

            .py-30px {
                padding-top: 30px !important;
                padding-bottom: 30px !important
            }

            .py-35px {
                padding-top: 35px !important;
                padding-bottom: 35px !important
            }

            .py-40px {
                padding-top: 40px !important;
                padding-bottom: 40px !important
            }

            .py-45px {
                padding-top: 45px !important;
                padding-bottom: 45px !important
            }

            .py-50px {
                padding-top: 50px !important;
                padding-bottom: 50px !important
            }

            .fs-0px {
                font-size: 0 !important
            }

            .fs-1px {
                font-size: 1px !important
            }

            .fs-2px {
                font-size: 2px !important
            }

            .fs-3px {
                font-size: 3px !important
            }

            .fs-4px {
                font-size: 4px !important
            }

            .fs-5px {
                font-size: 5px !important
            }

            .fs-6px {
                font-size: 6px !important
            }

            .fs-7px {
                font-size: 7px !important
            }

            .fs-8px {
                font-size: 8px !important
            }

            .fs-9px {
                font-size: 9px !important
            }

            .fs-10px {
                font-size: 10px !important
            }

            .fs-11px {
                font-size: 11px !important
            }

            .fs-12px {
                font-size: 12px !important
            }

            .fs-13px {
                font-size: 13px !important
            }

            .fs-14px {
                font-size: 14px !important
            }

            .fs-15px {
                font-size: 15px !important
            }

            .fs-16px {
                font-size: 16px !important
            }

            .fs-17px {
                font-size: 17px !important
            }

            .fs-18px {
                font-size: 18px !important
            }

            .fs-19px {
                font-size: 19px !important
            }

            .fs-20px {
                font-size: 20px !important
            }

            .fs-21px {
                font-size: 21px !important
            }

            .fs-22px {
                font-size: 22px !important
            }

            .fs-23px {
                font-size: 23px !important
            }

            .fs-24px {
                font-size: 24px !important
            }

            .fs-25px {
                font-size: 25px !important
            }

            .fs-26px {
                font-size: 26px !important
            }

            .fs-27px {
                font-size: 27px !important
            }

            .fs-28px {
                font-size: 28px !important
            }

            .fs-29px {
                font-size: 29px !important
            }

            .fs-30px {
                font-size: 30px !important
            }

            .fs-31px {
                font-size: 31px !important
            }

            .fs-32px {
                font-size: 32px !important
            }

            .fs-33px {
                font-size: 33px !important
            }

            .fs-34px {
                font-size: 34px !important
            }

            .fs-35px {
                font-size: 35px !important
            }

            .fs-36px {
                font-size: 36px !important
            }

            .fs-37px {
                font-size: 37px !important
            }

            .fs-38px {
                font-size: 38px !important
            }

            .fs-39px {
                font-size: 39px !important
            }

            .fs-40px {
                font-size: 40px !important
            }

            .fs-41px {
                font-size: 41px !important
            }

            .fs-42px {
                font-size: 42px !important
            }

            .fs-43px {
                font-size: 43px !important
            }

            .fs-44px {
                font-size: 44px !important
            }

            .fs-45px {
                font-size: 45px !important
            }

            .fs-46px {
                font-size: 46px !important
            }

            .fs-47px {
                font-size: 47px !important
            }

            .fs-48px {
                font-size: 48px !important
            }

            .fs-49px {
                font-size: 49px !important
            }

            .fs-50px {
                font-size: 50px !important
            }

            .fs-51px {
                font-size: 51px !important
            }

            .fs-52px {
                font-size: 52px !important
            }

            .fs-53px {
                font-size: 53px !important
            }

            .fs-54px {
                font-size: 54px !important
            }

            .fs-55px {
                font-size: 55px !important
            }

            .fs-56px {
                font-size: 56px !important
            }

            .fs-57px {
                font-size: 57px !important
            }

            .fs-58px {
                font-size: 58px !important
            }

            .fs-59px {
                font-size: 59px !important
            }

            .fs-60px {
                font-size: 60px !important
            }

            .fs-61px {
                font-size: 61px !important
            }

            .fs-62px {
                font-size: 62px !important
            }

            .fs-63px {
                font-size: 63px !important
            }

            .fs-64px {
                font-size: 64px !important
            }

            .fs-65px {
                font-size: 65px !important
            }

            .fs-66px {
                font-size: 66px !important
            }

            .fs-67px {
                font-size: 67px !important
            }

            .fs-68px {
                font-size: 68px !important
            }

            .fs-69px {
                font-size: 69px !important
            }

            .fs-70px {
                font-size: 70px !important
            }

            .fs-71px {
                font-size: 71px !important
            }

            .fs-72px {
                font-size: 72px !important
            }

            .fs-73px {
                font-size: 73px !important
            }

            .fs-74px {
                font-size: 74px !important
            }

            .fs-75px {
                font-size: 75px !important
            }

            .fs-76px {
                font-size: 76px !important
            }

            .fs-77px {
                font-size: 77px !important
            }

            .fs-78px {
                font-size: 78px !important
            }

            .fs-79px {
                font-size: 79px !important
            }

            .fs-80px {
                font-size: 80px !important
            }

            .fw-100 {
                font-weight: 100 !important
            }

            .fw-200 {
                font-weight: 200 !important
            }

            .fw-300 {
                font-weight: 300 !important
            }

            .fw-400 {
                font-weight: 400 !important
            }

            .fw-500 {
                font-weight: 500 !important
            }

            .fw-600 {
                font-weight: 600 !important
            }

            .fw-700 {
                font-weight: 700 !important
            }

            .fw-800 {
                font-weight: 800 !important
            }

            .top-auto {
                top: auto !important
            }

            .bottom-auto {
                bottom: auto !important
            }

            .start-auto {
                left: auto !important
            }

            .end-auto {
                right: auto !important
            }


            .w-5px {
                width: 5px !important
            }

            .w-1px {
                width: 1px !important
            }

            .w-10px {
                width: 10px !important
            }

            .w-2px {
                width: 2px !important
            }

            .w-15px {
                width: 15px !important
            }

            .w-3px {
                width: 3px !important
            }

            .w-20px {
                width: 20px !important
            }

            .w-4px {
                width: 4px !important
            }

            .w-25px {
                width: 25px !important
            }

            .w-5px {
                width: 5px !important
            }

            .w-30px {
                width: 30px !important
            }

            .w-6px {
                width: 6px !important
            }

            .w-35px {
                width: 35px !important
            }

            .w-7px {
                width: 7px !important
            }

            .w-40px {
                width: 40px !important
            }

            .w-8px {
                width: 8px !important
            }

            .w-45px {
                width: 45px !important
            }

            .w-9px {
                width: 9px !important
            }

            .w-50px {
                width: 50px !important
            }

            .w-10px {
                width: 10px !important
            }

            .w-55px {
                width: 55px !important
            }

            .w-11px {
                width: 11px !important
            }

            .w-60px {
                width: 60px !important
            }

            .w-12px {
                width: 12px !important
            }

            .w-65px {
                width: 65px !important
            }

            .w-13px {
                width: 13px !important
            }

            .w-70px {
                width: 70px !important
            }

            .w-14px {
                width: 14px !important
            }

            .w-75px {
                width: 75px !important
            }

            .w-15px {
                width: 15px !important
            }

            .w-80px {
                width: 80px !important
            }

            .w-16px {
                width: 16px !important
            }

            .w-85px {
                width: 85px !important
            }

            .w-17px {
                width: 17px !important
            }

            .w-90px {
                width: 90px !important
            }

            .w-18px {
                width: 18px !important
            }

            .w-95px {
                width: 95px !important
            }

            .w-19px {
                width: 19px !important
            }

            .w-0px {
                width: 0 !important
            }

            .w-50px {
                width: 50px !important
            }

            .w-100px {
                width: 100px !important
            }

            .w-150px {
                width: 150px !important
            }

            .w-200px {
                width: 200px !important
            }

            .w-250px {
                width: 250px !important
            }

            .w-300px {
                width: 300px !important
            }

            .w-350px {
                width: 350px !important
            }

            .w-400px {
                width: 400px !important
            }

            .w-450px {
                width: 450px !important
            }

            .w-500px {
                width: 500px !important
            }

            .w-550px {
                width: 550px !important
            }

            .w-600px {
                width: 600px !important
            }

            .h-5px {
                height: 5px !important
            }

            .h-1px {
                height: 1px !important
            }

            .h-10px {
                height: 10px !important
            }

            .h-2px {
                height: 2px !important
            }

            .h-15px {
                height: 15px !important
            }

            .h-3px {
                height: 3px !important
            }

            .h-20px {
                height: 20px !important
            }

            .h-4px {
                height: 4px !important
            }

            .h-25px {
                height: 25px !important
            }

            .h-5px {
                height: 5px !important
            }

            .h-30px {
                height: 30px !important
            }

            .h-6px {
                height: 6px !important
            }

            .h-35px {
                height: 35px !important
            }

            .h-7px {
                height: 7px !important
            }

            .h-40px {
                height: 40px !important
            }

            .h-8px {
                height: 8px !important
            }

            .h-45px {
                height: 45px !important
            }

            .h-9px {
                height: 9px !important
            }

            .h-50px {
                height: 50px !important
            }

            .h-10px {
                height: 10px !important
            }

            .h-55px {
                height: 55px !important
            }

            .h-11px {
                height: 11px !important
            }

            .h-60px {
                height: 60px !important
            }

            .h-12px {
                height: 12px !important
            }

            .h-65px {
                height: 65px !important
            }

            .h-13px {
                height: 13px !important
            }

            .h-70px {
                height: 70px !important
            }

            .h-14px {
                height: 14px !important
            }

            .h-75px {
                height: 75px !important
            }

            .h-15px {
                height: 15px !important
            }

            .h-80px {
                height: 80px !important
            }

            .h-16px {
                height: 16px !important
            }

            .h-85px {
                height: 85px !important
            }

            .h-17px {
                height: 17px !important
            }

            .h-90px {
                height: 90px !important
            }

            .h-18px {
                height: 18px !important
            }

            .h-95px {
                height: 95px !important
            }

            .h-19px {
                height: 19px !important
            }

            .h-0px {
                height: 0 !important
            }

            .h-50px {
                height: 50px !important
            }

            .h-100px {
                height: 100px !important
            }

            .h-150px {
                height: 150px !important
            }

            .h-200px {
                height: 200px !important
            }

            .h-250px {
                height: 250px !important
            }

            .h-300px {
                height: 300px !important
            }

            .h-350px {
                height: 350px !important
            }

            .h-400px {
                height: 400px !important
            }

            .h-450px {
                height: 450px !important
            }

            .h-500px {
                height: 500px !important
            }

            .h-550px {
                height: 550px !important
            }

            .h-600px {
                height: 600px !important
            }

            :root .theme-default, [data-bs-theme=light] .theme-default {
                --bs-theme: #FFFFFF !important;
                --bs-theme-rgb: 255, 255, 255 !important;
                --bs-theme-color: #000000 !important;
                --bs-theme-color-rgb: 0, 0, 0 !important;
                --bs-app-sidebar-link-active-color: #333333;
                --bs-link-color: #FFFFFF !important;
                --bs-theme-bg-subtle: white;
                --bs-app-sidebar-link-active-bg: rgba(var(--bs-theme-rgb), 0.15)
            }

            [data-bs-theme=dark] .theme-default {
                --bs-app-sidebar-link-active-color: white;
                --bs-app-sidebar-link-active-bg: rgba(var(--bs-theme-rgb), 0.5);
                --bs-theme-bg-subtle: #333333
            }


            .theme-default .btn-theme, .theme-default.btn-theme {
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


            .bg-default-100 {
                --bs-bg-opacity: 1;
                background-color: rgba(255, 255, 255, var(--bs-bg-opacity)) !important
            }


            .bg-default-600 {
                --bs-bg-opacity: 1;
                background-color: rgba(204, 204, 204, var(--bs-bg-opacity)) !important
            }


            .bg-default-200 {
                --bs-bg-opacity: 1;
                background-color: rgba(255, 255, 255, var(--bs-bg-opacity)) !important
            }


            .bg-default-700 {
                --bs-bg-opacity: 1;
                background-color: rgba(153, 153, 153, var(--bs-bg-opacity)) !important
            }

            .bg-default-300 {
                --bs-bg-opacity: 1;
                background-color: rgba(255, 255, 255, var(--bs-bg-opacity)) !important
            }


            .bg-default-800 {
                --bs-bg-opacity: 1;
                background-color: rgba(102, 102, 102, var(--bs-bg-opacity)) !important
            }


            .bg-default-400 {
                --bs-bg-opacity: 1;
                background-color: rgba(255, 255, 255, var(--bs-bg-opacity)) !important
            }


            .bg-default-900 {
                a
                --bs-bg-opacity: 1;
                background-color: rgba(51, 51, 51, var(--bs-bg-opacity)) !important
            }

            .border-theme {
                border-color: var(--bs-theme) !important
            }


        `}}var mt,ct,D;mt=j("l-feedback"),mt(ct=(D=class extends y{static get properties(){return{feedback:{type:String},"feedback-type":{type:String},width:{type:String},"label-align":{type:String},"left-margin":{type:String}}}render(){let t=this["label-align"]&&this["label-align"]==="left";const r={normal:g`<div class="valid-feedback">${this.feedback}</div>`,hint:g`<div class="form-group"><small class="form-hint form-text text-muted">${this.feedback}</small></div>`,error:g`<div class="invalid-feedback">${this.feedback}</div>`};return g`
            <div
                 style="
                    padding-left: calc(${this["left-margin"]} + ${t?"15px":"0px"})
                    ;width: ${this.width?this.width:"auto"}
                    ;display: flex;   
                "
            >
                ${r[this["feedback-type"]]}
                <p slot="count" class="textarea-count">
                    <span class="text-num">0</span><span class="text-num">/100</span>
                </p>
            </div>
        `}},D.styles=[Rt.styles,_`
                .input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
                    margin-left: calc(var(--bs-border-width) * -1);
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0
                }

                .valid-feedback {
                    //display: none;
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
                    //display: none;
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

            `],D));/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=e=>e??d;class Qt{static get styles(){return _`
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
        `}}class $ extends y{constructor(){super()}setSelector(t){this.selector=t}get getSelector(){return this.selector}getValue(){const t=this.shadowRoot.querySelector(this.selector);return t?t.value:null}setValue(t){const r=this.shadowRoot.querySelector(this.selector);r&&(r.value=t)}addEventListener(t,r,o){this.shadowRoot.querySelector(this.selector).addEventListener(t,r,o)}removeEventListener(t,r,o){this.shadowRoot.querySelector(this.selector).removeEventListener(t,r,o)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}attributeChangedCallback(t,r,o){super.attributeChangedCallback(t,r,o)}}$.styles=[Rt.styles,Qt.styles];var gt,xt,X;let ft=(gt=j("l-label-feed-container"),gt(xt=(X=class extends ${constructor(){super()}getByteLength(t){const r=t;let o,a=0,i=r.length;for(let n=0;n<i;n++)o=r.charAt(n),escape(o).length>4?a+=2:a++;return a}isValid(t,r,o){const a=new RegExp(r);return!t&&o?!1:!(a&&t&&!a.test(t))}createChangeHandler(t){if(typeof t=="string"&&parseInt(t)==t)return function(o){const a=o.target;let i=a.value,n=this.getByteLength(i);if(n>t){let l=i.length;for(;n>t&&l>0;)l--,n=this.getByteLength(i.substring(0,l));a.value=i.substring(0,l)}}}validate(){const t=this.getValue().trim(),o=this.shadowRoot.querySelector("l-label-feed-container").shadowRoot.querySelector("l-feedback"),a=this.shadowRoot.querySelector(this.selector),i=this.isValid(t,this.pattern,this.required),n=this["feedback-visible-type"];a.classList.toggle("is-invalid",!i),n!="visible"&&(o.setAttribute("hidden",!0),(i&&n=="valid"||!i&&n=="invalid")&&o.removeAttribute("hidden"))}checkValidity(){this.validate()}static get properties(){return{id:{type:String},class:{type:String},width:{type:String},required:{type:Boolean},feedback:{type:String},"feedback-type":{type:String},"feedback-visible-type":{type:String},label:{type:String},"label-align":{type:String},"label-width":{type:String},"label-text-align":{type:String}}}render(){let t=this["label-align"]&&this["label-align"]==="left";return g`
            <div
                    class="${this.class}"
                    style="width: ${this.width?this.width:"auto"}"
            >
                <div
                        class="${q({container:t})}"
                >
                    <l-label
                            label="${s(this.label)}"
                            id="${this.id}"
                            label-align="${s(this["label-align"])}"
                            label-width="${s(this["label-width"])}"
                            label-text-align="${s(this["label-text-align"])}"
                            required="${s(this.required)}"
                    >
                    </l-label>
                    <slot name="input"></slot>
                    <slot name="count"></slot>
                </div>

            </div>

            <l-feedback
                    feedback="${s(this.feedback)}"
                    feedback-type="${s(this["feedback-type"])}"
                    width="${s(this.width)}"
                    label-align="${s(this["label-align"])}"
                    left-margin="${s(this["label-width"])}"
                    ?hidden="${this["feedback-visible-type"]!=="visible"}"
            >
                

            </l-feedback>
        `}},X.styles=[...$.styles,_`
              .container {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
              }
            `],X))||xt);var vt,ht,Y;vt=j("l-c-input"),vt(ht=(Y=class extends ft{constructor(){super(),super.setSelector("input")}disconnectedCallback(){super.disconnectedCallback(),this.observer.disconnect()}static get properties(){return{type:{type:String},name:{type:String},size:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},value:{type:String},pattern:{type:String},placeholder:{type:String},maxlength:{type:String},minlength:{type:String},"valid-length-type":{type:String}}}render(){let t=this["label-align"]&&this["label-align"]==="left",r=this.type==="search"&&!this.disabled&&!this.readonly;return g`
            <l-label-feed-container
                    width="${s(this.width)}"
                    id="${this.id}"
                    label="${s(this.label)}"
                    label-align="${s(this["label-align"])}"
                    label-width="${s(this["label-width"])}"
                    label-text-align="${s(this["label-text-align"])}"
                    required="${s(this.required)}"
                    feedback="${s(this.feedback)}"
                    feedback-type="${s(this["feedback-type"])}"
                    feedback-visible-type="${s(this["feedback-visible-type"])}"
            >
                <div slot="input" class="search-input-container">
                    <input
                            type="${this.type==="planText"?"text":this.type}"
                            class="${q({"form-control":!0,"form-left-control":t,"form-control-plaintext":this.type==="planText","form-control-lg":this.size==="large","form-control-sm":this.size==="small","search-input-left":r,"has-icon":r})}"
                            id="${s(this.id)}"
                            name="${s(this.name)}"
                            maxlength="${(this["valid-length-type"]!="byte"?s(this.maxlength):null)??d}"
                            minlength="${(this["valid-length-type"]!="byte"?s(this.minlength):null)??d}"
                            ?required=${this.required}
                            ?disabled=${this.disabled}
                            ?readonly=${this.readonly}
                            placeholder="${s(this.placeholder)}"
                            pattern="${s(this.pattern)}"
                            value="${s(this.value)}"
                            @input="${o=>{var a;(a=this.shadowRoot.querySelector(".search-icon-right"))==null||a.classList.toggle("hidden",!o.target.value)}}"
                            @blur="${super.validate}"
                            @keyup="${(this["valid-length-type"]!="byte"?null:super.createChangeHandler(s(this.maxlength)))??d}"
                            
                    >
                </div>

            </l-label-feed-container>

        `}},Y.styles=[...ft.styles,_`
            .search-input-left {
                padding-left: 2rem; /* 아이콘 자리 확보 */
                background-color: #fff;
            }

            .search-input-left.has-icon {
                background-image: url('../../assets/svg/search-svgrepo-com.svg'); /* 아이콘 경로 */
                background-repeat: no-repeat;
                background-position: 0.5rem center; /* 아이콘 위치 */
                background-size: 16px 16px; /* 아이콘 크기 (적절히 조절) */
            }
            

            input::-webkit-search-cancel-button {
                -webkit-appearance: none;
                appearance: none;
                height: 16px;
                width: 16px;
                background-image: url('../../assets/svg/cancel2-svgrepo-com.svg'); /* 취소 아이콘 경로 */
                background-size: contain;
                cursor: pointer;
            }

            input::-ms-clear {
                width: 0;
                height: 0;
            }
        `],Y));var ut,wt,W;ut=j("l-checkbox"),ut(wt=(W=class extends ${constructor(){super(),super.setSelector("input")}static get properties(){return{size:{type:String},id:{type:String},class:{type:String},name:{type:String},width:{type:String},label:{type:String},"label-align":{type:String},checked:{type:Boolean},required:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},value:{type:String}}}_getCheckboxGroupData(t,r){r===void 0&&(r=!1);const o=this.getAttribute("name");return o?Array.from(document.querySelectorAll(`l-checkbox[name="${o}"]`)).map(a=>{const i=a.shadowRoot?a.shadowRoot.querySelector('input[type="checkbox"]'):a.querySelector('input[type="checkbox"]');return!i||r&&!i.checked?null:{id:a.id,value:t==="label"?a.getAttribute("label"):a.value}}).filter(Boolean):(console.warn("이 체크박스에는 name 속성이 없습니다."),[])}getCheckedTextsByNameGroup(){return this._getCheckboxGroupData("label",!0)}getCheckedValuesByNameGroup(){return this._getCheckboxGroupData("value",!0)}getTextsByNameGroup(){return this._getCheckboxGroupData("label",!1)}getValuesByNameGroup(){return this._getCheckboxGroupData("value",!1)}getText(){return this.getAttribute("label")||""}setText(t){if(typeof t!="string"){console.warn("setText의 인자는 문자열이어야 합니다.");return}this.setAttribute("label",t),this.requestUpdate()}isValid(t,r){if(!t&&r)return!1}validate(){const t=this.getValue().trim(),r=this.shadowRoot.querySelector(this.selector),o=this.isValid(t,this.required);r.classList.toggle("is-invalid",!o)}checkValidity(){this.validate()}render(){return g`
            <div
                    style="width: ${this.width?this.width:d}"
                    class="${q({"form-check":!0,"form-check-inline":!0,"form-control-lg":this.size==="large","form-control-sm":this.size==="small"})}">
                <input class="form-check-input"
                       type="checkbox"
                       value="${s(this.value)}"
                       id="${s(this.id)}"
                       name="${s(this.name)}"
                       ?required=${this.required}
                       ?checked=${this.checked}
                       ?disabled=${this.disabled}
                >
                <label class="form-check-label" for="${s(this.id)}">${s(this.label)}</label>
            </div>
        `}},W.styles=[...$.styles],W));var yt,kt;yt=j("l-radio"),yt(kt=class extends ${constructor(){super(),super.setSelector("input")}createRenderRoot(){return this}static get properties(){return{size:{type:String},id:{type:String},class:{type:String},name:{type:String},width:{type:String},label:{type:String},"label-align":{type:String},checked:{type:Boolean},required:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},value:{type:String}}}getValue(){const t=this.querySelector(this.selector);return t?t.value:null}setValue(t){const r=this.querySelector(this.selector);r&&(r.value=t)}getText(){return this.getAttribute("label")||""}setText(t){if(typeof t!="string"){console.warn("setText의 인자는 문자열이어야 합니다.");return}this.setAttribute("label",t),this.requestUpdate()}isValid(t,r){if(!t&&r)return!1}validate(){console.log("validate");const t=this.getValue().trim(),r=this.querySelector(this.selector),o=this.isValid(t,this.required);r.classList.toggle("is-invalid",!o)}checkValidity(){this.validate()}render(){return this["label-align"]&&this["label-align"],g`
            <div
                    style="width: ${this.width?this.width:d}"
                    class="${q({"form-check":!0,"form-check-inline":!0,"form-control-lg":this.size==="large","form-control-sm":this.size==="small"})}">
                <input class="form-check-input"
                       type="radio"
                       value="${s(this.value)}"
                       id="${s(this.id)}"
                       name="${s(this.name)}"
                       ?required=${this.required}
                       ?checked=${this.checked}
                       ?disabled=${this.disabled}
                >
                <label class="form-check-label" for="${s(this.id)}">${s(this.label)}</label>
            </div>
        `}});
