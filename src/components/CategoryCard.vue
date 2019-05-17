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
          <v-text-field
            solo
            flat
            :value="category.allocation"
            suffix="%"
            mask="###"
            v-on:keydown.up.prevent.stop="increment(category)"
            v-on:keydown.down.prevent.stop="decrement(category)"
          ></v-text-field>
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
          <v-text-field
            label="Allocation"
            v-model="stock.allocation"
            :ref="`alllocation_${stock.ticker}`"
            suffix="%"
            mask="###"
            v-on:keydown.tab.exact="addStock(index, $event)"
            v-on:keydown.up.prevent.stop="increment(stock)"
            v-on:keydown.down.prevent.stop="decrement(stock)"
            v-on:blur="keepInBoundary(stock)"
          >
          </v-text-field>
        </v-flex>
      </v-layout>
    </v-form>
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
    addStock(index, event) {
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
    },
    increment(model) {
      model.allocation =
        model.allocation >= this.maxAllocation
          ? this.maxAllocation
          : model.allocation + 1;
    },
    decrement(model) {
      if (model.allocation > this.minAllocation) {
        model.allocation--;
      }
    },
    keepInBoundary(model) {
      model.allocation =
        model.allocation >= this.maxAllocation
          ? this.maxAllocation
          : model.allocation;
    }
  },
  data() {
    return {
      form: false,
      maxAllocation: 100,
      minAllocation: 1,
      categoryIcons: {
        fixedIncome: "chart-line"
      },
      rules: {
        length: minLength => inputValue =>
          (inputValue || "").length >= minLength || `min ${minLength} chars`
      }
    };
  },
  props: ["category"]
};
</script>
