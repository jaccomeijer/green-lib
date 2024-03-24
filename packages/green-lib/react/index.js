var te=Object.create;var U=Object.defineProperty;var ae=Object.getOwnPropertyDescriptor;var ie=Object.getOwnPropertyNames;var oe=Object.getPrototypeOf,ne=Object.prototype.hasOwnProperty;var k=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var se=(e,t,a,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ie(t))!ne.call(e,n)&&n!==a&&U(e,n,{get:()=>t[n],enumerable:!(i=ae(t,n))||i.enumerable});return e};var A=(e,t,a)=>(a=e!=null?te(oe(e)):{},se(t||!e||!e.__esModule?U(a,"default",{value:e,enumerable:!0}):a,e));var M=k(()=>{});var O=k(()=>{});var V=k(()=>{});var L=A(M(),1);var H="./empty-element.ce-OK7IN7GY.js";import{jsx as x,jsxs as B}from"react/jsx-runtime";var xe=e=>{let t=(e.globals?.baseUrl||"")+(e.globals?.assetUrl||"");return B("empty-element",{children:[B("template",{shadowrootmode:"open",children:[x("p",{children:"Component goes here"}),x("link",{rel:"stylesheet",type:"text/css",href:t+L.default})]}),x("script",{defer:!0,src:t+H})]})};import{jsx as T}from"react/jsx-runtime";var f=e=>{let t=e.strokeWidth||2,a=e.globals?.iconSpriteUrl||"/";return T("svg",{className:["icon",e.className].join(" "),fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:T("use",{href:`${a}#${e.icon}`})})};var $=({globals:e,action:t})=>t?.url?t.url&&t.url.startsWith("http")?t.url:(e?.baseUrl||"")+t.url:"#",q=({globals:e,action:t})=>{let a=$({globals:e,action:t});return a?`location.href='${a}';`:"false"},D=({globals:e,action:t})=>$({globals:e,action:t});import{jsx as ce,jsxs as re}from"react/jsx-runtime";var d=e=>{let t=["a","button"];if(!t.includes(e.element))return`Action.props.element is required. Valid: ${t.join(", ")}`;let a,i=[e.className];e.action?.icon&&i.push("with-icon");let n={"aria-label":e.action.icon};return e.element==="a"&&(a="a",n.href=D({globals:e.globals,action:e.action}),i.push("u-border-radius-rounded"),e.active&&i.push("active")),e.element==="button"&&(a="button",n.onClick=q({globals:e.globals,action:e.action}),n.element="button",i.push("button","u-border-radius-rounded")),re(a,{className:i.join(" "),...n,children:[e.action.icon&&ce(f,{icon:e.action.icon,globals:e.globals}),e.children||e.action.heading]})};import{jsx as w}from"react/jsx-runtime";var l=e=>{if(!e.actions)return;let t=e.actions||[];return w("ul",{className:[e.className].join(" "),role:"list",children:t.map((a,i)=>w("li",{children:w(d,{action:a,active:e.pageUrl===a.url,className:e.actionClassName,element:e.element,globals:e.globals})},i))})};import{jsx as v,jsxs as me}from"react/jsx-runtime";var de=(e,t)=>{let a=e.width||999;return(t.width||999)-a},P=e=>{if(e.globals?.imageSizes){let a=(e.globals?.baseUrl||"")+(e.globals?.assetUrl||"")+e.src.slice(0,-4),i=Object.keys(e.globals.imageSizes).map(c=>({name:c,width:e.globals.imageSizes[c]})).sort(de),n=i.pop();return me("picture",{className:e.className,children:[i.map((c,o)=>v("source",{srcSet:`${a}-${c.name}.webp`,media:`(min-width: ${c.width}px)`,type:"image/webp"},o)),v("img",{src:`${a}-${n.name}.webp`,alt:e.alt||"Image without description"})]})}return v("picture",{className:e.className,children:v("img",{src:e.src,alt:e.alt||"Image without description"})})};import{jsx as W,jsxs as ue}from"react/jsx-runtime";var We=e=>ue("nav",{className:["navigation-footer",e.className].join(" "),children:[W(l,{actions:e.mainActions,element:"a",globals:e.globals,pageUrl:e.pageUrl}),W(l,{actions:e.socialActions,element:"a",globals:e.globals})]});import{Fragment as ge,jsx as m,jsxs as z}from"react/jsx-runtime";var J=e=>{if(!e.topic)return m(ge,{children:"props.topic is undefined"});if(e.variant==="hero"&&!e.topic.image)return m("p",{children:"Image is required for Hero topics"});let t="fat-link",a="h3",i=e.variant,n;switch(i){case"block":break;case"card":break;case"featured":a="h2",n="display";break;case"headline":a="h1",n="display";break;case"hero":a="h1",n="display";break;case"profile":n="display";break;case"quote":break;case"showcase":t="";break;default:i="block";break}let c=`topic-${i}`;return a=e["heading-element"]||a,z("div",{className:["topic",c,e.className].join(" "),children:[e.topic.image&&m(P,{alt:e.topic.imageDescription,globals:e.globals,className:["topic-picture",e["swap-image"]&&"u-order-2"].join(" "),src:e.images[e.topic.image]}),z("div",{className:"topic-content",children:[e.topic.icon&&m(f,{className:"topic-icon",globals:e.globals,icon:e.topic.icon}),e.topic.labels&&m(l,{actions:e.topic.labels.map(o=>({heading:o})),className:"topic-labels",element:"a",globals:e.globals,pageUrl:e.pageUrl}),e.topic.heading&&m(a,{className:["topic-heading",n].join(" "),children:e.topic.heading}),e.topic.abstract&&m("p",{className:"topic-abstract",children:e.topic.abstract}),e.topic.action&&m(d,{action:e.topic.action,className:["topic-action",t].join(" "),element:"a",globals:e.globals})]})]})};import{Fragment as he,jsx as p}from"react/jsx-runtime";var Qe=e=>Array.isArray(e.topics)?p("div",{className:e.className,children:e.topics.map((t,a)=>p(J,{globals:e.globals,images:e.images,variant:e.variant,topic:t},a))}):p(he,{children:"props.topics must be an Array"});var F=A(O(),1);var R="./carousel-layout.ce-3NJIJ6TV.js";import{jsx as y,jsxs as C}from"react/jsx-runtime";var at=e=>{let t=(e.globals?.baseUrl||"")+(e.globals?.assetUrl||"");return C("carousel-layout",{delay:e.delay,children:[C("template",{shadowrootmode:"open",children:[C("div",{id:"root-container",children:[y("div",{id:"slider",children:e.children}),y("div",{id:"dots"})]}),y("link",{rel:"stylesheet",type:"text/css",href:t+F.default})]}),y("script",{defer:!0,src:t+R})]})};import{jsx as b,jsxs as S}from"react/jsx-runtime";var G=e=>S("div",{className:"modal-menu",children:[b("div",{className:"modal-background s-position-fixed"}),S("div",{className:"modal-popup s-position-fixed s-flex-column",children:[b("button",{className:"modal-close-button button",children:"Close"}),S("nav",{className:"s-flex-column",children:[b(l,{actions:e.mainActions,className:"popup-main-actions",element:"a",globals:e.globals}),b(l,{actions:e.socialActions,className:"popup-social-actions",element:"a",globals:e.globals}),b(l,{actions:e.callActions,actionClassName:"fat-link",className:"popup-call-actions",element:"a",globals:e.globals})]})]})]});var K=A(V(),1);var j="./navigation-header.ce-M2ZZA2EA.js";import{jsx as u,jsxs as g}from"react/jsx-runtime";var bt=e=>{let t=(e.globals?.baseUrl||"")+(e.globals?.assetUrl||"");return g("navigation-header",{children:[g("template",{shadowrootmode:"open",children:[g("div",{className:"navigation-header",children:[g("div",{className:"wide-menu-view",children:[g("nav",{className:"branding-main-actions","aria-label":"primary",children:[u(d,{action:e.globals.metadata.branding,className:"branding",element:"a",globals:e.globals}),u(l,{actions:e.mainActions,className:"main-actions",element:"a",globals:e.globals,pageUrl:e.pageUrl})]}),g("nav",{className:"social-actions",children:[u(l,{actions:e.socialActions,element:"a",globals:e.globals}),u(l,{actions:e.callActions,actionClassName:"fat-link",element:"a",globals:e.globals})]}),u("button",{className:"open-menu-button button",children:"Menu"})]}),u(G,{callActions:e.callActions,globals:e.globals,mainActions:e.mainActions,socialActions:e.socialActions})]}),u("link",{rel:"stylesheet",type:"text/css",href:t+K.default})]}),u("script",{defer:!0,src:t+j})]})};import{jsx as Q,jsxs as X}from"react/jsx-runtime";var Nt=e=>X("nav",{className:["navigation-legal",e.className].join(" "),children:[Q("div",{children:e.globals.metadata.branding.copyright}),X(d,{action:e.globals.metadata.vendor,element:"a",globals:e.globals,children:[e.globals.metadata.vendor.heading,Q("sup",{children:e.globals.metadata.vendor.version})]})]});var $t=({menu:e,pageUrl:t})=>{let a;return e.forEach(i=>{if(i.url===t){a=i;return}Array.isArray(i.children)&&i.children.forEach(n=>{n.url===t&&(a=i)})}),a};var Dt=({pages:e})=>{let t=e.filter(o=>o.frontmatter.navigation?.heading).map(o=>{let s=o.frontmatter,r=s.navigation,h=r?.heading,Y=r.icon,N=r.navigationId,Z=r.order,_=r.parent,E=o.url;if(s.navigation.navigationId){let I=e.find(ee=>ee.frontmatter.navigation.id===N);I?E=I.url:console.log(`Warning: Could not find a page with frontmatter.navigation.id === '${N}'`)}return{heading:h,icon:Y,navigationId:N,order:Z,parentHeading:_,url:E}}),a=t.reduce((o,s)=>(s.heading&&(o[s.heading]=s),o),{}),i=[];for(let o of t)if(o.parentHeading){let s=a[o.parentHeading];if(!s){console.log(`Could not find parent with frontmatter.navigation.heading '${o.parentHeading}'`);continue}Array.isArray(s.children)||(s.children=[]),s.children.push(o)}else i.push(o);let n=(o,s)=>{let r=o.heading||"",h=s.heading||"";return r.localeCompare(h)},c=(o,s)=>{let r=o.order||999,h=s.order||999;return r-h};return i.sort(n),i.sort(c),i.forEach(o=>{o.children&&o.children.sort(n)}),i.forEach(o=>{o.children&&o.children.sort(c)}),i};export{d as Action,at as CarouselLayout,xe as EmptyElement,f as Icon,G as ModalMenu,We as NavigationFooter,bt as NavigationHeader,Nt as NavigationLegal,P as Picture,l as Segment,J as Topic,Qe as TopicList,D as getHrefAction,Dt as getMenuActions,q as getOnClickAction,$t as getRootMenuAction};
