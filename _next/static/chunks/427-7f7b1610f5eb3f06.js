(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[427],{3027:(e,t,r)=>{"use strict";var n=r(2115),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useState,u=n.useEffect,o=n.useLayoutEffect,l=n.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),i=n[0].inst,c=n[1];return o(function(){i.value=r,i.getSnapshot=t,s(i)&&c({inst:i})},[e,r,t]),u(function(){return s(i)&&c({inst:i}),e(function(){s(i)&&c({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},4236:(e,t,r)=>{"use strict";e.exports=r(3027)},4617:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=a(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=a(t,r));return t}(r)))}return e}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0!==(r=(function(){return i}).apply(t,[]))&&(e.exports=r)}()},9398:(e,t,r)=>{"use strict";r.d(t,{B:()=>d,I:()=>_,O:()=>l,S:()=>z,U:()=>o,a:()=>c,b:()=>a,c:()=>W,d:()=>$,e:()=>s,f:()=>B,g:()=>H,h:()=>U,i:()=>E,m:()=>f,o:()=>j,p:()=>I,s:()=>N,t:()=>O,u:()=>T,v:()=>V,z:()=>w});var n=r(2115),i=Object.prototype.hasOwnProperty;let a=new WeakMap,u=()=>{},o=u(),l=Object,s=e=>e===o,c=e=>"function"==typeof e,f=(e,t)=>({...e,...t}),d=e=>c(e.then),g={},p={},h="undefined",E=typeof window!=h,v=typeof document!=h,y=()=>E&&typeof window.requestAnimationFrame!=h,w=(e,t)=>{let r=a.get(e);return[()=>!s(t)&&e.get(t)||g,n=>{if(!s(t)){let i=e.get(t);t in p||(p[t]=i),r[5](t,f(i,n),i||g)}},r[6],()=>!s(t)&&t in p?p[t]:!s(t)&&e.get(t)||g]},m=!0,[b,R]=E&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[u,u],S={initFocus:e=>(v&&document.addEventListener("visibilitychange",e),b("focus",e),()=>{v&&document.removeEventListener("visibilitychange",e),R("focus",e)}),initReconnect:e=>{let t=()=>{m=!0,e()},r=()=>{m=!1};return b("online",t),b("offline",r),()=>{R("online",t),R("offline",r)}}},_=!n.useId,O=!E||"Deno"in globalThis,T=e=>y()?window.requestAnimationFrame(e):setTimeout(e,1),V=O?n.useEffect:n.useLayoutEffect,k="undefined"!=typeof navigator&&navigator.connection,C=!O&&k&&(["slow-2g","2g"].includes(k.effectiveType)||k.saveData),L=new WeakMap,A=(e,t)=>l.prototype.toString.call(e)==="[object ".concat(t,"]"),M=0,D=e=>{let t,r;let n=typeof e,i=A(e,"Date"),a=A(e,"RegExp"),u=A(e,"Object");if(l(e)!==e||i||a)t=i?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=L.get(e))return t;if(t=++M+"~",L.set(e,t),Array.isArray(e)){for(r=0,t="@";r<e.length;r++)t+=D(e[r])+",";L.set(e,t)}if(u){t="#";let n=l.keys(e).sort();for(;!s(r=n.pop());)s(e[r])||(t+=r+":"+D(e[r])+",");L.set(e,t)}}return t},N=e=>{if(c(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?D(e):"",t]},x=0,I=()=>++x;var U={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function j(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let[n,i,u,l]=t,g=f({populateCache:!0,throwOnError:!0},"boolean"==typeof l?{revalidate:l}:l||{}),p=g.populateCache,h=g.rollbackOnError,E=g.optimisticData,v=e=>"function"==typeof h?h(e):!1!==h,y=g.throwOnError;if(c(i)){let e=[];for(let t of n.keys())!/^\$(inf|sub)\$/.test(t)&&i(n.get(t)._k)&&e.push(t);return Promise.all(e.map(m))}return m(i);async function m(e){let r;let[i]=N(e);if(!i)return;let[l,f]=w(n,i),[h,m,b,R]=a.get(n),S=()=>{let t=h[i];return(c(g.revalidate)?g.revalidate(l().data,e):!1!==g.revalidate)&&(delete b[i],delete R[i],t&&t[0])?t[0](2).then(()=>l().data):l().data};if(t.length<3)return S();let _=u,O=I();m[i]=[O,0];let T=!s(E),V=l(),k=V.data,C=V._c,L=s(C)?k:C;if(T&&f({data:E=c(E)?E(L,k):E,_c:L}),c(_))try{_=_(L)}catch(e){r=e}if(_&&d(_)){if(_=await _.catch(e=>{r=e}),O!==m[i][0]){if(r)throw r;return _}r&&T&&v(r)&&(p=!0,f({data:L,_c:o}))}if(p&&!r&&(c(p)?f({data:p(_,L),error:o,_c:o}):f({data:_,error:o,_c:o})),m[i][1]=I(),Promise.resolve(S()).then(()=>{f({_c:o})}),r){if(y)throw r;return}return _}}let P=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},F=(e,t)=>{if(!a.has(e)){let r=f(S,t),n={},i=j.bind(o,e),l=u,s={},c=(e,t)=>{let r=s[e]||[];return s[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},d=(t,r,n)=>{e.set(t,r);let i=s[t];if(i)for(let e of i)e(r,n)},g=()=>{if(!a.has(e)&&(a.set(e,[n,{},{},{},i,d,c]),!O)){let t=r.initFocus(setTimeout.bind(o,P.bind(o,n,0))),i=r.initReconnect(setTimeout.bind(o,P.bind(o,n,1)));l=()=>{t&&t(),i&&i(),a.delete(e)}}};return g(),[e,i,g,l]}return[e,a.get(e)[4]]},[W,q]=F(new Map),$=f({onLoadingSlow:u,onSuccess:u,onError:u,onErrorRetry:(e,t,r,n,i)=>{let a=r.errorRetryCount,u=i.retryCount,o=~~((Math.random()+.5)*(1<<(u<8?u:8)))*r.errorRetryInterval;(s(a)||!(u>a))&&setTimeout(n,o,i)},onDiscarded:u,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:C?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:C?5e3:3e3,compare:function e(t,r){var n,a;if(t===r)return!0;if(t&&r&&(n=t.constructor)===r.constructor){if(n===Date)return t.getTime()===r.getTime();if(n===RegExp)return t.toString()===r.toString();if(n===Array){if((a=t.length)===r.length)for(;a--&&e(t[a],r[a]););return -1===a}if(!n||"object"==typeof t){for(n in a=0,t)if(i.call(t,n)&&++a&&!i.call(r,n)||!(n in r)||!e(t[n],r[n]))return!1;return Object.keys(r).length===a}}return t!=t&&r!=r},isPaused:()=>!1,cache:W,mutate:q,fallback:{}},{isOnline:()=>m,isVisible:()=>{let e=v&&document.visibilityState;return s(e)||"hidden"!==e}}),B=(e,t)=>{let r=f(e,t);if(t){let{use:n,fallback:i}=e,{use:a,fallback:u}=t;n&&a&&(r.use=n.concat(a)),i&&u&&(r.fallback=f(i,u))}return r},z=(0,n.createContext)({}),H=e=>{let{value:t}=e,r=(0,n.useContext)(z),i=c(t),a=(0,n.useMemo)(()=>i?t(r):t,[i,r,t]),u=(0,n.useMemo)(()=>i?a:B(r,a),[i,r,a]),l=a&&a.provider,s=(0,n.useRef)(o);l&&!s.current&&(s.current=F(l(u.cache||W),a));let d=s.current;return d&&(u.cache=d[0],u.mutate=d[1]),V(()=>{if(d)return d[2]&&d[2](),d[3]},[]),(0,n.createElement)(z.Provider,f(e,{value:u}))}},1862:(e,t,r)=>{"use strict";r.d(t,{Ht:()=>d,aw:()=>f,iX:()=>l,qm:()=>c});var n=r(9398),i=r(2115);let a=n.i&&window.__SWR_DEVTOOLS_USE__,u=a?window.__SWR_DEVTOOLS_USE__:[],o=e=>(0,n.a)(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],l=()=>(0,n.m)(n.d,(0,i.useContext)(n.S)),s=u.concat(e=>(t,r,i)=>{let a=r&&((...e)=>{let[i]=(0,n.s)(t),[,,,a]=n.b.get(n.c);if(i.startsWith("$inf$"))return r(...e);let u=a[i];return(0,n.e)(u)?r(...e):(delete a[i],u)});return e(t,a,i)}),c=e=>function(...t){let r=l(),[i,a,u]=o(t),c=(0,n.f)(r,u),f=e,{use:d}=c,g=(d||[]).concat(s);for(let e=g.length;e--;)f=g[e](f);return f(i,a||c.fetcher||null,c)},f=(e,t,r)=>{let n=t[e]||(t[e]=[]);return n.push(r),()=>{let e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}},d=(e,t)=>(...r)=>{let[n,i,a]=o(r),u=(a.use||[]).concat(t);return e(n,i,{...a,use:u})};a&&(window.__SWR_DEVTOOLS_REACT__=i)},7021:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>f,BE:()=>c});var n=r(2115),i=r(4236),a=r(9398),u=r(1862);let o=()=>{};o(),new WeakMap;let l=n.use||(e=>{switch(e.status){case"pending":throw e;case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}}),s={dedupe:!0},c=a.O.defineProperty(a.g,"defaultValue",{value:a.d}),f=(0,u.qm)((e,t,r)=>{let{cache:o,compare:c,suspense:f,fallbackData:d,revalidateOnMount:g,revalidateIfStale:p,refreshInterval:h,refreshWhenHidden:E,refreshWhenOffline:v,keepPreviousData:y}=r,[w,m,b,R]=a.b.get(o),[S,_]=(0,a.s)(e),O=(0,n.useRef)(!1),T=(0,n.useRef)(!1),V=(0,n.useRef)(S),k=(0,n.useRef)(t),C=(0,n.useRef)(r),L=()=>C.current,A=()=>L().isVisible()&&L().isOnline(),[M,D,N,x]=(0,a.z)(o,S),I=(0,n.useRef)({}).current,U=(0,a.e)(d)?(0,a.e)(r.fallback)?a.U:r.fallback[S]:d,j=(e,t)=>{for(let r in I)if("data"===r){if(!c(e[r],t[r])&&(!(0,a.e)(e[r])||!c(J,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},P=(0,n.useMemo)(()=>{let e=!!S&&!!t&&((0,a.e)(g)?!L().isPaused()&&!f&&!1!==p:g),r=t=>{let r=(0,a.m)(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=M(),i=x(),u=r(n),o=n===i?u:r(i),l=u;return[()=>{let e=r(M());return j(e,l)?(l.data=e.data,l.isLoading=e.isLoading,l.isValidating=e.isValidating,l.error=e.error,l):(l=e,e)},()=>o]},[o,S]),F=(0,i.useSyncExternalStore)((0,n.useCallback)(e=>N(S,(t,r)=>{j(r,t)||e()}),[o,S]),P[0],P[1]),W=!O.current,q=w[S]&&w[S].length>0,$=F.data,B=(0,a.e)($)?U&&(0,a.B)(U)?l(U):U:$,z=F.error,H=(0,n.useRef)(B),J=y?(0,a.e)($)?H.current:$:B,X=(!q||!!(0,a.e)(z))&&(W&&!(0,a.e)(g)?g:!L().isPaused()&&(f?!(0,a.e)(B)&&p:(0,a.e)(B)||p)),G=!!(S&&t&&W&&X),K=(0,a.e)(F.isValidating)?G:F.isValidating,Q=(0,a.e)(F.isLoading)?G:F.isLoading,Y=(0,n.useCallback)(async e=>{let t,n;let i=k.current;if(!S||!i||T.current||L().isPaused())return!1;let u=!0,o=e||{},l=!b[S]||!o.dedupe,s=()=>a.I?!T.current&&S===V.current&&O.current:S===V.current,f={isValidating:!1,isLoading:!1},d=()=>{D(f)},g=()=>{let e=b[S];e&&e[1]===n&&delete b[S]},p={isValidating:!0};(0,a.e)(M().data)&&(p.isLoading=!0);try{if(l&&(D(p),r.loadingTimeout&&(0,a.e)(M().data)&&setTimeout(()=>{u&&s()&&L().onLoadingSlow(S,r)},r.loadingTimeout),b[S]=[i(_),(0,a.p)()]),[t,n]=b[S],t=await t,l&&setTimeout(g,r.dedupingInterval),!b[S]||b[S][1]!==n)return l&&s()&&L().onDiscarded(S),!1;f.error=a.U;let e=m[S];if(!(0,a.e)(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return d(),l&&s()&&L().onDiscarded(S),!1;let o=M().data;f.data=c(o,t)?o:t,l&&s()&&L().onSuccess(t,S,r)}catch(r){g();let e=L(),{shouldRetryOnError:t}=e;!e.isPaused()&&(f.error=r,l&&s()&&(e.onError(r,S,e),(!0===t||(0,a.a)(t)&&t(r))&&(!L().revalidateOnFocus||!L().revalidateOnReconnect||A())&&e.onErrorRetry(r,S,e,e=>{let t=w[S];t&&t[0]&&t[0](a.h.ERROR_REVALIDATE_EVENT,e)},{retryCount:(o.retryCount||0)+1,dedupe:!0})))}return u=!1,d(),!0},[S,o]),Z=(0,n.useCallback)((...e)=>(0,a.o)(o,V.current,...e),[]);if((0,a.v)(()=>{k.current=t,C.current=r,(0,a.e)($)||(H.current=$)}),(0,a.v)(()=>{if(!S)return;let e=Y.bind(a.U,s),t=0,r=(0,u.aw)(S,w,(r,n={})=>{if(r==a.h.FOCUS_EVENT){let r=Date.now();L().revalidateOnFocus&&r>t&&A()&&(t=r+L().focusThrottleInterval,e())}else if(r==a.h.RECONNECT_EVENT)L().revalidateOnReconnect&&A()&&e();else if(r==a.h.MUTATE_EVENT)return Y();else if(r==a.h.ERROR_REVALIDATE_EVENT)return Y(n)});return T.current=!1,V.current=S,O.current=!0,D({_k:_}),X&&((0,a.e)(B)||a.t?e():(0,a.u)(e)),()=>{T.current=!0,r()}},[S]),(0,a.v)(()=>{let e;function t(){let t=(0,a.a)(h)?h(M().data):h;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!M().error&&(E||L().isVisible())&&(v||L().isOnline())?Y(s).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[h,E,v,S]),(0,n.useDebugValue)(J),f&&(0,a.e)(B)&&S){if(!a.I&&a.t)throw Error("Fallback data is required when using Suspense in SSR.");k.current=t,C.current=r,T.current=!1;let e=R[S];if((0,a.e)(e)||l(Z(e)),(0,a.e)(z)){let e=Y(s);(0,a.e)(J)||(e.status="fulfilled",e.value=!0),l(e)}else throw z}return{mutate:Z,get data(){return I.data=!0,J},get error(){return I.error=!0,z},get isValidating(){return I.isValidating=!0,K},get isLoading(){return I.isLoading=!0,Q}}})},3243:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(2115),i=r(1862),a=r(7021),u=r(9398);let o=u.I?e=>{e()}:n.startTransition,l=e=>{let[,t]=(0,n.useState)({}),r=(0,n.useRef)(!1),i=(0,n.useRef)(e),a=(0,n.useRef)({data:!1,error:!1,isValidating:!1}),o=(0,n.useCallback)(e=>{let n=!1,u=i.current;for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&u[t]!==e[t]&&(u[t]=e[t],a.current[t]&&(n=!0));n&&!r.current&&t({})},[]);return(0,u.v)(()=>(r.current=!1,()=>{r.current=!0})),[i,a.current,o]},s=(0,i.Ht)(a.Ay,()=>(e,t,r={})=>{let{mutate:a}=(0,i.iX)(),s=(0,n.useRef)(e),c=(0,n.useRef)(t),f=(0,n.useRef)(r),d=(0,n.useRef)(0),[g,p,h]=l({data:u.U,error:u.U,isMutating:!1}),E=g.current,v=(0,n.useCallback)(async(e,t)=>{let[r,n]=(0,u.s)(s.current);if(!c.current)throw Error("Can’t trigger the mutation: missing fetcher.");if(!r)throw Error("Can’t trigger the mutation: missing key.");let i=(0,u.m)((0,u.m)({populateCache:!1,throwOnError:!0},f.current),t),l=(0,u.p)();d.current=l,h({isMutating:!0});try{let t=await a(r,c.current(n,{arg:e}),(0,u.m)(i,{throwOnError:!0}));return d.current<=l&&(o(()=>h({data:t,isMutating:!1,error:void 0})),null==i.onSuccess||i.onSuccess.call(i,t,r,i)),t}catch(e){if(d.current<=l&&(o(()=>h({error:e,isMutating:!1})),null==i.onError||i.onError.call(i,e,r,i),i.throwOnError))throw e}},[]),y=(0,n.useCallback)(()=>{d.current=(0,u.p)(),h({data:u.U,error:u.U,isMutating:!1})},[]);return(0,u.v)(()=>{s.current=e,c.current=t,f.current=r}),{trigger:v,reset:y,get data(){return p.data=!0,E.data},get error(){return p.error=!0,E.error},get isMutating(){return p.isMutating=!0,E.isMutating}}})}}]);