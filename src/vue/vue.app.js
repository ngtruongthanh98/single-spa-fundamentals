import Vue from "vue";
import singleSpaVue from "single-spa-vue";

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: "#vue",
    render: (h) => h("div", "Vue App"),
  },
});

export const bootstrap = [vueLifecycles.bootstrap];

export const mount = [vueLifecycles.mount];

export const unmount = [vueLifecycles.unmount];
