(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Fc={exports:{}},Na={},Oc={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function H_(){if(tm)return pt;tm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function y(N,ie,Ne){this.props=N,this.context=ie,this.refs=w,this.updater=Ne||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,ie){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ie,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=y.prototype;function L(N,ie,Ne){this.props=N,this.context=ie,this.refs=w,this.updater=Ne||S}var P=L.prototype=new v;P.constructor=L,M(P,y.prototype),P.isPureReactComponent=!0;var A=Array.isArray,z=Object.prototype.hasOwnProperty,F={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function H(N,ie,Ne){var J,me={},we=null,ye=null;if(ie!=null)for(J in ie.ref!==void 0&&(ye=ie.ref),ie.key!==void 0&&(we=""+ie.key),ie)z.call(ie,J)&&!I.hasOwnProperty(J)&&(me[J]=ie[J]);var Ae=arguments.length-2;if(Ae===1)me.children=Ne;else if(1<Ae){for(var Ye=Array(Ae),We=0;We<Ae;We++)Ye[We]=arguments[We+2];me.children=Ye}if(N&&N.defaultProps)for(J in Ae=N.defaultProps,Ae)me[J]===void 0&&(me[J]=Ae[J]);return{$$typeof:r,type:N,key:we,ref:ye,props:me,_owner:F.current}}function b(N,ie){return{$$typeof:r,type:N.type,key:ie,ref:N.ref,props:N.props,_owner:N._owner}}function C(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function B(N){var ie={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ne){return ie[Ne]})}var ae=/\/+/g;function ne(N,ie){return typeof N=="object"&&N!==null&&N.key!=null?B(""+N.key):ie.toString(36)}function de(N,ie,Ne,J,me){var we=typeof N;(we==="undefined"||we==="boolean")&&(N=null);var ye=!1;if(N===null)ye=!0;else switch(we){case"string":case"number":ye=!0;break;case"object":switch(N.$$typeof){case r:case e:ye=!0}}if(ye)return ye=N,me=me(ye),N=J===""?"."+ne(ye,0):J,A(me)?(Ne="",N!=null&&(Ne=N.replace(ae,"$&/")+"/"),de(me,ie,Ne,"",function(We){return We})):me!=null&&(C(me)&&(me=b(me,Ne+(!me.key||ye&&ye.key===me.key?"":(""+me.key).replace(ae,"$&/")+"/")+N)),ie.push(me)),1;if(ye=0,J=J===""?".":J+":",A(N))for(var Ae=0;Ae<N.length;Ae++){we=N[Ae];var Ye=J+ne(we,Ae);ye+=de(we,ie,Ne,Ye,me)}else if(Ye=_(N),typeof Ye=="function")for(N=Ye.call(N),Ae=0;!(we=N.next()).done;)we=we.value,Ye=J+ne(we,Ae++),ye+=de(we,ie,Ne,Ye,me);else if(we==="object")throw ie=String(N),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ye}function ge(N,ie,Ne){if(N==null)return N;var J=[],me=0;return de(N,J,"","",function(we){return ie.call(Ne,we,me++)}),J}function oe(N){if(N._status===-1){var ie=N._result;ie=ie(),ie.then(function(Ne){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ne)},function(Ne){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ne)}),N._status===-1&&(N._status=0,N._result=ie)}if(N._status===1)return N._result.default;throw N._result}var ue={current:null},V={transition:null},le={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:V,ReactCurrentOwner:F};function se(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:ge,forEach:function(N,ie,Ne){ge(N,function(){ie.apply(this,arguments)},Ne)},count:function(N){var ie=0;return ge(N,function(){ie++}),ie},toArray:function(N){return ge(N,function(ie){return ie})||[]},only:function(N){if(!C(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},pt.Component=y,pt.Fragment=t,pt.Profiler=o,pt.PureComponent=L,pt.StrictMode=s,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,pt.act=se,pt.cloneElement=function(N,ie,Ne){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var J=M({},N.props),me=N.key,we=N.ref,ye=N._owner;if(ie!=null){if(ie.ref!==void 0&&(we=ie.ref,ye=F.current),ie.key!==void 0&&(me=""+ie.key),N.type&&N.type.defaultProps)var Ae=N.type.defaultProps;for(Ye in ie)z.call(ie,Ye)&&!I.hasOwnProperty(Ye)&&(J[Ye]=ie[Ye]===void 0&&Ae!==void 0?Ae[Ye]:ie[Ye])}var Ye=arguments.length-2;if(Ye===1)J.children=Ne;else if(1<Ye){Ae=Array(Ye);for(var We=0;We<Ye;We++)Ae[We]=arguments[We+2];J.children=Ae}return{$$typeof:r,type:N.type,key:me,ref:we,props:J,_owner:ye}},pt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},pt.createElement=H,pt.createFactory=function(N){var ie=H.bind(null,N);return ie.type=N,ie},pt.createRef=function(){return{current:null}},pt.forwardRef=function(N){return{$$typeof:f,render:N}},pt.isValidElement=C,pt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:oe}},pt.memo=function(N,ie){return{$$typeof:p,type:N,compare:ie===void 0?null:ie}},pt.startTransition=function(N){var ie=V.transition;V.transition={};try{N()}finally{V.transition=ie}},pt.unstable_act=se,pt.useCallback=function(N,ie){return ue.current.useCallback(N,ie)},pt.useContext=function(N){return ue.current.useContext(N)},pt.useDebugValue=function(){},pt.useDeferredValue=function(N){return ue.current.useDeferredValue(N)},pt.useEffect=function(N,ie){return ue.current.useEffect(N,ie)},pt.useId=function(){return ue.current.useId()},pt.useImperativeHandle=function(N,ie,Ne){return ue.current.useImperativeHandle(N,ie,Ne)},pt.useInsertionEffect=function(N,ie){return ue.current.useInsertionEffect(N,ie)},pt.useLayoutEffect=function(N,ie){return ue.current.useLayoutEffect(N,ie)},pt.useMemo=function(N,ie){return ue.current.useMemo(N,ie)},pt.useReducer=function(N,ie,Ne){return ue.current.useReducer(N,ie,Ne)},pt.useRef=function(N){return ue.current.useRef(N)},pt.useState=function(N){return ue.current.useState(N)},pt.useSyncExternalStore=function(N,ie,Ne){return ue.current.useSyncExternalStore(N,ie,Ne)},pt.useTransition=function(){return ue.current.useTransition()},pt.version="18.3.1",pt}var nm;function ud(){return nm||(nm=1,Oc.exports=H_()),Oc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function V_(){if(im)return Na;im=1;var r=ud(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var g,x={},_=null,S=null;p!==void 0&&(_=""+p),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)s.call(h,g)&&!l.hasOwnProperty(g)&&(x[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)x[g]===void 0&&(x[g]=h[g]);return{$$typeof:e,type:f,key:_,ref:S,props:x,_owner:o.current}}return Na.Fragment=t,Na.jsx=c,Na.jsxs=c,Na}var rm;function G_(){return rm||(rm=1,Fc.exports=V_()),Fc.exports}var K=G_(),fe=ud(),gl={},kc={exports:{}},Dn={},Bc={exports:{}},zc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function W_(){return sm||(sm=1,function(r){function e(V,le){var se=V.length;V.push(le);e:for(;0<se;){var N=se-1>>>1,ie=V[N];if(0<o(ie,le))V[N]=le,V[se]=ie,se=N;else break e}}function t(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var le=V[0],se=V.pop();if(se!==le){V[0]=se;e:for(var N=0,ie=V.length,Ne=ie>>>1;N<Ne;){var J=2*(N+1)-1,me=V[J],we=J+1,ye=V[we];if(0>o(me,se))we<ie&&0>o(ye,me)?(V[N]=ye,V[we]=se,N=we):(V[N]=me,V[J]=se,N=J);else if(we<ie&&0>o(ye,se))V[N]=ye,V[we]=se,N=we;else break e}}return le}function o(V,le){var se=V.sortIndex-le.sortIndex;return se!==0?se:V.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var h=[],p=[],g=1,x=null,_=3,S=!1,M=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(V){for(var le=t(p);le!==null;){if(le.callback===null)s(p);else if(le.startTime<=V)s(p),le.sortIndex=le.expirationTime,e(h,le);else break;le=t(p)}}function A(V){if(w=!1,P(V),!M)if(t(h)!==null)M=!0,oe(z);else{var le=t(p);le!==null&&ue(A,le.startTime-V)}}function z(V,le){M=!1,w&&(w=!1,v(H),H=-1),S=!0;var se=_;try{for(P(le),x=t(h);x!==null&&(!(x.expirationTime>le)||V&&!B());){var N=x.callback;if(typeof N=="function"){x.callback=null,_=x.priorityLevel;var ie=N(x.expirationTime<=le);le=r.unstable_now(),typeof ie=="function"?x.callback=ie:x===t(h)&&s(h),P(le)}else s(h);x=t(h)}if(x!==null)var Ne=!0;else{var J=t(p);J!==null&&ue(A,J.startTime-le),Ne=!1}return Ne}finally{x=null,_=se,S=!1}}var F=!1,I=null,H=-1,b=5,C=-1;function B(){return!(r.unstable_now()-C<b)}function ae(){if(I!==null){var V=r.unstable_now();C=V;var le=!0;try{le=I(!0,V)}finally{le?ne():(F=!1,I=null)}}else F=!1}var ne;if(typeof L=="function")ne=function(){L(ae)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ge=de.port2;de.port1.onmessage=ae,ne=function(){ge.postMessage(null)}}else ne=function(){y(ae,0)};function oe(V){I=V,F||(F=!0,ne())}function ue(V,le){H=y(function(){V(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(V){V.callback=null},r.unstable_continueExecution=function(){M||S||(M=!0,oe(z))},r.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<V?Math.floor(1e3/V):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(V){switch(_){case 1:case 2:case 3:var le=3;break;default:le=_}var se=_;_=le;try{return V()}finally{_=se}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(V,le){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var se=_;_=V;try{return le()}finally{_=se}},r.unstable_scheduleCallback=function(V,le,se){var N=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?N+se:N):se=N,V){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=se+ie,V={id:g++,callback:le,priorityLevel:V,startTime:se,expirationTime:ie,sortIndex:-1},se>N?(V.sortIndex=se,e(p,V),t(h)===null&&V===t(p)&&(w?(v(H),H=-1):w=!0,ue(A,se-N))):(V.sortIndex=ie,e(h,V),M||S||(M=!0,oe(z))),V},r.unstable_shouldYield=B,r.unstable_wrapCallback=function(V){var le=_;return function(){var se=_;_=le;try{return V.apply(this,arguments)}finally{_=se}}}}(zc)),zc}var am;function X_(){return am||(am=1,Bc.exports=W_()),Bc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function j_(){if(om)return Dn;om=1;var r=ud(),e=X_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function _(n){return h.call(x,n)?!0:h.call(g,n)?!1:p.test(n)?x[n]=!0:(g[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,u,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,L);y[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,L);y[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,L);y[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,u)&&(a=null),u||d===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var A=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),F=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),B=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),V=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,N;function ie(n){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var Ne=!1;function J(n,i){if(!n||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var u=ee}Reflect.construct(n,[],i)}else{try{i.call()}catch(ee){u=ee}n.call(i.prototype)}else{try{throw Error()}catch(ee){u=ee}n()}}catch(ee){if(ee&&u&&typeof ee.stack=="string"){for(var d=ee.stack.split(`
`),m=u.stack.split(`
`),E=d.length-1,U=m.length-1;1<=E&&0<=U&&d[E]!==m[U];)U--;for(;1<=E&&0<=U;E--,U--)if(d[E]!==m[U]){if(E!==1||U!==1)do if(E--,U--,0>U||d[E]!==m[U]){var O=`
`+d[E].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=E&&0<=U);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ie(n):""}function me(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function we(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case F:return"Portal";case b:return"Profiler";case H:return"StrictMode";case ne:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case ae:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ge:return i=n.displayName||null,i!==null?i:we(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return we(n(i))}catch{}}return null}function ye(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(i);case 8:return i===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ye(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function We(n){var i=Ye(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Lt(n){n._valueTracker||(n._valueTracker=We(n))}function Dt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Ye(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function k(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function _n(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=Ae(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function mt(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function dt(n,i){mt(n,i);var a=Ae(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ct(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ct(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function $e(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ct(n,i,a){(i!=="number"||ft(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Xe=Array.isArray;function D(n,i,a,u){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Ae(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Xe(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ae(a)}}function he(n,i){var a=Ae(i.value),u=Ae(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function xe(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ce(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ce(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,Ze=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ke(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(n){Oe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Se[i]=Se[n]})});function tt(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Se.hasOwnProperty(n)&&Se[n]?(""+i).trim():i+"px"}function nt(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=tt(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var ke=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(n,i){if(i){if(ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function st(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,re=null,pe=null;function De(n){if(n=ya(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Lo(i),Re(n.stateNode,n.type,i))}}function Le(n){re?pe?pe.push(n):pe=[n]:re=n}function at(){if(re){var n=re,i=pe;if(pe=re=null,De(n),i)for(n=0;n<i.length;n++)De(i[n])}}function It(n,i){return n(i)}function qt(){}var yt=!1;function An(n,i,a){if(yt)return n(i,a);yt=!0;try{return It(n,i,a)}finally{yt=!1,(re!==null||pe!==null)&&(qt(),at())}}function xn(n,i){var a=n.stateNode;if(a===null)return null;var u=Lo(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var rs=!1;if(f)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){rs=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{rs=!1}function Ti(n,i,a,u,d,m,E,U,O){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(a,ee)}catch(_e){this.onError(_e)}}var Ai=!1,Pr=null,br=!1,Qi=null,lo={onError:function(n){Ai=!0,Pr=n}};function ss(n,i,a,u,d,m,E,U,O){Ai=!1,Pr=null,Ti.apply(lo,arguments)}function uo(n,i,a,u,d,m,E,U,O){if(ss.apply(this,arguments),Ai){if(Ai){var ee=Pr;Ai=!1,Pr=null}else throw Error(t(198));br||(br=!0,Qi=ee)}}function fi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function co(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function fo(n){if(fi(n)!==n)throw Error(t(188))}function su(n){var i=n.alternate;if(!i){if(i=fi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return fo(d),n;if(m===u)return fo(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=m;else{for(var E=!1,U=d.child;U;){if(U===a){E=!0,a=d,u=m;break}if(U===u){E=!0,u=d,a=m;break}U=U.sibling}if(!E){for(U=m.child;U;){if(U===a){E=!0,a=m,u=d;break}if(U===u){E=!0,u=m,a=d;break}U=U.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ho(n){return n=su(n),n!==null?po(n):null}function po(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=po(n);if(i!==null)return i;n=n.sibling}return null}var mo=e.unstable_scheduleCallback,R=e.unstable_cancelCallback,X=e.unstable_shouldYield,te=e.unstable_requestPaint,q=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,Ee=e.unstable_ImmediatePriority,Pe=e.unstable_UserBlockingPriority,Ue=e.unstable_NormalPriority,Be=e.unstable_LowPriority,it=e.unstable_IdlePriority,et=null,He=null;function _t(n){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(et,n,void 0,(n.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:xt,Gt=Math.log,Ot=Math.LN2;function xt(n){return n>>>=0,n===0?32:31-(Gt(n)/Ot|0)|0}var qe=64,Wt=4194304;function gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function cn(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,E=a&268435455;if(E!==0){var U=E&~d;U!==0?u=gt(U):(m&=E,m!==0&&(u=gt(m)))}else E=a&~d,E!==0?u=gt(E):m!==0&&(u=gt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-ot(i),d=1<<a,u|=n[a],i&=~d;return u}function Ji(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yn(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-ot(m),U=1<<E,O=d[E];O===-1?((U&a)===0||(U&u)!==0)&&(d[E]=Ji(U,i)):O<=i&&(n.expiredLanes|=U),m&=~U}}function Ci(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bt(){var n=qe;return qe<<=1,(qe&4194240)===0&&(qe=64),n}function fn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function en(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ot(i),n[i]=a}function on(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-ot(a),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,a&=~m}}function tn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-ot(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}var St=0;function di(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Id,au,Nd,Fd,Od,ou=!1,go=[],er=null,tr=null,nr=null,ra=new Map,sa=new Map,ir=[],uv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kd(n,i){switch(n){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":ra.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(i.pointerId)}}function aa(n,i,a,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=ya(i),i!==null&&au(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function cv(n,i,a,u,d){switch(i){case"focusin":return er=aa(er,n,i,a,u,d),!0;case"dragenter":return tr=aa(tr,n,i,a,u,d),!0;case"mouseover":return nr=aa(nr,n,i,a,u,d),!0;case"pointerover":var m=d.pointerId;return ra.set(m,aa(ra.get(m)||null,n,i,a,u,d)),!0;case"gotpointercapture":return m=d.pointerId,sa.set(m,aa(sa.get(m)||null,n,i,a,u,d)),!0}return!1}function Bd(n){var i=Lr(n.target);if(i!==null){var a=fi(i);if(a!==null){if(i=a.tag,i===13){if(i=co(a),i!==null){n.blockedOn=i,Od(n.priority,function(){Nd(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=uu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);At=u,a.target.dispatchEvent(u),At=null}else return i=ya(a),i!==null&&au(i),n.blockedOn=a,!1;i.shift()}return!0}function zd(n,i,a){vo(n)&&a.delete(i)}function fv(){ou=!1,er!==null&&vo(er)&&(er=null),tr!==null&&vo(tr)&&(tr=null),nr!==null&&vo(nr)&&(nr=null),ra.forEach(zd),sa.forEach(zd)}function oa(n,i){n.blockedOn===i&&(n.blockedOn=null,ou||(ou=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,fv)))}function la(n){function i(d){return oa(d,n)}if(0<go.length){oa(go[0],n);for(var a=1;a<go.length;a++){var u=go[a];u.blockedOn===n&&(u.blockedOn=null)}}for(er!==null&&oa(er,n),tr!==null&&oa(tr,n),nr!==null&&oa(nr,n),ra.forEach(i),sa.forEach(i),a=0;a<ir.length;a++)u=ir[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<ir.length&&(a=ir[0],a.blockedOn===null);)Bd(a),a.blockedOn===null&&ir.shift()}var as=A.ReactCurrentBatchConfig,_o=!0;function dv(n,i,a,u){var d=St,m=as.transition;as.transition=null;try{St=1,lu(n,i,a,u)}finally{St=d,as.transition=m}}function hv(n,i,a,u){var d=St,m=as.transition;as.transition=null;try{St=4,lu(n,i,a,u)}finally{St=d,as.transition=m}}function lu(n,i,a,u){if(_o){var d=uu(n,i,a,u);if(d===null)Au(n,i,u,xo,a),kd(n,u);else if(cv(d,n,i,a,u))u.stopPropagation();else if(kd(n,u),i&4&&-1<uv.indexOf(n)){for(;d!==null;){var m=ya(d);if(m!==null&&Id(m),m=uu(n,i,a,u),m===null&&Au(n,i,u,xo,a),m===d)break;d=m}d!==null&&u.stopPropagation()}else Au(n,i,u,null,a)}}var xo=null;function uu(n,i,a,u){if(xo=null,n=W(u),n=Lr(n),n!==null)if(i=fi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=co(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return xo=n,null}function Hd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case Ee:return 1;case Pe:return 4;case Ue:case Be:return 16;case it:return 536870912;default:return 16}default:return 16}}var rr=null,cu=null,yo=null;function Vd(){if(yo)return yo;var n,i=cu,a=i.length,u,d="value"in rr?rr.value:rr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var E=a-n;for(u=1;u<=E&&i[a-u]===d[m-u];u++);return yo=d.slice(n,1<u?1-u:void 0)}function So(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Mo(){return!0}function Gd(){return!1}function Nn(n){function i(a,u,d,m,E){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Mo:Gd,this.isPropagationStopped=Gd,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Mo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Mo)},persist:function(){},isPersistent:Mo}),i}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fu=Nn(os),ua=se({},os,{view:0,detail:0}),pv=Nn(ua),du,hu,ca,Eo=se({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ca&&(ca&&n.type==="mousemove"?(du=n.screenX-ca.screenX,hu=n.screenY-ca.screenY):hu=du=0,ca=n),du)},movementY:function(n){return"movementY"in n?n.movementY:hu}}),Wd=Nn(Eo),mv=se({},Eo,{dataTransfer:0}),gv=Nn(mv),vv=se({},ua,{relatedTarget:0}),pu=Nn(vv),_v=se({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),xv=Nn(_v),yv=se({},os,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Sv=Nn(yv),Mv=se({},os,{data:0}),Xd=Nn(Mv),Ev={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Av(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Tv[n])?!!i[n]:!1}function mu(){return Av}var Cv=se({},ua,{key:function(n){if(n.key){var i=Ev[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=So(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?wv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(n){return n.type==="keypress"?So(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?So(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Rv=Nn(Cv),Pv=se({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=Nn(Pv),bv=se({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),Lv=Nn(bv),Dv=se({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uv=Nn(Dv),Iv=se({},Eo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Nv=Nn(Iv),Fv=[9,13,27,32],gu=f&&"CompositionEvent"in window,fa=null;f&&"documentMode"in document&&(fa=document.documentMode);var Ov=f&&"TextEvent"in window&&!fa,Yd=f&&(!gu||fa&&8<fa&&11>=fa),$d=" ",qd=!1;function Kd(n,i){switch(n){case"keyup":return Fv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ls=!1;function kv(n,i){switch(n){case"compositionend":return Zd(i);case"keypress":return i.which!==32?null:(qd=!0,$d);case"textInput":return n=i.data,n===$d&&qd?null:n;default:return null}}function Bv(n,i){if(ls)return n==="compositionend"||!gu&&Kd(n,i)?(n=Vd(),yo=cu=rr=null,ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Yd&&i.locale!=="ko"?null:i.data;default:return null}}var zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!zv[n.type]:i==="textarea"}function Jd(n,i,a,u){Le(u),i=Ro(i,"onChange"),0<i.length&&(a=new fu("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var da=null,ha=null;function Hv(n){vh(n,0)}function wo(n){var i=hs(n);if(Dt(i))return n}function Vv(n,i){if(n==="change")return i}var eh=!1;if(f){var vu;if(f){var _u="oninput"in document;if(!_u){var th=document.createElement("div");th.setAttribute("oninput","return;"),_u=typeof th.oninput=="function"}vu=_u}else vu=!1;eh=vu&&(!document.documentMode||9<document.documentMode)}function nh(){da&&(da.detachEvent("onpropertychange",ih),ha=da=null)}function ih(n){if(n.propertyName==="value"&&wo(ha)){var i=[];Jd(i,ha,n,W(n)),An(Hv,i)}}function Gv(n,i,a){n==="focusin"?(nh(),da=i,ha=a,da.attachEvent("onpropertychange",ih)):n==="focusout"&&nh()}function Wv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wo(ha)}function Xv(n,i){if(n==="click")return wo(i)}function jv(n,i){if(n==="input"||n==="change")return wo(i)}function Yv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Jn=typeof Object.is=="function"?Object.is:Yv;function pa(n,i){if(Jn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(i,d)||!Jn(n[d],i[d]))return!1}return!0}function rh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function sh(n,i){var a=rh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rh(a)}}function ah(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ah(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function oh(){for(var n=window,i=ft();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ft(n.document)}return i}function xu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function $v(n){var i=oh(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ah(a.ownerDocument.documentElement,a)){if(u!==null&&xu(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=sh(a,m);var E=sh(a,u);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var qv=f&&"documentMode"in document&&11>=document.documentMode,us=null,yu=null,ma=null,Su=!1;function lh(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Su||us==null||us!==ft(u)||(u=us,"selectionStart"in u&&xu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ma&&pa(ma,u)||(ma=u,u=Ro(yu,"onSelect"),0<u.length&&(i=new fu("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=us)))}function To(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var cs={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},Mu={},uh={};f&&(uh=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function Ao(n){if(Mu[n])return Mu[n];if(!cs[n])return n;var i=cs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in uh)return Mu[n]=i[a];return n}var ch=Ao("animationend"),fh=Ao("animationiteration"),dh=Ao("animationstart"),hh=Ao("transitionend"),ph=new Map,mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(n,i){ph.set(n,i),l(i,[n])}for(var Eu=0;Eu<mh.length;Eu++){var wu=mh[Eu],Kv=wu.toLowerCase(),Zv=wu[0].toUpperCase()+wu.slice(1);sr(Kv,"on"+Zv)}sr(ch,"onAnimationEnd"),sr(fh,"onAnimationIteration"),sr(dh,"onAnimationStart"),sr("dblclick","onDoubleClick"),sr("focusin","onFocus"),sr("focusout","onBlur"),sr(hh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function gh(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,uo(u,i,void 0,n),n.currentTarget=null}function vh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var U=u[E],O=U.instance,ee=U.currentTarget;if(U=U.listener,O!==m&&d.isPropagationStopped())break e;gh(d,U,ee),m=O}else for(E=0;E<u.length;E++){if(U=u[E],O=U.instance,ee=U.currentTarget,U=U.listener,O!==m&&d.isPropagationStopped())break e;gh(d,U,ee),m=O}}}if(br)throw n=Qi,br=!1,Qi=null,n}function Nt(n,i){var a=i[Du];a===void 0&&(a=i[Du]=new Set);var u=n+"__bubble";a.has(u)||(_h(i,n,2,!1),a.add(u))}function Tu(n,i,a){var u=0;i&&(u|=4),_h(a,n,u,i)}var Co="_reactListening"+Math.random().toString(36).slice(2);function va(n){if(!n[Co]){n[Co]=!0,s.forEach(function(a){a!=="selectionchange"&&(Qv.has(a)||Tu(a,!1,n),Tu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Co]||(i[Co]=!0,Tu("selectionchange",!1,i))}}function _h(n,i,a,u){switch(Hd(i)){case 1:var d=dv;break;case 4:d=hv;break;default:d=lu}a=d.bind(null,i,a,n),d=void 0,!rs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Au(n,i,a,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var U=u.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(E===4)for(E=u.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===d||O.nodeType===8&&O.parentNode===d))return;E=E.return}for(;U!==null;){if(E=Lr(U),E===null)return;if(O=E.tag,O===5||O===6){u=m=E;continue e}U=U.parentNode}}u=u.return}An(function(){var ee=m,_e=W(a),Me=[];e:{var ve=ph.get(n);if(ve!==void 0){var Ie=fu,ze=n;switch(n){case"keypress":if(So(a)===0)break e;case"keydown":case"keyup":Ie=Rv;break;case"focusin":ze="focus",Ie=pu;break;case"focusout":ze="blur",Ie=pu;break;case"beforeblur":case"afterblur":Ie=pu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=Lv;break;case ch:case fh:case dh:Ie=xv;break;case hh:Ie=Uv;break;case"scroll":Ie=pv;break;case"wheel":Ie=Nv;break;case"copy":case"cut":case"paste":Ie=Sv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=jd}var Ve=(i&4)!==0,jt=!Ve&&n==="scroll",Y=Ve?ve!==null?ve+"Capture":null:ve;Ve=[];for(var G=ee,Z;G!==null;){Z=G;var Te=Z.stateNode;if(Z.tag===5&&Te!==null&&(Z=Te,Y!==null&&(Te=xn(G,Y),Te!=null&&Ve.push(_a(G,Te,Z)))),jt)break;G=G.return}0<Ve.length&&(ve=new Ie(ve,ze,null,a,_e),Me.push({event:ve,listeners:Ve}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",ve&&a!==At&&(ze=a.relatedTarget||a.fromElement)&&(Lr(ze)||ze[Ri]))break e;if((Ie||ve)&&(ve=_e.window===_e?_e:(ve=_e.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ie?(ze=a.relatedTarget||a.toElement,Ie=ee,ze=ze?Lr(ze):null,ze!==null&&(jt=fi(ze),ze!==jt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ie=null,ze=ee),Ie!==ze)){if(Ve=Wd,Te="onMouseLeave",Y="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=jd,Te="onPointerLeave",Y="onPointerEnter",G="pointer"),jt=Ie==null?ve:hs(Ie),Z=ze==null?ve:hs(ze),ve=new Ve(Te,G+"leave",Ie,a,_e),ve.target=jt,ve.relatedTarget=Z,Te=null,Lr(_e)===ee&&(Ve=new Ve(Y,G+"enter",ze,a,_e),Ve.target=Z,Ve.relatedTarget=jt,Te=Ve),jt=Te,Ie&&ze)t:{for(Ve=Ie,Y=ze,G=0,Z=Ve;Z;Z=fs(Z))G++;for(Z=0,Te=Y;Te;Te=fs(Te))Z++;for(;0<G-Z;)Ve=fs(Ve),G--;for(;0<Z-G;)Y=fs(Y),Z--;for(;G--;){if(Ve===Y||Y!==null&&Ve===Y.alternate)break t;Ve=fs(Ve),Y=fs(Y)}Ve=null}else Ve=null;Ie!==null&&xh(Me,ve,Ie,Ve,!1),ze!==null&&jt!==null&&xh(Me,jt,ze,Ve,!0)}}e:{if(ve=ee?hs(ee):window,Ie=ve.nodeName&&ve.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ve.type==="file")var je=Vv;else if(Qd(ve))if(eh)je=jv;else{je=Wv;var Qe=Gv}else(Ie=ve.nodeName)&&Ie.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(je=Xv);if(je&&(je=je(n,ee))){Jd(Me,je,a,_e);break e}Qe&&Qe(n,ve,ee),n==="focusout"&&(Qe=ve._wrapperState)&&Qe.controlled&&ve.type==="number"&&Ct(ve,"number",ve.value)}switch(Qe=ee?hs(ee):window,n){case"focusin":(Qd(Qe)||Qe.contentEditable==="true")&&(us=Qe,yu=ee,ma=null);break;case"focusout":ma=yu=us=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,lh(Me,a,_e);break;case"selectionchange":if(qv)break;case"keydown":case"keyup":lh(Me,a,_e)}var Je;if(gu)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else ls?Kd(n,a)&&(rt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(Yd&&a.locale!=="ko"&&(ls||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&ls&&(Je=Vd()):(rr=_e,cu="value"in rr?rr.value:rr.textContent,ls=!0)),Qe=Ro(ee,rt),0<Qe.length&&(rt=new Xd(rt,n,null,a,_e),Me.push({event:rt,listeners:Qe}),Je?rt.data=Je:(Je=Zd(a),Je!==null&&(rt.data=Je)))),(Je=Ov?kv(n,a):Bv(n,a))&&(ee=Ro(ee,"onBeforeInput"),0<ee.length&&(_e=new Xd("onBeforeInput","beforeinput",null,a,_e),Me.push({event:_e,listeners:ee}),_e.data=Je))}vh(Me,i)})}function _a(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ro(n,i){for(var a=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=xn(n,a),m!=null&&u.unshift(_a(n,m,d)),m=xn(n,i),m!=null&&u.push(_a(n,m,d))),n=n.return}return u}function fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function xh(n,i,a,u,d){for(var m=i._reactName,E=[];a!==null&&a!==u;){var U=a,O=U.alternate,ee=U.stateNode;if(O!==null&&O===u)break;U.tag===5&&ee!==null&&(U=ee,d?(O=xn(a,m),O!=null&&E.unshift(_a(a,O,U))):d||(O=xn(a,m),O!=null&&E.push(_a(a,O,U)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var Jv=/\r\n?/g,e_=/\u0000|\uFFFD/g;function yh(n){return(typeof n=="string"?n:""+n).replace(Jv,`
`).replace(e_,"")}function Po(n,i,a){if(i=yh(i),yh(n)!==i&&a)throw Error(t(425))}function bo(){}var Cu=null,Ru=null;function Pu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var bu=typeof setTimeout=="function"?setTimeout:void 0,t_=typeof clearTimeout=="function"?clearTimeout:void 0,Sh=typeof Promise=="function"?Promise:void 0,n_=typeof queueMicrotask=="function"?queueMicrotask:typeof Sh<"u"?function(n){return Sh.resolve(null).then(n).catch(i_)}:bu;function i_(n){setTimeout(function(){throw n})}function Lu(n,i){var a=i,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),la(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);la(i)}function ar(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Mh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ds=Math.random().toString(36).slice(2),hi="__reactFiber$"+ds,xa="__reactProps$"+ds,Ri="__reactContainer$"+ds,Du="__reactEvents$"+ds,r_="__reactListeners$"+ds,s_="__reactHandles$"+ds;function Lr(n){var i=n[hi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ri]||a[hi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Mh(n);n!==null;){if(a=n[hi])return a;n=Mh(n)}return i}n=a,a=n.parentNode}return null}function ya(n){return n=n[hi]||n[Ri],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Lo(n){return n[xa]||null}var Uu=[],ps=-1;function or(n){return{current:n}}function Ft(n){0>ps||(n.current=Uu[ps],Uu[ps]=null,ps--)}function Ut(n,i){ps++,Uu[ps]=n.current,n.current=i}var lr={},dn=or(lr),Cn=or(!1),Dr=lr;function ms(n,i){var a=n.type.contextTypes;if(!a)return lr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Rn(n){return n=n.childContextTypes,n!=null}function Do(){Ft(Cn),Ft(dn)}function Eh(n,i,a){if(dn.current!==lr)throw Error(t(168));Ut(dn,i),Ut(Cn,a)}function wh(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,ye(n)||"Unknown",d));return se({},a,u)}function Uo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||lr,Dr=dn.current,Ut(dn,n),Ut(Cn,Cn.current),!0}function Th(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=wh(n,i,Dr),u.__reactInternalMemoizedMergedChildContext=n,Ft(Cn),Ft(dn),Ut(dn,n)):Ft(Cn),Ut(Cn,a)}var Pi=null,Io=!1,Iu=!1;function Ah(n){Pi===null?Pi=[n]:Pi.push(n)}function a_(n){Io=!0,Ah(n)}function ur(){if(!Iu&&Pi!==null){Iu=!0;var n=0,i=St;try{var a=Pi;for(St=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Pi=null,Io=!1}catch(d){throw Pi!==null&&(Pi=Pi.slice(n+1)),mo(Ee,ur),d}finally{St=i,Iu=!1}}return null}var gs=[],vs=0,No=null,Fo=0,Gn=[],Wn=0,Ur=null,bi=1,Li="";function Ir(n,i){gs[vs++]=Fo,gs[vs++]=No,No=n,Fo=i}function Ch(n,i,a){Gn[Wn++]=bi,Gn[Wn++]=Li,Gn[Wn++]=Ur,Ur=n;var u=bi;n=Li;var d=32-ot(u)-1;u&=~(1<<d),a+=1;var m=32-ot(i)+d;if(30<m){var E=d-d%5;m=(u&(1<<E)-1).toString(32),u>>=E,d-=E,bi=1<<32-ot(i)+d|a<<d|u,Li=m+n}else bi=1<<m|a<<d|u,Li=n}function Nu(n){n.return!==null&&(Ir(n,1),Ch(n,1,0))}function Fu(n){for(;n===No;)No=gs[--vs],gs[vs]=null,Fo=gs[--vs],gs[vs]=null;for(;n===Ur;)Ur=Gn[--Wn],Gn[Wn]=null,Li=Gn[--Wn],Gn[Wn]=null,bi=Gn[--Wn],Gn[Wn]=null}var Fn=null,On=null,kt=!1,ei=null;function Rh(n,i){var a=$n(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Ph(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Fn=n,On=ar(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Fn=n,On=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ur!==null?{id:bi,overflow:Li}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=$n(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Fn=n,On=null,!0):!1;default:return!1}}function Ou(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ku(n){if(kt){var i=On;if(i){var a=i;if(!Ph(n,i)){if(Ou(n))throw Error(t(418));i=ar(a.nextSibling);var u=Fn;i&&Ph(n,i)?Rh(u,a):(n.flags=n.flags&-4097|2,kt=!1,Fn=n)}}else{if(Ou(n))throw Error(t(418));n.flags=n.flags&-4097|2,kt=!1,Fn=n}}}function bh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Fn=n}function Oo(n){if(n!==Fn)return!1;if(!kt)return bh(n),kt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Pu(n.type,n.memoizedProps)),i&&(i=On)){if(Ou(n))throw Lh(),Error(t(418));for(;i;)Rh(n,i),i=ar(i.nextSibling)}if(bh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){On=ar(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}On=null}}else On=Fn?ar(n.stateNode.nextSibling):null;return!0}function Lh(){for(var n=On;n;)n=ar(n.nextSibling)}function _s(){On=Fn=null,kt=!1}function Bu(n){ei===null?ei=[n]:ei.push(n)}var o_=A.ReactCurrentBatchConfig;function Sa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var U=d.refs;E===null?delete U[m]:U[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ko(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Dh(n){var i=n._init;return i(n._payload)}function Uh(n){function i(Y,G){if(n){var Z=Y.deletions;Z===null?(Y.deletions=[G],Y.flags|=16):Z.push(G)}}function a(Y,G){if(!n)return null;for(;G!==null;)i(Y,G),G=G.sibling;return null}function u(Y,G){for(Y=new Map;G!==null;)G.key!==null?Y.set(G.key,G):Y.set(G.index,G),G=G.sibling;return Y}function d(Y,G){return Y=vr(Y,G),Y.index=0,Y.sibling=null,Y}function m(Y,G,Z){return Y.index=Z,n?(Z=Y.alternate,Z!==null?(Z=Z.index,Z<G?(Y.flags|=2,G):Z):(Y.flags|=2,G)):(Y.flags|=1048576,G)}function E(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function U(Y,G,Z,Te){return G===null||G.tag!==6?(G=bc(Z,Y.mode,Te),G.return=Y,G):(G=d(G,Z),G.return=Y,G)}function O(Y,G,Z,Te){var je=Z.type;return je===I?_e(Y,G,Z.props.children,Te,Z.key):G!==null&&(G.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&Dh(je)===G.type)?(Te=d(G,Z.props),Te.ref=Sa(Y,G,Z),Te.return=Y,Te):(Te=ll(Z.type,Z.key,Z.props,null,Y.mode,Te),Te.ref=Sa(Y,G,Z),Te.return=Y,Te)}function ee(Y,G,Z,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==Z.containerInfo||G.stateNode.implementation!==Z.implementation?(G=Lc(Z,Y.mode,Te),G.return=Y,G):(G=d(G,Z.children||[]),G.return=Y,G)}function _e(Y,G,Z,Te,je){return G===null||G.tag!==7?(G=Vr(Z,Y.mode,Te,je),G.return=Y,G):(G=d(G,Z),G.return=Y,G)}function Me(Y,G,Z){if(typeof G=="string"&&G!==""||typeof G=="number")return G=bc(""+G,Y.mode,Z),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case z:return Z=ll(G.type,G.key,G.props,null,Y.mode,Z),Z.ref=Sa(Y,null,G),Z.return=Y,Z;case F:return G=Lc(G,Y.mode,Z),G.return=Y,G;case oe:var Te=G._init;return Me(Y,Te(G._payload),Z)}if(Xe(G)||le(G))return G=Vr(G,Y.mode,Z,null),G.return=Y,G;ko(Y,G)}return null}function ve(Y,G,Z,Te){var je=G!==null?G.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return je!==null?null:U(Y,G,""+Z,Te);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case z:return Z.key===je?O(Y,G,Z,Te):null;case F:return Z.key===je?ee(Y,G,Z,Te):null;case oe:return je=Z._init,ve(Y,G,je(Z._payload),Te)}if(Xe(Z)||le(Z))return je!==null?null:_e(Y,G,Z,Te,null);ko(Y,Z)}return null}function Ie(Y,G,Z,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get(Z)||null,U(G,Y,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case z:return Y=Y.get(Te.key===null?Z:Te.key)||null,O(G,Y,Te,je);case F:return Y=Y.get(Te.key===null?Z:Te.key)||null,ee(G,Y,Te,je);case oe:var Qe=Te._init;return Ie(Y,G,Z,Qe(Te._payload),je)}if(Xe(Te)||le(Te))return Y=Y.get(Z)||null,_e(G,Y,Te,je,null);ko(G,Te)}return null}function ze(Y,G,Z,Te){for(var je=null,Qe=null,Je=G,rt=G=0,sn=null;Je!==null&&rt<Z.length;rt++){Je.index>rt?(sn=Je,Je=null):sn=Je.sibling;var Et=ve(Y,Je,Z[rt],Te);if(Et===null){Je===null&&(Je=sn);break}n&&Je&&Et.alternate===null&&i(Y,Je),G=m(Et,G,rt),Qe===null?je=Et:Qe.sibling=Et,Qe=Et,Je=sn}if(rt===Z.length)return a(Y,Je),kt&&Ir(Y,rt),je;if(Je===null){for(;rt<Z.length;rt++)Je=Me(Y,Z[rt],Te),Je!==null&&(G=m(Je,G,rt),Qe===null?je=Je:Qe.sibling=Je,Qe=Je);return kt&&Ir(Y,rt),je}for(Je=u(Y,Je);rt<Z.length;rt++)sn=Ie(Je,Y,rt,Z[rt],Te),sn!==null&&(n&&sn.alternate!==null&&Je.delete(sn.key===null?rt:sn.key),G=m(sn,G,rt),Qe===null?je=sn:Qe.sibling=sn,Qe=sn);return n&&Je.forEach(function(_r){return i(Y,_r)}),kt&&Ir(Y,rt),je}function Ve(Y,G,Z,Te){var je=le(Z);if(typeof je!="function")throw Error(t(150));if(Z=je.call(Z),Z==null)throw Error(t(151));for(var Qe=je=null,Je=G,rt=G=0,sn=null,Et=Z.next();Je!==null&&!Et.done;rt++,Et=Z.next()){Je.index>rt?(sn=Je,Je=null):sn=Je.sibling;var _r=ve(Y,Je,Et.value,Te);if(_r===null){Je===null&&(Je=sn);break}n&&Je&&_r.alternate===null&&i(Y,Je),G=m(_r,G,rt),Qe===null?je=_r:Qe.sibling=_r,Qe=_r,Je=sn}if(Et.done)return a(Y,Je),kt&&Ir(Y,rt),je;if(Je===null){for(;!Et.done;rt++,Et=Z.next())Et=Me(Y,Et.value,Te),Et!==null&&(G=m(Et,G,rt),Qe===null?je=Et:Qe.sibling=Et,Qe=Et);return kt&&Ir(Y,rt),je}for(Je=u(Y,Je);!Et.done;rt++,Et=Z.next())Et=Ie(Je,Y,rt,Et.value,Te),Et!==null&&(n&&Et.alternate!==null&&Je.delete(Et.key===null?rt:Et.key),G=m(Et,G,rt),Qe===null?je=Et:Qe.sibling=Et,Qe=Et);return n&&Je.forEach(function(z_){return i(Y,z_)}),kt&&Ir(Y,rt),je}function jt(Y,G,Z,Te){if(typeof Z=="object"&&Z!==null&&Z.type===I&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case z:e:{for(var je=Z.key,Qe=G;Qe!==null;){if(Qe.key===je){if(je=Z.type,je===I){if(Qe.tag===7){a(Y,Qe.sibling),G=d(Qe,Z.props.children),G.return=Y,Y=G;break e}}else if(Qe.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&Dh(je)===Qe.type){a(Y,Qe.sibling),G=d(Qe,Z.props),G.ref=Sa(Y,Qe,Z),G.return=Y,Y=G;break e}a(Y,Qe);break}else i(Y,Qe);Qe=Qe.sibling}Z.type===I?(G=Vr(Z.props.children,Y.mode,Te,Z.key),G.return=Y,Y=G):(Te=ll(Z.type,Z.key,Z.props,null,Y.mode,Te),Te.ref=Sa(Y,G,Z),Te.return=Y,Y=Te)}return E(Y);case F:e:{for(Qe=Z.key;G!==null;){if(G.key===Qe)if(G.tag===4&&G.stateNode.containerInfo===Z.containerInfo&&G.stateNode.implementation===Z.implementation){a(Y,G.sibling),G=d(G,Z.children||[]),G.return=Y,Y=G;break e}else{a(Y,G);break}else i(Y,G);G=G.sibling}G=Lc(Z,Y.mode,Te),G.return=Y,Y=G}return E(Y);case oe:return Qe=Z._init,jt(Y,G,Qe(Z._payload),Te)}if(Xe(Z))return ze(Y,G,Z,Te);if(le(Z))return Ve(Y,G,Z,Te);ko(Y,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,G!==null&&G.tag===6?(a(Y,G.sibling),G=d(G,Z),G.return=Y,Y=G):(a(Y,G),G=bc(Z,Y.mode,Te),G.return=Y,Y=G),E(Y)):a(Y,G)}return jt}var xs=Uh(!0),Ih=Uh(!1),Bo=or(null),zo=null,ys=null,zu=null;function Hu(){zu=ys=zo=null}function Vu(n){var i=Bo.current;Ft(Bo),n._currentValue=i}function Gu(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Ss(n,i){zo=n,zu=ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Pn=!0),n.firstContext=null)}function Xn(n){var i=n._currentValue;if(zu!==n)if(n={context:n,memoizedValue:i,next:null},ys===null){if(zo===null)throw Error(t(308));ys=n,zo.dependencies={lanes:0,firstContext:n}}else ys=ys.next=n;return i}var Nr=null;function Wu(n){Nr===null?Nr=[n]:Nr.push(n)}function Nh(n,i,a,u){var d=i.interleaved;return d===null?(a.next=a,Wu(i)):(a.next=d.next,d.next=a),i.interleaved=a,Di(n,u)}function Di(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var cr=!1;function Xu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function fr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Mt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Di(n,a)}return d=u.interleaved,d===null?(i.next=i,Wu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Di(n,a)}function Ho(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,tn(n,a)}}function Oh(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Vo(n,i,a,u){var d=n.updateQueue;cr=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var O=U,ee=O.next;O.next=null,E===null?m=ee:E.next=ee,E=O;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==E&&(U===null?_e.firstBaseUpdate=ee:U.next=ee,_e.lastBaseUpdate=O))}if(m!==null){var Me=d.baseState;E=0,_e=ee=O=null,U=m;do{var ve=U.lane,Ie=U.eventTime;if((u&ve)===ve){_e!==null&&(_e=_e.next={eventTime:Ie,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var ze=n,Ve=U;switch(ve=i,Ie=a,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){Me=ze.call(Ie,Me,ve);break e}Me=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,ve=typeof ze=="function"?ze.call(Ie,Me,ve):ze,ve==null)break e;Me=se({},Me,ve);break e;case 2:cr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,ve=d.effects,ve===null?d.effects=[U]:ve.push(U))}else Ie={eventTime:Ie,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(ee=_e=Ie,O=Me):_e=_e.next=Ie,E|=ve;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(_e===null&&(O=Me),d.baseState=O,d.firstBaseUpdate=ee,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);kr|=E,n.lanes=E,n.memoizedState=Me}}function kh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Ma={},pi=or(Ma),Ea=or(Ma),wa=or(Ma);function Fr(n){if(n===Ma)throw Error(t(174));return n}function ju(n,i){switch(Ut(wa,i),Ut(Ea,n),Ut(pi,Ma),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ge(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ge(i,n)}Ft(pi),Ut(pi,i)}function Ms(){Ft(pi),Ft(Ea),Ft(wa)}function Bh(n){Fr(wa.current);var i=Fr(pi.current),a=Ge(i,n.type);i!==a&&(Ut(Ea,n),Ut(pi,a))}function Yu(n){Ea.current===n&&(Ft(pi),Ft(Ea))}var Bt=or(0);function Go(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var $u=[];function qu(){for(var n=0;n<$u.length;n++)$u[n]._workInProgressVersionPrimary=null;$u.length=0}var Wo=A.ReactCurrentDispatcher,Ku=A.ReactCurrentBatchConfig,Or=0,zt=null,Kt=null,nn=null,Xo=!1,Ta=!1,Aa=0,l_=0;function hn(){throw Error(t(321))}function Zu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Jn(n[a],i[a]))return!1;return!0}function Qu(n,i,a,u,d,m){if(Or=m,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Wo.current=n===null||n.memoizedState===null?d_:h_,n=a(u,d),Ta){m=0;do{if(Ta=!1,Aa=0,25<=m)throw Error(t(301));m+=1,nn=Kt=null,i.updateQueue=null,Wo.current=p_,n=a(u,d)}while(Ta)}if(Wo.current=$o,i=Kt!==null&&Kt.next!==null,Or=0,nn=Kt=zt=null,Xo=!1,i)throw Error(t(300));return n}function Ju(){var n=Aa!==0;return Aa=0,n}function mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?zt.memoizedState=nn=n:nn=nn.next=n,nn}function jn(){if(Kt===null){var n=zt.alternate;n=n!==null?n.memoizedState:null}else n=Kt.next;var i=nn===null?zt.memoizedState:nn.next;if(i!==null)nn=i,Kt=n;else{if(n===null)throw Error(t(310));Kt=n,n={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},nn===null?zt.memoizedState=nn=n:nn=nn.next=n}return nn}function Ca(n,i){return typeof i=="function"?i(n):i}function ec(n){var i=jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Kt,d=u.baseQueue,m=a.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}u.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,u=u.baseState;var U=E=null,O=null,ee=m;do{var _e=ee.lane;if((Or&_e)===_e)O!==null&&(O=O.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),u=ee.hasEagerState?ee.eagerState:n(u,ee.action);else{var Me={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};O===null?(U=O=Me,E=u):O=O.next=Me,zt.lanes|=_e,kr|=_e}ee=ee.next}while(ee!==null&&ee!==m);O===null?E=u:O.next=U,Jn(u,i.memoizedState)||(Pn=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=O,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do m=d.lane,zt.lanes|=m,kr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function tc(n){var i=jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);Jn(m,i.memoizedState)||(Pn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,u]}function zh(){}function Hh(n,i){var a=zt,u=jn(),d=i(),m=!Jn(u.memoizedState,d);if(m&&(u.memoizedState=d,Pn=!0),u=u.queue,nc(Wh.bind(null,a,u,n),[n]),u.getSnapshot!==i||m||nn!==null&&nn.memoizedState.tag&1){if(a.flags|=2048,Ra(9,Gh.bind(null,a,u,d,i),void 0,null),rn===null)throw Error(t(349));(Or&30)!==0||Vh(a,i,d)}return d}function Vh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Gh(n,i,a,u){i.value=a,i.getSnapshot=u,Xh(i)&&jh(n)}function Wh(n,i,a){return a(function(){Xh(i)&&jh(n)})}function Xh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Jn(n,a)}catch{return!0}}function jh(n){var i=Di(n,1);i!==null&&ri(i,n,1,-1)}function Yh(n){var i=mi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:n},i.queue=n,n=n.dispatch=f_.bind(null,zt,n),[i.memoizedState,n]}function Ra(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function $h(){return jn().memoizedState}function jo(n,i,a,u){var d=mi();zt.flags|=n,d.memoizedState=Ra(1|i,a,void 0,u===void 0?null:u)}function Yo(n,i,a,u){var d=jn();u=u===void 0?null:u;var m=void 0;if(Kt!==null){var E=Kt.memoizedState;if(m=E.destroy,u!==null&&Zu(u,E.deps)){d.memoizedState=Ra(i,a,m,u);return}}zt.flags|=n,d.memoizedState=Ra(1|i,a,m,u)}function qh(n,i){return jo(8390656,8,n,i)}function nc(n,i){return Yo(2048,8,n,i)}function Kh(n,i){return Yo(4,2,n,i)}function Zh(n,i){return Yo(4,4,n,i)}function Qh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Jh(n,i,a){return a=a!=null?a.concat([n]):null,Yo(4,4,Qh.bind(null,i,n),a)}function ic(){}function ep(n,i){var a=jn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Zu(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function tp(n,i){var a=jn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Zu(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function np(n,i,a){return(Or&21)===0?(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=a):(Jn(a,i)||(a=bt(),zt.lanes|=a,kr|=a,n.baseState=!0),i)}function u_(n,i){var a=St;St=a!==0&&4>a?a:4,n(!0);var u=Ku.transition;Ku.transition={};try{n(!1),i()}finally{St=a,Ku.transition=u}}function ip(){return jn().memoizedState}function c_(n,i,a){var u=mr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},rp(n))sp(i,a);else if(a=Nh(n,i,a,u),a!==null){var d=Mn();ri(a,n,u,d),ap(a,i,u)}}function f_(n,i,a){var u=mr(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(rp(n))sp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,U=m(E,a);if(d.hasEagerState=!0,d.eagerState=U,Jn(U,E)){var O=i.interleaved;O===null?(d.next=d,Wu(i)):(d.next=O.next,O.next=d),i.interleaved=d;return}}catch{}finally{}a=Nh(n,i,d,u),a!==null&&(d=Mn(),ri(a,n,u,d),ap(a,i,u))}}function rp(n){var i=n.alternate;return n===zt||i!==null&&i===zt}function sp(n,i){Ta=Xo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function ap(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,tn(n,a)}}var $o={readContext:Xn,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},d_={readContext:Xn,useCallback:function(n,i){return mi().memoizedState=[n,i===void 0?null:i],n},useContext:Xn,useEffect:qh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,jo(4194308,4,Qh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return jo(4194308,4,n,i)},useInsertionEffect:function(n,i){return jo(4,2,n,i)},useMemo:function(n,i){var a=mi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=mi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=c_.bind(null,zt,n),[u.memoizedState,n]},useRef:function(n){var i=mi();return n={current:n},i.memoizedState=n},useState:Yh,useDebugValue:ic,useDeferredValue:function(n){return mi().memoizedState=n},useTransition:function(){var n=Yh(!1),i=n[0];return n=u_.bind(null,n[1]),mi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=zt,d=mi();if(kt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),rn===null)throw Error(t(349));(Or&30)!==0||Vh(u,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,qh(Wh.bind(null,u,m,n),[n]),u.flags|=2048,Ra(9,Gh.bind(null,u,m,a,i),void 0,null),a},useId:function(){var n=mi(),i=rn.identifierPrefix;if(kt){var a=Li,u=bi;a=(u&~(1<<32-ot(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Aa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=l_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},h_={readContext:Xn,useCallback:ep,useContext:Xn,useEffect:nc,useImperativeHandle:Jh,useInsertionEffect:Kh,useLayoutEffect:Zh,useMemo:tp,useReducer:ec,useRef:$h,useState:function(){return ec(Ca)},useDebugValue:ic,useDeferredValue:function(n){var i=jn();return np(i,Kt.memoizedState,n)},useTransition:function(){var n=ec(Ca)[0],i=jn().memoizedState;return[n,i]},useMutableSource:zh,useSyncExternalStore:Hh,useId:ip,unstable_isNewReconciler:!1},p_={readContext:Xn,useCallback:ep,useContext:Xn,useEffect:nc,useImperativeHandle:Jh,useInsertionEffect:Kh,useLayoutEffect:Zh,useMemo:tp,useReducer:tc,useRef:$h,useState:function(){return tc(Ca)},useDebugValue:ic,useDeferredValue:function(n){var i=jn();return Kt===null?i.memoizedState=n:np(i,Kt.memoizedState,n)},useTransition:function(){var n=tc(Ca)[0],i=jn().memoizedState;return[n,i]},useMutableSource:zh,useSyncExternalStore:Hh,useId:ip,unstable_isNewReconciler:!1};function ti(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function rc(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var qo={isMounted:function(n){return(n=n._reactInternals)?fi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Mn(),d=mr(n),m=Ui(u,d);m.payload=i,a!=null&&(m.callback=a),i=fr(n,m,d),i!==null&&(ri(i,n,d,u),Ho(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Mn(),d=mr(n),m=Ui(u,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=fr(n,m,d),i!==null&&(ri(i,n,d,u),Ho(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Mn(),u=mr(n),d=Ui(a,u);d.tag=2,i!=null&&(d.callback=i),i=fr(n,d,u),i!==null&&(ri(i,n,u,a),Ho(i,n,u))}};function op(n,i,a,u,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!pa(a,u)||!pa(d,m):!0}function lp(n,i,a){var u=!1,d=lr,m=i.contextType;return typeof m=="object"&&m!==null?m=Xn(m):(d=Rn(i)?Dr:dn.current,u=i.contextTypes,m=(u=u!=null)?ms(n,d):lr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=qo,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function up(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&qo.enqueueReplaceState(i,i.state,null)}function sc(n,i,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Xu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Xn(m):(m=Rn(i)?Dr:dn.current,d.context=ms(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(rc(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&qo.enqueueReplaceState(d,d.state,null),Vo(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Es(n,i){try{var a="",u=i;do a+=me(u),u=u.return;while(u);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function ac(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function oc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var m_=typeof WeakMap=="function"?WeakMap:Map;function cp(n,i,a){a=Ui(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){nl||(nl=!0,Mc=u),oc(n,i)},a}function fp(n,i,a){a=Ui(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){oc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){oc(n,i),typeof u!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function dp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new m_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),n=P_.bind(null,n,i,a),i.then(n,n))}function hp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function pp(n,i,a,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ui(-1,1),i.tag=2,fr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var g_=A.ReactCurrentOwner,Pn=!1;function Sn(n,i,a,u){i.child=n===null?Ih(i,null,a,u):xs(i,n.child,a,u)}function mp(n,i,a,u,d){a=a.render;var m=i.ref;return Ss(i,d),u=Qu(n,i,a,u,m,d),a=Ju(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ii(n,i,d)):(kt&&a&&Nu(i),i.flags|=1,Sn(n,i,u,d),i.child)}function gp(n,i,a,u,d){if(n===null){var m=a.type;return typeof m=="function"&&!Pc(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,vp(n,i,m,u,d)):(n=ll(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:pa,a(E,u)&&n.ref===i.ref)return Ii(n,i,d)}return i.flags|=1,n=vr(m,u),n.ref=i.ref,n.return=i,i.child=n}function vp(n,i,a,u,d){if(n!==null){var m=n.memoizedProps;if(pa(m,u)&&n.ref===i.ref)if(Pn=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Pn=!0);else return i.lanes=n.lanes,Ii(n,i,d)}return lc(n,i,a,u,d)}function _p(n,i,a){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Ts,kn),kn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ut(Ts,kn),kn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:a,Ut(Ts,kn),kn|=u}else m!==null?(u=m.baseLanes|a,i.memoizedState=null):u=a,Ut(Ts,kn),kn|=u;return Sn(n,i,d,a),i.child}function xp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function lc(n,i,a,u,d){var m=Rn(a)?Dr:dn.current;return m=ms(i,m),Ss(i,d),a=Qu(n,i,a,u,m,d),u=Ju(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ii(n,i,d)):(kt&&u&&Nu(i),i.flags|=1,Sn(n,i,a,d),i.child)}function yp(n,i,a,u,d){if(Rn(a)){var m=!0;Uo(i)}else m=!1;if(Ss(i,d),i.stateNode===null)Zo(n,i),lp(i,a,u),sc(i,a,u,d),u=!0;else if(n===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var O=E.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=Xn(ee):(ee=Rn(a)?Dr:dn.current,ee=ms(i,ee));var _e=a.getDerivedStateFromProps,Me=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";Me||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==u||O!==ee)&&up(i,E,u,ee),cr=!1;var ve=i.memoizedState;E.state=ve,Vo(i,u,E,d),O=i.memoizedState,U!==u||ve!==O||Cn.current||cr?(typeof _e=="function"&&(rc(i,a,_e,u),O=i.memoizedState),(U=cr||op(i,a,U,u,ve,O,ee))?(Me||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=O),E.props=u,E.state=O,E.context=ee,u=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,Fh(n,i),U=i.memoizedProps,ee=i.type===i.elementType?U:ti(i.type,U),E.props=ee,Me=i.pendingProps,ve=E.context,O=a.contextType,typeof O=="object"&&O!==null?O=Xn(O):(O=Rn(a)?Dr:dn.current,O=ms(i,O));var Ie=a.getDerivedStateFromProps;(_e=typeof Ie=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==Me||ve!==O)&&up(i,E,u,O),cr=!1,ve=i.memoizedState,E.state=ve,Vo(i,u,E,d);var ze=i.memoizedState;U!==Me||ve!==ze||Cn.current||cr?(typeof Ie=="function"&&(rc(i,a,Ie,u),ze=i.memoizedState),(ee=cr||op(i,a,ee,u,ve,ze,O)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,ze,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,ze,O)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ze),E.props=u,E.state=ze,E.context=O,u=ee):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),u=!1)}return uc(n,i,a,u,m,d)}function uc(n,i,a,u,d,m){xp(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return d&&Th(i,a,!1),Ii(n,i,m);u=i.stateNode,g_.current=i;var U=E&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=xs(i,n.child,null,m),i.child=xs(i,null,U,m)):Sn(n,i,U,m),i.memoizedState=u.state,d&&Th(i,a,!0),i.child}function Sp(n){var i=n.stateNode;i.pendingContext?Eh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Eh(n,i.context,!1),ju(n,i.containerInfo)}function Mp(n,i,a,u,d){return _s(),Bu(d),i.flags|=256,Sn(n,i,a,u),i.child}var cc={dehydrated:null,treeContext:null,retryLane:0};function fc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ep(n,i,a){var u=i.pendingProps,d=Bt.current,m=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ut(Bt,d&1),n===null)return ku(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,n=u.fallback,m?(u=i.mode,m=i.child,E={mode:"hidden",children:E},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=ul(E,u,0,null),n=Vr(n,u,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=fc(a),i.memoizedState=cc,n):dc(i,E));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return v_(n,i,E,u,U,d,a);if(m){m=u.fallback,E=i.mode,d=n.child,U=d.sibling;var O={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=O,i.deletions=null):(u=vr(d,O),u.subtreeFlags=d.subtreeFlags&14680064),U!==null?m=vr(U,m):(m=Vr(m,E,a,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,E=n.child.memoizedState,E=E===null?fc(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~a,i.memoizedState=cc,u}return m=n.child,n=m.sibling,u=vr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function dc(n,i){return i=ul({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ko(n,i,a,u){return u!==null&&Bu(u),xs(i,n.child,null,a),n=dc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function v_(n,i,a,u,d,m,E){if(a)return i.flags&256?(i.flags&=-257,u=ac(Error(t(422))),Ko(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=ul({mode:"visible",children:u.children},d,0,null),m=Vr(m,d,E,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&xs(i,n.child,null,E),i.child.memoizedState=fc(E),i.memoizedState=cc,m);if((i.mode&1)===0)return Ko(n,i,E,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var U=u.dgst;return u=U,m=Error(t(419)),u=ac(m,u,void 0),Ko(n,i,E,u)}if(U=(E&n.childLanes)!==0,Pn||U){if(u=rn,u!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Di(n,d),ri(u,n,d,-1))}return Rc(),u=ac(Error(t(421))),Ko(n,i,E,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=b_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,On=ar(d.nextSibling),Fn=i,kt=!0,ei=null,n!==null&&(Gn[Wn++]=bi,Gn[Wn++]=Li,Gn[Wn++]=Ur,bi=n.id,Li=n.overflow,Ur=i),i=dc(i,u.children),i.flags|=4096,i)}function wp(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Gu(n.return,i,a)}function hc(n,i,a,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=a,m.tailMode=d)}function Tp(n,i,a){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(Sn(n,i,u.children,a),u=Bt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&wp(n,a,i);else if(n.tag===19)wp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ut(Bt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Go(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),hc(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Go(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}hc(i,!0,a,null,m);break;case"together":hc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Zo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ii(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),kr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=vr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=vr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function __(n,i,a){switch(i.tag){case 3:Sp(i),_s();break;case 5:Bh(i);break;case 1:Rn(i.type)&&Uo(i);break;case 4:ju(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Ut(Bo,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ut(Bt,Bt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Ep(n,i,a):(Ut(Bt,Bt.current&1),n=Ii(n,i,a),n!==null?n.sibling:null);Ut(Bt,Bt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Tp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ut(Bt,Bt.current),u)break;return null;case 22:case 23:return i.lanes=0,_p(n,i,a)}return Ii(n,i,a)}var Ap,pc,Cp,Rp;Ap=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},pc=function(){},Cp=function(n,i,a,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Fr(pi.current);var m=null;switch(a){case"input":d=k(n,d),u=k(n,u),m=[];break;case"select":d=se({},d,{value:void 0}),u=se({},u,{value:void 0}),m=[];break;case"textarea":d=T(n,d),u=T(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=bo)}ht(a,u);var E;a=null;for(ee in d)if(!u.hasOwnProperty(ee)&&d.hasOwnProperty(ee)&&d[ee]!=null)if(ee==="style"){var U=d[ee];for(E in U)U.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?m||(m=[]):(m=m||[]).push(ee,null));for(ee in u){var O=u[ee];if(U=d!=null?d[ee]:void 0,u.hasOwnProperty(ee)&&O!==U&&(O!=null||U!=null))if(ee==="style")if(U){for(E in U)!U.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in O)O.hasOwnProperty(E)&&U[E]!==O[E]&&(a||(a={}),a[E]=O[E])}else a||(m||(m=[]),m.push(ee,a)),a=O;else ee==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,U=U?U.__html:void 0,O!=null&&U!==O&&(m=m||[]).push(ee,O)):ee==="children"?typeof O!="string"&&typeof O!="number"||(m=m||[]).push(ee,""+O):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(O!=null&&ee==="onScroll"&&Nt("scroll",n),m||U===O||(m=[])):(m=m||[]).push(ee,O))}a&&(m=m||[]).push("style",a);var ee=m;(i.updateQueue=ee)&&(i.flags|=4)}},Rp=function(n,i,a,u){a!==u&&(i.flags|=4)};function Pa(n,i){if(!kt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function pn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function x_(n,i,a){var u=i.pendingProps;switch(Fu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return Rn(i.type)&&Do(),pn(i),null;case 3:return u=i.stateNode,Ms(),Ft(Cn),Ft(dn),qu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Oo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ei!==null&&(Tc(ei),ei=null))),pc(n,i),pn(i),null;case 5:Yu(i);var d=Fr(wa.current);if(a=i.type,n!==null&&i.stateNode!=null)Cp(n,i,a,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return pn(i),null}if(n=Fr(pi.current),Oo(i)){u=i.stateNode,a=i.type;var m=i.memoizedProps;switch(u[hi]=i,u[xa]=m,n=(i.mode&1)!==0,a){case"dialog":Nt("cancel",u),Nt("close",u);break;case"iframe":case"object":case"embed":Nt("load",u);break;case"video":case"audio":for(d=0;d<ga.length;d++)Nt(ga[d],u);break;case"source":Nt("error",u);break;case"img":case"image":case"link":Nt("error",u),Nt("load",u);break;case"details":Nt("toggle",u);break;case"input":_n(u,m),Nt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Nt("invalid",u);break;case"textarea":Q(u,m),Nt("invalid",u)}ht(a,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var U=m[E];E==="children"?typeof U=="string"?u.textContent!==U&&(m.suppressHydrationWarning!==!0&&Po(u.textContent,U,n),d=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&Po(u.textContent,U,n),d=["children",""+U]):o.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&Nt("scroll",u)}switch(a){case"input":Lt(u),$e(u,m,!0);break;case"textarea":Lt(u),xe(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=bo)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ce(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(a,{is:u.is}):(n=E.createElement(a),a==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,a),n[hi]=i,n[xa]=u,Ap(n,i,!1,!1),i.stateNode=n;e:{switch(E=st(a,u),a){case"dialog":Nt("cancel",n),Nt("close",n),d=u;break;case"iframe":case"object":case"embed":Nt("load",n),d=u;break;case"video":case"audio":for(d=0;d<ga.length;d++)Nt(ga[d],n);d=u;break;case"source":Nt("error",n),d=u;break;case"img":case"image":case"link":Nt("error",n),Nt("load",n),d=u;break;case"details":Nt("toggle",n),d=u;break;case"input":_n(n,u),d=k(n,u),Nt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=se({},u,{value:void 0}),Nt("invalid",n);break;case"textarea":Q(n,u),d=T(n,u),Nt("invalid",n);break;default:d=u}ht(a,d),U=d;for(m in U)if(U.hasOwnProperty(m)){var O=U[m];m==="style"?nt(n,O):m==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ze(n,O)):m==="children"?typeof O=="string"?(a!=="textarea"||O!=="")&&Ke(n,O):typeof O=="number"&&Ke(n,""+O):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?O!=null&&m==="onScroll"&&Nt("scroll",n):O!=null&&P(n,m,O,E))}switch(a){case"input":Lt(n),$e(n,u,!1);break;case"textarea":Lt(n),xe(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ae(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?D(n,!!u.multiple,m,!1):u.defaultValue!=null&&D(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=bo)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(n&&i.stateNode!=null)Rp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Fr(wa.current),Fr(pi.current),Oo(i)){if(u=i.stateNode,a=i.memoizedProps,u[hi]=i,(m=u.nodeValue!==a)&&(n=Fn,n!==null))switch(n.tag){case 3:Po(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Po(u.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[hi]=i,i.stateNode=u}return pn(i),null;case 13:if(Ft(Bt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(kt&&On!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Lh(),_s(),i.flags|=98560,m=!1;else if(m=Oo(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[hi]=i}else _s(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),m=!1}else ei!==null&&(Tc(ei),ei=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Bt.current&1)!==0?Zt===0&&(Zt=3):Rc())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return Ms(),pc(n,i),n===null&&va(i.stateNode.containerInfo),pn(i),null;case 10:return Vu(i.type._context),pn(i),null;case 17:return Rn(i.type)&&Do(),pn(i),null;case 19:if(Ft(Bt),m=i.memoizedState,m===null)return pn(i),null;if(u=(i.flags&128)!==0,E=m.rendering,E===null)if(u)Pa(m,!1);else{if(Zt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Go(n),E!==null){for(i.flags|=128,Pa(m,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)m=a,n=u,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ut(Bt,Bt.current&1|2),i.child}n=n.sibling}m.tail!==null&&q()>As&&(i.flags|=128,u=!0,Pa(m,!1),i.lanes=4194304)}else{if(!u)if(n=Go(E),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Pa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!kt)return pn(i),null}else 2*q()-m.renderingStartTime>As&&a!==1073741824&&(i.flags|=128,u=!0,Pa(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(a=m.last,a!==null?a.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=q(),i.sibling=null,a=Bt.current,Ut(Bt,u?a&1|2:a&1),i):(pn(i),null);case 22:case 23:return Cc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(kn&1073741824)!==0&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function y_(n,i){switch(Fu(i),i.tag){case 1:return Rn(i.type)&&Do(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ms(),Ft(Cn),Ft(dn),qu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Yu(i),null;case 13:if(Ft(Bt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));_s()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ft(Bt),null;case 4:return Ms(),null;case 10:return Vu(i.type._context),null;case 22:case 23:return Cc(),null;case 24:return null;default:return null}}var Qo=!1,mn=!1,S_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function ws(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Xt(n,i,u)}else a.current=null}function mc(n,i,a){try{a()}catch(u){Xt(n,i,u)}}var Pp=!1;function M_(n,i){if(Cu=_o,n=oh(),xu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,U=-1,O=-1,ee=0,_e=0,Me=n,ve=null;t:for(;;){for(var Ie;Me!==a||d!==0&&Me.nodeType!==3||(U=E+d),Me!==m||u!==0&&Me.nodeType!==3||(O=E+u),Me.nodeType===3&&(E+=Me.nodeValue.length),(Ie=Me.firstChild)!==null;)ve=Me,Me=Ie;for(;;){if(Me===n)break t;if(ve===a&&++ee===d&&(U=E),ve===m&&++_e===u&&(O=E),(Ie=Me.nextSibling)!==null)break;Me=ve,ve=Me.parentNode}Me=Ie}a=U===-1||O===-1?null:{start:U,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ru={focusedElem:n,selectionRange:a},_o=!1,Fe=i;Fe!==null;)if(i=Fe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Fe=n;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,jt=ze.memoizedState,Y=i.stateNode,G=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ti(i.type,Ve),jt);Y.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Xt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Fe=n;break}Fe=i.return}return ze=Pp,Pp=!1,ze}function ba(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&mc(i,a,m)}d=d.next}while(d!==u)}}function Jo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function gc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function bp(n){var i=n.alternate;i!==null&&(n.alternate=null,bp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[hi],delete i[xa],delete i[Du],delete i[r_],delete i[s_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Lp(n){return n.tag===5||n.tag===3||n.tag===4}function Dp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Lp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function vc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=bo));else if(u!==4&&(n=n.child,n!==null))for(vc(n,i,a),n=n.sibling;n!==null;)vc(n,i,a),n=n.sibling}function _c(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(_c(n,i,a),n=n.sibling;n!==null;)_c(n,i,a),n=n.sibling}var ln=null,ni=!1;function dr(n,i,a){for(a=a.child;a!==null;)Up(n,i,a),a=a.sibling}function Up(n,i,a){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(et,a)}catch{}switch(a.tag){case 5:mn||ws(a,i);case 6:var u=ln,d=ni;ln=null,dr(n,i,a),ln=u,ni=d,ln!==null&&(ni?(n=ln,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):ln.removeChild(a.stateNode));break;case 18:ln!==null&&(ni?(n=ln,a=a.stateNode,n.nodeType===8?Lu(n.parentNode,a):n.nodeType===1&&Lu(n,a),la(n)):Lu(ln,a.stateNode));break;case 4:u=ln,d=ni,ln=a.stateNode.containerInfo,ni=!0,dr(n,i,a),ln=u,ni=d;break;case 0:case 11:case 14:case 15:if(!mn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&mc(a,i,E),d=d.next}while(d!==u)}dr(n,i,a);break;case 1:if(!mn&&(ws(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(U){Xt(a,i,U)}dr(n,i,a);break;case 21:dr(n,i,a);break;case 22:a.mode&1?(mn=(u=mn)||a.memoizedState!==null,dr(n,i,a),mn=u):dr(n,i,a);break;default:dr(n,i,a)}}function Ip(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new S_),i.forEach(function(u){var d=L_.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function ii(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var m=n,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:ln=U.stateNode,ni=!1;break e;case 3:ln=U.stateNode.containerInfo,ni=!0;break e;case 4:ln=U.stateNode.containerInfo,ni=!0;break e}U=U.return}if(ln===null)throw Error(t(160));Up(m,E,d),ln=null,ni=!1;var O=d.alternate;O!==null&&(O.return=null),d.return=null}catch(ee){Xt(d,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Np(i,n),i=i.sibling}function Np(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ii(i,n),gi(n),u&4){try{ba(3,n,n.return),Jo(3,n)}catch(Ve){Xt(n,n.return,Ve)}try{ba(5,n,n.return)}catch(Ve){Xt(n,n.return,Ve)}}break;case 1:ii(i,n),gi(n),u&512&&a!==null&&ws(a,a.return);break;case 5:if(ii(i,n),gi(n),u&512&&a!==null&&ws(a,a.return),n.flags&32){var d=n.stateNode;try{Ke(d,"")}catch(Ve){Xt(n,n.return,Ve)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,E=a!==null?a.memoizedProps:m,U=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&mt(d,m),st(U,E);var ee=st(U,m);for(E=0;E<O.length;E+=2){var _e=O[E],Me=O[E+1];_e==="style"?nt(d,Me):_e==="dangerouslySetInnerHTML"?Ze(d,Me):_e==="children"?Ke(d,Me):P(d,_e,Me,ee)}switch(U){case"input":dt(d,m);break;case"textarea":he(d,m);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ie=m.value;Ie!=null?D(d,!!m.multiple,Ie,!1):ve!==!!m.multiple&&(m.defaultValue!=null?D(d,!!m.multiple,m.defaultValue,!0):D(d,!!m.multiple,m.multiple?[]:"",!1))}d[xa]=m}catch(Ve){Xt(n,n.return,Ve)}}break;case 6:if(ii(i,n),gi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ve){Xt(n,n.return,Ve)}}break;case 3:if(ii(i,n),gi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{la(i.containerInfo)}catch(Ve){Xt(n,n.return,Ve)}break;case 4:ii(i,n),gi(n);break;case 13:ii(i,n),gi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Sc=q())),u&4&&Ip(n);break;case 22:if(_e=a!==null&&a.memoizedState!==null,n.mode&1?(mn=(ee=mn)||_e,ii(i,n),mn=ee):ii(i,n),gi(n),u&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!_e&&(n.mode&1)!==0)for(Fe=n,_e=n.child;_e!==null;){for(Me=Fe=_e;Fe!==null;){switch(ve=Fe,Ie=ve.child,ve.tag){case 0:case 11:case 14:case 15:ba(4,ve,ve.return);break;case 1:ws(ve,ve.return);var ze=ve.stateNode;if(typeof ze.componentWillUnmount=="function"){u=ve,a=ve.return;try{i=u,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Ve){Xt(u,a,Ve)}}break;case 5:ws(ve,ve.return);break;case 22:if(ve.memoizedState!==null){kp(Me);continue}}Ie!==null?(Ie.return=ve,Fe=Ie):kp(Me)}_e=_e.sibling}e:for(_e=null,Me=n;;){if(Me.tag===5){if(_e===null){_e=Me;try{d=Me.stateNode,ee?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=Me.stateNode,O=Me.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,U.style.display=tt("display",E))}catch(Ve){Xt(n,n.return,Ve)}}}else if(Me.tag===6){if(_e===null)try{Me.stateNode.nodeValue=ee?"":Me.memoizedProps}catch(Ve){Xt(n,n.return,Ve)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;_e===Me&&(_e=null),Me=Me.return}_e===Me&&(_e=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:ii(i,n),gi(n),u&4&&Ip(n);break;case 21:break;default:ii(i,n),gi(n)}}function gi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Lp(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Ke(d,""),u.flags&=-33);var m=Dp(n);_c(n,m,d);break;case 3:case 4:var E=u.stateNode.containerInfo,U=Dp(n);vc(n,U,E);break;default:throw Error(t(161))}}catch(O){Xt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function E_(n,i,a){Fe=n,Fp(n)}function Fp(n,i,a){for(var u=(n.mode&1)!==0;Fe!==null;){var d=Fe,m=d.child;if(d.tag===22&&u){var E=d.memoizedState!==null||Qo;if(!E){var U=d.alternate,O=U!==null&&U.memoizedState!==null||mn;U=Qo;var ee=mn;if(Qo=E,(mn=O)&&!ee)for(Fe=d;Fe!==null;)E=Fe,O=E.child,E.tag===22&&E.memoizedState!==null?Bp(d):O!==null?(O.return=E,Fe=O):Bp(d);for(;m!==null;)Fe=m,Fp(m),m=m.sibling;Fe=d,Qo=U,mn=ee}Op(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Fe=m):Op(n)}}function Op(n){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:mn||Jo(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!mn)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ti(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&kh(i,m,u);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}kh(i,E,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&a.focus();break;case"img":O.src&&(a.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var Me=_e.dehydrated;Me!==null&&la(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}mn||i.flags&512&&gc(i)}catch(ve){Xt(i,i.return,ve)}}if(i===n){Fe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function kp(n){for(;Fe!==null;){var i=Fe;if(i===n){Fe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function Bp(n){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Jo(4,i)}catch(O){Xt(i,a,O)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(O){Xt(i,d,O)}}var m=i.return;try{gc(i)}catch(O){Xt(i,m,O)}break;case 5:var E=i.return;try{gc(i)}catch(O){Xt(i,E,O)}}}catch(O){Xt(i,i.return,O)}if(i===n){Fe=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Fe=U;break}Fe=i.return}}var w_=Math.ceil,el=A.ReactCurrentDispatcher,xc=A.ReactCurrentOwner,Yn=A.ReactCurrentBatchConfig,Mt=0,rn=null,Yt=null,un=0,kn=0,Ts=or(0),Zt=0,La=null,kr=0,tl=0,yc=0,Da=null,bn=null,Sc=0,As=1/0,Ni=null,nl=!1,Mc=null,hr=null,il=!1,pr=null,rl=0,Ua=0,Ec=null,sl=-1,al=0;function Mn(){return(Mt&6)!==0?q():sl!==-1?sl:sl=q()}function mr(n){return(n.mode&1)===0?1:(Mt&2)!==0&&un!==0?un&-un:o_.transition!==null?(al===0&&(al=bt()),al):(n=St,n!==0||(n=window.event,n=n===void 0?16:Hd(n.type)),n)}function ri(n,i,a,u){if(50<Ua)throw Ua=0,Ec=null,Error(t(185));en(n,a,u),((Mt&2)===0||n!==rn)&&(n===rn&&((Mt&2)===0&&(tl|=a),Zt===4&&gr(n,un)),Ln(n,u),a===1&&Mt===0&&(i.mode&1)===0&&(As=q()+500,Io&&ur()))}function Ln(n,i){var a=n.callbackNode;yn(n,i);var u=cn(n,n===rn?un:0);if(u===0)a!==null&&R(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&R(a),i===1)n.tag===0?a_(Hp.bind(null,n)):Ah(Hp.bind(null,n)),n_(function(){(Mt&6)===0&&ur()}),a=null;else{switch(di(u)){case 1:a=Ee;break;case 4:a=Pe;break;case 16:a=Ue;break;case 536870912:a=it;break;default:a=Ue}a=qp(a,zp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function zp(n,i){if(sl=-1,al=0,(Mt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Cs()&&n.callbackNode!==a)return null;var u=cn(n,n===rn?un:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=ol(n,u);else{i=u;var d=Mt;Mt|=2;var m=Gp();(rn!==n||un!==i)&&(Ni=null,As=q()+500,zr(n,i));do try{C_();break}catch(U){Vp(n,U)}while(!0);Hu(),el.current=m,Mt=d,Yt!==null?i=0:(rn=null,un=0,i=Zt)}if(i!==0){if(i===2&&(d=Ci(n),d!==0&&(u=d,i=wc(n,d))),i===1)throw a=La,zr(n,0),gr(n,u),Ln(n,q()),a;if(i===6)gr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!T_(d)&&(i=ol(n,u),i===2&&(m=Ci(n),m!==0&&(u=m,i=wc(n,m))),i===1))throw a=La,zr(n,0),gr(n,u),Ln(n,q()),a;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Hr(n,bn,Ni);break;case 3:if(gr(n,u),(u&130023424)===u&&(i=Sc+500-q(),10<i)){if(cn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Mn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=bu(Hr.bind(null,n,bn,Ni),i);break}Hr(n,bn,Ni);break;case 4:if(gr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var E=31-ot(u);m=1<<E,E=i[E],E>d&&(d=E),u&=~m}if(u=d,u=q()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*w_(u/1960))-u,10<u){n.timeoutHandle=bu(Hr.bind(null,n,bn,Ni),u);break}Hr(n,bn,Ni);break;case 5:Hr(n,bn,Ni);break;default:throw Error(t(329))}}}return Ln(n,q()),n.callbackNode===a?zp.bind(null,n):null}function wc(n,i){var a=Da;return n.current.memoizedState.isDehydrated&&(zr(n,i).flags|=256),n=ol(n,i),n!==2&&(i=bn,bn=a,i!==null&&Tc(i)),n}function Tc(n){bn===null?bn=n:bn.push.apply(bn,n)}function T_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],m=d.getSnapshot;d=d.value;try{if(!Jn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function gr(n,i){for(i&=~yc,i&=~tl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ot(i),u=1<<a;n[a]=-1,i&=~u}}function Hp(n){if((Mt&6)!==0)throw Error(t(327));Cs();var i=cn(n,0);if((i&1)===0)return Ln(n,q()),null;var a=ol(n,i);if(n.tag!==0&&a===2){var u=Ci(n);u!==0&&(i=u,a=wc(n,u))}if(a===1)throw a=La,zr(n,0),gr(n,i),Ln(n,q()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Hr(n,bn,Ni),Ln(n,q()),null}function Ac(n,i){var a=Mt;Mt|=1;try{return n(i)}finally{Mt=a,Mt===0&&(As=q()+500,Io&&ur())}}function Br(n){pr!==null&&pr.tag===0&&(Mt&6)===0&&Cs();var i=Mt;Mt|=1;var a=Yn.transition,u=St;try{if(Yn.transition=null,St=1,n)return n()}finally{St=u,Yn.transition=a,Mt=i,(Mt&6)===0&&ur()}}function Cc(){kn=Ts.current,Ft(Ts)}function zr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,t_(a)),Yt!==null)for(a=Yt.return;a!==null;){var u=a;switch(Fu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Do();break;case 3:Ms(),Ft(Cn),Ft(dn),qu();break;case 5:Yu(u);break;case 4:Ms();break;case 13:Ft(Bt);break;case 19:Ft(Bt);break;case 10:Vu(u.type._context);break;case 22:case 23:Cc()}a=a.return}if(rn=n,Yt=n=vr(n.current,null),un=kn=i,Zt=0,La=null,yc=tl=kr=0,bn=Da=null,Nr!==null){for(i=0;i<Nr.length;i++)if(a=Nr[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,m=a.pending;if(m!==null){var E=m.next;m.next=d,u.next=E}a.pending=u}Nr=null}return n}function Vp(n,i){do{var a=Yt;try{if(Hu(),Wo.current=$o,Xo){for(var u=zt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Xo=!1}if(Or=0,nn=Kt=zt=null,Ta=!1,Aa=0,xc.current=null,a===null||a.return===null){Zt=1,La=i,Yt=null;break}e:{var m=n,E=a.return,U=a,O=i;if(i=un,U.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var ee=O,_e=U,Me=_e.tag;if((_e.mode&1)===0&&(Me===0||Me===11||Me===15)){var ve=_e.alternate;ve?(_e.updateQueue=ve.updateQueue,_e.memoizedState=ve.memoizedState,_e.lanes=ve.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ie=hp(E);if(Ie!==null){Ie.flags&=-257,pp(Ie,E,U,m,i),Ie.mode&1&&dp(m,ee,i),i=Ie,O=ee;var ze=i.updateQueue;if(ze===null){var Ve=new Set;Ve.add(O),i.updateQueue=Ve}else ze.add(O);break e}else{if((i&1)===0){dp(m,ee,i),Rc();break e}O=Error(t(426))}}else if(kt&&U.mode&1){var jt=hp(E);if(jt!==null){(jt.flags&65536)===0&&(jt.flags|=256),pp(jt,E,U,m,i),Bu(Es(O,U));break e}}m=O=Es(O,U),Zt!==4&&(Zt=2),Da===null?Da=[m]:Da.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Y=cp(m,O,i);Oh(m,Y);break e;case 1:U=O;var G=m.type,Z=m.stateNode;if((m.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(hr===null||!hr.has(Z)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=fp(m,U,i);Oh(m,Te);break e}}m=m.return}while(m!==null)}Xp(a)}catch(je){i=je,Yt===a&&a!==null&&(Yt=a=a.return);continue}break}while(!0)}function Gp(){var n=el.current;return el.current=$o,n===null?$o:n}function Rc(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),rn===null||(kr&268435455)===0&&(tl&268435455)===0||gr(rn,un)}function ol(n,i){var a=Mt;Mt|=2;var u=Gp();(rn!==n||un!==i)&&(Ni=null,zr(n,i));do try{A_();break}catch(d){Vp(n,d)}while(!0);if(Hu(),Mt=a,el.current=u,Yt!==null)throw Error(t(261));return rn=null,un=0,Zt}function A_(){for(;Yt!==null;)Wp(Yt)}function C_(){for(;Yt!==null&&!X();)Wp(Yt)}function Wp(n){var i=$p(n.alternate,n,kn);n.memoizedProps=n.pendingProps,i===null?Xp(n):Yt=i,xc.current=null}function Xp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=x_(a,i,kn),a!==null){Yt=a;return}}else{if(a=y_(a,i),a!==null){a.flags&=32767,Yt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Zt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=n}while(i!==null);Zt===0&&(Zt=5)}function Hr(n,i,a){var u=St,d=Yn.transition;try{Yn.transition=null,St=1,R_(n,i,a,u)}finally{Yn.transition=d,St=u}return null}function R_(n,i,a,u){do Cs();while(pr!==null);if((Mt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(on(n,m),n===rn&&(Yt=rn=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||il||(il=!0,qp(Ue,function(){return Cs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Yn.transition,Yn.transition=null;var E=St;St=1;var U=Mt;Mt|=4,xc.current=null,M_(n,a),Np(a,n),$v(Ru),_o=!!Cu,Ru=Cu=null,n.current=a,E_(a),te(),Mt=U,St=E,Yn.transition=m}else n.current=a;if(il&&(il=!1,pr=n,rl=d),m=n.pendingLanes,m===0&&(hr=null),_t(a.stateNode),Ln(n,q()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(nl)throw nl=!1,n=Mc,Mc=null,n;return(rl&1)!==0&&n.tag!==0&&Cs(),m=n.pendingLanes,(m&1)!==0?n===Ec?Ua++:(Ua=0,Ec=n):Ua=0,ur(),null}function Cs(){if(pr!==null){var n=di(rl),i=Yn.transition,a=St;try{if(Yn.transition=null,St=16>n?16:n,pr===null)var u=!1;else{if(n=pr,pr=null,rl=0,(Mt&6)!==0)throw Error(t(331));var d=Mt;for(Mt|=4,Fe=n.current;Fe!==null;){var m=Fe,E=m.child;if((Fe.flags&16)!==0){var U=m.deletions;if(U!==null){for(var O=0;O<U.length;O++){var ee=U[O];for(Fe=ee;Fe!==null;){var _e=Fe;switch(_e.tag){case 0:case 11:case 15:ba(8,_e,m)}var Me=_e.child;if(Me!==null)Me.return=_e,Fe=Me;else for(;Fe!==null;){_e=Fe;var ve=_e.sibling,Ie=_e.return;if(bp(_e),_e===ee){Fe=null;break}if(ve!==null){ve.return=Ie,Fe=ve;break}Fe=Ie}}}var ze=m.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var jt=Ve.sibling;Ve.sibling=null,Ve=jt}while(Ve!==null)}}Fe=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Fe=E;else e:for(;Fe!==null;){if(m=Fe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ba(9,m,m.return)}var Y=m.sibling;if(Y!==null){Y.return=m.return,Fe=Y;break e}Fe=m.return}}var G=n.current;for(Fe=G;Fe!==null;){E=Fe;var Z=E.child;if((E.subtreeFlags&2064)!==0&&Z!==null)Z.return=E,Fe=Z;else e:for(E=G;Fe!==null;){if(U=Fe,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Jo(9,U)}}catch(je){Xt(U,U.return,je)}if(U===E){Fe=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,Fe=Te;break e}Fe=U.return}}if(Mt=d,ur(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(et,n)}catch{}u=!0}return u}finally{St=a,Yn.transition=i}}return!1}function jp(n,i,a){i=Es(a,i),i=cp(n,i,1),n=fr(n,i,1),i=Mn(),n!==null&&(en(n,1,i),Ln(n,i))}function Xt(n,i,a){if(n.tag===3)jp(n,n,a);else for(;i!==null;){if(i.tag===3){jp(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(hr===null||!hr.has(u))){n=Es(a,n),n=fp(i,n,1),i=fr(i,n,1),n=Mn(),i!==null&&(en(i,1,n),Ln(i,n));break}}i=i.return}}function P_(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&a,rn===n&&(un&a)===a&&(Zt===4||Zt===3&&(un&130023424)===un&&500>q()-Sc?zr(n,0):yc|=a),Ln(n,i)}function Yp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Wt,Wt<<=1,(Wt&130023424)===0&&(Wt=4194304)));var a=Mn();n=Di(n,i),n!==null&&(en(n,i,a),Ln(n,a))}function b_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Yp(n,a)}function L_(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Yp(n,a)}var $p;$p=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Cn.current)Pn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Pn=!1,__(n,i,a);Pn=(n.flags&131072)!==0}else Pn=!1,kt&&(i.flags&1048576)!==0&&Ch(i,Fo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Zo(n,i),n=i.pendingProps;var d=ms(i,dn.current);Ss(i,a),d=Qu(null,i,u,n,d,a);var m=Ju();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(u)?(m=!0,Uo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Xu(i),d.updater=qo,i.stateNode=d,d._reactInternals=i,sc(i,u,n,a),i=uc(null,i,u,!0,m,a)):(i.tag=0,kt&&m&&Nu(i),Sn(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Zo(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=U_(u),n=ti(u,n),d){case 0:i=lc(null,i,u,n,a);break e;case 1:i=yp(null,i,u,n,a);break e;case 11:i=mp(null,i,u,n,a);break e;case 14:i=gp(null,i,u,ti(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),lc(n,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),yp(n,i,u,d,a);case 3:e:{if(Sp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,Fh(n,i),Vo(i,u,null,a);var E=i.memoizedState;if(u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Es(Error(t(423)),i),i=Mp(n,i,u,a,d);break e}else if(u!==d){d=Es(Error(t(424)),i),i=Mp(n,i,u,a,d);break e}else for(On=ar(i.stateNode.containerInfo.firstChild),Fn=i,kt=!0,ei=null,a=Ih(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_s(),u===d){i=Ii(n,i,a);break e}Sn(n,i,u,a)}i=i.child}return i;case 5:return Bh(i),n===null&&ku(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,E=d.children,Pu(u,d)?E=null:m!==null&&Pu(u,m)&&(i.flags|=32),xp(n,i),Sn(n,i,E,a),i.child;case 6:return n===null&&ku(i),null;case 13:return Ep(n,i,a);case 4:return ju(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=xs(i,null,u,a):Sn(n,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),mp(n,i,u,d,a);case 7:return Sn(n,i,i.pendingProps,a),i.child;case 8:return Sn(n,i,i.pendingProps.children,a),i.child;case 12:return Sn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,Ut(Bo,u._currentValue),u._currentValue=E,m!==null)if(Jn(m.value,E)){if(m.children===d.children&&!Cn.current){i=Ii(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){E=m.child;for(var O=U.firstContext;O!==null;){if(O.context===u){if(m.tag===1){O=Ui(-1,a&-a),O.tag=2;var ee=m.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?O.next=O:(O.next=_e.next,_e.next=O),ee.pending=O}}m.lanes|=a,O=m.alternate,O!==null&&(O.lanes|=a),Gu(m.return,a,i),U.lanes|=a;break}O=O.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=a,U=E.alternate,U!==null&&(U.lanes|=a),Gu(E,a,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}Sn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Ss(i,a),d=Xn(d),u=u(d),i.flags|=1,Sn(n,i,u,a),i.child;case 14:return u=i.type,d=ti(u,i.pendingProps),d=ti(u.type,d),gp(n,i,u,d,a);case 15:return vp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),Zo(n,i),i.tag=1,Rn(u)?(n=!0,Uo(i)):n=!1,Ss(i,a),lp(i,u,d),sc(i,u,d,a),uc(null,i,u,!0,n,a);case 19:return Tp(n,i,a);case 22:return _p(n,i,a)}throw Error(t(156,i.tag))};function qp(n,i){return mo(n,i)}function D_(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(n,i,a,u){return new D_(n,i,a,u)}function Pc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function U_(n){if(typeof n=="function")return Pc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ae)return 11;if(n===ge)return 14}return 2}function vr(n,i){var a=n.alternate;return a===null?(a=$n(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ll(n,i,a,u,d,m){var E=2;if(u=n,typeof n=="function")Pc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case I:return Vr(a.children,d,m,i);case H:E=8,d|=8;break;case b:return n=$n(12,a,i,d|2),n.elementType=b,n.lanes=m,n;case ne:return n=$n(13,a,i,d),n.elementType=ne,n.lanes=m,n;case de:return n=$n(19,a,i,d),n.elementType=de,n.lanes=m,n;case ue:return ul(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:E=10;break e;case B:E=9;break e;case ae:E=11;break e;case ge:E=14;break e;case oe:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=$n(E,a,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Vr(n,i,a,u){return n=$n(7,n,u,i),n.lanes=a,n}function ul(n,i,a,u){return n=$n(22,n,u,i),n.elementType=ue,n.lanes=a,n.stateNode={isHidden:!1},n}function bc(n,i,a){return n=$n(6,n,null,i),n.lanes=a,n}function Lc(n,i,a){return i=$n(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function I_(n,i,a,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fn(0),this.expirationTimes=fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Dc(n,i,a,u,d,m,E,U,O){return n=new I_(n,i,a,U,O),i===1?(i=1,m===!0&&(i|=8)):i=0,m=$n(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xu(m),n}function N_(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Kp(n){if(!n)return lr;n=n._reactInternals;e:{if(fi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Rn(a))return wh(n,a,i)}return i}function Zp(n,i,a,u,d,m,E,U,O){return n=Dc(a,u,!0,n,d,m,E,U,O),n.context=Kp(null),a=n.current,u=Mn(),d=mr(a),m=Ui(u,d),m.callback=i??null,fr(a,m,d),n.current.lanes=d,en(n,d,u),Ln(n,u),n}function cl(n,i,a,u){var d=i.current,m=Mn(),E=mr(d);return a=Kp(a),i.context===null?i.context=a:i.pendingContext=a,i=Ui(m,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=fr(d,i,E),n!==null&&(ri(n,d,E,m),Ho(n,d,E)),E}function fl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Qp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Uc(n,i){Qp(n,i),(n=n.alternate)&&Qp(n,i)}function F_(){return null}var Jp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ic(n){this._internalRoot=n}dl.prototype.render=Ic.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));cl(n,i,null,null)},dl.prototype.unmount=Ic.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Br(function(){cl(null,n,null,null)}),i[Ri]=null}};function dl(n){this._internalRoot=n}dl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Fd();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ir.length&&i!==0&&i<ir[a].priority;a++);ir.splice(a,0,n),a===0&&Bd(n)}};function Nc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function hl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function em(){}function O_(n,i,a,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var ee=fl(E);m.call(ee)}}var E=Zp(i,u,n,0,null,!1,!1,"",em);return n._reactRootContainer=E,n[Ri]=E.current,va(n.nodeType===8?n.parentNode:n),Br(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var U=u;u=function(){var ee=fl(O);U.call(ee)}}var O=Dc(n,0,!1,null,null,!1,!1,"",em);return n._reactRootContainer=O,n[Ri]=O.current,va(n.nodeType===8?n.parentNode:n),Br(function(){cl(i,O,a,u)}),O}function pl(n,i,a,u,d){var m=a._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var U=d;d=function(){var O=fl(E);U.call(O)}}cl(i,E,n,d)}else E=O_(a,i,n,d,u);return fl(E)}Id=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=gt(i.pendingLanes);a!==0&&(tn(i,a|1),Ln(i,q()),(Mt&6)===0&&(As=q()+500,ur()))}break;case 13:Br(function(){var u=Di(n,1);if(u!==null){var d=Mn();ri(u,n,1,d)}}),Uc(n,1)}},au=function(n){if(n.tag===13){var i=Di(n,134217728);if(i!==null){var a=Mn();ri(i,n,134217728,a)}Uc(n,134217728)}},Nd=function(n){if(n.tag===13){var i=mr(n),a=Di(n,i);if(a!==null){var u=Mn();ri(a,n,i,u)}Uc(n,i)}},Fd=function(){return St},Od=function(n,i){var a=St;try{return St=n,i()}finally{St=a}},Re=function(n,i,a){switch(i){case"input":if(dt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var d=Lo(u);if(!d)throw Error(t(90));Dt(u),dt(u,d)}}}break;case"textarea":he(n,a);break;case"select":i=a.value,i!=null&&D(n,!!a.multiple,i,!1)}},It=Ac,qt=Br;var k_={usingClientEntryPoint:!1,Events:[ya,hs,Lo,Le,at,Ac]},Ia={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},B_={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ho(n),n===null?null:n.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||F_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{et=ml.inject(B_),He=ml}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k_,Dn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nc(i))throw Error(t(200));return N_(n,i,null,a)},Dn.createRoot=function(n,i){if(!Nc(n))throw Error(t(299));var a=!1,u="",d=Jp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Dc(n,1,!1,null,null,a,!1,u,d),n[Ri]=i.current,va(n.nodeType===8?n.parentNode:n),new Ic(i)},Dn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ho(i),n=n===null?null:n.stateNode,n},Dn.flushSync=function(n){return Br(n)},Dn.hydrate=function(n,i,a){if(!hl(i))throw Error(t(200));return pl(null,n,i,!0,a)},Dn.hydrateRoot=function(n,i,a){if(!Nc(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,m="",E=Jp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Zp(i,null,n,1,a??null,d,!1,m,E),n[Ri]=i.current,va(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new dl(i)},Dn.render=function(n,i,a){if(!hl(i))throw Error(t(200));return pl(null,n,i,!1,a)},Dn.unmountComponentAtNode=function(n){if(!hl(n))throw Error(t(40));return n._reactRootContainer?(Br(function(){pl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ri]=null})}),!0):!1},Dn.unstable_batchedUpdates=Ac,Dn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!hl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return pl(n,i,a,!1,u)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var lm;function Y_(){if(lm)return kc.exports;lm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),kc.exports=j_(),kc.exports}var um;function $_(){if(um)return gl;um=1;var r=Y_();return gl.createRoot=r.createRoot,gl.hydrateRoot=r.hydrateRoot,gl}var q_=$_(),Fa={},cm;function K_(){if(cm)return Fa;cm=1,Object.defineProperty(Fa,"__esModule",{value:!0}),Fa.parse=c,Fa.serialize=p;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const _=function(){};return _.prototype=Object.create(null),_})();function c(_,S){const M=new l,w=_.length;if(w<2)return M;const y=(S==null?void 0:S.decode)||g;let v=0;do{const L=_.indexOf("=",v);if(L===-1)break;const P=_.indexOf(";",v),A=P===-1?w:P;if(L>A){v=_.lastIndexOf(";",L-1)+1;continue}const z=f(_,v,L),F=h(_,L,z),I=_.slice(z,F);if(M[I]===void 0){let H=f(_,L+1,A),b=h(_,A,H);const C=y(_.slice(H,b));M[I]=C}v=A+1}while(v<w);return M}function f(_,S,M){do{const w=_.charCodeAt(S);if(w!==32&&w!==9)return S}while(++S<M);return M}function h(_,S,M){for(;S>M;){const w=_.charCodeAt(--S);if(w!==32&&w!==9)return S+1}return M}function p(_,S,M){const w=(M==null?void 0:M.encode)||encodeURIComponent;if(!r.test(_))throw new TypeError(`argument name is invalid: ${_}`);const y=w(S);if(!e.test(y))throw new TypeError(`argument val is invalid: ${S}`);let v=_+"="+y;if(!M)return v;if(M.maxAge!==void 0){if(!Number.isInteger(M.maxAge))throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);v+="; Max-Age="+M.maxAge}if(M.domain){if(!t.test(M.domain))throw new TypeError(`option domain is invalid: ${M.domain}`);v+="; Domain="+M.domain}if(M.path){if(!s.test(M.path))throw new TypeError(`option path is invalid: ${M.path}`);v+="; Path="+M.path}if(M.expires){if(!x(M.expires)||!Number.isFinite(M.expires.valueOf()))throw new TypeError(`option expires is invalid: ${M.expires}`);v+="; Expires="+M.expires.toUTCString()}if(M.httpOnly&&(v+="; HttpOnly"),M.secure&&(v+="; Secure"),M.partitioned&&(v+="; Partitioned"),M.priority)switch(typeof M.priority=="string"?M.priority.toLowerCase():void 0){case"low":v+="; Priority=Low";break;case"medium":v+="; Priority=Medium";break;case"high":v+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${M.priority}`)}if(M.sameSite)switch(typeof M.sameSite=="string"?M.sameSite.toLowerCase():M.sameSite){case!0:case"strict":v+="; SameSite=Strict";break;case"lax":v+="; SameSite=Lax";break;case"none":v+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)}return v}function g(_){if(_.indexOf("%")===-1)return _;try{return decodeURIComponent(_)}catch{return _}}function x(_){return o.call(_)==="[object Date]"}return Fa}K_();var fm="popstate";function Z_(r={}){function e(s,o){let{pathname:l,search:c,hash:f}=s.location;return yf("",{pathname:l,search:c,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Ya(o)}return J_(e,t,null,r)}function Ht(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function yi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Q_(){return Math.random().toString(36).substring(2,10)}function dm(r,e){return{usr:r.state,key:r.key,idx:e}}function yf(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Zs(e):e,state:t,key:e&&e.key||s||Q_()}}function Ya({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Zs(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function J_(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,c=o.history,f="POP",h=null,p=g();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function g(){return(c.state||{idx:null}).idx}function x(){f="POP";let y=g(),v=y==null?null:y-p;p=y,h&&h({action:f,location:w.location,delta:v})}function _(y,v){f="PUSH";let L=yf(w.location,y,v);p=g()+1;let P=dm(L,p),A=w.createHref(L);try{c.pushState(P,"",A)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;o.location.assign(A)}l&&h&&h({action:f,location:w.location,delta:1})}function S(y,v){f="REPLACE";let L=yf(w.location,y,v);p=g();let P=dm(L,p),A=w.createHref(L);c.replaceState(P,"",A),l&&h&&h({action:f,location:w.location,delta:0})}function M(y){let v=o.location.origin!=="null"?o.location.origin:o.location.href,L=typeof y=="string"?y:Ya(y);return L=L.replace(/ $/,"%20"),Ht(v,`No window.location.(origin|href) available to create URL for href: ${L}`),new URL(L,v)}let w={get action(){return f},get location(){return r(o,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(fm,x),h=y,()=>{o.removeEventListener(fm,x),h=null}},createHref(y){return e(o,y)},createURL:M,encodeLocation(y){let v=M(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:_,replace:S,go(y){return c.go(y)}};return w}function vg(r,e,t="/"){return e0(r,e,t,!1)}function e0(r,e,t,s){let o=typeof e=="string"?Zs(e):e,l=$i(o.pathname||"/",t);if(l==null)return null;let c=_g(r);t0(c);let f=null;for(let h=0;f==null&&h<c.length;++h){let p=d0(l);f=c0(c[h],p,s)}return f}function _g(r,e=[],t=[],s=""){let o=(l,c,f)=>{let h={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};h.relativePath.startsWith("/")&&(Ht(h.relativePath.startsWith(s),`Absolute route path "${h.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(s.length));let p=Xi([s,h.relativePath]),g=t.concat(h);l.children&&l.children.length>0&&(Ht(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),_g(l.children,e,g,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:l0(p,l.index),routesMeta:g})};return r.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,c);else for(let h of xg(l.path))o(l,c,h)}),e}function xg(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let c=xg(s.join("/")),f=[];return f.push(...c.map(h=>h===""?l:[l,h].join("/"))),o&&f.push(...c),f.map(h=>r.startsWith("/")&&h===""?"/":h)}function t0(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:u0(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var n0=/^:[\w-]+$/,i0=3,r0=2,s0=1,a0=10,o0=-2,hm=r=>r==="*";function l0(r,e){let t=r.split("/"),s=t.length;return t.some(hm)&&(s+=o0),e&&(s+=r0),t.filter(o=>!hm(o)).reduce((o,l)=>o+(n0.test(l)?i0:l===""?s0:a0),s)}function u0(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function c0(r,e,t=!1){let{routesMeta:s}=r,o={},l="/",c=[];for(let f=0;f<s.length;++f){let h=s[f],p=f===s.length-1,g=l==="/"?e:e.slice(l.length)||"/",x=Kl({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},g),_=h.route;if(!x&&p&&t&&!s[s.length-1].route.index&&(x=Kl({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!x)return null;Object.assign(o,x.params),c.push({params:o,pathname:Xi([l,x.pathname]),pathnameBase:g0(Xi([l,x.pathnameBase])),route:_}),x.pathnameBase!=="/"&&(l=Xi([l,x.pathnameBase]))}return c}function Kl(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=f0(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((p,{paramName:g,isOptional:x},_)=>{if(g==="*"){let M=f[_]||"";c=l.slice(0,l.length-M.length).replace(/(.)\/+$/,"$1")}const S=f[_];return x&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:r}}function f0(r,e=!1,t=!0){yi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h)=>(s.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function d0(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return yi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function $i(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function h0(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?Zs(r):r;return{pathname:t?t.startsWith("/")?t:p0(t,e):e,search:v0(s),hash:_0(o)}}function p0(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Hc(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function m0(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function yg(r){let e=m0(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Sg(r,e,t,s=!1){let o;typeof r=="string"?o=Zs(r):(o={...r},Ht(!o.pathname||!o.pathname.includes("?"),Hc("?","pathname","search",o)),Ht(!o.pathname||!o.pathname.includes("#"),Hc("#","pathname","hash",o)),Ht(!o.search||!o.search.includes("#"),Hc("#","search","hash",o)));let l=r===""||o.pathname==="",c=l?"/":o.pathname,f;if(c==null)f=t;else{let x=e.length-1;if(!s&&c.startsWith("..")){let _=c.split("/");for(;_[0]==="..";)_.shift(),x-=1;o.pathname=_.join("/")}f=x>=0?e[x]:"/"}let h=h0(o,f),p=c&&c!=="/"&&c.endsWith("/"),g=(l||c===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}var Xi=r=>r.join("/").replace(/\/\/+/g,"/"),g0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),v0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,_0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function x0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Mg=["POST","PUT","PATCH","DELETE"];new Set(Mg);var y0=["GET",...Mg];new Set(y0);var Qs=fe.createContext(null);Qs.displayName="DataRouter";var Jl=fe.createContext(null);Jl.displayName="DataRouterState";var Eg=fe.createContext({isTransitioning:!1});Eg.displayName="ViewTransition";var S0=fe.createContext(new Map);S0.displayName="Fetchers";var M0=fe.createContext(null);M0.displayName="Await";var wi=fe.createContext(null);wi.displayName="Navigation";var to=fe.createContext(null);to.displayName="Location";var qi=fe.createContext({outlet:null,matches:[],isDataRoute:!1});qi.displayName="Route";var cd=fe.createContext(null);cd.displayName="RouteError";function E0(r,{relative:e}={}){Ht(no(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=fe.useContext(wi),{hash:o,pathname:l,search:c}=io(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Xi([t,l])),s.createHref({pathname:f,search:c,hash:o})}function no(){return fe.useContext(to)!=null}function is(){return Ht(no(),"useLocation() may be used only in the context of a <Router> component."),fe.useContext(to).location}var wg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Tg(r){fe.useContext(wi).static||fe.useLayoutEffect(r)}function w0(){let{isDataRoute:r}=fe.useContext(qi);return r?O0():T0()}function T0(){Ht(no(),"useNavigate() may be used only in the context of a <Router> component.");let r=fe.useContext(Qs),{basename:e,navigator:t}=fe.useContext(wi),{matches:s}=fe.useContext(qi),{pathname:o}=is(),l=JSON.stringify(yg(s)),c=fe.useRef(!1);return Tg(()=>{c.current=!0}),fe.useCallback((h,p={})=>{if(yi(c.current,wg),!c.current)return;if(typeof h=="number"){t.go(h);return}let g=Sg(h,JSON.parse(l),o,p.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Xi([e,g.pathname])),(p.replace?t.replace:t.push)(g,p.state,p)},[e,t,l,o,r])}fe.createContext(null);function io(r,{relative:e}={}){let{matches:t}=fe.useContext(qi),{pathname:s}=is(),o=JSON.stringify(yg(t));return fe.useMemo(()=>Sg(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function A0(r,e){return Ag(r,e)}function Ag(r,e,t,s){var L;Ht(no(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:l}=fe.useContext(wi),{matches:c}=fe.useContext(qi),f=c[c.length-1],h=f?f.params:{},p=f?f.pathname:"/",g=f?f.pathnameBase:"/",x=f&&f.route;{let P=x&&x.path||"";Cg(p,!x||P.endsWith("*")||P.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P==="/"?"*":`${P}/*`}">.`)}let _=is(),S;if(e){let P=typeof e=="string"?Zs(e):e;Ht(g==="/"||((L=P.pathname)==null?void 0:L.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${P.pathname}" was given in the \`location\` prop.`),S=P}else S=_;let M=S.pathname||"/",w=M;if(g!=="/"){let P=g.replace(/^\//,"").split("/");w="/"+M.replace(/^\//,"").split("/").slice(P.length).join("/")}let y=!l&&t&&t.matches&&t.matches.length>0?t.matches:vg(r,{pathname:w});yi(x||y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),yi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=L0(y&&y.map(P=>Object.assign({},P,{params:Object.assign({},h,P.params),pathname:Xi([g,o.encodeLocation?o.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?g:Xi([g,o.encodeLocation?o.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),c,t,s);return e&&v?fe.createElement(to.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},v):v}function C0(){let r=F0(),e=x0(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=fe.createElement(fe.Fragment,null,fe.createElement("p",null,"💿 Hey developer 👋"),fe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",fe.createElement("code",{style:l},"ErrorBoundary")," or"," ",fe.createElement("code",{style:l},"errorElement")," prop on your route.")),fe.createElement(fe.Fragment,null,fe.createElement("h2",null,"Unexpected Application Error!"),fe.createElement("h3",{style:{fontStyle:"italic"}},e),t?fe.createElement("pre",{style:o},t):null,c)}var R0=fe.createElement(C0,null),P0=class extends fe.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?fe.createElement(qi.Provider,{value:this.props.routeContext},fe.createElement(cd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function b0({routeContext:r,match:e,children:t}){let s=fe.useContext(Qs);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),fe.createElement(qi.Provider,{value:r},t)}function L0(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,l=t==null?void 0:t.errors;if(l!=null){let h=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);Ht(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,h+1))}let c=!1,f=-1;if(t)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(f=h),p.route.id){let{loaderData:g,errors:x}=t,_=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!x||x[p.route.id]===void 0);if(p.route.lazy||_){c=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((h,p,g)=>{let x,_=!1,S=null,M=null;t&&(x=l&&p.route.id?l[p.route.id]:void 0,S=p.route.errorElement||R0,c&&(f<0&&g===0?(Cg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,M=null):f===g&&(_=!0,M=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,g+1)),y=()=>{let v;return x?v=S:_?v=M:p.route.Component?v=fe.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=h,fe.createElement(b0,{match:p,routeContext:{outlet:h,matches:w,isDataRoute:t!=null},children:v})};return t&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?fe.createElement(P0,{location:t.location,revalidation:t.revalidation,component:S,error:x,children:y(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):y()},null)}function fd(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function D0(r){let e=fe.useContext(Qs);return Ht(e,fd(r)),e}function U0(r){let e=fe.useContext(Jl);return Ht(e,fd(r)),e}function I0(r){let e=fe.useContext(qi);return Ht(e,fd(r)),e}function dd(r){let e=I0(r),t=e.matches[e.matches.length-1];return Ht(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function N0(){return dd("useRouteId")}function F0(){var s;let r=fe.useContext(cd),e=U0("useRouteError"),t=dd("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function O0(){let{router:r}=D0("useNavigate"),e=dd("useNavigate"),t=fe.useRef(!1);return Tg(()=>{t.current=!0}),fe.useCallback(async(o,l={})=>{yi(t.current,wg),t.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var pm={};function Cg(r,e,t){!e&&!pm[r]&&(pm[r]=!0,yi(!1,t))}fe.memo(k0);function k0({routes:r,future:e,state:t}){return Ag(r,void 0,t,e)}function Ga(r){Ht(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function B0({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1}){Ht(!no(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),f=fe.useMemo(()=>({basename:c,navigator:o,static:l,future:{}}),[c,o,l]);typeof t=="string"&&(t=Zs(t));let{pathname:h="/",search:p="",hash:g="",state:x=null,key:_="default"}=t,S=fe.useMemo(()=>{let M=$i(h,c);return M==null?null:{location:{pathname:M,search:p,hash:g,state:x,key:_},navigationType:s}},[c,h,p,g,x,_,s]);return yi(S!=null,`<Router basename="${c}"> is not able to match the URL "${h}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:fe.createElement(wi.Provider,{value:f},fe.createElement(to.Provider,{children:e,value:S}))}function z0({children:r,location:e}){return A0(Sf(r),e)}function Sf(r,e=[]){let t=[];return fe.Children.forEach(r,(s,o)=>{if(!fe.isValidElement(s))return;let l=[...e,o];if(s.type===fe.Fragment){t.push.apply(t,Sf(s.props.children,l));return}Ht(s.type===Ga,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ht(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Sf(s.props.children,l)),t.push(c)}),t}var Hl="get",Vl="application/x-www-form-urlencoded";function eu(r){return r!=null&&typeof r.tagName=="string"}function H0(r){return eu(r)&&r.tagName.toLowerCase()==="button"}function V0(r){return eu(r)&&r.tagName.toLowerCase()==="form"}function G0(r){return eu(r)&&r.tagName.toLowerCase()==="input"}function W0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function X0(r,e){return r.button===0&&(!e||e==="_self")&&!W0(r)}var vl=null;function j0(){if(vl===null)try{new FormData(document.createElement("form"),0),vl=!1}catch{vl=!0}return vl}var Y0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Vc(r){return r!=null&&!Y0.has(r)?(yi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vl}"`),null):r}function $0(r,e){let t,s,o,l,c;if(V0(r)){let f=r.getAttribute("action");s=f?$i(f,e):null,t=r.getAttribute("method")||Hl,o=Vc(r.getAttribute("enctype"))||Vl,l=new FormData(r)}else if(H0(r)||G0(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=r.getAttribute("formaction")||f.getAttribute("action");if(s=h?$i(h,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||Hl,o=Vc(r.getAttribute("formenctype"))||Vc(f.getAttribute("enctype"))||Vl,l=new FormData(f,r),!j0()){let{name:p,type:g,value:x}=r;if(g==="image"){let _=p?`${p}.`:"";l.append(`${_}x`,"0"),l.append(`${_}y`,"0")}else p&&l.append(p,x)}}else{if(eu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Hl,s=null,o=Vl,c=r}return l&&o==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:c}}function hd(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function q0(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function K0(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Z0(r,e,t){let s=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await q0(l,t);return c.links?c.links():[]}return[]}));return tx(s.flat(1).filter(K0).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function mm(r,e,t,s,o,l){let c=(h,p)=>t[p]?h.route.id!==t[p].route.id:!0,f=(h,p)=>{var g;return t[p].pathname!==h.pathname||((g=t[p].route.path)==null?void 0:g.endsWith("*"))&&t[p].params["*"]!==h.params["*"]};return l==="assets"?e.filter((h,p)=>c(h,p)||f(h,p)):l==="data"?e.filter((h,p)=>{var x;let g=s.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(c(h,p)||f(h,p))return!0;if(h.route.shouldRevalidate){let _=h.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((x=t[0])==null?void 0:x.params)||{},nextUrl:new URL(r,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function Q0(r,e,{includeHydrateFallback:t}={}){return J0(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function J0(r){return[...new Set(r)]}function ex(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function tx(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let l=JSON.stringify(ex(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}var nx=new Set([100,101,204,205]);function ix(r,e){let t=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t.pathname==="/"?t.pathname="_root.data":e&&$i(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function Rg(){let r=fe.useContext(Qs);return hd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function rx(){let r=fe.useContext(Jl);return hd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var pd=fe.createContext(void 0);pd.displayName="FrameworkContext";function Pg(){let r=fe.useContext(pd);return hd(r,"You must render this element inside a <HydratedRouter> element"),r}function sx(r,e){let t=fe.useContext(pd),[s,o]=fe.useState(!1),[l,c]=fe.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=e,_=fe.useRef(null);fe.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let w=v=>{v.forEach(L=>{c(L.isIntersecting)})},y=new IntersectionObserver(w,{threshold:.5});return _.current&&y.observe(_.current),()=>{y.disconnect()}}},[r]),fe.useEffect(()=>{if(s){let w=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(w)}}},[s]);let S=()=>{o(!0)},M=()=>{o(!1),c(!1)};return t?r!=="intent"?[l,_,{}]:[l,_,{onFocus:Oa(f,S),onBlur:Oa(h,M),onMouseEnter:Oa(p,S),onMouseLeave:Oa(g,M),onTouchStart:Oa(x,S)}]:[!1,_,{}]}function Oa(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function ax({page:r,...e}){let{router:t}=Rg(),s=fe.useMemo(()=>vg(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?fe.createElement(lx,{page:r,matches:s,...e}):null}function ox(r){let{manifest:e,routeModules:t}=Pg(),[s,o]=fe.useState([]);return fe.useEffect(()=>{let l=!1;return Z0(r,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[r,e,t]),s}function lx({page:r,matches:e,...t}){let s=is(),{manifest:o,routeModules:l}=Pg(),{basename:c}=Rg(),{loaderData:f,matches:h}=rx(),p=fe.useMemo(()=>mm(r,e,h,o,s,"data"),[r,e,h,o,s]),g=fe.useMemo(()=>mm(r,e,h,o,s,"assets"),[r,e,h,o,s]),x=fe.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let M=new Set,w=!1;if(e.forEach(v=>{var P;let L=o.routes[v.route.id];!L||!L.hasLoader||(!p.some(A=>A.route.id===v.route.id)&&v.route.id in f&&((P=l[v.route.id])!=null&&P.shouldRevalidate)||L.hasClientLoader?w=!0:M.add(v.route.id))}),M.size===0)return[];let y=ix(r,c);return w&&M.size>0&&y.searchParams.set("_routes",e.filter(v=>M.has(v.route.id)).map(v=>v.route.id).join(",")),[y.pathname+y.search]},[c,f,s,o,p,e,r,l]),_=fe.useMemo(()=>Q0(g,o),[g,o]),S=ox(g);return fe.createElement(fe.Fragment,null,x.map(M=>fe.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...t})),_.map(M=>fe.createElement("link",{key:M,rel:"modulepreload",href:M,...t})),S.map(({key:M,link:w})=>fe.createElement("link",{key:M,...w})))}function ux(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var bg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{bg&&(window.__reactRouterVersion="7.5.2")}catch{}function cx({basename:r,children:e,window:t}){let s=fe.useRef();s.current==null&&(s.current=Z_({window:t,v5Compat:!0}));let o=s.current,[l,c]=fe.useState({action:o.action,location:o.location}),f=fe.useCallback(h=>{fe.startTransition(()=>c(h))},[c]);return fe.useLayoutEffect(()=>o.listen(f),[o,f]),fe.createElement(B0,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:o})}var Lg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ro=fe.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:c,state:f,target:h,to:p,preventScrollReset:g,viewTransition:x,..._},S){let{basename:M}=fe.useContext(wi),w=typeof p=="string"&&Lg.test(p),y,v=!1;if(typeof p=="string"&&w&&(y=p,bg))try{let b=new URL(window.location.href),C=p.startsWith("//")?new URL(b.protocol+p):new URL(p),B=$i(C.pathname,M);C.origin===b.origin&&B!=null?p=B+C.search+C.hash:v=!0}catch{yi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=E0(p,{relative:o}),[P,A,z]=sx(s,_),F=px(p,{replace:c,state:f,target:h,preventScrollReset:g,relative:o,viewTransition:x});function I(b){e&&e(b),b.defaultPrevented||F(b)}let H=fe.createElement("a",{..._,...z,href:y||L,onClick:v||l?e:I,ref:ux(S,A),target:h,"data-discover":!w&&t==="render"?"true":void 0});return P&&!w?fe.createElement(fe.Fragment,null,H,fe.createElement(ax,{page:L})):H});ro.displayName="Link";var fx=fe.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:f,children:h,...p},g){let x=io(c,{relative:p.relative}),_=is(),S=fe.useContext(Jl),{navigator:M,basename:w}=fe.useContext(wi),y=S!=null&&xx(x)&&f===!0,v=M.encodeLocation?M.encodeLocation(x).pathname:x.pathname,L=_.pathname,P=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(L=L.toLowerCase(),P=P?P.toLowerCase():null,v=v.toLowerCase()),P&&w&&(P=$i(P,w)||P);const A=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let z=L===v||!o&&L.startsWith(v)&&L.charAt(A)==="/",F=P!=null&&(P===v||!o&&P.startsWith(v)&&P.charAt(v.length)==="/"),I={isActive:z,isPending:F,isTransitioning:y},H=z?e:void 0,b;typeof s=="function"?b=s(I):b=[s,z?"active":null,F?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(I):l;return fe.createElement(ro,{...p,"aria-current":H,className:b,ref:g,style:C,to:c,viewTransition:f},typeof h=="function"?h(I):h)});fx.displayName="NavLink";var dx=fe.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:c=Hl,action:f,onSubmit:h,relative:p,preventScrollReset:g,viewTransition:x,..._},S)=>{let M=vx(),w=_x(f,{relative:p}),y=c.toLowerCase()==="get"?"get":"post",v=typeof f=="string"&&Lg.test(f),L=P=>{if(h&&h(P),P.defaultPrevented)return;P.preventDefault();let A=P.nativeEvent.submitter,z=(A==null?void 0:A.getAttribute("formmethod"))||c;M(A||P.currentTarget,{fetcherKey:e,method:z,navigate:t,replace:o,state:l,relative:p,preventScrollReset:g,viewTransition:x})};return fe.createElement("form",{ref:S,method:y,action:w,onSubmit:s?h:L,..._,"data-discover":!v&&r==="render"?"true":void 0})});dx.displayName="Form";function hx(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dg(r){let e=fe.useContext(Qs);return Ht(e,hx(r)),e}function px(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:l,viewTransition:c}={}){let f=w0(),h=is(),p=io(r,{relative:l});return fe.useCallback(g=>{if(X0(g,e)){g.preventDefault();let x=t!==void 0?t:Ya(h)===Ya(p);f(r,{replace:x,state:s,preventScrollReset:o,relative:l,viewTransition:c})}},[h,f,p,t,s,e,r,o,l,c])}var mx=0,gx=()=>`__${String(++mx)}__`;function vx(){let{router:r}=Dg("useSubmit"),{basename:e}=fe.useContext(wi),t=N0();return fe.useCallback(async(s,o={})=>{let{action:l,method:c,encType:f,formData:h,body:p}=$0(s,e);if(o.navigate===!1){let g=o.fetcherKey||gx();await r.fetch(g,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:h,body:p,formMethod:o.method||c,formEncType:o.encType||f,flushSync:o.flushSync})}else await r.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:h,body:p,formMethod:o.method||c,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,t])}function _x(r,{relative:e}={}){let{basename:t}=fe.useContext(wi),s=fe.useContext(qi);Ht(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...io(r||".",{relative:e})},c=is();if(r==null){l.search=c.search;let f=new URLSearchParams(l.search),h=f.getAll("index");if(h.some(g=>g==="")){f.delete("index"),h.filter(x=>x).forEach(x=>f.append("index",x));let g=f.toString();l.search=g?`?${g}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Xi([t,l.pathname])),Ya(l)}function xx(r,e={}){let t=fe.useContext(Eg);Ht(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Dg("useViewTransitionState"),o=io(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=$i(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=$i(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Kl(o.pathname,c)!=null||Kl(o.pathname,l)!=null}new TextEncoder;[...nx];/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const md="176",yx=0,gm=1,Sx=2,Ug=1,Mx=2,Hi=3,Cr=0,Un=1,Vi=2,ji=0,Ws=1,Mf=2,vm=3,_m=4,Ex=5,Zr=100,wx=101,Tx=102,Ax=103,Cx=104,Rx=200,Px=201,bx=202,Lx=203,Ef=204,wf=205,Dx=206,Ux=207,Ix=208,Nx=209,Fx=210,Ox=211,kx=212,Bx=213,zx=214,Tf=0,Af=1,Cf=2,js=3,Rf=4,Pf=5,bf=6,Lf=7,Ig=0,Hx=1,Vx=2,Ar=0,Gx=1,Wx=2,Xx=3,jx=4,Yx=5,$x=6,qx=7,Ng=300,Ys=301,$s=302,Df=303,Uf=304,tu=306,If=1e3,Jr=1001,Nf=1002,ci=1003,Kx=1004,_l=1005,_i=1006,Gc=1007,es=1008,Si=1009,Fg=1010,Og=1011,$a=1012,gd=1013,ns=1014,Gi=1015,Rr=1016,vd=1017,_d=1018,qa=1020,kg=35902,Bg=1021,zg=1022,ui=1023,Ka=1026,Za=1027,Hg=1028,xd=1029,Vg=1030,yd=1031,Sd=1033,Gl=33776,Wl=33777,Xl=33778,jl=33779,Ff=35840,Of=35841,kf=35842,Bf=35843,zf=36196,Hf=37492,Vf=37496,Gf=37808,Wf=37809,Xf=37810,jf=37811,Yf=37812,$f=37813,qf=37814,Kf=37815,Zf=37816,Qf=37817,Jf=37818,ed=37819,td=37820,nd=37821,Yl=36492,id=36494,rd=36495,Gg=36283,sd=36284,ad=36285,od=36286,Zx=3200,Qx=3201,Md=0,Jx=1,Tr="",Kn="srgb",qs="srgb-linear",Zl="linear",Rt="srgb",Rs=7680,xm=519,ey=512,ty=513,ny=514,Wg=515,iy=516,ry=517,sy=518,ay=519,ym=35044,Sm="300 es",Wi=2e3,Ql=2001;class Js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mm=1234567;const Xa=Math.PI/180,Qa=180/Math.PI;function ea(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function Ed(r,e){return(r%e+e)%e}function oy(r,e,t,s,o){return s+(r-e)*(o-s)/(t-e)}function ly(r,e,t){return r!==e?(t-r)/(e-r):0}function ja(r,e,t){return(1-t)*r+t*e}function uy(r,e,t,s){return ja(r,e,1-Math.exp(-t*s))}function cy(r,e=1){return e-Math.abs(Ed(r,e*2)-e)}function fy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function dy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function hy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function py(r,e){return r+Math.random()*(e-r)}function my(r){return r*(.5-Math.random())}function gy(r){r!==void 0&&(Mm=r);let e=Mm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vy(r){return r*Xa}function _y(r){return r*Qa}function xy(r){return(r&r-1)===0&&r!==0}function yy(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Sy(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function My(r,e,t,s,o){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),p=l((e+s)/2),g=c((e+s)/2),x=l((e-s)/2),_=c((e-s)/2),S=l((s-e)/2),M=c((s-e)/2);switch(o){case"XYX":r.set(f*g,h*x,h*_,f*p);break;case"YZY":r.set(h*_,f*g,h*x,f*p);break;case"ZXZ":r.set(h*x,h*_,f*g,f*p);break;case"XZX":r.set(f*g,h*M,h*S,f*p);break;case"YXY":r.set(h*S,f*g,h*M,f*p);break;case"ZYZ":r.set(h*M,h*S,f*g,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Vs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function En(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ey={DEG2RAD:Xa,RAD2DEG:Qa,generateUUID:ea,clamp:vt,euclideanModulo:Ed,mapLinear:oy,inverseLerp:ly,lerp:ja,damp:uy,pingpong:cy,smoothstep:fy,smootherstep:dy,randInt:hy,randFloat:py,randFloatSpread:my,seededRandom:gy,degToRad:vy,radToDeg:_y,isPowerOfTwo:xy,ceilPowerOfTwo:yy,floorPowerOfTwo:Sy,setQuaternionFromProperEuler:My,normalize:En,denormalize:Vs};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,s,o,l,c,f,h,p){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,p)}set(e,t,s,o,l,c,f,h,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=s,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[3],h=s[6],p=s[1],g=s[4],x=s[7],_=s[2],S=s[5],M=s[8],w=o[0],y=o[3],v=o[6],L=o[1],P=o[4],A=o[7],z=o[2],F=o[5],I=o[8];return l[0]=c*w+f*L+h*z,l[3]=c*y+f*P+h*F,l[6]=c*v+f*A+h*I,l[1]=p*w+g*L+x*z,l[4]=p*y+g*P+x*F,l[7]=p*v+g*A+x*I,l[2]=_*w+S*L+M*z,l[5]=_*y+S*P+M*F,l[8]=_*v+S*A+M*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8];return t*c*g-t*f*p-s*l*g+s*f*h+o*l*p-o*c*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],x=g*c-f*p,_=f*h-g*l,S=p*l-c*h,M=t*x+s*_+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=x*w,e[1]=(o*p-g*s)*w,e[2]=(f*s-o*c)*w,e[3]=_*w,e[4]=(g*t-o*h)*w,e[5]=(o*l-f*t)*w,e[6]=S*w,e[7]=(s*h-p*t)*w,e[8]=(c*t-s*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*c+p*f)+c+e,-o*p,o*h,-o*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Wc.makeScale(e,t)),this}rotate(e){return this.premultiply(Wc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wc=new lt;function Xg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ja(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wy(){const r=Ja("canvas");return r.style.display="block",r}const Em={};function $l(r){r in Em||(Em[r]=!0,console.warn(r))}function Ty(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function Ay(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cy(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wm=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tm=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ry(){const r={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Rt&&(o.r=Yi(o.r),o.g=Yi(o.g),o.b=Yi(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Rt&&(o.r=Xs(o.r),o.g=Xs(o.g),o.b=Xs(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Tr?Zl:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[qs]:{primaries:e,whitePoint:s,transfer:Zl,toXYZ:wm,fromXYZ:Tm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:s,transfer:Rt,toXYZ:wm,fromXYZ:Tm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),r}const wt=Ry();function Yi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ps;class Py{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ps===void 0&&(Ps=Ja("canvas")),Ps.width=e.width,Ps.height=e.height;const o=Ps.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=Ps}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ja("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Yi(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Yi(t[s]/255)*255):t[s]=Yi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let by=0;class wd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=ea(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(Xc(o[c].image)):l.push(Xc(o[c]))}else l=Xc(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function Xc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Py.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ly=0;class Tn extends Js{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,s=Jr,o=Jr,l=_i,c=es,f=ui,h=Si,p=Tn.DEFAULT_ANISOTROPY,g=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=ea(),this.name="",this.source=new wd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case If:e.x=e.x-Math.floor(e.x);break;case Jr:e.x=e.x<0?0:1;break;case Nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case If:e.y=e.y-Math.floor(e.y);break;case Jr:e.y=e.y<0?0:1;break;case Nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Ng;Tn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,s=0,o=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,p=h[0],g=h[4],x=h[8],_=h[1],S=h[5],M=h[9],w=h[2],y=h[6],v=h[10];if(Math.abs(g-_)<.01&&Math.abs(x-w)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+w)<.1&&Math.abs(M+y)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,A=(S+1)/2,z=(v+1)/2,F=(g+_)/4,I=(x+w)/4,H=(M+y)/4;return P>A&&P>z?P<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(P),o=F/s,l=I/s):A>z?A<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),s=F/o,l=H/o):z<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),s=I/l,o=H/l),this.set(s,o,l,t),this}let L=Math.sqrt((y-M)*(y-M)+(x-w)*(x-w)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(y-M)/L,this.y=(x-w)/L,this.z=(_-g)/L,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dy extends Js{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth?s.depth:1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const o={width:e,height:t,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const l=new Tn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new wd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends Dy{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class jg extends Tn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=ci,this.minFilter=ci,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uy extends Tn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=ci,this.minFilter=ci,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class so{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,f){let h=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];const _=l[c+0],S=l[c+1],M=l[c+2],w=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(f===1){e[t+0]=_,e[t+1]=S,e[t+2]=M,e[t+3]=w;return}if(x!==w||h!==_||p!==S||g!==M){let y=1-f;const v=h*_+p*S+g*M+x*w,L=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const z=Math.sqrt(P),F=Math.atan2(z,v*L);y=Math.sin(y*F)/z,f=Math.sin(f*F)/z}const A=f*L;if(h=h*y+_*A,p=p*y+S*A,g=g*y+M*A,x=x*y+w*A,y===1-f){const z=1/Math.sqrt(h*h+p*p+g*g+x*x);h*=z,p*=z,g*=z,x*=z}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=x}static multiplyQuaternionsFlat(e,t,s,o,l,c){const f=s[o],h=s[o+1],p=s[o+2],g=s[o+3],x=l[c],_=l[c+1],S=l[c+2],M=l[c+3];return e[t]=f*M+g*x+h*S-p*_,e[t+1]=h*M+g*_+p*x-f*S,e[t+2]=p*M+g*S+f*_-h*x,e[t+3]=g*M-f*x-h*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(s/2),g=f(o/2),x=f(l/2),_=h(s/2),S=h(o/2),M=h(l/2);switch(c){case"XYZ":this._x=_*g*x+p*S*M,this._y=p*S*x-_*g*M,this._z=p*g*M+_*S*x,this._w=p*g*x-_*S*M;break;case"YXZ":this._x=_*g*x+p*S*M,this._y=p*S*x-_*g*M,this._z=p*g*M-_*S*x,this._w=p*g*x+_*S*M;break;case"ZXY":this._x=_*g*x-p*S*M,this._y=p*S*x+_*g*M,this._z=p*g*M+_*S*x,this._w=p*g*x-_*S*M;break;case"ZYX":this._x=_*g*x-p*S*M,this._y=p*S*x+_*g*M,this._z=p*g*M-_*S*x,this._w=p*g*x+_*S*M;break;case"YZX":this._x=_*g*x+p*S*M,this._y=p*S*x+_*g*M,this._z=p*g*M-_*S*x,this._w=p*g*x-_*S*M;break;case"XZY":this._x=_*g*x-p*S*M,this._y=p*S*x-_*g*M,this._z=p*g*M+_*S*x,this._w=p*g*x+_*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],g=t[6],x=t[10],_=s+f+x;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-p)*S,this._z=(c-o)*S}else if(s>f&&s>x){const S=2*Math.sqrt(1+s-f-x);this._w=(g-h)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+p)/S}else if(f>x){const S=2*Math.sqrt(1+f-s-x);this._w=(l-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+x-s-f);this._w=(c-o)/S,this._x=(l+p)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,g=t._w;return this._x=s*g+c*f+o*p-l*h,this._y=o*g+c*h+l*f-s*p,this._z=l*g+c*p+s*h-o*f,this._w=c*g-s*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=o,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,f),x=Math.sin((1-t)*g)/p,_=Math.sin(t*g)/p;return this._w=c*x+this._w*_,this._x=s*x+this._x*_,this._y=o*x+this._y*_,this._z=l*x+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,s=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Am.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Am.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*o-f*s),g=2*(f*t-l*o),x=2*(l*s-c*t);return this.x=t+h*p+c*x-f*g,this.y=s+h*g+f*p-l*x,this.z=o+h*x+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-s*h,this.z=s*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jc=new $,Am=new so;class ao{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,si):si.fromBufferAttribute(l,c),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),xl.copy(s.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),yl.subVectors(this.max,ka),bs.subVectors(e.a,ka),Ls.subVectors(e.b,ka),Ds.subVectors(e.c,ka),xr.subVectors(Ls,bs),yr.subVectors(Ds,Ls),Gr.subVectors(bs,Ds);let t=[0,-xr.z,xr.y,0,-yr.z,yr.y,0,-Gr.z,Gr.y,xr.z,0,-xr.x,yr.z,0,-yr.x,Gr.z,0,-Gr.x,-xr.y,xr.x,0,-yr.y,yr.x,0,-Gr.y,Gr.x,0];return!Yc(t,bs,Ls,Ds,yl)||(t=[1,0,0,0,1,0,0,0,1],!Yc(t,bs,Ls,Ds,yl))?!1:(Sl.crossVectors(xr,yr),t=[Sl.x,Sl.y,Sl.z],Yc(t,bs,Ls,Ds,yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new $,new $,new $,new $,new $,new $,new $,new $],si=new $,xl=new ao,bs=new $,Ls=new $,Ds=new $,xr=new $,yr=new $,Gr=new $,ka=new $,yl=new $,Sl=new $,Wr=new $;function Yc(r,e,t,s,o){for(let l=0,c=r.length-3;l<=c;l+=3){Wr.fromArray(r,l);const f=o.x*Math.abs(Wr.x)+o.y*Math.abs(Wr.y)+o.z*Math.abs(Wr.z),h=e.dot(Wr),p=t.dot(Wr),g=s.dot(Wr);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>f)return!1}return!0}const Iy=new ao,Ba=new $,$c=new $;class Td{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):Iy.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);const t=Ba.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Ba,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add($c)),this.expandByPoint(Ba.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new $,qc=new $,Ml=new $,Sr=new $,Kc=new $,El=new $,Zc=new $;class Ny{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){qc.copy(e).add(t).multiplyScalar(.5),Ml.copy(t).sub(e).normalize(),Sr.copy(this.origin).sub(qc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Ml),f=Sr.dot(this.direction),h=-Sr.dot(Ml),p=Sr.lengthSq(),g=Math.abs(1-c*c);let x,_,S,M;if(g>0)if(x=c*h-f,_=c*f-h,M=l*g,x>=0)if(_>=-M)if(_<=M){const w=1/g;x*=w,_*=w,S=x*(x+c*_+2*f)+_*(c*x+_+2*h)+p}else _=l,x=Math.max(0,-(c*_+f)),S=-x*x+_*(_+2*h)+p;else _=-l,x=Math.max(0,-(c*_+f)),S=-x*x+_*(_+2*h)+p;else _<=-M?(x=Math.max(0,-(-c*l+f)),_=x>0?-l:Math.min(Math.max(-l,-h),l),S=-x*x+_*(_+2*h)+p):_<=M?(x=0,_=Math.min(Math.max(-l,-h),l),S=_*(_+2*h)+p):(x=Math.max(0,-(c*l+f)),_=x>0?l:Math.min(Math.max(-l,-h),l),S=-x*x+_*(_+2*h)+p);else _=c>0?-l:l,x=Math.max(0,-(c*_+f)),S=-x*x+_*(_+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(qc).addScaledVector(Ml,_),S}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const s=Oi.dot(this.direction),o=Oi.dot(Oi)-s*s,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=s-c,h=s+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,f,h;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),g>=0?(l=(e.min.y-_.y)*g,c=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,c=(e.min.y-_.y)*g),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),x>=0?(f=(e.min.z-_.z)*x,h=(e.max.z-_.z)*x):(f=(e.max.z-_.z)*x,h=(e.min.z-_.z)*x),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,s,o,l){Kc.subVectors(t,e),El.subVectors(s,e),Zc.crossVectors(Kc,El);let c=this.direction.dot(Zc),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Sr.subVectors(this.origin,e);const h=f*this.direction.dot(El.crossVectors(Sr,El));if(h<0)return null;const p=f*this.direction.dot(Kc.cross(Sr));if(p<0||h+p>c)return null;const g=-f*Sr.dot(Zc);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,s,o,l,c,f,h,p,g,x,_,S,M,w,y){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,p,g,x,_,S,M,w,y)}set(e,t,s,o,l,c,f,h,p,g,x,_,S,M,w,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=o,v[1]=l,v[5]=c,v[9]=f,v[13]=h,v[2]=p,v[6]=g,v[10]=x,v[14]=_,v[3]=S,v[7]=M,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/Us.setFromMatrixColumn(e,0).length(),l=1/Us.setFromMatrixColumn(e,1).length(),c=1/Us.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),h=Math.cos(o),p=Math.sin(o),g=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const _=c*g,S=c*x,M=f*g,w=f*x;t[0]=h*g,t[4]=-h*x,t[8]=p,t[1]=S+M*p,t[5]=_-w*p,t[9]=-f*h,t[2]=w-_*p,t[6]=M+S*p,t[10]=c*h}else if(e.order==="YXZ"){const _=h*g,S=h*x,M=p*g,w=p*x;t[0]=_+w*f,t[4]=M*f-S,t[8]=c*p,t[1]=c*x,t[5]=c*g,t[9]=-f,t[2]=S*f-M,t[6]=w+_*f,t[10]=c*h}else if(e.order==="ZXY"){const _=h*g,S=h*x,M=p*g,w=p*x;t[0]=_-w*f,t[4]=-c*x,t[8]=M+S*f,t[1]=S+M*f,t[5]=c*g,t[9]=w-_*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const _=c*g,S=c*x,M=f*g,w=f*x;t[0]=h*g,t[4]=M*p-S,t[8]=_*p+w,t[1]=h*x,t[5]=w*p+_,t[9]=S*p-M,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const _=c*h,S=c*p,M=f*h,w=f*p;t[0]=h*g,t[4]=w-_*x,t[8]=M*x+S,t[1]=x,t[5]=c*g,t[9]=-f*g,t[2]=-p*g,t[6]=S*x+M,t[10]=_-w*x}else if(e.order==="XZY"){const _=c*h,S=c*p,M=f*h,w=f*p;t[0]=h*g,t[4]=-x,t[8]=p*g,t[1]=_*x+w,t[5]=c*g,t[9]=S*x-M,t[2]=M*x-S,t[6]=f*g,t[10]=w*x+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fy,e,Oy)}lookAt(e,t,s){const o=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Mr.crossVectors(s,Bn),Mr.lengthSq()===0&&(Math.abs(s.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Mr.crossVectors(s,Bn)),Mr.normalize(),wl.crossVectors(Bn,Mr),o[0]=Mr.x,o[4]=wl.x,o[8]=Bn.x,o[1]=Mr.y,o[5]=wl.y,o[9]=Bn.y,o[2]=Mr.z,o[6]=wl.z,o[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[4],h=s[8],p=s[12],g=s[1],x=s[5],_=s[9],S=s[13],M=s[2],w=s[6],y=s[10],v=s[14],L=s[3],P=s[7],A=s[11],z=s[15],F=o[0],I=o[4],H=o[8],b=o[12],C=o[1],B=o[5],ae=o[9],ne=o[13],de=o[2],ge=o[6],oe=o[10],ue=o[14],V=o[3],le=o[7],se=o[11],N=o[15];return l[0]=c*F+f*C+h*de+p*V,l[4]=c*I+f*B+h*ge+p*le,l[8]=c*H+f*ae+h*oe+p*se,l[12]=c*b+f*ne+h*ue+p*N,l[1]=g*F+x*C+_*de+S*V,l[5]=g*I+x*B+_*ge+S*le,l[9]=g*H+x*ae+_*oe+S*se,l[13]=g*b+x*ne+_*ue+S*N,l[2]=M*F+w*C+y*de+v*V,l[6]=M*I+w*B+y*ge+v*le,l[10]=M*H+w*ae+y*oe+v*se,l[14]=M*b+w*ne+y*ue+v*N,l[3]=L*F+P*C+A*de+z*V,l[7]=L*I+P*B+A*ge+z*le,l[11]=L*H+P*ae+A*oe+z*se,l[15]=L*b+P*ne+A*ue+z*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],g=e[2],x=e[6],_=e[10],S=e[14],M=e[3],w=e[7],y=e[11],v=e[15];return M*(+l*h*x-o*p*x-l*f*_+s*p*_+o*f*S-s*h*S)+w*(+t*h*S-t*p*_+l*c*_-o*c*S+o*p*g-l*h*g)+y*(+t*p*x-t*f*S-l*c*x+s*c*S+l*f*g-s*p*g)+v*(-o*f*g-t*h*x+t*f*_+o*c*x-s*c*_+s*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],x=e[9],_=e[10],S=e[11],M=e[12],w=e[13],y=e[14],v=e[15],L=x*y*p-w*_*p+w*h*S-f*y*S-x*h*v+f*_*v,P=M*_*p-g*y*p-M*h*S+c*y*S+g*h*v-c*_*v,A=g*w*p-M*x*p+M*f*S-c*w*S-g*f*v+c*x*v,z=M*x*h-g*w*h-M*f*_+c*w*_+g*f*y-c*x*y,F=t*L+s*P+o*A+l*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return e[0]=L*I,e[1]=(w*_*l-x*y*l-w*o*S+s*y*S+x*o*v-s*_*v)*I,e[2]=(f*y*l-w*h*l+w*o*p-s*y*p-f*o*v+s*h*v)*I,e[3]=(x*h*l-f*_*l-x*o*p+s*_*p+f*o*S-s*h*S)*I,e[4]=P*I,e[5]=(g*y*l-M*_*l+M*o*S-t*y*S-g*o*v+t*_*v)*I,e[6]=(M*h*l-c*y*l-M*o*p+t*y*p+c*o*v-t*h*v)*I,e[7]=(c*_*l-g*h*l+g*o*p-t*_*p-c*o*S+t*h*S)*I,e[8]=A*I,e[9]=(M*x*l-g*w*l-M*s*S+t*w*S+g*s*v-t*x*v)*I,e[10]=(c*w*l-M*f*l+M*s*p-t*w*p-c*s*v+t*f*v)*I,e[11]=(g*f*l-c*x*l-g*s*p+t*x*p+c*s*S-t*f*S)*I,e[12]=z*I,e[13]=(g*w*o-M*x*o+M*s*_-t*w*_-g*s*y+t*x*y)*I,e[14]=(M*f*o-c*w*o-M*s*h+t*w*h+c*s*y-t*f*y)*I,e[15]=(c*x*o-g*f*o+g*s*h-t*x*h-c*s*_+t*f*_)*I,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,f=e.y,h=e.z,p=l*c,g=l*f;return this.set(p*c+s,p*f-o*h,p*h+o*f,0,p*f+o*h,g*f+s,g*h-o*c,0,p*h-o*f,g*h+o*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,g=c+c,x=f+f,_=l*p,S=l*g,M=l*x,w=c*g,y=c*x,v=f*x,L=h*p,P=h*g,A=h*x,z=s.x,F=s.y,I=s.z;return o[0]=(1-(w+v))*z,o[1]=(S+A)*z,o[2]=(M-P)*z,o[3]=0,o[4]=(S-A)*F,o[5]=(1-(_+v))*F,o[6]=(y+L)*F,o[7]=0,o[8]=(M+P)*I,o[9]=(y-L)*I,o[10]=(1-(_+w))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=Us.set(o[0],o[1],o[2]).length();const c=Us.set(o[4],o[5],o[6]).length(),f=Us.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ai.copy(this);const p=1/l,g=1/c,x=1/f;return ai.elements[0]*=p,ai.elements[1]*=p,ai.elements[2]*=p,ai.elements[4]*=g,ai.elements[5]*=g,ai.elements[6]*=g,ai.elements[8]*=x,ai.elements[9]*=x,ai.elements[10]*=x,t.setFromRotationMatrix(ai),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,o,l,c,f=Wi){const h=this.elements,p=2*l/(t-e),g=2*l/(s-o),x=(t+e)/(t-e),_=(s+o)/(s-o);let S,M;if(f===Wi)S=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===Ql)S=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=g,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,o,l,c,f=Wi){const h=this.elements,p=1/(t-e),g=1/(s-o),x=1/(c-l),_=(t+e)*p,S=(s+o)*g;let M,w;if(f===Wi)M=(c+l)*x,w=-2*x;else if(f===Ql)M=l*x,w=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Us=new $,ai=new Vt,Fy=new $(0,0,0),Oy=new $(1,1,1),Mr=new $,wl=new $,Bn=new $,Cm=new Vt,Rm=new so;class Ei{constructor(e=0,t=0,s=0,o=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],p=o[5],g=o[9],x=o[2],_=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(vt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-vt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rm.setFromEuler(this),this.setFromQuaternion(Rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class Yg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ky=0;const Pm=new $,Is=new so,ki=new Vt,Tl=new $,za=new $,By=new $,zy=new so,bm=new $(1,0,0),Lm=new $(0,1,0),Dm=new $(0,0,1),Um={type:"added"},Hy={type:"removed"},Ns={type:"childadded",child:null},Qc={type:"childremoved",child:null};class In extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new $,t=new Ei,s=new so,o=new $(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Vt},normalMatrix:{value:new lt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(bm,e)}rotateY(e){return this.rotateOnAxis(Lm,e)}rotateZ(e){return this.rotateOnAxis(Dm,e)}translateOnAxis(e,t){return Pm.copy(e).applyQuaternion(this.quaternion),this.position.add(Pm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bm,e)}translateY(e){return this.translateOnAxis(Lm,e)}translateZ(e){return this.translateOnAxis(Dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Tl.copy(e):Tl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(za,Tl,this.up):ki.lookAt(Tl,za,this.up),this.quaternion.setFromRotationMatrix(ki),o&&(ki.extractRotation(o.matrixWorld),Is.setFromRotationMatrix(ki),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Um),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hy),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Um),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,e,By),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,zy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?{min:f.boundingBox.min.toArray(),max:f.boundingBox.max.toArray()}:void 0,boundingSphere:f.boundingSphere?{radius:f.boundingSphere.radius,center:f.boundingSphere.center.toArray()}:void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const x=h[p];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),g=c(e.images),x=c(e.shapes),_=c(e.skeletons),S=c(e.animations),M=c(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),M.length>0&&(s.nodes=M)}return s.object=o,s;function c(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}In.DEFAULT_UP=new $(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new $,Bi=new $,Jc=new $,zi=new $,Fs=new $,Os=new $,Im=new $,ef=new $,tf=new $,nf=new $,rf=new Pt,sf=new Pt,af=new Pt;class li{constructor(e=new $,t=new $,s=new $){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),oi.subVectors(e,t),o.cross(oi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){oi.subVectors(o,t),Bi.subVectors(s,t),Jc.subVectors(e,t);const c=oi.dot(oi),f=oi.dot(Bi),h=oi.dot(Jc),p=Bi.dot(Bi),g=Bi.dot(Jc),x=c*p-f*f;if(x===0)return l.set(0,0,0),null;const _=1/x,S=(p*h-f*g)*_,M=(c*g-f*h)*_;return l.set(1-S-M,M,S)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,s,o,l,c,f,h){return this.getBarycoord(e,t,s,o,zi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,zi.x),h.addScaledVector(c,zi.y),h.addScaledVector(f,zi.z),h)}static getInterpolatedAttribute(e,t,s,o,l,c){return rf.setScalar(0),sf.setScalar(0),af.setScalar(0),rf.fromBufferAttribute(e,t),sf.fromBufferAttribute(e,s),af.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(rf,l.x),c.addScaledVector(sf,l.y),c.addScaledVector(af,l.z),c}static isFrontFacing(e,t,s,o){return oi.subVectors(s,t),Bi.subVectors(e,t),oi.cross(Bi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),oi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return li.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let c,f;Fs.subVectors(o,s),Os.subVectors(l,s),ef.subVectors(e,s);const h=Fs.dot(ef),p=Os.dot(ef);if(h<=0&&p<=0)return t.copy(s);tf.subVectors(e,o);const g=Fs.dot(tf),x=Os.dot(tf);if(g>=0&&x<=g)return t.copy(o);const _=h*x-g*p;if(_<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(s).addScaledVector(Fs,c);nf.subVectors(e,l);const S=Fs.dot(nf),M=Os.dot(nf);if(M>=0&&S<=M)return t.copy(l);const w=S*p-h*M;if(w<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(s).addScaledVector(Os,f);const y=g*M-S*x;if(y<=0&&x-g>=0&&S-M>=0)return Im.subVectors(l,o),f=(x-g)/(x-g+(S-M)),t.copy(o).addScaledVector(Im,f);const v=1/(y+w+_);return c=w*v,f=_*v,t.copy(s).addScaledVector(Fs,c).addScaledVector(Os,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},Al={h:0,s:0,l:0};function of(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Tt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=s,wt.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=wt.workingColorSpace){if(e=Ed(e,1),t=vt(t,0,1),s=vt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=of(c,l,e+1/3),this.g=of(c,l,e),this.b=of(c,l,e-1/3)}return wt.toWorkingColorSpace(this,o),this}setStyle(e,t=Kn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const s=$g[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return wt.fromWorkingColorSpace(vn.copy(this),e),Math.round(vt(vn.r*255,0,255))*65536+Math.round(vt(vn.g*255,0,255))*256+Math.round(vt(vn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(vn.copy(this),t);const s=vn.r,o=vn.g,l=vn.b,c=Math.max(s,o,l),f=Math.min(s,o,l);let h,p;const g=(f+c)/2;if(f===c)h=0,p=0;else{const x=c-f;switch(p=g<=.5?x/(c+f):x/(2-c-f),c){case s:h=(o-l)/x+(o<l?6:0);break;case o:h=(l-s)/x+2;break;case l:h=(s-o)/x+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Kn){wt.fromWorkingColorSpace(vn.copy(this),e);const t=vn.r,s=vn.g,o=vn.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+t,Er.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Er),e.getHSL(Al);const s=ja(Er.h,Al.h,t),o=ja(Er.s,Al.s,t),l=ja(Er.l,Al.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Tt;Tt.NAMES=$g;let Vy=0;class ta extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=Ws,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ef,this.blendDst=wf,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(s.blending=this.blending),this.side!==Cr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ef&&(s.blendSrc=this.blendSrc),this.blendDst!==wf&&(s.blendDst=this.blendDst),this.blendEquation!==Zr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qg extends ta{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Ig,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new $,Cl=new ct;let Gy=0;class xi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=ym,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Cl.fromBufferAttribute(this,t),Cl.applyMatrix3(e),this.setXY(t,Cl.x,Cl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Vs(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=En(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vs(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vs(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vs(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),s=En(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),s=En(s,this.array),o=En(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),s=En(s,this.array),o=En(o,this.array),l=En(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ym&&(e.usage=this.usage),e}}class Kg extends xi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Zg extends xi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Qn extends xi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let Wy=0;const qn=new Vt,lf=new In,ks=new $,zn=new ao,Ha=new ao,an=new $;class Ki extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xg(e)?Zg:Kg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new lt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,s){return qn.makeTranslation(e,t,s),this.applyMatrix4(qn),this}scale(e,t,s){return qn.makeScale(e,t,s),this.applyMatrix4(qn),this}lookAt(e){return lf.lookAt(e),lf.updateMatrix(),this.applyMatrix4(lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Qn(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];zn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Td);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Ha.setFromBufferAttribute(f),this.morphTargetsRelative?(an.addVectors(zn.min,Ha.min),zn.expandByPoint(an),an.addVectors(zn.max,Ha.max),zn.expandByPoint(an)):(zn.expandByPoint(Ha.min),zn.expandByPoint(Ha.max))}zn.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)an.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(an));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)an.fromBufferAttribute(f,p),h&&(ks.fromBufferAttribute(e,p),an.add(ks)),o=Math.max(o,s.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let H=0;H<s.count;H++)f[H]=new $,h[H]=new $;const p=new $,g=new $,x=new $,_=new ct,S=new ct,M=new ct,w=new $,y=new $;function v(H,b,C){p.fromBufferAttribute(s,H),g.fromBufferAttribute(s,b),x.fromBufferAttribute(s,C),_.fromBufferAttribute(l,H),S.fromBufferAttribute(l,b),M.fromBufferAttribute(l,C),g.sub(p),x.sub(p),S.sub(_),M.sub(_);const B=1/(S.x*M.y-M.x*S.y);isFinite(B)&&(w.copy(g).multiplyScalar(M.y).addScaledVector(x,-S.y).multiplyScalar(B),y.copy(x).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(B),f[H].add(w),f[b].add(w),f[C].add(w),h[H].add(y),h[b].add(y),h[C].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let H=0,b=L.length;H<b;++H){const C=L[H],B=C.start,ae=C.count;for(let ne=B,de=B+ae;ne<de;ne+=3)v(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const P=new $,A=new $,z=new $,F=new $;function I(H){z.fromBufferAttribute(o,H),F.copy(z);const b=f[H];P.copy(b),P.sub(z.multiplyScalar(z.dot(b))).normalize(),A.crossVectors(F,b);const B=A.dot(h[H])<0?-1:1;c.setXYZW(H,P.x,P.y,P.z,B)}for(let H=0,b=L.length;H<b;++H){const C=L[H],B=C.start,ae=C.count;for(let ne=B,de=B+ae;ne<de;ne+=3)I(e.getX(ne+0)),I(e.getX(ne+1)),I(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const o=new $,l=new $,c=new $,f=new $,h=new $,p=new $,g=new $,x=new $;if(e)for(let _=0,S=e.count;_<S;_+=3){const M=e.getX(_+0),w=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),g.subVectors(c,l),x.subVectors(o,l),g.cross(x),f.fromBufferAttribute(s,M),h.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),f.add(g),h.add(g),p.add(g),s.setXYZ(M,f.x,f.y,f.z),s.setXYZ(w,h.x,h.y,h.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,S=t.count;_<S;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),g.subVectors(c,l),x.subVectors(o,l),g.cross(x),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(f,h){const p=f.array,g=f.itemSize,x=f.normalized,_=new p.constructor(h.length*g);let S=0,M=0;for(let w=0,y=h.length;w<y;w++){f.isInterleavedBufferAttribute?S=h[w]*f.data.stride+f.offset:S=h[w]*g;for(let v=0;v<g;v++)_[M++]=p[S++]}return new xi(_,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ki,s=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let g=0,x=p.length;g<x;g++){const _=p[g],S=e(_,s);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let x=0,_=p.length;x<_;x++){const S=p[x];g.push(S.toJSON(e.data))}g.length>0&&(o[h]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],x=l[p];for(let _=0,S=x.length;_<S;_++)g.push(x[_].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const x=c[p];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nm=new Vt,Xr=new Ny,Rl=new Td,Fm=new $,Pl=new $,bl=new $,Ll=new $,uf=new $,Dl=new $,Om=new $,Ul=new $;class Zn extends In{constructor(e=new Ki,t=new qg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Dl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=f[h],x=l[h];g!==0&&(uf.fromBufferAttribute(x,e),c?Dl.addScaledVector(uf,g):Dl.addScaledVector(uf.sub(t),g))}t.add(Dl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Rl.copy(s.boundingSphere),Rl.applyMatrix4(l),Xr.copy(e.ray).recast(e.near),!(Rl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Rl,Fm)===null||Xr.origin.distanceToSquared(Fm)>(e.far-e.near)**2))&&(Nm.copy(l).invert(),Xr.copy(e.ray).applyMatrix4(Nm),!(s.boundingBox!==null&&Xr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,s){let o;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,x=l.attributes.normal,_=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,w=_.length;M<w;M++){const y=_[M],v=c[y.materialIndex],L=Math.max(y.start,S.start),P=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let A=L,z=P;A<z;A+=3){const F=f.getX(A),I=f.getX(A+1),H=f.getX(A+2);o=Il(this,v,e,s,p,g,x,F,I,H),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=M,v=w;y<v;y+=3){const L=f.getX(y),P=f.getX(y+1),A=f.getX(y+2);o=Il(this,c,e,s,p,g,x,L,P,A),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,w=_.length;M<w;M++){const y=_[M],v=c[y.materialIndex],L=Math.max(y.start,S.start),P=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let A=L,z=P;A<z;A+=3){const F=A,I=A+1,H=A+2;o=Il(this,v,e,s,p,g,x,F,I,H),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let y=M,v=w;y<v;y+=3){const L=y,P=y+1,A=y+2;o=Il(this,c,e,s,p,g,x,L,P,A),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Xy(r,e,t,s,o,l,c,f){let h;if(e.side===Un?h=s.intersectTriangle(c,l,o,!0,f):h=s.intersectTriangle(o,l,c,e.side===Cr,f),h===null)return null;Ul.copy(f),Ul.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Ul);return p<t.near||p>t.far?null:{distance:p,point:Ul.clone(),object:r}}function Il(r,e,t,s,o,l,c,f,h,p){r.getVertexPosition(f,Pl),r.getVertexPosition(h,bl),r.getVertexPosition(p,Ll);const g=Xy(r,e,t,s,Pl,bl,Ll,Om);if(g){const x=new $;li.getBarycoord(Om,Pl,bl,Ll,x),o&&(g.uv=li.getInterpolatedAttribute(o,f,h,p,x,new ct)),l&&(g.uv1=li.getInterpolatedAttribute(l,f,h,p,x,new ct)),c&&(g.normal=li.getInterpolatedAttribute(c,f,h,p,x,new $),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:h,c:p,normal:new $,materialIndex:0};li.getNormal(Pl,bl,Ll,_.normal),g.face=_,g.barycoord=x}return g}class oo extends Ki{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],g=[],x=[];let _=0,S=0;M("z","y","x",-1,-1,s,t,e,c,l,0),M("z","y","x",1,-1,s,t,-e,c,l,1),M("x","z","y",1,1,e,s,t,o,c,2),M("x","z","y",1,-1,e,s,-t,o,c,3),M("x","y","z",1,-1,e,t,s,o,l,4),M("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new Qn(p,3)),this.setAttribute("normal",new Qn(g,3)),this.setAttribute("uv",new Qn(x,2));function M(w,y,v,L,P,A,z,F,I,H,b){const C=A/I,B=z/H,ae=A/2,ne=z/2,de=F/2,ge=I+1,oe=H+1;let ue=0,V=0;const le=new $;for(let se=0;se<oe;se++){const N=se*B-ne;for(let ie=0;ie<ge;ie++){const Ne=ie*C-ae;le[w]=Ne*L,le[y]=N*P,le[v]=de,p.push(le.x,le.y,le.z),le[w]=0,le[y]=0,le[v]=F>0?1:-1,g.push(le.x,le.y,le.z),x.push(ie/I),x.push(1-se/H),ue+=1}}for(let se=0;se<H;se++)for(let N=0;N<I;N++){const ie=_+N+ge*se,Ne=_+N+ge*(se+1),J=_+(N+1)+ge*(se+1),me=_+(N+1)+ge*se;h.push(ie,Ne,me),h.push(Ne,J,me),V+=6}f.addGroup(S,V,b),S+=V,_+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function wn(r){const e={};for(let t=0;t<r.length;t++){const s=Ks(r[t]);for(const o in s)e[o]=s[o]}return e}function jy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Qg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const eo={clone:Ks,merge:wn};var Yy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$y=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends ta{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yy,this.fragmentShader=$y,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=jy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Jg extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wr=new $,km=new ct,Bm=new ct;class Hn extends Jg{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qa*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,t){return this.getViewBounds(e,km,Bm),t.subVectors(Bm,km)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xa*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*s/p,o*=c.width/h,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bs=-90,zs=1;class qy extends In{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Hn(Bs,zs,e,t);o.layers=this.layers,this.add(o);const l=new Hn(Bs,zs,e,t);l.layers=this.layers,this.add(l);const c=new Hn(Bs,zs,e,t);c.layers=this.layers,this.add(c);const f=new Hn(Bs,zs,e,t);f.layers=this.layers,this.add(f);const h=new Hn(Bs,zs,e,t);h.layers=this.layers,this.add(h);const p=new Hn(Bs,zs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ql)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,g]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,c),e.setRenderTarget(s,2,o),e.render(t,f),e.setRenderTarget(s,3,o),e.render(t,h),e.setRenderTarget(s,4,o),e.render(t,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,o),e.render(t,g),e.setRenderTarget(x,_,S),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class ev extends Tn{constructor(e=[],t=Ys,s,o,l,c,f,h,p,g){super(e,t,s,o,l,c,f,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ky extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new ev(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_i}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new oo(5,5,5),l=new Vn({name:"CubemapFromEquirect",uniforms:Ks(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Un,blending:ji});l.uniforms.tEquirect.value=t;const c=new Zn(o,l),f=t.minFilter;return t.minFilter===es&&(t.minFilter=_i),new qy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}}class Nl extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zy={type:"move"};class cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,s),v=this._getHandJoint(p,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=g.position.distanceTo(x.position),S=.02,M=.005;p.inputState.pinching&&_>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Zy)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Nl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class Qy extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ff=new $,Jy=new $,eS=new lt;class qr{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=ff.subVectors(s,t).cross(Jy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(ff),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||eS.getNormalMatrix(e),o=this.coplanarPoint(ff).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new Td,Fl=new $;class Ad{constructor(e=new qr,t=new qr,s=new qr,o=new qr,l=new qr,c=new qr){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Wi){const s=this.planes,o=e.elements,l=o[0],c=o[1],f=o[2],h=o[3],p=o[4],g=o[5],x=o[6],_=o[7],S=o[8],M=o[9],w=o[10],y=o[11],v=o[12],L=o[13],P=o[14],A=o[15];if(s[0].setComponents(h-l,_-p,y-S,A-v).normalize(),s[1].setComponents(h+l,_+p,y+S,A+v).normalize(),s[2].setComponents(h+c,_+g,y+M,A+L).normalize(),s[3].setComponents(h-c,_-g,y-M,A-L).normalize(),s[4].setComponents(h-f,_-x,y-w,A-P).normalize(),t===Wi)s[5].setComponents(h+f,_+x,y+w,A+P).normalize();else if(t===Ql)s[5].setComponents(f,x,w,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Fl.x=o.normal.x>0?e.max.x:e.min.x,Fl.y=o.normal.y>0?e.max.y:e.min.y,Fl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tv extends Tn{constructor(e,t,s=ns,o,l,c,f=ci,h=ci,p,g=Ka){if(g!==Ka&&g!==Za)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,l,c,f,h,g,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nu extends Ki{constructor(e=[],t=[],s=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:s,detail:o};const l=[],c=[];f(o),p(s),g(),this.setAttribute("position",new Qn(l,3)),this.setAttribute("normal",new Qn(l.slice(),3)),this.setAttribute("uv",new Qn(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(L){const P=new $,A=new $,z=new $;for(let F=0;F<t.length;F+=3)S(t[F+0],P),S(t[F+1],A),S(t[F+2],z),h(P,A,z,L)}function h(L,P,A,z){const F=z+1,I=[];for(let H=0;H<=F;H++){I[H]=[];const b=L.clone().lerp(A,H/F),C=P.clone().lerp(A,H/F),B=F-H;for(let ae=0;ae<=B;ae++)ae===0&&H===F?I[H][ae]=b:I[H][ae]=b.clone().lerp(C,ae/B)}for(let H=0;H<F;H++)for(let b=0;b<2*(F-H)-1;b++){const C=Math.floor(b/2);b%2===0?(_(I[H][C+1]),_(I[H+1][C]),_(I[H][C])):(_(I[H][C+1]),_(I[H+1][C+1]),_(I[H+1][C]))}}function p(L){const P=new $;for(let A=0;A<l.length;A+=3)P.x=l[A+0],P.y=l[A+1],P.z=l[A+2],P.normalize().multiplyScalar(L),l[A+0]=P.x,l[A+1]=P.y,l[A+2]=P.z}function g(){const L=new $;for(let P=0;P<l.length;P+=3){L.x=l[P+0],L.y=l[P+1],L.z=l[P+2];const A=y(L)/2/Math.PI+.5,z=v(L)/Math.PI+.5;c.push(A,1-z)}M(),x()}function x(){for(let L=0;L<c.length;L+=6){const P=c[L+0],A=c[L+2],z=c[L+4],F=Math.max(P,A,z),I=Math.min(P,A,z);F>.9&&I<.1&&(P<.2&&(c[L+0]+=1),A<.2&&(c[L+2]+=1),z<.2&&(c[L+4]+=1))}}function _(L){l.push(L.x,L.y,L.z)}function S(L,P){const A=L*3;P.x=e[A+0],P.y=e[A+1],P.z=e[A+2]}function M(){const L=new $,P=new $,A=new $,z=new $,F=new ct,I=new ct,H=new ct;for(let b=0,C=0;b<l.length;b+=9,C+=6){L.set(l[b+0],l[b+1],l[b+2]),P.set(l[b+3],l[b+4],l[b+5]),A.set(l[b+6],l[b+7],l[b+8]),F.set(c[C+0],c[C+1]),I.set(c[C+2],c[C+3]),H.set(c[C+4],c[C+5]),z.copy(L).add(P).add(A).divideScalar(3);const B=y(z);w(F,C+0,L,B),w(I,C+2,P,B),w(H,C+4,A,B)}}function w(L,P,A,z){z<0&&L.x===1&&(c[P]=L.x-1),A.x===0&&A.z===0&&(c[P]=z/2/Math.PI+.5)}function y(L){return Math.atan2(L.z,-L.x)}function v(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.vertices,e.indices,e.radius,e.details)}}class Cd extends nu{constructor(e=1,t=0){const s=(1+Math.sqrt(5))/2,o=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Cd(e.radius,e.detail)}}class Rd extends nu{constructor(e=1,t=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Rd(e.radius,e.detail)}}class iu extends Ki{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(s),h=Math.floor(o),p=f+1,g=h+1,x=e/f,_=t/h,S=[],M=[],w=[],y=[];for(let v=0;v<g;v++){const L=v*_-c;for(let P=0;P<p;P++){const A=P*x-l;M.push(A,-L,0),w.push(0,0,1),y.push(P/f),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let L=0;L<f;L++){const P=L+p*v,A=L+p*(v+1),z=L+1+p*(v+1),F=L+1+p*v;S.push(P,A,F),S.push(A,z,F)}this.setIndex(S),this.setAttribute("position",new Qn(M,3)),this.setAttribute("normal",new Qn(w,3)),this.setAttribute("uv",new Qn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new iu(e.width,e.height,e.widthSegments,e.heightSegments)}}class tS extends ta{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Md,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nS extends ta{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Md,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class iS extends ta{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rS extends ta{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zm={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class sS{constructor(e,t,s){const o=this;let l=!1,c=0,f=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(g){f++,l===!1&&o.onStart!==void 0&&o.onStart(g,c,f),l=!0},this.itemEnd=function(g){c++,o.onProgress!==void 0&&o.onProgress(g,c,f),c===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,x){return p.push(g,x),this},this.removeHandler=function(g){const x=p.indexOf(g);return x!==-1&&p.splice(x,2),this},this.getHandler=function(g){for(let x=0,_=p.length;x<_;x+=2){const S=p[x],M=p[x+1];if(S.global&&(S.lastIndex=0),S.test(g))return M}return null}}}const aS=new sS;class Pd{constructor(e){this.manager=e!==void 0?e:aS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(o,l){s.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Pd.DEFAULT_MATERIAL_NAME="__DEFAULT";class oS extends Pd{constructor(e){super(e)}load(e,t,s,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=zm.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;const f=Ja("img");function h(){g(),zm.add(e,this),t&&t(this),l.manager.itemEnd(e)}function p(x){g(),o&&o(x),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(e),f.src=e,f}}class lS extends Pd{constructor(e){super(e)}load(e,t,s,o){const l=new Tn,c=new oS(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,o),l}}class nv extends In{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const df=new Vt,Hm=new $,Vm=new $;class uS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ad,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Hm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hm),Vm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vm),t.updateMatrixWorld(),df.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(df),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(df)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gm=new Vt,Va=new $,hf=new $;class cS extends uS{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,t=0){const s=this.camera,o=this.matrix,l=e.distance||s.far;l!==s.far&&(s.far=l,s.updateProjectionMatrix()),Va.setFromMatrixPosition(e.matrixWorld),s.position.copy(Va),hf.copy(s.position),hf.add(this._cubeDirections[t]),s.up.copy(this._cubeUps[t]),s.lookAt(hf),s.updateMatrixWorld(),o.makeTranslation(-Va.x,-Va.y,-Va.z),Gm.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gm)}}class fS extends nv{constructor(e,t,s=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=o,this.shadow=new cS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class iv extends Jg{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dS extends nv{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hS extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class pS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wm(){return performance.now()}function Xm(r,e,t,s){const o=mS(s);switch(t){case Bg:return r*e;case Hg:return r*e/o.components*o.byteLength;case xd:return r*e/o.components*o.byteLength;case Vg:return r*e*2/o.components*o.byteLength;case yd:return r*e*2/o.components*o.byteLength;case zg:return r*e*3/o.components*o.byteLength;case ui:return r*e*4/o.components*o.byteLength;case Sd:return r*e*4/o.components*o.byteLength;case Gl:case Wl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xl:case jl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Of:case Bf:return Math.max(r,16)*Math.max(e,8)/4;case Ff:case kf:return Math.max(r,8)*Math.max(e,8)/2;case zf:case Hf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case jf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case $f:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case qf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Zf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Jf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ed:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case td:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case nd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Yl:case id:case rd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Gg:case sd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ad:case od:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mS(r){switch(r){case Si:case Fg:return{byteLength:1,components:1};case $a:case Og:case Rr:return{byteLength:2,components:1};case vd:case _d:return{byteLength:2,components:4};case ns:case gd:case Gi:return{byteLength:4,components:1};case kg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=md);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rv(){let r=null,e=!1,t=null,s=null;function o(l,c){t(l,c),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function gS(r){const e=new WeakMap;function t(f,h){const p=f.array,g=f.usage,x=p.byteLength,_=r.createBuffer();r.bindBuffer(h,_),r.bufferData(h,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:x}}function s(f,h,p){const g=h.array,x=h.updateRanges;if(r.bindBuffer(p,f),x.length===0)r.bufferSubData(p,0,g);else{x.sort((S,M)=>S.start-M.start);let _=0;for(let S=1;S<x.length;S++){const M=x[_],w=x[S];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++_,x[_]=w)}x.length=_+1;for(let S=0,M=x.length;S<M;S++){const w=x[S];r.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:c}}var vS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_S=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ES=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,AS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,HS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,VS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,GS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YS="gl_FragColor = linearToOutputTexel( gl_FragColor );",$S=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,KS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_M=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,UM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,EE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,TE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,OE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,HE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$E=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:vS,alphahash_pars_fragment:_S,alphamap_fragment:xS,alphamap_pars_fragment:yS,alphatest_fragment:SS,alphatest_pars_fragment:MS,aomap_fragment:ES,aomap_pars_fragment:wS,batching_pars_vertex:TS,batching_vertex:AS,begin_vertex:CS,beginnormal_vertex:RS,bsdfs:PS,iridescence_fragment:bS,bumpmap_pars_fragment:LS,clipping_planes_fragment:DS,clipping_planes_pars_fragment:US,clipping_planes_pars_vertex:IS,clipping_planes_vertex:NS,color_fragment:FS,color_pars_fragment:OS,color_pars_vertex:kS,color_vertex:BS,common:zS,cube_uv_reflection_fragment:HS,defaultnormal_vertex:VS,displacementmap_pars_vertex:GS,displacementmap_vertex:WS,emissivemap_fragment:XS,emissivemap_pars_fragment:jS,colorspace_fragment:YS,colorspace_pars_fragment:$S,envmap_fragment:qS,envmap_common_pars_fragment:KS,envmap_pars_fragment:ZS,envmap_pars_vertex:QS,envmap_physical_pars_fragment:uM,envmap_vertex:JS,fog_vertex:eM,fog_pars_vertex:tM,fog_fragment:nM,fog_pars_fragment:iM,gradientmap_pars_fragment:rM,lightmap_pars_fragment:sM,lights_lambert_fragment:aM,lights_lambert_pars_fragment:oM,lights_pars_begin:lM,lights_toon_fragment:cM,lights_toon_pars_fragment:fM,lights_phong_fragment:dM,lights_phong_pars_fragment:hM,lights_physical_fragment:pM,lights_physical_pars_fragment:mM,lights_fragment_begin:gM,lights_fragment_maps:vM,lights_fragment_end:_M,logdepthbuf_fragment:xM,logdepthbuf_pars_fragment:yM,logdepthbuf_pars_vertex:SM,logdepthbuf_vertex:MM,map_fragment:EM,map_pars_fragment:wM,map_particle_fragment:TM,map_particle_pars_fragment:AM,metalnessmap_fragment:CM,metalnessmap_pars_fragment:RM,morphinstance_vertex:PM,morphcolor_vertex:bM,morphnormal_vertex:LM,morphtarget_pars_vertex:DM,morphtarget_vertex:UM,normal_fragment_begin:IM,normal_fragment_maps:NM,normal_pars_fragment:FM,normal_pars_vertex:OM,normal_vertex:kM,normalmap_pars_fragment:BM,clearcoat_normal_fragment_begin:zM,clearcoat_normal_fragment_maps:HM,clearcoat_pars_fragment:VM,iridescence_pars_fragment:GM,opaque_fragment:WM,packing:XM,premultiplied_alpha_fragment:jM,project_vertex:YM,dithering_fragment:$M,dithering_pars_fragment:qM,roughnessmap_fragment:KM,roughnessmap_pars_fragment:ZM,shadowmap_pars_fragment:QM,shadowmap_pars_vertex:JM,shadowmap_vertex:eE,shadowmask_pars_fragment:tE,skinbase_vertex:nE,skinning_pars_vertex:iE,skinning_vertex:rE,skinnormal_vertex:sE,specularmap_fragment:aE,specularmap_pars_fragment:oE,tonemapping_fragment:lE,tonemapping_pars_fragment:uE,transmission_fragment:cE,transmission_pars_fragment:fE,uv_pars_fragment:dE,uv_pars_vertex:hE,uv_vertex:pE,worldpos_vertex:mE,background_vert:gE,background_frag:vE,backgroundCube_vert:_E,backgroundCube_frag:xE,cube_vert:yE,cube_frag:SE,depth_vert:ME,depth_frag:EE,distanceRGBA_vert:wE,distanceRGBA_frag:TE,equirect_vert:AE,equirect_frag:CE,linedashed_vert:RE,linedashed_frag:PE,meshbasic_vert:bE,meshbasic_frag:LE,meshlambert_vert:DE,meshlambert_frag:UE,meshmatcap_vert:IE,meshmatcap_frag:NE,meshnormal_vert:FE,meshnormal_frag:OE,meshphong_vert:kE,meshphong_frag:BE,meshphysical_vert:zE,meshphysical_frag:HE,meshtoon_vert:VE,meshtoon_frag:GE,points_vert:WE,points_frag:XE,shadow_vert:jE,shadow_frag:YE,sprite_vert:$E,sprite_frag:qE},be={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},vi={basic:{uniforms:wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:wn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:wn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:wn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:wn([be.points,be.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:wn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:wn([be.common,be.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:wn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:wn([be.sprite,be.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:wn([be.common,be.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:wn([be.lights,be.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};vi.physical={uniforms:wn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Ol={r:0,b:0,g:0},Yr=new Ei,KE=new Vt;function ZE(r,e,t,s,o,l,c){const f=new Tt(0);let h=l===!0?0:1,p,g,x=null,_=0,S=null;function M(P){let A=P.isScene===!0?P.background:null;return A&&A.isTexture&&(A=(P.backgroundBlurriness>0?t:e).get(A)),A}function w(P){let A=!1;const z=M(P);z===null?v(f,h):z&&z.isColor&&(v(z,1),A=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||A)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(P,A){const z=M(A);z&&(z.isCubeTexture||z.mapping===tu)?(g===void 0&&(g=new Zn(new oo(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Ks(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,I,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Yr.copy(A.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(KE.makeRotationFromEuler(Yr)),g.material.toneMapped=wt.getTransfer(z.colorSpace)!==Rt,(x!==z||_!==z.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,x=z,_=z.version,S=r.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Zn(new iu(2,2),new Vn({name:"BackgroundMaterial",uniforms:Ks(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=wt.getTransfer(z.colorSpace)!==Rt,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(x!==z||_!==z.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,x=z,_=z.version,S=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function v(P,A){P.getRGB(Ol,Qg(r)),s.buffers.color.setClear(Ol.r,Ol.g,Ol.b,A,c)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,A=1){f.set(P),h=A,v(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,v(f,h)},render:w,addToRenderList:y,dispose:L}}function QE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=_(null);let l=o,c=!1;function f(C,B,ae,ne,de){let ge=!1;const oe=x(ne,ae,B);l!==oe&&(l=oe,p(l.object)),ge=S(C,ne,ae,de),ge&&M(C,ne,ae,de),de!==null&&e.update(de,r.ELEMENT_ARRAY_BUFFER),(ge||c)&&(c=!1,A(C,B,ae,ne),de!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function h(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function x(C,B,ae){const ne=ae.wireframe===!0;let de=s[C.id];de===void 0&&(de={},s[C.id]=de);let ge=de[B.id];ge===void 0&&(ge={},de[B.id]=ge);let oe=ge[ne];return oe===void 0&&(oe=_(h()),ge[ne]=oe),oe}function _(C){const B=[],ae=[],ne=[];for(let de=0;de<t;de++)B[de]=0,ae[de]=0,ne[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ae,attributeDivisors:ne,object:C,attributes:{},index:null}}function S(C,B,ae,ne){const de=l.attributes,ge=B.attributes;let oe=0;const ue=ae.getAttributes();for(const V in ue)if(ue[V].location>=0){const se=de[V];let N=ge[V];if(N===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),se===void 0||se.attribute!==N||N&&se.data!==N.data)return!0;oe++}return l.attributesNum!==oe||l.index!==ne}function M(C,B,ae,ne){const de={},ge=B.attributes;let oe=0;const ue=ae.getAttributes();for(const V in ue)if(ue[V].location>=0){let se=ge[V];se===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const N={};N.attribute=se,se&&se.data&&(N.data=se.data),de[V]=N,oe++}l.attributes=de,l.attributesNum=oe,l.index=ne}function w(){const C=l.newAttributes;for(let B=0,ae=C.length;B<ae;B++)C[B]=0}function y(C){v(C,0)}function v(C,B){const ae=l.newAttributes,ne=l.enabledAttributes,de=l.attributeDivisors;ae[C]=1,ne[C]===0&&(r.enableVertexAttribArray(C),ne[C]=1),de[C]!==B&&(r.vertexAttribDivisor(C,B),de[C]=B)}function L(){const C=l.newAttributes,B=l.enabledAttributes;for(let ae=0,ne=B.length;ae<ne;ae++)B[ae]!==C[ae]&&(r.disableVertexAttribArray(ae),B[ae]=0)}function P(C,B,ae,ne,de,ge,oe){oe===!0?r.vertexAttribIPointer(C,B,ae,de,ge):r.vertexAttribPointer(C,B,ae,ne,de,ge)}function A(C,B,ae,ne){w();const de=ne.attributes,ge=ae.getAttributes(),oe=B.defaultAttributeValues;for(const ue in ge){const V=ge[ue];if(V.location>=0){let le=de[ue];if(le===void 0&&(ue==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),ue==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const se=le.normalized,N=le.itemSize,ie=e.get(le);if(ie===void 0)continue;const Ne=ie.buffer,J=ie.type,me=ie.bytesPerElement,we=J===r.INT||J===r.UNSIGNED_INT||le.gpuType===gd;if(le.isInterleavedBufferAttribute){const ye=le.data,Ae=ye.stride,Ye=le.offset;if(ye.isInstancedInterleavedBuffer){for(let We=0;We<V.locationSize;We++)v(V.location+We,ye.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let We=0;We<V.locationSize;We++)y(V.location+We);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let We=0;We<V.locationSize;We++)P(V.location+We,N/V.locationSize,J,se,Ae*me,(Ye+N/V.locationSize*We)*me,we)}else{if(le.isInstancedBufferAttribute){for(let ye=0;ye<V.locationSize;ye++)v(V.location+ye,le.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ye=0;ye<V.locationSize;ye++)y(V.location+ye);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let ye=0;ye<V.locationSize;ye++)P(V.location+ye,N/V.locationSize,J,se,N*me,N/V.locationSize*ye*me,we)}}else if(oe!==void 0){const se=oe[ue];if(se!==void 0)switch(se.length){case 2:r.vertexAttrib2fv(V.location,se);break;case 3:r.vertexAttrib3fv(V.location,se);break;case 4:r.vertexAttrib4fv(V.location,se);break;default:r.vertexAttrib1fv(V.location,se)}}}}L()}function z(){H();for(const C in s){const B=s[C];for(const ae in B){const ne=B[ae];for(const de in ne)g(ne[de].object),delete ne[de];delete B[ae]}delete s[C]}}function F(C){if(s[C.id]===void 0)return;const B=s[C.id];for(const ae in B){const ne=B[ae];for(const de in ne)g(ne[de].object),delete ne[de];delete B[ae]}delete s[C.id]}function I(C){for(const B in s){const ae=s[B];if(ae[C.id]===void 0)continue;const ne=ae[C.id];for(const de in ne)g(ne[de].object),delete ne[de];delete ae[C.id]}}function H(){b(),c=!0,l!==o&&(l=o,p(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:H,resetDefaultState:b,dispose:z,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:y,disableUnusedAttributes:L}}function JE(r,e,t){let s;function o(p){s=p}function l(p,g){r.drawArrays(s,p,g),t.update(g,s,1)}function c(p,g,x){x!==0&&(r.drawArraysInstanced(s,p,g,x),t.update(g,s,x))}function f(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,x);let S=0;for(let M=0;M<x;M++)S+=g[M];t.update(S,s,1)}function h(p,g,x,_){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)c(p[M],g[M],_[M]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,_,0,x);let M=0;for(let w=0;w<x;w++)M+=g[w]*_[w];t.update(M,s,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function ew(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(I){return!(I!==ui&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const H=I===Rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Si&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Gi&&!H)}function h(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=M>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:A,vertexTextures:z,maxSamples:F}}function tw(r){const e=this;let t=null,s=0,o=!1,l=!1;const c=new qr,f=new lt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const S=x.length!==0||_||s!==0||o;return o=_,s=x.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,_){t=g(x,_,0)},this.setState=function(x,_,S){const M=x.clippingPlanes,w=x.clipIntersection,y=x.clipShadows,v=r.get(x);if(!o||M===null||M.length===0||l&&!y)l?g(null):p();else{const L=l?0:s,P=L*4;let A=v.clippingState||null;h.value=A,A=g(M,_,P,S);for(let z=0;z!==P;++z)A[z]=t[z];v.clippingState=A,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(x,_,S,M){const w=x!==null?x.length:0;let y=null;if(w!==0){if(y=h.value,M!==!0||y===null){const v=S+w*4,L=_.matrixWorldInverse;f.getNormalMatrix(L),(y===null||y.length<v)&&(y=new Float32Array(v));for(let P=0,A=S;P!==w;++P,A+=4)c.copy(x[P]).applyMatrix4(L,f),c.normal.toArray(y,A),y[A+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function nw(r){let e=new WeakMap;function t(c,f){return f===Df?c.mapping=Ys:f===Uf&&(c.mapping=$s),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===Df||f===Uf)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new Ky(h.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",o),t(p.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const Gs=4,jm=[.125,.215,.35,.446,.526,.582],Qr=20,pf=new iv,Ym=new Tt;let mf=null,gf=0,vf=0,_f=!1;const Kr=(1+Math.sqrt(5))/2,Hs=1/Kr,$m=[new $(-Kr,Hs,0),new $(Kr,Hs,0),new $(-Hs,0,Kr),new $(Hs,0,Kr),new $(0,Kr,-Hs),new $(0,Kr,Hs),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],iw=new $;class qm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100,l={}){const{size:c=256,position:f=iw}=l;mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mf,gf,vf),this._renderer.xr.enabled=_f,e.scissorTest=!1,kl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Rr,format:ui,colorSpace:qs,depthBuffer:!1},o=Km(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Km(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rw(l)),this._blurMaterial=sw(l,e,t)}return o}_compileMaterial(e){const t=new Zn(this._lodPlanes[0],e);this._renderer.compile(t,pf)}_sceneToCubeUV(e,t,s,o,l){const h=new Hn(90,1,t,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,S=x.toneMapping;x.getClearColor(Ym),x.toneMapping=Ar,x.autoClear=!1;const M=new qg({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),w=new Zn(new oo,M);let y=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,y=!0):(M.color.copy(Ym),y=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(h.up.set(0,p[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+g[L],l.y,l.z)):P===1?(h.up.set(0,0,p[L]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+g[L],l.z)):(h.up.set(0,p[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+g[L]));const A=this._cubeSize;kl(o,P*A,L>2?A:0,A,A),x.setRenderTarget(o),y&&x.render(w,h),x.render(e,h)}w.geometry.dispose(),w.material.dispose(),x.toneMapping=S,x.autoClear=_,e.background=v}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===Ys||e.mapping===$s;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zm());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new Zn(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;kl(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(c,pf)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=$m[(o-l-1)%$m.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,o,"latitudinal",l),this._halfBlur(c,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new Zn(this._lodPlanes[o],p),_=p.uniforms,S=this._sizeLods[s]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Qr-1),w=l/M,y=isFinite(l)?1+Math.floor(g*w):Qr;y>Qr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Qr}`);const v=[];let L=0;for(let I=0;I<Qr;++I){const H=I/w,b=Math.exp(-H*H/2);v.push(b),I===0?L+=b:I<y&&(L+=2*b)}for(let I=0;I<v.length;I++)v[I]=v[I]/L;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=v,_.latitudinal.value=c==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:P}=this;_.dTheta.value=M,_.mipInt.value=P-s;const A=this._sizeLods[o],z=3*A*(o>P-Gs?o-P+Gs:0),F=4*(this._cubeSize-A);kl(t,z,F,3*A,2*A),h.setRenderTarget(t),h.render(x,pf)}}function rw(r){const e=[],t=[],s=[];let o=r;const l=r-Gs+1+jm.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);t.push(f);let h=1/f;c>r-Gs?h=jm[c-r+Gs-1]:c===0&&(h=0),s.push(h);const p=1/(f-2),g=-p,x=1+p,_=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,M=6,w=3,y=2,v=1,L=new Float32Array(w*M*S),P=new Float32Array(y*M*S),A=new Float32Array(v*M*S);for(let F=0;F<S;F++){const I=F%3*2/3-1,H=F>2?0:-1,b=[I,H,0,I+2/3,H,0,I+2/3,H+1,0,I,H,0,I+2/3,H+1,0,I,H+1,0];L.set(b,w*M*F),P.set(_,y*M*F);const C=[F,F,F,F,F,F];A.set(C,v*M*F)}const z=new Ki;z.setAttribute("position",new xi(L,w)),z.setAttribute("uv",new xi(P,y)),z.setAttribute("faceIndex",new xi(A,v)),e.push(z),o>Gs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Km(r,e,t){const s=new Mi(r,e,t);return s.texture.mapping=tu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function kl(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function sw(r,e,t){const s=new Float32Array(Qr),o=new $(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Zm(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Qm(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function bd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function aw(r){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const h=f.mapping,p=h===Df||h===Uf,g=h===Ys||h===$s;if(p||g){let x=e.get(f);const _=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new qm(r)),x=p?t.fromEquirectangular(f,x):t.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&o(S)?(t===null&&(t=new qm(r)),x=p?t.fromEquirectangular(f):t.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",l),x.texture):null}}}return f}function o(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function ow(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&$l("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function lw(r,e,t,s){const o={},l=new WeakMap;function c(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",c),delete o[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(x,_){return o[_.id]===!0||(_.addEventListener("dispose",c),o[_.id]=!0,t.memory.geometries++),_}function h(x){const _=x.attributes;for(const S in _)e.update(_[S],r.ARRAY_BUFFER)}function p(x){const _=[],S=x.index,M=x.attributes.position;let w=0;if(S!==null){const L=S.array;w=S.version;for(let P=0,A=L.length;P<A;P+=3){const z=L[P+0],F=L[P+1],I=L[P+2];_.push(z,F,F,I,I,z)}}else if(M!==void 0){const L=M.array;w=M.version;for(let P=0,A=L.length/3-1;P<A;P+=3){const z=P+0,F=P+1,I=P+2;_.push(z,F,F,I,I,z)}}else return;const y=new(Xg(_)?Zg:Kg)(_,1);y.version=w;const v=l.get(x);v&&e.remove(v),l.set(x,y)}function g(x){const _=l.get(x);if(_){const S=x.index;S!==null&&_.version<S.version&&p(x)}else p(x);return l.get(x)}return{get:f,update:h,getWireframeAttribute:g}}function uw(r,e,t){let s;function o(_){s=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function h(_,S){r.drawElements(s,S,l,_*c),t.update(S,s,1)}function p(_,S,M){M!==0&&(r.drawElementsInstanced(s,S,l,_*c,M),t.update(S,s,M))}function g(_,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,_,0,M);let y=0;for(let v=0;v<M;v++)y+=S[v];t.update(y,s,1)}function x(_,S,M,w){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<_.length;v++)p(_[v]/c,S[v],w[v]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,_,0,w,0,M);let v=0;for(let L=0;L<M;L++)v+=S[L]*w[L];t.update(v,s,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function cw(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function fw(r,e,t){const s=new WeakMap,o=new Pt;function l(c,f,h){const p=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=g!==void 0?g.length:0;let _=s.get(f);if(_===void 0||_.count!==x){let C=function(){H.dispose(),s.delete(f),f.removeEventListener("dispose",C)};var S=C;_!==void 0&&_.texture.dispose();const M=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let A=0;M===!0&&(A=1),w===!0&&(A=2),y===!0&&(A=3);let z=f.attributes.position.count*A,F=1;z>e.maxTextureSize&&(F=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const I=new Float32Array(z*F*4*x),H=new jg(I,z,F,x);H.type=Gi,H.needsUpdate=!0;const b=A*4;for(let B=0;B<x;B++){const ae=v[B],ne=L[B],de=P[B],ge=z*F*4*B;for(let oe=0;oe<ae.count;oe++){const ue=oe*b;M===!0&&(o.fromBufferAttribute(ae,oe),I[ge+ue+0]=o.x,I[ge+ue+1]=o.y,I[ge+ue+2]=o.z,I[ge+ue+3]=0),w===!0&&(o.fromBufferAttribute(ne,oe),I[ge+ue+4]=o.x,I[ge+ue+5]=o.y,I[ge+ue+6]=o.z,I[ge+ue+7]=0),y===!0&&(o.fromBufferAttribute(de,oe),I[ge+ue+8]=o.x,I[ge+ue+9]=o.y,I[ge+ue+10]=o.z,I[ge+ue+11]=de.itemSize===4?o.w:1)}}_={count:x,texture:H,size:new ct(z,F)},s.set(f,_),f.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<p.length;y++)M+=p[y];const w=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",w),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:l}}function dw(r,e,t,s){let o=new WeakMap;function l(h){const p=s.render.frame,g=h.geometry,x=e.get(h,g);if(o.get(x)!==p&&(e.update(x),o.set(x,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return x}function c(){o=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const sv=new Tn,Jm=new tv(1,1),av=new jg,ov=new Uy,lv=new ev,eg=[],tg=[],ng=new Float32Array(16),ig=new Float32Array(9),rg=new Float32Array(4);function na(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=eg[o];if(l===void 0&&(l=new Float32Array(o),eg[o]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Jt(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function ru(r,e){let t=tg[e];t===void 0&&(t=new Int32Array(e),tg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function hw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function pw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),Jt(t,e)}}function mw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),Jt(t,e)}}function gw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),Jt(t,e)}}function vw(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,s))return;rg.set(s),r.uniformMatrix2fv(this.addr,!1,rg),Jt(t,s)}}function _w(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,s))return;ig.set(s),r.uniformMatrix3fv(this.addr,!1,ig),Jt(t,s)}}function xw(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,s))return;ng.set(s),r.uniformMatrix4fv(this.addr,!1,ng),Jt(t,s)}}function yw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Sw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),Jt(t,e)}}function Mw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),Jt(t,e)}}function Ew(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),Jt(t,e)}}function ww(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Tw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),Jt(t,e)}}function Aw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),Jt(t,e)}}function Cw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),Jt(t,e)}}function Rw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(Jm.compareFunction=Wg,l=Jm):l=sv,t.setTexture2D(e||l,o)}function Pw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||ov,o)}function bw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||lv,o)}function Lw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||av,o)}function Dw(r){switch(r){case 5126:return hw;case 35664:return pw;case 35665:return mw;case 35666:return gw;case 35674:return vw;case 35675:return _w;case 35676:return xw;case 5124:case 35670:return yw;case 35667:case 35671:return Sw;case 35668:case 35672:return Mw;case 35669:case 35673:return Ew;case 5125:return ww;case 36294:return Tw;case 36295:return Aw;case 36296:return Cw;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return Pw;case 35680:case 36300:case 36308:case 36293:return bw;case 36289:case 36303:case 36311:case 36292:return Lw}}function Uw(r,e){r.uniform1fv(this.addr,e)}function Iw(r,e){const t=na(e,this.size,2);r.uniform2fv(this.addr,t)}function Nw(r,e){const t=na(e,this.size,3);r.uniform3fv(this.addr,t)}function Fw(r,e){const t=na(e,this.size,4);r.uniform4fv(this.addr,t)}function Ow(r,e){const t=na(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function kw(r,e){const t=na(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Bw(r,e){const t=na(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function zw(r,e){r.uniform1iv(this.addr,e)}function Hw(r,e){r.uniform2iv(this.addr,e)}function Vw(r,e){r.uniform3iv(this.addr,e)}function Gw(r,e){r.uniform4iv(this.addr,e)}function Ww(r,e){r.uniform1uiv(this.addr,e)}function Xw(r,e){r.uniform2uiv(this.addr,e)}function jw(r,e){r.uniform3uiv(this.addr,e)}function Yw(r,e){r.uniform4uiv(this.addr,e)}function $w(r,e,t){const s=this.cache,o=e.length,l=ru(t,o);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||sv,l[c])}function qw(r,e,t){const s=this.cache,o=e.length,l=ru(t,o);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||ov,l[c])}function Kw(r,e,t){const s=this.cache,o=e.length,l=ru(t,o);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||lv,l[c])}function Zw(r,e,t){const s=this.cache,o=e.length,l=ru(t,o);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||av,l[c])}function Qw(r){switch(r){case 5126:return Uw;case 35664:return Iw;case 35665:return Nw;case 35666:return Fw;case 35674:return Ow;case 35675:return kw;case 35676:return Bw;case 5124:case 35670:return zw;case 35667:case 35671:return Hw;case 35668:case 35672:return Vw;case 35669:case 35673:return Gw;case 5125:return Ww;case 36294:return Xw;case 36295:return jw;case 36296:return Yw;case 35678:case 36198:case 36298:case 36306:case 35682:return $w;case 35679:case 36299:case 36307:return qw;case 35680:case 36300:case 36308:case 36293:return Kw;case 36289:case 36303:case 36311:case 36292:return Zw}}class Jw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=Dw(t.type)}}class eT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qw(t.type)}}class tT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const xf=/(\w+)(\])?(\[|\.)?/g;function sg(r,e){r.seq.push(e),r.map[e.id]=e}function nT(r,e,t){const s=r.name,o=s.length;for(xf.lastIndex=0;;){const l=xf.exec(s),c=xf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===o){sg(t,p===void 0?new Jw(f,r,e):new eT(f,r,e));break}else{let x=t.map[f];x===void 0&&(x=new tT(f),sg(t,x)),t=x}}}class ql{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);nT(l,c,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&s.push(c)}return s}}function ag(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const iT=37297;let rT=0;function sT(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const og=new lt;function aT(r){wt._getMatrix(og,wt.workingColorSpace,r);const e=`mat3( ${og.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(r)){case Zl:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function lg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+sT(r.getShaderSource(e),c)}else return o}function oT(r,e){const t=aT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lT(r,e){let t;switch(e){case Gx:t="Linear";break;case Wx:t="Reinhard";break;case Xx:t="Cineon";break;case jx:t="ACESFilmic";break;case $x:t="AgX";break;case qx:t="Neutral";break;case Yx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bl=new $;function uT(){wt.getLuminanceCoefficients(Bl);const r=Bl.x.toFixed(4),e=Bl.y.toFixed(4),t=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function fT(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function dT(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function Wa(r){return r!==""}function ug(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(r){return r.replace(hT,mT)}const pT=new Map;function mT(r,e){let t=ut[e];if(t===void 0){const s=pT.get(e);if(s!==void 0)t=ut[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return ld(t)}const gT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fg(r){return r.replace(gT,vT)}function vT(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function dg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _T(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ug?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Mx?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function xT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ys:case $s:e="ENVMAP_TYPE_CUBE";break;case tu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function ST(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ig:e="ENVMAP_BLENDING_MULTIPLY";break;case Hx:e="ENVMAP_BLENDING_MIX";break;case Vx:e="ENVMAP_BLENDING_ADD";break}return e}function MT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function ET(r,e,t,s){const o=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=_T(t),p=xT(t),g=yT(t),x=ST(t),_=MT(t),S=cT(t),M=fT(l),w=o.createProgram();let y,v,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Wa).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Wa).join(`
`),v.length>0&&(v+=`
`)):(y=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),v=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ar?"#define TONE_MAPPING":"",t.toneMapping!==Ar?ut.tonemapping_pars_fragment:"",t.toneMapping!==Ar?lT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,oT("linearToOutputTexel",t.outputColorSpace),uT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wa).join(`
`)),c=ld(c),c=ug(c,t),c=cg(c,t),f=ld(f),f=ug(f,t),f=cg(f,t),c=fg(c),f=fg(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===Sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=L+y+c,A=L+v+f,z=ag(o,o.VERTEX_SHADER,P),F=ag(o,o.FRAGMENT_SHADER,A);o.attachShader(w,z),o.attachShader(w,F),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function I(B){if(r.debug.checkShaderErrors){const ae=o.getProgramInfoLog(w).trim(),ne=o.getShaderInfoLog(z).trim(),de=o.getShaderInfoLog(F).trim();let ge=!0,oe=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(ge=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,w,z,F);else{const ue=lg(o,z,"vertex"),V=lg(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ae+`
`+ue+`
`+V)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(ne===""||de==="")&&(oe=!1);oe&&(B.diagnostics={runnable:ge,programLog:ae,vertexShader:{log:ne,prefix:y},fragmentShader:{log:de,prefix:v}})}o.deleteShader(z),o.deleteShader(F),H=new ql(o,w),b=dT(o,w)}let H;this.getUniforms=function(){return H===void 0&&I(this),H};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(w,iT)),C},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=z,this.fragmentShader=F,this}let wT=0;class TT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new AT(e),t.set(e,s)),s}}class AT{constructor(e){this.id=wT++,this.code=e,this.usedTimes=0}}function CT(r,e,t,s,o,l,c){const f=new Yg,h=new TT,p=new Set,g=[],x=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return p.add(b),b===0?"uv":`uv${b}`}function y(b,C,B,ae,ne){const de=ae.fog,ge=ne.geometry,oe=b.isMeshStandardMaterial?ae.environment:null,ue=(b.isMeshStandardMaterial?t:e).get(b.envMap||oe),V=ue&&ue.mapping===tu?ue.image.height:null,le=M[b.type];b.precision!==null&&(S=o.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const se=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,N=se!==void 0?se.length:0;let ie=0;ge.morphAttributes.position!==void 0&&(ie=1),ge.morphAttributes.normal!==void 0&&(ie=2),ge.morphAttributes.color!==void 0&&(ie=3);let Ne,J,me,we;if(le){const yt=vi[le];Ne=yt.vertexShader,J=yt.fragmentShader}else Ne=b.vertexShader,J=b.fragmentShader,h.update(b),me=h.getVertexShaderID(b),we=h.getFragmentShaderID(b);const ye=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Ye=ne.isInstancedMesh===!0,We=ne.isBatchedMesh===!0,Lt=!!b.map,Dt=!!b.matcap,ft=!!ue,k=!!b.aoMap,_n=!!b.lightMap,mt=!!b.bumpMap,dt=!!b.normalMap,$e=!!b.displacementMap,Ct=!!b.emissiveMap,Xe=!!b.metalnessMap,D=!!b.roughnessMap,T=b.anisotropy>0,Q=b.clearcoat>0,he=b.dispersion>0,xe=b.iridescence>0,ce=b.sheen>0,Ge=b.transmission>0,Ce=T&&!!b.anisotropyMap,Ze=Q&&!!b.clearcoatMap,Ke=Q&&!!b.clearcoatNormalMap,Se=Q&&!!b.clearcoatRoughnessMap,Oe=xe&&!!b.iridescenceMap,tt=xe&&!!b.iridescenceThicknessMap,nt=ce&&!!b.sheenColorMap,ke=ce&&!!b.sheenRoughnessMap,ht=!!b.specularMap,st=!!b.specularColorMap,At=!!b.specularIntensityMap,W=Ge&&!!b.transmissionMap,Re=Ge&&!!b.thicknessMap,re=!!b.gradientMap,pe=!!b.alphaMap,De=b.alphaTest>0,Le=!!b.alphaHash,at=!!b.extensions;let It=Ar;b.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(It=r.toneMapping);const qt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:Ne,fragmentShader:J,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:We,batchingColor:We&&ne._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&ne.instanceColor!==null,instancingMorph:Ye&&ne.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:qs,alphaToCoverage:!!b.alphaToCoverage,map:Lt,matcap:Dt,envMap:ft,envMapMode:ft&&ue.mapping,envMapCubeUVHeight:V,aoMap:k,lightMap:_n,bumpMap:mt,normalMap:dt,displacementMap:_&&$e,emissiveMap:Ct,normalMapObjectSpace:dt&&b.normalMapType===Jx,normalMapTangentSpace:dt&&b.normalMapType===Md,metalnessMap:Xe,roughnessMap:D,anisotropy:T,anisotropyMap:Ce,clearcoat:Q,clearcoatMap:Ze,clearcoatNormalMap:Ke,clearcoatRoughnessMap:Se,dispersion:he,iridescence:xe,iridescenceMap:Oe,iridescenceThicknessMap:tt,sheen:ce,sheenColorMap:nt,sheenRoughnessMap:ke,specularMap:ht,specularColorMap:st,specularIntensityMap:At,transmission:Ge,transmissionMap:W,thicknessMap:Re,gradientMap:re,opaque:b.transparent===!1&&b.blending===Ws&&b.alphaToCoverage===!1,alphaMap:pe,alphaTest:De,alphaHash:Le,combine:b.combine,mapUv:Lt&&w(b.map.channel),aoMapUv:k&&w(b.aoMap.channel),lightMapUv:_n&&w(b.lightMap.channel),bumpMapUv:mt&&w(b.bumpMap.channel),normalMapUv:dt&&w(b.normalMap.channel),displacementMapUv:$e&&w(b.displacementMap.channel),emissiveMapUv:Ct&&w(b.emissiveMap.channel),metalnessMapUv:Xe&&w(b.metalnessMap.channel),roughnessMapUv:D&&w(b.roughnessMap.channel),anisotropyMapUv:Ce&&w(b.anisotropyMap.channel),clearcoatMapUv:Ze&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&w(b.sheenRoughnessMap.channel),specularMapUv:ht&&w(b.specularMap.channel),specularColorMapUv:st&&w(b.specularColorMap.channel),specularIntensityMapUv:At&&w(b.specularIntensityMap.channel),transmissionMapUv:W&&w(b.transmissionMap.channel),thicknessMapUv:Re&&w(b.thicknessMap.channel),alphaMapUv:pe&&w(b.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&(dt||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!ge.attributes.uv&&(Lt||pe),fog:!!de,useFog:b.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ae,skinning:ne.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:It,decodeVideoTexture:Lt&&b.map.isVideoTexture===!0&&wt.getTransfer(b.map.colorSpace)===Rt,decodeVideoTextureEmissive:Ct&&b.emissiveMap.isVideoTexture===!0&&wt.getTransfer(b.emissiveMap.colorSpace)===Rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Vi,flipSided:b.side===Un,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:at&&b.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&b.extensions.multiDraw===!0||We)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return qt.vertexUv1s=p.has(1),qt.vertexUv2s=p.has(2),qt.vertexUv3s=p.has(3),p.clear(),qt}function v(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)C.push(B),C.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(L(C,b),P(C,b),C.push(r.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function L(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function P(b,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),b.push(f.mask)}function A(b){const C=M[b.type];let B;if(C){const ae=vi[C];B=eo.clone(ae.uniforms)}else B=b.uniforms;return B}function z(b,C){let B;for(let ae=0,ne=g.length;ae<ne;ae++){const de=g[ae];if(de.cacheKey===C){B=de,++B.usedTimes;break}}return B===void 0&&(B=new ET(r,C,b,l),g.push(B)),B}function F(b){if(--b.usedTimes===0){const C=g.indexOf(b);g[C]=g[g.length-1],g.pop(),b.destroy()}}function I(b){h.remove(b)}function H(){h.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:A,acquireProgram:z,releaseProgram:F,releaseShaderCache:I,programs:g,dispose:H}}function RT(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function s(c){r.delete(c)}function o(c,f,h){r.get(c)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function PT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function hg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function pg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(x,_,S,M,w,y){let v=r[e];return v===void 0?(v={id:x.id,object:x,geometry:_,material:S,groupOrder:M,renderOrder:x.renderOrder,z:w,group:y},r[e]=v):(v.id=x.id,v.object=x,v.geometry=_,v.material=S,v.groupOrder=M,v.renderOrder=x.renderOrder,v.z=w,v.group=y),e++,v}function f(x,_,S,M,w,y){const v=c(x,_,S,M,w,y);S.transmission>0?s.push(v):S.transparent===!0?o.push(v):t.push(v)}function h(x,_,S,M,w,y){const v=c(x,_,S,M,w,y);S.transmission>0?s.unshift(v):S.transparent===!0?o.unshift(v):t.unshift(v)}function p(x,_){t.length>1&&t.sort(x||PT),s.length>1&&s.sort(_||hg),o.length>1&&o.sort(_||hg)}function g(){for(let x=e,_=r.length;x<_;x++){const S=r[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:f,unshift:h,finish:g,sort:p}}function bT(){let r=new WeakMap;function e(s,o){const l=r.get(s);let c;return l===void 0?(c=new pg,r.set(s,[c])):o>=l.length?(c=new pg,l.push(c)):c=l[o],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function LT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new Tt};break;case"SpotLight":t={position:new $,direction:new $,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=t,t}}}function DT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let UT=0;function IT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function NT(r){const e=new LT,t=DT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new $);const o=new $,l=new Vt,c=new Vt;function f(p){let g=0,x=0,_=0;for(let b=0;b<9;b++)s.probe[b].set(0,0,0);let S=0,M=0,w=0,y=0,v=0,L=0,P=0,A=0,z=0,F=0,I=0;p.sort(IT);for(let b=0,C=p.length;b<C;b++){const B=p[b],ae=B.color,ne=B.intensity,de=B.distance,ge=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=ae.r*ne,x+=ae.g*ne,_+=ae.b*ne;else if(B.isLightProbe){for(let oe=0;oe<9;oe++)s.probe[oe].addScaledVector(B.sh.coefficients[oe],ne);I++}else if(B.isDirectionalLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ue=B.shadow,V=t.get(B);V.shadowIntensity=ue.intensity,V.shadowBias=ue.bias,V.shadowNormalBias=ue.normalBias,V.shadowRadius=ue.radius,V.shadowMapSize=ue.mapSize,s.directionalShadow[S]=V,s.directionalShadowMap[S]=ge,s.directionalShadowMatrix[S]=B.shadow.matrix,L++}s.directional[S]=oe,S++}else if(B.isSpotLight){const oe=e.get(B);oe.position.setFromMatrixPosition(B.matrixWorld),oe.color.copy(ae).multiplyScalar(ne),oe.distance=de,oe.coneCos=Math.cos(B.angle),oe.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),oe.decay=B.decay,s.spot[w]=oe;const ue=B.shadow;if(B.map&&(s.spotLightMap[z]=B.map,z++,ue.updateMatrices(B),B.castShadow&&F++),s.spotLightMatrix[w]=ue.matrix,B.castShadow){const V=t.get(B);V.shadowIntensity=ue.intensity,V.shadowBias=ue.bias,V.shadowNormalBias=ue.normalBias,V.shadowRadius=ue.radius,V.shadowMapSize=ue.mapSize,s.spotShadow[w]=V,s.spotShadowMap[w]=ge,A++}w++}else if(B.isRectAreaLight){const oe=e.get(B);oe.color.copy(ae).multiplyScalar(ne),oe.halfWidth.set(B.width*.5,0,0),oe.halfHeight.set(0,B.height*.5,0),s.rectArea[y]=oe,y++}else if(B.isPointLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),oe.distance=B.distance,oe.decay=B.decay,B.castShadow){const ue=B.shadow,V=t.get(B);V.shadowIntensity=ue.intensity,V.shadowBias=ue.bias,V.shadowNormalBias=ue.normalBias,V.shadowRadius=ue.radius,V.shadowMapSize=ue.mapSize,V.shadowCameraNear=ue.camera.near,V.shadowCameraFar=ue.camera.far,s.pointShadow[M]=V,s.pointShadowMap[M]=ge,s.pointShadowMatrix[M]=B.shadow.matrix,P++}s.point[M]=oe,M++}else if(B.isHemisphereLight){const oe=e.get(B);oe.skyColor.copy(B.color).multiplyScalar(ne),oe.groundColor.copy(B.groundColor).multiplyScalar(ne),s.hemi[v]=oe,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=_;const H=s.hash;(H.directionalLength!==S||H.pointLength!==M||H.spotLength!==w||H.rectAreaLength!==y||H.hemiLength!==v||H.numDirectionalShadows!==L||H.numPointShadows!==P||H.numSpotShadows!==A||H.numSpotMaps!==z||H.numLightProbes!==I)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=y,s.point.length=M,s.hemi.length=v,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=A+z-F,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=I,H.directionalLength=S,H.pointLength=M,H.spotLength=w,H.rectAreaLength=y,H.hemiLength=v,H.numDirectionalShadows=L,H.numPointShadows=P,H.numSpotShadows=A,H.numSpotMaps=z,H.numLightProbes=I,s.version=UT++)}function h(p,g){let x=0,_=0,S=0,M=0,w=0;const y=g.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const P=p[v];if(P.isDirectionalLight){const A=s.directional[x];A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),x++}else if(P.isSpotLight){const A=s.spot[S];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const A=s.rectArea[M];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(y),c.identity(),l.copy(P.matrixWorld),l.premultiply(y),c.extractRotation(l),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),M++}else if(P.isPointLight){const A=s.point[_];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(y),_++}else if(P.isHemisphereLight){const A=s.hemi[w];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(y),w++}}}return{setup:f,setupView:h,state:s}}function mg(r){const e=new NT(r),t=[],s=[];function o(g){p.camera=g,t.length=0,s.length=0}function l(g){t.push(g)}function c(g){s.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function FT(r){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new mg(r),e.set(o,[f])):l>=c.length?(f=new mg(r),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const OT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BT(r,e,t){let s=new Ad;const o=new ct,l=new ct,c=new Pt,f=new iS({depthPacking:Qx}),h=new rS,p={},g=t.maxTextureSize,x={[Cr]:Un,[Un]:Cr,[Vi]:Vi},_=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:OT,fragmentShader:kT}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const M=new Ki;M.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Zn(M,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ug;let v=this.type;this.render=function(F,I,H){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const b=r.getRenderTarget(),C=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),ae=r.state;ae.setBlending(ji),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ne=v!==Hi&&this.type===Hi,de=v===Hi&&this.type!==Hi;for(let ge=0,oe=F.length;ge<oe;ge++){const ue=F[ge],V=ue.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const le=V.getFrameExtents();if(o.multiply(le),l.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/le.x),o.x=l.x*le.x,V.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/le.y),o.y=l.y*le.y,V.mapSize.y=l.y)),V.map===null||ne===!0||de===!0){const N=this.type!==Hi?{minFilter:ci,magFilter:ci}:{};V.map!==null&&V.map.dispose(),V.map=new Mi(o.x,o.y,N),V.map.texture.name=ue.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const se=V.getViewportCount();for(let N=0;N<se;N++){const ie=V.getViewport(N);c.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),ae.viewport(c),V.updateMatrices(ue,N),s=V.getFrustum(),A(I,H,V.camera,ue,this.type)}V.isPointLightShadow!==!0&&this.type===Hi&&L(V,H),V.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(b,C,B)};function L(F,I){const H=e.update(w);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Mi(o.x,o.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(I,null,H,_,w,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(I,null,H,S,w,null)}function P(F,I,H,b){let C=null;const B=H.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)C=B;else if(C=H.isPointLight===!0?h:f,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ae=C.uuid,ne=I.uuid;let de=p[ae];de===void 0&&(de={},p[ae]=de);let ge=de[ne];ge===void 0&&(ge=C.clone(),de[ne]=ge,I.addEventListener("dispose",z)),C=ge}if(C.visible=I.visible,C.wireframe=I.wireframe,b===Hi?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:x[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,H.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ae=r.properties.get(C);ae.light=H}return C}function A(F,I,H,b,C){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===Hi)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,F.matrixWorld);const ne=e.update(F),de=F.material;if(Array.isArray(de)){const ge=ne.groups;for(let oe=0,ue=ge.length;oe<ue;oe++){const V=ge[oe],le=de[V.materialIndex];if(le&&le.visible){const se=P(F,le,b,C);F.onBeforeShadow(r,F,I,H,ne,se,V),r.renderBufferDirect(H,null,ne,se,F,V),F.onAfterShadow(r,F,I,H,ne,se,V)}}}else if(de.visible){const ge=P(F,de,b,C);F.onBeforeShadow(r,F,I,H,ne,ge,null),r.renderBufferDirect(H,null,ne,ge,F,null),F.onAfterShadow(r,F,I,H,ne,ge,null)}}const ae=F.children;for(let ne=0,de=ae.length;ne<de;ne++)A(ae[ne],I,H,b,C)}function z(F){F.target.removeEventListener("dispose",z);for(const H in p){const b=p[H],C=F.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const zT={[Tf]:Af,[Cf]:bf,[Rf]:Lf,[js]:Pf,[Af]:Tf,[bf]:Cf,[Lf]:Rf,[Pf]:js};function HT(r,e){function t(){let W=!1;const Re=new Pt;let re=null;const pe=new Pt(0,0,0,0);return{setMask:function(De){re!==De&&!W&&(r.colorMask(De,De,De,De),re=De)},setLocked:function(De){W=De},setClear:function(De,Le,at,It,qt){qt===!0&&(De*=It,Le*=It,at*=It),Re.set(De,Le,at,It),pe.equals(Re)===!1&&(r.clearColor(De,Le,at,It),pe.copy(Re))},reset:function(){W=!1,re=null,pe.set(-1,0,0,0)}}}function s(){let W=!1,Re=!1,re=null,pe=null,De=null;return{setReversed:function(Le){if(Re!==Le){const at=e.get("EXT_clip_control");Le?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),Re=Le;const It=De;De=null,this.setClear(It)}},getReversed:function(){return Re},setTest:function(Le){Le?ye(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(Le){re!==Le&&!W&&(r.depthMask(Le),re=Le)},setFunc:function(Le){if(Re&&(Le=zT[Le]),pe!==Le){switch(Le){case Tf:r.depthFunc(r.NEVER);break;case Af:r.depthFunc(r.ALWAYS);break;case Cf:r.depthFunc(r.LESS);break;case js:r.depthFunc(r.LEQUAL);break;case Rf:r.depthFunc(r.EQUAL);break;case Pf:r.depthFunc(r.GEQUAL);break;case bf:r.depthFunc(r.GREATER);break;case Lf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=Le}},setLocked:function(Le){W=Le},setClear:function(Le){De!==Le&&(Re&&(Le=1-Le),r.clearDepth(Le),De=Le)},reset:function(){W=!1,re=null,pe=null,De=null,Re=!1}}}function o(){let W=!1,Re=null,re=null,pe=null,De=null,Le=null,at=null,It=null,qt=null;return{setTest:function(yt){W||(yt?ye(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(yt){Re!==yt&&!W&&(r.stencilMask(yt),Re=yt)},setFunc:function(yt,An,xn){(re!==yt||pe!==An||De!==xn)&&(r.stencilFunc(yt,An,xn),re=yt,pe=An,De=xn)},setOp:function(yt,An,xn){(Le!==yt||at!==An||It!==xn)&&(r.stencilOp(yt,An,xn),Le=yt,at=An,It=xn)},setLocked:function(yt){W=yt},setClear:function(yt){qt!==yt&&(r.clearStencil(yt),qt=yt)},reset:function(){W=!1,Re=null,re=null,pe=null,De=null,Le=null,at=null,It=null,qt=null}}}const l=new t,c=new s,f=new o,h=new WeakMap,p=new WeakMap;let g={},x={},_=new WeakMap,S=[],M=null,w=!1,y=null,v=null,L=null,P=null,A=null,z=null,F=null,I=new Tt(0,0,0),H=0,b=!1,C=null,B=null,ae=null,ne=null,de=null;const ge=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ue=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(V)[1]),oe=ue>=1):V.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),oe=ue>=2);let le=null,se={};const N=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),Ne=new Pt().fromArray(N),J=new Pt().fromArray(ie);function me(W,Re,re,pe){const De=new Uint8Array(4),Le=r.createTexture();r.bindTexture(W,Le),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<re;at++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(Re+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return Le}const we={};we[r.TEXTURE_2D]=me(r.TEXTURE_2D,r.TEXTURE_2D,1),we[r.TEXTURE_CUBE_MAP]=me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[r.TEXTURE_2D_ARRAY]=me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),we[r.TEXTURE_3D]=me(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ye(r.DEPTH_TEST),c.setFunc(js),mt(!1),dt(gm),ye(r.CULL_FACE),k(ji);function ye(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function Ae(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function Ye(W,Re){return x[W]!==Re?(r.bindFramebuffer(W,Re),x[W]=Re,W===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Re),W===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function We(W,Re){let re=S,pe=!1;if(W){re=_.get(Re),re===void 0&&(re=[],_.set(Re,re));const De=W.textures;if(re.length!==De.length||re[0]!==r.COLOR_ATTACHMENT0){for(let Le=0,at=De.length;Le<at;Le++)re[Le]=r.COLOR_ATTACHMENT0+Le;re.length=De.length,pe=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,pe=!0);pe&&r.drawBuffers(re)}function Lt(W){return M!==W?(r.useProgram(W),M=W,!0):!1}const Dt={[Zr]:r.FUNC_ADD,[wx]:r.FUNC_SUBTRACT,[Tx]:r.FUNC_REVERSE_SUBTRACT};Dt[Ax]=r.MIN,Dt[Cx]=r.MAX;const ft={[Rx]:r.ZERO,[Px]:r.ONE,[bx]:r.SRC_COLOR,[Ef]:r.SRC_ALPHA,[Fx]:r.SRC_ALPHA_SATURATE,[Ix]:r.DST_COLOR,[Dx]:r.DST_ALPHA,[Lx]:r.ONE_MINUS_SRC_COLOR,[wf]:r.ONE_MINUS_SRC_ALPHA,[Nx]:r.ONE_MINUS_DST_COLOR,[Ux]:r.ONE_MINUS_DST_ALPHA,[Ox]:r.CONSTANT_COLOR,[kx]:r.ONE_MINUS_CONSTANT_COLOR,[Bx]:r.CONSTANT_ALPHA,[zx]:r.ONE_MINUS_CONSTANT_ALPHA};function k(W,Re,re,pe,De,Le,at,It,qt,yt){if(W===ji){w===!0&&(Ae(r.BLEND),w=!1);return}if(w===!1&&(ye(r.BLEND),w=!0),W!==Ex){if(W!==y||yt!==b){if((v!==Zr||A!==Zr)&&(r.blendEquation(r.FUNC_ADD),v=Zr,A=Zr),yt)switch(W){case Ws:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mf:r.blendFunc(r.ONE,r.ONE);break;case vm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _m:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ws:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mf:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case vm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _m:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,P=null,z=null,F=null,I.set(0,0,0),H=0,y=W,b=yt}return}De=De||Re,Le=Le||re,at=at||pe,(Re!==v||De!==A)&&(r.blendEquationSeparate(Dt[Re],Dt[De]),v=Re,A=De),(re!==L||pe!==P||Le!==z||at!==F)&&(r.blendFuncSeparate(ft[re],ft[pe],ft[Le],ft[at]),L=re,P=pe,z=Le,F=at),(It.equals(I)===!1||qt!==H)&&(r.blendColor(It.r,It.g,It.b,qt),I.copy(It),H=qt),y=W,b=!1}function _n(W,Re){W.side===Vi?Ae(r.CULL_FACE):ye(r.CULL_FACE);let re=W.side===Un;Re&&(re=!re),mt(re),W.blending===Ws&&W.transparent===!1?k(ji):k(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),l.setMask(W.colorWrite);const pe=W.stencilWrite;f.setTest(pe),pe&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ct(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function mt(W){C!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),C=W)}function dt(W){W!==yx?(ye(r.CULL_FACE),W!==B&&(W===gm?r.cullFace(r.BACK):W===Sx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),B=W}function $e(W){W!==ae&&(oe&&r.lineWidth(W),ae=W)}function Ct(W,Re,re){W?(ye(r.POLYGON_OFFSET_FILL),(ne!==Re||de!==re)&&(r.polygonOffset(Re,re),ne=Re,de=re)):Ae(r.POLYGON_OFFSET_FILL)}function Xe(W){W?ye(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function D(W){W===void 0&&(W=r.TEXTURE0+ge-1),le!==W&&(r.activeTexture(W),le=W)}function T(W,Re,re){re===void 0&&(le===null?re=r.TEXTURE0+ge-1:re=le);let pe=se[re];pe===void 0&&(pe={type:void 0,texture:void 0},se[re]=pe),(pe.type!==W||pe.texture!==Re)&&(le!==re&&(r.activeTexture(re),le=re),r.bindTexture(W,Re||we[W]),pe.type=W,pe.texture=Re)}function Q(){const W=se[le];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function he(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ce(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ge(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ze(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ke(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function tt(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(W){Ne.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Ne.copy(W))}function ke(W){J.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),J.copy(W))}function ht(W,Re){let re=p.get(Re);re===void 0&&(re=new WeakMap,p.set(Re,re));let pe=re.get(W);pe===void 0&&(pe=r.getUniformBlockIndex(Re,W.name),re.set(W,pe))}function st(W,Re){const pe=p.get(Re).get(W);h.get(Re)!==pe&&(r.uniformBlockBinding(Re,pe,W.__bindingPointIndex),h.set(Re,pe))}function At(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},le=null,se={},x={},_=new WeakMap,S=[],M=null,w=!1,y=null,v=null,L=null,P=null,A=null,z=null,F=null,I=new Tt(0,0,0),H=0,b=!1,C=null,B=null,ae=null,ne=null,de=null,Ne.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ye,disable:Ae,bindFramebuffer:Ye,drawBuffers:We,useProgram:Lt,setBlending:k,setMaterial:_n,setFlipSided:mt,setCullFace:dt,setLineWidth:$e,setPolygonOffset:Ct,setScissorTest:Xe,activeTexture:D,bindTexture:T,unbindTexture:Q,compressedTexImage2D:he,compressedTexImage3D:xe,texImage2D:Oe,texImage3D:tt,updateUBOMapping:ht,uniformBlockBinding:st,texStorage2D:Ke,texStorage3D:Se,texSubImage2D:ce,texSubImage3D:Ge,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ze,scissor:nt,viewport:ke,reset:At}}function VT(r,e,t,s,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ct,g=new WeakMap;let x;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,T){return S?new OffscreenCanvas(D,T):Ja("canvas")}function w(D,T,Q){let he=1;const xe=Xe(D);if((xe.width>Q||xe.height>Q)&&(he=Q/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(he*xe.width),Ge=Math.floor(he*xe.height);x===void 0&&(x=M(ce,Ge));const Ce=T?M(ce,Ge):x;return Ce.width=ce,Ce.height=Ge,Ce.getContext("2d").drawImage(D,0,0,ce,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ce+"x"+Ge+")."),Ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function y(D){return D.generateMipmaps}function v(D){r.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(D,T,Q,he,xe=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=T;if(T===r.RED&&(Q===r.FLOAT&&(ce=r.R32F),Q===r.HALF_FLOAT&&(ce=r.R16F),Q===r.UNSIGNED_BYTE&&(ce=r.R8)),T===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.R8UI),Q===r.UNSIGNED_SHORT&&(ce=r.R16UI),Q===r.UNSIGNED_INT&&(ce=r.R32UI),Q===r.BYTE&&(ce=r.R8I),Q===r.SHORT&&(ce=r.R16I),Q===r.INT&&(ce=r.R32I)),T===r.RG&&(Q===r.FLOAT&&(ce=r.RG32F),Q===r.HALF_FLOAT&&(ce=r.RG16F),Q===r.UNSIGNED_BYTE&&(ce=r.RG8)),T===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.RG8UI),Q===r.UNSIGNED_SHORT&&(ce=r.RG16UI),Q===r.UNSIGNED_INT&&(ce=r.RG32UI),Q===r.BYTE&&(ce=r.RG8I),Q===r.SHORT&&(ce=r.RG16I),Q===r.INT&&(ce=r.RG32I)),T===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),Q===r.UNSIGNED_INT&&(ce=r.RGB32UI),Q===r.BYTE&&(ce=r.RGB8I),Q===r.SHORT&&(ce=r.RGB16I),Q===r.INT&&(ce=r.RGB32I)),T===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),Q===r.UNSIGNED_INT&&(ce=r.RGBA32UI),Q===r.BYTE&&(ce=r.RGBA8I),Q===r.SHORT&&(ce=r.RGBA16I),Q===r.INT&&(ce=r.RGBA32I)),T===r.RGB&&Q===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),T===r.RGBA){const Ge=xe?Zl:wt.getTransfer(he);Q===r.FLOAT&&(ce=r.RGBA32F),Q===r.HALF_FLOAT&&(ce=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(ce=Ge===Rt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function A(D,T){let Q;return D?T===null||T===ns||T===qa?Q=r.DEPTH24_STENCIL8:T===Gi?Q=r.DEPTH32F_STENCIL8:T===$a&&(Q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ns||T===qa?Q=r.DEPTH_COMPONENT24:T===Gi?Q=r.DEPTH_COMPONENT32F:T===$a&&(Q=r.DEPTH_COMPONENT16),Q}function z(D,T){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==ci&&D.minFilter!==_i?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function F(D){const T=D.target;T.removeEventListener("dispose",F),H(T),T.isVideoTexture&&g.delete(T)}function I(D){const T=D.target;T.removeEventListener("dispose",I),C(T)}function H(D){const T=s.get(D);if(T.__webglInit===void 0)return;const Q=D.source,he=_.get(Q);if(he){const xe=he[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&b(D),Object.keys(he).length===0&&_.delete(Q)}s.remove(D)}function b(D){const T=s.get(D);r.deleteTexture(T.__webglTexture);const Q=D.source,he=_.get(Q);delete he[T.__cacheKey],c.memory.textures--}function C(D){const T=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let xe=0;xe<T.__webglFramebuffer[he].length;xe++)r.deleteFramebuffer(T.__webglFramebuffer[he][xe]);else r.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)r.deleteFramebuffer(T.__webglFramebuffer[he]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=D.textures;for(let he=0,xe=Q.length;he<xe;he++){const ce=s.get(Q[he]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),c.memory.textures--),s.remove(Q[he])}s.remove(D)}let B=0;function ae(){B=0}function ne(){const D=B;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),B+=1,D}function de(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function ge(D,T){const Q=s.get(D);if(D.isVideoTexture&&$e(D),D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){const he=D.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Q,D,T);return}}t.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+T)}function oe(D,T){const Q=s.get(D);if(D.version>0&&Q.__version!==D.version){J(Q,D,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+T)}function ue(D,T){const Q=s.get(D);if(D.version>0&&Q.__version!==D.version){J(Q,D,T);return}t.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+T)}function V(D,T){const Q=s.get(D);if(D.version>0&&Q.__version!==D.version){me(Q,D,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+T)}const le={[If]:r.REPEAT,[Jr]:r.CLAMP_TO_EDGE,[Nf]:r.MIRRORED_REPEAT},se={[ci]:r.NEAREST,[Kx]:r.NEAREST_MIPMAP_NEAREST,[_l]:r.NEAREST_MIPMAP_LINEAR,[_i]:r.LINEAR,[Gc]:r.LINEAR_MIPMAP_NEAREST,[es]:r.LINEAR_MIPMAP_LINEAR},N={[ey]:r.NEVER,[ay]:r.ALWAYS,[ty]:r.LESS,[Wg]:r.LEQUAL,[ny]:r.EQUAL,[sy]:r.GEQUAL,[iy]:r.GREATER,[ry]:r.NOTEQUAL};function ie(D,T){if(T.type===Gi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===_i||T.magFilter===Gc||T.magFilter===_l||T.magFilter===es||T.minFilter===_i||T.minFilter===Gc||T.minFilter===_l||T.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,le[T.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,le[T.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,le[T.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,se[T.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,se[T.minFilter]),T.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ci||T.minFilter!==_l&&T.minFilter!==es||T.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Ne(D,T){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",F));const he=T.source;let xe=_.get(he);xe===void 0&&(xe={},_.set(he,xe));const ce=de(T);if(ce!==D.__cacheKey){xe[ce]===void 0&&(xe[ce]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),xe[ce].usedTimes++;const Ge=xe[D.__cacheKey];Ge!==void 0&&(xe[D.__cacheKey].usedTimes--,Ge.usedTimes===0&&b(T)),D.__cacheKey=ce,D.__webglTexture=xe[ce].texture}return Q}function J(D,T,Q){let he=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=r.TEXTURE_3D);const xe=Ne(D,T),ce=T.source;t.bindTexture(he,D.__webglTexture,r.TEXTURE0+Q);const Ge=s.get(ce);if(ce.version!==Ge.__version||xe===!0){t.activeTexture(r.TEXTURE0+Q);const Ce=wt.getPrimaries(wt.workingColorSpace),Ze=T.colorSpace===Tr?null:wt.getPrimaries(T.colorSpace),Ke=T.colorSpace===Tr||Ce===Ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let Se=w(T.image,!1,o.maxTextureSize);Se=Ct(T,Se);const Oe=l.convert(T.format,T.colorSpace),tt=l.convert(T.type);let nt=P(T.internalFormat,Oe,tt,T.colorSpace,T.isVideoTexture);ie(he,T);let ke;const ht=T.mipmaps,st=T.isVideoTexture!==!0,At=Ge.__version===void 0||xe===!0,W=ce.dataReady,Re=z(T,Se);if(T.isDepthTexture)nt=A(T.format===Za,T.type),At&&(st?t.texStorage2D(r.TEXTURE_2D,1,nt,Se.width,Se.height):t.texImage2D(r.TEXTURE_2D,0,nt,Se.width,Se.height,0,Oe,tt,null));else if(T.isDataTexture)if(ht.length>0){st&&At&&t.texStorage2D(r.TEXTURE_2D,Re,nt,ht[0].width,ht[0].height);for(let re=0,pe=ht.length;re<pe;re++)ke=ht[re],st?W&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ke.width,ke.height,Oe,tt,ke.data):t.texImage2D(r.TEXTURE_2D,re,nt,ke.width,ke.height,0,Oe,tt,ke.data);T.generateMipmaps=!1}else st?(At&&t.texStorage2D(r.TEXTURE_2D,Re,nt,Se.width,Se.height),W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se.width,Se.height,Oe,tt,Se.data)):t.texImage2D(r.TEXTURE_2D,0,nt,Se.width,Se.height,0,Oe,tt,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){st&&At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,nt,ht[0].width,ht[0].height,Se.depth);for(let re=0,pe=ht.length;re<pe;re++)if(ke=ht[re],T.format!==ui)if(Oe!==null)if(st){if(W)if(T.layerUpdates.size>0){const De=Xm(ke.width,ke.height,T.format,T.type);for(const Le of T.layerUpdates){const at=ke.data.subarray(Le*De/ke.data.BYTES_PER_ELEMENT,(Le+1)*De/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,Le,ke.width,ke.height,1,Oe,at)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ke.width,ke.height,Se.depth,Oe,ke.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,nt,ke.width,ke.height,Se.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?W&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ke.width,ke.height,Se.depth,Oe,tt,ke.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,nt,ke.width,ke.height,Se.depth,0,Oe,tt,ke.data)}else{st&&At&&t.texStorage2D(r.TEXTURE_2D,Re,nt,ht[0].width,ht[0].height);for(let re=0,pe=ht.length;re<pe;re++)ke=ht[re],T.format!==ui?Oe!==null?st?W&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,ke.width,ke.height,Oe,ke.data):t.compressedTexImage2D(r.TEXTURE_2D,re,nt,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?W&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ke.width,ke.height,Oe,tt,ke.data):t.texImage2D(r.TEXTURE_2D,re,nt,ke.width,ke.height,0,Oe,tt,ke.data)}else if(T.isDataArrayTexture)if(st){if(At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,nt,Se.width,Se.height,Se.depth),W)if(T.layerUpdates.size>0){const re=Xm(Se.width,Se.height,T.format,T.type);for(const pe of T.layerUpdates){const De=Se.data.subarray(pe*re/Se.data.BYTES_PER_ELEMENT,(pe+1)*re/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,Oe,tt,De)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Oe,tt,Se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,nt,Se.width,Se.height,Se.depth,0,Oe,tt,Se.data);else if(T.isData3DTexture)st?(At&&t.texStorage3D(r.TEXTURE_3D,Re,nt,Se.width,Se.height,Se.depth),W&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Oe,tt,Se.data)):t.texImage3D(r.TEXTURE_3D,0,nt,Se.width,Se.height,Se.depth,0,Oe,tt,Se.data);else if(T.isFramebufferTexture){if(At)if(st)t.texStorage2D(r.TEXTURE_2D,Re,nt,Se.width,Se.height);else{let re=Se.width,pe=Se.height;for(let De=0;De<Re;De++)t.texImage2D(r.TEXTURE_2D,De,nt,re,pe,0,Oe,tt,null),re>>=1,pe>>=1}}else if(ht.length>0){if(st&&At){const re=Xe(ht[0]);t.texStorage2D(r.TEXTURE_2D,Re,nt,re.width,re.height)}for(let re=0,pe=ht.length;re<pe;re++)ke=ht[re],st?W&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,Oe,tt,ke):t.texImage2D(r.TEXTURE_2D,re,nt,Oe,tt,ke);T.generateMipmaps=!1}else if(st){if(At){const re=Xe(Se);t.texStorage2D(r.TEXTURE_2D,Re,nt,re.width,re.height)}W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Oe,tt,Se)}else t.texImage2D(r.TEXTURE_2D,0,nt,Oe,tt,Se);y(T)&&v(he),Ge.__version=ce.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function me(D,T,Q){if(T.image.length!==6)return;const he=Ne(D,T),xe=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Q);const ce=s.get(xe);if(xe.version!==ce.__version||he===!0){t.activeTexture(r.TEXTURE0+Q);const Ge=wt.getPrimaries(wt.workingColorSpace),Ce=T.colorSpace===Tr?null:wt.getPrimaries(T.colorSpace),Ze=T.colorSpace===Tr||Ge===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const Ke=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let pe=0;pe<6;pe++)!Ke&&!Se?Oe[pe]=w(T.image[pe],!0,o.maxCubemapSize):Oe[pe]=Se?T.image[pe].image:T.image[pe],Oe[pe]=Ct(T,Oe[pe]);const tt=Oe[0],nt=l.convert(T.format,T.colorSpace),ke=l.convert(T.type),ht=P(T.internalFormat,nt,ke,T.colorSpace),st=T.isVideoTexture!==!0,At=ce.__version===void 0||he===!0,W=xe.dataReady;let Re=z(T,tt);ie(r.TEXTURE_CUBE_MAP,T);let re;if(Ke){st&&At&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,ht,tt.width,tt.height);for(let pe=0;pe<6;pe++){re=Oe[pe].mipmaps;for(let De=0;De<re.length;De++){const Le=re[De];T.format!==ui?nt!==null?st?W&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Le.width,Le.height,nt,Le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,ht,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Le.width,Le.height,nt,ke,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,ht,Le.width,Le.height,0,nt,ke,Le.data)}}}else{if(re=T.mipmaps,st&&At){re.length>0&&Re++;const pe=Xe(Oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,ht,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){st?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Oe[pe].width,Oe[pe].height,nt,ke,Oe[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,Oe[pe].width,Oe[pe].height,0,nt,ke,Oe[pe].data);for(let De=0;De<re.length;De++){const at=re[De].image[pe].image;st?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,at.width,at.height,nt,ke,at.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,ht,at.width,at.height,0,nt,ke,at.data)}}else{st?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,nt,ke,Oe[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,nt,ke,Oe[pe]);for(let De=0;De<re.length;De++){const Le=re[De];st?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,nt,ke,Le.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,ht,nt,ke,Le.image[pe])}}}y(T)&&v(r.TEXTURE_CUBE_MAP),ce.__version=xe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function we(D,T,Q,he,xe,ce){const Ge=l.convert(Q.format,Q.colorSpace),Ce=l.convert(Q.type),Ze=P(Q.internalFormat,Ge,Ce,Q.colorSpace),Ke=s.get(T),Se=s.get(Q);if(Se.__renderTarget=T,!Ke.__hasExternalTextures){const Oe=Math.max(1,T.width>>ce),tt=Math.max(1,T.height>>ce);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?t.texImage3D(xe,ce,Ze,Oe,tt,T.depth,0,Ge,Ce,null):t.texImage2D(xe,ce,Ze,Oe,tt,0,Ge,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),dt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,xe,Se.__webglTexture,0,mt(T)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,xe,Se.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(D,T,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,D),T.depthBuffer){const he=T.depthTexture,xe=he&&he.isDepthTexture?he.type:null,ce=A(T.stencilBuffer,xe),Ge=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=mt(T);dt(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,ce,T.width,T.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,ce,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ce,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ge,r.RENDERBUFFER,D)}else{const he=T.textures;for(let xe=0;xe<he.length;xe++){const ce=he[xe],Ge=l.convert(ce.format,ce.colorSpace),Ce=l.convert(ce.type),Ze=P(ce.internalFormat,Ge,Ce,ce.colorSpace),Ke=mt(T);Q&&dt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke,Ze,T.width,T.height):dt(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ke,Ze,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ze,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=s.get(T.depthTexture);he.__renderTarget=T,(!he.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ge(T.depthTexture,0);const xe=he.__webglTexture,ce=mt(T);if(T.depthTexture.format===Ka)dt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0);else if(T.depthTexture.format===Za)dt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Ye(D){const T=s.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){const xe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),T.__depthDisposeCallback=xe}T.__boundDepthTexture=he}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const he=D.texture.mipmaps;he&&he.length>0?Ae(T.__webglFramebuffer[0],D):Ae(T.__webglFramebuffer,D)}else if(Q){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=r.createRenderbuffer(),ye(T.__webglDepthbuffer[he],D,!1);else{const xe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,ce)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),ye(T.__webglDepthbuffer,D,!1);else{const xe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,ce)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function We(D,T,Q){const he=s.get(D);T!==void 0&&we(he.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&Ye(D)}function Lt(D){const T=D.texture,Q=s.get(D),he=s.get(T);D.addEventListener("dispose",I);const xe=D.textures,ce=D.isWebGLCubeRenderTarget===!0,Ge=xe.length>1;if(Ge||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=T.version,c.memory.textures++),ce){Q.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[Ce]=[];for(let Ze=0;Ze<T.mipmaps.length;Ze++)Q.__webglFramebuffer[Ce][Ze]=r.createFramebuffer()}else Q.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)Q.__webglFramebuffer[Ce]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Ge)for(let Ce=0,Ze=xe.length;Ce<Ze;Ce++){const Ke=s.get(xe[Ce]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=r.createTexture(),c.memory.textures++)}if(D.samples>0&&dt(D)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<xe.length;Ce++){const Ze=xe[Ce];Q.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce]);const Ke=l.convert(Ze.format,Ze.colorSpace),Se=l.convert(Ze.type),Oe=P(Ze.internalFormat,Ke,Se,Ze.colorSpace,D.isXRRenderTarget===!0),tt=mt(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,Oe,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),ye(Q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),ie(r.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ze=0;Ze<T.mipmaps.length;Ze++)we(Q.__webglFramebuffer[Ce][Ze],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ze);else we(Q.__webglFramebuffer[Ce],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(T)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Ce=0,Ze=xe.length;Ce<Ze;Ce++){const Ke=xe[Ce],Se=s.get(Ke);t.bindTexture(r.TEXTURE_2D,Se.__webglTexture),ie(r.TEXTURE_2D,Ke),we(Q.__webglFramebuffer,D,Ke,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),y(Ke)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,he.__webglTexture),ie(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Ze=0;Ze<T.mipmaps.length;Ze++)we(Q.__webglFramebuffer[Ze],D,T,r.COLOR_ATTACHMENT0,Ce,Ze);else we(Q.__webglFramebuffer,D,T,r.COLOR_ATTACHMENT0,Ce,0);y(T)&&v(Ce),t.unbindTexture()}D.depthBuffer&&Ye(D)}function Dt(D){const T=D.textures;for(let Q=0,he=T.length;Q<he;Q++){const xe=T[Q];if(y(xe)){const ce=L(D),Ge=s.get(xe).__webglTexture;t.bindTexture(ce,Ge),v(ce),t.unbindTexture()}}}const ft=[],k=[];function _n(D){if(D.samples>0){if(dt(D)===!1){const T=D.textures,Q=D.width,he=D.height;let xe=r.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ge=s.get(D),Ce=T.length>1;if(Ce)for(let Ke=0;Ke<T.length;Ke++)t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ke,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ke,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const Ze=D.texture.mipmaps;Ze&&Ze.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ke=0;Ke<T.length;Ke++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ke]);const Se=s.get(T[Ke]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Se,0)}r.blitFramebuffer(0,0,Q,he,0,0,Q,he,xe,r.NEAREST),h===!0&&(ft.length=0,k.length=0,ft.push(r.COLOR_ATTACHMENT0+Ke),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ft.push(ce),k.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,k)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Ke=0;Ke<T.length;Ke++){t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ke,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ke]);const Se=s.get(T[Ke]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ke,r.TEXTURE_2D,Se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const T=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function mt(D){return Math.min(o.maxSamples,D.samples)}function dt(D){const T=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $e(D){const T=c.render.frame;g.get(D)!==T&&(g.set(D,T),D.update())}function Ct(D,T){const Q=D.colorSpace,he=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==qs&&Q!==Tr&&(wt.getTransfer(Q)===Rt?(he!==ui||xe!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),T}function Xe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=ne,this.resetTextureUnits=ae,this.setTexture2D=ge,this.setTexture2DArray=oe,this.setTexture3D=ue,this.setTextureCube=V,this.rebindTextures=We,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=we,this.useMultisampledRTT=dt}function GT(r,e){function t(s,o=Tr){let l;const c=wt.getTransfer(o);if(s===Si)return r.UNSIGNED_BYTE;if(s===vd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===_d)return r.UNSIGNED_SHORT_5_5_5_1;if(s===kg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Fg)return r.BYTE;if(s===Og)return r.SHORT;if(s===$a)return r.UNSIGNED_SHORT;if(s===gd)return r.INT;if(s===ns)return r.UNSIGNED_INT;if(s===Gi)return r.FLOAT;if(s===Rr)return r.HALF_FLOAT;if(s===Bg)return r.ALPHA;if(s===zg)return r.RGB;if(s===ui)return r.RGBA;if(s===Ka)return r.DEPTH_COMPONENT;if(s===Za)return r.DEPTH_STENCIL;if(s===Hg)return r.RED;if(s===xd)return r.RED_INTEGER;if(s===Vg)return r.RG;if(s===yd)return r.RG_INTEGER;if(s===Sd)return r.RGBA_INTEGER;if(s===Gl||s===Wl||s===Xl||s===jl)if(c===Rt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Gl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Gl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===jl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ff||s===Of||s===kf||s===Bf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Ff)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Of)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zf||s===Hf||s===Vf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===zf||s===Hf)return c===Rt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Vf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gf||s===Wf||s===Xf||s===jf||s===Yf||s===$f||s===qf||s===Kf||s===Zf||s===Qf||s===Jf||s===ed||s===td||s===nd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Gf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$f)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Kf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ed)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===td)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===nd)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yl||s===id||s===rd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Yl)return c===Rt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===id)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===rd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Gg||s===sd||s===ad||s===od)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Yl)return l.COMPRESSED_RED_RGTC1_EXT;if(s===sd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ad)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===od)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qa?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const WT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new Tn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Vn({vertexShader:WT,fragmentShader:XT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zn(new iu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YT extends Js{constructor(e,t){super();const s=this;let o=null,l=1,c=null,f="local-floor",h=1,p=null,g=null,x=null,_=null,S=null,M=null;const w=new jT,y=t.getContextAttributes();let v=null,L=null;const P=[],A=[],z=new ct;let F=null;const I=new Hn;I.viewport=new Pt;const H=new Hn;H.viewport=new Pt;const b=[I,H],C=new hS;let B=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let me=P[J];return me===void 0&&(me=new cf,P[J]=me),me.getTargetRaySpace()},this.getControllerGrip=function(J){let me=P[J];return me===void 0&&(me=new cf,P[J]=me),me.getGripSpace()},this.getHand=function(J){let me=P[J];return me===void 0&&(me=new cf,P[J]=me),me.getHandSpace()};function ne(J){const me=A.indexOf(J.inputSource);if(me===-1)return;const we=P[me];we!==void 0&&(we.update(J.inputSource,J.frame,p||c),we.dispatchEvent({type:J.type,data:J.inputSource}))}function de(){o.removeEventListener("select",ne),o.removeEventListener("selectstart",ne),o.removeEventListener("selectend",ne),o.removeEventListener("squeeze",ne),o.removeEventListener("squeezestart",ne),o.removeEventListener("squeezeend",ne),o.removeEventListener("end",de),o.removeEventListener("inputsourceschange",ge);for(let J=0;J<P.length;J++){const me=A[J];me!==null&&(A[J]=null,P[J].disconnect(me))}B=null,ae=null,w.reset(),e.setRenderTarget(v),S=null,_=null,x=null,o=null,L=null,Ne.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return x},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",ne),o.addEventListener("selectstart",ne),o.addEventListener("selectend",ne),o.addEventListener("squeeze",ne),o.addEventListener("squeezestart",ne),o.addEventListener("squeezeend",ne),o.addEventListener("end",de),o.addEventListener("inputsourceschange",ge),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(z),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,ye=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=y.stencil?Za:Ka,ye=y.stencil?qa:ns);const Ye={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};x=new XRWebGLBinding(o,t),_=x.createProjectionLayer(Ye),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new Mi(_.textureWidth,_.textureHeight,{format:ui,type:Si,depthTexture:new tv(_.textureWidth,_.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const we={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,we),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Mi(S.framebufferWidth,S.framebufferHeight,{format:ui,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await o.requestReferenceSpace(f),Ne.setContext(o),Ne.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ge(J){for(let me=0;me<J.removed.length;me++){const we=J.removed[me],ye=A.indexOf(we);ye>=0&&(A[ye]=null,P[ye].disconnect(we))}for(let me=0;me<J.added.length;me++){const we=J.added[me];let ye=A.indexOf(we);if(ye===-1){for(let Ye=0;Ye<P.length;Ye++)if(Ye>=A.length){A.push(we),ye=Ye;break}else if(A[Ye]===null){A[Ye]=we,ye=Ye;break}if(ye===-1)break}const Ae=P[ye];Ae&&Ae.connect(we)}}const oe=new $,ue=new $;function V(J,me,we){oe.setFromMatrixPosition(me.matrixWorld),ue.setFromMatrixPosition(we.matrixWorld);const ye=oe.distanceTo(ue),Ae=me.projectionMatrix.elements,Ye=we.projectionMatrix.elements,We=Ae[14]/(Ae[10]-1),Lt=Ae[14]/(Ae[10]+1),Dt=(Ae[9]+1)/Ae[5],ft=(Ae[9]-1)/Ae[5],k=(Ae[8]-1)/Ae[0],_n=(Ye[8]+1)/Ye[0],mt=We*k,dt=We*_n,$e=ye/(-k+_n),Ct=$e*-k;if(me.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ct),J.translateZ($e),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ae[10]===-1)J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Xe=We+$e,D=Lt+$e,T=mt-Ct,Q=dt+(ye-Ct),he=Dt*Lt/D*Xe,xe=ft*Lt/D*Xe;J.projectionMatrix.makePerspective(T,Q,he,xe,Xe,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,me){me===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(me.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let me=J.near,we=J.far;w.texture!==null&&(w.depthNear>0&&(me=w.depthNear),w.depthFar>0&&(we=w.depthFar)),C.near=H.near=I.near=me,C.far=H.far=I.far=we,(B!==C.near||ae!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,ae=C.far),I.layers.mask=J.layers.mask|2,H.layers.mask=J.layers.mask|4,C.layers.mask=I.layers.mask|H.layers.mask;const ye=J.parent,Ae=C.cameras;le(C,ye);for(let Ye=0;Ye<Ae.length;Ye++)le(Ae[Ye],ye);Ae.length===2?V(C,I,H):C.projectionMatrix.copy(I.projectionMatrix),se(J,C,ye)};function se(J,me,we){we===null?J.matrix.copy(me.matrixWorld):(J.matrix.copy(we.matrixWorld),J.matrix.invert(),J.matrix.multiply(me.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Qa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&S===null))return h},this.setFoveation=function(J){h=J,_!==null&&(_.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let N=null;function ie(J,me){if(g=me.getViewerPose(p||c),M=me,g!==null){const we=g.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let ye=!1;we.length!==C.cameras.length&&(C.cameras.length=0,ye=!0);for(let We=0;We<we.length;We++){const Lt=we[We];let Dt=null;if(S!==null)Dt=S.getViewport(Lt);else{const k=x.getViewSubImage(_,Lt);Dt=k.viewport,We===0&&(e.setRenderTargetTextures(L,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(L))}let ft=b[We];ft===void 0&&(ft=new Hn,ft.layers.enable(We),ft.viewport=new Pt,b[We]=ft),ft.matrix.fromArray(Lt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Lt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),We===0&&(C.matrix.copy(ft.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ye===!0&&C.cameras.push(ft)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&x){const We=x.getDepthInformation(we[0]);We&&We.isValid&&We.texture&&w.init(e,We,o.renderState)}}for(let we=0;we<P.length;we++){const ye=A[we],Ae=P[we];ye!==null&&Ae!==void 0&&Ae.update(ye,me,p||c)}N&&N(J,me),me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:me}),M=null}const Ne=new rv;Ne.setAnimationLoop(ie),this.setAnimationLoop=function(J){N=J},this.dispose=function(){}}}const $r=new Ei,$T=new Vt;function qT(r,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,Qg(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function o(y,v,L,P,A){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),x(y,v)):v.isMeshPhongMaterial?(l(y,v),g(y,v)):v.isMeshStandardMaterial?(l(y,v),_(y,v),v.isMeshPhysicalMaterial&&S(y,v,A)):v.isMeshMatcapMaterial?(l(y,v),M(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),w(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(c(y,v),v.isLineDashedMaterial&&f(y,v)):v.isPointsMaterial?h(y,v,L,P):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Un&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Un&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const L=e.get(v),P=L.envMap,A=L.envMapRotation;P&&(y.envMap.value=P,$r.copy(A),$r.x*=-1,$r.y*=-1,$r.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),y.envMapRotation.value.setFromMatrix4($T.makeRotationFromEuler($r)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function c(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function f(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,L,P){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*L,y.scale.value=P*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function x(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function _(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,L){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Un&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){const L=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function KT(r,e,t,s){let o={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,P){const A=P.program;s.uniformBlockBinding(L,A)}function p(L,P){let A=o[L.id];A===void 0&&(M(L),A=g(L),o[L.id]=A,L.addEventListener("dispose",y));const z=P.program;s.updateUBOMapping(L,z);const F=e.render.frame;l[L.id]!==F&&(_(L),l[L.id]=F)}function g(L){const P=x();L.__bindingPointIndex=P;const A=r.createBuffer(),z=L.__size,F=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,z,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,A),A}function x(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const P=o[L.id],A=L.uniforms,z=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let F=0,I=A.length;F<I;F++){const H=Array.isArray(A[F])?A[F]:[A[F]];for(let b=0,C=H.length;b<C;b++){const B=H[b];if(S(B,F,b,z)===!0){const ae=B.__offset,ne=Array.isArray(B.value)?B.value:[B.value];let de=0;for(let ge=0;ge<ne.length;ge++){const oe=ne[ge],ue=w(oe);typeof oe=="number"||typeof oe=="boolean"?(B.__data[0]=oe,r.bufferSubData(r.UNIFORM_BUFFER,ae+de,B.__data)):oe.isMatrix3?(B.__data[0]=oe.elements[0],B.__data[1]=oe.elements[1],B.__data[2]=oe.elements[2],B.__data[3]=0,B.__data[4]=oe.elements[3],B.__data[5]=oe.elements[4],B.__data[6]=oe.elements[5],B.__data[7]=0,B.__data[8]=oe.elements[6],B.__data[9]=oe.elements[7],B.__data[10]=oe.elements[8],B.__data[11]=0):(oe.toArray(B.__data,de),de+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ae,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(L,P,A,z){const F=L.value,I=P+"_"+A;if(z[I]===void 0)return typeof F=="number"||typeof F=="boolean"?z[I]=F:z[I]=F.clone(),!0;{const H=z[I];if(typeof F=="number"||typeof F=="boolean"){if(H!==F)return z[I]=F,!0}else if(H.equals(F)===!1)return H.copy(F),!0}return!1}function M(L){const P=L.uniforms;let A=0;const z=16;for(let I=0,H=P.length;I<H;I++){const b=Array.isArray(P[I])?P[I]:[P[I]];for(let C=0,B=b.length;C<B;C++){const ae=b[C],ne=Array.isArray(ae.value)?ae.value:[ae.value];for(let de=0,ge=ne.length;de<ge;de++){const oe=ne[de],ue=w(oe),V=A%z,le=V%ue.boundary,se=V+le;A+=le,se!==0&&z-se<ue.storage&&(A+=z-se),ae.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=A,A+=ue.storage}}}const F=A%z;return F>0&&(A+=z-F),L.__size=A,L.__cache={},this}function w(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function y(L){const P=L.target;P.removeEventListener("dispose",y);const A=c.indexOf(P.__bindingPointIndex);c.splice(A,1),r.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function v(){for(const L in o)r.deleteBuffer(o[L]);c=[],o={},l={}}return{bind:h,update:p,dispose:v}}class ZT{constructor(e={}){const{canvas:t=wy(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const M=new Uint32Array(4),w=new Int32Array(4);let y=null,v=null;const L=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let z=!1;this._outputColorSpace=Kn;let F=0,I=0,H=null,b=-1,C=null;const B=new Pt,ae=new Pt;let ne=null;const de=new Tt(0);let ge=0,oe=t.width,ue=t.height,V=1,le=null,se=null;const N=new Pt(0,0,oe,ue),ie=new Pt(0,0,oe,ue);let Ne=!1;const J=new Ad;let me=!1,we=!1;const ye=new Vt,Ae=new Vt,Ye=new $,We=new Pt,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function ft(){return H===null?V:1}let k=s;function _n(R,X){return t.getContext(R,X)}try{const R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${md}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Le,!1),k===null){const X="webgl2";if(k=_n(X,R),k===null)throw _n(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let mt,dt,$e,Ct,Xe,D,T,Q,he,xe,ce,Ge,Ce,Ze,Ke,Se,Oe,tt,nt,ke,ht,st,At,W;function Re(){mt=new ow(k),mt.init(),st=new GT(k,mt),dt=new ew(k,mt,e,st),$e=new HT(k,mt),dt.reverseDepthBuffer&&_&&$e.buffers.depth.setReversed(!0),Ct=new cw(k),Xe=new RT,D=new VT(k,mt,$e,Xe,dt,st,Ct),T=new nw(A),Q=new aw(A),he=new gS(k),At=new QE(k,he),xe=new lw(k,he,Ct,At),ce=new dw(k,xe,he,Ct),nt=new fw(k,dt,D),Se=new tw(Xe),Ge=new CT(A,T,Q,mt,dt,At,Se),Ce=new qT(A,Xe),Ze=new bT,Ke=new FT(mt),tt=new ZE(A,T,Q,$e,ce,S,h),Oe=new BT(A,ce,dt),W=new KT(k,Ct,dt,$e),ke=new JE(k,mt,Ct),ht=new uw(k,mt,Ct),Ct.programs=Ge.programs,A.capabilities=dt,A.extensions=mt,A.properties=Xe,A.renderLists=Ze,A.shadowMap=Oe,A.state=$e,A.info=Ct}Re();const re=new YT(A,k);this.xr=re,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=mt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=mt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(oe,ue,!1))},this.getSize=function(R){return R.set(oe,ue)},this.setSize=function(R,X,te=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=R,ue=X,t.width=Math.floor(R*V),t.height=Math.floor(X*V),te===!0&&(t.style.width=R+"px",t.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(oe*V,ue*V).floor()},this.setDrawingBufferSize=function(R,X,te){oe=R,ue=X,V=te,t.width=Math.floor(R*te),t.height=Math.floor(X*te),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,X,te,q){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,X,te,q),$e.viewport(B.copy(N).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(ie)},this.setScissor=function(R,X,te,q){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,X,te,q),$e.scissor(ae.copy(ie).multiplyScalar(V).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(R){$e.setScissorTest(Ne=R)},this.setOpaqueSort=function(R){le=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,te=!0){let q=0;if(R){let j=!1;if(H!==null){const Ee=H.texture.format;j=Ee===Sd||Ee===yd||Ee===xd}if(j){const Ee=H.texture.type,Pe=Ee===Si||Ee===ns||Ee===$a||Ee===qa||Ee===vd||Ee===_d,Ue=tt.getClearColor(),Be=tt.getClearAlpha(),it=Ue.r,et=Ue.g,He=Ue.b;Pe?(M[0]=it,M[1]=et,M[2]=He,M[3]=Be,k.clearBufferuiv(k.COLOR,0,M)):(w[0]=it,w[1]=et,w[2]=He,w[3]=Be,k.clearBufferiv(k.COLOR,0,w))}else q|=k.COLOR_BUFFER_BIT}X&&(q|=k.DEPTH_BUFFER_BIT),te&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),tt.dispose(),Ze.dispose(),Ke.dispose(),Xe.dispose(),T.dispose(),Q.dispose(),ce.dispose(),At.dispose(),W.dispose(),Ge.dispose(),re.dispose(),re.removeEventListener("sessionstart",rs),re.removeEventListener("sessionend",Zi),Ti.stop()};function pe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const R=Ct.autoReset,X=Oe.enabled,te=Oe.autoUpdate,q=Oe.needsUpdate,j=Oe.type;Re(),Ct.autoReset=R,Oe.enabled=X,Oe.autoUpdate=te,Oe.needsUpdate=q,Oe.type=j}function Le(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function at(R){const X=R.target;X.removeEventListener("dispose",at),It(X)}function It(R){qt(R),Xe.remove(R)}function qt(R){const X=Xe.get(R).programs;X!==void 0&&(X.forEach(function(te){Ge.releaseProgram(te)}),R.isShaderMaterial&&Ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,te,q,j,Ee){X===null&&(X=Lt);const Pe=j.isMesh&&j.matrixWorld.determinant()<0,Ue=co(R,X,te,q,j);$e.setMaterial(q,Pe);let Be=te.index,it=1;if(q.wireframe===!0){if(Be=xe.getWireframeAttribute(te),Be===void 0)return;it=2}const et=te.drawRange,He=te.attributes.position;let _t=et.start*it,ot=(et.start+et.count)*it;Ee!==null&&(_t=Math.max(_t,Ee.start*it),ot=Math.min(ot,(Ee.start+Ee.count)*it)),Be!==null?(_t=Math.max(_t,0),ot=Math.min(ot,Be.count)):He!=null&&(_t=Math.max(_t,0),ot=Math.min(ot,He.count));const Gt=ot-_t;if(Gt<0||Gt===1/0)return;At.setup(j,q,Ue,te,Be);let Ot,xt=ke;if(Be!==null&&(Ot=he.get(Be),xt=ht,xt.setIndex(Ot)),j.isMesh)q.wireframe===!0?($e.setLineWidth(q.wireframeLinewidth*ft()),xt.setMode(k.LINES)):xt.setMode(k.TRIANGLES);else if(j.isLine){let qe=q.linewidth;qe===void 0&&(qe=1),$e.setLineWidth(qe*ft()),j.isLineSegments?xt.setMode(k.LINES):j.isLineLoop?xt.setMode(k.LINE_LOOP):xt.setMode(k.LINE_STRIP)}else j.isPoints?xt.setMode(k.POINTS):j.isSprite&&xt.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)$l("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))xt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qe=j._multiDrawStarts,Wt=j._multiDrawCounts,gt=j._multiDrawCount,cn=Be?he.get(Be).bytesPerElement:1,Ji=Xe.get(q).currentProgram.getUniforms();for(let yn=0;yn<gt;yn++)Ji.setValue(k,"_gl_DrawID",yn),xt.render(qe[yn]/cn,Wt[yn])}else if(j.isInstancedMesh)xt.renderInstances(_t,Gt,j.count);else if(te.isInstancedBufferGeometry){const qe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Wt=Math.min(te.instanceCount,qe);xt.renderInstances(_t,Gt,Wt)}else xt.render(_t,Gt)};function yt(R,X,te){R.transparent===!0&&R.side===Vi&&R.forceSinglePass===!1?(R.side=Un,R.needsUpdate=!0,ss(R,X,te),R.side=Cr,R.needsUpdate=!0,ss(R,X,te),R.side=Vi):ss(R,X,te)}this.compile=function(R,X,te=null){te===null&&(te=R),v=Ke.get(te),v.init(X),P.push(v),te.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),R!==te&&R.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();const q=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ee=j.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){const Ue=Ee[Pe];yt(Ue,te,j),q.add(Ue)}else yt(Ee,te,j),q.add(Ee)}),v=P.pop(),q},this.compileAsync=function(R,X,te=null){const q=this.compile(R,X,te);return new Promise(j=>{function Ee(){if(q.forEach(function(Pe){Xe.get(Pe).currentProgram.isReady()&&q.delete(Pe)}),q.size===0){j(R);return}setTimeout(Ee,10)}mt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let An=null;function xn(R){An&&An(R)}function rs(){Ti.stop()}function Zi(){Ti.start()}const Ti=new rv;Ti.setAnimationLoop(xn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(R){An=R,re.setAnimationLoop(R),R===null?Ti.stop():Ti.start()},re.addEventListener("sessionstart",rs),re.addEventListener("sessionend",Zi),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(X),X=re.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,X,H),v=Ke.get(R,P.length),v.init(X),P.push(v),Ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),J.setFromProjectionMatrix(Ae),we=this.localClippingEnabled,me=Se.init(this.clippingPlanes,we),y=Ze.get(R,L.length),y.init(),L.push(y),re.enabled===!0&&re.isPresenting===!0){const Ee=A.xr.getDepthSensingMesh();Ee!==null&&Ai(Ee,X,-1/0,A.sortObjects)}Ai(R,X,0,A.sortObjects),y.finish(),A.sortObjects===!0&&y.sort(le,se),Dt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Dt&&tt.addToRenderList(y,R),this.info.render.frame++,me===!0&&Se.beginShadows();const te=v.state.shadowsArray;Oe.render(te,R,X),me===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=y.opaque,j=y.transmissive;if(v.setupLights(),X.isArrayCamera){const Ee=X.cameras;if(j.length>0)for(let Pe=0,Ue=Ee.length;Pe<Ue;Pe++){const Be=Ee[Pe];br(q,j,R,Be)}Dt&&tt.render(R);for(let Pe=0,Ue=Ee.length;Pe<Ue;Pe++){const Be=Ee[Pe];Pr(y,R,Be,Be.viewport)}}else j.length>0&&br(q,j,R,X),Dt&&tt.render(R),Pr(y,R,X);H!==null&&I===0&&(D.updateMultisampleRenderTarget(H),D.updateRenderTargetMipmap(H)),R.isScene===!0&&R.onAfterRender(A,R,X),At.resetDefaultState(),b=-1,C=null,P.pop(),P.length>0?(v=P[P.length-1],me===!0&&Se.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function Ai(R,X,te,q){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){q&&We.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ae);const Pe=ce.update(R),Ue=R.material;Ue.visible&&y.push(R,Pe,Ue,te,We.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Pe=ce.update(R),Ue=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),We.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),We.copy(Pe.boundingSphere.center)),We.applyMatrix4(R.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ue)){const Be=Pe.groups;for(let it=0,et=Be.length;it<et;it++){const He=Be[it],_t=Ue[He.materialIndex];_t&&_t.visible&&y.push(R,Pe,_t,te,We.z,He)}}else Ue.visible&&y.push(R,Pe,Ue,te,We.z,null)}}const Ee=R.children;for(let Pe=0,Ue=Ee.length;Pe<Ue;Pe++)Ai(Ee[Pe],X,te,q)}function Pr(R,X,te,q){const j=R.opaque,Ee=R.transmissive,Pe=R.transparent;v.setupLightsView(te),me===!0&&Se.setGlobalState(A.clippingPlanes,te),q&&$e.viewport(B.copy(q)),j.length>0&&Qi(j,X,te),Ee.length>0&&Qi(Ee,X,te),Pe.length>0&&Qi(Pe,X,te),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function br(R,X,te,q){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[q.id]===void 0&&(v.state.transmissionRenderTarget[q.id]=new Mi(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Rr:Si,minFilter:es,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Ee=v.state.transmissionRenderTarget[q.id],Pe=q.viewport||B;Ee.setSize(Pe.z*A.transmissionResolutionScale,Pe.w*A.transmissionResolutionScale);const Ue=A.getRenderTarget();A.setRenderTarget(Ee),A.getClearColor(de),ge=A.getClearAlpha(),ge<1&&A.setClearColor(16777215,.5),A.clear(),Dt&&tt.render(te);const Be=A.toneMapping;A.toneMapping=Ar;const it=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),v.setupLightsView(q),me===!0&&Se.setGlobalState(A.clippingPlanes,q),Qi(R,te,q),D.updateMultisampleRenderTarget(Ee),D.updateRenderTargetMipmap(Ee),mt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let He=0,_t=X.length;He<_t;He++){const ot=X[He],Gt=ot.object,Ot=ot.geometry,xt=ot.material,qe=ot.group;if(xt.side===Vi&&Gt.layers.test(q.layers)){const Wt=xt.side;xt.side=Un,xt.needsUpdate=!0,lo(Gt,te,q,Ot,xt,qe),xt.side=Wt,xt.needsUpdate=!0,et=!0}}et===!0&&(D.updateMultisampleRenderTarget(Ee),D.updateRenderTargetMipmap(Ee))}A.setRenderTarget(Ue),A.setClearColor(de,ge),it!==void 0&&(q.viewport=it),A.toneMapping=Be}function Qi(R,X,te){const q=X.isScene===!0?X.overrideMaterial:null;for(let j=0,Ee=R.length;j<Ee;j++){const Pe=R[j],Ue=Pe.object,Be=Pe.geometry,it=Pe.group;let et=Pe.material;et.allowOverride===!0&&q!==null&&(et=q),Ue.layers.test(te.layers)&&lo(Ue,X,te,Be,et,it)}}function lo(R,X,te,q,j,Ee){R.onBeforeRender(A,X,te,q,j,Ee),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(A,X,te,q,R,Ee),j.transparent===!0&&j.side===Vi&&j.forceSinglePass===!1?(j.side=Un,j.needsUpdate=!0,A.renderBufferDirect(te,X,q,j,R,Ee),j.side=Cr,j.needsUpdate=!0,A.renderBufferDirect(te,X,q,j,R,Ee),j.side=Vi):A.renderBufferDirect(te,X,q,j,R,Ee),R.onAfterRender(A,X,te,q,j,Ee)}function ss(R,X,te){X.isScene!==!0&&(X=Lt);const q=Xe.get(R),j=v.state.lights,Ee=v.state.shadowsArray,Pe=j.state.version,Ue=Ge.getParameters(R,j.state,Ee,X,te),Be=Ge.getProgramCacheKey(Ue);let it=q.programs;q.environment=R.isMeshStandardMaterial?X.environment:null,q.fog=X.fog,q.envMap=(R.isMeshStandardMaterial?Q:T).get(R.envMap||q.environment),q.envMapRotation=q.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,it===void 0&&(R.addEventListener("dispose",at),it=new Map,q.programs=it);let et=it.get(Be);if(et!==void 0){if(q.currentProgram===et&&q.lightsStateVersion===Pe)return fi(R,Ue),et}else Ue.uniforms=Ge.getUniforms(R),R.onBeforeCompile(Ue,A),et=Ge.acquireProgram(Ue,Be),it.set(Be,et),q.uniforms=Ue.uniforms;const He=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(He.clippingPlanes=Se.uniform),fi(R,Ue),q.needsLights=su(R),q.lightsStateVersion=Pe,q.needsLights&&(He.ambientLightColor.value=j.state.ambient,He.lightProbe.value=j.state.probe,He.directionalLights.value=j.state.directional,He.directionalLightShadows.value=j.state.directionalShadow,He.spotLights.value=j.state.spot,He.spotLightShadows.value=j.state.spotShadow,He.rectAreaLights.value=j.state.rectArea,He.ltc_1.value=j.state.rectAreaLTC1,He.ltc_2.value=j.state.rectAreaLTC2,He.pointLights.value=j.state.point,He.pointLightShadows.value=j.state.pointShadow,He.hemisphereLights.value=j.state.hemi,He.directionalShadowMap.value=j.state.directionalShadowMap,He.directionalShadowMatrix.value=j.state.directionalShadowMatrix,He.spotShadowMap.value=j.state.spotShadowMap,He.spotLightMatrix.value=j.state.spotLightMatrix,He.spotLightMap.value=j.state.spotLightMap,He.pointShadowMap.value=j.state.pointShadowMap,He.pointShadowMatrix.value=j.state.pointShadowMatrix),q.currentProgram=et,q.uniformsList=null,et}function uo(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=ql.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function fi(R,X){const te=Xe.get(R);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function co(R,X,te,q,j){X.isScene!==!0&&(X=Lt),D.resetTextureUnits();const Ee=X.fog,Pe=q.isMeshStandardMaterial?X.environment:null,Ue=H===null?A.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:qs,Be=(q.isMeshStandardMaterial?Q:T).get(q.envMap||Pe),it=q.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,et=!!te.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),He=!!te.morphAttributes.position,_t=!!te.morphAttributes.normal,ot=!!te.morphAttributes.color;let Gt=Ar;q.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Gt=A.toneMapping);const Ot=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,xt=Ot!==void 0?Ot.length:0,qe=Xe.get(q),Wt=v.state.lights;if(me===!0&&(we===!0||R!==C)){const on=R===C&&q.id===b;Se.setState(q,R,on)}let gt=!1;q.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Wt.state.version||qe.outputColorSpace!==Ue||j.isBatchedMesh&&qe.batching===!1||!j.isBatchedMesh&&qe.batching===!0||j.isBatchedMesh&&qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qe.instancing===!1||!j.isInstancedMesh&&qe.instancing===!0||j.isSkinnedMesh&&qe.skinning===!1||!j.isSkinnedMesh&&qe.skinning===!0||j.isInstancedMesh&&qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qe.instancingMorph===!1&&j.morphTexture!==null||qe.envMap!==Be||q.fog===!0&&qe.fog!==Ee||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Se.numPlanes||qe.numIntersection!==Se.numIntersection)||qe.vertexAlphas!==it||qe.vertexTangents!==et||qe.morphTargets!==He||qe.morphNormals!==_t||qe.morphColors!==ot||qe.toneMapping!==Gt||qe.morphTargetsCount!==xt)&&(gt=!0):(gt=!0,qe.__version=q.version);let cn=qe.currentProgram;gt===!0&&(cn=ss(q,X,j));let Ji=!1,yn=!1,Ci=!1;const bt=cn.getUniforms(),fn=qe.uniforms;if($e.useProgram(cn.program)&&(Ji=!0,yn=!0,Ci=!0),q.id!==b&&(b=q.id,yn=!0),Ji||C!==R){$e.buffers.depth.getReversed()?(ye.copy(R.projectionMatrix),Ay(ye),Cy(ye),bt.setValue(k,"projectionMatrix",ye)):bt.setValue(k,"projectionMatrix",R.projectionMatrix),bt.setValue(k,"viewMatrix",R.matrixWorldInverse);const tn=bt.map.cameraPosition;tn!==void 0&&tn.setValue(k,Ye.setFromMatrixPosition(R.matrixWorld)),dt.logarithmicDepthBuffer&&bt.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&bt.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,yn=!0,Ci=!0)}if(j.isSkinnedMesh){bt.setOptional(k,j,"bindMatrix"),bt.setOptional(k,j,"bindMatrixInverse");const on=j.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),bt.setValue(k,"boneTexture",on.boneTexture,D))}j.isBatchedMesh&&(bt.setOptional(k,j,"batchingTexture"),bt.setValue(k,"batchingTexture",j._matricesTexture,D),bt.setOptional(k,j,"batchingIdTexture"),bt.setValue(k,"batchingIdTexture",j._indirectTexture,D),bt.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&bt.setValue(k,"batchingColorTexture",j._colorsTexture,D));const en=te.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&nt.update(j,te,cn),(yn||qe.receiveShadow!==j.receiveShadow)&&(qe.receiveShadow=j.receiveShadow,bt.setValue(k,"receiveShadow",j.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(fn.envMap.value=Be,fn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&X.environment!==null&&(fn.envMapIntensity.value=X.environmentIntensity),yn&&(bt.setValue(k,"toneMappingExposure",A.toneMappingExposure),qe.needsLights&&fo(fn,Ci),Ee&&q.fog===!0&&Ce.refreshFogUniforms(fn,Ee),Ce.refreshMaterialUniforms(fn,q,V,ue,v.state.transmissionRenderTarget[R.id]),ql.upload(k,uo(qe),fn,D)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ql.upload(k,uo(qe),fn,D),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&bt.setValue(k,"center",j.center),bt.setValue(k,"modelViewMatrix",j.modelViewMatrix),bt.setValue(k,"normalMatrix",j.normalMatrix),bt.setValue(k,"modelMatrix",j.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const on=q.uniformsGroups;for(let tn=0,St=on.length;tn<St;tn++){const di=on[tn];W.update(di,cn),W.bind(di,cn)}}return cn}function fo(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function su(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(R,X,te){const q=Xe.get(R);q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Xe.get(R.texture).__webglTexture=X,Xe.get(R.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:te,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const te=Xe.get(R);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0};const ho=k.createFramebuffer();this.setRenderTarget=function(R,X=0,te=0){H=R,F=X,I=te;let q=!0,j=null,Ee=!1,Pe=!1;if(R){const Be=Xe.get(R);if(Be.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(k.FRAMEBUFFER,null),q=!1;else if(Be.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Be.__hasExternalTextures)D.rebindTextures(R,Xe.get(R.texture).__webglTexture,Xe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const He=R.depthTexture;if(Be.__boundDepthTexture!==He){if(He!==null&&Xe.has(He)&&(R.width!==He.image.width||R.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const it=R.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Pe=!0);const et=Xe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(et[X])?j=et[X][te]:j=et[X],Ee=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?j=Xe.get(R).__webglMultisampledFramebuffer:Array.isArray(et)?j=et[te]:j=et,B.copy(R.viewport),ae.copy(R.scissor),ne=R.scissorTest}else B.copy(N).multiplyScalar(V).floor(),ae.copy(ie).multiplyScalar(V).floor(),ne=Ne;if(te!==0&&(j=ho),$e.bindFramebuffer(k.FRAMEBUFFER,j)&&q&&$e.drawBuffers(R,j),$e.viewport(B),$e.scissor(ae),$e.setScissorTest(ne),Ee){const Be=Xe.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,te)}else if(Pe){const Be=Xe.get(R.texture),it=X;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.__webglTexture,te,it)}else if(R!==null&&te!==0){const Be=Xe.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Be.__webglTexture,te)}b=-1},this.readRenderTargetPixels=function(R,X,te,q,j,Ee,Pe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){$e.bindFramebuffer(k.FRAMEBUFFER,Ue);try{const Be=R.texture,it=Be.format,et=Be.type;if(!dt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-q&&te>=0&&te<=R.height-j&&k.readPixels(X,te,q,j,st.convert(it),st.convert(et),Ee)}finally{const Be=H!==null?Xe.get(H).__webglFramebuffer:null;$e.bindFramebuffer(k.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(R,X,te,q,j,Ee,Pe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue)if(X>=0&&X<=R.width-q&&te>=0&&te<=R.height-j){$e.bindFramebuffer(k.FRAMEBUFFER,Ue);const Be=R.texture,it=Be.format,et=Be.type;if(!dt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.bufferData(k.PIXEL_PACK_BUFFER,Ee.byteLength,k.STREAM_READ),k.readPixels(X,te,q,j,st.convert(it),st.convert(et),0);const _t=H!==null?Xe.get(H).__webglFramebuffer:null;$e.bindFramebuffer(k.FRAMEBUFFER,_t);const ot=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Ty(k,ot,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ee),k.deleteBuffer(He),k.deleteSync(ot),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,te=0){const q=Math.pow(2,-te),j=Math.floor(R.image.width*q),Ee=Math.floor(R.image.height*q),Pe=X!==null?X.x:0,Ue=X!==null?X.y:0;D.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,te,0,0,Pe,Ue,j,Ee),$e.unbindTexture()};const po=k.createFramebuffer(),mo=k.createFramebuffer();this.copyTextureToTexture=function(R,X,te=null,q=null,j=0,Ee=null){Ee===null&&(j!==0?($l("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=j,j=0):Ee=0);let Pe,Ue,Be,it,et,He,_t,ot,Gt;const Ot=R.isCompressedTexture?R.mipmaps[Ee]:R.image;if(te!==null)Pe=te.max.x-te.min.x,Ue=te.max.y-te.min.y,Be=te.isBox3?te.max.z-te.min.z:1,it=te.min.x,et=te.min.y,He=te.isBox3?te.min.z:0;else{const en=Math.pow(2,-j);Pe=Math.floor(Ot.width*en),Ue=Math.floor(Ot.height*en),R.isDataArrayTexture?Be=Ot.depth:R.isData3DTexture?Be=Math.floor(Ot.depth*en):Be=1,it=0,et=0,He=0}q!==null?(_t=q.x,ot=q.y,Gt=q.z):(_t=0,ot=0,Gt=0);const xt=st.convert(X.format),qe=st.convert(X.type);let Wt;X.isData3DTexture?(D.setTexture3D(X,0),Wt=k.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),Wt=k.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),Wt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const gt=k.getParameter(k.UNPACK_ROW_LENGTH),cn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ji=k.getParameter(k.UNPACK_SKIP_PIXELS),yn=k.getParameter(k.UNPACK_SKIP_ROWS),Ci=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ot.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ot.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,it),k.pixelStorei(k.UNPACK_SKIP_ROWS,et),k.pixelStorei(k.UNPACK_SKIP_IMAGES,He);const bt=R.isDataArrayTexture||R.isData3DTexture,fn=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const en=Xe.get(R),on=Xe.get(X),tn=Xe.get(en.__renderTarget),St=Xe.get(on.__renderTarget);$e.bindFramebuffer(k.READ_FRAMEBUFFER,tn.__webglFramebuffer),$e.bindFramebuffer(k.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let di=0;di<Be;di++)bt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xe.get(R).__webglTexture,j,He+di),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xe.get(X).__webglTexture,Ee,Gt+di)),k.blitFramebuffer(it,et,Pe,Ue,_t,ot,Pe,Ue,k.DEPTH_BUFFER_BIT,k.NEAREST);$e.bindFramebuffer(k.READ_FRAMEBUFFER,null),$e.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Xe.has(R)){const en=Xe.get(R),on=Xe.get(X);$e.bindFramebuffer(k.READ_FRAMEBUFFER,po),$e.bindFramebuffer(k.DRAW_FRAMEBUFFER,mo);for(let tn=0;tn<Be;tn++)bt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,en.__webglTexture,j,He+tn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,en.__webglTexture,j),fn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,on.__webglTexture,Ee,Gt+tn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,on.__webglTexture,Ee),j!==0?k.blitFramebuffer(it,et,Pe,Ue,_t,ot,Pe,Ue,k.COLOR_BUFFER_BIT,k.NEAREST):fn?k.copyTexSubImage3D(Wt,Ee,_t,ot,Gt+tn,it,et,Pe,Ue):k.copyTexSubImage2D(Wt,Ee,_t,ot,it,et,Pe,Ue);$e.bindFramebuffer(k.READ_FRAMEBUFFER,null),$e.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else fn?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Wt,Ee,_t,ot,Gt,Pe,Ue,Be,xt,qe,Ot.data):X.isCompressedArrayTexture?k.compressedTexSubImage3D(Wt,Ee,_t,ot,Gt,Pe,Ue,Be,xt,Ot.data):k.texSubImage3D(Wt,Ee,_t,ot,Gt,Pe,Ue,Be,xt,qe,Ot):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ee,_t,ot,Pe,Ue,xt,qe,Ot.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ee,_t,ot,Ot.width,Ot.height,xt,Ot.data):k.texSubImage2D(k.TEXTURE_2D,Ee,_t,ot,Pe,Ue,xt,qe,Ot);k.pixelStorei(k.UNPACK_ROW_LENGTH,gt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,cn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ji),k.pixelStorei(k.UNPACK_SKIP_ROWS,yn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ci),Ee===0&&X.generateMipmaps&&k.generateMipmap(Wt),$e.unbindTexture()},this.copyTextureToTexture3D=function(R,X,te=null,q=null,j=0){return $l('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,te,q,j)},this.initRenderTarget=function(R){Xe.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),$e.unbindTexture()},this.resetState=function(){F=0,I=0,H=null,$e.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const QT={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ia{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const JT=new iv(-1,1,1,-1,0,1);class e1 extends Ki{constructor(){super(),this.setAttribute("position",new Qn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qn([0,2,0,0,2,0],2))}}const t1=new e1;class Ld{constructor(e){this._mesh=new Zn(t1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,JT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class n1 extends ia{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Vn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=eo.clone(e.uniforms),this.material=new Vn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ld(this.material)}render(e,t,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class gg extends ia{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,s){const o=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let c,f;this.inverse?(c=0,f=1):(c=1,f=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),l.buffers.stencil.setFunc(o.ALWAYS,c,4294967295),l.buffers.stencil.setClear(f),l.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(o.EQUAL,1,4294967295),l.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),l.buffers.stencil.setLocked(!0)}}class i1 extends ia{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class r1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const s=e.getSize(new ct);this._width=s.width,this._height=s.height,t=new Mi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new n1(QT),this.copyPass.material.blending=ji,this.clock=new pS}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let s=!1;for(let o=0,l=this.passes.length;o<l;o++){const c=this.passes[o];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),c.needsSwap){if(s){const f=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}gg!==void 0&&(c instanceof gg?s=!0:c instanceof i1&&(s=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const s=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(s,o),this.renderTarget2.setSize(s,o);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(s,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class s1 extends ia{constructor(e,t,s=null,o=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=s,this.clearColor=o,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Tt}render(e,t,s){const o=e.autoClear;e.autoClear=!1;let l,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=o}}const a1={name:"ConvolutionShader",uniforms:{tDiffuse:{value:null},uImageIncrement:{value:new ct(.001953125,0)},cKernel:{value:[]}},vertexShader:`

		uniform vec2 uImageIncrement;

		varying vec2 vUv;

		void main() {

			vUv = uv - ( ( KERNEL_SIZE_FLOAT - 1.0 ) / 2.0 ) * uImageIncrement;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float cKernel[ KERNEL_SIZE_INT ];

		uniform sampler2D tDiffuse;
		uniform vec2 uImageIncrement;

		varying vec2 vUv;

		void main() {

			vec2 imageCoord = vUv;
			vec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );

			for( int i = 0; i < KERNEL_SIZE_INT; i ++ ) {

				sum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];
				imageCoord += uImageIncrement;

			}

			gl_FragColor = sum;

		}`};class ts extends ia{constructor(e=1,t=25,s=4){super(),this.combineUniforms=eo.clone(zl.uniforms),this.combineUniforms.strength.value=e,this.materialCombine=new Vn({name:zl.name,uniforms:this.combineUniforms,vertexShader:zl.vertexShader,fragmentShader:zl.fragmentShader,blending:Mf,transparent:!0});const o=a1;this.convolutionUniforms=eo.clone(o.uniforms),this.convolutionUniforms.uImageIncrement.value=ts.blurX,this.convolutionUniforms.cKernel.value=l1(s),this.materialConvolution=new Vn({name:o.name,uniforms:this.convolutionUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{KERNEL_SIZE_FLOAT:t.toFixed(1),KERNEL_SIZE_INT:t.toFixed(0)}}),this.needsSwap=!1,this._renderTargetX=new Mi(1,1,{type:Rr}),this._renderTargetX.texture.name="BloomPass.x",this._renderTargetY=new Mi(1,1,{type:Rr}),this._renderTargetY.texture.name="BloomPass.y",this._fsQuad=new Ld(null)}render(e,t,s,o,l){l&&e.state.buffers.stencil.setTest(!1),this._fsQuad.material=this.materialConvolution,this.convolutionUniforms.tDiffuse.value=s.texture,this.convolutionUniforms.uImageIncrement.value=ts.blurX,e.setRenderTarget(this._renderTargetX),e.clear(),this._fsQuad.render(e),this.convolutionUniforms.tDiffuse.value=this._renderTargetX.texture,this.convolutionUniforms.uImageIncrement.value=ts.blurY,e.setRenderTarget(this._renderTargetY),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.materialCombine,this.combineUniforms.tDiffuse.value=this._renderTargetY.texture,l&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(s),this.clear&&e.clear(),this._fsQuad.render(e)}setSize(e,t){this._renderTargetX.setSize(e,t),this._renderTargetY.setSize(e,t)}dispose(){this._renderTargetX.dispose(),this._renderTargetY.dispose(),this.materialCombine.dispose(),this.materialConvolution.dispose(),this._fsQuad.dispose()}}const zl={name:"CombineShader",uniforms:{tDiffuse:{value:null},strength:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float strength;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = strength * texel;

		}`};ts.blurX=new ct(.001953125,0);ts.blurY=new ct(0,.001953125);function o1(r,e){return Math.exp(-(r*r)/(2*e*e))}function l1(r){let t=2*Math.ceil(r*3)+1;t>25&&(t=25);const s=(t-1)*.5,o=new Array(t);let l=0;for(let c=0;c<t;++c)o[c]=o1(c-s,r),l+=o[c];for(let c=0;c<t;++c)o[c]/=l;return o}const u1={name:"FilmShader",uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:.5},grayscale:{value:!1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		uniform float intensity;
		uniform bool grayscale;
		uniform float time;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 base = texture2D( tDiffuse, vUv );

			float noise = rand( fract( vUv + time ) );

			vec3 color = base.rgb + base.rgb * clamp( 0.1 + noise, 0.0, 1.0 );

			color = mix( base.rgb, color, intensity );

			if ( grayscale ) {

				color = vec3( luminance( color ) ); // assuming linear-srgb

			}

			gl_FragColor = vec4( color, base.a );

		}`};class c1 extends ia{constructor(e=.5,t=!1){super();const s=u1;this.uniforms=eo.clone(s.uniforms),this.material=new Vn({name:s.name,uniforms:this.uniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.uniforms.intensity.value=e,this.uniforms.grayscale.value=t,this._fsQuad=new Ld(this.material)}render(e,t,s,o){this.uniforms.tDiffuse.value=s.texture,this.uniforms.time.value+=o,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const f1="/assets/space3-CRrI2Bvu.png",d1=typeof window<"u"&&typeof document<"u",h1=()=>{const r=fe.useRef(null);return fe.useEffect(()=>{if(!(!d1||!r.current))try{const e=new Qy,t=new Hn(75,window.innerWidth/window.innerHeight,.1,1e3),s=new ZT({canvas:r.current,alpha:!0});s.setPixelRatio(window.devicePixelRatio),s.setSize(window.innerWidth,window.innerHeight),t.position.setZ(0),t.position.setX(0);const o=new lS().load(f1);e.background=o;const l=new Cd(1.5,2),c=new nS({wireframe:!1}),f=new Zn(l,c);e.add(f),f.position.z+=-4.5,f.position.x+=-.05,f.position.y+=-.1;const h=[],p=()=>{const A=new Rd(.1,0),z=new tS({color:16777215,transparent:!0,opacity:.5}),F=new Zn(A,z),[I,H,b]=Array(3).fill(0).map(()=>Ey.randFloatSpread(100));F.position.set(I,H,b),h.push(F),e.add(F)};for(let A=0;A<700;A++)p();const g=new fS(16777215);g.position.set(5,5,5);const x=new dS(16777215);e.add(g,x);const _=new r1(s);_.addPass(new s1(e,t));const S=new ts(1);_.addPass(S);const M=new c1(.1);M.renderToScreen=!0,_.addPass(M);let w=0,y=0;const v=A=>{w=A.clientX,y=A.clientY};document.addEventListener("mousemove",v);const L=()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",L);const P=()=>{requestAnimationFrame(P),f.rotation.x+=.001,f.rotation.y+=5e-4,f.rotation.z+=.001,h.forEach(A=>{A.rotation.x+=.01,A.rotation.y+=.005,A.rotation.z+=.007}),t.position.x=w*1e-4,t.position.y=y*-1e-4,_.render()};return P(),()=>{window.removeEventListener("resize",L),document.removeEventListener("mousemove",v),l.dispose(),c.dispose(),e.clear()}}catch(e){console.error("Error initializing Three.js:",e)}},[]),K.jsx("canvas",{ref:r,style:{position:"fixed",top:0,left:0,zIndex:-1},"data-testid":"three-background"})},Dd=({children:r,showBackground:e=!0})=>K.jsxs(K.Fragment,{children:[e&&K.jsx(h1,{}),K.jsx("main",{className:"container-fluid text-center d-flex flex-column",children:r})]}),Ud=({links:r})=>K.jsx("div",{id:"nav",className:"d-flex flex-column align-items-center justify-content-center",children:r.map(e=>e.external?K.jsx("a",{id:e.id,className:"text-light",href:e.to,target:"_blank",rel:"noopener noreferrer",children:K.jsx("span",{children:e.text})},e.id):K.jsx(ro,{id:e.id,className:"text-light",to:e.to,children:K.jsx("span",{children:e.text})},e.id))}),p1=()=>{const r=[{id:"featured",to:"/featured",text:"featured"},{id:"resume",to:"/resume",text:"résumé"},{id:"connect",to:"/connect",text:"connect"}];return K.jsxs(Dd,{children:[K.jsxs("div",{children:[K.jsx("header",{id:"title",children:K.jsx("h1",{className:"display-1 mt-5",children:"ETHAN C TAN"})}),K.jsx("blockquote",{className:"display-6",children:K.jsx("p",{children:"CS + Stats @ Harvard"})})]}),K.jsx(Ud,{links:r})]})},m1=()=>{const r=[{id:"hackharvard",to:"https://devpost.com/software/empath-ly",text:"HackHarvard: empath.ly",external:!0},{id:"hackbrown",to:"https://devpost.com/software/smarchitect",text:"Hack@Brown: smarchitect",external:!0},{id:"JLI",to:"https://www.johnlockeinstitute.com/post/grand-prize-winner-2020-essay-competition",text:"JLI: philosophy",external:!0}];return K.jsxs(Dd,{children:[K.jsx("div",{children:K.jsx("header",{id:"title",children:K.jsx("h1",{className:"display-2 mt-5 pt-5",children:"FEATURED WORK"})})}),K.jsx(Ud,{links:r}),K.jsx("div",{id:"return",className:"pb-5 mb-5",children:K.jsx(ro,{id:"back",className:"text-light display-6",to:"/",children:K.jsx("span",{children:"back"})})})]})},g1=()=>{const r=[{id:"linkedin",to:"https://www.linkedin.com/in/ethanchristiantan/",text:"linkedin",external:!0},{id:"twitter",to:"https://twitter.com/ectan_",text:"twitter",external:!0},{id:"email",to:"mailto:ectan@college.harvard.edu",text:"email",external:!0},{id:"calendly",to:"https://calendly.com/ethanctan/30min",text:"calendly",external:!0}];return K.jsxs(Dd,{children:[K.jsx("div",{children:K.jsx("header",{id:"title",children:K.jsx("h1",{className:"display-2 mt-5 pt-5",children:"CONNECT"})})}),K.jsx(Ud,{links:r}),K.jsx("div",{id:"return",className:"pb-5 mb-5",children:K.jsx(ro,{id:"back",className:"text-light display-6",to:"/",children:K.jsx("span",{children:"back"})})})]})},v1=()=>{const[r,e]=fe.useState(!1),t=()=>{e(!r)};return fe.useEffect(()=>{const s=document.body;r?s.classList.add("dark-mode"):s.classList.remove("dark-mode")},[r]),K.jsx("button",{style:{margin:"5px",filter:"drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2))"},type:"button",className:"btn btn-primary",onClick:t,children:r?"Light":"Dark"})},_1=()=>(fe.useEffect(()=>{const r=document.createElement("link");return r.href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",r.rel="stylesheet",document.head.appendChild(r),()=>{document.head.removeChild(r)}},[]),K.jsx("div",{id:"resumebody",className:"p-5-md p-3",children:K.jsxs("div",{className:"pt-5 justify-content-center",style:{maxWidth:"55em",margin:"auto"},children:[K.jsx("h1",{id:"bigheader",children:"Ethan Christian Tan"}),K.jsx("hr",{}),K.jsxs("div",{className:"row pb-1 pt-2",children:[K.jsxs("div",{className:"col-md col-sm",children:[K.jsx("h5",{children:"Contact me"}),K.jsxs("p",{children:["+1 (857) 706-9099",K.jsx("br",{}),K.jsx("a",{href:"mailto:ectan@college.harvard.edu",target:"blank_",children:"ectan@college.harvard.edu"}),K.jsx("br",{}),K.jsx("a",{href:"https://linkedin.com/in/ethanchristiantan",target:"blank_",children:"linkedin.com/in/ethanchristiantan"})]})]}),K.jsxs("div",{className:"col-md col-sm",children:[K.jsx("h5",{children:"Address"}),K.jsxs("p",{children:["2433 Harvard Yard Mail Center",K.jsx("br",{}),"One Oxford Street",K.jsx("br",{}),"Cambridge, MA 02138"]})]})]}),K.jsxs("div",{children:[K.jsx("h2",{className:"pb-2 pt-1",children:"Education"}),K.jsxs("h5",{children:["Harvard University   ",K.jsx("small",{className:"text-muted",children:"2022 - 2026"})]}),K.jsxs("p",{children:["A.B. Computer Science & S.M. Statistics (GPA: 4.0)",K.jsx("br",{}),"Relevant Coursework: Probability, Statistical Inference, Stochastic Processes, Quantitative Analysis of Capital Markets, Data Structures & Algorithms."]}),K.jsxs("h5",{children:["Anglo-Chinese School (Independent)   ",K.jsx("small",{className:"text-muted",children:"2014 - 2019"})]}),K.jsxs("p",{children:["IBDP HL History, Economics, Literature; SL Mathematics, Physics, Chinese 'B' ",K.jsx("br",{}),"IB Diploma: 44/45, SAT: 1540/1600 ",K.jsx("br",{}),"Student Council President, Student Researcher, International Essay Competition Awardee, First Aid Competition Team Leader."]})]}),K.jsxs("div",{children:[K.jsx("h2",{className:"pb-2 pt-1",children:"Relevant Projects"}),K.jsxs("p",{children:[K.jsx("a",{href:"http://www.aegisprotocol.io",children:"Aegis"}),". A startup using blockchain and AI to scale and regulate payments. Accepted into the ",K.jsx("a",{href:"https://www.hcsaigroup.org/visionfellows",children:"HUMIC & HCS AI Vision Fellowship"}),". Reached interview stage for Y Combinator S23."]}),K.jsxs("p",{children:["Polkadot × EasyA Hackathon 2023: 1st Place. Built a ",K.jsx("a",{href:"https://github.com/ethanctan/aegis-moonbeam",children:"proof-of-concept protocol for Aegis"}),".",K.jsx("br",{}),"Hack@Brown 2023: Best Design. Built ",K.jsx("a",{href:"https://devpost.com/software/smarchitect",children:"Smarchitect"}),", an PyTorch & Tensorflow-based tool for searching buildings using sketches.",K.jsx("br",{}),"HackHarvard 2022: 1st place. Built ",K.jsx("a",{href:"https://devpost.com/software/empath-ly",children:"empath.ly"}),", a video conferencing app using OpenCV & Tensorflow for sentiment analysis.",K.jsx("br",{}),"TRON × EasyA Hackathon 2022: 3rd place. Built a decentralized marketplace for survey data."]})]}),K.jsxs("div",{children:[K.jsx("h2",{className:"pb-2 pt-1",children:"Experience"}),K.jsxs("h5",{children:["Quantitative Analyst Intern, QCP Capital   ",K.jsx("small",{className:"text-muted",children:"Jun 2023 - Present"})]}),K.jsxs("p",{children:[K.jsx("a",{href:"http://qcp.capital",children:"QCP Capital"})," is a full-suite crypto trading firm and VC."]}),K.jsxs("ul",{children:[K.jsx("li",{children:"Creating and automating data collection pipelines for predictive modelling of cryptocurrency market volatility using Python."}),K.jsx("li",{children:"Predicting monthly and quarterly compressions in implied volatility using Python."})]}),K.jsxs("h5",{children:["Venture Analyst, QCP Capital   ",K.jsx("small",{className:"text-muted",children:"Mar 2022 - Feb 2023"})]}),K.jsxs("ul",{children:[K.jsx("li",{children:"Led due diligence and investment recommendations for 30+ companies, including 2 closed deals."}),K.jsx("li",{children:"Analyzed QCP Capital's book to gauge exposure and convinced management to adopt recommendations."}),K.jsx("li",{children:"Authored 4 research pieces on decentralized finance and DAO governance mechanics."})]}),K.jsxs("h5",{children:["Sustainability Consulting Intern, ST Engineering   ",K.jsx("small",{className:"text-muted",children:"May 2022 - Jul 2022"})]}),K.jsxs("p",{children:[K.jsx("a",{href:"http://stengg.com",children:"ST Engineering"})," is a Singaporean multinational technology and engineering group in the aerospace, smart city, defense, and public security sectors."]}),K.jsx("ul",{children:K.jsx("li",{children:"Authored a 20+ page report about AIoT-enabled smart cooling; presented findings to C-level executives."})}),K.jsxs("h5",{children:["Strategy Consulting Intern, TalentKraft   ",K.jsx("small",{className:"text-muted",children:"Nov 2021 - Mar 2022"})]}),K.jsxs("p",{children:[K.jsx("a",{href:"http://talentkraft.com",children:"TalentKraft"})," is a strategy consulting firm that helps organizations unlock value through HR."]}),K.jsxs("ul",{children:[K.jsx("li",{children:"Created an online HR diagnostic tool from scratch for top- and middle-of-funnel marketing."}),K.jsx("li",{children:"Prepared deliverables on organizational structure, competency mapping and employee sentiment for 3 clients."}),K.jsx("li",{children:"Created a manpower model predicting the future hiring needs for a major client with 500+ employees."})]}),K.jsxs("h5",{style:{marginBottom:"20px"},children:["Lieutenant, Singapore Armed Forces   ",K.jsx("small",{className:"text-muted",children:"Jan 2020 - Nov 2021"})]}),K.jsxs("ul",{children:[K.jsx("li",{children:"Selected from the top 10% of my Basic Military Training cohort to attend Officer Cadet School."}),K.jsx("li",{children:"Oversaw the training and welfare of 100+ transport operators on a daily basis."}),K.jsx("li",{children:"Digitized administrative and safety processes; convinced superiors to adopt new SOPs at the battalion level."}),K.jsx("li",{children:"Received a Diploma in Logistics from the Army Logistics Training Institute."})]})]}),K.jsxs("div",{children:[K.jsx("h2",{className:"pb-2 pt-1",children:"Activities"}),K.jsxs("h5",{children:["Venture Partner, Contrary   ",K.jsx("small",{className:"text-muted",children:"Oct 2022 - Present"})]}),K.jsxs("h5",{children:["Analyst, Harvard Undergraduate Capital Partners   ",K.jsx("small",{className:"text-muted",children:"Sep 2022 - Present"})]}),K.jsxs("p",{children:[K.jsx("a",{href:"https://contrary.com",children:"Contrary"})," is a $150M+ AUM venture fund, while ",K.jsx("a",{href:"https://www.harvardcap.org",children:"Harvard Undergraduate Capital Partners"})," sources and conducts diligence for partner VC firms with aggregate $245B+ AUM."]}),K.jsxs("ul",{children:[K.jsx("li",{children:"Sourced 50+ startups to date for 3 venture capital firms."}),K.jsx("li",{children:"Led a research project on the nuclear power industry with a16z's American Dynamism practice."})]}),K.jsxs("h5",{children:["President, SGExams   ",K.jsx("small",{className:"text-muted",children:"Jan 2021 - Aug 2022"})]}),K.jsxs("p",{children:[K.jsx("a",{href:"http://exams.sg",children:"SGExams"})," is a registered nonprofit that supports Singaporean students. It is Singapore's largest online student community with 100,000+ members and its largest student-run nonprofit."]}),K.jsxs("ul",{children:[K.jsx("li",{children:"Managed 100+ volunteers across 9 departments, and oversaw the planning and execution of 15+ events."}),K.jsx("li",{children:"Piloted a mentorship program with SGExams' highest engagement rate to date at 500+ active participants."}),K.jsx("li",{children:"Developed a financial roadmap, leveraging sponsorships to secure >$3,000 in recurring annual revenue."}),K.jsx("li",{children:"Completed a social impact accelerator by the National Youth Council and 500 Startups, raising >$10,000."})]})]}),K.jsxs("div",{children:[K.jsx("h2",{className:"pb-2 pt-1",children:"Skills"}),K.jsxs("div",{className:"row pb-1",children:[K.jsxs("div",{className:"col-md col-sm",children:[K.jsx("h5",{children:"Coding"}),K.jsx("p",{children:"C, Javascript, HTML, CSS, Python, Solidity."})]}),K.jsxs("div",{className:"col-md col-sm",children:[K.jsx("h5",{children:"Software"}),K.jsx("p",{children:"Photoshop, Illustrator, Figma, Excel."})]}),K.jsxs("div",{className:"col-md col-sm",children:[K.jsx("h5",{children:"Data Analytics"}),K.jsx("p",{children:"Python, R."})]})]})]}),K.jsxs("div",{style:{position:"fixed",bottom:"10px",right:"10px"},className:"d-flex flex-column p-3",children:[K.jsx("a",{style:{margin:"5px",filter:"drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2))"},href:"/",className:"btn btn-primary",children:"Back"}),K.jsx("a",{style:{margin:"5px",filter:"drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2))"},href:"https://drive.google.com/file/d/1Go7-pqE0nN2EV_mezr3A3iVTz3dRgj_O/view?usp=sharing",className:"btn btn-primary",target:"blank_",children:"Download"}),K.jsx(v1,{})]})]})}));function x1(){return K.jsx(cx,{children:K.jsxs(z0,{children:[K.jsx(Ga,{path:"/",element:K.jsx(p1,{})}),K.jsx(Ga,{path:"/featured",element:K.jsx(m1,{})}),K.jsx(Ga,{path:"/connect",element:K.jsx(g1,{})}),K.jsx(Ga,{path:"/resume",element:K.jsx(_1,{})})]})})}q_.createRoot(document.getElementById("root")).render(K.jsx(fe.StrictMode,{children:K.jsx(x1,{})}));
