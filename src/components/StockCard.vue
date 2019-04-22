<template>
  <v-card class="clickable">
    <v-card-title>
      <v-layout fill-height>
        <v-flex xs8 style="align-self: center">
          <div class="display-1">
            {{ stock.title }}
          </div>
        </v-flex>
        <v-flex xs4>
          <v-img contain max-height="64" :src="stock.image" />
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-divider />
    <v-list dense>
      <v-list-tile v-for="(label, prop) in listLabels" :key="prop">
        <v-list-tile-content>{{ label }}:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ stock[prop] }}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      listLabels: {
        dueDate: "Data de vencimento",
        entryPrice: "Preço de entrada",
        entryDate: "Quantidade",
        sellPrice: "Preço de venda",
        sellDate: "Data de venda"
      }
    };
  },
  name: "StockCard",
  props: ["stock"]
};
</script>
