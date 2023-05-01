import { renderToString as renderToString$1 } from "@vue/server-renderer";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import { inject, defineComponent, mergeProps, unref, useSSRContext, withCtx, createTextVNode, toDisplayString, h, createSSRApp } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../chunks/chunk-cc2b3d55.js";
const key = Symbol();
function usePageContext() {
  const pageContext = inject(key);
  if (!pageContext)
    throw new Error("setPageContext() not called in parent");
  return pageContext;
}
function setPageContext(app, pageContext) {
  app.provide(key, pageContext);
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Link",
  __ssrInlineRender: true,
  setup(__props) {
    const pageContext = usePageContext();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: { active: unref(pageContext).urlPathname === _ctx.$attrs.href }
      }, _attrs))} data-v-cf29e61c>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</a>`);
    };
  }
});
const Link_vue_vue_type_style_index_0_scoped_cf29e61c_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/renderer/Link.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Link = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cf29e61c"]]);
const main = "";
const BASE_PATH = "/imt-doggos/";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageShell",
  __ssrInlineRender: true,
  setup(__props) {
    const navItems = [
      {
        name: "Home",
        path: `${BASE_PATH}`
      },
      {
        name: "Gallery",
        path: `gallery`
      },
      {
        name: "Article",
        path: `article`
      },
      {
        name: "Similar breeds",
        path: `similar-breeds`
      },
      {
        name: "Caring tips and mistakes",
        path: `care`
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout" }, _attrs))} data-v-8fc07efe><header data-v-8fc07efe><div class="wrapper" data-v-8fc07efe><nav data-v-8fc07efe><!--[-->`);
      ssrRenderList(navItems, (navItem) => {
        _push(ssrRenderComponent(Link, {
          href: navItem.path,
          key: navItem.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(navItem.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(navItem.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></div></header><div class="content" data-v-8fc07efe>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const PageShell_vue_vue_type_style_index_0_lang = "";
const PageShell_vue_vue_type_style_index_1_scoped_8fc07efe_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/renderer/PageShell.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PageShell = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8fc07efe"]]);
function createApp(Page, pageProps, pageContext) {
  const PageWithLayout = defineComponent({
    render() {
      return h(
        PageShell,
        {},
        {
          default() {
            return h(Page, pageProps || {});
          }
        }
      );
    }
  });
  const app = createSSRApp(PageWithLayout);
  setPageContext(app, pageContext);
  return app;
}
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const app = createApp(Page, pageProps, pageContext);
  const appHtml = await renderToString(app);
  const { documentProps } = pageContext.exports;
  const title = documentProps && documentProps.title || "Vite SSR app";
  const desc = documentProps && documentProps.description || "App using Vite + vite-plugin-ssr";
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;
  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  };
}
async function renderToString(app) {
  let err;
  app.config.errorHandler = (err_) => {
    err = err_;
  };
  const appHtml = await renderToString$1(app);
  if (err)
    throw err;
  return appHtml;
}
export {
  passToClient,
  render
};
