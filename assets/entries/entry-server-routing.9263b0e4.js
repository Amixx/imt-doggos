import{_ as r,s as u,d as p,t as d,r as o,h as c,D as _,u as v,j as f,P as E,Q as y,N as h,M as m}from"../chunks/chunk-e027ba8d.js";const n={},F={},P={},R={},C=[],L={},b=!0,x=[],w={onBeforeRoute:null},O=null,A=Object.assign({"/src/pages/article.page.vue":()=>r(()=>import("./src_pages_article.page.1115c698.js"),["assets/entries/src_pages_article.page.1115c698.js","assets/chunks/chunk-c27b6911.js","assets/chunks/chunk-7e029fe3.js","assets/static/article.page.18925255.css"]),"/src/pages/care.page.vue":()=>r(()=>import("./src_pages_care.page.9258a1ef.js"),["assets/entries/src_pages_care.page.9258a1ef.js","assets/chunks/chunk-c27b6911.js","assets/chunks/chunk-7e029fe3.js","assets/static/care.page.381cc861.css"]),"/src/pages/gallery.page.vue":()=>r(()=>import("./src_pages_gallery.page.bc5500f9.js"),["assets/entries/src_pages_gallery.page.bc5500f9.js","assets/chunks/chunk-7e029fe3.js","assets/chunks/chunk-c27b6911.js","assets/static/gallery.page.aeb6cc4d.css"]),"/src/pages/index.page.vue":()=>r(()=>import("./src_pages_index.page.3b7bff0a.js"),["assets/entries/src_pages_index.page.3b7bff0a.js","assets/chunks/chunk-c27b6911.js","assets/chunks/chunk-7e029fe3.js","assets/static/index.page.188387a3.css"]),"/src/pages/similar-breeds.page.vue":()=>r(()=>import("./src_pages_similar-breeds.page.74b5af33.js"),["assets/entries/src_pages_similar-breeds.page.74b5af33.js","assets/chunks/chunk-7e029fe3.js","assets/chunks/chunk-c27b6911.js","assets/static/similar-breeds.page.fcacd180.css"]),"/src/renderer/_error.page.vue":()=>r(()=>import("./src_renderer_error.page.ced3608c.js"),["assets/entries/src_renderer_error.page.ced3608c.js","assets/chunks/chunk-7e029fe3.js"])}),I={...A};n[".page"]=I;const S=Object.assign({"/src/renderer/_default.page.client.ts":()=>r(()=>import("./src_renderer_default.page.client.d6729dd2.js"),["assets/entries/src_renderer_default.page.client.d6729dd2.js","assets/chunks/chunk-7e029fe3.js","assets/chunks/chunk-c27b6911.js","assets/static/default.page.client.91a759e5.css"])}),T={...S};n[".page.client"]=T;const z=Object.freeze(Object.defineProperty({__proto__:null,invalidator:O,isGeneratedFile:b,neverLoaded:L,pageConfigGlobal:w,pageConfigs:x,pageFilesEager:F,pageFilesExportNamesEager:R,pageFilesExportNamesLazy:P,pageFilesLazy:n,pageFilesList:C},Symbol.toStringTag,{value:"Module"}));u(z);const g=p({withoutHash:!0});async function D(){const e=d();return o(e,{isHydration:!0,isBackwardNavigation:null}),o(e,await j(e._pageId)),H(),e}function H(){const e=p({withoutHash:!0});c(g===e,`URL manipulated before hydration finished (\`${g}\` to \`${e}\`). Ensure the hydration finishes with \`onHydrationEnd()\` before manipulating the URL.`)}async function j(e){const a={},{pageFilesAll:t,pageConfigs:l}=await _(!0);return o(a,{_pageFilesAll:t,_pageConfigs:l}),o(a,await v(t,l,e)),t.filter(s=>s.fileType!==".page.server").forEach(s=>{var i;f(!(!((i=s.fileExports)===null||i===void 0)&&i.onBeforeRender),`\`export { onBeforeRender }\` of ${s.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define \`onBeforeRender()\` in \`.page.server.js\` instead. See https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing`,{showStackTrace:!1,onlyOnce:!0})}),a}E();y(!0);V();async function V(){var e,a;const t=await D();await h(t,!1),m(t,"onHydrationEnd"),await((a=(e=t.exports).onHydrationEnd)===null||a===void 0?void 0:a.call(e,t))}