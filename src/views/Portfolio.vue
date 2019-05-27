<template>
  <v-container>
    <v-layout row justify-center>
      <v-flex xs12 md6>
        <v-form @submit.prevent="addWallet">
          <v-text-field
            solo
            label="Add new wallet"
            v-model="nameInput"
            append-icon="add"
          ></v-text-field>
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex xs12 md6 lg4 v-for="wallet in portfolio" :key="wallet.id" px-1>
        <wallet-card v-bind:walletId="wallet.id" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import WalletCard from "../components/WalletCard";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["portfolio"])
  },
  methods: {
    addWallet() {
      if (this.nameInput.length == 0) {
        return;
      }
      this.$store.dispatch("addWallet", this.nameInput);
      this.nameInput = "";
    }
  },
  data() {
    return {
      nameInput: ""
    };
  },
  components: { WalletCard }
};
</script>
