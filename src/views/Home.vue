<template>
  <v-container>
    <v-layout row class="text-xs-center" wrap>
      <v-flex xs12 md4 v-for="(card, index) in cards" :key="index">
        <v-card class="text-xs-center elevation-4 ma-2" min-height="260">
          <v-card-title primary-title class="justify-center">
            <div class="headline text-xs-center">{{ card.title }}</div>
          </v-card-title>
          <v-card-text class="text-xs-center">
            <p ma-2>
              <v-icon large color="primary">{{ card.icon }}</v-icon>
            </p>
            <span v-html="card.content"></span>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-layout row class="text-xs-center" justify-center>
        <v-flex xs12 md2>
          <v-btn color="accent" @click="anonSignIn">Lets go</v-btn>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    anonSignIn() {
      this.$store
        .dispatch("signIn")
        .then(this.$store.dispatch("createUserEntry"))
        .then(() => {
          this.$router.push("portfolio");
        });
    }
  },
  data() {
    return {
      cards: [
        {
          icon: "fas fa-chart-pie",
          title: "Organize your wallet",
          content: `Create categories and set it desired percentage allocation.
          Each stock can also have it desired allocation.`
        },
        {
          icon: "fas fa-chart-line",
          title: "Track your operation",
          content: `Different graphs to identify categories and stock yield and valorization`
        },
        {
          icon: "fas fa-newspaper",
          title: "See important fact and news",
          content:
            "Add feeds, graphs of yelds and price over profit as your own notes"
        }
      ]
    };
  }
};
</script>
