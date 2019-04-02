<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs3 v-for="stock in stocks" :key="stock.title">
        <v-card
          :class="{ selected: isSelected(stock) }"
          class="clickable"
          @click.native="selectStock(stock)"
        >
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <v-img
                  class="hidden-xs-only"
                  height="128px"
                  contain
                  :src="stock.image"
                ></v-img>
                <v-img
                  class="hidden-sm-and-up"
                  height="64px"
                  contain
                  :src="stock.image"
                ></v-img>
              </v-flex>
              <v-flex xs12 class="text-xs-center">
                <div class="headline hidden-xs-only">{{ stock.title }}</div>
                <div class="subheading text-xs-center hidden-sm-and-up">
                  {{ stock.title }}
                </div>
                <div>Vencimento: {{ stock.dueDate }}</div>
                <div>Preço de Entrada: {{ stock.entryPrice }}</div>
              </v-flex>
            </v-layout>
          </v-container>
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
