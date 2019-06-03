import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import store from "./store/store";
import firebase from "firebase";
import "./registerServiceWorker";
import colors from "vuetify/es5/util/colors";

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: colors.teal.lighten2, // #E53935
    secondary: colors.teal.lighten5, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
});

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
    firebase.auth().onAuthStateChanged(user => {
      this.$store
        .dispatch("autoSignIn", user)
        .then(this.$store.dispatch("fetchUserData"));
    });
  }
}).$mount("#app");
