import { defineComponent, ref, onMounted, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../chunks/chunk-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "gallery.page",
  __ssrInlineRender: true,
  setup(__props) {
    const dogImages = ref([]);
    async function fetchDogImages(count) {
      try {
        const response = await fetch(`https://dog.ceo/api/breeds/image/random/${count}`);
        const data = await response.json();
        if (data.status === "success") {
          dogImages.value = data.message;
        } else {
          console.error("Error fetching dog images:", data);
        }
      } catch (error) {
        console.error("Error fetching dog images:", error);
      }
    }
    onMounted(() => {
      fetchDogImages(9);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-a3b7f563><h1 data-v-a3b7f563>Dogs in Focus: A Showcase of Stunning Canine Photography</h1><div class="dog-images-grid" data-v-a3b7f563><!--[-->`);
      ssrRenderList(dogImages.value, (url, index) => {
        _push(`<img${ssrRenderAttr("src", url)}${ssrRenderAttr("alt", "Dog " + (index + 1))} data-v-a3b7f563>`);
      });
      _push(`<!--]--></div></main>`);
    };
  }
});
const gallery_page_vue_vue_type_style_index_0_scoped_a3b7f563_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/gallery.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gallery_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a3b7f563"]]);
export {
  gallery_page as default
};
