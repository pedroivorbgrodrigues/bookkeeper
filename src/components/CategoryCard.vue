<template>
  <v-card class="clickable">
    <v-card-title class="pa-0">
      <v-layout fill-height my-3 ml-3 mr-1 align-center>
        <v-flex ma-1>
          <v-text-field
            label="Category"
            :value="category.name"
            :ref="category.id"
            class="headline"
          ></v-text-field>
        </v-flex>
        <v-flex xs5 text-xs-right ma-1>
          <AllocationInput v-model="category.allocation" />
        </v-flex>
        <v-flex text-xs-right>
          <CategoryIcon
            v-model="category.type"
            v-on:changeIcon="changeIcon"
          ></CategoryIcon>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-divider />
    <v-form v-model="form" ref="form">
      <v-layout
        fill-height
        my-3
        ml-3
        mr-1
        v-for="(stock, index) in category.stocks"
        :key="index"
        align-center
      >
        <v-flex ma-1>
          <v-text-field
            label="Ticker"
            :ref="stock.id"
            v-model="stock.ticker"
            :rules="[rules.length(4)]"
          ></v-text-field>
        </v-flex>
        <v-flex ma-1>
          <AllocationInput
            v-model="stock.allocation"
            v-on:tab="addStock(index)"
            :ref="`allocation_${stock.id}`"
          />
        </v-flex>
        <v-flex>
          <v-btn
            flat
            icon
            class="delete"
            :disabled="index == 0"
            v-on:click="remove(stock.id, index)"
          >
            <v-icon>delete_outline</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-card>
</template>

<script>
import AllocationInput from "../components/AllocationInput.vue";
import CategoryIcon from "../components/CategoryIcon.vue";
import { mapMutations } from "vuex";
export default {
  name: "CategoryStock",
  computed: {
    category() {
      return this.$store.getters.category(this.categoryId);
    }
  },
  methods: {
    ...mapMutations(["changeCategoryType"]),
    addStock(index) {
      if (index !== this.category.stocks.length - 1) {
        return;
      }
      let currectStock = this.category.stocks[index];
      let hasTicker = currectStock.ticker.length >= 4;
      if (!hasTicker) {
        event.preventDefault();
        return this.$refs[`${currectStock.id}`][0].focus();
      }
      let hasAllocation = currectStock.allocation > 0;
      if (!hasAllocation) {
        event.preventDefault();
        return this.$refs[`allocation_${currectStock.id}`].focus();
      }
      this.$store.dispatch("addStock", this.categoryId);
    },
    changeIcon(type) {
      this.$store.dispatch("changeCategoryType", {
        categoryId: this.categoryId,
        type
      });
    },
    remove(stockId, index) {
      // we cant remove the first one
      if (index > this.category.stocks.length - 1) {
        return;
      }
      this.$store.dispatch("removeStock", {
        categoryId: this.categoryId,
        stockId
      });
      let previous = this.category.stocks[index - 1];
      this.$nextTick(() =>
        this.$refs[`allocation_${previous.id}`][0].$refs["input"].focus()
      );
    }
  },
  data() {
    return {
      form: false,
      rules: {
        length: minLength => inputValue =>
          (inputValue || "").length >= minLength || `min ${minLength} chars`
      }
    };
  },
  mounted() {
    this.$refs[this.categoryId].focus();
  },
  props: ["categoryId"],
  components: { AllocationInput, CategoryIcon }
};
</script>
<style lang="scss">
.v-card__title {
  background-color: #e0f2f1;
}
.delete:hover {
  .v-icon {
    color: teal;
  }
}
</style>
