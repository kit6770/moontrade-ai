(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{3027:(e,t,r)=>{"use strict";var n=r(2115),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,a=n.useEffect,u=n.useLayoutEffect,l=n.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var s="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=o({inst:{value:r,getSnapshot:t}}),i=n[0].inst,s=n[1];return u(function(){i.value=r,i.getSnapshot=t,c(i)&&s({inst:i})},[e,r,t]),a(function(){return c(i)&&s({inst:i}),e(function(){c(i)&&s({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:s},4236:(e,t,r)=>{"use strict";e.exports=r(3027)},4617:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=o(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=o(t,r));return t}(r)))}return e}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0!==(r=(function(){return i}).apply(t,[]))&&(e.exports=r)}()},860:(e,t,r)=>{"use strict";r.d(t,{BE:()=>B});var n=r(2115),i=(r(4236),Object.prototype.hasOwnProperty);let o=new WeakMap,a=()=>{},u=a(),l=Object,c=e=>e===u,s=e=>"function"==typeof e,f=(e,t)=>({...e,...t}),d=e=>s(e.then),p={},y={},v="undefined",g=typeof window!=v,h=typeof document!=v,w=()=>g&&typeof window.requestAnimationFrame!=v,b=(e,t)=>{let r=o.get(e);return[()=>!c(t)&&e.get(t)||p,n=>{if(!c(t)){let i=e.get(t);t in y||(y[t]=i),r[5](t,f(i,n),i||p)}},r[6],()=>!c(t)&&t in y?y[t]:!c(t)&&e.get(t)||p]},S=!0,[E,m]=g&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[a,a],_={initFocus:e=>(h&&document.addEventListener("visibilitychange",e),E("focus",e),()=>{h&&document.removeEventListener("visibilitychange",e),m("focus",e)}),initReconnect:e=>{let t=()=>{S=!0,e()},r=()=>{S=!1};return E("online",t),E("offline",r),()=>{m("online",t),m("offline",r)}}},O=(n.useId,!g||"Deno"in globalThis),k=O?n.useEffect:n.useLayoutEffect,R="undefined"!=typeof navigator&&navigator.connection,x=!O&&R&&(["slow-2g","2g"].includes(R.effectiveType)||R.saveData),T=new WeakMap,j=(e,t)=>l.prototype.toString.call(e)==="[object ".concat(t,"]"),L=0,A=e=>{let t,r;let n=typeof e,i=j(e,"Date"),o=j(e,"RegExp"),a=j(e,"Object");if(l(e)!==e||i||o)t=i?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=T.get(e))return t;if(t=++L+"~",T.set(e,t),Array.isArray(e)){for(r=0,t="@";r<e.length;r++)t+=A(e[r])+",";T.set(e,t)}if(a){t="#";let n=l.keys(e).sort();for(;!c(r=n.pop());)c(e[r])||(t+=r+":"+A(e[r])+",");T.set(e,t)}}return t},D=e=>{if(s(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?A(e):"",t]},C=0,M=()=>++C;async function P(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let[n,i,a,l]=t,p=f({populateCache:!0,throwOnError:!0},"boolean"==typeof l?{revalidate:l}:l||{}),y=p.populateCache,v=p.rollbackOnError,g=p.optimisticData,h=e=>"function"==typeof v?v(e):!1!==v,w=p.throwOnError;if(s(i)){let e=[];for(let t of n.keys())!/^\$(inf|sub)\$/.test(t)&&i(n.get(t)._k)&&e.push(t);return Promise.all(e.map(S))}return S(i);async function S(e){let r;let[i]=D(e);if(!i)return;let[l,f]=b(n,i),[v,S,E,m]=o.get(n),_=()=>{let t=v[i];return(s(p.revalidate)?p.revalidate(l().data,e):!1!==p.revalidate)&&(delete E[i],delete m[i],t&&t[0])?t[0](2).then(()=>l().data):l().data};if(t.length<3)return _();let O=a,k=M();S[i]=[k,0];let R=!c(g),x=l(),T=x.data,j=x._c,L=c(j)?T:j;if(R&&f({data:g=s(g)?g(L,T):g,_c:L}),s(O))try{O=O(L)}catch(e){r=e}if(O&&d(O)){if(O=await O.catch(e=>{r=e}),k!==S[i][0]){if(r)throw r;return O}r&&R&&h(r)&&(y=!0,f({data:L,_c:u}))}if(y&&!r&&(s(y)?f({data:y(O,L),error:u,_c:u}):f({data:O,error:u,_c:u})),S[i][1]=M(),Promise.resolve(_()).then(()=>{f({_c:u})}),r){if(w)throw r;return}return O}}let W=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},I=(e,t)=>{if(!o.has(e)){let r=f(_,t),n={},i=P.bind(u,e),l=a,c={},s=(e,t)=>{let r=c[e]||[];return c[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},d=(t,r,n)=>{e.set(t,r);let i=c[t];if(i)for(let e of i)e(r,n)},p=()=>{if(!o.has(e)&&(o.set(e,[n,{},{},{},i,d,s]),!O)){let t=r.initFocus(setTimeout.bind(u,W.bind(u,n,0))),i=r.initReconnect(setTimeout.bind(u,W.bind(u,n,1)));l=()=>{t&&t(),i&&i(),o.delete(e)}}};return p(),[e,i,p,l]}return[e,o.get(e)[4]]},[V,F]=I(new Map),N=f({onLoadingSlow:a,onSuccess:a,onError:a,onErrorRetry:(e,t,r,n,i)=>{let o=r.errorRetryCount,a=i.retryCount,u=~~((Math.random()+.5)*(1<<(a<8?a:8)))*r.errorRetryInterval;(c(o)||!(a>o))&&setTimeout(n,u,i)},onDiscarded:a,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:x?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:x?5e3:3e3,compare:function e(t,r){var n,o;if(t===r)return!0;if(t&&r&&(n=t.constructor)===r.constructor){if(n===Date)return t.getTime()===r.getTime();if(n===RegExp)return t.toString()===r.toString();if(n===Array){if((o=t.length)===r.length)for(;o--&&e(t[o],r[o]););return -1===o}if(!n||"object"==typeof t){for(n in o=0,t)if(i.call(t,n)&&++o&&!i.call(r,n)||!(n in r)||!e(t[n],r[n]))return!1;return Object.keys(r).length===o}}return t!=t&&r!=r},isPaused:()=>!1,cache:V,mutate:F,fallback:{}},{isOnline:()=>S,isVisible:()=>{let e=h&&document.visibilityState;return c(e)||"hidden"!==e}}),$=(e,t)=>{let r=f(e,t);if(t){let{use:n,fallback:i}=e,{use:o,fallback:a}=t;n&&o&&(r.use=n.concat(o)),i&&a&&(r.fallback=f(i,a))}return r},J=(0,n.createContext)({}),U=g&&window.__SWR_DEVTOOLS_USE__;(U?window.__SWR_DEVTOOLS_USE__:[]).concat(e=>(t,r,n)=>{let i=r&&((...e)=>{let[n]=D(t),[,,,i]=o.get(V);if(n.startsWith("$inf$"))return r(...e);let a=i[n];return c(a)?r(...e):(delete i[n],a)});return e(t,i,n)}),U&&(window.__SWR_DEVTOOLS_REACT__=n);let q=()=>{};q(),new WeakMap,n.use||(e=>{switch(e.status){case"pending":throw e;case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}});let B=l.defineProperty(e=>{let{value:t}=e,r=(0,n.useContext)(J),i=s(t),o=(0,n.useMemo)(()=>i?t(r):t,[i,r,t]),a=(0,n.useMemo)(()=>i?o:$(r,o),[i,r,o]),l=o&&o.provider,c=(0,n.useRef)(u);l&&!c.current&&(c.current=I(l(a.cache||V),o));let d=c.current;return d&&(a.cache=d[0],a.mutate=d[1]),k(()=>{if(d)return d[2]&&d[2](),d[3]},[]),(0,n.createElement)(J.Provider,f(e,{value:a}))},"defaultValue",{value:N})}}]);