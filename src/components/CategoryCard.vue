<template>
  <v-card class="clickable">
    <v-card-title>
      <v-layout fill-height>
        <v-flex xs8 style="align-self: center">
          <div class="headline">
            {{ category.name }}
          </div>
        </v-flex>
        <v-flex xs2 text-xs-right>
          <div class="headline">{{ category.allocation }}%</div>
        </v-flex>
        <v-flex xs2 text-xs-right>
          <v-icon large color="teal lighten-2"> fas fa-{{ icon }} </v-icon>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-divider />
    <v-layout
      fill-height
      ma-1
      v-for="(stock, index) in category.stocks"
      :key="index"
    >
      <v-flex ma-1>
        <v-text-field label="Ticker" v-model="stock.ticker"></v-text-field>
      </v-flex>
      <v-flex ma-1>
        <v-text-field
          label="Allocation"
          v-model="stock.allocation"
          suffix="%"
          v-on:keydown.tab="addStock(index)"
        >
        </v-text-field>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: "CategoryStock",
  computed: {
    icon() {
      return this.categoryIcons[this.category.type];
    }
  },
  methods: {
    addStock(index) {
      if (index !== this.category.stocks.length - 1) {
        return;
      }
      this.category.stocks.push({ ticker: "", allocation: "" });
    }
  },
  data() {
    return {
      categoryIcons: {
        fixedIncome: "chart-line"
      }
    };
  },
  props: ["category"]
};
</script>
