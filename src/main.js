import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/import-jquery";
import "@fancyapps/fancybox";
import "@fancyapps/fancybox/dist/jquery.fancybox.css";
import "@fancyapps/fancybox/dist/jquery.fancybox.min.css";
import "@/assets/scss/fill-widget.scss";
import "ion-rangeslider";
import "ion-rangeslider/css/ion.rangeSlider.css";

import Vue2Modal from "@arfedulov/vue2-modal";
// import "@/assets/scss/header.scss";

// import '@/assets/scss/common.scss'
// import '@/assets/scss/footer.scss'
Vue.config.productionTip = false;
Vue.use(Vue2Modal);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
