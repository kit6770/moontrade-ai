(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1359:(e,l,t)=>{Promise.resolve().then(t.bind(t,287))},287:(e,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>P});var s=t(5155),i=t(209),n=t(1923),r=t(2238),a=t(4617),o=t.n(a),d=t(2115),x=t(7021),c=t(3243),u=t(7053),p=t(1567),h=t(8173),m=t.n(h),v=t(3469);function f(){var e;let l=null===(e=(0,v.O2)())||void 0===e?void 0:e.isMobile,{data:t}=(0,x.Ay)("timeType",{fallbackData:"5m"}),{trigger:i,isMutating:n}=(0,c.A)("api:/trending_tokens/rank"),[r,a]=(0,d.useState)([]),o=()=>{i({method:"POST",body:JSON.stringify({category:t,offset:0,limit:20})}).then(e=>{if(e&&e.length>0){var l;a(e),p(null===(l=e[0])||void 0===l?void 0:l.token_address)}})};(0,d.useEffect)(()=>{if(a([]),t){o();let e=setInterval(()=>{o()},6e4);return()=>clearInterval(e)}},[t]);let{trigger:p}=(0,c.A)("selectedToken");return(0,s.jsxs)("div",{className:"relative flex flex-auto flex-col gap-[16px] h-full overflow-auto pb-[150px] md:pr-[16px]",style:{height:"calc(100vh - 144px)"},children:[null==r?void 0:r.map((e,t)=>l?(0,s.jsx)("div",{className:"relative",onClick:()=>p(null==e?void 0:e.token_address),children:(0,s.jsx)(m(),{href:"/summary",className:"relative",children:(0,s.jsx)(g,{...e,index:t})})},null==e?void 0:e.id):(0,s.jsx)("div",{className:"relative",onClick:()=>p(null==e?void 0:e.token_address),children:(0,s.jsx)(g,{...e,index:t})},null==e?void 0:e.id)),n&&(0,s.jsx)(u.A,{})]})}function g(e){var l;let{data:t}=(0,x.Ay)("selectedToken");return(0,s.jsxs)("div",{className:o()("relative flex flex-col gap-[16px] rounded-[20px] p-[20px] shadow-[0_4px_12px_0_rgba(0,0,0,0.06)] transition-colors duration-300 cursor-pointer","border-[2px] hover:border-[#C8FF00] hover:bg-[#FBFFEC]",(null==t?void 0:t.toLowerCase())===(null==e?void 0:null===(l=e.token_address)||void 0===l?void 0:l.toLowerCase())?"border-[#C8FF00] bg-[#FBFFEC]":"border-[#F1F1F1] bg-[#FFFFFF]"),children:[(0,s.jsxs)("div",{className:"absolute top-[-1px] left-[-1px] bg-black text-[#C8FF00] text-[14px] font-medium rounded-tl-[20px] rounded-br-[20px] px-[12px] h-[24px] flex items-center justify-center",children:["# ",(null==e?void 0:e.index)+1]}),(0,s.jsx)(j,{...e}),(0,s.jsx)(b,{...e}),(0,s.jsx)(w,{...e})]})}function j(e){return(0,s.jsxs)("div",{className:"w-full flex-1 flex flex-row gap-[16px]",children:[(0,s.jsxs)("div",{className:"relative w-[64px] h-[64px]",children:[(null==e?void 0:e.logo)&&(null==e?void 0:e.logo)!==""?(0,s.jsx)("img",{src:null==e?void 0:e.logo,width:64,height:64,className:"rounded-full w-[64] h-[64] bg-gray-500",alt:""}):(0,s.jsx)("div",{className:"rounded-full w-[64] h-[64] bg-gray-500"}),(0,s.jsx)("img",{src:n.o+"/image/solana.png",alt:"",width:20,height:20,className:"rounded-full absolute bottom-0 right-0"})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-[8px]",children:[(0,s.jsxs)("div",{className:"text-[18px] flex flex-row gap-[4px] items-center",children:[(0,s.jsx)("div",{className:"text-[24px] font-bold",children:null==e?void 0:e.symbol}),(0,s.jsx)("div",{className:"text-[12px] text-black",children:"Ultra Sigma \xb7 ".concat((0,p.M0)(null==e?void 0:e.token_address))})]}),(0,s.jsxs)("div",{className:"text-[12px] font-semibold text-[#666] flex flex-row gap-[6px] justify-start flex-wrap",children:[(0,s.jsxs)("div",{className:"flex items-center justify-center px-[4px] bg-[#EAEAEA] rounded-[6px] h-[22px] min-w-[22px] gap-[4px]",children:[(0,s.jsx)(r._K,{}),(0,s.jsx)("div",{children:"From: Trump"}),(0,s.jsxs)("div",{className:"relative w-[23px]",children:[(0,s.jsx)("div",{className:"w-[18px] h-[18px] rounded-full bg-[#666]"}),(0,s.jsx)("div",{className:"absolute bottom-0 left-[14px] w-[10px] h-[10px] rounded-full flex items-center justify-center bg-black overflow-hidden",children:(0,s.jsx)(r.yY,{})})]})]}),(0,s.jsxs)("div",{className:"flex items-center justify-center px-[4px] bg-[#EAEAEA] rounded-[6px] h-[22px] min-w-[22px] gap-[4px]",children:[(0,s.jsx)(r.WS,{}),(0,p.fF)(null==e?void 0:e.publish_time)]}),(null==e?void 0:e.launch_plat_name)&&(null==e?void 0:e.launch_plat_name)!==""&&(0,s.jsx)("div",{className:"flex items-center justify-center px-[4px] bg-[#EAEAEA] rounded-[6px] h-[22px] min-w-[22px]",children:(0,s.jsx)("img",{src:n.o+"/image/pump.png",width:16,height:16,alt:""})}),(null==e?void 0:e.twitter_link)&&(null==e?void 0:e.twitter_link)!==""&&(0,s.jsx)("div",{className:"flex items-center justify-center px-[4px] bg-[#EAEAEA] rounded-[6px] h-[22px] min-w-[22px]",children:(0,s.jsx)(r.Fi,{color:"#666666",className:"scale-[0.6]",onClick:()=>{window.open(null==e?void 0:e.twitter_link,"_blank")}})}),(null==e?void 0:e.home_page)&&(null==e?void 0:e.home_page)!==""&&(0,s.jsx)("div",{className:"flex items-center justify-center px-[4px] bg-[#EAEAEA] rounded-[6px] h-[22px] min-w-[22px]",children:(0,s.jsx)(r.Vz,{onClick:()=>{window.open(null==e?void 0:e.home_page,"_blank")}})}),(null==e?void 0:e.telegram_link)&&(null==e?void 0:e.telegram_link)!==""&&(0,s.jsx)("div",{className:"flex items-center justify-center px-[4px] bg-[#EAEAEA] rounded-[6px] h-[22px] min-w-[22px]",children:(0,s.jsx)(r.hZ,{onClick:()=>{window.open(null==e?void 0:e.telegram_link,"_blank")}})})]})]})]})}function b(e){let l=[{title:"SmartMoney",type:"smartmoney",icon:(0,s.jsx)(r.dK,{}),value:null==e?void 0:e.smart_wallet_count,isPositive:null==e?void 0:e.smart_wallet_count_change,change:null==e?void 0:e.smart_wallet_count_change},{title:"Feeds",type:"feeds",icon:(0,s.jsx)(r.LC,{}),value:null==e?void 0:e.x_feed_num,isPositive:null==e?void 0:e.x_feed_num_change,change:null==e?void 0:e.x_feed_num_change},{title:"MC",type:"mc",icon:(0,s.jsx)(r.EH,{}),value:null==e?void 0:e.market_value,isPositive:null==e?void 0:e.market_value_change,change:null==e?void 0:e.market_value_change}];return(0,s.jsx)("div",{className:"flex flex-row justify-start gap-[16px] flex-wrap cursor-pointer",children:null==l?void 0:l.map(e=>(0,s.jsxs)("div",{className:o()("flex flex-row gap-[4px] justify-center p-[8px] h-[51px] rounded-[6px]",(null==e?void 0:e.type)!=="mc"&&"hover:bg-[#F2FEC5]"),children:[null==e?void 0:e.icon,(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:"text-[12px] font-semibold",children:null==e?void 0:e.title}),(0,s.jsxs)("div",{className:"flex flex-row items-center gap-[4px] text-[16px]",children:[(0,s.jsx)("div",{className:"font-bold text-[#000]",children:(0,p.ZV)(null==e?void 0:e.value)}),(null==e?void 0:e.change)?(0,s.jsx)("div",{className:o()((null==e?void 0:e.isPositive)?"text-[#00B953]":"text-[#FF543D]"),children:null==e?void 0:e.change}):""]})]})]},null==e?void 0:e.title))})}function w(e){var l;return(0,s.jsxs)("div",{className:"flex flex-row justify-between gap-[16px] items-center",children:[(0,s.jsx)(N,{text:null!==(l=null==e?void 0:e.description)&&void 0!==l?l:""}),(0,s.jsxs)("div",{className:"flex flex-row gap-[10px]",children:[(0,s.jsx)("div",{className:"relative inline-block group",children:(0,s.jsxs)("div",{className:"bg-[#ECECEC] rounded-[6px] p-[4px] w-[30px] h-[30px]",children:[(0,s.jsx)("div",{className:"bg-black rounded-[3px] w-full h-full flex items-center justify-center",children:(0,s.jsx)(r.f,{className:"scale-[1.5]"})}),(0,s.jsxs)("div",{className:"whitespace-nowrap absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-black text-white text-[14px] px-2 py-1 rounded-[6px]",children:["Coming soon...",(0,s.jsx)("div",{className:"absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-t-black border-l-transparent border-r-transparent"})]})]})}),(0,s.jsx)("div",{className:"relative inline-block group",children:(0,s.jsxs)("div",{className:"bg-[#ECECEC] rounded-[6px] p-[4px] w-[30px] h-[30px]",children:[(0,s.jsx)("img",{src:n.o+"/image/logo_1.png",width:22,height:22,alt:""}),(0,s.jsxs)("div",{className:"whitespace-nowrap absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-black text-white text-[14px] px-2 py-1 rounded-[6px]",children:["Coming soon...",(0,s.jsx)("div",{className:"absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-t-black border-l-transparent border-r-transparent"})]})]})})]})]})}let N=e=>{let{text:l}=e,[t,i]=(0,d.useState)(!1),[n,r]=(0,d.useState)(!1),a=d.useRef(null);return(0,d.useEffect)(()=>{if(a.current){var e;let l=a.current.offsetHeight;(null===(e=a.current)||void 0===e?void 0:e.scrollHeight)>l?r(!0):r(!1)}},[a.current]),(0,s.jsxs)("div",{className:"flex flex-row w-full text-[14px] mr-[16px]",children:[(0,s.jsx)("div",{ref:a,style:{lineHeight:"20px",wordBreak:"break-all"},className:o()("flex-1",t?"":"line-clamp-1"),children:l}),n&&(0,s.jsx)("div",{className:"underline underline-offset-1 cursor-pointer",onClick:()=>i(!t),children:t?"less":"more"})]})},y=e=>localStorage.getItem(e),k=(e,l)=>{localStorage.setItem(e,l)},_=e=>{localStorage.removeItem(e)},F=e=>(l,t,s)=>e(l,async(e,t)=>null==l?null:(t&&(null===t.arg||void 0===t.arg?await _(l):await k(l,t.arg)),y(l)),s),E=e=>(l,t,s)=>"string"==typeof l&&l.startsWith("api:/")?e(l,async(e,t)=>{var s,i,n;let r=await y("apiAccessToken"),a="https://luckycoin.im/dex-api/client/r0"+l.substring(4),o={...null!==(i=null==t?void 0:t.arg)&&void 0!==i?i:{},headers:{"Content-Type":"application/json",...null!==(n=null==t?void 0:null===(s=t.arg)||void 0===s?void 0:s.headers)&&void 0!==n?n:{}}};return r&&(o.headers.Authorization="Bearer ".concat(r)),o.body instanceof FormData&&delete o.headers["Content-Type"],(await fetch(a,o)).json()},s):e(l,t,s),C=e=>(l,t,s)=>"string"==typeof l&&(l.toLowerCase().startsWith("http://")||l.toLowerCase().startsWith("https://"))?e(l,async(e,t)=>{var s;return fetch(l,{...null!==(s=null==t?void 0:t.arg)&&void 0!==s?s:{}})},s):e(l,t,s);function A(e){let{children:l}=e;return l}async function T(){for(var e=arguments.length,l=Array(e),t=0;t<e;t++)l[t]=arguments[t];return console.log("%cSWR FETCHER %o","font-size:64px;background:#fff;",l),Promise.resolve()}function S(e){let{children:l}=e;return(0,s.jsx)(x.BE,{value:{fetcher:T,use:[F,C,E],provider:e=>(globalThis.$_$=e,e)},children:(0,s.jsx)(A,{children:l})})}function P(){return(0,s.jsx)(S,{children:(0,s.jsxs)("main",{className:"h-screen overflow-hidden",children:[(0,s.jsx)(B,{}),(0,s.jsx)(I,{})]})})}function B(){return(0,s.jsxs)("header",{className:"flex flex-row h-[80px] bg-white justify-between items-stretch border-b border-[#F3F3F3] lg:min-w-[1176px]",children:[(0,s.jsxs)("div",{className:"flex items-center gap-[16px] px-[16px]",children:[(0,s.jsx)(r.Gy,{}),(0,s.jsx)("div",{className:"text-[18px] font-semibold",children:"AI Rank"})]}),(0,s.jsx)("div",{className:"flex items-center gap-[16px] px-[16px]",children:(0,s.jsx)("button",{className:"font-semibold bg-[#C8FF00] text-black text-[16px] rounded-[12px] px-[20px] h-[50px] opacity-50 cursor-not-allowed",children:"Login"})})]})}function I(){var e;let l=null===(e=(0,v.O2)())||void 0===e?void 0:e.isMobile;return(0,s.jsxs)("div",{className:"flex flex-col lg:w-[1176px] px-[10px] mx-auto gap-[16px]",children:[(0,s.jsx)("h2",{className:"text-[32px] font-semibold text-center py-[16px]",children:"Trending Tokens Powered By AI"}),(0,s.jsx)(O,{}),(0,s.jsxs)("section",{className:"flex flex-row justify-start items-start",children:[(0,s.jsx)(f,{}),l?null:(0,s.jsx)(i.A,{})]})]})}function L(e){let{value:l,defaultChecked:t=!1}=e,{trigger:i}=(0,c.A)("timeType");return(0,d.useEffect)(()=>{i("5m")},[]),(0,s.jsxs)("label",{className:"cursor-pointer flex flex-1 justify-stretch items-center",children:[(0,s.jsx)("input",{type:"radio",className:"peer hidden",name:"time-tab",value:l,defaultChecked:t,onChange:e=>{i(e.target.value)}}),(0,s.jsx)("div",{className:o()("text-center w-full h-full flex items-center justify-center text-[#666666] rounded-[8px] text-[16px] font-semibold transition-all duration-300","peer-checked:text-[#000000] peer-checked:bg-white","hover:bg-white hover:text-[#000000]"),children:l})]})}function O(){return(0,s.jsxs)("div",{className:"flex flex-row justify-between gap-[19px] h-[48px] leading-[48px]",children:[(0,s.jsxs)("div",{className:"flex flex-auto flex-row justify-between items-stretch bg-[#F6F6F6] rounded-[12px] p-[4px] gap-[4px]",children:[(0,s.jsx)(L,{value:"5m",defaultChecked:!0}),(0,s.jsx)(L,{value:"1h"}),(0,s.jsx)(L,{value:"6h"}),(0,s.jsx)(L,{value:"24h"})]}),(0,s.jsx)("div",{className:"flex items-center justify-center bg-[#F6F6F6] lg:w-[175px] px-[10px] rounded-[12px] opacity-50",children:(0,s.jsx)("div",{className:"w-full text-center text-[16px] text-black font-semibold opacity-50 cursor-not-allowed",children:"Filter"})})]})}}},e=>{var l=l=>e(e.s=l);e.O(0,[427,173,209,441,517,358],()=>l(1359)),_N_E=e.O()}]);