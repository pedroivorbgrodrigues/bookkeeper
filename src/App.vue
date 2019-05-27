<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" class="titleLink">
          <span>Book</span>
          <span class="font-weight-light">Keeper</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>LOGIN</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <Notification />
  </v-app>
</template>

<script>
import Notification from "./components/Notification";
export default {
  name: "App",
  data() {
    return {
      //
    };
  },
  components: { Notification }
};
</script>

<style lang="scss">
.v-content {
  background-image: url("assets/background.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
}

.titleLink {
  color: inherit;
  text-decoration: none;
}
</style>
