<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs3 v-for="stock in stocks" :key="stock.title">
        <v-card
          :class="{ selected: isSelected(stock) }"
          class="clickable"
          @click.native="selectStock(stock)"
        >
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
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    isSelected() {
      return stock => {
        return this.selectedStock == stock.title;
      };
    }
  },
  methods: {
    selectStock(stock) {
      this.selectedStock = stock.title;
    }
  },
  data() {
    return {
      selectedStock: "",
      stocks: [
        {
          title: "PETRD305",
          image: require("@/assets/companies/petr.png"),
          dueDate: "15/04/2019",
          entryPrice: 0.33
        }
      ]
    };
  }
};
</script>

<style></style>
