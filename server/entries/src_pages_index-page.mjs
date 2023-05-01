import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../chunks/chunk-cc2b3d55.js";
const _imports_0 = "/imt-doggos/assets/static/hero.737dd5b7.jpg";
const index_page_vue_vue_type_style_index_0_scoped_0dc8f37e_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "landing-page" }, _attrs))} data-v-0dc8f37e><div class="hero-section" data-v-0dc8f37e><img class="hero-image"${ssrRenderAttr("src", _imports_0)} alt="Finnish Spitz" data-v-0dc8f37e><h1 class="hero-title" data-v-0dc8f37e>Finnish Spitz</h1><h2 class="hero-subtitle" data-v-0dc8f37e>The Friendly and Lively National Dog of Finland</h2></div><div class="content-section" data-v-0dc8f37e><p data-v-0dc8f37e> The Finnish Spitz, also known as Suomenpystykorva or Finsk Spets, is a breed of dog that originated in Finland. They are the national dog of Finland and have a long history as hunting and companion animals. Finnish Spitz dogs are known for their intelligence, agility, and friendly temperament, making them great family pets. </p><p data-v-0dc8f37e> With their beautiful red-gold coat, the Finnish Spitz is an attractive and eye-catching breed. Their fox-like appearance is further accentuated by their pointed ears and curled tail. Despite their small size, they are sturdy and well-suited for various activities, including hunting, agility, and obedience training. </p><p data-v-0dc8f37e> Finnish Spitz dogs are affectionate and social creatures, making them perfect companions for families, singles, and seniors alike. Their loyalty and devotion to their owners make them excellent watchdogs. They are also good with children and other pets, although early socialization is essential. </p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0dc8f37e"]]);
export {
  index_page as default
};
