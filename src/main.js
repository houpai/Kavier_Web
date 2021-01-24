import Vue from "vue";
import router from "./router/router";
import store from "./store/store";
import NProgress from "nprogress";
import Vant from "vant";

import "nprogress/nprogress.css";
import "vant/lib/index.css";
import "./assets/css/reset.css";
import App from "./App.vue";
import http from "../utils/request";
import method from "../utils/method.js";
import plugin from "../utils/plugin.js";

var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
import './assets/css/animate.css'


Vue.use(Vant);
Vue.use(method);
Vue.use(plugin);
Vue.prototype.$http = http;
Vue.config.debug = false;
Vue.config.productionTip = false;

//顶部加载进度条
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

//顶部加载进度条
router.afterEach(() => {
  NProgress.done();
});


router.afterEach(() => {
  window.scrollTo(0, 0);
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
