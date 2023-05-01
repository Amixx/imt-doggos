import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../chunks/chunk-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "similar-breeds.page",
  __ssrInlineRender: true,
  setup(__props) {
    const breeds = [
      {
        name: "Icelandic Sheepdog",
        description: "The Icelandic Sheepdog is a friendly and energetic breed that originated in Iceland. They were primarily used for herding sheep and as general farm dogs. Their playful and loyal nature makes them wonderful companions.",
        pros: [
          "Friendly and social",
          "Highly intelligent and trainable",
          "Adaptable to various environments",
          "Good with children and other pets"
        ],
        cons: [
          "Can be vocal",
          "Requires regular exercise",
          "Sheds heavily during shedding seasons"
        ]
      },
      {
        name: "Norwegian Elkhound",
        description: "The Norwegian Elkhound is a medium-sized dog breed native to Norway. They are an ancient breed that was used for hunting large game like elk and bears. Known for their intelligence, strength, and versatility, they make excellent working dogs and family pets.",
        pros: [
          "Loyal and protective",
          "Intelligent and independent",
          "Good with children",
          "Sturdy and adaptable"
        ],
        cons: [
          "Can be stubborn",
          "High exercise requirements",
          "May be reserved with strangers"
        ]
      },
      {
        name: "Swedish Vallhund",
        description: "The Swedish Vallhund is a small, energetic, and fearless breed that originated in Sweden. They were traditionally used as herding dogs on farms and are known for their agility and intelligence. Swedish Vallhunds make excellent companions for active families and dog sports enthusiasts.",
        pros: [
          "Intelligent and trainable",
          "Friendly and social",
          "Good with children and other pets",
          "Adaptable to various environments"
        ],
        cons: [
          "Can be vocal",
          "Requires regular exercise",
          "Prone to certain health issues like hip dysplasia"
        ]
      },
      {
        name: "Shiba Inu",
        description: "The Shiba Inu is a small to medium-sized dog breed that originated in Japan. They are known for their spirited and independent nature, as well as their fox-like appearance. Shiba Inus make loyal and affectionate companions but require consistent training and socialization.",
        pros: [
          "Intelligent and independent",
          "Low grooming requirements",
          "Adaptable to various environments",
          "Good with children when properly socialized"
        ],
        cons: [
          "Can be stubborn",
          "High exercise requirements",
          "May be reserved with strangers",
          "Potential for aggression towards other dogs"
        ]
      }
      // Add more breeds here
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "similar-breeds-page" }, _attrs))} data-v-3e53ee30><h1 class="title" data-v-3e53ee30>Similar Breeds to the Finnish Spitz: Pros and Cons</h1><!--[-->`);
      ssrRenderList(breeds, (breed, index) => {
        _push(`<div class="breed-section" data-v-3e53ee30><img class="image-placeholder"${ssrRenderAttr("src", "https://via.placeholder.com/300x200")}${ssrRenderAttr("alt", breed.name)} data-v-3e53ee30><h2 data-v-3e53ee30>${ssrInterpolate(breed.name)}</h2><p data-v-3e53ee30>${ssrInterpolate(breed.description)}</p><h3 data-v-3e53ee30>Pros</h3><ul data-v-3e53ee30><!--[-->`);
        ssrRenderList(breed.pros, (pro, proIndex) => {
          _push(`<li data-v-3e53ee30>${ssrInterpolate(pro)}</li>`);
        });
        _push(`<!--]--></ul><h3 data-v-3e53ee30>Cons</h3><ul data-v-3e53ee30><!--[-->`);
        ssrRenderList(breed.cons, (con, conIndex) => {
          _push(`<li data-v-3e53ee30>${ssrInterpolate(con)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const similarBreeds_page_vue_vue_type_style_index_0_scoped_3e53ee30_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/similar-breeds.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const similarBreeds_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3e53ee30"]]);
export {
  similarBreeds_page as default
};
