(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const b of s.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&o(b)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=globalThis,Ft=Ue.ShadowRoot&&(Ue.ShadyCSS===void 0||Ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,kt=Symbol(),Ot=new WeakMap;let kr=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==kt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ft&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=Ot.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Ot.set(e,t))}return t}toString(){return this.cssText}};const lo=r=>new kr(typeof r=="string"?r:r+"",void 0,kt),se=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((o,i,s)=>o+(b=>{if(b._$cssResult$===!0)return b.cssText;if(typeof b=="number")return b;throw Error("Value passed to 'css' function must be a 'css' function result: "+b+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[s+1],r[0]);return new kr(e,r,kt)},co=(r,t)=>{if(Ft)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const o=document.createElement("style"),i=Ue.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=e.cssText,r.appendChild(o)}},Yt=Ft?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return lo(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:bo,defineProperty:fo,getOwnPropertyDescriptor:uo,getOwnPropertyNames:po,getOwnPropertySymbols:ho,getPrototypeOf:go}=Object,ie=globalThis,Lt=ie.trustedTypes,mo=Lt?Lt.emptyScript:"",ot=ie.reactiveElementPolyfillSupport,Me=(r,t)=>r,wt={toAttribute(r,t){switch(t){case Boolean:r=r?mo:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},$r=(r,t)=>!bo(r,t),Nt={attribute:!0,type:String,converter:wt,reflect:!1,hasChanged:$r};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ie.litPropertyMetadata??(ie.litPropertyMetadata=new WeakMap);class me extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Nt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);i!==void 0&&fo(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){const{get:i,set:s}=uo(this.prototype,t)??{get(){return this[e]},set(b){this[e]=b}};return{get(){return i==null?void 0:i.call(this)},set(b){const m=i==null?void 0:i.call(this);s.call(this,b),this.requestUpdate(t,m,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Nt}static _$Ei(){if(this.hasOwnProperty(Me("elementProperties")))return;const t=go(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Me("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Me("properties"))){const e=this.properties,o=[...po(e),...ho(e)];for(const i of o)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,i]of e)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const i=this._$Eu(e,o);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)e.unshift(Yt(i))}else t!==void 0&&e.push(Yt(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return co(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostConnected)==null?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostDisconnected)==null?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){var s;const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(i!==void 0&&o.reflect===!0){const b=(((s=o.converter)==null?void 0:s.toAttribute)!==void 0?o.converter:wt).toAttribute(e,o.type);this._$Em=t,b==null?this.removeAttribute(i):this.setAttribute(i,b),this._$Em=null}}_$AK(t,e){var s;const o=this.constructor,i=o._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const b=o.getPropertyOptions(i),m=typeof b.converter=="function"?{fromAttribute:b.converter}:((s=b.converter)==null?void 0:s.fromAttribute)!==void 0?b.converter:wt;this._$Em=i,this[i]=m.fromAttribute(e,b.type),this._$Em=null}}requestUpdate(t,e,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??$r)(this[t],e))return;this.P(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,b]of this._$Ep)this[s]=b;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,b]of i)b.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],b)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(o=>{var i;return(i=o.hostUpdated)==null?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}me.elementStyles=[],me.shadowRootOptions={mode:"open"},me[Me("elementProperties")]=new Map,me[Me("finalized")]=new Map,ot==null||ot({ReactiveElement:me}),(ie.reactiveElementVersions??(ie.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=globalThis,Ge=Ce.trustedTypes,Rt=Ge?Ge.createPolicy("lit-html",{createHTML:r=>r}):void 0,Dr="$lit$",ne=`lit$${Math.random().toFixed(9).slice(2)}$`,_r="?"+ne,vo=`<${_r}>`,fe=document,Ae=()=>fe.createComment(""),Te=r=>r===null||typeof r!="object"&&typeof r!="function",$t=Array.isArray,yo=r=>$t(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",nt=`[ 	
\f\r]`,Se=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ht=/-->/g,Bt=/>/g,de=RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qt=/'/g,Vt=/"/g,Sr=/^(?:script|style|textarea|title)$/i,wo=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),$=wo(1),ue=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),jt=new WeakMap,be=fe.createTreeWalker(fe,129);function Mr(r,t){if(!$t(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rt!==void 0?Rt.createHTML(t):t}const xo=(r,t)=>{const e=r.length-1,o=[];let i,s=t===2?"<svg>":t===3?"<math>":"",b=Se;for(let m=0;m<e;m++){const u=r[m];let y,d,h=-1,E=0;for(;E<u.length&&(b.lastIndex=E,d=b.exec(u),d!==null);)E=b.lastIndex,b===Se?d[1]==="!--"?b=Ht:d[1]!==void 0?b=Bt:d[2]!==void 0?(Sr.test(d[2])&&(i=RegExp("</"+d[2],"g")),b=de):d[3]!==void 0&&(b=de):b===de?d[0]===">"?(b=i??Se,h=-1):d[1]===void 0?h=-2:(h=b.lastIndex-d[2].length,y=d[1],b=d[3]===void 0?de:d[3]==='"'?Vt:qt):b===Vt||b===qt?b=de:b===Ht||b===Bt?b=Se:(b=de,i=void 0);const A=b===de&&r[m+1].startsWith("/>")?" ":"";s+=b===Se?u+vo:h>=0?(o.push(y),u.slice(0,h)+Dr+u.slice(h)+ne+A):u+ne+(h===-2?m:A)}return[Mr(r,s+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class Pe{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let s=0,b=0;const m=t.length-1,u=this.parts,[y,d]=xo(t,e);if(this.el=Pe.createElement(y,o),be.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=be.nextNode())!==null&&u.length<m;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(Dr)){const E=d[b++],A=i.getAttribute(h).split(ne),L=/([.?@])?(.*)/.exec(E);u.push({type:1,index:s,name:L[2],strings:A,ctor:L[1]==="."?ko:L[1]==="?"?$o:L[1]==="@"?Do:Ke}),i.removeAttribute(h)}else h.startsWith(ne)&&(u.push({type:6,index:s}),i.removeAttribute(h));if(Sr.test(i.tagName)){const h=i.textContent.split(ne),E=h.length-1;if(E>0){i.textContent=Ge?Ge.emptyScript:"";for(let A=0;A<E;A++)i.append(h[A],Ae()),be.nextNode(),u.push({type:2,index:++s});i.append(h[E],Ae())}}}else if(i.nodeType===8)if(i.data===_r)u.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(ne,h+1))!==-1;)u.push({type:7,index:s}),h+=ne.length-1}s++}}static createElement(t,e){const o=fe.createElement("template");return o.innerHTML=t,o}}function we(r,t,e=r,o){var b,m;if(t===ue)return t;let i=o!==void 0?(b=e._$Co)==null?void 0:b[o]:e._$Cl;const s=Te(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((m=i==null?void 0:i._$AO)==null||m.call(i,!1),s===void 0?i=void 0:(i=new s(r),i._$AT(r,e,o)),o!==void 0?(e._$Co??(e._$Co=[]))[o]=i:e._$Cl=i),i!==void 0&&(t=we(r,i._$AS(r,t.values),i,o)),t}class Fo{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=((t==null?void 0:t.creationScope)??fe).importNode(e,!0);be.currentNode=i;let s=be.nextNode(),b=0,m=0,u=o[0];for(;u!==void 0;){if(b===u.index){let y;u.type===2?y=new ze(s,s.nextSibling,this,t):u.type===1?y=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(y=new _o(s,this,t)),this._$AV.push(y),u=o[++m]}b!==(u==null?void 0:u.index)&&(s=be.nextNode(),b++)}return be.currentNode=fe,i}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class ze{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=we(this,t,e),Te(t)?t===T||t==null||t===""?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==ue&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):yo(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==T&&Te(this._$AH)?this._$AA.nextSibling.data=t:this.T(fe.createTextNode(t)),this._$AH=t}$(t){var s;const{values:e,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Pe.createElement(Mr(o.h,o.h[0]),this.options)),o);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(e);else{const b=new Fo(i,this),m=b.u(this.options);b.p(e),this.T(m),this._$AH=b}}_$AC(t){let e=jt.get(t.strings);return e===void 0&&jt.set(t.strings,e=new Pe(t)),e}k(t){$t(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const s of t)i===e.length?e.push(o=new ze(this.O(Ae()),this.O(Ae()),this,this.options)):o=e[i],o._$AI(s),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Ke{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,s){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=T}_$AI(t,e=this,o,i){const s=this.strings;let b=!1;if(s===void 0)t=we(this,t,e,0),b=!Te(t)||t!==this._$AH&&t!==ue,b&&(this._$AH=t);else{const m=t;let u,y;for(t=s[0],u=0;u<s.length-1;u++)y=we(this,m[o+u],e,u),y===ue&&(y=this._$AH[u]),b||(b=!Te(y)||y!==this._$AH[u]),y===T?t=T:t!==T&&(t+=(y??"")+s[u+1]),this._$AH[u]=y}b&&!i&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ko extends Ke{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}}class $o extends Ke{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class Do extends Ke{constructor(t,e,o,i,s){super(t,e,o,i,s),this.type=5}_$AI(t,e=this){if((t=we(this,t,e,0)??T)===ue)return;const o=this._$AH,i=t===T&&o!==T||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==T&&(o===T||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class _o{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){we(this,t)}}const it=Ce.litHtmlPolyfillSupport;it==null||it(Pe,ze),(Ce.litHtmlVersions??(Ce.litHtmlVersions=[])).push("3.2.1");const So=(r,t,e)=>{const o=(e==null?void 0:e.renderBefore)??t;let i=o._$litPart$;if(i===void 0){const s=(e==null?void 0:e.renderBefore)??null;o._$litPart$=i=new ze(t.insertBefore(Ae(),s),s,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class K extends me{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=So(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ue}}var Fr;K._$litElement$=!0,K.finalized=!0,(Fr=globalThis.litElementHydrateSupport)==null||Fr.call(globalThis,{LitElement:K});const at=globalThis.litElementPolyfillSupport;at==null||at({LitElement:K});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mo={ATTRIBUTE:1},Co=r=>(...t)=>({_$litDirective$:r,values:t});class Eo{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=Co(class extends Eo{constructor(r){var t;if(super(r),r.type!==Mo.ATTRIBUTE||r.name!=="class"||((t=r.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var o,i;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((o=this.nt)!=null&&o.has(s))&&this.st.add(s);return this.render(t)}const e=r.element.classList;for(const s of this.st)s in t||(e.remove(s),this.st.delete(s));for(const s in t){const b=!!t[s];b===this.st.has(s)||(i=this.nt)!=null&&i.has(s)||(b?(e.add(s),this.st.add(s)):(e.remove(s),this.st.delete(s)))}return ue}});class Cr{static get styles(){return se`
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

            

            .border-theme {
                border-color: var(--bs-theme) !important
            }


        `}}class Ao{static get styles(){return se`
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
        `}}class ae extends K{constructor(){super()}setSelector(t){this.selector=t}get getSelector(){return this.selector}getValue(){const t=this.shadowRoot.querySelector(this.selector);return t?t.value:null}setValue(t){const e=this.shadowRoot.querySelector(this.selector);e&&(e.value=t)}addEventListener(t,e,o){this.shadowRoot.querySelector(this.selector).addEventListener(t,e,o)}removeEventListener(t,e,o){this.shadowRoot.querySelector(this.selector).removeEventListener(t,e,o)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o)}}ae.styles=[Cr.styles,Ao.styles];/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=r=>r??T;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var Ut,Gt,st;const To={primary:"btn-primary",secondary:"btn-secondary",light:"btn-light",dark:"btn-dark",info:"btn-info",purple:"btn-purple",indigo:"btn-indigo",link:"btn-link",danger:"btn-danger",pink:"btn-pink",orange:"btn-orange","light-orange":"btn-light-orange",yellow:"btn-yellow",lime:"btn-lime",teal:"btn-teal",green:"btn-green"},Po={primary:"btn-outline-primary",secondary:"btn-outline-secondary",light:"btn-outline-light",dark:"btn-outline-dark",info:"btn-outline-info",purple:"btn-outline-purple",indigo:"btn-outline-indigo",link:"btn-outline-link",danger:"btn-outline-danger",pink:"btn-outline-pink",orange:"btn-outline-orange","light-orange":"btn-outline-light-orange",yellow:"btn-outline-yellow",lime:"btn-outline-lime",teal:"btn-outline-teal",green:"btn-outline-green"};Ut=B("l-button"),Ut(Gt=(st=class extends ae{constructor(){super(),super.setSelector("button")}static get properties(){return{theme:{type:String},size:{type:String},id:{type:String},name:{type:String},width:{type:String},label:{type:String},value:{type:String},"icon-path":{type:String},outline:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean}}}isValid(t,e){if(!t&&e)return!1}validate(){const t=this.getValue().trim(),e=this.shadowRoot.querySelector(this.selector),o=this.isValid(t,this.required);e.classList.toggle("is-invalid",!o)}checkValidity(){this.validate()}render(){const{outline:t,theme:e,size:o,"icon-path":i,label:s}=this,b="btn",m=t?Po[e]:To[e],u=o==="large"?"btn-lg":o==="small"?"btn-sm":"",y={[b]:!0,[m||"btn-default"]:!0,[u]:!!u,"has-icon":!!i};return $`
            <button
                    class="${z(y)}"
                    id="${p(this.id)}"
                    name="${p(this.name)}"
                    value="${p(this.value)}"
                    ?disabled="${this.disabled}"
                    ?readonly="${this.readonly}"
                    style="width: ${this.width?this.width:"auto"}"
            >
                ${i?$`<img src="${i}" class="btn-icon" alt="icon" />`:""}
                ${p(s)}
            </button>
        `}},st.styles=[...ae.styles,se`
            .btn-icon {
                width: 16px;
                height: 16px;
                fill: currentColor;
            }
        `],st));var Wt,Kt,lt;Wt=B("l-label"),Wt(Kt=(lt=class extends K{static get properties(){return{label:{type:String},id:{type:String},"label-align":{type:String},"label-width":{type:String},"label-text-align":{type:String},required:{type:String}}}render(){if(!this.label)return"";let t=this["label-align"]&&this["label-align"]==="left";return $`
            <label
                    class="${t&&this.label?"form-left-label":"form-label"}"
                    for="${this.id}"
                    style="
                        width: ${this["label-width"]||"auto"};
                        text-align: ${this["label-text-align"]||"left"}
                    "
            >
                ${this.required=="true"?t?$`<span style="color: #df1414;margin-right: 2px">*</span>${this.label}`:$`${this.label}<span style="color: #df1414;margin-left: 2px">*</span>`:this.label} 
            </label>
        `}},lt.styles=[se`
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
            `],lt));var Jt,Xt,dt;Jt=B("l-feedback"),Jt(Xt=(dt=class extends K{static get properties(){return{feedback:{type:String},"feedback-type":{type:String},width:{type:String},"label-align":{type:String},"left-margin":{type:String}}}render(){let t=this["label-align"]&&this["label-align"]==="left";const e={normal:$`<div class="valid-feedback">${this.feedback}</div>`,hint:$`<div class="form-group"><small class="form-hint form-text text-muted">${this.feedback}</small></div>`,error:$`<div class="invalid-feedback">${this.feedback}</div>`};return $`
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
        `}},dt.styles=[Cr.styles,se`
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

            `],dt));var Zt,Qt,ct;let xe=(Zt=B("l-label-feed-container"),Zt(Qt=(ct=class extends ae{constructor(){super()}getByteLength(t){const e=t;let o,i=0,s=e.length;for(let b=0;b<s;b++)o=e.charAt(b),escape(o).length>4?i+=2:i++;return i}isValid(t,e,o){const i=new RegExp(e);return!t&&o?!1:!(i&&t&&!i.test(t))}createChangeHandler(t){if(typeof t=="string"&&parseInt(t)==t)return function(o){const i=o.target;let s=i.value,b=this.getByteLength(s);if(b>t){let m=s.length;for(;b>t&&m>0;)m--,b=this.getByteLength(s.substring(0,m));i.value=s.substring(0,m)}}}validate(){const t=this.getValue().trim(),o=this.shadowRoot.querySelector("l-label-feed-container").shadowRoot.querySelector("l-feedback"),i=this.isValid(t,this.pattern,this.required),s=this["feedback-visible-type"];this.setSelectorValid(!i),s!="visible"&&(o.setAttribute("hidden",!0),(i&&s=="valid"||!i&&s=="invalid")&&o.removeAttribute("hidden"))}setSelectorValid(t){this.shadowRoot.querySelector(this.selector).classList.toggle("is-invalid",t)}setValid(){this.setSelectorValid(!1)}inValid(){this.setSelectorValid(!0)}checkValidity(){this.validate()}static get properties(){return{id:{type:String},width:{type:String},required:{type:Boolean},feedback:{type:String},"feedback-type":{type:String},"feedback-visible-type":{type:String},label:{type:String},"label-align":{type:String},"label-width":{type:String},"label-text-align":{type:String}}}render(){let t=this["label-align"]&&this["label-align"]==="left";return $`
            <div
                    style="width: ${this.width?this.width:"auto"}"
            >
                <div
                        class="${z({container:t})}"
                >
                    <l-label
                            label="${p(this.label)}"
                            id="${this.id}"
                            label-align="${p(this["label-align"])}"
                            label-width="${p(this["label-width"])}"
                            label-text-align="${p(this["label-text-align"])}"
                            required="${p(this.required)}"
                    >
                    </l-label>
                    <slot name="input"></slot>
                    <slot name="count"></slot>
                </div>

            </div>

            <l-feedback
                    feedback="${p(this.feedback)}"
                    feedback-type="${p(this["feedback-type"])}"
                    width="${p(this.width)}"
                    label-align="${p(this["label-align"])}"
                    left-margin="${p(this["label-width"])}"
                    ?hidden="${this["feedback-visible-type"]!=="visible"}"
            >
                

            </l-feedback>
        `}},ct.styles=[...ae.styles,se`
              .container {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
              }
            `],ct))||Qt);var er,tr,bt;er=B("l-c-input"),er(tr=(bt=class extends xe{constructor(){super(),super.setSelector("input")}disconnectedCallback(){super.disconnectedCallback(),this.observer.disconnect()}static get properties(){return{type:{type:String},name:{type:String},size:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},value:{type:String},pattern:{type:String},placeholder:{type:String},maxlength:{type:String},minlength:{type:String},"valid-length-type":{type:String}}}render(){let t=this["label-align"]&&this["label-align"]==="left",e=this.type==="search"&&!this.disabled&&!this.readonly;return $`
            <l-label-feed-container
                    width="${p(this.width)}"
                    id="${this.id}"
                    label="${p(this.label)}"
                    label-align="${p(this["label-align"])}"
                    label-width="${p(this["label-width"])}"
                    label-text-align="${p(this["label-text-align"])}"
                    required="${p(this.required)}"
                    feedback="${p(this.feedback)}"
                    feedback-type="${p(this["feedback-type"])}"
                    feedback-visible-type="${p(this["feedback-visible-type"])}"
            >
                <div slot="input" class="search-input-container">
                    <input
                            type="${this.type==="planText"?"text":this.type}"
                            class="${z({"form-control":!0,"form-left-control":t,"form-control-plaintext":this.type==="planText","form-control-lg":this.size==="large","form-control-sm":this.size==="small","search-input-left":e,"has-icon":e})}"
                            id="${p(this.id)}"
                            name="${p(this.name)}"
                            maxlength="${(this["valid-length-type"]!="byte"?p(this.maxlength):null)??T}"
                            minlength="${(this["valid-length-type"]!="byte"?p(this.minlength):null)??T}"
                            ?required=${this.required}
                            ?disabled=${this.disabled}
                            ?readonly=${this.readonly}
                            placeholder="${p(this.placeholder)}"
                            pattern="${p(this.pattern)}"
                            value="${p(this.value)}"
                            @input="${o=>{var i;(i=this.shadowRoot.querySelector(".search-icon-right"))==null||i.classList.toggle("hidden",!o.target.value)}}"
                            @blur="${super.validate}"
                            @keyup="${(this["valid-length-type"]!="byte"?null:super.createChangeHandler(p(this.maxlength)))??T}"
                    >
                </div>

            </l-label-feed-container>

        `}},bt.styles=[...xe.styles,se`
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

            .search-input-container {
                position: relative;
                display: flex;
                align-items: center;
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
        `],bt));var rr,or,ft;rr=B("l-checkbox"),rr(or=(ft=class extends ae{constructor(){super(),super.setSelector("input")}static get properties(){return{size:{type:String},id:{type:String},class:{type:String},name:{type:String},width:{type:String},label:{type:String},"label-align":{type:String},checked:{type:Boolean},required:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},value:{type:String}}}_getCheckboxGroupData(t,e){e===void 0&&(e=!1);const o=this.getAttribute("name");return o?Array.from(document.querySelectorAll(`l-checkbox[name="${o}"]`)).map(i=>{const s=i.shadowRoot?i.shadowRoot.querySelector('input[type="checkbox"]'):i.querySelector('input[type="checkbox"]');return!s||e&&!s.checked?null:{id:i.id,value:t==="label"?i.getAttribute("label"):i.value}}).filter(Boolean):(console.warn("이 체크박스에는 name 속성이 없습니다."),[])}getCheckedTextsByNameGroup(){return this._getCheckboxGroupData("label",!0)}getCheckedValuesByNameGroup(){return this._getCheckboxGroupData("value",!0)}getTextsByNameGroup(){return this._getCheckboxGroupData("label",!1)}getValuesByNameGroup(){return this._getCheckboxGroupData("value",!1)}getText(){return this.getAttribute("label")||""}setText(t){if(typeof t!="string"){console.warn("setText의 인자는 문자열이어야 합니다.");return}this.setAttribute("label",t),this.requestUpdate()}isValid(t,e){if(!t&&e)return!1}validate(){const t=this.getValue().trim(),e=this.shadowRoot.querySelector(this.selector),o=this.isValid(t,this.required);e.classList.toggle("is-invalid",!o)}checkValidity(){this.validate()}render(){return $`
            <div
                    style="width: ${this.width?this.width:T}"
                    class="${z({"form-check":!0,"form-check-inline":!0,"form-control-lg":this.size==="large","form-control-sm":this.size==="small"})}">
                <input class="form-check-input"
                       type="checkbox"
                       value="${p(this.value)}"
                       id="${p(this.id)}"
                       name="${p(this.name)}"
                       ?required=${this.required}
                       ?checked=${this.checked}
                       ?disabled=${this.disabled}
                >
                <label class="form-check-label" for="${p(this.id)}">${p(this.label)}</label>
            </div>
        `}},ft.styles=[...ae.styles],ft));var nr,ir;nr=B("l-radio"),nr(ir=class extends ae{constructor(){super(),super.setSelector("input")}createRenderRoot(){return this}static get properties(){return{size:{type:String},id:{type:String},class:{type:String},name:{type:String},width:{type:String},label:{type:String},"label-align":{type:String},checked:{type:Boolean},required:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},value:{type:String}}}getValue(){const t=this.querySelector(this.selector);return t?t.value:null}setValue(t){const e=this.querySelector(this.selector);e&&(e.value=t)}getText(){return this.getAttribute("label")||""}setText(t){if(typeof t!="string"){console.warn("setText의 인자는 문자열이어야 합니다.");return}this.setAttribute("label",t),this.requestUpdate()}isValid(t,e){if(!t&&e)return!1}validate(){console.log("validate");const t=this.getValue().trim(),e=this.querySelector(this.selector),o=this.isValid(t,this.required);e.classList.toggle("is-invalid",!o)}checkValidity(){this.validate()}render(){return this["label-align"]&&this["label-align"],$`
            <div
                    style="width: ${this.width?this.width:T}"
                    class="${z({"form-check":!0,"form-check-inline":!0,"form-control-lg":this.size==="large","form-control-sm":this.size==="small"})}">
                <input class="form-check-input"
                       type="radio"
                       value="${p(this.value)}"
                       id="${p(this.id)}"
                       name="${p(this.name)}"
                       ?required=${this.required}
                       ?checked=${this.checked}
                       ?disabled=${this.disabled}
                >
                <label class="form-check-label" for="${p(this.id)}">${p(this.label)}</label>
            </div>
        `}});const oe={getDefaultFormat(r){switch(r===void 0&&(r=this.DATE_TYPE.DATE),r){case this.DATE_TYPE.DATE:return"Y-m-d";case this.DATE_TYPE.MONTH:return"Y-m";case this.DATE_TYPE.YEAR:return"Y"}},DATE_TYPE:{DATE:"date",MONTH:"month",YEAR:"year"},getDateFormatRegex(r){switch(r){case"Y-m-d":return/^\d{4}-\d{2}-\d{2}$/;case"Y/m/d":return/^\d{4}\/\d{2}\/\d{2}$/;case"Ymd":return/^\d{8}$/;case"Ym":return/^\d{6}$/;case"Y-m":return/^\d{4}-\d{2}$/;case"Y/m":return/^\d{4}\/\d{2}$/;case"Y.m":return/^\d{4}\.\d{2}$/;case"Y.m.d":return/^\d{4}\.\d{2}\.\d{2}$/;case"Y":return/^\d{4}$/;default:return console.error(`Unsupported format: ${r}`),null}},parseDateStrByFormat(r,t,e){e===void 0&&(e=this.DATE_TYPE.DATE);let o=null;switch(t){case"Y-m-d":case"Y-m":o=r.split("-");break;case"Y/m/d":case"Y/m":o=r.split("/");case"Y.m.d":case"Y.m":o=r.split(".");break;case"Ymd":o=[r.substring(0,4),r.substring(4,6),r.substring(6,8)];break;case"Ym":o=[r.substring(0,4),r.substring(4,6)];break;case"Y":o=[r,"01"];break;default:return console.error(`Unsupported format: ${t}`),null}switch(e){case this.DATE_TYPE.DATE:return new Date(o[0],(o[1]||1)-1,o[2]||1);case this.DATE_TYPE.MONTH:return new Date(o[0],(o[1]||1)-1,1);case this.DATE_TYPE.YEAR:return new Date(o[0],0,1);default:return null}},parseDateByFormat(r,t,e){e===void 0&&(e=this.DATE_TYPE.DATE);const o=r.getFullYear(),i=String(r.getMonth()+1).padStart(2,"0"),s=String(r.getDate()).padStart(2,"0");switch(e){case this.DATE_TYPE.DATE:switch(t){case"Y-m-d":return`${o}-${i}-${s}`;case"Y/m/d":return`${o}/${i}/${s}`;case"Y.m.d":return`${o}.${i}.${s}`;case"Y.m":return`${o}.${i}`;case"Ymd":return`${o}${i}${s}`;default:return""}case this.DATE_TYPE.MONTH:switch(t){case"Y-m":return`${o}-${i}`;case"Y/m":return`${o}/${i}`;case"Y.m":return`${o}.${i}`;case"Ym":return`${o}${i}`;default:return""}case this.DATE_TYPE.YEAR:return`${o}`;default:return console.error(`Unsupported type: ${e}`),""}},formatDate(r,t){switch(t===void 0&&(t=this.DATE_TYPE.DATE),t){case this.DATE_TYPE.DATE:return this.parseDateByFormat(r,"Ymd",t);case this.DATE_TYPE.MONTH:return this.parseDateByFormat(r,"Ym",t);case this.DATE_TYPE.YEAR:return this.parseDateByFormat(r,"Y",t);default:return""}}};var ut=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],ve={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(r){return typeof console<"u"&&console.warn(r)},getWeek:function(r){var t=new Date(r.getTime());t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);var e=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-e.getTime())/864e5-3+(e.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},Ie={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(r){var t=r%100;if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},H=function(r,t){return t===void 0&&(t=2),("000"+r).slice(t*-1)},G=function(r){return r===!0?1:0};function ar(r,t){var e;return function(){var o=this,i=arguments;clearTimeout(e),e=setTimeout(function(){return r.apply(o,i)},t)}}var pt=function(r){return r instanceof Array?r:[r]};function R(r,t,e){if(e===!0)return r.classList.add(t);r.classList.remove(t)}function M(r,t,e){var o=window.document.createElement(r);return t=t||"",e=e||"",o.className=t,e!==void 0&&(o.textContent=e),o}function Ve(r){for(;r.firstChild;)r.removeChild(r.firstChild)}function Er(r,t){if(t(r))return r;if(r.parentNode)return Er(r.parentNode,t)}function je(r,t){var e=M("div","numInputWrapper"),o=M("input","numInput "+r),i=M("span","arrowUp"),s=M("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?o.type="number":(o.type="text",o.pattern="\\d*"),t!==void 0)for(var b in t)o.setAttribute(b,t[b]);return e.appendChild(o),e.appendChild(i),e.appendChild(s),e}function V(r){try{if(typeof r.composedPath=="function"){var t=r.composedPath();return t[0]}return r.target}catch{return r.target}}var ht=function(){},We=function(r,t,e){return e.months[t?"shorthand":"longhand"][r]},Io={D:ht,F:function(r,t,e){r.setMonth(e.months.longhand.indexOf(t))},G:function(r,t){r.setHours((r.getHours()>=12?12:0)+parseFloat(t))},H:function(r,t){r.setHours(parseFloat(t))},J:function(r,t){r.setDate(parseFloat(t))},K:function(r,t,e){r.setHours(r.getHours()%12+12*G(new RegExp(e.amPM[1],"i").test(t)))},M:function(r,t,e){r.setMonth(e.months.shorthand.indexOf(t))},S:function(r,t){r.setSeconds(parseFloat(t))},U:function(r,t){return new Date(parseFloat(t)*1e3)},W:function(r,t,e){var o=parseInt(t),i=new Date(r.getFullYear(),0,2+(o-1)*7,0,0,0,0);return i.setDate(i.getDate()-i.getDay()+e.firstDayOfWeek),i},Y:function(r,t){r.setFullYear(parseFloat(t))},Z:function(r,t){return new Date(t)},d:function(r,t){r.setDate(parseFloat(t))},h:function(r,t){r.setHours((r.getHours()>=12?12:0)+parseFloat(t))},i:function(r,t){r.setMinutes(parseFloat(t))},j:function(r,t){r.setDate(parseFloat(t))},l:ht,m:function(r,t){r.setMonth(parseFloat(t)-1)},n:function(r,t){r.setMonth(parseFloat(t)-1)},s:function(r,t){r.setSeconds(parseFloat(t))},u:function(r,t){return new Date(parseFloat(t))},w:ht,y:function(r,t){r.setFullYear(2e3+parseFloat(t))}},ce={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},Ee={Z:function(r){return r.toISOString()},D:function(r,t,e){return t.weekdays.shorthand[Ee.w(r,t,e)]},F:function(r,t,e){return We(Ee.n(r,t,e)-1,!1,t)},G:function(r,t,e){return H(Ee.h(r,t,e))},H:function(r){return H(r.getHours())},J:function(r,t){return t.ordinal!==void 0?r.getDate()+t.ordinal(r.getDate()):r.getDate()},K:function(r,t){return t.amPM[G(r.getHours()>11)]},M:function(r,t){return We(r.getMonth(),!0,t)},S:function(r){return H(r.getSeconds())},U:function(r){return r.getTime()/1e3},W:function(r,t,e){return e.getWeek(r)},Y:function(r){return H(r.getFullYear(),4)},d:function(r){return H(r.getDate())},h:function(r){return r.getHours()%12?r.getHours()%12:12},i:function(r){return H(r.getMinutes())},j:function(r){return r.getDate()},l:function(r,t){return t.weekdays.longhand[r.getDay()]},m:function(r){return H(r.getMonth()+1)},n:function(r){return r.getMonth()+1},s:function(r){return r.getSeconds()},u:function(r){return r.getTime()},w:function(r){return r.getDay()},y:function(r){return String(r.getFullYear()).substring(2)}},Ar=function(r){var t=r.config,e=t===void 0?ve:t,o=r.l10n,i=o===void 0?Ie:o,s=r.isMobile,b=s===void 0?!1:s;return function(m,u,y){var d=y||i;return e.formatDate!==void 0&&!b?e.formatDate(m,u,d):u.split("").map(function(h,E,A){return Ee[h]&&A[E-1]!=="\\"?Ee[h](m,d,e):h!=="\\"?h:""}).join("")}},xt=function(r){var t=r.config,e=t===void 0?ve:t,o=r.l10n,i=o===void 0?Ie:o;return function(s,b,m,u){if(!(s!==0&&!s)){var y=u||i,d,h=s;if(s instanceof Date)d=new Date(s.getTime());else if(typeof s!="string"&&s.toFixed!==void 0)d=new Date(s);else if(typeof s=="string"){var E=b||(e||ve).dateFormat,A=String(s).trim();if(A==="today")d=new Date,m=!0;else if(e&&e.parseDate)d=e.parseDate(s,E);else if(/Z$/.test(A)||/GMT$/.test(A))d=new Date(s);else{for(var L=void 0,_=[],U=0,pe=0,W="";U<E.length;U++){var J=E[U],Q=J==="\\",Fe=E[U-1]==="\\"||Q;if(ce[J]&&!Fe){W+=ce[J];var X=new RegExp(W).exec(s);X&&(L=!0)&&_[J!=="Y"?"push":"unshift"]({fn:Io[J],val:X[++pe]})}else Q||(W+=".")}d=!e||!e.noCalendar?new Date(new Date().getFullYear(),0,1,0,0,0,0):new Date(new Date().setHours(0,0,0,0)),_.forEach(function(te){var re=te.fn,ke=te.val;return d=re(d,ke,y)||d}),d=L?d:void 0}}if(!(d instanceof Date&&!isNaN(d.getTime()))){e.errorHandler(new Error("Invalid date provided: "+h));return}return m===!0&&d.setHours(0,0,0,0),d}}};function j(r,t,e){return e===void 0&&(e=!0),e!==!1?new Date(r.getTime()).setHours(0,0,0,0)-new Date(t.getTime()).setHours(0,0,0,0):r.getTime()-t.getTime()}var zo=function(r,t,e){return r>Math.min(t,e)&&r<Math.max(t,e)},gt=function(r,t,e){return r*3600+t*60+e},Oo=function(r){var t=Math.floor(r/3600),e=(r-t*3600)/60;return[t,e,r-t*3600-e*60]},Yo={DAY:864e5};function mt(r){var t=r.defaultHour,e=r.defaultMinute,o=r.defaultSeconds;if(r.minDate!==void 0){var i=r.minDate.getHours(),s=r.minDate.getMinutes(),b=r.minDate.getSeconds();t<i&&(t=i),t===i&&e<s&&(e=s),t===i&&e===s&&o<b&&(o=r.minDate.getSeconds())}if(r.maxDate!==void 0){var m=r.maxDate.getHours(),u=r.maxDate.getMinutes();t=Math.min(t,m),t===m&&(e=Math.min(u,e)),t===m&&e===u&&(o=r.maxDate.getSeconds())}return{hours:t,minutes:e,seconds:o}}typeof Object.assign!="function"&&(Object.assign=function(r){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];if(!r)throw TypeError("Cannot convert undefined or null to object");for(var o=function(m){m&&Object.keys(m).forEach(function(u){return r[u]=m[u]})},i=0,s=t;i<s.length;i++){var b=s[i];o(b)}return r});var N=function(){return N=Object.assign||function(r){for(var t,e=1,o=arguments.length;e<o;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},N.apply(this,arguments)},sr=function(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;for(var o=Array(r),i=0,t=0;t<e;t++)for(var s=arguments[t],b=0,m=s.length;b<m;b++,i++)o[i]=s[b];return o},Lo=300;function No(r,t){var e={config:N(N({},ve),O.defaultConfig),l10n:Ie};e.parseDate=xt({config:e.config,l10n:e.l10n}),e._handlers=[],e.pluginElements=[],e.loadedPlugins=[],e._bind=_,e._setHoursFromDate=E,e._positionCalendar=He,e.changeMonth=Je,e.changeYear=Le,e.clear=zr,e.close=Or,e.onMouseOver=Re,e._createElement=M,e.createDay=X,e.destroy=Yr,e.isEnabled=le,e.jumpToDate=W,e.updateValue=ee,e.open=Rr,e.redraw=At,e.set=Vr,e.setDate=jr,e.toggle=Kr;function o(){e.utils={getDaysInMonth:function(n,a){return n===void 0&&(n=e.currentMonth),a===void 0&&(a=e.currentYear),n===1&&(a%4===0&&a%100!==0||a%400===0)?29:e.l10n.daysInMonth[n]}}}function i(){e.element=e.input=r,e.isOpen=!1,Hr(),Et(),Gr(),Ur(),o(),e.isMobile||Fe(),pe(),(e.selectedDates.length||e.config.noCalendar)&&(e.config.enableTime&&E(e.config.noCalendar?e.latestSelectedDateObj:void 0),ee(!1)),m();var n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!e.isMobile&&n&&He(),I("onReady")}function s(){var n;return((n=e.calendarContainer)===null||n===void 0?void 0:n.getRootNode()).activeElement||document.activeElement}function b(n){return n.bind(e)}function m(){var n=e.config;n.weekNumbers===!1&&n.showMonths===1||n.noCalendar!==!0&&window.requestAnimationFrame(function(){if(e.calendarContainer!==void 0&&(e.calendarContainer.style.visibility="hidden",e.calendarContainer.style.display="block"),e.daysContainer!==void 0){var a=(e.days.offsetWidth+1)*n.showMonths;e.daysContainer.style.width=a+"px",e.calendarContainer.style.width=a+(e.weekWrapper!==void 0?e.weekWrapper.offsetWidth:0)+"px",e.calendarContainer.style.removeProperty("visibility"),e.calendarContainer.style.removeProperty("display")}})}function u(n){if(e.selectedDates.length===0){var a=e.config.minDate===void 0||j(new Date,e.config.minDate)>=0?new Date:new Date(e.config.minDate.getTime()),l=mt(e.config);a.setHours(l.hours,l.minutes,l.seconds,a.getMilliseconds()),e.selectedDates=[a],e.latestSelectedDateObj=a}n!==void 0&&n.type!=="blur"&&Zr(n);var c=e._input.value;h(),ee(),e._input.value!==c&&e._debouncedChange()}function y(n,a){return n%12+12*G(a===e.l10n.amPM[1])}function d(n){switch(n%24){case 0:case 12:return 12;default:return n%12}}function h(){if(!(e.hourElement===void 0||e.minuteElement===void 0)){var n=(parseInt(e.hourElement.value.slice(-2),10)||0)%24,a=(parseInt(e.minuteElement.value,10)||0)%60,l=e.secondElement!==void 0?(parseInt(e.secondElement.value,10)||0)%60:0;e.amPM!==void 0&&(n=y(n,e.amPM.textContent));var c=e.config.minTime!==void 0||e.config.minDate&&e.minDateHasTime&&e.latestSelectedDateObj&&j(e.latestSelectedDateObj,e.config.minDate,!0)===0,f=e.config.maxTime!==void 0||e.config.maxDate&&e.maxDateHasTime&&e.latestSelectedDateObj&&j(e.latestSelectedDateObj,e.config.maxDate,!0)===0;if(e.config.maxTime!==void 0&&e.config.minTime!==void 0&&e.config.minTime>e.config.maxTime){var g=gt(e.config.minTime.getHours(),e.config.minTime.getMinutes(),e.config.minTime.getSeconds()),k=gt(e.config.maxTime.getHours(),e.config.maxTime.getMinutes(),e.config.maxTime.getSeconds()),w=gt(n,a,l);if(w>k&&w<g){var D=Oo(g);n=D[0],a=D[1],l=D[2]}}else{if(f){var v=e.config.maxTime!==void 0?e.config.maxTime:e.config.maxDate;n=Math.min(n,v.getHours()),n===v.getHours()&&(a=Math.min(a,v.getMinutes())),a===v.getMinutes()&&(l=Math.min(l,v.getSeconds()))}if(c){var F=e.config.minTime!==void 0?e.config.minTime:e.config.minDate;n=Math.max(n,F.getHours()),n===F.getHours()&&a<F.getMinutes()&&(a=F.getMinutes()),a===F.getMinutes()&&(l=Math.max(l,F.getSeconds()))}}A(n,a,l)}}function E(n){var a=n||e.latestSelectedDateObj;a&&a instanceof Date&&A(a.getHours(),a.getMinutes(),a.getSeconds())}function A(n,a,l){e.latestSelectedDateObj!==void 0&&e.latestSelectedDateObj.setHours(n%24,a,l||0,0),!(!e.hourElement||!e.minuteElement||e.isMobile)&&(e.hourElement.value=H(e.config.time_24hr?n:(12+n)%12+12*G(n%12===0)),e.minuteElement.value=H(a),e.amPM!==void 0&&(e.amPM.textContent=e.l10n.amPM[G(n>=12)]),e.secondElement!==void 0&&(e.secondElement.value=H(l)))}function L(n){var a=V(n),l=parseInt(a.value)+(n.delta||0);(l/1e3>1||n.key==="Enter"&&!/[^\d]/.test(l.toString()))&&Le(l)}function _(n,a,l,c){if(a instanceof Array)return a.forEach(function(f){return _(n,f,l,c)});if(n instanceof Array)return n.forEach(function(f){return _(f,a,l,c)});n.addEventListener(a,l,c),e._handlers.push({remove:function(){return n.removeEventListener(a,l,c)}})}function U(){I("onChange")}function pe(){if(e.config.wrap&&["open","close","toggle","clear"].forEach(function(l){Array.prototype.forEach.call(e.element.querySelectorAll("[data-"+l+"]"),function(c){return _(c,"click",e[l])})}),e.isMobile){Wr();return}var n=ar(Nr,50);if(e._debouncedChange=ar(U,Lo),e.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&_(e.daysContainer,"mouseover",function(l){e.config.mode==="range"&&Re(V(l))}),_(e._input,"keydown",St),e.calendarContainer!==void 0&&_(e.calendarContainer,"keydown",St),!e.config.inline&&!e.config.static&&_(window,"resize",n),window.ontouchstart!==void 0?_(window.document,"touchstart",Xe):_(window.document,"mousedown",Xe),_(window.document,"focus",Xe,{capture:!0}),e.config.clickOpens===!0&&(_(e._input,"focus",e.open),_(e._input,"click",e.open)),e.daysContainer!==void 0&&(_(e.monthNav,"click",Xr),_(e.monthNav,["keyup","increment"],L),_(e.daysContainer,"click",Tt)),e.timeContainer!==void 0&&e.minuteElement!==void 0&&e.hourElement!==void 0){var a=function(l){return V(l).select()};_(e.timeContainer,["increment"],u),_(e.timeContainer,"blur",u,{capture:!0}),_(e.timeContainer,"click",J),_([e.hourElement,e.minuteElement],["focus","click"],a),e.secondElement!==void 0&&_(e.secondElement,"focus",function(){return e.secondElement&&e.secondElement.select()}),e.amPM!==void 0&&_(e.amPM,"click",function(l){u(l)})}e.config.allowInput&&_(e._input,"blur",Lr)}function W(n,a){var l=n!==void 0?e.parseDate(n):e.latestSelectedDateObj||(e.config.minDate&&e.config.minDate>e.now?e.config.minDate:e.config.maxDate&&e.config.maxDate<e.now?e.config.maxDate:e.now),c=e.currentYear,f=e.currentMonth;try{l!==void 0&&(e.currentYear=l.getFullYear(),e.currentMonth=l.getMonth())}catch(g){g.message="Invalid date supplied: "+l,e.config.errorHandler(g)}a&&e.currentYear!==c&&(I("onYearChange"),Y()),a&&(e.currentYear!==c||e.currentMonth!==f)&&I("onMonthChange"),e.redraw()}function J(n){var a=V(n);~a.className.indexOf("arrow")&&Q(n,a.classList.contains("arrowUp")?1:-1)}function Q(n,a,l){var c=n&&V(n),f=l||c&&c.parentNode&&c.parentNode.firstChild,g=Qe("increment");g.delta=a,f&&f.dispatchEvent(g)}function Fe(){var n=window.document.createDocumentFragment();if(e.calendarContainer=M("div","flatpickr-calendar"),e.calendarContainer.tabIndex=-1,!e.config.noCalendar){if(n.appendChild($e()),e.innerContainer=M("div","flatpickr-innerContainer"),e.config.weekNumbers){var a=Ir(),l=a.weekWrapper,c=a.weekNumbers;e.innerContainer.appendChild(l),e.weekNumbers=c,e.weekWrapper=l}e.rContainer=M("div","flatpickr-rContainer"),e.rContainer.appendChild(Dt()),e.daysContainer||(e.daysContainer=M("div","flatpickr-days"),e.daysContainer.tabIndex=-1),C(),e.rContainer.appendChild(e.daysContainer),e.innerContainer.appendChild(e.rContainer),n.appendChild(e.innerContainer)}e.config.enableTime&&n.appendChild(Ye()),R(e.calendarContainer,"rangeMode",e.config.mode==="range"),R(e.calendarContainer,"animate",e.config.animate===!0),R(e.calendarContainer,"multiMonth",e.config.showMonths>1),e.calendarContainer.appendChild(n);var f=e.config.appendTo!==void 0&&e.config.appendTo.nodeType!==void 0;if((e.config.inline||e.config.static)&&(e.calendarContainer.classList.add(e.config.inline?"inline":"static"),e.config.inline&&(!f&&e.element.parentNode?e.element.parentNode.insertBefore(e.calendarContainer,e._input.nextSibling):e.config.appendTo!==void 0&&e.config.appendTo.appendChild(e.calendarContainer)),e.config.static)){var g=M("div","flatpickr-wrapper");e.element.parentNode&&e.element.parentNode.insertBefore(g,e.element),g.appendChild(e.element),e.altInput&&g.appendChild(e.altInput),g.appendChild(e.calendarContainer)}!e.config.static&&!e.config.inline&&(e.config.appendTo!==void 0?e.config.appendTo:window.document.body).appendChild(e.calendarContainer)}function X(n,a,l,c){var f=le(a,!0),g=M("span",n,a.getDate().toString());return g.dateObj=a,g.$i=c,g.setAttribute("aria-label",e.formatDate(a,e.config.ariaDateFormat)),n.indexOf("hidden")===-1&&j(a,e.now)===0&&(e.todayDateElem=g,g.classList.add("today"),g.setAttribute("aria-current","date")),f?(g.tabIndex=-1,et(a)&&(g.classList.add("selected"),e.selectedDateElem=g,e.config.mode==="range"&&(R(g,"startRange",e.selectedDates[0]&&j(a,e.selectedDates[0],!0)===0),R(g,"endRange",e.selectedDates[1]&&j(a,e.selectedDates[1],!0)===0),n==="nextMonthDay"&&g.classList.add("inRange")))):g.classList.add("flatpickr-disabled"),e.config.mode==="range"&&Jr(a)&&!et(a)&&g.classList.add("inRange"),e.weekNumbers&&e.config.showMonths===1&&n!=="prevMonthDay"&&c%7===6&&e.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+e.config.getWeek(a)+"</span>"),I("onDayCreate",g),g}function te(n){n.focus(),e.config.mode==="range"&&Re(n)}function re(n){for(var a=n>0?0:e.config.showMonths-1,l=n>0?e.config.showMonths:-1,c=a;c!=l;c+=n)for(var f=e.daysContainer.children[c],g=n>0?0:f.children.length-1,k=n>0?f.children.length:-1,w=g;w!=k;w+=n){var D=f.children[w];if(D.className.indexOf("hidden")===-1&&le(D.dateObj))return D}}function ke(n,a){for(var l=n.className.indexOf("Month")===-1?n.dateObj.getMonth():e.currentMonth,c=a>0?e.config.showMonths:-1,f=a>0?1:-1,g=l-e.currentMonth;g!=c;g+=f)for(var k=e.daysContainer.children[g],w=l-e.currentMonth===g?n.$i+a:a<0?k.children.length-1:0,D=k.children.length,v=w;v>=0&&v<D&&v!=(a>0?D:-1);v+=f){var F=k.children[v];if(F.className.indexOf("hidden")===-1&&le(F.dateObj)&&Math.abs(n.$i-v)>=Math.abs(a))return te(F)}e.changeMonth(f),x(re(f),0)}function x(n,a){var l=s(),c=Ne(l||document.body),f=n!==void 0?n:c?l:e.selectedDateElem!==void 0&&Ne(e.selectedDateElem)?e.selectedDateElem:e.todayDateElem!==void 0&&Ne(e.todayDateElem)?e.todayDateElem:re(a>0?1:-1);f===void 0?e._input.focus():c?ke(f,a):te(f)}function S(n,a){for(var l=(new Date(n,a,1).getDay()-e.l10n.firstDayOfWeek+7)%7,c=e.utils.getDaysInMonth((a-1+12)%12,n),f=e.utils.getDaysInMonth(a,n),g=window.document.createDocumentFragment(),k=e.config.showMonths>1,w=k?"prevMonthDay hidden":"prevMonthDay",D=k?"nextMonthDay hidden":"nextMonthDay",v=c+1-l,F=0;v<=c;v++,F++)g.appendChild(X("flatpickr-day "+w,new Date(n,a-1,v),v,F));for(v=1;v<=f;v++,F++)g.appendChild(X("flatpickr-day",new Date(n,a,v),v,F));for(var P=f+1;P<=42-l&&(e.config.showMonths===1||F%7!==0);P++,F++)g.appendChild(X("flatpickr-day "+D,new Date(n,a+1,P%f),P,F));var Z=M("div","dayContainer");return Z.appendChild(g),Z}function C(){if(e.daysContainer!==void 0){Ve(e.daysContainer),e.weekNumbers&&Ve(e.weekNumbers);for(var n=document.createDocumentFragment(),a=0;a<e.config.showMonths;a++){var l=new Date(e.currentYear,e.currentMonth,1);l.setMonth(e.currentMonth+a),n.appendChild(S(l.getFullYear(),l.getMonth()))}e.daysContainer.appendChild(n),e.days=e.daysContainer.firstChild,e.config.mode==="range"&&e.selectedDates.length===1&&Re()}}function Y(){if(!(e.config.showMonths>1||e.config.monthSelectorType!=="dropdown")){var n=function(c){return e.config.minDate!==void 0&&e.currentYear===e.config.minDate.getFullYear()&&c<e.config.minDate.getMonth()?!1:!(e.config.maxDate!==void 0&&e.currentYear===e.config.maxDate.getFullYear()&&c>e.config.maxDate.getMonth())};e.monthsDropdownContainer.tabIndex=-1,e.monthsDropdownContainer.innerHTML="";for(var a=0;a<12;a++)if(n(a)){var l=M("option","flatpickr-monthDropdown-month");l.value=new Date(e.currentYear,a).getMonth().toString(),l.textContent=We(a,e.config.shorthandCurrentMonth,e.l10n),l.tabIndex=-1,e.currentMonth===a&&(l.selected=!0),e.monthsDropdownContainer.appendChild(l)}}}function he(){var n=M("div","flatpickr-month"),a=window.document.createDocumentFragment(),l;e.config.showMonths>1||e.config.monthSelectorType==="static"?l=M("span","cur-month"):(e.monthsDropdownContainer=M("select","flatpickr-monthDropdown-months"),e.monthsDropdownContainer.setAttribute("aria-label",e.l10n.monthAriaLabel),_(e.monthsDropdownContainer,"change",function(k){var w=V(k),D=parseInt(w.value,10);e.changeMonth(D-e.currentMonth),I("onMonthChange")}),Y(),l=e.monthsDropdownContainer);var c=je("cur-year",{tabindex:"-1"}),f=c.getElementsByTagName("input")[0];f.setAttribute("aria-label",e.l10n.yearAriaLabel),e.config.minDate&&f.setAttribute("min",e.config.minDate.getFullYear().toString()),e.config.maxDate&&(f.setAttribute("max",e.config.maxDate.getFullYear().toString()),f.disabled=!!e.config.minDate&&e.config.minDate.getFullYear()===e.config.maxDate.getFullYear());var g=M("div","flatpickr-current-month");return g.appendChild(l),g.appendChild(c),a.appendChild(g),n.appendChild(a),{container:n,yearElement:f,monthElement:l}}function Oe(){Ve(e.monthNav),e.monthNav.appendChild(e.prevMonthNav),e.config.showMonths&&(e.yearElements=[],e.monthElements=[]);for(var n=e.config.showMonths;n--;){var a=he();e.yearElements.push(a.yearElement),e.monthElements.push(a.monthElement),e.monthNav.appendChild(a.container)}e.monthNav.appendChild(e.nextMonthNav)}function $e(){return e.monthNav=M("div","flatpickr-months"),e.yearElements=[],e.monthElements=[],e.prevMonthNav=M("span","flatpickr-prev-month"),e.prevMonthNav.innerHTML=e.config.prevArrow,e.nextMonthNav=M("span","flatpickr-next-month"),e.nextMonthNav.innerHTML=e.config.nextArrow,Oe(),Object.defineProperty(e,"_hidePrevMonthArrow",{get:function(){return e.__hidePrevMonthArrow},set:function(n){e.__hidePrevMonthArrow!==n&&(R(e.prevMonthNav,"flatpickr-disabled",n),e.__hidePrevMonthArrow=n)}}),Object.defineProperty(e,"_hideNextMonthArrow",{get:function(){return e.__hideNextMonthArrow},set:function(n){e.__hideNextMonthArrow!==n&&(R(e.nextMonthNav,"flatpickr-disabled",n),e.__hideNextMonthArrow=n)}}),e.currentYearElement=e.yearElements[0],qe(),e.monthNav}function Ye(){e.calendarContainer.classList.add("hasTime"),e.config.noCalendar&&e.calendarContainer.classList.add("noCalendar");var n=mt(e.config);e.timeContainer=M("div","flatpickr-time"),e.timeContainer.tabIndex=-1;var a=M("span","flatpickr-time-separator",":"),l=je("flatpickr-hour",{"aria-label":e.l10n.hourAriaLabel});e.hourElement=l.getElementsByTagName("input")[0];var c=je("flatpickr-minute",{"aria-label":e.l10n.minuteAriaLabel});if(e.minuteElement=c.getElementsByTagName("input")[0],e.hourElement.tabIndex=e.minuteElement.tabIndex=-1,e.hourElement.value=H(e.latestSelectedDateObj?e.latestSelectedDateObj.getHours():e.config.time_24hr?n.hours:d(n.hours)),e.minuteElement.value=H(e.latestSelectedDateObj?e.latestSelectedDateObj.getMinutes():n.minutes),e.hourElement.setAttribute("step",e.config.hourIncrement.toString()),e.minuteElement.setAttribute("step",e.config.minuteIncrement.toString()),e.hourElement.setAttribute("min",e.config.time_24hr?"0":"1"),e.hourElement.setAttribute("max",e.config.time_24hr?"23":"12"),e.hourElement.setAttribute("maxlength","2"),e.minuteElement.setAttribute("min","0"),e.minuteElement.setAttribute("max","59"),e.minuteElement.setAttribute("maxlength","2"),e.timeContainer.appendChild(l),e.timeContainer.appendChild(a),e.timeContainer.appendChild(c),e.config.time_24hr&&e.timeContainer.classList.add("time24hr"),e.config.enableSeconds){e.timeContainer.classList.add("hasSeconds");var f=je("flatpickr-second");e.secondElement=f.getElementsByTagName("input")[0],e.secondElement.value=H(e.latestSelectedDateObj?e.latestSelectedDateObj.getSeconds():n.seconds),e.secondElement.setAttribute("step",e.minuteElement.getAttribute("step")),e.secondElement.setAttribute("min","0"),e.secondElement.setAttribute("max","59"),e.secondElement.setAttribute("maxlength","2"),e.timeContainer.appendChild(M("span","flatpickr-time-separator",":")),e.timeContainer.appendChild(f)}return e.config.time_24hr||(e.amPM=M("span","flatpickr-am-pm",e.l10n.amPM[G((e.latestSelectedDateObj?e.hourElement.value:e.config.defaultHour)>11)]),e.amPM.title=e.l10n.toggleTitle,e.amPM.tabIndex=-1,e.timeContainer.appendChild(e.amPM)),e.timeContainer}function Dt(){e.weekdayContainer?Ve(e.weekdayContainer):e.weekdayContainer=M("div","flatpickr-weekdays");for(var n=e.config.showMonths;n--;){var a=M("div","flatpickr-weekdaycontainer");e.weekdayContainer.appendChild(a)}return _t(),e.weekdayContainer}function _t(){if(e.weekdayContainer){var n=e.l10n.firstDayOfWeek,a=sr(e.l10n.weekdays.shorthand);n>0&&n<a.length&&(a=sr(a.splice(n,a.length),a.splice(0,n)));for(var l=e.config.showMonths;l--;)e.weekdayContainer.children[l].innerHTML=`
      <span class='flatpickr-weekday'>
        `+a.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function Ir(){e.calendarContainer.classList.add("hasWeeks");var n=M("div","flatpickr-weekwrapper");n.appendChild(M("span","flatpickr-weekday",e.l10n.weekAbbreviation));var a=M("div","flatpickr-weeks");return n.appendChild(a),{weekWrapper:n,weekNumbers:a}}function Je(n,a){a===void 0&&(a=!0);var l=a?n:n-e.currentMonth;l<0&&e._hidePrevMonthArrow===!0||l>0&&e._hideNextMonthArrow===!0||(e.currentMonth+=l,(e.currentMonth<0||e.currentMonth>11)&&(e.currentYear+=e.currentMonth>11?1:-1,e.currentMonth=(e.currentMonth+12)%12,I("onYearChange"),Y()),C(),I("onMonthChange"),qe())}function zr(n,a){if(n===void 0&&(n=!0),a===void 0&&(a=!0),e.input.value="",e.altInput!==void 0&&(e.altInput.value=""),e.mobileInput!==void 0&&(e.mobileInput.value=""),e.selectedDates=[],e.latestSelectedDateObj=void 0,a===!0&&(e.currentYear=e._initialDate.getFullYear(),e.currentMonth=e._initialDate.getMonth()),e.config.enableTime===!0){var l=mt(e.config),c=l.hours,f=l.minutes,g=l.seconds;A(c,f,g)}e.redraw(),n&&I("onChange")}function Or(){e.isOpen=!1,e.isMobile||(e.calendarContainer!==void 0&&e.calendarContainer.classList.remove("open"),e._input!==void 0&&e._input.classList.remove("active")),I("onClose")}function Yr(){e.config!==void 0&&I("onDestroy");for(var n=e._handlers.length;n--;)e._handlers[n].remove();if(e._handlers=[],e.mobileInput)e.mobileInput.parentNode&&e.mobileInput.parentNode.removeChild(e.mobileInput),e.mobileInput=void 0;else if(e.calendarContainer&&e.calendarContainer.parentNode)if(e.config.static&&e.calendarContainer.parentNode){var a=e.calendarContainer.parentNode;if(a.lastChild&&a.removeChild(a.lastChild),a.parentNode){for(;a.firstChild;)a.parentNode.insertBefore(a.firstChild,a);a.parentNode.removeChild(a)}}else e.calendarContainer.parentNode.removeChild(e.calendarContainer);e.altInput&&(e.input.type="text",e.altInput.parentNode&&e.altInput.parentNode.removeChild(e.altInput),delete e.altInput),e.input&&(e.input.type=e.input._type,e.input.classList.remove("flatpickr-input"),e.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(l){try{delete e[l]}catch{}})}function De(n){return e.calendarContainer.contains(n)}function Xe(n){if(e.isOpen&&!e.config.inline){var a=V(n),l=De(a),c=a===e.input||a===e.altInput||e.element.contains(a)||n.path&&n.path.indexOf&&(~n.path.indexOf(e.input)||~n.path.indexOf(e.altInput)),f=!c&&!l&&!De(n.relatedTarget),g=!e.config.ignoredFocusElements.some(function(k){return k.contains(a)});f&&g&&(e.config.allowInput&&e.setDate(e._input.value,!1,e.config.altInput?e.config.altFormat:e.config.dateFormat),e.timeContainer!==void 0&&e.minuteElement!==void 0&&e.hourElement!==void 0&&e.input.value!==""&&e.input.value!==void 0&&u(),e.close(),e.config&&e.config.mode==="range"&&e.selectedDates.length===1&&e.clear(!1))}}function Le(n){if(!(!n||e.config.minDate&&n<e.config.minDate.getFullYear()||e.config.maxDate&&n>e.config.maxDate.getFullYear())){var a=n,l=e.currentYear!==a;e.currentYear=a||e.currentYear,e.config.maxDate&&e.currentYear===e.config.maxDate.getFullYear()?e.currentMonth=Math.min(e.config.maxDate.getMonth(),e.currentMonth):e.config.minDate&&e.currentYear===e.config.minDate.getFullYear()&&(e.currentMonth=Math.max(e.config.minDate.getMonth(),e.currentMonth)),l&&(e.redraw(),I("onYearChange"),Y())}}function le(n,a){var l;a===void 0&&(a=!0);var c=e.parseDate(n,void 0,a);if(e.config.minDate&&c&&j(c,e.config.minDate,a!==void 0?a:!e.minDateHasTime)<0||e.config.maxDate&&c&&j(c,e.config.maxDate,a!==void 0?a:!e.maxDateHasTime)>0)return!1;if(!e.config.enable&&e.config.disable.length===0)return!0;if(c===void 0)return!1;for(var f=!!e.config.enable,g=(l=e.config.enable)!==null&&l!==void 0?l:e.config.disable,k=0,w=void 0;k<g.length;k++){if(w=g[k],typeof w=="function"&&w(c))return f;if(w instanceof Date&&c!==void 0&&w.getTime()===c.getTime())return f;if(typeof w=="string"){var D=e.parseDate(w,void 0,!0);return D&&D.getTime()===c.getTime()?f:!f}else if(typeof w=="object"&&c!==void 0&&w.from&&w.to&&c.getTime()>=w.from.getTime()&&c.getTime()<=w.to.getTime())return f}return!f}function Ne(n){return e.daysContainer!==void 0?n.className.indexOf("hidden")===-1&&n.className.indexOf("flatpickr-disabled")===-1&&e.daysContainer.contains(n):!1}function Lr(n){var a=n.target===e._input,l=e._input.value.trimEnd()!==tt();a&&l&&!(n.relatedTarget&&De(n.relatedTarget))&&e.setDate(e._input.value,!0,n.target===e.altInput?e.config.altFormat:e.config.dateFormat)}function St(n){var a=V(n),l=e.config.wrap?r.contains(a):a===e._input,c=e.config.allowInput,f=e.isOpen&&(!c||!l),g=e.config.inline&&l&&!c;if(n.keyCode===13&&l){if(c)return e.setDate(e._input.value,!0,a===e.altInput?e.config.altFormat:e.config.dateFormat),e.close(),a.blur();e.open()}else if(De(a)||f||g){var k=!!e.timeContainer&&e.timeContainer.contains(a);switch(n.keyCode){case 13:k?(n.preventDefault(),u(),Ze()):Tt(n);break;case 27:n.preventDefault(),Ze();break;case 8:case 46:l&&!e.config.allowInput&&(n.preventDefault(),e.clear());break;case 37:case 39:if(!k&&!l){n.preventDefault();var w=s();if(e.daysContainer!==void 0&&(c===!1||w&&Ne(w))){var D=n.keyCode===39?1:-1;n.ctrlKey?(n.stopPropagation(),Je(D),x(re(1),0)):x(void 0,D)}}else e.hourElement&&e.hourElement.focus();break;case 38:case 40:n.preventDefault();var v=n.keyCode===40?1:-1;e.daysContainer&&a.$i!==void 0||a===e.input||a===e.altInput?n.ctrlKey?(n.stopPropagation(),Le(e.currentYear-v),x(re(1),0)):k||x(void 0,v*7):a===e.currentYearElement?Le(e.currentYear-v):e.config.enableTime&&(!k&&e.hourElement&&e.hourElement.focus(),u(n),e._debouncedChange());break;case 9:if(k){var F=[e.hourElement,e.minuteElement,e.secondElement,e.amPM].concat(e.pluginElements).filter(function(q){return q}),P=F.indexOf(a);if(P!==-1){var Z=F[P+(n.shiftKey?-1:1)];n.preventDefault(),(Z||e._input).focus()}}else!e.config.noCalendar&&e.daysContainer&&e.daysContainer.contains(a)&&n.shiftKey&&(n.preventDefault(),e._input.focus());break}}if(e.amPM!==void 0&&a===e.amPM)switch(n.key){case e.l10n.amPM[0].charAt(0):case e.l10n.amPM[0].charAt(0).toLowerCase():e.amPM.textContent=e.l10n.amPM[0],h(),ee();break;case e.l10n.amPM[1].charAt(0):case e.l10n.amPM[1].charAt(0).toLowerCase():e.amPM.textContent=e.l10n.amPM[1],h(),ee();break}(l||De(a))&&I("onKeyDown",n)}function Re(n,a){if(a===void 0&&(a="flatpickr-day"),!(e.selectedDates.length!==1||n&&(!n.classList.contains(a)||n.classList.contains("flatpickr-disabled")))){for(var l=n?n.dateObj.getTime():e.days.firstElementChild.dateObj.getTime(),c=e.parseDate(e.selectedDates[0],void 0,!0).getTime(),f=Math.min(l,e.selectedDates[0].getTime()),g=Math.max(l,e.selectedDates[0].getTime()),k=!1,w=0,D=0,v=f;v<g;v+=Yo.DAY)le(new Date(v),!0)||(k=k||v>f&&v<g,v<c&&(!w||v>w)?w=v:v>c&&(!D||v<D)&&(D=v));var F=Array.from(e.rContainer.querySelectorAll("*:nth-child(-n+"+e.config.showMonths+") > ."+a));F.forEach(function(P){var Z=P.dateObj,q=Z.getTime(),_e=w>0&&q<w||D>0&&q>D;if(_e){P.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(ge){P.classList.remove(ge)});return}else if(k&&!_e)return;["startRange","inRange","endRange","notAllowed"].forEach(function(ge){P.classList.remove(ge)}),n!==void 0&&(n.classList.add(l<=e.selectedDates[0].getTime()?"startRange":"endRange"),c<l&&q===c?P.classList.add("startRange"):c>l&&q===c&&P.classList.add("endRange"),q>=w&&(D===0||q<=D)&&zo(q,c,l)&&P.classList.add("inRange"))})}}function Nr(){e.isOpen&&!e.config.static&&!e.config.inline&&He()}function Rr(n,a){if(a===void 0&&(a=e._positionElement),e.isMobile===!0){if(n){n.preventDefault();var l=V(n);l&&l.blur()}e.mobileInput!==void 0&&(e.mobileInput.focus(),e.mobileInput.click()),I("onOpen");return}else if(e._input.disabled||e.config.inline)return;var c=e.isOpen;e.isOpen=!0,c||(e.calendarContainer.classList.add("open"),e._input.classList.add("active"),I("onOpen"),He(a)),e.config.enableTime===!0&&e.config.noCalendar===!0&&e.config.allowInput===!1&&(n===void 0||!e.timeContainer.contains(n.relatedTarget))&&setTimeout(function(){return e.hourElement.select()},50)}function Mt(n){return function(a){var l=e.config["_"+n+"Date"]=e.parseDate(a,e.config.dateFormat),c=e.config["_"+(n==="min"?"max":"min")+"Date"];l!==void 0&&(e[n==="min"?"minDateHasTime":"maxDateHasTime"]=l.getHours()>0||l.getMinutes()>0||l.getSeconds()>0),e.selectedDates&&(e.selectedDates=e.selectedDates.filter(function(f){return le(f)}),!e.selectedDates.length&&n==="min"&&E(l),ee()),e.daysContainer&&(At(),l!==void 0?e.currentYearElement[n]=l.getFullYear().toString():e.currentYearElement.removeAttribute(n),e.currentYearElement.disabled=!!c&&l!==void 0&&c.getFullYear()===l.getFullYear())}}function Hr(){var n=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],a=N(N({},JSON.parse(JSON.stringify(r.dataset||{}))),t),l={};e.config.parseDate=a.parseDate,e.config.formatDate=a.formatDate,Object.defineProperty(e.config,"enable",{get:function(){return e.config._enable},set:function(F){e.config._enable=It(F)}}),Object.defineProperty(e.config,"disable",{get:function(){return e.config._disable},set:function(F){e.config._disable=It(F)}});var c=a.mode==="time";if(!a.dateFormat&&(a.enableTime||c)){var f=O.defaultConfig.dateFormat||ve.dateFormat;l.dateFormat=a.noCalendar||c?"H:i"+(a.enableSeconds?":S":""):f+" H:i"+(a.enableSeconds?":S":"")}if(a.altInput&&(a.enableTime||c)&&!a.altFormat){var g=O.defaultConfig.altFormat||ve.altFormat;l.altFormat=a.noCalendar||c?"h:i"+(a.enableSeconds?":S K":" K"):g+(" h:i"+(a.enableSeconds?":S":"")+" K")}Object.defineProperty(e.config,"minDate",{get:function(){return e.config._minDate},set:Mt("min")}),Object.defineProperty(e.config,"maxDate",{get:function(){return e.config._maxDate},set:Mt("max")});var k=function(F){return function(P){e.config[F==="min"?"_minTime":"_maxTime"]=e.parseDate(P,"H:i:S")}};Object.defineProperty(e.config,"minTime",{get:function(){return e.config._minTime},set:k("min")}),Object.defineProperty(e.config,"maxTime",{get:function(){return e.config._maxTime},set:k("max")}),a.mode==="time"&&(e.config.noCalendar=!0,e.config.enableTime=!0),Object.assign(e.config,l,a);for(var w=0;w<n.length;w++)e.config[n[w]]=e.config[n[w]]===!0||e.config[n[w]]==="true";ut.filter(function(F){return e.config[F]!==void 0}).forEach(function(F){e.config[F]=pt(e.config[F]||[]).map(b)}),e.isMobile=!e.config.disableMobile&&!e.config.inline&&e.config.mode==="single"&&!e.config.disable.length&&!e.config.enable&&!e.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var w=0;w<e.config.plugins.length;w++){var D=e.config.plugins[w](e)||{};for(var v in D)ut.indexOf(v)>-1?e.config[v]=pt(D[v]).map(b).concat(e.config[v]):typeof a[v]>"u"&&(e.config[v]=D[v])}a.altInputClass||(e.config.altInputClass=Ct().className+" "+e.config.altInputClass),I("onParseConfig")}function Ct(){return e.config.wrap?r.querySelector("[data-input]"):r}function Et(){typeof e.config.locale!="object"&&typeof O.l10ns[e.config.locale]>"u"&&e.config.errorHandler(new Error("flatpickr: invalid locale "+e.config.locale)),e.l10n=N(N({},O.l10ns.default),typeof e.config.locale=="object"?e.config.locale:e.config.locale!=="default"?O.l10ns[e.config.locale]:void 0),ce.D="("+e.l10n.weekdays.shorthand.join("|")+")",ce.l="("+e.l10n.weekdays.longhand.join("|")+")",ce.M="("+e.l10n.months.shorthand.join("|")+")",ce.F="("+e.l10n.months.longhand.join("|")+")",ce.K="("+e.l10n.amPM[0]+"|"+e.l10n.amPM[1]+"|"+e.l10n.amPM[0].toLowerCase()+"|"+e.l10n.amPM[1].toLowerCase()+")";var n=N(N({},t),JSON.parse(JSON.stringify(r.dataset||{})));n.time_24hr===void 0&&O.defaultConfig.time_24hr===void 0&&(e.config.time_24hr=e.l10n.time_24hr),e.formatDate=Ar(e),e.parseDate=xt({config:e.config,l10n:e.l10n})}function He(n){if(typeof e.config.position=="function")return void e.config.position(e,n);if(e.calendarContainer!==void 0){I("onPreCalendarPosition");var a=n||e._positionElement,l=Array.prototype.reduce.call(e.calendarContainer.children,function(ao,so){return ao+so.offsetHeight},0),c=e.calendarContainer.offsetWidth,f=e.config.position.split(" "),g=f[0],k=f.length>1?f[1]:null,w=a.getBoundingClientRect(),D=window.innerHeight-w.bottom,v=g==="above"||g!=="below"&&D<l&&w.top>l,F=window.pageYOffset+w.top+(v?-l-2:a.offsetHeight+2);if(R(e.calendarContainer,"arrowTop",!v),R(e.calendarContainer,"arrowBottom",v),!e.config.inline){var P=window.pageXOffset+w.left,Z=!1,q=!1;k==="center"?(P-=(c-w.width)/2,Z=!0):k==="right"&&(P-=c-w.width,q=!0),R(e.calendarContainer,"arrowLeft",!Z&&!q),R(e.calendarContainer,"arrowCenter",Z),R(e.calendarContainer,"arrowRight",q);var _e=window.document.body.offsetWidth-(window.pageXOffset+w.right),ge=P+c>window.document.body.offsetWidth,Qr=_e+c>window.document.body.offsetWidth;if(R(e.calendarContainer,"rightMost",ge),!e.config.static)if(e.calendarContainer.style.top=F+"px",!ge)e.calendarContainer.style.left=P+"px",e.calendarContainer.style.right="auto";else if(!Qr)e.calendarContainer.style.left="auto",e.calendarContainer.style.right=_e+"px";else{var rt=Br();if(rt===void 0)return;var eo=window.document.body.offsetWidth,to=Math.max(0,eo/2-c/2),ro=".flatpickr-calendar.centerMost:before",oo=".flatpickr-calendar.centerMost:after",no=rt.cssRules.length,io="{left:"+w.left+"px;right:auto;}";R(e.calendarContainer,"rightMost",!1),R(e.calendarContainer,"centerMost",!0),rt.insertRule(ro+","+oo+io,no),e.calendarContainer.style.left=to+"px",e.calendarContainer.style.right="auto"}}}}function Br(){for(var n=null,a=0;a<document.styleSheets.length;a++){var l=document.styleSheets[a];if(l.cssRules){try{l.cssRules}catch{continue}n=l;break}}return n??qr()}function qr(){var n=document.createElement("style");return document.head.appendChild(n),n.sheet}function At(){e.config.noCalendar||e.isMobile||(Y(),qe(),C())}function Ze(){e._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(e.close,0):e.close()}function Tt(n){n.preventDefault(),n.stopPropagation();var a=function(F){return F.classList&&F.classList.contains("flatpickr-day")&&!F.classList.contains("flatpickr-disabled")&&!F.classList.contains("notAllowed")},l=Er(V(n),a);if(l!==void 0){var c=l,f=e.latestSelectedDateObj=new Date(c.dateObj.getTime()),g=(f.getMonth()<e.currentMonth||f.getMonth()>e.currentMonth+e.config.showMonths-1)&&e.config.mode!=="range";if(e.selectedDateElem=c,e.config.mode==="single")e.selectedDates=[f];else if(e.config.mode==="multiple"){var k=et(f);k?e.selectedDates.splice(parseInt(k),1):e.selectedDates.push(f)}else e.config.mode==="range"&&(e.selectedDates.length===2&&e.clear(!1,!1),e.latestSelectedDateObj=f,e.selectedDates.push(f),j(f,e.selectedDates[0],!0)!==0&&e.selectedDates.sort(function(F,P){return F.getTime()-P.getTime()}));if(h(),g){var w=e.currentYear!==f.getFullYear();e.currentYear=f.getFullYear(),e.currentMonth=f.getMonth(),w&&(I("onYearChange"),Y()),I("onMonthChange")}if(qe(),C(),ee(),!g&&e.config.mode!=="range"&&e.config.showMonths===1?te(c):e.selectedDateElem!==void 0&&e.hourElement===void 0&&e.selectedDateElem&&e.selectedDateElem.focus(),e.hourElement!==void 0&&e.hourElement!==void 0&&e.hourElement.focus(),e.config.closeOnSelect){var D=e.config.mode==="single"&&!e.config.enableTime,v=e.config.mode==="range"&&e.selectedDates.length===2&&!e.config.enableTime;(D||v)&&Ze()}U()}}var Be={locale:[Et,_t],showMonths:[Oe,m,Dt],minDate:[W],maxDate:[W],positionElement:[zt],clickOpens:[function(){e.config.clickOpens===!0?(_(e._input,"focus",e.open),_(e._input,"click",e.open)):(e._input.removeEventListener("focus",e.open),e._input.removeEventListener("click",e.open))}]};function Vr(n,a){if(n!==null&&typeof n=="object"){Object.assign(e.config,n);for(var l in n)Be[l]!==void 0&&Be[l].forEach(function(c){return c()})}else e.config[n]=a,Be[n]!==void 0?Be[n].forEach(function(c){return c()}):ut.indexOf(n)>-1&&(e.config[n]=pt(a));e.redraw(),ee(!0)}function Pt(n,a){var l=[];if(n instanceof Array)l=n.map(function(c){return e.parseDate(c,a)});else if(n instanceof Date||typeof n=="number")l=[e.parseDate(n,a)];else if(typeof n=="string")switch(e.config.mode){case"single":case"time":l=[e.parseDate(n,a)];break;case"multiple":l=n.split(e.config.conjunction).map(function(c){return e.parseDate(c,a)});break;case"range":l=n.split(e.l10n.rangeSeparator).map(function(c){return e.parseDate(c,a)});break}else e.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(n)));e.selectedDates=e.config.allowInvalidPreload?l:l.filter(function(c){return c instanceof Date&&le(c,!1)}),e.config.mode==="range"&&e.selectedDates.sort(function(c,f){return c.getTime()-f.getTime()})}function jr(n,a,l){if(a===void 0&&(a=!1),l===void 0&&(l=e.config.dateFormat),n!==0&&!n||n instanceof Array&&n.length===0)return e.clear(a);Pt(n,l),e.latestSelectedDateObj=e.selectedDates[e.selectedDates.length-1],e.redraw(),W(void 0,a),E(),e.selectedDates.length===0&&e.clear(!1),ee(a),a&&I("onChange")}function It(n){return n.slice().map(function(a){return typeof a=="string"||typeof a=="number"||a instanceof Date?e.parseDate(a,void 0,!0):a&&typeof a=="object"&&a.from&&a.to?{from:e.parseDate(a.from,void 0),to:e.parseDate(a.to,void 0)}:a}).filter(function(a){return a})}function Ur(){e.selectedDates=[],e.now=e.parseDate(e.config.now)||new Date;var n=e.config.defaultDate||((e.input.nodeName==="INPUT"||e.input.nodeName==="TEXTAREA")&&e.input.placeholder&&e.input.value===e.input.placeholder?null:e.input.value);n&&Pt(n,e.config.dateFormat),e._initialDate=e.selectedDates.length>0?e.selectedDates[0]:e.config.minDate&&e.config.minDate.getTime()>e.now.getTime()?e.config.minDate:e.config.maxDate&&e.config.maxDate.getTime()<e.now.getTime()?e.config.maxDate:e.now,e.currentYear=e._initialDate.getFullYear(),e.currentMonth=e._initialDate.getMonth(),e.selectedDates.length>0&&(e.latestSelectedDateObj=e.selectedDates[0]),e.config.minTime!==void 0&&(e.config.minTime=e.parseDate(e.config.minTime,"H:i")),e.config.maxTime!==void 0&&(e.config.maxTime=e.parseDate(e.config.maxTime,"H:i")),e.minDateHasTime=!!e.config.minDate&&(e.config.minDate.getHours()>0||e.config.minDate.getMinutes()>0||e.config.minDate.getSeconds()>0),e.maxDateHasTime=!!e.config.maxDate&&(e.config.maxDate.getHours()>0||e.config.maxDate.getMinutes()>0||e.config.maxDate.getSeconds()>0)}function Gr(){if(e.input=Ct(),!e.input){e.config.errorHandler(new Error("Invalid input element specified"));return}e.input._type=e.input.type,e.input.type="text",e.input.classList.add("flatpickr-input"),e._input=e.input,e.config.altInput&&(e.altInput=M(e.input.nodeName,e.config.altInputClass),e._input=e.altInput,e.altInput.placeholder=e.input.placeholder,e.altInput.disabled=e.input.disabled,e.altInput.required=e.input.required,e.altInput.tabIndex=e.input.tabIndex,e.altInput.type="text",e.input.setAttribute("type","hidden"),!e.config.static&&e.input.parentNode&&e.input.parentNode.insertBefore(e.altInput,e.input.nextSibling)),e.config.allowInput||e._input.setAttribute("readonly","readonly"),zt()}function zt(){e._positionElement=e.config.positionElement||e._input}function Wr(){var n=e.config.enableTime?e.config.noCalendar?"time":"datetime-local":"date";e.mobileInput=M("input",e.input.className+" flatpickr-mobile"),e.mobileInput.tabIndex=1,e.mobileInput.type=n,e.mobileInput.disabled=e.input.disabled,e.mobileInput.required=e.input.required,e.mobileInput.placeholder=e.input.placeholder,e.mobileFormatStr=n==="datetime-local"?"Y-m-d\\TH:i:S":n==="date"?"Y-m-d":"H:i:S",e.selectedDates.length>0&&(e.mobileInput.defaultValue=e.mobileInput.value=e.formatDate(e.selectedDates[0],e.mobileFormatStr)),e.config.minDate&&(e.mobileInput.min=e.formatDate(e.config.minDate,"Y-m-d")),e.config.maxDate&&(e.mobileInput.max=e.formatDate(e.config.maxDate,"Y-m-d")),e.input.getAttribute("step")&&(e.mobileInput.step=String(e.input.getAttribute("step"))),e.input.type="hidden",e.altInput!==void 0&&(e.altInput.type="hidden");try{e.input.parentNode&&e.input.parentNode.insertBefore(e.mobileInput,e.input.nextSibling)}catch{}_(e.mobileInput,"change",function(a){e.setDate(V(a).value,!1,e.mobileFormatStr),I("onChange"),I("onClose")})}function Kr(n){if(e.isOpen===!0)return e.close();e.open(n)}function I(n,a){if(e.config!==void 0){var l=e.config[n];if(l!==void 0&&l.length>0)for(var c=0;l[c]&&c<l.length;c++)l[c](e.selectedDates,e.input.value,e,a);n==="onChange"&&(e.input.dispatchEvent(Qe("change")),e.input.dispatchEvent(Qe("input")))}}function Qe(n){var a=document.createEvent("Event");return a.initEvent(n,!0,!0),a}function et(n){for(var a=0;a<e.selectedDates.length;a++){var l=e.selectedDates[a];if(l instanceof Date&&j(l,n)===0)return""+a}return!1}function Jr(n){return e.config.mode!=="range"||e.selectedDates.length<2?!1:j(n,e.selectedDates[0])>=0&&j(n,e.selectedDates[1])<=0}function qe(){e.config.noCalendar||e.isMobile||!e.monthNav||(e.yearElements.forEach(function(n,a){var l=new Date(e.currentYear,e.currentMonth,1);l.setMonth(e.currentMonth+a),e.config.showMonths>1||e.config.monthSelectorType==="static"?e.monthElements[a].textContent=We(l.getMonth(),e.config.shorthandCurrentMonth,e.l10n)+" ":e.monthsDropdownContainer.value=l.getMonth().toString(),n.value=l.getFullYear().toString()}),e._hidePrevMonthArrow=e.config.minDate!==void 0&&(e.currentYear===e.config.minDate.getFullYear()?e.currentMonth<=e.config.minDate.getMonth():e.currentYear<e.config.minDate.getFullYear()),e._hideNextMonthArrow=e.config.maxDate!==void 0&&(e.currentYear===e.config.maxDate.getFullYear()?e.currentMonth+1>e.config.maxDate.getMonth():e.currentYear>e.config.maxDate.getFullYear()))}function tt(n){var a=n||(e.config.altInput?e.config.altFormat:e.config.dateFormat);return e.selectedDates.map(function(l){return e.formatDate(l,a)}).filter(function(l,c,f){return e.config.mode!=="range"||e.config.enableTime||f.indexOf(l)===c}).join(e.config.mode!=="range"?e.config.conjunction:e.l10n.rangeSeparator)}function ee(n){n===void 0&&(n=!0),e.mobileInput!==void 0&&e.mobileFormatStr&&(e.mobileInput.value=e.latestSelectedDateObj!==void 0?e.formatDate(e.latestSelectedDateObj,e.mobileFormatStr):""),e.input.value=tt(e.config.dateFormat),e.altInput!==void 0&&(e.altInput.value=tt(e.config.altFormat)),n!==!1&&I("onValueUpdate")}function Xr(n){var a=V(n),l=e.prevMonthNav.contains(a),c=e.nextMonthNav.contains(a);l||c?Je(l?-1:1):e.yearElements.indexOf(a)>=0?a.select():a.classList.contains("arrowUp")?e.changeYear(e.currentYear+1):a.classList.contains("arrowDown")&&e.changeYear(e.currentYear-1)}function Zr(n){n.preventDefault();var a=n.type==="keydown",l=V(n),c=l;e.amPM!==void 0&&l===e.amPM&&(e.amPM.textContent=e.l10n.amPM[G(e.amPM.textContent===e.l10n.amPM[0])]);var f=parseFloat(c.getAttribute("min")),g=parseFloat(c.getAttribute("max")),k=parseFloat(c.getAttribute("step")),w=parseInt(c.value,10),D=n.delta||(a?n.which===38?1:-1:0),v=w+k*D;if(typeof c.value<"u"&&c.value.length===2){var F=c===e.hourElement,P=c===e.minuteElement;v<f?(v=g+v+G(!F)+(G(F)&&G(!e.amPM)),P&&Q(void 0,-1,e.hourElement)):v>g&&(v=c===e.hourElement?v-g-G(!e.amPM):f,P&&Q(void 0,1,e.hourElement)),e.amPM&&F&&(k===1?v+w===23:Math.abs(v-w)>k)&&(e.amPM.textContent=e.l10n.amPM[G(e.amPM.textContent===e.l10n.amPM[0])]),c.value=H(v)}}return i(),e}function ye(r,t){for(var e=Array.prototype.slice.call(r).filter(function(b){return b instanceof HTMLElement}),o=[],i=0;i<e.length;i++){var s=e[i];try{if(s.getAttribute("data-fp-omit")!==null)continue;s._flatpickr!==void 0&&(s._flatpickr.destroy(),s._flatpickr=void 0),s._flatpickr=No(s,t||{}),o.push(s._flatpickr)}catch(b){console.error(b)}}return o.length===1?o[0]:o}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(r){return ye(this,r)},HTMLElement.prototype.flatpickr=function(r){return ye([this],r)});var O=function(r,t){return typeof r=="string"?ye(window.document.querySelectorAll(r),t):r instanceof Node?ye([r],t):ye(r,t)};O.defaultConfig={};O.l10ns={en:N({},Ie),default:N({},Ie)};O.localize=function(r){O.l10ns.default=N(N({},O.l10ns.default),r)};O.setDefaults=function(r){O.defaultConfig=N(N({},O.defaultConfig),r)};O.parseDate=xt({});O.formatDate=Ar({});O.compareDates=j;typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(r){return ye(this,r)});Date.prototype.fp_incr=function(r){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof r=="string"?parseInt(r,10):r))};typeof window<"u"&&(window.flatpickr=O);var Ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ho(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Tr={exports:{}};(function(r,t){(function(e,o){r.exports=o()})(Ro,function(){/*! *****************************************************************************
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
	    ***************************************************************************** */var e=function(){return e=Object.assign||function(y){for(var d,h=1,E=arguments.length;h<E;h++){d=arguments[h];for(var A in d)Object.prototype.hasOwnProperty.call(d,A)&&(y[A]=d[A])}return y},e.apply(this,arguments)},o=function(u,y,d){return d.months[y?"shorthand":"longhand"][u]};function i(u){for(;u.firstChild;)u.removeChild(u.firstChild)}function s(u){try{if(typeof u.composedPath=="function"){var y=u.composedPath();return y[0]}return u.target}catch{return u.target}}var b={shorthand:!1,dateFormat:"F Y",altFormat:"F Y",theme:"light"};function m(u){var y=e(e({},b),u);return function(d){d.config.dateFormat=y.dateFormat,d.config.altFormat=y.altFormat;var h={monthsContainer:null};function E(){if(d.rContainer){i(d.rContainer);for(var x=0;x<d.monthElements.length;x++){var S=d.monthElements[x];S.parentNode&&S.parentNode.removeChild(S)}}}function A(){d.rContainer&&(h.monthsContainer=d._createElement("div","flatpickr-monthSelect-months"),h.monthsContainer.tabIndex=-1,L(),d.rContainer.appendChild(h.monthsContainer),d.calendarContainer.classList.add("flatpickr-monthSelect-theme-"+y.theme))}function L(){if(h.monthsContainer){i(h.monthsContainer);for(var x=document.createDocumentFragment(),S=0;S<12;S++){var C=d.createDay("flatpickr-monthSelect-month",new Date(d.currentYear,S),0,S);C.dateObj.getMonth()===new Date().getMonth()&&C.dateObj.getFullYear()===new Date().getFullYear()&&C.classList.add("today"),C.textContent=o(S,y.shorthand,d.l10n),C.addEventListener("click",W),x.appendChild(C)}h.monthsContainer.appendChild(x),d.config.minDate&&d.currentYear===d.config.minDate.getFullYear()?d.prevMonthNav.classList.add("flatpickr-disabled"):d.prevMonthNav.classList.remove("flatpickr-disabled"),d.config.maxDate&&d.currentYear===d.config.maxDate.getFullYear()?d.nextMonthNav.classList.add("flatpickr-disabled"):d.nextMonthNav.classList.remove("flatpickr-disabled")}}function _(){d._bind(d.prevMonthNav,"click",function(x){x.preventDefault(),x.stopPropagation(),d.changeYear(d.currentYear-1),pe(),L()}),d._bind(d.nextMonthNav,"click",function(x){x.preventDefault(),x.stopPropagation(),d.changeYear(d.currentYear+1),pe(),L()}),d._bind(h.monthsContainer,"mouseover",function(x){d.config.mode==="range"&&d.onMouseOver(s(x),"flatpickr-monthSelect-month")})}function U(){if(d.rContainer&&d.selectedDates.length){for(var x=d.rContainer.querySelectorAll(".flatpickr-monthSelect-month.selected"),S=0;S<x.length;S++)x[S].classList.remove("selected");var C=d.selectedDates[0].getMonth(),Y=d.rContainer.querySelector(".flatpickr-monthSelect-month:nth-child("+(C+1)+")");Y&&Y.classList.add("selected")}}function pe(){var x=d.selectedDates[0];if(x&&(x=new Date(x),x.setFullYear(d.currentYear),d.config.minDate&&x<d.config.minDate&&(x=d.config.minDate),d.config.maxDate&&x>d.config.maxDate&&(x=d.config.maxDate),d.currentYear=x.getFullYear()),d.currentYearElement.value=String(d.currentYear),d.rContainer){var S=d.rContainer.querySelectorAll(".flatpickr-monthSelect-month");S.forEach(function(C){C.dateObj.setFullYear(d.currentYear),d.config.minDate&&C.dateObj<d.config.minDate||d.config.maxDate&&C.dateObj>d.config.maxDate?C.classList.add("flatpickr-disabled"):C.classList.remove("flatpickr-disabled")})}U()}function W(x){x.preventDefault(),x.stopPropagation();var S=s(x);if(S instanceof Element&&!S.classList.contains("flatpickr-disabled")&&!S.classList.contains("notAllowed")&&(J(S.dateObj),d.config.closeOnSelect)){var C=d.config.mode==="single",Y=d.config.mode==="range"&&d.selectedDates.length===2;(C||Y)&&d.close()}}function J(x){var S=new Date(d.currentYear,x.getMonth(),x.getDate()),C=[];switch(d.config.mode){case"single":C=[S];break;case"multiple":C.push(S);break;case"range":d.selectedDates.length===2?C=[S]:(C=d.selectedDates.concat([S]),C.sort(function(Y,he){return Y.getTime()-he.getTime()}));break}d.setDate(C,!0),U()}var Q={37:-1,39:1,40:3,38:-3};function Fe(x,S,C,Y){var he=Q[Y.keyCode]!==void 0;if(!(!he&&Y.keyCode!==13)&&!(!d.rContainer||!h.monthsContainer)){var Oe=d.rContainer.querySelector(".flatpickr-monthSelect-month.selected"),$e=Array.prototype.indexOf.call(h.monthsContainer.children,document.activeElement);if($e===-1){var Ye=Oe||h.monthsContainer.firstElementChild;Ye.focus(),$e=Ye.$i}he?h.monthsContainer.children[(12+$e+Q[Y.keyCode])%12].focus():Y.keyCode===13&&h.monthsContainer.contains(document.activeElement)&&J(document.activeElement.dateObj)}}function X(){var x;((x=d.config)===null||x===void 0?void 0:x.mode)==="range"&&d.selectedDates.length===1&&d.clear(!1),d.selectedDates.length||L()}function te(){y._stubbedCurrentMonth=d._initialDate.getMonth(),d._initialDate.setMonth(y._stubbedCurrentMonth),d.currentMonth=y._stubbedCurrentMonth}function re(){y._stubbedCurrentMonth&&(d._initialDate.setMonth(y._stubbedCurrentMonth),d.currentMonth=y._stubbedCurrentMonth,delete y._stubbedCurrentMonth)}function ke(){if(h.monthsContainer!==null)for(var x=h.monthsContainer.querySelectorAll(".flatpickr-monthSelect-month"),S=0;S<x.length;S++)x[S].removeEventListener("click",W)}return{onParseConfig:function(){d.config.enableTime=!1},onValueUpdate:U,onKeyDown:Fe,onReady:[te,E,A,_,U,function(){d.config.onClose.push(X),d.loadedPlugins.push("monthSelect")}],onDestroy:[re,ke,function(){d.config.onClose=d.config.onClose.filter(function(x){return x!==X})}]}}}return m})})(Tr);var Bo=Tr.exports;const qo=Ho(Bo);class Pr extends K{constructor(){super(),this.initCurrentMonth=()=>{this.initTodayDate()},this.initTodayDate=()=>{const t=this["start-year-offset"]||0,e=this["start-month-offset"]||0,o=this["start-day-offset"]||0,i=new Date;i.setFullYear(i.getFullYear()+t),i.setMonth(i.getMonth()+e),i.setDate(i.getDate()+o),this._datepicker.setDate(i)},this._handleClick=t=>this._datepicker.open()}setDateType(t){this._dateType=t}get getDateType(){return this._dateType}createRenderRoot(){return this}static get properties(){return{id:{type:String},name:{type:String},size:{type:String},format:{type:String},label:{type:String},"label-align":{type:String},"label-width":{type:String},"label-text-align":{type:String},feedback:{type:String},"feedback-type":{type:String},"feedback-visible-type":{type:String},width:{type:String},required:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},value:{type:String},showAlways:{type:Boolean},invisible:{type:Boolean},"start-year-offset":{type:Number},"start-month-offset":{type:Number},"start-day-offset":{type:Number}}}get getSelector(){const t=`${this.id}-input`;return document.querySelector(`#${t}`)}initDatePicker(){const t=this.format||oe.getDefaultFormat(this.getDateType),e=[];this.getDateType===oe.DATE_TYPE.MONTH&&e.push(new qo({shorthand:!0,dateFormat:t,altFormat:t})),this._datepicker=O(this.getSelector,{dateFormat:t,onChange:i=>{this.validate()},inline:this.showAlways,plugins:e});const o=this.value;this.setValue(o)}firstUpdated(){this.initDatePicker()}getValue(){return this._datepicker?this._datepicker.input.value:null}isValidDateFormat(t,e){const o=oe.getDateFormatRegex(e);return t&&(!o||!o.test(t))?(console.error(`id : ${this.id} >> Invalid date format: ${t}. Expected format is ${e}.`),!1):!0}setValue(t){if(this._datepicker&&t){const e=this.format||oe.getDefaultFormat(this.getDateType);if(!this.isValidDateFormat(t,e))return;const o=oe.parseDateStrByFormat(t,e);if(!o||isNaN(o)){console.error(`id : ${this.id} >> Invalid date value: ${t}.`);return}this._datepicker.setDate(o)}}render(){const t=`${this.id}-input`,e=`${this.id}-feedback`;let o=this["label-align"]&&this["label-align"]==="left";const i={normal:$`
                    <div class="valid-feedback">${this.feedback}</div>`,hint:$`
                    <div class="form-group"><small class="form-hint form-text text-muted">${this.feedback}</small>
                    </div>`,error:$`
                    <div class="invalid-feedback">${this.feedback}</div>`};return $`
            <div
                    style="width: ${this.width?this.width:"auto"}"
            >
                <div
                        class="${z({container:o})}"
                >
                    <label
                            class="${z({"form-left-label":o&&this.label,"form-label":!(o&&this.label),hidden:this.invisible})}"
                            for="${this.id}"
                            style="
                        width: ${this["label-width"]||"auto"};
                        text-align: ${this["label-text-align"]||"left"}
                    "
                    >
                        ${this.required?o?$`<span style="color: #df1414;margin-right: 2px">*</span>${this.label}`:$`${this.label}<span style="color: #df1414;margin-left: 2px">*</span>`:this.label}
                    </label>
                    <div class="">
                        <!-- Wrapper 영역 -->
                        <div class="input-container">
                            <input type="text"
                                   class="${z({"form-control":!0,"form-left-control":o,"form-control-lg":this.size==="large","form-control-sm":this.size==="small","input-right":!0,hidden:this.invisible})}"
                                   id="${t}"
                                   name="${p(this.name)}"
                                   aria-label="Date-Time"
                                   ?required=${this.required}
                                   ?disabled=${this.disabled}
                                   ?readonly=${this.readonly}
                                   @blur="${this.validate}"
                                   autocomplete="off"
                            >
                            <div @click="${this._handleClick}"
                                 class="${z({"icon-right":!0,hidden:this.disabled})}"
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

        `}isValid(t,e,o){return e===void 0&&(e=oe.getDefaultFormat(this.getDateType)),!t&&o?(console.error("Validation failed: Value is required but missing."),!1):!!this.isValidDateFormat(t,e)}validate(){const t=`${this.id}-input`,e=`${this.id}-feedback`,o=this.getValue(),i=this.querySelector(`#${e}`),s=this.querySelector(`#${t}`),b=this.isValid(o,this.format,this.required),m=this["feedback-visible-type"];s.classList.toggle("is-invalid",!b),m!="visible"&&(i.setAttribute("hidden",!0),(b&&m=="valid"||!b&&m=="invalid")&&i.removeAttribute("hidden"))}checkValidity(){this.validate()}}var lr,dr;lr=B("l-c-datepicker"),lr(dr=class extends Pr{constructor(){super(),super.setDateType(oe.DATE_TYPE.DATE)}});var cr,br;cr=B("l-c-monthpicker"),cr(br=class extends Pr{constructor(){super(),super.setDateType(oe.DATE_TYPE.MONTH)}});var fr,ur;fr=B("l-c-yearpicker"),fr(ur=class extends K{constructor(){super(),this._handleClick=t=>{this._isOpen?this.datePicker.close():this.datePicker.open()},this._isOpen=!1}createRenderRoot(){return this}static get properties(){return{id:{type:String},name:{type:String},size:{type:String},format:{type:String},label:{type:String},"label-align":{type:String},"label-width":{type:String},"label-text-align":{type:String},feedback:{type:String},"feedback-type":{type:String},"feedback-visible-type":{type:String},width:{type:String},required:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},value:{type:String},showAlways:{type:Boolean},invisible:{type:Boolean}}}firstUpdated(){const t=`${this.id}-wrapper`,e=`${this.id}-input`,o=this.format||"yyyy";this.datePicker=new DatePicker(`#${t}`,{type:"year",input:{element:`#${e}`,format:o},showAlways:this.showAlways}),this.setValue(this.value),this.datePicker.on("change",i=>{this.validate()}),this.datePicker.on("open",i=>{this._isOpen=!0}),this.datePicker.on("close",i=>{this._isOpen=!1})}getValue(){const t=`${this.id}-input`,e=this.querySelector(`#${t}`);return e?e.value:null}setValue(t){if(this.datePicker&&t){const e=this.format||"yyyy",o=this._getDateFormatRegex(e);if(!o||!o.test(t)){console.error(`id : ${this.id} >> Invalid date format: ${t}. Expected format is ${e}.`);return}const i=this._parseDateStrByFormat(t,e);if(!i||isNaN(i)){console.error(`id : ${this.id} >> Invalid date value: ${t}.`);return}this.datePicker.setDate(i)}}_getDateFormatRegex(t){switch(t){case"yyyy":return/^\d{4}$/;default:return console.error(`Unsupported format: ${t}`),null}}_parseDateStrByFormat(t,e){switch(e){case"yyyy":return new Date(t);default:return console.error(`Unsupported format: ${e}`),null}}_parseDateByFormat(t,e){const o=t.getFullYear();switch(e){case"yyyy":return`${o}`;default:return console.error(`Unsupported format: ${e}`),""}}render(){const t=`${this.id}-wrapper`,e=`${this.id}-input`,o=`${this.id}-feedback`;let i=this["label-align"]&&this["label-align"]==="left";const s={normal:$`
                    <div class="valid-feedback">${this.feedback}</div>`,hint:$`
                    <div class="form-group"><small class="form-hint form-text text-muted">${this.feedback}</small>
                    </div>`,error:$`
                    <div class="invalid-feedback">${this.feedback}</div>`};return $`
            <div
                    style="width: ${this.width?this.width:"auto"}"
            >
                <div
                        class="${z({container:i})}"
                >
                    <label
                            class="${z({"form-left-label":i&&this.label,"form-label":!(i&&this.label),hidden:this.invisible})}"
                            for="${this.id}"
                            style="
                        width: ${this["label-width"]||"auto"};
                        text-align: ${this["label-text-align"]||"left"}
                    "
                    >
                        ${this.required?i?$`<span style="color: #df1414;margin-right: 2px">*</span>${this.label}`:$`${this.label}<span style="color: #df1414;margin-left: 2px">*</span>`:this.label}
                    </label>
                    <div class="search-input-container">
                        <!-- Wrapper 영역 -->
                        <div class="input-container">
                            <input type="text"
                                   class="${z({"form-control":!0,"form-left-control":i,"form-control-lg":this.size==="large","form-control-sm":this.size==="small","input-right":!0,hidden:this.invisible})}"
                                   id="${e}"
                                   name="${p(this.name)}"
                                   aria-label="Date-Time"
                                   ?required=${this.required}
                                   ?disabled=${this.disabled}
                                   ?readonly=${this.readonly}
                                   @blur="${this.validate}"
                                   autocomplete="off"
                            >
                            <div @click="${this._handleClick}"
                                 class="icon-right ${this.value?"":"hidden"}"
                                 id="rightIcon"></div>
                        </div>
                        <div id="${t}" style="margin-top: -1px;position: absolute; z-index: 9999;"></div>
                    </div>
                </div>

            </div>

            <div
                    id="${o}"
                    style="
                    padding-left: calc(${this["label-width"]} + ${i?"15px":"0px"})
                    ;width: ${this.width?this.width:"auto"}
                    ;display: flex;   
                "
            >
                ${s[this["feedback-type"]]}

            </div>

        `}isValid(t,e,o){if(e===void 0&&(e="yyyy"),!this.datePicker.getDate()&&o)return console.error("Validation failed: Value is required but missing."),!1;const s=this._getDateFormatRegex(e);return t&&(!s||!s.test(t))?(console.error(`Invalid date format: ${t}. Expected format is ${e}.`),!1):!0}validate(){const t=`${this.id}-input`,e=`${this.id}-feedback`,o=this.getValue().trim(),i=this.querySelector(`#${e}`),s=this.querySelector(`#${t}`),b=this.isValid(o,this.format,this.required),m=this["feedback-visible-type"];s.classList.toggle("is-invalid",!b),m!="visible"&&(i.setAttribute("hidden",!0),(b&&m=="valid"||!b&&m=="invalid")&&i.removeAttribute("hidden"))}checkValidity(){this.validate()}initCurrentYear(){const t=this.format||"yyyy",e=new Date,o=this._parseDateByFormat(e,t);this.value=o,this.text=o,this.datePicker&&this.datePicker.setDate(e)}});var pr,hr,vt;pr=B("l-c-triggerinput"),pr(hr=(vt=class extends xe{constructor(){super(),super.setSelector("input")}setKeydownEventListener(){const t=this.shadowRoot.querySelector(super.getSelector);t&&(this._keydownHandler&&t.removeEventListener("keydown",this._keydownHandler),this._keydownHandler=e=>this._handleKeydown(e),t.addEventListener("keydown",this._keydownHandler))}_handleSearchClick(t){this.triggerPop()}_handleKeydown(t){const{key:e}=t;e==="Enter"&&this.triggerPop()}triggerPop(){const t=this.shadowRoot.querySelector(super.getSelector);this.handleTrigger&&this.handleTrigger(t.value)}disconnectedCallback(){super.disconnectedCallback(),this.observer.disconnect()}static get properties(){return{name:{type:String},size:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},value:{type:String},pattern:{type:String},placeholder:{type:String},maxlength:{type:String},minlength:{type:String},"valid-length-type":{type:String},handleTrigger:{type:Function}}}firstUpdated(){this.setKeydownEventListener()}render(){let t=this["label-align"]&&this["label-align"]==="left",e=!this.disabled&&!this.readonly;return $`
            <l-label-feed-container
                    width="${p(this.width)}"
                    id="${this.id}"
                    label="${p(this.label)}"
                    label-align="${p(this["label-align"])}"
                    label-width="${p(this["label-width"])}"
                    label-text-align="${p(this["label-text-align"])}"
                    required="${p(this.required)}"
                    feedback="${p(this.feedback)}"
                    feedback-type="${p(this["feedback-type"])}"
                    feedback-visible-type="${p(this["feedback-visible-type"])}"
            >
                <div slot="input" class="search-input-container">
                    <input
                            class="${z({"form-control":!0,"form-left-control":t,"form-control-lg":this.size==="large","form-control-sm":this.size==="small","search-input-right":e})}"
                            id="${p(this.id)}"
                            name="${p(this.name)}"
                            maxlength="${(this["valid-length-type"]!="byte"?p(this.maxlength):null)??T}"
                            minlength="${(this["valid-length-type"]!="byte"?p(this.minlength):null)??T}"
                            ?required=${this.required}
                            ?disabled=${this.disabled}
                            ?readonly=${this.readonly}
                            placeholder="${p(this.placeholder)}"
                            pattern="${p(this.pattern)}"
                            value="${p(this.value)}"
                            @input="${o=>{var i;(i=this.shadowRoot.querySelector(".search-icon-right"))==null||i.classList.toggle("hidden",!o.target.value)}}"
                            @blur="${super.validate}"
                            @keyup="${(this["valid-length-type"]!="byte"?null:super.createChangeHandler(p(this.maxlength)))??T}"
                    >
                    ${e?$`
                                <div @click="${this._handleSearchClick}"
                                     class="search-icon-right ${this.value?"":"hidden"}"
                                     id="rightIcon"></div>`:T}
                </div>

            </l-label-feed-container>

        `}},vt.styles=[...xe.styles,se`
            .search-input-container {
                position: relative;
                display: flex;
                align-items: center;
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
                background-image: url('../../assets/svg/search-svgrepo-com.svg');
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                cursor: pointer;
                pointer-events: auto;
            }
        `],vt));var gr,mr;gr=B("l-c-range-datepicker"),gr(mr=class extends K{constructor(){super()}createRenderRoot(){return this}static get properties(){return{id:{type:String},name:{type:String},size:{type:String},format:{type:String},label:{type:String},"label-align":{type:String},"label-width":{type:String},"label-text-align":{type:String},feedback:{type:String},"feedback-type":{type:String},"feedback-visible-type":{type:String},width:{type:String},required:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},value:{type:String}}}firstUpdated(){const t=`${this.id}-wrapper`,e=`${this.id}-input`,o=this.format||"yyyy-MM-dd",i=new Date;this.datePicker=DatePicker.createRangePicker({startpicker:{date:i,input:`#${e}-from`,container:`#${t}-from`},endpicker:{date:i,input:`#${e}-to`,container:`#${t}-to`},format:o}),this.datePicker.on("change:end",()=>{this.validate()})}getValue(t){const e=`${this.id}-input-${t}`,o=this.querySelector(`#${e}`);return o?o.value:null}getFromValue(){return this.getValue("from")}getToValue(){return this.getValue("to")}setDate(t,e){if(this.datePicker&&e){const o=this.format||"yyyy-MM-dd",i=this._getDateFormatRegex(o);if(!i||!i.test(e)){console.error(`id : ${this.id} >> Invalid date format: ${e}. Expected format is ${o}.`);return}const s=this._parseDateStrByFormat(e,o);if(!s||isNaN(s)){console.error(`id : ${this.id} >> Invalid date value: ${e}.`);return}t==="start"?this.datePicker.setStartDate(s):t==="end"?this.datePicker.setEndDate(s):console.error(`id : ${this.id} >> Unknown date type: ${t}`)}}setToValue(t){this.setDate("end",t)}setFromValue(t){this.setDate("start",t)}_getDateFormatRegex(t){switch(t){case"yyyy-MM-dd":return/^\d{4}-\d{2}-\d{2}$/;case"yyyy/MM/dd":return/^\d{4}\/\d{2}\/\d{2}$/;case"yyyyMMdd":return/^\d{8}$/;default:return console.error(`Unsupported format: ${t}`),null}}_parseDateStrByFormat(t,e){let o=null;switch(e){case"yyyy-MM-dd":return o=t.split("-"),new Date(o[0],o[1]-1,o[2]);case"yyyy/MM/dd":return o=t.split("/"),new Date(o[0],o[1]-1,o[2]);case"yyyyMMdd":return new Date(t.substring(0,4),t.substring(4,6)-1,t.substring(6,8));default:return console.error(`Unsupported format: ${e}`),null}}_parseDateByFormat(t,e){const o=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");switch(e){case"yyyy-MM-dd":return`${o}-${i}-${s}`;case"yyyy/MM/dd":return`${o}/${i}/${s}`;case"yyyyMMdd":return`${o}${i}${s}`;default:return console.error(`Unsupported format: ${e}`),""}}render(){const t=`${this.id}-wrapper`,e=`${this.id}-input`,o=`${this.id}-feedback`;let i=this["label-align"]&&this["label-align"]==="left";const s={normal:$`
                    <div class="valid-feedback">${this.feedback}</div>`,hint:$`
                    <div class="form-group"><small class="form-hint form-text text-muted">${this.feedback}</small>
                    </div>`,error:$`
                    <div class="invalid-feedback">${this.feedback}</div>`};return $`
            <div
                    style="width: ${this.width?this.width:"auto"}"
            >
                <div
                        class="${z({container:i})}"
                >
                    <label
                            class="${i&&this.label?"form-left-label":"form-label"}"
                            for="${this.id}"
                            style="
                        width: ${this["label-width"]||"auto"};
                        text-align: ${this["label-text-align"]||"left"}
                    "
                    >
                        ${this.required?i?$`<span style="color: #df1414;margin-right: 2px">*</span>${this.label}`:$`${this.label}<span style="color: #df1414;margin-left: 2px">*</span>`:this.label}
                    </label>
                    <div class="">
                        <!-- Wrapper 영역 -->
                        <div class="input-group input-daterange" id="datepicker-range">
                            <div class="input-container is-flex">
                                <input type="text"
                                       class="${z({"form-control":!0,"right-border":!0,"form-control-lg":this.size==="large","form-control-sm":this.size==="small"})}"
                                       name="${e}-from"
                                       id="${e}-from"
                                       ?required=${this.required}
                                       ?disabled=${this.disabled}
                                       ?readonly=${this.readonly}
                                       placeholder="from date"
                                       @blur="${this.validate}"
                                       autocomplete="off"
                                >
                                <div id="${t}-from"
                                     style="margin-top: -1px;position: absolute; z-index: 9999;"></div>
                            </div>
                            <span 
                                  class="${z({"input-group-text":!0,"right-border":!0,"left-border":!0,"form-control-lg":this.size==="large","form-control-sm":this.size==="small"})}"
                            >to</span>
                            <div class="input-container is-flex">
                                <input type="text"
                                       class="${z({"form-control":!0,"left-border":!0,"form-control-lg":this.size==="large","form-control-sm":this.size==="small"})}"
                                       name="${e}-to"
                                       id="${e}-to"
                                       ?required=${this.required}
                                       ?disabled=${this.disabled}
                                       ?readonly=${this.readonly}
                                       placeholder="to date"
                                       @blur="${this.validate}"
                                       autocomplete="off"
                                >
                                <div id="${t}-to"
                                     style="margin-top: -1px;position: absolute; z-index: 9999;"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div
                    id="${o}"
                    style="
                    padding-left: calc(${this["label-width"]} + ${i?"15px":"0px"})
                    ;width: ${this.width?this.width:"auto"}
                    ;display: flex;   
                "
            >
                ${s[this["feedback-type"]]}

            </div>

        `}isValid(t,e,o){if(e===void 0&&(e="yyyy-MM-dd"),!t&&o)return console.error("Validation failed: Value is required but missing."),!1;const i=this._getDateFormatRegex(e);return t&&(!i||!i.test(t))?(console.error(`Invalid date format: ${t}. Expected format is ${e}.`),!1):!0}validate(){const t=`${this.id}-input-from`,e=`${this.id}-input-to`,o=`${this.id}-feedback`,i=this.querySelector(`#${o}`),s=this.querySelector(`#${t}`),b=this.querySelector(`#${e}`),m=this.getValue("from"),u=this.getValue("to"),y=this.isValid(m,this.format,this.required),d=this.isValid(u,this.format,this.required),h=this["feedback-visible-type"];s.classList.toggle("is-invalid",!y),b.classList.toggle("is-invalid",!d),h!="visible"&&(i.setAttribute("hidden",!0),(y&&d&&h=="valid"||!y&&d&&h=="invalid")&&i.removeAttribute("hidden"))}checkValidity(){this.validate()}initFromTodayDate(){const t=this.format||"yyyy-MM-dd",e=new Date,o=this._parseDateByFormat(e,t);this.value=o,this.text=o,this.datePicker&&this.datePicker.setStartDate(e)}});var vr,yr;vr=B("l-c-range-monthpicker"),vr(yr=class extends K{constructor(){super()}createRenderRoot(){return this}static get properties(){return{id:{type:String},name:{type:String},size:{type:String},format:{type:String},label:{type:String},"label-align":{type:String},"label-width":{type:String},"label-text-align":{type:String},feedback:{type:String},"feedback-type":{type:String},"feedback-visible-type":{type:String},width:{type:String},required:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},value:{type:String},"rel-year":{type:Number},"rel-month":{type:Number},"rel-mode":{type:String},"start-year-offset":{type:Number},"start-month-offset":{type:Number}}}firstUpdated(){const t=`${this.id}-wrapper`,e=`${this.id}-input`,o=this.format||"yyyy-MM",i=this["rel-year"],s=this["rel-month"],b=this["start-year-offset"],m=this["start-month-offset"],u=this["rel-mode"],y=new Date;b&&y.setFullYear(y.getFullYear()+b),console.log("startMonthOffset",m),m&&y.setMonth(y.getMonth()+m);const d=h=>i===null&&s===null?[]:[[h,new Date(h.getFullYear()+(i||0),h.getMonth()+(s||0),h.getDate())]];this.datePicker=DatePicker.createRangePicker({type:"month",startpicker:{date:y,input:`#${e}-from`,container:`#${t}-from`},endpicker:{date:y,input:`#${e}-to`,container:`#${t}-to`},selectableRanges:d(y),format:o}),this.datePicker.on("change:end",()=>{this.validate()}),u=="dynamic"&&this.datePicker.on("change:start",()=>{const h=this.getFromValue(),E=this._parseDateStrByFormat(h,this.format);if(E){const A=d(E);if(A){this.datePicker.setRanges(A);const L=this.datePicker.getEndDate();L&&L>A[1]&&this.datePicker.setEndDate(null)}}})}getValue(t){const e=`${this.id}-input-${t}`,o=this.querySelector(`#${e}`);return o?o.value:null}getFromValue(){return this.getValue("from")}getToValue(){return this.getValue("to")}setDate(t,e){if(this.datePicker&&e){const o=this.format||"yyyy-MM",i=this._getDateFormatRegex(o);if(!i||!i.test(e)){console.error(`id : ${this.id} >> Invalid date format: ${e}. Expected format is ${o}.`);return}const s=this._parseDateStrByFormat(e,o);if(!s||isNaN(s)){console.error(`id : ${this.id} >> Invalid date value: ${e}.`);return}t==="start"?this.datePicker.setStartDate(s):t==="end"?this.datePicker.setEndDate(s):console.error(`id : ${this.id} >> Unknown date type: ${t}`)}}setToValue(t){this.setDate("end",t)}setFromValue(t){this.setDate("start",t)}_getDateFormatRegex(t){switch(t){case"yyyy-MM":return/^\d{4}-\d{2}$/;case"yyyy/MM":return/^\d{4}\/\d{2}$/;case"yyyyMM":return/^\d{6}$/;default:return console.error(`Unsupported format: ${t}`),null}}_parseDateStrByFormat(t,e){e===void 0&&(e="yyyy-MM");let o=null;switch(e){case"yyyy-MM":return o=t.split("-"),new Date(o[0],o[1]-1);case"yyyy/MM":return o=t.split("/"),new Date(o[0],o[1]-1);case"yyyyMM":return new Date(t.substring(0,4),t.substring(4,6)-1);default:return console.error(`Unsupported format: ${e}`),null}}_parseDateByFormat(t,e){const o=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0");switch(e){case"yyyy-MM":return`${o}-${i}`;case"yyyy/MM":return`${o}/${i}`;case"yyyyMM":return`${o}${i}`;default:return console.error(`Unsupported format: ${e}`),""}}render(){const t=`${this.id}-wrapper`,e=`${this.id}-input`,o=`${this.id}-feedback`;let i=this["label-align"]&&this["label-align"]==="left";const s={normal:$`
                    <div class="valid-feedback">${this.feedback}</div>`,hint:$`
                    <div class="form-group"><small class="form-hint form-text text-muted">${this.feedback}</small>
                    </div>`,error:$`
                    <div class="invalid-feedback">${this.feedback}</div>`};return $`
            <div
                    style="width: ${this.width?this.width:"auto"}"
            >
                <div
                        class="${z({container:i})}"
                >
                    <label
                            class="${i&&this.label?"form-left-label":"form-label"}"
                            for="${this.id}"
                            style="
                        width: ${this["label-width"]||"auto"};
                        text-align: ${this["label-text-align"]||"left"}
                    "
                    >
                        ${this.required?i?$`<span style="color: #df1414;margin-right: 2px">*</span>${this.label}`:$`${this.label}<span style="color: #df1414;margin-left: 2px">*</span>`:this.label}
                    </label>
                    <div class="">
                        <!-- Wrapper 영역 -->
                        <div class="input-group input-daterange" id="datepicker-range">
                            <div class="input-container is-flex">
                                <input type="text"
                                       class="${z({"form-control":!0,"right-border":!0,"form-control-lg":this.size==="large","form-control-sm":this.size==="small"})}"
                                       name="${e}-from"
                                       id="${e}-from"
                                       ?required=${this.required}
                                       ?disabled=${this.disabled}
                                       ?readonly=${this.readonly}
                                       placeholder="from date"
                                       @blur="${this.validate}"
                                       autocomplete="off"
                                >
                                <div id="${t}-from"
                                     style="margin-top: -1px;position: absolute; z-index: 9999;"></div>
                            </div>
                            <span 
                                  class="${z({"input-group-text":!0,"right-border":!0,"left-border":!0,"form-control-lg":this.size==="large","form-control-sm":this.size==="small"})}"
                            >to</span>
                            <div class="input-container is-flex">
                                <input type="text"
                                       class="${z({"form-control":!0,"left-border":!0,"form-control-lg":this.size==="large","form-control-sm":this.size==="small"})}"
                                       name="${e}-to"
                                       id="${e}-to"
                                       ?required=${this.required}
                                       ?disabled=${this.disabled}
                                       ?readonly=${this.readonly}
                                       placeholder="to date"
                                       @blur="${this.validate}"
                                       autocomplete="off"
                                >
                                <div id="${t}-to"
                                     style="margin-top: -1px;position: absolute; z-index: 9999;"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div
                    id="${o}"
                    style="
                    padding-left: calc(${this["label-width"]} + ${i?"15px":"0px"})
                    ;width: ${this.width?this.width:"auto"}
                    ;display: flex;   
                "
            >
                ${s[this["feedback-type"]]}

            </div>

        `}isValid(t,e,o){if(e===void 0&&(e="yyyy-MM"),!t&&o)return console.error("Validation failed: Value is required but missing."),!1;const i=this._getDateFormatRegex(e);return t&&(!i||!i.test(t))?(console.error(`Invalid date format: ${t}. Expected format is ${e}.`),!1):!0}validate(){const t=`${this.id}-input-from`,e=`${this.id}-input-to`,o=`${this.id}-feedback`,i=this.querySelector(`#${o}`),s=this.querySelector(`#${t}`),b=this.querySelector(`#${e}`),m=this.getValue("from"),u=this.getValue("to"),y=this.isValid(m,this.format,this.required),d=this.isValid(u,this.format,this.required),h=this["feedback-visible-type"];s.classList.toggle("is-invalid",!y),b.classList.toggle("is-invalid",!d),h!="visible"&&(i.setAttribute("hidden",!0),(y&&d&&h=="valid"||!y&&d&&h=="invalid")&&i.removeAttribute("hidden"))}checkValidity(){this.validate()}initFromCurrentMonth(){const t=this.format||"yyyy-MM",e=new Date,o=this._parseDateByFormat(e,t);this.value=o,this.text=o,this.datePicker&&this.datePicker.setStartDate(e)}});var wr,xr,yt;wr=B("l-c-select"),wr(xr=(yt=class extends xe{constructor(){super(),super.setSelector("select")}disconnectedCallback(){super.disconnectedCallback(),this.observer.disconnect()}static get properties(){return{name:{type:String},size:{type:String},disabled:{type:Boolean},value:{type:String},text:{type:String},options:{type:Array},"default-type":{type:String}}}render(){var e;let t=this["label-align"]&&this["label-align"]==="left";return $`
            <l-label-feed-container
                    width="${p(this.width)}"
                    id="${this.id}"
                    label="${p(this.label)}"
                    label-align="${p(this["label-align"])}"
                    label-width="${p(this["label-width"])}"
                    label-text-align="${p(this["label-text-align"])}"
                    required="${p(this.required)}"
                    feedback="${p(this.feedback)}"
                    feedback-type="${p(this["feedback-type"])}"
                    feedback-visible-type="${p(this["feedback-visible-type"])}"
            >
                <div slot="input" class="search-input-container">
                    <select
                            width="${p(this.width)}"
                            class="${z({"form-select":!0,"form-left-control":t,"form-select-lg":this.size==="large","form-select-sm":this.size==="small"})}"
                            id="${p(this.id)}"
                            name="${p(this.name)}"
                            value="${p(this.value)}"
                            ?required=${this.required}
                            ?disabled=${this.disabled}
                            ?readonly=${this.readonly}
                            @change="${this._handleChange}"
                            @blur="${super.validate}"
                    >
                        ${(e=this.options)==null?void 0:e.map(o=>$`
                                            <option value="${o.value}" ?selected=${o.value===this.value} ?disabled=${o==null?void 0:o.disabled}>
                                                ${o.label}
                                            </option>`)}
                    </select>
                </div>
            </l-label-feed-container>
        `}_handleChange(t){var o;this.value=t.target.value;const e=(o=this.options)==null?void 0:o.find(i=>i.value===this.value);this.text=e?e.label:""}getValue(){return console.log("this getValue called : "+this.value),this.value?this.value:this.options&&this.options.length>0?this.options[0].value:""}getText(){return this.text?this.text:this.options&&this.options.length>0?this.options[0].label:""}getSelectedIndex(){if(this.options&&this.options.length>0){const t=this.options.findIndex(e=>e.value===this.value);return t!==-1?t:0}return-1}getSelectedOption(){if(this.options&&this.options.length>0){const t=this.options.find(e=>e.value===this.value);return t||this.options[0]}return null}getOptions(){return this.options}setValue(t){console.log("not supported")}updated(t){(t.has("options")||t.has("default-type"))&&this.options&&this.options.length>0&&(this["default-type"]==="select"?(this.options[0].label!=="Choose an option"&&(this.options=[{value:"",label:"Choose an option",disabled:!0},...this.options]),this.value="",this.text="Choose an option"):this["default-type"]==="all"&&(this.options[0].label!=="All options"&&(this.options=[{value:"all",label:"All options"},...this.options]),this.value="all",this.text="All options"))}},yt.styles=[...xe.styles],yt));
