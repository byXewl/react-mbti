(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[336],{1101:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/result",function(){return n(4974)}])},4974:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Y});var i=n(7876),s=n(9099),r=n(4232),l=n(8390),c=n(7477),a=n(9255),o=n(7692),d=(e,t)=>{var n;return(null==(n=null==e?void 0:e.breakpoints)?void 0:n[t])??t};function h(e){let{breakpoint:t,hide:n,children:i,ssr:s}=e,[l]=function(e,t={}){let{ssr:n=!0,fallback:i}=t,s=(0,o.O)(),l=Array.isArray(e)?e:[e],c=Array.isArray(i)?i:[i];c=c.filter(e=>null!=e);let[a,d]=(0,r.useState)(()=>l.map((e,t)=>({media:e,matches:n?!!c[t]:s.window.matchMedia(e).matches})));return(0,r.useEffect)(()=>{d(l.map(e=>({media:e,matches:s.window.matchMedia(e).matches})));let e=l.map(e=>s.window.matchMedia(e)),t=e=>{d(t=>t.slice().map(t=>t.media===e.media?{...t,matches:e.matches}:t))};return e.forEach(e=>{"function"==typeof e.addListener?e.addListener(t):e.addEventListener("change",t)}),()=>{e.forEach(e=>{"function"==typeof e.removeListener?e.removeListener(t):e.removeEventListener("change",t)})}},[s.window]),a.map(e=>e.matches)}(t,{ssr:s});return(n?!l:l)?i:null}function u(e){let{children:t,ssr:n}=e,i=function(e){let{breakpoint:t="",below:n,above:i}=e,s=(0,a.DP)(),r=d(s,n),l=d(s,i),c=t;return r?c=`(max-width: ${r})`:l&&(c=`(min-width: ${l})`),c}(e);return r.createElement(h,{breakpoint:i,ssr:n},t)}u.displayName="Show";var p=n(2214),m=n(4587),g=n.n(m),x=n(966),f=n(9288),j=(...e)=>e.filter(Boolean).join(" "),[y,v]=(0,f.q)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),b=(0,a.Rf)((e,t)=>{let n=(0,a.o5)("Table",e),{className:i,...s}=(0,x.MN)(e);return r.createElement(y,{value:n},r.createElement(a.Bv.table,{ref:t,__css:n.table,className:j("chakra-table",i),...s}))});b.displayName="Table",(0,a.Rf)((e,t)=>{let{overflow:n,overflowX:i,className:s,...l}=e;return r.createElement(a.Bv.div,{ref:t,className:j("chakra-table__container",s),...l,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:n??i??"auto",overflowY:"hidden",maxWidth:"100%"}})}),(0,a.Rf)((e,t)=>{let{placement:n="bottom",...i}=e,s=v();return r.createElement(a.Bv.caption,{...i,ref:t,__css:{...s.caption,captionSide:n}})}).displayName="TableCaption",(0,a.Rf)((e,t)=>{let n=v();return r.createElement(a.Bv.thead,{...e,ref:t,__css:n.thead})});var A=(0,a.Rf)((e,t)=>{let n=v();return r.createElement(a.Bv.tbody,{...e,ref:t,__css:n.tbody})});(0,a.Rf)((e,t)=>{let n=v();return r.createElement(a.Bv.tfoot,{...e,ref:t,__css:n.tfoot})});var E=(0,a.Rf)(({isNumeric:e,...t},n)=>{let i=v();return r.createElement(a.Bv.th,{...t,ref:n,__css:i.th,"data-is-numeric":e})}),w=(0,a.Rf)((e,t)=>{let n=v();return r.createElement(a.Bv.tr,{...e,ref:t,__css:n.tr})}),S=(0,a.Rf)(({isNumeric:e,...t},n)=>{let i=v();return r.createElement(a.Bv.td,{...t,ref:n,__css:i.td,"data-is-numeric":e})}),_=n(1560);function k(e){let t=(0,_.k1)(e.testResult.testScores);return(0,i.jsxs)(c.so,{my:4,w:{base:"full",lg:"50%"},h:"full",px:8,gap:4,alignItems:"center",direction:"column",children:[(0,i.jsx)(c.DZ,{id:t.type,as:"h1",textAlign:"center",children:(0,i.jsx)(c.f4,{query:t.type,styles:{color:"primary.500"},children:"".concat(t.type)})}),(0,i.jsx)(g(),{alt:"illustration",src:"/images/mbti/".concat(t.type.toLocaleUpperCase(),".png"),width:200,height:200}),(0,i.jsx)(c.DZ,{scrollMarginTop:8,id:"description",as:"h2",my:8,fontSize:"xl",textAlign:"center",children:t.epithet}),t.description.split(/\.\n+/g).map(e=>e.endsWith(".")?e:"".concat(e,".")).map((e,t)=>(0,i.jsx)(c.EY,{textAlign:"justify",children:"".concat(e)},t)),(0,i.jsx)(c.DZ,{scrollMarginTop:8,id:"jungian-functional-preference-ordering",my:4,as:"h2",size:"md",textAlign:"center",children:"荣格功能偏好排序"}),(0,i.jsx)(b,{children:(0,i.jsxs)(A,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(E,{children:"主导功能"}),(0,i.jsx)(S,{children:t.jungianFunctionalPreference.dominant})]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(E,{children:"辅助功能"}),(0,i.jsx)(S,{children:t.jungianFunctionalPreference.auxiliary})]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(E,{children:"第三功能"}),(0,i.jsx)(S,{children:t.jungianFunctionalPreference.tertiary})]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(E,{children:"劣势功能"}),(0,i.jsx)(S,{children:t.jungianFunctionalPreference.inferior})]})]})}),(0,i.jsx)(c.DZ,{scrollMarginTop:8,id:"general-traits",my:4,as:"h2",size:"md",textAlign:"center",children:"".concat(t.type," 总体特质")}),(0,i.jsx)(c.Xy,{w:"full",children:t.generalTraits.map((e,t)=>(0,i.jsx)(c.ck,{my:2,textAlign:"justify",children:e},t))}),(0,i.jsx)(c.DZ,{scrollMarginTop:8,id:"relationship-strengths",my:4,as:"h2",size:"md",textAlign:"center",children:"人际关系优点"}),(0,i.jsx)(c.Xy,{w:"full",children:t.relationshipStrengths.map((e,t)=>(0,i.jsx)(c.ck,{my:2,textAlign:"justify",children:e},t))}),(0,i.jsx)(c.DZ,{scrollMarginTop:8,id:"relationship-weaknesses",my:4,as:"h2",size:"md",textAlign:"center",children:"人际关系不足"}),(0,i.jsx)(c.Xy,{w:"full",children:t.relationshipWeaknesses.map((e,t)=>(0,i.jsx)(c.ck,{my:2,textAlign:"justify",children:e},t))}),(0,i.jsx)(c.DZ,{scrollMarginTop:8,id:"success-definition",my:4,as:"h2",size:"md",textAlign:"center",children:"成功定义"}),t.successDefinition.split(/\.\n+/g).map(e=>e.endsWith(".")?e:"".concat(e,".")).map((e,t)=>(0,i.jsx)(c.EY,{textAlign:"justify",children:"".concat(e)},t)),(0,i.jsx)(c.DZ,{scrollMarginTop:8,id:"strengths",my:4,as:"h2",size:"md",textAlign:"center",children:"优势"}),(0,i.jsx)(c.Xy,{w:"full",children:t.strengths.map((e,t)=>(0,i.jsx)(c.ck,{my:2,textAlign:"justify",children:e},t))}),(0,i.jsx)(c.DZ,{scrollMarginTop:8,id:"special-gifts",my:4,as:"h2",size:"md",textAlign:"center",children:"特殊天赋"}),(0,i.jsx)(c.Xy,{w:"full",children:t.gifts.map((e,t)=>(0,i.jsx)(c.ck,{my:2,textAlign:"justify",children:e},t))}),(0,i.jsx)(c.DZ,{scrollMarginTop:8,id:"potential-problem-areas",my:4,as:"h2",size:"md",textAlign:"center",children:"潜在问题领域"}),1===t.potentialProblemAreas.length?t.potentialProblemAreas[0].split(/\.\n+/g).map(e=>e.endsWith(".")?e:"".concat(e,".")).map((e,t)=>(0,i.jsx)(c.EY,{textAlign:"justify",alignSelf:"start",children:"".concat(e)},t)):(0,i.jsx)(c.Xy,{w:"full",children:t.potentialProblemAreas.map((e,t)=>(0,i.jsx)(c.ck,{my:2,textAlign:"justify",children:e},t))}),(0,i.jsx)(c.DZ,{scrollMarginTop:8,id:"explanation-of-problems",my:4,as:"h2",size:"md",textAlign:"center",children:"问题解释"}),t.explanationOfProblems.split(/\.\n+/g).map(e=>e.endsWith(".")?e:"".concat(e,".")).map((e,t)=>(0,i.jsx)(c.EY,{textAlign:"justify",alignSelf:"start",children:"".concat(e)},t)),(0,i.jsx)(c.DZ,{scrollMarginTop:8,id:"solutions",my:4,as:"h2",size:"md",textAlign:"center",children:"解决方案"}),t.solutions.split(/\.\n+/g).map(e=>e.endsWith(".")?e:"".concat(e,".")).map((e,t)=>(0,i.jsx)(c.EY,{textAlign:"justify",alignSelf:"start",children:"".concat(e)},t)),(0,i.jsx)(c.DZ,{scrollMarginTop:8,id:"living-happily-tips",my:4,as:"h2",size:"md",textAlign:"center",children:"快乐生活小提示"}),t.livingHappilyTips.split(/\.\n+/g).map(e=>e.endsWith(".")?e:"".concat(e,".")).map((e,t)=>(0,i.jsx)(c.EY,{textAlign:"justify",alignSelf:"start",children:"".concat(e)},t)),void 0!==t.suggestions&&1===t.suggestions.length&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.DZ,{scrollMarginTop:8,id:"specific-suggestions",my:4,as:"h2",size:"md",textAlign:"center",children:"具体建议"}),t.suggestions[0].split(/\.\n+/g).map(e=>e.endsWith(".")?e:"".concat(e,".")).map((e,t)=>(0,i.jsx)(c.EY,{textAlign:"justify",alignSelf:"start",children:"".concat(e)},t))]}),void 0!==t.suggestions&&t.suggestions.length>1&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.DZ,{scrollMarginTop:8,id:"specific-suggestions",my:4,as:"h2",size:"md",textAlign:"center",children:"具体建议"}),(0,i.jsx)(c.Xy,{w:"full",children:t.suggestions.map((e,t)=>(0,i.jsx)(c.ck,{my:2,textAlign:"justify",children:e},t))})]}),(0,i.jsx)(c.DZ,{scrollMarginTop:8,id:"ten-rules-to-live-to-achieve-success",my:4,as:"h2",size:"md",textAlign:"center",children:"实现成功的生活十则"}),(0,i.jsx)(c.Xy,{w:"full",children:t.tenRulesToLive.map((e,t)=>(0,i.jsx)(c.ck,{my:2,textAlign:"justify",children:e},t))})]})}var T=n(8230),D=n.n(T);function M(){let{activeId:e,setActiveId:t}=function(){let e=(0,r.useRef)(),[t,n]=(0,r.useState)("");return(0,r.useEffect)(()=>(e.current=new IntersectionObserver(e=>{e.forEach(e=>{(null==e?void 0:e.isIntersecting)&&n(e.target.id)})},{rootMargin:"-20% 0% -35% 0px"}),document.querySelectorAll("h2").forEach(t=>{var n;return null===(n=e.current)||void 0===n?void 0:n.observe(t)}),()=>{var t;return null===(t=e.current)||void 0===t?void 0:t.disconnect()}),[]),{activeId:t,setActiveId:n}}(),[n,s]=(0,r.useState)([]);return(0,r.useEffect)(()=>{s(Array.from(document.querySelectorAll("h2")).map(e=>({id:e.id,text:e.textContent})))},[]),(0,i.jsxs)(c.so,{mx:4,my:4,w:{base:"25%"},h:"min-content",p:2,gap:4,top:5,direction:"column",pos:"sticky",alignSelf:"flex-start",children:[(0,i.jsx)(c.EY,{fontWeight:"bold",children:"目录"}),(0,i.jsx)(c.Xy,{spacing:2,listStyleType:"none",children:n.map((n,s)=>(0,i.jsx)(c.ck,{fontSize:"sm",cursor:"pointer",_hover:{borderLeft:"4px solid black",pl:2},...n.id===e&&{color:"primary.500",fontWeight:"bold"},onClick:e=>{var i;return i=n.id,void(e.preventDefault(),t(i))},children:(0,i.jsx)(D(),{href:"#".concat(n.id),children:n.text})},s))})]})}let R=[{type:"E",description:"Extroverted - 外向的"},{type:"I",description:"Introverted - 内向的"},{type:"S",description:"Sensing - 侧重现实"},{type:"N",description:"Intuitive - 侧重直觉"},{type:"T",description:"Thinking - 侧重逻辑思维"},{type:"F",description:"Feeling - 侧重情感"},{type:"P",description:"Perceiving - 善于接收"},{type:"J",description:"Judging - 善于判断"}];function z(e){let t=e.testScores.filter(t=>t===e.targetScore);return(0,i.jsxs)(c.so,{py:1,px:2,gap:2,rounded:"md",justifyContent:"space-between",bg:"white",children:[(0,i.jsxs)(c.EY,{fontWeight:"semibold",children:[(t.length/e.testScores.length*100).toFixed(2).replace(/[.,]0+$/,""),"%"]}),(0,i.jsxs)(c.EY,{children:["(",t.length,")"]})]})}function Z(e){let t=["red","blue","yellow","purple","orange","green","pink","teal"];return(0,i.jsxs)(c.so,{my:4,mx:{base:0,lg:4},w:{base:"full",lg:"25%"},h:"min-content",p:2,gap:4,top:5,direction:"column",pos:{base:"static",lg:"sticky"},alignSelf:"flex-start",children:[(0,i.jsx)(c.DZ,{as:"h1",textAlign:"center",fontSize:"lg",children:"分数"}),R.map((n,s)=>(0,i.jsxs)(c.so,{p:2,rounded:"md",justifyContent:"space-between",alignItems:"center",bg:"".concat(t[s],".500"),children:[(0,i.jsx)(c.EY,{fontWeight:"semibold",color:"white",children:n.description}),(0,i.jsx)(z,{testScores:e.testResult.testScores,targetScore:n.type})]},s))]})}function Y(){let e=(0,s.useRouter)(),[t,n]=(0,r.useState)(l.h9.NotAsked());return(0,r.useEffect)(()=>{if(e.isReady){n(l.h9.Loading());let t=parseInt(e.query.testResultId);(0,_.lH)(t).tap(e=>n(l.h9.Done(e)))}},[e.isReady,e.query.testResultId]),(0,i.jsx)(p.A,{hideBackground:!0,children:t.match({NotAsked:()=>(0,i.jsx)(c.EY,{children:"加载中"}),Loading:()=>(0,i.jsx)(c.EY,{children:"加载中"}),Done:e=>e.match({Error:()=>(0,i.jsx)(c.EY,{children:"出现错误！请刷新页面！"}),Ok:e=>e.match({Some:e=>(0,i.jsxs)(c.so,{h:"full",direction:{base:"column",lg:"row"},children:[(0,i.jsx)(Z,{testResult:e}),(0,i.jsx)(k,{testResult:e}),(0,i.jsx)(u,{above:"lg",children:(0,i.jsx)(M,{})})]}),None:()=>(0,i.jsx)(c.EY,{children:"没有数据"})})})})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[743,540,381,587,71,636,593,792],()=>t(1101)),_N_E=e.O()}]);