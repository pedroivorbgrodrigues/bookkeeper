<template>
  <v-card class="clickable">
    <v-card-title>
      <v-layout fill-height>
        <v-flex xs7>
          <v-text-field
            solo
            flat
            :value="category.name"
            class="headline"
          ></v-text-field>
        </v-flex>
        <v-flex xs3 text-xs-right>
          <AllocationInput
            v-model="category.allocation"
            v-bind:ticker="category.ticker"
          />
        </v-flex>
        <v-flex xs2 text-xs-right>
          <v-icon large color="teal lighten-2"> fas fa-{{ icon }} </v-icon>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-divider />
    <v-form v-model="form" ref="form">
      <v-layout
        fill-height
        ma-1
        v-for="(stock, index) in category.stocks"
        :key="index"
      >
        <v-flex ma-1>
          <v-text-field
            label="Ticker"
            :ref="stock.ticker"
            v-model="stock.ticker"
            :rules="[rules.length(4)]"
          ></v-text-field>
        </v-flex>
        <v-flex ma-1>
          <AllocationInput
            v-model="stock.allocation"
            v-bind:ticker="stock.ticker"
            v-on:tab="addStock(index)"
          />
        </v-flex>
      </v-layout>
    </v-form>
  </v-card>
</template>

<script>
import AllocationInput from "../components/AllocationInput.vue";
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
      let currectStock = this.category.stocks[index];
      let hasTicker = currectStock.ticker.length >= 4;
      if (!hasTicker) {
        event.preventDefault();
        return this.$refs[`${currectStock.ticker}`][0].focus();
      }
      let hasAllocation = currectStock.allocation > 0;
      if (!hasAllocation) {
        event.preventDefault();
        return this.$refs[`alllocation_${currectStock.ticker}`][0].focus();
      }
      this.category.stocks.push({ ticker: "", allocation: "" });
    }
  },
  data() {
    return {
      form: false,
      categoryIcons: {
        fixedIncome: "chart-line"
      },
      rules: {
        length: minLength => inputValue =>
          (inputValue || "").length >= minLength || `min ${minLength} chars`
      }
    };
  },
  props: ["category"],
  components: { AllocationInput }
};
</script>
