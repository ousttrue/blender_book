(self.webpackChunkBlenderBook=self.webpackChunkBlenderBook||[]).push([[918],{4283:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>$t});var s=n(7294),a=n(1944),o=n(902),i=n(5893);const l=s.createContext(null);function c(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,i.jsx)(l.Provider,{value:a,children:t})}function r(){const e=(0,s.useContext)(l);if(null===e)throw new o.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=r();return(0,i.jsx)(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(512),m=n(7524),h=n(5999),p=n(9960);function f(e){const{permalink:t,title:n,subLabel:s,isNext:a}=e;return(0,i.jsxs)(p.Z,{className:(0,u.Z)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}function x(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(f,{...t,subLabel:(0,i.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(f,{...n,subLabel:(0,i.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function b(){const{metadata:e}=r();return(0,i.jsx)(x,{previous:e.previous,next:e.next})}var g=n(2263),j=n(143),v=n(5281),N=n(373),C=n(4477);const k={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function L(e){const t=k[e.versionMetadata.banner];return(0,i.jsx)(t,{...e})}function y(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,i.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(p.Z,{to:n,onClick:s,children:(0,i.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function B(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,g.Z)(),{pluginId:a}=(0,j.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,N.J)(a),{latestDocSuggestion:l,latestVersionSuggestion:c}=(0,j.Jo)(a),r=l??(d=c).docs.find((e=>e.id===d.mainDocId));var d;return(0,i.jsxs)("div",{className:(0,u.Z)(t,v.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(L,{siteTitle:s,versionMetadata:n})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(y,{versionLabel:c.label,to:r.path,onClick:()=>o(c.name)})})]})}function _(e){let{className:t}=e;const n=(0,C.E)();return n.banner?(0,i.jsx)(B,{className:t,versionMetadata:n}):null}function w(e){let{className:t}=e;const n=(0,C.E)();return n.badge?(0,i.jsx)("span",{className:(0,u.Z)(t,v.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}function Z(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,i.jsx)(h.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function T(e){let{lastUpdatedBy:t}=e;return(0,i.jsx)(h.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:t})},children:" by {user}"})}function E(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,i.jsxs)("span",{className:v.k.common.lastUpdated,children:[(0,i.jsx)(h.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,i.jsx)(Z,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,i.jsx)(T,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const H={iconEdit:"iconEdit_Z9Sw"};function A(e){let{className:t,...n}=e;return(0,i.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(H.iconEdit,t),"aria-hidden":"true",...n,children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function I(e){let{editUrl:t}=e;return(0,i.jsxs)(p.Z,{to:t,className:v.k.common.editThisPage,children:[(0,i.jsx)(A,{}),(0,i.jsx)(h.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const M={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function S(e){let{permalink:t,label:n,count:s}=e;return(0,i.jsxs)(p.Z,{href:t,className:(0,u.Z)(M.tag,s?M.tagWithCount:M.tagRegular),children:[n,s&&(0,i.jsx)("span",{children:s})]})}const U={tags:"tags_jXut",tag:"tag_QGVx"};function z(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(h.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,u.Z)(U.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,i.jsx)("li",{className:U.tag,children:(0,i.jsx)(S,{label:t,permalink:n})},n)}))})]})}const V={lastUpdated:"lastUpdated_vwxv"};function R(e){return(0,i.jsx)("div",{className:(0,u.Z)(v.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(z,{...e})})})}function O(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a}=e;return(0,i.jsxs)("div",{className:(0,u.Z)(v.k.docs.docFooterEditMetaRow,"row"),children:[(0,i.jsx)("div",{className:"col",children:t&&(0,i.jsx)(I,{editUrl:t})}),(0,i.jsx)("div",{className:(0,u.Z)("col",V.lastUpdated),children:(n||s)&&(0,i.jsx)(E,{lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:s})})]})}function P(){const{metadata:e}=r(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a,tags:o}=e,l=o.length>0,c=!!(t||n||a);return l||c?(0,i.jsxs)("footer",{className:(0,u.Z)(v.k.docs.docFooter,"docusaurus-mt-lg"),children:[l&&(0,i.jsx)(R,{tags:o}),c&&(0,i.jsx)(O,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s})]}):null}var $=n(6043),D=n(6668);function W(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function F(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=F({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function q(e){const t=e.getBoundingClientRect();return t.top===t.bottom?q(e.parentNode):t}function G(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>q(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(q(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function J(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,D.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function Y(e){const t=(0,s.useRef)(void 0),n=J();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),c=G(l,{anchorTopOffset:n.current}),r=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===r)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function Q(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,i.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,i.jsxs)("li",{children:[(0,i.jsx)(p.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,i.jsx)(Q,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const X=s.memo(Q);function K(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:l,maxHeadingLevel:c,...r}=e;const d=(0,D.L)(),u=l??d.tableOfContents.minHeadingLevel,m=c??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>F({toc:W(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return Y((0,s.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:m}}),[a,o,u,m])),(0,i.jsx)(X,{toc:h,className:n,linkClassName:a,...r})}const ee={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function te(e){let{collapsed:t,...n}=e;return(0,i.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",ee.tocCollapsibleButton,!t&&ee.tocCollapsibleButtonExpanded,n.className),children:(0,i.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const ne={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function se(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:l}=(0,$.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,u.Z)(ne.tocCollapsible,!o&&ne.tocCollapsibleExpanded,n),children:[(0,i.jsx)(te,{collapsed:o,onClick:l}),(0,i.jsx)($.z,{lazy:!0,className:ne.tocCollapsibleContent,collapsed:o,children:(0,i.jsx)(K,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const ae={tocMobile:"tocMobile_ITEo"};function oe(){const{toc:e,frontMatter:t}=r();return(0,i.jsx)(se,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(v.k.docs.docTocMobile,ae.tocMobile)})}const ie={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},le="table-of-contents__link toc-highlight",ce="table-of-contents__link--active";function re(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,u.Z)(ie.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(K,{...n,linkClassName:le,linkActiveClassName:ce})})}function de(){const{toc:e,frontMatter:t}=r();return(0,i.jsx)(re,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.k.docs.docTocDesktop})}var ue=n(2503),me=n(1151),he=n(5742),pe=n(2389),fe=n(2949);function xe(){const{prism:e}=(0,D.L)(),{colorMode:t}=(0,fe.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var be=n(7594),ge=n.n(be);const je=/title=(?<quote>["'])(?<title>.*?)\1/,ve=/\{(?<range>[\d,-]+)\}/,Ne={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function Ce(e,t){const n=e.map((e=>{const{start:n,end:s}=Ne[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function ke(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&ve.test(o)){const e=o.match(ve).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=ge()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return Ce(["js","jsBlock"],t);case"jsx":case"tsx":return Ce(["js","jsBlock","jsx"],t);case"html":return Ce(["js","jsBlock","html"],t);case"python":case"py":case"bash":return Ce(["bash"],t);case"markdown":case"md":return Ce(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return Ce(["tex"],t);case"lua":case"haskell":case"sql":return Ce(["lua"],t);case"wasm":return Ce(["wasm"],t);default:return Ce(Object.keys(Ne).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(s,a),l=n.split("\n"),c=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),r=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<l.length;){const e=l[h].match(i);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));r[t]?c[r[t]].range+=`${h},`:d[t]?c[d[t]].start=h:u[t]&&(c[u[t]].range+=`${c[u[t]].start}-${h-1},`),l.splice(h,1)}n=l.join("\n");const m={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;ge()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const Le={codeBlockContainer:"codeBlockContainer_Ckt0"};function ye(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(xe());return(0,i.jsx)(t,{...n,style:s,className:(0,u.Z)(n.className,Le.codeBlockContainer,v.k.common.codeBlock)})}const Be={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function _e(e){let{children:t,className:n}=e;return(0,i.jsx)(ye,{as:"pre",tabIndex:0,className:(0,u.Z)(Be.codeBlockStandalone,"thin-scrollbar",n),children:(0,i.jsx)("code",{className:Be.codeBlockLines,children:t})})}const we={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Ze(e,t){const[n,a]=(0,s.useState)(),i=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{i()}),[i]),function(e,t,n){void 0===n&&(n=we);const a=(0,o.zX)(t),i=(0,o.Ql)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,i),()=>t.disconnect()}),[e,a,i])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var Te=n(2573);const Ee={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function He(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const l=a({line:t,className:(0,u.Z)(n,s&&Ee.codeLine)}),c=t.map(((e,t)=>(0,i.jsx)("span",{...o({token:e,key:t})},t)));return(0,i.jsxs)("span",{...l,children:[s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:Ee.codeLineNumber}),(0,i.jsx)("span",{className:Ee.codeLineContent,children:c})]}):c,(0,i.jsx)("br",{})]})}function Ae(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function Ie(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const Me={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function Se(e){let{code:t,className:n}=e;const[a,o]=(0,s.useState)(!1),l=(0,s.useRef)(void 0),c=(0,s.useCallback)((()=>{!function(e,{target:t=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const n=document.createElement("textarea"),s=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection(),o=a.rangeCount>0&&a.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),s&&s.focus()}(t),o(!0),l.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),(0,i.jsx)("button",{type:"button","aria-label":a?(0,h.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,h.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,h.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.Z)("clean-btn",n,Me.copyButton,a&&Me.copyButtonCopied),onClick:c,children:(0,i.jsxs)("span",{className:Me.copyButtonIcons,"aria-hidden":"true",children:[(0,i.jsx)(Ae,{className:Me.copyButtonIcon}),(0,i.jsx)(Ie,{className:Me.copyButtonSuccessIcon})]})})}function Ue(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const ze={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function Ve(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,h.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,i.jsx)("button",{type:"button",onClick:n,className:(0,u.Z)("clean-btn",t,s&&ze.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,i.jsx)(Ue,{className:ze.wordWrapButtonIcon,"aria-hidden":"true"})})}function Re(e){let{children:t,className:n="",metastring:a,title:o,showLineNumbers:l,language:c}=e;const{prism:{defaultLanguage:r,magicComments:d}}=(0,D.L)(),m=function(e){return e?.toLowerCase()}(c??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??r),h=xe(),p=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),i=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),l=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return Ze(o,l),(0,s.useEffect)((()=>{l()}),[e,l]),(0,s.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:i}}(),f=function(e){return e?.match(je)?.groups.title??""}(a)||o,{lineClassNames:x,code:b}=ke(t,{metastring:a,language:m,magicComments:d}),g=l??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return(0,i.jsxs)(ye,{as:"div",className:(0,u.Z)(n,m&&!n.includes(`language-${m}`)&&`language-${m}`),children:[f&&(0,i.jsx)("div",{className:Be.codeBlockTitle,children:f}),(0,i.jsxs)("div",{className:Be.codeBlockContent,children:[(0,i.jsx)(Te.y$,{theme:h,code:b,language:m??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:o}=e;return(0,i.jsx)("pre",{tabIndex:0,ref:p.codeBlockRef,className:(0,u.Z)(t,Be.codeBlock,"thin-scrollbar"),style:n,children:(0,i.jsx)("code",{className:(0,u.Z)(Be.codeBlockLines,g&&Be.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,i.jsx)(He,{line:e,getLineProps:a,getTokenProps:o,classNames:x[t],showLineNumbers:g},t)))})})}}),(0,i.jsxs)("div",{className:Be.buttonGroup,children:[(p.isEnabled||p.isCodeScrollable)&&(0,i.jsx)(Ve,{className:Be.codeButton,onClick:()=>p.toggle(),isEnabled:p.isEnabled}),(0,i.jsx)(Se,{className:Be.codeButton,code:b})]})]})]})}function Oe(e){let{children:t,...n}=e;const a=(0,pe.Z)(),o=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof o?Re:_e;return(0,i.jsx)(l,{...n,children:o},String(a))}const Pe={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function $e(e){return!!e&&("SUMMARY"===e.tagName||$e(e.parentElement))}function De(e,t){return!!e&&(e===t||De(e.parentElement,t))}function We(e){let{summary:t,children:n,...a}=e;const o=(0,pe.Z)(),l=(0,s.useRef)(null),{collapsed:c,setCollapsed:r}=(0,$.u)({initialState:!a.open}),[d,m]=(0,s.useState)(a.open),h=s.isValidElement(t)?t:(0,i.jsx)("summary",{children:t??"Details"});return(0,i.jsxs)("details",{...a,ref:l,open:d,"data-collapsed":c,className:(0,u.Z)(Pe.details,o&&Pe.isBrowser,a.className),onMouseDown:e=>{$e(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;$e(t)&&De(t,l.current)&&(e.preventDefault(),c?(r(!1),m(!0)):r(!0))},children:[h,(0,i.jsx)($.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{r(e),m(!e)},children:(0,i.jsx)("div",{className:Pe.collapsibleContent,children:n})})]})}const Fe={details:"details_b_Ee"},qe="alert alert--info";function Ge(e){let{...t}=e;return(0,i.jsx)(We,{...t,className:(0,u.Z)(qe,Fe.details,t.className)})}function Je(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,i.jsx)(i.Fragment,{children:t.filter((e=>e!==n))});return(0,i.jsx)(Ge,{...e,summary:n,children:a})}function Ye(e){return(0,i.jsx)(ue.Z,{...e})}const Qe={containsTaskList:"containsTaskList_mC6p"};function Xe(e){if(void 0!==e)return(0,u.Z)(e,e?.includes("contains-task-list")&&Qe.containsTaskList)}const Ke={img:"img_ev3q"};function et(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n)),o=n?.props.children;return{mdxAdmonitionTitle:o,rest:a.length>0?(0,i.jsx)(i.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}const tt={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function nt(e){let{type:t,className:n,children:s}=e;return(0,i.jsx)("div",{className:(0,u.Z)(v.k.common.admonition,v.k.common.admonitionType(t),tt.admonition,n),children:s})}function st(e){let{icon:t,title:n}=e;return(0,i.jsxs)("div",{className:tt.admonitionHeading,children:[(0,i.jsx)("span",{className:tt.admonitionIcon,children:t}),n]})}function at(e){let{children:t}=e;return t?(0,i.jsx)("div",{className:tt.admonitionContent,children:t}):null}function ot(e){const{type:t,icon:n,title:s,children:a,className:o}=e;return(0,i.jsxs)(nt,{type:t,className:o,children:[(0,i.jsx)(st,{title:s,icon:n}),(0,i.jsx)(at,{children:a})]})}function it(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const lt={icon:(0,i.jsx)(it,{}),title:(0,i.jsx)(h.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function ct(e){return(0,i.jsx)(ot,{...lt,...e,className:(0,u.Z)("alert alert--secondary",e.className),children:e.children})}function rt(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const dt={icon:(0,i.jsx)(rt,{}),title:(0,i.jsx)(h.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function ut(e){return(0,i.jsx)(ot,{...dt,...e,className:(0,u.Z)("alert alert--success",e.className),children:e.children})}function mt(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const ht={icon:(0,i.jsx)(mt,{}),title:(0,i.jsx)(h.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function pt(e){return(0,i.jsx)(ot,{...ht,...e,className:(0,u.Z)("alert alert--info",e.className),children:e.children})}function ft(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const xt={icon:(0,i.jsx)(ft,{}),title:(0,i.jsx)(h.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function bt(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const gt={icon:(0,i.jsx)(bt,{}),title:(0,i.jsx)(h.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const jt={icon:(0,i.jsx)(ft,{}),title:(0,i.jsx)(h.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const vt={...{note:ct,tip:ut,info:pt,warning:function(e){return(0,i.jsx)(ot,{...xt,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(ot,{...gt,...e,className:(0,u.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,i.jsx)(ct,{title:"secondary",...e}),important:e=>(0,i.jsx)(pt,{title:"important",...e}),success:e=>(0,i.jsx)(ut,{title:"success",...e}),caution:function(e){return(0,i.jsx)(ot,{...jt,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})}}};function Nt(e){const t=et(e),n=(s=t.type,vt[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),vt.info));var s;return(0,i.jsx)(n,{...t})}var Ct=n(1875);const kt={Head:he.Z,details:Je,Details:Je,code:function(e){return s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?(0,i.jsx)("code",{...e}):(0,i.jsx)(Oe,{...e})},a:function(e){return(0,i.jsx)(p.Z,{...e})},pre:function(e){return(0,i.jsx)(i.Fragment,{children:e.children})},ul:function(e){return(0,i.jsx)("ul",{...e,className:Xe(e.className)})},img:function(e){return(0,i.jsx)("img",{loading:"lazy",...e,className:(t=e.className,(0,u.Z)(t,Ke.img))});var t},h1:e=>(0,i.jsx)(Ye,{as:"h1",...e}),h2:e=>(0,i.jsx)(Ye,{as:"h2",...e}),h3:e=>(0,i.jsx)(Ye,{as:"h3",...e}),h4:e=>(0,i.jsx)(Ye,{as:"h4",...e}),h5:e=>(0,i.jsx)(Ye,{as:"h5",...e}),h6:e=>(0,i.jsx)(Ye,{as:"h6",...e}),admonition:Nt,mermaid:Ct.Z};function Lt(e){let{children:t}=e;return(0,i.jsx)(me.Z,{components:kt,children:t})}function yt(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=r();return t.hide_title||void 0!==n?null:e.title}();return(0,i.jsxs)("div",{className:(0,u.Z)(v.k.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(ue.Z,{as:"h1",children:n})}),(0,i.jsx)(Lt,{children:t})]})}var Bt=n(2802),_t=n(8596),wt=n(4996);function Zt(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const Tt={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function Et(){const e=(0,wt.Z)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(p.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(Zt,{className:Tt.breadcrumbHomeIcon})})})}const Ht={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function At(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,i.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,i.jsx)(p.Z,{className:a,href:n,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:t})}):(0,i.jsx)("span",{className:a,children:t})}function It(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,i.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,i.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function Mt(){const e=(0,Bt.s1)(),t=(0,_t.Ns)();return e?(0,i.jsx)("nav",{className:(0,u.Z)(v.k.docs.docBreadcrumbs,Ht.breadcrumbsContainer),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,i.jsx)(Et,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,i.jsx)(It,{active:s,index:n,addMicrodata:!!a,children:(0,i.jsx)(At,{href:a,isLast:s,children:t.label})},n)}))]})}):null}function St(){return(0,i.jsx)(h.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function Ut(){return(0,i.jsx)(h.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function zt(){return(0,i.jsx)(he.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function Vt(e){let{className:t}=e;return(0,i.jsx)(Nt,{type:"caution",title:(0,i.jsx)(St,{}),className:(0,u.Z)(t,v.k.common.unlistedBanner),children:(0,i.jsx)(Ut,{})})}function Rt(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(zt,{}),(0,i.jsx)(Vt,{...e})]})}const Ot={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Pt(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=r(),n=(0,m.i)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,i.jsx)(oe,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,i.jsx)(de,{})}}(),{metadata:{unlisted:s}}=r();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&Ot.docItemCol),children:[s&&(0,i.jsx)(Rt,{}),(0,i.jsx)(_,{}),(0,i.jsxs)("div",{className:Ot.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(Mt,{}),(0,i.jsx)(w,{}),n.mobile,(0,i.jsx)(yt,{children:t}),(0,i.jsx)(P,{})]}),(0,i.jsx)(b,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function $t(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,i.jsx)(c,{content:e.content,children:(0,i.jsxs)(a.FG,{className:t,children:[(0,i.jsx)(d,{}),(0,i.jsx)(Pt,{children:(0,i.jsx)(n,{})})]})})}},7594:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},1151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l,a:()=>i});var s=n(7294);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);