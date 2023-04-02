"use strict";(self.webpackChunkulti_project=self.webpackChunkulti_project||[]).push([[179],{922:()=>{function te(t){return"function"==typeof t}function bi(t){const n=t(r=>{Error.call(r),r.stack=(new Error).stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}const Ii=bi(t=>function(n){t(this),this.message=n?`${n.length} errors occurred during unsubscription:\n${n.map((r,o)=>`${o+1}) ${r.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=n});function ho(t,e){if(t){const n=t.indexOf(e);0<=n&&t.splice(n,1)}}class lt{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;const{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(const i of n)i.remove(this);else n.remove(this);const{initialTeardown:r}=this;if(te(r))try{r()}catch(i){e=i instanceof Ii?i.errors:[i]}const{_finalizers:o}=this;if(o){this._finalizers=null;for(const i of o)try{Ql(i)}catch(s){e=e??[],s instanceof Ii?e=[...e,...s.errors]:e.push(s)}}if(e)throw new Ii(e)}}add(e){var n;if(e&&e!==this)if(this.closed)Ql(e);else{if(e instanceof lt){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(e)}}_hasParent(e){const{_parentage:n}=this;return n===e||Array.isArray(n)&&n.includes(e)}_addParent(e){const{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e}_removeParent(e){const{_parentage:n}=this;n===e?this._parentage=null:Array.isArray(n)&&ho(n,e)}remove(e){const{_finalizers:n}=this;n&&ho(n,e),e instanceof lt&&e._removeParent(this)}}lt.EMPTY=(()=>{const t=new lt;return t.closed=!0,t})();const ql=lt.EMPTY;function Zl(t){return t instanceof lt||t&&"closed"in t&&te(t.remove)&&te(t.add)&&te(t.unsubscribe)}function Ql(t){te(t)?t():t.unsubscribe()}const bn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Mi={setTimeout(t,e,...n){const{delegate:r}=Mi;return r?.setTimeout?r.setTimeout(t,e,...n):setTimeout(t,e,...n)},clearTimeout(t){const{delegate:e}=Mi;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Yl(t){Mi.setTimeout(()=>{const{onUnhandledError:e}=bn;if(!e)throw t;e(t)})}function Kl(){}const xD=aa("C",void 0,void 0);function aa(t,e,n){return{kind:t,value:e,error:n}}let In=null;function Si(t){if(bn.useDeprecatedSynchronousErrorHandling){const e=!In;if(e&&(In={errorThrown:!1,error:null}),t(),e){const{errorThrown:n,error:r}=In;if(In=null,n)throw r}}else t()}class ua extends lt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Zl(e)&&e.add(this)):this.destination=kD}static create(e,n,r){return new po(e,n,r)}next(e){this.isStopped?la(function OD(t){return aa("N",t,void 0)}(e),this):this._next(e)}error(e){this.isStopped?la(function ND(t){return aa("E",void 0,t)}(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?la(xD,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const FD=Function.prototype.bind;function ca(t,e){return FD.call(t,e)}class RD{constructor(e){this.partialObserver=e}next(e){const{partialObserver:n}=this;if(n.next)try{n.next(e)}catch(r){Ai(r)}}error(e){const{partialObserver:n}=this;if(n.error)try{n.error(e)}catch(r){Ai(r)}else Ai(e)}complete(){const{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(n){Ai(n)}}}class po extends ua{constructor(e,n,r){let o;if(super(),te(e)||!e)o={next:e??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&bn.useDeprecatedNextContext?(i=Object.create(e),i.unsubscribe=()=>this.unsubscribe(),o={next:e.next&&ca(e.next,i),error:e.error&&ca(e.error,i),complete:e.complete&&ca(e.complete,i)}):o=e}this.destination=new RD(o)}}function Ai(t){bn.useDeprecatedSynchronousErrorHandling?function PD(t){bn.useDeprecatedSynchronousErrorHandling&&In&&(In.errorThrown=!0,In.error=t)}(t):Yl(t)}function la(t,e){const{onStoppedNotification:n}=bn;n&&Mi.setTimeout(()=>n(t,e))}const kD={closed:!0,next:Kl,error:function LD(t){throw t},complete:Kl},da="function"==typeof Symbol&&Symbol.observable||"@@observable";function fa(t){return t}function Jl(t){return 0===t.length?fa:1===t.length?t[0]:function(n){return t.reduce((r,o)=>o(r),n)}}class le{constructor(e){e&&(this._subscribe=e)}lift(e){const n=new le;return n.source=this,n.operator=e,n}subscribe(e,n,r){const o=function jD(t){return t&&t instanceof ua||function BD(t){return t&&te(t.next)&&te(t.error)&&te(t.complete)}(t)&&Zl(t)}(e)?e:new po(e,n,r);return Si(()=>{const{operator:i,source:s}=this;o.add(i?i.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(n){e.error(n)}}forEach(e,n){return new(n=Xl(n))((r,o)=>{const i=new po({next:s=>{try{e(s)}catch(a){o(a),i.unsubscribe()}},error:o,complete:r});this.subscribe(i)})}_subscribe(e){var n;return null===(n=this.source)||void 0===n?void 0:n.subscribe(e)}[da](){return this}pipe(...e){return Jl(e)(this)}toPromise(e){return new(e=Xl(e))((n,r)=>{let o;this.subscribe(i=>o=i,i=>r(i),()=>n(o))})}}function Xl(t){var e;return null!==(e=t??bn.Promise)&&void 0!==e?e:Promise}le.create=t=>new le(t);const VD=bi(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});class go extends le{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){const n=new ed(this,this);return n.operator=e,n}_throwIfClosed(){if(this.closed)throw new VD}next(e){Si(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const n of this.currentObservers)n.next(e)}})}error(e){Si(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;const{observers:n}=this;for(;n.length;)n.shift().error(e)}})}complete(){Si(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return(null===(e=this.observers)||void 0===e?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){const{hasError:n,isStopped:r,observers:o}=this;return n||r?ql:(this.currentObservers=null,o.push(e),new lt(()=>{this.currentObservers=null,ho(o,e)}))}_checkFinalizedStatuses(e){const{hasError:n,thrownError:r,isStopped:o}=this;n?e.error(r):o&&e.complete()}asObservable(){const e=new le;return e.source=this,e}}go.create=(t,e)=>new ed(t,e);class ed extends go{constructor(e,n){super(),this.destination=e,this.source=n}next(e){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.next)||void 0===r||r.call(n,e)}error(e){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.error)||void 0===r||r.call(n,e)}complete(){var e,n;null===(n=null===(e=this.destination)||void 0===e?void 0:e.complete)||void 0===n||n.call(e)}_subscribe(e){var n,r;return null!==(r=null===(n=this.source)||void 0===n?void 0:n.subscribe(e))&&void 0!==r?r:ql}}function hr(t){return e=>{if(function $D(t){return te(t?.lift)}(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function mo(t,e,n,r,o){return new HD(t,e,n,r,o)}class HD extends ua{constructor(e,n,r,o,i,s){super(e),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(u){e.error(u)}}:super._next,this._error=o?function(a){try{o(a)}catch(u){e.error(u)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:n}=this;super.unsubscribe(),!n&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}}}function td(t,e){return hr((n,r)=>{let o=0;n.subscribe(mo(r,i=>{r.next(t.call(e,i,o++))}))})}function UD(t,e,n,r){return new(n||(n=Promise))(function(i,s){function a(l){try{c(r.next(l))}catch(d){s(d)}}function u(l){try{c(r.throw(l))}catch(d){s(d)}}function c(l){l.done?i(l.value):function o(i){return i instanceof n?i:new n(function(s){s(i)})}(l.value).then(a,u)}c((r=r.apply(t,e||[])).next())})}Object.create;function od(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Mn(t){return this instanceof Mn?(this.v=t,this):new Mn(t)}function GD(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,r=n.apply(t,e||[]),i=[];return o={},s("next"),s("throw"),s("return"),o[Symbol.asyncIterator]=function(){return this},o;function s(f){r[f]&&(o[f]=function(h){return new Promise(function(p,g){i.push([f,h,p,g])>1||a(f,h)})})}function a(f,h){try{!function u(f){f.value instanceof Mn?Promise.resolve(f.value.v).then(c,l):d(i[0][2],f)}(r[f](h))}catch(p){d(i[0][3],p)}}function c(f){a("next",f)}function l(f){a("throw",f)}function d(f,h){f(h),i.shift(),i.length&&a(i[0][0],i[0][1])}}function WD(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,e=t[Symbol.asyncIterator];return e?e.call(t):(t=od(t),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=t[i]&&function(s){return new Promise(function(a,u){(function o(i,s,a,u){Promise.resolve(u).then(function(c){i({value:c,done:a})},s)})(a,u,(s=t[i](s)).done,s.value)})}}}Object.create;const id=t=>t&&"number"==typeof t.length&&"function"!=typeof t;function sd(t){return te(t?.then)}function ad(t){return te(t[da])}function ud(t){return Symbol.asyncIterator&&te(t?.[Symbol.asyncIterator])}function cd(t){return new TypeError(`You provided ${null!==t&&"object"==typeof t?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const ld=function ZD(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}();function dd(t){return te(t?.[ld])}function fd(t){return GD(this,arguments,function*(){const n=t.getReader();try{for(;;){const{value:r,done:o}=yield Mn(n.read());if(o)return yield Mn(void 0);yield yield Mn(r)}}finally{n.releaseLock()}})}function hd(t){return te(t?.getReader)}function Sn(t){if(t instanceof le)return t;if(null!=t){if(ad(t))return function QD(t){return new le(e=>{const n=t[da]();if(te(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(t);if(id(t))return function YD(t){return new le(e=>{for(let n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}(t);if(sd(t))return function KD(t){return new le(e=>{t.then(n=>{e.closed||(e.next(n),e.complete())},n=>e.error(n)).then(null,Yl)})}(t);if(ud(t))return pd(t);if(dd(t))return function JD(t){return new le(e=>{for(const n of t)if(e.next(n),e.closed)return;e.complete()})}(t);if(hd(t))return function XD(t){return pd(fd(t))}(t)}throw cd(t)}function pd(t){return new le(e=>{(function ev(t,e){var n,r,o,i;return UD(this,void 0,void 0,function*(){try{for(n=WD(t);!(r=yield n.next()).done;){const s=r.value;if(e.next(s),e.closed)return}}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}e.complete()})})(t,e).catch(n=>e.error(n))})}function tn(t,e,n,r=0,o=!1){const i=e.schedule(function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(i),!o)return i}function gd(t,e,n=1/0){return te(e)?gd((r,o)=>td((i,s)=>e(r,i,o,s))(Sn(t(r,o))),n):("number"==typeof e&&(n=e),hr((r,o)=>function tv(t,e,n,r,o,i,s,a){const u=[];let c=0,l=0,d=!1;const f=()=>{d&&!u.length&&!c&&e.complete()},h=g=>c<r?p(g):u.push(g),p=g=>{i&&e.next(g),c++;let D=!1;Sn(n(g,l++)).subscribe(mo(e,v=>{o?.(v),i?h(v):e.next(v)},()=>{D=!0},void 0,()=>{if(D)try{for(c--;u.length&&c<r;){const v=u.shift();s?tn(e,s,()=>p(v)):p(v)}f()}catch(v){e.error(v)}}))};return t.subscribe(mo(e,h,()=>{d=!0,f()})),()=>{a?.()}}(r,o,t,n)))}const md=new le(t=>t.complete());function pa(t){return t[t.length-1]}function iv(t){return function ov(t){return t&&te(t.schedule)}(pa(t))?t.pop():void 0}function yd(t,e=0){return hr((n,r)=>{n.subscribe(mo(r,o=>tn(r,t,()=>r.next(o),e),()=>tn(r,t,()=>r.complete(),e),o=>tn(r,t,()=>r.error(o),e)))})}function Dd(t,e=0){return hr((n,r)=>{r.add(t.schedule(()=>n.subscribe(r),e))})}function vd(t,e){if(!t)throw new Error("Iterable cannot be null");return new le(n=>{tn(n,e,()=>{const r=t[Symbol.asyncIterator]();tn(n,e,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function fv(t,e){if(null!=t){if(ad(t))return function av(t,e){return Sn(t).pipe(Dd(e),yd(e))}(t,e);if(id(t))return function cv(t,e){return new le(n=>{let r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}(t,e);if(sd(t))return function uv(t,e){return Sn(t).pipe(Dd(e),yd(e))}(t,e);if(ud(t))return vd(t,e);if(dd(t))return function lv(t,e){return new le(n=>{let r;return tn(n,e,()=>{r=t[ld](),tn(n,e,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){return void n.error(s)}i?n.complete():n.next(o)},0,!0)}),()=>te(r?.return)&&r.return()})}(t,e);if(hd(t))return function dv(t,e){return vd(fd(t),e)}(t,e)}throw cd(t)}function pv(...t){const e=iv(t),n=function sv(t,e){return"number"==typeof pa(t)?t.pop():e}(t,1/0),r=t;return r.length?1===r.length?Sn(r[0]):function nv(t=1/0){return gd(fa,t)}(n)(function hv(t,e){return e?fv(t,e):Sn(t)}(r,e)):md}function ga(t,e,...n){if(!0===e)return void t();if(!1===e)return;const r=new po({next:()=>{r.unsubscribe(),t()}});return e(...n).subscribe(r)}
/**
       * @license Angular v14.3.0
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function z(t){for(let e in t)if(t[e]===z)return e;throw Error("Could not find renamed property on target object.")}function ma(t,e){for(const n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(t[n]=e[n])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function G(t){if("string"==typeof t)return t;if(Array.isArray(t))return"["+t.map(G).join(", ")+"]";if(null==t)return""+t;if(t.overriddenName)return`${t.overriddenName}`;if(t.name)return`${t.name}`;const e=t.toString();if(null==e)return""+e;const n=e.indexOf("\n");return-1===n?e:e.substring(0,n)}function ya(t,e){return null==t||""===t?null===e?"":e:null==e||""===e?t:t+" "+e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const mv=z({__forward_ref__:z});function Da(t){return t.__forward_ref__=Da,t.toString=function(){return G(this())},t}function I(t){return va(t)?t():t}function va(t){return"function"==typeof t&&t.hasOwnProperty(mv)&&t.__forward_ref__===Da}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class E extends Error{constructor(e,n){super(Ne(e,n)),this.code=e}}function Ne(t,e){return`NG0${Math.abs(t)}${e?": "+e.trim():""}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function S(t){return"string"==typeof t?t:null==t?"":String(t)}function j(t){return"function"==typeof t?t.name||t.toString():"object"==typeof t&&null!=t&&"function"==typeof t.type?t.type.name||t.type.toString():S(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ti(t,e){throw new E(-201,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function bt(t,e,n){t!=e&&$(n,t,e,"==")}function Pe(t,e){null==t&&$(e,t,null,"!=")}function $(t,e,n,r){throw new Error(`ASSERTION ERROR: ${t}`+(null==r?"":` [Expected=> ${n} ${r} ${e} <=Actual]`))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function x(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function nn(t){return{providers:t.providers||[],imports:t.imports||[]}}function xi(t){return _d(t,Ni)||_d(t,Ed)}function _d(t,e){return t.hasOwnProperty(e)?t[e]:null}function wd(t){return t&&(t.hasOwnProperty(_a)||t.hasOwnProperty(bv))?t[_a]:null}const Ni=z({\u0275prov:z}),_a=z({\u0275inj:z}),Ed=z({ngInjectableDef:z}),bv=z({ngInjectorDef:z});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var F,t;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let wa;function ze(t){const e=wa;return wa=t,e}function Cd(t,e,n){const r=xi(t);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&F.Optional?null:void 0!==e?e:void Ti(G(t))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function rn(t){return{toString:t}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var An,bd,It;(t=F||(F={}))[t.Default=0]="Default",t[t.Host=1]="Host",t[t.Self=2]="Self",t[t.SkipSelf=4]="SkipSelf",t[t.Optional=8]="Optional",function(t){t[t.OnPush=0]="OnPush",t[t.Default=1]="Default"}(An||(An={})),function(t){t[t.CheckOnce=0]="CheckOnce",t[t.Checked=1]="Checked",t[t.CheckAlways=2]="CheckAlways",t[t.Detached=3]="Detached",t[t.Errored=4]="Errored",t[t.Destroyed=5]="Destroyed"}(bd||(bd={})),function(t){t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom"}(It||(It={}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const q=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const pr={},V=[],Oi=z({\u0275cmp:z}),Ea=z({\u0275dir:z}),Ca=z({\u0275pipe:z}),Id=z({\u0275mod:z}),Mt=z({\u0275fac:z}),yo=z({__NG_ELEMENT_ID__:z});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Mv=0;function ba(t){return rn(()=>{const e=t.type,n=!0===t.standalone,r={},o={type:e,providersResolver:null,decls:t.decls,vars:t.vars,factory:null,template:t.template||null,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:t.exportAs||null,onPush:t.changeDetection===An.OnPush,directiveDefs:null,pipeDefs:null,standalone:n,dependencies:n&&t.dependencies||null,getStandaloneInjector:null,selectors:t.selectors||V,viewQuery:t.viewQuery||null,features:t.features||null,data:t.data||{},encapsulation:t.encapsulation||It.Emulated,id:"c"+Mv++,styles:t.styles||V,_:null,setInput:null,schemas:t.schemas||null,tView:null},i=t.dependencies,s=t.features;return o.inputs=Ad(t.inputs,r),o.outputs=Ad(t.outputs),s&&s.forEach(a=>a(o)),o.directiveDefs=i?()=>("function"==typeof i?i():i).map(Md).filter(Sd):null,o.pipeDefs=i?()=>("function"==typeof i?i():i).map(_e).filter(Sd):null,o})}function Sv(t,e,n){const r=t.\u0275cmp;r.directiveDefs=()=>("function"==typeof e?e():e).map(Md),r.pipeDefs=()=>("function"==typeof n?n():n).map(_e)}function Md(t){return H(t)||ve(t)}function Sd(t){return null!==t}function Tn(t){return rn(()=>({type:t.type,bootstrap:t.bootstrap||V,declarations:t.declarations||V,imports:t.imports||V,exports:t.exports||V,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function Av(t,e){return rn(()=>{const n=Re(t,!0);n.declarations=e.declarations||V,n.imports=e.imports||V,n.exports=e.exports||V})}function Ad(t,e){if(null==t)return pr;const n={};for(const r in t)if(t.hasOwnProperty(r)){let o=t[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,e&&(e[o]=i)}return n}const Fe=ba;function Ae(t){return{type:t.type,name:t.name,factory:null,pure:!1!==t.pure,standalone:!0===t.standalone,onDestroy:t.type.prototype.ngOnDestroy||null}}function H(t){return t[Oi]||null}function ve(t){return t[Ea]||null}function _e(t){return t[Ca]||null}function Do(t){const e=H(t)||ve(t)||_e(t);return null!==e&&e.standalone}function Re(t,e){const n=t[Id]||null;if(!n&&!0===e)throw new Error(`Type ${G(t)} does not have '\u0275mod' property.`);return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const N=11,Z=22;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Te(t){return Array.isArray(t)&&"object"==typeof t[1]}function Xe(t){return Array.isArray(t)&&!0===t[1]}function Sa(t){return 0!=(8&t.flags)}function Li(t){return 2==(2&t.flags)}function ki(t){return 1==(1&t.flags)}function et(t){return null!==t.template}function Ov(t){return 0!=(256&t[2])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Fn(t,e){return t.hasOwnProperty(Mt)?t[Mt]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Rv{constructor(e,n,r){this.previousValue=e,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Co(){return Nd}function Nd(t){return t.type.prototype.ngOnChanges&&(t.setInput=kv),Lv}function Lv(){const t=Pd(this),e=t?.current;if(e){const n=t.previous;if(n===pr)t.previous=e;else for(let r in e)n[r]=e[r];t.current=null,this.ngOnChanges(e)}}function kv(t,e,n,r){const o=Pd(t)||function Bv(t,e){return t[Od]=e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t,{previous:pr,current:null}),i=o.current||(o.current={}),s=o.previous,a=this.declaredInputs[n],u=s[a];i[a]=new Rv(u&&u.currentValue,e,s===pr),t[r]=e}Co.ngInherit=!0;const Od="__ngSimpleChanges__";function Pd(t){return t[Od]||null}let Ta=null;const We=function(t,e,n){Ta?.(t,e,n)},Na="math";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ie(t){for(;Array.isArray(t);)t=t[0];return t}function Bi(t,e){return ie(e[t])}function ke(t,e){return ie(e[t.index])}function Oa(t,e){return t.data[e]}function Dr(t,e){return t[e]}function Be(t,e){const n=e[t];return Te(n)?n:n[0]}function ji(t){return 64==(64&t[2])}function on(t,e){return null==e?null:t[e]}function Fd(t){t[18]=0}function Pa(t,e){t[5]+=e;let n=t,r=t[3];for(;null!==r&&(1===e&&1===n[5]||-1===e&&0===n[5]);)r[5]+=e,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const M={lFrame:zd(null),bindingsEnabled:!0};function Ld(){return M.bindingsEnabled}function Qv(){M.bindingsEnabled=!0}function Yv(){M.bindingsEnabled=!1}function y(){return M.lFrame.lView}function R(){return M.lFrame.tView}function Kv(t){return M.lFrame.contextLView=t,t[8]}function Jv(t){return M.lFrame.contextLView=null,t}function ae(){let t=kd();for(;null!==t&&64===t.type;)t=t.parent;return t}function kd(){return M.lFrame.currentTNode}function bo(){const t=M.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}function dt(t,e){const n=M.lFrame;n.currentTNode=t,n.isParent=e}function Fa(){return M.lFrame.isParent}function Ra(){M.lFrame.isParent=!1}function we(){const t=M.lFrame;let e=t.bindingRootIndex;return-1===e&&(e=t.bindingRootIndex=t.tView.bindingStartIndex),e}function St(){return M.lFrame.bindingIndex}function jd(t){return M.lFrame.bindingIndex=t}function vr(){return M.lFrame.bindingIndex++}function At(t){const e=M.lFrame,n=e.bindingIndex;return e.bindingIndex=e.bindingIndex+t,n}function Vd(t){M.lFrame.inI18n=t}function t_(t,e){const n=M.lFrame;n.bindingIndex=n.bindingRootIndex=t,La(e)}function La(t){M.lFrame.currentDirectiveIndex=t}function ka(t){const e=M.lFrame.currentDirectiveIndex;return-1===e?null:t[e]}function $d(){return M.lFrame.currentQueryIndex}function Ba(t){M.lFrame.currentQueryIndex=t}function r_(t){const e=t[1];return 2===e.type?e.declTNode:1===e.type?t[6]:null}function Hd(t,e,n){if(n&F.SkipSelf){let o=e,i=t;for(;(o=o.parent,null===o&&!(n&F.Host))&&(o=r_(i),!(null===o||(i=i[15],10&o.type))););if(null===o)return!1;e=o,t=i}const r=M.lFrame=Ud();return r.currentTNode=e,r.lView=t,!0}function ja(t){const e=Ud(),n=t[1];M.lFrame=e,e.currentTNode=n.firstChild,e.lView=t,e.tView=n,e.contextLView=t,e.bindingIndex=n.bindingStartIndex,e.inI18n=!1}function Ud(){const t=M.lFrame,e=null===t?null:t.child;return null===e?zd(t):e}function zd(t){const e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return null!==t&&(t.child=e),e}function Gd(){const t=M.lFrame;return M.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}const Wd=Gd;function Va(){const t=Gd();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function o_(t){return(M.lFrame.contextLView=function i_(t,e){for(;t>0;)e=e[15],t--;return e}(t,M.lFrame.contextLView))[8]}function Ee(){return M.lFrame.selectedIndex}function sn(t){M.lFrame.selectedIndex=t}function ee(){const t=M.lFrame;return Oa(t.tView,t.selectedIndex)}function s_(){M.lFrame.currentNamespace="svg"}function a_(){M.lFrame.currentNamespace=Na}function u_(){!function c_(){M.lFrame.currentNamespace=null}()}function Vi(t,e){for(let n=e.directiveStart,r=e.directiveEnd;n<r;n++){const i=t.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:u,ngAfterViewChecked:c,ngOnDestroy:l}=i;s&&(t.contentHooks||(t.contentHooks=[])).push(-n,s),a&&((t.contentHooks||(t.contentHooks=[])).push(n,a),(t.contentCheckHooks||(t.contentCheckHooks=[])).push(n,a)),u&&(t.viewHooks||(t.viewHooks=[])).push(-n,u),c&&((t.viewHooks||(t.viewHooks=[])).push(n,c),(t.viewCheckHooks||(t.viewCheckHooks=[])).push(n,c)),null!=l&&(t.destroyHooks||(t.destroyHooks=[])).push(n,l)}}function $i(t,e,n){qd(t,e,3,n)}function Hi(t,e,n,r){(3&t[2])===n&&qd(t,e,n,r)}function $a(t,e){let n=t[2];(3&n)===e&&(n&=2047,n+=1,t[2]=n)}function qd(t,e,n,r){const o=void 0!==r?65535&t[18]:0,i=r??-1,s=e.length-1;let a=0;for(let u=o;u<s;u++)if("number"==typeof e[u+1]){if(a=e[u],null!=r&&a>=r)break}else e[u]<0&&(t[18]+=65536),(a<i||-1==i)&&(f_(t,n,e,u),t[18]=(4294901760&t[18])+u+2),u++}function f_(t,e,n,r){const o=n[r]<0,i=n[r+1],a=t[o?-n[r]:n[r]];if(o){if(t[2]>>11<t[18]>>16&&(3&t[2])===e){t[2]+=2048,We(4,a,i);try{i.call(a)}finally{We(5,a,i)}}}else{We(4,a,i);try{i.call(a)}finally{We(5,a,i)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Io{constructor(e,n,r){this.factory=e,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function Ui(t,e,n){let r=0;for(;r<n.length;){const o=n[r];if("number"==typeof o){if(0!==o)break;r++;const i=n[r++],s=n[r++],a=n[r++];t.setAttribute(e,s,a,i)}else{const i=o,s=n[++r];Qd(i)?t.setProperty(e,i,s):t.setAttribute(e,i,s),r++}}return r}function Zd(t){return 3===t||4===t||6===t}function Qd(t){return 64===t.charCodeAt(0)}function zi(t,e){if(null!==e&&0!==e.length)if(null===t||0===t.length)t=e.slice();else{let n=-1;for(let r=0;r<e.length;r++){const o=e[r];"number"==typeof o?n=o:0===n||Yd(t,n,o,null,-1===n||2===n?e[++r]:null)}}return t}function Yd(t,e,n,r,o){let i=0,s=t.length;if(-1===e)s=-1;else for(;i<t.length;){const a=t[i++];if("number"==typeof a){if(a===e){s=-1;break}if(a>e){s=i-1;break}}}for(;i<t.length;){const a=t[i];if("number"==typeof a)break;if(a===n){if(null===r)return void(null!==o&&(t[i+1]=o));if(r===t[i+1])return void(t[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(t.splice(s,0,e),i=s+1),t.splice(i++,0,n),null!==r&&t.splice(i++,0,r),null!==o&&t.splice(i++,0,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Kd(t){return-1!==t}function _r(t){return 32767&t}function wr(t,e){let n=function y_(t){return t>>16}(t),r=e;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ua=!0;function Gi(t){const e=Ua;return Ua=t,e}let D_=0;const ft={};function So(t,e){const n=Ga(t,e);if(-1!==n)return n;const r=e[1];r.firstCreatePass&&(t.injectorIndex=e.length,za(r.data,t),za(e,null),za(r.blueprint,null));const o=Wi(t,e),i=t.injectorIndex;if(Kd(o)){const s=_r(o),a=wr(o,e),u=a[1].data;for(let c=0;c<8;c++)e[i+c]=a[s+c]|u[s+c]}return e[i+8]=o,i}function za(t,e){t.push(0,0,0,0,0,0,0,0,e)}function Ga(t,e){return-1===t.injectorIndex||t.parent&&t.parent.injectorIndex===t.injectorIndex||null===e[t.injectorIndex+8]?-1:t.injectorIndex}function Wi(t,e){if(t.parent&&-1!==t.parent.injectorIndex)return t.parent.injectorIndex;let n=0,r=null,o=e;for(;null!==o;){if(r=af(o),null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function qi(t,e,n){!function v_(t,e,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(yo)&&(r=n[yo]),null==r&&(r=n[yo]=D_++);const o=255&r,i=1<<o;e.data[t+(o>>5)]|=i}(t,e,n)}function ef(t,e,n){if(n&F.Optional||void 0!==t)return t;Ti()}function tf(t,e,n,r){if(n&F.Optional&&void 0===r&&(r=null),0==(n&(F.Self|F.Host))){const o=t[9],i=ze(void 0);try{return o?o.get(e,r,n&F.Optional):Cd(e,r,n&F.Optional)}finally{ze(i)}}return ef(r,0,n)}function nf(t,e,n,r=F.Default,o){if(null!==t){if(1024&e[2]){const s=function I_(t,e,n,r,o){let i=t,s=e;for(;null!==i&&null!==s&&1024&s[2]&&!(256&s[2]);){const a=rf(i,s,n,r|F.Self,ft);if(a!==ft)return a;let u=i.parent;if(!u){const c=s[21];if(c){const l=c.get(n,ft,r);if(l!==ft)return l}u=af(s),s=s[15]}i=u}return o}(t,e,n,r,ft);if(s!==ft)return s}const i=rf(t,e,n,r,ft);if(i!==ft)return i}return tf(e,n,r,o)}function rf(t,e,n,r,o){const i=function E_(t){if("string"==typeof t)return t.charCodeAt(0)||0;const e=t.hasOwnProperty(yo)?t[yo]:void 0;return"number"==typeof e?e>=0?255&e:C_:e}(n);if("function"==typeof i){if(!Hd(e,t,r))return r&F.Host?ef(o,0,r):tf(e,n,r,o);try{const s=i(r);if(null!=s||r&F.Optional)return s;Ti()}finally{Wd()}}else if("number"==typeof i){let s=null,a=Ga(t,e),u=-1,c=r&F.Host?e[16][6]:null;for((-1===a||r&F.SkipSelf)&&(u=-1===a?Wi(t,e):e[a+8],-1!==u&&sf(r,!1)?(s=e[1],a=_r(u),e=wr(u,e)):a=-1);-1!==a;){const l=e[1];if(of(i,a,l.data)){const d=w_(a,e,n,s,r,c);if(d!==ft)return d}u=e[a+8],-1!==u&&sf(r,e[1].data[a+8]===c)&&of(i,a,e)?(s=l,a=_r(u),e=wr(u,e)):a=-1}}return o}function w_(t,e,n,r,o,i){const s=e[1],a=s.data[t+8],l=Zi(a,s,n,null==r?Li(a)&&Ua:r!=s&&0!=(3&a.type),o&F.Host&&i===a);return null!==l?Ao(e,s,l,a):ft}function Zi(t,e,n,r,o){const i=t.providerIndexes,s=e.data,a=1048575&i,u=t.directiveStart,c=t.directiveEnd,l=i>>20,f=o?a+l:c;for(let h=r?a:a+l;h<f;h++){const p=s[h];if(h<u&&n===p||h>=u&&p.type===n)return h}if(o){const h=s[u];if(h&&et(h)&&h.type===n)return u}return null}function Ao(t,e,n,r){let o=t[n];const i=e.data;if(function h_(t){return t instanceof Io}(o)){const s=o;s.resolving&&function yv(t,e){const n=e?`. Dependency path: ${e.join(" > ")} > ${t}`:"";throw new E(-200,`Circular dependency in DI detected for ${t}${n}`)}(j(i[n]));const a=Gi(s.canSeeViewProviders);s.resolving=!0;const u=s.injectImpl?ze(s.injectImpl):null;Hd(t,r,F.Default);try{o=t[n]=s.factory(void 0,i,t,r),e.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function d_(t,e,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=e.type.prototype;if(r){const s=Nd(e);(n.preOrderHooks||(n.preOrderHooks=[])).push(t,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-t,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(t,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,i))}(n,i[n],e)}finally{null!==u&&ze(u),Gi(a),s.resolving=!1,Wd()}}return o}function of(t,e,n){const r=1<<t;return!!(n[e+(t>>5)]&r)}function sf(t,e){return!(t&F.Self||t&F.Host&&e)}class Er{constructor(e,n){this._tNode=e,this._lView=n}get(e,n,r){return nf(this._tNode,this._lView,e,r,n)}}function C_(){return new Er(ae(),y())}function b_(t){return rn(()=>{const e=t.prototype.constructor,n=e[Mt]||Wa(e),r=Object.prototype;let o=Object.getPrototypeOf(t.prototype).constructor;for(;o&&o!==r;){const i=o[Mt]||Wa(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function Wa(t){return va(t)?()=>{const e=Wa(I(t));return e&&e()}:Fn(t)}function af(t){const e=t[1],n=e.type;return 2===n?e.declTNode:1===n?t[6]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function qa(t){return function __(t,e){if("class"===e)return t.classes;if("style"===e)return t.styles;const n=t.attrs;if(n){const r=n.length;let o=0;for(;o<r;){const i=n[o];if(Zd(i))break;if(0===i)o+=2;else if("number"==typeof i)for(o++;o<r&&"string"==typeof n[o];)o++;else{if(i===e)return n[o+1];o+=2}}}return null}(ae(),t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Cr="__annotations__",br="__parameters__",Ir="__prop__metadata__";function To(t,e,n,r,o){return rn(()=>{const i=Za(e);function s(...a){if(this instanceof s)return i.call(this,...a),this;const u=new s(...a);return function(l){return o&&o(l,...a),(l.hasOwnProperty(Cr)?l[Cr]:Object.defineProperty(l,Cr,{value:[]})[Cr]).push(u),r&&r(l),l}}return n&&(s.prototype=Object.create(n.prototype)),s.prototype.ngMetadataName=t,s.annotationCls=s,s})}function Za(t){return function(...n){if(t){const r=t(...n);for(const o in r)this[o]=r[o]}}}function Mr(t,e,n){return rn(()=>{const r=Za(e);function o(...i){if(this instanceof o)return r.apply(this,i),this;const s=new o(...i);return a.annotation=s,a;function a(u,c,l){const d=u.hasOwnProperty(br)?u[br]:Object.defineProperty(u,br,{value:[]})[br];for(;d.length<=l;)d.push(null);return(d[l]=d[l]||[]).push(s),u}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=t,o.annotationCls=o,o})}function un(t,e,n,r){return rn(()=>{const o=Za(e);function i(...s){if(this instanceof i)return o.apply(this,s),this;const a=new i(...s);return function u(c,l){const d=c.constructor,f=d.hasOwnProperty(Ir)?d[Ir]:Object.defineProperty(d,Ir,{value:{}})[Ir];f[l]=f.hasOwnProperty(l)&&f[l]||[],f[l].unshift(a),r&&r(c,l,...s)}}return n&&(i.prototype=Object.create(n.prototype)),i.prototype.ngMetadataName=t,i.annotationCls=i,i})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const M_=Mr("Attribute",t=>({attributeName:t,__NG_ELEMENT_ID__:()=>qa(t)}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class O{constructor(e,n){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=x({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */new O("AnalyzeForEntryComponents");class Qi{}un("ContentChildren",(t,e={})=>({selector:t,first:!1,isViewQuery:!1,descendants:!1,emitDistinctChangesOnly:true,...e}),Qi),un("ContentChild",(t,e={})=>({selector:t,first:!0,isViewQuery:!1,descendants:!0,...e}),Qi),un("ViewChildren",(t,e={})=>({selector:t,first:!1,isViewQuery:!0,descendants:!0,emitDistinctChangesOnly:true,...e}),Qi),un("ViewChild",(t,e)=>({selector:t,first:!0,isViewQuery:!0,descendants:!0,...e}),Qi)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */;var Rn,cf,lf;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ue(t){const e=q.ng;if(e&&e.\u0275compilerFacade)return e.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */!function(t){t[t.Directive=0]="Directive",t[t.Component=1]="Component",t[t.Injectable=2]="Injectable",t[t.Pipe=3]="Pipe",t[t.NgModule=4]="NgModule"}(Rn||(Rn={})),function(t){t[t.Directive=0]="Directive",t[t.Pipe=1]="Pipe",t[t.NgModule=2]="NgModule"}(cf||(cf={})),function(t){t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom"}(lf||(lf={}));const Qa=Function;function xo(t){return"function"==typeof t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function je(t,e){void 0===e&&(e=t);for(let n=0;n<t.length;n++){let r=t[n];Array.isArray(r)?(e===t&&(e=t.slice(0,n)),je(r,e)):e!==t&&e.push(r)}return e}function Tt(t,e){t.forEach(n=>Array.isArray(n)?Tt(n,e):e(n))}function df(t,e,n){e>=t.length?t.push(n):t.splice(e,0,n)}function Yi(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}function No(t,e){const n=[];for(let r=0;r<t;r++)n.push(e);return n}function Ve(t,e,n){let r=Sr(t,e);return r>=0?t[1|r]=n:(r=~r,function T_(t,e,n,r){let o=t.length;if(o==e)t.push(n,r);else if(1===o)t.push(r,t[0]),t[0]=n;else{for(o--,t.push(t[o-1],t[o]);o>e;){const i=o-2;t[o]=t[i],o--}t[e]=n,t[e+1]=r}}(t,r,e,n)),r}function Ya(t,e){const n=Sr(t,e);if(n>=0)return t[1|n]}function Sr(t,e){return pf(t,e,1)}function pf(t,e,n){let r=0,o=t.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=t[i<<n];if(e===s)return i<<n;s>e?o=i:r=i+1}return~(o<<n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const x_=/^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/,N_=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/,O_=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/,P_=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;class R_{constructor(e){this._reflect=e||q.Reflect}factory(e){return(...n)=>new e(...n)}_zipTypesAndAnnotations(e,n){let r;r=No(typeof e>"u"?n.length:e.length);for(let o=0;o<r.length;o++)typeof e>"u"?r[o]=[]:e[o]&&e[o]!=Object?r[o]=[e[o]]:r[o]=[],n&&null!=n[o]&&(r[o]=r[o].concat(n[o]));return r}_ownParameters(e,n){if(function F_(t){return x_.test(t)||P_.test(t)||N_.test(t)&&!O_.test(t)}(e.toString()))return null;if(e.parameters&&e.parameters!==n.parameters)return e.parameters;const o=e.ctorParameters;if(o&&o!==n.ctorParameters){const a="function"==typeof o?o():o,u=a.map(l=>l&&l.type),c=a.map(l=>l&&Ka(l.decorators));return this._zipTypesAndAnnotations(u,c)}const i=e.hasOwnProperty(br)&&e[br],s=this._reflect&&this._reflect.getOwnMetadata&&this._reflect.getOwnMetadata("design:paramtypes",e);return s||i?this._zipTypesAndAnnotations(s,i):No(e.length)}parameters(e){if(!xo(e))return[];const n=Ki(e);let r=this._ownParameters(e,n);return!r&&n!==Object&&(r=this.parameters(n)),r||[]}_ownAnnotations(e,n){if(e.annotations&&e.annotations!==n.annotations){let r=e.annotations;return"function"==typeof r&&r.annotations&&(r=r.annotations),r}return e.decorators&&e.decorators!==n.decorators?Ka(e.decorators):e.hasOwnProperty(Cr)?e[Cr]:null}annotations(e){if(!xo(e))return[];const n=Ki(e),r=this._ownAnnotations(e,n)||[];return(n!==Object?this.annotations(n):[]).concat(r)}_ownPropMetadata(e,n){if(e.propMetadata&&e.propMetadata!==n.propMetadata){let r=e.propMetadata;return"function"==typeof r&&r.propMetadata&&(r=r.propMetadata),r}if(e.propDecorators&&e.propDecorators!==n.propDecorators){const r=e.propDecorators,o={};return Object.keys(r).forEach(i=>{o[i]=Ka(r[i])}),o}return e.hasOwnProperty(Ir)?e[Ir]:null}propMetadata(e){if(!xo(e))return{};const n=Ki(e),r={};if(n!==Object){const i=this.propMetadata(n);Object.keys(i).forEach(s=>{r[s]=i[s]})}const o=this._ownPropMetadata(e,n);return o&&Object.keys(o).forEach(i=>{const s=[];r.hasOwnProperty(i)&&s.push(...r[i]),s.push(...o[i]),r[i]=s}),r}ownPropMetadata(e){return xo(e)&&this._ownPropMetadata(e,Ki(e))||{}}hasLifecycleHook(e,n){return e instanceof Qa&&n in e.prototype}}function Ka(t){return t?t.map(e=>new(0,e.type.annotationCls)(...e.args?e.args:[])):[]}function Ki(t){const e=t.prototype?Object.getPrototypeOf(t.prototype):null;return(e?e.constructor:null)||Object}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const cn={},Ja="__NG_DI_FLAG__",Ji="ngTempTokenPath",k_=/\n/gm,gf="__source";let Oo;function Ar(t){const e=Oo;return Oo=t,e}function j_(t,e=F.Default){if(void 0===Oo)throw new E(-203,!1);return null===Oo?Cd(t,void 0,e):Oo.get(t,e&F.Optional?null:void 0,e)}function b(t,e=F.Default){return(function Iv(){return wa}()||j_)(I(t),e)}function mf(t){throw new E(202,!1)}function fe(t,e=F.Default){return"number"!=typeof e&&(e=0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)),b(t,e)}function Xa(t){const e=[];for(let n=0;n<t.length;n++){const r=I(t[n]);if(Array.isArray(r)){if(0===r.length)throw new E(900,!1);let o,i=F.Default;for(let s=0;s<r.length;s++){const a=r[s],u=V_(a);"number"==typeof u?-1===u?o=a.token:i|=u:o=a}e.push(b(o,i))}else e.push(b(r))}return e}function Po(t,e){return t[Ja]=e,t.prototype[Ja]=e,t}function V_(t){return t[Ja]}function $_(t,e,n,r){const o=t[Ji];throw e[gf]&&o.unshift(e[gf]),t.message=function H_(t,e,n,r=null){t=t&&"\n"===t.charAt(0)&&"\u0275"==t.charAt(1)?t.slice(2):t;let o=G(e);if(Array.isArray(e))o=e.map(G).join(" -> ");else if("object"==typeof e){let i=[];for(let s in e)if(e.hasOwnProperty(s)){let a=e[s];i.push(s+":"+("string"==typeof a?JSON.stringify(a):G(a)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${t.replace(k_,"\n  ")}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */("\n"+t.message,o,n,r),t.ngTokenPath=o,t[Ji]=null,t}const eu=Po(Mr("Inject",t=>({token:t})),-1),Fo=Po(Mr("Optional"),8),tu=Po(Mr("Self"),2),Ro=Po(Mr("SkipSelf"),4),U_=Po(Mr("Host"),1);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let yf=null;function Lo(){return yf=yf||new R_}function Xi(t){return Df(Lo().parameters(t))}function Df(t){return t.map(e=>function z_(t){const e={token:null,attribute:null,host:!1,optional:!1,self:!1,skipSelf:!1};if(Array.isArray(t)&&t.length>0)for(let n=0;n<t.length;n++){const r=t[n];if(void 0===r)continue;const o=Object.getPrototypeOf(r);if(r instanceof Fo||"Optional"===o.ngMetadataName)e.optional=!0;else if(r instanceof Ro||"SkipSelf"===o.ngMetadataName)e.skipSelf=!0;else if(r instanceof tu||"Self"===o.ngMetadataName)e.self=!0;else if(r instanceof U_||"Host"===o.ngMetadataName)e.host=!0;else if(r instanceof eu)e.token=r.token;else if(r instanceof M_){if(void 0===r.attributeName)throw new E(204,!1);e.attribute=r.attributeName}else e.token=r}else void 0===t||Array.isArray(t)&&0===t.length?e.token=null:e.token=t;return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e))}function G_(t){const e=[],n=new Map;function r(o){let i=n.get(o);if(!i){const s=t(o);n.set(o,i=s.then(Q_))}return i}return Tr.forEach((o,i)=>{const s=[];o.templateUrl&&s.push(r(o.templateUrl).then(d=>{o.template=d}));const a=o.styleUrls,u=o.styles||(o.styles=[]),c=o.styles.length;a&&a.forEach((d,f)=>{u.push(""),s.push(r(d).then(h=>{u[c+f]=h,a.splice(a.indexOf(d),1),0==a.length&&(o.styleUrls=void 0)}))});const l=Promise.all(s).then(()=>function Y_(t){ko.delete(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(i));e.push(l)}),function q_(){const t=Tr;return Tr=new Map,t}(),Promise.all(e).then(()=>{})}let Tr=new Map;const ko=new Set;function vf(t){return!!(t.templateUrl&&!t.hasOwnProperty("template")||t.styleUrls&&t.styleUrls.length)}function Q_(t){return"string"==typeof t?t:t.text()}const es=new Map;let _f=!0;function wf(t,e){(function K_(t,e,n){if(e&&e!==n&&_f)throw new Error(`Duplicate module registered for ${t} - ${G(e)} vs ${G(e.name)}`)})(e,es.get(e)||null,t),es.set(e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var xt;!function(t){t[t.Important=1]="Important",t[t.DashCase=2]="DashCase"}(xt||(xt={}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const tw=/^>|^->|<!--|-->|--!>|<!-$/g,nw=/(<|>)/;function Sf(t){return t.replace(tw,e=>e.replace(nw,"\u200b$1\u200b"))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const iu=new Map;let ow=0;const au="__ngContext__";function ge(t,e){Te(e)?(t[au]=e[20],function sw(t){iu.set(t[20],t)}(e)):t[au]=e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let uu;function cu(t,e){return uu(t,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function jo(t){const e=t[3];return Xe(e)?e[3]:e}function lu(t){return Rf(t[13])}function du(t){return Rf(t[4])}function Rf(t){for(;null!==t&&!Xe(t);)t=t[4];return t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function xr(t,e,n,r,o){if(null!=r){let i,s=!1;Xe(r)?i=r:Te(r)&&(s=!0,r=r[0]);const a=ie(r);0===t&&null!==n?null==o?$f(e,n,a):Ln(e,n,a,o||null,!0):1===t&&null!==n?Ln(e,n,a,o||null,!0):2===t?Du(e,a,s):3===t&&e.destroyNode(a),null!=i&&function Nw(t,e,n,r,o){const i=n[7],s=ie(n);i!==s&&xr(e,t,r,i,o);for(let a=10;a<n.length;a++){const u=n[a];Vo(u[1],u,t,e,r,i)}}(e,t,i,n,o)}}function fu(t,e){return t.createText(e)}function Lf(t,e,n){t.setValue(e,n)}function vw(t,e){return t.createComment(Sf(e))}function hu(t,e,n){return t.createElement(e,n)}function bw(t,e,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=e),r<i-10?(e[4]=n[o],df(n,10+r,e)):(n.push(e),e[4]=null),e[3]=n;const s=e[17];null!==s&&n!==s&&function Iw(t,e){const n=t[9],o=e[3][3][16];e[16]!==o&&(t[2]=!0),null===n?t[9]=[e]:n.push(e)}(s,e);const a=e[19];null!==a&&a.insertView(t),e[2]|=64}function kf(t,e){const n=t[9],r=n.indexOf(e),o=e[3];512&e[2]&&(e[2]&=-513,Pa(o,-1)),n.splice(r,1)}function pu(t,e){if(t.length<=10)return;const n=10+e,r=t[n];if(r){const o=r[17];null!==o&&o!==t&&kf(o,r),e>0&&(t[n-1][4]=r[4]);const i=Yi(t,10+e);!function _w(t,e){Vo(t,e,e[N],2,null,null),e[0]=null,e[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-65}return r}function Bf(t,e){if(!(128&e[2])){const n=e[N];n.destroyNode&&Vo(t,e,n,3,null,null),function Cw(t){let e=t[13];if(!e)return gu(t[1],t);for(;e;){let n=null;if(Te(e))n=e[13];else{const r=e[10];r&&(n=r)}if(!n){for(;e&&!e[4]&&e!==t;)Te(e)&&gu(e[1],e),e=e[3];null===e&&(e=t),Te(e)&&gu(e[1],e),n=e&&e[4]}e=n}}(e)}}function gu(t,e){if(!(128&e[2])){e[2]&=-65,e[2]|=128,function Sw(t,e){let n;if(null!=t&&null!=(n=t.destroyHooks))for(let r=0;r<n.length;r+=2){const o=e[n[r]];if(!(o instanceof Io)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const a=o[i[s]],u=i[s+1];We(4,a,u);try{u.call(a)}finally{We(5,a,u)}}else{We(4,o,i);try{i.call(o)}finally{We(5,o,i)}}}}}(t,e),function Mw(t,e){const n=t.cleanup,r=e[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],a="function"==typeof s?s(e):ie(e[s]),u=r[o=n[i+2]],c=n[i+3];"boolean"==typeof c?a.removeEventListener(n[i],u,c):c>=0?r[o=c]():r[o=-c].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++){(0,r[i])()}e[7]=null}}(t,e),1===e[1].type&&e[N].destroy();const n=e[17];if(null!==n&&Xe(e[3])){n!==e[3]&&kf(n,e);const r=e[19];null!==r&&r.detachView(t)}!function aw(t){iu.delete(t[20])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)}}function jf(t,e,n){return Vf(t,e.parent,n)}function Vf(t,e,n){let r=e;for(;null!==r&&40&r.type;)r=(e=r).parent;if(null===r)return n[0];if(2&r.flags){const o=t.data[r.directiveStart].encapsulation;if(o===It.None||o===It.Emulated)return null}return ke(r,n)}function Ln(t,e,n,r,o){t.insertBefore(e,n,r,o)}function $f(t,e,n){t.appendChild(e,n)}function Hf(t,e,n,r,o){null!==r?Ln(t,e,n,r,o):$f(t,e,n)}function ts(t,e){return t.parentNode(e)}function Uf(t,e,n){return Gf(t,e,n)}function zf(t,e,n){return 40&t.type?ke(t,n):null}let mu,os,Eu,is,Gf=zf;function Wf(t,e){Gf=t,mu=e}function ns(t,e,n,r){const o=jf(t,r,e),i=e[N],a=Uf(r.parent||e[6],r,e);if(null!=o)if(Array.isArray(n))for(let u=0;u<n.length;u++)Hf(i,o,n[u],a,!1);else Hf(i,o,n,a,!1);void 0!==mu&&mu(i,r,e,n,o)}function rs(t,e){if(null!==e){const n=e.type;if(3&n)return ke(e,t);if(4&n)return yu(-1,t[e.index]);if(8&n){const r=e.child;if(null!==r)return rs(t,r);{const o=t[e.index];return Xe(o)?yu(-1,o):ie(o)}}if(32&n)return cu(e,t)()||ie(t[e.index]);{const r=qf(t,e);if(null!==r){if(Array.isArray(r))return r[0];return rs(jo(t[16]),r)}return rs(t,e.next)}}return null}function qf(t,e){if(null!==e){const r=t[16][6],o=e.projection;return r.projection[o]}return null}function yu(t,e){const n=10+t+1;if(n<e.length){const r=e[n],o=r[1].firstChild;if(null!==o)return rs(r,o)}return e[7]}function Du(t,e,n){const r=ts(t,e);r&&function Aw(t,e,n,r){t.removeChild(e,n,r)}(t,r,e,n)}function vu(t,e,n,r,o,i,s){for(;null!=n;){const a=r[n.index],u=n.type;if(s&&0===e&&(a&&ge(ie(a),r),n.flags|=4),64!=(64&n.flags))if(8&u)vu(t,e,n.child,r,o,i,!1),xr(e,t,o,a,i);else if(32&u){const c=cu(n,r);let l;for(;l=c();)xr(e,t,o,l,i);xr(e,t,o,a,i)}else 16&u?Zf(t,e,r,n,o,i):xr(e,t,o,a,i);n=s?n.projectionNext:n.next}}function Vo(t,e,n,r,o,i){vu(n,r,t.firstChild,e,o,i,!1)}function Zf(t,e,n,r,o,i){const s=n[16],u=s[6].projection[r.projection];if(Array.isArray(u))for(let c=0;c<u.length;c++){xr(e,t,o,u[c],i)}else{vu(t,e,u,s[3],o,i,!0)}}function Qf(t,e,n){t.setAttribute(e,"style",n)}function _u(t,e,n){""===n?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function wu(){if(void 0===os&&(os=null,q.trustedTypes))try{os=q.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return os}function kn(t){return wu()?.createHTML(t)||t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Rw(t,e,n){const r=y(),o=ee(),i=ke(o,r);if(2===o.type&&"iframe"===e.toLowerCase()){const s=i;s.src="",s.srcdoc=kn(""),Du(r[N],s);throw new E(-910,!1)}return t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Yf(){return void 0!==Eu?Eu:typeof document<"u"?document:void 0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Cu(){if(void 0===is&&(is=null,q.trustedTypes))try{is=q.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return is}function Kf(t){return Cu()?.createHTML(t)||t}function Jf(t){return Cu()?.createScript(t)||t}function Xf(t){return Cu()?.createScriptURL(t)||t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Bn{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}class kw extends Bn{getTypeName(){return"HTML"}}class Bw extends Bn{getTypeName(){return"Style"}}class jw extends Bn{getTypeName(){return"Script"}}class Vw extends Bn{getTypeName(){return"URL"}}class $w extends Bn{getTypeName(){return"ResourceURL"}}function $e(t){return t instanceof Bn?t.changingThisBreaksApplicationSecurity:t}function ht(t,e){const n=function Hw(t){return t instanceof Bn&&t.getTypeName()||null}(t);if(null!=n&&n!==e){if("ResourceURL"===n&&"URL"===e)return!0;throw new Error(`Required a safe ${e}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function eh(t){const e=new Qw(t);return function Yw(){try{return!!(new window.DOMParser).parseFromString(kn(""),"text/html")}catch{return!1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */()?new Zw(e):e}class Zw{constructor(e){this.inertDocumentHelper=e}getInertBodyElement(e){e="<body><remove></remove>"+e;try{const n=(new window.DOMParser).parseFromString(kn(e),"text/html").body;return null===n?this.inertDocumentHelper.getInertBodyElement(e):(n.removeChild(n.firstChild),n)}catch{return null}}}class Qw{constructor(e){if(this.defaultDoc=e,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"),null==this.inertDocument.body){const n=this.inertDocument.createElement("html");this.inertDocument.appendChild(n);const r=this.inertDocument.createElement("body");n.appendChild(r)}}getInertBodyElement(e){const n=this.inertDocument.createElement("template");if("content"in n)return n.innerHTML=kn(e),n;const r=this.inertDocument.createElement("body");return r.innerHTML=kn(e),this.defaultDoc.documentMode&&this.stripCustomNsAttrs(r),r}stripCustomNsAttrs(e){const n=e.attributes;for(let o=n.length-1;0<o;o--){const s=n.item(o).name;("xmlns:ns1"===s||0===s.indexOf("ns1:"))&&e.removeAttribute(s)}let r=e.firstChild;for(;r;)r.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(r),r=r.nextSibling}}const Kw=/^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;function ss(t){return(t=String(t)).match(Kw)?t:"unsafe:"+t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Nt(t){const e={};for(const n of t.split(","))e[n]=!0;return e}function $o(...t){const e={};for(const n of t)for(const r in n)n.hasOwnProperty(r)&&(e[r]=!0);return e}const th=Nt("area,br,col,hr,img,wbr"),nh=Nt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),rh=Nt("rp,rt"),Jw=$o(rh,nh),Xw=$o(nh,Nt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),eE=$o(rh,Nt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),bu=$o(th,Xw,eE,Jw),Iu=Nt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),tE=Nt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),nE=Nt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),oh=$o(Iu,tE,nE),rE=Nt("script,style,template");class oE{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(e){let n=e.firstChild,r=!0;for(;n;)if(n.nodeType===Node.ELEMENT_NODE?r=this.startElement(n):n.nodeType===Node.TEXT_NODE?this.chars(n.nodeValue):this.sanitizedSomething=!0,r&&n.firstChild)n=n.firstChild;else for(;n;){n.nodeType===Node.ELEMENT_NODE&&this.endElement(n);let o=this.checkClobberedElement(n,n.nextSibling);if(o){n=o;break}n=this.checkClobberedElement(n,n.parentNode)}return this.buf.join("")}startElement(e){const n=e.nodeName.toLowerCase();if(!bu.hasOwnProperty(n))return this.sanitizedSomething=!0,!rE.hasOwnProperty(n);this.buf.push("<"),this.buf.push(n);const r=e.attributes;for(let o=0;o<r.length;o++){const i=r.item(o),s=i.name,a=s.toLowerCase();if(!oh.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let u=i.value;Iu[a]&&(u=ss(u)),this.buf.push(" ",s,'="',ih(u),'"')}return this.buf.push(">"),!0}endElement(e){const n=e.nodeName.toLowerCase();bu.hasOwnProperty(n)&&!th.hasOwnProperty(n)&&(this.buf.push("</"),this.buf.push(n),this.buf.push(">"))}chars(e){this.buf.push(ih(e))}checkClobberedElement(e,n){if(n&&(e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`);return n}}const iE=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,sE=/([^\#-~ |!])/g;function ih(t){return t.replace(/&/g,"&amp;").replace(iE,function(e){return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"}).replace(sE,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}let as;function sh(t,e){let n=null;try{as=as||eh(t);let r=e?String(e):"";n=as.getInertBodyElement(r);let o=5,i=r;do{if(0===o)throw new Error("Failed to sanitize html because the input is unstable");o--,r=i,i=n.innerHTML,n=as.getInertBodyElement(r)}while(r!==i);return kn((new oE).sanitizeChildren(Mu(n)||n))}finally{if(n){const r=Mu(n)||n;for(;r.firstChild;)r.removeChild(r.firstChild)}}}function Mu(t){return"content"in t&&function aE(t){return t.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===t.nodeName}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)?t.content:null}var He;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function uE(t){const e=Ho();return e?Kf(e.sanitize(He.HTML,t)||""):ht(t,"HTML")?Kf($e(t)):sh(Yf(),S(t))}function cE(t){const e=Ho();return e?e.sanitize(He.STYLE,t)||"":ht(t,"Style")?$e(t):S(t)}function ah(t){const e=Ho();return e?e.sanitize(He.URL,t)||"":ht(t,"URL")?$e(t):ss(S(t))}function uh(t){const e=Ho();if(e)return Xf(e.sanitize(He.RESOURCE_URL,t)||"");if(ht(t,"ResourceURL"))return Xf($e(t));throw new E(904,!1)}function lE(t){const e=Ho();if(e)return Jf(e.sanitize(He.SCRIPT,t)||"");if(ht(t,"Script"))return Jf($e(t));throw new E(905,!1)}function dE(t){return kn(t[0])}function fE(t){return function Fw(t){return wu()?.createScriptURL(t)||t}(t[0])}function pE(t,e,n){return function hE(t,e){return"src"===e&&("embed"===t||"frame"===t||"iframe"===t||"media"===t||"script"===t)||"href"===e&&("base"===t||"link"===t)?uh:ah}(e,n)(t)}function Ho(){const t=y();return t&&t[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */!function(t){t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL"}(He||(He={}));const ch=new O("ENVIRONMENT_INITIALIZER"),lh=new O("INJECTOR",-1),dh=new O("INJECTOR_DEF_TYPES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class fh{get(e,n=cn){if(n===cn){const r=new Error(`NullInjectorError: No provider for ${G(e)}!`);throw r.name="NullInjectorError",r}return n}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gE(...t){return{\u0275providers:hh(!0,t)}}function hh(t,...e){const n=[],r=new Set;let o;return Tt(e,i=>{const s=i;Su(s,n,[],r)&&(o||(o=[]),o.push(s))}),void 0!==o&&ph(o,n),n}function ph(t,e){for(let n=0;n<t.length;n++){const{ngModule:r,providers:o}=t[n];Tt(o,i=>{e.push(i)})}}function Su(t,e,n,r){if(!(t=I(t)))return!1;let o=null,i=wd(t);const s=!i&&H(t);if(i||s){if(s&&!s.standalone)return!1;o=t}else{const u=t.ngModule;if(i=wd(u),!i)return!1;o=u}const a=r.has(o);if(s){if(a)return!1;if(r.add(o),s.dependencies){const u="function"==typeof s.dependencies?s.dependencies():s.dependencies;for(const c of u)Su(c,e,n,r)}}else{if(!i)return!1;{if(null!=i.imports&&!a){let c;r.add(o);try{Tt(i.imports,l=>{Su(l,e,n,r)&&(c||(c=[]),c.push(l))})}finally{}void 0!==c&&ph(c,e)}if(!a){const c=Fn(o)||(()=>new o);e.push({provide:o,useFactory:c,deps:V},{provide:dh,useValue:o,multi:!0},{provide:ch,useValue:()=>b(o),multi:!0})}const u=i.providers;if(null!=u&&!a){Tt(u,l=>{e.push(l)})}}}return o!==t&&void 0!==t.providers}const mE=z({provide:String,useValue:z});function Au(t){return null!==t&&"object"==typeof t&&mE in t}function gh(t){return!(!t||!t.useExisting)}function mh(t){return!(!t||!t.useFactory)}function jn(t){return"function"==typeof t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Tu=new O("Set Injector scope."),us={},DE={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let xu;function cs(){return void 0===xu&&(xu=new fh),xu}class Nr{}class yh extends Nr{constructor(e,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Ou(e,s=>this.processProvider(s)),this.records.set(lh,Or(void 0,this)),o.has("environment")&&this.records.set(Nr,Or(void 0,this));const i=this.records.get(Tu);null!=i&&"string"==typeof i.value&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(dh.multi,V,F.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const e of this._ngOnDestroyHooks)e.ngOnDestroy();for(const e of this._onDestroyHooks)e()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(e){this._onDestroyHooks.push(e)}runInContext(e){this.assertNotDestroyed();const n=Ar(this),r=ze(void 0);try{return e()}finally{Ar(n),ze(r)}}get(e,n=cn,r=F.Default){this.assertNotDestroyed();const o=Ar(this),i=ze(void 0);try{if(!(r&F.SkipSelf)){let a=this.records.get(e);if(void 0===a){const u=function CE(t){return"function"==typeof t||"object"==typeof t&&t instanceof O}(e)&&xi(e);a=u&&this.injectableDefInScope(u)?Or(Nu(e),us):null,this.records.set(e,a)}if(null!=a)return this.hydrate(e,a)}const s=r&F.Self?cs():this.parent;return n=r&F.Optional&&n===cn?null:n,s.get(e,n)}catch(s){if("NullInjectorError"===s.name){if((s[Ji]=s[Ji]||[]).unshift(G(e)),o)throw s;return $_(s,e,"R3InjectorError",this.source)}throw s}finally{ze(i),Ar(o)}}resolveInjectorInitializers(){const e=Ar(this),n=ze(void 0);try{const r=this.get(ch.multi,V,F.Self);for(const o of r)o()}finally{Ar(e),ze(n)}}toString(){const e=[],n=this.records;for(const r of n.keys())e.push(G(r));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new E(205,!1)}processProvider(e){let n=jn(e=I(e))?e:I(e&&e.provide);const r=function _E(t){if(Au(t))return Or(void 0,t.useValue);return Or(Dh(t),us)}(e);if(jn(e)||!0!==e.multi){this.records.get(n)}else{let o=this.records.get(n);o||(o=Or(void 0,us,!0),o.factory=()=>Xa(o.multi),this.records.set(n,o)),n=e,o.multi.push(e)}this.records.set(n,r)}hydrate(e,n){return n.value===us&&(n.value=DE,n.value=n.factory()),"object"==typeof n.value&&n.value&&function EE(t){return null!==t&&"object"==typeof t&&"function"==typeof t.ngOnDestroy}(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(e){if(!e.providedIn)return!1;const n=I(e.providedIn);return"string"==typeof n?"any"===n||this.scopes.has(n):this.injectorDefTypes.has(n)}}function Nu(t){const e=xi(t),n=null!==e?e.factory:Fn(t);if(null!==n)return n;if(t instanceof O)throw new E(204,!1);if(t instanceof Function)return function vE(t){const e=t.length;if(e>0){No(e,"?");throw new E(204,!1)}const n=function Ev(t){const e=t&&(t[Ni]||t[Ed]);if(e){const n=function Cv(t){if(t.hasOwnProperty("name"))return t.name;const e=(""+t).match(/^function\s*([^\s(]+)/);return null===e?"":e[1]}(t);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),e}return null}(t);return null!==n?()=>n.factory(t):()=>new t}(t);throw new E(204,!1)}function Dh(t,e,n){let r;if(jn(t)){const o=I(t);return Fn(o)||Nu(o)}if(Au(t))r=()=>I(t.useValue);else if(mh(t))r=()=>t.useFactory(...Xa(t.deps||[]));else if(gh(t))r=()=>b(I(t.useExisting));else{const o=I(t&&(t.useClass||t.provide));if(!function wE(t){return!!t.deps}(t))return Fn(o)||Nu(o);r=()=>new o(...Xa(t.deps))}return r}function Or(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function bE(t){return!!t.\u0275providers}function Ou(t,e){for(const n of t)Array.isArray(n)?Ou(n,e):bE(n)?Ou(n.\u0275providers,e):e(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class vh{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const _h="ngComponent";class SE{resolveComponentFactory(e){throw function ME(t){const e=Error(`No component factory found for ${G(t)}. Did you add it to @NgModule.entryComponents?`);return e[_h]=t,e}(e)}}class Uo{}function Pr(t,e){return new ln(ke(t,e))}Uo.NULL=new SE;class ln{constructor(e){this.nativeElement=e}}function TE(t){return t instanceof ln?t.nativeElement:t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */ln.__NG_ELEMENT_ID__=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function AE(){return Pr(ae(),y())};new O("Renderer2Interceptor");class wh{}class ls{}ls.__NG_ELEMENT_ID__=()=>function xE(){const t=y(),n=Be(ae().index,t);return(Te(n)?n:t)[N]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();class Pu{}Pu.\u0275prov=x({token:Pu,providedIn:"root",factory:()=>null});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Fu{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}}const NE=new Fu("14.3.0"),Ru={},Lu="ngOriginalError";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ku(t){return t[Lu]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Fr{constructor(){this._console=console}handleError(e){const n=this._findOriginalError(e);this._console.error("ERROR",e),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(e){let n=e&&ku(e);for(;n&&ku(n);)n=ku(n);return n||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function kE(t){return t.ownerDocument.defaultView}function BE(t){return t.ownerDocument}function jE(t){return t.ownerDocument.body}function Ot(t){return t instanceof Function?t():t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ch(t,e,n){let r=t.length;for(;;){const o=t.indexOf(e,n);if(-1===o)return o;if(0===o||t.charCodeAt(o-1)<=32){const i=e.length;if(o+i===r||t.charCodeAt(o+i)<=32)return o}n=o+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const bh="ng-template";function HE(t,e,n){let r=0;for(;r<t.length;){let o=t[r++];if(n&&"class"===o){if(o=t[r],-1!==Ch(o.toLowerCase(),e,0))return!0}else if(1===o){for(;r<t.length&&"string"==typeof(o=t[r++]);)if(o.toLowerCase()===e)return!0;return!1}}return!1}function Ih(t){return 4===t.type&&t.value!==bh}function UE(t,e,n){return e===(4!==t.type||n?t.value:bh)}function zE(t,e,n){let r=4;const o=t.attrs||[],i=function qE(t){for(let e=0;e<t.length;e++){if(Zd(t[e]))return e}return t.length}(o);let s=!1;for(let a=0;a<e.length;a++){const u=e[a];if("number"!=typeof u){if(!s)if(4&r){if(r=2|1&r,""!==u&&!UE(t,u,n)||""===u&&1===e.length){if(tt(r))return!1;s=!0}}else{const c=8&r?u:e[++a];if(8&r&&null!==t.attrs){if(!HE(t.attrs,c,n)){if(tt(r))return!1;s=!0}continue}const d=GE(8&r?"class":u,o,Ih(t),n);if(-1===d){if(tt(r))return!1;s=!0;continue}if(""!==c){let f;f=d>i?"":o[d+1].toLowerCase();const h=8&r?f:null;if(h&&-1!==Ch(h,c,0)||2&r&&c!==f){if(tt(r))return!1;s=!0}}}}else{if(!s&&!tt(r)&&!tt(u))return!1;if(s&&tt(u))continue;s=!1,r=u|1&r}}return tt(r)||s}function tt(t){return 0==(1&t)}function GE(t,e,n,r){if(null===e)return-1;let o=0;if(r||!n){let i=!1;for(;o<e.length;){const s=e[o];if(s===t)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let a=e[++o];for(;"string"==typeof a;)a=e[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function ZE(t,e){let n=t.indexOf(4);if(n>-1)for(n++;n<t.length;){const r=t[n];if("number"==typeof r)return-1;if(r===e)return n;n++}return-1}(e,t)}function Mh(t,e,n=!1){for(let r=0;r<e.length;r++)if(zE(t,e[r],n))return!0;return!1}function QE(t,e){e:for(let n=0;n<e.length;n++){const r=e[n];if(t.length===r.length){for(let o=0;o<t.length;o++)if(t[o]!==r[o])continue e;return!0}}return!1}function Sh(t,e){return t?":not("+e.trim()+")":e}function YE(t){let e=t[0],n=1,r=2,o="",i=!1;for(;n<t.length;){let s=t[n];if("string"==typeof s)if(2&r){const a=t[++n];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!tt(s)&&(e+=Sh(i,o),o=""),r=s,i=i||!tt(r);n++}return""!==o&&(e+=Sh(i,o)),e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const A={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function XE(t){Ah(R(),y(),Ee()+t,!1)}function Ah(t,e,n,r){if(!r)if(3==(3&e[2])){const i=t.preOrderCheckHooks;null!==i&&$i(e,i,n)}else{const i=t.preOrderHooks;null!==i&&Hi(e,i,0,n)}sn(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Th={\u0275\u0275defineInjectable:x,\u0275\u0275defineInjector:nn,\u0275\u0275inject:b,\u0275\u0275invalidFactoryDep:mf,resolveForwardRef:I};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function eC(t,e){let n=null,r=null;t.hasOwnProperty(Ni)||Object.defineProperty(t,Ni,{get:()=>(null===n&&(n=ue().compileInjectable(Th,`ng:///${t.name}/\u0275prov.js`,function oC(t,e){const n=e||{providedIn:null},r={name:t.name,type:t,typeArgumentCount:0,providedIn:n.providedIn};return(xh(n)||Nh(n))&&void 0!==n.deps&&(r.deps=Df(n.deps)),xh(n)?r.useClass=n.useClass:function nC(t){return tC in t}(n)?r.useValue=n.useValue:Nh(n)?r.useFactory=n.useFactory:function rC(t){return void 0!==t.useExisting}(n)&&(r.useExisting=n.useExisting),r
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}(t,e))),n)}),t.hasOwnProperty(Mt)||Object.defineProperty(t,Mt,{get:()=>{if(null===r){const o=ue();r=o.compileFactory(Th,`ng:///${t.name}/\u0275fac.js`,{name:t.name,type:t,typeArgumentCount:0,deps:Xi(t),target:o.FactoryTarget.Injectable})}return r},configurable:!0})}const tC=z({provide:String,useValue:z});function xh(t){return void 0!==t.useClass}function Nh(t){return void 0!==t.useFactory}To("Injectable",void 0,void 0,void 0,(t,e)=>eC(t,e));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Oh(t,e=null,n=null,r){const o=Ph(t,e,n,r);return o.resolveInjectorInitializers(),o}function Ph(t,e=null,n=null,r,o=new Set){const i=[n||V,gE(t)];return r=r||("object"==typeof t?void 0:G(t)),new yh(i,e||cs(),r||null,o)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class be{static create(e,n){if(Array.isArray(e))return Oh({name:""},n,e,"");{const r=e.name??"";return Oh({name:r},e.parent,e.providers,r)}}}function Bu(t){if(t.length>1){return" ("+
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function iC(t){const e=[];for(let n=0;n<t.length;++n){if(e.indexOf(t[n])>-1)return e.push(t[n]),e;e.push(t[n])}return e}(t.slice().reverse()).map(r=>G(r.token)).join(" -> ")+")"}return""}function ju(t,e,n,r){const o=[e],i=n(o),s=r?function OE(t,e){const n=`${t} caused by: ${e instanceof Error?e.message:e}`,r=Error(n);return r[Lu]=e,r}(i,r):Error(i);return s.addKey=sC,s.keys=o,s.injectors=[t],s.constructResolvingMessage=n,s[Lu]=r,s}function sC(t,e){this.injectors.push(t),this.keys.push(e),this.message=this.constructResolvingMessage(this.keys)}function Fh(t,e){const n=[];for(let r=0,o=e.length;r<o;r++){const i=e[r];i&&0!=i.length?n.push(i.map(G).join(" ")):n.push("?")}return Error("Cannot resolve all parameters for '"+G(t)+"'("+n.join(", ")+"). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '"+G(t)+"' is decorated with Injectable.")}function fC(t,e){return Error(`Cannot mix multi providers and regular providers, got: ${t} ${e}`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */be.THROW_IF_NOT_FOUND=cn,be.NULL=new fh,be.\u0275prov=x({token:be,providedIn:"any",factory:()=>b(lh)}),be.__NG_ELEMENT_ID__=-1;class dn{constructor(e,n){if(this.token=e,this.id=n,!e)throw new E(208,!1);this.displayName=G(this.token)}static get(e){return Rh.get(I(e))}static get numberOfKeys(){return Rh.numberOfKeys}}const Rh=new class hC{constructor(){this._allKeys=new Map}get(e){if(e instanceof dn)return e;if(this._allKeys.has(e))return this._allKeys.get(e);const n=new dn(e,dn.numberOfKeys);return this._allKeys.set(e,n),n}get numberOfKeys(){return this._allKeys.size}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ds{constructor(e,n,r){this.key=e,this.optional=n,this.visibility=r}static fromKey(e){return new ds(e,!1,null)}}const pC=[];class Lh{constructor(e,n,r){this.key=e,this.resolvedFactories=n,this.multiProvider=r,this.resolvedFactory=this.resolvedFactories[0]}}class gC{constructor(e,n){this.factory=e,this.dependencies=n}}function mC(t){let e,n;if(t.useClass){const r=I(t.useClass);e=Lo().factory(r),n=Bh(r)}else t.useExisting?(e=r=>r,n=[ds.fromKey(dn.get(t.useExisting))]):t.useFactory?(e=t.useFactory,n=function _C(t,e){if(e){const n=e.map(r=>[r]);return e.map(r=>jh(t,r,n))}return Bh(t)}(t.useFactory,t.deps)):(e=()=>t.useValue,n=pC);return new gC(e,n)}function yC(t){return new Lh(dn.get(t.provide),[mC(t)],t.multi||!1)}function DC(t){const r=function vC(t,e){for(let n=0;n<t.length;n++){const r=t[n],o=e.get(r.key.id);if(o){if(r.multiProvider!==o.multiProvider)throw fC(o,r);if(r.multiProvider)for(let i=0;i<r.resolvedFactories.length;i++)o.resolvedFactories.push(r.resolvedFactories[i]);else e.set(r.key.id,r)}else{let i;i=r.multiProvider?new Lh(r.key,r.resolvedFactories.slice(),r.multiProvider):r,e.set(r.key.id,i)}}return e}(kh(t,[]).map(yC),new Map);return Array.from(r.values())}function kh(t,e){return t.forEach(n=>{if(n instanceof Qa)e.push({provide:n,useClass:n});else if(n&&"object"==typeof n&&void 0!==n.provide)e.push(n);else{if(!Array.isArray(n))throw function lC(t){return Error(`Invalid provider - only instances of Provider and Type are allowed, got: ${t}`)}(n);kh(n,e)}}),e}function Bh(t){const e=Lo().parameters(t);if(!e)return[];if(e.some(n=>null==n))throw Fh(t,e);return e.map(n=>jh(t,n,e))}function jh(t,e,n){let r=null,o=!1;if(!Array.isArray(e))return Vu(e instanceof eu?e.token:e,o,null);let i=null;for(let s=0;s<e.length;++s){const a=e[s];a instanceof Qa?r=a:a instanceof eu?r=a.token:a instanceof Fo?o=!0:a instanceof tu||a instanceof Ro?i=a:a instanceof O&&(r=a)}if(r=I(r),null!=r)return Vu(r,o,i);throw Fh(t,n)}function Vu(t,e,n){return new ds(dn.get(t),e,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const zo={};class Go{static resolve(e){return DC(e)}static resolveAndCreate(e,n){const r=Go.resolve(e);return Go.fromResolvedProviders(r,n)}static fromResolvedProviders(e,n){return new Lr(e,n)}}class Lr{constructor(e,n){this._constructionCounter=0,this._providers=e,this.parent=n||null;const r=e.length;this.keyIds=[],this.objs=[];for(let o=0;o<r;o++)this.keyIds[o]=e[o].key.id,this.objs[o]=zo}get(e,n=cn){return this._getByKey(dn.get(e),null,n)}resolveAndCreateChild(e){const n=Go.resolve(e);return this.createChildFromResolved(n)}createChildFromResolved(e){const n=new Lr(e);return n.parent=this,n}resolveAndInstantiate(e){return this.instantiateResolved(Go.resolve([e])[0])}instantiateResolved(e){return this._instantiateProvider(e)}getProviderAtIndex(e){if(e<0||e>=this._providers.length)throw function dC(t){return Error(`Index ${t} is out-of-bounds.`)}(e);return this._providers[e]}_new(e){if(this._constructionCounter++>this._getMaxNumberOfObjects())throw function uC(t,e){return ju(t,e,function(n){return`Cannot instantiate cyclic dependency!${Bu(n)}`})}(this,e.key);return this._instantiateProvider(e)}_getMaxNumberOfObjects(){return this.objs.length}_instantiateProvider(e){if(e.multiProvider){const n=[];for(let r=0;r<e.resolvedFactories.length;++r)n[r]=this._instantiate(e,e.resolvedFactories[r]);return n}return this._instantiate(e,e.resolvedFactories[0])}_instantiate(e,n){const r=n.factory;let o,i;try{o=n.dependencies.map(s=>this._getByReflectiveDependency(s))}catch(s){throw s.addKey&&s.addKey(this,e.key),s}try{i=r(...o)}catch(s){throw function cC(t,e,n,r){return ju(t,r,function(o){const i=G(o[0].token);return`${e.message}: Error during instantiation of ${i}!${Bu(o)}.`},e)}(this,s,s.stack,e.key)}return i}_getByReflectiveDependency(e){return this._getByKey(e.key,e.visibility,e.optional?null:cn)}_getByKey(e,n,r){return e===Lr.INJECTOR_KEY?this:n instanceof tu?this._getByKeySelf(e,r):this._getByKeyDefault(e,r,n)}_getObjByKeyId(e){for(let n=0;n<this.keyIds.length;n++)if(this.keyIds[n]===e)return this.objs[n]===zo&&(this.objs[n]=this._new(this._providers[n])),this.objs[n];return zo}_throwOrNull(e,n){if(n!==cn)return n;throw function aC(t,e){return ju(t,e,function(n){return`No provider for ${G(n[0].token)}!${Bu(n)}`})}(this,e)}_getByKeySelf(e,n){const r=this._getObjByKeyId(e.id);return r!==zo?r:this._throwOrNull(e,n)}_getByKeyDefault(e,n,r){let o;for(o=r instanceof Ro?this.parent:this;o instanceof Lr;){const i=o,s=i._getObjByKeyId(e.id);if(s!==zo)return s;o=i.parent}return null!==o?o.get(e.token,n):this._throwOrNull(e,n)}get displayName(){return`ReflectiveInjector(providers: [${function wC(t,e){const n=[];for(let r=0;r<t._providers.length;++r)n[r]=e(t.getProviderAtIndex(r));return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this,n=>' "'+n.key.displayName+'" ').join(", ")}])`}toString(){return this.displayName}}function P(t,e=F.Default){const n=y();if(null===n)return b(t,e);return nf(ae(),n,I(t),e)}function EC(){throw new Error("invalid")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function fs(t,e){return t<<17|e<<2}function nt(t){return t>>17&32767}function $h(t){return 2==(2&t)}function $u(t){return 2|t}function Pt(t){return(131068&t)>>2}function Hu(t,e){return-131069&t|e<<2}function Hh(t){return 1==(1&t)}function Uu(t){return 1|t}Lr.INJECTOR_KEY=dn.get(be);function Yh(t,e){const n=t.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=t.data[i];Ba(o),s.contentQueries(2,e[i],i)}}}function gs(t,e,n,r,o,i,s,a,u,c,l){const d=e.blueprint.slice();return d[0]=o,d[2]=76|r,(null!==l||t&&1024&t[2])&&(d[2]|=1024),Fd(d),d[3]=d[15]=t,d[8]=n,d[10]=s||t&&t[10],d[N]=a||t&&t[N],d[12]=u||t&&t[12]||null,d[9]=c||t&&t[9]||null,d[6]=i,d[20]=function iw(){return ow++}(),d[21]=l,d[16]=2==e.type?t[16]:d,d}function kr(t,e,n,r,o){let i=t.data[e];if(null===i)i=Ku(t,e,n,r,o),function e_(){return M.lFrame.inI18n}()&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=bo();i.injectorIndex=null===s?-1:s.injectorIndex}return dt(i,!0),i}function Ku(t,e,n,r,o){const i=kd(),s=Fa(),a=s?i:i&&i.parent,u=t.data[e]=function BC(t,e,n,r,o,i){let s=e?e.injectorIndex:-1;return{type:n,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,a,n,e,r,o);return null===t.firstChild&&(t.firstChild=u),null!==i&&(s?null==i.child&&null!==u.parent&&(i.child=u):null===i.next&&(i.next=u)),u}function Br(t,e,n,r){if(0===n)return-1;const o=e.length;for(let i=0;i<n;i++)e.push(r),t.blueprint.push(r),t.data.push(null);return o}function Ju(t,e,n){ja(e);try{const r=t.viewQuery;null!==r&&sc(1,r,n);const o=t.template;null!==o&&Kh(t,e,o,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),t.staticContentQueries&&Yh(t,e),t.staticViewQueries&&sc(2,t.viewQuery,n);const i=t.components;null!==i&&function RC(t,e){for(let n=0;n<e.length;n++)eb(t,e[n])}(e,i)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),r}finally{e[2]&=-5,Va()}}function ms(t,e,n,r){const o=e[2];if(128==(128&o))return;ja(e);try{Fd(e),jd(t.bindingStartIndex),null!==n&&Kh(t,e,n,2,r);const s=3==(3&o);if(s){const c=t.preOrderCheckHooks;null!==c&&$i(e,c,null)}else{const c=t.preOrderHooks;null!==c&&Hi(e,c,0,null),$a(e,0)}if(function JC(t){for(let e=lu(t);null!==e;e=du(e)){if(!e[2])continue;const n=e[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(512&o[2])&&Pa(i,1),o[2]|=512}}}(e),function KC(t){for(let e=lu(t);null!==e;e=du(e))for(let n=10;n<e.length;n++){const r=e[n],o=r[1];ji(r)&&ms(o,r,o.template,r[8])}}(e),null!==t.contentQueries&&Yh(t,e),s){const c=t.contentCheckHooks;null!==c&&$i(e,c)}else{const c=t.contentHooks;null!==c&&Hi(e,c,1),$a(e,1)}!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function PC(t,e){const n=t.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)sn(~o);else{const i=o,s=n[++r],a=n[++r];t_(s,i),a(2,e[i])}}}finally{sn(-1)}}(t,e);const a=t.components;null!==a&&function FC(t,e){for(let n=0;n<e.length;n++)XC(t,e[n])}(e,a);const u=t.viewQuery;if(null!==u&&sc(2,u,r),s){const c=t.viewCheckHooks;null!==c&&$i(e,c)}else{const c=t.viewHooks;null!==c&&Hi(e,c,2),$a(e,2)}!0===t.firstUpdatePass&&(t.firstUpdatePass=!1),e[2]&=-41,512&e[2]&&(e[2]&=-513,Pa(e[3],-1))}finally{Va()}}function Kh(t,e,n,r,o){const i=Ee(),s=2&r;try{sn(-1),s&&e.length>Z&&Ah(t,e,Z,!1),We(s?2:0,o),n(r,o)}finally{sn(i),We(s?3:1,o)}}function Jh(t,e,n){if(Sa(e)){const r=e.directiveStart,o=e.directiveEnd;for(let i=r;i<o;i++){const s=t.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}function Xu(t,e,n){!Ld()||(function UC(t,e,n,r){const o=n.directiveStart,i=n.directiveEnd;t.firstCreatePass||So(n,e),ge(r,e);const s=n.initialInputs;for(let a=o;a<i;a++){const u=t.data[a],c=et(u);c&&ZC(e,n,u);const l=Ao(e,t,a,n);if(ge(l,e),null!==s&&QC(e,a-o,l,u,n,s),c){Be(n.index,e)[8]=l}}}(t,e,n,ke(n,e)),128==(128&n.flags)&&function zC(t,e,n){const r=n.directiveStart,o=n.directiveEnd,i=n.index,s=function n_(){return M.lFrame.currentDirectiveIndex}();try{sn(i);for(let a=r;a<o;a++){const u=t.data[a],c=e[a];La(a),(null!==u.hostBindings||0!==u.hostVars||null!==u.hostAttrs)&&ip(u,c)}}finally{sn(-1),La(s)}}(t,e,n))}function ec(t,e,n=ke){const r=e.localNames;if(null!==r){let o=e.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],a=-1===s?n(e,t):t[s];t[o++]=a}}}function Xh(t){const e=t.tView;return null===e||e.incompleteFirstPass?t.tView=tc(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts):e}function tc(t,e,n,r,o,i,s,a,u,c){const l=Z+r,d=l+o,f=function LC(t,e){const n=[];for(let r=0;r<e;r++)n.push(r<t?null:A);return n}(l,d),h="function"==typeof c?c():c;return f[1]={type:t,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:e,data:f.slice().fill(null,l),bindingStartIndex:l,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:u,consts:h,incompleteFirstPass:!1}}function ep(t,e,n,r){const o=lp(e);null===n?o.push(r):(o.push(n),t.firstCreatePass&&dp(t).push(r,o.length-1))}function tp(t,e,n){for(let r in t)if(t.hasOwnProperty(r)){n=null===n?{}:n;const o=t[r];n.hasOwnProperty(r)?n[r].push(e,o):n[r]=[e,o]}return n}function np(t,e){const n=e.directiveStart,r=e.directiveEnd,o=t.data,i=e.attrs,s=[];let a=null,u=null;for(let c=n;c<r;c++){const l=o[c],d=l.inputs,f=null===i||Ih(e)?null:YC(d,i);s.push(f),a=tp(d,c,a),u=tp(l.outputs,c,u)}null!==a&&(a.hasOwnProperty("class")&&(e.flags|=16),a.hasOwnProperty("style")&&(e.flags|=32)),e.initialInputs=s,e.inputs=a,e.outputs=u}function Ue(t,e,n,r,o,i,s,a){const u=ke(e,n);let l,c=e.inputs;!a&&null!=c&&(l=c[r])?(ac(t,n,l,r,o),Li(e)&&rp(n,e.index)):3&e.type?(r=function jC(t){return"class"===t?"className":"for"===t?"htmlFor":"formaction"===t?"formAction":"innerHtml"===t?"innerHTML":"readonly"===t?"readOnly":"tabindex"===t?"tabIndex":t}(r),o=null!=s?s(o,e.value||"",r):o,i.setProperty(u,r,o)):e.type}function rp(t,e){const n=Be(e,t);16&n[2]||(n[2]|=32)}function nc(t,e,n,r){let o=!1;if(Ld()){const i=function GC(t,e,n){const r=t.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];Mh(n,s.selectors,!1)&&(o||(o=[]),qi(So(n,e),t,s.type),et(s)?(sp(t,n),o.unshift(s)):o.push(s))}return o}(t,e,n),s=null===r?null:{"":-1};if(null!==i){o=!0,ap(n,t.data.length,i.length);for(let l=0;l<i.length;l++){const d=i[l];d.providersResolver&&d.providersResolver(d)}let a=!1,u=!1,c=Br(t,e,i.length,null);for(let l=0;l<i.length;l++){const d=i[l];n.mergedAttrs=zi(n.mergedAttrs,d.hostAttrs),up(t,n,e,c,d),qC(c,d,s),null!==d.contentQueries&&(n.flags|=8),(null!==d.hostBindings||null!==d.hostAttrs||0!==d.hostVars)&&(n.flags|=128);const f=d.type.prototype;!a&&(f.ngOnChanges||f.ngOnInit||f.ngDoCheck)&&((t.preOrderHooks||(t.preOrderHooks=[])).push(n.index),a=!0),!u&&(f.ngOnChanges||f.ngDoCheck)&&((t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(n.index),u=!0),c++}np(t,n)}s&&function WC(t,e,n){if(e){const r=t.localNames=[];for(let o=0;o<e.length;o+=2){const i=n[e[o+1]];if(null==i)throw new E(-301,!1);r.push(e[o],i)}}}(n,r,s)}return n.mergedAttrs=zi(n.mergedAttrs,n.attrs),o}function op(t,e,n,r,o,i){const s=i.hostBindings;if(s){let a=t.hostBindingOpCodes;null===a&&(a=t.hostBindingOpCodes=[]);const u=~e.index;(function HC(t){let e=t.length;for(;e>0;){const n=t[--e];if("number"==typeof n&&n<0)return n}return 0})(a)!=u&&a.push(u),a.push(r,o,s)}}function ip(t,e){null!==t.hostBindings&&t.hostBindings(1,e)}function sp(t,e){e.flags|=2,(t.components||(t.components=[])).push(e.index)}function qC(t,e,n){if(n){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)n[e.exportAs[r]]=t;et(e)&&(n[""]=t)}}function ap(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function up(t,e,n,r,o){t.data[r]=o;const i=o.factory||(o.factory=Fn(o.type)),s=new Io(i,et(o),P);t.blueprint[r]=s,n[r]=s,op(t,e,0,r,Br(t,n,o.hostVars,A),o)}function ZC(t,e,n){const r=ke(e,t),o=Xh(n),i=t[10],s=ys(t,gs(t,o,null,n.onPush?32:16,r,e,i,i.createRenderer(r,n),null,null,null));t[e.index]=s}function pt(t,e,n,r,o,i){const s=ke(t,e);rc(e[N],s,i,t.value,n,r,o)}function rc(t,e,n,r,o,i,s){if(null==i)t.removeAttribute(e,o,n);else{const a=null==s?S(i):s(i,r||"",o);t.setAttribute(e,o,a,n)}}function QC(t,e,n,r,o,i){const s=i[e];if(null!==s){const a=r.setInput;for(let u=0;u<s.length;){const c=s[u++],l=s[u++],d=s[u++];null!==a?r.setInput(n,d,c,l):n[l]=d}}}function YC(t,e){let n=null,r=0;for(;r<e.length;){const o=e[r];if(0!==o)if(5!==o){if("number"==typeof o)break;t.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,t[o],e[r+1])),r+=2}else r+=2;else r+=4}return n}function cp(t,e,n,r){return new Array(t,!0,!1,e,null,0,r,n,null,null)}function XC(t,e){const n=Be(e,t);if(ji(n)){const r=n[1];48&n[2]?ms(r,n,r.template,n[8]):n[5]>0&&oc(n)}}function oc(t){for(let r=lu(t);null!==r;r=du(r))for(let o=10;o<r.length;o++){const i=r[o];if(ji(i))if(512&i[2]){const s=i[1];ms(s,i,s.template,i[8])}else i[5]>0&&oc(i)}const n=t[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=Be(n[r],t);ji(o)&&o[5]>0&&oc(o)}}function eb(t,e){const n=Be(e,t),r=n[1];(function tb(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])})(r,n),Ju(r,n,n[8])}function ys(t,e){return t[13]?t[14][4]=e:t[13]=e,t[14]=e,e}function ic(t){for(;t;){t[2]|=32;const e=jo(t);if(Ov(t)&&!e)return t;t=e}return null}function Ds(t,e,n,r=!0){const o=e[10];o.begin&&o.begin();try{ms(t,e,t.template,n)}catch(s){throw r&&hp(e,s),s}finally{o.end&&o.end()}}function sc(t,e,n){Ba(0),e(t,n)}function lp(t){return t[7]||(t[7]=[])}function dp(t){return t.cleanup||(t.cleanup=[])}function fp(t,e,n){return(null===t||et(t))&&(n=function Hv(t){for(;Array.isArray(t);){if("object"==typeof t[1])return t;t=t[0]}return null}(n[e.index])),n[N]}function hp(t,e){const n=t[9],r=n?n.get(Fr,null):null;r&&r.handleError(e)}function ac(t,e,n,r,o){for(let i=0;i<n.length;){const s=n[i++],a=n[i++],u=e[s],c=t.data[s];null!==c.setInput?c.setInput(u,o,r,a):u[a]=o}}function Ft(t,e,n){const r=Bi(e,t);Lf(t[N],r,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function vs(t,e,n){let r=n?t.styles:null,o=n?t.classes:null,i=0;if(null!==e)for(let s=0;s<e.length;s++){const a=e[s];if("number"==typeof a)i=a;else if(1==i)o=ya(o,a);else if(2==i){r=ya(r,a+": "+e[++s]+";")}}n?t.styles=r:t.stylesWithoutHost=r,n?t.classes=o:t.classesWithoutHost=o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _s(t,e,n,r,o=!1){for(;null!==n;){const i=e[n.index];if(null!==i&&r.push(ie(i)),Xe(i))for(let a=10;a<i.length;a++){const u=i[a],c=u[1].firstChild;null!==c&&_s(u[1],u,c,r)}const s=n.type;if(8&s)_s(t,e,n.child,r);else if(32&s){const a=cu(n,e);let u;for(;u=a();)r.push(u)}else if(16&s){const a=qf(e,n);if(Array.isArray(a))r.push(...a);else{const u=jo(e[16]);_s(u[1],u,a,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Wo{constructor(e,n){this._lView=e,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const e=this._lView,n=e[1];return _s(n,e,n.firstChild,[])}get context(){return this._lView[8]}set context(e){this._lView[8]=e}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const e=this._lView[3];if(Xe(e)){const n=e[8],r=n?n.indexOf(this):-1;r>-1&&(pu(e,r),Yi(n,r))}this._attachedToViewContainer=!1}Bf(this._lView[1],this._lView)}onDestroy(e){ep(this._lView[1],this._lView,null,e)}markForCheck(){ic(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){Ds(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new E(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function Ew(t,e){Vo(t,e,e[N],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new E(902,!1);this._appRef=e}}class nb extends Wo{constructor(e){super(e),this._view=e}detectChanges(){const e=this._view;Ds(e[1],e,e[8],!1)}checkNoChanges(){}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class uc extends Uo{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){const n=H(e);return new qo(n,this.ngModule)}}function pp(t){const e=[];for(let n in t)if(t.hasOwnProperty(n)){const r=t[n];e.push({propName:r,templateName:n})}return e}class ob{constructor(e,n){this.injector=e,this.parentInjector=n}get(e,n,r){const o=this.injector.get(e,Ru,r);return o!==Ru||n===Ru?o:this.parentInjector.get(e,n,r)}}class qo extends vh{constructor(e,n){super(),this.componentDef=e,this.ngModule=n,this.componentType=e.type,this.selector=function KE(t){return t.map(YE).join(",")}(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return pp(this.componentDef.inputs)}get outputs(){return pp(this.componentDef.outputs)}create(e,n,r,o){let i=(o=o||this.ngModule)instanceof Nr?o:o?.injector;i&&null!==this.componentDef.getStandaloneInjector&&(i=this.componentDef.getStandaloneInjector(i)||i);const s=i?new ob(e,i):e,a=s.get(wh,null);if(null===a)throw new E(407,!1);const u=s.get(Pu,null),c=a.createRenderer(null,this.componentDef),l=this.componentDef.selectors[0][0]||"div",d=r?function kC(t,e,n){const r=n===It.ShadowDom;return t.selectRootElement(e,r)}(c,r,this.componentDef.encapsulation):hu(c,l,function rb(t){const e=t.toLowerCase();return"svg"===e?"svg":"math"===e?Na:null}(l)),f=this.componentDef.onPush?288:272,h=tc(0,null,null,1,0,null,null,null,null,null),p=gs(null,h,null,f,null,null,a,c,u,s,null);let g,D;ja(p);try{const v=function ab(t,e,n,r,o,i){const s=n[1],a=Z;n[a]=t;const u=kr(s,a,2,"#host",null),c=u.mergedAttrs=e.hostAttrs;null!==c&&(vs(u,c,!0),null!==t&&(Ui(o,t,c),null!==u.classes&&_u(o,t,u.classes),null!==u.styles&&Qf(o,t,u.styles)));const l=r.createRenderer(t,e),d=gs(n,Xh(e),null,e.onPush?32:16,n[a],u,r,l,i||null,null,null);return s.firstCreatePass&&(qi(So(u,n),s,e.type),sp(s,u),ap(u,n.length,1)),ys(n,d),n[a]=d}(d,this.componentDef,p,a,c);if(d)if(r)Ui(c,d,["ng-version",NE.full]);else{const{attrs:w,classes:m}=function JE(t){const e=[],n=[];let r=1,o=2;for(;r<t.length;){let i=t[r];if("string"==typeof i)2===o?""!==i&&e.push(i,t[++r]):8===o&&n.push(i);else{if(!tt(o))break;o=i}r++}return{attrs:e,classes:n}}(this.componentDef.selectors[0]);w&&Ui(c,d,w),m&&m.length>0&&_u(c,d,m.join(" "))}if(D=Oa(h,Z),void 0!==n){const w=D.projection=[];for(let m=0;m<this.ngContentSelectors.length;m++){const C=n[m];w.push(null!=C?Array.from(C):null)}}g=function ub(t,e,n,r){const o=n[1],i=function $C(t,e,n){const r=ae();t.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),up(t,r,e,Br(t,e,1,null),n),np(t,r));const o=Ao(e,t,r.directiveStart,r);ge(o,e);const i=ke(r,e);return i&&ge(i,e),o}(o,n,e);if(t[8]=n[8]=i,null!==r)for(const a of r)a(i,e);if(e.contentQueries){const a=ae();e.contentQueries(1,i,a.directiveStart)}const s=ae();if(o.firstCreatePass&&(null!==e.hostBindings||null!==e.hostAttrs)){sn(s.index);op(n[1],s,0,s.directiveStart,s.directiveEnd,e),ip(e,i)}return i}(v,this.componentDef,p,[cb]),Ju(h,p,null)}finally{Va()}return new sb(this.componentType,g,Pr(D,p),p,D)}}new uc;class sb extends class IE{}{constructor(e,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new nb(o),this.componentType=e}setInput(e,n){const r=this._tNode.inputs;let o;if(null!==r&&(o=r[e])){const i=this._rootLView;ac(i[1],i,o,e,n),rp(i,this._tNode.index)}}get injector(){return new Er(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}}function cb(){const t=ae();Vi(y()[1],t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gp(t){return Object.getPrototypeOf(t.prototype).constructor}function mp(t){let e=gp(t.type),n=!0;const r=[t];for(;e;){let o;if(et(t))o=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new E(903,!1);o=e.\u0275dir}if(o){if(n){r.push(o);const s=t;s.inputs=cc(t.inputs),s.declaredInputs=cc(t.declaredInputs),s.outputs=cc(t.outputs);const a=o.hostBindings;a&&hb(t,a);const u=o.viewQuery,c=o.contentQueries;if(u&&db(t,u),c&&fb(t,c),ma(t.inputs,o.inputs),ma(t.declaredInputs,o.declaredInputs),ma(t.outputs,o.outputs),et(o)&&o.data.animation){const l=t.data;l.animation=(l.animation||[]).concat(o.data.animation)}}const i=o.features;if(i)for(let s=0;s<i.length;s++){const a=i[s];a&&a.ngInherit&&a(t),a===mp&&(n=!1)}}e=Object.getPrototypeOf(e)}!function lb(t){let e=0,n=null;for(let r=t.length-1;r>=0;r--){const o=t[r];o.hostVars=e+=o.hostVars,o.hostAttrs=zi(o.hostAttrs,n=zi(n,o.hostAttrs))}}(r)}function cc(t){return t===pr?{}:t===V?[]:t}function db(t,e){const n=t.viewQuery;t.viewQuery=n?(r,o)=>{e(r,o),n(r,o)}:e}function fb(t,e){const n=t.contentQueries;t.contentQueries=n?(r,o,i)=>{e(r,o,i),n(r,o,i)}:e}function hb(t,e){const n=t.hostBindings;t.hostBindings=n?(r,o)=>{e(r,o),n(r,o)}:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const pb=["providersResolver"],gb=["template","decls","consts","vars","onPush","ngContentSelectors","styles","encapsulation","schemas"];function mb(t){let n,e=gp(t.type);n=et(t)?e.\u0275cmp:e.\u0275dir;const r=t;for(const o of pb)r[o]=n[o];if(et(n))for(const o of gb)r[o]=n[o]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ws=null;function Vn(){if(!ws){const t=q.Symbol;if(t&&t.iterator)ws=t.iterator;else{const e=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<e.length;++n){const r=e[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(ws=r)}}}return ws}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Zo(t){return!!lc(t)&&(Array.isArray(t)||!(t instanceof Map)&&Vn()in t)}function lc(t){return null!==t&&("function"==typeof t||"object"==typeof t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function gt(t,e,n){return t[e]=n}function Qo(t,e){return t[e]}function me(t,e,n){const r=t[e];return!Object.is(r,n)&&(t[e]=n,!0)}function $n(t,e,n,r){const o=me(t,e,n);return me(t,e+1,r)||o}function Es(t,e,n,r,o){const i=$n(t,e,n,r);return me(t,e+2,o)||i}function qe(t,e,n,r,o,i){const s=$n(t,e,n,r);return $n(t,e+2,o,i)||s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function yp(t,e,n,r){const o=y();if(me(o,vr(),e)){R();pt(ee(),o,t,e,n,r)}return yp}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function jr(t,e){let n=!1,r=St();for(let i=1;i<e.length;i+=2)n=me(t,r++,e[i])||n;if(jd(r),!n)return A;let o=e[0];for(let i=1;i<e.length;i+=2)o+=S(e[i])+e[i+1];return o}function Vr(t,e,n,r){return me(t,vr(),n)?e+S(n)+r:A}function $r(t,e,n,r,o,i){const a=$n(t,St(),n,o);return At(2),a?e+S(n)+r+S(o)+i:A}function Hr(t,e,n,r,o,i,s,a){const c=Es(t,St(),n,o,s);return At(3),c?e+S(n)+r+S(o)+i+S(s)+a:A}function Ur(t,e,n,r,o,i,s,a,u,c){const d=qe(t,St(),n,o,s,u);return At(4),d?e+S(n)+r+S(o)+i+S(s)+a+S(u)+c:A}function zr(t,e,n,r,o,i,s,a,u,c,l,d){const f=St();let h=qe(t,f,n,o,s,u);return h=me(t,f+4,l)||h,At(5),h?e+S(n)+r+S(o)+i+S(s)+a+S(u)+c+S(l)+d:A}function Gr(t,e,n,r,o,i,s,a,u,c,l,d,f,h){const p=St();let g=qe(t,p,n,o,s,u);return g=$n(t,p+4,l,f)||g,At(6),g?e+S(n)+r+S(o)+i+S(s)+a+S(u)+c+S(l)+d+S(f)+h:A}function Wr(t,e,n,r,o,i,s,a,u,c,l,d,f,h,p,g){const D=St();let v=qe(t,D,n,o,s,u);return v=Es(t,D+4,l,f,p)||v,At(7),v?e+S(n)+r+S(o)+i+S(s)+a+S(u)+c+S(l)+d+S(f)+h+S(p)+g:A}function qr(t,e,n,r,o,i,s,a,u,c,l,d,f,h,p,g,D,v){const w=St();let m=qe(t,w,n,o,s,u);return m=qe(t,w+4,l,f,p,D)||m,At(8),m?e+S(n)+r+S(o)+i+S(s)+a+S(u)+c+S(l)+d+S(f)+h+S(p)+g+S(D)+v:A}function Dp(t,e,n,r,o,i){const s=y(),a=Vr(s,e,n,r);if(a!==A){pt(ee(),s,t,a,o,i)}return Dp}function vp(t,e,n,r,o,i,s,a){const u=y(),c=$r(u,e,n,r,o,i);if(c!==A){pt(ee(),u,t,c,s,a)}return vp}function _p(t,e,n,r,o,i,s,a,u,c){const l=y(),d=Hr(l,e,n,r,o,i,s,a);if(d!==A){pt(ee(),l,t,d,u,c)}return _p}function wp(t,e,n,r,o,i,s,a,u,c,l,d){const f=y(),h=Ur(f,e,n,r,o,i,s,a,u,c);if(h!==A){pt(ee(),f,t,h,l,d)}return wp}function Ep(t,e,n,r,o,i,s,a,u,c,l,d,f,h){const p=y(),g=zr(p,e,n,r,o,i,s,a,u,c,l,d);if(g!==A){pt(ee(),p,t,g,f,h)}return Ep}function Cp(t,e,n,r,o,i,s,a,u,c,l,d,f,h,p,g){const D=y(),v=Gr(D,e,n,r,o,i,s,a,u,c,l,d,f,h);if(v!==A){pt(ee(),D,t,v,p,g)}return Cp}function bp(t,e,n,r,o,i,s,a,u,c,l,d,f,h,p,g,D,v){const w=y(),m=Wr(w,e,n,r,o,i,s,a,u,c,l,d,f,h,p,g);if(m!==A){pt(ee(),w,t,m,D,v)}return bp}function Ip(t,e,n,r,o,i,s,a,u,c,l,d,f,h,p,g,D,v,w,m){const C=y(),L=qr(C,e,n,r,o,i,s,a,u,c,l,d,f,h,p,g,D,v);if(L!==A){pt(ee(),C,t,L,w,m)}return Ip}function Mp(t,e,n,r){const o=y(),i=jr(o,e);if(i!==A){pt(ee(),o,t,i,n,r)}return Mp}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Eb(t,e,n,r,o,i,s,a){const u=y(),c=R(),l=t+Z,d=c.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function wb(t,e,n,r,o,i,s,a,u){const c=e.consts,l=kr(e,t,4,s||null,on(c,a));nc(e,n,l,on(c,u)),Vi(e,l);const d=l.tViews=tc(2,l,r,o,i,e.directiveRegistry,e.pipeRegistry,null,e.schemas,c);return null!==e.queries&&(e.queries.template(e,l),d.queries=e.queries.embeddedTView(l)),l}(l,c,u,e,n,r,o,i,s):c.data[l];dt(d,!1);const f=u[N].createComment("");ns(c,u,f,d),ge(f,u),ys(u,u[l]=cp(f,u,f,d)),ki(d)&&Xu(c,u,d),null!=s&&ec(u,d,a)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function bb(t){return Dr(function Xv(){return M.lFrame.contextLView}(),Z+t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Sp(t,e,n){const r=y();if(me(r,vr(),e)){Ue(R(),ee(),r,t,e,r[N],n,!1)}return Sp}function dc(t,e,n,r,o){const s=o?"class":"style";ac(t,n,e.inputs[s],s,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Cs(t,e,n,r){const o=y(),i=R(),s=Z+t,a=o[N],u=o[s]=hu(a,e,function l_(){return M.lFrame.currentNamespace}()),c=i.firstCreatePass?function Ib(t,e,n,r,o,i,s){const a=e.consts,c=kr(e,t,2,o,on(a,i));return nc(e,n,c,on(a,s)),null!==c.attrs&&vs(c,c.attrs,!1),null!==c.mergedAttrs&&vs(c,c.mergedAttrs,!0),null!==e.queries&&e.queries.elementStart(e,c),c}(s,i,o,0,e,n,r):i.data[s];dt(c,!0);const l=c.mergedAttrs;null!==l&&Ui(a,u,l);const d=c.classes;null!==d&&_u(a,u,d);const f=c.styles;return null!==f&&Qf(a,u,f),64!=(64&c.flags)&&ns(i,o,u,c),0===function Wv(){return M.lFrame.elementDepthCount}()&&ge(u,o),function qv(){M.lFrame.elementDepthCount++}(),ki(c)&&(Xu(i,o,c),Jh(i,c,o)),null!==r&&ec(o,c),Cs}function bs(){let t=ae();Fa()?Ra():(t=t.parent,dt(t,!1));const e=t;!function Zv(){M.lFrame.elementDepthCount--}();const n=R();return n.firstCreatePass&&(Vi(n,t),Sa(t)&&n.queries.elementEnd(t)),null!=e.classesWithoutHost&&function g_(t){return 0!=(16&t.flags)}(e)&&dc(n,e,y(),e.classesWithoutHost,!0),null!=e.stylesWithoutHost&&function m_(t){return 0!=(32&t.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)&&dc(n,e,y(),e.stylesWithoutHost,!1),bs}function Ap(t,e,n,r){return Cs(t,e,n,r),bs(),Ap
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function fc(t,e,n){const r=y(),o=R(),i=t+Z,s=o.firstCreatePass?function Mb(t,e,n,r,o){const i=e.consts,s=on(i,r),a=kr(e,t,8,"ng-container",s);return null!==s&&vs(a,s,!0),nc(e,n,a,on(i,o)),null!==e.queries&&e.queries.elementStart(e,a),a}(i,o,r,e,n):o.data[i];dt(s,!0);const a=r[i]=r[N].createComment("");return ns(o,r,a,s),ge(a,r),ki(s)&&(Xu(o,r,s),Jh(o,s,r)),null!=n&&ec(r,s),fc}function hc(){let t=ae();const e=R();return Fa()?Ra():(t=t.parent,dt(t,!1)),e.firstCreatePass&&(Vi(e,t),Sa(t)&&e.queries.elementEnd(t)),hc}function Tp(t,e,n){return fc(t,e,n),hc(),Tp}function Sb(){return y()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function pc(t){return!!t&&"function"==typeof t.then}function xp(t){return!!t&&"function"==typeof t.subscribe}const Ab=xp;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Np(t,e,n,r){const o=y(),i=R(),s=ae();return Pp(i,o,o[N],s,t,e,!!n,r),Np}function Op(t,e){const n=ae(),r=y(),o=R();return Pp(o,r,fp(ka(o.data),n,r),n,t,e,!1),Op}function Pp(t,e,n,r,o,i,s,a){const u=ki(r),l=t.firstCreatePass&&dp(t),d=e[8],f=lp(e);let h=!0;if(3&r.type||a){const D=ke(r,e),v=a?a(D):D,w=f.length,m=a?L=>a(ie(L[r.index])):r.index;let C=null;if(!a&&u&&(C=function Tb(t,e,n,r){const o=t.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const a=e[7],u=o[i+2];return a.length>u?a[u]:null}"string"==typeof s&&(i+=2)}return null}(t,e,o,r.index)),null!==C){(C.__ngLastListenerFn__||C).__ngNextListenerFn__=i,C.__ngLastListenerFn__=i,h=!1}else{i=Rp(r,e,d,i,!1);const L=n.listen(v,o,i);f.push(i,L),l&&l.push(o,m,w,w+1)}}else i=Rp(r,e,d,i,!1);const p=r.outputs;let g;if(h&&null!==p&&(g=p[o])){const D=g.length;if(D)for(let v=0;v<D;v+=2){const w=g[v],m=g[v+1],X=e[w][m].subscribe(i),fr=f.length;f.push(i,X),l&&l.push(o,r.index,fr,-(fr+1))}}}function Fp(t,e,n,r){try{return We(6,e,n),!1!==n(r)}catch(o){return hp(t,o),!1}finally{We(7,e,n)}}function Rp(t,e,n,r,o){return function i(s){if(s===Function)return r;ic(2&t.flags?Be(t.index,e):e);let u=Fp(e,n,r,s),c=i.__ngNextListenerFn__;for(;c;)u=Fp(e,n,c,s)&&u,c=c.__ngNextListenerFn__;return o&&!1===u&&(s.preventDefault(),s.returnValue=!1),u}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function xb(t=1){return o_(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Nb(t,e){let n=null;const r=function WE(t){const e=t.attrs;if(null!=e){const n=e.indexOf(5);if(0==(1&n))return e[n+1]}return null}(t);for(let o=0;o<e.length;o++){const i=e[o];if("*"!==i){if(null===r?Mh(t,i,!0):QE(r,i))return o}else n=o}return n}function Ob(t){const e=y()[16][6];if(!e.projection){const n=t?t.length:1,r=e.projection=No(n,null),o=r.slice();let i=e.child;for(;null!==i;){const s=t?Nb(i,t):0;null!==s&&(o[s]?o[s].projectionNext=i:r[s]=i,o[s]=i),i=i.next}}}function Pb(t,e=0,n){const r=y(),o=R(),i=kr(o,Z+t,16,null,n||null);null===i.projection&&(i.projection=e),Ra(),64!=(64&i.flags)&&function xw(t,e,n){Zf(e[N],0,e,n,jf(t,n,e),Uf(n.parent||e[6],n,e))}(o,r,i)}function Lp(t,e,n){return gc(t,"",e,"",n),Lp}function gc(t,e,n,r,o){const i=y(),s=Vr(i,e,n,r);if(s!==A){Ue(R(),ee(),i,t,s,i[N],o,!1)}return gc}function kp(t,e,n,r,o,i,s){const a=y(),u=$r(a,e,n,r,o,i);if(u!==A){Ue(R(),ee(),a,t,u,a[N],s,!1)}return kp}function Bp(t,e,n,r,o,i,s,a,u){const c=y(),l=Hr(c,e,n,r,o,i,s,a);if(l!==A){Ue(R(),ee(),c,t,l,c[N],u,!1)}return Bp}function jp(t,e,n,r,o,i,s,a,u,c,l){const d=y(),f=Ur(d,e,n,r,o,i,s,a,u,c);if(f!==A){Ue(R(),ee(),d,t,f,d[N],l,!1)}return jp}function Vp(t,e,n,r,o,i,s,a,u,c,l,d,f){const h=y(),p=zr(h,e,n,r,o,i,s,a,u,c,l,d);if(p!==A){Ue(R(),ee(),h,t,p,h[N],f,!1)}return Vp}function $p(t,e,n,r,o,i,s,a,u,c,l,d,f,h,p){const g=y(),D=Gr(g,e,n,r,o,i,s,a,u,c,l,d,f,h);if(D!==A){Ue(R(),ee(),g,t,D,g[N],p,!1)}return $p}function Hp(t,e,n,r,o,i,s,a,u,c,l,d,f,h,p,g,D){const v=y(),w=Wr(v,e,n,r,o,i,s,a,u,c,l,d,f,h,p,g);if(w!==A){Ue(R(),ee(),v,t,w,v[N],D,!1)}return Hp}function Up(t,e,n,r,o,i,s,a,u,c,l,d,f,h,p,g,D,v,w){const m=y(),C=qr(m,e,n,r,o,i,s,a,u,c,l,d,f,h,p,g,D,v);if(C!==A){Ue(R(),ee(),m,t,C,m[N],w,!1)}return Up}function zp(t,e,n){const r=y(),o=jr(r,e);if(o!==A){Ue(R(),ee(),r,t,o,r[N],n,!1)}return zp}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Fb(t,e,n,r,o,i){let s=i?e.classBindings:e.styleBindings,a=nt(s),u=Pt(s);t[r]=n;let l,c=!1;if(Array.isArray(n)){const d=n;l=d[1],(null===l||Sr(d,l)>0)&&(c=!0)}else l=n;if(o)if(0!==u){const f=nt(t[a+1]);t[r+1]=fs(f,a),0!==f&&(t[f+1]=Hu(t[f+1],r)),t[a+1]=function CC(t,e){return 131071&t|e<<17}(t[a+1],r)}else t[r+1]=fs(a,0),0!==a&&(t[a+1]=Hu(t[a+1],r)),a=r;else t[r+1]=fs(u,0),0===a?a=r:t[u+1]=Hu(t[u+1],r),u=r;c&&(t[r+1]=$u(t[r+1])),Gp(t,l,r,!0,i),Gp(t,l,r,!1,i),function Rb(t,e,n,r,o){const i=o?t.residualClasses:t.residualStyles;null!=i&&"string"==typeof e&&Sr(i,e)>=0&&(n[r+1]=Uu(n[r+1]))}(e,l,t,r,i),s=fs(a,u),i?e.classBindings=s:e.styleBindings=s}function Gp(t,e,n,r,o){const i=t[n+1],s=null===e;let a=r?nt(i):Pt(i),u=!1;for(;0!==a&&(!1===u||s);){const c=t[a],l=t[a+1];Lb(c,e)&&(u=!0,t[a+1]=r?Uu(l):$u(l)),a=r?nt(l):Pt(l)}u&&(t[n+1]=r?$u(i):Uu(i))}function Lb(t,e){return null===t||null==e||(Array.isArray(t)?t[1]:t)===e||!(!Array.isArray(t)||"string"!=typeof e)&&Sr(t,e)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ce={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Wp(t){return t.substring(ce.key,ce.keyEnd)}function kb(t){return t.substring(ce.value,ce.valueEnd)}function qp(t,e){const n=ce.textEnd;return n===e?-1:(e=ce.keyEnd=function Vb(t,e,n){for(;e<n&&t.charCodeAt(e)>32;)e++;return e}(t,ce.key=e,n),Zr(t,e,n))}function Zp(t,e){const n=ce.textEnd;let r=ce.key=Zr(t,e,n);return n===r?-1:(r=ce.keyEnd=function $b(t,e,n){let r;for(;e<n&&(45===(r=t.charCodeAt(e))||95===r||(-33&r)>=65&&(-33&r)<=90||r>=48&&r<=57);)e++;return e}(t,r,n),r=Yp(t,r,n,58),r=ce.value=Zr(t,r,n),r=ce.valueEnd=function Hb(t,e,n){let r=-1,o=-1,i=-1,s=e,a=s;for(;s<n;){const u=t.charCodeAt(s++);if(59===u)return a;34===u||39===u?a=s=Kp(t,u,s,n):e===s-4&&85===i&&82===o&&76===r&&40===u?a=s=Kp(t,41,s,n):u>32&&(a=s),i=o,o=r,r=-33&u}return a}(t,r,n),Yp(t,r,n,59))}function Qp(t){ce.key=0,ce.keyEnd=0,ce.value=0,ce.valueEnd=0,ce.textEnd=t.length}function Zr(t,e,n){for(;e<n&&t.charCodeAt(e)<=32;)e++;return e}function Yp(t,e,n,r){return(e=Zr(t,e,n))<n&&e++,e}function Kp(t,e,n,r){let o=-1,i=n;for(;i<r;){const s=t.charCodeAt(i++);if(s==e&&92!==o)return i;o=92==s&&92===o?0:s}throw new Error}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function mc(t,e,n){return rt(t,e,n,!1),mc}function Jp(t,e){return rt(t,e,null,!0),Jp}function mt(t){ot(tg,Ub,t,!1)}function Ub(t,e){for(let n=function jb(t){return Qp(t),Zp(t,Zr(t,0,ce.textEnd))}(e);n>=0;n=Zp(e,n))tg(t,Wp(e),kb(e))}function zb(t){ot(Ve,yt,t,!0)}function yt(t,e){for(let n=function Bb(t){return Qp(t),qp(t,Zr(t,0,ce.textEnd))}(e);n>=0;n=qp(e,n))Ve(t,Wp(e),!0)}function rt(t,e,n,r){const o=y(),i=R(),s=At(2);if(i.firstUpdatePass&&eg(i,t,s,r),e!==A&&me(o,s,e)){ng(i,i.data[Ee()],o,o[N],t,o[s+1]=function Kb(t,e){return null==t||("string"==typeof e?t+=e:"object"==typeof t&&(t=G($e(t)))),t}(e,n),r,s)}}function ot(t,e,n,r){const o=R(),i=At(2);o.firstUpdatePass&&eg(o,null,i,r);const s=y();if(n!==A&&me(s,i,n)){const a=o.data[Ee()];if(og(a,r)&&!Xp(o,i)){let u=r?a.classesWithoutHost:a.stylesWithoutHost;null!==u&&(n=ya(u,n||"")),dc(o,a,s,n,r)}else!function Yb(t,e,n,r,o,i,s,a){o===A&&(o=V);let u=0,c=0,l=0<o.length?o[0]:null,d=0<i.length?i[0]:null;for(;null!==l||null!==d;){const f=u<o.length?o[u+1]:void 0,h=c<i.length?i[c+1]:void 0;let g,p=null;l===d?(u+=2,c+=2,f!==h&&(p=d,g=h)):null===d||null!==l&&l<d?(u+=2,p=l):(c+=2,p=d,g=h),null!==p&&ng(t,e,n,r,p,g,s,a),l=u<o.length?o[u]:null,d=c<i.length?i[c]:null}}(o,a,s,s[N],s[i+1],s[i+1]=function Qb(t,e,n){if(null==n||""===n)return V;const r=[],o=$e(n);if(Array.isArray(o))for(let i=0;i<o.length;i++)t(r,o[i],!0);else if("object"==typeof o)for(const i in o)o.hasOwnProperty(i)&&t(r,i,o[i]);else"string"==typeof o&&e(r,o);return r}(t,e,n),r,i)}}function Xp(t,e){return e>=t.expandoStartIndex}function eg(t,e,n,r){const o=t.data;if(null===o[n+1]){const i=o[Ee()],s=Xp(t,n);og(i,r)&&null===e&&!s&&(e=!1),e=function Gb(t,e,n,r){const o=ka(t);let i=r?e.residualClasses:e.residualStyles;if(null===o)0===(r?e.classBindings:e.styleBindings)&&(n=Yo(n=yc(null,t,e,n,r),e.attrs,r),i=null);else{const s=e.directiveStylingLast;if(-1===s||t[s]!==o)if(n=yc(o,t,e,n,r),null===i){let u=function Wb(t,e,n){const r=n?e.classBindings:e.styleBindings;if(0!==Pt(r))return t[nt(r)]}(t,e,r);void 0!==u&&Array.isArray(u)&&(u=yc(null,t,e,u[1],r),u=Yo(u,e.attrs,r),function qb(t,e,n,r){const o=n?e.classBindings:e.styleBindings;t[nt(o)]=r}(t,e,r,u))}else i=function Zb(t,e,n){let r;const o=e.directiveEnd;for(let i=1+e.directiveStylingLast;i<o;i++){r=Yo(r,t[i].hostAttrs,n)}return Yo(r,e.attrs,n)}(t,e,r)}return void 0!==i&&(r?e.residualClasses=i:e.residualStyles=i),n}(o,i,e,r),Fb(o,i,e,n,s,r)}}function yc(t,e,n,r,o){let i=null;const s=n.directiveEnd;let a=n.directiveStylingLast;for(-1===a?a=n.directiveStart:a++;a<s&&(i=e[a],r=Yo(r,i.hostAttrs,o),i!==t);)a++;return null!==t&&(n.directiveStylingLast=a),r}function Yo(t,e,n){const r=n?1:2;let o=-1;if(null!==e)for(let i=0;i<e.length;i++){const s=e[i];"number"==typeof s?o=s:o===r&&(Array.isArray(t)||(t=void 0===t?[]:["",t]),Ve(t,s,!!n||e[++i]))}return void 0===t?null:t}function tg(t,e,n){Ve(t,e,$e(n))}function ng(t,e,n,r,o,i,s,a){if(!(3&e.type))return;const u=t.data,c=u[a+1];if(!Is(Hh(c)?rg(u,e,n,o,Pt(c),s):void 0)){Is(i)||$h(c)&&(i=rg(u,null,n,o,a,s));!function Ow(t,e,n,r,o){if(e)o?t.addClass(n,r):t.removeClass(n,r);else{let i=-1===r.indexOf("-")?void 0:xt.DashCase;null==o?t.removeStyle(n,r,i):("string"==typeof o&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=xt.Important),t.setStyle(n,r,o,i))}}(r,s,Bi(Ee(),n),o,i)}}function rg(t,e,n,r,o,i){const s=null===e;let a;for(;o>0;){const u=t[o],c=Array.isArray(u),l=c?u[1]:u,d=null===l;let f=n[o+1];f===A&&(f=d?V:void 0);let h=d?Ya(f,r):l===r?f:void 0;if(c&&!Is(h)&&(h=Ya(u,r)),Is(h)&&(a=h,s))return a;const p=t[o+1];o=s?nt(p):Pt(p)}if(null!==e){let u=i?e.residualClasses:e.residualStyles;null!=u&&(a=Ya(u,r))}return a}function Is(t){return void 0!==t}function og(t,e){return 0!=(t.flags&(e?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ig(t,e=""){const n=y(),r=R(),o=t+Z,i=r.firstCreatePass?kr(r,o,1,e,null):r.data[o],s=n[o]=fu(n[N],e);ns(r,n,s,i),dt(i,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function sg(t){return Dc("",t,""),sg}function Dc(t,e,n){const r=y(),o=Vr(r,t,e,n);return o!==A&&Ft(r,Ee(),o),Dc}function ag(t,e,n,r,o){const i=y(),s=$r(i,t,e,n,r,o);return s!==A&&Ft(i,Ee(),s),ag}function ug(t,e,n,r,o,i,s){const a=y(),u=Hr(a,t,e,n,r,o,i,s);return u!==A&&Ft(a,Ee(),u),ug}function cg(t,e,n,r,o,i,s,a,u){const c=y(),l=Ur(c,t,e,n,r,o,i,s,a,u);return l!==A&&Ft(c,Ee(),l),cg}function lg(t,e,n,r,o,i,s,a,u,c,l){const d=y(),f=zr(d,t,e,n,r,o,i,s,a,u,c,l);return f!==A&&Ft(d,Ee(),f),lg}function dg(t,e,n,r,o,i,s,a,u,c,l,d,f){const h=y(),p=Gr(h,t,e,n,r,o,i,s,a,u,c,l,d,f);return p!==A&&Ft(h,Ee(),p),dg}function fg(t,e,n,r,o,i,s,a,u,c,l,d,f,h,p){const g=y(),D=Wr(g,t,e,n,r,o,i,s,a,u,c,l,d,f,h,p);return D!==A&&Ft(g,Ee(),D),fg}function hg(t,e,n,r,o,i,s,a,u,c,l,d,f,h,p,g,D){const v=y(),w=qr(v,t,e,n,r,o,i,s,a,u,c,l,d,f,h,p,g,D);return w!==A&&Ft(v,Ee(),w),hg}function pg(t){const e=y(),n=jr(e,t);return n!==A&&Ft(e,Ee(),n),pg
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function Jb(t,e,n){ot(Ve,yt,Vr(y(),t,e,n),!0)}function Xb(t,e,n,r,o){ot(Ve,yt,$r(y(),t,e,n,r,o),!0)}function eI(t,e,n,r,o,i,s){ot(Ve,yt,Hr(y(),t,e,n,r,o,i,s),!0)}function tI(t,e,n,r,o,i,s,a,u){ot(Ve,yt,Ur(y(),t,e,n,r,o,i,s,a,u),!0)}function nI(t,e,n,r,o,i,s,a,u,c,l){ot(Ve,yt,zr(y(),t,e,n,r,o,i,s,a,u,c,l),!0)}function rI(t,e,n,r,o,i,s,a,u,c,l,d,f){ot(Ve,yt,Gr(y(),t,e,n,r,o,i,s,a,u,c,l,d,f),!0)}function oI(t,e,n,r,o,i,s,a,u,c,l,d,f,h,p){ot(Ve,yt,Wr(y(),t,e,n,r,o,i,s,a,u,c,l,d,f,h,p),!0)}function iI(t,e,n,r,o,i,s,a,u,c,l,d,f,h,p,g,D){ot(Ve,yt,qr(y(),t,e,n,r,o,i,s,a,u,c,l,d,f,h,p,g,D),!0)}function sI(t){ot(Ve,yt,jr(y(),t),!0)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function aI(t,e,n){mt(Vr(y(),t,e,n))}function uI(t,e,n,r,o){mt($r(y(),t,e,n,r,o))}function cI(t,e,n,r,o,i,s){mt(Hr(y(),t,e,n,r,o,i,s))}function lI(t,e,n,r,o,i,s,a,u){mt(Ur(y(),t,e,n,r,o,i,s,a,u))}function dI(t,e,n,r,o,i,s,a,u,c,l){mt(zr(y(),t,e,n,r,o,i,s,a,u,c,l))}function fI(t,e,n,r,o,i,s,a,u,c,l,d,f){mt(Gr(y(),t,e,n,r,o,i,s,a,u,c,l,d,f))}function hI(t,e,n,r,o,i,s,a,u,c,l,d,f,h,p){mt(Wr(y(),t,e,n,r,o,i,s,a,u,c,l,d,f,h,p))}function pI(t,e,n,r,o,i,s,a,u,c,l,d,f,h,p,g,D){mt(qr(y(),t,e,n,r,o,i,s,a,u,c,l,d,f,h,p,g,D))}function gI(t){mt(jr(y(),t))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gg(t,e,n,r,o){return rt(t,Vr(y(),e,n,r),o,!1),gg}function mg(t,e,n,r,o,i,s){return rt(t,$r(y(),e,n,r,o,i),s,!1),mg}function yg(t,e,n,r,o,i,s,a,u){return rt(t,Hr(y(),e,n,r,o,i,s,a),u,!1),yg}function Dg(t,e,n,r,o,i,s,a,u,c,l){return rt(t,Ur(y(),e,n,r,o,i,s,a,u,c),l,!1),Dg}function vg(t,e,n,r,o,i,s,a,u,c,l,d,f){return rt(t,zr(y(),e,n,r,o,i,s,a,u,c,l,d),f,!1),vg}function _g(t,e,n,r,o,i,s,a,u,c,l,d,f,h,p){return rt(t,Gr(y(),e,n,r,o,i,s,a,u,c,l,d,f,h),p,!1),_g}function wg(t,e,n,r,o,i,s,a,u,c,l,d,f,h,p,g,D){return rt(t,Wr(y(),e,n,r,o,i,s,a,u,c,l,d,f,h,p,g),D,!1),wg}function Eg(t,e,n,r,o,i,s,a,u,c,l,d,f,h,p,g,D,v,w){return rt(t,qr(y(),e,n,r,o,i,s,a,u,c,l,d,f,h,p,g,D,v),w,!1),Eg}function Cg(t,e,n){return rt(t,jr(y(),e),n,!1),Cg
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function bg(t,e,n){const r=y();if(me(r,vr(),e)){Ue(R(),ee(),r,t,e,r[N],n,!0)}return bg}function Ig(t,e,n){const r=y();if(me(r,vr(),e)){const i=R(),s=ee();Ue(i,s,r,t,e,fp(ka(i.data),s,r),n,!0)}return Ig}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Hn=void 0;var yI=["en",[["a","p"],["AM","PM"],Hn],[["AM","PM"],Hn,Hn],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Hn,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Hn,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Hn,"{1} 'at' {0}",Hn],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function mI(t){const n=Math.floor(Math.abs(t)),r=t.toString().replace(/^[^.]*\.?/,"").length;return 1===n&&0===r?1:5}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Qr={};function Ie(t){const e=function DI(t){return t.toLowerCase().replace(/_/g,"-")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t);let n=Sg(e);if(n)return n;const r=e.split("-")[0];if(n=Sg(r),n)return n;if("en"===r)return yI;throw new E(701,!1)}function Mg(t){return Ie(t)[W.PluralCase]}function Sg(t){return t in Qr||(Qr[t]=q.ng&&q.ng.common&&q.ng.common.locales&&q.ng.common.locales[t]),Qr[t]}var W;!function(t){t[t.LocaleId=0]="LocaleId",t[t.DayPeriodsFormat=1]="DayPeriodsFormat",t[t.DayPeriodsStandalone=2]="DayPeriodsStandalone",t[t.DaysFormat=3]="DaysFormat",t[t.DaysStandalone=4]="DaysStandalone",t[t.MonthsFormat=5]="MonthsFormat",t[t.MonthsStandalone=6]="MonthsStandalone",t[t.Eras=7]="Eras",t[t.FirstDayOfWeek=8]="FirstDayOfWeek",t[t.WeekendRange=9]="WeekendRange",t[t.DateFormat=10]="DateFormat",t[t.TimeFormat=11]="TimeFormat",t[t.DateTimeFormat=12]="DateTimeFormat",t[t.NumberSymbols=13]="NumberSymbols",t[t.NumberFormats=14]="NumberFormats",t[t.CurrencyCode=15]="CurrencyCode",t[t.CurrencySymbol=16]="CurrencySymbol",t[t.CurrencyName=17]="CurrencyName",t[t.Currencies=18]="Currencies",t[t.Directionality=19]="Directionality",t[t.PluralCase=20]="PluralCase",t[t.ExtraData=21]="ExtraData"}(W||(W={}));const vI=["zero","one","two","few","many"];const Yr="en-US",Ms={marker:"element"},Ss={marker:"ICU"};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Me;!function(t){t[t.SHIFT=2]="SHIFT",t[t.APPEND_EAGERLY=1]="APPEND_EAGERLY",t[t.COMMENT=2]="COMMENT"}(Me||(Me={}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Ag=Yr;function Tg(t){Pe(t,"Expected localeId to be defined"),"string"==typeof t&&(Ag=t.toLowerCase().replace(/_/g,"-"))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function xg(t,e,n){const r=e.insertBeforeIndex,o=Array.isArray(r)?r[0]:r;return null===o?zf(t,0,n):ie(n[o])}function Ng(t,e,n,r,o){const i=e.insertBeforeIndex;if(Array.isArray(i)){let s=r,a=null;if(3&e.type||(a=s,s=o),null!==s&&0==(2&e.flags))for(let u=1;u<i.length;u++){Ln(t,s,n[i[u]],a,!1)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Og(t,e){if(t.push(e),t.length>1)for(let n=t.length-2;n>=0;n--){const r=t[n];Pg(r)||CI(r,e)&&null===bI(r)&&II(r,e.index)}}function Pg(t){return!(64&t.type)}function CI(t,e){return Pg(e)||t.index>e.index}function bI(t){const e=t.insertBeforeIndex;return Array.isArray(e)?e[0]:e}function II(t,e){const n=t.insertBeforeIndex;Array.isArray(n)?n[0]=e:(Wf(xg,Ng),t.insertBeforeIndex=e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ko(t,e){const n=t.data[e];return null===n||"string"==typeof n?null:n.hasOwnProperty("currentCaseLViewIndex")?n:n.value}function AI(t,e,n){const r=Ku(t,n,64,null,null);return Og(e,r),r}function As(t,e){const n=e[t.currentCaseLViewIndex];return null===n?n:n<0?~n:n}function Fg(t){return t>>>17}function Rg(t){return(131070&t)>>>1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Jo=0,Xo=0;function kg(t,e,n,r){const o=n[N];let s,i=null;for(let a=0;a<e.length;a++){const u=e[a];if("string"==typeof u){const c=e[++a];null===n[c]&&(n[c]=fu(o,u))}else if("number"==typeof u)switch(1&u){case 0:const c=Fg(u);let l,d;if(null===i&&(i=c,s=ts(o,r)),c===i?(l=r,d=s):(l=null,d=ie(n[c])),null!==d){const g=Rg(u);Ln(o,d,n[g],l,!1);const v=Ko(t,g);if(null!==v&&"object"==typeof v){const w=As(v,n);null!==w&&kg(t,v.create[w],n,n[v.anchorIdx])}}break;case 1:const f=u>>>1,h=e[++a],p=e[++a];rc(o,Bi(f,n),null,null,h,p,null)}else switch(u){case Ss:const c=e[++a],l=e[++a];if(null===n[l]){ge(n[l]=vw(o,c),n)}break;case Ms:const d=e[++a],f=e[++a];if(null===n[f]){ge(n[f]=hu(o,d,null),n)}}}}function Bg(t,e,n,r,o){for(let i=0;i<n.length;i++){const s=n[i],a=n[++i];if(s&o){let u="";for(let c=i+1;c<=i+a;c++){const l=n[c];if("string"==typeof l)u+=l;else if("number"==typeof l)if(l<0)u+=S(e[r-l]);else{const d=l>>>2;switch(3&l){case 1:const f=n[++c],h=n[++c],p=t.data[d];"string"==typeof p?rc(e[N],e[d],null,p,f,u,h):Ue(t,p,e,f,u,e[N],h,!1);break;case 0:const g=e[d];null!==g&&Lf(e[N],g,u);break;case 2:PI(t,Ko(t,d),e,u);break;case 3:jg(t,Ko(t,d),r,e)}}}}else{const u=n[i+1];if(u>0&&3==(3&u)){const l=Ko(t,u>>>2);e[l.currentCaseLViewIndex]<0&&jg(t,l,r,e)}}i+=a}}function jg(t,e,n,r){let o=r[e.currentCaseLViewIndex];if(null!==o){let i=Jo;o<0&&(o=r[e.currentCaseLViewIndex]=~o,i=-1),Bg(t,r,e.update[o],n,i)}}function PI(t,e,n,r){const o=function FI(t,e){let n=t.cases.indexOf(e);if(-1===n)switch(t.type){case 1:{const r=function _I(t,e){const n=Mg(e)(parseInt(t,10)),r=vI[n];return void 0!==r?r:"other"}(e,function EI(){return Ag}());n=t.cases.indexOf(r),-1===n&&"other"!==r&&(n=t.cases.indexOf("other"));break}case 0:n=t.cases.indexOf("other")}return-1===n?null:n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,r);if(As(e,n)!==o&&(Vg(t,e,n),n[e.currentCaseLViewIndex]=null===o?null:~o,null!==o)){const s=n[e.anchorIdx];s&&kg(t,e.create[o],n,s)}}function Vg(t,e,n){let r=As(e,n);if(null!==r){const o=e.remove[r];for(let i=0;i<o.length;i++){const s=o[i];if(s>0){const a=Bi(s,n);null!==a&&Du(n[N],a)}else Vg(t,Ko(t,~s),n)}}}function RI(){const t=[];let n,r,e=-1;function i(a,u){e=0;const c=As(a,u);r=null!==c?a.remove[c]:V}function s(){if(e<r.length){const a=r[e++];if(a>0)return n[a];{t.push(e,r);const u=~a;return i(n[1].data[u],n),s()}}return 0===t.length?null:(r=t.pop(),e=t.pop(),s())}return function o(a,u){for(n=u;t.length;)t.pop();return i(a.value,u),s}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ts=/\ufffd(\d+):?\d*\ufffd/gi,LI=/({\s*\ufffd\d+:?\d*\ufffd\s*,\s*\S{6}\s*,[\s\S]*})/gi,kI=/\ufffd(\d+)\ufffd/,Hg=/^\s*(\ufffd\d+:?\d*\ufffd)\s*,\s*(select|plural)\s*,/,BI=/\ufffd\/?\*(\d+:\d+)\ufffd/gi,jI=/\ufffd(\/?[#*]\d+):?\d*\ufffd/gi,VI=/\uE500/g;function HI(t,e,n,r,o,i){const s=bo(),a=[],u=[],c=[[]];o=function qI(t,e){if(function WI(t){return-1===t}(e))return Gg(t);{const n=t.indexOf(`:${e}\ufffd`)+2+e.toString().length,r=t.search(new RegExp(`\ufffd\\/\\*\\d+:${e}\ufffd`));return Gg(t.substring(n,r))}}(o,i);const l=function $I(t){return t.replace(VI," ")}(o).split(jI);for(let d=0;d<l.length;d++){let f=l[d];if(0==(1&d)){const h=vc(f);for(let p=0;p<h.length;p++){let g=h[p];if(0==(1&p)){const D=g;""!==D&&UI(t,s,c[0],a,u,n,D)}else{const D=g;if("object"!=typeof D)throw new Error(`Unable to parse ICU expression in "${o}" message.`);Wg(t,n,u,e,D,Ug(t,s,c[0],n,a,"",!0).index)}}}else{const h=47===f.charCodeAt(0),g=(f.charCodeAt(h?1:0),Z+Number.parseInt(f.substring(h?2:1)));if(h)c.shift(),dt(bo(),!1);else{const D=AI(t,c[0],g);c.unshift([]),dt(D,!0)}}}t.data[r]={create:a,update:u}}function Ug(t,e,n,r,o,i,s){const a=Br(t,r,1,null);let u=a<<Me.SHIFT,c=bo();e===c&&(c=null),null===c&&(u|=Me.APPEND_EAGERLY),s&&(u|=Me.COMMENT,function gw(t){void 0===uu&&(uu=t())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(RI)),o.push(u,null===i?"":i);const l=Ku(t,a,s?32:1,null===i?"":i,null);Og(n,l);const d=l.index;return dt(l,!1),null!==c&&e!==c&&function SI(t,e){let n=t.insertBeforeIndex;null===n?(Wf(xg,Ng),n=t.insertBeforeIndex=[null,e]):(bt(Array.isArray(n),!0,"Expecting array here"),n.push(e))}(c,d),l}function UI(t,e,n,r,o,i,s){const a=s.match(Ts),u=Ug(t,e,n,i,r,a?null:s,!1);a&&ti(o,s,u.index,null,0,null)}function ti(t,e,n,r,o,i){const s=t.length,a=s+1;t.push(null,null);const u=s+2,c=e.split(Ts);let l=0;for(let d=0;d<c.length;d++){const f=c[d];if(1&d){const h=o+parseInt(f,10);t.push(-1-h),l|=zg(h)}else""!==f&&t.push(f)}return t.push(n<<2|(r?1:0)),r&&t.push(r,i),t[s]=l,t[a]=t.length-u,l}function GI(t){let e=0;for(let n=0;n<t.length;n++){const r=t[n];"number"==typeof r&&r<0&&e++}return e}function zg(t){return 1<<Math.min(t,31)}function Gg(t){let e,i,n="",r=0,o=!1;for(;null!==(e=BI.exec(t));)o?e[0]===`\ufffd/*${i}\ufffd`&&(r=e.index,o=!1):(n+=t.substring(r,e.index+e[0].length),i=e[1],o=!0);return n+=t.slice(r),n}function Wg(t,e,n,r,o,i){let s=0;const a={type:o.type,currentCaseLViewIndex:Br(t,e,1,null),anchorIdx:i,cases:[],create:[],remove:[],update:[]};(function KI(t,e,n){t.push(zg(e.mainBinding),2,-1-e.mainBinding,n<<2|2)})(n,o,i),function MI(t,e,n){const r=t.data[e];null===r?t.data[e]=n:r.value=n}(t,i,a);const u=o.values;for(let c=0;c<u.length;c++){const l=u[c],d=[];for(let f=0;f<l.length;f++){const h=l[f];if("string"!=typeof h){const p=d.push(h)-1;l[f]=`\x3c!--\ufffd${p}\ufffd--\x3e`}}s=QI(t,a,e,n,r,o.cases[c],l.join(""),d)|s}s&&function JI(t,e,n){t.push(e,1,n<<2|3)}(n,s,i)}function ZI(t){const e=[],n=[];let r=1,o=0;const i=vc(t=t.replace(Hg,function(s,a,u){return r="select"===u?0:1,o=parseInt(a.slice(1),10),""}));for(let s=0;s<i.length;){let a=i[s++].trim();1===r&&(a=a.replace(/\s*(?:=)?(\w+)\s*/,"$1")),a.length&&e.push(a);const u=vc(i[s++]);e.length>n.length&&n.push(u)}return{type:r,mainBinding:o,cases:e,values:n}}function vc(t){if(!t)return[];let e=0;const n=[],r=[],o=/[{}]/g;let i;for(o.lastIndex=0;i=o.exec(t);){const a=i.index;if("}"==i[0]){if(n.pop(),0==n.length){const u=t.substring(e,a);Hg.test(u)?r.push(ZI(u)):r.push(u),e=a+1}}else{if(0==n.length){const u=t.substring(e,a);r.push(u),e=a+1}n.push("{")}}const s=t.substring(e);return r.push(s),r}function QI(t,e,n,r,o,i,s,a){const u=[],c=[],l=[];e.cases.push(i),e.create.push(u),e.remove.push(c),e.update.push(l);const f=eh(Yf()).getInertBodyElement(s),h=Mu(f)||f;return h?qg(t,e,n,r,u,c,l,h,o,a,0):0}function qg(t,e,n,r,o,i,s,a,u,c,l){let d=0,f=a.firstChild;for(;f;){const h=Br(t,n,1,null);switch(f.nodeType){case Node.ELEMENT_NODE:const p=f,g=p.tagName.toLowerCase();if(bu.hasOwnProperty(g)){_c(o,Ms,g,u,h),t.data[h]=g;const m=p.attributes;for(let C=0;C<m.length;C++){const L=m.item(C),X=L.name.toLowerCase();L.value.match(Ts)?oh.hasOwnProperty(X)&&(Iu[X]?ti(s,L.value,h,L.name,0,ss):ti(s,L.value,h,L.name,0,null)):XI(o,h,L)}d=qg(t,e,n,r,o,i,s,f,h,c,l+1)|d,Zg(i,h,l)}break;case Node.TEXT_NODE:const D=f.textContent||"",v=D.match(Ts);_c(o,null,v?"":D,u,h),Zg(i,h,l),v&&(d=ti(s,D,h,null,0,null)|d);break;case Node.COMMENT_NODE:const w=kI.exec(f.textContent||"");if(w){const C=c[parseInt(w[1],10)];_c(o,Ss,"",u,h),Wg(t,n,r,u,C,h),YI(i,h,l)}}f=f.nextSibling}return d}function Zg(t,e,n){0===n&&t.push(e)}function YI(t,e,n){0===n&&(t.push(~e),t.push(e))}function _c(t,e,n,r,o){null!==e&&t.push(e),t.push(n,o,function TI(t,e,n){return t|e<<17|n<<1}(0,r,o))}function XI(t,e,n){t.push(e<<1|1,n.name,n.value)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const e0=/\[(\ufffd.+?\ufffd?)\]/,t0=/\[(\ufffd.+?\ufffd?)\]|(\ufffd\/?\*\d+:\d+\ufffd)/g,n0=/({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g,r0=/{([A-Z0-9_]+)}/g,o0=/\ufffdI18N_EXP_(ICU(_\d+)?)\ufffd/g,i0=/\/\*/,s0=/\d+\:(\d+)/;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Yg(t,e,n=-1){const r=R(),o=y(),i=Z+t,s=on(r.consts,e),a=bo();r.firstCreatePass&&HI(r,null===a?0:a.index,o,i,s,n);const u=r.data[i],l=Vf(r,a===o[6]?null:a,o),d=a&&8&a.type?o[a.index]:null;(function OI(t,e,n,r){const o=t[N];for(let i=0;i<e.length;i++){const s=e[i++],a=e[i],u=(s&Me.COMMENT)===Me.COMMENT,c=(s&Me.APPEND_EAGERLY)===Me.APPEND_EAGERLY,l=s>>>Me.SHIFT;let d=t[l];null===d&&(d=t[l]=u?o.createComment(a):fu(o,a)),c&&null!==n&&Ln(o,n,d,r,!1)}})(o,u.create,l,d),Vd(!0)}function Kg(){Vd(!1)}function u0(t,e,n){Yg(t,e,n),Kg()}function c0(t,e){const n=R(),r=on(n.consts,e);!function zI(t,e,n){const o=ae().index,i=[];if(t.firstCreatePass&&null===t.data[e]){for(let s=0;s<n.length;s+=2){const a=n[s],u=n[s+1];if(""!==u){if(LI.test(u))throw new Error(`ICU expressions are not supported in attributes. Message: "${u}".`);ti(i,u,o,a,GI(i),null)}}t.data[e]=i}}(n,t+Z,r)}function Jg(t){return function xI(t){t&&(Jo|=1<<Math.min(Xo,31)),Xo++}(me(y(),vr(),t)),Jg}function l0(t){!function NI(t,e,n){if(Xo>0){const r=t.data[n];Bg(t,e,Array.isArray(r)?r:r.update,St()-Xo-1,Jo)}Jo=0,Xo=0}(R(),y(),t+Z)}function d0(t,e={}){return function a0(t,e={}){let n=t;if(e0.test(t)){const r={},o=[0];n=n.replace(t0,(i,s,a)=>{const u=s||a,c=r[u]||[];if(c.length||(u.split("|").forEach(g=>{const D=g.match(s0),v=D?parseInt(D[1],10):0,w=i0.test(g);c.push([v,w,g])}),r[u]=c),!c.length)throw new Error(`i18n postprocess: unmatched placeholder - ${u}`);const l=o[o.length-1];let d=0;for(let g=0;g<c.length;g++)if(c[g][0]===l){d=g;break}const[f,h,p]=c[d];return h?o.pop():l!==f&&o.push(f),c.splice(d,1),p})}return Object.keys(e).length&&(n=n.replace(n0,(r,o,i,s,a,u)=>e.hasOwnProperty(i)?`${o}${e[i]}${u}`:r),n=n.replace(r0,(r,o)=>e.hasOwnProperty(o)?e[o]:r),n=n.replace(o0,(r,o)=>{if(e.hasOwnProperty(o)){const i=e[o];if(!i.length)throw new Error(`i18n postprocess: unmatched ICU - ${r} with key: ${o}`);return i.shift()}return r})),n}(t,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function wc(t,e,n,r,o){if(t=I(t),Array.isArray(t))for(let i=0;i<t.length;i++)wc(t[i],e,n,r,o);else{const i=R(),s=y();let a=jn(t)?t:I(t.provide),u=Dh(t);const c=ae(),l=1048575&c.providerIndexes,d=c.directiveStart,f=c.providerIndexes>>20;if(jn(t)||!t.multi){const h=new Io(u,o,P),p=Cc(a,e,o?l:l+f,d);-1===p?(qi(So(c,s),i,a),Ec(i,t,e.length),e.push(a),c.directiveStart++,c.directiveEnd++,o&&(c.providerIndexes+=1048576),n.push(h),s.push(h)):(n[p]=h,s[p]=h)}else{const h=Cc(a,e,l+f,d),p=Cc(a,e,l,l+f),g=h>=0&&n[h],D=p>=0&&n[p];if(o&&!D||!o&&!g){qi(So(c,s),i,a);const v=function g0(t,e,n,r,o){const i=new Io(t,n,P);return i.multi=[],i.index=e,i.componentProviders=0,Xg(i,o,r&&!n),i}(o?p0:h0,n.length,o,r,u);!o&&D&&(n[p].providerFactory=v),Ec(i,t,e.length,0),e.push(a),c.directiveStart++,c.directiveEnd++,o&&(c.providerIndexes+=1048576),n.push(v),s.push(v)}else{Ec(i,t,h>-1?h:p,Xg(n[o?p:h],u,!o&&r))}!o&&r&&D&&n[p].componentProviders++}}}function Ec(t,e,n,r){const o=jn(e),i=function yE(t){return!!t.useClass}(e);if(o||i){const u=(i?I(e.useClass):e).prototype.ngOnDestroy;if(u){const c=t.destroyHooks||(t.destroyHooks=[]);if(!o&&e.multi){const l=c.indexOf(n);-1===l?c.push(n,[r,u]):c[l+1].push(r,u)}else c.push(n,u)}}}function Xg(t,e,n){return n&&t.componentProviders++,t.multi.push(e)-1}function Cc(t,e,n,r){for(let o=n;o<r;o++)if(e[o]===t)return o;return-1}function h0(t,e,n,r){return bc(this.multi,[])}function p0(t,e,n,r){const o=this.multi;let i;if(this.providerFactory){const s=this.providerFactory.componentProviders,a=Ao(n,n[1],this.providerFactory.index,r);i=a.slice(0,s),bc(o,i);for(let u=s;u<a.length;u++)i.push(a[u])}else i=[],bc(o,i);return i}function bc(t,e){for(let n=0;n<t.length;n++){const r=t[n];e.push(r())}return e}function m0(t,e=[]){return n=>{n.providersResolver=(r,o)=>function f0(t,e,n){const r=R();if(r.firstCreatePass){const o=et(t);wc(n,r.data,r.blueprint,o,!0),wc(e,r.data,r.blueprint,o,!1)}}(r,o?o(t):t,e)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Kr{}class em extends Kr{constructor(e,n){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new uc(this);const r=Re(e);this._bootstrapComponents=Ot(r.bootstrap),this._r3Injector=Ph(e,n,[{provide:Kr,useValue:this},{provide:Uo,useValue:this.componentFactoryResolver}],G(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){const e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}}class Ic extends class y0{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */{constructor(e){super(),this.moduleType=e}create(e){return new em(this.moduleType,e)}}class v0 extends Kr{constructor(e,n,r){super(),this.componentFactoryResolver=new uc(this),this.instance=null;const o=new yh([...e,{provide:Kr,useValue:this},{provide:Uo,useValue:this.componentFactoryResolver}],n||cs(),r,new Set(["environment"]));this.injector=o,o.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}}function tm(t,e,n=null){return new v0(t,e,n).injector}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class xs{constructor(e){this._injector=e,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e.id)){const n=hh(0,e.type),r=n.length>0?tm([n],this._injector,`Standalone[${e.type.name}]`):null;this.cachedInjectors.set(e.id,r)}return this.cachedInjectors.get(e.id)}ngOnDestroy(){try{for(const e of this.cachedInjectors.values())null!==e&&e.destroy()}finally{this.cachedInjectors.clear()}}}function _0(t){t.getStandaloneInjector=e=>e.get(xs).getOrCreateStandaloneInjector(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function T0(t,e,n){const r=we()+t,o=y();return o[r]===A?gt(o,r,n?e.call(n):e()):Qo(o,r)}function x0(t,e,n,r){return um(y(),we(),t,e,n,r)}function N0(t,e,n,r,o){return cm(y(),we(),t,e,n,r,o)}function O0(t,e,n,r,o,i){return lm(y(),we(),t,e,n,r,o,i)}function P0(t,e,n,r,o,i,s){return dm(y(),we(),t,e,n,r,o,i,s)}function F0(t,e,n,r,o,i,s,a){const u=we()+t,c=y(),l=qe(c,u,n,r,o,i);return me(c,u+4,s)||l?gt(c,u+5,a?e.call(a,n,r,o,i,s):e(n,r,o,i,s)):Qo(c,u+5)}function R0(t,e,n,r,o,i,s,a,u){const c=we()+t,l=y(),d=qe(l,c,n,r,o,i);return $n(l,c+4,s,a)||d?gt(l,c+6,u?e.call(u,n,r,o,i,s,a):e(n,r,o,i,s,a)):Qo(l,c+6)}function L0(t,e,n,r,o,i,s,a,u,c){const l=we()+t,d=y();let f=qe(d,l,n,r,o,i);return Es(d,l+4,s,a,u)||f?gt(d,l+7,c?e.call(c,n,r,o,i,s,a,u):e(n,r,o,i,s,a,u)):Qo(d,l+7)}function k0(t,e,n,r,o,i,s,a,u,c,l){const d=we()+t,f=y(),h=qe(f,d,n,r,o,i);return qe(f,d+4,s,a,u,c)||h?gt(f,d+8,l?e.call(l,n,r,o,i,s,a,u,c):e(n,r,o,i,s,a,u,c)):Qo(f,d+8)}function B0(t,e,n,r){return fm(y(),we(),t,e,n,r)}function ni(t,e){const n=t[e];return n===A?void 0:n}function um(t,e,n,r,o,i){const s=e+n;return me(t,s,o)?gt(t,s+1,i?r.call(i,o):r(o)):ni(t,s+1)}function cm(t,e,n,r,o,i,s){const a=e+n;return $n(t,a,o,i)?gt(t,a+2,s?r.call(s,o,i):r(o,i)):ni(t,a+2)}function lm(t,e,n,r,o,i,s,a){const u=e+n;return Es(t,u,o,i,s)?gt(t,u+3,a?r.call(a,o,i,s):r(o,i,s)):ni(t,u+3)}function dm(t,e,n,r,o,i,s,a,u){const c=e+n;return qe(t,c,o,i,s,a)?gt(t,c+4,u?r.call(u,o,i,s,a):r(o,i,s,a)):ni(t,c+4)}function fm(t,e,n,r,o,i){let s=e+n,a=!1;for(let u=0;u<o.length;u++)me(t,s++,o[u])&&(a=!0);return a?gt(t,s,r.apply(i,o)):ni(t,s)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function j0(t,e){const n=R();let r;const o=t+Z;n.firstCreatePass?(r=function V0(t,e){if(e)for(let n=e.length-1;n>=0;n--){const r=e[n];if(t===r.name)return r}}(e,n.pipeRegistry),n.data[o]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(o,r.onDestroy)):r=n.data[o];const i=r.factory||(r.factory=Fn(r.type)),s=ze(P);try{const a=Gi(!1),u=i();return Gi(a),function Cb(t,e,n,r){n>=t.data.length&&(t.data[n]=null,t.blueprint[n]=null),e[n]=r}(n,y(),o,u),u}finally{ze(s)}}function $0(t,e,n){const r=t+Z,o=y(),i=Dr(o,r);return ri(o,r)?um(o,we(),e,i.transform,n,i):i.transform(n)}function H0(t,e,n,r){const o=t+Z,i=y(),s=Dr(i,o);return ri(i,o)?cm(i,we(),e,s.transform,n,r,s):s.transform(n,r)}function U0(t,e,n,r,o){const i=t+Z,s=y(),a=Dr(s,i);return ri(s,i)?lm(s,we(),e,a.transform,n,r,o,a):a.transform(n,r,o)}function z0(t,e,n,r,o,i){const s=t+Z,a=y(),u=Dr(a,s);return ri(a,s)?dm(a,we(),e,u.transform,n,r,o,i,u):u.transform(n,r,o,i)}function G0(t,e,n){const r=t+Z,o=y(),i=Dr(o,r);return ri(o,r)?fm(o,we(),e,i.transform,n,i):i.transform.apply(i,n)}function ri(t,e){return t[1].data[e].pure}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */xs.\u0275prov=x({token:xs,providedIn:"environment",factory:()=>new xs(b(Nr))});function Sc(t){return e=>{setTimeout(t,void 0,e)}}const Dt=class W0 extends go{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,n,r){let o=e,i=n||(()=>null),s=r;if(e&&"object"==typeof e){const u=e;o=u.next?.bind(u),i=u.error?.bind(u),s=u.complete?.bind(u)}this.__isAsync&&(i=Sc(i),o&&(o=Sc(o)),s&&(s=Sc(s)));const a=super.subscribe({next:o,error:i,complete:s});return e instanceof lt&&e.add(a),a}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function q0(){return this._results[Vn()]()}class Ac{constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=Vn(),r=Ac.prototype;r[n]||(r[n]=q0)}get changes(){return this._changes||(this._changes=new Dt)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,n){return this._results.reduce(e,n)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,n){const r=this;r.dirty=!1;const o=je(e);(this._changesDetected=!function S_(t,e,n){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++){let o=t[r],i=e[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(r._results,o,n))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class vt{}vt.__NG_ELEMENT_ID__=function Y0(){return Ns(ae(),y())};const Z0=vt,Q0=class extends Z0{constructor(e,n,r){super(),this._declarationLView=e,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(e,n){const r=this._declarationTContainer.tViews,o=gs(this._declarationLView,r,e,16,null,r.declTNode,null,null,null,null,n||null),i=this._declarationLView[this._declarationTContainer.index];o[17]=i;const s=this._declarationLView[19];return null!==s&&(o[19]=s.createEmbeddedView(r)),Ju(r,o,e),new Wo(o)}};function Ns(t,e){return 4&t.type?new Q0(e,t,Pr(t,e)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class it{}it.__NG_ELEMENT_ID__=function K0(){return gm(ae(),y())};const J0=it,hm=class extends J0{constructor(e,n,r){super(),this._lContainer=e,this._hostTNode=n,this._hostLView=r}get element(){return Pr(this._hostTNode,this._hostLView)}get injector(){return new Er(this._hostTNode,this._hostLView)}get parentInjector(){const e=Wi(this._hostTNode,this._hostLView);if(Kd(e)){const n=wr(e,this._hostLView),r=_r(e),o=n[1].data[r+8];return new Er(o,n)}return new Er(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){const n=pm(this._lContainer);return null!==n&&n[e]||null}get length(){return this._lContainer.length-10}createEmbeddedView(e,n,r){let o,i;"number"==typeof r?o=r:null!=r&&(o=r.index,i=r.injector);const s=e.createEmbeddedView(n||{},i);return this.insert(s,o),s}createComponent(e,n,r,o,i){const s=e&&!xo(e);let a;if(s)a=n;else{const d=n||{};a=d.index,r=d.injector,o=d.projectableNodes,i=d.environmentInjector||d.ngModuleRef}const u=s?e:new qo(H(e)),c=r||this.parentInjector;if(!i&&null==u.ngModule){const f=(s?c:this.parentInjector).get(Nr,null);f&&(i=f)}const l=u.create(c,o,void 0,i);return this.insert(l.hostView,a),l}insert(e,n){const r=e._lView,o=r[1];if(function Gv(t){return Xe(t[3])}(r)){const l=this.indexOf(e);if(-1!==l)this.detach(l);else{const d=r[3],f=new hm(d,d[6],d[3]);f.detach(f.indexOf(e))}}const i=this._adjustIndex(n),s=this._lContainer;bw(o,r,s,i);const a=yu(i,s),u=r[N],c=ts(u,s[7]);return null!==c&&function ww(t,e,n,r,o,i){r[0]=o,r[6]=e,Vo(t,r,n,1,o,i)}(o,s[6],u,r,c,a),e.attachToViewContainerRef(),df(Tc(s),i,e),e}move(e,n){return this.insert(e,n)}indexOf(e){const n=pm(this._lContainer);return null!==n?n.indexOf(e):-1}remove(e){const n=this._adjustIndex(e,-1),r=pu(this._lContainer,n);r&&(Yi(Tc(this._lContainer),n),Bf(r[1],r))}detach(e){const n=this._adjustIndex(e,-1),r=pu(this._lContainer,n);return r&&null!=Yi(Tc(this._lContainer),n)?new Wo(r):null}_adjustIndex(e,n=0){return e??this.length+n}};function pm(t){return t[8]}function Tc(t){return t[8]||(t[8]=[])}function gm(t,e){let n;const r=e[t.index];if(Xe(r))n=r;else{let o;if(8&t.type)o=ie(r);else{const i=e[N];o=i.createComment("");const s=ke(t,e);Ln(i,ts(i,s),o,function Tw(t,e){return t.nextSibling(e)}(i,s),!1)}e[t.index]=n=cp(r,e,o,t),ys(e,n)}return new hm(n,t,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class xc{constructor(e){this.queryList=e,this.matches=null}clone(){return new xc(this.queryList)}setDirty(){this.queryList.setDirty()}}class Nc{constructor(e=[]){this.queries=e}createEmbeddedView(e){const n=e.queries;if(null!==n){const r=null!==e.contentQueries?e.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){const s=n.getByIndex(i),a=this.queries[s.indexInDeclarationView];o.push(a.clone())}return new Nc(o)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let n=0;n<this.queries.length;n++)null!==_m(e,n).matches&&this.queries[n].setDirty()}}class mm{constructor(e,n,r=null){this.predicate=e,this.flags=n,this.read=r}}class Oc{constructor(e=[]){this.queries=e}elementStart(e,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(e,n)}elementEnd(e){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(e)}embeddedTView(e){let n=null;for(let r=0;r<this.length;r++){const o=null!==n?n.length:0,i=this.getByIndex(r).embeddedTView(e,o);i&&(i.indexInDeclarationView=r,null!==n?n.push(i):n=[i])}return null!==n?new Oc(n):null}template(e,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(e,n)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}}class Pc{constructor(e,n=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(e,n){this.isApplyingToNode(n)&&this.matchTNode(e,n)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,n){this.elementStart(e,n)}embeddedTView(e,n){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,n),new Pc(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=e.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(e,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];this.matchTNodeWithReadOption(e,n,tM(n,i)),this.matchTNodeWithReadOption(e,n,Zi(n,e,i,!1,!1))}else r===vt?4&n.type&&this.matchTNodeWithReadOption(e,n,-1):this.matchTNodeWithReadOption(e,n,Zi(n,e,r,!1,!1))}matchTNodeWithReadOption(e,n,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===ln||o===it||o===vt&&4&n.type)this.addMatch(n.index,-2);else{const i=Zi(n,e,o,!1,!1);null!==i&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(e,n){null===this.matches?this.matches=[e,n]:this.matches.push(e,n)}}function tM(t,e){const n=t.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===e)return n[r+1];return null}function rM(t,e,n,r){return-1===n?function nM(t,e){return 11&t.type?Pr(t,e):4&t.type?Ns(t,e):null}(e,t):-2===n?function oM(t,e,n){if(n===ln)return Pr(e,t);if(n===vt)return Ns(e,t);if(n===it)return gm(e,t)}(t,e,r):Ao(t,t[1],n,e)}function ym(t,e,n,r){const o=e[19].queries[r];if(null===o.matches){const i=t.data,s=n.matches,a=[];for(let u=0;u<s.length;u+=2){const c=s[u];if(c<0)a.push(null);else{const l=i[c];a.push(rM(e,l,s[u+1],n.metadata.read))}}o.matches=a}return o.matches}function Fc(t,e,n,r){const o=t.queries.getByIndex(n),i=o.matches;if(null!==i){const s=ym(t,e,o,n);for(let a=0;a<i.length;a+=2){const u=i[a];if(u>0)r.push(s[a/2]);else{const c=i[a+1],l=e[-u];for(let d=10;d<l.length;d++){const f=l[d];f[17]===f[3]&&Fc(f[1],f,c,r)}if(null!==l[9]){const d=l[9];for(let f=0;f<d.length;f++){const h=d[f];Fc(h[1],h,c,r)}}}}}return r}function iM(t){const e=y(),n=R(),r=$d();Ba(r+1);const o=_m(n,r);if(t.dirty&&function zv(t){return 4==(4&t[2])}(e)===(2==(2&o.metadata.flags))){if(null===o.matches)t.reset([]);else{const i=o.crossesNgTemplate?Fc(n,e,r,[]):ym(n,e,o,r);t.reset(i,TE),t.notifyOnChanges()}return!0}return!1}function sM(t,e,n){const r=R();r.firstCreatePass&&(vm(r,new mm(t,e,n),-1),2==(2&e)&&(r.staticViewQueries=!0)),Dm(r,y(),e)}function aM(t,e,n,r){const o=R();if(o.firstCreatePass){const i=ae();vm(o,new mm(e,n,r),i.index),function lM(t,e){const n=t.contentQueries||(t.contentQueries=[]),r=n.length?n[n.length-1]:-1;e!==r&&n.push(t.queries.length-1,e)}(o,t),2==(2&n)&&(o.staticContentQueries=!0)}Dm(o,y(),n)}function uM(){return function cM(t,e){return t[19].queries[e].queryList}(y(),$d())}function Dm(t,e,n){const r=new Ac(4==(4&n));ep(t,e,r,r.destroy),null===e[19]&&(e[19]=new Nc),e[19].queries.push(new xc(r))}function vm(t,e,n){null===t.queries&&(t.queries=new Oc),t.queries.track(new Pc(e,n))}function _m(t,e){return t.queries.getByIndex(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function dM(t,e){return Ns(t,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Se={\u0275\u0275attribute:yp,\u0275\u0275attributeInterpolate1:Dp,\u0275\u0275attributeInterpolate2:vp,\u0275\u0275attributeInterpolate3:_p,\u0275\u0275attributeInterpolate4:wp,\u0275\u0275attributeInterpolate5:Ep,\u0275\u0275attributeInterpolate6:Cp,\u0275\u0275attributeInterpolate7:bp,\u0275\u0275attributeInterpolate8:Ip,\u0275\u0275attributeInterpolateV:Mp,\u0275\u0275defineComponent:ba,\u0275\u0275defineDirective:Fe,\u0275\u0275defineInjectable:x,\u0275\u0275defineInjector:nn,\u0275\u0275defineNgModule:Tn,\u0275\u0275definePipe:Ae,\u0275\u0275directiveInject:P,\u0275\u0275getInheritedFactory:b_,\u0275\u0275inject:b,\u0275\u0275injectAttribute:qa,\u0275\u0275invalidFactory:EC,\u0275\u0275invalidFactoryDep:mf,\u0275\u0275templateRefExtractor:dM,\u0275\u0275resetView:Jv,\u0275\u0275NgOnChangesFeature:Co,\u0275\u0275ProvidersFeature:m0,\u0275\u0275CopyDefinitionFeature:mb,\u0275\u0275InheritDefinitionFeature:mp,\u0275\u0275StandaloneFeature:_0,\u0275\u0275nextContext:xb,\u0275\u0275namespaceHTML:u_,\u0275\u0275namespaceMathML:a_,\u0275\u0275namespaceSVG:s_,\u0275\u0275enableBindings:Qv,\u0275\u0275disableBindings:Yv,\u0275\u0275elementStart:Cs,\u0275\u0275elementEnd:bs,\u0275\u0275element:Ap,\u0275\u0275elementContainerStart:fc,\u0275\u0275elementContainerEnd:hc,\u0275\u0275elementContainer:Tp,\u0275\u0275pureFunction0:T0,\u0275\u0275pureFunction1:x0,\u0275\u0275pureFunction2:N0,\u0275\u0275pureFunction3:O0,\u0275\u0275pureFunction4:P0,\u0275\u0275pureFunction5:F0,\u0275\u0275pureFunction6:R0,\u0275\u0275pureFunction7:L0,\u0275\u0275pureFunction8:k0,\u0275\u0275pureFunctionV:B0,\u0275\u0275getCurrentView:Sb,\u0275\u0275restoreView:Kv,\u0275\u0275listener:Np,\u0275\u0275projection:Pb,\u0275\u0275syntheticHostProperty:Ig,\u0275\u0275syntheticHostListener:Op,\u0275\u0275pipeBind1:$0,\u0275\u0275pipeBind2:H0,\u0275\u0275pipeBind3:U0,\u0275\u0275pipeBind4:z0,\u0275\u0275pipeBindV:G0,\u0275\u0275projectionDef:Ob,\u0275\u0275hostProperty:bg,\u0275\u0275property:Sp,\u0275\u0275propertyInterpolate:Lp,\u0275\u0275propertyInterpolate1:gc,\u0275\u0275propertyInterpolate2:kp,\u0275\u0275propertyInterpolate3:Bp,\u0275\u0275propertyInterpolate4:jp,\u0275\u0275propertyInterpolate5:Vp,\u0275\u0275propertyInterpolate6:$p,\u0275\u0275propertyInterpolate7:Hp,\u0275\u0275propertyInterpolate8:Up,\u0275\u0275propertyInterpolateV:zp,\u0275\u0275pipe:j0,\u0275\u0275queryRefresh:iM,\u0275\u0275viewQuery:sM,\u0275\u0275loadQuery:uM,\u0275\u0275contentQuery:aM,\u0275\u0275reference:bb,\u0275\u0275classMap:zb,\u0275\u0275classMapInterpolate1:Jb,\u0275\u0275classMapInterpolate2:Xb,\u0275\u0275classMapInterpolate3:eI,\u0275\u0275classMapInterpolate4:tI,\u0275\u0275classMapInterpolate5:nI,\u0275\u0275classMapInterpolate6:rI,\u0275\u0275classMapInterpolate7:oI,\u0275\u0275classMapInterpolate8:iI,\u0275\u0275classMapInterpolateV:sI,\u0275\u0275styleMap:mt,\u0275\u0275styleMapInterpolate1:aI,\u0275\u0275styleMapInterpolate2:uI,\u0275\u0275styleMapInterpolate3:cI,\u0275\u0275styleMapInterpolate4:lI,\u0275\u0275styleMapInterpolate5:dI,\u0275\u0275styleMapInterpolate6:fI,\u0275\u0275styleMapInterpolate7:hI,\u0275\u0275styleMapInterpolate8:pI,\u0275\u0275styleMapInterpolateV:gI,\u0275\u0275styleProp:mc,\u0275\u0275stylePropInterpolate1:gg,\u0275\u0275stylePropInterpolate2:mg,\u0275\u0275stylePropInterpolate3:yg,\u0275\u0275stylePropInterpolate4:Dg,\u0275\u0275stylePropInterpolate5:vg,\u0275\u0275stylePropInterpolate6:_g,\u0275\u0275stylePropInterpolate7:wg,\u0275\u0275stylePropInterpolate8:Eg,\u0275\u0275stylePropInterpolateV:Cg,\u0275\u0275classProp:Jp,\u0275\u0275advance:XE,\u0275\u0275template:Eb,\u0275\u0275text:ig,\u0275\u0275textInterpolate:sg,\u0275\u0275textInterpolate1:Dc,\u0275\u0275textInterpolate2:ag,\u0275\u0275textInterpolate3:ug,\u0275\u0275textInterpolate4:cg,\u0275\u0275textInterpolate5:lg,\u0275\u0275textInterpolate6:dg,\u0275\u0275textInterpolate7:fg,\u0275\u0275textInterpolate8:hg,\u0275\u0275textInterpolateV:pg,\u0275\u0275i18n:u0,\u0275\u0275i18nAttributes:c0,\u0275\u0275i18nExp:Jg,\u0275\u0275i18nStart:Yg,\u0275\u0275i18nEnd:Kg,\u0275\u0275i18nApply:l0,\u0275\u0275i18nPostprocess:d0,\u0275\u0275resolveWindow:kE,\u0275\u0275resolveDocument:BE,\u0275\u0275resolveBody:jE,\u0275\u0275setComponentScope:Sv,\u0275\u0275setNgModuleScope:Av,\u0275\u0275registerNgModuleType:wf,\u0275\u0275sanitizeHtml:uE,\u0275\u0275sanitizeStyle:cE,\u0275\u0275sanitizeResourceUrl:uh,\u0275\u0275sanitizeScript:lE,\u0275\u0275sanitizeUrl:ah,\u0275\u0275sanitizeUrlOrResourceUrl:pE,\u0275\u0275trustConstantHtml:dE,\u0275\u0275trustConstantResourceUrl:fE,\u0275\u0275validateIframeAttribute:Rw,forwardRef:Da,resolveForwardRef:I};let Jr=null;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function wm(t){return void 0!==t.ngModule}function Em(t){return!!Re(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const oi=[];let Rc=!1;function Cm(t){return Array.isArray(t)?t.every(Cm):!!I(t)}function mM(t,e={}){(function yM(t,e,n=!1){const r=je(e.declarations||V);let o=null;Object.defineProperty(t,Id,{configurable:!0,get:()=>(null===o&&(o=ue().compileNgModule(Se,`ng:///${t.name}/\u0275mod.js`,{type:t,bootstrap:je(e.bootstrap||V).map(I),declarations:r.map(I),imports:je(e.imports||V).map(I).map(Am),exports:je(e.exports||V).map(I).map(Am),schemas:e.schemas?je(e.schemas):null,id:e.id||null}),o.schemas||(o.schemas=[])),o)});let i=null;Object.defineProperty(t,Mt,{get:()=>{if(null===i){const a=ue();i=a.compileFactory(Se,`ng:///${t.name}/\u0275fac.js`,{name:t.name,type:t,deps:Xi(t),target:a.FactoryTarget.NgModule,typeArgumentCount:0})}return i},configurable:!1});let s=null;Object.defineProperty(t,_a,{get:()=>{if(null===s){const a={name:t.name,type:t,providers:e.providers||V,imports:[(e.imports||V).map(I),(e.exports||V).map(I)]};s=ue().compileInjector(Se,`ng:///${t.name}/\u0275inj.js`,a)}return s},configurable:!1})})(t,e),void 0!==e.id&&wf(t,e.id),function pM(t,e){oi.push({moduleType:t,ngModule:e})}(t,e)}function vM(t,e){const n=je(e.declarations||V),r=Xr(t);n.forEach(o=>{if((o=I(o)).hasOwnProperty(Oi)){Sm(H(o),r)}else!o.hasOwnProperty(Ea)&&!o.hasOwnProperty(Ca)&&(o.ngSelectorScope=t)})}function Sm(t,e){t.directiveDefs=()=>Array.from(e.compilation.directives).map(n=>n.hasOwnProperty(Oi)?H(n):ve(n)).filter(n=>!!n),t.pipeDefs=()=>Array.from(e.compilation.pipes).map(n=>_e(n)),t.schemas=e.schemas,t.tView=null}function Xr(t){if(Em(t))return function _M(t){const e=Re(t,!0);if(null!==e.transitiveCompileScopes)return e.transitiveCompileScopes;const n={schemas:e.schemas||null,compilation:{directives:new Set,pipes:new Set},exported:{directives:new Set,pipes:new Set}};return Ot(e.imports).forEach(r=>{const o=Xr(r);o.exported.directives.forEach(i=>n.compilation.directives.add(i)),o.exported.pipes.forEach(i=>n.compilation.pipes.add(i))}),Ot(e.declarations).forEach(r=>{_e(r)?n.compilation.pipes.add(r):n.compilation.directives.add(r)}),Ot(e.exports).forEach(r=>{const o=r;if(Em(o)){const i=Xr(o);i.exported.directives.forEach(s=>{n.compilation.directives.add(s),n.exported.directives.add(s)}),i.exported.pipes.forEach(s=>{n.compilation.pipes.add(s),n.exported.pipes.add(s)})}else _e(o)?n.exported.pipes.add(o):n.exported.directives.add(o)}),e.transitiveCompileScopes=n,n}(t);if(Do(t)){if(null!==(H(t)||ve(t)))return{schemas:null,compilation:{directives:new Set,pipes:new Set},exported:{directives:new Set([t]),pipes:new Set}};if(null!==_e(t))return{schemas:null,compilation:{directives:new Set,pipes:new Set},exported:{directives:new Set,pipes:new Set([t])}}}throw new Error(`${t.name} does not have a module def (\u0275mod property)`)}function Am(t){return wm(t)?t.ngModule:t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Bc=0;function wM(t,e){let n=null;(function W_(t,e){vf(e)&&(Tr.set(t,e),ko.add(t))})(t,e),Nm(t,e),Object.defineProperty(t,Oi,{get:()=>{if(null===n){const r=ue();if(vf(e)){const c=[`Component '${t.name}' is not resolved:`];throw e.templateUrl&&c.push(` - templateUrl: ${e.templateUrl}`),e.styleUrls&&e.styleUrls.length&&c.push(` - styleUrls: ${JSON.stringify(e.styleUrls)}`),c.push("Did you run and wait for 'resolveComponentResources()'?"),new Error(c.join("\n"))}const o=function hM(){return Jr}();let i=e.preserveWhitespaces;void 0===i&&(i=null!==o&&void 0!==o.preserveWhitespaces&&o.preserveWhitespaces);let s=e.encapsulation;void 0===s&&(s=null!==o&&void 0!==o.defaultEncapsulation?o.defaultEncapsulation:It.Emulated);const a=e.templateUrl||`ng:///${t.name}/template.html`,u={...Om(t,e),typeSourceSpan:r.createParseSourceSpan("Component",t.name,a),template:e.template||"",preserveWhitespaces:i,styles:e.styles||V,animations:e.animations,declarations:[],changeDetection:e.changeDetection,encapsulation:s,interpolation:e.interpolation,viewProviders:e.viewProviders||null,isStandalone:!!e.standalone};Bc++;try{if(u.usesInheritance&&Pm(t),n=r.compileComponent(Se,a,u),e.standalone){const c=je(e.imports||V),{directiveDefs:l,pipeDefs:d}=function CM(t,e){let n=null,r=null;return{directiveDefs:()=>{if(null===n){n=[H(t)];const s=new Set;for(const a of e){const u=I(a);if(!s.has(u))if(s.add(u),Re(u)){const c=Xr(u);for(const l of c.exported.directives){const d=H(l)||ve(l);d&&!s.has(l)&&(s.add(l),n.push(d))}}else{const c=H(u)||ve(u);c&&n.push(c)}}}return n},pipeDefs:()=>{if(null===r){r=[];const s=new Set;for(const a of e){const u=I(a);if(!s.has(u))if(s.add(u),Re(u)){const c=Xr(u);for(const l of c.exported.pipes){const d=_e(l);d&&!s.has(l)&&(s.add(l),r.push(d))}}else{const c=_e(u);c&&r.push(c)}}}return r}}}(t,c);n.directiveDefs=l,n.pipeDefs=d,n.dependencies=()=>c.map(I)}}finally{Bc--}if(0===Bc&&function gM(){if(!Rc){Rc=!0;try{for(let t=oi.length-1;t>=0;t--){const{moduleType:e,ngModule:n}=oi[t];n.declarations&&n.declarations.every(Cm)&&(oi.splice(t,1),vM(e,n))}}finally{Rc=!1}}}(),function bM(t){return void 0!==t.ngSelectorScope}(t)){const c=Xr(t.ngSelectorScope);Sm(n,c)}if(e.schemas){if(!e.standalone)throw new Error(`The 'schemas' was specified for the ${j(t)} but is only valid on a component that is standalone.`);n.schemas=e.schemas}else e.standalone&&(n.schemas=[])}return n},configurable:!1})}function Tm(t,e){let n=null;Nm(t,e||{}),Object.defineProperty(t,Ea,{get:()=>{if(null===n){const r=xm(t,e||{});n=ue().compileDirective(Se,r.sourceMapUrl,r.metadata)}return n},configurable:!1})}function xm(t,e){const n=t&&t.name,r=`ng:///${n}/\u0275dir.js`,o=ue(),i=Om(t,e);return i.typeSourceSpan=o.createParseSourceSpan("Directive",n,r),i.usesInheritance&&Pm(t),{metadata:i,sourceMapUrl:r}}function Nm(t,e){let n=null;Object.defineProperty(t,Mt,{get:()=>{if(null===n){const r=xm(t,e),o=ue();n=o.compileFactory(Se,`ng:///${t.name}/\u0275fac.js`,{name:r.metadata.name,type:r.metadata.type,typeArgumentCount:0,deps:Xi(t),target:o.FactoryTarget.Directive})}return n},configurable:!1})}function IM(t){return Object.getPrototypeOf(t.prototype)===Object.prototype}function Om(t,e){const n=Lo(),r=n.ownPropMetadata(t);return{name:t.name,type:t,selector:void 0!==e.selector?e.selector:null,host:e.host||pr,propMetadata:r,inputs:e.inputs||V,outputs:e.outputs||V,queries:Fm(t,r,Rm),lifecycle:{usesOnChanges:n.hasLifecycleHook(t,"ngOnChanges")},typeSourceSpan:null,usesInheritance:!IM(t),exportAs:AM(e.exportAs),providers:e.providers||null,viewQueries:Fm(t,r,Lm),isStandalone:!!e.standalone}}function Pm(t){const e=Object.prototype;let n=Object.getPrototypeOf(t.prototype).constructor;for(;n&&n!==e;)!ve(n)&&!H(n)&&xM(n)&&Tm(n,null),n=Object.getPrototypeOf(n)}function MM(t){return"string"==typeof t?Bm(t):I(t)}function SM(t,e){return{propertyName:t,predicate:MM(e.selector),descendants:e.descendants,first:e.first,read:e.read?e.read:null,static:!!e.static,emitDistinctChangesOnly:!!e.emitDistinctChangesOnly}}function Fm(t,e,n){const r=[];for(const o in e)if(e.hasOwnProperty(o)){const i=e[o];i.forEach(s=>{if(n(s)){if(!s.selector)throw new Error(`Can't construct a query for the property "${o}" of "${j(t)}" since the query selector wasn't defined.`);if(i.some(km))throw new Error("Cannot combine @Input decorators with query decorators");r.push(SM(o,s))}})}return r}function AM(t){return void 0===t?null:Bm(t)}function Rm(t){const e=t.ngMetadataName;return"ContentChild"===e||"ContentChildren"===e}function Lm(t){const e=t.ngMetadataName;return"ViewChild"===e||"ViewChildren"===e}function km(t){return"Input"===t.ngMetadataName}function Bm(t){return t.split(",").map(e=>e.trim())}const TM=["ngOnChanges","ngOnInit","ngOnDestroy","ngDoCheck","ngAfterViewInit","ngAfterViewChecked","ngAfterContentInit","ngAfterContentChecked"];function xM(t){const e=Lo();if(TM.some(r=>e.hasLifecycleHook(t,r)))return!0;const n=e.propMetadata(t);for(const r in n){const o=n[r];for(let i=0;i<o.length;i++){const s=o[i],a=s.ngMetadataName;if(km(s)||Rm(s)||Lm(s)||"Output"===a||"HostBinding"===a||"HostListener"===a)return!0}}return!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function jm(t,e){return{type:t,name:t.name,pipeName:e.name,pure:void 0===e.pure||e.pure,isStandalone:!!e.standalone}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const OM=To("Directive",(t={})=>t,void 0,void 0,(t,e)=>Tm(t,e));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */To("Component",(t={})=>({changeDetection:An.Default,...t}),OM,void 0,(t,e)=>wM(t,e)),To("Pipe",t=>({pure:!0,...t}),void 0,void 0,(t,e)=>function NM(t,e){let n=null,r=null;Object.defineProperty(t,Mt,{get:()=>{if(null===r){const o=jm(t,e),i=ue(o.type);r=i.compileFactory(Se,`ng:///${o.name}/\u0275fac.js`,{name:o.name,type:o.type,typeArgumentCount:0,deps:Xi(t),target:i.FactoryTarget.Pipe})}return r},configurable:!1}),Object.defineProperty(t,Ca,{get:()=>{if(null===n){const o=jm(t,e);n=ue(o.type).compilePipe(Se,`ng:///${o.name}/\u0275pipe.js`,o)}return n},configurable:!1})}(t,e)),un("Input",t=>({bindingPropertyName:t})),un("Output",t=>({bindingPropertyName:t})),un("HostBinding",t=>({hostPropertyName:t})),un("HostListener",(t,e)=>({eventName:t,args:e})),To("NgModule",t=>t,void 0,void 0,(t,e)=>mM(t,e));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ps(...t){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Vm=new O("Application Initializer");class Rt{constructor(e){this.appInits=e,this.resolve=Ps,this.reject=Ps,this.initialized=!1,this.done=!1,this.donePromise=new Promise((n,r)=>{this.resolve=n,this.reject=r})}runInitializers(){if(this.initialized)return;const e=[],n=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let r=0;r<this.appInits.length;r++){const o=this.appInits[r]();if(pc(o))e.push(o);else if(Ab(o)){const i=new Promise((s,a)=>{o.subscribe({complete:s,error:a})});e.push(i)}}Promise.all(e).then(()=>{n()}).catch(r=>{this.reject(r)}),0===e.length&&n(),this.initialized=!0}}Rt.\u0275fac=function(e){return new(e||Rt)(b(Vm,8))},Rt.\u0275prov=x({token:Rt,factory:Rt.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const eo=new O("AppId",{providedIn:"root",factory:$m});function $m(){return`${jc()}${jc()}${jc()}`}function jc(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const Hm=new O("Platform Initializer"),Vc=new O("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),PM=new O("appBootstrapListener");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */new O("Application Packages Root URL"),new O("AnimationModuleType");class Un{log(e){console.log(e)}warn(e){console.warn(e)}}Un.\u0275fac=function(e){return new(e||Un)},Un.\u0275prov=x({token:Un,factory:Un.\u0275fac,providedIn:"platform"});const Lt=new O("LocaleId",{providedIn:"root",factory:()=>fe(Lt,F.Optional|F.SkipSelf)||
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function FM(){return typeof $localize<"u"&&$localize.locale||Yr}()}),RM=new O("DefaultCurrencyCode",{providedIn:"root",factory:()=>"USD"});new O("Translations"),new O("TranslationsFormat");var Um;!function(t){t[t.Error=0]="Error",t[t.Warning=1]="Warning",t[t.Ignore=2]="Ignore"}(Um||(Um={}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class LM{constructor(e,n){this.ngModuleFactory=e,this.componentFactories=n}}class ii{compileModuleSync(e){return new Ic(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){const n=this.compileModuleSync(e),o=Ot(Re(e).declarations).reduce((i,s)=>{const a=H(s);return a&&i.push(new qo(a)),i},[]);return new LM(n,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}}ii.\u0275fac=function(e){return new(e||ii)},ii.\u0275prov=x({token:ii,factory:ii.\u0275fac,providedIn:"root"});const kM=new O("compilerOptions");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const jM=Promise.resolve(0);function $c(t){typeof Zone>"u"?jM.then(()=>{t&&t.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ye{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Dt(!1),this.onMicrotaskEmpty=new Dt(!1),this.onStable=new Dt(!1),this.onError=new Dt(!1),typeof Zone>"u")throw new E(908,!1);Zone.assertZonePatched();const o=this;if(o._nesting=0,o._outer=o._inner=Zone.current,Zone.AsyncStackTaggingZoneSpec){const i=Zone.AsyncStackTaggingZoneSpec;o._inner=o._inner.fork(new i("Angular"))}Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function VM(){let t=q.requestAnimationFrame,e=q.cancelAnimationFrame;if(typeof Zone<"u"&&t&&e){const n=t[Zone.__symbol__("OriginalDelegate")];n&&(t=n);const r=e[Zone.__symbol__("OriginalDelegate")];r&&(e=r)}return{nativeRequestAnimationFrame:t,nativeCancelAnimationFrame:e}}().nativeRequestAnimationFrame,function UM(t){const e=()=>{!function HM(t){t.isCheckStableRunning||-1!==t.lastRequestAnimationFrameId||(t.lastRequestAnimationFrameId=t.nativeRequestAnimationFrame.call(q,()=>{t.fakeTopEventTask||(t.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{t.lastRequestAnimationFrameId=-1,Uc(t),t.isCheckStableRunning=!0,Hc(t),t.isCheckStableRunning=!1},void 0,()=>{},()=>{})),t.fakeTopEventTask.invoke()}),Uc(t))}(t)};t._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,a)=>{try{return Wm(t),n.invokeTask(o,i,s,a)}finally{(t.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||t.shouldCoalesceRunChangeDetection)&&e(),qm(t)}},onInvoke:(n,r,o,i,s,a,u)=>{try{return Wm(t),n.invoke(o,i,s,a,u)}finally{t.shouldCoalesceRunChangeDetection&&e(),qm(t)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(t._hasPendingMicrotasks=i.microTask,Uc(t),Hc(t)):"macroTask"==i.change&&(t.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),t.runOutsideAngular(()=>t.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!ye.isInAngularZone())throw new E(909,!1)}static assertNotInAngularZone(){if(ye.isInAngularZone())throw new E(909,!1)}run(e,n,r){return this._inner.run(e,n,r)}runTask(e,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,e,$M,Ps,Ps);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(e,n,r){return this._inner.runGuarded(e,n,r)}runOutsideAngular(e){return this._outer.run(e)}}const $M={};function Hc(t){if(0==t._nesting&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function Uc(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&-1!==t.lastRequestAnimationFrameId?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Wm(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function qm(t){t._nesting--,Hc(t)}class zM{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Dt,this.onMicrotaskEmpty=new Dt,this.onStable=new Dt,this.onError=new Dt}run(e,n,r){return e.apply(n,r)}runGuarded(e,n,r){return e.apply(n,r)}runOutsideAngular(e){return e()}runTask(e,n,r,o){return e.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Zm=new O(""),Fs=new O("");class pn{constructor(e,n,r){this._ngZone=e,this.registry=n,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,zc||(function GM(t){zc=t}(r),r.addToWindow(n)),this._watchAngularEvents(),e.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{ye.assertNotInAngularZone(),$c(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())$c(()=>{for(;0!==this._callbacks.length;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb(this._didWork)}this._didWork=!1});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(n=>!n.updateCb||!n.updateCb(e)||(clearTimeout(n.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,n,r){let o=-1;n&&n>0&&(o=setTimeout(()=>{this._callbacks=this._callbacks.filter(i=>i.timeoutId!==o),e(this._didWork,this.getPendingTasks())},n)),this._callbacks.push({doneCb:e,timeoutId:o,updateCb:r})}whenStable(e,n,r){if(r&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(e,n,r),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(e){this.registry.registerApplication(e,this)}unregisterApplication(e){this.registry.unregisterApplication(e)}findProviders(e,n,r){return[]}}pn.\u0275fac=function(e){return new(e||pn)(b(ye),b(gn),b(Fs))},pn.\u0275prov=x({token:pn,factory:pn.\u0275fac});class gn{constructor(){this._applications=new Map}registerApplication(e,n){this._applications.set(e,n)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,n=!0){return zc?.findTestabilityInTree(this,e,n)??null}}let zc;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */gn.\u0275fac=function(e){return new(e||gn)},gn.\u0275prov=x({token:gn,factory:gn.\u0275fac,providedIn:"platform"});let mn=null;const Qm=new O("AllowMultipleToken"),Gc=new O("PlatformDestroyListeners"),kt=!1;function WM(t,e,n){const r=new Ic(n);if(typeof ngJitMode<"u"&&!ngJitMode)return Promise.resolve(r);const o=t.get(kM,[]).concat(e);if(function fM(t){null!==Jr&&(t.defaultEncapsulation!==Jr.defaultEncapsulation||t.preserveWhitespaces!==Jr.preserveWhitespaces)||(Jr=t)}({defaultEncapsulation:ry(o.map(c=>c.defaultEncapsulation)),preserveWhitespaces:ry(o.map(c=>c.preserveWhitespaces))}),function Z_(){return 0===Tr.size}())return Promise.resolve(r);const i=function KM(t){const e=[];return t.forEach(n=>n&&e.push(...n)),e
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}(o.map(c=>c.providers));if(0===i.length)return Promise.resolve(r);const s=ue(),u=be.create({providers:i}).get(s.ResourceLoader);return G_(c=>Promise.resolve(u.get(c))).then(()=>r)}function Ym(t){const e=t.get(Hm,null);e&&e.forEach(n=>n())}function Km(t,e,n=[]){const r=`Platform: ${e}`,o=new O(r);return(i=[])=>{let s=Wc();if(!s||s.injector.get(Qm,!1)){const a=[...n,...i,{provide:o,useValue:!0}];t?t(a):function ZM(t){if(mn&&!mn.get(Qm,!1))throw new E(400,!1);mn=t;const e=t.get(zn);return Ym(t),e}(Jm(a,r))}return function YM(t){const e=Wc();if(!e)throw new E(401,!1);return e}()}}function Jm(t=[],e){return be.create({name:e,providers:[{provide:Tu,useValue:"platform"},{provide:Gc,useValue:new Set([()=>mn=null])},...t]})}function Wc(){return mn?.get(zn)??null}class zn{constructor(e){this._injector=e,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(e,n){const r=ey(n?.ngZone,Xm(n)),o=[{provide:ye,useValue:r}];return r.run(()=>{const i=be.create({providers:o,parent:this.injector,name:e.moduleType.name}),s=e.create(i),a=s.injector.get(Fr,null);if(!a)throw new E(402,!1);return r.runOutsideAngular(()=>{const u=r.onError.subscribe({next:c=>{a.handleError(c)}});s.onDestroy(()=>{Rs(this._modules,s),u.unsubscribe()})}),ty(a,r,()=>{const u=s.injector.get(Rt);return u.runInitializers(),u.donePromise.then(()=>(Tg(s.injector.get(Lt,Yr)||Yr),this._moduleDoBootstrap(s),s))})})}bootstrapModule(e,n=[]){const r=ny({},n);return WM(this.injector,r,e).then(o=>this.bootstrapModuleFactory(o,r))}_moduleDoBootstrap(e){const n=e.injector.get(yn);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(r=>n.bootstrap(r));else{if(!e.instance.ngDoBootstrap)throw new E(403,!1);e.instance.ngDoBootstrap(n)}this._modules.push(e)}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new E(404,!1);this._modules.slice().forEach(n=>n.destroy()),this._destroyListeners.forEach(n=>n());const e=this._injector.get(Gc,null);e&&(e.forEach(n=>n()),e.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}function Xm(t){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!t||!t.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!t||!t.ngZoneRunCoalescing)||!1}}function ey(t,e){let n;return n="noop"===t?new zM:("zone.js"===t?void 0:t)||new ye(e),n}function ty(t,e,n){try{const r=n();return pc(r)?r.catch(o=>{throw e.runOutsideAngular(()=>t.handleError(o)),o}):r}catch(r){throw e.runOutsideAngular(()=>t.handleError(r)),r}}function ny(t,e){return t=Array.isArray(e)?e.reduce(ny,t):{...t,...e}}zn.\u0275fac=function(e){return new(e||zn)(b(be))},zn.\u0275prov=x({token:zn,factory:zn.\u0275fac,providedIn:"platform"});class yn{constructor(e,n,r){this._zone=e,this._injector=n,this._exceptionHandler=r,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const o=new le(s=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{s.next(this._stable),s.complete()})}),i=new le(s=>{let a;this._zone.runOutsideAngular(()=>{a=this._zone.onStable.subscribe(()=>{ye.assertNotInAngularZone(),$c(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,s.next(!0))})})});const u=this._zone.onUnstable.subscribe(()=>{ye.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{s.next(!1)}))});return()=>{a.unsubscribe(),u.unsubscribe()}});this.isStable=pv(o,i.pipe(function gv(t={}){const{connector:e=(()=>new go),resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=t;return i=>{let s,a,u,c=0,l=!1,d=!1;const f=()=>{a?.unsubscribe(),a=void 0},h=()=>{f(),s=u=void 0,l=d=!1},p=()=>{const g=s;h(),g?.unsubscribe()};return hr((g,D)=>{c++,!d&&!l&&f();const v=u=u??e();D.add(()=>{c--,0===c&&!d&&!l&&(a=ga(p,o))}),v.subscribe(D),!s&&c>0&&(s=new po({next:w=>v.next(w),error:w=>{d=!0,f(),a=ga(h,n,w),v.error(w)},complete:()=>{l=!0,f(),a=ga(h,r),v.complete()}}),Sn(g).subscribe(s))})(i)}}()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(e,n){const r=e instanceof vh;if(!this._injector.get(Rt).done){!r&&Do(e);throw new E(405,kt)}let i;i=r?e:this._injector.get(Uo).resolveComponentFactory(e),this.componentTypes.push(i.componentType);const s=function qM(t){return t.isBoundToModule}(i)?void 0:this._injector.get(Kr),a=n||i.selector,u=i.create(be.NULL,[],a,s),c=u.location.nativeElement,l=u.injector.get(Zm,null);return l?.registerApplication(c),u.onDestroy(()=>{this.detachView(u.hostView),Rs(this.components,u),l?.unregisterApplication(c)}),this._loadComponent(u),u}tick(){if(this._runningTick)throw new E(101,!1);try{this._runningTick=!0;for(let e of this._views)e.detectChanges()}catch(e){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(e))}finally{this._runningTick=!1}}attachView(e){const n=e;this._views.push(n),n.attachToAppRef(this)}detachView(e){const n=e;Rs(this._views,n),n.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView),this.tick(),this.components.push(e),this._injector.get(PM,[]).concat(this._bootstrapListeners).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Rs(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new E(406,!1);const e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}function Rs(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}function ry(t){for(let e=t.length-1;e>=0;e--)if(void 0!==t[e])return t[e]}yn.\u0275fac=function(e){return new(e||yn)(b(ye),b(Nr),b(Fr))},yn.\u0275prov=x({token:yn,factory:yn.\u0275fac,providedIn:"root"});let oy=!0,iy=!1;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ay{}ay.__NG_ELEMENT_ID__=function XM(t){return function eS(t,e,n){if(Li(t)&&!n){const r=Be(t.index,e);return new Wo(r,r)}if(47&t.type){const r=e[16];return new Wo(r,e)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(ae(),y(),16==(16&t))};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ly{constructor(){}supports(e){return Zo(e)}create(e){return new sS(e)}}const iS=(t,e)=>e;class sS{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||iS}forEachItem(e){let n;for(n=this._itHead;null!==n;n=n._next)e(n)}forEachOperation(e){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<fy(r,o,i)?n:r,a=fy(s,o,i),u=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const c=a-o,l=u-o;if(c!=l){for(let f=0;f<c;f++){const h=f<i.length?i[f]:i[f]=0,p=h+f;l<=p&&p<c&&(i[f]=h+1)}i[s.previousIndex]=l-c}}a!==u&&e(s,a,u)}}forEachPreviousItem(e){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)e(n)}forEachAddedItem(e){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)e(n)}forEachMovedItem(e){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)e(n)}forEachRemovedItem(e){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)e(n)}forEachIdentityChange(e){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)e(n)}diff(e){if(null==e&&(e=[]),!Zo(e))throw new E(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)i=e[a],s=this._trackByFn(a,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,a)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,a),r=!0),n=n._next}else o=0,function Db(t,e){if(Array.isArray(t))for(let n=0;n<t.length;n++)e(t[n]);else{const n=t[Vn()]();let r;for(;!(r=n.next()).done;)e(r.value)}}(e,a=>{s=this._trackByFn(o,a),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,a,s,o)),Object.is(n.item,a)||this._addIdentityChange(n,a)):(n=this._mismatch(n,a,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=e,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,n,r,o){let i;return null===e?i=this._itTail:(i=e._prev,this._remove(e)),null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(e.item,n)||this._addIdentityChange(e,n),this._reinsertAfter(e,i,o)):null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(e.item,n)||this._addIdentityChange(e,n),this._moveAfter(e,i,o)):e=this._addAfter(new aS(n,r),i,o),e}_verifyReinsertion(e,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?e=this._reinsertAfter(i,e._prev,o):e.currentIndex!=o&&(e.currentIndex=o,this._addToMoves(e,o)),e}_truncate(e){for(;null!==e;){const n=e._next;this._addToRemovals(this._unlink(e)),e=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);const o=e._prevRemoved,i=e._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(e,n,r),this._addToMoves(e,r),e}_moveAfter(e,n,r){return this._unlink(e),this._insertAfter(e,n,r),this._addToMoves(e,r),e}_addAfter(e,n,r){return this._insertAfter(e,n,r),null===this._additionsTail?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,n,r){const o=null===n?this._itHead:n._next;return e._next=o,e._prev=n,null===o?this._itTail=e:o._prev=e,null===n?this._itHead=e:n._next=e,null===this._linkedRecords&&(this._linkedRecords=new dy),this._linkedRecords.put(e),e.currentIndex=r,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);const n=e._prev,r=e._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,e}_addToMoves(e,n){return e.previousIndex===n||(null===this._movesTail?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return null===this._unlinkedRecords&&(this._unlinkedRecords=new dy),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,n){return e.item=n,null===this._identityChangesTail?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}}class aS{constructor(e,n){this.item=e,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class uS{constructor(){this._head=null,this._tail=null}add(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,e))return r;return null}remove(e){const n=e._prevDup,r=e._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class dy{constructor(){this.map=new Map}put(e){const n=e.trackById;let r=this.map.get(n);r||(r=new uS,this.map.set(n,r)),r.add(e)}get(e,n){const r=e,o=this.map.get(r);return o?o.get(e,n):null}remove(e){const n=e.trackById;return this.map.get(n).remove(e)&&this.map.delete(n),e}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function fy(t,e,n){const r=t.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+e+o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class hy{constructor(){}supports(e){return e instanceof Map||lc(e)}create(){return new cS}}class cS{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(e){let n;for(n=this._mapHead;null!==n;n=n._next)e(n)}forEachPreviousItem(e){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)e(n)}forEachChangedItem(e){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)e(n)}forEachAddedItem(e){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)e(n)}forEachRemovedItem(e){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)e(n)}diff(e){if(e){if(!(e instanceof Map||lc(e)))throw new E(900,!1)}else e=new Map;return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(e,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const i=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,n){if(e){const r=e._prev;return n._next=e,n._prev=r,e._prev=n,r&&(r._next=n),e===this._mapHead&&(this._mapHead=n),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(e,n){if(this._records.has(e)){const o=this._records.get(e);this._maybeAddToChanges(o,n);const i=o._prev,s=o._next;return i&&(i._next=s),s&&(s._prev=i),o._next=null,o._prev=null,o}const r=new lS(e);return this._records.set(e,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;null!==e;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;null!=e;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,n){Object.is(n,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=n,this._addToChanges(e))}_addToAdditions(e){null===this._additionsHead?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){null===this._changesHead?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,n){e instanceof Map?e.forEach(n):Object.keys(e).forEach(r=>n(e[r],r))}}class lS{constructor(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function py(){return new at([new ly])}class at{constructor(e){this.factories=e}static create(e,n){if(null!=n){const r=n.factories.slice();e=e.concat(r)}return new at(e)}static extend(e){return{provide:at,useFactory:n=>at.create(e,n||py()),deps:[[at,new Ro,new Fo]]}}find(e){const n=this.factories.find(r=>r.supports(e));if(null!=n)return n;throw new E(901,!1)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function gy(){return new Ze([new hy])}at.\u0275prov=x({token:at,providedIn:"root",factory:py});class Ze{constructor(e){this.factories=e}static create(e,n){if(n){const r=n.factories.slice();e=e.concat(r)}return new Ze(e)}static extend(e){return{provide:Ze,useFactory:n=>Ze.create(e,n||gy()),deps:[[Ze,new Ro,new Fo]]}}find(e){const n=this.factories.find(r=>r.supports(e));if(n)return n;throw new E(901,!1)}}Ze.\u0275prov=x({token:Ze,providedIn:"root",factory:gy});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const dS=[new hy],fS=[new ly],hS=(new at(fS),new Ze(dS),Km(null,"core",[]));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Wn{constructor(e){}}Wn.\u0275fac=function(e){return new(e||Wn)(b(yn))},Wn.\u0275mod=Tn({type:Wn}),Wn.\u0275inj=nn({});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.3.0
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Bs=null;function Bt(){return Bs}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const J=new O("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class qn{historyGo(e){throw new Error("Not implemented")}}qn.\u0275fac=function(e){return new(e||qn)},qn.\u0275prov=x({token:qn,factory:function(){return function yS(){return b(to)}()},providedIn:"platform"});new O("Location Initialized");class to extends qn{constructor(e){super(),this._doc=e,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Bt().getBaseHref(this._doc)}onPopState(e){const n=Bt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){const n=Bt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(e){this.location.pathname=e}pushState(e,n,r){my()?this._history.pushState(e,n,r):this.location.hash=r}replaceState(e,n,r){my()?this._history.replaceState(e,n,r):this.location.hash=r}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}}function my(){return!!window.history.pushState}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Kc(t,e){if(0==t.length)return e;if(0==e.length)return t;let n=0;return t.endsWith("/")&&n++,e.startsWith("/")&&n++,2==n?t+e.substring(1):1==n?t+e:t+"/"+e}function yy(t){const e=t.match(/#|\?|$/),n=e&&e.index||t.length,r=n-("/"===t[n-1]?1:0);return t.slice(0,r)+t.slice(n)}function jt(t){return t&&"?"!==t[0]?"?"+t:t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */to.\u0275fac=function(e){return new(e||to)(b(J))},to.\u0275prov=x({token:to,factory:function(){return function DS(){return new to(b(J))}()},providedIn:"platform"});class Dn{historyGo(e){throw new Error("Not implemented")}}Dn.\u0275fac=function(e){return new(e||Dn)},Dn.\u0275prov=x({token:Dn,factory:function(){return fe(no)},providedIn:"root"});const Dy=new O("appBaseHref");class no extends Dn{constructor(e,n){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??fe(J).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Kc(this._baseHref,e)}path(e=!1){const n=this._platformLocation.pathname+jt(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){const i=this.prepareExternalUrl(r+jt(o));this._platformLocation.pushState(e,n,i)}replaceState(e,n,r,o){const i=this.prepareExternalUrl(r+jt(o));this._platformLocation.replaceState(e,n,i)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}}no.\u0275fac=function(e){return new(e||no)(b(qn),b(Dy,8))},no.\u0275prov=x({token:no,factory:no.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class si extends Dn{constructor(e,n){super(),this._platformLocation=e,this._baseHref="",this._removeListenerFns=[],null!=n&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash;return null==n&&(n="#"),n.length>0?n.substring(1):n}prepareExternalUrl(e){const n=Kc(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,o){let i=this.prepareExternalUrl(r+jt(o));0==i.length&&(i=this._platformLocation.pathname),this._platformLocation.pushState(e,n,i)}replaceState(e,n,r,o){let i=this.prepareExternalUrl(r+jt(o));0==i.length&&(i=this._platformLocation.pathname),this._platformLocation.replaceState(e,n,i)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}}si.\u0275fac=function(e){return new(e||si)(b(qn),b(Dy,8))},si.\u0275prov=x({token:si,factory:si.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class _t{constructor(e){this._subject=new Dt,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;const n=this._locationStrategy.getBaseHref();this._baseHref=yy(vy(n)),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+jt(n))}normalize(e){return _t.stripTrailingSlash(function _S(t,e){return t&&e.startsWith(t)?e.substring(t.length):e}(this._baseHref,vy(e)))}prepareExternalUrl(e){return e&&"/"!==e[0]&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+jt(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+jt(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)})),()=>{const n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n,complete:r})}}function vy(t){return t.replace(/\/index.html$/,"")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */_t.normalizeQueryParams=jt,_t.joinWithSlash=Kc,_t.stripTrailingSlash=yy,_t.\u0275fac=function(e){return new(e||_t)(b(Dn))},_t.\u0275prov=x({token:_t,factory:function(){return function vS(){return new _t(b(Dn))}()},providedIn:"root"});const _y={ADP:[void 0,void 0,0],AFN:[void 0,"\u060b",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058f",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20bc"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09f3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xa5","\xa5"],COP:[void 0,"$",2],CRC:[void 0,"\u20a1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010d",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xa3"],ESP:[void 0,"\u20a7",0],EUR:["\u20ac"],FJD:[void 0,"$"],FKP:[void 0,"\xa3"],GBP:["\xa3"],GEL:[void 0,"\u20be"],GHS:[void 0,"GH\u20b5"],GIP:[void 0,"\xa3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20aa"],INR:["\u20b9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xa5",void 0,0],KHR:[void 0,"\u17db"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20a9",0],KRW:["\u20a9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20b8"],LAK:[void 0,"\u20ad",0],LBP:[void 0,"L\xa3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20ae",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20a6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20b1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20b2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20bd"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xa3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xa3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xa3",0],THB:[void 0,"\u0e3f"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20ba"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20b4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20ab",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["F\u202fCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xa4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var ai,Zn,De,U,xe,re,wy;function js(t,e){return Ye(Ie(t)[W.DateFormat],e)}function Vs(t,e){return Ye(Ie(t)[W.TimeFormat],e)}function $s(t,e){return Ye(Ie(t)[W.DateTimeFormat],e)}function Qe(t,e){const n=Ie(t),r=n[W.NumberSymbols][e];if(typeof r>"u"){if(e===re.CurrencyDecimal)return n[W.NumberSymbols][re.Decimal];if(e===re.CurrencyGroup)return n[W.NumberSymbols][re.Group]}return r}function Jc(t,e){return Ie(t)[W.NumberFormats][e]}!function(t){t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific"}(ai||(ai={})),function(t){t[t.Zero=0]="Zero",t[t.One=1]="One",t[t.Two=2]="Two",t[t.Few=3]="Few",t[t.Many=4]="Many",t[t.Other=5]="Other"}(Zn||(Zn={})),function(t){t[t.Format=0]="Format",t[t.Standalone=1]="Standalone"}(De||(De={})),function(t){t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short"}(U||(U={})),function(t){t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full"}(xe||(xe={})),function(t){t[t.Decimal=0]="Decimal",t[t.Group=1]="Group",t[t.List=2]="List",t[t.PercentSign=3]="PercentSign",t[t.PlusSign=4]="PlusSign",t[t.MinusSign=5]="MinusSign",t[t.Exponential=6]="Exponential",t[t.SuperscriptingExponent=7]="SuperscriptingExponent",t[t.PerMille=8]="PerMille",t[t.Infinity=9]="Infinity",t[t.NaN=10]="NaN",t[t.TimeSeparator=11]="TimeSeparator",t[t.CurrencyDecimal=12]="CurrencyDecimal",t[t.CurrencyGroup=13]="CurrencyGroup"}(re||(re={})),function(t){t[t.Sunday=0]="Sunday",t[t.Monday=1]="Monday",t[t.Tuesday=2]="Tuesday",t[t.Wednesday=3]="Wednesday",t[t.Thursday=4]="Thursday",t[t.Friday=5]="Friday",t[t.Saturday=6]="Saturday"}(wy||(wy={}));const SS=Mg;function Ey(t){if(!t[W.ExtraData])throw new Error(`Missing extra locale data for the locale "${t[W.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function Ye(t,e){for(let n=e;n>-1;n--)if(typeof t[n]<"u")return t[n];throw new Error("Locale data API: locale data undefined")}function Xc(t){const[e,n]=t.split(":");return{hours:+e,minutes:+n}}function xS(t,e,n="en"){const r=function MS(t){return Ie(t)[W.Currencies]}(n)[t]||_y[t]||[],o=r[1];return"narrow"===e&&"string"==typeof o?o:r[0]||t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const PS=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,ui={},FS=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var wt,k,B;function RS(t,e,n,r){let o=function zS(t){if(Iy(t))return t;if("number"==typeof t&&!isNaN(t))return new Date(t);if("string"==typeof t){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){const[o,i=1,s=1]=t.split("-").map(a=>+a);return Hs(o,i-1,s)}const n=parseFloat(t);if(!isNaN(t-n))return new Date(n);let r;if(r=t.match(PS))return function GS(t){const e=new Date(0);let n=0,r=0;const o=t[8]?e.setUTCFullYear:e.setFullYear,i=t[8]?e.setUTCHours:e.setHours;t[9]&&(n=Number(t[9]+t[10]),r=Number(t[9]+t[11])),o.call(e,Number(t[1]),Number(t[2])-1,Number(t[3]));const s=Number(t[4]||0)-n,a=Number(t[5]||0)-r,u=Number(t[6]||0),c=Math.floor(1e3*parseFloat("0."+(t[7]||0)));return i.call(e,s,a,u,c),e}(r)}const e=new Date(t);if(!Iy(e))throw new Error(`Unable to convert "${t}" into a date`);return e}(t);e=Vt(n,e)||e;let a,s=[];for(;e;){if(a=FS.exec(e),!a){s.push(e);break}{s=s.concat(a.slice(1));const l=s.pop();if(!l)break;e=l}}let u=o.getTimezoneOffset();r&&(u=by(r,u),o=function US(t,e,n){const r=n?-1:1,o=t.getTimezoneOffset(),i=by(e,o);return function HS(t,e){return(t=new Date(t.getTime())).setMinutes(t.getMinutes()+e),t}(t,r*(i-o))}(o,r,!0));let c="";return s.forEach(l=>{const d=function $S(t){if(tl[t])return tl[t];let e;switch(t){case"G":case"GG":case"GGG":e=Q(B.Eras,U.Abbreviated);break;case"GGGG":e=Q(B.Eras,U.Wide);break;case"GGGGG":e=Q(B.Eras,U.Narrow);break;case"y":e=se(k.FullYear,1,0,!1,!0);break;case"yy":e=se(k.FullYear,2,0,!0,!0);break;case"yyy":e=se(k.FullYear,3,0,!1,!0);break;case"yyyy":e=se(k.FullYear,4,0,!1,!0);break;case"Y":e=Ws(1);break;case"YY":e=Ws(2,!0);break;case"YYY":e=Ws(3);break;case"YYYY":e=Ws(4);break;case"M":case"L":e=se(k.Month,1,1);break;case"MM":case"LL":e=se(k.Month,2,1);break;case"MMM":e=Q(B.Months,U.Abbreviated);break;case"MMMM":e=Q(B.Months,U.Wide);break;case"MMMMM":e=Q(B.Months,U.Narrow);break;case"LLL":e=Q(B.Months,U.Abbreviated,De.Standalone);break;case"LLLL":e=Q(B.Months,U.Wide,De.Standalone);break;case"LLLLL":e=Q(B.Months,U.Narrow,De.Standalone);break;case"w":e=el(1);break;case"ww":e=el(2);break;case"W":e=el(1,!0);break;case"d":e=se(k.Date,1);break;case"dd":e=se(k.Date,2);break;case"c":case"cc":e=se(k.Day,1);break;case"ccc":e=Q(B.Days,U.Abbreviated,De.Standalone);break;case"cccc":e=Q(B.Days,U.Wide,De.Standalone);break;case"ccccc":e=Q(B.Days,U.Narrow,De.Standalone);break;case"cccccc":e=Q(B.Days,U.Short,De.Standalone);break;case"E":case"EE":case"EEE":e=Q(B.Days,U.Abbreviated);break;case"EEEE":e=Q(B.Days,U.Wide);break;case"EEEEE":e=Q(B.Days,U.Narrow);break;case"EEEEEE":e=Q(B.Days,U.Short);break;case"a":case"aa":case"aaa":e=Q(B.DayPeriods,U.Abbreviated);break;case"aaaa":e=Q(B.DayPeriods,U.Wide);break;case"aaaaa":e=Q(B.DayPeriods,U.Narrow);break;case"b":case"bb":case"bbb":e=Q(B.DayPeriods,U.Abbreviated,De.Standalone,!0);break;case"bbbb":e=Q(B.DayPeriods,U.Wide,De.Standalone,!0);break;case"bbbbb":e=Q(B.DayPeriods,U.Narrow,De.Standalone,!0);break;case"B":case"BB":case"BBB":e=Q(B.DayPeriods,U.Abbreviated,De.Format,!0);break;case"BBBB":e=Q(B.DayPeriods,U.Wide,De.Format,!0);break;case"BBBBB":e=Q(B.DayPeriods,U.Narrow,De.Format,!0);break;case"h":e=se(k.Hours,1,-12);break;case"hh":e=se(k.Hours,2,-12);break;case"H":e=se(k.Hours,1);break;case"HH":e=se(k.Hours,2);break;case"m":e=se(k.Minutes,1);break;case"mm":e=se(k.Minutes,2);break;case"s":e=se(k.Seconds,1);break;case"ss":e=se(k.Seconds,2);break;case"S":e=se(k.FractionalSeconds,1);break;case"SS":e=se(k.FractionalSeconds,2);break;case"SSS":e=se(k.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":e=zs(wt.Short);break;case"ZZZZZ":e=zs(wt.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":e=zs(wt.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":e=zs(wt.Long);break;default:return null}return tl[t]=e,e}(l);c+=d?d(o,n,u):"''"===l?"'":l.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),c}function Hs(t,e,n){const r=new Date(0);return r.setFullYear(t,e,n),r.setHours(0,0,0),r}function Vt(t,e){const n=function wS(t){return Ie(t)[W.LocaleId]}(t);if(ui[n]=ui[n]||{},ui[n][e])return ui[n][e];let r="";switch(e){case"shortDate":r=js(t,xe.Short);break;case"mediumDate":r=js(t,xe.Medium);break;case"longDate":r=js(t,xe.Long);break;case"fullDate":r=js(t,xe.Full);break;case"shortTime":r=Vs(t,xe.Short);break;case"mediumTime":r=Vs(t,xe.Medium);break;case"longTime":r=Vs(t,xe.Long);break;case"fullTime":r=Vs(t,xe.Full);break;case"short":const o=Vt(t,"shortTime"),i=Vt(t,"shortDate");r=Us($s(t,xe.Short),[o,i]);break;case"medium":const s=Vt(t,"mediumTime"),a=Vt(t,"mediumDate");r=Us($s(t,xe.Medium),[s,a]);break;case"long":const u=Vt(t,"longTime"),c=Vt(t,"longDate");r=Us($s(t,xe.Long),[u,c]);break;case"full":const l=Vt(t,"fullTime"),d=Vt(t,"fullDate");r=Us($s(t,xe.Full),[l,d])}return r&&(ui[n][e]=r),r}function Us(t,e){return e&&(t=t.replace(/\{([^}]+)}/g,function(n,r){return null!=e&&r in e?e[r]:n})),t}function ut(t,e,n="-",r,o){let i="";(t<0||o&&t<=0)&&(o?t=1-t:(t=-t,i=n));let s=String(t);for(;s.length<e;)s="0"+s;return r&&(s=s.slice(s.length-e)),i+s}function se(t,e,n=0,r=!1,o=!1){return function(i,s){let a=function kS(t,e){switch(t){case k.FullYear:return e.getFullYear();case k.Month:return e.getMonth();case k.Date:return e.getDate();case k.Hours:return e.getHours();case k.Minutes:return e.getMinutes();case k.Seconds:return e.getSeconds();case k.FractionalSeconds:return e.getMilliseconds();case k.Day:return e.getDay();default:throw new Error(`Unknown DateType value "${t}".`)}}(t,i);if((n>0||a>-n)&&(a+=n),t===k.Hours)0===a&&-12===n&&(a=12);else if(t===k.FractionalSeconds)return function LS(t,e){return ut(t,3).substring(0,e)}(a,e);const u=Qe(s,re.MinusSign);return ut(a,e,u,r,o)}}function Q(t,e,n=De.Format,r=!1){return function(o,i){return function BS(t,e,n,r,o,i){switch(n){case B.Months:return function bS(t,e,n){const r=Ie(t),i=Ye([r[W.MonthsFormat],r[W.MonthsStandalone]],e);return Ye(i,n)}(e,o,r)[t.getMonth()];case B.Days:return function CS(t,e,n){const r=Ie(t),i=Ye([r[W.DaysFormat],r[W.DaysStandalone]],e);return Ye(i,n)}(e,o,r)[t.getDay()];case B.DayPeriods:const s=t.getHours(),a=t.getMinutes();if(i){const c=function AS(t){const e=Ie(t);return Ey(e),(e[W.ExtraData][2]||[]).map(r=>"string"==typeof r?Xc(r):[Xc(r[0]),Xc(r[1])])}(e),l=function TS(t,e,n){const r=Ie(t);Ey(r);const i=Ye([r[W.ExtraData][0],r[W.ExtraData][1]],e)||[];return Ye(i,n)||[]}(e,o,r),d=c.findIndex(f=>{if(Array.isArray(f)){const[h,p]=f,g=s>=h.hours&&a>=h.minutes,D=s<p.hours||s===p.hours&&a<p.minutes;if(h.hours<p.hours){if(g&&D)return!0}else if(g||D)return!0}else if(f.hours===s&&f.minutes===a)return!0;return!1});if(-1!==d)return l[d]}return function ES(t,e,n){const r=Ie(t),i=Ye([r[W.DayPeriodsFormat],r[W.DayPeriodsStandalone]],e);return Ye(i,n)}(e,o,r)[s<12?0:1];case B.Eras:return function IS(t,e){return Ye(Ie(t)[W.Eras],e)}(e,r)[t.getFullYear()<=0?0:1];default:throw new Error(`unexpected translation type ${n}`)}}(o,i,t,e,n,r)}}function zs(t){return function(e,n,r){const o=-1*r,i=Qe(n,re.MinusSign),s=o>0?Math.floor(o/60):Math.ceil(o/60);switch(t){case wt.Short:return(o>=0?"+":"")+ut(s,2,i)+ut(Math.abs(o%60),2,i);case wt.ShortGMT:return"GMT"+(o>=0?"+":"")+ut(s,1,i);case wt.Long:return"GMT"+(o>=0?"+":"")+ut(s,2,i)+":"+ut(Math.abs(o%60),2,i);case wt.Extended:return 0===r?"Z":(o>=0?"+":"")+ut(s,2,i)+":"+ut(Math.abs(o%60),2,i);default:throw new Error(`Unknown zone width "${t}"`)}}}!function(t){t[t.Short=0]="Short",t[t.ShortGMT=1]="ShortGMT",t[t.Long=2]="Long",t[t.Extended=3]="Extended"}(wt||(wt={})),function(t){t[t.FullYear=0]="FullYear",t[t.Month=1]="Month",t[t.Date=2]="Date",t[t.Hours=3]="Hours",t[t.Minutes=4]="Minutes",t[t.Seconds=5]="Seconds",t[t.FractionalSeconds=6]="FractionalSeconds",t[t.Day=7]="Day"}(k||(k={})),function(t){t[t.DayPeriods=0]="DayPeriods",t[t.Days=1]="Days",t[t.Months=2]="Months",t[t.Eras=3]="Eras"}(B||(B={}));function Cy(t){return Hs(t.getFullYear(),t.getMonth(),t.getDate()+(4-t.getDay()))}function el(t,e=!1){return function(n,r){let o;if(e){const i=new Date(n.getFullYear(),n.getMonth(),1).getDay()-1,s=n.getDate();o=1+Math.floor((s+i)/7)}else{const i=Cy(n),s=function VS(t){const e=Hs(t,0,1).getDay();return Hs(t,0,1+(e<=4?4:11)-e)}(i.getFullYear()),a=i.getTime()-s.getTime();o=1+Math.round(a/6048e5)}return ut(o,t,Qe(r,re.MinusSign))}}function Ws(t,e=!1){return function(n,r){return ut(Cy(n).getFullYear(),t,Qe(r,re.MinusSign),e)}}const tl={};function by(t,e){t=t.replace(/:/g,"");const n=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(n)?e:n}function Iy(t){return t instanceof Date&&!isNaN(t.valueOf())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const WS=/^(\d+)?\.((\d+)(-(\d+))?)?$/;function rl(t,e,n,r,o,i,s=!1){let a="",u=!1;if(isFinite(t)){let c=function eA(t){let r,o,i,s,a,e=Math.abs(t)+"",n=0;for((o=e.indexOf("."))>-1&&(e=e.replace(".","")),(i=e.search(/e/i))>0?(o<0&&(o=i),o+=+e.slice(i+1),e=e.substring(0,i)):o<0&&(o=e.length),i=0;"0"===e.charAt(i);i++);if(i===(a=e.length))r=[0],o=1;else{for(a--;"0"===e.charAt(a);)a--;for(o-=i,r=[],s=0;i<=a;i++,s++)r[s]=Number(e.charAt(i))}return o>22&&(r=r.splice(0,21),n=o-1,o=1),{digits:r,exponent:n,integerLen:o}}(t);s&&(c=function XS(t){if(0===t.digits[0])return t;const e=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(0===e?t.digits.push(0,0):1===e&&t.digits.push(0),t.integerLen+=2),t}(c));let l=e.minInt,d=e.minFrac,f=e.maxFrac;if(i){const w=i.match(WS);if(null===w)throw new Error(`${i} is not a valid digit info`);const m=w[1],C=w[3],L=w[5];null!=m&&(l=il(m)),null!=C&&(d=il(C)),null!=L?f=il(L):null!=C&&d>f&&(f=d)}!function tA(t,e,n){if(e>n)throw new Error(`The minimum number of digits after fraction (${e}) is higher than the maximum (${n}).`);let r=t.digits,o=r.length-t.integerLen;const i=Math.min(Math.max(e,o),n);let s=i+t.integerLen,a=r[s];if(s>0){r.splice(Math.max(t.integerLen,s));for(let d=s;d<r.length;d++)r[d]=0}else{o=Math.max(0,o),t.integerLen=1,r.length=Math.max(1,s=i+1),r[0]=0;for(let d=1;d<s;d++)r[d]=0}if(a>=5)if(s-1<0){for(let d=0;d>s;d--)r.unshift(0),t.integerLen++;r.unshift(1),t.integerLen++}else r[s-1]++;for(;o<Math.max(0,i);o++)r.push(0);let u=0!==i;const c=e+t.integerLen,l=r.reduceRight(function(d,f,h,p){return f+=d,p[h]=f<10?f:f-10,u&&(0===p[h]&&h>=c?p.pop():u=!1),f>=10?1:0},0);l&&(r.unshift(l),t.integerLen++)}(c,d,f);let h=c.digits,p=c.integerLen;const g=c.exponent;let D=[];for(u=h.every(w=>!w);p<l;p++)h.unshift(0);for(;p<0;p++)h.unshift(0);p>0?D=h.splice(p,h.length):(D=h,h=[0]);const v=[];for(h.length>=e.lgSize&&v.unshift(h.splice(-e.lgSize,h.length).join(""));h.length>e.gSize;)v.unshift(h.splice(-e.gSize,h.length).join(""));h.length&&v.unshift(h.join("")),a=v.join(Qe(n,r)),D.length&&(a+=Qe(n,o)+D.join("")),g&&(a+=Qe(n,re.Exponential)+"+"+g)}else a=Qe(n,re.Infinity);return a=t<0&&!u?e.negPre+a+e.negSuf:e.posPre+a+e.posSuf,a}function YS(t,e,n,r,o){const s=ol(Jc(e,ai.Currency),Qe(e,re.MinusSign));return s.minFrac=function OS(t){let e;const n=_y[t];return n&&(e=n[2]),"number"==typeof e?e:2}(r),s.maxFrac=s.minFrac,rl(t,s,e,re.CurrencyGroup,re.CurrencyDecimal,o).replace("\xa4",n).replace("\xa4","").trim()}function ol(t,e="-"){const n={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},r=t.split(";"),o=r[0],i=r[1],s=-1!==o.indexOf(".")?o.split("."):[o.substring(0,o.lastIndexOf("0")+1),o.substring(o.lastIndexOf("0")+1)],a=s[0],u=s[1]||"";n.posPre=a.substring(0,a.indexOf("#"));for(let l=0;l<u.length;l++){const d=u.charAt(l);"0"===d?n.minFrac=n.maxFrac=l+1:"#"===d?n.maxFrac=l+1:n.posSuf+=d}const c=a.split(",");if(n.gSize=c[1]?c[1].length:0,n.lgSize=c[2]||c[1]?(c[2]||c[1]).length:0,i){const l=o.length-n.posPre.length-n.posSuf.length,d=i.indexOf("#");n.negPre=i.substring(0,d).replace(/'/g,""),n.negSuf=i.slice(d+l).replace(/'/g,"")}else n.negPre=e+n.posPre,n.negSuf=n.posSuf;return n}function il(t){const e=parseInt(t);if(isNaN(e))throw new Error("Invalid integer literal when parsing "+t);return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Qn{}function Ay(t,e,n,r){let o=`=${t}`;if(e.indexOf(o)>-1||(o=n.getPluralCategory(t,r),e.indexOf(o)>-1))return o;if(e.indexOf("other")>-1)return"other";throw new Error(`No plural message found for value "${t}"`)}Qn.\u0275fac=function(e){return new(e||Qn)},Qn.\u0275prov=x({token:Qn,factory:function(e){let n=null;return e?n=new e:(r=b(Lt),n=new ro(r)),n;var r},providedIn:"root"});class ro extends Qn{constructor(e){super(),this.locale=e}getPluralCategory(e,n){switch(SS(n||this.locale)(e)){case Zn.Zero:return"zero";case Zn.One:return"one";case Zn.Two:return"two";case Zn.Few:return"few";case Zn.Many:return"many";default:return"other"}}}ro.\u0275fac=function(e){return new(e||ro)(b(Lt))},ro.\u0275prov=x({token:ro,factory:ro.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Yn{constructor(e,n,r,o){this._iterableDiffers=e,this._keyValueDiffers=n,this._ngEl=r,this._renderer=o,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(e){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof e?e.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(e){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof e?e.split(/\s+/):e,this._rawClass&&(Zo(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const e=this._iterableDiffer.diff(this._rawClass);e&&this._applyIterableChanges(e)}else if(this._keyValueDiffer){const e=this._keyValueDiffer.diff(this._rawClass);e&&this._applyKeyValueChanges(e)}}_applyKeyValueChanges(e){e.forEachAddedItem(n=>this._toggleClass(n.key,n.currentValue)),e.forEachChangedItem(n=>this._toggleClass(n.key,n.currentValue)),e.forEachRemovedItem(n=>{n.previousValue&&this._toggleClass(n.key,!1)})}_applyIterableChanges(e){e.forEachAddedItem(n=>{if("string"!=typeof n.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${G(n.item)}`);this._toggleClass(n.item,!0)}),e.forEachRemovedItem(n=>this._toggleClass(n.item,!1))}_applyClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(n=>this._toggleClass(n,!0)):Object.keys(e).forEach(n=>this._toggleClass(n,!!e[n])))}_removeClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(n=>this._toggleClass(n,!1)):Object.keys(e).forEach(n=>this._toggleClass(n,!1)))}_toggleClass(e,n){(e=e.trim())&&e.split(/\s+/g).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}}Yn.\u0275fac=function(e){return new(e||Yn)(P(at),P(Ze),P(ln),P(ls))},Yn.\u0275dir=Fe({type:Yn,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Kn{constructor(e){this._viewContainerRef=e,this.ngComponentOutlet=null}ngOnChanges(e){const{_viewContainerRef:n,ngComponentOutletNgModule:r,ngComponentOutletNgModuleFactory:o}=this;if(n.clear(),this._componentRef=void 0,this.ngComponentOutlet){const i=this.ngComponentOutletInjector||n.parentInjector;(e.ngComponentOutletNgModule||e.ngComponentOutletNgModuleFactory)&&(this._moduleRef&&this._moduleRef.destroy(),this._moduleRef=r?function D0(t,e){return new em(t,e??null)}(r,Ty(i)):o?o.create(Ty(i)):void 0),this._componentRef=n.createComponent(this.ngComponentOutlet,{index:n.length,injector:i,ngModuleRef:this._moduleRef,projectableNodes:this.ngComponentOutletContent})}}ngOnDestroy(){this._moduleRef&&this._moduleRef.destroy()}}function Ty(t){return t.get(Kr).injector}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Kn.\u0275fac=function(e){return new(e||Kn)(P(it))},Kn.\u0275dir=Fe({type:Kn,selectors:[["","ngComponentOutlet",""]],inputs:{ngComponentOutlet:"ngComponentOutlet",ngComponentOutletInjector:"ngComponentOutletInjector",ngComponentOutletContent:"ngComponentOutletContent",ngComponentOutletNgModule:"ngComponentOutletNgModule",ngComponentOutletNgModuleFactory:"ngComponentOutletNgModuleFactory"},standalone:!0,features:[Co]});class rA{constructor(e,n,r,o){this.$implicit=e,this.ngForOf=n,this.index=r,this.count=o}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}class Jn{constructor(e,n,r){this._viewContainer=e,this._template=n,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){const e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){const n=this._viewContainer;e.forEachOperation((r,o,i)=>{if(null==r.previousIndex)n.createEmbeddedView(this._template,new rA(r.item,this._ngForOf,-1,-1),null===i?void 0:i);else if(null==i)n.remove(null===o?void 0:o);else if(null!==o){const s=n.get(o);n.move(s,i),Ny(s,r)}});for(let r=0,o=n.length;r<o;r++){const s=n.get(r).context;s.index=r,s.count=o,s.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{Ny(n.get(r.currentIndex),r)})}static ngTemplateContextGuard(e,n){return!0}}function Ny(t,e){t.context.$implicit=e.item}Jn.\u0275fac=function(e){return new(e||Jn)(P(it),P(vt),P(at))},Jn.\u0275dir=Fe({type:Jn,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Xn{constructor(e,n){this._viewContainer=e,this._context=new iA,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Oy("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Oy("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,n){return!0}}Xn.\u0275fac=function(e){return new(e||Xn)(P(it),P(vt))},Xn.\u0275dir=Fe({type:Xn,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});class iA{constructor(){this.$implicit=null,this.ngIf=null}}function Oy(t,e){if(e&&!e.createEmbeddedView)throw new Error(`${t} must be a TemplateRef, but received '${G(e)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class sl{constructor(e,n){this._viewContainerRef=e,this._templateRef=n,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(e){e&&!this._created?this.create():!e&&this._created&&this.destroy()}}class $t{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(e){this._ngSwitch=e,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(e)}_matchCase(e){const n=e==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||n,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),n}_updateDefaultCases(e){if(this._defaultViews&&e!==this._defaultUsed){this._defaultUsed=e;for(let n=0;n<this._defaultViews.length;n++)this._defaultViews[n].enforceState(e)}}}$t.\u0275fac=function(e){return new(e||$t)},$t.\u0275dir=Fe({type:$t,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"},standalone:!0});class er{constructor(e,n,r){this.ngSwitch=r,r._addCase(),this._view=new sl(e,n)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}er.\u0275fac=function(e){return new(e||er)(P(it),P(vt),P($t,9))},er.\u0275dir=Fe({type:er,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"},standalone:!0});class tr{constructor(e,n,r){r._addDefault(new sl(e,n))}}tr.\u0275fac=function(e){return new(e||tr)(P(it),P(vt),P($t,9))},tr.\u0275dir=Fe({type:tr,selectors:[["","ngSwitchDefault",""]],standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class vn{constructor(e){this._localization=e,this._caseViews={}}set ngPlural(e){this._switchValue=e,this._updateView()}addCase(e,n){this._caseViews[e]=n}_updateView(){this._clearViews();const e=Object.keys(this._caseViews),n=Ay(this._switchValue,e,this._localization);this._activateView(this._caseViews[n])}_clearViews(){this._activeView&&this._activeView.destroy()}_activateView(e){e&&(this._activeView=e,this._activeView.create())}}vn.\u0275fac=function(e){return new(e||vn)(P(Qn))},vn.\u0275dir=Fe({type:vn,selectors:[["","ngPlural",""]],inputs:{ngPlural:"ngPlural"},standalone:!0});class nr{constructor(e,n,r,o){this.value=e;const i=!isNaN(Number(e));o.addCase(i?`=${e}`:e,new sl(r,n))}}nr.\u0275fac=function(e){return new(e||nr)(qa("ngPluralCase"),P(vt),P(it),P(vn,1))},nr.\u0275dir=Fe({type:nr,selectors:[["","ngPluralCase",""]],standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class rr{constructor(e,n,r){this._ngEl=e,this._differs=n,this._renderer=r,this._ngStyle=null,this._differ=null}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){const e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){const[r,o]=e.split("."),i=-1===r.indexOf("-")?void 0:xt.DashCase;null!=n?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${n}${o}`:n,i):this._renderer.removeStyle(this._ngEl.nativeElement,r,i)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}}rr.\u0275fac=function(e){return new(e||rr)(P(ln),P(Ze),P(ls))},rr.\u0275dir=Fe({type:rr,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class or{constructor(e){this._viewContainerRef=e,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(e){if(e.ngTemplateOutlet||e.ngTemplateOutletInjector){const n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),this.ngTemplateOutlet){const{ngTemplateOutlet:r,ngTemplateOutletContext:o,ngTemplateOutletInjector:i}=this;this._viewRef=n.createEmbeddedView(r,o,i?{injector:i}:void 0)}else this._viewRef=null}else this._viewRef&&e.ngTemplateOutletContext&&this.ngTemplateOutletContext&&(this._viewRef.context=this.ngTemplateOutletContext)}}or.\u0275fac=function(e){return new(e||or)(P(it))},or.\u0275dir=Fe({type:or,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[Co]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ct(t,e){return new E(2100,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const uA=new class aA{createSubscription(e,n){return e.then(n,r=>{throw r})}dispose(e){}},cA=new class sA{createSubscription(e,n){return e.subscribe({next:n,error:r=>{throw r}})}dispose(e){e.unsubscribe()}};class Ht{constructor(e){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){return this._obj?e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue:(e&&this._subscribe(e),this._latestValue)}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n))}_selectStrategy(e){if(pc(e))return uA;if(xp(e))return cA;throw ct()}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this._ref.markForCheck())}}Ht.\u0275fac=function(e){return new(e||Ht)(P(ay,16))},Ht.\u0275pipe=Ae({name:"async",type:Ht,pure:!1,standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ut{transform(e){if(null==e)return null;if("string"!=typeof e)throw ct();return e.toLowerCase()}}Ut.\u0275fac=function(e){return new(e||Ut)},Ut.\u0275pipe=Ae({name:"lowercase",type:Ut,pure:!0,standalone:!0});const lA=/(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g;class zt{transform(e){if(null==e)return null;if("string"!=typeof e)throw ct();return e.replace(lA,n=>n[0].toUpperCase()+n.slice(1).toLowerCase())}}zt.\u0275fac=function(e){return new(e||zt)},zt.\u0275pipe=Ae({name:"titlecase",type:zt,pure:!0,standalone:!0});class Gt{transform(e){if(null==e)return null;if("string"!=typeof e)throw ct();return e.toUpperCase()}}Gt.\u0275fac=function(e){return new(e||Gt)},Gt.\u0275pipe=Ae({name:"uppercase",type:Gt,pure:!0,standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const dA=new O("DATE_PIPE_DEFAULT_TIMEZONE");class Wt{constructor(e,n){this.locale=e,this.defaultTimezone=n}transform(e,n="mediumDate",r,o){if(null==e||""===e||e!=e)return null;try{return RS(e,n,o||this.locale,r??this.defaultTimezone??void 0)}catch(i){throw ct(0,i.message)}}}Wt.\u0275fac=function(e){return new(e||Wt)(P(Lt,16),P(dA,24))},Wt.\u0275pipe=Ae({name:"date",type:Wt,pure:!0,standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const fA=/#/g;class qt{constructor(e){this._localization=e}transform(e,n,r){if(null==e)return"";if("object"!=typeof n||null===n)throw ct();return n[Ay(e,Object.keys(n),this._localization,r)].replace(fA,e.toString())}}qt.\u0275fac=function(e){return new(e||qt)(P(Qn,16))},qt.\u0275pipe=Ae({name:"i18nPlural",type:qt,pure:!0,standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Zt{transform(e,n){if(null==e)return"";if("object"!=typeof n||"string"!=typeof e)throw ct();return n.hasOwnProperty(e)?n[e]:n.hasOwnProperty("other")?n.other:""}}Zt.\u0275fac=function(e){return new(e||Zt)},Zt.\u0275pipe=Ae({name:"i18nSelect",type:Zt,pure:!0,standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ir{transform(e){return JSON.stringify(e,null,2)}}ir.\u0275fac=function(e){return new(e||ir)},ir.\u0275pipe=Ae({name:"json",type:ir,pure:!1,standalone:!0});class sr{constructor(e){this.differs=e,this.keyValues=[],this.compareFn=Py}transform(e,n=Py){if(!e||!(e instanceof Map)&&"object"!=typeof e)return null;this.differ||(this.differ=this.differs.find(e).create());const r=this.differ.diff(e),o=n!==this.compareFn;return r&&(this.keyValues=[],r.forEachItem(i=>{this.keyValues.push(
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function hA(t,e){return{key:t,value:e}}(i.key,i.currentValue))})),(r||o)&&(this.keyValues.sort(n),this.compareFn=n),this.keyValues}}function Py(t,e){const n=t.key,r=e.key;if(n===r)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(null===n)return 1;if(null===r)return-1;if("string"==typeof n&&"string"==typeof r)return n<r?-1:1;if("number"==typeof n&&"number"==typeof r)return n-r;if("boolean"==typeof n&&"boolean"==typeof r)return n<r?-1:1;const o=String(n),i=String(r);return o==i?0:o<i?-1:1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */sr.\u0275fac=function(e){return new(e||sr)(P(Ze,16))},sr.\u0275pipe=Ae({name:"keyvalue",type:sr,pure:!1,standalone:!0});class Qt{constructor(e){this._locale=e}transform(e,n,r){if(!al(e))return null;r=r||this._locale;try{return function JS(t,e,n){return rl(t,ol(Jc(e,ai.Decimal),Qe(e,re.MinusSign)),e,re.Group,re.Decimal,n)}(ul(e),r,n)}catch(o){throw ct(0,o.message)}}}Qt.\u0275fac=function(e){return new(e||Qt)(P(Lt,16))},Qt.\u0275pipe=Ae({name:"number",type:Qt,pure:!0,standalone:!0});class Yt{constructor(e){this._locale=e}transform(e,n,r){if(!al(e))return null;r=r||this._locale;try{return function KS(t,e,n){return rl(t,ol(Jc(e,ai.Percent),Qe(e,re.MinusSign)),e,re.Group,re.Decimal,n,!0).replace(new RegExp("%","g"),Qe(e,re.PercentSign))}(ul(e),r,n)}catch(o){throw ct(0,o.message)}}}Yt.\u0275fac=function(e){return new(e||Yt)(P(Lt,16))},Yt.\u0275pipe=Ae({name:"percent",type:Yt,pure:!0,standalone:!0});class Kt{constructor(e,n="USD"){this._locale=e,this._defaultCurrencyCode=n}transform(e,n=this._defaultCurrencyCode,r="symbol",o,i){if(!al(e))return null;i=i||this._locale,"boolean"==typeof r&&(r=r?"symbol":"code");let s=n||this._defaultCurrencyCode;"code"!==r&&(s="symbol"===r||"symbol-narrow"===r?xS(s,"symbol"===r?"wide":"narrow",i):r);try{return YS(ul(e),i,s,n,o)}catch(a){throw ct(0,a.message)}}}function al(t){return!(null==t||""===t||t!=t)}function ul(t){if("string"==typeof t&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if("number"!=typeof t)throw new Error(`${t} is not a number`);return t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Kt.\u0275fac=function(e){return new(e||Kt)(P(Lt,16),P(RM,16))},Kt.\u0275pipe=Ae({name:"currency",type:Kt,pure:!0,standalone:!0});class Jt{transform(e,n,r){if(null==e)return null;if(!this.supports(e))throw ct();return e.slice(n,r)}supports(e){return"string"==typeof e||Array.isArray(e)}}Jt.\u0275fac=function(e){return new(e||Jt)},Jt.\u0275pipe=Ae({name:"slice",type:Jt,pure:!1,standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ar{}ar.\u0275fac=function(e){return new(e||ar)},ar.\u0275mod=Tn({type:ar,imports:[Yn,Kn,Jn,Xn,or,rr,$t,er,tr,vn,nr,Ht,Gt,Ut,ir,Jt,Qt,Yt,zt,Kt,Wt,qt,Zt,sr],exports:[Yn,Kn,Jn,Xn,or,rr,$t,er,tr,vn,nr,Ht,Gt,Ut,ir,Jt,Qt,Yt,zt,Kt,Wt,qt,Zt,sr]}),ar.\u0275inj=nn({});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Fy="browser";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
new Fu("14.3.0");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ry{}Ry.\u0275prov=x({token:Ry,providedIn:"root",factory:()=>new DA(b(J),window)});class DA{constructor(e,n){this.document=e,this.window=n,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(e){this.supportsScrolling()&&this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){if(!this.supportsScrolling())return;const n=function vA(t,e){const n=t.getElementById(e)||t.getElementsByName(e)[0];if(n)return n;if("function"==typeof t.createTreeWalker&&t.body&&(t.body.createShadowRoot||t.body.attachShadow)){const r=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT);let o=r.currentNode;for(;o;){const i=o.shadowRoot;if(i){const s=i.getElementById(e)||i.querySelector(`[name="${e}"]`);if(s)return s}o=r.nextNode()}}return null}(this.document,e);n&&(this.scrollToElement(n),n.focus())}setHistoryScrollRestoration(e){if(this.supportScrollRestoration()){const n=this.window.history;n&&n.scrollRestoration&&(n.scrollRestoration=e)}}scrollToElement(e){const n=e.getBoundingClientRect(),r=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,i=this.offset();this.window.scrollTo(r-i[0],o-i[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const e=Ly(this.window.history)||Ly(Object.getPrototypeOf(this.window.history));return!(!e||!e.writable&&!e.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function Ly(t){return Object.getOwnPropertyDescriptor(t,"scrollRestoration")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Zs(t,e){return cl(t)?new URL(t):new URL(t,e.location.href)}function cl(t){return/^https?:\/\//.test(t)}function ky(t){return cl(t)?new URL(t).hostname:t}function CA(t){return t.startsWith("/")?t.slice(1):t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const li=t=>t.src,By=new O("ImageLoader",{providedIn:"root",factory:()=>li});function Qs(t,e){return function(r){return function wA(t){if("string"!=typeof t||""===t.trim())return!1;try{return new URL(t),!0}catch{return!1}}(r)||function bA(t,e){throw new E(2959,!1)}(),r=function EA(t){return t.endsWith("/")?t.slice(0,-1):t}(r),[{provide:By,useValue:s=>(cl(s.src)&&function IA(t,e){throw new E(2959,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(0,s.src),t(r,{...s,src:CA(s.src)}))}]}}Qs(function MA(t,e){let n="format=auto";return e.width&&(n+=`,width=${e.width}`),`${t}/cdn-cgi/image/${n}/${e.src}`
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */});Qs(function xA(t,e){let n="f_auto,q_auto";return e.width&&(n+=`,w_${e.width}`),`${t}/image/upload/${n}/${e.src}`
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */});Qs(function FA(t,e){let n="tr:q-auto";return e.width&&(n+=`,w-${e.width}`),`${t}/${n}/${e.src}`
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */});Qs(function BA(t,e){const n=new URL(`${t}/${e.src}`);return n.searchParams.set("auto","format"),e.width&&n.searchParams.set("w",e.width.toString()),n.href
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */});function oe(t,e=!0){return`The NgOptimizedImage directive ${e?`(activated on an <img> element with the \`ngSrc="${t}"\`) `:""}has detected that`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function jy(t){throw new E(2958,`Unexpected invocation of the ${t} in the prod mode. Please make sure that the prod mode is enabled for production builds.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class di{constructor(){this.images=new Map,this.alreadyWarned=new Set,this.window=null,this.observer=null,jy("LCP checker");const e=fe(J).defaultView;typeof e<"u"&&typeof PerformanceObserver<"u"&&(this.window=e,this.observer=this.initPerformanceObserver())}initPerformanceObserver(){const e=new PerformanceObserver(n=>{const r=n.getEntries();if(0===r.length)return;const i=r[r.length-1].element?.src??"";i.startsWith("data:")||i.startsWith("blob:")||this.images.get(i)&&!this.alreadyWarned.has(i)&&(this.alreadyWarned.add(i),function jA(t){const e=oe(t);console.warn(Ne(2955,`${e} this image is the Largest Contentful Paint (LCP) element but was not marked "priority". This image should be marked "priority" in order to prioritize its loading. To fix this, add the "priority" attribute.`))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(i))});return e.observe({type:"largest-contentful-paint",buffered:!0}),e}registerImage(e,n){!this.observer||this.images.set(Zs(e,this.window).href,n)}unregisterImage(e){!this.observer||this.images.delete(Zs(e,this.window).href)}ngOnDestroy(){!this.observer||(this.observer.disconnect(),this.images.clear(),this.alreadyWarned.clear())}}di.\u0275fac=function(e){return new(e||di)},di.\u0275prov=x({token:di,factory:di.\u0275fac,providedIn:"root"});const VA=new Set(["localhost","127.0.0.1","0.0.0.0"]),$A=new O("PRECONNECT_CHECK_BLOCKLIST");class fi{constructor(){this.document=fe(J),this.preconnectLinks=null,this.alreadySeen=new Set,this.window=null,this.blocklist=new Set(VA),jy("preconnect link checker");const e=this.document.defaultView;typeof e<"u"&&(this.window=e);const n=fe($A,{optional:!0});n&&this.populateBlocklist(n)}populateBlocklist(e){Array.isArray(e)?Vy(e,n=>{this.blocklist.add(ky(n))}):this.blocklist.add(ky(e))}assertPreconnect(e,n){if(!this.window)return;const r=Zs(e,this.window);this.blocklist.has(r.hostname)||this.alreadySeen.has(r.origin)||(this.alreadySeen.add(r.origin),this.preconnectLinks||(this.preconnectLinks=this.queryPreconnectLinks()),this.preconnectLinks.has(r.origin)||console.warn(Ne(2956,`${oe(n)} there is no preconnect tag present for this image. Preconnecting to the origin(s) that serve priority images ensures that these images are delivered as soon as possible. To fix this, please add the following element into the <head> of the document:\n  <link rel="preconnect" href="${r.origin}">`)))}queryPreconnectLinks(){const e=new Set,r=Array.from(this.document.querySelectorAll("link[rel=preconnect]"));for(let o of r){const i=Zs(o.href,this.window);e.add(i.origin)}return e}ngOnDestroy(){this.preconnectLinks?.clear(),this.alreadySeen.clear()}}function Vy(t,e){for(let n of t)Array.isArray(n)?Vy(n,e):e(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */fi.\u0275fac=function(e){return new(e||fi)},fi.\u0275prov=x({token:fi,factory:fi.\u0275fac,providedIn:"root"});const HA=new O("NG_OPTIMIZED_PRELOADED_IMAGES",{providedIn:"root",factory:()=>new Set});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class oo{constructor(){this.preloadedImages=fe(HA),this.document=fe(J)}createPreloadLinkTag(e,n,r,o){if(this.preloadedImages.has(n))return;this.preloadedImages.add(n);const i=e.createElement("link");e.setAttribute(i,"as","image"),e.setAttribute(i,"href",n),e.setAttribute(i,"rel","preload"),e.setAttribute(i,"fetchpriority","high"),o&&e.setAttribute(i,"imageSizes",o),r&&e.setAttribute(i,"imageSrcset",r),e.appendChild(this.document.head,i)}}oo.\u0275fac=function(e){return new(e||oo)},oo.\u0275prov=x({token:oo,factory:oo.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Hy=/^((\s*\d+w\s*(,|$)){1,})$/,zA=[1,2],Gy={breakpoints:[16,32,48,64,96,128,256,384,640,750,828,1080,1200,1920,2048,3840]},QA=new O("ImageConfig",{providedIn:"root",factory:()=>Gy});class Ys{constructor(){this.imageLoader=fe(By),this.config=function YA(t){let e={};return t.breakpoints&&(e.breakpoints=t.breakpoints.sort((n,r)=>n-r)),Object.assign({},Gy,t,e)}(fe(QA)),this.renderer=fe(ls),this.imgElement=fe(ln).nativeElement,this.injector=fe(be),this.isServer=function yA(t){return"server"===t}(fe(Vc)),this.preloadLinkChecker=fe(oo),this.lcpObserver=null,this._renderedSrc=null,this._priority=!1,this._disableOptimizedSrcset=!1,this._fill=!1}set width(e){this._width=Wy(e)}get width(){return this._width}set height(e){this._height=Wy(e)}get height(){return this._height}set priority(e){this._priority=dl(e)}get priority(){return this._priority}set disableOptimizedSrcset(e){this._disableOptimizedSrcset=dl(e)}get disableOptimizedSrcset(){return this._disableOptimizedSrcset}set fill(e){this._fill=dl(e)}get fill(){return this._fill}ngOnInit(){this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||(this.sizes="100vw"):(this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString())),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("ng-img","true");const e=this.getRewrittenSrc();let n;this.setHostAttribute("src",e),this.sizes&&this.setHostAttribute("sizes",this.sizes),this.ngSrcset?n=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(n=this.getAutomaticSrcset()),n&&this.setHostAttribute("srcset",n),this.isServer&&this.priority&&this.preloadLinkChecker.createPreloadLinkTag(this.renderer,e,n,this.sizes)}ngOnChanges(e){}callImageLoader(e){let n=e;return this.loaderParams&&(n.loaderParams=this.loaderParams),this.imageLoader(n)}getLoadingBehavior(){return this.priority||void 0===this.loading?this.priority?"eager":"lazy":this.loading}getFetchPriority(){return this.priority?"high":"auto"}getRewrittenSrc(){if(!this._renderedSrc){const e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){const e=Hy.test(this.ngSrcset);return this.ngSrcset.split(",").filter(r=>""!==r).map(r=>{r=r.trim();const o=e?parseFloat(r):parseFloat(r)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:o})} ${r}`}).join(", ")}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){const{breakpoints:e}=this.config;let n=e;return"100vw"===this.sizes?.trim()&&(n=e.filter(o=>o>=640)),n.map(o=>`${this.callImageLoader({src:this.ngSrc,width:o})} ${o}w`).join(", ")}getFixedSrcset(){return zA.map(n=>`${this.callImageLoader({src:this.ngSrc,width:this.width*n})} ${n}x`).join(", ")}shouldGenerateAutomaticSrcset(){return!this._disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==li&&!(this.width>1920||this.height>1080)}ngOnDestroy(){}setHostAttribute(e,n){this.renderer.setAttribute(this.imgElement,e,n)}}function Wy(t){return"string"==typeof t?parseInt(t,10):t}function dl(t){return null!=t&&"false"!=`${t}`}Ys.\u0275fac=function(e){return new(e||Ys)},Ys.\u0275dir=Fe({type:Ys,selectors:[["img","ngSrc",""]],hostVars:8,hostBindings:function(e,n){2&e&&mc("position",n.fill?"absolute":null)("width",n.fill?"100%":null)("height",n.fill?"100%":null)("inset",n.fill?"0px":null)},inputs:{ngSrc:"ngSrc",ngSrcset:"ngSrcset",sizes:"sizes",width:"width",height:"height",loading:"loading",priority:"priority",loaderParams:"loaderParams",disableOptimizedSrcset:"disableOptimizedSrcset",fill:"fill",src:"src",srcset:"srcset"},standalone:!0,features:[Co]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class fl extends
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.3.0
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class eT extends class mS{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function gS(t){Bs||(Bs=t)}(new fl)}onAndCancel(e,n,r){return e.addEventListener(n,r,!1),()=>{e.removeEventListener(n,r,!1)}}dispatchEvent(e,n){e.dispatchEvent(n)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,n){return(n=n||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,n){return"window"===n?window:"document"===n?e:"body"===n?e.body:null}getBaseHref(e){const n=function tT(){return pi=pi||document.querySelector("base"),pi?pi.getAttribute("href"):null}();return null==n?null:function nT(t){Ks=Ks||document.createElement("a"),Ks.setAttribute("href",t);const e=Ks.pathname;return"/"===e.charAt(0)?e:`/${e}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}resetBaseElement(){pi=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return function nA(t,e){e=encodeURIComponent(e);for(const n of t.split(";")){const r=n.indexOf("="),[o,i]=-1==r?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===e)return decodeURIComponent(i)}return null}(document.cookie,e)}}let Ks,pi=null;const qy=new O("TRANSITION_ID");const oT=[{provide:Vm,useFactory:function rT(t,e,n){return()=>{n.get(Rt).donePromise.then(()=>{const r=Bt(),o=e.querySelectorAll(`style[ng-transition="${t}"]`);for(let i=0;i<o.length;i++)r.remove(o[i])})}},deps:[qy,J,be],multi:!0}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class io{build(){return new XMLHttpRequest}}io.\u0275fac=function(e){return new(e||io)},io.\u0275prov=x({token:io,factory:io.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const gi=new O("EventManagerPlugins");class Xt{constructor(e,n){this._zone=n,this._eventNameToPlugin=new Map,e.forEach(r=>r.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,n,r){return this._findPluginFor(n).addEventListener(e,n,r)}addGlobalEventListener(e,n,r){return this._findPluginFor(n).addGlobalEventListener(e,n,r)}getZone(){return this._zone}_findPluginFor(e){const n=this._eventNameToPlugin.get(e);if(n)return n;const r=this._plugins;for(let o=0;o<r.length;o++){const i=r[o];if(i.supports(e))return this._eventNameToPlugin.set(e,i),i}throw new Error(`No event manager plugin found for event ${e}`)}}Xt.\u0275fac=function(e){return new(e||Xt)(b(gi),b(ye))},Xt.\u0275prov=x({token:Xt,factory:Xt.\u0275fac});class hl{constructor(e){this._doc=e}addGlobalEventListener(e,n,r){const o=Bt().getGlobalEventTarget(this._doc,e);if(!o)throw new Error(`Unsupported event target ${o} for event ${n}`);return this.addEventListener(o,n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ur{constructor(){this._stylesSet=new Set}addStyles(e){const n=new Set;e.forEach(r=>{this._stylesSet.has(r)||(this._stylesSet.add(r),n.add(r))}),this.onStylesAdded(n)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}ur.\u0275fac=function(e){return new(e||ur)},ur.\u0275prov=x({token:ur,factory:ur.\u0275fac});class Et extends ur{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,n,r){e.forEach(o=>{const i=this._doc.createElement("style");i.textContent=o,r.push(n.appendChild(i))})}addHost(e){const n=[];this._addStylesToHost(this._stylesSet,e,n),this._hostNodes.set(e,n)}removeHost(e){const n=this._hostNodes.get(e);n&&n.forEach(Zy),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((n,r)=>{this._addStylesToHost(e,r,n)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(Zy))}}function Zy(t){Bt().remove(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Et.\u0275fac=function(e){return new(e||Et)(b(J))},Et.\u0275prov=x({token:Et,factory:Et.\u0275fac});const pl={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},gl=/%COMP%/g,sT="_nghost-%COMP%",aT="_ngcontent-%COMP%";function Js(t,e,n){for(let r=0;r<e.length;r++){let o=e[r];Array.isArray(o)?Js(t,o,n):(o=o.replace(gl,t),n.push(o))}return n}function Ky(t){return e=>{if("__ngUnwrap__"===e)return t;!1===t(e)&&(e.preventDefault(),e.returnValue=!1)}}class _n{constructor(e,n,r){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.rendererByCompId=new Map,this.defaultRenderer=new ml(e)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;switch(n.encapsulation){case It.Emulated:{let r=this.rendererByCompId.get(n.id);return r||(r=new dT(this.eventManager,this.sharedStylesHost,n,this.appId),this.rendererByCompId.set(n.id,r)),r.applyToHost(e),r}case 1:case It.ShadowDom:return new fT(this.eventManager,this.sharedStylesHost,e,n);default:if(!this.rendererByCompId.has(n.id)){const r=Js(n.id,n.styles,[]);this.sharedStylesHost.addStyles(r),this.rendererByCompId.set(n.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}_n.\u0275fac=function(e){return new(e||_n)(b(Xt),b(Et),b(eo))},_n.\u0275prov=x({token:_n,factory:_n.\u0275fac});class ml{constructor(e){this.eventManager=e,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(e,n){return n?document.createElementNS(pl[n]||n,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,n){(Xy(e)?e.content:e).appendChild(n)}insertBefore(e,n,r){e&&(Xy(e)?e.content:e).insertBefore(n,r)}removeChild(e,n){e&&e.removeChild(n)}selectRootElement(e,n){let r="string"==typeof e?document.querySelector(e):e;if(!r)throw new Error(`The selector "${e}" did not match any elements`);return n||(r.textContent=""),r}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,n,r,o){if(o){n=o+":"+n;const i=pl[o];i?e.setAttributeNS(i,n,r):e.setAttribute(n,r)}else e.setAttribute(n,r)}removeAttribute(e,n,r){if(r){const o=pl[r];o?e.removeAttributeNS(o,n):e.removeAttribute(`${r}:${n}`)}else e.removeAttribute(n)}addClass(e,n){e.classList.add(n)}removeClass(e,n){e.classList.remove(n)}setStyle(e,n,r,o){o&(xt.DashCase|xt.Important)?e.style.setProperty(n,r,o&xt.Important?"important":""):e.style[n]=r}removeStyle(e,n,r){r&xt.DashCase?e.style.removeProperty(n):e.style[n]=""}setProperty(e,n,r){e[n]=r}setValue(e,n){e.nodeValue=n}listen(e,n,r){return"string"==typeof e?this.eventManager.addGlobalEventListener(e,n,Ky(r)):this.eventManager.addEventListener(e,n,Ky(r))}}"@".charCodeAt(0);function Xy(t){return"TEMPLATE"===t.tagName&&void 0!==t.content}class dT extends ml{constructor(e,n,r,o){super(e),this.component=r;const i=Js(o+"-"+r.id,r.styles,[]);n.addStyles(i),this.contentAttr=function uT(t){return aT.replace(gl,t)}(o+"-"+r.id),this.hostAttr=function cT(t){return sT.replace(gl,t)}(o+"-"+r.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,n){const r=super.createElement(e,n);return super.setAttribute(r,this.contentAttr,""),r}}class fT extends ml{constructor(e,n,r,o){super(e),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const i=Js(o.id,o.styles,[]);for(let s=0;s<i.length;s++){const a=document.createElement("style");a.textContent=i[s],this.shadowRoot.appendChild(a)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,n){return super.appendChild(this.nodeOrShadowRoot(e),n)}insertBefore(e,n,r){return super.insertBefore(this.nodeOrShadowRoot(e),n,r)}removeChild(e,n){return super.removeChild(this.nodeOrShadowRoot(e),n)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class so extends hl{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r){return e.addEventListener(n,r,!1),()=>this.removeEventListener(e,n,r)}removeEventListener(e,n,r){return e.removeEventListener(n,r)}}so.\u0275fac=function(e){return new(e||so)(b(J))},so.\u0275prov=x({token:so,factory:so.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const eD=["alt","control","meta","shift"],hT={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},pT={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey};class Ke extends hl{constructor(e){super(e)}supports(e){return null!=Ke.parseEventName(e)}addEventListener(e,n,r){const o=Ke.parseEventName(n),i=Ke.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Bt().onAndCancel(e,o.domEventName,i))}static parseEventName(e){const n=e.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const o=Ke._normalizeKey(n.pop());let i="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),i="code."),eD.forEach(u=>{const c=n.indexOf(u);c>-1&&(n.splice(c,1),i+=u+".")}),i+=o,0!=n.length||0===o.length)return null;const a={};return a.domEventName=r,a.fullKey=i,a}static matchEventFullKeyCode(e,n){let r=hT[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(r=e.code,o="code."),!(null==r||!r)&&(r=r.toLowerCase()," "===r?r="space":"."===r&&(r="dot"),eD.forEach(i=>{if(i!==r){(0,pT[i])(e)&&(o+=i+".")}}),o+=r,o===n)}static eventCallback(e,n,r){return o=>{Ke.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){return"esc"===e?"escape":e}}Ke.\u0275fac=function(e){return new(e||Ke)(b(J))},Ke.\u0275prov=x({token:Ke,factory:Ke.\u0275fac});const nD=[{provide:Vc,useValue:Fy},{provide:Hm,useValue:function gT(){fl.makeCurrent()},multi:!0},{provide:J,useFactory:function yT(){return function Lw(t){Eu=t}(document),document},deps:[]}],DT=Km(hS,"browser",nD),rD=new O(""),oD=[{provide:Fs,useClass:class iT{addToWindow(e){q.getAngularTestability=(r,o=!0)=>{const i=e.findTestabilityInTree(r,o);if(null==i)throw new Error("Could not find testability for element.");return i},q.getAllAngularTestabilities=()=>e.getAllTestabilities(),q.getAllAngularRootElements=()=>e.getAllRootElements();q.frameworkStabilizers||(q.frameworkStabilizers=[]),q.frameworkStabilizers.push(r=>{const o=q.getAllAngularTestabilities();let i=o.length,s=!1;const a=function(u){s=s||u,i--,0==i&&r(s)};o.forEach(function(u){u.whenStable(a)})})}findTestabilityInTree(e,n,r){if(null==n)return null;return e.getTestability(n)??(r?Bt().isShadowRoot(n)?this.findTestabilityInTree(e,n.host,!0):this.findTestabilityInTree(e,n.parentElement,!0):null)}},deps:[]},{provide:Zm,useClass:pn,deps:[ye,gn,Fs]},{provide:pn,useClass:pn,deps:[ye,gn,Fs]}],iD=[{provide:Tu,useValue:"root"},{provide:Fr,useFactory:function mT(){return new Fr},deps:[]},{provide:gi,useClass:so,multi:!0,deps:[J,ye,Vc]},{provide:gi,useClass:Ke,multi:!0,deps:[J]},{provide:_n,useClass:_n,deps:[Xt,Et,eo]},{provide:wh,useExisting:_n},{provide:ur,useExisting:Et},{provide:Et,useClass:Et,deps:[J]},{provide:Xt,useClass:Xt,deps:[gi,ye]},{provide:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class _A{},useClass:io,deps:[]},[]];class wn{constructor(e){false}static withServerTransition(e){return{ngModule:wn,providers:[{provide:eo,useValue:e.appId},{provide:qy,useExisting:eo},oT]}}}wn.\u0275fac=function(e){return new(e||wn)(b(rD,12))},wn.\u0275mod=Tn({type:wn,exports:[ar,Wn]}),wn.\u0275inj=nn({providers:[...iD,...oD],imports:[ar,Wn]});class mi{constructor(e){this._doc=e,this._dom=Bt()}addTag(e,n=!1){return e?this._getOrCreateElement(e,n):null}addTags(e,n=!1){return e?e.reduce((r,o)=>(o&&r.push(this._getOrCreateElement(o,n)),r),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];const n=this._doc.querySelectorAll(`meta[${e}]`);return n?[].slice.call(n):[]}updateTag(e,n){if(!e)return null;n=n||this._parseSelector(e);const r=this.getTag(n);return r?this._setMetaElementAttributes(e,r):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,n=!1){if(!n){const i=this._parseSelector(e),s=this.getTags(i).filter(a=>this._containsAttributes(e,a))[0];if(void 0!==s)return s}const r=this._dom.createElement("meta");return this._setMetaElementAttributes(e,r),this._doc.getElementsByTagName("head")[0].appendChild(r),r}_setMetaElementAttributes(e,n){return Object.keys(e).forEach(r=>n.setAttribute(this._getMetaKeyMap(r),e[r])),n}_parseSelector(e){const n=e.name?"name":"property";return`${n}="${e[n]}"`}_containsAttributes(e,n){return Object.keys(e).every(r=>n.getAttribute(this._getMetaKeyMap(r))===e[r])}_getMetaKeyMap(e){return _T[e]||e}}mi.\u0275fac=function(e){return new(e||mi)(b(J))},mi.\u0275prov=x({token:mi,factory:function(e){let n=null;return n=e?new e:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function vT(){return new mi(b(J))}(),n},providedIn:"root"});const _T={httpEquiv:"http-equiv"};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class yi{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}}yi.\u0275fac=function(e){return new(e||yi)(b(J))},yi.\u0275prov=x({token:yi,factory:function(e){let n=null;return n=e?new e:function wT(){return new yi(b(J))}(),n},providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
typeof window<"u"&&window;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Di{constructor(){this.store={},this.onSerializeCallbacks={}}get(e,n){return void 0!==this.store[e]?this.store[e]:n}set(e,n){this.store[e]=n}remove(e){delete this.store[e]}hasKey(e){return this.store.hasOwnProperty(e)}get isEmpty(){return 0===Object.keys(this.store).length}onSerialize(e,n){this.onSerializeCallbacks[e]=n}toJson(){for(const e in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(e))try{this.store[e]=this.onSerializeCallbacks[e]()}catch(n){console.warn("Exception in onSerialize callback: ",n)}return JSON.stringify(this.store)}}Di.\u0275fac=function(e){return new(e||Di)},Di.\u0275prov=x({token:Di,factory:function(){return(()=>{const t=fe(J),e=fe(eo),n=new Di;return n.store=function ST(t,e){const n=t.getElementById(e+"-state");let r={};if(n&&n.textContent)try{r=JSON.parse(function MT(t){const e={"&a;":"&","&q;":'"',"&s;":"'","&l;":"<","&g;":">"};return t.replace(/&[^;]+;/g,n=>e[n])}(n.textContent))}catch(o){console.warn("Exception while restoring TransferState for app "+e,o)}return r}(t,e),n})()},providedIn:"root"});class vi{}vi.\u0275fac=function(e){return new(e||vi)},vi.\u0275mod=Tn({type:vi}),vi.\u0275inj=nn({});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const TT={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},vl=new O("HammerGestureConfig"),uD=new O("HammerLoader");class ao{constructor(){this.events=[],this.overrides={}}buildHammer(e){const n=new Hammer(e,this.options);n.get("pinch").set({enable:!0}),n.get("rotate").set({enable:!0});for(const r in this.overrides)n.get(r).set(this.overrides[r]);return n}}ao.\u0275fac=function(e){return new(e||ao)},ao.\u0275prov=x({token:ao,factory:ao.\u0275fac});class uo extends hl{constructor(e,n,r,o){super(e),this._config=n,this.console=r,this.loader=o,this._loaderPromise=null}supports(e){return!(!TT.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e)||!window.Hammer&&!this.loader)}addEventListener(e,n,r){const o=this.manager.getZone();if(n=n.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||o.runOutsideAngular(()=>this.loader());let i=!1,s=()=>{i=!0};return o.runOutsideAngular(()=>this._loaderPromise.then(()=>{window.Hammer?i||(s=this.addEventListener(e,n,r)):s=()=>{}}).catch(()=>{s=()=>{}})),()=>{s()}}return o.runOutsideAngular(()=>{const i=this._config.buildHammer(e),s=function(a){o.runGuarded(function(){r(a)})};return i.on(n,s),()=>{i.off(n,s),"function"==typeof i.destroy&&i.destroy()}})}isCustomEvent(e){return this._config.events.indexOf(e)>-1}}uo.\u0275fac=function(e){return new(e||uo)(b(J),b(vl),b(Un),b(uD,8))},uo.\u0275prov=x({token:uo,factory:uo.\u0275fac});class _i{}_i.\u0275fac=function(e){return new(e||_i)},_i.\u0275mod=Tn({type:_i}),_i.\u0275inj=nn({providers:[{provide:gi,useClass:uo,multi:!0,deps:[J,vl,Un,[new Fo,uD]]},{provide:vl,useClass:ao,deps:[]}]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class co{}co.\u0275fac=function(e){return new(e||co)},co.\u0275prov=x({token:co,factory:function(e){let n=null;return n=e?new(e||co):b(lo),n},providedIn:"root"});class lo extends co{constructor(e){super(),this._doc=e}sanitize(e,n){if(null==n)return null;switch(e){case He.NONE:return n;case He.HTML:return ht(n,"HTML")?$e(n):sh(this._doc,String(n)).toString();case He.STYLE:return ht(n,"Style")?$e(n):n;case He.SCRIPT:if(ht(n,"Script"))return $e(n);throw new Error("unsafe value used in a script context");case He.URL:return ht(n,"URL")?$e(n):ss(String(n));case He.RESOURCE_URL:if(ht(n,"ResourceURL"))return $e(n);throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");default:throw new Error(`Unexpected SecurityContext ${e} (see https://g.co/ng/security#xss)`)}}bypassSecurityTrustHtml(e){return function Uw(t){return new kw(t)}(e)}bypassSecurityTrustStyle(e){return function zw(t){return new Bw(t)}(e)}bypassSecurityTrustScript(e){return function Gw(t){return new jw(t)}(e)}bypassSecurityTrustUrl(e){return function Ww(t){return new Vw(t)}(e)}bypassSecurityTrustResourceUrl(e){return function qw(t){return new $w(t)}(e)}}lo.\u0275fac=function(e){return new(e||lo)(b(J))},lo.\u0275prov=x({token:lo,factory:function(e){let n=null;return n=e?new e:function xT(t){return new lo(t.get(J))}(b(be)),n},providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
new Fu("14.3.0");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class wi{constructor(){this.title="ulti-project"}}wi.\u0275fac=function(e){return new(e||wi)},wi.\u0275cmp=ba({type:wi,selectors:[["app-root"]],decls:2,vars:0,template:function(e,n){1&e&&(Cs(0,"div"),ig(1," Hello Ultimate Angular 2!\n"),bs())},styles:["[_nghost-%COMP%]{width:100%}.wrapper[_ngcontent-%COMP%]{max-width:800px;width:96%;margin:0 auto}"]});class NT extends go{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){const n=super._subscribe(e);return!n.closed&&e.next(this._value),n}getValue(){const{hasError:e,thrownError:n,_value:r}=this;if(e)throw n;return this._throwIfClosed(),r}next(e){super.next(this._value=e)}}function PT(t,e){return t===e}const RT={playlist:void 0};function cD(t,e,n,r,o,i,s){try{var a=t[i](s),u=a.value}catch(c){return void n(c)}a.done?e(u):Promise.resolve(u).then(r,o)}function Ct(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function s(u){cD(i,r,o,s,a,"next",u)}function a(u){cD(i,r,o,s,a,"throw",u)}s(void 0)})}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const lD=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=63&o|128):55296==(64512&o)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&t.charCodeAt(++r)),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=63&o|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=63&o|128)}return e},dD={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<t.length;o+=3){const i=t[o],s=o+1<t.length,a=s?t[o+1]:0,u=o+2<t.length,c=u?t[o+2]:0,l=i>>2,d=(3&i)<<4|a>>4;let f=(15&a)<<2|c>>6,h=63&c;u||(h=64,s||(f=64)),r.push(n[l],n[d],n[f],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lD(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const o=t[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=t[n++];e[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const u=((7&o)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(1023&u))}else{const i=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<t.length;){const i=n[t.charAt(o++)],a=o<t.length?n[t.charAt(o)]:0;++o;const c=o<t.length?n[t.charAt(o)]:64;++o;const d=o<t.length?n[t.charAt(o)]:64;if(++o,null==i||null==a||null==c||null==d)throw new VT;const f=i<<2|a>>4;if(r.push(f),64!==c){const h=a<<4&240|c>>2;if(r.push(h),64!==d){const p=c<<6&192|d;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class VT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xs=function(t){return function(t){const e=lD(t);return dD.encodeByteArray(e,!0)}(t).replace(/\./g,"")},wl=function(t){try{return dD.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const zT=()=>
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function UT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ea=()=>{try{return zT()||(()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||(()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wl(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}};
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class hD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(n):e(n,r))}}}
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Ei extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,Ei.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pD.prototype.create)}}class pD{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,i=this.errors[e],s=i?function XT(t,e){return t.replace(ex,(n,r)=>{const o=e[r];return null!=o?String(o):`<${r}?>`})}(i,r):"Error",a=`${this.serviceName}: ${s} (${o}).`;return new Ei(o,a,r)}}const ex=/\{\$([^}]+)}/g;
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function El(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const i=t[o],s=e[o];if(mD(i)&&mD(s)){if(!El(i,s))return!1}else if(i!==s)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function mD(t){return null!==t&&"object"==typeof t}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class ra{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const cr="[DEFAULT]";
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class ux{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hD;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),o=null!==(n=e?.optional)&&void 0!==n&&n;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(o)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(o)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function lx(t){return"EAGER"===t.instantiationMode}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(e))try{this.getOrInitializeService({instanceIdentifier:cr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:o});r.resolve(i)}catch{}}}}clearInstance(e=cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){var e=this;return Ct(function*(){const n=Array.from(e.instances.values());yield Promise.all([...n.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...n.filter(r=>"_delete"in r).map(r=>r._delete())])})()}isComponentSet(){return null!=this.component}isInitialized(e=cr){return this.instances.has(e)}getOptions(e=cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,s]of this.instancesDeferred.entries()){r===this.normalizeInstanceIdentifier(i)&&s.resolve(o)}return o}onInit(e,n){var r;const o=this.normalizeInstanceIdentifier(n),i=null!==(r=this.onInitCallbacks.get(o))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(o,i);const s=this.instances.get(o);return s&&e(s,o),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cr){return this.component?this.component.multipleInstances?e:cr:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function cx(t){return t===cr?void 0:t}class dx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ux(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const Il=[];var Y;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(Y||(Y={}));const yD={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},fx=Y.INFO,hx={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},px=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),o=hx[e];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[o](`[${r}]  ${t.name}:`,...n)};let DD,vD;const _D=new WeakMap,Ml=new WeakMap,wD=new WeakMap,Sl=new WeakMap,Al=new WeakMap;let Tl={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return Ml.get(t);if("objectStoreNames"===e)return t.objectStoreNames||wD.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function Ex(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?function Dx(){return vD||(vD=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}().includes(t)?function(...e){return t.apply(xl(this),e),Cn(_D.get(this))}:function(...e){return Cn(t.apply(xl(this),e))}:function(e,...n){const r=t.call(xl(this),e,...n);return wD.set(r,e.sort?e.sort():[e]),Cn(r)}}function Cx(t){return"function"==typeof t?Ex(t):(t instanceof IDBTransaction&&function _x(t){if(Ml.has(t))return;const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{n(),o()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});Ml.set(t,e)}(t),((t,e)=>e.some(n=>t instanceof n))(t,function yx(){return DD||(DD=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}())?new Proxy(t,Tl):t)}function Cn(t){if(t instanceof IDBRequest)return function vx(t){const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{n(Cn(t.result)),o()},s=()=>{r(t.error),o()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&_D.set(n,t)}).catch(()=>{}),Al.set(e,t),e}(t);if(Sl.has(t))return Sl.get(t);const e=Cx(t);return e!==t&&(Sl.set(t,e),Al.set(e,t)),e}const xl=t=>Al.get(t);const Ix=["get","getKey","getAll","getAllKeys","count"],Mx=["put","add","delete","clear"],Nl=new Map;function ED(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Nl.get(e))return Nl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=Mx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!Ix.includes(n))return;const i=function(){var s=Ct(function*(a,...u){const c=this.transaction(a,o?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(u.shift())),(yield Promise.all([l[n](...u),o&&c.done]))[0]});return function(u){return s.apply(this,arguments)}}();return Nl.set(e,i),i}!function wx(t){Tl=t(Tl)}(t=>({...t,get:(e,n,r)=>ED(e,n)||t.get(e,n,r),has:(e,n)=>!!ED(e,n)||t.has(e,n)}));
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class Sx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(function Ax(t){return"VERSION"===t.getComponent()?.type}(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}return null}).filter(n=>n).join(" ")}}const Ol="@firebase/app",lr=new class gx{constructor(e){this.name=e,this._logLevel=fx,this._logHandler=px,this._userLogHandler=null,Il.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?yD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}("@firebase/app"),oa="[DEFAULT]",Xx={[Ol]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},dr=new Map,ia=new Map;
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function eN(t,e){try{t.container.addComponent(e)}catch(n){lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pl(t){const e=t.name;if(ia.has(e))return lr.debug(`There were multiple attempts to register component ${e}.`),!1;ia.set(e,t);for(const n of dr.values())eN(n,t);return!0}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const en=new pD("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class rN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ra("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function bD(t,e={}){let n=t;"object"!=typeof e&&(e={name:e});const r=Object.assign({name:oa,automaticDataCollectionEnabled:!1},e),o=r.name;if("string"!=typeof o||!o)throw en.create("bad-app-name",{appName:String(o)});if(n||(n=(()=>{var t;return null===(t=ea())||void 0===t?void 0:t.config})()),!n)throw en.create("no-options");const i=dr.get(o);if(i){if(El(n,i.options)&&El(r,i.config))return i;throw en.create("duplicate-app",{appName:o})}const s=new dx(o);for(const u of ia.values())s.addComponent(u);const a=new rN(n,r,s);return dr.set(o,a),a}function sa(t,e,n){var r;let o=null!==(r=Xx[t])&&void 0!==r?r:t;n&&(o+=`-${n}`);const i=o.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const a=[`Unable to register library "${o}" with version "${e}":`];return i&&a.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void lr.warn(a.join(" "))}Pl(new ra(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const Ci="firebase-heartbeat-store";let Rl=null;function ID(){return Rl||(Rl=function bx(t,e,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(t,e),a=Cn(s);return r&&s.addEventListener("upgradeneeded",u=>{r(Cn(s.result),u.oldVersion,u.newVersion,Cn(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(u=>{i&&u.addEventListener("close",()=>i()),o&&u.addEventListener("versionchange",()=>o())}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Ci)}}).catch(t=>{throw en.create("idb-open",{originalErrorMessage:t.message})})),Rl}function Ll(){return Ll=Ct(function*(t){try{return(yield ID()).transaction(Ci).objectStore(Ci).get(SD(t))}catch(e){if(e instanceof Ei)lr.warn(e.message);else{const n=en.create("idb-get",{originalErrorMessage:e?.message});lr.warn(n.message)}}}),Ll.apply(this,arguments)}function MD(t,e){return kl.apply(this,arguments)}function kl(){return kl=Ct(function*(t,e){try{const r=(yield ID()).transaction(Ci,"readwrite");return yield r.objectStore(Ci).put(e,SD(t)),r.done}catch(n){if(n instanceof Ei)lr.warn(n.message);else{const r=en.create("idb-set",{originalErrorMessage:n?.message});lr.warn(r.message)}}}),kl.apply(this,arguments)}function SD(t){return`${t.name}!${t.options.appId}`}
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class cN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}triggerHeartbeat(){var e=this;return Ct(function*(){const r=e.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=AD();if(null===e._heartbeatsCache&&(e._heartbeatsCache=yield e._heartbeatsCachePromise),e._heartbeatsCache.lastSentHeartbeatDate!==o&&!e._heartbeatsCache.heartbeats.some(i=>i.date===o))return e._heartbeatsCache.heartbeats.push({date:o,agent:r}),e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=2592e6}),e._storage.overwrite(e._heartbeatsCache)})()}getHeartbeatsHeader(){var e=this;return Ct(function*(){if(null===e._heartbeatsCache&&(yield e._heartbeatsCachePromise),null===e._heartbeatsCache||0===e._heartbeatsCache.heartbeats.length)return"";const n=AD(),{heartbeatsToSend:r,unsentEntries:o}=function lN(t,e=1024){const n=[];let r=t.slice();for(const o of t){const i=n.find(s=>s.agent===o.agent);if(i){if(i.dates.push(o.date),TD(n)>e){i.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),TD(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(e._heartbeatsCache.heartbeats),i=Xs(JSON.stringify({version:2,heartbeats:r}));return e._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(e._heartbeatsCache.heartbeats=o,yield e._storage.overwrite(e._heartbeatsCache)):(e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache)),i})()}}function AD(){return(new Date).toISOString().substring(0,10)}class dN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return Ct(function*(){return!!function YT(){try{return"object"==typeof indexedDB}catch{return!1}}()&&function KT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var i;e((null===(i=o.error)||void 0===i?void 0:i.message)||"")}}catch(n){e(n)}})}().then(()=>!0).catch(()=>!1)})()}read(){var e=this;return Ct(function*(){return(yield e._canUseIndexedDBPromise)&&(yield function sN(t){return Ll.apply(this,arguments)}(e.app))||{heartbeats:[]}})()}overwrite(e){var n=this;return Ct(function*(){var r;if(yield n._canUseIndexedDBPromise){const i=yield n.read();return MD(n.app,{lastSentHeartbeatDate:null!==(r=e.lastSentHeartbeatDate)&&void 0!==r?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}})()}add(e){var n=this;return Ct(function*(){var r;if(yield n._canUseIndexedDBPromise){const i=yield n.read();return MD(n.app,{lastSentHeartbeatDate:null!==(r=e.lastSentHeartbeatDate)&&void 0!==r?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}})()}}function TD(t){return Xs(JSON.stringify({version:2,heartbeats:t})).length}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */!function fN(t){Pl(new ra("platform-logger",e=>new Sx(e),"PRIVATE")),Pl(new ra("heartbeat",e=>new cN(e),"PRIVATE")),sa(Ol,"0.9.4",t),sa(Ol,"0.9.4","esm2017"),sa("fire-js","")}("");
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
sa("firebase","9.17.2","app");class fo{}fo.\u0275fac=function(e){return new(e||fo)},fo.\u0275mod=Tn({type:fo,bootstrap:[wi]}),fo.\u0275inj=nn({providers:[class LT{constructor(){this.subject=new NT(RT),this.store=this.subject.asObservable().pipe(function OT(t,e=fa){return t=t??PT,hr((n,r)=>{let o,i=!0;n.subscribe(mo(r,s=>{const a=e(s);(i||!t(o,a))&&(i=!1,o=a,r.next(s))}))})}())}get value(){return this.subject.value}select(e){return this.store.pipe(function FT(...t){const e=t.length;if(0===e)throw new Error("list of properties cannot be empty.");return td(n=>{let r=n;for(let o=0;o<e;o++){const i=r?.[t[o]];if(!(typeof i<"u"))return;r=i}return r})}(e))}set(e,n){this.subject.next({...this.value,[e]:n})}}],imports:[wn]});bD({apiKey:"AIzaSyBsItJ6Tgs6UZVKwNNJL_Jkkh29mSw4la4",authDomain:"ultimate-fitness-app-e8103.firebaseapp.com",databaseURL:"https://ultimate-fitness-app-e8103-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"ultimate-fitness-app-e8103",storageBucket:"ultimate-fitness-app-e8103.appspot.com",messagingSenderId:"567728485207",appId:"1:567728485207:web:234d204f992493c1458412"});(function JM(){if(iy)throw new Error("Cannot enable prod mode after platform setup.");oy=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */)(),DT().bootstrapModule(fo).catch(t=>console.error(t))}},te=>{var ho;ho=922,te(te.s=ho)}]);