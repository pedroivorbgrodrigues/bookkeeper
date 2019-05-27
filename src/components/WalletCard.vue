<template>
  <v-card>
    <v-card-title class="pa-0">
      <v-layout fill-height my-3 ml-3 mr-1 align-center>
        <v-flex ma-1>
          <v-text-field
            label="Wallet"
            :value="wallet.name"
            :ref="wallet.id"
            class="headline"
          ></v-text-field>
        </v-flex>
        <v-flex xs5 text-xs-right ma-1>
          <AllocationInput v-model="wallet.allocation" />
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-divider />
  </v-card>
</template>
<script>
export default {
  name: "WalletCard",
  props: ["walletId"]
};
</script>
