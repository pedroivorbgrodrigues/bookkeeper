import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import store from "./store/store";
import firebase from "firebase";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyAwNdGaMJJ0cOO5NvlZtvGBq5dY-HMyww4",
      authDomain: "bookkeeper-pwa.firebaseapp.com",
      databaseURL: "https://bookkeeper-pwa.firebaseio.com",
      projectId: "bookkeeper-pwa",
      storageBucket: "bookkeeper-pwa.appspot.com",
      messagingSenderId: "1003473497056"
    });
  }
}).$mount("#app");
