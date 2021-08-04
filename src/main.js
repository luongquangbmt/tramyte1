import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueFab from "vue-float-action-button";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);
Vue.use(
  VueFab /* {
  ----------------------
  // opitons Optional Alibaba iconfont icon or MaterialIcons
  iconType: 'MaterialDesign'
  // iconType: 'iconfont'
} */
);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  vuetify: new Vuetify({})
}).$mount("#app");
