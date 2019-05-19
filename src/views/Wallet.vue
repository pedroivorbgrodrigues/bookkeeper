<template>
  <v-container>
    <v-layout row justify-center>
      <v-flex xs6>
        <v-form @submit.prevent="addCategory">
          <v-text-field
            solo
            label="Add new category"
            v-model="nameInput"
            append-icon="add"
          ></v-text-field>
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex xs4 v-for="category in categories" :key="category.name" px-1>
        <category-card v-bind:category="category" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CategoryCard from "../components/CategoryCard.vue";
import uuidv4 from "uuid/v4";

export default {
  methods: {
    addCategory() {
      if (this.nameInput.length == 0) {
        return;
      }
      this.categories.push({
        id: uuidv4(),
        name: this.nameInput,
        type: "fixedIncome",
        allocation: "1.00",
        stocks: [{ id: uuidv4(), ticker: "", allocation: "1.00" }]
      });
      this.nameInput = "";
    }
  },
  data() {
    return {
      nameInput: "",
      categories: []
    };
  },
  components: { CategoryCard }
};
</script>

<style></style>
