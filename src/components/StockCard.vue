<template>
  <v-card class="clickable">
    <v-card-title>
      <v-layout fill-height>
        <v-flex xs8 style="align-self: center">
          <div class="display-1">{{stock.title}}</div>
        </v-flex>
        <v-flex xs4>
          <v-img contain max-height="64" :src="stock.image"></v-img>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>Vencimento:</v-list-tile-content>
        <v-list-tile-content class="align-end">{{ stock.dueDate }}</v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>Preço de Entrada:</v-list-tile-content>
        <v-list-tile-content class="align-end">{{ stock.entryPrice }}</v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "stock-card",
  props: ["stock"]
};
</script>