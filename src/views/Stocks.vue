<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs3 v-for="stock in stocks" :key="stock.title">
        <stock-card :key="stock.title" v-bind:stock="stock" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import StockCard from "../components/StockCard.vue";
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
          entryPrice: 0.33,
          quantity: 400,
          entryDate: "08/04/2019",
          sellPrice: 0.55,
          sellDate: "13/04/2019"
        }
      ]
    };
  },
  components: { StockCard }
};
</script>

<style></style>
