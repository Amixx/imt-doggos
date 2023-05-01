import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../chunks/chunk-cc2b3d55.js";
const _imports_0 = "/imt-doggos/assets/static/spitz-1.d56fe654.jpg";
const _imports_1 = "/imt-doggos/assets/static/spitz-2.1b13e2bb.jpg";
const _imports_2 = "/imt-doggos/assets/static/spitz-3.bf1b349a.jpg";
const article_page_vue_vue_type_style_index_0_scoped_2a8f59b3_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "finnish-spitz-page" }, _attrs))} data-v-2a8f59b3><h1 class="title" data-v-2a8f59b3>Finnish Spitz: The National Dog of Finland</h1><img class="image-placeholder"${ssrRenderAttr("src", _imports_0)} alt="Finnish Spitz" data-v-2a8f59b3><p data-v-2a8f59b3> The Finnish Spitz is a medium-sized dog breed known for its fox-like appearance, lively temperament, and intelligence. Originating from Finland, the Finnish Spitz is often called Suomenpystykorva or Finsk Spets in its native country. As the national dog of Finland, this breed has a long and storied history as both a hunting dog and a loyal companion. </p><img class="image-placeholder"${ssrRenderAttr("src", _imports_1)} alt="Finnish Spitz in nature" data-v-2a8f59b3><h2 data-v-2a8f59b3>Appearance</h2><p data-v-2a8f59b3> Finnish Spitz dogs have a distinctive look, characterized by their red-gold coat, pointed ears, and curled tail. They have a square, well-proportioned build, and their size typically ranges from 15 to 20 inches tall at the shoulder, with a weight of 31 to 35 pounds for males and 22 to 29 pounds for females. </p><h2 data-v-2a8f59b3>Temperament</h2><p data-v-2a8f59b3> Finnish Spitz dogs are known for their friendly and alert nature. They are highly intelligent, making them relatively easy to train, and their natural curiosity keeps them engaged in their surroundings. As a social breed, they thrive on human interaction and are very loyal to their families. </p><img class="image-placeholder"${ssrRenderAttr("src", _imports_2)} alt="Finnish Spitz with family" data-v-2a8f59b3><h2 data-v-2a8f59b3>Socialization and Training</h2><p data-v-2a8f59b3> Early socialization and consistent training are essential for Finnish Spitz dogs. As a breed originally bred for hunting, they have a strong prey drive and may be inclined to chase smaller animals. Exposing them to different people, animals, and environments from a young age can help prevent unwanted behaviors and ensure they grow up to be well-rounded, confident dogs. </p><h2 data-v-2a8f59b3>Exercise and Grooming</h2><p data-v-2a8f59b3> Finnish Spitz dogs are energetic and require daily exercise to keep them mentally and physically fit. Regular walks, play sessions, and engaging activities like agility or obedience training can help keep them happy and healthy. Their dense double coat requires weekly brushing to remove loose hair and minimize shedding. </p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/article.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const article_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2a8f59b3"]]);
export {
  article_page as default
};
