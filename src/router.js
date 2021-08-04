import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";

import Home from "./views/home";
import Binhoxy from "./views/binhoxy";
import "./style.css";
import Ungho from "./views/ungho";

Vue.use(Router);
Vue.use(Meta);
export default new Router({
  mode: "history",
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home
    },
    {
      name: "binhoxy",
      path: "/binhoxy",
      component: Binhoxy
    },
    {
      name: "noidungungho",
      path: "/ungho",
      component: Ungho
    }
  ]
});
